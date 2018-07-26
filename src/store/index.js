import {createStore} from "redux"
import rootReducer from "../reducers"



export const initialState = [{
        id: 1,
        text: 'First todo',
        completed: false,
        deleted: false
    }, {
        id: 2,
        text: 'Second todo',
        completed: false,
        deleted: false
    }];


export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
