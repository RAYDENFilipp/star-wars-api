(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(13),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),h=(n(15),function(e){var t=e.name,n=e.onClick;return r.a.createElement("button",{className:"f10 link br2 ph3 pv2 mb2 dib bg-transparent menu-button",onClick:n},t)}),p=function(e){var t=e.names,n=e.onClick,a=t.map(function(e,t){return r.a.createElement(h,{key:t,name:e,onClick:function(){return n(t)}})});return r.a.createElement("nav",null,a)},f=function(e){var t=e.searchField,n=e.input;return r.a.createElement("input",{type:"search",onChange:n,value:t})},v=function(e){var t=e.name;return r.a.createElement("div",{className:"f8 link br2 ph3 pv2 mb2 bg-transparent menu-button"},t)},d=function(e){var t=e.list.map(function(e,t){return r.a.createElement(v,{key:t,name:e})});return r.a.createElement("div",null,t)},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSearch=function(e){n.setState({searchField:e.target.value})},n.componentDidMount=function(){n.fetchData()},n.componentDidUpdate=function(e){n.props.category!==e.category&&(n.setState({results:[]}),n.fetchData())},n.state={searchField:"",results:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this;fetch("https://swapi.co/api/".concat(this.props.category)).then(function(e){return e.json()}).then(function(t){var n=[];t.results.map(function(e){var t=Object.keys(e)[0];return console.log(t),n.push(e[t])}),console.log(n),e.setState({results:n})})}},{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.results,a=n.filter(function(e){return e.toLowerCase().includes(t.toLowerCase())});return n.length?r.a.createElement("div",null,r.a.createElement(f,{searchField:t,input:this.onSearch}),r.a.createElement(d,{category:this.props.category,list:a})):r.a.createElement("h2",null,"Loading...")}}]),t}(a.Component),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).names=["planets","starships","vehicles","people","films","species"],e.filterCategory=function(t){e.setState({category:e.names[t]})},e.state={category:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.category;return t?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"StarWars API"),r.a.createElement(p,{names:this.names,onClick:function(t){return e.filterCategory(t)}}),r.a.createElement(g,{category:t})):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"StarWars API"),r.a.createElement(p,{names:this.names,onClick:function(t){return e.filterCategory(t)}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.9df78c20.chunk.js.map