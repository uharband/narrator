(function(d){if(!window.SUPJQ){window.SUPJQ=d}if(!window.Zoomd){window.Zoomd={}}if(!Zoomd.Widget){Zoomd.Widget={}}Zoomd.Widget.SU_BaseUrlServiceHttp="http://zdwidget3-bs.sphereup.com/";Zoomd.Widget.SU_LoggerServiceHttp="http://zdlogs.sphereup.com/";Zoomd.Widget.SU_BaseUrlContentHttp="http://60a6ae725fca.bitsngo.net/";var n={"IsHidden":false,"Version":"3.0","LightBox":true,"SiteWidth":900,"InjectActionsToClient":false,"AdPlacements":"[{\"name\":\"MD\",\"settings\":{\"height\":\"250px\"}},{\"name\":\"SR\",\"settings\":{\"position\":0,\"height\":\"93px\"}},{\"name\":\"SR\",\"settings\":{\"position\":4,\"height\":\"93px\"}},{\"name\":\"SR\",\"settings\":{\"position\":8,\"height\":\"93px\"}}]","Alignment":"right","PlaceHolder":"חפשו באתר","Language":"heb","ForceNewJquery":false,"EventsTargetsMappings":[{"match":{"action":"*","itemType":"*"},"targets":[{"type":"EventHubs"}]}]};Zoomd.Widget.UserOptions=n;var p={};p.injectionSettings={clientId:"93896527",userId:"7f9d0773-f508-4066-ad03-8e916e4b6912",abGroup:"0",clientIpAddress:"192.118.78.198"};var r={min:".min",widgetVersion:"4.0.v20171114080224.083321",injectorVersion:"2.0",templatesVersion:"bcea1d72-1e26-4cfe-9bb8-66772ee629ef",logglyKey:"2f471b20-4cdf-4a0b-ba5b-dcaeb14206d2",logglyTag:"Widget-js",environment:"Production-alt",poweredBy:"Zoomd",powerByImage:"data:image/png;base64,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",powerByLink:"http://www.zoomd.com/",dfpId:"42020482",thirdPartyVersion:"4.0.v201708221955",vendorVersion:"ng-2.3.1.00",baseVersion:"3.0",TraceLevel:{DEBUG:1,INFO:2,WARNING:3,ERROR:4},traceLevel:null,initCallbackSettings:[],serverSettingLoaded:false,domReady:false,isWidgetReady:false,startDate:new Date(),timestamp:2518916426950564047,initialToken:{"token":"SharedAccessSignature sr=prod-sb-appanalytics-us1.servicebus.windows.net&sig=DVh3JNx3YMR%2bbj%2fWsDfspXKqKZzWdfCX21D3JSaq6EA%3d&se=1510659021&skn=all","expires":"1510658720562"},partialyLoaded:null,widgetAction:null,optimized:false,eventHubsEndpoint:"https://prod-sb-appanalytics-us1.servicebus.windows.net/usagelogs",Loggers:{Coralogix:0,Loggly:1,Both:2},logger:0};r.traceLevel=r.TraceLevel.WARNING;p.internalConfig=r;p.getZoomdMainElement=function(){var s=d("input[type=text][zoomdId]");if(s.length==0){s=d("input[type=search][zoomdId]")}if(s.length==0){s=d("[zoomdId]").first()}if(s.length==1){return s}if(s.length>1){return s.first()}else{return false}};if(!window.SphereUp){window.SphereUp={};SphereUp.SphereUpWidget=Zoomd.Widget;SphereUp.SphereUpWidget.defaultOptions=r}var o={};o.LogError=function(s,t){o.sendLog(s,"ERROR",t)};o.getBrowserName=function(){var u=navigator.appName,t=navigator.userAgent,s;var v=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(v&&(s=t.match(/version\/([\.\d]+)/i))!=null){v[2]=s[1]}v=v?[v[1],v[2]]:[u,navigator.appVersion,"-?"];return v[0].toLowerCase()};o.dppx=function(){var x=function(B,z,A){var y=window.matchMedia;while(B>=z&&!y("(min-resolution: "+(B/A)+"dppx)").matches){B--}return B};var v=5;var u=0.1;var w=1;var s;for(var t=0;t<5;t++){s=10*x(v,u,w);v=s+9;u=s;w*=10}return s/w};o.getZoom=function(){var t=o.getBrowserName();var u=new Object();u.zoom=1;u.zoomf=u.zoom;u.width=window.screen.width;u.height=window.screen.height;if(t=="firefox"){u.zoom=o.dppx()}else{if(t=="chrome"||t=="safari"){u.zoom=(window.outerWidth-8)/window.innerWidth}else{if(t=="msie"){var s=(document.frames||window.frames).screen;u.zoom=((((s.deviceXDPI/s.systemXDPI)*100+0.9).toFixed())/100)}}}return u.zoom.toFixed(2)*100};o.getQueryStringParamByName=function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?&]"+t+"=([^&#]*)";var v=new RegExp(s,"i");var u=v.exec(window.location.search);if(u==null){return""}else{return decodeURIComponent(u[1].replace(/\+/g," "))}};o.IsHiddenCheck=function(){return p.injectionSettings.IsHidden&&o.getQueryStringParamByName("showsphereup")!="1"};if(location.protocol.indexOf("https")>=0){Zoomd.Widget.SU_BaseUrlServiceHttp=Zoomd.Widget.SU_BaseUrlServiceHttp.replace("http:","https:");Zoomd.Widget.SU_BaseUrlContentHttp=Zoomd.Widget.SU_BaseUrlContentHttp.replace("http:","https:");Zoomd.Widget.SU_LoggerServiceHttp=Zoomd.Widget.SU_LoggerServiceHttp.replace("http:","https:")}n.ForceNewJquery=n.ForceNewJquery||(d&&h(d.fn.jquery,"1.9.1")<0);if(d&&!n.ForceNewJquery){d.fn.zoomdSearch=b;d.fn.internalZoomdSearch=j;l();k()}Zoomd.Widget.loadZoomdSearch=function(t,s){r.initCallbackSettings.push({elements:t,settings:s})};function l(){if(n){if(n.InjectionSettings){var t=n.InjectionSettings;d.each(t,function(w,x){if(d(w).length>0){d(w).internalZoomdSearch(x)}else{r.initCallbackSettings.unshift({elements:w,settings:x})}});r.serverSettingLoaded=true;delete n.InjectionSettings}else{r.serverSettingLoaded=true}if(document.URL.indexOf(Zoomd.Widget.SU_BaseUrlServiceHttp)>=0){var s=o.getQueryStringParamByName("os",document.URL);if(s){try{var u=JSON.parse(s);p.injectionSettings=d.extend(p.injectionSettings,u)}catch(v){}}}p.injectionSettings=d.extend({},n,p.injectionSettings)}}function m(){if(!d||n.ForceNewJquery){d=SUPJQ;d.fn.zoomdSearch=b;d.fn.internalZoomdSearch=j;l();k()}e()}function e(){if(r.serverSettingLoaded){q();d(document).ready(function(){if(r.initCallbackSettings){d.each(r.initCallbackSettings,function(s,t){d(t.elements).internalZoomdSearch(t.settings)})}g();r.domReady=true})}else{setTimeout(e,100)}}function g(){d("[zoomdSearch]").each(function(){var s={};var u=d(this).attr("zoomdSearch");u=u.replace(/([a-zA-Z0-9]+):/g,'"$1":').replace(/'/g,'"');try{s=JSON.parse(u)}catch(t){}d(this).internalZoomdSearch(s)})}function q(){if(!r.domReady){o.trace("in initOnPageInjectionChecks",r.TraceLevel.DEBUG);var s=[];if(r.initCallbackSettings){d.each(r.initCallbackSettings,function(t,u){if(d(u.elements).length){d(u.elements).internalZoomdSearch(u.settings)}else{s.push(u)}});r.initCallbackSettings=s}if(d("[zoomdSearch]").length){g()}if((r.initCallbackSettings&&r.initCallbackSettings.length)||!d("[zoomdSearch]").length){setTimeout(q,100)}}}function b(s){if(r.domReady){this.internalZoomdSearch(s)}else{if(r.serverSettingLoaded){r.initCallbackSettings.push({elements:this,settings:s})}else{setTimeout(function(){b(s)},100)}}}function f(s){if(!o.IsHiddenCheck()&&(r.isWidgetReady||r.partialyLoaded)){s.preventDefault();r.widgetAction(this,s)}}function a(v,u){var s="[zoomdId="+d(u).attr("zoomdId")+"]";var t=d(u).data("zd-event-mini-disc");p.injectionSettings[d(u).attr("zoomdId")]=d.extend({entryPoint:"mini-discovery"},p.injectionSettings[d(u).attr("zoomdId")]);if(v!=t){if(t){d(u).off(t)}d(u).data("zd-event-mini-disc",v);d(document).on(v,s,f)}}function j(s){return this.each(function(){if(!d(this).is("[zoomdId]")){d(this).attr("zoomdId","zd-id-"+Math.floor(Math.random()*99999))}if(s){p.injectionSettings[d(this).attr("zoomdId")]=d.extend(s,p.injectionSettings[d(this).attr("zoomdId")])}var C="[zoomdId="+d(this).attr("zoomdId")+"]";var w=p.injectionSettings[d(this).attr("zoomdId")].trigger||p.injectionSettings.trigger;var y=p.injectionSettings[d(this).attr("zoomdId")].MiniDiscovery;if(y&&(n.MiniDiscoverySettings||p.injectionSettings.MiniDiscoverySettings)){p.injectionSettings[d(this).attr("zoomdId")]["initInjection"]=p.injectionSettings[d(this).attr("zoomdId")];var B=p.injectionSettings[d(this).attr("zoomdId")].forInput;if(!d(C).is("input[type=text]")&&!d(C).is("input[type=search]")){w="OnClick";a("mouseenter.md"+d(this).attr("zoomdId"),this)}else{if(w=="OnClick"||w=="OnHover"){w="OnEnter";a("tap.md"+d(this).attr("zoomdId"),this)}}}if(!y){if(p.injectionSettings[d(this).attr("zoomdId")]["initInjection"]){if(p.injectionSettings[d(this).attr("zoomdId")]["initInjection"].MiniDiscovery!=false){p.injectionSettings[d(this).attr("zoomdId")]["initInjection"].MiniDiscovery=false}p.injectionSettings[d(this).attr("zoomdId")]=p.injectionSettings[d(this).attr("zoomdId")]["initInjection"];var v=d(this).data("zd-event-mini-disc");var z=d(this).data("zd-event");d(document).off(v,C,f);d(document).off(z,C,f)}}var u="tap";switch(w){case"OnHover":u="mouseenter , touchend";break;case"OnEnter":u="keyup";break;case"OnType":o.trace("OnType trigger is not supported",r.TraceLevel.WARNING);u="keyup";break}var x=d(this).data("zd-event");if(u!=x){if(x){d(this).off(x,i)}d(this).data("zd-event",u);d(document).on(u,C,i)}if(!r.isWidgetReady&&!d(this).data("zd-progress-event")&&!o.IsHiddenCheck()){if(!n.HideProgress){var t=d(this).wrap("<span class='zd-progress'></span>").parent();if(d(this).css("direction")=="rtl"){d(t).addClass("zd-rtl")}d(t).append('<span class="zd-loader"></span>')}var A="tap";if(d(this).is('input[type="text"],input[type="search"]')){A="keyup"}d(this).data("zd-progress-event",A).attr("zd-progress","enabled");d(document).on(A,C,c)}})}function i(s){if((s.type!="keyup"||(s.keyCode||s.which)==13)&&!o.IsHiddenCheck()){if(r.isWidgetReady){s.preventDefault();r.widgetAction(this,s)}else{if(r.partialyLoaded&&d(this).data("zd-event-mini-disc")){f(s)}}}}function c(s){if((s.type!="keyup"||(s.keyCode||s.which)==13)&&!o.IsHiddenCheck()){s.preventDefault();if(!r.isWidgetReady){d(this).parent().addClass("active");d(this).attr("zd-progress","active")}if(r.partialyLoaded){r.widgetAction(this,s)}}}p.widgetReady=function(s,t){if(!r.isWidgetReady){r.isWidgetReady=!t;r.widgetAction=s;r.partialyLoaded=t;d("[zd-progress]").each(function(){var u=d(this).attr("zd-progress")==="active";if(!t){if(d(this).data("zd-progress-event")){d(this).off(d(this).data("zd-progress-event"),c)}d(this).removeAttr("zd-progress");if(!n.HideProgress){var x=d(this).parent();d(x).removeClass("active");d(this).detach();d(x).after(d(this));d(x).remove()}}if(u){var v=d(this).data("zd-event").split(" ")[0];var w=jQuery.Event(v,{keyCode:13});d(this).trigger(w)}})}};function k(){var s=["zoomdSearch:loading","zoomdSearch:partiallyLoaded","zoomdSearch:loaded","zoomdSearch:opened","zoomdSearch:search","zoomdSearch:noResultsShown","zoomdSearch:resultsShown","zoomdSearch:resultExpanded","zoomdSearch:resultCollapsed","zoomdSearch:closed"];for(var t in s){d.event.special[s[t]]={setup:function(){}}}}p.raiseEvent=function(u){var t=u.event;var s=p.getZoomdMainElement();if(s){s.trigger(t,u)}else{d(document).trigger(t,u)}};p.getInjectionSettings=function(u,t){var s=p.injectionSettings[d(u).attr("zoomdId")];return s?(s[t]||p.injectionSettings[t]):p.injectionSettings[t]};function h(v,t){if(v===t){return 0}var x=v.split(".");var u=t.split(".");var s=Math.min(x.length,u.length);for(var w=0;w<s;w++){if(parseInt(x[w])>parseInt(u[w])){return 1}if(parseInt(x[w])<parseInt(u[w])){return -1}}if(x.length>u.length){return 1}if(x.length<u.length){return -1}return 0}o.loadScript=function(w,t,x,v){o.trace("loading script:"+w,r.TraceLevel.DEBUG);var s=null;if(t!="css"){if(t=="JQuery"&&!n.ForceNewJquery){if(window.jQuery!=undefined){var u=h(window.jQuery.fn.jquery,"1.9.1");if(u==1||u==0){o.trace("script already loaded: "+w,r.TraceLevel.DEBUG);SUPJQ=window.jQuery;if(!window.jQuery){window.jQuery=SUPJQ}x&&x();return}}}else{if(t=="EASYXDM"){if(typeof easyXDM!="undefined"){o.trace("script already loaded: "+w,r.TraceLevel.DEBUG);x();return}}else{if(t=="JSON2"){if(typeof JSON!="undefined"){o.trace("script already loaded: "+w,r.TraceLevel.DEBUG);x&&x();return}}else{if(typeof(v)==="function"){if(v()){o.trace("script already loaded: "+w,r.TraceLevel.DEBUG);x&&x();return}}}}}s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",w);s.setAttribute("async","async");s.setAttribute("charset","utf-8")}else{if(typeof(v)==="function"){if(v()){o.trace("css already loaded: "+w,r.TraceLevel.DEBUG);x&&x();return}}o.trace("load css",r.TraceLevel.DEBUG);if(o.isSafariBrowser()){o.trace("load css - safary",r.TraceLevel.DEBUG);o.loadStyleSheet(w,x,this);return}else{o.trace("load css - all others",r.TraceLevel.DEBUG);s=document.createElement("link");s.setAttribute("rel","stylesheet");s.setAttribute("type","text/css");s.setAttribute("href",w)}}if(s.readyState){o.trace("load css - script.readyState",r.TraceLevel.DEBUG);s.onreadystatechange=function(y){if(this.readyState=="complete"||this.readyState=="loaded"){s.onload=s.onreadystatechange=null;if(t=="JQuery"){SUPJQ=window.jQuery.noConflict(true);if(!window.jQuery){window.jQuery=SUPJQ}}x&&x()}}}else{o.trace("load css - script.onload",r.TraceLevel.DEBUG);s.onload=function(y){if(t=="JQuery"){SUPJQ=window.jQuery.noConflict(true);if(!window.jQuery){window.jQuery=SUPJQ}}x&&x()}}(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(s)};o.trace=function(s,t){if(typeof(t)==="undefined"){t=r.TraceLevel.DEBUG}if(typeof window.console!=="undefined"&&window.console!==null){if(t>=r.traceLevel){s=new Date().timeNow()+" "+s;console.log(s)}}};o.isSafariBrowser=function(){if(navigator.userAgent.indexOf("Firefox")!=-1&&parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")+8))>=3.6){return false}else{if(navigator.userAgent.indexOf("Chrome")!=-1&&parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf("Chrome")+7).split(" ")[0])<15){return true}else{if(navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Version")!=-1&&parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf("Version")+8).split(" ")[0])>=5){return true}else{if(navigator.userAgent.indexOf("Android")!=-1&&navigator.userAgent.indexOf("Chrome")!=-1){return true}}}}return false};o.loadStyleSheet=function(A,v,z){var w=document.getElementsByTagName("head")[0],u=document.createElement("link");u.setAttribute("href",A);u.setAttribute("rel","stylesheet");u.setAttribute("type","text/css");var t,s;if("sheet" in u){t="sheet";s="cssRules"}else{t="styleSheet";s="rules"}var y=setInterval(function(){try{if(u[t]&&u[t][s].length){clearInterval(y);clearTimeout(x);v&&v.call(z||window,true,u)}}catch(B){}finally{}},10),x=setTimeout(function(){clearInterval(y);clearTimeout(x)},15000);w.appendChild(u);return u};Date.prototype.timeNow=function(){return((this.getHours()<10)?"0":"")+this.getHours()+":"+((this.getMinutes()<10)?"0":"")+this.getMinutes()+":"+((this.getSeconds()<10)?"0":"")+this.getSeconds()};o.loadScript(Zoomd.Widget.SU_BaseUrlContentHttp+"content/zd_w_s_loading.css?ver="+r.widgetVersion,"css",function(){o.trace("css loaded",r.TraceLevel.DEBUG)});o.loadScript("http"+(location.protocol.indexOf("https")>=0?"s":"")+"://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js","JQuery",function(){o.loadScript(Zoomd.Widget.SU_BaseUrlContentHttp+"common-scripts/jquery.tap.min.js","JQueryTap",function(){m();initTapPlugin(document,SUPJQ||d)},function(){return r.optimized&&typeof window.initTapPlugin!="undefined"});o.loadScript(Zoomd.Widget.SU_BaseUrlContentHttp+"widget-scripts/zoomd.widget.loader"+r.min+".js?ver="+r.widgetVersion,"JQueryTap",function(){initWidget(SUPJQ||d,o,p)},function(){return r.optimized&&typeof window.initWidget!="undefined"})})})(window.jQuery);