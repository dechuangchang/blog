import Tpl from './tpl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { oNavClickId } from '../../../js/actions/index';
const mapStateToProps = (state, ownProps) => {
    // console.log(state.navid)
    $('.header-nav .list').stop();
    for (let o = 0; o < state.navid.addList.length; o++) {
        if (state.navid.addList[o].id == state.navid.navid) {
            // console.log(o)
            if (o == 0) {
                $('.header-nav .list').animate({ 'scrollLeft': 0 + 'px' })
            } else {
                let num = 0;
                for (let i = 0; i < o; i++) {
                    num += $('.header-nav .list .item').eq(i).outerWidth(true);
                    // console.log($('.header-nav .list .item').eq(i).outerWidth(true))
                    if (o - i === 1) {
                        // console.log(num)
                        $('.header-nav .list').animate({ 'scrollLeft': num + 'px' })
                    }
                }
            }
        }

    }
    return {
        navId: state.navid,
        addList: state.navid.addList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ oNavClickId }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addList: []
        }
    }
    navLeft = () => {
        let { oNavClickId, navId, clazzName, addList } = this.props;
        for (let i = 0; i < addList.length; i++) {

            if (addList[i].id == navId.navid) {
                if (i <= 0) {
                    oNavClickId(addList[0], 'top')
                } else {
                    // console.log(i)
                    oNavClickId(addList[i - 1], 'top')
                }
            }
            // 
        }
    }
    navRight = () => {
        let { oNavClickId, navId, clazzName, addList } = this.props;
        for (let i = 0; i < addList.length; i++) {

            if (addList[i].id == navId.navid) {
                if (i >= addList.length-1) {
                    oNavClickId(addList[addList.length-1], 'top')
                } else {
                    // console.log(i)
                    oNavClickId(addList[i + 1], 'top')
                }
            }
            // 
        }

    }
    componentDidMount() {

    }

    componentWillReceiveProps(props) {
        this.setState({
            addList: props.addList
        })
    }
    render() {
        return <Tpl that={this} />
    }
}

export default App