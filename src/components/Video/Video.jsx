import Box from "@mui/material/Box";
import VideoJs from "../VideoJs/VideoJs";
import {useGetStreamQuery} from "../store/streamApi";

const Video = (props) => {

    const { setHeight, setWidth, controls,  id } = props;

    const { data = null } = useGetStreamQuery(id);

    return(
        !!data
            ?
            <Box width={852} mb={1}>
                <VideoJs url={data} controls={controls} setHeight={setHeight} setWidth={setWidth}/>
            </Box>
            :
            <div>Fetching...</div>
    );
}

export default Video;
