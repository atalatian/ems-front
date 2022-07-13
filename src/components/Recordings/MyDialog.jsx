import {Dialog, DialogActions, DialogContent} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";


const MyDialog = (props) => {
    const { dialogOpen, setDialogOpen } = props;
    const { snapShot } = props;

    const handleClose = () => {
        setDialogOpen(false);
    };

    return(
        <Dialog dir="rtl" open={dialogOpen} onClose={handleClose}
                fullWidth={true} maxWidth={`md`}>
            <DialogContent>
                <Box width={`100%`}>
                    <img width={`100%`}
                         src={snapShot ? snapShot : "https://via.placeholder.com/300/09f/fff.png"}
                         alt="Snapshot"/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant={`contained`} onClick={handleClose}>بستن</Button>
            </DialogActions>
        </Dialog>
    );

}

export default MyDialog;