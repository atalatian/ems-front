import {Portal, Stack} from "@mui/material";
import {forwardRef, useRef, useState} from "react";
import TextBox from "../TextBox/TextBox";
import SelectBox from "../SelectBox/SelectBox";
import SubmitButton from "./SubmitButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";

const OneCamera = forwardRef((props, ref) => {
    const width = 300;
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [detectors, setDetectors] = useState([]);

    const submit = {
        name,
        url,
        detectors,
    }

    return(
        <Paper sx={{ p: 2, border: 1,
            width: `fit-content`,
            position: `absolute`, top: `50%`,
            left: `50%`, transform: `translate(-50%, -50%)` }} ref={ref}>
            <Stack width={width}>
                <Box mb={2}>
                    <TextBox value={name} setValue={setName} label={`اسم`} dir={`rtl`}/>
                </Box>
                <Box mb={2}>
                    <TextBox value={url} setValue={setUrl} label={`آدرس`} dir={`ltr`}/>
                </Box>
                <Box mb={2}>
                    <SelectBox detectors={detectors} setDetectors={setDetectors}/>
                </Box>
                <SubmitButton submit={submit} {...{setUrl, setName, setDetectors}}/>
            </Stack>
        </Paper>
    );
})


export default OneCamera;