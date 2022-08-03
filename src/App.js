import {Routes, Route, Navigate} from "react-router-dom";
import MenuBoxBar from "./components/merge/MenuBoxBar";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Login from "./components/auth/login";
import {useSelector} from "react-redux";
import {CssBaseline, createTheme, ThemeProvider} from "@mui/material";
import Yekan_eot from '../src/yekan/Yekan.eot';
import Yekan_woff2 from '../src/yekan/Yekan.woff2';
import Yekan_woff from '../src/yekan/Yekan.woff';
import Yekan_ttf from '../src/yekan/Yekan.ttf';
import Yekan_svg from '../src/yekan/Yekan.svg';
import Box from "@mui/material/Box";
import Waves from "./components/Waves";
import LoginWave from "./components/auth/LoginWave";
import Guide from "./components/Guide";

const QueryWrap = () =>{
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>

        </QueryClientProvider>
    );
}

const theme = createTheme({
    typography: {
        fontFamily: 'Yekan, Arial',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Yekan';
                        src: url( '${Yekan_eot}' );
                        src: url( '${Yekan_eot}?#iefix' ) format( 'embedded-opentype' ),
                            url( '${Yekan_woff2}' ) format( 'woff2' ),
                            url( '${Yekan_woff}' ) format( 'woff' ),
                            url( '${Yekan_ttf}' ) format( 'truetype' ),
                            url( '${Yekan_svg}#Yekan' ) format( 'svg' );
                        font-weight: normal;
                        font-style: normal;
                        text-rendering: optimizeLegibility;
                        font-display: auto;
                }
          `,
        },
    }
})

function App() {

    const token = useSelector(state => state.auth.token);

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
              {
                  !token ? <Route path={`/login`} element={<LoginWave/>}/> :
                      <Route path={`/*`} element={<Navigate to="/dashboard" replace={true} />}/>
              }

              {
                  token ? <Route path={`dashboard/*`} element={<MenuBoxBar/>}/> :
                      <Route path={`/*`} element={<Navigate to="/login" replace={true} />}/>
              }
          </Routes>
      </ThemeProvider>
  );
}

export default App;
