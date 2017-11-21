import React from "react";
import ReactDOM from "react-dom";

import fb from "scripts/fb.js";

let players = {};

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    handleChange(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    handleClick() {
        fb.ref("players").push().set(this.state);
    }
    render() {
        return (
            <div
                className="col-sm-12"
            >
                <div
                    className="input-group"
                >
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        className="form-control"
                    />
                    <span
                        className="input-group-btn"
                    >
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.handleClick.bind(this)}
                        >
                            Add Player
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

class AddMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: players,
            a: "",
            b: "",
            layer: 1
        };
        
        fb.ref("players").on("child_added", data => {
            players[data.key] = data.val();
            this.forceUpdate();
        });
        fb.ref("players").on("child_changed", data => {
            players[data.key] = data.val();
            this.forceUpdate();
        });
        fb.ref("players").on("child_removed", data => {
            delete players[data.key];
            this.forceUpdate();
        });

    }
    handleAChange(evt) {
        this.setState({
            a: evt.target.value
        });
    }
    handleBChange(evt) {
        this.setState({
            b: evt.target.value
        });
    }
    handleLayerChange(evt) {
        this.setState({
            layer: evt.target.value
        });
    }
    handleClick() {
        fb.ref("matches").push().set({
            a: this.state.a,
            b: this.state.b,
            layer: this.state.layer - 1,
            winner: null
        })
    }
    render() {
        return [
            <div
                className="col-sm-3"
            >
                <select
                    className="custom-select"
                    defaultValue={this.state.a}
                    onChange={this.handleAChange.bind(this)}
                >
                    <option
                        value=""
                        disabled
                        hidden
                    >Select player 1</option>
                    {Object.keys(this.state.players).map(key =>
                        <option
                            value={key}
                        >
                            {this.state.players[key].name}
                        </option>
                    )}
                </select>
            </div>,
            <div
                className="col-sm-3"
            >
                <select
                    className="custom-select"
                    defaultValue={this.state.b}
                    onChange={this.handleBChange.bind(this)}
                >
                    <option
                        value=""
                        disabled
                        hidden
                    >Select player 2</option>
                    {Object.keys(this.state.players).map(key =>
                        <option
                            value={key}
                        >
                            {this.state.players[key].name}
                        </option>
                    )}
                </select>
            </div>,
            <div
                class="col-sm-3"
            >
                <input
                    type="number"
                    className="form-control"
                    onChange={this.handleLayerChange.bind(this)}
                    value={this.state.layer}
                    min={1}
                />
            </div>,
            <div
                class="col-sm-3"
            >
                <button
                    class="btn btn-primary"
                    onClick={this.handleClick.bind(this)}
                >Add Duel</button>
            </div>
        ];
    }
}

let matches = {};

class Duel extends React.Component {
    constructor(props) {
        super(props);
        fb.ref("matches").on("child_added", data => {
            matches[data.key] = data.val();
            this.forceUpdate();
        });
        fb.ref("matches").on("child_changed", data => {
            matches[data.key] = data.val();
            this.forceUpdate();
        });
        fb.ref("matches").on("child_removed", data => {
            delete matches[data.key];
            this.forceUpdate();
        });
    }
    victoryToPlayer(key, player) {
        fb.ref(`matches/${key}/winner`).set(player)        
    }
    deleteDuel(key) {
        fb.ref(`matches/${key}`).set(null)
    }
    render() {
        return Object.keys(matches).map(key =>
            <div
                className="col-sm-12 btn-group"
            >
                <button
                    className="btn btn-primary"
                    onClick={this.victoryToPlayer.bind(this, key, "a")}
                >{`${players[matches[key].a].name} Won`}</button>
                <button
                    className="btn btn-primary"
                    onClick={this.victoryToPlayer.bind(this, key, "b")}
                >{`${players[matches[key].b].name} Won`}</button>
                <button
                    onClick={this.deleteDuel.bind(this, key)}
                    className="btn btn-danger"
                >Remove duel</button>
            </div>
        );
    }
}

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        fb.ref("players").on("child_added", data => {
            this.forceUpdate();
        });
        fb.ref("players").on("child_changed", data => {
            this.forceUpdate();
        });
        fb.ref("players").on("child_removed", data => {
            this.forceUpdate();
        });
    }
    handleClick(player) {
        fb.ref(`players/${player}`).set(null);
    }
    render() {
        return (
            Object.keys(players).map(key =>
                <div class="row">
                    <button
                        class="btn btn-danger"
                        onClick={this.handleClick.bind(this, key)}
                    >{`Remove ${players[key].name} from the tournament`}</button>
                </div>
            )
        );
    }
}

ReactDOM.render(
    <AddPlayer/>,
    document.getElementById("add-player")
);

ReactDOM.render(
    <AddMatch/>,
    document.getElementById("add-match")
);

ReactDOM.render(
    <Duel/>,
    document.getElementById("duels")
);

ReactDOM.render(
    <PlayerList/>,
    document.getElementById("player-list")
);
