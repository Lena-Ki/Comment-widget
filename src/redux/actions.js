import {CREATE_COMMENT, FETCH_COMMENTS, UPDATE_STORAGE, REMOVE_COMMENT} from './types'

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  }
}

export function fetchComments(data) {
  console.log(data)
  return {
    type: FETCH_COMMENTS,
    payload: data
  }
}

export function updateStorage(data) {
  return {
    type: UPDATE_STORAGE,
    payload: data
  }
}

export function removeComment(item) {
  return {
    type: REMOVE_COMMENT,
    payload: item.id
  }
}