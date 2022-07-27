import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Video from "./Video";
import Boundaries from "../Boundaries/Boundaries";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {deleteShape} from "../store/boundariesSlice";
import {setSelectedId} from "../store/boundariesControlSlice";

const VideoCanvas = (props) => {

    const { id } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const selectedId = useSelector(state => state.boundariesControl.selectedId)
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteShape({ id: selectedId }))
        dispatch(setSelectedId(null));
    }

    return(
        <Box position={`relative`}>
            <Box display={`flex`} justifyContent={`row`}>
                <Video id={id} controls={false} setHeight={setHeight} setWidth={setWidth}/>
            </Box>
            <Box position={`absolute`} top={0}>
                <Boundaries width={width} height={height}/>
            </Box>
        </Box>
    );
}

export default VideoCanvas;