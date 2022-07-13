import {Layer, Stage} from "react-konva";
import {useDispatch, useSelector} from "react-redux";
import {setIsFinished, setPoints, addShape, editPoints, deleteShape} from "../store/boundariesSlice";
import {setId, setCurMousePos, setSelectedId, setMode, setStageClicked} from "../store/boundariesControlSlice";
import MyLayer from "./MyLayer";
import shapesObj from "../store/shapesObj";
import MyGroup from "./MyGroup";
import {useEffect, useState} from "react";

const MyStage = (props) => {

    const { width, height } = props;
    const id = useSelector(state => state.boundariesControl.id);
    const mode = useSelector(state => state.boundariesControl.mode);
    const selectedId = useSelector(state => state.boundariesControl.selectedId);

    const dispatch = useDispatch();
    const allShapes = useSelector(state => state.boundaries);
    const points = useSelector(state => state.boundaries
        .find((shape)=> shape.id === id).points);
    const isFinished = useSelector(state => state.boundaries
        .find((shape)=> shape.id === id).isFinished);
    const isMouseOverStartPoint = useSelector(state =>
        state.boundaries
            .find((shape)=> shape.id === id).isMouseOverStartPoint );
    const curMousePos = useSelector(state => state.boundariesControl.curMousePos);
    const elClicked = useSelector(state => state.boundariesControl.elClicked);
    const lowestPointPosition =
        useSelector(state => state.boundariesControl.lowestPointPosition);

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

    const handleClick = id => {
        return event => {

            dispatch(setMode('draw'));

            if (isFinished) return;
            const stage = event.target.getStage();
            const mousePos = getMousePos(stage);
            if (isMouseOverStartPoint && points.length >= 3) {
                dispatch(setIsFinished({ id: id, value: true }))
                const newShape = {...shapesObj}
                newShape.id = id + 1;
                dispatch(addShape(newShape));
                dispatch(setId(id + 1));
            } else {
                dispatch(setPoints({ id: id, value: mousePos }))
            }
        }
    };

    const handleMouseMove = event => {
        const stage = event.target.getStage();
        const mousePos = getMousePos(stage);

        dispatch(setCurMousePos(mousePos));
    };

    const onlyDraw = (func) => {
        if (mode === 'draw'){
            return func;
        }

        return null;
    }

    const handleMouseDown = () => {
    }

    return(
        <Stage
            width={(!!width ? width: 800)}
            height={(!!height ? height: 800)}
            onMouseDown={handleClick(id)}
            onMouseMove={handleMouseMove}
        >
            {
                allShapes.map((shape)=> {
                    const groupParameters = {
                        key: shape.id,
                        id: shape.id,
                        isFinished: shape.isFinished,
                        points: shape.points,
                        x: shape.x,
                        y: shape.y,
                        curMousePos,
                        dispatch,
                        mode,
                        selectedId,
                        stageWidth: width,
                        stageHeight: height,
                        lowestPointPosition
                    }
                    return <MyLayer {...groupParameters}/>
                })
            }
        </Stage>
    );
}


export default MyStage;