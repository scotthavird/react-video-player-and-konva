import React from "react";
import ReactPlayer from "react-player";

export const Player = (props) => {
  const { src, width, height } = props;

  return (
    <ReactPlayer
      className="react-player"
      url={src}
      width={width}
      height={height}
    />
  );
};
