import API from "../utils/API";

const SET_TOKEN = 'dashboard/SET_TOKEN';
const REMOVE_TOKEN = 'dashboard/REMOVE_TOKEN';

const initialState = {
    status: 200,
    token: null,
    userId: null
};

export default (state=initialState, action) => {
    switch (action.type) {

        case SET_TOKEN:
            return {
                ...state,
                status: action.status,
                token: action.token,
                userId: action.userId,
                shooters: action.shooters
            };

        case REMOVE_TOKEN:
            return {
                ...state,
                status: action.status,
                token: null,
                userId: null,
                shooters: []
            };

        default:
            return state;
    }
}

const setToken = (token, userId, shooters) => (dispatch) => {
    dispatch({
        type: SET_TOKEN,
        status: 200,
        token,
        userId,
        shooters
    });
};

const removeToken = () => (dispatch) => {
    dispatch({
        type: REMOVE_TOKEN,
        status: 200
    });
};

export const fetchAppToken = (username, password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        API.post('/session', {
            username: username,
            password: password
        }).then((results) => {
            if (results.status === 200) {
                dispatch(setToken(results.data.token, results.data.user.userId, results.data.shooters));
                resolve(results.data);
            }
        });
    });
};

export const removeAppToken = () => (dispatch, getState) => {
    dispatch(removeToken());
};
