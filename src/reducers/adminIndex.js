/**
 * Created by Nealyang on 17/3/30.
 */
import {combineReducers} from 'redux'
import {reducerCreator} from 'redux-amrc'

const adminReducer = combineReducers({
    async:reducerCreator(),
});

export default adminReducer;
