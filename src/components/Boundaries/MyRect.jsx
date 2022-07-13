import {Rect} from "react-konva";
import {setIsMouseOverStartPoint, editPoints} from "../store/boundariesSlice";
import {setMode, setRectClicked} from "../store/boundariesControlSlice";

const MyRect = (props) => {
    const { id ,point, index, isFinished,
        points, dispatch, mode, width } = props;

    const onlyDraw = (func) => {
        if (mode === 'draw'){
            return func;
        }

        return null;
    }

    const onlyEdit = (func) => {
        if (mode === 'edit'){
            return func;
        }

        return null;
    }



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

    const handleDragMovePoint = event => {
        const index = event.target.index - 1;
        const pos = [event.target.attrs.x, event.target.attrs.y];

        dispatch(editPoints({ id: id,
            value: [...points.slice(0, index), pos, ...points.slice(index + 1)] }))
    };

    const x = (point[0]);
    const y = (point[1]);

    const startPointAttr = index === 0 ?
        {
            hitStrokeWidth: 12,
            onMouseOver: onlyDraw(handleMouseOverStartPoint),
            onMouseOut: handleMouseOutStartPoint

        }: null;

    const afterFinishedAttr =
        isFinished ?
            {
                hitStrokeWidth: 12,
                onMouseOver: handleMouseOverPoint,
                onMouseOut: handleMouseOutPoint
            }: null;

    const handleMouseDown = (event) => {
        event.cancelBubble = isFinished;
        if (isFinished){
            dispatch(setMode('edit'));
        }
    }

    return(
        <Rect
            key={index}
            x={x}
            y={y}
            onMouseDown={handleMouseDown}
            width={width}
            height={width}
            fill="white"
            stroke="red"
            strokeWidth={3}
            draggable={isFinished}
            onDragMove={onlyEdit(handleDragMovePoint)}
            {...startPointAttr}
            {...afterFinishedAttr}
        />
    );

}

export default MyRect;