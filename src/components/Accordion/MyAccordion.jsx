import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import MyList from "../List/ListItems";
import CircularProgress from "@mui/material/CircularProgress";
import Spinner from "../Spinner/Spinner";
import scrollbar from "../Scrollbar/Scrollbar";
import MoreAlert from "../Video/VideoAccordion/MoreAlert";
import {useEffect} from "react";
import Events from "../Events/Events";
import {useRef} from "react";
import VideoSpinner from "../Video/VideoAccordion/VideoSpinner";

export default function MyAccordion() {
    const [expanded, setExpanded] = React.useState('panel1');
    const bottom = useRef(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box flexGrow={1}>
            <Accordion sx={{ backgroundColor: `#1d1d1d` }}
                       expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary sx={{ color: `#fff` }}
                                  expandIcon={<ExpandMoreIcon htmlColor={`#fff`} />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                >
                    <Typography>
                        Events
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ color: `#fff`, p: 0 }}>
                    <Events/>
                    <VideoSpinner/>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
