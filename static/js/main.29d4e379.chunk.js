(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(8),m=t.n(r),c=(t(7),t(1)),i=t(2),o=t(4),l=t(3),g=t(5),h=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).changeMessageIndex=function(){var e=t.props.index;t.props.messagerChange(e)},t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.img,s=e.message;return n.a.createElement("div",null,n.a.createElement("li",{className:"thread-item",style:{cursor:"pointer"},onClick:this.changeMessageIndex},n.a.createElement("div",{className:"clearfix"},n.a.createElement("div",{className:"thread-item_left"},n.a.createElement("img",{className:"img-circle img",src:t,alt:"",style:{width:"50px",height:" 50px"}})),n.a.createElement("div",{className:"thread-item_right"},n.a.createElement("div",{className:"thread-from"},a),n.a.createElement("div",null,n.a.createElement("span",{className:"thread-content"},s[s.length-1].content)),n.a.createElement("span",{className:"thread-time"},s[s.length-1].timestamp)))))}}]),a}(s.Component),u=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.messageFromMe,t=e.content,s="message-item  ".concat(a?"message-from-me":"message-from-other");return n.a.createElement("div",null,n.a.createElement("div",{className:s},n.a.createElement("span",null,t)))}}]),a}(s.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.message[this.props.index];return n.a.createElement("div",null,e.message.map(function(e,a){return n.a.createElement(u,{key:a,messageFromMe:e.messageFromMe,content:e.content})}))}}]),a}(s.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.newMessageChange,t=e.handleKeyDown,s=e.newMessage;return n.a.createElement("div",{className:"footer"},n.a.createElement("input",{className:"new-message",onChange:a,onKeyDown:t,value:s}))}}]),a}(s.Component),v=(t(15),{messager:[{name:"Elly",message:[{timestamp:"2019-07-10 11:48:12 ",content:"\u4f86\u4f86\u4f86!!",messageFromMe:!1},{timestamp:"2019-07-10 11:48:24",content:"\u4f86\u7532\u672c~",messageFromMe:!1},{timestamp:"2019-07-10 11:48:48",content:"\u8981\u5403\u55ce?",messageFromMe:!1},{timestamp:"2019-07-10 11:49:50",content:"\u4f86\u7532\u672c~",messageFromMe:!0},{timestamp:"2019-07-10 11:50:53",content:"\u7d04\u54ea\u88e1?",messageFromMe:!0}],img:"http://lorempixel.com/100/100/cats/3"},{name:"Mercy",message:[{timestamp:"2019-07-10 12:49:12 ",content:"\u6211\u8981\u5831\u8868!",messageFromMe:!1}],img:"http://lorempixel.com/100/100/cats/2"},{name:"Cat",message:[{timestamp:"2019-07-10 10:12:12 ",content:"\u55b5\u55da\uff5e",messageFromMe:!1}],img:"http://lorempixel.com/100/100/cats/5"}]}),f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).messagerChange=function(e){console.log("messagerIndex",e),e!==t.state.messagerIndex&&t.setState({messagerIndex:e,newMessage:""})},t.newMessageChange=function(e){console.log("newMessageChange:",e.target.value);var a=e.target.value;t.setState({newMessage:a})},t.handleKeyDown=function(e){if(console.log("handleKeyDown",e.target.value),13===e.keyCode&&""!==e.target.value){var a=new Date;v.messager[t.state.messagerIndex].message.push({timestamp:a.toISOString().substring(0,19)+"+08:00",content:e.target.value.toString(),messageFromMe:!0}),t.setState({messagerData:v,newMessage:""})}},t.state={messagerData:v,messagerIndex:0,newMessage:""},t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"chat-app clearfix"},n.a.createElement("div",{className:"chat-app_left"},n.a.createElement("div",{className:"heading"},n.a.createElement("h3",{className:"messenger-title"},"Messager  ")),n.a.createElement("div",{className:"thread-list"},this.state.messagerData.messager.map(function(a,t){return n.a.createElement(h,{className:"Component-style",messagerChange:e.messagerChange,key:t,index:t,img:a.img,name:a.name,message:a.message})}))),n.a.createElement("div",{className:"chat-app_right"},n.a.createElement("div",{className:"heading"},n.a.createElement("div",{className:"current-target"},this.state.messagerData.messager[this.state.messagerIndex].name)),n.a.createElement("div",{className:"message-list"},n.a.createElement(p,{message:this.state.messagerData.messager,index:this.state.messagerIndex})),n.a.createElement(d,{newMessage:this.state.newMessage,newMessageChange:this.newMessageChange,handleKeyDown:this.handleKeyDown}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.29d4e379.chunk.js.map