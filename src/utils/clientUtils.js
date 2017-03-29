/**
 * Created by Nealyang on 17/3/25.
 */
require('es6-promise').polyfill();
import 'isomorphic-fetch';
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
    if(__SERVER__){
        opt = {
            ...opt,
            headers: {
                ...opt.headers,
                cookie: __COOKIE__
            }
        };
    }else{
        opt = {
            ...opt,
            credentials: 'same-origin'
        };
    }

    return fetch(prefix+url,opt)
        .then(handle401)
        .then(handleErrors)
}
