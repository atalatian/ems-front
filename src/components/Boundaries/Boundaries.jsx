import MyStage from "./MyStage";
import {BoundariesContextProvider} from "./BoundariesContextProvider";
import ModeSelect from "./ModeSelect";

const Boundaries = (props) => {

    const { width, height } = props

    return(
        <MyStage width={width} height={height}/>
    );
}

export default Boundaries;