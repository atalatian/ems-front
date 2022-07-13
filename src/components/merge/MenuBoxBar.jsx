import MyBox from "../menu/MyBox";
import MyBar from "../bar/MyBar";
import {Stack} from "@mui/material";
import {OpenCloseContextProvider} from "./OpenCloseContext";

const MenuBoxBar = () => {
    return(
        <OpenCloseContextProvider>
            <Stack direction={`row`}>
                <MyBox/>
                <MyBar/>
            </Stack>
        </OpenCloseContextProvider>
    )
}


export default MenuBoxBar;