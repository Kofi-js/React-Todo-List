import React from 'react'

export default function TodoCard(props) {
  const {children, toDeleteTodo, index, toEditTodo} = props
  return (
       <li className='todoItem'>
        {children}
          <div className='actionsContainer'>
            <button onClick={() => {
              toEditTodo(index)
            }}>
              <i className="fa-solid fa-pen-to-square"></i>
              </button>
            <button onClick={() => {
              toDeleteTodo(index)
            }}>
              <i class="fa-regular fa-trash-can"></i>
              </button>
          </div>
     </li>
  )
}
