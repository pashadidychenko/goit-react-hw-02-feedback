(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{26:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(18),u=a(19),i=a(20),s=a(23),d=a(22),m=function(e){var t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),e.children)},b=a(51),h=function(e){var t=e.good,a=e.neutral,c=e.bad,l=e.total,o=e.positivePercentage;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"\u0414\u043e\u0431\u0440\u0435: ",t),r.a.createElement("h3",null,"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e: ",a),r.a.createElement("h3",null,"\u041f\u043e\u0433\u0430\u043d\u043e: ",c),r.a.createElement("h3",null,"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",l()),r.a.createElement("h3",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0445 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",o()," %"))},v=a(52),E=a(53),g=function(e){var t=e.onLeaveFeedback,a=e.options;return r.a.createElement(r.a.Fragment,null,a[0].map((function(e){return r.a.createElement(v.a,{type:"button",key:Object(E.a)(),onClick:function(){return t(e)}},e)})))},f=function(e){var t=e.message;return r.a.createElement("h3",null,t)},k=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,n=t.bad;return Math.round(a/(a+n+.001)/.01)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement(b.a,null,r.a.createElement(m,{title:"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u043b\u0438\u0448\u0442\u0435 \u0412\u0430\u0448 \u0432\u0456\u0434\u0433\u0443\u043a"},r.a.createElement(g,{onLeaveFeedback:this.onLeaveFeedback,options:[Object.keys(this.state)]})),r.a.createElement(m,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},t>0||a>0||n>0?r.a.createElement(h,{good:t,neutral:a,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):r.a.createElement(f,{message:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456"})))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8246dda6.chunk.js.map