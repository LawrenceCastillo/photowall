import {database} from '../Database/config'

export const startAddingPost = (post) => {
  return (dispatch) => {
    return database.ref('posts').update({[post.id]: post}).then(() => {
      dispatch(addedPost(post))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const removedPost = (index) => {
  return {
    type: 'REMOVED_POST',
    index: index,
  }
}

export function addedPost(post) {
  return {
    type: 'ADDED_POST',
    post: post,
  }
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment: comment,
    postId: postId
  }
}