
import ThatMain from '../../HOC/That';
import { Input, Spin, Table, Collapse } from 'antd';
const Search = Input.Search;
const Panel = Collapse.Panel;
const Tpl = ThatMain((that) => {
    return (
        <div className='music'>
            <Search
                className='Search'
                placeholder="请输入关键字"
                onSearch={that.onSearch}
                enterButton
            />
            <Collapse onChange={(e) => that.changeCollapse(e)} activeKey={that.state.activeKey} bordered={false}>
                {
                    that.state.list.length ?
                        that.state.list.map((item, index) => {
                            return (
                                <Panel header={item.filename} key={index} >
                                    <p>歌曲名{item.songname}</p>
                                    <p>歌手{item.singername}</p>
                                    {
                                        that.state.url&&that.state.activeKey[0]==index?
                                        <audio controls>
                                            <source src={that.state.url} type="audio/mpeg" />
                                            您的浏览器不支持 audio 元素。
                                        </audio>
                                        :null
                                    }
                                </Panel>
                            )
                        })
                        :
                        <Panel header="暂无数据" key="1" >
                            X（
                        </Panel>
                }

            </Collapse>



        </div>
    )
})
export default Tpl
