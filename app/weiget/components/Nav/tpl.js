
import { Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import ThatMain from '../../HOC/That';

const Tpl = ThatMain((that) => {
    let { oNavShow, navState,location} = that.props;
    return (
        <div className={navState ? 'nav' : 'nav navmin'}>
            <h1>
                <img className='logo' src={require('../../../img/logo.jpg')} />
            </h1>
            <ul>
                <li>
                    <Link className={location.pathname=='/' ? 'active':null} to={`/`}>
                        <Icon type="user" />
                        <span>个人资料</span>
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname=='/learning' ? 'active':null}  to={`/learning`}>
                        <Icon type="code-o" />
                        <span>学习进度</span>
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname=='/notes' ? 'active':null}  to={`/notes`}>
                        <Icon type="edit" />
                        <span>每日一文</span>
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname=='/resume' ? 'active':null}  to={`/resume`}>
                        <Icon type="file-text" />
                        <span>个人简历</span>
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname=='/kuwo' ? 'active':null}  to={`kuwo`}>
                        <Icon type="coffee" />
                        <span>酷我电台</span>
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