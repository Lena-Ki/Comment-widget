import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchComments} from './redux/actions'
import './App.css';
import InputForm from './components/InputForm.js'
import ItemList from './components/ItemList.js'

class App extends Component {

  componentDidMount() {
    this.props.fetchComments()
  }

  render() {
    return (
      <main className="fixed-container d-flex justify-content-around m-auto">
        <ItemList/>
        <InputForm/>
      </main>
    )}
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
