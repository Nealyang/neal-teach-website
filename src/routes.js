/**
 * Created by Nealyang on 17/3/23.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Main, AdminMain, AdminLogin,NotFound,Issue} from './containers';
import {loadAuthIfNeeded} from './actions/admin/auth'

const preload = promise => (nextState, replace, cb) => {
    if (__SERVER__ || nextState.location.action === 'PUSH') {
        promise().then(() => cb());
    } else {
        cb();
    }
};

export default store => {
    const authPromise = () => store.dispatch(loadAuthIfNeeded());
    const requireLogin = (nextState, replace, cb) => {
        const user = store.getState().admin.async.user;
        if (!user) {
            if (nextState.location.pathname !== '/admin/login') {
                replace('/admin/login')
            }
        }
        cb();
    };
    const judgeLogin = (nextState,replace)=>{
        const user = store.getState().admin.async.user;
        if(user){
            replace('/admin')
        }
    };
    return (
        <Route path="/" component={Main} onEnter={preload(authPromise)}>
            <Route path="admin" component={AdminMain} onEnter={requireLogin}>
                <Route onEnter={requireLogin}>
                    <Route path="login" component={AdminLogin} onEnter={judgeLogin}/>
                    <Route path="issue" component={Issue}/>
                </Route>
            </Route>
            <Route path="*" component={NotFound} status={404}/>
        </Route>
    );
};
