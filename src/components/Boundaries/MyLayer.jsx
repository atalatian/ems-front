import {Layer} from "react-konva";
import MyGroup from "./MyGroup";

const MyLayer = (props) => {

    const { selectedId, id } = props;

    return(
        <Layer>
            <MyGroup {...props} isSelected={selectedId === id}/>
        </Layer>
    );
}

export  default MyLayer;