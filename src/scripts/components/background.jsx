import React from "react";

import fb from "scripts/fb.js";

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: "GNhX1qAObRM",
            mute: true
        };
        fb.ref("video").on("value", data => {
            this.setState(data.val());
        });
    }
    render() {
        return (
            <iframe
                id="video-background"
                src={`https:\/\/www.youtube.com/embed/${this.state.video}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=${this.state.mute}&disablekb=1&playlist=${this.state.video}&modestbranding=1`}
                frameborder="0"
                gesture="media"
                allowfullscreen>
            </iframe>
        );
    }
}

export default Background;
