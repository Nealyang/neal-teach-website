/**
 * Created by Nealyang on 17/3/24.
 */
import React, {Component, PropTypes} from 'react'
import {skipPageToIndex,login} from '../../../actions/admin/login'
import {setConfirmContent} from '../../../actions/common/common'
import {connect} from 'react-redux'
import Helmet from 'react-helmet';
import {bindActionCreators} from 'redux'

class Login extends Component {

    static propTypes = {
        login: PropTypes.func,
        user:PropTypes.object,
        skipPageToIndex:PropTypes.func,
        setConfirmContent:PropTypes.func
    };

    render() {
        const style = require('./css/adminLogin.scss');
        return (
            <div className={style.container}>
                <Helmet title="登录"/>
                <div>
                    <label>用户名:</label>
                    <br/>
                    <input ref="username" className={style.userInput} name="username" type="text" id="username"
                           placeholder="请输入用户名"/>
                    <br/>
                    <label>密码:</label>
                    <br/>
                    <input ref="password" className={style.userInput} name="password" type="password" id="password"
                           placeholder="请输入密码"/>
                    <br/>
                    <button className={style.submitButton} onClick={this.handleLogin}>登录</button>
                </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user){
            this.props.skipPageToIndex();
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        if(username==="" ||password==="" ){
            this.props.setConfirmContent('请输入用户、密码！');
        }else{
            this.props.login(username, password);
        }

    }
}


const mapStateToProps = (state)=>{
    return {
        user:state.admin.async.user
    }
};

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({
        login,
        skipPageToIndex,
        setConfirmContent
    },dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
