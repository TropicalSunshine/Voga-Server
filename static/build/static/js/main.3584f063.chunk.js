(this["webpackJsonpsdhacks-react"]=this["webpackJsonpsdhacks-react"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),r=a.n(o),i=(a(90),a(91),a(25)),s=a(17),l=a(26),d=a(27),u=a(11),m=a(30),f=a(145),h=a(19),v=a(56),b=a(58),p=a(151),g=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"snackbar"},c.a.createElement("div",{className:"snackbar-text"},"Added "+this.props.word),c.a.createElement("div",{className:"snackbar-icon"},c.a.createElement(p.a,{iconName:"SkypeCheck"})))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).detectFromVideoFrame=function(e,t){e.detect(t).then((function(n){a.showDetections(n),requestAnimationFrame((function(){a.detectFromVideoFrame(e,t)}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)}))},a.checkClick=function(e){var t=Object(u.a)(a),n=e.pageX-a.canvasRef.current.offsetLeft,c=e.pageY-a.canvasRef.current.offsetTop;a.predictions.forEach((function(e){console.log("aaa"),n>e[0]&&n<e[0]+e[2]&&c>e[1]&&c<e[1]+e[3]&&a.setState({word:e[4],addedWord:!0})})),clearInterval(a.interval),a.interval=setInterval((function(){a.setState({addedWord:!1}),clearInterval(t.setInterval)}),3e3)},a.showDetections=function(e){var t=a.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="24px helvetica";t.font=n,t.textBaseline="top",a.predictions=[],e.forEach((function(e){if("person"!==e.class){var c=e.bbox[0]+175*e.bbox[0]/600,o=e.bbox[1]+175*e.bbox[0]/600,r=e.bbox[2],i=e.bbox[3];a.predictions.push([o,c,r,i,e.class]),t.strokeStyle="#2fff00",t.lineWidth=1,t.strokeRect(o,c,r,i),t.fillStyle="#2fff00";var s=t.measureText(e.class).width,l=parseInt(n,10);t.fillRect(o,c,s+10,l+10),t.fillRect(o,c+i-l,s+15,l+10),t.fillStyle="#000000",t.fillText(e.class,o,c),t.fillText(e.score.toFixed(2),o,c+i-l)}}))},a.predictions=[],a.state={isloaded:!1,word:"",addedWord:!1},a.checkClick=a.checkClick.bind(Object(u.a)(a)),a.interval=null,a.updateTranslateWindow=a.updateTranslateWindow.bind(Object(u.a)(a)),a.videoRef=Object(n.createRef)(),a.canvasRef=Object(n.createRef)(),a.styles={position:"fixed",marginLeft:"auto",marginRight:"auto",left:0,right:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices.getUserMedia||navigator.mediaDevices.webkitGetUserMedia){var t=navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise((function(t){e.videoRef.current.onloadedmetadata=function(){t()}}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)})),a=v.a();Promise.all([a,t]).then((function(t){e.detectFromVideoFrame(t[0],e.videoRef.current)})).catch((function(e){console.error(e)}))}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateTranslateWindow",value:function(){var e=Object(b.getTranslation)(this.state.word,this.props.language);return console.log("translated word",e),null!=e?null:c.a.createElement(w,{definition:e.definition[0],word:this.state.word,pronunc:e.translated_pron,transWord:e.translated_word})}},{key:"render",value:function(){window.screen.width,window.screen.height;var e,t=1==this.state.addedWord?this.updateTranslateWindow():null;return c.a.createElement("div",{className:"webcam"},t,this.state.addedWord&&c.a.createElement(g,{word:this.state.word}),c.a.createElement("video",(e={style:{cursor:"pointer"},facingMode:"environment"},Object(h.a)(e,"style",this.styles),Object(h.a)(e,"autoPlay",!0),Object(h.a)(e,"muted",!0),Object(h.a)(e,"ref",this.videoRef),Object(h.a)(e,"width","800px"),Object(h.a)(e,"height","600px"),e)),c.a.createElement("canvas",{style:this.styles,ref:this.canvasRef,width:"800px",height:"600px",onClick:this.checkClick}))}}]),t}(n.Component);function w(e){return c.a.createElement("div",{className:"translate-window"},c.a.createElement("div",{style:{opacity:.4,fontSize:"10pt"}},"Translated Word"),c.a.createElement("div",{style:{fontSize:"13pt",fontWeight:800}},e.transWord),c.a.createElement("div",null,null!=e.pronunc?e.pronunc:""),c.a.createElement("div",{style:{opacity:.4,fontSize:"11pt",marginBottom:"-5px"}},"Definition"),c.a.createElement("h5",null," ",e.word),c.a.createElement("div",null,e.definition))}var k=a(144),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={flashcard:!0,currentWordIndex:0,words:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"flashcards"},c.a.createElement(k.a,{container:!0,spacing:3},c.a.createElement(k.a,{item:!0,xs:12},c.a.createElement("div",{className:"maincontainer"},c.a.createElement("div",{className:"flashcard",id:"flashcard-word",onClick:function(){e.setState({flashcard:!e.state.flashcard},(function(){var t=document.getElementById("flashcard-word");e.state.flashcard?t.style.transform="rotateY(0)":t.style.transform="rotateY(180deg)"}))}},c.a.createElement("div",{class:"thefront"},c.a.createElement("div",null,"Cat"),c.a.createElement("div",{className:"partofspeech"},"Noun")),c.a.createElement("div",{class:"theback"},"El Gato")))),c.a.createElement(k.a,{item:!0,xs:12},c.a.createElement("div",{style:{position:"absolute",top:"50%"}},c.a.createElement("div",{className:"for-back"},c.a.createElement(p.a,{iconName:"Back"})),c.a.createElement("div",{className:"for-back"},c.a.createElement(p.a,{iconName:"Forward"})))),c.a.createElement(k.a,{item:!0,xs:6},c.a.createElement("div",{className:"wordlist"},"helloasdasd asd asd as das dsss")),c.a.createElement(k.a,{item:!0,xs:6},c.a.createElement("div",{className:"word-definition"},c.a.createElement("div",{className:"word-def-title"},"Definition"),c.a.createElement("div",{className:"word-def-text"})))))}}]),t}(n.Component),j=a(65),O=a.n(j),S=a(67),x=a.n(S),N=a(66),C=a.n(N),W=a(146),F=a(147),R=a(148),T=a(150),D=a(149),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isFlashCards:!1,default:!0,isScan:!1,langauge:"fr"},a.background=a.background.bind(Object(u.a)(a)),a.background(a.state),a.updateState=a.updateState.bind(Object(u.a)(a)),a.dropdownAction=a.dropdownAction.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateState",value:function(e){console.log(e),this.setState(e)}},{key:"background",value:function(e){console.log("state",e);var t=document.getElementsByTagName("BODY")[0];console.log(t.style),t.style.animation="gradientFlow 5s infinite linear"}},{key:"dropdownAction",value:function(e,t){console.log(t.key),this.setState({language:t.key})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Main"},c.a.createElement("div",{className:"Main-container"},c.a.createElement("div",{className:"Main-content"},this.state.isFlashCards&&c.a.createElement(y,null),this.state.isScan&&c.a.createElement(E,{language:this.state.langauge}),this.state.default&&c.a.createElement("div",{className:"main-buttons"},c.a.createElement("div",{className:"main-title"},"If its not you then its hella bs"),c.a.createElement("div",{className:"main-content-button"},c.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){e.setState({isScan:!0,default:!1},(function(){e.background(e.state)}))}},"Scan")),c.a.createElement("div",{className:"main-content-button"},c.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){e.setState({default:!1,isScan:!1,isFlashCards:!0})}},"Practice")),c.a.createElement("div",{className:"main-drop-down"},c.a.createElement(J,{action:this.dropdownAction}))))),c.a.createElement("div",{className:"navbar"},c.a.createElement(B,{setState:this.updateState})))}}]),t}(n.Component),M=Object(W.a)({root:{width:"100%"}});function B(e){var t=M(),a={0:{isFlashCards:!1,default:!1,isScan:!0},1:{isFlashCards:!1,default:!0,isScan:!1},2:{isFlashCards:!0,default:!1,isScan:!1}};return c.a.createElement(F.a,{onChange:function(t,n){e.setState(a[n])},showLabels:!0,className:t.root},c.a.createElement(R.a,{label:"Scan",icon:c.a.createElement(O.a,null)}),c.a.createElement(R.a,{label:"Home",icon:c.a.createElement(C.a,null)}),c.a.createElement(R.a,{label:"Practice",icon:c.a.createElement(x.a,null)}))}var A={dropdown:{width:300}},P={childrenGap:20},z=[{key:"es",text:"Spanish"},{key:"fr",text:"French"},{key:"zh-cn",text:"Chinese"},{key:"ja",text:"Japanese"},{key:"ko",text:"Korean"}];function J(e){return c.a.createElement(T.a,{tokens:P},c.a.createElement(D.a,{onChange:e.action,placeHolder:"Select",label:"Select a Language",defaultSelectedKey:"Spanish",options:z,disabled:!1,styles:A}))}a(105);var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(69);r.a.render(c.a.createElement(L,null),document.getElementById("root")),Object(U.a)(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t){var a="https://"+window.location.host,n={};e.exports={addWord:function(e){n[e]=!0},getWords:function(e){return Object.keys(n)},getTranslation:function(e,t){console.log("url",a),console.log("word",e),console.log("lang",t),fetch(a+"/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:e,language:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e),e.result})).catch((function(e){console.log(e)}))}}},85:function(e,t,a){e.exports=a(106)},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.3584f063.chunk.js.map