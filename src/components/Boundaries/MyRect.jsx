import {Rect} from "react-konva";
import {setIsMouseOverStartPoint, editPoints} from "../store/boundariesSlice";
import {useCallback} from "react";

const MyRect = (props) => {
    const { id ,point, index, isFinished,
        points, dispatch, width, editable, groupX, groupY, type, } = props;


    const handleMouseOverStartPoint = event => {
        if (isFinished || points.length < 3) return;
        event.target.scale({ x: 1.5, y: 1.5 });

        dispatch(setIsMouseOverStartPoint({ id: id, value: true }))
    };

    const handleMouseOverPoint = event => {
        event.target.scale({ x: 1.5, y: 1.5 });
    }

    const handleMouseOutStartPoint = event => {
        event.target.scale({ x: 1, y: 1 });

        dispatch(setIsMouseOverStartPoint({ id: id, value: false }));
    };

    const handleMouseOutPoint = event => {
        event.target.scale({ x: 1, y: 1 });
    }

    const handleDragMovePoint = useCallback(event => {
        event.cancelBubble = isFinished;
        const index = event.target.index - 1;
        const stageWidth = event.target.getStage().attrs.width;
        const stageHeight = event.target.getStage().attrs.height;
        let x = event.target.attrs.x;
        let y = event.target.attrs.y;

        if (x + groupX <= 0){
            event.target.attrs.x = -groupX;
        }

        if (y + groupY <= 0){
            event.target.attrs.y = -groupY;
        }

        if (x >= stageWidth - groupX){
            event.target.attrs.x = stageWidth - groupX;
        }

        if (y >= stageHeight - groupY){
            event.target.attrs.y = stageHeight - groupY;
        }

        x = event.target.attrs.x;
        y = event.target.attrs.y;

        const pos = [x, y];

        dispatch(editPoints({ id: id,
            value: [...points.slice(0, index), pos, ...points.slice(index + 1)] }))
    }, [points, groupX, groupY, isFinished]);

    const x = (point[0]);
    const y = (point[1]);

    const startPointAttr = index === 0 ?
        {
            hitStrokeWidth: 12,
            stroke: type === 'line' ? `red` : `#1565c0`,
            onMouseOver: handleMouseOverStartPoint,
            onMouseOut: handleMouseOutStartPoint

        }: null;

    const afterFinishedAttr =
        isFinished ?
            {
                hitStrokeWidth: 12,
                stroke: `red`,
                onMouseOver: handleMouseOverPoint,
                onMouseOut: handleMouseOutPoint
            }: null;

    const handleMouseDown = (event) => {
        event.cancelBubble = isFinished;
        if (isFinished){
            event.target.getStage().container().style.cursor = 'grabbing';
        }
    }

    const handleMouseEnter = (event) => {
        event.cancelBubble = isFinished;

        if (isFinished){
            event.target.getStage().container().style.cursor = 'grab';
        }
    }

    const handleMouseLeave = (event) => {
        event.cancelBubble = isFinished;

        if (isFinished){
            event.target.getStage().container().style.cursor = 'default';
        }
    }

    const handleDragEnd = (event) => {
        event.cancelBubble = isFinished;
        if (isFinished){
            event.target.getStage().container().style.cursor = 'grab'
        }
    }

    return(
        <Rect
            key={index}
            x={x}
            y={y}
            cursor={'grab'}
            onMouseEnter={handleMouseEnter}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            perfectDrawEnabled={false}
            onMouseDown={handleMouseDown}
            width={width}
            height={width}
            fill="white"
            stroke="red"
            strokeWidth={3}
            onDragEnd={handleDragEnd}
            draggable={editable ? isFinished : null}
            onDragMove={handleDragMovePoint}
            {...startPointAttr}
            {...afterFinishedAttr}
        />
    );

}

export default MyRect;