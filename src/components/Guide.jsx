import {useSelector} from "react-redux";
import {Navigate, Route} from "react-router-dom";
import LoginWave from "./auth/LoginWave";
import MenuBoxBar from "./merge/MenuBoxBar";

const Guide = (props) => {
    const { token } = props;

    return(
        <>
            {
                !token ? <Route path={`/login`} element={<LoginWave/>}/> :
                    <Route path={`/*`} element={<Navigate to="/dashboard" replace={true} />}/>
            }

            {
                token ? <Route path={`dashboard/*`} element={<MenuBoxBar/>}/> :
                    <Route path={`/*`} element={<Navigate to="/login" replace={true} />}/>
            }
        </>
    );


}

export default Guide;