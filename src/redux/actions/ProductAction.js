import axios from 'axios';
import { GET_PRODUCTS , GET_PRODUCT } from './types';
import { useHistory } from 'react-router-dom';

const productUrl = "https://fakestoreapi.com/products";

export const getProducts = (items) => async (dispatch) => {

    const response = await axios.get(`${productUrl}`);
    dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
    });
    items(response.data);
};

export const getProduct = (id) => async (dispatch) => {

    const response = await axios.get(`${productUrl}/${id}`);
    dispatch({
        type: GET_PRODUCT,
        payload: response.data,
    });
};

