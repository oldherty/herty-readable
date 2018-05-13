import React from 'react'

function Comment(props) {
    return (
        <div className="comment-container">
            <p className="comment-text">{props.commentText}</p>
            <ul className="comment-details">
                <li className="author-name">{props.authorName}</li>
                <li className="timestamp">{props.commentTime}</li>
            </ul>
            <button className="comment-edit" onClick={props.editComment}>edit</button>
        </div>
    )
}

export default Comment