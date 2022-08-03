import TextField from '@mui/material/TextField';
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

const Username = (props) => {
    const {username, setUsername} = props;
    const { error } = props;

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    return(
        <RTL>
            <Box sx={{ bgcolor: `#fff`, borderRadius: 1, p: 1, m: 1, }}>
                <TextField id="outlined-basic" fullWidth
                           value={username}
                           error={!!error}
                           size={`small`} onChange={handleChange} dir={`rtl`}
                           label="نام کاربری" variant="outlined" />
            </Box>
        </RTL>
    );
}

export default Username;