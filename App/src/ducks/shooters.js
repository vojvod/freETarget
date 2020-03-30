import API from "../utils/API";

const SET_SHOOTERS = 'shooters/SET_SHOOTERS';

const initialState = {
    status: 200,
    shooters: []
};

export default (state=initialState, action) => {
    switch (action.type) {

        case SET_SHOOTERS:
            return {
                ...state,
                status: action.status,
                shooters: action.shooters
            };


        default:
            return state;
    }
}

const setShooters = (shooters) => (dispatch) => {
    dispatch({
        type: SET_SHOOTERS,
        status: 200,
        shooters
    });
};

export const fetchAppShooters = (token, userId) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        API.get('/shooters/?token=' + token + '&userId=' + userId).then((results) => {
            if (results.status === 200) {
                dispatch(setShooters(results.data));
                resolve(results.data);
            }
        });
    });
};

export const addAppShooter = (newShooter) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        API.post('/shooters', newShooter).then((results) => {
            API.get('/shooters/?token=' + newShooter.token + '&userId=' + newShooter.userId).then((results) => {
                if (results.status === 200) {
                    dispatch(setShooters(results.data));
                    resolve(results.data);
                }
            });
        });
    });
};

export const updateAppShooter = (newShooter) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        API.put('/shooters/' + newShooter.id, newShooter).then((results) => {
            API.get('/shooters/?token=' + newShooter.token + '&userId=' + newShooter.userId).then((results) => {
                if (results.status === 200) {
                    dispatch(setShooters(results.data));
                    resolve(results.data);
                }
            });
        });
    });
};

export const deleteAppShooter = (shooter) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        API.delete('/shooters/' + shooter.deleteShooter, {
            headers: {
                token: shooter.token
            }
        }).then((results) => {
            API.get('/shooters/?token=' + shooter.token + '&userId=' + shooter.userId).then((results) => {
                if (results.status === 200) {
                    dispatch(setShooters(results.data));
                    resolve(results.data);
                }
            });
        });
    });
};