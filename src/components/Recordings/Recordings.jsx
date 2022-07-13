import {Stack} from "@mui/material";
import Cards from "./Cards";
import {useGetEventsQuery} from "../store/dataApi";
import MyDialog from "./MyDialog";
import {useEffect, useState} from "react";
import MySelect from "./MySelect";
import React from "react";
import SelectiveDelButton from "./SelectiveDelButton";
import SelectAllCheckBox from "./SelectAllCheckBox";
import MyDeleteDialog from "./MyDeleteDialog";



const Recordings = (props) => {

    const [detector, setDetector] = useState('all');
    const [selectedIds, setSelectedIds] = useState([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const { data = [] } = useGetEventsQuery();

    const cards_parameters = {
        detector,
        caughtEvents: data,
    }

    return(
        <>
            <Stack direction={`row`} alignItems={`center`}>
                <MySelect {...{detector, setDetector}}/>
                <SelectiveDelButton {...{setDeleteDialogOpen}}/>
                <SelectAllCheckBox caughtEvents={data} {...{selectedIds, setSelectedIds}}/>
            </Stack>
            <Stack>
                <Stack flexDirection={`row`} flexWrap={`wrap`}>
                    <Cards {...cards_parameters} {...{selectedIds, setSelectedIds}}/>
                </Stack>
            </Stack>
            <MyDeleteDialog mode={`multiple`} {...{selectedIds, setSelectedIds}}
                            {...{deleteDialogOpen, setDeleteDialogOpen}}/>
        </>
    );
}

export default Recordings;