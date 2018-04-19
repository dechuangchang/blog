import User from '../components/User/main';
import Nav from '../components/Nav/main';
import {HashRouter,Route} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <Nav/>
                    <Route exact path="/" component={User} />
                    {/* <Route path="/about" component={About} />
                    <Route path="/inbox" component={Inbox} /> */}
                </React.Fragment>
            </HashRouter>
            
        )
    }
}
export default App
