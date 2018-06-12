
import ThatMain from '../../HOC/That';
const Tpl = ThatMain((that) => {
    let { oNavClickId, navId, clazzName } = that.props;
    let sty = null
    if(!navId.show){
        sty = {
            'display': 'none'
        }
    }else{
        sty = {
            'display': 'flex'
        }
        
    }
    // console.log(clickList)
    
    return (
        <div  style={sty} className={clazzName}>
            <div onClick={()=>that.navLeft()} className='iconleft'>
                《
            </div>
            <div className='list'>
                <div className='l-b'>
                <ul>
                    {
                        that.state.addList.map((item, index) => {
                            return (
                                <li onClick={() => { oNavClickId(item,'top') }} className={`item${item.id == navId.navid ? ' act' : ''}`} key={item.id}>{item.name}</li>
                            )
                        })
                    }
                </ul> 
                </div>
            </div>
            {/* */}
            <div  onClick={()=>that.navRight()} className='iconright'>
                》
            </div>
        </div>
    )
})
export default Tpl

