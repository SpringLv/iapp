import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import EmailSearch from './email/containers/EmailSearch';
import reducers from './email/reducers/EmailSearch'

const middleware = [thunk];
//middleware.push(createLogger());
//if (process.env.NODE_ENV !== 'production') {
//    middleware.push(createLogger());
//}

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <EmailSearch></EmailSearch>
    </Provider>,
    document.getElementById("reactDom"));