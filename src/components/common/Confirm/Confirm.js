/**
 * Created by Nealyang on 17/3/29.
 */
import React,{Component,PropTypes} from 'react'

export default class Confirm extends Component{

    static propTypes = {
        escription:PropTypes.string.isRequired,
        clearConfirm:PropTypes.func.isRequired
    };

    render(){
        const {description} = this.props;
        const style = require('./confirm.scss');
        return(
            <div className={style.container}>
                <div className={style.contentContainer}>
                    <p className={style.titleStyle}>Here:</p>
                    <p className={style.contentStyle}>
                        {description}
                    </p>
                    <div className={style.buttonContainer}>
                        <button className={style.cancelButton} onClick={this.handleClear}>取消</button>
                        <button onClick={this.handleClear}>确认</button>
                    </div>
                </div>
            </div>
        )
    }

    handleClear = ()=>{
        this.props.clearConfirm();
    }
}
