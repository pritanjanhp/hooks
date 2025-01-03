import React, { useState, useRef } from "react";

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  //   const ref = useRef<any>(null);
  const ref = useRef<HTMLVideoElement>(null);

  let handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) ref.current.play();
    else ref.current.pause();
  };

  return (
    <>
      <h3>Play Pause</h3>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "play"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default PlayPause;
