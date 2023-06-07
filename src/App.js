import React, { Fragment, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { jsonData } from './jsondata'
import "./index.css"

function App() {
  const [serachLetter,setsearchLetter]= useState("");
  return (
    <div className='container text-center'>
      <div class="input-group mb-3">
        <input type="text" class="form-control mx-auto my-3 inpEdit" placeholder="Search..." onChange={event =>{setsearchLetter(event.target.value)}}/>
      </div>
      {jsonData.filter((val) => {
        if(serachLetter === "")
        return val;
        else if (val.name.toLowerCase().includes(serachLetter.toLowerCase()))
          return val;
      }).map(a => {
        return (
          <div>
            <p>{a.name}</p>
          </div>
        );
      })
      }
    </div>

  )
}

export default App