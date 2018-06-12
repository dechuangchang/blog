import '../../less/admin.less';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Nav from './nav/main.js';
import HeaderNav from './headerNav/main.js';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {oNavClickId} from '../../js/actions/index';
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        iTem: state.navid.iTem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({oNavClickId},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        console.log(this.props)
        return (
            <div className='box'>
                <Nav/>
                <div className='content'>
                    <HeaderNav clazzName='header-nav'/>
                    <mark>当前模块{this.props.iTem.name}</mark>
                </div>
            </div>
        )
    }
}
// export default hot(module)(App)
export default App
