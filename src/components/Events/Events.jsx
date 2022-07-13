import Event from "./Event";
import scrollbar from "../Scrollbar/Scrollbar";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import MoreAlert from "../Video/VideoAccordion/MoreAlert";

const Events = () => {
    const [events, setEvents] = React.useState([0,0,0]);
    const bottom = useRef(null);
    const box = useRef(null);
    const scrollToBottom = useRef(true);
    const [moreAlertRender, setMoreAlertRender] = useState(false);

    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }

    const add = (event) => {
        setEvents(prevState => [...prevState, event])
    }

    useEffect(()=>{
        handleScroll(bottom)

        const handleAdd = () => {
            add(0)
            if (scrollToBottom.current){
                handleScroll(bottom)
            }
        }

    }, [events])


    const onMouseEnter = () => {
        scrollToBottom.current = false;
    }

    const handleMouseLeave = () => {
        scrollToBottom.current = true;
    }

    const handleOnScroll = () =>{
        const myBox = box.current;
        if (myBox.scrollTop + myBox.offsetHeight === myBox.scrollHeight){
            setMoreAlertRender(false)
        }else if (myBox.scrollTop + myBox.offsetHeight <= myBox.scrollHeight){
            setMoreAlertRender(true)
        }
    }

    const functions = {
        handleScroll: handleScroll,
    }

    const states = {
        render: moreAlertRender,
    }

    return(
        <Box maxHeight={184}
             ref={box}
                onMouseEnter={onMouseEnter}
             onMouseLeave={handleMouseLeave}
             sx={{ overflowY: `auto`, }}
             className={scrollbar}>
            {
                events.map((value, index, array) => <Event key={index}/>)
            }
            <div ref={(e) => bottom.current = e}></div>
        </Box>
    );
}

export default Events;