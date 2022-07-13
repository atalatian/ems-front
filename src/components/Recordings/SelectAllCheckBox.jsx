import {Checkbox} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useEffect, useState} from "react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import React from "react";
import Box from "@mui/material/Box";


const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const SelectAllCheckBox = (props) => {

    const [checked, setChecked] = useState(false);
    const { selectedIds, setSelectedIds } = props;
    const { caughtEvents } = props;

    useEffect(()=>{
        setChecked(selectedIds.length === caughtEvents.length)
    }, [caughtEvents, selectedIds])

    const handleChange = () => {
        if (!caughtEvents.length) return;
        setChecked((prev)=> {
            if (prev){
                setSelectedIds([])
                return false;
            }
            const newSelectedIds = caughtEvents.map(event => event.id);
            setSelectedIds(newSelectedIds);
            return true;
        });
    };

    return(
        <Box mr={`auto`}>
            <RTL>
                <FormControlLabel control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                } label={`انتخاب همه`}/>
            </RTL>
        </Box>
    );
}

export default SelectAllCheckBox;