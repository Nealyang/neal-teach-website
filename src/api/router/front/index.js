/**
 * Created by Nealyang on 17/3/25.
 */
import Express from 'express'
import mysql from 'mysql'

const db = mysql.createPool({host:'localhost',port:3306,user:'root',password:' neal',database:'neal_website'});

module.exports = function () {
    const router = Express.Router();

    return router;
};
