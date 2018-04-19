import Tpl from './tpl';
class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return Tpl.call(this)
    }
}

export default App