import OneCamera from "./OneCamera";
import {useGetStreamQuery} from "../../store/dataApi";

const CameraUpdate = (props) => {

    const { id, expanded } = props;

    const { data = [] } = useGetStreamQuery(id);

    return(
        expanded === 'panel1' &&
        <OneCamera stream={data}/>
    )
}

export default CameraUpdate;