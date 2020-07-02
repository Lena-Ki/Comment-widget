import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchComments} from './redux/actions'
import './App.css';
import InputForm from './components/InputForm.js'
import ItemList from './components/ItemList.js'

function App({comments}) {

  useEffect(() => {
    const raw = localStorage.getItem('comments') || null
    fetchComments(raw)

    // if (raw) {
    //   setComments(JSON.parse(raw))
    // }
  }, [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  return (
    <main className="fixed-container d-flex justify-content-around m-auto">
      <ItemList/>
      <InputForm/>
    </main>
  );
}

const mapDispatchToProps = {
  fetchComments
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
