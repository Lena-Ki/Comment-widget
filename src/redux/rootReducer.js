import {CREATE_COMMENT, FETCH_COMMENTS, REMOVE_COMMENT} from './types'

const initialState = {
  comments: [],
  author: '',
  content: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      let newState = [...state.comments, action.payload]
      localStorage.setItem('comments', JSON.stringify(newState))
      return { ...state, comments: newState }
    case FETCH_COMMENTS:
      let data = localStorage.getItem('comments') || null
      return { ...state, comments: JSON.parse(data)}
    case REMOVE_COMMENT:
      let newComments = state.comments.filter(comment => {
        return comment.id !== action.payload
      })
      localStorage.setItem('comments', JSON.stringify(newComments))
      return { ...state, comments: newComments }
    default: return state
  }
}