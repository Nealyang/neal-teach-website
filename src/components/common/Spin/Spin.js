/**
 * Created by Nealyang on 17/3/24.
 */
import React,{Component} from 'react'

export default function Spin() {
    const style = require('./spin.scss');
    return(
        <div className={style.container}>
            <img src={require('./img/loading.gif')} className={style.spin}/>
        </div>
    )
}
