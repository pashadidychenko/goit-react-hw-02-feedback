(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{25:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(30),a(4)),u=a(5),i=a(7),s=a(6),d=a(51),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{variant:"contained",color:this.props.color,onClick:function(){return e.props.addFeedback(e.props.data)}},this.props.message)}}]),a}(r.a.Component),h=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u043b\u0438\u0448\u0442\u0435 \u0412\u0430\u0448 \u0432\u0456\u0434\u0433\u0443\u043a")}}]),a}(r.a.Component),b=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),r.a.createElement("h3",null,"\u0414\u043e\u0431\u0440\u0435: ",this.props.good),r.a.createElement("h3",null,"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e: ",this.props.neutral),r.a.createElement("h3",null,"\u041f\u043e\u0433\u0430\u043d\u043e: ",this.props.bad))}}]),a}(n.Component),m=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=Math.round(this.props.good/(this.props.good+this.props.bad)/.01);return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",this.props.good+this.props.neutral+this.props.bad),r.a.createElement("h3",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0445 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",e," %"))}}]),a}(n.Component);m.defaultProps={goodFeedback:0};var f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,this.props.message)}}]),a}(r.a.Component),g=a(50),v=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){"good"===t&&e.setState((function(e){return{good:e.good+1}})),"neutral"===t&&e.setState((function(e){return{neutral:e.neutral+1}})),"bad"===t&&e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement(g.a,null,r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement(p,{data:"good",message:"\u0414\u043e\u0431\u0440\u0435",addFeedback:this.addFeedback,color:"primary"}),r.a.createElement(p,{data:"neutral",message:"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e",addFeedback:this.addFeedback,color:"default"}),r.a.createElement(p,{data:"bad",message:"\u041f\u043e\u0433\u0430\u043d\u043e",addFeedback:this.addFeedback,color:"secondary"})),t>0||a>0||n>0?r.a.createElement("div",null,r.a.createElement(b,{good:t,neutral:a,bad:n}),r.a.createElement(m,{good:t,neutral:a,bad:n})):r.a.createElement(f,{message:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456"}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.517187b5.chunk.js.map