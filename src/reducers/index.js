/**
 * Created by Nealyang on 17/3/24.
 */
import {combineReducers} from 'redux'
import confirm from './common'
import adminIndex from './adminIndex'

const rootReducer = combineReducers({
    confirm,
    admin:adminIndex
});

export default rootReducer;


