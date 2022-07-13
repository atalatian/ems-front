import MyStage from "./MyStage";
import {BoundariesContextProvider} from "./BoundariesContextProvider";
import ModeSelect from "./ModeSelect";

const Boundaries = (props) => {

    const { width, height } = props

    return(
        <BoundariesContextProvider>
            <MyStage width={width} height={height}/>
        </BoundariesContextProvider>
    );
}

export default Boundaries;