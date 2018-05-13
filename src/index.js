// npm install --save escape-string-regexp 
// npm install --save sort-by
// npm install --save prop-types
// npm install --save react-router-dom
// npm install --save form-serialize
// npm install --save react-redux

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import './index.css'
import App from './Components/App'
// import SomePosts from './Components/SomePosts'
import rootReducer from './Reducers'
import registerServiceWorker from './registerServiceWorker'

const reduxStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>, document.getElementById('root')
)
registerServiceWorker()
