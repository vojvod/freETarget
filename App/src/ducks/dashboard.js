const SET_TOKEN = 'dashboard/SET_TOKEN';
const SET_USER_ID = 'dashboard/SET_USER_ID';
const REMOVE_TOKEN = 'dashboard/REMOVE_TOKEN';
const REMOVE_USER_ID = 'dashboard/REMOVE_USER_ID';

const initialState = {
    token: null,
    userId: null
};

export default (state=initialState, action) => {
    switch (action.type) {

        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };

        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            };

        case REMOVE_TOKEN:
            return {
                ...state,
                token: null
            };

        case REMOVE_USER_ID:
            return {
                ...state,
                userId: null
            };

        default:
            return state;
    }
}

export const setToken = (token) => (dispatch) => {
    dispatch({
        type: SET_TOKEN,
        token
    });
};

export const setUserID = (userId) => (dispatch) => {
    dispatch({
        type: SET_USER_ID,
        userId
    });
};

export const removeToken = () => (dispatch) => {
    dispatch({
        type: REMOVE_TOKEN
    });
};

export const removeUserID = () => (dispatch) => {
    dispatch({
        type: REMOVE_USER_ID
    });
};
