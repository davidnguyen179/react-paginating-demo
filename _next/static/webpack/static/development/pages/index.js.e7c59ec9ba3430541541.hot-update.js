webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-paginating/dist/react-paginating.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-paginating/dist/react-paginating.esm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function getRange(start, end) {
  return _toConsumableArray(Array(end - start + 1)).map(function (_, i) {
    return start + i;
  });
}
function getPageInfo(_ref) {
  var limit = _ref.limit,
      pageCount = _ref.pageCount,
      total = _ref.total,
      page = _ref.page;
  var totalPages = Math.ceil(total / limit);
  var totalResults = parseInt(total, 10);
  var currentPage = parseInt(page, 10);

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  var firstPage = Math.max(1, currentPage - Math.floor(pageCount / 2));
  var lastPage = Math.min(totalPages, currentPage + Math.floor(pageCount / 2));

  if (lastPage - firstPage + 1 < pageCount) {
    if (currentPage < totalPages / 2) {
      lastPage = Math.min(totalPages, lastPage + (pageCount - (lastPage - firstPage)));
    } else {
      firstPage = Math.max(1, firstPage - (pageCount - (lastPage - firstPage)));
    }
  }

  if (lastPage - firstPage + 1 > pageCount) {
    if (currentPage > totalPages / 2) {
      // eslint-disable-next-line
      firstPage++;
    } else {
      // eslint-disable-next-line
      lastPage--;
    }
  }

  var firstResult = limit * (currentPage - 1);
  var lastResult = limit * currentPage - 1;
  return {
    totalPages: totalPages,
    pages: Math.min(lastPage - firstPage + 1, totalPages),
    currentPage: currentPage,
    firstPage: firstPage,
    lastPage: lastPage,
    previousPage: currentPage - 1,
    nextPage: currentPage + 1,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    totalResults: totalResults,
    results: Math.min(lastResult - firstResult + 1, totalResults),
    firstResult: firstResult,
    lastResult: lastResult
  };
}

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getPageItemProps", function (props) {
      var pageValue = props.pageValue,
          handlePageChange = props.onPageChange,
          rest = _objectWithoutProperties(props, ["pageValue", "onPageChange"]);

      var onPageChange = function onPageChange(e) {
        if (typeof handlePageChange === 'function') {
          handlePageChange(pageValue, e);
        }

        _this.setState({
          currentPage: pageValue
        });
      };

      return _objectSpread({
        onClick: onPageChange
      }, rest);
    });

    _this.state = {
      currentPage: 0
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.currentPage) {
        this.setState({
          currentPage: parseInt(this.props.currentPage, 10)
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentPage !== this.props.currentPage) {
        this.setState({
          currentPage: parseInt(nextProps.currentPage, 10)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          total = _this$props.total,
          limit = _this$props.limit,
          pageCount = _this$props.pageCount;
      var currentPage = this.state.currentPage;
      var pageInfo = getPageInfo({
        limit: limit,
        pageCount: pageCount,
        total: total,
        page: currentPage
      });
      var firstPage = pageInfo.firstPage,
          lastPage = pageInfo.lastPage,
          hasNextPage = pageInfo.hasNextPage,
          hasPreviousPage = pageInfo.hasPreviousPage,
          previousPage = pageInfo.previousPage,
          nextPage = pageInfo.nextPage,
          totalPages = pageInfo.totalPages;
      var pages = total ? getRange(firstPage, lastPage) : [];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.children({
        pages: pages,
        previousPage: previousPage,
        nextPage: nextPage,
        totalPages: totalPages,
        currentPage: currentPage,
        hasNextPage: hasNextPage,
        hasPreviousPage: hasPreviousPage,
        getPageItemProps: this._getPageItemProps
      }));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Pagination.propTypes = {
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  pageCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  pageValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Pagination.defaultProps = {
  limit: 10,
  pageCount: 5,
  currentPage: 0,
  pageValue: 0
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/react-paginating.esm.js");
var _jsxFileName = "/Users/dung.nguyen/workplace/oss/react-paginating.github.io/pages/index.js";



var fruits = [["apple", "orange"], ["banana", "avocado"], ["coconut", "blueberry"], ["payaya", "peach"], ["pear", "plum"]];
var limit = 2;
var pageCount = 3;
var total = fruits.length * limit;

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hello Next.js"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e7c59ec9ba3430541541.hot-update.js.map