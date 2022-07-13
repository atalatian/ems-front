import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Stack} from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {useState} from "react";
import MyDialog from "./MyDialog";
import MyDeleteDialog from "./MyDeleteDialog";
import MyCardActions from "./MyCardActions";
import MyCardContents from "./MyCardContents";

export default function MyCard(props) {
    const height = 250

    const {created_at, detector, snapshot, updated_at ,id} = props;
    const { selectedIds, setSelectedIds } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleZoomClick = () => {
        setDialogOpen(true);
    }

    const handleDeleteClick = () => {
        setDeleteDialogOpen(true)
    }


    return (
        <>
            <Card sx={{ width: 345, position: `relative`, bgcolor: `#1d1d1d`, m: 1 }}>
                <CardMedia
                    component="img"
                    height={height}
                    image={snapshot ? snapshot : "https://via.placeholder.com/300/09f/fff.png"}
                    alt="green iguana"
                />
                <MyCardContents {...{handleZoomClick, created_at, updated_at,
                    id, detector, height}} {...{selectedIds, setSelectedIds}}/>
                <MyCardActions {...{height, snapshot, handleDeleteClick}}/>
            </Card>
            <MyDialog {...{dialogOpen, setDialogOpen}} snapShot={snapshot}/>
            <MyDeleteDialog id={id}
                            {...{deleteDialogOpen, setDeleteDialogOpen}}
                            {...{selectedIds, setSelectedIds}}/>
        </>
    );
}
