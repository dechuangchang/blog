import ThatMain from '../../HOC/That';
import { Input, Spin, Table, Card } from 'antd';
const Search = Input.Search;
const Tpl = ThatMain((that) => {
    // console.log(that.state.weather)
    let { city_name, future, last_update } = that.state.weather;
    // console.log(city_name,future,last_update)
    return (
        <div className='weather'>
            <span className='title'>天气预报</span>
            <div className='operating'>
                <Search
                    className='Search'
                    placeholder="请输入城市名"
                    onChange={that.onAreaid}
                    onSearch={that.onSearch}
                    enterButton
                />

                <div className='info'>{`${city_name} : ${moment(last_update).format('YYYY年MM月DD日HH:mm:ss')}`}</div>

            </div>
            <Spin spinning={that.state.spinning}>
                {
                    window.innerWidth > 768 ?


                        <Table size='small' rowKey="date" pagination={false} columns={that.tableColumns()} dataSource={future} />

                        :
                        future.length?
                            future.map((item, index) => {
                                return (
                                    <Card key={Math.random()}  title={`${item.date}${item.day}`}  style={{ width: '100%' ,background:'none'}}>
                                        <p key={Math.random()}>天气状况{item.text}</p>
                                        <p key={Math.random()}>最高温度{item.high}</p>
                                        <p key={Math.random()}>最低温度{item.low}</p>
                                        <p key={Math.random()}>风力信息{item.wind}</p>
                                    </Card>
                                )
                            })
                        :null

                }
            </Spin>
        </div>
    )
})
export default Tpl