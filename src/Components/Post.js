import React from 'react'
import PropTypes from 'prop-types'

import ThisPostComments from './ThisPostComments'

const Post = ({post, comments}) => (
    <article className="post-container">
        <ul className="post-details">
            <li className="author-name">A post by {post.postAuthor}</li>
            <li className="timestamp">Unhelpful TimeStamp: {post.postMili}</li>
            <li className="post-category">This post's category: {post.postCategory}</li>
        </ul>
        <section className="post-body">
            <h2 className="post-title"> WOW {post.postTitle}</h2>
            <p className="post-content">{post.postContent}</p>
        </section>
        <section className="post-comments">
            <ThisPostComments 
                commentList={ comments.filter( (comment) => comment.postId === post.postMili ) } 
            />
        </section>
    </article>
)

Post.propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
}

export default Post

/*

            <button 
                className="add-comment" 
                onClick={props.addComment}
            >Add Comment
            </button>


*/