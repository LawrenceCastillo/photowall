import {database} from '../Database/config'

export const startLoadingPosts = () => {
  return (dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      let posts = []
      snapshot.forEach((childSnapshot) => {
        posts.push(childSnapshot.val())
      })
      dispatch(loadedPosts(posts))
    })
  }
}

export const startAddingPost = (post) => {
  return (dispatch) => {
    return database.ref('posts').update({[post.id]: post}).then(() => {
      dispatch(addedPost(post))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const startRemovingPost = (index, id) => {
  return (dispatch) => {
    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removedPost(index))
    })
  }
}

export const loadedPosts = (posts) => {
  return {
    type: 'LOADED_POSTS',
    posts
  }
}

export const addedPost = (post) => {
  return {
    type: 'ADDED_POST',
    post: post,
  }
}

export const removedPost = (index) => {
  return {
    type: 'REMOVED_POST',
    index: index,
  }
}

export const addComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    comment: comment,
    postId: postId
  }
}

