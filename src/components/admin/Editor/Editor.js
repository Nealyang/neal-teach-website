/**
 * Created by Nealyang on 17/3/31.
 */
import React,{Component,PropTypes} from 'react'
export default class Editor extends Component{
    render(){
        const style=require('./editor.scss');
        return(
            <div id="wangeditor" className={style.editorContainer}>
                <p>hahahah</p>
            </div>
        )
    }

    componentDidMount() {
        const wangEditor = require('wangeditor');
        const editor = new wangEditor("wangeditor");
        editor.create();
    }
}
