import Box from "@mui/material/Box";
import Login from "./login";
import Waves from "../Waves";

const LoginWave = () => {
    return(
        <Box width={`100%`}
             height={`100vh`}
             bgcolor={`black`}
             display={`flex`}
             flexDirection={`column`}
             justifyContent={`center`}>
            <Box m={5}>
                <Login/>
            </Box>
            <Waves/>
        </Box>
    );
}

export default LoginWave;