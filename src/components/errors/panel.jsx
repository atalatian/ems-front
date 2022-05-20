import Paper from '@mui/material/Paper';
import {motion} from "framer-motion";

const Panel = (props) => {
  return(
      <Paper component={motion.div}
             initial={{ x: -100 }}
             animate={{ x: 100, }}
             transition={{ type: `spring`, stiffness: 200, delay: 1.2, }}
             whileHover={{ scale: 1.2, transition: { type: `spring`, delay: 0 },}}
             sx={{
          backgroundColor: `transparent`,
          width: `100px`,
          height: `100px`}} elevation={3}>
          hello
      </Paper>
  )
}

export default Panel