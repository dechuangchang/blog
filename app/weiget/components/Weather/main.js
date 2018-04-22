import Tpl from './tpl';
import { message } from 'antd';
import aCity from '../../../static/city.json';
class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aCitys: aCity,
            targetCitys: [],
            spinning:true,
            data: {
                city: 'CHBJ000000',
                language: 'zh-chs',
                unit: 'c',
                aqi: 'city',
                alarm: 1,
                key: '78928e706123c1a8f1766f062bc8676b',
            },
            weather: {
                future:[]
            }
        }
    }
    componentDidMount() {
        this.getWeather()
    }
    tableColumns = () => {
        return [
            {
                title: '',
                dataIndex: 'index',
                key: 'index',
                render: (text, record, index) => index+1
            },
            {
                title: '日期',
                dataIndex: 'date',
                key: 'date',
                render: (text, record, index) => <span>{`${text}${record.day}`}</span>
            },
            {
                title: '天气状况',
                dataIndex: 'text',
                key: 'text',
                render: (text, record, index) => <span>{text}</span>
            },
            {
                title: '最高温度',
                dataIndex: 'high',
                key: 'high',
                render: (text, record, index) => <span>{text}</span>
            },
            {
                title: '最低温度',
                dataIndex: 'low',
                key: 'low',
                render: (text, record, index) => <span>{text}</span>
            },
            {
                title: '风力信息',
                dataIndex: 'wind',
                key: 'wind',
                render: (text, record, index) => <span>{text}</span>
            }
        ]
    }
    onAreaid = (e) => {
        let target = this.state.aCitys.filter((item, index) => {
            return item.cityEN == e.target.value || item.townName == e.target.value
        });

        let data = this.state.data;
        if (target.length > 0) {
            data.city = target[0].townID;
        }
        this.setState({
            targetCitys: target,
            data: data
        })
    }
    onSearch = (e) => {
        if (e.length == 0) {
            message.error('请输入城市名');
            return
        }
        if (this.state.targetCitys.length == 0) {
            message.error('未找到城市名');
            return
        }
        this.getWeather()

    }
    getWeather = () => {
        this.setState({
            spinning:true
        })
        axios.get('/Heart/index/all', {
            params: this.state.data
        })
            .then((response) => {
                this.setState({
                    weather: response.data.weather[0],
                    spinning:false
                })
            })
            .catch((error) => {
                message.error(error.message);
                this.setState({
                    spinning:false
                })
            });
    }
    render() {
        return <Tpl that={this} />
    }
}
export default Weather