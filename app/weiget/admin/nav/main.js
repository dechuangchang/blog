import Tpl from './tpl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {oNavClickId} from '../../../js/actions/index';
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    return {
        iTem: state.navid.iTem,
        navid:state.navid.navid
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({oNavClickId},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component{
    constructor(props){
        super(props)
        let arrList = [];
        for(let i = 0 ; i< 30; i++){
            arrList.push({
                name:'菜单'+i,
                id:i
            })
        }
        
        this.state = {
            navList:arrList
        }
    }
    
    componentDidMount(){

    }
    add = ()=>{
        // console.log(this.props.navId)
    }
    render(){
        return <Tpl that={this} />
    }
}

export default App