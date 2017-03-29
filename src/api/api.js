/**
 * Created by Nealyang on 17/3/24.
 */
import Express from 'express'
import config from '../config'
import bodyParser from 'body-parser'
import multer from 'multer'
const multerObj = multer({dest:'../../static/upload'});
import cookieParser from 'cookie-parser'
import cookieSession from 'express-session'

const port  = config.apiPort;
const app = new Express();

//处理请求数据
app.use(bodyParser({
    extended:false
}));
app.use(multerObj.any());

//cookie session
app.use(cookieParser('Neal_signed'));
app.use(cookieSession({
    secret:'Neal_signed',
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:60*60*1000}
}));

//设置路由
app.use('/admin',require('./router/admin')());
app.use('/',require('./router/front')());


app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  API Listening on port %s. ', port);
    }
});
