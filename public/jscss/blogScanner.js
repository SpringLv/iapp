import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
import Paper from './paper/containers/Paper'
import reducers from './paper/reducers/Paper'

const middleware = [thunk];
//if (process.env.NODE_ENV !== 'production') {
//    middleware.push(createLogger());
//}

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Paper></Paper>
    </Provider>,
    document.getElementById("reactDom"));

