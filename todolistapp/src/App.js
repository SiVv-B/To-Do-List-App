import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import TodoForm from './Components/TodoForm'

function App() {
  //My default list
  const [todoDefault, setTodoDefault] = useState([
    {
      task: 'default task',
      date: 'default date',
    },
  ])
  //Objects that I will add in my default list
  const [newValue, setNewValue] = useState({ task: '', date: '' })

  //read the input
  const handleChange = (event) => {
    setNewValue({ ...newValue, [event.target.id]: event.target.value })
  }
  console.log(newValue)

  //Add TodoList from the input
  const onSubmit = (event) => {
    event.preventDefault()
    console.log('onSubmit is working')
    console.log('new task added in console')
    setTodoDefault([...todoDefault, newValue])
    setNewValue({ task: '', date: '' })
  }

  //Delete TodoList
  const handleRemoveInput = (index) => {
    const list = [...todoDefault]
    list.splice(index, 1)
    setTodoDefault(list)
  }

  return (
    <div className="container">
      <div
        style={{
          marginTop: '1%',
          marginBottom: '3%',
          marginLeft: '1%',
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <h3>Add to to Do list</h3>
        <form
          onSubmit={onSubmit}
          style={{
            marginLeft: '1%',
          }}
        >
          <input
            id="task"
            name="task"
            type="text"
            placeholder="What do you want to do?   "
            onChange={handleChange}
            value={newValue.task}
            style={{
              marginRight: '3%',
            }}
          />
          <input
            id="date"
            name="date"
            type="date"
            placeholder="  When do you want to do?"
            onChange={handleChange}
            value={newValue.date}
            style={{
              marginRight: '3%',
            }}
          />
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
      <div className="add new task">
        <TodoForm
          todoDefault={todoDefault}
          handleRemoveInput={handleRemoveInput}
        />
      </div>
    </div>
  )
}

export default App
