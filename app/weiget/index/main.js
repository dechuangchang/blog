import '../../less/index.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../js/actions/index';
import User from '../components/User';
const mapStateToProps = (state, ownProps) => {
    return {
        num: state.counter
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {

    return bindActionCreators(actions,dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
    }
    render() {
        let { oIN, oUN } = this.props
        return (
            <div>
                <i className="iconfont icon-customs-clearance"></i>
                <div>{this.props.num}</div>
                <button onClick={e => oIN('oIN')}>in</button>
                <button onClick={e => oUN('oUN')}>un</button>
                <br/>
                <User/>
            </div>
        )
    }
}
export default App
