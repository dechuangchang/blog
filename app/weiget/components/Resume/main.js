import Tpl from './tpl';

class Resume extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ff:2
        }
    }
    componentDidMount(){

    }
    oSd = ()=> {
        this.setState({
            ff:3
        })
    }
    render(){
        return <Tpl that={this}/>
    }
}
export default Resume