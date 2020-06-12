import React from 'react';
import './App.css';
import './data.json'
import InputForm from './InputForm.js';
import ItemList from './ItemList.js';

function App() {
  const [data, setComments] = React.useState ({
    "comments": [
      {
        "id": 1,
        "author": "Lena",
        "content": "This task is so difficult",
        "show": true
      },
      {
        "id": 2,
        "author": "Sasha",
        "content": "I like this website",
        "show": true
      },
      {
        "id": 3,
        "author": "Paul",
        "content": "Crazyyyy!",
        "show": true
      }
    ]
  })

  function deleteItem(id) {
    setComments(
      data.comments.map(item => {
        if (item.id === id) {
          item.show = !item.show
        }
        return item
      })
    )
    console.log(data)
  }

  return (
    <main className="fixed-container d-flex justify-content-around m-auto">
      <ItemList
        data={data}
        deleteItem={deleteItem}
      />
      <InputForm />
    </main>
  );
}

export default App;
