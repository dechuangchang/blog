import '../../less/index.less';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home/main.js';
import Router1 from './router1/main.js';
import Router2 from './router2/main.js'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <Router>
                
                <div>
                    <div>hello</div>
                    
                    <Route exact path="/" component={Home} />
                    <Route exact path="/router1/:name?" component={Router1} />
                    <Route exact path="/router2" component={Router2} />
                </div>
            </Router>
        )
    }
}
// export default hot(module)(App)
export default App
