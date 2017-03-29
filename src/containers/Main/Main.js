/**
 * Created by Nealyang on 17/3/24.
 */
import React,{Component} from 'react';
import {Spin} from '../../components'
import {connect} from 'react-redux'

class Main extends Component{
    render(){
       require('./css/reset.css');
        return(
            <div>
                {
                    this.props.loading>0?<Spin/>:<span></span>
                }
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return{
            loading:state.async.loadingNumber
        }
    }
)(Main);