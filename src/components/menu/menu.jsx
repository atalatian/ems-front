import { ProSidebar, Menu, MenuItem,
    SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import {useContext} from "react";
import OpenCloseContext from "../merge/OpenCloseContext";
import MenuHeader from "./menuHeader";
import { useNavigate } from 'react-router-dom'



const MyMenu = () => {
    const ctx = useContext(OpenCloseContext);
    const navigate = useNavigate();

    const menuItems = [
        { name: `دوربین ها`, value: `cameras`, icon: <LinkedCameraIcon/>},
        { name: `رویداد ها`, value: `recordings`, icon: <EmergencyRecordingIcon/> },
    ]

    const handleRedirect = (value) =>{
        ctx.makeClose();
        navigate(`${value}`);
    }

      return(
          <ProSidebar collapsed={!ctx.isOpen} rtl={true}>
              <SidebarHeader style={{ borderBottom: `0px` }}>
                  <MenuHeader/>
              </SidebarHeader>
              <SidebarContent>
              </SidebarContent>
              <Menu iconShape="round">
                  {
                      menuItems.map((menuItem, index)=>
                          <MenuItem key={index}
                                    onClick={()=> handleRedirect(menuItem.value)}
                                    icon={menuItem.icon}>
                              {menuItem.name}
                          </MenuItem>
                      )
                  }
              </Menu>
          </ProSidebar>
      )
}

export default MyMenu;