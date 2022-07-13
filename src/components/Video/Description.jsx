import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Grid, Stack} from "@mui/material";

const Description = (props) => {
    return(
        <Grid container spacing={1} mb={5}>
            <Grid item xs={3}>
                <Paper sx={{ p: 1, backgroundColor: `#1d1d1d`}}>
                    <Typography color={`#fff`}>{props.name}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Paper sx={{ p: 1, backgroundColor: `#1d1d1d`}}>
                    <Typography sx={{ wordBreak: `break-all` }} 
                    color={`#fff`}>Address: {props.url}</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Description;