import React, { useState, useEffect } from 'react'
import './Crud.css'

const Crud = () => {

  const [name, setName] = useState([]);
  const [value, setValue] = useState("")

  const handleClick = (e) => {
    e.preventDefault();

    let nameObj = {
      id: new Date().getTime(),
      name: value
    }

    setName([...name].concat(nameObj))
    setValue("")
  }

  const handleDelete = (e, nameID) => {
    e.preventDefault();
    const newName = [...name].filter((names) => names.id !== nameID)
    setName(newName);
  }

  const handleEdit = () => {

  }

  return (
    <div>
      <form action="" className='formStyle'>
        <label htmlFor="name">Enter your name </label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>Submit</button>

      </form>
      {
        name.map((nameData, idx) => {
          return (
            <div className='resultData'>
              <li>{nameData.name}</li>
              <div className='btnGroup'>
                <button onClick={(e) => handleDelete(e, nameData.id)}>Delete</button>
                <button onClick={(e) => handleEdit(e, nameData.id)}>Edit</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Crud