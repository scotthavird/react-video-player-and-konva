import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

export const File = (props) => {  
  const { inputChanged } = props;

  const handleChange = async (e) => {
    console.log("handleChange.e", e);

    // get video blob
    const file = e.currentTarget.files[0];    

    // get video local url    
    const url = URL.createObjectURL(file);

    inputChanged(url);
  };

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
    </>
  );
};
