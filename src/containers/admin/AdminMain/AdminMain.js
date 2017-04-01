/**
 * Created by Nealyang on 17/3/25.
 */
import React,{Component,PropTypes} from 'react'
import {Sidebar} from '../../../components'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectNavigation} from '../../../actions/admin/navigation'

class AdminMain extends Component{

    render(){
        const style = require('./css/adminMain.scss');
        const {user,nav,selectNavigation} = this.props;
        return(
            <div>
                {
                    user?<Sidebar nav={nav} selectNavigation={selectNavigation}/>:<span></span>
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
        user:state.admin.async.user,
        nav:state.admin.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        selectNavigation
    },dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminMain)


