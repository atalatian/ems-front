import { TextField, Box} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import * as React from "react";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const TextBox = (props) => {

    const { label, value, setValue, disable = true, dir } = props

    const handleChange = (event) =>{
        setValue(event.target.value);
    }

    const inputProps = {
        startAdornment: <InputAdornment position="start">rtsp://</InputAdornment>,
    }

    return(
        <RTL>
            <TextField id="outlined-basic"
                       fullWidth
                       inputProps={{ dir: dir }}
                       disabled={!disable}
                       label={label}
                       variant="outlined"
                       value={value}
                       onChange={handleChange}
            />
        </RTL>
    );
}



export default TextBox;