
import ThatMain from '../../HOC/That';

const Tpl = ThatMain((that) => {
    let { menu,page} = that.state;
    return (
        <div className='kuwo'>
            <div className='list'>
                <h2 className='title'>
                        电台列表
                </h2>
                <ul className='fm_list'>
                    
                    {
                        menu.map((item, index) => {
                            return (
                                <li className={page.listid == index+1 ? 'active':null} onClick={()=>that.getMp3(index)} key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
})
export default Tpl
