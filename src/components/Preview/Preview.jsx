import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import VideoComponents from "./VideoComponents";
import VideoJs from "../VideoJs/VideoJs";
import {useGetStreamQuery, useLazyGetStreamQuery} from "../store/streamApi";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";


const Preview = (props) => {

    const {name, url, id, isActive} = props;

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState(false);
    const [enable, setEnable] = useState(isActive)
    const [trigger, { data = null }] = useLazyGetStreamQuery();
    const videoUrl = data;

    useEffect(()=>{
        if (isActive){
            trigger(id);
        }
    }, [isActive])

    const handleMouseOver = () => {
        setDescription(true);
        setOpen(true);
    }

    const handleMouseLeave = () => {
        setDescription(false);
        setOpen(false);
    }

    const videoComponent_parameters = {
        open: open,
        description: description,
        name: name,
        url: url,
        id: id,
        enable,
        setEnable,
        openDisable: !!url,
    }

    return(
        <Box width={`100%`}
             height={`100%`}
             display={`flex`}
             alignItems={`center`}
             position={`relative`}
             onMouseEnter={handleMouseOver}
             onMouseLeave={handleMouseLeave}>
            <VideoJs url={videoUrl} controls={false} isActive={isActive}/>
            <VideoComponents {...videoComponent_parameters}/>
        </Box>
    )
}

export default Preview
