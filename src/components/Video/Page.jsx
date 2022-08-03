import Video from "./Video";
import MyAccordion from "../Accordion/MyAccordion";
import {Fab, Stack} from "@mui/material";
import Description from "./Description";
import {Navigate, useParams} from "react-router-dom";
import VideoCanvas from "./VideoCanvas";
import {useGetStreamQuery} from "../store/dataApi";
import {useState} from "react";
import Box from "@mui/material/Box";
import SettingsAccordion from "./SettingsAccordion";

const Page = (props) => {

    const [showBoundaries, setShowBoundaries] = useState(false)

    const params = useParams();

    const { data = {} } = useGetStreamQuery(params['id']);
    const name = data?.name;
    const url = data?.url;
    const id = data?.id;

    return(
        <Stack direction={`row`}>
            <Stack display={`inline-flex`}>
                <Box mb={1}>
                    <VideoCanvas id={id} {...{showBoundaries}}/>
                </Box>
                <Description name={name} url={url}/>
            </Stack>
            <SettingsAccordion urlID={params['id']}
                               {...{showBoundaries, setShowBoundaries}}/>
        </Stack>
    );
}

export default Page;