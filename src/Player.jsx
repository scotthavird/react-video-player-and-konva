import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  reactPlayer: {
    position: "absolute",    
    top: 0,
    left: 0
  },
  // 704 × 480
  //reactContainer: {
  //  position: "absolute",
  //  maxHeight: 704,
  //  maxWidth: 480
  //}, 
  playerWrapper: {
    position: "absolute",    
    //maxHeight: 704,
    //maxWidth: 480
    //paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  }
}));

export const Player = (props) => {
  const { src, width, height } = props;
  
  const classes = useStyles();

  const divRef = useRef();

  const [player, setPlayer] = useState()

  
  const paddingTop = 100 / (width / height)
  console.log('paddingTop', paddingTop)

  const ref = (player) => {
    setPlayer(player)
  }

  return (    
    /*<div className={classes.playerContainer}>*/
     /*<div className={classes.playerWrapper}>*/
     <div ref={divRef}>
        <ReactPlayer
          className={classes.reactPlayer}
          ref={ref}
          url={src}
          //width={width}
          //height={height}
          width="704" 
          height="480"
          //width="100%"
          //height="100%"
        />
      </div>  
      /*</div>*/
    /*</div>*/
  );
};
