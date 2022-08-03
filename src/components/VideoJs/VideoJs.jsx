import React, {useEffect} from 'react';
import { VideoJsBase } from './VideoJsBase';
import Box from "@mui/material/Box";

const VideoJs = (props) => {

    const { controls, url, setHeight = null, setWidth=null, isActive=false } = props;
    const playerRef = React.useRef(null);

    const options = {
        autoplay: true,
        responsive: true,
        fluid: true,
        muted: true,
        errorDisplay: false,
        liveui: true,
    }

    useEffect(()=>{
        const player = playerRef.current;

        if (player){
            player.src([{
                src: `http://localhost:8000/${url}`,
                type: "application/x-mpegURL"
            }]);
        }

    }, [url])

    useEffect(()=>{
        const player = playerRef.current;

        if (player){
            player.controls(controls)
        }
    }, [controls])

    useEffect(()=>{
        const player = playerRef.current;

        if (player && !isActive){
            player.dispose();
            playerRef.current = null;
        }

    }, [isActive])

    const handlePlayerReady = (player) => {
        playerRef.current = player;
        player.on('resize', () => {
            if (setHeight){
                setHeight(player.el_.getBoundingClientRect().height)
            }

            if (setWidth){
                setWidth(player.el_.getBoundingClientRect().width)
            }
        });
    };

    return (
        <>
            {
                isActive
                    ?
                    <VideoJsBase url={url} controls={controls}
                                 options={options} onReady={handlePlayerReady} />
                    :
                    <Box width={`100%`}
                         height={`100%`}
                         bgcolor={`#000`}
                         display={`flex`} justifyContent={`center`}
                         alignItems={`center`}>
                    </Box>
            }
        </>

    );
}

export default VideoJs;