/**
 * Created by Nealyang on 17/3/29.
 */
import {ASYNC} from 'redux-amrc'
import {customFetch} from '../../utils/clientUtils'

export function shouldLoadAuth(state) {
    if(!state.async.loadState.user) return true;
    const loaded = state.async.loadState.user.loaded;
    return !loaded;
}

export function loadAuth() {
    return{
        [ASYNC]:{
            key:'user',
            promise:()=>customFetch('/admin/loadAuth')
        }
    }
}

export function loadAuthIfNeeded() {
    return (dispatch,getState)=>{
        if(shouldLoadAuth(getState())){
            return dispatch(loadAuth())
        }
        return Promise.resolve();
    }
}
