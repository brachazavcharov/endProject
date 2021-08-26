import * as actionTypes from './actionTypes';
import axios from "axios";

export const selecteProduct = (product) => {
    return {
        type: actionTypes.PRODUCT_SELECTED,
        payload: product
    }
}
export const addProduct = (product) => {
    return {
        type: actionTypes.PRODUCT_ADDED,
        payload: product
    }
}
export const deleteProduct = (_id) => {
    return {
        type: actionTypes.PRODUCT_DELETED,
        payload: _id
    }
}
export const updateProduct = (product) => {
    return {
        type: actionTypes.PRODUCT_UPDATED,
        payload: product
    }
}
export const getAllProducts = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/product").then(succ => {
            console.log(succ);
            dispatch(saveProducts(succ.data));
        }).catch(ee => { console.log(ee.message) });
    }
}
export const saveProducts = (products) => {
    return {
        type: actionTypes.PRODUCTS_SAVED,
        payload: products
    }
}