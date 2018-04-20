
import Loadable from 'react-loadable';
import Loading from '../components/Loading'
import Nav from '../components/Nav/main';
import User from '../components/User/main';
import { HashRouter, Route } from 'react-router-dom';
const Resume = Loadable({
    loader: () => import('../components/Resume/main'),
    loading: Loading
})
const Notes = Loadable({
    loader: () => import('../components/Notes/main'),
    loading: Loading
})
const Learning = Loadable({
    loader: () => import('../components/Learning/main'),
    loading: Loading
})
const Music = Loadable({
    loader: () => import('../components/Music/main'),
    loading: Loading
})

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
                    <Nav />
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
