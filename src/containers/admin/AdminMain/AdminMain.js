/**
 * Created by Nealyang on 17/3/25.
 */
import React,{Component,PropTypes} from 'react'
import {Sidebar} from '../../../components'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AdminMain extends Component{
    render(){
        const style = require('./css/adminMain.scss');
        const {user} = this.props;
        return(
            <div>
                {
                    user?<Sidebar/>:<span></span>
                }
                <div className={style.adminHeader}>
                    <img src={require('./img/logo.png')}  alt="Neal-teach"/>
                </div>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user:state.admin.async.user
    }
};

export default connect(mapStateToProps)(AdminMain)


