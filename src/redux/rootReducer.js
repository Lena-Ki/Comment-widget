import {CREATE_COMMENT, FETCH_COMMENTS, UPDATE_STORAGE, REMOVE_COMMENT} from './types'

const initialState = {
  comments: [],
  author: '',
  content: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload}
    case UPDATE_STORAGE:
      return state
    case REMOVE_COMMENT:
      console.log(action.payload)
      return { ...state, comments: state.comments.filter(comment => {
        return comment.id !== action.payload
      })}
    default: return state
  }
}