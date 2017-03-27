/**
 * Created by Nealyang on 17/3/24.
 */
import React,{Component} from 'react';


export default class Main extends Component{
    render(){
       require('./css/reset.css');
        return(
            <dvi>
                {this.props.children}
            </dvi>
        )
    }
}