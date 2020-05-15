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
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
  }
  return (dispatch) => {
    return database.ref().update(updates).then(() => {
      dispatch(removedPost(index))
  }).catch((error) => {
    console.log(error)
  })
  }
}

export const startLoadingComments = () => {
  return (dispatch) => {
    return database.ref('comments').once('value').then((snapshot) => {
      let comments = {}
      snapshot.forEach((childSnapshot) => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val())
      })
      dispatch(loadedComments(comments))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const startAddingComment = (comment, postId) => {
  return (dispatch) => {
    return database.ref(`comments/${postId}`).push(comment).then(() => {
      dispatch(addedComment(comment, postId))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const loadedPosts = (posts) => {
  return {
    type: 'LOADED_POSTS',
    posts,
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

export const loadedComments = (comments) => {
  return {
    type: 'LOADED_COMMENTS',
    comments,
  }
}

export const addedComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    comment: comment,
    postId: postId,
  }
}

