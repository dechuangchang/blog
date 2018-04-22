import Header from '../Header/main';
import ThatMain from '../../HOC/That';
import Weather from '../Weather/main'
const Tpl = ThatMain((that) => {

    return (
        <div className='user'>
            <Header />
            <div>
                <Weather />
            </div>
        </div>
    )
})
export default Tpl
