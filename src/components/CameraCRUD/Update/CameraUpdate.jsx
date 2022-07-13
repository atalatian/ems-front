import OneCamera from "./OneCamera";
import {useGetStreamQuery} from "../../store/dataApi";
import {CameraUpdateContextProvider} from "../Context/CameraUpdateContext";

const CameraUpdate = (props) => {

    const { id } = props;

    const { data = [] } = useGetStreamQuery(id);

    return(
        <CameraUpdateContextProvider>
            <OneCamera stream={data}/>
        </CameraUpdateContextProvider>
    )
}

export default CameraUpdate;