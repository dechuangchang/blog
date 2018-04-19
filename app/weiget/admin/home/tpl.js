import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class Tpl extends React.PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props,this.context)
        return (
            <React.Fragment>
                <p>home</p>
                <Link to="/router1">page1</Link>
            </React.Fragment>
        )
    }
}
Tpl.contextTypes = {
    that: PropTypes.object
}
export default Tpl