import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const MyTab = ({ iconPosition, justifyContent, icon, label, index, onClick }) => {
    return <Tab onClick={() => onClick(index)} iconPosition={iconPosition}
                sx={{ justifyContent: justifyContent, pl: (theme) => theme.spacing(5)}}
                icon={<Box>{icon}</Box>}
                label={<Box ml={2}><Typography sx={{ textTransform: `capitalize` }}>{label}</Typography></Box> }
                {...a11yProps(index)} />
}

export default MyTab
