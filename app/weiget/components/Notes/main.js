import Tpl from './tpl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {oNavShow} from '../../../js/actions/index';
const mapStateToProps = (state, ownProps) => {
    return {
        navState: state.navshow
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({oNavShow},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class Notes extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){

    }
    render(){
        return Tpl.call(this)
    }
}
export default Notes