import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {useGetDetectorsQuery} from "../../store/dataApi";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}


export default function SelectBox(props) {
    const { detectors, setDetectors } = props;
    const { disable = true } = props

    const { data = [] } = useGetDetectorsQuery();
    const detectorsData = data;

    const theme = useTheme();

    const handleChange = (event) => {
        const {target: { value },} = event;
        setDetectors(value);
    };

    const oneMenuItem = (detectorData) =>{
        const { id, name } = detectorData;


        return(
            <MenuItem key={id}
                      value={id}
                      sx={{ textTransform: `capitalize` }}
            >
                {name}
            </MenuItem>
        );
    }

    const getLabel = (value) => {
        return detectorsData.find((detector) => detector.id === value)?.name;
    }

    return (
        <Box flexGrow={1}>
            <RTL>
                <FormControl fullWidth disabled={!disable}>
                    <InputLabel id="demo-multiple-chip-label">آشکار ساز ها</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip fuck"
                        multiple
                        value={detectors}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="آشکار ساز ها" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={getLabel(value)}
                                          sx={{ textTransform: `capitalize` }}/>
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {
                            detectorsData.map((detectorData)=>
                                oneMenuItem(detectorData, detectors, theme))
                        }
                    </Select>
                </FormControl>
            </RTL>
        </Box>
    );
}
