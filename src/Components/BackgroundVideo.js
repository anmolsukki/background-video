import React, {Component} from 'react';
import MyVideo from './MyVideo.mp4';
import "./Style.css";

class BackgroundVideo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoURL: MyVideo
        }
    }

    videoControl = () => {
        var video = document.getElementById("myVideo");
        var btn = document.getElementById("myBtn");
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
          } else {
            video.pause();
            btn.innerHTML = "Play";
          }
    }

    render () {
        return (
          <div>
            <video id='myVideo' autoPlay loop muted>
                <source src={this.state.videoURL} type='video/mp4' />
            </video>
            <div className="content">
                <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                    <button id="myBtn" onClick={this.videoControl}>Pause</button>
                </div>
          </div>
        )
    }
};

export default BackgroundVideo;
