!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";var o=function(){return"https:"===document.location.protocol?"https://":"http://"}(),r=function(){var e,t=3,n=document.createElement("div");do{n.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e",e=n.getElementsByTagName("i").length>0}while(e);return t>4?t:void 0}(),i=function(e){var t=function(){e=e.toLowerCase();var t=/(maxthon)[ \/]([\w.]+)/.exec(e)||/(ucbrowser)[ \/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&(/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[]);return{browser:t[1]||"",version:t[2]||"0"}}(),n={};return t.browser&&(n[t.browser]=!0,n.version=t.version),n.chrome?n.webkit=!0:n.webkit&&(n.safari=!0),n},a=function(){return i(window.navigator.userAgent)}(),c=function(){var e={};return jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(t,n){e["[object "+n+"]"]=n.toLowerCase()}),e}(),u=function(e){return null==e?String(e):c[Object.prototype.toString.call(e)]||"object"},s=function(e){return"array"===u(e)},l=function(){return(new Date).getTime()},_={parse:function(e){return void 0!==JSON?JSON.parse(e):jQuery.parseJSON(e)},stringify:function(e){var t={};window.Prototype&&(t.array_to_json=Array.prototype.toJSON,delete Array.prototype.toJSON);var n=JSON.stringify(e);return window.Prototype&&(Array.prototype.toJSON=t.array_to_json),n}},d=function(e,t){return jQuery.grep(e,function(e){return e===t}).length},f=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},p=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t},m=function(e){return f(e).length},w=function(){for(var e,t={},n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),o=0;o<n.length;o++)e=n[o].split("="),t[e[0]]=e[1];return t}(),h=function(e){return e in w},y=function(e){return h(e)?w[e]:null},b=function(){var e={};return e.now=new Date,e.end_of_today=new Date(e.now.getTime()),e.end_of_today.setHours(23,59,59,999),e.end_of_month=new Date(e.now.getFullYear(),e.now.getMonth()+1,0),e.end_of_month.setHours(23,59,59,999),e.tomorrow=new Date(e.now.getTime()),e.tomorrow.setDate(e.now.getDate()+1),e.plus_7_days=new Date(e.now.getTime()),e.plus_7_days.setDate(e.now.getDate()+7),e.plus_14_days=new Date(e.now.getTime()),e.plus_14_days.setDate(e.now.getDate()+14),e.plus_28_days=new Date(e.now.getTime()),e.plus_28_days.setDate(e.now.getDate()+28),e.far_future=new Date(2030,11,31),e}(),g=function(e){return new Date(1e3*e)},v=function(e){return encodeURIComponent(e)},x=function(){var e=(new Date).getTime();return"xxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*k())%16|0;return e=Math.floor(e/16),("x"===t?n:7&n|8).toString(16)})},k=function(){return Math.random()},j=function(e){for(var t=e.split("."),n=jQuery.fn.jquery.split("."),o=0;o<n.length;o++){if(n[o]=parseInt(n[o],10),t[o]=parseInt(t[o],10),n[o]>t[o])return!0;if(t[o]>n[o])return!1}return!0},q=function(e,t,n){return j("1.7.0")?jQuery(e).on(t,n):jQuery(e).bind(t,n)},C=function(e){var t="?";for(var n in e)t+=v(n)+"="+v(e[n])+"&";return t.substring(0,t.length-1)},O=function(e,t){var n=document.createElement("img");n.onload=function(){t&&t(null,n)},n.onerror=function(n){var o="error while trying to load cookie-syncing px with url: "+e;t&&t(new Error(o),null)},n.src=e},T=function(e,t,n,o){t=t||{},o=o||!1,n=n||null;var r=!0;if("undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest&&j("1.5.2")){r=!1;var i={};i.url=e,i.type="GET",i.data=t,i.processData=!0,i.cache=!1,i.dataType="text",o&&(i.xhrFields={withCredentials:!0}),null!=n&&(i.success=n),jQuery.ajax(i)}if(r){if(null!=n){var a=("r"+k()).replace(".","");t.cbfnc=a,window[a]=n}t._=k();var c=document.createElement("SCRIPT");c.src=e+C(t),c.type="text/javascript";(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}},D=function(){return window.location.href!==window.parent.location.href?document.referrer:document.location.href},N=function(){return document.referrer};e.exports={protocol:o,ie_version:r,ua_to_browser:i,browser:a,class2type:c,type:u,isArray:s,now:l,json:_,occurrences_in_list:d,dict_keys:f,dict_values:p,dict_size:m,request_params_dict:w,has_request_param:h,get_request_param:y,handy_datetimes:b,unix_timestamp_to_date:g,url_encode:v,generate_uuid:x,random:k,jquery_version_at_least:j,create_query_string:C,insert_pixel:O,ajax_with_fallback:T,current_url:D,previous_url:N,jquery_on:q}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e){var t=function(){var e=o.get_request_param("bm_dts");return null!=e&&(e=o.unix_timestamp_to_date(e))>o.handy_datetimes.now&&i("bm_donor",1,e),null!=c("bm_donor")},n=function(){return null!=o.get_request_param("bm_opted_out")&&i("bm_opted_out",1,o.handy_datetimes.plus_28_days),null!=c("bm_opted_out")},r=function(t){return e.cookie_namespace+t},i=function(e,t,n){e=r(e),void 0===n&&(n=o.handy_datetimes.far_future);var i=t;null===t?i="null":(o.isArray(t)&&(i=t.join(",")),"string"===o.type(i)&&(i=i.replace(/;/g,"___"))),a(e),document.cookie=e+"="+i+"; expires="+n.toUTCString()+"; path=/"},a=function(e){e=r(e),document.cookie=e+"=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/"},c=function(e,t){e=r(e);for(var n=e+"=",i=document.cookie.split(/[;&]/),a="null",c=0;c<i.length;c++){for(var u=i[c];" "===u.charAt(0);)u=u.substring(1,u.length);0===u.indexOf(n)&&(a=u.substring(n.length,u.length))}var s=a;return"null"===a?s=null:("string"===o.type(a)&&(s=a.replace(/___/g,";")),void 0!==t&&("ARRAY"===t?s=s.split(","):"INT"===t?s=parseInt(s):"BOOL"===t&&(s="true"===s))),s};return{get_cookie:c,set_cookie:i,delete_cookie:a,is_legacy_donor:t,is_opted_out:n}}},function(e,t,n){"use strict";var o=n(3),r=n(5)(o),i=n(6)(o),a=n(0);i.report_heartbeat(),a.random()<.001&&r.detect_webrtc_ips(function(e){i.report_webrtc_ips(e.length>=2)}),r.run_tests(!0,function(e,t,n,o){a.random()<.001?r.detect_extensions(function(r){i.report_page_view(e,t,n,o,r)}):i.report_page_view(e,t,n,o),void 0!==window.pf_notify&&jQuery.isFunction(window.pf_notify)&&window.pf_notify(e,n)})},function(e,t,n){"use strict";var o=n(0),r=n(4);e.exports={bait_location:o.protocol+"asset.pagefair.com",whitelisted_bait_location:o.protocol+"asset.pagefair.net",cache_buster:window.bm_cache_buster||r.buster,cookie_namespace:"",bait_namespace:"",website_code:window.bm_website_code,company_code:window.pf_company_code,static_location:o.protocol+(window.bm_static_location||"pagefair.com"),website_location:o.protocol+(window.bm_website_location||"pagefair.com"),stats_location:o.protocol+(window.bm_stats_location||"stats.pagefair.com"),ads_location:o.protocol+(window.bm_ads_location||"adfeed.pagefair.net")}},function(e,t,n){"use strict";e.exports={buster:"{{{{CACHE_BUSTER}}}}/"}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e){function t(e){function t(t){var o=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/,r=/([0-9a-fA-F]){1,4}(:([0-9a-fA-F]){1,4}){7}/;if(-1!==t.indexOf("typ host")&&!r.test(t)){var i=o.exec(t)[1];void 0===n[i]&&e(i),n[i]=!0}}var n={},o=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,r={optional:[{RtpDataChannels:!0}]},i={iceServers:[{urls:["stun:stun.services.mozilla.com"]}]},a=new o(i,r);a.onicecandidate=function(e){e.candidate&&t(e.candidate.candidate)},a.createDataChannel(""),a.createOffer(function(e){a.setLocalDescription(e,function(){},function(){})},function(){}),setTimeout(function(){a.localDescription.sdp.split("\n").forEach(function(e){0===e.indexOf("a=candidate:")&&t(e)})},1e3)}var r,i=n(1)(e),a=function(){return{last_load_status:i.get_cookie("bm_last_load_status")}}(),c={},u=["i_blk","s_blk","div_hid_t0"],s=[],l=["wl_i_blk","wl_div_hid_t0"],_=[],d=function(e){return e.is(":hidden")?1:0},f=function(e,t){var n=o.generate_uuid(),r=document.createElement("IMG"),i=function(t){var r=o.dict_keys(c);if(!(o.occurrences_in_list(r,e+"_blk")>0)){var i=jQuery("#"+n);c[e+"_blk"]=t,i.remove(),b()}};o.browser.safari||o.browser.msie?setTimeout(function(){i(0)},1):(o.jquery_on(r,"load",function(){i(0)}),o.jquery_on(r,"error",function(){i(1)})),r.id=n,r.style.width="1px",r.style.height="1px",r.style.top="-1000px",r.style.left="-1000px",document.body.appendChild(r),r.src=t},p=function(e,t){var n=o.generate_uuid(),r=document.createElement("SCRIPT"),i=function(t){var r=o.dict_keys(c);if(!(o.occurrences_in_list(r,e+"_blk")>0)){var i=jQuery("#"+n);c[e+"_blk"]=t,i.remove(),b()}};o.ie_version<9||o.browser.safari||o.browser.mozilla?setTimeout(function(){i(0)},1):(o.jquery_on(r,"load",function(){i(0)}),o.jquery_on(r,"error",function(){i(1)})),r.id=n,r.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(r),r.src=t},m=function(e,t,n){var r=document.createElement("DIV");r.id=n,r.className=t,r.style.width="1px",r.style.height="1px",r.style.top="-1000px",r.style.left="-1000px",document.body.appendChild(r);var i=jQuery("#"+n),a=d(i);c[e+"_hid_t0"]=o.browser.mozilla?0:a,i.remove(),b()},w=function(){for(var e=0;e<u.length;e++){var t=u[e];if(1===c[t]){for(var n=0;n<s.length;n++)if(t=s[n],1===c[t])return!1;return!0}}return!1},h=function(){for(var e=0;e<l.length;e++){var t=l[e],n=c[t];if(void 0===n||1===n)return!1}return!0},y=!1,b=function(){if(o.dict_size(c)===_.length&&!y){y=!0;for(var e=0;e<_.length;e++)if(void 0===c[_[e]])throw new Error("Invalid test in results: "+_[e]);var t=w(),n=h(),u=t&&"NOT_BLOCKING"===a.last_load_status||!t&&"BLOCKING"===a.last_load_status;i.set_cookie("bm_last_load_status",t?"BLOCKING":"NOT_BLOCKING"),void 0!==r&&jQuery.isFunction(r)&&r(t,n,c,u)}},g=function(t,n){y&&(y=!1,c={}),r=n,_=u.concat(s),t&&(_=_.concat(l),f("wl_i",e.whitelisted_bait_location+"/adimages/textlink-ads.jpg"),m("wl_div","","influads_block")),f("i",e.bait_location+"/adimages/textlink-ads.jpg"),p("s",e.bait_location+"/adimages/adsense.js"),m("div","AdHere",o.generate_uuid())},v=function(e){if(!o.jquery_version_at_least("1.5.1"))return void e();var t={adblock:"chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/img/icon24.png",adblock_plus:"chrome-extension://cfhdojbkjhnklbpkdaibdccddilifddb/block.html",adblock_pro:"chrome-extension://ocifcklkibdehekfnmflempfgjhbedch/components/block/block.html",adblock_premium:"chrome-extension://fndlhnanhedoklpdaacidomdnplcjcpj/img/icon24.png",adblock_super:"chrome-extension://knebimhcckndhiglamoabbnifdkijidd/widgets/block/block.html",adguard:"chrome-extension://bgnkhhnnamicmpeenaelnjfhikgbkllg/elemhidehit.png",adremover:"chrome-extension://mcefmojpghnaceadnghednjhbmphipkb/img/icon24.png",ublock:"chrome-extension://epcnnfbjfcgphgdmggkamkmgojdagdnn/document-blocked.html"},n=[],r=0;for(var i in t)!function(i,a){jQuery.ajax({url:a,success:function(){n.push(i)},complete:function(){(r+=1)===o.dict_size(t)&&e({chrome:n})}})}(i,t[i])},x=function(e){var t=[],n=document.createElement("DIV");n.className="AdHere",n.style.width="1px",n.style.height="1px",n.style.top="-1000px",n.style.left="-1000px",document.body.appendChild(n),setTimeout(function(){var o=window.getComputedStyle(n).getPropertyValue("-moz-binding");o&&-1!==o.indexOf("abp-elemhidehit")&&t.push("adblock_plus"),n.remove&&n.remove(),e({firefox:t})},1e3)};return{run_tests:g,cookies:a,default_probe_names:u,whitelist_probe_names:l,detect_extensions:function(e){o.browser.chrome?v(e):o.browser.mozilla?x(e):e()},detect_chrome_extensions:v,detect_firefox_extensions:x,detect_webrtc_ips:function(e){if(o.browser.chrome||o.browser.mozilla){var n,r=[];t(function(t){r.push(t),n||2!==r.length||(n=!0,e(r))})}}}}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e){var t=n(1)(e),r=function(){return{weekly_unique:t.get_cookie("bm_weekly_unique"),monthly_unique:t.get_cookie("bm_monthly_unique"),daily_unique:t.get_cookie("bm_daily_unique"),sample_frequency:t.get_cookie("bm_sample_frequency","INT")}}(),i=function(){var e=!1;return null===r.monthly_unique&&(t.set_cookie("bm_monthly_unique",!0,o.handy_datetimes.end_of_month),e=!0),e},a=function(){var e=!1;return null==r.weekly_unique&&(t.set_cookie("bm_weekly_unique",!0,o.handy_datetimes.plus_7_days),e=!0),e},c=function(){var e=!1;return null===r.daily_unique&&(t.set_cookie("bm_daily_unique",!0,o.handy_datetimes.end_of_today),e=!0),e},u=function(){var e=t.get_cookie("pl_uuid");if(null!=e)return e;var n=o.generate_uuid();return t.set_cookie("pl_uuid",n,o.handy_datetimes.far_future),n},s=function(e){var n=o.json.parse(e),i=n.sample_frequency;i!==r.sample_frequency&&t.set_cookie("bm_sample_frequency",i,o.handy_datetimes.end_of_today)};return{report_page_view:function(n,l,_,d,f,p){var m=jQuery.extend({},_);p&&(m["2ip"]=1),m.is_ab=n?1:0,m.is_wl=l?1:0,!0===t.is_opted_out()&&(m.opted_out=1);var w=r.sample_frequency;if(d&&(m.p_false=1,w=1),i()&&(m.new_monthly=1,w=1),a()){var h=u();o.insert_pixel("//pixel.onaudience.com/?partner=133&mapped="+h)}if(c()&&(m.new_daily=1,w=1),f&&(m.extensions=o.json.stringify(f),w=1),null!==w&&w>1){if(o.random()>1/w)return;m.smp=w}var y=e.stats_location+"/stats/page_view_event/a.js";void 0!==e.website_code?y=e.stats_location+"/stats/page_view_event/"+e.website_code+"/a.js":(m.company_code=e.company_code,m.domain=window.location.hostname),o.ajax_with_fallback(y,m,s,!0)},get_unique_id:u,report_heartbeat:function(){if(o.random()<.001){var t=e.stats_location+"/stats/heartbeat/";o.ajax_with_fallback(t,{s:1e3})}},cookies:r,cookies_utils:t,report_webrtc_ips:function(t){var n=e.stats_location+"/stats/sectest/";o.ajax_with_fallback(n,{s:1e3,"2ip":t})}}}}]);