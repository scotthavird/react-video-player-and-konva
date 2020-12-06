import React, { useRef } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

export const File = (props) => {  
  const { inputChanged } = props;
  const videoRef = useRef();

  const handleChange = async (e) => {
    console.log("handleChange.e", e);

    // get video blob
    const file = e.currentTarget.files[0];    

    // get video local url
    const url = await loadVideoMetadata(file);        

    inputChanged(url);
  };

  function loadVideoMetadata(blob) {
    return new Promise((resolve, reject) => {
      let url
      try {
        url = URL.createObjectURL(blob);
        videoRef.current.src = url;
      } catch (err) {
        console.log("err", err);
      }

      videoRef.current.onloadedmetadata = function (video) {        
        resolve(url);
      };

      videoRef.current.onerror = (err) => {
        console.log("err", err);
        reject(err);
      };
    });
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              hidden
              accept="audio/*,video/*"
              onChange={(e) => handleChange(e)}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <video ref={videoRef} preload="metadata" hidden></video>
    </>
  );
};
