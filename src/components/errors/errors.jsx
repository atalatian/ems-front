import Panel from "./panel";
import ReactDOM from 'react-dom';
import {motion} from "framer-motion";

const Errors = (props) => {
  return(
      <>
        {ReactDOM.createPortal(<Panel/>, document.getElementById("errors"))}
      </>
  )
}

export default Errors;