import Tpl from './tpl';

class Resume extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){

    }
    
    render(){
        return <Tpl that={this}/>
    }
}
export default Resume