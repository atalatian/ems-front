import Video from "./Video";
import MyAccordion from "../Accordion/MyAccordion";
import {Fab, Stack} from "@mui/material";
import Description from "./Description";
import { useParams } from "react-router-dom";
import VideoCanvas from "./VideoCanvas";
import {useGetStreamQuery} from "../store/dataApi";
import {BorderOuter, Settings} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {useState} from "react";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SettingsAccordion from "./SettingsAccordion";
import CameraUpdate from "../CameraCRUD/Update/CameraUpdate";


const ConditionalRender = (props) => {
    //return props.condition ? props.children : null;
    return props.children
}

const Page = (props) => {

    const [showBoundaries, setShowBoundaries] = useState(false)

    const params = useParams();

    const handleBoundariesClick = () => {
        setShowBoundaries(true)
    }

    const handleVideoClick = () => {
        setShowBoundaries(false);
    }

    const { data = {} } = useGetStreamQuery(params['id']);
    const stream = data;

    return(
        <ConditionalRender condition={!!Object.keys(stream).length}>
            <Stack direction={`row`}>
                <Stack display={`inline-flex`}>
                    <Box mb={1}>
                        {
                            showBoundaries ?
                                <VideoCanvas id={stream.id}/>
                                : <Video controls={true} id={stream.id}/>
                        }
                    </Box>
                    <Description name={stream.name} url={stream.url}/>
                </Stack>
                <SettingsAccordion urlID={params['id']} {...{showBoundaries, setShowBoundaries}}/>
            </Stack>
        </ConditionalRender>
    );
}

export default Page;