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


const ConditionalRender = (props) => {
    return props.condition ? props.children : null;
}

const Page = (props) => {

    const [showBoundaries, setShowBoundaries] = useState(false)

    const params = useParams();

    const handleSettingsClick = () => {

    }

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
            <Stack display={`inline-flex`}>
                <Stack direction={`row`}>
                    {
                        showBoundaries ?
                            <VideoCanvas id={stream.id}/>
                            : <Video controls={true} id={stream.id}/>
                    }
                    <Stack mr={1}>
                        <Button dir={`ltr`} sx={{ mb: 1 }} variant={`contained`}
                                endIcon={<Settings/>}>
                            تنظیمات
                        </Button>
                        {
                            showBoundaries
                                ?
                                <Button onClick={handleVideoClick}
                                        dir={`ltr`} sx={{ mb: 1 }} variant={`contained`}
                                        endIcon={<OndemandVideoIcon/>}>
                                    ویدیو
                                </Button>
                                :
                                <Button onClick={handleBoundariesClick}
                                        dir={`ltr`} sx={{ mb: 1 }} variant={`contained`}
                                        endIcon={<BorderOuter/>}>
                                    مرزبندی
                                </Button>
                        }
                    </Stack>
                </Stack>
                <Description name={stream.name} url={stream.url}/>
                <MyAccordion/>
            </Stack>

        </ConditionalRender>
    );
}

export default Page;