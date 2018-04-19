import './nav.less';
import { Icon, Divider } from 'antd'
export default function () {
    console.log(this.props)
    let { oNavShow, navState } = this.props;
    return (
        <div className={navState ? 'nav' : 'nav navmin'}>
            <h1>
                <img className='logo' src={require('../../../img/logo.jpg')} />
            </h1>
            <ul>
                <li>
                    <Icon type="user" />
                    <span>个人资料</span>
                </li>
                <li>
                    <Icon type="code-o" />
                    <span>学习进度</span>
                </li>
                <li>
                    <Icon type="edit" />
                    <span>随手笔记</span>
                </li>
                <li>
                    <Icon type="file-text" />
                    <span>个人简历</span>
                </li>
                <li>
                    <Icon type="coffee" />
                    <span>来首音乐</span>
                </li>
            </ul>
            <div className='footer'>
                <div className='wechat'>
                    <img  src={require('../../../img/wechat.png')} />
                </div>
                <div className='tell-me'>
                    
                    <a target='_blank' href='https://github.com/dechuangchang'>
                        <Icon type="github" />
                        <span>GitHub</span>
                    </a>
                </div>
               
            </div>
        </div>
    )
}