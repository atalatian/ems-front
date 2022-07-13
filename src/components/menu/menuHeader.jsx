import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageButton from "./ImageButton";
import Profile from "./Profile";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ExitMenu from "./exitMenu";
import EnterMenu from "./enterMenu";
import Button from "@mui/material/Button";
import {useLayoutEffect, useRef} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MenuHeader = () => {

    return(
        <>
            <Stack direction={`row`} justifyContent={`space-between`}>
                <Box m={0.5}>
                    <Button><Typography variant={`h5`} color={`#fff`}>EMS</Typography></Button>
                </Box>
                <ExitMenu>
                    <Profile/>
                </ExitMenu>
            </Stack>
            <ExitMenu>
                <Stack spacing={2} alignItems={`center`} mt={2} mb={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://via.placeholder.com/300.png/09f/fffC/O
                  https://placeholder.com/"
                            sx={{ width: 118, height: 118 }}
                        />
                    <Stack>
                            <Typography align={`center`} gutterBottom={true}
                                        variant={`h5`} color={`#ffffff`}>atalatian</Typography>
                            <Typography align={`center`}>master</Typography>
                    </Stack>
                </Stack>
            </ExitMenu>
        </>
    );
}

export default MenuHeader;