import React from 'react';
import { VideoJsBase } from './VideoJsBase';

const VideoJs = (props) => {

  const { controls = false , url, setHeight = null, setWidth=null } = props;

  const playerRef = React.useRef(null);

  let videoJsOptions = {
    autoplay: true,
    controls: controls,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [{
      src: `http://localhost:8000/${url}`,
      type: "application/x-mpegURL"
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    if (setHeight){
      setHeight(player.el_.getBoundingClientRect().height)
    }

    if (setWidth){
      setWidth(player.el_.getBoundingClientRect().width)
    }
  };

  return (
      <VideoJsBase options={videoJsOptions} onReady={handlePlayerReady} />
  );
}

export default VideoJs;