import MyLine from "./MyLine";
import MyRect from "./MyRect";
import {Group, Transformer} from "react-konva";
import {useCallback, useEffect, useRef} from "react";
import {setXY} from "../store/boundariesSlice";
import {setSelectedId} from "../store/boundariesControlSlice";

const MyGroup = (props) => {

    const shapeRef = useRef();
    const trRef = useRef();

    const { id, isFinished, points,
        curMousePos, dispatch,
        isSelected, editable, x, y, type} = props;

    useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }

    }, [isSelected]);

    useEffect(()=> {
        if (trRef.current){
            trRef.current.forceUpdate();
        }
    }, [editable, points])

    const rectWidth = 7;

    const handleDragEnd = (el) => {
        dispatch(setXY({ id: id, value: [el.target.attrs.x, el.target.attrs.y] }))
    }

    const handleDragMove = useCallback((el) => {

        const stageWidth = Math.floor(el.target.getStage().attrs.width);
        const stageHeight = Math.floor(el.target.getStage().attrs.height);

        let lowestX = stageWidth;
        let lowestY = stageHeight;
        points.reduce((prev, cur)=>{
            if (cur[0] < prev[0] && cur[0] < lowestX){
                lowestX = cur[0];
            }

            if (cur[1] < prev[1] && cur[1] < lowestY){
                lowestY = cur[1];
            }

            return cur
        }, [stageWidth, stageHeight])

        let highestX = 0;
        let highestY = 0;
        points.reduce((prev, cur)=>{
            if (cur[0] > prev[0] && cur[0] > highestX){
                highestX = cur[0];
            }

            if (cur[1] > prev[1] && cur[1] > highestY){
                highestY = cur[1];
            }
            return cur
        }, [0, 0])

        if (lowestX + el.target.attrs.x <= 0){
            el.target.x(-lowestX);
        }

        if (lowestY + el.target.attrs.y <= 0){
            el.target.y(-lowestY)
        }

        if (highestX + el.target.attrs.x >= stageWidth){
            el.target.x(stageWidth - highestX)
        }

        if (highestY + el.target.attrs.y >= stageHeight){
            el.target.y(stageHeight - highestY)
        }
    }, [points])

    const handleMouseDown = (event) => {
        event.cancelBubble = isFinished;
        if (isFinished){
            dispatch(setSelectedId(id));
        }
        if (isFinished && editable){
            event.target.getStage().container().style.cursor = 'move';
        }
    }

    const handleMouseEnter = (event) => {
        if (isFinished){
            event.target.getStage().container().style.cursor = 'pointer';
        }

        if (isFinished && editable){
            event.target.getStage().container().style.cursor = 'move';
        }
    }

    const handleMouseLeave = (event) => {
        if (isFinished){
            event.target.getStage().container().style.cursor = 'default';
        }

        if (isFinished && editable){
            event.target.getStage().container().style.cursor = 'default';
        }
    }

    const lineParameters = {
        isFinished,
        points,
        curMousePos,
        rectWidth,
        type,
    }

    const rectParameters = {
        id,
        isFinished,
        points,
        dispatch,
        width: rectWidth,
        editable,
        groupX: x,
        groupY: y,
        type,
    }

    return(
        <>
            <Group
                ref={shapeRef}
                x={x}
                y={y}
                onMouseEnter={handleMouseEnter}
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onDragEnd={handleDragEnd}
                onDragMove={handleDragMove}
                draggable={editable ? isFinished : null}
                onMouseDown={handleMouseDown}
            >
                <MyLine {...lineParameters}/>
                {   isFinished && editable &&
                    points.map((point, index)=>{
                        return <MyRect {...rectParameters} key={index} point={point} index={index}/>
                    })
                }
                {   !isFinished &&
                    points.map((point, index)=>{
                        return <MyRect {...rectParameters} key={index} point={point} index={index}/>
                    })
                }
            </Group>
            {isSelected && (
                <>
                    <Transformer
                        padding={10}
                        borderStroke={`#1565c0`}
                        borderStrokeWidth={4}
                        ref={trRef}
                        resizeEnabled={false}
                        rotateEnabled={false}
                    />
                </>
            )}
        </>
    );
}


export default MyGroup;