import React from 'react'
import {connect} from 'react-redux'
import Item from './Item'

const ItemList = ({comments}) => {
  const showMessage = () => {
    if (!comments.length) {
      return <div className="empty-list p-4 text-muted border-top border-light">Список пуст</div>
    }
  }

  return (
    <section className="to-do-list d-flex flex-column justify-content-start">
      <h2 className="mb-5 h3">Комментарии</h2>
      <ul className="list-group">
        { showMessage() }
        { comments.map( item => {
          return <Item
                    key={item.id}
                    {...item}
                 />
        }) }
      </ul>
    </section>  
  )
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
} 

export default connect(mapStateToProps, null)(ItemList)
