/**
 * Created by Nealyang on 17/3/25.
 */
import {ASYNC} from 'redux-amrc'
import {customFetch} from '../../utils/clientUtils'
import {browserHistory} from 'react-router'

export const ADMINLOGIN = ADMINLOGIN;

export function login(username,password) {
    const url = '/admin/login';
    const options = {
        method:'post',
        credentials: 'include',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username,
            password
        })
    };
    return{
        [ASYNC]:{
            key:'user',
            promise:()=>customFetch(url,options)
        }
    }
}

export function skipPageToIndex() {
    browserHistory.push('/admin/issue')
}


