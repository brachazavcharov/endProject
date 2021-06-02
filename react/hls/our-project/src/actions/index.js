import * as actionTypes from './actionTypes';

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
export const addMessage = (message) => {
    return {
        type: actionTypes.MESSAGE_ADDED,
        payload: message
    }
}
export const addCompetition = (competition) => {
    return {
        type: actionTypes.COMPETITION_ADDED,
        payload: competition
    }
}
export const deleteCompetition = (_id) => {
    return {
        type: actionTypes.COMPETITION_DELETED,
        payload: _id
    }
}
export const addRecipe = (recipe) => {
    return {
        type: actionTypes.RECIPE_ADDED,
        payload: recipe
    }
}
export const deleteRecipe = (_id) => {
    return {
        type: actionTypes.RECIPE_DELETED,
        payload: _id
    }
}
export const selecteRecipe = (recipe) => {
    return {
        type: actionTypes.RECIPE_SELECTED,
        payload: recipe
    }
}
export const updateRecipe = (recipe) => {
    return {
        type: actionTypes.RECIPE_SELECTED,
        payload: recipe
    }
}