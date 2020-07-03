import {CREATE_COMMENT, FETCH_COMMENTS, REMOVE_COMMENT} from './types'

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  }
}

export function fetchComments() {
  return {
    type: FETCH_COMMENTS
  }
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id
  }
}