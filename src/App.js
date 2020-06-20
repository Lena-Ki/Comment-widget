import React, {useState, useEffect} from 'react';
import './App.css';
import {Context} from './context'
// import './data.json'
import InputForm from './components/InputForm.js';
import {ItemList} from './components/ItemList.js';

function App() {
  
  let [data, setComments] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('comments') || null
    if (raw) {
      setComments(JSON.parse(raw))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(data))
  }, [data])

  const removeComment = id => {
    setComments(data.filter(comment => {
      return comment.id !== id
    }))
  }

  return (
    <Context.Provider value={{
      removeComment
    }}>
      <main className="fixed-container d-flex justify-content-around m-auto">
        <ItemList
          data = {data}
        />
        <InputForm
          data = {data}
          setComments = {setComments}
        />
      </main>
    </Context.Provider>
  );
}

export default App;
