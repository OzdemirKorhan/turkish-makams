(function(a){function e(e){for(var n,o,i=e[0],c=e[1],m=e[2],g=0,p=[];g<i.length;g++)o=i[g],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(a[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,m||[]),t()}function t(){for(var a,e=0;e<r.length;e++){for(var t=r[e],n=!0,i=1;i<t.length;i++){var c=t[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),a=o(o.s=t[0]))}return a}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=a,o.c=n,o.d=function(a,e,t){o.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,e){if(1&e&&(a=o(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)o.d(t,n,function(e){return a[e]}.bind(null,n));return t},o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,"a",e),e},o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var m=0;m<i.length;m++)e(i[m]);var u=c;r.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"14de":function(a,e,t){a.exports=t.p+"img/Humayun.217f0a0a.png"},"209b":function(a,e,t){},2643:function(a,e,t){a.exports=t.p+"img/seddi-araban.02fd1139.png"},"26fb":function(a,e,t){a.exports=t.p+"img/Acemasiran.d5b94854.png"},"353a":function(a,e,t){a.exports=t.p+"img/suzi-dil.1d2326fa.png"},"407e":function(a,e,t){"use strict";t("b779")},"45c6":function(a,e,t){a.exports=t.p+"img/home-icon.873a6c35.svg"},"4acf":function(a,e,t){a.exports=t.p+"img/sultaniyegah.c7b80296.png"},"4c16":function(a,e,t){a.exports=t.p+"img/Cargah.5a19b8a0.png"},5525:function(a,e,t){a.exports=t.p+"img/Hicaz.0f2d36ae.png"},5562:function(a,e,t){a.exports=t.p+"img/Huseyni.b6d661f1.png"},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=(t("5c0b"),t("2877")),i={},c=Object(o["a"])(i,s,r,!1,null,null,null),m=c.exports,u=t("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}});var g=t("8c4f"),p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"home"},[t("Homepage")],1)},l=[],d=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"container"},[n("img",{staticClass:"logo",attrs:{src:t("9b19"),alt:""}}),n("p",{staticClass:"subtext"},[a._v(" Turkish Makams is a library of simple and transposed makams in Turkish music, it’s meant to be a database for the people who are in need of a guide while learning. ")]),n("div",{staticClass:"items categories"},a._l(a.categories,(function(e,s){return n("div",{key:e.name,staticClass:"item",on:{click:function(t){return a.route(s,e.url)}}},[n("p",[a._v(a._s(s+1)+". "+a._s(e.name))]),n("img",{attrs:{src:t("f376"),alt:""}})])})),0)])},f=[],h={name:"Homepage",data:function(){return{categories:[{name:"Simple Makams",url:"simple"},{name:"Transposed Makams",url:"transposed"}]}},methods:{route:function(a,e){this.$store.state.chosen_category=this.$store.state.categories[a],Y.push({name:"Makams",params:{url:e}})}}},k=h,v=(t("aa87"),t("407e"),Object(o["a"])(k,d,f,!1,null,"8ae35722",null)),b=v.exports,y={name:"Home",components:{Homepage:b}},x=y,_=Object(o["a"])(x,p,l,!1,null,null,null),z=_.exports,H=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("Makamspage")],1)},w=[],T=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"logo-group"},[n("a",{staticClass:"go-home",on:{click:function(e){return a.goHome()}}},[n("img",{staticClass:"home-icon",attrs:{src:t("45c6"),alt:""}})]),n("img",{staticClass:"logo",attrs:{src:t("9b19"),alt:""}})]),n("p",{staticClass:"subheader"},[a._v(a._s(a.$store.state.chosen_category.name))]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.search,expression:"search"}],attrs:{type:"text"},domProps:{value:a.search},on:{input:function(e){e.target.composing||(a.search=e.target.value)}}}),n("button",[a._v("Search")])]),n("hr"),n("div",{staticClass:"items"},a._l(a.filteredList,(function(e,s){return n("div",{key:e.name,staticClass:"item makam",on:{click:function(t){return a.route(s,e)}}},[n("p",[a._v(a._s(e.name))]),n("img",{attrs:{src:t("b4cd"),alt:""}})])})),0)])},C=[],N=(t("4de4"),t("b0c0"),t("caad"),t("2532"),t("ac1f"),t("841c"),{name:"makams",data:function(){return{search:"",makams:[]}},methods:{route:function(a,e){var t=this;this.$store.state.chosen_makam=this.$store.state.makams.filter((function(a){return a.category===t.$store.state.chosen_category.category}))[a],Y.push({name:"Makam-detail",params:{url:e.name}})},goHome:function(){Y.push({name:"Home"})}},mounted:function(){var a=this;this.makams=this.$store.state.makams.filter((function(e){return e.category===a.$store.state.chosen_category.category}))},computed:{filteredList:function(){var a=this;return this.makams.filter((function(e){return e.name.toLowerCase().includes(a.search.toLowerCase())}))}}}),E=N,M=(t("879b"),Object(o["a"])(E,T,C,!1,null,"51e9f75a",null)),O=M.exports,A={name:"Makams",components:{Makamspage:O}},R=A,$=Object(o["a"])(R,H,w,!1,null,null,null),j=$.exports,B=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("detailpage")],1)},D=[],U=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"logo-group"},[n("a",{staticClass:"go-back",on:{click:function(e){return a.goBack()}}},[n("img",{staticClass:"home-icon",attrs:{src:t("92c1"),alt:""}})]),n("img",{staticClass:"logo",attrs:{src:t("9b19"),alt:""}})]),n("p",{staticClass:"subheader"},[a._v(a._s(a.$store.state.chosen_makam.name))]),n("p",{staticClass:"subtext"},[a._v(" "+a._s(a.$store.state.chosen_makam.text)+" ")]),n("div",{staticClass:"scale-container"},[n("img",{attrs:{src:a.getImg(a.$store.state.chosen_makam.image_url),alt:""}})])])},S=[],F={name:"detailpage",data:function(){return{}},mounted:function(){},methods:{getImg:function(a){return t("cf5a")("./"+a)},goBack:function(){Y.push({name:"Makams",params:{url:this.$store.state.chosen_category.url}})}}},K=F,Z=(t("92ca"),Object(o["a"])(K,U,S,!1,null,"c34e3150",null)),G=Z.exports,P={name:"makamdetail",components:{detailpage:G}},L=P,I=Object(o["a"])(L,B,D,!1,null,null,null),J=I.exports;n["a"].use(g["a"]);var q=[{path:"/",name:"Home",component:z},{path:"/makams/:url",name:"Makams",component:j},{path:"/detail/:url",name:"Makam-detail",component:J}],W=new g["a"]({routes:q}),Y=W,Q=t("2f62");n["a"].use(Q["a"]);var V=new Q["a"].Store({state:{chosen_category:{},chosen_makam:{},makams:[{name:"Çargah",text:"Çârgâh makam consists of a çârgâh pentachord and a çârgâh tetrachord starting on the note gerdâniye (G). Thus, the tonic is C (note çârgâh), the dominant is G (note gerdâniye), and the leading tone is B (note bûselik)",image_url:"Cargah.png",category:0},{name:"Buselik",text:"Buselik makam consists of a Bûselik pentachord plus a Kürdî tetrachord on the note Hüseynî (E) and is essentially the same as the Western A-minor.The tonic is A (Dügâh), the dominant Hüseynî (E), and the leading tone G-sharp (Nim Zirgüle). Additionally, when descending from the octave towards the tonic, the sixth (F, Acem) is sometimes sharpened to become F-sharp (Dik Acem), and the dominant (E, Hüseynî) flattened four commas to the note Hisar (1A)",image_url:"Buselik.png",category:0},{name:"Rast",text:"Rast makam consists of a Rast pentachord plus a Rast tetrachord on the note Neva (D). The tonic is G (Rast), the dominant D (Neva), and the leading tone F-sharp (Irak). However, when descending from the octave towards the tonic, the leading tone is always flattened 4 commas to the note Acem (F), and thus a Bûselik tetrachord replaces the Rast tetrachord.",image_url:"Rast.png",category:0},{name:"Uşşâk",text:"Uşşâk makam consists of an Uşşâk tetrachord plus a Bûselik pentachord on the note Neva (D). The tonic is A (Dügâh), the dominant—here actually a subdominant—is D (Neva), and the leading tone—here actually a subtonic—is G (Rast).",image_url:"Uşşak.png",category:0},{name:"Kürdi",text:"Kürdi makam consists of a Kürdi tetrachord and a Buselik pentachord starting on the note Neva (D).",image_url:"kurdi.png",category:0},{name:"Neva",text:"Neva makam consists of a Uşşak tetrachord and a Rast pentachord starting on the note Neva (D).",image_url:"Neva.png",category:0},{name:"Hümayun",text:"Hümayun makam consists of a Hicaz tetrachord and a Buselik pentachord starting on the note Neva (D).",image_url:"Humayun.png",category:0},{name:"Hicaz",text:"Hicaz makam consists of a Hicaz tetrachord and a Rast pentachord starting on the note Neva (D).",image_url:"Hicaz.png",category:0},{name:"Uzzal",text:"Uzzal makam consists of a Hicaz pentachord and a Uşşak tetrachord starting on the note Hüseyni (E).",image_url:"Uzzal.png",category:0},{name:"Zirgüleli Hicaz",text:"Zirgüleli Hicaz makam consists of a Hicaz pentachord and a Hicaz tetrachord starting on the note Hüseyni (E).",image_url:"Zirguleli-hicaz.png",category:0},{name:"Hüseyni",text:"Hüseyni makam consists of a Hüseyni pentachord and a Uşşak tetrachord starting on the note Hüseyni (E).",image_url:"Huseyni.png",category:0},{name:"Karcığar",text:"Karcığar makam consists of a Uşşak tetrachord and a Hicaz pentachord starting on the note Neva (D).",image_url:"karcigar.png",category:0},{name:"Basit Suzinak",text:"Basit Suzinak makam consists of a Rast pentachord and a Hicaz tetrachord starting on the note Neva (D).",image_url:"basit-suzinak.png",category:0},{name:"Acemaşıran",text:"Acemaşıran makam is a transposed version of Çargah makam starting on the note Acemaşıran (F)",image_url:"Transposed/Acemasiran.png",category:1},{name:"Mahur",text:"Mahur makam is a transposed version of Çargah makam starting on the note Rast (G)",image_url:"Transposed/Mahur.png",category:1},{name:"Nihavent ",text:"Nihavent makam is a transposed version of Buselik makam starting on the note Rast (G)",image_url:"Transposed/Nihavent.png",category:1},{name:"Ruhnevâz",text:"Ruhnevâz makam is a transposed version of Buselik makam starting on the note Hüseynîaşiran (E)",image_url:"Transposed/Ruhnevaz.png",category:1},{name:"Sultaniyegâh",text:"Sultaniyegâh makam is a transposed version of Buselik makam starting on the note Yegâh (D)",image_url:"Transposed/sultaniyegah.png",category:1},{name:"Kürdilihicazkâr",text:"Kürdilihicazkâr makam is a transposed version of Kürdi makam starting on the note Rast (G)",image_url:"Transposed/kurdilihicazkar.png",category:1},{name:"Aşk’efzâ",text:"Aşk’efzâ makam is a transposed version of Kürdi makam starting on the note Hüseynîaşiran (E)",image_url:"Transposed/askefza.png",category:1},{name:"Evcârâ",text:"Evcârâ makam is a transposed version of Zirgüleli Hicaz makam starting on the note Nim Hicaz (F#)",image_url:"Transposed/Evcara.png",category:1},{name:"Sûz-i Dil",text:"Sûz-i Dil makam is a transposed version of Zirgüleli Hicaz makam starting on the note Hüseynîaşiran (E)",image_url:"Transposed/suzi-dil.png",category:1},{name:"Şedd-i Arabân",text:"Şedd-i Arabân makam is a transposed version of Zirgüleli Hicaz makam starting on the note Acemaşıran (F)",image_url:"Transposed/seddi-araban.png",category:1}],categories:[{name:"Simple Makams",category:0},{name:"Transposed Makams",category:1}]},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:Y,store:V,render:function(a){return a(m)}}).$mount("#app")},"5c0b":function(a,e,t){"use strict";t("9c0c")},"5f2a":function(a,e,t){a.exports=t.p+"img/Neva.4091f334.png"},6463:function(a,e,t){a.exports=t.p+"img/Evcara.6293d06d.png"},8587:function(a,e,t){a.exports=t.p+"img/Buselik.d18e412c.png"},"879b":function(a,e,t){"use strict";t("209b")},8821:function(a,e,t){a.exports=t.p+"img/hicazkar.c58e685b.png"},"8ce8":function(a,e,t){a.exports=t.p+"img/Ruhnevaz.4ecf60be.png"},"8e2a":function(a,e,t){a.exports=t.p+"img/Mahur.92c883d6.png"},"92c1":function(a,e,t){a.exports=t.p+"img/back-icon.531faa02.svg"},"92ca":function(a,e,t){"use strict";t("c89f")},"9b19":function(a,e,t){a.exports=t.p+"img/logo.a8c4a8cf.svg"},"9c0c":function(a,e,t){},a152:function(a,e,t){a.exports=t.p+"img/karcigar.b05da6ce.png"},a2cb:function(a,e,t){a.exports=t.p+"img/askefza.1c7daef5.png"},aa87:function(a,e,t){"use strict";t("adc6")},adc6:function(a,e,t){},b05d:function(a,e,t){a.exports=t.p+"img/kurdi.551e61e4.png"},b11c:function(a,e,t){a.exports=t.p+"img/Uşşak.2736c1f8.png"},b4cd:function(a,e,t){a.exports=t.p+"img/note-icon.4fb352dc.svg"},b6d5:function(a,e,t){a.exports=t.p+"img/Nihavent.b354c7d7.png"},b779:function(a,e,t){},c89f:function(a,e,t){},cd4a:function(a,e,t){a.exports=t.p+"img/kurdilihicazkar.2394b415.png"},cdf3:function(a,e,t){a.exports=t.p+"img/Zirguleli-hicaz.719fb64e.png"},cf5a:function(a,e,t){var n={"./Buselik.png":"8587","./Cargah.png":"4c16","./Hicaz.png":"5525","./Humayun.png":"14de","./Huseyni.png":"5562","./Neva.png":"5f2a","./Rast.png":"edae","./Transposed/Acemasiran.png":"26fb","./Transposed/Evcara.png":"6463","./Transposed/Mahur.png":"8e2a","./Transposed/Nihavent.png":"b6d5","./Transposed/Ruhnevaz.png":"8ce8","./Transposed/askefza.png":"a2cb","./Transposed/hicazkar.png":"8821","./Transposed/kurdilihicazkar.png":"cd4a","./Transposed/seddi-araban.png":"2643","./Transposed/sultaniyegah.png":"4acf","./Transposed/suzi-dil.png":"353a","./Uzzal.png":"e686","./Uşşak.png":"b11c","./Zirguleli-hicaz.png":"cdf3","./basit-suzinak.png":"d24a","./karcigar.png":"a152","./kurdi.png":"b05d"};function s(a){var e=r(a);return t(e)}function r(a){if(!t.o(n,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return n[a]}s.keys=function(){return Object.keys(n)},s.resolve=r,a.exports=s,s.id="cf5a"},d24a:function(a,e,t){a.exports=t.p+"img/basit-suzinak.7b9282c4.png"},e686:function(a,e,t){a.exports=t.p+"img/Uzzal.e2ffc7a7.png"},edae:function(a,e,t){a.exports=t.p+"img/Rast.50ddf26a.png"},f376:function(a,e,t){a.exports=t.p+"img/scale-icon.b2fa8de9.svg"}});
//# sourceMappingURL=app.c5366404.js.map