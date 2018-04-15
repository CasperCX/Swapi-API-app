import { GET_DATA, SORT_DATA } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case GET_DATA:
            return action.payload;
        case SORT_DATA:
            return action.payload;
        default:
            return state;
    }
};

