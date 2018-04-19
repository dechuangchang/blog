import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUser} from '../../js/actions/index';
import { DatePicker } from 'antd';
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({getUser},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)

class User extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentWillMount(){

    }
    componentDidMount() {
       

    }
    render() {
        let {data,getUser} = this.props;
        return (
            <div>
                <p>{data.content}</p>
                <button onClick={getUser}>getuser</button>
                <DatePicker />
            </div>
        )
    }
}
export default User
