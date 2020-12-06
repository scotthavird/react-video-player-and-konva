import React, { useState } from "react";
// upload file
import { File } from "./File.jsx";
// draw on canvas
import { Konva } from "./Konva.jsx";
// video player
import { Player } from "./Player.jsx";

export const App = () => {  
  
  const [konva, setKonva] = useState({ width: 1, height: 1 })
  const [src, setSrc] = useState("");

  const inputChanged = (url) => {    
    setSrc(url);
  };

  const playerResized = (width, height) => {    
    setKonva({ width, height });
  }

  return (
    <>
      <File inputChanged={inputChanged} />
      <div width={konva.width} height={konva.height} style={{ position: "relative"}} >
        <Konva width={konva.width} height={konva.height} />
        <Player src={src} playerResized={playerResized} />        
      </div>
    </>
  );
};
