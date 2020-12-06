import React, { useState, useRef } from "react";

import { File } from "./File.jsx";
import { Konva } from "./Konva.jsx";
import { Player } from "./Player.jsx";

export const App = () => {  
  
  const [konva, setKonva] = useState({
    width: 1,
    height: 1
  })
  const [src, setSrc] = useState("");

  const inputChanged = (url) => {    
    setSrc(url);
  };

  const playerResized = (width, height) => {
    //console.log(`playerResized: width ${width}, height ${height}`)
    setKonva({      
      width: width,
      height: height
    });
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
