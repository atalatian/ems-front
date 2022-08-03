import React, {useCallback} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


export const VideoJsBase = (props) => {
    const {options, onReady} = props;
    const { url=null, controls=null } = props;

    const handleRef = useCallback((el)=>{
        if (el){
            const player = videojs(el, options, () => {
                onReady && onReady(player);
            });

            if (controls){
                player.controls(controls)
            }

            if (url){
                player.src(player.src([{
                    src: `http://localhost:8000/${url}`,
                    type: "application/x-mpegURL"
                }]))
            }
        }
    }, [url, controls])

    return (
        <div data-vjs-player>
            <video ref={handleRef} width={480}
                   className='video-js vjs-big-play-centered' />
        </div>
    );
}

export default VideoJsBase;