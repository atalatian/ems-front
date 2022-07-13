import Box from "@mui/material/Box";
import React, {useEffect} from 'react';
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {useGetDetectorsQuery} from "../store/dataApi";
import {useDispatch} from "react-redux";
import {setDecoders} from "../store/decodersSlice";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}


const MySelect = (props) => {

    const {detector, setDetector} = props;

    const dispatch = useDispatch();

    const { data = [] } = useGetDetectorsQuery();
    const detectors = data;

    useEffect(()=>{
        dispatch(setDecoders(detectors))
    }, [detectors])

    const handleChange = (event) => {
        const value = event.target.value;
        setDetector(value);
    };

    const oneMenuItem = ({ id, name }) =>{
        return(
            <MenuItem key={id} value={name} sx={{ textTransform: `capitalize` }}>
                {name}
            </MenuItem>
        )
    }


    return(
        <Box sx={{ width: 250, m: 1, bgcolor: `#fff` }}>
            <RTL>
                <FormControl fullWidth size={`small`}>
                    <InputLabel id="demo-simple-select-label">آشکار ساز ها</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={detector}
                        label="آشکار ساز ها"
                        onChange={handleChange}
                    >
                        <MenuItem value='all'>همه</MenuItem>
                        {
                            detectors.map((detector)=> oneMenuItem(detector))
                        }
                    </Select>
                </FormControl>
            </RTL>
        </Box>
    );
}


export default MySelect;