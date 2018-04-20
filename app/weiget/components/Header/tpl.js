import './header.less';
import ThatMain from '../../HOC/That';
import { Icon } from 'antd';

const Tpl = ThatMain((that) => {
    let {oNavShow,navState} = that.props;
    return (
        <div className='header'>
            <Icon onClick={oNavShow} type={navState ? 'swap-left' : 'swap-right'} />
            header
        </div>
    )
})
export default Tpl