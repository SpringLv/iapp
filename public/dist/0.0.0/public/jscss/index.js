/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ReactDOM) {'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _SearchInput = __webpack_require__(3);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _style = __webpack_require__(10);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import { Router, Route, hashHistory } from 'react-router';
	ReactDOM.render(_react2.default.createElement(_SearchInput2.default, null), document.getElementById("reactDom"));
	window.Util = _Util2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SearchList = __webpack_require__(4);

	var _SearchList2 = _interopRequireDefault(_SearchList);

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _Department = __webpack_require__(6);

	var _Department2 = _interopRequireDefault(_Department);

	var _BossList = __webpack_require__(7);

	var _BossList2 = _interopRequireDefault(_BossList);

	var _CityList = __webpack_require__(9);

	var _CityList2 = _interopRequireDefault(_CityList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchInput = function (_React$Component) {
	    _inherits(SearchInput, _React$Component);

	    function SearchInput(props) {
	        _classCallCheck(this, SearchInput);

	        var _this = _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this, props));

	        _this.state = {
	            value: 'Hello!',
	            cityName: "选择",
	            disable: false,
	            cityListDisable: true
	        };
	        return _this;
	    }

	    _createClass(SearchInput, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                        'div',
	                        { className: 'app-row' },
	                        React.createElement(
	                            'div',
	                            { className: 'app-flex-3' },
	                            React.createElement(
	                                'div',
	                                { onClick: this.handleCityList.bind(this), id: 'cityName' },
	                                this.state.cityName
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'app-flex-7' },
	                            React.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                React.createElement('input', { type: 'text', className: 'form-control',
	                                    onInput: this.handleChange.bind(this), id: 'searchInput',
	                                    placeholder: '\u641C\u7D22' })
	                            )
	                        )
	                    )
	                ),
	                this.state.disable ? React.createElement(
	                    'div',
	                    { className: 'table-box' },
	                    React.createElement(_SearchList2.default, { id: 'searchList', value: this.state.value })
	                ) : "",
	                SearchInput.maskAndPosition(this.state.disable ? true : false),
	                React.createElement(_Department2.default, { ref: 'deptList' }),
	                React.createElement(_BossList2.default, { ref: 'bossList' }),
	                React.createElement(_CityList2.default, { ref: 'cityList', parentDom: this })
	            );
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange() {
	            this.setState({ value: event.target.value });
	            if (event.target.value == "") {
	                this.setState({ disable: false });
	            } else {
	                this.setState({ disable: true });
	            }
	        }
	    }, {
	        key: 'handleCityList',
	        value: function handleCityList() {
	            var _this2 = this;

	            $.getJSON('/list', function (res) {
	                _this2.refs.cityList.setState({ list: res.data });
	                _this2.refs.deptList.refs.list.className = "dom-hide";
	                _this2.refs.bossList.refs.list.className = "dom-hide";
	            });
	        }
	    }], [{
	        key: 'maskAndPosition',
	        value: function maskAndPosition(flag) {
	            if (flag) {
	                $(".mask").removeClass("dom-hide");
	                $(".app-flex-3").addClass("dom-hide");
	                $(".department-list").addClass("dom-hide");
	                $(".boss-list").addClass("dom-hide");
	                $(".loading-more-box").addClass("dom-hide");
	            } else {
	                $(".mask").addClass("dom-hide");
	                $(".app-flex-3").removeClass("dom-hide");
	                $(".department-list").removeClass("dom-hide");
	                $(".boss-list").removeClass("dom-hide");
	                $(".loading-more-box").removeClass("dom-hide");
	            }
	        }
	    }]);

	    return SearchInput;
	}(React.Component);

	exports.default = SearchInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchList = function (_React$Component) {
	    _inherits(SearchList, _React$Component);

	    function SearchList(props) {
	        _classCallCheck(this, SearchList);

	        var _this = _possibleConstructorReturn(this, (SearchList.__proto__ || Object.getPrototypeOf(SearchList)).call(this, props));

	        _this.state = {
	            list: null,
	            loading: false
	        };
	        return _this;
	    }

	    _createClass(SearchList, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _this2 = this;

	            this.setState({ loading: true });
	            $.getJSON('/searchList', function (res) {
	                _this2.setState({ list: res.data });
	                _this2.setState({ loading: false });
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (this.state.list) {
	                var TempList = [];
	                var list = this.state.list;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;

	                        var index = item.name.indexOf(this.props.value);
	                        var len = this.props.value.length;
	                        if (this.props.value && index > -1) {
	                            TempList.push(React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    item.name.substring(0, index),
	                                    React.createElement(
	                                        "span",
	                                        { className: "app-color-blue" },
	                                        this.props.value
	                                    ),
	                                    item.name.substring(index + len)
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    item.age
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    item.code
	                                )
	                            ));
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                if (TempList.length) return React.createElement(
	                    "table",
	                    { className: "table" },
	                    React.createElement(
	                        "thead",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                null,
	                                "Name"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Age"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Code"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "tbody",
	                        null,
	                        TempList
	                    )
	                );
	            }
	            if (this.state.loading) {
	                return React.createElement(
	                    "div",
	                    { className: "search-state" },
	                    "\u6B63\u5728\u641C\u7D22..."
	                );
	            } else {
	                return React.createElement(
	                    "div",
	                    { className: "search-state" },
	                    "\u627E\u4E0D\u5230\u4E86..."
	                );
	            }
	        }
	    }]);

	    return SearchList;
	}(React.Component);

	exports.default = SearchList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Util = {};
	Util.GetQueryString = function (name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return unescape(r[2]);
	    return null;
	};
	Util.PUB_STATUS = {
	    CITY: {
	        cityName: null,
	        cityCode: null
	    }
	};
	Util.MOVEPOINT = {
	    START: 0,
	    END: 0,
	    INTERVAL: 0
	};
	Util.BOSSLIST_DATA = [];
	Util.TIMER = null;
	exports.default = Util;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Department = function (_React$Component) {
	    _inherits(Department, _React$Component);

	    function Department(props) {
	        _classCallCheck(this, Department);

	        var _this = _possibleConstructorReturn(this, (Department.__proto__ || Object.getPrototypeOf(Department)).call(this, props));

	        _this.state = {
	            list: []
	        };
	        return _this;
	    }

	    _createClass(Department, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _this2 = this;

	            $.getJSON('/deptList').then(function (res) {
	                _this2.setState({ list: res.data });
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (this.state.list) {
	                var tempList = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = this.state.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;

	                        tempList.push(React.createElement(
	                            "li",
	                            null,
	                            React.createElement("img", { src: "/images/1.jpg", width: "80%" }),
	                            React.createElement("br", null),
	                            item.deptName
	                        ));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                return React.createElement(
	                    "div",
	                    { ref: "list" },
	                    React.createElement(
	                        "div",
	                        { className: "department-list" },
	                        React.createElement(
	                            "div",
	                            { className: "list-title" },
	                            "\u5206\u7C7B"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            tempList
	                        )
	                    )
	                );
	            }
	            return React.createElement("div", null);
	        }
	    }]);

	    return Department;
	}(React.Component);

	exports.default = Department;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	var _ScrollTouch = __webpack_require__(8);

	var _ScrollTouch2 = _interopRequireDefault(_ScrollTouch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BossList = function (_React$Component) {
	    _inherits(BossList, _React$Component);

	    function BossList(props) {
	        _classCallCheck(this, BossList);

	        var _this = _possibleConstructorReturn(this, (BossList.__proto__ || Object.getPrototypeOf(BossList)).call(this, props));

	        _this.state = {
	            list: [],
	            pageNumber: 0
	        };
	        return _this;
	    }

	    _createClass(BossList, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            window.addEventListener("hashchange", function () {
	                _Util2.default.BOSSLIST_DATA = [];
	                _this2.setState({ list: [], pageNumber: 0 });
	            }, false);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.addPager();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.list) {
	                var tempList = [];
	                var emp = void 0;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = this.state.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;

	                        emp = React.createElement(
	                            'li',
	                            { className: 'boss-item' },
	                            React.createElement(
	                                'div',
	                                { className: 'boss-img-box' },
	                                React.createElement('img', { src: '/images/2.jpg', width: '90px' })
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'boss-name-des' },
	                                React.createElement(
	                                    'span',
	                                    { className: 'boss-name' },
	                                    item.bossName
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'boss-des' },
	                                    item.des
	                                )
	                            )
	                        );
	                        tempList.push(emp);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                return React.createElement(
	                    'div',
	                    { ref: 'list' },
	                    React.createElement(
	                        'div',
	                        { className: 'boss-list' },
	                        React.createElement(
	                            'div',
	                            { className: 'list-title' },
	                            'BOSS'
	                        ),
	                        React.createElement(
	                            'ul',
	                            null,
	                            tempList
	                        )
	                    ),
	                    React.createElement(_ScrollTouch2.default, { todo: this.addPager.bind(this) })
	                );
	            }
	            return React.createElement('div', null);
	        }
	    }, {
	        key: 'addPager',
	        value: function addPager(childrenDom) {
	            var _this3 = this;

	            if (this.state.pageNumber > 5) {
	                childrenDom && (childrenDom.innerHTML = "就这么多了，亲~");
	                return;
	            }
	            $.getJSON('/bossList?page=' + ++this.state.pageNumber).then(function (res) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = res.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var item = _step2.value;

	                        _Util2.default.BOSSLIST_DATA.push(item);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                _this3.setState({ list: _Util2.default.BOSSLIST_DATA, pageNumber: _this3.state.pageNumber });
	                childrenDom && (childrenDom.innerHTML = "下拉加载");
	            });
	        }
	    }]);

	    return BossList;
	}(React.Component);

	exports.default = BossList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScrollTouch = function (_React$Component) {
	    _inherits(ScrollTouch, _React$Component);

	    function ScrollTouch(props) {
	        _classCallCheck(this, ScrollTouch);

	        var _this2 = _possibleConstructorReturn(this, (ScrollTouch.__proto__ || Object.getPrototypeOf(ScrollTouch)).call(this, props));

	        _this2.state = {
	            load: _this2.um().starting
	        };
	        return _this2;
	    }

	    _createClass(ScrollTouch, [{
	        key: "um",
	        value: function um() {
	            return {
	                "nothing": "就这么了",
	                "loading": "加载中",
	                "starting": "下拉加载"
	            };
	        }
	    }, {
	        key: "checkScroll",
	        value: function checkScroll(callback) {

	            _Util2.default.MOVEPOINT.END = (event.touches[0] || event.changedTouches[0]).clientY;
	            var y = _Util2.default.MOVEPOINT.START - _Util2.default.MOVEPOINT.END;
	            var totalHeight = document.scrollingElement.scrollHeight;
	            var domHeight = window.screen.height;
	            var scrollHeight = document.scrollingElement.scrollTop;
	            if (y >= 20 && scrollHeight + domHeight >= totalHeight) {
	                this.setState({ load: this.um().loading });
	                var now = new Date().getTime();
	                if (now - _Util2.default.MOVEPOINT.INTERVAL < 700) return;
	                _Util2.default.MOVEPOINT.INTERVAL = now;
	                callback && callback(this.refs.loadingMoreBox);
	            } else {
	                //this.setState({load: this.um().starting});
	            }
	        }
	    }, {
	        key: "touchScroll",
	        value: function touchScroll() {
	            var event = event || window.event;
	            switch (event.type) {
	                case 'touchstart':
	                    _Util2.default.MOVEPOINT.START = (event.touches[0] || event.changedTouches[0]).clientY;
	                    break;
	                case 'touchmove':
	                    this.checkScroll(this.props.todo);
	                    break;
	                case 'touchend':
	                    //this.checkScroll();
	                    break;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "loading-more-box", ref: "loadingMoreBox" },
	                this.state.load
	            );
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.events();
	        }
	    }, {
	        key: "events",
	        value: function events() {
	            var _this = this;
	            document.addEventListener('touchstart', function () {
	                _this.touchScroll();
	            }, false);
	            document.addEventListener('touchmove', function () {
	                _this.touchScroll();
	            }, false);
	            document.addEventListener('touchend', function () {
	                _this.touchScroll();
	            }, false);
	        }
	    }]);

	    return ScrollTouch;
	}(React.Component);

	exports.default = ScrollTouch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Util = __webpack_require__(5);

	var _Util2 = _interopRequireDefault(_Util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CityList = function (_React$Component) {
	    _inherits(CityList, _React$Component);

	    function CityList(props) {
	        _classCallCheck(this, CityList);

	        var _this = _possibleConstructorReturn(this, (CityList.__proto__ || Object.getPrototypeOf(CityList)).call(this, props));

	        _this.state = {
	            list: null
	        };
	        return _this;
	    }

	    _createClass(CityList, [{
	        key: "render",
	        value: function render() {
	            if (this.state.list) {
	                var item = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = this.state.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var i = _step.value;

	                        item.push(React.createElement(
	                            "li",
	                            { onClick: this.handleClick.bind(this), className: "city-item",
	                                "data-code": i.cityCode },
	                            i.cityName
	                        ));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                return React.createElement(
	                    "div",
	                    { ref: "list" },
	                    React.createElement(
	                        "ul",
	                        { className: "list-box" },
	                        item
	                    )
	                );
	            } else {
	                return React.createElement("div", { className: "dom-hide" });
	            }
	        }
	    }, {
	        key: "handleClick",
	        value: function handleClick() {
	            this.props.parentDom.refs.deptList.refs.list.className = "";
	            this.props.parentDom.refs.bossList.refs.list.className = "";
	            this.props.parentDom.setState({ cityName: event.target.innerHTML });
	            this.setState({ list: null });
	        }
	    }]);

	    return CityList;
	}(React.Component);

	exports.default = CityList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "body {\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif; }\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #f0f0f0;\n  z-index: 9;\n  display: none; }\n\n.dom-hide {\n  display: none; }\n\n.dom-show {\n  display: block; }\n\n#reactDom {\n  z-index: 99;\n  padding: 10px; }\n  #reactDom .loading-more-box {\n    border-top: 1px dashed #eeeeee;\n    height: 40px;\n    text-align: center;\n    line-height: 40px; }\n  #reactDom .app-color-blue {\n    color: #46b8da; }\n  #reactDom a {\n    color: #00B7FF; }\n  #reactDom .form-group {\n    background-color: #ffffff;\n    position: relative;\n    z-index: 99;\n    margin-bottom: 0px; }\n    #reactDom .form-group .app-row {\n      display: flex;\n      display: -webkit-flex;\n      -webkit-align-items: center;\n      -webkit-flex-direction: row; }\n      #reactDom .form-group .app-row .app-flex-3 {\n        -webkit-flex: 2.0;\n        min-width: 40px;\n        max-width: 40px; }\n      #reactDom .form-group .app-row .app-flex-7 {\n        -webkit-flex: 8.0;\n        width: 100%; }\n  #reactDom #cityName {\n    color: #000;\n    width: 40px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    #reactDom #cityName::after {\n      content: \"\";\n      background: #ffffff;\n      width: 6px;\n      height: 6px;\n      border: none;\n      display: block;\n      float: right;\n      margin-top: 5px;\n      margin-right: 5px;\n      transform: rotate(135deg);\n      border-top: .5px solid #000000;\n      border-right: .5px solid #000000; }\n  #reactDom ul.list-box {\n    position: absolute;\n    list-style: none;\n    padding-left: 10px;\n    padding-right: 10px;\n    top: 0;\n    left: 0;\n    z-index: 999999;\n    width: 100%;\n    background-color: #ffffff; }\n  #reactDom .city-item {\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    border-bottom: .5px solid #e5e5e5; }\n\n@keyframes insertionFade {\n  0% {\n    width: 50%;\n    height: 50%; }\n  30% {\n    width: 70%;\n    height: 70%; }\n  90% {\n    width: 90%;\n    height: 90%; }\n  100% {\n    width: 100%;\n    height: 100%; } }\n  #reactDom .table-box {\n    z-index: 99;\n    position: relative;\n    margin-top: 10px; }\n    #reactDom .table-box .table {\n      background-color: #ffffff;\n      position: absolute;\n      top: 0px;\n      left: 0;\n      z-index: 99; }\n  #reactDom .search-state {\n    text-align: center;\n    height: 100px;\n    line-height: 100px; }\n  #reactDom .department-list {\n    position: relative;\n    width: 100%;\n    margin-top: 15px; }\n    #reactDom .department-list .list-title {\n      border-top: 1px solid #e5e5e5;\n      border-bottom: 1px dashed #e5e5e5;\n      height: 30px;\n      line-height: 30px; }\n    #reactDom .department-list ul {\n      width: 100%;\n      display: flex;\n      display: -webkit-flex;\n      -webkit-flex-direction: row;\n      list-style: none;\n      -webkit-flex-wrap: wrap;\n      padding-left: 0px;\n      margin-top: 15px; }\n      #reactDom .department-list ul li {\n        white-space: nowrap;\n        display: block;\n        width: 25%;\n        text-align: center; }\n  #reactDom .boss-list .list-title {\n    border-top: 1px solid #e5e5e5;\n    border-bottom: 1px dashed #e5e5e5;\n    height: 30px;\n    line-height: 30px; }\n  #reactDom .boss-list ul {\n    padding: 0px;\n    list-style: none; }\n    #reactDom .boss-list ul li.boss-item {\n      display: -webkit-flex;\n      padding-top: 15px; }\n      #reactDom .boss-list ul li.boss-item .boss-name-des {\n        padding-left: 10px; }\n        #reactDom .boss-list ul li.boss-item .boss-name-des .boss-name {\n          display: block;\n          color: #000; }\n        #reactDom .boss-list ul li.boss-item .boss-name-des .boss-des {\n          display: block;\n          color: #999;\n          font-size: 13px; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);