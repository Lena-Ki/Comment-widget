import React from 'react'

function Item({ commentData, deleteItem }) {
  return (
    <li className="list-group-item list-group-item-action list-item bg-white mb-3">
        <div className="d-flex w-100 justify-content-between align-items-start">
        <h5 className="item-name flex-fill p-1 text-break">
          {commentData.author}
        </h5>
        <button 
          className="delete-button bg-transparent mt-1"
          onClick={() => deleteItem(commentData.id)}
        ></button>
        <button className="display-button bg-transparent mt-1"></button>
        </div>
        <p className="item-text text-break p-1 text-muted border-top">
          {commentData.content}
        </p>
    </li>
  )
}

export default Item
