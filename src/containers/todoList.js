import React from 'react'
import RemoveButton from "../components/removeButton"
import {DoneButton} from "../components/doneButton"
import PropTypes from "prop-types"


export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const ExampleDataFromAJAX = ["Wake up", "Work", "OverWork", "TV", "Sleep"];
        ExampleDataFromAJAX.forEach((text) => this.props.add(text));
    }



    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <li key={todo.id} style={todo.completed ? {opacity: 0.5} : null}>
                        <span className="textLiSpan">{todo.text}</span>
                        <RemoveButton item={todo.id}/>
                        <DoneButton item={todo.id} dispatch={this.props.complete} done={todo.completed}/>
                    </li>
                ))}
            </ul>
        )
    }
}


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    complete: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
};