import Box from "@mui/material/Box";
import Previews from "../Preview/Previews";
import Page from "../Video/Page";
import Recordings from "../Recordings/Recordings";
import {Route, Routes} from "react-router-dom";
import {useContext} from "react";
import BarItemsContentConnectionContext from "../bar/BarItemsContentConnectionProvider";
import Boundaries from "../Boundaries/Boundaries";
import Additional from "../bar/Additional";
import * as React from "react";


const Content = () => {
    const connection = useContext(BarItemsContentConnectionContext);

    return(
        <>
            <Box m={1}>
                <Routes>
                    <Route path={`cameras`} element={<Previews/>}/>
                    <Route path={`recordings`} element={<Recordings {...connection.recordings}/>}/>
                    <Route path={`camera/:id`} element={<Page {...connection.boundaries}/>}/>
                    <Route path={`boundaries`} element={<Boundaries/>}/>
                </Routes>
            </Box>
        </>
    );
}

export default Content;