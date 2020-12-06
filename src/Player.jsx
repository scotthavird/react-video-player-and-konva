import React, {useRef, useState, useLayoutEffect, useEffect} from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  reactPlayer: {
    position: "absolute",    
    top: 0,
    left: 0
  }
}));

export const Player = (props) => {
  const { src, playerResized } = props;  
  const classes = useStyles();

  const divRef = useRef();
  const [player, setPlayer] = useState()

  const ref = (player) => {
    setPlayer(player)
  }

  useEffect(() => {
    console.log('useEffect')
    console.log('useEffect.player',player)
    console.log('useEffect.divRef',divRef)
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    console.log('useLayoutEffect.player',player)
    console.log('useLayoutEffect.divRef',divRef)
  }, [])

  const handleOnReady = () => {
    console.log('handleOnReady')
    console.log('handleOnReady.player',player)
    console.log('handleOnReady.divRef',divRef)
    const height = player.wrapper.clientHeight
    const width = player.wrapper.clientWidth
    console.log('height',height)
    console.log('width',width)
    playerResized(width, height)
  }

  return (        
    <div ref={divRef}>
      <ReactPlayer
        className={classes.reactPlayer}
        ref={ref}
        url={src}          
        width="1" 
        height="1" 
        onReady={handleOnReady}         
      />
    </div>      
  );
};
