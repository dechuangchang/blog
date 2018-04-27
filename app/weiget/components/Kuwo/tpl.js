
import ThatMain from '../../HOC/That';
import { Spin } from 'antd';
const Tpl = ThatMain((that) => {
    let { menu, page, mp3List ,spinning} = that.state;
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
                                <li className={page.listid == index + 1 ? 'active' : null} onClick={() => that.getMp3(index)} key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Spin spinning={spinning} wrapperClassName='mp3list' tip="Loading...">
                <div className='audio'>
                    fgdfgfd
                    {/* <a href='http://antiserver.kuwo.cn/anti.s?type=convert_url&rid=MUSIC_40647169&format=mp3&response=url'>a</a> */}
                    {/* <iframe  name='ghghg' id='ghghg' src='./admin.html'></iframe> */}
                </div>
                <ul className='mp3list-2'>
                    {
                        mp3List.length?
                        mp3List.map((item, index) => {
                            let { album, artist, name, yr ,musicrid} = item;
                            return (
                                <li key={index}>
                                    <span className='yr'>{yr}</span>
                                    <span className='name'>{name}</span>
                                    <span className='artist'>{artist}</span>
                                    <span onClick={()=>that.onPaly(musicrid)} className='paly'>{'播放'}</span>
                                </li>
                            )
                        })
                        :
                        <li style={{justifyContent:'center'}}>暂无节目</li>
                    }
                </ul>
            </Spin>
        </div>
    )
})
export default Tpl
