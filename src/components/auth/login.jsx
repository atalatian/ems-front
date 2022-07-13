import Password from "./password";
import Username from "./username";
import MyButton from "./button";
import { useState } from "react";
import Error from "./Error";
import { Stack } from "@mui/material";
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const token = useSelector(state => state.auth.token);

    return(
        !token
            ?
            <form>
                <Stack maxWidth={300} sx={{ bgcolor: `#1d1d1d`, borderRadius: 1, m: `8px auto` }}>
                    <Username username={username} setUsername={setUsername}/>
                    <Password password={password} setPassword={setPassword}/>
                    <Error error={error}/>
                    <MyButton username={username} password={password} setError={setError}/>
                </Stack>
            </form>
            :
            <Navigate to="/dashboard/" replace={true} />
    );
}


export default Login;