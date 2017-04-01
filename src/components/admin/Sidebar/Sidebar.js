/**
 * Created by Nealyang on 17/3/29.
 */
import React,{Component,PropTypes} from 'react'

export default class Sidebar extends Component{

    static propTypes= {
        nav:PropTypes.object.isRequired,
        selectNavigation:PropTypes.func.isRequired
    };

    content = [
        {name:"内容",content:[{name:"发布",link:"/issue"},{name:"文章列表",link:"/article_list"},{name:"草稿箱",link:"/draft"}]},
        {name:"标签管理",content:[{name:'文章类型',link:'admin_class'},{name:'技术类别',link:'/admin_tag'}]},
        {name:"评论管理",content:[{name:"全部评论",link:"comment_manage"}]},
        {name:"成员管理",content:[{name:'管理员',link:'admin_manage'}]}
    ];


    render(){
        const {nav,selectNavigation} = this.props;
        const style = require('./sidebar.scss');
        return(
            <div className={style.container}>
                {
                    this.content.map((value,i)=>(
                        <ul key={i}>
                            <img src={require('./img/more.png')}/>
                            <span>{value.name}</span>
                            {
                                value.content.map((v,j)=>{
                                    let thisNav = v;
                                    return <li key={j} onClick={()=>{selectNavigation(thisNav.name,thisNav.link)}}
                                               className={thisNav.name === nav.currentNav?style.selected:""}>{v.name}</li>
                                })
                            }
                        </ul>
                    ))
                }
            </div>
        )
    }

    componentDidMount() {
        this.content.map((values)=>{
            values.content.map((value)=>{
                if("/admin"+value.link === window.location.pathname){
                    this.props.selectNavigation(value.name,value.link)
                }
            })
        })
    }
}