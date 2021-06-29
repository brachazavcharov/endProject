import * as actionTypes from "../actions/actionTypes";
const initialState = {
    custumerArr: [],
    selectedCustumer: null,
    updateCustomer: null
}
export const custumerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CUSTOMER_ADDED:
            return {
                ...state,
                custumerArr: [...state.custumerArr, action.payload]
            }
        case actionTypes.CUSTOMER_DELETED:
            let arr = state.custumerArr.filter(p => p._id !== action.payload)
            return {
                ...state,
                custumerArr:arr

            }
        case actionTypes.CUSTOMER_UPDATED:
            return {
                ...state,
                updateCustomer: action.payload
            }
        case actionTypes.CUSTOMER_SELECTED:
            return {
                ...state,
                selectedCustumer: action.payload
            }
    }
    return state;
}