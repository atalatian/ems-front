import Box from "@mui/material/Box";
import {Button, ButtonGroup, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import PolylineIcon from '@mui/icons-material/Polyline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {useDispatch, useSelector} from "react-redux";
import {
    deleteShape,
    editPoints,
    setAccepted, setId,
    setIsFinished,
    setIsMouseOverStartPoint,

    setType
} from "../store/boundariesSlice";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import {setSelectedId} from "../store/boundariesControlSlice";
import * as React from "react";
import Paper from "@mui/material/Paper";
import CreateTextBox from "./CreateTextBox";
import Typography from "@mui/material/Typography";
import {useSetShapeMutation} from "../store/dataApi";

const CreateShapeForm = (props) => {

    const shape = useSelector(state => state.boundaries.find((shape) => !shape.isAccepted))
    const selectedId = useSelector(state => state.boundariesControl.selectedId);
    const [setShape] = useSetShapeMutation();

    const { cameraId } = props;

    const id = shape?.id;
    const name = shape?.name;
    const type = shape?.type;

    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleShapeClick = (name) => {
        return (e) => {
            dispatch(setType({ id: id, value: name }));
            dispatch(editPoints({ id: id, value: [] }));
            dispatch(setIsFinished({ id: id, value: false }));
            dispatch(setIsMouseOverStartPoint({ id: id, value: false }));
            if (selectedId === id){
                dispatch(setSelectedId(null))
            }
        }
    }


    const handleCleanClick = () => {
        dispatch(editPoints({ id: id, value: [] }));
        dispatch(setIsFinished({ id: id, value: false }));
        dispatch(setIsMouseOverStartPoint({ id: id, value: false }));
        if (selectedId === id){
            dispatch(setSelectedId(null))
        }
    }


    const handleDiscardClick = () => {
        dispatch(deleteShape({ id: id }));
        if (selectedId === id){
            dispatch(setSelectedId(null))
        }
    }


    const handleAcceptClick = async () => {
        if (shape.isFinished){
            setError(false)
            dispatch(setAccepted({ id: id, value: true }));
            const newShape = {
                name: shape.name,
                boundary: {
                    points: shape.points.map(point =>
                        [point[0] + shape.x, point[1] + shape.y]),
                },
                geometry_type: shape.type,
                stream: cameraId,
            }
            const { data } = await setShape(newShape);
            dispatch(setId({ id: id, value: data.id }));
            if (selectedId === id){
                dispatch(setSelectedId(data.id));
            }
        }else {
            setError(true)
        }
    }



    return(
        shape &&
        <Paper sx={{ p: 1 }}>
            <Stack>
                <Box mb={1}>
                    <CreateTextBox id={id} name={name}/>
                </Box>
                <Stack direction={`row`} justifyContent={`space-between`}>
                    <Stack mb={1} border={1} borderRadius={1} mt={1}>
                        <Box bgcolor={`#fff`} mr={1} sx={{ transform: `translateY(-50%)` }}
                             position={`absolute`} width={`fit-content`}>
                            <Typography>??????????</Typography>
                        </Box>
                        <Box>
                            <Button dir={`ltr`} endIcon={<DriveFileRenameOutlineIcon/>}
                                    sx={{m: 1, mt: 2}}
                                    onClick={handleShapeClick('line')}
                                    variant={(type === 'line') ? `contained` : 'outlined'}
                            >
                                ????
                            </Button>
                        </Box>
                        <Box>
                            <Button dir={`ltr`} endIcon={<PolylineIcon/>}
                                    sx={{m: 1, mt: 0}}
                                    onClick={handleShapeClick('polygon')}
                                    variant={(type === 'polygon') ? `contained` : 'outlined'}>
                                ?????? ????????
                            </Button>
                        </Box>
                    </Stack>
                    <Box>
                        <Button dir={`ltr`} endIcon={<AutoFixNormalIcon/>} sx={{
                            backgroundColor: 'warning.main',
                            m: 1, mr: 0, mb: 0,
                            ":hover" : {
                                backgroundColor: 'warning.dark',
                            }
                        }}
                                onClick={handleCleanClick}
                                variant={`contained`}>
                            ?????? ????????
                        </Button>
                    </Box>
                </Stack>
                {
                    error &&
                    <Box>
                        <Typography sx={{ color: `red` }}>???????? ?????????? ???????? ???? ???????? ????????.</Typography>
                    </Box>
                }
                <Box textAlign={`end`}>
                    <Button onClick={handleAcceptClick}
                            sx={{ m: 1, mr: 0, mt: 0, mb: 0, }} variant={`contained`}>
                        ??????????
                    </Button>
                    <Button onClick={handleDiscardClick} sx={{ m: 1, mr: 0, mt: 0, mb: 0,
                        bgcolor: `error.main`,
                        color: `#fff`,
                        '&:hover': { backgroundColor: `error.dark` }}}>
                        ????????????
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );
}

export default CreateShapeForm;