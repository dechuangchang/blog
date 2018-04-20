
import { Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import ThatMain from '../../HOC/That';

const Tpl = ThatMain((that) => {

    let { oNavShow, navState } = that.props;
    return (
        <div className={navState ? 'nav' : 'nav navmin'}>
            <h1>
                <img className='logo' src={require('../../../img/logo.jpg')} />
            </h1>
            <ul>
                <li>
                    <Link to={`/`}>
                        <Icon type="user" />
                        <span>个人资料</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/learning`}>
                        <Icon type="code-o" />
                        <span>学习进度</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/notes`}>
                        <Icon type="edit" />
                        <span>随手笔记</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/resume`}>
                        <Icon type="file-text" />
                        <span>个人简历</span>
                    </Link>
                </li>
                <li>
                    <Link to={`music`}>
                        <Icon type="coffee" />
                        <span>来首音乐</span>
                    </Link>
                </li>
            </ul>
            <div className='footer'>
                <div className='wechat'>
                    <img src={require('../../../img/wechat.png')} />
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
})
export default Tpl