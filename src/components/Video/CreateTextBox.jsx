import {TextField} from "@mui/material";
import * as React from "react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {setShapeName} from "../store/boundariesSlice";
import {useDispatch} from "react-redux";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const CreateTextBox = (props) => {

    const { id } = props;
    const { name } = props;

    const  dispatch = useDispatch();

    const handleNameChange = (event) => {
        dispatch(setShapeName({ id: id, value: event.target.value }));
    }

    return(
        <RTL>
            <TextField
                fullWidth
                id="outlined-name"
                label="نام"
                value={name}
                onChange={handleNameChange}
            />
        </RTL>
    );
}

export default CreateTextBox;