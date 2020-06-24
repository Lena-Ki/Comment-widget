import React, {useState} from 'react';

function InputForm({ data, setComments }) {

  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  
  const addComment = e => {
    e.preventDefault()
    
    setComments([
      ...data,
      {
        id: Date.now(),
        author: author,
        content: content,
      }
    ])

    setAuthor(''); setContent('')
  }

  return (
    <div className="input-form">
      <h2 className="h3 mb-5">Добавить новый комментарий</h2>
      <section>
        <form
        className="input-form__new-item bg-white h-100 px-5 pb-4"
        onSubmit={addComment}>
          <div className="form-group">
            <label className="mt-4 text-muted" htmlFor="new-item-author">* Автор</label>
            <input
              id="new-item-author"
              className="form-control bg-light"
              type="text"
              required
              value={author}
              onChange={e => setAuthor(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label className="mt-4 text-muted" htmlFor="new-item-text">* Текст комментария</label>
            <textarea
              id="new-item-text"
              className="form-control bg-light"
              name="description"
              value={content}
              onChange={e => setContent(e.target.value)}
            ></textarea>
          </div>
          <button id="submit" type="submit" className="btn btn-outline-secondary btn-lg mt-3">Добавить комментарий</button>
        </form>
      </section>
    </div>
  );
}

export default InputForm