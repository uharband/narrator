(function(){var window=this;var d=this,f=function(a){return"string"==typeof a},aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ca=function(){var a=g,b=k;if(f(a))return f(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=function(a){return Array.prototype.concat.apply([],arguments)};var m=function(){this.a="";this.b=ea};m.prototype.s=!0;m.prototype.j=function(){return this.a};var fa=function(a){return a instanceof m&&a.constructor===m&&a.b===ea?a.a:"type_error:TrustedResourceUrl"},ea={},ha=function(a){var b=new m;b.a=a;return b};var q=function(){this.l="";this.A=ia};q.prototype.s=!0;q.prototype.j=function(){return this.l};var ja=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ia={},ka=function(a){var b=new q;b.l=a;return b};ka("about:blank");var r;a:{var la=d.navigator;if(la){var ma=la.userAgent;if(ma){r=ma;break a}}r=""};var t=function(a){t[" "](a);return a};t[" "]=aa;var u=function(){return d.googletag||(d.googletag={})};var w={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:0,17:0,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,57:0,58:1,159:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:0,73:.001,74:0,75:"",162:0,163:"",76:"",77:.001,78:0,88:1,79:1,81:.001,83:1E-4,84:0,85:0,87:.2,89:1,90:0,91:0,96:1,97:0,99:.01,101:.001,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-13",107:"1-0-13",110:0,113:1,114:0,115:.01,116:.001,117:.01,118:.95,123:0,120:0,124:.95,121:0,169:0,122:.01,125:.01,126:0,127:.001,129:0,131:"",132:0,156:.05,133:0,134:.01,135:0,137:.001,167:1,138:"",143:.001,168:1E-4,144:.001,141:1,151:.01,157:.05,158:.001,164:.05,150:"",153:.05,154:1,165:1,166:1,179:0,170:!1,160:21061310,176:.01,177:.01,152:[],171:.01,172:null,175:"[21061296, 21061297, 21061298, 21061299, 21061310, 21061311, 21061312, 21061313]",178:.001,180:null};w[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);w[49]=(new Date).getTime();w[36]=/^true$/.test(!1);w[46]=/^true$/.test(!1);w[148]=/^true$/.test(!1);var x=function(){var a={},b;for(b in w)a[b]=w[b];this.a=a};x.prototype.get=function(a){return this.a[a]};x.prototype.set=function(a,b){this.a[a]=b};x.b=void 0;x.a=function(){return x.b?x.b:x.b=new x};var na=["21060621","21060622","21060833","21060713"],oa=["21061212","21061213","21061214","21061277"],pa=x.a().a,qa=u(),ra=qa._vars_,sa;for(sa in ra)pa[sa]=ra[sa];qa._vars_=pa;var ta=function(){return"167"},ua=u();ua.hasOwnProperty("getVersion")||(ua.getVersion=ta);var va=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var wa=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var ya=function(){var a=d;this.b=a=void 0===a?d:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.f=[];this.o=!1;a:{var b=[d.top];a=[];for(var c=0,e;e=b[c++];){a.push(e);try{if(e.frames)for(var h=e.frames.length,n=0;n<h&&50>b.length;++n)b.push(e.frames[n])}catch(M){}}b:{try{var v=d.parent;if(v&&v!=d){var l=v;break b}}catch(M){}l=null}(h=l)&&a.unshift(h);a.unshift(d);var p;for(h=0;h<a.length;++h)try{var E=a[h],Ha=y(E);if(Ha){this.a=xa(Ha);if(2!=this.a)break a;var O;if(O=!p){l=void 0;try{if(l=!!E&&null!=E.location.href)c:{try{t(E.foo);l=!0;break c}catch(M){}l=!1}O=l}catch(M){O=!1}}O&&(p=E)}}catch(M){}this.b=p||this.b}},z=function(a){if(2!=za(a)){for(var b=1==za(a),c=0;c<a.f.length;c++)try{a.f[c](b)}catch(e){}a.f=[]}},Aa=function(a){var b=y(a.b);b&&2==a.a&&(a.a=xa(b))},za=function(a){Aa(a);return a.a},Ca=function(a){var b=Ba;b.f.push(a);if(2!=b.a)z(b);else if(b.o||(wa(b.b,function(a){var c=y(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}z(b)}}),b.o=!0),y(b.b))z(b);else{a=b.b.document.createElement("iframe");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){Aa(b);z(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},Da=function(a,b){try{return!!a.frames[b]}catch(c){return!1}},y=function(a){return a.frames[t("detect_3p_cookie")]||null},xa=function(a){return Da(a,"3p_cookie_yes")?1:Da(a,"3p_cookie_no")?0:2};var A=null;var Ea=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=d.navigator&&d.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),Fa=function(a,b){var c="script";c=void 0===c?"":c;var e=a.createElement("link");e.rel="preload";b instanceof m?b=fa(b):b instanceof q?b=b instanceof q&&b.constructor===q&&b.A===ia?b.l:"type_error:SafeUrl":(b instanceof q||(b=b.s?b.j():String(b),ja.test(b)||(b="about:invalid#zClosurez"),b=ka(b)),b=b.j());e.href=b;c&&(e.as=c);(a=a.getElementsByTagName("head")[0])&&a.appendChild(e)};var Ga=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ia=/\.(cn|com\.bi|do|sl)$/,Ja=function(a){return Ga.test(a)&&!Ia.test(a)},B=d,Ba,Ka=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(d.location.hostname)];C[3]>=+new Date&&b.push("adsid="+encodeURIComponent(C[1]));return a+"?"+b.join("&")},C,D,F=function(){B=d;C=B.googleToken=B.googleToken||{};var a=+new Date;C[1]&&C[3]>a&&0<C[2]||(C[1]="",C[2]=-1,C[3]=-1,C[4]="",C[6]="");D=B.googleIMState=B.googleIMState||{};Ja(D[1])||(D[1]=".google.com");"array"==ba(D[5])||(D[5]=[]);"boolean"==typeof D[6]||(D[6]=!1);"array"==ba(D[7])||(D[7]=[]);"number"==typeof D[8]||(D[8]=0)},La=function(a){try{a()}catch(b){d.setTimeout(function(){throw b;},0)}},Na=function(a){"complete"==d.document.readyState||"loaded"==d.document.readyState||d.currentScript&&d.currentScript.async?Ma(3):a()},Oa=0,G={g:function(){return 0<D[8]},m:function(){D[8]++},u:function(){0<D[8]&&D[8]--},v:function(){D[8]=0},c:function(){},w:function(){return!1},i:function(){return D[5]},h:La},H={g:function(){return D[6]},m:function(){D[6]=!0},u:function(){D[6]=!1},v:function(){D[6]=!1},c:function(){},w:function(){return".google.com"!=D[1]&&2<++Oa},i:function(){return D[7]},h:function(a){Na(function(){La(a)})}},Ma=function(a){if(1E-5>Math.random()){d.google_image_requests||(d.google_image_requests=[]);var b=d.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;d.google_image_requests.push(b)}};G.c=function(){if(!G.g()){var a=d.document,b=function(b){var c=Ka("js",b);Fa(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return d.processGoogleToken({},2)};c=ha(c);b.src=fa(c);try{(a.head||a.body||a.documentElement).appendChild(b),G.m()}catch(v){}},c=D[1];b(c);".google.com"!=c&&b(".google.com");b={};var e=(b.newToken="FBT",b);d.setTimeout(function(){return d.processGoogleToken(e,1)},1E3)}};H.c=function(){if(!H.g()){var a=d.document,b=Ka("sync.js",D[1]);Fa(a,b);b=b.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"});var c=t("script"),e="<"+c+' src="'+b+'"></'+c+">"+("<"+c+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Na(function(){a.write(e);H.m()})}};var Pa=function(a,b){F();var c=B.googleToken[5]||0;a&&(0!=c||C[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));C[3]>=+new Date&&C[2]>=+new Date||b.c()},Ra=function(a){d.processGoogleToken=d.processGoogleToken||function(a,c){return Qa(G,a,c)};Pa(a,G)},Sa=function(a){d.processGoogleTokenSync=d.processGoogleTokenSync||function(a,c){return Qa(H,a,c)};Pa(a,H)},Ta=function(a){Ba=Ba||new ya;Ca(function(b){b&&a()})},Qa=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",h=parseInt(b.freshLifetimeSecs||"",10)||3600,n=parseInt(b.validLifetimeSecs||"",10)||86400,v=b["1p_jar"]||"";b=b.pucrd||"";F();1==c?a.v():a.u();if(!e&&a.w())Ja(".google.com")&&(D[1]=".google.com"),a.c();else{var l=B.googleToken=B.googleToken||{},p=!(C[3]>=+new Date)&&0!=c;if(0==c&&e&&f(e)&&0<h&&0<n&&f(v)||p)p=+new Date,h=p+1E3*h,n=p+1E3*n,Ma(c),l[5]=c,l[1]=e,l[2]=h,l[3]=n,l[4]=v,l[6]=b,F();if(e||!a.g()){c=a.i();for(e=0;e<c.length;e++)a.h(c[e]);c.length=0}}};t("partner.googleadservices.com");var Ua=t("www.googletagservices.com"),Va=!1,Wa=!1,I="",J="",K={},Xa=(K["21061282"]="/gpt/pubads_impl_nr_c_",K["21061283"]="/gpt/pubads_impl_nr_",K["21061289"]="/gpt/pubads_impl_moa_c_",K["21061290"]="/gpt/pubads_impl_moa_e_",K),Ya=x.a().get(46)&&!x.a().get(6);I=Ya?"http:":"https:";J=x.a().get(Ya?2:3);var L=function(a,b){var c;if(null===A){A="";try{if(c=d.top.location.hash){var e=c.match(/\bdeid=([\d,]+)/);A=e?e[1]:""}}catch(n){}}if(c=(c=A)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a.length*b)){try{var h=new Uint32Array(1);d.crypto.getRandomValues(h);c=h[0]/65536/65536}catch(n){c=Math.random()}a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var N=u(),P=N.fifWin||window,Q=P.document,Za=[],$a=u();$a.hasOwnProperty("cmd")||($a.cmd=Za);if(N.evalScripts)N.evalScripts();else{switch(L(oa,x.a().get(178))){case "21061213":Wa=!0;break;case "21061214":Va=!0;break;case "21061277":Va=Wa=!0}var R=L(["21061316","21061317"],.01);R&&("21061317"==R?(x.a().set(173,Ua),x.a().set(174,Ua)):x.a().set(163,R),x.a().get(152).push(R));var ab=Q.currentScript,bb;var S=x.a(),T=S.get(76);if(T)bb=T;else{var U=["165","167"],cb=U[0]||"167",V=S.get(131),db="",W,eb="/gpt/pubads_impl_",fb=!1;if(V)"21061297"!==V&&"21061254"!==V&&"21061255"!==V&&(db="?eid="+V),W="167";else if(1<U.length){var X=["21061328","21061329"],g=[""];if(1>=g.length||X.length!=g.length)g=[];var k=L(da(X,g),.1);if(k){S.set(53,k);var gb;gb=0<=ca();S.set(170,gb);gb&&(X=g);if(k==X[0]){var hb=U[X.length-1];db="?v="+hb;S.set(163,hb)}else for(var Y=1;Y<X.length;++Y)if(k==X[Y]){W=U[Y];break}}else fb=!0}else fb=!0;W=W||cb;if(fb){var ib=L(["21061282","21061283"],0),jb=L(["21061289","21061290"],0);ib?(S.get(152).push(ib),W=20171025,eb=Xa[ib]):jb&&(S.get(152).push(jb),W=20171101,eb=Xa[jb])}T=I+"//"+J+eb+W+".js"+db;x.a().set(76,T);bb=T}var kb=bb,lb=Va&&Ea();-1!=r.indexOf("iPhone")&&x.a().set(79,0);var mb=x.a().get(160);mb&&x.a().get(152).push(mb);var Z=x.a().get(138)||L(na,x.a().get(137))||L(["21061149"],x.a().get(167));if(Z)try{var nb=x.a().get(150);nb&&(F(),Ja(nb)&&(D[1]=nb));x.a().set(138,Z)}catch(a){}x.a().set(172,ab);var ob=P.performance;if(ob&&ob.now){var pb=ob.now();(P.google_js_reporting_queue=P.google_js_reporting_queue||[]).push({label:"1",type:9,value:pb,uniqueId:"rt."+Math.random()})}if(!("complete"==Q.readyState||"loaded"==Q.readyState||ab&&ab.async)){var qb="gpt-impl-"+Math.random();try{var rb='<script id="'+qb+'" src="'+kb+'">\x3c/script>';lb&&(rb+='<link rel="preconnect" href="'+I+"//"+J+'">');Q.write(rb);N._syncTagged_=!0}catch(a){}if(Q.getElementById(qb))switch(N._loadStarted_=!0,Z){case "21060833":var sb=va();Ta(sb);Sa(sb);break;case "21060622":case "21060713":case "21061149":Sa(null)}}if(!N._loadStarted_){switch(Z){case "21060833":var tb=va();Ta(tb);Ra(tb);break;case "21060622":case "21060713":case "21061149":Ra(null)}Wa&&Fa(Q,kb);var ub=Q.createElement("script");ub.src=kb;ub.async=!0;var vb=Q.head||Q.body||Q.documentElement;vb.appendChild(ub);if(lb){var wb=Q.createElement("link");wb.rel="preconnect";wb.href=I+"//"+J;vb.appendChild(wb)}N._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
