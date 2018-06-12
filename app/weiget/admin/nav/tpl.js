
import ThatMain from '../../HOC/That';
const Tpl = ThatMain((that) => {
    let {oNavClickId,iTem,navid,clazzName} = that.props;
    // console.log(iTem,navid)
    return (
        <ul className={clazzName ? clazzName :'items'}>
            {
                that.state.navList.map((item, index) => {
                    return (
                        <li onClick={()=>{oNavClickId(item,'left')}} className={`item${item.id == navid ? ' act' : ''}`} key={item.id}>{item.name}</li>
                    )
                })
            }
        </ul>
    )
})
export default Tpl

