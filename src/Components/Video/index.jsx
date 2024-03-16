import React, { useState, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/solid";
import videoSrc from "./path/to/your/video.mp4"; // Import the video file

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full"
        onClick={togglePlay}
        loop
      />
      <div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <PauseIcon className="w-12 h-12 text-white" />
        ) : (
          <PlayIcon className="w-12 h-12 text-white" />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
