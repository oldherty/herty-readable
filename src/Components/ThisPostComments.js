import React from 'react'
import Comment from './Comment.js'

function ThisPostComments(props) {
    return (
        <div className="comment-list-container">
            {props.commentList.map( (thisComment) => (
                <Comment 
                    key={thisComment.id} 
                    commentText={thisComment.text} 
                    authorName={thisComment.author} 
                    commentTime={thisComment.time} 
                />
            ))}
        </div>
    )
}

export default ThisPostComments