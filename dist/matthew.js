webpackJsonp([1],{

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(36);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fb = __webpack_require__(17);

var _fb2 = _interopRequireDefault(_fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var players = {};

var AddPlayer = function (_React$Component) {
    _inherits(AddPlayer, _React$Component);

    function AddPlayer(props) {
        _classCallCheck(this, AddPlayer);

        var _this = _possibleConstructorReturn(this, (AddPlayer.__proto__ || Object.getPrototypeOf(AddPlayer)).call(this, props));

        _this.state = {
            name: ""
        };
        return _this;
    }

    _createClass(AddPlayer, [{
        key: "handleChange",
        value: function handleChange(evt) {
            this.setState({
                name: evt.target.value
            });
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            _fb2.default.ref("players").push().set(this.state);
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
                        onChange: this.handleChange.bind(this),
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
                            "Add Player"
                        )
                    )
                )
            );
        }
    }]);

    return AddPlayer;
}(_react2.default.Component);

var AddMatch = function (_React$Component2) {
    _inherits(AddMatch, _React$Component2);

    function AddMatch(props) {
        _classCallCheck(this, AddMatch);

        var _this2 = _possibleConstructorReturn(this, (AddMatch.__proto__ || Object.getPrototypeOf(AddMatch)).call(this, props));

        _this2.state = {
            players: players,
            a: "",
            b: "",
            layer: 1
        };

        _fb2.default.ref("players").on("child_added", function (data) {
            players[data.key] = data.val();
            _this2.forceUpdate();
        });
        _fb2.default.ref("players").on("child_changed", function (data) {
            players[data.key] = data.val();
            _this2.forceUpdate();
        });
        _fb2.default.ref("players").on("child_removed", function (data) {
            delete players[data.key];
            _this2.forceUpdate();
        });

        return _this2;
    }

    _createClass(AddMatch, [{
        key: "handleAChange",
        value: function handleAChange(evt) {
            this.setState({
                a: evt.target.value
            });
        }
    }, {
        key: "handleBChange",
        value: function handleBChange(evt) {
            this.setState({
                b: evt.target.value
            });
        }
    }, {
        key: "handleLayerChange",
        value: function handleLayerChange(evt) {
            this.setState({
                layer: evt.target.value
            });
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            _fb2.default.ref("matches").push().set({
                a: this.state.a,
                b: this.state.b,
                layer: this.state.layer - 1,
                winner: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return [_react2.default.createElement(
                "div",
                {
                    className: "col-sm-3"
                },
                _react2.default.createElement(
                    "select",
                    {
                        className: "custom-select",
                        defaultValue: this.state.a,
                        onChange: this.handleAChange.bind(this)
                    },
                    _react2.default.createElement(
                        "option",
                        {
                            value: "",
                            disabled: true,
                            hidden: true
                        },
                        "Select player 1"
                    ),
                    Object.keys(this.state.players).map(function (key) {
                        return _react2.default.createElement(
                            "option",
                            {
                                value: key
                            },
                            _this3.state.players[key].name
                        );
                    })
                )
            ), _react2.default.createElement(
                "div",
                {
                    className: "col-sm-3"
                },
                _react2.default.createElement(
                    "select",
                    {
                        className: "custom-select",
                        defaultValue: this.state.b,
                        onChange: this.handleBChange.bind(this)
                    },
                    _react2.default.createElement(
                        "option",
                        {
                            value: "",
                            disabled: true,
                            hidden: true
                        },
                        "Select player 2"
                    ),
                    Object.keys(this.state.players).map(function (key) {
                        return _react2.default.createElement(
                            "option",
                            {
                                value: key
                            },
                            _this3.state.players[key].name
                        );
                    })
                )
            ), _react2.default.createElement(
                "div",
                {
                    "class": "col-sm-3"
                },
                _react2.default.createElement("input", {
                    type: "number",
                    className: "form-control",
                    onChange: this.handleLayerChange.bind(this),
                    value: this.state.layer,
                    min: 1
                })
            ), _react2.default.createElement(
                "div",
                {
                    "class": "col-sm-3"
                },
                _react2.default.createElement(
                    "button",
                    {
                        "class": "btn btn-primary",
                        onClick: this.handleClick.bind(this)
                    },
                    "Add Duel"
                )
            )];
        }
    }]);

    return AddMatch;
}(_react2.default.Component);

var matches = {};

var Duel = function (_React$Component3) {
    _inherits(Duel, _React$Component3);

    function Duel(props) {
        _classCallCheck(this, Duel);

        var _this4 = _possibleConstructorReturn(this, (Duel.__proto__ || Object.getPrototypeOf(Duel)).call(this, props));

        _fb2.default.ref("matches").on("child_added", function (data) {
            matches[data.key] = data.val();
            _this4.forceUpdate();
        });
        _fb2.default.ref("matches").on("child_changed", function (data) {
            matches[data.key] = data.val();
            _this4.forceUpdate();
        });
        _fb2.default.ref("matches").on("child_removed", function (data) {
            delete matches[data.key];
            _this4.forceUpdate();
        });
        return _this4;
    }

    _createClass(Duel, [{
        key: "victoryToPlayer",
        value: function victoryToPlayer(key, player) {
            _fb2.default.ref("matches/" + key + "/winner").set(player);
        }
    }, {
        key: "deleteDuel",
        value: function deleteDuel(key) {
            _fb2.default.ref("matches/" + key).set(null);
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return Object.keys(matches).map(function (key) {
                return _react2.default.createElement(
                    "div",
                    {
                        className: "col-sm-12 btn-group"
                    },
                    _react2.default.createElement(
                        "button",
                        {
                            className: "btn btn-primary",
                            onClick: _this5.victoryToPlayer.bind(_this5, key, "a")
                        },
                        players[matches[key].a].name + " Won"
                    ),
                    _react2.default.createElement(
                        "button",
                        {
                            className: "btn btn-primary",
                            onClick: _this5.victoryToPlayer.bind(_this5, key, "b")
                        },
                        players[matches[key].b].name + " Won"
                    ),
                    _react2.default.createElement(
                        "button",
                        {
                            onClick: _this5.deleteDuel.bind(_this5, key),
                            className: "btn btn-danger"
                        },
                        "Remove duel"
                    )
                );
            });
        }
    }]);

    return Duel;
}(_react2.default.Component);

var PlayerList = function (_React$Component4) {
    _inherits(PlayerList, _React$Component4);

    function PlayerList(props) {
        _classCallCheck(this, PlayerList);

        var _this6 = _possibleConstructorReturn(this, (PlayerList.__proto__ || Object.getPrototypeOf(PlayerList)).call(this, props));

        _fb2.default.ref("players").on("child_added", function (data) {
            _this6.forceUpdate();
        });
        _fb2.default.ref("players").on("child_changed", function (data) {
            _this6.forceUpdate();
        });
        _fb2.default.ref("players").on("child_removed", function (data) {
            _this6.forceUpdate();
        });
        return _this6;
    }

    _createClass(PlayerList, [{
        key: "handleClick",
        value: function handleClick(player) {
            _fb2.default.ref("players/" + player).set(null);
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            return Object.keys(players).map(function (key) {
                return _react2.default.createElement(
                    "div",
                    { "class": "row" },
                    _react2.default.createElement(
                        "button",
                        {
                            "class": "btn btn-danger",
                            onClick: _this7.handleClick.bind(_this7, key)
                        },
                        "Remove " + players[key].name + " from the tournament"
                    )
                );
            });
        }
    }]);

    return PlayerList;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(AddPlayer, null), document.getElementById("add-player"));

_reactDom2.default.render(_react2.default.createElement(AddMatch, null), document.getElementById("add-match"));

_reactDom2.default.render(_react2.default.createElement(Duel, null), document.getElementById("duels"));

_reactDom2.default.render(_react2.default.createElement(PlayerList, null), document.getElementById("player-list"));

/***/ })

},[198]);