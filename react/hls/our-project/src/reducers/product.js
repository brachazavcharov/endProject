import * as actionTypes from "../actions/actionTypes";
const initialState = {
    productArr: [],
    selectedProduct: null,
    updateProduct: null
}
 const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_ADDED:
            return {
                ...state,
                productArr: [...state.productArr, action.payload]
            }
        case actionTypes.PRODUCT_DELETED:
            let arr = state.productArr.filter(p => p._id !== action.payload)
            return {
                ...state,
                productArr: arr
            }
        case actionTypes.PRODUCT_UPDATED:
            return {
                ...state,
                updateProduct: action.payload
            }
        case actionTypes.PRODUCT_SELECTED:
            return {
                ...state,
                selectedProduct: action.payload
            }
        case actionTypes.PRODUCTS_SAVED:
            return {
                ...state,
                productArr: [...action.payload]
            }
    }
    return state;
}
export default productReducer;