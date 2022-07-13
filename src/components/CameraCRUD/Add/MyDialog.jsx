import {Dialog, DialogActions, DialogContent, DialogTitle, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextBox from "../TextBox/TextBox";
import SelectBox from "../SelectBox/SelectBox";
import SubmitButton from "./SubmitButton";
import {useState} from "react";

const MyDialog = (props) => {

    const { open, setOpen } = props;

    const width = 300;
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [detectors, setDetectors] = useState([]);

    const handleClose = () => {
        setOpen(false);
    }

    const submit = {
        name,
        url,
        detectors,
    }

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>اضافه کردن دوربین</DialogTitle>
            <DialogContent>
                <Stack width={width}>
                    <Box mt={2} mb={2}>
                        <TextBox value={name} setValue={setName} label={`اسم`}/>
                    </Box>
                    <Box mb={2}>
                        <TextBox value={url} setValue={setUrl} label={`آدرس`}/>
                    </Box>
                    <Box mb={2}>
                        <SelectBox detectors={detectors} setDetectors={setDetectors}/>
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions>
                <SubmitButton submit={submit} {...{setUrl, setName, setDetectors}}/>
                <Button sx={{ m: 1 }} onClick={handleClose}>بستن</Button>
            </DialogActions>
        </Dialog>
    );
}

export default MyDialog;