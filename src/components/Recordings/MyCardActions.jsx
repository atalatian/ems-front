import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import * as React from "react";

const MyCardActions = (props) => {

    const { height, snapshot, handleDeleteClick } = props;

    return(
        <CardActions sx={{ p: 0,
            width: `100%`,
            position: `absolute`,
            top: height,
            transform: `translateY(-50%)`,
            justifyContent: `flex-end`,
        }}
                     disableSpacing>
            <IconButton download={true} target={`_blank`}
                        sx={{
                            bgcolor: `#0E0E0E`,
                            color: `#fff`,
                            m: 1,
                            mr: 0,
                            boxShadow: 3,
                            '&:hover': { backgroundColor: `#0E0E0E` }
                        }} href={snapshot ? snapshot : "https://via.placeholder.com/300/09f/fff.png"}>
                <DownloadIcon/>
            </IconButton>
            <IconButton onClick={handleDeleteClick} sx={{
                bgcolor: `error.main`,
                color: `#fff`,
                m: 1,
                mr: 0,
                boxShadow: 3,
                '&:hover': { backgroundColor: `error.dark` }
            }}>
                <DeleteIcon/>
            </IconButton>
        </CardActions>
    )
}


export default MyCardActions;