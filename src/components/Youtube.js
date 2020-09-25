import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Youtube extends Component {

    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        //event.target.playVideoAt(147);
        const player = event.target;
        player.seekTo(147);
        console.log(event.target);
      }
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };

        const {videoID} = this.props;
     
        return (
          <YouTube
            videoId={videoID}
            opts={opts}
            onReady={this.VideoOnReady}            
          />
        );
      }    

    }