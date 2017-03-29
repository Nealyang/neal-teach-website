/**
 * Created by Nealyang on 17/3/25.
 */
import Express from 'express'
import mysql from 'mysql'
import serverUtils from '../../../utils/serverUtils'
import loadAuth from './loadAuth'

const db = mysql.createPool({host:'localhost',port:3306,user:'root',password:' neal',database:'neal_website'});

module.exports = function () {
    const router = Express.Router();

    //用户认证
    loadAuth(router);

    router.post('/login',function (req,res) {
        let username = req.body.username;
        let password = serverUtils.md5(req.body.password+serverUtils.MD5_SUFFIX);

        if(username && password){
            db.query(`SELECT * FROM admin_table WHERE username="${username}"`,(err,userData)=>{
                if(err){
                    console.error(err);
                    res.status(500).send({code:500,data:[],message:'database error'});
                }else if(userData.length === 0){
                    res.status(400).send({code:400,data:[],msg:'parameters error'});
                }else{
                    if(userData[0].password !== password){
                        res.status(400).send({code:400,data:[],msg:'username or password error'});
                    }else{
                        req.session.user = {username,password};
                        res.status(200).send({code:200,data:[],msg:'success'});
                    }
                }
            })
        }
    });
    return router;
};