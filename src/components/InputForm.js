import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../redux/actions'

class InputForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      content: ''
    }
  }
  
  addComment = event => {
    event.preventDefault()
    const {author, content} = this.state

    let newPost = {
      id: Date.now(), author, content
    }

    this.props.createComment(newPost)
    this.setState({ author: '', content: '' })
  }

  changeHandler = event => {
    event.persist()
    this.setState( prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <div className="input-form">
        <h2 className="h3 mb-5">Добавить новый комментарий</h2>
        <section>
          <form
          className="input-form__new-item bg-white h-100 px-5 pb-4"
          onSubmit={this.addComment}
          >
            <div className="form-group">
              <label className="mt-4 text-muted" htmlFor="new-item-author">* Автор</label>
              <input
                id="new-item-author"
                className="form-control bg-light"
                type="text"
                required
                value={this.state.author}
                name="author"
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="form-group">
              <label className="mt-4 text-muted" htmlFor="new-item-text">* Текст комментария</label>
              <textarea
                id="new-item-text"
                className="form-control bg-light"
                name="description"
                value={this.state.content}
                name="content"
                onChange={this.changeHandler}
              ></textarea>
            </div>
            <button id="submit" type="submit" className="btn btn-outline-secondary btn-lg mt-3">Добавить комментарий</button>
          </form>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createComment
}

export default connect(null, mapDispatchToProps)(InputForm)