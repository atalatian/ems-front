import Typography from "@mui/material/Typography";

const Error = (props) => {
    return(
        props.error && <Typography sx={{ color: `red`, m: 1 }}>Error</Typography>
    );
}

export default Error;