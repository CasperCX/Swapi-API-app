import axios from 'axios';
import { GET_DATA, SORT_DATA } from './types';

export const getData = (term) => async (dispatch) => {
    const res = await axios.get(`https://swapi.co/api/${term}/`);
    console.log("fetched data:", res.data.results);
    dispatch({ type: GET_DATA, payload: res.data.results });
};

export const sortData = (sorted_data) => {
    //console.log("sorted data: ", sortData);
    return {
        type: SORT_DATA,
        payload: sorted_data
    }
};