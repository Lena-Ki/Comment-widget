import React, {useContext} from 'react'
import {Context} from '../context'

function Item({ author, id, content, deleteItem }) {

  const {removeComment} = useContext(Context)

  return (
    <li className="list-group-item list-group-item-action list-item bg-white mb-3">
      <div className="d-flex w-100 justify-content-between align-items-start">
        <h5 className="item-name flex-fill p-1 text-break">
          {author}
        </h5>
        <i className="mr-2">
          {new Date().toLocaleDateString()}
          &nbsp;
          {new Date().getHours()}:{new Date().getMinutes()}
        </i>
        <button 
          className="delete-button bg-transparent mt-1"
          onClick={() => removeComment(id)}
        ></button>
      </div>
      <p className="item-text text-break p-1 text-muted border-top">
        {content}
      </p>
    </li>
  )
}

export default Item
