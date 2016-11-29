import React from 'react';
import ReactDom from 'react-dom';
import SearchInput from './index/SearchInput.js';

//import { Router, Route, hashHistory } from 'react-router';
import Util from './index/Util';
import styles from './index/style.less';
ReactDOM.render(
    <div>
        <SearchInput></SearchInput>
    </div>,
    document.getElementById("reactDom"));
window.Util = Util;