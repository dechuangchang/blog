import './user.less';
import { Icon } from 'antd';
export default function(){

    let { oNavShow, navState } = this.props;
    return (
        <div className='user'>
            <Icon onClick={oNavShow} type={navState ? 'swap-left' : 'swap-right'} />

        </div>
    )
}