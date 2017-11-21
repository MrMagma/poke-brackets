import React from "react";
import ReactDOM from "react-dom";

import MessageBox from "scripts/components/messages.jsx";
import Brackets from "scripts/components/brackets.jsx";
import Background from "scripts/components/background.jsx";

import "styles/index.styl";

ReactDOM.render(
    <MessageBox/>,
    document.getElementById("messages")
);

ReactDOM.render(
    <Brackets/>,
    document.getElementById("brackets")
);

ReactDOM.render(
    <Background/>,
    document.getElementById("background")
);

console.log("Pika... CHU!!!!!!!!!!");
