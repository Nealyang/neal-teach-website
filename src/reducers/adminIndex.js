/**
 * Created by Nealyang on 17/3/30.
 */
import {combineReducers} from 'redux'
import {reducerCreator} from 'redux-amrc'
import selectNavigation from './admin/navigation'

const adminReducer = combineReducers({
    async:reducerCreator(),
    nav:selectNavigation
});

export default adminReducer;
