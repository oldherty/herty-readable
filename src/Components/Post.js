import React from 'react'
import ThisPostComments from './ThisPostComments.js'

function Post(props) {
    return (
        <article className="post-container">
            <ul className="post-details">
                <li className="author-name">{props.author.name}</li>
                <li className="timestamp">{props.postTime}</li>
                <li className="post-category">{props.postCategory}</li>
            </ul>
            <section className="post-body">
                <h2 className="post-title">{props.postTitle}</h2>
                <p className="post-content">{props.postContent}</p>
            </section>
            <section className="post-comments">
                <ThisPostComments 
                    commentList={props.comments.filter(comment) => comment.postId === props.id)} 
                />
            </section>
            <button className="add-comment" onClick={props.addComment}>add comment</button>
        </article>
    )
}