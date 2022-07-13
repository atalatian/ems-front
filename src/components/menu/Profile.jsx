import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

const Profile = () => {
    return(
        <IconButton aria-label={`menu`}>
            <AccountCircleIcon fontSize={`large`} htmlColor={`#ffffff`}/>
        </IconButton>
    )
}

export default Profile;