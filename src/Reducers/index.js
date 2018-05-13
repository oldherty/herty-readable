// @flow

import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
} from '../Actions'
import { combineReducers } from 'redux'


/* Here's how to translate the milisecond date into a wordy version.
   This will be useful because you're using date as a unique ID.

    var d = new Date(1500500500500);

    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var mon = ["January", "February", "March", "April", "May", 
                  "June", "July", "August", "September", "October", "November", "December"];

    var wordyDate = day[d.getDay()]+" "+mon[d.getMonth()]+" "+d.getDay()+", "+d.getFullYear();
*/


const initialPosts = {
    posts: [
        {
            postMili: 1500500500500,
            postTitle: "Welcome to Herty's Free-For-All!!",
            postAuthor: "Herty",
            postCategory: "About this app",
            postContent: "This is a tottttally useless demo of thing for post stuff. POW",
            postVotes: 0,
        }
    ],
    categories: ["About this app"],
}

const initialComments = [
    {
        commentMili: 1511511511511,
        postId: 1500500500500,
        commentAuthor: "Herty",
        commentContent: "My own post really sucks. Dislike!",
        commentVotes: 0,
    }
]

function postsAndCats(pcState = initialPosts, action) {
    const { postMili, title, author, category, body } = action
    const actionPost = {
        postMili: postMili,
        postTitle: title,
        postAuthor: author,
        postCategory: category,
        postContent: body,
        postVotes: 0,
    }
    switch(action.type) {
        case ADD_POST:
            pcState.posts.push(actionPost)
            pcState.categories.indexOf(actionPost.postCategory) === -1 && pcState.categories.push(actionPost.postCategory)
            return pcState
        case EDIT_POST:
            const matchingPostIndex = pcState.posts.findIndex(item => item.postMili === actionPost.postMili)
            pcState.posts[matchingPostIndex] = actionPost
            return pcState
        case DELETE_POST:
            pcState.posts = pcState.posts.filter(item => item.postMili !== actionPost.postMili)
            return pcState
        default:
            return pcState
    }
}

function comments(cmState = initialComments, action) {
    const { comment } = action
    switch(action.type) {
        case ADD_COMMENT:
            cmState.comments.push(comment)
            return cmState
        case EDIT_COMMENT:
            const matchingCommentIndex = cmState.comments.findIndex(item => item.commentMili === comment.commentMili)
            cmState.comments[matchingCommentIndex] = comment
            return cmState
        case DELETE_COMMENT:
            cmState.comments = cmState.comments.filter(item => item.commentMili !== comment.commentMili)
            return cmState
        default:
            return cmState
    }
}

const rootReducer = combineReducers({
    postsAndCats,
    comments,
})

export default rootReducer