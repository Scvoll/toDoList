import React from 'react'


export const DoneButton = (props) => {
    let id = props.item;
    return <button className="doneButton" onClick={() => props.dispatch(id)}>{props.done ? "Undo?" : "DONE!"}</button>
};