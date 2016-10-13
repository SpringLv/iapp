import React from 'react';
import ReactDom from 'react-dom';
import SearchInput from './src/SearchInput.js';

import CityList from './src/CityList';
import { Router, Route, hashHistory } from 'react-router';
import Util from './src/Util';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={SearchInput}></Route>
        <Route path="/cityList" component={CityList}></Route>
    </Router>
    , document.getElementById("reactDom"));
export default Util;