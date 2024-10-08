// @ts-ignore
import { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/solid";
import videoSrc from "/video_marquesjr.mp4"; // Import the video file

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
    <div className="relative font-roundkey">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full"
        onClick={togglePlay}
        loop
      />
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-20"
        onClick={togglePlay}
      >
        {!isPlaying && ( // Show play icon only when video is not playing
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-50"
            onClick={togglePlay}
          >
            <PlayIcon className="h-12 w-12 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
