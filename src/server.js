/**
 * Created by Nealyang on 17/3/23.
 */
import path from 'path'
import Express from 'express'
import favicon from 'serve-favicon'
import httpProxy from 'http-proxy'
import compression from 'compression'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {match,RouterContext} from 'react-router'
import configStore from './utils/configureStore'
import getRoutes from './routes'
import Html from './utils/Html'
import config from './config'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'

const app = new Express();
const port = config.port;
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
    target:targetUrl
});

//解析请求数据
// app.use(bodyParser({
//     extended:false
// }));
// app.use(multer(multerObj.any()));
//设置cookie session
app.use(cookieParser('Neal_signed'));
{
    let arr = [];
    for(let i = 0;i<10000;i++){
        arr.push('keys_'+Math.random());
    }
    app.use(cookieSession({
        keys:arr,
        name:'session_id',
        maxAge:60*60*1000//60min
    }));
}

app.use(compression());
app.use(Express.static(path.join(__dirname,'..','static')));
app.use(favicon(path.join(__dirname,'..','static','favicon.ico')));

app.use('/api',(req,res)=>{
    proxy.web(req,res,{target:targetUrl})
});

app.use((req,res)=>{

    global.__SESSION__ = req.session['user_id'];

    if(process.env.NODE_ENV !== 'production'){
        webpackIsomorphicTools.refresh()
    }

    const store = configStore();
    const routes = getRoutes(store);
    
    function hybrateOnClient() {
        res.send('<!doctype html>\n'+
        renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store}/>))
    }

    if(__DISABLE_SSR__){//禁止universal渲染
       hybrateOnClient();
       return;
    }

    match({routes,location:req.url},(err,redirect,renderProps)=>{
        if(err){
            res.status(500);
            hybrateOnClient();
            console.error('ROUTER ERROR:', err.stack);
        }else if(redirect){
            res.redirect(redirect.pathname + redirect.search);
        }else if(renderProps){
            res.status(200);
            const component = (
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            );
            res.send('<!doctype html>\n'+
            renderToString(<Html store={store} assets={webpackIsomorphicTools.assets()} component={component}/>));

        }else{
            res.status(404).send('Not found');
        }
    });
});

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  Open http://%s:%s in a browser to view the app.', config.host, port);
    }
});
