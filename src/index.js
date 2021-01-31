import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import produce from 'immer'



const initialState = {
  loading: false,
  post: [],
  err: null,
  nomination: []
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'FETCH_POST_BEGINS':
      draft.loading = action.loading
      return
    case 'FETCH_POST_SUCCESS':
      draft.loading = false
      draft.post = action.post
      return
    case 'FETCH_POST_ERROR':
      draft.err = action.err
      return
    case 'ADD_NOMINATION':
      draft.nomination = [...draft.nomination, action.nomination]
      return
    case 'DELETE_NOMINATION':
      const copy = [...draft.nomination];
      draft.nomination.filter((movie, index) => {
        if (action.id === index) {
          copy.splice(action.id, 1)
          return draft.nomination = copy
        }
      })
      return
    default:
      return initialState
  }
}, initialState)

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log(store.getState())
