import React from "react";
import { Stage, Layer, Rect, Circle, Line } from "react-konva";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  stageOverlay: {
    position: "absolute",
    zIndex: 2,
    //top: 0,
    //left: 0
  },
}));

export const Konva = (props) => {
  const { width, height } = props;
  const classes = useStyles();

  const box = {
    x: 0.25,
    y: 0.25,
    w: 0.25,
    h: 0.25
  }

  const floatWidth = parseFloat(width);
  // TODO: remove hack
  const floatHeight = parseFloat(height - 4);

  const final = {
    x: box.x * floatWidth ,
    y: box.y * floatHeight,
    w: box.w * floatWidth,
    h: box.h * floatHeight
  }

  return (
    <Stage width={floatWidth} height={floatHeight} className={classes.stageOverlay}>
      <Layer>
        <Rect
          x={final.x}
          y={final.y}
          width={final.w}
          height={final.h}
          //fill="red"
          stroke="red"
          //shadowBlur={10}
        />        
      </Layer>
    </Stage>
  );
};
