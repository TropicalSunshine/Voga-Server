(this["webpackJsonpsdhacks-react"]=this["webpackJsonpsdhacks-react"]||[]).push([[0],{100:function(e,t){},101:function(e,t){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),i=(a(91),a(92),a(25)),s=a(17),l=a(26),d=a(27),u=a(11),m=a(30),f=a(147),h=a(19),v=a(38),p=a.n(v),b=a(54),E=a(58),w=a(153),g=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"snackbar"},c.a.createElement("div",{className:"snackbar-text"},"Added "+this.props.word),c.a.createElement("div",{className:"snackbar-icon"},c.a.createElement(w.a,{iconName:"SkypeCheck"})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).detectFromVideoFrame=function(e,t){e.detect(t).then((function(n){a.showDetections(n),requestAnimationFrame((function(){a.detectFromVideoFrame(e,t)}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)}))},a.checkClick=function(e){var t=Object(u.a)(a),n=e.pageX-a.canvasRef.current.offsetLeft,c=e.pageY-a.canvasRef.current.offsetTop;a.predictions.forEach((function(e){console.log("aaa"),n>e[0]&&n<e[0]+e[2]&&c>e[1]&&c<e[1]+e[3]&&a.setState({word:e[4],addedWord:!0})})),clearInterval(a.interval),a.interval=setInterval((function(){a.setState({addedWord:!1}),clearInterval(t.setInterval)}),3e3)},a.showDetections=function(e){var t=a.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="24px helvetica";t.font=n,t.textBaseline="top",a.predictions=[],e.forEach((function(e){if("person"!==e.class){var c=e.bbox[0]+175*e.bbox[0]/600,r=e.bbox[1]+175*e.bbox[0]/600,o=e.bbox[2],i=e.bbox[3];a.predictions.push([c,r,o,i,e.class]),t.strokeStyle="#2fff00",t.lineWidth=1,t.strokeRect(c,r,o,i),t.fillStyle="#2fff00";var s=t.measureText(e.class).width,l=parseInt(n,10);t.fillRect(c,r,s+10,l+10),t.fillRect(c,r+i-l,s+15,l+10),t.fillStyle="#000000",t.fillText(e.class,c,r),t.fillText(e.score.toFixed(2),c,r+i-l)}}))},a.predictions=[],a.state={isloaded:!1,word:"",addedWord:!1},a.checkClick=a.checkClick.bind(Object(u.a)(a)),a.interval=null,a.updateTranslateWindow=a.updateTranslateWindow.bind(Object(u.a)(a)),a.videoRef=Object(n.createRef)(),a.canvasRef=Object(n.createRef)(),a.styles={position:"fixed",marginLeft:"auto",marginRight:"auto",left:0,right:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices.getUserMedia||navigator.mediaDevices.webkitGetUserMedia){var t=navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise((function(t){e.videoRef.current.onloadedmetadata=function(){t()}}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)})),a=E.a();Promise.all([a,t]).then((function(t){e.detectFromVideoFrame(t[0],e.videoRef.current)})).catch((function(e){console.error(e)}))}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateTranslateWindow",value:function(){var e,t="https://"+window.location.host;function a(e,t){return n.apply(this,arguments)}function n(){return(n=Object(b.a)(p.a.mark((function e(a,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("url",t),console.log("word",a),console.log("lang",n),e.next=5,fetch(t+"/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:a,language:n})}).then((function(e){return e.json()})).then((function(e){return e.result})).catch((function(e){console.log(e)}));case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:e=t.sent;case 3:case"end":return t.stop()}}),t)})))(),console.log("translated word",e),null!=e?null:c.a.createElement(y,{definition:e.definition,word:this.state.word,pronunc:e.translated_pron,transWord:e.translated_word})}},{key:"render",value:function(){window.screen.width,window.screen.height;var e,t=1==this.state.addedWord?this.updateTranslateWindow():null;return c.a.createElement("div",{className:"webcam"},t,this.state.addedWord&&c.a.createElement(g,{word:this.state.word}),c.a.createElement("video",(e={style:{cursor:"pointer"},facingMode:"environment"},Object(h.a)(e,"style",this.styles),Object(h.a)(e,"autoPlay",!0),Object(h.a)(e,"muted",!0),Object(h.a)(e,"ref",this.videoRef),Object(h.a)(e,"width","800px"),Object(h.a)(e,"height","600px"),e)),c.a.createElement("canvas",{style:this.styles,ref:this.canvasRef,width:"800px",height:"600px",onClick:this.checkClick}))}}]),t}(n.Component);function y(e){return c.a.createElement("div",{className:"translate-window"},c.a.createElement("div",{style:{opacity:.4,fontSize:"10pt"}},"Translated Word"),c.a.createElement("div",{style:{fontSize:"13pt",fontWeight:800}},e.transWord),c.a.createElement("div",null,null!=e.pronunc?e.pronunc:""),c.a.createElement("div",{style:{opacity:.4,fontSize:"11pt",marginBottom:"-5px"}},"Definition"),c.a.createElement("h5",null," ",e.word),c.a.createElement("div",null,e.definition))}var j=a(146),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={flashcard:!0,currentWordIndex:0,words:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"flashcards"},c.a.createElement(j.a,{container:!0,spacing:3},c.a.createElement(j.a,{item:!0,xs:12},c.a.createElement("div",{className:"maincontainer"},c.a.createElement("div",{className:"flashcard",id:"flashcard-word",onClick:function(){e.setState({flashcard:!e.state.flashcard},(function(){var t=document.getElementById("flashcard-word");e.state.flashcard?t.style.transform="rotateY(0)":t.style.transform="rotateY(180deg)"}))}},c.a.createElement("div",{class:"thefront"},c.a.createElement("div",null,"Cat"),c.a.createElement("div",{className:"partofspeech"},"Noun")),c.a.createElement("div",{class:"theback"},"El Gato")))),c.a.createElement(j.a,{item:!0,xs:12},c.a.createElement("div",{style:{position:"absolute",top:"50%"}},c.a.createElement("div",{className:"for-back"},c.a.createElement(w.a,{iconName:"Back"})),c.a.createElement("div",{className:"for-back"},c.a.createElement(w.a,{iconName:"Forward"})))),c.a.createElement(j.a,{item:!0,xs:6},c.a.createElement("div",{className:"wordlist"},"helloasdasd asd asd as das dsss")),c.a.createElement(j.a,{item:!0,xs:6},c.a.createElement("div",{className:"word-definition"},c.a.createElement("div",{className:"word-def-title"},"Definition"),c.a.createElement("div",{className:"word-def-text"})))))}}]),t}(n.Component),x=a(66),S=a.n(x),N=a(68),C=a.n(N),W=a(67),F=a.n(W),R=a(148),T=a(149),D=a(150),I=a(152),M=a(151),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isFlashCards:!1,default:!0,isScan:!1,langauge:"fr"},a.background=a.background.bind(Object(u.a)(a)),a.background(a.state),a.updateState=a.updateState.bind(Object(u.a)(a)),a.dropdownAction=a.dropdownAction.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateState",value:function(e){console.log(e),this.setState(e)}},{key:"background",value:function(e){console.log("state",e);var t=document.getElementsByTagName("BODY")[0];console.log(t.style),t.style.animation="gradientFlow 5s infinite linear"}},{key:"dropdownAction",value:function(e,t){console.log(t.key),this.setState({language:t.key})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Main"},c.a.createElement("div",{className:"Main-container"},c.a.createElement("div",{className:"Main-content"},this.state.isFlashCards&&c.a.createElement(O,null),this.state.isScan&&c.a.createElement(k,{language:this.state.langauge}),this.state.default&&c.a.createElement("div",{className:"main-buttons"},c.a.createElement("div",{className:"main-title"},"If its not you then its hella bs"),c.a.createElement("div",{className:"main-content-button"},c.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){e.setState({isScan:!0,default:!1},(function(){e.background(e.state)}))}},"Scan")),c.a.createElement("div",{className:"main-content-button"},c.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){e.setState({default:!1,isScan:!1,isFlashCards:!0})}},"Practice")),c.a.createElement("div",{className:"main-drop-down"},c.a.createElement(U,{action:this.dropdownAction}))))),c.a.createElement("div",{className:"navbar"},c.a.createElement(P,{setState:this.updateState})))}}]),t}(n.Component),A=Object(R.a)({root:{width:"100%"}});function P(e){var t=A(),a={0:{isFlashCards:!1,default:!1,isScan:!0},1:{isFlashCards:!1,default:!0,isScan:!1},2:{isFlashCards:!0,default:!1,isScan:!1}};return c.a.createElement(T.a,{onChange:function(t,n){e.setState(a[n])},showLabels:!0,className:t.root},c.a.createElement(D.a,{label:"Scan",icon:c.a.createElement(S.a,null)}),c.a.createElement(D.a,{label:"Home",icon:c.a.createElement(F.a,null)}),c.a.createElement(D.a,{label:"Practice",icon:c.a.createElement(C.a,null)}))}var z={dropdown:{width:300}},J={childrenGap:20},L=[{key:"es",text:"Spanish"},{key:"fr",text:"French"},{key:"zh-cn",text:"Chinese"},{key:"ja",text:"Japanese"},{key:"ko",text:"Korean"}];function U(e){return c.a.createElement(I.a,{tokens:J},c.a.createElement(M.a,{onChange:e.action,placeHolder:"Select",label:"Select a Language",defaultSelectedKey:"Spanish",options:L,disabled:!1,styles:z}))}a(107);var Y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(70);o.a.render(c.a.createElement(Y,null),document.getElementById("root")),Object(G.a)(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,a){e.exports=a(108)},91:function(e,t,a){},92:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},99:function(e,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.1fcd9f0c.chunk.js.map