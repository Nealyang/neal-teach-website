/**
 * Created by Nealyang on 17/3/24.
 */
import React,{Component} from 'react';
import {Spin,Confirm} from '../../components'
import {connect} from 'react-redux'
import {clearConfirm} from '../../actions/common/common'
import {bindActionCreators} from 'redux'

class Main extends Component{
    render(){
       require('./css/reset.css');
        const {loadingAdmin,confirm,clearConfirm} = this.props;
        return(
            <div>
                {
                    confirm!==""?<Confirm clearConfirm={clearConfirm} description={confirm}/>:<span></span>
                }
                {
                    loadingAdmin>0?<Spin/>:<span></span>
                }
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        loadingAdmin:state.admin.async.loadingNumber,
        confirm:state.confirm
    }
};

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        clearConfirm
    },dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);