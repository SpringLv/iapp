import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Tree from './tree/containers/MenuTree';
import MenuTree from './tree/reducers/MenuTree'

const middleware = [thunk];
//middleware.push(createLogger());
//if (process.env.NODE_ENV !== 'production') {
//    middleware.push(createLogger());
//}

const store = createStore(
    MenuTree,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Tree></Tree>
    </Provider>,
    document.getElementById("reactDom"));