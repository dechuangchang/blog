import ThatMain from '../../HOC/That';
import {Icon,Spin} from 'antd'
const Tpl = ThatMain((that) => {
    
    return (
        <div className='notes'>
            <Spin spinning={that.state.spinning} tip="Loading...">
                <div>
                    <h2 className='title'></h2>
                    <h3 className='author'></h3>
                    <div id='notes'></div>
                </div>
                <div onClick={that.getText} className='button'>
                    再来一篇
                    <Icon spin={that.state.spinning} type="sync" />  
                </div>      
            </Spin>
        </div>
    )
})
export default Tpl
