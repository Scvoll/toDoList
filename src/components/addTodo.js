import React from "react"
import {connect} from 'react-redux'
import {addToDo} from "../actions"


const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div className="form">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return false
                } else {
                    dispatch(addToDo(input.value));
                    input.value = "";
                }
            }}>
                <input type="text" ref={node => input = node} maxLength={17}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
};


export default connect()(AddTodo)