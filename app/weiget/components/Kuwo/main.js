import Tpl from './tpl';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
    render() {
        return <Tpl that={this} />
    }
}
export default Header