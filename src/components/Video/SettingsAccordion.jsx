import Box from "@mui/material/Box";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {BorderOuter, Delete, Done, Settings, Undo} from "@mui/icons-material";
import {ListItem, ListItemButton, ListItemIcon, Stack} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {useDispatch, useSelector} from "react-redux";
import Paper from "@mui/material/Paper";
import {useEffect, useRef, useState} from "react";
import {addShape, deleteShape, setEditable, setShape} from "../store/boundariesSlice";
import CameraUpdate from "../CameraCRUD/Update/CameraUpdate";
import {useGetStreamQuery} from "../store/dataApi";
import OneCamera from "../CameraCRUD/Update/OneCamera";
import {setSelectedId} from "../store/boundariesControlSlice";
import AddIcon from "@mui/icons-material/Add";
import CreateShapeForm from "./CreateShapeForm";
import shapesObj from "../store/shapesObj";


const SettingsAccordion = (props) => {

    const { showBoundaries, setShowBoundaries } = props
    const [expanded, setExpanded] = React.useState(false);
    const list = useRef();
    const remShape = useRef([]);

    const { urlID } = props;

    const dispatch = useDispatch();

    const allShapes = useSelector(state => state.boundaries);
    const selectedId = useSelector(state => state.boundariesControl.selectedId);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    useEffect(()=>{
        if (expanded === 'panel2'){
            setShowBoundaries(true);
        }else if (!expanded){
            setShowBoundaries(false);
        }else if (expanded === 'panel1'){
            setShowBoundaries(false);
        }
    }, [expanded])

    const handleEditClick = (id, shape) => {
        return (e) => {
            e.stopPropagation()
            dispatch(setEditable({ id: id, value: true }));
            remShape.current.push(shape);
        }
    }

    const handleDeleteClick = (id) => {
        return (e)=> {
            e.stopPropagation()
            dispatch(deleteShape({ id: id }))
            remShape.current = remShape.current.filter((shape)=> shape.id !== id);
        }
    }

    const handleRef = (id) => {
        return (el) => {
            if (el){
                if (selectedId === id){
                    el.parentElement.scrollTop = el.offsetTop
                }
            }
        }
    }

    const handleSuccessClick = (id) => {
        return (e) => {
            e.stopPropagation();
            dispatch(setEditable({ id: id, value: false }));
        }
    }

    const handleRevertClick = (id) => {
        return (e) => {
            e.stopPropagation();
            const value = remShape.current.find((shape) => shape.id === id);
            dispatch(setShape({ id: id, value: value }));
            remShape.current = remShape.current.filter((shape)=> shape.id !== id);
        }
    }

    const handleItemClick = (id) => {
        return (e) => {
            dispatch(setSelectedId(id));
        }
    }

    const handleAddButton = () => {
        const newShape = {...shapesObj};
        newShape.id = Date.now().valueOf();
        dispatch(addShape(newShape));
    }

    const oneListItem = ({ id, isFinished, editable, name }, shape) => {
        if (!isFinished) return null;

        return(
            <ListItem onClick={handleItemClick(id)} key={id} ref={handleRef(id)} sx={{ borderBottom: 1,
                borderRight: (selectedId === id) ? 5 : null,
                borderRightColor: `primary.dark`,
                ":hover": {
                    backgroundColor: `#D3D3D3`,
                    cursor: 'pointer',
                }
            }}>
                <ListItemText sx={{ textAlign: `right` }}
                              primary={`چند ضلعی`} secondary={name || id}/>
                <ListItemIcon sx={{ justifyContent: `flex-end` }}>
                    <Stack direction={`row-reverse`}>
                        <IconButton onClick={handleDeleteClick(id)}
                                    sx={{ bgcolor: `error.main`, color: `#fff`,
                                        m: 1, mr: 0, mt: 0, mb: 0,
                                        '&:hover': { backgroundColor: `error.dark` }}}>
                            <Delete/>
                        </IconButton>
                        {
                            editable ?
                                <Stack flexDirection={`row-reverse`} alignItems={`center`}>
                                    <IconButton onClick={handleSuccessClick(id)} sx={{ m: 1, mr: 0, mt: 0, mb: 0,
                                        bgcolor: `success.main`,
                                        color: `#fff`,
                                        '&:hover': { backgroundColor: `success.dark` },
                                    }} size={`small`}><Done fontSize={`small`}/></IconButton>
                                    <IconButton onClick={handleRevertClick(id)} sx={{ m: 1, mr: 0, mt: 0, mb: 0,
                                        bgcolor: `error.main`,
                                        color: `#fff`,
                                        '&:hover': { backgroundColor: `error.dark` },
                                    }} size={`small`}><Undo fontSize={`small`}/></IconButton>
                                </Stack>
                                :
                                <IconButton onClick={handleEditClick(id, shape)}
                                            sx={{ bgcolor: `primary.main`, color: `#fff`,
                                                m: 1, mr: 0, mt: 0, mb: 0,
                                                '&:hover': { backgroundColor: `primary.dark` }}}>
                                    <EditIcon/>
                                </IconButton>
                        }
                    </Stack>
                </ListItemIcon>
            </ListItem>
        );
    }

    return (
        <Box mr={1} width={`100%`} maxWidth={`300px`}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box>
                        <Typography>تنضیمات</Typography>
                    </Box>
                    <Box mr={1}>
                        <Settings/>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <CameraUpdate id={urlID} expanded={expanded}/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Box>
                        <Typography>مرزبندی</Typography>
                    </Box>
                    <Box mr={1}>
                        <BorderOuter/>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack>
                        <Box boxShadow={2} mb={1}>
                            {
                                allShapes.filter((shape) => shape.isAccepted).length > 0 ?
                                    <List ref={list} sx={{ pb: 0, pt: 0, maxHeight: `230px`, overflow: `auto` }}>
                                        {
                                            allShapes.filter((shape) => shape.isAccepted)
                                                .map((shape) => oneListItem(shape, shape))
                                        }
                                    </List>
                                    :
                                    <Paper sx={{ p: 1 }}>
                                        <Typography>
                                            هیچ شکلی وجود ندارد
                                        </Typography>
                                    </Paper>
                            }
                        </Box>
                        <Button onClick={handleAddButton}
                                dir={`ltr`} endIcon={<AddIcon/>} variant={`contained`}>
                            اضافه کردن
                        </Button>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <CreateShapeForm/>
        </Box>
    );
}

export default SettingsAccordion;