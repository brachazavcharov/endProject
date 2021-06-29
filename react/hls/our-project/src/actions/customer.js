import * as actionTypes from './actionTypes';
import axios from "axios";

export const addCustomer = (customer) => {
    return {
        type: actionTypes.CUSTOMER_ADDED,
        payload: customer
    }
}
export const deleteCustomer = (_id) => {
    return {
        type: actionTypes.CUSTOMER_DELETED,
        payload: _id
    }
}
export const updateCustomer = (customer) => {
    return {
        type: actionTypes.CUSTOMER_UPDATED,
        payload: customer
    }
}
export const selecteCustomer = (customer) => {
    return {
        type: actionTypes.CUSTOMER_SELECTED,
        payload: customer
    }
}