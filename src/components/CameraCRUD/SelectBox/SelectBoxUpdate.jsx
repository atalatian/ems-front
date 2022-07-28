import {useEffect, useRef, useState} from 'react';
import SelectBox from "./SelectBox";
import {IconButton, Stack} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {Done, Undo} from '@mui/icons-material';
import * as React from "react";
import {useSetStreamMutation} from "../../store/dataApi";

const SelectBoxUpdate = (props) => {
    const { detectors, setDetectors } = props;
    const { defaultDetectors } = props;
    const { submit } = props;

    const MODE_NORMAL = 'normal';
    const MODE_EDIT = 'edit';

    const [setStream] = useSetStreamMutation();

    const [mode, setMode] = useState(MODE_NORMAL);
    const [disable, setDisable] = useState(false);
    const remember = useRef([]);

    useEffect(()=>{
        setDetectors(defaultDetectors);
    }, [])

    const handleEditButton = () =>{
        remember.current = detectors;
        setMode(MODE_EDIT);
        setDisable(true);
    }

    const handleApplyButton = async () =>{
        await setStream(submit);
        //Send Data
        setMode(MODE_NORMAL);
        setDisable(false);
    }

    const handleRevertButton = () =>{
        const oldValue = remember.current;
        setDetectors(oldValue);
        setMode(MODE_NORMAL);
        setDisable(false);
    }

    const returnEditButton = () => {
        return(
            <IconButton onClick={handleEditButton}
                        sx={{ mr: 1, bgcolor: `primary.main`, color: `#fff`,
                '&:hover': { backgroundColor: `primary.dark` }, }}>
                <EditIcon/>
            </IconButton>
        );
    }

    const returnResultButtons = () => {
        return(
            <Stack flexDirection={`row`} alignItems={`center`}>
                <IconButton onClick={handleApplyButton} 
                sx={{ mr: 1, bgcolor: `success.main`,
                    color: `#fff`,
                    '&:hover': { backgroundColor: `success.dark` }, }} size={`small`}><Done/></IconButton>
                <IconButton onClick={handleRevertButton}
                 sx={{ mr: 1, bgcolor: `error.main`,
                     color: `#fff`,
                     '&:hover': { backgroundColor: `error.dark` }, }} size={`small`}><Undo/></IconButton>
            </Stack>
        );
    }


    const returnButtons = () =>{
        if (mode === MODE_NORMAL){
            return returnEditButton();
        }else if (mode === MODE_EDIT){
            return returnResultButtons();
        }else {
            return returnEditButton();
        }
    }

    const selectBox_parameters = {
        disable: disable,
        ...props
    }


    return(
        <Stack flexDirection={`row`} alignItems={`center`}>
            <SelectBox {...selectBox_parameters}/>
            {returnButtons()}
        </Stack>  
    );
}


export default SelectBoxUpdate;