import React from 'react';

function InputForm() {
  return (
    <div className="input-form">
      <h2 className="h3 mb-5">Добавить новый комментарий</h2>
      <section>
        <form className="input-form__new-item bg-white h-100 px-5 pb-4">
          <div className="form-group">
            <label className="mt-4 text-muted" htmlFor="new-item-author">* Автор</label>
            <input id="new-item-author" className="form-control bg-light" type="text" required></input>
          </div>
          <div className="form-group">
            <label className="mt-4 text-muted" htmlFor="new-item-text">* Текст комментария</label>
            <textarea id="new-item-text" className="form-control bg-light" name="description"></textarea>
          </div>
          <button id="submit" type="submit" className="btn btn-outline-secondary btn-lg mt-3">Добавить комментарий</button>
        </form>
      </section>
    </div>
  );
}

export default InputForm