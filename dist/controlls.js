webpackJsonp([1],{

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(96);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fb = __webpack_require__(54);

var _fb2 = _interopRequireDefault(_fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message(props) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

        _this.state = {
            content: "",
            sender: ""
        };
        return _this;
    }

    _createClass(Message, [{
        key: "handleClick",
        value: function handleClick() {
            _fb2.default.ref("messages").push().set(this.state);
        }
    }, {
        key: "handleContentChange",
        value: function handleContentChange(evt) {
            this.setState({
                content: evt.target.value
            });
        }
    }, {
        key: "handleSenderChange",
        value: function handleSenderChange(evt) {
            this.setState({
                sender: evt.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                {
                    "class": "col-sm-12"
                },
                _react2.default.createElement(
                    "div",
                    {
                        className: "input-group"
                    },
                    _react2.default.createElement("input", {
                        type: "text",
                        value: this.state.name,
                        onChange: this.handleSenderChange.bind(this),
                        className: "form-control"
                    }),
                    _react2.default.createElement("input", {
                        type: "text",
                        value: this.state.content,
                        onChange: this.handleContentChange.bind(this),
                        className: "form-control"
                    }),
                    _react2.default.createElement(
                        "span",
                        {
                            className: "input-group-btn"
                        },
                        _react2.default.createElement(
                            "button",
                            {
                                className: "btn btn-primary",
                                type: "button",
                                onClick: this.handleClick.bind(this)
                            },
                            "Send message"
                        )
                    )
                )
            );
        }
    }]);

    return Message;
}(_react2.default.Component);

var Video = function (_React$Component2) {
    _inherits(Video, _React$Component2);

    function Video(props) {
        _classCallCheck(this, Video);

        var _this2 = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

        _this2.state = {
            mute: true,
            id: ""
        };
        return _this2;
    }

    _createClass(Video, [{
        key: "handleMuteChange",
        value: function handleMuteChange(evt) {
            this.setState({
                mute: evt.target.checked
            });
        }
    }, {
        key: "handleYTChange",
        value: function handleYTChange(evt) {
            var url = new URL(evt.target.value);
            this.setState({
                id: url.searchParams.get("v")
            });
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            _fb2.default.ref("video").set(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                {
                    className: "col-sm-12"
                },
                _react2.default.createElement(
                    "div",
                    {
                        className: "input-group"
                    },
                    _react2.default.createElement("input", {
                        type: "text",
                        value: this.state.name,
                        onChange: this.handleYTChange.bind(this),
                        className: "form-control"
                    }),
                    _react2.default.createElement(
                        "span",
                        {
                            className: "input-group-btn"
                        },
                        _react2.default.createElement(
                            "button",
                            {
                                className: "btn btn-primary",
                                type: "button",
                                onClick: this.handleClick.bind(this)
                            },
                            "Set Video"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    {
                        className: "form-check form-check-inline"
                    },
                    _react2.default.createElement(
                        "label",
                        {
                            className: "form-check-label"
                        },
                        _react2.default.createElement("input", {
                            className: "form-check-input",
                            type: "checkbox",
                            id: "mute-checkbox",
                            checked: this.state.mute,
                            onChange: this.handleMuteChange.bind(this)
                        }),
                        " Mute video?"
                    )
                )
            );
        }
    }]);

    return Video;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Message, null), document.getElementById("message"));

_reactDom2.default.render(_react2.default.createElement(Video, null), document.getElementById("video"));

/***/ })

},[197]);