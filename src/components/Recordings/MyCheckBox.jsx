import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import {useEffect} from "react";

const MyCheckBox = (props) => {
    const [checked, setChecked] = React.useState(false);
    const { selectedIds, setSelectedIds } = props;
    const { id } = props

    useEffect(()=>{
        if (!!selectedIds.find((item)=> id === item)){
            setChecked(true);
        }else {
            setChecked(false);
        }
    }, [selectedIds])

    const handleChange = () => {
        setChecked((prev)=> {
            if (prev){
                setSelectedIds((prev) => prev.filter((item)=> item !== id))
                return false;
            }

            setSelectedIds((prev)=> [...prev, id])
            return true;
        });
    };

    return(
        <Box>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Box>
    );
}



export default MyCheckBox;