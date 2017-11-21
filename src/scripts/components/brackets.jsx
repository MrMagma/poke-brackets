import React from "react";

import fb from "scripts/fb";

let fighters = {};
let fights = {};

class _Fight extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className="fight"
                style={{
                    top: 5 * this.props.layer + "em"
                }}
            >
                <div
                    className={`a fighter ${this.props.winner === "a" ? "winner" : ""}`}
                >{(fighters[this.props.a] || {name: ""}).name}</div>
                <div
                    className={`b fighter ${this.props.winner === "b" ? "winner" : ""}`}
                >{(fighters[this.props.b] || {name: ""}).name}</div>
            </div>
        );
    }
}

class Brackets extends React.Component {
    constructor(props) {
        super(props);
        fb.ref("players").on("child_added", data => {
            fighters[data.key] = data.val();
            this.forceUpdate();
        });
        fb.ref("players").on("child_removed", data => {
            delete fighters[data.key];
            this.forceUpdate();
        });
        fb.ref("players").on("child_changed", data => {
            fighters[data.key] = data.val();
            this.forceUpdate();
        })
        fb.ref("matches").on("child_added", data => {
            fights[data.key] = data.val();
            this.forceUpdate();
        });
        fb.ref("matches").on("child_removed", data => {
            delete fights[data.key];
            this.forceUpdate();
        })
        fb.ref("matches").on("child_changed", data => {
            fights[data.key] = data.val();
            this.forceUpdate();
        });
    }
    render() {
        return Object.keys(fights).map(key =>
            <_Fight
                a={fights[key].a}
                b={fights[key].b}
                winner={fights[key].winner}
                layer={fights[key].layer}
            />
        );
    }
}

export default Brackets;
