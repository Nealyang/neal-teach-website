/**
 * Created by Nealyang on 17/3/24.
 */
import Express from 'express'
import config from '../config'
import bodyParser from 'body-parser'
import multer from 'multer'
const multerObj = multer({dest:'../../static/upload'});
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'


const port  = config.apiPort;
const app = new Express();

//处理请求数据
app.use(bodyParser({
    extended:false
}));
app.use(multerObj.any());

//cookie session
app.use(cookieParser('Neal_signed'));
{
    let arr = [];
    for(let i = 0;i<10000;i++){
        arr.push('Neal_signed'+Math.random());
    }
    app.use(cookieSession({
        name:'session_id',
        keys:arr,
        maxAge:60*60*1000
    }))
}

//设置路由
app.use('/admin',require('./router/admin')());
app.use('/',require('./router/front')());

app.use((req,res)=>{
    console.log(req.url);
});

// controllers(app);

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  API Listening on port %s. ', port);
    }
});
