import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Post from './Post'

const SomePosts = ({store}) => (
    <div>
        {store.postsAndCats.posts.map( (post) => (
            <Post
                key={post.postMili}
                post={post} 
                comments={store.comments}
            />
        ) )}
    </div>
)

SomePosts.propTypes = {
    store: PropTypes.object.isRequired
}

export default SomePosts