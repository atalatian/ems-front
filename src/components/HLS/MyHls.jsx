import React, {useEffect, useRef, useState} from "react";
import Hls from "hls.js";
import {motion} from "framer-motion";

const MyHls = (props) => {
    const video = useRef();
    const {onPlay, controls} = props;
    const ONE_SECOND = 1000;
    const videoSrc = 'http://192.168.1.8:8000/media/stream/webcam/master.m3u8';


    const sendGet = async ()=>{
        return await fetch('http://192.168.1.8:8000/stream/webcam')
    }


    const oneGetResponse = (parameters) => {
        const response = sendGet();
        response.then(()=> {
            hlsStarter(parameters);
        })
    }

    const getSeconds = () => {
        return 50 * ONE_SECOND;
    }

    const hlsStarter = (parameters) => {
        const {myVideo, src} = parameters;
        if (Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(myVideo);
        } else if (myVideo.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        }
    }

    useEffect(()=>{
        const myVideo = video.current;

        if (myVideo){
            const parameters = {
                myVideo: myVideo,
                src: videoSrc,
            }

            oneGetResponse(parameters);
            setInterval(()=> oneGetResponse(parameters), getSeconds());
        }

    }, [video])



    return(
        <motion.video initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      width="100%"
                      preload
                      controls={controls} height="auto" ref={video} autoPlay muted
                      onPlay={onPlay}
                      style={{ borderRadius: `4px`, border: `3px solid black`}}
        >
        </motion.video>
    )
}

MyHls.defaultProps = {
    onPlay: ()=>{},
    controls: false,
}

export default MyHls;