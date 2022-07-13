import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from "@mui/material/Typography";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';




export default function MyListItem() {
    const typography = {
        primary: <Typography color={`#fff`}>Face Recognization</Typography>,
        secondary: <Typography color={`#C8C8C8`}>1 minute ago</Typography>
    }

    return (
        <List sx={{ width: '100%', bgcolor: `transparent`}}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: `#FFE5B6`, width: 55, height: 55, mr: 2.5 }}>
                        <PriorityHighIcon htmlColor={`#FFA500`} fontSize={`large`}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={typography.primary}
                              secondary={typography.secondary} />
            </ListItem>
        </List>
    );
}
