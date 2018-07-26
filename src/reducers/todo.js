import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../constants"


export const addAndDelTodo = (state = [], action) => {
    switch (action.type) {
        case (ADD_TODO):
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    deleted:false
                }
            ];

        case (DELETE_TODO):
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {deleted: true})
                } else {return todo}
            });

        case (TOGGLE_TODO):
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({},todo,{completed: !todo.completed})
                } else {return todo}
            });

        default: return state
    }
};

