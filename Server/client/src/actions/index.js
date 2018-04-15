import axios from 'axios';
import { GET_DATA } from './types';

export const getData = () => async (dispatch) => {
    const res = await axios.get('https://swapi.co/api/people/');
    dispatch({ type: GET_DATA, payload: res.data });
};