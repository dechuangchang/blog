import '../../less/admin.less';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Nav from './nav/main.js';
import HeaderNav from './headerNav/main.js';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className='box'>
                <Nav/>
                <div className='content'>
                    <HeaderNav clazzName='header-nav'/>
                </div>
            </div>
        )
    }
}
// export default hot(module)(App)
export default App
