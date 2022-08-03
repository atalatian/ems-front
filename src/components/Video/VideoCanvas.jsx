import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Video from "./Video";
import Boundaries from "../Boundaries/Boundaries";

const VideoCanvas = (props) => {

    const { id } = props;
    const { showBoundaries } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    return(
        <Box position={`relative`}>
            <Box display={`flex`} justifyContent={`row`}>
                <Video id={id} controls={!showBoundaries} setHeight={setHeight} setWidth={setWidth}/>
            </Box>
            {
                showBoundaries &&
                <Box position={`absolute`} top={0}>
                    <Boundaries width={width} height={height}/>
                </Box>
            }
        </Box>
    );
}

export default VideoCanvas;