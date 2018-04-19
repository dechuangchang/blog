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
                    个人资料
                </li>
                <li>
                    <Icon type="code-o" />
                    学习进度
                </li>
                <li>
                    <Icon type="edit" />
                    随手笔记
                </li>
                <li>
                    <Icon type="file-text" />
                    个人简历
                </li>
                <li>
                    <Icon type="coffee" />
                    来首音乐
                </li>
            </ul>
            <div className='footer'>
                <div className='wechat'>
                    <img  src={require('../../../img/wechat.png')} />
                </div>
                <div className='tell-me'>
                    
                    <a target='_blank' href='https://github.com/dechuangchang'>
                        <Icon type="github" />
                        GitHub
                    </a>
                </div>
               
            </div>
        </div>
    )
}