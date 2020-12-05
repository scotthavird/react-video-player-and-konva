import React, { useState } from "react";

import { Header } from "./Header.jsx";
import { Konva } from "./Konva.jsx";
import { Player } from "./Player.jsx";

export const App = () => {
  //const classes = useStyles();
  const [player, setPlayer] = useState({
    width: "200",
    height: "200"
  });

  //let width = "200";
  //let height = "200";
  // window.innerHeight

  const inputChanged = (video, url, width, height) => {
    console.log("inputChanged: video", video);
    console.log(`inputChanged: width: ${width}, height: ${height}`);
    //console.log("inputChanged.width", width);
    //console.log("inputChanged.height", height);

    setPlayer({
      src: url,
      width: width,
      height: height
    });
  };

  return (
    <>
      <Header inputChanged={inputChanged} />
      <Konva width={player.width} height={player.height} />
      <Player src={player.src} width={player.width} height={player.height} />
    </>
  );
};
