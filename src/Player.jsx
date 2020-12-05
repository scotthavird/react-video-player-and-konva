import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';
/*

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}
*/
const useStyles = makeStyles(() => ({
  reactPlayer: {
    position: "absolute",
    //top: 0,
    //left: 0
  },
}));

export const Player = (props) => {
  const { src, width, height } = props;
  const classes = useStyles();
  
  return (
    <ReactPlayer
      className={classes.reactPlayer}
      url={src}
      width={width}
      height={height}
    />
  );
};
