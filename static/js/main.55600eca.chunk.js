(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(4),i=a.n(r),s=(a(14),a(3)),d=a.n(s),o=a(5),u=a(6),l=a(7),j=a(9),v=a(8),p=(a(16),a(17),a(18),a(0)),h=function(t){var e=t.title,a=t.value;return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsx)("p",{className:"card-title",children:e.toUpperCase()}),Object(p.jsx)("p",{className:"card-value",children:"lastupdatedtime"===e?a:a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})})},f=function(t){return Object(p.jsx)("div",{className:"card-list",children:t.data.map((function(t){return Object(p.jsx)(h,{title:t.title,value:t.value},t.key)}))})},b=function(t){Object(j.a)(a,t);var e=Object(v.a)(a);function a(){var t;return Object(u.a)(this,a),(t=e.call(this)).state={data:[]},t}return Object(l.a)(a,[{key:"extractData",value:function(t){var e={};e.active=t.active,e.confirmed=t.confirmed,e.deaths=t.deaths,e.recovered=t.recovered,e.lastupdatedtime=t.lastupdatedtime;var a=[{key:1,title:"Country",value:"India"}],n=1;for(var c in e){var r={};r.key=++n,r.title=c,r.value=e[c],a.push(r)}return a}},{key:"componentDidMount",value:function(){var t=Object(o.a)(d.a.mark((function t(){var e,a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.covid19india.org/data.json",t.next=3,fetch("https://api.covid19india.org/data.json");case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,n=this.extractData(a.statewise[0]),this.setState({data:n});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("p",{className:"glow",children:"LIVE"}),Object(p.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(p.jsx)(f,{data:this.state.data})]})}}]),a}(c.a.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.55600eca.chunk.js.map