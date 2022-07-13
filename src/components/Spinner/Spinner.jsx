import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
    return(
        <Box textAlign={`center`} m={2}>
            <CircularProgress/>
        </Box>
    )
}

export default Spinner;