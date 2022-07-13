import Box from "@mui/material/Box";
import {AnimatePresence, motion} from "framer-motion";
import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import OpenCloseContext from "../merge/OpenCloseContext";

const ExitMenu = (props) => {
    const ctx = useContext(OpenCloseContext);

    return (
        <AnimatePresence>
            {ctx.isOpen && <Box component={motion.div}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}>
                {props.children}
            </Box>}
        </AnimatePresence>
    );
}

export default ExitMenu;