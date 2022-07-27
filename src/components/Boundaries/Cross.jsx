import {Circle, Group, Line} from "react-konva";

const Cross = () => {
    return(
        <Group rotation={45}>
            <Circle fill={`red`} radius={50} x={200} y={100}/>
            <Line points={[50, 0, 50, 100]} stroke={`#fff`}/>
            <Line points={[0, 50, 100, 50]} stroke={`#fff`}/>
        </Group>
    );
}


export default Cross;