import React from 'react';
import ReactDom from 'react-dom';
import SearchInput from './index/SearchInput.js';

import CityList from './index/CityList';
import { Router, Route, hashHistory } from 'react-router';
import Util from './index/Util';
import styles from '../../static/style.scss';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={SearchInput}></Route>
        <Route path="/cityList" component={CityList}></Route>
    </Router>
    , document.getElementById("reactDom"));
window.Util = Util;