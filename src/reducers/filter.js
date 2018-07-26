import {CHANGE_FILTER, filters} from '../constants'


export const filter = (state = filters.SHOW_ALL, action) => {
    switch (action.type){
        case (CHANGE_FILTER):
            return action.filter;
        default:
            return state
    }
};