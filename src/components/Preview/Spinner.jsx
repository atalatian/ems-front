import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { css } from '@emotion/css';
import {AnimatePresence, motion} from "framer-motion";
import {useContext} from "react";
import VideoComponentContext from "./VideoComponentContext";


const Spinner = () => {

    const ctx = useContext(VideoComponentContext);

    const myCss = css`
      transform: translate(-50%, -50%);
    `

  return(
      <AnimatePresence>
          { !ctx.loaded && <Box component={motion.div} className={myCss}
               key={'spinner'}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               position={`absolute`} top={`50%`} left={`50%`}
               justifyContent={`center`} alignItems={`center`}>
              <CircularProgress />
          </Box>}
      </AnimatePresence>
  )
}

export default Spinner;