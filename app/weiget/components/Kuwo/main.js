import Tpl from './tpl';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                "吐小槽扒新闻",
                "莫萱日记",
                "爆笑糗事段子",
                "柜子开了",
                "酷我音乐调频",
                "一路向北",
                "真心话大冒险",
                "爱的速递站",
                "阳光音乐铺",
                "酷我漫音坊",
                "听他们说",
                "听郭德纲说相声",
                "灵异事件簿",
                "今日星座运势",
                "请给我一首歌的时间",
                "贵圈那些事儿",
                "萱草私房歌",
                "每日正能量",
                "历史那点事",
                "放肆音乐",
                "微时光",
                "小曹胡咧咧",
                "情感热线",
                "晚安蜜语",
                "小明和小红的日常生活",
                "爆笑录音室",
            ],
            page: {
                flag: 2,
                listid: 5,
                pn: 0,
                rn: 20,
            }
        }

    }
    componentDidMount() {
        this.getItem()
    }
    getItem = () => {
        let that = this;
        $.ajax({
            url: 'http://album.kuwo.cn/album/servlet/commkdtpage',
            dataType: 'jsonp',
            data: that.state.page,
            success: function (data) {
                console.log(data)
                // that.setState({
                //     url: data.url
                // }, () => {

                //     //选择文件  
                //     that.state.sound.src = that.state.url;
                //     //播放  
                //     that.state.sound.play();
                // })
            },
            error: function (data) {
                message.error('error');
            }
        });
    }
    getMp3 = (index)=>{
        let page = this.state.page;
        page.listid = index+1;
        this.setState({
            page:page
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default Header