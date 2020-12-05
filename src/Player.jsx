import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  reactPlayer: {
    position: "absolute",    
  },
  //playerWrapper: {
  //  position: "relative",    
  //  paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  //}
}));

export const Player = (props) => {
  const { src, width, height } = props;
  const classes = useStyles();
  
  return (    
    /*<div className={classes.playerWrapper}>*/
      <ReactPlayer
        className={classes.reactPlayer}
        url={src}
        width={width}
        height={height}
      />
    /*</div>*/
  );
};
