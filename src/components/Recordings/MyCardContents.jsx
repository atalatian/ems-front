import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import UpdateIcon from "@mui/icons-material/Update";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import MyCheckBox from "./MyCheckBox";

const MyCardContents = (props) => {

    const { handleZoomClick, detector,
        created_at, updated_at, height, id } = props;

    const { selectedIds, setSelectedIds } = props;

    return(
        <CardContent sx={{ p: 0 }}>
            <Box position={`absolute`}
                 top={0} left={`100%`} display={`flex`}
                 justifyContent={`space-between`} width={`100%`}
                 sx={{ transform: `translateX(-100%)` }}>
                <IconButton onClick={handleZoomClick} sx={{
                    bgcolor: `warning.main`,
                    color: `#fff`,
                    m: 1,
                    ml: 0,
                    boxShadow: 3,
                    '&:hover': { backgroundColor: `warning.dark` }
                }}>
                    <ZoomInIcon/>
                </IconButton>
                <MyCheckBox {...{selectedIds, setSelectedIds}} id={id}/>
            </Box>
            <Box sx={{
                position: `absolute`,
                top: height,
                transform: `translateY(-100%)`
            }}>
                <Paper sx={{ p: 1, m: 1, backgroundColor: `#1d1d1d`,
                    width: `fit-content`}}>
                    <Typography variant="h5" component="div" color={`#fff`}>
                        {id}
                    </Typography>
                </Paper>
                <Paper sx={{ p: 1, m: 1, backgroundColor: `#1d1d1d`,
                    width: `fit-content`}}>
                    <Typography variant="body2" color="#fff">
                        {detector}
                    </Typography>
                </Paper>
            </Box>
            <Stack m={1} flexDirection={`row`} alignItems={`center`}>
                <Box m={1}>
                    <AccessTimeIcon htmlColor={`#fff`}/>
                </Box>
                <Typography  variant="body2" color={`#fff`}>
                    {created_at}
                </Typography>
            </Stack>
            <Stack m={1} flexDirection={`row`} alignItems={`center`}>
                <Box m={1}>
                    <UpdateIcon htmlColor={`#fff`}/>
                </Box>
                <Typography  variant="body2" color={`#fff`}>
                    {updated_at}
                </Typography>
            </Stack>
        </CardContent>
    );
}


export default MyCardContents;