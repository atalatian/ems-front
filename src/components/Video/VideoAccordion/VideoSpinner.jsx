import Box from "@mui/material/Box";
import Spinner from "../../Spinner/Spinner";
import Typography from "@mui/material/Typography";

const VideoSpinner = () => {
    return(
        <Box display={`flex`} alignItems={`center`} justifyContent={`center`}>
            <Box>
                <Typography>Catching Events</Typography>
            </Box>
            <Spinner/>
        </Box>
    );
}

export default VideoSpinner;