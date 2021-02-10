import React, { useEffect, useRef } from 'react';
import video from '../suura/poto/otc.mp4';
import videojs from 'video.js';
function Videootc(props) {
  const { videoSrc } = props;
  const playerRef = useRef();

  useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: true, muted: true }, () => {
      player.src(video);
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-16-9" playsInline />
    </div>
  );
}
export default Videootc;