import React from 'react';
import ReactDom from 'react-dom';
import SearchInput from './actions/SearchInput.js';

//import { Router, Route, hashHistory } from 'react-router';
import Util from './actions/Util';
import styles from './actions/style.less';
ReactDOM.render(
    <div>
        <SearchInput></SearchInput>
    </div>,
    document.getElementById("reactDom"));
window.Util = Util;