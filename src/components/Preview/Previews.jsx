import {Stack} from "@mui/material";
import Preview from "./Preview";
import {useGetStreamsQuery} from "../store/dataApi";
import MyTable from "./MyTable";
import AddFloatingButton from "./AddFloatingButton";
import Paper from "@mui/material/Paper";
import Spinner from "./Spinner";
import Box from "@mui/material/Box";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Previews = () => {

    const { data = [] } = useGetStreamsQuery();
    const previews = data

    const onePreview = ({id, name, url}) => {
        return <Preview key={id} id={id} name={name} url={url}/>
    }

    const getActiveStreams = (streams) => {
        return streams.filter(({is_active}) => is_active)
    }

    const getInActiveStreams = (streams) => {
        return streams.filter(({ is_active })=> !is_active )
    }

    return(
      <>
        <Stack flexDirection={`row`} flexWrap={`wrap`}>
          {
            getActiveStreams(previews).map((preview)=> onePreview(preview))
          }
        </Stack>
        <MyTable streams={getInActiveStreams(previews)}/>
        <AddFloatingButton/>
      </>
    )
}

export default Previews;
