import * as actionTypes from "../actions/actionTypes";
const initialState = {
    publicChatArr: [],

}
export const PublicChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MESSAGE_ADDED:
            return {
                ...state,
                publicChatArr: [...state.publicChatArr, action.payload]
            }

    }
    return state;
}