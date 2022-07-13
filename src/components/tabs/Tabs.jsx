import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import {Stack} from "@mui/material";
import { css } from '@emotion/css'
import { spacing } from '@mui/system';
import MyTab from "./MyTab";
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleClick = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1,
                    borderColor: 'divider',
                    width: 280,
                    '& .MuiTabs-indicator': { left: 0, width: 5, borderRadius: 10 }, }}
            >
                <MyTab iconPosition={`start`}
                       justifyContent={`left`}
                       icon={<LinkedCameraIcon/>}
                       label={'Cameras'}
                       index={0}
                       onClick={handleClick}
                />
                <MyTab iconPosition={`start`}
                       justifyContent={`left`}
                       icon={<EmergencyRecordingIcon/>}
                       label={`Recordings`}
                       index={1}
                       onClick={handleClick}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}
