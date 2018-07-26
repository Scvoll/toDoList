import {combineReducers} from "redux"
import {filter} from "./filter"
import {addAndDelTodo} from "./todo"


export default combineReducers({
    filter: filter,
    todos: addAndDelTodo})