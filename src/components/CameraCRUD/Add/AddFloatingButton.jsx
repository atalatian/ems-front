import AddIcon from "@mui/icons-material/Add";
import {Fab, Portal} from "@mui/material";
import {useSelector} from "react-redux";

const AddFloatingButton = (props) => {
    const addCameraId = useSelector(state => state.portal.addCameraId)
    const { setOpen } = props;

    const handleClick = () => {
        setOpen((prev)=> !prev);
    }

    return(
        addCameraId &&
        <Portal container={document.getElementById(addCameraId)}>
            <Fab onClick={handleClick} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Portal>
    )
}

export default AddFloatingButton;