import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import { css } from '@emotion/css';
import {useContext} from "react";
import VideoComponentContext from "./VideoComponentContext";
import {AnimatePresence, motion} from "framer-motion";
import Box from "@mui/material/Box";

const Description = (props) => {
    const {render, name, url} = props

    const myCss = css`
      transform: translateY(-100%);
    `

  return(
      <Box key={`description`}
             className={myCss} sx={{ position: `absolute`, top: `100%`,  }}
             justifyContent={`center`} alignItems={`flex-start`}>
          <AnimatePresence>
              {
                  render &&
                  <Paper
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      sx={{ p: 1, m: 1, backgroundColor: `#1d1d1d`}}>
                      <Stack direction={`row`}>
                          <Typography sx={{ ml: 1 }} color={`#fff`}>آدرس:</Typography>
                          <Typography color={`#fff`}>{url}</Typography>
                      </Stack>
                  </Paper>
              }
          </AnimatePresence>
      </Box>
  );
}

export default Description;