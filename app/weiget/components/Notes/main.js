import Tpl from './tpl';
import {message} from 'antd'
class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            spinning: false
        }
    }
    componentDidMount(){
//
    this.getText()
    }
    getText = ()=>{
        let that = this;
        let content = null;
        that.setState({
            spinning: true
        })
        $.ajax({
            url: 'https://interface.meiriyiwen.com/article/random?dev=1',
            dataType: 'json',
            success: function (data) {
                $('.notes .title').html(data.data.title)
                $('.notes .author').html(data.data.author)
                $('.notes #notes').html(data.data.content)
                $('.notes').animate({scrollTop: '0px'}, 600);
                that.setState({
                    spinning: false
                })
            },
            error: function (data) {
                message.error('error');
                that.setState({
                    spinning: false
                })
            }
        });
    }
    render(){
        return <Tpl that={this} />
    }
}
export default Notes