import './notes.less';

class Tpl extends React.PureComponent{
    constructor(props){
        super(props)
        
    }
    render(){
        let {that} = this.props;
        return(
            <span>notes</span>
        )
    }
}
export default Tpl