import axios from 'axios';
import {createContext, useState} from 'react'

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: ()=>{},
});


export const AuthContextProvider = (props) =>{

    const [token, setToken] = useState('');

    const login = () =>{
        const credentials = {
            username: 'admin',
            password: '123456',
        }

        axios.post('http://localhost:8000/api/api-token-auth/', credentials)
        .then((rspns => setToken(rspns.data.token)));
    }

    const contextValue = {
        token: token,
        isLoggedIn: false,
        login: login,
    }


    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
    
}

export default AuthContext;