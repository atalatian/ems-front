import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Stack} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch, useSelector} from "react-redux";
import {deleteShape, editPoints} from "../store/boundariesSlice";
import { setMode } from "../store/boundariesControlSlice";
import Paper from "@mui/material/Paper";

const ModeSelect = (props) => {

    const mode = useSelector(state => state.boundariesControl.mode);
    const selectedId = useSelector(state => state.boundariesControl.selectedId)
    const dispatch = useDispatch();
    const lastShape = useSelector(state => state.boundaries[state.boundaries.length - 1])
    const { showBoundaries } = props;

    const handleChange = (event) => {
        if (!lastShape.isFinished && lastShape.points.length > 0){
            dispatch(editPoints({ id: lastShape.id, value: [] }))
        }

        dispatch(setMode(event.target.value))
    };

    const handleDelete = () => {
        dispatch(deleteShape({ id: selectedId }))
    }

    return(
        showBoundaries &&
        <FormControl component={Paper} sx={{ m: 1, p: 2, border: 1 }}>
            <FormLabel id="demo-radio-buttons-group-label">Mode</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={mode}
                onChange={handleChange}
            >
                <FormControlLabel value="draw" control={<Radio />} label="Draw" />
                <FormControlLabel value="edit" control={<Radio />} label="Edit" />
                <Stack flexDirection={`row`}>
                    <FormControlLabel value="select" control={<Radio />} label="Select" />
                    {mode === 'select' &&
                        <IconButton onClick={handleDelete} size={`small`} sx={{
                            bgcolor: `error.main`,
                            color: `#fff`,
                            m: 1,
                            ml: 0,
                            boxShadow: 3,
                            '&:hover': { backgroundColor: `error.main` }
                        }}>
                            <DeleteIcon/>
                        </IconButton>
                    }
                </Stack>

            </RadioGroup>
        </FormControl>
    )
}

export default ModeSelect;