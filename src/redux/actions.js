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