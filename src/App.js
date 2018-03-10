import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        if (this.props.onMakePost) {
            this.props.onMakePost(values)
        } else if (this.props.onMakeComment) {
            this.props.onMakeComment(values)
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
      }
}

export default App;

// @flow