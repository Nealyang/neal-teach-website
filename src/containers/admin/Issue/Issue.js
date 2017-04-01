/**
 * Created by Nealyang on 17/3/31.
 */
import React,{Component,PropTypes} from 'react'
import {Editor} from '../../../components'
import Helmet from 'react-helmet'
import {Title} from '../../../components'

export default class Issue extends Component{
    render(){
        const style=require('./issue.scss');
        return(
            <div className={style.issueContainer}>
                <Helmet title="发布" link={[{rel:"stylesheet",href:'https://cdn.bootcss.com/wangeditor/2.1.20/css/wangEditor.min.css'}]}/>
                <Title title="创建文章"/>
                {/*<Editor/>*/}
            </div>
        )
    }
}
