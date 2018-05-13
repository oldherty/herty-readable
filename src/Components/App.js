import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { addPost } from '../Actions'
// import serializeForm from 'form-serialize'

import logo from '../logo.svg';
import '../App.css';

import SomePosts from './SomePosts'
import MakePost from './MakePost'


class App extends Component {

/* Groan this is the 'Vanilla Redux' stuff
    state = {
        posts: [],
        comments: [],
        categories: [],
    }
    componentDidMount() {
        const { store } = this.props
        store.subscribe( () => {
            this.setState( () => ({
                posts: store.getState()
                comments: store.getState()
                categories: store.getState()
            }) )
        } )
    }

    submitPost = () => {
        this.props.store.dispatch( addPost({
            title: this.input.value,
            author: this.input.value,
            category: this.input.value,
            body: this.input.value,
            postMili: new Date().getTime(),
        }) )
    }
*/
// HEY SO THIS THING I'M NOT USING RIGHT NOW BUT MAYBE I WILL
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const values = serializeForm(e.target, { hash: true })
    //     if (this.props.onMakePost) {
    //         this.props.onMakePost(values)
    //     } else if (this.props.onMakeComment) {
    //         this.props.onMakeComment(values)
    //     }
    // }
//

    state = {
        addEntryModalOpen: false,
        addAPost: {
            postMili: new Date().getTime(),
            title: "TEST CONTENT",
            author: "TEST CONTENT",
            category: "TEST CONTENT",
            body: "TEST CONTENT",
        }
    }

    openAddPostModal = () => {
        this.setState(() => ({
            addEntryModalOpen: true,
        }))
    }
    closeAddPostModal = () => {
        this.setState(() => ({
            addEntryModalOpen: false,
        }))
    }
    componentWillMount() {
        Modal.setAppElement('body');
    }
        // postValueUpdate = (value, thingToChange) => {
        //     const addThatPost = this.addAPost
        //     console.log(addThatPost)
        // }
    render() {

        const { addEntryModalOpen, addAPost } = this.state
        const { store, dispatch } = this.props
        const dummyPost = (date) => ({
            postMili: date,
            title: addAPost.title,
            author: addAPost.author,
            category: addAPost.category,
            body: addAPost.body,
        })
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Crumle Before the Awesome Might of Herty's Free-For-All</h1>
                </header>
                <SomePosts store={store} />
                <button className='postadd-button' onClick={this.openAddPostModal}>Add a post</button>
                <Modal className='modal' overlayClassName='overlay' contentLabel='Modal'
                    isOpen={addEntryModalOpen}
                    onRequestClose={this.closeAddPostModal}
                >
                    <MakePost autoClose={this.closeAddPostModal} />
                    <button onClick={this.closeAddPostModal}>Closeit</button>
                </Modal>
            </div>
        )

      }
}

function mapStateToProps(store) { return {store} }

export default connect(
    mapStateToProps,
)(App)

/*

                    <div>Hey Look At Me</div>
                    <button onClick={() => {
                        postAdd(dummyPost)
                        this.closeAddPostModal()
                    }}>Add a test post</button>



*/
