import OneCamera from "./OneCamera";
import {useState} from "react";
import AddFloatingButton from "./AddFloatingButton";
import MyDialog from "./MyDialog";

const CameraAdd = (props) => {

    const [open, setOpen] = useState(false);

    return(
        <>
            <MyDialog {...{open, setOpen}}/>
            <AddFloatingButton setOpen={setOpen}/>
        </>
    );
}



export default CameraAdd;