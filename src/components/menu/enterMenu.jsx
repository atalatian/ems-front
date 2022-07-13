import {useContext} from "react";
import OpenCloseContext from "../merge/OpenCloseContext";
import Box from "@mui/material/Box";
import {AnimatePresence, motion} from "framer-motion";

const EnterMenu = (props) => {
    const ctx = useContext(OpenCloseContext);
    return(
        <AnimatePresence>
            { !ctx.isOpen && <Box sx={{ overflow: `hidden` }}
                                  component={motion.div}
                                  initial={{ opacity: 0, maxHeight: 20, }}
                                  animate={{ opacity: 1, maxHeight: 300,}}
                                  exit={{ opacity: 0, maxHeight: 20,}}>
                {props.children}
            </Box>}
        </AnimatePresence>
    )
}

export default EnterMenu