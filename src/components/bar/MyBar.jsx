import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Content from "../content/content";
import Items from './Items';
import {BarItemsContentConnectionProvider} from "./BarItemsContentConnectionProvider";
import Additional from "./Additional";

const MyBar = () => {
  return(
      <BarItemsContentConnectionProvider>
          <Box flexGrow={1}>
              <AppBar position={`sticky`}
                      sx={{ backgroundColor: `#1d1d1d`, top: 0,
                          zIndex: 999, display: `block`, boxShadow: 0 }}>
                  <Toolbar variant="dense" sx={{ minHeight: 53, }}>
                      <Items/>
                  </Toolbar>
              </AppBar>
              <Content/>
          </Box>
          <Additional/>
      </BarItemsContentConnectionProvider>
  );
}

export default MyBar