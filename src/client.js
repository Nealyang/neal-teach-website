/**
 * Created by Nealyang on 17/3/23.
 */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {match,Router,browserHistory} from 'react-router'
import configureStore from './utils/configureStore'
import getRoutes from './routes'

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
const history = browserHistory;
const routes = getRoutes(store);

match({history,routes},(err,redirect,renderProps)=>{
   if(err){
       history.goBack();
       console.error(err.stack);
   }else if (redirect){
       history.replace(redirect);
   }else{
       render(
           <Provider store={store}>
               <Router {...renderProps}/>
           </Provider>,
           rootElement
       )
   }
});
