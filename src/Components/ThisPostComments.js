import React from 'react'
import Comment from './Comment.js'

function ThisPostComments(props) {
    const { commentList } = props
    return (
        <div className="comment-list-container">
            {commentList.map( (thisComment) => (
                <Comment 
                    key={thisComment.commentMili} 
                    commentText={thisComment.commentContent} 
                    authorName={thisComment.commentAuthor} 
                    commentTime={thisComment.commentMili} 
                />
            ))}
        </div>
    )
}

export default ThisPostComments