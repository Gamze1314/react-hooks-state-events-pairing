import React from 'react'
import video from "../data/video.js";

function Video() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        allowFullScreen
        title="React Today and Tomorrow and 90% Cleaner React With Hooks"
      />
    </div>
  );
}


export default Video