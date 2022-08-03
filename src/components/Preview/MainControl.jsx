import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Stack, Switch} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useSetStreamMutation} from "../store/dataApi";
import Button from "@mui/material/Button";
import {Settings} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const MainControl = (props) => {
    const { name, id } = props;
    const { isActive } = props;
    const { url } = props;

    const [setStream] = useSetStreamMutation();
    const navigate = useNavigate();

    const handleChange = async () =>{
        if (!isActive){
            await setStream({ id, switch: { is_active: true } });
        } else {
            await setStream({ id, switch: { is_active: false, is_streaming: false } })
        }
    }

    const handleSettingsClick = () => {
        return (e) => {
            navigate(`/dashboard/camera/${id}`)
        }
    }

    return(
        <Stack width={`100%`} alignItems={`center`}
               position={`absolute`} top={0} bgcolor={`rgba(255,255,255,0.5)`}
               flexDirection={`row`} justifyContent={`space-between`}>
            <Stack direction={`row`} alignItems={`center`}>
                <Paper sx={{ p: 1, m: 1, backgroundColor: `#1d1d1d`}}>
                    <Typography textTransform={`capitalize`}
                                color={`#fff`}>{name}</Typography>
                </Paper>
                <Button onClick={handleSettingsClick(id)}
                        disabled={!(isActive && url)} sx={{ p: 1 }} variant={`contained`}
                        dir={`ltr`} endIcon={<Settings/>}>
                    تنظیمات
                </Button>
            </Stack>
            <Box display={`flex`} alignItems={`center`}>
                <FormControlLabel
                    sx={{ ml: 1, mr: 0,
                        color: isActive ? 'success.main' : 'error.main',
                    }}
                    dir={`ltr`}
                    control={<Switch sx={{
                        '& .MuiSwitch-thumb':
                            { color: isActive ? 'success.main' : 'error.main' },
                        '& .MuiSwitch-track':
                            { bgcolor: isActive ? '#1b5e20 !important' : 'error.dark' },
                    }}
                    checked={isActive} onChange={handleChange}/>}
                    label={ isActive ? 'فعال' : 'غیر فعال' } />
            </Box>
        </Stack>
    );
}

export default MainControl;