(this.webpackJsonpsearchgame=this.webpackJsonpsearchgame||[]).push([[0],{13:function(e,a,t){e.exports={ModalBody:"HighScores_ModalBody__1-1Vn",TitleCard:"HighScores_TitleCard__2flu0",ScoreHolder:"HighScores_ScoreHolder__XQk1d",ScoreList:"HighScores_ScoreList__UZm22",textDance:"HighScores_textDance__Mr9ll"}},19:function(e,a,t){e.exports={ModalBody:"LevelSelect_ModalBody__3hcmE",ViewHS:"LevelSelect_ViewHS__15MAd",textDance:"LevelSelect_textDance__UGyBl"}},21:function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop___u0jx"}},22:function(e,a,t){e.exports={DifficultyButton:"DifficultyButton_DifficultyButton__hdMBr"}},23:function(e,a,t){e.exports={ModalBody:"WellDone_ModalBody__2AHlm",textDance:"WellDone_textDance__1AVW2"}},30:function(e,a,t){},31:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(14),i=t.n(r),o=(t(30),t(31),t(9)),l=t.n(o),s=t(2),u=t(3),m=Object(u.b)({name:"FirstTimeState",initialState:{firstTime:!0},reducers:{changeToNotFirstTime:function(e){e.firstTime=!1}}}),d=m.actions,f=m.reducer,j=Object(u.b)({name:"backdropState",initialState:{backdrop:!0},reducers:{turnOffBackdrop:function(e){e.backdrop=!1},turnOnBackdrop:function(e){e.backdrop=!0}}}),b=j.actions,h=j.reducer,g=Object(u.b)({name:"playerNameState",initialState:{playerName:""},reducers:{changePlayerName:function(e,a){e.playerName=a.payload}}}),O=g.actions,p=g.reducer,_=t(0),v=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.playerNameSlice.playerName}));return Object(_.jsxs)("div",{className:l.a.ModalBody,children:[Object(_.jsxs)("div",{className:l.a.WelcomeDiv,children:[Object(_.jsx)("p",{className:l.a.WelcomeP,children:"Welcome"}),Object(_.jsx)("div",{className:l.a.WelcomeImage})]}),Object(_.jsxs)("div",{className:l.a.Form,children:[Object(_.jsx)("p",{className:l.a.EnterP,children:"Enter your name below."}),Object(_.jsx)("input",{onChange:function(a){var t;t=a.target.value,e(O.changePlayerName(t))},className:l.a.InputName,type:"text",value:a,minLength:"3",maxLength:"16"}),Object(_.jsx)("button",{onClick:function(){e(d.changeToNotFirstTime()),e(b.turnOnBackdrop())},className:l.a.EnterButton,children:"Enter"})]})]})},x=t(21),S=t.n(x),y=function(){return Object(_.jsx)("div",{className:S.a.Backdrop})},N=t(19),T=t.n(N),w=t(22),P=t.n(w),G=t.p+"static/media/Easy.87b42cf8.jpg",k=t.p+"static/media/Normal.6465c10a.jpg",E=t.p+"static/media/Hard.90eab6a4.jpg",B=Object(u.b)({name:"levelSelectState",initialState:{currentLevel:"none"},reducers:{selectLevelEasy:function(e){e.currentLevel="Easy"},selectLevelNormal:function(e){e.currentLevel="Normal"},selectLevelHard:function(e){e.currentLevel="Hard"}}}),C=B.actions,D=B.reducer,H=Object(u.b)({name:"gameOngoingState",initialState:{gameOngoing:!1},reducers:{turnOffGameOngoing:function(e){e.gameOngoing=!1},turnOnGameOngoing:function(e){e.gameOngoing=!0}}}),I=H.actions,W=H.reducer,M=t(7),L=t.n(M),F=t(10),U=function(){var e=Object(F.a)(L.a.mark((function e(a){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://searchgame-6b980-default-rtdb.firebaseio.com/userTime.json",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("[Response Received] "+n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),A=Object(u.b)({name:"startTimeState",initialState:{startTime:!0},reducers:{addStartTime:function(e,a){e.startTime=a.payload}}}),R=A.actions,V=A.reducer,J=function(e){var a=Object(s.b)(),t=Object(s.c)((function(e){return e.playerNameSlice.playerName})),n=function(e){var n=Date.now();a(R.addStartTime(n)),U({user:t,timeStart:n,level:e})};return Object(_.jsx)("div",{className:P.a.DifficultyButton,style:{backgroundImage:"Easy"===e.difficulty?"url("+G+")":"Normal"===e.difficulty?"url("+k+")":"url("+E+")",justifySelf:"Easy"===e.difficulty?"left":"Normal"===e.difficulty?"center":"end"},onClick:function(){switch(e.difficulty){case"Easy":a(C.selectLevelEasy()),a(b.turnOffBackdrop()),n("easy");break;case"Normal":a(C.selectLevelNormal()),a(b.turnOffBackdrop()),n("normal");break;case"Hard":a(C.selectLevelHard()),a(b.turnOffBackdrop()),n("hard")}a(I.turnOnGameOngoing())},children:Object(_.jsx)("p",{children:e.difficulty})})},X=Object(u.b)({name:"highScoresState",initialState:{highScores:[],isHighScoresOpen:!1},reducers:{turnOffhighScores:function(e){e.isHighScoresOpen=!1},turnOnhighScores:function(e){e.isHighScoresOpen=!0}}}),Y=X.actions,Z=X.reducer,Q=function(){var e=Object(s.b)();return Object(_.jsxs)("div",{className:T.a.ModalBody,children:[Object(_.jsx)(J,{difficulty:"Easy"}),Object(_.jsx)(J,{difficulty:"Normal"}),Object(_.jsx)(J,{difficulty:"Hard"}),Object(_.jsx)("button",{className:T.a.ViewHS,onClick:function(){e(Y.turnOnhighScores())},children:"View Hard High Scores"})]})},q=t(8),z=t(6),K=t(5),$=t.n(K),ee=t.p+"static/media/EasyCharacterOne.5be51d75.PNG",ae=t.p+"static/media/EasyCharacterTwo.2cd8e64b.PNG",te=t.p+"static/media/EasyCharacterThree.47d20aae.PNG",ne=t.p+"static/media/NormalCharacterOne.1048738c.PNG",ce=t.p+"static/media/NormalCharacterTwo.d504b113.PNG",re=t.p+"static/media/NormalCharacterThree.2be2dcd6.PNG",ie=t.p+"static/media/HardCharacterOne.bb831a70.PNG",oe=t.p+"static/media/HardCharacterTwo.dc98c636.PNG",le=t.p+"static/media/HardCharacterThree.d760c357.PNG",se=Object(u.b)({name:"wellDoneState",initialState:{wellDone:!1},reducers:{turnOffWellDone:function(e){e.wellDone=!1},turnOnWellDone:function(e){e.wellDone=!0}}}),ue=se.actions,me=se.reducer,de=function(e){var a=Object(s.b)(),t="Easy"===e.level?ee:"Hard"===e.level?ie:ne,c="Easy"===e.level?ae:"Hard"===e.level?oe:ce,r="Easy"===e.level?te:"Hard"===e.level?le:re,i=Object(n.useState)($.a.GamePageHeadingBegin),o=Object(z.a)(i,2),l=o[0],u=o[1];l===$.a.GamePageHeadingBegin&&setTimeout((function(){u($.a.GamePageHeading)}),3e3);var m=Object(n.useState)($.a.GamePageTextBegin),d=Object(z.a)(m,2),f=d[0],j=d[1];f===$.a.GamePageTextBegin&&setTimeout((function(){j($.a.GamePageText)}),3e3);var h=Object(n.useState)($.a.GameImageBegin),g=Object(z.a)(h,2),O=g[0],p=g[1];O===$.a.GameImageBegin&&setTimeout((function(){p($.a.GameImage)}),3e3);var v=Object(n.useState)(""),x=Object(z.a)(v,2),S=x[0],y=x[1],N=Object(n.useState)(""),T=Object(z.a)(N,2),w=T[0],P=T[1],B=Object(n.useState)(!1),C=Object(z.a)(B,2),D=C[0],H=C[1],I=function(){H(!D)},W=Object(n.useState)([{num:1,sourceImage:t},{num:2,sourceImage:c},{num:3,sourceImage:r}]),M=Object(z.a)(W,2),L=M[0],F=M[1],U=!0,A=!0,R=!0;L.forEach((function(e){1===e.num&&(U=!1),2===e.num&&(A=!1),3===e.num&&(R=!1)}));var V=function(a,t){if("Easy"===e.level){var n=!1;L.forEach((function(e){return 1===e.num?n=!0:null})),1===a&&n&&S>345&&S<428&&w>245&&w<330&&L.forEach((function(e,a){if(1===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}));var c=!1;L.forEach((function(e){return 2===e.num?c=!0:null})),2===a&&c&&S>173&&S<219&&w>550&&w<630&&L.forEach((function(e,a){if(2===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}));var r=!1;L.forEach((function(e){return 3===e.num?r=!0:null})),3===a&&r&&S>725&&S<825&&w>820&&w<855&&L.forEach((function(e,a){if(3===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}))}if("Normal"===e.level){var i=!1;L.forEach((function(e){return 1===e.num?i=!0:null})),1===a&&i&&S>642&&S<892&&w>910&&w<940&&L.forEach((function(e,a){if(1===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}));var o=!1;L.forEach((function(e){return 2===e.num?o=!0:null})),2===a&&o&&S>836&&S<906&&w>132&&w<185&&L.forEach((function(e,a){if(2===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}));var l=!1;L.forEach((function(e){return 3===e.num?l=!0:null})),3===a&&l&&S>166&&S<199&&w>182&&w<204&&L.forEach((function(e,a){if(3===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}))}if("Hard"===e.level){var s=!1;L.forEach((function(e){return 1===e.num?s=!0:null})),1===a&&s&&(alert("X is:   "+(t/window.innerWidth+S)+"    Y is:   "+(t/window.innerWidth+w)+"   client / windows inner width:  "+t/window.innerWidth),S>716&&S<739&&w>805&&w<836&&L.forEach((function(e,a){if(1===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}})));var u=!1;L.forEach((function(e){return 2===e.num?u=!0:null})),2===a&&u&&S>927&&S<944&&w>900&&w<922&&L.forEach((function(e,a){if(2===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}));var m=!1;L.forEach((function(e){return 3===e.num?m=!0:null})),3===a&&m&&S>983&&S<995&&w>370&&w<390&&L.forEach((function(e,a){if(3===e.num){var t=Object(q.a)(L);t.splice(a,1),F(t)}}))}};return Object(s.c)((function(e){return e.wellDoneSlice.wellDone}))||0===L.length&&(a(b.turnOnBackdrop()),a(ue.turnOnWellDone())),Object(_.jsxs)("div",{className:$.a.GamePageBody,children:[Object(_.jsxs)("div",{className:l,onClick:function(){return D&&I()},children:[Object(_.jsx)("p",{className:f,children:"Please find:"}),Object(_.jsx)("img",{style:{border:U?"4px solid green":"none"},src:t,className:$.a.CharacterImageOne,alt:"FindOne"}),Object(_.jsx)("img",{style:{border:A?"4px solid green":"none"},src:c,className:$.a.CharacterImageTwo,alt:"FindTwo"}),Object(_.jsx)("img",{style:{border:R?"4px solid green":"none"},src:r,className:$.a.CharacterImageThree,alt:"FindThree"})]}),Object(_.jsx)("div",{className:$.a.GameImageHolder,children:Object(_.jsx)("img",{onClick:function(e){!function(e){y(e.clientX+window.scrollX-window.innerWidth/6.6)}(e),function(e){P(80-window.innerHeight/10+e.clientY+window.scrollY)}(e),!D&&I()},alt:"GameImage",className:O,src:"Easy"===e.level?G:"Normal"===e.level?k:E})}),D?Object(_.jsx)("div",{style:{position:"absolute",display:"grid",gridTemplateColumns:"auto",width:"calc(10vh + 10vw)",backgroundColor:"transparent",left:"calc("+(S+window.innerWidth/6.6)+"px - 5vh - 5vw)",top:w},children:L.map((function(e){return Object(_.jsx)("img",{src:e.sourceImage,className:$.a.DropDownCharacter,onClick:function(){!function(e){V(e.num,e.clientWidth)}(e)},alt:"Character"},e.num)}))}):null]})},fe=t(23),je=t.n(fe),be=function(){var e=Object(F.a)(L.a.mark((function e(a){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://searchgame-6b980-default-rtdb.firebaseio.com/highscores.json",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("[Response Received] "+n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),he=function(){var e=Object(n.useState)([]),a=Object(z.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),i=Object(z.a)(r,2),o=i[0],l=i[1],u="",m="unknown",d=Object(s.c)((function(e){return e.startTimeSlice.startTime}));t.forEach((function(e){console.log("User Time:   "+o),e.time===d&&(u=e.time,m=e.level)}));var f=t.length>0?u:0,j=Object(n.useCallback)(Object(F.a)(L.a.mark((function e(){var a,t,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://searchgame-6b980-default-rtdb.firebaseio.com/userTime.json");case 2:return a=e.sent,e.next=5,a.json();case 5:for(r in t=e.sent,n=[],t)n.push({id:r,time:t[r].timeStart,name:t[r].user,level:t[r].level});c(n);case 9:case"end":return e.stop()}}),e)}))),[]);0===t.length&&j();var b=Object(s.b)(),h=Object(s.c)((function(e){return e.playerNameSlice.playerName}));Object(n.useEffect)((function(){l((Date.now()-f)/1e3),(Date.now()-d)/1e3>0&&"unknown"!=m&&be({userName:h,userTime:(Date.now()-d)/1e3,userLevel:m})}),[f,h,m,d]);return Object(_.jsxs)("div",{className:je.a.ModalBody,children:[Object(_.jsx)("p",{children:"Well Done!"}),Object(_.jsxs)("p",{children:[h," completed the game with a time of "]}),Object(_.jsx)("p",{children:o}),Object(_.jsx)("button",{onClick:function(){b(ue.turnOffWellDone()),b(I.turnOffGameOngoing())},children:"Continue?"})]})},ge=t(13),Oe=t.n(ge),pe=function(){function e(e,a){return e.time<a.time?-1:e.time>a.time?1:0}var a=Object(n.useState)([]),t=Object(z.a)(a,2),c=t[0],r=t[1],i=Object(n.useCallback)(Object(F.a)(L.a.mark((function a(){var t,n,c,i,o,l,s;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://searchgame-6b980-default-rtdb.firebaseio.com/highscores.json");case 2:return t=a.sent,a.next=5,t.json();case 5:for(i in n=a.sent,c=[],n)c.push({id:i,time:n[i].userTime,name:n[i].userName,level:n[i].userLevel});o=c.sort(e),l=[],o.forEach((function(e){"hard"===e.level&&l.push(e)})),s=l.map((function(e,a){return{rank:a+1,name:e.name,time:e.time,level:e.level,key:e.key}})),r(s);case 13:case"end":return a.stop()}}),a)}))),[]);Object(n.useEffect)((function(){i()}),[i]);var o=Object(s.b)();return Object(_.jsxs)("div",{className:Oe.a.ModalBody,children:[Object(_.jsxs)("div",{className:Oe.a.TitleCard,children:[Object(_.jsx)("p",{children:"Rank"})," ",Object(_.jsx)("p",{children:"Name"})," ",Object(_.jsx)("p",{children:"Time"})]}),Object(_.jsx)("div",{className:Oe.a.ScoreHolder,children:c.map((function(e){return e.rank<=20&&Object(_.jsxs)("div",{className:Oe.a.ScoreList,children:[Object(_.jsx)("p",{children:e.rank}),Object(_.jsx)("p",{children:e.name}),Object(_.jsx)("p",{children:e.time})]},e.rank)}))}),Object(_.jsx)("button",{onClick:function(){o(Y.turnOffhighScores())},children:"Back"})]})},_e=function(){var e=Object(s.c)((function(e){return e.FirstTimeSlice.firstTime})),a=Object(s.c)((function(e){return e.wellDoneSlice.wellDone})),t=Object(s.c)((function(e){return e.gameOngoingSlice.gameOngoing})),n=Object(s.c)((function(e){return e.backdropSlice.backdrop})),c=Object(s.c)((function(e){return e.levelSelectSlice.currentLevel})),r=Object(s.c)((function(e){return e.highScoresSlice.isHighScoresOpen}));return Object(_.jsxs)("div",{className:"Project",children:[n?Object(_.jsx)(y,{}):null,e?Object(_.jsx)(v,{}):null,e||t||r?null:Object(_.jsx)(Q,{}),t?Object(_.jsx)(de,{level:c}):null,a?Object(_.jsx)(he,{}):null,r?Object(_.jsx)(pe,{}):null]})};var ve=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(_e,{})})},xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),r(e),i(e)}))},Se=t(16),ye=t(24),Ne=t.n(ye),Te=t(4),we=t(11),Pe=Object(Te.b)({FirstTimeSlice:f,backdropSlice:h,levelSelectSlice:D,gameOngoingSlice:W,wellDoneSlice:me,playerNameSlice:p,highScoresSlice:Z,startTimeSlice:V}),Ge={key:"root",storage:Ne.a},ke=Object(Se.a)(Ge,Pe),Ee=Object(u.a)({reducer:ke,devTools:!1,middleware:[we.a]}),Be=t(25),Ce=Object(Se.b)(Ee);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(s.a,{store:Ee,children:Object(_.jsx)(Be.a,{loading:null,persistor:Ce,children:Object(_.jsx)(ve,{})})})}),document.getElementById("root")),xe()},5:function(e,a,t){e.exports={GamePageBody:"GamePage_GamePageBody__2eSST",DropDownCharacter:"GamePage_DropDownCharacter__2Za91",GamePageHeading:"GamePage_GamePageHeading__3FRuA",scrollUp:"GamePage_scrollUp__2hOsD",GamePageHeadingBegin:"GamePage_GamePageHeadingBegin__1t3h0",GamePageText:"GamePage_GamePageText__BAcc7",shrinkFindText:"GamePage_shrinkFindText__Ix9_n",GamePageTextBegin:"GamePage_GamePageTextBegin__2kPMZ",CharacterImageOne:"GamePage_CharacterImageOne__3Pjn4",blinkOne:"GamePage_blinkOne__20G1j",CharacterImageTwo:"GamePage_CharacterImageTwo__3DUio",blinkTwo:"GamePage_blinkTwo__21_-k",CharacterImageThree:"GamePage_CharacterImageThree__2w15e",blinkThree:"GamePage_blinkThree__1QpTf",GameImageHolder:"GamePage_GameImageHolder__2UZ6U",GameImage:"GamePage_GameImage__o57T6",increaseImage:"GamePage_increaseImage__3YT8f",GameImageBegin:"GamePage_GameImageBegin__xsEN6"}},9:function(e,a,t){e.exports={ModalBody:"WelcomeModal_ModalBody__WPb7P",WelcomeDiv:"WelcomeModal_WelcomeDiv__2MVWX",WelcomeP:"WelcomeModal_WelcomeP__2_eI8",WelcomeImage:"WelcomeModal_WelcomeImage__d_onR",ExplainP:"WelcomeModal_ExplainP__2bHvG",Form:"WelcomeModal_Form__9ue25",EnterP:"WelcomeModal_EnterP__-jvEA",InputName:"WelcomeModal_InputName__xJQd9",EnterButton:"WelcomeModal_EnterButton__3Y4Na",textDance:"WelcomeModal_textDance__lc-7L"}}},[[42,1,2]]]);
//# sourceMappingURL=main.c5dd0542.chunk.js.map