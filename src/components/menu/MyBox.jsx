import Box from "@mui/material/Box";
import MyMenu from "./menu";

const MyBox = () => {
  return(
      <Box height={`100vh`} position={`sticky`} top={0}>
          <MyMenu/>
      </Box>
  )
}

export default MyBox;