import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function TodoForm(props) {
  console.log(props.todoDefault, 'hello todoForm')

  return (
    <div className="container">
      <h4>This is my To Do List</h4>
      {props.todoDefault.map((newList, index) => (
        <div
          key={index}
          style={{
            borderColor: 'gray',
            borderStyle: 'dashed',
            marginTop: '1%',
            width: '60%',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          <ul>
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginRight: '45%',
                marginBottom: '-1%',
                marginTop: '1%',
              }}
            >
              <p>
                <b>To do:</b> {newList.task}
              </p>
              <p>
                <b>When:</b> {newList.date}
              </p>

              <input
                className="btn btn-danger"
                type="button"
                value="Remove"
                onClick={props.handleRemoveInput}
                style={{
                  marginLeft: '5%',
                }}
              />
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TodoForm
