import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Box from "@mui/material/Box";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const Password = (props) => {
    const {password, setPassword} = props;
    const { error } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <RTL>
            <Box sx={{ bgcolor: `#fff`, borderRadius: 1, p: 1, m: 1 }}>
                <FormControl fullWidth variant="outlined" size={`small`} dir={`rtl`}>
                    <InputLabel error={!!error}
                                htmlFor="outlined-adornment-password">رمز عبور</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete={`on`}
                        value={password}
                        error={!!error}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="رمز عبور"
                    />
                </FormControl>
            </Box>
        </RTL>

    );
}

export default Password;