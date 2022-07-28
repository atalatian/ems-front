import Box from "@mui/material/Box";
import {useId} from "react";
import {useDispatch} from "react-redux";
import {setAddCameraId} from "../store/portalSlice";

const AddFloatingButton = () => {
    const id = useId();
    const dispatch = useDispatch();

    const handleRef = (e) => {
        dispatch(setAddCameraId(e?.id))
    }

    return(
        <Box ref={handleRef} position={`fixed`} bottom={0} left={0} m={4} id={id}>
        </Box>
    );
}

export default AddFloatingButton;