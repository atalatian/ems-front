import Password from "./password";
import Username from "./username";
import MyButton from "./button";
import { useState } from "react";
import Error from "./Error";
import { Stack } from "@mui/material";
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import cctv from '../../cctv.png';
import Avatar from "@mui/material/Avatar";
import cctv2 from '../../cctv2.svg';

const Login = () => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState('');
    const token = useSelector(state => state.auth.token);

    return(
        !token
            ?
            <form>
                <Stack width={`100%`} maxWidth={500} position={`relative`} zIndex={1}
                       sx={{ bgcolor: `#1d1d1d`, borderRadius: 1, m: `0px auto`, p: 3}}>
                    <Box mb={3} display={`grid`} sx={{ placeItems: `center` }}>
                        <Avatar alt="cctv" src={cctv2} sx={{ bgcolor: `#fff`, width: 100, height: 100, p: 2 }} />
                    </Box>
                    <Username username={username} setUsername={setUsername} error={error}/>
                    <Password password={password} setPassword={setPassword} error={error}/>
                    <Error error={error}/>
                    <MyButton username={username} password={password} setError={setError}/>
                </Stack>
            </form>
            :
            <Navigate to="/dashboard/" replace={true} />
    );
}


export default Login;