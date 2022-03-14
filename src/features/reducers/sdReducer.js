import { GET_SDS, ADD_SD } from "../actions/sd";

const initialState = {};

const SdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SDS:
            return action.payload;
        case ADD_SD:
            return [action.payload, ...state];
        default:
            return state;
    }
};

export default SdReducer;