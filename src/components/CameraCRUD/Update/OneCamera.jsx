import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import TextBoxes from "../TextBox/TextBoxes";
import SelectBoxUpdate from '../SelectBox/SelectBoxUpdate';
import {useGetDetectorsQuery} from "../../store/dataApi";

const OneCamera = (props) => {

    const { stream } = props;
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [detectors, setDetectors] = useState([]);
    const width = `100%`;

    const textBoxes_parameters = {
        name: name,
        setName: setName,
        defaultName: stream.name,
        url: url,
        setUrl: setUrl,
        defaultUrl: stream.url,
    }

    const selectBox_parameters = {
        detectors: detectors,
        setDetectors: setDetectors,
        defaultDetectors: stream.detectors,
    }

    const submit_parameters = {
        ...stream,
        name: name,
        url: url,
        detectors: detectors,
    }

    return(
        <Stack width={width}>
            <TextBoxes {...textBoxes_parameters} submit={submit_parameters}/>
            <SelectBoxUpdate {...selectBox_parameters} submit={submit_parameters}/>
        </Stack>  
    );
}

export default OneCamera;