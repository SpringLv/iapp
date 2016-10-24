import React from 'react';
import ReactDom from 'react-dom';
import SearchInput from './index/SearchInput.js';

import CityList from './index/CityList';
//import { Router, Route, hashHistory } from 'react-router';
import Util from './index/Util';
import styles from '../static/style.scss';
ReactDOM.render(
    <div>
        <SearchInput></SearchInput>
        <CityList></CityList>
    </div>
    , document.getElementById("reactDom"));
window.Util = Util;