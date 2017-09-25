webpackJsonp([1],{123:function(t,r,e){"use strict";var n=this&&this.__decorate||function(t,r,e,n){var o,a=arguments.length,i=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,e,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(r,e,i):o(r,e))||i);return a>3&&i&&Object.defineProperty(r,e,i),i},o=this&&this.__metadata||function(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)};Object.defineProperty(r,"__esModule",{value:!0});var a=e(19),i=e(92),c=e(204),s=function(){function WordsComponent(t){this.router=t,this.words=c.Words,this.realtime_word=void 0}return WordsComponent.prototype.createWord=function(){var t=0,r=this.words.length-1,e=function(){var e=t-.5+Math.random()*(r-t+1);return e=Math.round(e)}();this.realtime_word=this.words[e]},WordsComponent.prototype.compareWord=function(t){for(var r=0,e=this.realtime_word.translate;r<e.length;r++){t===e[r]&&this.createWord()}this.createWord()},WordsComponent.prototype.ngOnInit=function(){},WordsComponent}();s=n([a.Component({selector:"words",template:e(361),styles:[e(364)]}),o("design:paramtypes",[i.Router])],s),r.WordsComponent=s},196:function(t,r,e){"use strict";var n=this&&this.__decorate||function(t,r,e,n){var o,a=arguments.length,i=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,e,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(r,e,i):o(r,e))||i);return a>3&&i&&Object.defineProperty(r,e,i),i};Object.defineProperty(r,"__esModule",{value:!0});var o=e(19),a=e(58),i=e(123),c=e(202),s=e(203),d=function(){function AppModule(){}return AppModule}();d=n([o.NgModule({imports:[a.BrowserModule,c.AppRoutingModule],declarations:[s.AppComponent,i.WordsComponent],bootstrap:[s.AppComponent]})],d),r.AppModule=d},202:function(t,r,e){"use strict";var n=this&&this.__decorate||function(t,r,e,n){var o,a=arguments.length,i=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,e,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(r,e,i):o(r,e))||i);return a>3&&i&&Object.defineProperty(r,e,i),i};Object.defineProperty(r,"__esModule",{value:!0});var o=e(123),a=e(19),i=e(92),c=[{path:"",component:o.WordsComponent}],s=function(){function AppRoutingModule(){}return AppRoutingModule}();s=n([a.NgModule({imports:[i.RouterModule.forRoot(c,{useHash:!0})],exports:[i.RouterModule]})],s),r.AppRoutingModule=s},203:function(t,r,e){"use strict";var n=this&&this.__decorate||function(t,r,e,n){var o,a=arguments.length,i=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,e,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(r,e,i):o(r,e))||i);return a>3&&i&&Object.defineProperty(r,e,i),i};Object.defineProperty(r,"__esModule",{value:!0});var o=e(19);e(359);var a=function(){function AppComponent(){}return AppComponent}();a=n([o.Component({selector:"english",template:e(360),styles:[e(363)]})],a),r.AppComponent=a},204:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Words=[{id:0,word:"hi",transcript:"[хай]",translate:["привет","",""]},{id:1,word:"hello",transcript:"[хэлОу]",translate:["здравствуйте","привет",""]},{id:2,word:"sorry",transcript:"[сОри]",translate:["извините","простите",""]},{id:3,word:"please",transcript:"[пли:з]",translate:["пожалуйста","угождать",""]},{id:4,word:"thank you",transcript:"[сэнк ю]",translate:["спасибо","",""]},{id:5,word:"you are welcome",transcript:"[ю: а уЭлкэм]",translate:["пожалуйста","не за что",""]},{id:6,word:"what a pity",transcript:"[уот э пИти]",translate:["как жаль","",""]},{id:7,word:"good bye",transcript:"[гуд бАй]",translate:["до свидания","пока",""]},{id:8,word:"people",transcript:"[пи:пл]",translate:["люди","",""]},{id:9,word:"man",transcript:"[мэн]",translate:["мужчина","",""]},{id:10,word:"woman",transcript:"[уУмэн]",translate:["женщина","",""]},{id:11,word:"child",transcript:"[чайлд]",translate:["ребенок","",""]},{id:12,word:"boy",transcript:"[бой]",translate:["мальчик","",""]},{id:13,word:"girl",transcript:"[гё:рл]",translate:["девочка","",""]},{id:14,word:"guy",transcript:"[гай]",translate:["парень","",""]}]},359:function(t,r){},360:function(t,r){t.exports="<router-outlet></router-outlet>\n"},361:function(t,r){t.exports='<div class="row">\r\n    <div class="col-12">\r\n        <div class="container ground">\r\n            <button class="btn btn-primary btn-lg" (click)="createWord()">Генератор слова</button>\r\n            <div *ngIf="undefined!==realtime_word">\r\n                <div class="col-12"><h1><strong>{{realtime_word.word}}</strong></h1></div>\r\n                <div class="col-12"><h1><strong>{{realtime_word.transcript}}</strong></h1></div>\r\n            </div>\r\n            <input type="text" class="col-12" #translate>\r\n            <button class="btn btn-primary btn-lg" (click)="compareWord(translate.value)">Ввести ответ</button>\r\n        </div>\r\n    </div>\r\n</div>'},363:function(t,r){t.exports="\n"},364:function(t,r){t.exports="/* html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n  \r\n    background: url(../../../../assets/images/background.jpg) no-repeat center fixed;\r\n    -webkit-background-size: cover;\r\n    background-size: cover; \r\n    background-attachment: fixed;\r\n    background-position: center center;\r\n    background-color:#464646;\r\n  }\r\n\r\n  .title {\r\n      color: black;\r\n      margin:0;\r\n      padding:50px 20px;\r\n  }\r\n  \r\n  .text{\r\n      color: darkslategray;\r\n      margin: 0;\r\n      padding:50px 20px;\r\n  }\r\n  \r\n  .button-pos{\r\n      margin: 20px 0 0 10px;\r\n      width: 300px;\r\n  }\r\n\r\n.ground {\r\n    background-color: rgba(57, 31, 22, 0.5);\r\n    height: 100%;\r\n    width: 100%; \r\n} */"},635:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(93),o=e(19),a=e(196);o.enableProdMode(),n.platformBrowserDynamic().bootstrapModule(a.AppModule)}},[635]);