import axios from 'axios';
import { GET_DATA, SORT_DATA } from './types';

export const getData = (term) => async (dispatch) => {
    console.log("getting by term:", term);
    const res = await axios.get(`https://swapi.co/api/${term}/`);
    dispatch({ type: GET_DATA, payload: res.data.results });
};

export const sortData = (sorted_data) => {
    //console.log("sorted data: ", sortData);
    return {
        type: SORT_DATA,
        payload: sorted_data
    }
};