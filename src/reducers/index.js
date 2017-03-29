/**
 * Created by Nealyang on 17/3/24.
 */
import {combineReducers} from 'redux'
import {reducerCreator} from 'redux-amrc'

const rootReducer = combineReducers({
    async:reducerCreator()
});

export default rootReducer;


