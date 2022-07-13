import {Route, Routes} from "react-router-dom";
import Settings from "../Video/Settings/Settings";
import ModeSelect from "../Boundaries/ModeSelect";
import {css} from "@emotion/css";
import {Stack} from "@mui/material";
import {useContext, useId} from "react";
import BarItemsContentConnectionContext from "./BarItemsContentConnectionProvider";
import CameraAdd from "../CameraCRUD/Add/CameraAdd";

const style = css`
        width: fit-content;
        position: absolute;
        left: 100%;
        transform: translateX(-100%);
    `
const rtlStyle = css`
  width: fit-content;
  position: absolute;
  right: 100%;
  transform: translateX(100%);
`

const AllElements = (props) => {
    return(
        <Stack direction={`column`} alignItems={`flex-end`} className={rtlStyle}>
            <Settings {...props.connection.camera}/>
        </Stack>
    )
}


const Additional = () => {
    const connection = useContext(BarItemsContentConnectionContext);

    return(
        <Routes>
            <Route path={`/camera/:id`} element={<AllElements connection={connection}/>}/>
            <Route path={`cameras`} element={<CameraAdd/>}/>
        </Routes>
    );
}

export default Additional;