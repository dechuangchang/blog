(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{233:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(43));function r(e){return e&&e.__esModule?e:{default:e}}n(44);var i=(0,r(n(10)).default)(function(t){var n=t.state,r=n.menu,i=n.page,o=n.mp3List,s=n.spinning;return e.createElement("div",{className:"kuwo"},e.createElement("div",{className:"list"},e.createElement("h2",{className:"title"},"电台列表"),e.createElement("ul",{className:"fm_list"},r.map(function(n,a){return e.createElement("li",{className:i.listid==a+1?"active":null,onClick:function(){return t.getMp3(a)},key:a},n)}))),e.createElement(a.default,{spinning:s,wrapperClassName:"mp3list",tip:"Loading..."},e.createElement("div",{className:"audio"},"fgdfgfd"),e.createElement("ul",{className:"mp3list-2"},o.length?o.map(function(n,a){n.album;var r=n.artist,i=n.name,o=n.yr,s=n.musicrid;return e.createElement("li",{key:a},e.createElement("span",{className:"yr"},o),e.createElement("span",{className:"name"},i),e.createElement("span",{className:"artist"},r),e.createElement("span",{onClick:function(){return t.onPaly(s)},className:"paly"},"播放"))}):e.createElement("li",{style:{justifyContent:"center"}},"暂无节目"))))});t.default=i}).call(this,n(2))},236:function(e,t){},238:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(76)),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(77);var o=s(n(233));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.getItem=function(){var e=t;e.setState({spinning:!0}),a.ajax({url:"http://album.kuwo.cn/album/servlet/commkdtpage",dataType:"jsonp",data:e.state.page,success:function(t){e.setState({mp3List:t.musiclist,spinning:!1})},error:function(t){r.default.error("error"),e.setState({spinning:!1})}})},t.getMp3=function(e){var n=t.state.page;n.listid=e+1,t.setState({page:n},function(){t.getItem()})},t.onPaly=function(e){var n=t;console.log(e),n.setState({musicrid:e},function(){a.ajax({url:"http://antiserver.kuwo.cn/anti.s?type=convert_url&rid=MUSIC_"+n.state.musicrid+"&format=mp3&response=url",dataType:"jsonp",success:function(e){console.log("data")},error:function(e){console.log("data"),r.default.error("error")}})})},t.state={menu:["吐小槽扒新闻","莫萱日记","爆笑糗事段子","柜子开了","酷我音乐调频","一路向北","真心话大冒险","爱的速递站","阳光音乐铺","酷我漫音坊","听他们说","听郭德纲说相声","灵异事件簿","今日星座运势","请给我一首歌的时间","贵圈那些事儿","萱草私房歌","每日正能量","历史那点事","放肆音乐","微时光","小曹胡咧咧","情感热线","晚安蜜语","小明和小红的日常生活","爆笑录音室"],mp3List:[],spinning:!0,musicrid:null,page:{flag:2,listid:5,pn:0,rn:20}},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),i(n,[{key:"componentDidMount",value:function(){this.getItem()}},{key:"render",value:function(){return e.createElement(o.default,{that:this})}}]),n}();t.default=l}).call(this,n(2),n(34))}}]);