import React from "react";

const VideoBanner = () => {
  return (
    <section className="mainbody__banner-video">
      <video
        aria-label="muted"
        controls
        src="./assets/video banner.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        className="mainbody__video"
      ></video>
    </section>
  );
};

export default VideoBanner;
