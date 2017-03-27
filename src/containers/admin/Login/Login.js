/**
 * Created by Nealyang on 17/3/24.
 */
import React, {Component, PropTypes} from 'react'
import * as LoginActions from '../../../actions/admin/login'
import {connect} from 'react-redux'
import Helmet from 'react-helmet';

class Login extends Component {

    static propTypes = {
        login: PropTypes.func
    };

    render() {
        const {login} = this.props;
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

    handleLogin = (event) => {
        event.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        this.props.login(username, password)
    }
}

export default connect(
    (state)=>{
         return{
             state:state
         }
    },
    LoginActions
)(Login);
