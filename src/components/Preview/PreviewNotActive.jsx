import React, {useState} from "react";
import Box from "@mui/material/Box";
import VideoJs from "../VideoJs/VideoJs";
import VideoComponentsNotActive from "./VideoComponentsNotActive";


const PreviewNotActive = (props) => {

    const {name, url, id, data} = props;

    const [activate, setActivate] = useState(false);
    const [description, setDescription] = useState(false);

    const handleMouseOver = () => {
        setDescription(true);
        setActivate(true);
    }

    const handleMouseLeave = () => {
        setDescription(false);
        setActivate(false);
    }

    const videoComponent_parameters = {
        activate: activate,
        description: description,
        name: name,
        url: url,
        id: id,
        data: data,
    }

    return(
        <Box width={480} m={1} mt={0} ml={0} position={`relative`}
             onMouseEnter={handleMouseOver}
             onMouseLeave={handleMouseLeave}>
            <VideoJs url={null} controls={false} pause={true}/>
            <VideoComponentsNotActive {...videoComponent_parameters}/>
        </Box>
    )
}

export default PreviewNotActive;