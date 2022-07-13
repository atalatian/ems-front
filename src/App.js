import { Routes, Route} from "react-router-dom";
import MenuBoxBar from "./components/merge/MenuBoxBar";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Login from "./components/auth/login";
import {useSelector} from "react-redux";

const QueryWrap = () =>{
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <MenuBoxBar/>
        </QueryClientProvider>
    );
}


function App() {

    const token = useSelector(state => state.auth.token);

  return (
      <Routes>
          <Route path={`/`} element={<Login/>}/>
          {
              token ? <Route path={`dashboard/*`} element={<QueryWrap/>}/> : null
          }
      </Routes>
  );
}

export default App;
