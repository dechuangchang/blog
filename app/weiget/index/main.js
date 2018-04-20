
import Nav from '../components/Nav/main';
import User from '../components/User/main';
import Resume from '../components/Resume/main';
import Notes from '../components/Notes/main';
import Learning from '../components/Learning/main';
import Music from '../components/Music/main';
import {HashRouter,Route} from 'react-router-dom';

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
                    <Route path="/learning" component={Learning} />
                    <Route path="/notes" component={Notes} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/music" component={Music} /> 
                </React.Fragment>
            </HashRouter>
            
        )
    }
}
export default App
