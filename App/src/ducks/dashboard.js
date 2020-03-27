const SET_TOKEN = 'dashboard/SET_TOKEN';
const SET_USER_ID = 'dashboard/SET_USER_ID';

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
