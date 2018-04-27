import Tpl from './tpl';
class User extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        
    }
    render(){
        return <Tpl that={this} />
    }
}
export default User