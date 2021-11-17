(this.webpackJsonpsearchgame=this.webpackJsonpsearchgame||[]).push([[0],{11:function(e,a,n){e.exports={ModalBody:"HighScores_ModalBody__1-1Vn",TitleCard:"HighScores_TitleCard__2flu0",ScoreHolder:"HighScores_ScoreHolder__XQk1d",ScoreList:"HighScores_ScoreList__UZm22",textDance:"HighScores_textDance__Mr9ll"}},17:function(e,a,n){e.exports={ModalBody:"LevelSelect_ModalBody__3hcmE",ViewHS:"LevelSelect_ViewHS__15MAd",textDance:"LevelSelect_textDance__UGyBl"}},19:function(e,a,n){e.exports={Backdrop:"Backdrop_Backdrop___u0jx"}},20:function(e,a,n){e.exports={DifficultyButton:"DifficultyButton_DifficultyButton__hdMBr"}},21:function(e,a,n){e.exports={ModalBody:"WellDone_ModalBody__2AHlm",textDance:"WellDone_textDance__1AVW2"}},28:function(e,a,n){},29:function(e,a,n){},39:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),r=n(12),i=n.n(r),l=(n(28),n(29),n(7)),o=n.n(l),s=n(2),m=n(3),u=Object(m.b)({name:"FirstTimeState",initialState:{firstTime:!0},reducers:{changeToNotFirstTime:function(e){e.firstTime=!1}}}),d=u.actions,f=u.reducer,g=Object(m.b)({name:"backdropState",initialState:{backdrop:!0},reducers:{turnOffBackdrop:function(e){e.backdrop=!1},turnOnBackdrop:function(e){e.backdrop=!0}}}),j=g.actions,b=g.reducer,O=Object(m.b)({name:"playerNameState",initialState:{playerName:""},reducers:{changePlayerName:function(e,a){e.playerName=a.payload}}}),h=O.actions,_=O.reducer,p=n(0),v=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.playerNameSlice.playerName}));console.log("WelcomeModal playerNAme is   :   "+a);return Object(p.jsxs)("div",{className:o.a.ModalBody,children:[Object(p.jsxs)("div",{className:o.a.WelcomeDiv,children:[Object(p.jsx)("p",{className:o.a.WelcomeP,children:"Welcome"}),Object(p.jsx)("div",{className:o.a.WelcomeImage})]}),Object(p.jsxs)("div",{className:o.a.Form,children:[Object(p.jsx)("p",{className:o.a.EnterP,children:"Enter your name below."}),Object(p.jsx)("input",{onChange:function(a){var n;n=a.target.value,e(h.changePlayerName(n))},className:o.a.InputName,type:"text",value:a}),Object(p.jsx)("button",{onClick:function(){e(d.changeToNotFirstTime()),e(j.turnOnBackdrop())},className:o.a.EnterButton,children:"Enter"})]})]})},x=n(19),S=n.n(x),y=function(){return Object(p.jsx)("div",{className:S.a.Backdrop})},k=n(17),N=n.n(k),G=n(20),P=n.n(G),T=n.p+"static/media/Easy.87b42cf8.jpg",B=n.p+"static/media/Normal.6465c10a.jpg",E=n.p+"static/media/Hard.90eab6a4.jpg",w=Object(m.b)({name:"levelSelectState",initialState:{currentLevel:"none"},reducers:{selectLevelEasy:function(e){e.currentLevel="Easy"},selectLevelNormal:function(e){e.currentLevel="Normal"},selectLevelHard:function(e){e.currentLevel="Hard"}}}),C=w.actions,H=w.reducer,D=Object(m.b)({name:"gameOngoingState",initialState:{gameOngoing:!1},reducers:{turnOffGameOngoing:function(e){e.gameOngoing=!1},turnOnGameOngoing:function(e){e.gameOngoing=!0}}}),I=D.actions,W=D.reducer,M=Object(m.b)({name:"highScoresState",initialState:{highScores:[],isHighScoresOpen:!1},reducers:{turnOffhighScores:function(e){e.isHighScoresOpen=!1},turnOnhighScores:function(e){e.isHighScoresOpen=!0}}}),L=M.actions,F=M.reducer,A=function(e){var a=Object(s.b)();return Object(p.jsx)("div",{className:P.a.DifficultyButton,style:{backgroundImage:"Easy"===e.difficulty?"url("+T+")":"Normal"===e.difficulty?"url("+B+")":"url("+E+")",justifySelf:"Easy"===e.difficulty?"left":"Normal"===e.difficulty?"center":"end"},onClick:function(){switch(e.difficulty){case"Easy":a(C.selectLevelEasy()),a(j.turnOffBackdrop());break;case"Normal":a(C.selectLevelNormal()),a(j.turnOffBackdrop());break;case"Hard":a(C.selectLevelHard()),a(j.turnOffBackdrop())}a(I.turnOnGameOngoing())},children:Object(p.jsx)("p",{children:e.difficulty})})},R=function(){var e=Object(s.b)();return Object(p.jsxs)("div",{className:N.a.ModalBody,children:[Object(p.jsx)(A,{difficulty:"Easy"}),Object(p.jsx)(A,{difficulty:"Normal"}),Object(p.jsx)(A,{difficulty:"Hard"}),Object(p.jsx)("button",{className:N.a.ViewHS,onClick:function(){e(L.turnOnhighScores())},children:"View Hard High Scores"})]})},U=n(6),V=n(8),Y=n(5),X=n.n(Y),Z=n.p+"static/media/EasyCharacterOne.5be51d75.PNG",J=n.p+"static/media/EasyCharacterTwo.2cd8e64b.PNG",Q=n.p+"static/media/EasyCharacterThree.47d20aae.PNG",q=n.p+"static/media/NormalCharacterOne.1048738c.PNG",z=n.p+"static/media/NormalCharacterTwo.d504b113.PNG",K=n.p+"static/media/NormalCharacterThree.2be2dcd6.PNG",$=n.p+"static/media/HardCharacterOne.bb831a70.PNG",ee=n.p+"static/media/HardCharacterTwo.dc98c636.PNG",ae=n.p+"static/media/HardCharacterThree.d760c357.PNG",ne=Object(m.b)({name:"wellDoneState",initialState:{wellDone:!1},reducers:{turnOffWellDone:function(e){e.wellDone=!1},turnOnWellDone:function(e){e.wellDone=!0}}}),te=ne.actions,ce=ne.reducer,re=function(e){var a=Object(s.b)(),n="Easy"===e.level?Z:"Hard"===e.level?$:q,c="Easy"===e.level?J:"Hard"===e.level?ee:z,r="Easy"===e.level?Q:"Hard"===e.level?ae:K,i=Object(t.useState)(X.a.GamePageHeadingBegin),l=Object(V.a)(i,2),o=l[0],m=l[1];o===X.a.GamePageHeadingBegin&&setTimeout((function(){m(X.a.GamePageHeading)}),6e3);var u=Object(t.useState)(X.a.GamePageTextBegin),d=Object(V.a)(u,2),f=d[0],g=d[1];f===X.a.GamePageTextBegin&&setTimeout((function(){g(X.a.GamePageText)}),6e3);var b=Object(t.useState)(X.a.GameImageBegin),O=Object(V.a)(b,2),h=O[0],_=O[1];h===X.a.GameImageBegin&&setTimeout((function(){_(X.a.GameImage)}),6e3);var v=Object(t.useState)(""),x=Object(V.a)(v,2),S=x[0],y=x[1],k=Object(t.useState)(""),N=Object(V.a)(k,2),G=N[0],P=N[1],w=Object(t.useState)(!1),C=Object(V.a)(w,2),H=C[0],D=C[1],I=function(){D(!H)},W=Object(t.useState)([{num:1,sourceImage:n},{num:2,sourceImage:c},{num:3,sourceImage:r}]),M=Object(V.a)(W,2),L=M[0],F=M[1],A=!0,R=!0,Y=!0;L.forEach((function(e){1===e.num&&(A=!1),2===e.num&&(R=!1),3===e.num&&(Y=!1)}));var ne=function(a){if("Easy"===e.level){var n=!1;L.forEach((function(e){return 1===e.num?n=!0:null})),1===a&&n&&S>345&&S<428&&G>245&&G<330&&L.forEach((function(e,a){if(1===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}));var t=!1;L.forEach((function(e){return 2===e.num?t=!0:null})),2===a&&t&&S>173&&S<219&&G>550&&G<630&&L.forEach((function(e,a){if(2===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}));var c=!1;L.forEach((function(e){return 3===e.num?c=!0:null})),3===a&&c&&S>725&&S<825&&G>820&&G<855&&L.forEach((function(e,a){if(3===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}))}if("Normal"===e.level){var r=!1;L.forEach((function(e){return 1===e.num?r=!0:null})),1===a&&r&&S>642&&S<892&&G>910&&G<940&&L.forEach((function(e,a){if(1===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}));var i=!1;L.forEach((function(e){return 2===e.num?i=!0:null})),2===a&&i&&S>836&&S<906&&G>132&&G<185&&L.forEach((function(e,a){if(2===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}));var l=!1;L.forEach((function(e){return 3===e.num?l=!0:null})),3===a&&l&&S>166&&S<199&&G>182&&G<204&&L.forEach((function(e,a){if(3===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}))}if("Hard"===e.level){var o=!1;L.forEach((function(e){return 1===e.num?o=!0:null})),1===a&&o&&S>716&&S<739&&G>816&&G<836&&L.forEach((function(e,a){if(1===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}));var s=!1;L.forEach((function(e){return 2===e.num?s=!0:null})),2===a&&s&&S>927&&S<944&&G>908&&G<922&&L.forEach((function(e,a){if(2===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}));var m=!1;L.forEach((function(e){return 3===e.num?m=!0:null})),3===a&&m&&S>983&&S<995&&G>377&&G<390&&L.forEach((function(e,a){if(3===e.num){var n=Object(U.a)(L);n.splice(a,1),F(n)}}))}};return Object(s.c)((function(e){return e.wellDoneSlice.wellDone}))||0===L.length&&(a(j.turnOnBackdrop()),a(te.turnOnWellDone())),Object(p.jsxs)("div",{className:X.a.GamePageBody,children:[Object(p.jsxs)("div",{className:o,onClick:function(){return H&&I()},children:[Object(p.jsx)("p",{className:f,children:"Please find:"}),Object(p.jsx)("img",{style:{border:A?"4px solid green":"none"},src:n,className:X.a.CharacterImageOne,alt:"FindOne"}),Object(p.jsx)("img",{style:{border:R?"4px solid green":"none"},src:c,className:X.a.CharacterImageTwo,alt:"FindTwo"}),Object(p.jsx)("img",{style:{border:Y?"4px solid green":"none"},src:r,className:X.a.CharacterImageThree,alt:"FindThree"})]}),Object(p.jsx)("div",{className:X.a.GameImageHolder,children:Object(p.jsx)("img",{onClick:function(e){!function(e){y(e.clientX+window.scrollX-window.innerWidth/6.6)}(e),function(e){P(80-window.innerHeight/10+e.clientY+window.scrollY)}(e),!H&&I()},alt:"GameImage",className:h,src:"Easy"===e.level?T:"Normal"===e.level?B:E})}),H?Object(p.jsx)("div",{style:{position:"absolute",display:"grid",gridTemplateColumns:"auto",width:"calc(10vh + 10vw)",backgroundColor:"transparent",left:"calc("+(S+window.innerWidth/6.6)+"px - 5vh - 5vw)",top:G},children:L.map((function(e){return Object(p.jsx)("img",{src:e.sourceImage,className:X.a.DropDownCharacter,onClick:function(){!function(e){ne(e)}(e.num)},alt:"Character"},e.num)}))}):null]})},ie=n(21),le=n.n(ie),oe=function(){var e=Object(s.b)();return Object(p.jsxs)("div",{className:le.a.ModalBody,children:[Object(p.jsx)("p",{children:"Well Done!"}),Object(p.jsx)("p",{children:"You completed the game with a time of "}),Object(p.jsx)("p",{children:"0:00"}),Object(p.jsx)("button",{onClick:function(){e(te.turnOffWellDone()),e(I.turnOffGameOngoing())},children:"Continue?"})]})},se=n(11),me=n.n(se),ue=[{name:"Richard",rank:1,time:"2:00"},{name:"Oscar",rank:2,time:"3:00"},{name:"Cuong",rank:3,time:"4:00"},{name:"Anthony",rank:4,time:"5:00"},{name:"Richard",rank:5,time:"2:00"},{name:"Oscar",rank:6,time:"3:00"},{name:"Cuong",rank:7,time:"4:00"},{name:"Anthony",rank:8,time:"5:00"},{name:"Richard",rank:9,time:"2:00"},{name:"Oscar",rank:10,time:"3:00"},{name:"Cuong",rank:11,time:"4:00"},{name:"Anthony",rank:12,time:"5:00"},{name:"Richard",rank:13,time:"2:00"},{name:"Oscar",rank:14,time:"3:00"},{name:"Cuong",rank:15,time:"4:00"},{name:"Anthony",rank:16,time:"5:00"},{name:"Richard",rank:17,time:"2:00"},{name:"Oscar",rank:18,time:"3:00"},{name:"Cuong",rank:19,time:"4:00"},{name:"Anthony",rank:20,time:"5:00"}],de=function(){var e=Object(s.b)();return Object(p.jsxs)("div",{className:me.a.ModalBody,children:[Object(p.jsxs)("div",{className:me.a.TitleCard,children:[Object(p.jsx)("p",{children:"Rank"})," ",Object(p.jsx)("p",{children:"Name"})," ",Object(p.jsx)("p",{children:"Time"})]}),Object(p.jsx)("div",{className:me.a.ScoreHolder,children:ue.map((function(e){return Object(p.jsxs)("div",{className:me.a.ScoreList,children:[Object(p.jsx)("p",{children:e.rank}),Object(p.jsx)("p",{children:e.name}),Object(p.jsx)("p",{children:e.time})]})}))}),Object(p.jsx)("button",{onClick:function(){e(L.turnOffhighScores())},children:"Back"})]})},fe=function(){var e=Object(s.c)((function(e){return e.FirstTimeSlice.firstTime})),a=Object(s.c)((function(e){return e.wellDoneSlice.wellDone})),n=Object(s.c)((function(e){return e.gameOngoingSlice.gameOngoing})),t=Object(s.c)((function(e){return e.backdropSlice.backdrop})),c=Object(s.c)((function(e){return e.levelSelectSlice.currentLevel})),r=Object(s.c)((function(e){return e.highScoresSlice.isHighScoresOpen}));return Object(p.jsxs)("div",{className:"Project",children:[t?Object(p.jsx)(y,{}):null,e?Object(p.jsx)(v,{}):null,e||n||r?null:Object(p.jsx)(R,{}),n?Object(p.jsx)(re,{level:c}):null,a?Object(p.jsx)(oe,{}):null,r?Object(p.jsx)(de,{}):null]})};var ge=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(fe,{})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;n(e),t(e),c(e),r(e),i(e)}))},be=n(14),Oe=n(22),he=n.n(Oe),_e=n(4),pe=n(9),ve=Object(_e.b)({FirstTimeSlice:f,backdropSlice:b,levelSelectSlice:H,gameOngoingSlice:W,wellDoneSlice:ce,playerNameSlice:_,highScoresSlice:F}),xe={key:"root",storage:he.a},Se=Object(be.a)(xe,ve),ye=Object(m.a)({reducer:Se,devTools:!1,middleware:[pe.a]}),ke=n(23),Ne=Object(be.b)(ye);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{store:ye,children:Object(p.jsx)(ke.a,{loading:null,persistor:Ne,children:Object(p.jsx)(ge,{})})})}),document.getElementById("root")),je()},5:function(e,a,n){e.exports={GamePageBody:"GamePage_GamePageBody__2eSST",DropDownCharacter:"GamePage_DropDownCharacter__2Za91",GamePageHeading:"GamePage_GamePageHeading__3FRuA",scrollUp:"GamePage_scrollUp__2hOsD",GamePageHeadingBegin:"GamePage_GamePageHeadingBegin__1t3h0",GamePageText:"GamePage_GamePageText__BAcc7",shrinkFindText:"GamePage_shrinkFindText__Ix9_n",GamePageTextBegin:"GamePage_GamePageTextBegin__2kPMZ",CharacterImageOne:"GamePage_CharacterImageOne__3Pjn4",blinkOne:"GamePage_blinkOne__20G1j",CharacterImageTwo:"GamePage_CharacterImageTwo__3DUio",blinkTwo:"GamePage_blinkTwo__21_-k",CharacterImageThree:"GamePage_CharacterImageThree__2w15e",blinkThree:"GamePage_blinkThree__1QpTf",GameImageHolder:"GamePage_GameImageHolder__2UZ6U",GameImage:"GamePage_GameImage__o57T6",increaseImage:"GamePage_increaseImage__3YT8f",GameImageBegin:"GamePage_GameImageBegin__xsEN6"}},7:function(e,a,n){e.exports={ModalBody:"WelcomeModal_ModalBody__WPb7P",WelcomeDiv:"WelcomeModal_WelcomeDiv__2MVWX",WelcomeP:"WelcomeModal_WelcomeP__2_eI8",WelcomeImage:"WelcomeModal_WelcomeImage__d_onR",ExplainP:"WelcomeModal_ExplainP__2bHvG",Form:"WelcomeModal_Form__9ue25",EnterP:"WelcomeModal_EnterP__-jvEA",InputName:"WelcomeModal_InputName__xJQd9",EnterButton:"WelcomeModal_EnterButton__3Y4Na",textDance:"WelcomeModal_textDance__lc-7L"}}},[[39,1,2]]]);
//# sourceMappingURL=main.3b26534f.chunk.js.map