import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Loading extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return(
            <Spin indicator={antIcon} />
        )
    }
}
export default Loading