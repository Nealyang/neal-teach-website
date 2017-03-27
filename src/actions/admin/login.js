/**
 * Created by Nealyang on 17/3/25.
 */
import {ASYNC} from 'redux-amrc'
import {customFetch} from '../../../src/utils/clientUtils'

export const ADMINLOGIN = ADMINLOGIN;

export function login(username,password) {
    const url = '/admin/login';
    const options = {
        method:'post',
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


