import {Line} from "react-konva";

const MyLine = (props) => {

    const { isFinished, points, curMousePos,
        rectWidth, type } = props;

    const hitBox = type === 'line' ?
        {
            hitStrokeWidth: 24,
        } : null;


    return(
        <>
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
                {...hitBox}
            />
        </>
    );
}

export default MyLine;