import MyLine from "./MyLine";
import MyRect from "./MyRect";
import {Circle, Group, Line, Rect, Text, Transformer} from "react-konva";
import {useEffect, useRef, useState} from "react";
import {setXY} from "../store/boundariesSlice";
import {
    setLineClicked,
    setLowestPointPosition,
    setMode,
    setRectClicked,
    setSelectedId
} from "../store/boundariesControlSlice";

const MyGroup = (props) => {

    const shapeRef = useRef();
    const trRef = useRef();

    const { id, isFinished, points,
        curMousePos, dispatch, mode, lowestPointPosition,
        isSelected, stageWidth, stageHeight, x, y} = props;

    useEffect(() => {
        if (isSelected && mode === 'select') {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }

    }, [isSelected, mode]);


    const rectWidth = 7;


    const handleClick = () => {
        dispatch(setSelectedId(id));
    }

    const handleDragEnd = (el) => {
        dispatch(setXY({ id: id, value: [el.target.attrs.x, el.target.attrs.y] }))
    }

    const handleDragMove = (el) => {
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
    }

    const handleMouseDown = (event) => {
        event.cancelBubble = isFinished;
        if (isFinished){
            dispatch(setMode('select'));
            dispatch(setSelectedId(id));
        }
    }

    const lineParameters = {
        isFinished,
        points,
        curMousePos,
        rectWidth,
        dispatch,
        mode
    }

    const rectParameters = {
        id,
        isFinished,
        points,
        dispatch,
        mode,
        width: rectWidth,
    }

    return(
        <>
            <Group
                ref={shapeRef}
                onDragEnd={mode === 'select' ? handleDragEnd : null}
                onDragMove={mode === 'select' ? handleDragMove : null}
                draggable={isFinished}
                onMouseDown={handleMouseDown}
            >
                <MyLine {...lineParameters}/>
                {
                    points.map((point, index)=>{
                        return <MyRect {...rectParameters} key={index} point={point} index={index}/>
                    })
                }
            </Group>
            {isSelected && mode === 'select' && (
                <>
                    <Transformer
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