import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

const AddCameraButtonBox = (props) => {

    const { setShowAddCamera } = props;


    const handleClick = () => {
        setShowAddCamera((prev)=> !prev)
    }

    return(
        <IconButton onClick={handleClick} color={`inherit`} sx={{ mr: `auto` }}>
            <AddIcon/>
        </IconButton>
    );
}


export default AddCameraButtonBox;