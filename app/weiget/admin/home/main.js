import Tpl from './tpl';
import PropTypes from 'prop-types';
class App extends React.Component{
    constructor(props){
        super(props)
        
    }
    getChildContext(){
        return{
            that:this
        }
    }
    componentDidMount(){
    }
    render(){
        return <Tpl />
    }
}
App.childContextTypes = {
    that: PropTypes.object
}
export default App