import {Line} from "react-konva";
import {setLineClicked, setMode} from "../store/boundariesControlSlice";
import {useEffect} from "react";

const MyLine = (props) => {

    const { isFinished, points, curMousePos,
        rectWidth, dispatch, mode } = props;

    return(
        <Line

            points={
                points.concat(isFinished ? [] : curMousePos)
                    .reduce((a, b) => a.concat(b), []).map((point)=> {
                        return  point + (rectWidth/2)
                })
            }
            stroke="red"
            opacity={0.7}
            fill={'#FFC8C8'}
            strokeWidth={3}
            closed={isFinished}
        />
    );
}

export default MyLine;