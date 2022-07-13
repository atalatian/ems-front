import MyListItem from "../List/ListItems";
import Box from "@mui/material/Box";
import {motion} from "framer-motion";

const Event = () => {
    return(
        <Box component={motion.div} initial={{ backgroundColor: "#FFA500", }}
             animate={{ backgroundColor: `#1d1d1d` }} transition={{ duration: 0.7 }}>
            <MyListItem/>
        </Box>
    );
}

export default Event;