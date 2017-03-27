/**
 * Created by Nealyang on 17/3/25.
 */
import React,{Component,PropTypes} from 'react'

export default class AdminMain extends Component{
    render(){
        const style = require('./css/adminMain.scss');
        return(
            <div>
                <div className={style.adminHeader}>
                    <img src={require('./img/logo.png')}  alt="Neal-teach"/>
                </div>
                {this.props.children}
            </div>
        )
    }
}
