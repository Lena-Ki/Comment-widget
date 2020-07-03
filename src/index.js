import React from 'react'
import {render} from 'react-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
