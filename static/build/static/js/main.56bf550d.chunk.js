(this["webpackJsonpsdhacks-react"]=this["webpackJsonpsdhacks-react"]||[]).push([[0],{58:function(e,t,a){e.exports=a(79)},63:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},70:function(e,t){},71:function(e,t){},72:function(e,t){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(20),r=a.n(i),o=(a(63),a(64),a(21)),s=a(15),l=a(22),d=a(23),m=a(13),f=a(25),u=a(104),h=a(45),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).videoRef=Object(n.createRef)(),a.canvasRef=Object(n.createRef)(),a.styles={position:"fixed",top:150,left:150},a.detectFromVideoFrame=function(e,t){e.detect(t).then((function(n){a.showDetections(n),requestAnimationFrame((function(){a.detectFromVideoFrame(e,t)}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)}))},a.showDetections=function(e){var t=a.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="24px helvetica";t.font=n,t.textBaseline="top",e.forEach((function(e){var a=e.bbox[0],c=e.bbox[1],i=e.bbox[2],r=e.bbox[3];t.strokeStyle="#2fff00",t.lineWidth=1,t.strokeRect(a,c,i,r),t.fillStyle="#2fff00";var o=t.measureText(e.class).width,s=parseInt(n,10);t.fillRect(a,c,o+10,s+10),t.fillRect(a,c+r-s,o+15,s+10),t.fillStyle="#000000",t.fillText(e.class,a,c),t.fillText(e.score.toFixed(2),a,c+r-s)}))},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices.getUserMedia||navigator.mediaDevices.webkitGetUserMedia){var t=navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise((function(t){e.videoRef.current.onloadedmetadata=function(){t()}}))}),(function(e){console.log("Couldn't start the webcam"),console.error(e)})),a=h.a();Promise.all([a,t]).then((function(t){e.detectFromVideoFrame(t[0],e.videoRef.current)})).catch((function(e){console.error(e)}))}}},{key:"render",value:function(){window.screen.width,window.screen.height;return c.a.createElement("div",null,c.a.createElement("video",{facingMode:"environment",style:this.styles,autoPlay:!0,muted:!0,ref:this.videoRef,width:"720",height:"650"}),c.a.createElement("canvas",{style:this.styles,ref:this.canvasRef,width:"720",height:"650"}))}}]),t}(n.Component),b=a(100),E=a(108),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={flashcard:!0,currentWordIndex:0,words:[{word:"Apple",pos:"noun",def:"the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider."}]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"flashcards"},c.a.createElement(b.a,{container:!0,spacing:3},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement("div",{className:"maincontainer"},c.a.createElement("div",{className:"flashcard",id:"flashcard-word",onClick:function(){e.setState({flashcard:!e.state.flashcard},(function(){var t=document.getElementById("flashcard-word");e.state.flashcard?t.style.transform="rotateY(0)":t.style.transform="rotateY(180deg)"}))}},c.a.createElement("div",{class:"thefront"},c.a.createElement("div",null,"Cat"),c.a.createElement("div",{className:"partofspeech"},"Noun")),c.a.createElement("div",{class:"theback"},"El Gato")))),c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement("div",{style:{position:"absolute",top:"50%"}},c.a.createElement("div",{className:"for-back"},c.a.createElement(E.a,{iconName:"Back"})),c.a.createElement("div",{className:"for-back"},c.a.createElement(E.a,{iconName:"Forward"})))),c.a.createElement(b.a,{item:!0,xs:6},c.a.createElement("div",{className:"wordlist"},"helloasdasd asd asd as das dsss")),c.a.createElement(b.a,{item:!0,xs:6},c.a.createElement("div",{className:"word-definition"},c.a.createElement("div",{className:"word-def-title"},"Definition"),c.a.createElement("div",{className:"word-def-text"},"The cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat or a farm cat, which are pets, or a feral cat, which ranges freely and avoids human contact.")))))}}]),t}(n.Component),g=a(50),p=a.n(g),y=a(52),k=a.n(y),N=a(51),O=a.n(N),j=a(105),S=a(106),x=a(107),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isFlashCards:!1,default:!0,isScan:!1},a.background=a.background.bind(Object(m.a)(a)),a.background(a.state),a.updateState=a.updateState.bind(Object(m.a)(a)),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"updateState",value:function(e){console.log(e),this.setState(e)}},{key:"background",value:function(e){console.log("state",e);var t=document.getElementsByTagName("BODY")[0];console.log(t.style),t.style.animation="gradientFlow 5s infinite linear"}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Main"},c.a.createElement("div",{className:"Main-container"},c.a.createElement("div",{className:"Main-content"},this.state.isFlashCards&&c.a.createElement(w,null),this.state.isScan&&c.a.createElement(v,null),this.state.default&&c.a.createElement("div",{className:"main-buttons"},c.a.createElement("div",{className:"main-title"},"If its not you then its hella bs"),c.a.createElement("div",{className:"main-content-button"},c.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){e.setState({isScan:!0,default:!1},(function(){e.background(e.state)}))}},"Scan")),c.a.createElement("div",{className:"main-content-button"},c.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:function(){e.setState({default:!1,isScan:!1,isFlashCards:!0})}},"Practice"))))),c.a.createElement("div",{className:"navbar"},c.a.createElement(R,{setState:this.updateState})))}}]),t}(n.Component),F=Object(j.a)({root:{width:"100%"}});function R(e){var t=F(),a={0:{isFlashCards:!1,default:!1,isScan:!0},1:{isFlashCards:!1,default:!0,isScan:!1},2:{isFlashCards:!0,default:!1,isScan:!1}};return c.a.createElement(S.a,{onChange:function(t,n){e.setState(a[n])},showLabels:!0,className:t.root},c.a.createElement(x.a,{label:"Scan",icon:c.a.createElement(p.a,null)}),c.a.createElement(x.a,{label:"Home",icon:c.a.createElement(O.a,null)}),c.a.createElement(x.a,{label:"Practice",icon:c.a.createElement(k.a,null)}))}a(78);var M=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(53);r.a.render(c.a.createElement(M,null),document.getElementById("root")),Object(D.a)(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.56bf550d.chunk.js.map