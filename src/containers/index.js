import {connect} from 'react-redux'
import {TodoList} from "./todoList"
import {toggleToDo} from "../actions"
import {filters} from "../constants"
import {addToDo} from "../actions"


const mapStateToProps = (state) => {
    let notDeleted = state.todos.filter((todo) => !todo.deleted);
    switch (state.filter) {
        case (filters.SHOW_ALL):
            return {todos: notDeleted};
        case (filters.ACTIVE):
            return {todos: notDeleted.filter((todo) => !todo.completed)};
        case (filters.COMPLETED):
            return {todos: notDeleted.filter((todo) => todo.completed)}
    }
};

const mapDispatchToProps = (dispatch) => ({
    complete: (id) => dispatch(toggleToDo(id)),
    add: (text) => dispatch(addToDo(text))
});


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);