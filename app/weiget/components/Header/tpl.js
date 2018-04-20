import './header.less';
import { Icon } from 'antd';
export default function(){

    let { oNavShow, navState } = this.props;
    return (
        <div className='header'>
            <Icon onClick={oNavShow} type={navState ? 'swap-left' : 'swap-right'} />
            header
        </div>
    )
}