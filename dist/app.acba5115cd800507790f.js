webpackJsonp([1],{123:function(e,r,n){"use strict";var o=this&&this.__decorate||function(e,r,n,o){var t,d=arguments.length,i=d<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,o);else for(var s=e.length-1;s>=0;s--)(t=e[s])&&(i=(d<3?t(i):d>3?t(r,n,i):t(r,n))||i);return d>3&&i&&Object.defineProperty(r,n,i),i},t=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};Object.defineProperty(r,"__esModule",{value:!0});var d=n(18),i=n(72),s=n(206),a=n(207),c=function(){function MenuComponent(e){this.router=e,this.clickedAnything=!1,this.wordsFirst=s.WordsFirst,this.wordsSecond=a.WordsSecond}return MenuComponent.prototype.goWithFisrtWords=function(){this.clickedAnything=!0,this.Words=this.wordsFirst},MenuComponent.prototype.goWithSecondWords=function(){this.clickedAnything=!0,this.Words=this.wordsSecond},MenuComponent.prototype.returnToStart=function(){this.clickedAnything=!0,this.Words=[]},MenuComponent}();c=o([d.Component({selector:"menu-page",template:n(364),styles:[n(368)]}),t("design:paramtypes",[i.Router])],c),r.MenuComponent=c},124:function(e,r,n){"use strict";var o=this&&this.__decorate||function(e,r,n,o){var t,d=arguments.length,i=d<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,o);else for(var s=e.length-1;s>=0;s--)(t=e[s])&&(i=(d<3?t(i):d>3?t(r,n,i):t(r,n))||i);return d>3&&i&&Object.defineProperty(r,n,i),i},t=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};Object.defineProperty(r,"__esModule",{value:!0});var d=n(18),i=n(72),s=function(){function WordsComponent(e){this.router=e,this.realtime_word=void 0,this.right_translate=!1,this.answer_clicked=!1,this.timer=10,this.complete_word=[]}return WordsComponent.prototype.createWord=function(){var e=this;if(this.complete_word.length===this.words.length-1&&(this.final_message="finish"),"finish"===this.final_message)return void alert("You are finished this quest, go out!");for(var r=0;;){if(r++,10*this.words.length===r)break;if(this.generateIndex(),!this.complete_word.find(function(r){return r===e.real_index}))break;this.generateIndex()}this.realtime_word=this.words[this.real_index],this.right_translate=!1,this.answer_clicked=!1},WordsComponent.prototype.compareWord=function(e){var r=this;if(void 0!==e.value&&null!==e.value&&""!==e.value){var n=e.value.replace(/ё/g,"е");this.realtime_word.translate.find(function(e){return n.toLocaleLowerCase()===e.toLocaleLowerCase()})?(this.completeWords(this.real_index),this.right_translate=!0,this.answer_clicked=!0,e.value=null,setTimeout(function(){r.createWord(),r.answer_clicked=!1},2e3)):(this.timer=10,this.interval(),this.right_translate=!1,this.answer_clicked=!0,e.value=null)}},WordsComponent.prototype.completeWords=function(e){0===this.complete_word.length&&this.complete_word.push(e),this.complete_word.find(function(r){return r!==e})&&this.complete_word.push(e)},WordsComponent.prototype.generateIndex=function(){var e=1,r=this.words.length-1;this.real_index=function(){var n=e-.5+Math.random()*(r-e+1);return n=Math.round(n)}()},WordsComponent.prototype.interval=function(){var e=this,r=setInterval(function(){0===--e.timer&&(clearInterval(r),e.createWord())},1e3)},WordsComponent.prototype.ngOnInit=function(){this.createWord()},WordsComponent}();o([d.Input(),t("design:type",Array)],s.prototype,"words",void 0),s=o([d.Component({selector:"words",template:n(365),styles:[n(369)]}),t("design:paramtypes",[i.Router])],s),r.WordsComponent=s},125:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function Word(e,r,n,o){this.id=e,this.word=r,this.transcript=n,this.translate=o}return Word}();r.Word=o},198:function(e,r,n){"use strict";var o=this&&this.__decorate||function(e,r,n,o){var t,d=arguments.length,i=d<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,o);else for(var s=e.length-1;s>=0;s--)(t=e[s])&&(i=(d<3?t(i):d>3?t(r,n,i):t(r,n))||i);return d>3&&i&&Object.defineProperty(r,n,i),i};Object.defineProperty(r,"__esModule",{value:!0});var t=n(18),d=n(58),i=n(123),s=n(124),a=n(204),c=n(205),w=function(){function AppModule(){}return AppModule}();w=o([t.NgModule({imports:[d.BrowserModule,a.AppRoutingModule],declarations:[c.AppComponent,i.MenuComponent,s.WordsComponent],bootstrap:[c.AppComponent]})],w),r.AppModule=w},204:function(e,r,n){"use strict";var o=this&&this.__decorate||function(e,r,n,o){var t,d=arguments.length,i=d<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,o);else for(var s=e.length-1;s>=0;s--)(t=e[s])&&(i=(d<3?t(i):d>3?t(r,n,i):t(r,n))||i);return d>3&&i&&Object.defineProperty(r,n,i),i};Object.defineProperty(r,"__esModule",{value:!0});var t=n(123),d=n(124),i=n(18),s=n(72),a=[{path:"",component:t.MenuComponent},{path:"words",component:d.WordsComponent}],c=function(){function AppRoutingModule(){}return AppRoutingModule}();c=o([i.NgModule({imports:[s.RouterModule.forRoot(a,{useHash:!0})],exports:[s.RouterModule]})],c),r.AppRoutingModule=c},205:function(e,r,n){"use strict";var o=this&&this.__decorate||function(e,r,n,o){var t,d=arguments.length,i=d<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,o);else for(var s=e.length-1;s>=0;s--)(t=e[s])&&(i=(d<3?t(i):d>3?t(r,n,i):t(r,n))||i);return d>3&&i&&Object.defineProperty(r,n,i),i};Object.defineProperty(r,"__esModule",{value:!0});var t=n(18);n(362);var d=function(){function AppComponent(){}return AppComponent}();d=o([t.Component({selector:"english",template:n(363),styles:[n(367)]})],d),r.AppComponent=d},206:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n(125);r.WordsFirst=[new o.Word(-100,"","[]",["","","","","","","","","",""]),new o.Word(0,"hi","[хай]",["привет","здравствуй","здорова","салют","йоу","хай","здравствуйте","","",""]),new o.Word(1,"hello","[хэлОу]",["здравствуйте","привет","","","","","","","",""]),new o.Word(2,"sorry","[сОри]",["извините","простите","извини","прошу прощения","прости","","","","",""]),new o.Word(3,"please","[пли:з]",["пожалуйста","угождать","","","","","","","",""]),new o.Word(4,"thank you","[сэнк ю]",["спасибо","","","","","","","","",""]),new o.Word(5,"you are welcome","[ю: а уЭлкэм]",["пожалуйста","не за что","","","","","","","",""]),new o.Word(6,"what a pity","[уот э пИти]",["как жаль","какая жалость","как жалко","жалко","какая печаль","","","","",""]),new o.Word(7,"good bye","[гуд бАй]",["до свидания","пока","прощай","до встречи","","","","","",""]),new o.Word(8,"people","[пи:пл]",["люди","","","","","","","","",""]),new o.Word(9,"man","[мэн]",["мужчина","","","","","","","","",""]),new o.Word(10,"woman","[уУмэн]",["женщина","","","","","","","","",""]),new o.Word(11,"child","[чайлд]",["ребенок","","","","","","","","",""]),new o.Word(12,"boy","[бой]",["мальчик","","","","","","","","",""]),new o.Word(13,"girl","[гё:рл]",["девочка","","","","","","","","",""]),new o.Word(14,"guy","[гай]",["парень","","","","","","","","",""]),new o.Word(15,"friend","[фрэнд]",["друг","","","","","","","","",""]),new o.Word(16,"acquaintance","[экуЭйнтэнс]",["знакомый","знакомство","","","","","","","",""]),new o.Word(17,"neighbor","[нЭйбэр]",["сосед","соседка","","","","","","","",""]),new o.Word(18,"guest","[гэст]",["гость","","","","","","","","",""]),new o.Word(19,"chief","[чи:ф]",["шеф","начальник","босс","главный","","","","","",""]),new o.Word(20,"boss","[босс]",["начальник","начальник","вождь","босс","","","","","",""]),new o.Word(21,"competitor","[кэмпЭтитэр]",["соперник","конкурент","","","","","","","",""]),new o.Word(22,"client","[клАйэнт]",["клиент","","","","","","","","",""]),new o.Word(23,"colleague","[кОли:г]",["коллега","","","","","","","","",""]),new o.Word(24,"family","[фЭмили]",["семья","","","","","","","","",""]),new o.Word(25,"parents","[пЭэрэнтс]",["родители","","","","","","","","",""]),new o.Word(26,"father","[фА:зер]",["отец","папа","","","","","","","",""]),new o.Word(27,"dad(dy)","[дЭд(и)]",["папа","","","","","","","","",""]),new o.Word(28,"mother","[мА:зэр]",["мать","мама","","","","","","","",""]),new o.Word(29,"mum(my)","[мам(и)]",["мама","","","","","","","","",""]),new o.Word(30,"husband","[хАзбэнд]",["муж","","","","","","","","",""]),new o.Word(31,"wife","[уАйф]",["жена","","","","","","","","",""]),new o.Word(32,"son","[сан]",["сын","","","","","","","","",""]),new o.Word(33,"daughter","[дО:тэр]",["дочь","дочка","","","","","","","",""]),new o.Word(34,"brother","[брАзэр]",["брат","","","","","","","","",""]),new o.Word(35,"sister","[сИстэр]",["сестра","","","","","","","","",""]),new o.Word(36,"grandfather","[грЭнфА:зэр]",["дед","дедушка","","","","","","","",""]),new o.Word(37,"father-in-law","[фА:зэр ин лО:]",["тесть","свекор","","","","","","","",""]),new o.Word(38,"uncle","[анкл]",["дядя","","","","","","","","",""]),new o.Word(39,"aunt","[а:нт]",["тетя","","","","","","","","",""]),new o.Word(40,"bride","[брАйд]",["невеста в день свадьбы","невеста","","","","","","","",""]),new o.Word(41,"cousin","[казн]",["двоюродный брат","двоюродная сестра","кузен","кузина","","","","","",""]),new o.Word(42,"nephew","[нЭфъю:]",["племянник","","","","","","","","",""]),new o.Word(43,"niece","[ни:с]",["племянница","","","","","","","","",""]),new o.Word(44,"job","[джоб]",["работа","","","","","","","","",""]),new o.Word(45,"bisinessman","[бИзнэсмэн]",["бизнесмен","предприниматель","","","","","","","",""]),new o.Word(46,"teacher","[тИ:чер]",["учитель","педагог","преподаватель","","","","","","",""]),new o.Word(47,"driver","[дрАйвэр]",["водитель","","","","","","","","",""]),new o.Word(48,"worker","[уО:ркэр]",["рабочий","","","","","","","","",""]),new o.Word(49,"engineer","[энджинИ:эр]",["инженер","","","","","","","","",""]),new o.Word(50,"doctor","[дОктэр]",["врач","доктор","","","","","","","",""]),new o.Word(51,"lawyer","[лО:ер]",["адвокат","юрист","","","","","","","",""]),new o.Word(52,"journalist","[джЁ:рнэлист]",["журналист","","","","","","","","",""]),new o.Word(53,"nurse","[нё:рс]",["медсестра","","","","","","","","",""]),new o.Word(54,"shop assistаnt","[шОп эсИстэнт]",["продавец","кассир","","","","","","","",""]),new o.Word(55,"waiter","[уЭйтэр]",["официант","","","","","","","","",""]),new o.Word(56,"accountant","[экАунтэнт]",["бухгалтер","","","","","","","","",""]),new o.Word(57,"artist","[А:ртист]",["художник","","","","","","","","",""]),new o.Word(58,"musician","[мъю:зИшн]",["музыкант","","","","","","","","",""]),new o.Word(59,"actor","[Эктэр]",["актер","","","","","","","","",""]),new o.Word(60,"student","[стъЮдэнт]",["студент","","","","","","","","",""]),new o.Word(61,"pupil","[пъюпл]",["школьник","ученик","","","","","","","",""]),new o.Word(62,"animal","[Энимэл]",["животное","","","","","","","","",""]),new o.Word(63,"cat","[кэт]",["кошка","котик","кот","","","","","","",""]),new o.Word(64,"dog","[дог]",["собака","пес","","","","","","","",""]),new o.Word(65,"bird","[бё:рд]",["птица","птичка","","","","","","","",""]),new o.Word(66,"squirrel","[скуИрэл]",["белка","белочка","бельчёнок","","","","","","",""]),new o.Word(67,"wolf","[уулф]",["волк","","","","","","","","",""]),new o.Word(68,"goose","[гу:с]",["гусь","geese - гуси - мн. число","","","","","","","",""]),new o.Word(69,"giraffe","[джирА:ф]",["жираф","","","","","","","","",""]),new o.Word(70,"rabbit","[рЭбит]",["кролик","заяц","","","","","","","",""]),new o.Word(71,"cow","[кАу]",["корова","","","","","","","","",""]),new o.Word(72,"rat","[рЭт]",["крыса","","","","","","","","",""]),new o.Word(73,"fox","[фокс]",["лиса","лисица","","","","","","","",""]),new o.Word(74,"horse","[хо:рс]",["лошадь","лошадка","","","","","","","",""]),new o.Word(75,"frog","[фрог]",["лягушка","","","","","","","","",""]),new o.Word(76,"bear","[бЭэр]",["медведь","","","","","","","","",""]),new o.Word(77,"mouse","[мАус]",["мышь","mice - мыши - мн. число","","","","","","","",""]),new o.Word(78,"monkey","[мАнки]",["обезьяна","","","","","","","","",""]),new o.Word(79,"pig","[пиг]",["свинья","","","","","","","","",""]),new o.Word(80,"elephant","[Элэфэнт]",["слон","","","","","","","","",""]),new o.Word(81,"duck","[дак]",["утка","","","","","","","","",""]),new o.Word(82,"country","[кантри]",["страна","сельская местность","пригород","село","деревня","","","","",""]),new o.Word(83,"plant","[плА:нт]",["растение","завод","сажать","","","","","","",""]),new o.Word(84,"tree","[три:]",["дерево","","","","","","","","",""]),new o.Word(85,"grass","[гра:с]",["трава","","","","","","","","",""]),new o.Word(86,"flower","[флАуэр]",["цветок","","","","","","","","",""]),new o.Word(87,"leaf","[ли:ф]",["лист","лист(дерева)","","","","","","","",""]),new o.Word(88,"flat","[флэт]",["квартира","","","","","","","","",""]),new o.Word(89,"room","[рум]",["комната","","","","","","","","",""]),new o.Word(90,"living room","[лИвинг рум]",["зал","гостинная","","","","","","","",""]),new o.Word(91,"bedroom","[бЭдрум]",["спальня","","","","","","","","",""]),new o.Word(92,"bathroom","[бА:срум]",["ванная","ванная комната","","","","","","","",""]),new o.Word(93,"shower","[шАуэр]",["душ","","","","","","","","",""]),new o.Word(94,"kitchen","[кИтчин]",["кухня","","","","","","","","",""]),new o.Word(95,"hall","[хо:л]",["коридор","холл","","","","","","","",""]),new o.Word(96,"balcony","[бЭлкони]",["балкон","","","","","","","","",""]),new o.Word(97,"floor","[фло:р]",["пол","этаж","","","","","","","",""]),new o.Word(98,"ceiling","[сИ:линг]",["потолок","","","","","","","","",""]),new o.Word(99,"wall","[уО:лрум]",["стена","","","","","","","","",""])]},207:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n(125);r.WordsSecond=[new o.Word(0,"","[]",["","","","","","","","","",""]),new o.Word(100,"toilet","[тОйлит]",["туалет","","","","","","","","",""]),new o.Word(101,"stairs","[стЭэрз]",["ступеньки","лестница","","","","","","","",""]),new o.Word(102,"door","[до:р]",["дверь","","","","","","","","",""]),new o.Word(103,"window","[уИндоу]",["окно","окошко","","","","","","","",""]),new o.Word(104,"windowsill","[уИндоусил]",["подоконник","","","","","","","","",""]),new o.Word(105,"curtain","[кЁртэн]",["занавес","занавеска","штора","","","","","","",""]),new o.Word(106,"switch","[cуИч]",["выключатель","переключать","переключатель","включатель","выключать","включать","","","",""]),new o.Word(107,"socket","[сОкит]",["розетка","","","","","","","","",""]),new o.Word(108,"faucet","[фО:сит]",["кран","водопроводный кран","","","","","","","",""]),new o.Word(109,"pipe","[пайп]",["труба","трубка","","","","","","","",""]),new o.Word(110,"chimney","[чИмни]",["дымовая труба","дымоход","","","","","","","",""]),new o.Word(111,"city","[сИти]",["город","","","","","","","","",""]),new o.Word(112,"house","[хАус]",["здание","дом","","","","","","","",""]),new o.Word(113,"home","[хОум]",["дом","место проживания","","","","","","","",""]),new o.Word(114,"building","[бИлдинг]",["здание","строительство","","","","","","","",""]),new o.Word(115,"place","[плэйс]",["место","помещать","","","","","","","",""]),new o.Word(116,"entrance","[Энтрэнс]",["вход","","","","","","","","",""]),new o.Word(117,"exit","[Эгзит]",["выход","","","","","","","","",""]),new o.Word(118,"center","[сЭнтэр]",["центр","середина","","","","","","","",""]),new o.Word(119,"yard","[я:рд]",["двор","сад","парк","ярд","","","","","",""]),new o.Word(120,"roof","[чИмни]",["крыша","","","","","","","","",""]),new o.Word(121,"fence","[фэнс]",["забор","","","","","","","","",""]),new o.Word(122,"land","[лэнд]",["земля","участок","","","","","","","",""]),new o.Word(123,"village","[вИлидж]",["деревня","поселок","","","","","","","",""]),new o.Word(124,"school","[ску:л]",["школа","","","","","","","","",""]),new o.Word(125,"university","[юнивЁ:рсити]",["университет","","","","","","","","",""]),new o.Word(126,"theater","[сИ:этэр]",["театр","","","","","","","","",""]),new o.Word(127,"church","[чё:рч]",["церковь","","","","","","","","",""]),new o.Word(128,"restaurant","[рЭстронт]",["ресторан","","","","","","","","",""]),new o.Word(129,"cafe","[кЭфэй]",["кафе","","","","","","","","",""]),new o.Word(130,"hotel","[хоутЭл]",["гостиница","","","","","","","","",""]),new o.Word(131,"bank","[бэнк]",["банк","","","","","","","","",""]),new o.Word(132,"cinema","[сИнэмэ]",["кинотеатр","","","","","","","","",""]),new o.Word(133,"hospital","[хОспитл]",["больница","","","","","","","","",""]),new o.Word(134,"police","[пОлис]",["полиция","","","","","","","","",""]),new o.Word(135,"post office","[пОуст Офис]",["почта","","","","","","","","",""]),new o.Word(136,"station","[стэйшн]",["станция","вокзал","","","","","","","",""]),new o.Word(137,"airport","[Ээпо:рт]",["аэропорт","","","","","","","","",""]),new o.Word(138,"shop","[шоп]",["магазин","","","","","","","","",""]),new o.Word(139,"pharmacy","[фА:рмаси]",["аптека","","","","","","","","",""]),new o.Word(140,"market","[мА:ркит]",["рынок","","","","","","","","",""]),new o.Word(141,"office","[Офис]",["офис","","","","","","","","",""]),new o.Word(142,"company","[кОмпэни]",["компания","фирма","","","","","","","",""]),new o.Word(143,"factory","[фЭктэри]",["предприятие","завод","фабрика","","","","","","",""]),new o.Word(144,"square","[скуЭэр]",["площадь","","","","","","","","",""]),new o.Word(145,"street","[стри:т]",["улица","","","","","","","","",""]),new o.Word(146,"road","[рОуд]",["дорога","","","","","","","","",""]),new o.Word(147,"crossroads","[крОсроудз]",["перекрёсток","","","","","","","","",""]),new o.Word(148,"stop","[стоп]",["остановка","останавливаться","","","","","","","",""]),new o.Word(149,"sidewalk","[сАйдуо:к]",["тротуар","","","","","","","","",""]),new o.Word(150,"path","[па:с]",["тропа","тропинка","","","","","","","",""]),new o.Word(151,"garden","[га:рдн]",["сад","","","","","","","","",""]),new o.Word(152,"park","[па:рк]",["парк","","","","","","","","",""]),new o.Word(153,"bridge","[бридж]",["мост","","","","","","","","",""]),new o.Word(154,"river","[рИвэр]",["река","","","","","","","","",""]),new o.Word(155,"forest","[фОрист]",["лес","","","","","","","","",""]),new o.Word(156,"field","[фи:лд]",["поле","","","","","","","","",""]),new o.Word(157,"mountain","[мАунтин]",["гора","","","","","","","","",""]),new o.Word(158,"lake","[лэйк]",["озеро","","","","","","","","",""]),new o.Word(159,"sea","[си:]",["море","","","","","","","","",""]),new o.Word(160,"ocean","[Оушн]",["океан","","","","","","","","",""]),new o.Word(161,"coast","[кОуст]",["морской берег","побережье","","","","","","","",""]),new o.Word(162,"beach","[би:ч]",["пляж","","","","","","","","",""]),new o.Word(163,"sand","[сэнд]",["песок","","","","","","","","",""]),new o.Word(164,"island","[Айлэнд]",["остров","земля","","","","","","","",""]),new o.Word(165,"border","[бО:рдэр]",["граница","","","","","","","","",""]),new o.Word(166,"customs","[кАстэмз]",["таможня","","","","","","","","",""]),new o.Word(167,"garbage","[гА:рбидж]",["мусор","","","","","","","","",""]),new o.Word(168,"waste","[уэйст]",["отходы","тратить впустую","","","","","","","",""]),new o.Word(169,"stone","[стОун]",["камень","","","","","","","","",""]),new o.Word(160,"furniture","[фЁ:ничэ]",["мебель","","","","","","","","",""]),new o.Word(161,"table","[тэйбл]",["стол","","","","","","","","",""]),new o.Word(162,"chair","[чЭэр]",["стул","","","","","","","","",""]),new o.Word(163,"armchair","[А:рмчээр]",["кресло","","","","","","","","",""]),new o.Word(164,"sofa","[сОуфа]",["диван","","","","","","","","",""]),new o.Word(165,"bed","[бэд]",["кровать","","","","","","","","",""]),new o.Word(166,"wardrobe","[уО:дроуб]",["платяной шкаф","шкаф","","","","","","","",""]),new o.Word(167,"cabinet","[кЭбинэт]",["шкаф","шкафчик","","","","","","","",""]),new o.Word(168,"shelf","[шэлф]",["полка","","","","","","","","",""]),new o.Word(169,"mirror","[мИрор]",["зеркало","","","","","","","","",""]),new o.Word(170,"carpet","[кА:рпит]",["ковер","","","","","","","","",""]),new o.Word(171,"fridge","[фридж]",["холодильник","","","","","","","","",""]),new o.Word(172,"microwave","[мАйкроууэйв]",["микроволновка","","","","","","","","",""]),new o.Word(173,"oven","[Авэн]",["печь","духовка","","","","","","","",""]),new o.Word(174,"stove","[стОув]",["кухонная плита","","","","","","","","",""]),new o.Word(175,"dish","[диш]",["блюдо","dishes [дИшиз]- посуда","","","","","","","",""]),new o.Word(176,"cup","[кап]",["чашка","","","","","","","","",""]),new o.Word(177,"glass","[гла:с]",["стакан","стекло","","","","","","","",""]),new o.Word(178,"mug","[маг]",["кружка","","","","","","","","",""]),new o.Word(179,"plate","[плэйт]",["тарелка","","","","","","","","",""]),new o.Word(180,"spoon","[фЁ:ничэ]",["ложка","","","","","","","","",""]),new o.Word(181,"fork","[тэйбл]",["вилка","","","","","","","","",""]),new o.Word(182,"knife","[чЭэр]",["нож","","","","","","","","",""]),new o.Word(183,"saucer","[А:рмчээр]",["блюдце","","","","","","","","",""]),new o.Word(184,"bottle","[сОуфа]",["бутылка","","","","","","","","",""]),new o.Word(185,"napkin","[бэд]",["салфетка","","","","","","","","",""]),new o.Word(186,"pan","[уО:дроуб]",["кастрюля","","","","","","","","",""]),new o.Word(187,"frying pan","[кЭбинэт]",["сковородка","","","","","","","","",""]),new o.Word(188,"kettle","[шэлф]",["чайник","котел","","","","","","","",""]),new o.Word(189,"meal","[мИрор]",["принятие пищи","еда","","","","","","","",""]),new o.Word(190,"breakfast","[брЭкфэст]",["завтрак","","","","","","","","",""]),new o.Word(191,"lunch","[ланч]",["обед","","","","","","","","",""]),new o.Word(192,"dinner","[дИнэр]",["ужин","","","","","","","","",""]),new o.Word(193,"transport","[трЭнспо:рт]",["перевозить","транспортировать","транспорт","","","","","","",""]),new o.Word(194,"plane","[плэйн]",["самолет","","","","","","","","",""]),new o.Word(195,"car","[ка:р]",["автомобиль","","","","","","","","",""]),new o.Word(196,"tram","[трэм]",["трамвай","","","","","","","","",""]),new o.Word(197,"bus","[бас]",["автобус","","","","","","","","",""]),new o.Word(198,"train","[трэйн]",["поезд","","","","","","","","",""]),new o.Word(199,"ship","[шип]",["корабль","","","","","","","","",""]),new o.Word(200,"bicycle","[бAйсикл]",["велосипед","","","","","","","","",""])]},362:function(e,r){},363:function(e,r){e.exports="<router-outlet></router-outlet>\n"},364:function(e,r){e.exports='<section>\r\n    <div *ngIf="!clickedAnything">\r\n        <div class="container">\r\n            <div class="row">\r\n                <div class="col-12">\r\n                    <div class="row justify-content-center">\r\n                        <div class="col-4 bottom-margin width-size" [style.margin-top]="\'10px\'">\r\n                            <button class="btn btn-dark btn-lg width-size" (click)="goWithFisrtWords()">First words</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class="row justify-content-center">\r\n                        <div class="col-4 bottom-margin width-size">\r\n                            <button class="btn btn-dark btn-lg width-size" (click)="goWithSecondWords()">Second Words</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf="clickedAnything">\r\n        <words [words]="Words"></words>\r\n        <div class="row justify-content-center">\r\n            <button class="btn btn-dark btn-lg col-4 btn btn-dark btn-lg bottom-margin width-size height-element-size"\r\n                    (click)="returnToStart()">Return to start</button>\r\n        </div>\r\n    </div>\r\n\r\n</section>'},365:function(e,r){e.exports='<section>\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-12 word-text">\r\n                <div class="row justify-content-center">\r\n                    <div *ngIf="undefined!==realtime_word">\r\n                        <div class="col-4 bottom-margin width-size height-text-size">{{realtime_word.word}}</div>\r\n                        <div class="col-4 bottom-margin width-size height-text-size">{{realtime_word.transcript}}</div>\r\n                        <div class="col-4 bottom-margin">\r\n                            <input type="text"\r\n                                   (keyup.enter)=\'compareWord(translate)\' class="col-4 bottom-margin width-size text-color height-element-size" #translate>\r\n                        </div>\r\n                        <div class="col-4 bottom-margin">\r\n                            <button class="col-4 btn btn-dark btn-lg bottom-margin width-size height-element-size"\r\n                                    (click)="compareWord(translate)">Click here</button>\r\n                        </div>  \r\n                    </div>\r\n                </div>\r\n                <div class="row justify-content-center">\r\n                    <div class="col-4 bottom-margin width-size height-text-size">\r\n                        Translate: {{complete_word.length}}/{{words.length-1}}\r\n                    </div>\r\n                </div>\r\n                <div *ngIf="!right_translate && answer_clicked">\r\n                    <div class="row justify-content-center">\r\n                        <div class="col-4 bottom-margin bad-translate text-color width-size">\r\n                            You are not right!<br>\r\n                            This translate is right:<br>\r\n                            <div class="right-translate" *ngFor="let transl of realtime_word.translate">{{transl}}</div>\r\n                            <br>You have time to learn this word: {{timer}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf="right_translate && answer_clicked">\r\n                    <div class="row justify-content-center">\r\n                        <div class="col-4 bottom-margin right-translate text-color width-size">\r\n                            Great! You are right! Next word! >>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>'},367:function(e,r){e.exports="\n"},368:function(e,r){e.exports=""},369:function(e,r){e.exports=""},640:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n(93),t=n(18),d=n(198);t.enableProdMode(),o.platformBrowserDynamic().bootstrapModule(d.AppModule)}},[640]);