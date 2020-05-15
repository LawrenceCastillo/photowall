import {combineReducers} from 'redux'

const commentReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOADED_COMMENTS': return action.comments
    case 'ADD_COMMENT': 
      if (!state[action.postId]) {
        return {...state, [action.postId]: [action.comment]}
      } else {
        return {...state, [action.postId]: [...state[action.postId], action.comment]}
      }
    default: return state
  }
}

const postReducer = (state=[], action) => {
  switch (action.type) {
    case 'LOADED_POSTS': return action.posts
    case 'REMOVED_POST': return [...state.slice(0, action.index), ...state.slice(action.index+1)]
    case 'ADDED_POST': return [...state, action.post]
    default: return state
  }
}

const rootReducer = combineReducers({postReducer, commentReducer})

export default rootReducer;