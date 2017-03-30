/**
 * Created by Nealyang on 17/3/29.
 */
import React,{Component} from 'react'

export default class Sidebar extends Component{
    render(){
        const content = [
            {name:"内容",content:["发布","文章列表","草稿箱"]},
            {name:"标签",content:["类型","类别"]},
            {name:"评论",content:["评论管理"]},
            {name:"成员",content:["成员管理"]}
        ];
        const {selectMenu} = this.props;
        const style = require('./sidebar.scss');
        return(
            <div className={style.container}>
                <p>首页</p>
                {
                    content.map((value,i)=>(
                        <ul key={i}>
                            <img src={require('./img/more.png')}/>
                            <span>{value.name}</span>
                            {
                                value.content.map((v,j)=>
                                <li key={j}>{v}</li>)
                            }
                        </ul>
                    ))
                }
            </div>
        )
    }
}