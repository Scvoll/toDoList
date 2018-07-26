import React from 'react'
import {connect} from 'react-redux'
import {deleteToDo} from "../actions"


const RemoveButton = (props) => {
    let id = props.item;
    return <button className="delButton" onClick={() => props.remove(id)}><span>&#215;</span></button>
};

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => dispatch(deleteToDo(id))
});

export default connect(null, mapDispatchToProps)(RemoveButton)