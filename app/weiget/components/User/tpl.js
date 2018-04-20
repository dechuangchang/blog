import './user.less';
import Header from '../Header/main';
class Tpl extends React.PureComponent{
    constructor(props){
        super(props)
        
    }
    render(){
        let {that} = this.props;
        return(
            <div className='user'>
                <Header {...this.props} />
                user
            </div>
        )
    }
}
export default Tpl