import React from "react";

import fb from "scripts/fb.js";

class _Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                id={!this.props.index ? "current-message" : "last-message"}
            >
                <span class="message-name">{this.props.message.sender}</span>
                <span class="message-content">{this.props.message.content}</span>
            </div>
        );
    }
}

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        fb.ref("messages").on("child_added", (data) => {
            this.setState({
                messages: this.state.messages.concat([data.val()])
            });
        });
    }
    render() {
        return this.state.messages.map((message, i) =>
            <_Message
                index={this.state.messages.length - i - 1}
                message={message}
            />
        );
    }    
}

export default MessageBox;
