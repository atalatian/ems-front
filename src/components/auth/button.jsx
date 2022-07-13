import Button from '@mui/material/Button';
import {useLoginMutation} from "../store/authApi";
import {setToken} from "../store/authSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const MyButton = (props) => {
    const {username, password, setError} = props;
    const dispatch = useDispatch();
    const [login] = useLoginMutation()
    const navigate = useNavigate();

    const handleClick = async () =>{
        try{
            const token = await login({
                username,
                password,
            }).unwrap();
            dispatch(setToken(token));
            localStorage.setItem('token', token);
            setError(false);
            navigate('/dashboard/');
        }catch (e) {
            setError(true);
        }

    }

    return(
        <Button onClick={handleClick} sx={{ m: 1 }} variant="contained">ورود</Button>
    );
}
export default MyButton;