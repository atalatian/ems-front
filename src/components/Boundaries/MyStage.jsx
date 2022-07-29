import {Layer, Line, Stage} from "react-konva";
import {useDispatch, useSelector} from "react-redux";
import {
    setIsFinished,
    setPoints,
    editPoints,
    deleteShape,
    getShapes
} from "../store/boundariesSlice";
import {setSelectedId} from "../store/boundariesControlSlice";
import MyLayer from "./MyLayer";
import {useCallback, useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";

const MyStage = (props) => {

    const { width, height } = props;
    const shape = useSelector(state => state.boundaries.find((shape) => !shape.isFinished));
    const selectedId = useSelector(state => state.boundariesControl.selectedId);
    const params = useParams();

    const dispatch = useDispatch();

    const allShapes = useSelector(state => state.boundaries);

    const [curMousePos, setCurMousePos] = useState([0, 0]);
    const shapeRef = useRef();

    const getMousePos = (stage) => {
        return [stage.getPointerPosition().x - 3.5, stage.getPointerPosition().y - 3.5];
    };


    useEffect(()=> {
        const lastShape = allShapes[allShapes.length - 1];

        const handleKeyDown = (event) => {
            if (event.key === 'Escape'){
                if (!lastShape.isFinished && lastShape.points.length > 0){
                    dispatch(editPoints({ id: lastShape.id, value: [] }))
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [allShapes])


    useEffect(()=> {

        const handleKeyDown = (event) => {
            if (event.key === 'Delete'){
                dispatch(deleteShape({ id: selectedId }));
                dispatch(setSelectedId(null))
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedId])


    useEffect(()=> {
        if (shape){
            const id = shape.id;
            const points = shape.points;
            const type = shape.type;
            if (points.length === 2 && type === 'line'){
                dispatch(setIsFinished({ id: id, value: true }))
                dispatch(setSelectedId(id));
            }
            shapeRef.current.container().style.cursor = 'crosshair';
        }else {
            shapeRef.current.container().style.cursor = 'default';
        }
    }, [shape])

    const handleClick = shape => {
        return event => {
            const id = shape.id;
            const isFinished = shape.isFinished;
            const points = shape.points;
            const isMouseOverStartPoint = shape.isMouseOverStartPoint
            const type = shape.type;


            if (isFinished) return;
            const stage = event.target.getStage();
            const mousePos = [stage.getPointerPosition().x - 3.5, stage.getPointerPosition().y - 3.5];
            if (isMouseOverStartPoint && points.length >= 3 && type === 'polygon') {
                dispatch(setIsFinished({ id: id, value: true }))
                dispatch(setSelectedId(id));
            } else {
                dispatch(setPoints({ id: id, value: mousePos }))
            }
        }
    };


    const handleMouseMove = event => {
        const stage = event.target.getStage();
        const mousePos = getMousePos(stage);

        setCurMousePos(mousePos);
    }


    const xCoordination = useCallback(() => {

        const lines = [];

        if (width && height){
            const startY = 0;
            const endY = height;
            const divider = Math.floor(width / 20);
            for (let i=divider ; i<=width; i += divider){
                const newLine = {start: [i, startY], end: [i, endY]}
                lines.push(newLine);
            }

            return lines;
        }

        return []
    }, [width, height])

    const yCoordination = useCallback(() => {

        const lines = [];

        if (width && height){
            const startX = 0;
            const endX = width;
            const divider = Math.floor(height / 20);
            for (let i=divider ; i<=height; i += divider){
                const newLine = {start: [startX, i], end: [endX, i]}
                lines.push(newLine);
            }

            return lines;
        }

        return []
    }, [width, height])


    return(
        <Stage
            width={(!!width ? width: 800)}
            height={(!!height ? height: 800)}
            ref={shapeRef}
            onMouseDown={shape ? handleClick(shape) : null}
            onMouseMove={handleMouseMove}
        >
            <Layer listening={false}>
                {
                    xCoordination().map((line, index) => {
                        return(
                            <Line key={index} points={[line.start[0], line.start[1],
                                line.end[0], line.end[1]]} stroke={`black`} opacity={0.2}/>
                        );
                    })
                }
                {
                    yCoordination().map((line, index) => {
                        return(
                            <Line key={index} points={[line.start[0], line.start[1],
                                line.end[0], line.end[1]]} stroke={`black`} opacity={0.2}/>
                        );
                    })
                }
            </Layer>
            {
                allShapes.map((shape)=> {
                    const groupParameters = {
                        key: shape.id,
                        id: shape.id,
                        isFinished: shape.isFinished,
                        points: shape.points,
                        x: shape.x,
                        y: shape.y,
                        editable: shape.editable,
                        type: shape.type,
                        curMousePos,
                        dispatch,
                        selectedId,
                    }
                    return <MyLayer {...groupParameters}/>
                })
            }
        </Stage>
    );
}


export default MyStage;