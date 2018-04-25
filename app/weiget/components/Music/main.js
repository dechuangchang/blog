import Tpl from './tpl';
import {message} from 'antd';
class Music extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeKey:[],
            data : {
                keyword : null,  // 搜索关键字
                page: 1,          // 第几页
                pagesize: 20,    // 一页几个
                format:'jsonp'   // 必传参数，写死
            },
            list:[],
            url:null
        }
    }
    componentDidMount(){
        // 
        
        
    }
    onSearch=(e)=>{
        console.log(e)
        let data = this.state.data;
        data.keyword = e ;
        this.setState({
            data:data
        },()=>{
            this.getList()
        })
    }
    getList=()=>{
        let that = this;
        $.ajax({
            url:'http://mobilecdn.kugou.com/api/v3/search/song',
            dataType:'jsonp',
            data : that.state.data,
            success:function(rep){
                that.setState({
                    list:rep.data.info
                })
            },
            error:function(data){
                message.error('error');
            }
        });
    }
    getItem=(hash)=>{
        let that = this;
        console.log(hash)
        $.ajax({
            url:'http://m.kugou.com/app/i/getSongInfo.php',
            dataType:'jsonp',
            data : {
                hash : hash,  // 歌曲 hash值
                cmd : 'playInfo',       // 写死
                format:'jsonp'          // 写死
            },
            success:function(data){
                console.log( data.url );
                that.setState({
                    url: data.url
                })
            },
            error:function(data){
                message.error('error');
            }
        });
    }
    changeCollapse=(e)=>{
        console.log(e)
        this.setState({
            activeKey:e[e.length-1]
        },()=>{
            let hash = this.state.list[this.state.activeKey[0]].hash
            this.getItem(hash)
        })
    }
    render(){
        return <Tpl that={this}/>
    }
}
export default Music