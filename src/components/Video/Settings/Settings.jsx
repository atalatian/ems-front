import { useParams } from 'react-router-dom';
import { Paper } from '@mui/material';
import CameraUpdate from '../../CameraCRUD/Update/CameraUpdate'
import {useGetStreamQuery} from "../../store/dataApi";


const Settings = (props) =>{

    const { showSettings } = props;

    const params = useParams();

    return(
        showSettings &&
        <Paper sx={{ m: 1, p: 2, border: 1 }}>
            <CameraUpdate id={params['id']}/>
        </Paper>
    );
}

export default Settings