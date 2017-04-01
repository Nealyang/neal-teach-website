/**
 * Created by Nealyang on 17/3/31.
 */
import React,{Component,PropTypes} from 'react'

export default class Title extends Component{
    render(){
        const style=require('./title.scss')
        return(
            <p className={style.title}>{this.props.title}</p>
        )
    }
}
