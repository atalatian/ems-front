import Paper from "@mui/material/Paper";
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useSetStreamMutation} from "../store/dataApi";

const InActive = (props) => {

    const { id, name, url } = props
    const { streams } = props;


    const [setStream] = useSetStreamMutation();

    const handleClick = async () => {
        const stream = streams.find((stream)=> stream.id === id);
        const newStream = {...stream, is_active: true};

        try {
            await setStream(newStream);
        }catch (e) {
            console.log(e)
        }
    }

    return(
        <Paper elevation={13} sx={{ p: 2, width: `100%`, m: 5, mr: 0, mt: 0,
            maxWidth: `480px`, height: `270px`,
            boxSizing: `border-box` }}>
            <Stack justifyContent={`space-between`} height={`100%`}>
                <Box textAlign={`center`} alignSelf={`center`}>
                    <NoPhotographyIcon sx={{ fontSize: `80px` }}/>
                    <Typography>غیر فعال</Typography>
                </Box>
                <Stack direction={`row`}
                       justifyContent={`space-between`}
                       alignItems={`flex-end`}>
                    <Box height={`112px`} overflow={`auto`}>
                        <Stack direction={`row`}
                               alignItems={`center`} flexWrap={`wrap`}>
                            <Typography>نام:</Typography>
                            <Paper sx={{ p: 1, m: 1, backgroundColor: `#1d1d1d`, color: `#fff` }}>
                                <Typography sx={{ wordBreak: `break-all` }}>
                                    {name}
                                </Typography>
                            </Paper>
                        </Stack>
                        <Stack direction={`row`}
                               alignItems={`center`} flexWrap={`wrap`}>
                            <Typography>آدرس:</Typography>
                            <Paper sx={{ p: 1, m: 1, backgroundColor: `#1d1d1d`, color: `#fff` }}>
                                <Typography sx={{ wordBreak: `break-all` }}>
                                    {url}
                                </Typography>
                            </Paper>
                        </Stack>
                    </Box>
                    <Box>
                        <Button onClick={handleClick}
                                sx={{ m: 1, mr: 0, alignSelf: `flex-start` }}
                                variant={`contained`}>فعال سازی</Button>
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    );
}


export default InActive;