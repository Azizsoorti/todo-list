import React, { useState } from 'react'

const ToDoList = () => {

  const [input, setInput] = useState();
  const [items, setItems] = useState([]);

  const print = () => {
    let newItem = [...items, input];
    setItems(newItem)
    setInput("")
  }
  return (
    <div className="container-fluid p-5  bg-dark" style={{ minHeight: "100vh" }}>
      <div className="container text-center" >
        <h2 className='fw-bold fs-1 pt-4' style={{
          color: "#ff7000"
        }}>Todo list</h2>


        <input style={{ width: "14rem" }} className='my-5 bg-dark shadow-lg border border-0 p-2 rounded text-white' placeholder='Enter your tast' type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button className='my-5  shadow-lg border border-0 px-4 py-2 rounded ms-2 ' type="submit" onClick={print} style={{ backgroundColor: "#A8DCFA" }} >Add </button>


        {items.length > 0 ? <div className='m-auto rounded  ' style={{ width: "26rem", border: "2px solid white" }}>
          {items.map((data) => {
            return (
              <div>
                <p className='text-white text-start px-3 py-3 '>{data}  </p>
                <hr style={{ border: "1px solid white", margin: "0", width: "24rem", margin: "auto" }} />
              </div>
            )
          })}

        </div>
          :
          <div>
            <img className='mb-5 pb-4' src="./images/TODo list.svg" alt="" style={{ width: "22rem" }} />
          </div>}





      </div>

    </div>
  );
}

export default ToDoList





