import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Stage, Layer, Rect } from "react-konva";

const useStyles = makeStyles(() => ({
  stageOverlay: {
    position: "absolute",
    zIndex: 2
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
  // TODO: figure out why and remove hack (-4)
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
          stroke="red"
          strokeWidth={10}
        />        
      </Layer>
    </Stage>
  );
};
