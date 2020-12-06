import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
import useResizeAware from 'react-resize-aware';

export const Player = (props) => {
  const { src, playerResized } = props;    

  const [player, setPlayer] = useState()
  const [resizeListener, sizes] = useResizeAware();

  const ref = (player) => {
    setPlayer(player)
  }

  const playerSizeChanged = () => {
    if (player !== undefined) {
      const height = player.wrapper.clientHeight
      const width = player.wrapper.clientWidth

      playerResized(width, height)
    }
  }

  // video player is ready, lets get the wrapper size
  const handleOnReady = () => {
    playerSizeChanged()
  }

  // if the user resizes a window and effects the size of our react player div
  useEffect(() => {
    playerSizeChanged()    
  }, [sizes.width, sizes.height]);

  return (        
    <div>
      {resizeListener}
      <ReactPlayer
        style={{ position: "absolute"}}
        ref={ref}
        url={src}          
        width="1" 
        height="1" 
        onReady={handleOnReady}         
      />
    </div>      
  );
};
