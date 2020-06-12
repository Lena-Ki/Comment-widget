import React from 'react';
import Item from './Item';

function ItemList({data, deleteItem}) {
  console.log(data)
  return (
    <section className="to-do-list d-flex flex-column justify-content-start">
      <h2 className="mb-5 h3">Комментарии</h2>
      <ul className="list-group">
        <div className="empty-list p-4 text-muted border-top border-light">Список пуст</div>
        { data.comments.map( item => {
          return <Item
                    commentData={item}
                    key={item.id}
                    deleteItem={deleteItem}
                 />
        }) }

      </ul>
    </section>  
  )
}

export default ItemList
