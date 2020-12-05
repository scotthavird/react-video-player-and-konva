import React, { useRef } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

export const Header = (props) => {  
  const { inputChanged } = props;
  const videoRef = useRef();

  const handleChange = async (e) => {
    console.log("handleChange.e", e);

    // get video blob
    const file = e.currentTarget.files[0];    
    console.log("file", file);

    // get video width and height
    const [width, height] = await loadVideoMetadata(file);    
    console.log("width", width);
    console.log("height", height);

    // get local url
    const url = URL.createObjectURL(file);

    inputChanged(file, url, width, height);
  };

  function loadVideoMetadata(blob) {
    return new Promise((resolve, reject) => {
      try {
        const url = URL.createObjectURL(blob);
        videoRef.current.src = url;
      } catch (err) {
        console.log("err", err);
      }

      videoRef.current.onloadedmetadata = function (video) {
        console.log("video", video);
        const width = video.srcElement.videoWidth;
        const height = video.srcElement.videoHeight;

        resolve([width, height]);
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
