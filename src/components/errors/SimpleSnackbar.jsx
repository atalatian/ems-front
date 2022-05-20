import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import {motion, AnimatePresence} from "framer-motion";
import {useRef, useEffect} from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}
                     sx={{ transition: `none !important` }} />;
});

export default function CustomizedSnackbars() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });

    const duration = 5*1000

    const {open, vertical, horizontal} = state;

    const [length, setLength] = React.useState(0)

    const margin = 1;




    const calculateLength = (a) => {console.log(a); return 0}


    const box = useRef();



    const handleClick = () => {
        setState({ ...state, open: true });
        setTimeout(()=>{ setState({ ...state, open: false });},
            duration)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ ...state, open: false });
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <AnimatePresence>
                {
                    (open ? <Box component={motion.div}
                                 ref={(e)=> box.current = e}
                                 initial = {{ x: 280 }}
                                 animate={{ x: 0 }}
                                 exit={{ x: 290, transition: { type: `tween` } }}
                                 transition={{ type: `spring`, stiffness: 110,}}
                                 sx={{ position: `fixed`,
                                     left: `auto`,
                                     right: 0,
                                     bottom: 0, m: 1, }}>
                        <Snackbar sx={{ position: `initial` }}
                                  open={open} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                This is a success message!
                            </Alert>
                        </Snackbar>
                    </Box> : null)
                }
            </AnimatePresence>
        </>
    );
}
