import { combineReducers } from 'redux';

import {
    dashboard,
    shooters
} from './ducks';

const rootReducer = combineReducers({
    dashboard,
    shooters
});

export default rootReducer
