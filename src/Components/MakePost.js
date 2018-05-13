import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../Actions'

class MakePost extends Component {

    state = {
        postMili: new Date().getTime(),
        title: "TEST CONTENT",
        author: "TEST CONTENT",
        category: "TEST CONTENT",
        body: "TEST CONTENT",
    }

    render() {
        const { dispatch, autoClose } = this.props
        return(
            <form className="make-post-form" onSubmit={e => {
                e.preventDefault()
                dispatch(addPost(this.state))
            }}>
                <label htmlFor="category">Select a category</label>
                <select name="category" className="post-cat-select" defaultValue="- none -">
                    <option>- none -</option>
                    <option>Crushing Despair</option>
                    <option>Intractable Apathy</option>
                    <option>Exploding Rage</option>
                    <option>Distracted Bemusement</option>
                </select>
                <input name="author" type="text" placeholder="Author Name" />
                <input name="title" type="text" placeholder="Post Title" />
                <input name="body" type="text" placeholder="Type your post here" />
                <button type="submit">Post your Post, Posty</button>
            </form>
        )
    }
}

export default connect()(MakePost)
