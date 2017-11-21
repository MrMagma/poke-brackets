import React from "react";
import ReactDOM from "react-dom";

import fb from "scripts/fb.js";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            sender: ""
        };
    }
    handleClick() {
        fb.ref("messages").push().set(this.state);
    }
    handleContentChange(evt) {
        this.setState({
            content: evt.target.value
        });
    }
    handleSenderChange(evt) {
        this.setState({
            sender: evt.target.value
        });
    }
    render() {
        return (
            <div
                class="col-sm-12"
            >
                <div
                    className="input-group"
                >
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleSenderChange.bind(this)}
                        className="form-control"
                    />
                    <input
                        type="text"
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}
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
                            Send message
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mute: true,
            id: ""
        };
    }
    handleMuteChange(evt) {
        this.setState({
            mute: evt.target.checked
        });
    }
    handleYTChange(evt) {
        let url = new URL(evt.target.value);
        this.setState({
            id: url.searchParams.get("v")
        });
    }
    handleClick() {
        fb.ref("video").set(this.state);
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
                        onChange={this.handleYTChange.bind(this)}
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
                            Set Video
                        </button>
                    </span>
                </div>
                <div
                    className="form-check form-check-inline"
                >
                    <label
                        className="form-check-label"
                    >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="mute-checkbox"
                            checked={this.state.mute}
                            onChange={this.handleMuteChange.bind(this)}
                        /> Mute video?
                    </label>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Message/>,
    document.getElementById("message")
);

ReactDOM.render(
    <Video/>,
    document.getElementById("video")
);
