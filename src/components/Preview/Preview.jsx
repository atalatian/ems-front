import React, { useState } from "react";
import Box from "@mui/material/Box";
import VideoComponents from "./VideoComponents";
import VideoJs from "../VideoJs/VideoJs";
import {useGetStreamQuery} from "../store/streamApi";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";


const Preview = (props) => {

    const {name, url, id} = props;

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState(false);
    const { data = null } = useGetStreamQuery(id);
    const videoUrl = data;

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
    }

    return(
        <>
            {
                (!!videoUrl
                        ?
                        <Box width={480} m={1} mt={0} ml={0} position={`relative`}
                             onMouseEnter={handleMouseOver}
                             onMouseLeave={handleMouseLeave}>
                            <VideoJs url={videoUrl} controls={false}/>
                            <VideoComponents {...videoComponent_parameters}/>
                        </Box>
                        :
                        <Box m={1} mt={0} ml={0}>
                            <Paper elevation={3} sx={{ border: 1, width: `100px`,
                                height: `100px`, display: `grid`,
                                placeItems: `center`, bgcolor: `#1d1d1d` }}>
                                <CircularProgress sx={{ color: `#fff` }}/>
                            </Paper>
                        </Box>
                )
            }

        </>
    )
}

export default Preview
