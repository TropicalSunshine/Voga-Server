(this["webpackJsonpsdhacks-react"]=this["webpackJsonpsdhacks-react"]||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/logo.2c7174f9.png"},167:function(e,t,a){e.exports=a(325)},172:function(e,t,a){},173:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},180:function(e,t){},181:function(e,t){},182:function(e,t){},324:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i),s=(a(172),a(173),a(31)),c=a(19),l=a(32),d=a(33),u=a(11),h=a(36),m=a(364),f=a(21),v=a(51),p=a.n(v),w=a(93),b=a(135),g=a(372),E=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"snackbar"},r.a.createElement("div",{className:"snackbar-text"},"Added "+this.props.word),r.a.createElement("div",{className:"snackbar-icon"},r.a.createElement(g.a,{iconName:"SkypeCheck"})))}}]),t}(n.Component),k=(a(183),a(371)),y=a(27),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).detectFromVideoFrame=function(e,t){e.detect(t).then((function(n){a.showDetections(n),requestAnimationFrame((function(){a.detectFromVideoFrame(e,t)}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)}))},a.checkClick=function(e){var t=Object(u.a)(a),n=e.pageX-a.canvasRef.current.offsetLeft,r=e.pageY-a.canvasRef.current.offsetTop;a.predictions.forEach((function(e){console.log("aaa"),n>e[0]&&n<e[0]+e[2]&&r>e[1]&&r<e[1]+e[3]&&a.setState({word:e[4],addedWord:!0},(function(){a.updateTranslateWindow(a.state.word)}))})),clearInterval(a.interval),a.interval=setInterval((function(){a.setState({addedWord:!1}),clearInterval(t.setInterval)}),3e3)},a.showDetections=function(e){var t=a.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="24px helvetica";t.font=n,t.textBaseline="top",a.predictions=[],e.forEach((function(e){if("person"!==e.class){var r=e.bbox[0]+175*e.bbox[0]/600,i=e.bbox[1]+175*e.bbox[0]/600,o=e.bbox[2],s=e.bbox[3];a.predictions.push([r,i,o,s,e.class]),t.strokeStyle="#2fff00",t.lineWidth=1,t.strokeRect(r,i,o,s),t.fillStyle="#2fff00";var c=t.measureText(e.class).width,l=parseInt(n,10);t.fillRect(r,i,c+10,l+10),t.fillStyle="#000000",t.fillText(e.class,r,i)}}))},a.predictions=[],a.state={isloaded:!1,word:"",addedWord:!1,data:{js:null,loaded:!0}},a.checkClick=a.checkClick.bind(Object(u.a)(a)),a.interval=null,a.updateTranslateWindow=a.updateTranslateWindow.bind(Object(u.a)(a)),a.videoRef=Object(n.createRef)(),a.canvasRef=Object(n.createRef)(),a.styles={position:"fixed",marginLeft:"auto",marginRight:"auto",left:0,right:0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices.getUserMedia||navigator.mediaDevices.webkitGetUserMedia){var t=navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise((function(t){e.videoRef.current.onloadedmetadata=function(){t()}}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)})),a=b.a();Promise.all([a,t]).then((function(t){e.setState({loaded:!1}),e.detectFromVideoFrame(t[0],e.videoRef.current)})).catch((function(e){console.error(e)}))}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateTranslateWindow",value:function(e){var t=this,a="https://"+window.location.host;function n(e,t,a){return i.apply(this,arguments)}function i(){return(i=Object(w.a)(p.a.mark((function e(t,n,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("url",a),console.log("word",t),console.log("lang",n),e.next=5,fetch(a+"/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t,language:n})}).then((function(e){return e.json()})).then((function(e){console.log(e.result),r(e.result)})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(w.a)(p.a.mark((function a(){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(e,t.props.language,(function(e){t.setState({data:{js:r.a.createElement(j,{definition:e.definition,word:t.state.word,pronunc:e.translated_pron,transWord:e.translated_word}),loaded:!0}})}));case 2:case"end":return a.stop()}}),a)})))()}},{key:"render",value:function(){window.screen.width,window.screen.height;var e,t=this.state.data.loaded?this.state.data.js:null;return r.a.createElement("div",{className:"webcam"},this.state.loaded&&r.a.createElement(O,null),t,this.state.addedWord&&r.a.createElement(E,{word:this.state.word}),r.a.createElement("video",(e={style:{cursor:"pointer"},facingMode:"environment"},Object(f.a)(e,"style",this.styles),Object(f.a)(e,"autoPlay",!0),Object(f.a)(e,"muted",!0),Object(f.a)(e,"ref",this.videoRef),Object(f.a)(e,"width","800px"),Object(f.a)(e,"height","600px"),e)),r.a.createElement("canvas",{style:this.styles,ref:this.canvasRef,width:"800px",height:"600px",onClick:this.checkClick}))}}]),t}(n.Component);function j(e){var t=e.definition.map((function(e,t){return r.a.createElement("div",{key:t},t+1+". "+e)}));return r.a.createElement("div",{className:"translate-window"},r.a.createElement("div",{style:{opacity:.4,fontSize:"10pt"}},"Translated Word"),r.a.createElement("div",{style:{fontSize:"13pt",fontWeight:800}},e.transWord),r.a.createElement("div",null,null!=e.pronunc?e.pronunc:""),r.a.createElement("div",{style:{opacity:.4,fontSize:"11pt",marginBottom:"-5px"}},"Definition"),r.a.createElement("h5",null," ",e.word),r.a.createElement("div",null,t))}function O(){return r.a.createElement("div",{className:"loader"},r.a.createElement(k.a,{size:y.a.large}))}var S=a(363),N="https://"+window.location.host;var C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={flashcard:!0,currentWordIndex:0,words:{car:{definition:["a motor vehicle with four wheels; usually propelled by an internal combustion engine","the compartment that is suspended from an airship and that carries personnel and the cargo and the power plant","where passengers ride up and down","a wheeled vehicle adapted to the rails of railroad","a conveyance for passengers or freight on a cable railway"],translated_pron:"Q\xecch\u0113",translated_word:"\u6c7d\u8f66"}},wordsList:["car"],currentIndex:0,defs:["a motor vehicle with four wheels; usually propelled by an internal combustion engine","the compartment that is suspended from an airship and that carries personnel and the cargo and the power plant","where passengers ride up and down","a wheeled vehicle adapted to the rails of railroad","a conveyance for passengers or freight on a cable railway"]},a.interval=null,a.handleWordClick=a.handleWordClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateData",value:function(){var e,t=this;e=function(e){console.log(e),t.setState({words:e,wordsList:Object.keys(e)},(function(){console.log(t.state)}))},fetch(N+"/getall",{method:"GET",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(t){console.log(t),e(t.result)})).catch((function(e){console.log(e)}))}},{key:"handleWordClick",value:function(e){this.setState({currentIndex:e,defs:this.state.words[this.state.wordsList[e]].definition})}},{key:"next",value:function(e){var t=this.state.currentIndex<this.state.wordsList.length-1?this.state.currentIndex+1:0;this.setState({defs:this.state.words[this.state.wordsList[t]].definition,currentIndex:t})}},{key:"prev",value:function(e){var t=this.state.currentIndex>0?this.state.currentIndex-1:this.state.wordsList.length-1;this.setState({defs:this.state.words[this.state.wordsList[t]].definition,currentIndex:t})}},{key:"handleFlashcard",value:function(){var e=this;this.setState({flashcard:!this.state.flashcard},(function(){var t=document.getElementById("flashcard-word");e.state.flashcard?t.style.transform="rotateY(0)":t.style.transform="rotateY(180deg)"}))}},{key:"render",value:function(){var e=this.state.defs.map((function(e,t){return r.a.createElement("div",{key:t},t+1+". "+e)})),t=this.state.wordsList.map((function(e,t){return r.a.createElement(W,{key:t,word:e,index:t})}));return r.a.createElement("div",{className:"flashcards"},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("div",{className:"maincontainer"},r.a.createElement("div",{className:"flashcard",id:"flashcard-word",onClick:this.handleFlashcard.bind(this)},r.a.createElement("div",{class:"thefront"},r.a.createElement("div",null,this.state.wordsList[this.state.currentIndex])),r.a.createElement("div",{class:"theback"},r.a.createElement("div",null,this.state.words[this.state.wordsList[this.state.currentIndex]].translated_word),r.a.createElement("div",{className:"partofspeech"},this.state.words[this.state.wordsList[this.state.currentIndex]].translated_pron))))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("div",{style:{position:"absolute",top:"50%"}},r.a.createElement("div",{className:"for-back",onClick:this.prev.bind(this)},r.a.createElement(g.a,{iconName:"Back"})),r.a.createElement("div",{className:"for-back",onClick:this.next.bind(this)},r.a.createElement(g.a,{iconName:"Forward"})))),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement("div",{className:"wordlist"},t)),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement("div",{className:"word-definition"},r.a.createElement("div",{className:"word-def-title"},"Definition"),r.a.createElement("div",{className:"word-def-text"},e)))),r.a.createElement("div",{className:"bs-button"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.updateData.bind(this)},"refresh")))}}]),t}(n.Component);function W(e){return r.a.createElement("div",{className:"WordList"},r.a.createElement("h1",null,e.word))}var I=a(147),F=a.n(I),L=a(149),R=a.n(L),T=a(148),D=a.n(T),M=a(365),B=a(366),A=a(367),P=a(369),_=a(368),z=a(146),U=a.n(z),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isFlashCards:!1,default:!0,isScan:!1,language:"fr"},a.background=a.background.bind(Object(u.a)(a)),a.background(a.state),a.updateState=a.updateState.bind(Object(u.a)(a)),a.dropdownAction=a.dropdownAction.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateState",value:function(e){console.log(e),this.setState(e)}},{key:"background",value:function(e){console.log("state",e);var t=document.getElementsByTagName("BODY")[0];console.log(t.style),t.style.animation="gradientFlow 5s infinite linear"}},{key:"dropdownAction",value:function(e,t){console.log(t.key),this.setState({language:t.key})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Main"},r.a.createElement("div",{className:"Main-container"},r.a.createElement("div",{className:"Main-content"},this.state.isFlashCards&&r.a.createElement(C,null),this.state.isScan&&r.a.createElement(x,{language:this.state.language}),this.state.default&&r.a.createElement("div",{className:"main-buttons"},r.a.createElement("div",{className:"main-title"},r.a.createElement("img",{src:U.a,height:450,width:600})),r.a.createElement("div",{className:"main-content-button"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){e.setState({isScan:!0,default:!1},(function(){e.background(e.state)}))}},"Scan")),r.a.createElement("div",{className:"main-content-button"},r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){e.setState({default:!1,isScan:!1,isFlashCards:!0})}},"Practice")),r.a.createElement("div",{className:"main-drop-down"},r.a.createElement(q,{action:this.dropdownAction}))))),r.a.createElement("div",{className:"navbar"},r.a.createElement(G,{setState:this.updateState})))}}]),t}(n.Component),Y=Object(M.a)({root:{width:"100%"}});function G(e){var t=Y(),a={0:{isFlashCards:!1,default:!1,isScan:!0},1:{isFlashCards:!1,default:!0,isScan:!1},2:{isFlashCards:!0,default:!1,isScan:!1}};return r.a.createElement(B.a,{onChange:function(t,n){e.setState(a[n])},showLabels:!0,className:t.root},r.a.createElement(A.a,{label:"Scan",icon:r.a.createElement(F.a,null)}),r.a.createElement(A.a,{label:"Home",icon:r.a.createElement(D.a,null)}),r.a.createElement(A.a,{label:"Practice",icon:r.a.createElement(R.a,null)}))}var V={dropdown:{width:300}},H={childrenGap:20},K=[{key:"es",text:"Spanish"},{key:"fr",text:"French"},{key:"zh-cn",text:"Chinese"},{key:"ja",text:"Japanese"},{key:"ko",text:"Korean"}];function q(e){return r.a.createElement(P.a,{tokens:H},r.a.createElement(_.a,{onChange:e.action,placeHolder:"Select",label:"Select a Language",defaultSelectedKey:"Spanish",options:K,disabled:!1,styles:V}))}a(324);var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(150);o.a.render(r.a.createElement(Q,null),document.getElementById("root")),Object(X.a)(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[167,1,2]]]);
//# sourceMappingURL=main.1cd02403.chunk.js.map