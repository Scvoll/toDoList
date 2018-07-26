import {ADD_TODO, CHANGE_FILTER, DELETE_TODO, TOGGLE_TODO} from "../constants"


let idToDo = 0;

export const addToDo = (text) => ({
    type: ADD_TODO,
    id: ++idToDo,
    text: text,
    completed: false,
    deleted: false
});


export const deleteToDo = (id) => ({
    type: DELETE_TODO,
    id: id,
});


export const toggleToDo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});


export const setFilter = (filter) => ({
    type: CHANGE_FILTER,
    filter: filter
});