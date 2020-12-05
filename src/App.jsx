import React, { useState, useRef } from "react";

import { Header } from "./Header.jsx";
import { Konva } from "./Konva.jsx";
import { Player } from "./Player.jsx";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrangler: {
    //position: "absolute",
  }
}));

export const App = () => {
  const classes = useStyles();
  
  const [player, setPlayer] = useState({
    width: "200",
    height: "200"
  });

  const divRef = useRef()

  const inputChanged = (url, width, height) => {    
    console.log(`inputChanged url: ${url}, width: ${width}, height: ${height}`); 

    setPlayer({
      src: url,
      width: width,
      height: height
    });
  };

  return (
    <>
      <Header inputChanged={inputChanged} />      
      <div ref={divRef} width={"100%"} height={"100%"} className={classes.wrangler}>
        <Konva width={player.width} height={player.height} />      
        <Player src={player.src} width={player.width} height={player.height} />
      </div>      
    </>
  );
};
