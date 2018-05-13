export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


// Post Actions
export function addPost({ postMili, title, author, category, body }) {
    return {
        type: ADD_POST,
        postMili,
        title,
        author,
        category,
        body,
    }
}
export function editPost({ postMili, title, author, category, body }) {
    return {
        type: EDIT_POST,
        postMili,
        title,
        author,
        category,
        body,
    }
}
export function deletePost({ postMili }) {
    return {
        type: DELETE_POST,
        postMili,
    }
}


// Comment Actions
export function addComment({ author, body, postMili }) {
    return {
        type: ADD_COMMENT,
        author, 
        body,
        postMili,
    }
}
export function editComment({  author, body, postMili  }) {
    return {
        type: ADD_COMMENT,
        author, 
        body,
        postMili,
    }
}
export function deleteComment({ commentMili }) {
    return {
        type: DELETE_COMMENT,
        commentMili,
    }
}
