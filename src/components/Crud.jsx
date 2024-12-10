import React, { useState, useEffect } from 'react'
import './Crud.css'

const Crud = () => {

  const [name, setName] = useState([]);
  const [value, setValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("")

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

  const handleEdit = (namedIdx) => {
    const updatedNames = [...name].map((item) => {
      if (item.id === namedIdx) {
        item.name = editedName
      }
      return item;
    })

    setName(updatedNames);
    setEditedName("");
    setEditingId(null)
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

              {editingId === nameData.id ?
                (<input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />)
                :
                (<li>{nameData.name}</li>)
              }

              <div className='btnGroup'>

                <button onClick={(e) => handleDelete(e, nameData.id)}>Delete</button>
                {
                  editingId === nameData.id ?
                    (<button onClick={() => handleEdit(nameData.id)}>Submit Edit</button>)
                    :
                    (<button onClick={() => { setEditingId(nameData.id); setEditedName(nameData.name); }}>Edit</button>)
                }
              </div>

            </div>
          )
        })
      }
    </div >
  )
}

export default Crud