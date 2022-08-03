import {Divider, Stack} from "@mui/material";
import Preview from "./Preview";
import {useGetStreamsQuery} from "../store/dataApi";
import MyTable from "./MyTable";
import AddFloatingButton from "./AddFloatingButton";
import Paper from "@mui/material/Paper";
import Spinner from "./Spinner";
import Box from "@mui/material/Box";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import InActive from "./InActive";
import Typography from "@mui/material/Typography";

const Container = (props) => {
    return(
        <Box width={`100%`} m={3} mt={0} mr={0}
             maxWidth={480} height={270} borderRadius={3}
             boxSizing={`border-box`}
             overflow={`hidden`} display={`flex`}
             justifyContent={`center`} alignItems={`center`}>
            {props.children}
        </Box>
    )
}

const Previews = () => {

    const { data = [] } = useGetStreamsQuery();
    const previews = data

    const onePreview = ({id, name, url, is_active}) => {
        return <Container key={id} >
            <Preview id={id} name={name} url={url} isActive={is_active}/>
        </Container>
    }

    const oneInActive = ({ id, name, url }) => {
        return <InActive {...{id ,name, url}} streams={previews} key={id}/>
    }

    const getActiveStreams = (streams) => {
        return streams.filter(({is_active}) => is_active)
    }

    const getInActiveStreams = (streams) => {
        return streams.filter(({ is_active })=> !is_active )
    }

    return(
      <>
          {
              previews.length
                  ?
                  <Stack flexDirection={`row`} flexWrap={`wrap`}>
                      {
                          previews.map((preview)=> {
                              return onePreview(preview)
                          })
                      }
                  </Stack>
                  :
                  <Box display={`flex`} justifyContent={`center`}>
                      <Paper sx={{ p: 1 }}>
                          <Typography>هیچ دوربین وجود ندارد</Typography>
                      </Paper>
                  </Box>
          }
        <AddFloatingButton/>
      </>
    )
}

export default Previews;
