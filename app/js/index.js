import App from '../weiget/index/main.js';
import '../less/index.less';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

