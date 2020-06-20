import React from 'react';
import Item from './Item';

export const ItemList = ({data}) => {

  const showMessage = () => {
    if (data.length === 0) {
      return <div className="empty-list p-4 text-muted border-top border-light">Список пуст</div>
    }
  }

  return (
    <section className="to-do-list d-flex flex-column justify-content-start">
      <h2 className="mb-5 h3">Комментарии</h2>
      <ul className="list-group">
        { showMessage() }
        { data.map( item => {
          return <Item
                    key={item.id}
                    {...item}
                 />
        }) }

      </ul>
    </section>  
  )
}
