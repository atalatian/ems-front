import Box from "@mui/material/Box";
import VideoJs from "../VideoJs/VideoJs";
import {useGetStreamQuery} from "../store/streamApi";

const Video = (props) => {

    const { setHeight, setWidth, controls,  id } = props;

    const { data = null } = useGetStreamQuery(id);

    return(
        <Box width={852}>
            <VideoJs url={data} controls={controls}
                     isActive={true} setHeight={setHeight} setWidth={setWidth}/>
        </Box>
    );
}

export default Video;
