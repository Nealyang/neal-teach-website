/**
 * Created by Nealyang on 17/3/25.
 */
import 'isomorphic-fetch'
import config from '../config'

function handle401(res) {
    //未授权
    if(res.status === 401 && !__SERVER__){
        window.location.reload()
    }
    return res;
}

function handleErrors(res) {
    if(res.status !== 200){
        throw new Error(res.message);
    }
    return res.json();
}

export function customFetch(url,options) {
    const prefix = __SERVER__?'http://' + config.apiHost + ':' + config.apiPort : '/api';
    let opt = options || {};
    return fetch(prefix+url,opt)
        .then(handle401)
        .then(handleErrors)
}
