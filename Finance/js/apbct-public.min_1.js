function apbctAjaxEmailDecode(t){const i=t.target;i.setAttribute("title",ctPublicFunctions.text__wait_for_decoding),i.style.cursor="progress","rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("apbct_decode_email",{data:{encodedEmail:t.target.dataset.originalString},method:"POST",callback:function(e){e.success&&(ctFillDecodedEmail(e.data,t.target),i.setAttribute("title",""),i.removeAttribute("style"))}}):apbct_public_sendAJAX({action:"apbct_decode_email",encodedEmail:t.target.dataset.originalString},{notJson:!0,callback:function(e){e.success&&(ctFillDecodedEmail(e.data,t.target),i.setAttribute("title",""),i.removeAttribute("style"))}})}function ctFillDecodedEmail(e,t){t.innerText=e}function apbct_collect_visible_fields(e){var t,i=[],o="",n=0,c="",a=0,l=[];for(t in e.elements)isNaN(+t)||(i[t]=e.elements[t]);return(i=i.filter(function(e){return-1===l.indexOf(e.getAttribute("name"))&&(-1===["radio","checkbox"].indexOf(e.getAttribute("type"))||(l.push(e.getAttribute("name")),!1))})).forEach(function(e,t,i){"submit"!==e.getAttribute("type")&&null!==e.getAttribute("name")&&"ct_checkjs"!==e.getAttribute("name")&&("none"!==getComputedStyle(e).display&&"hidden"!==getComputedStyle(e).visibility&&"0"!==getComputedStyle(e).opacity&&"hidden"!==e.getAttribute("type")||e.classList.contains("wp-editor-area")?(o+=" "+e.getAttribute("name"),n++):(c+=" "+e.getAttribute("name"),a++))}),c=c.trim(),{visible_fields:o=o.trim(),visible_fields_count:n,invisible_fields:c,invisible_fields_count:a}}function apbct_visible_fields_set_cookie(e,t){var i="object"==typeof e&&null!==e?e:{};if("native"===ctPublic.data__cookies_type)for(var o in i){if(10<o)return;ctSetCookie("apbct_visible_fields_"+(void 0!==t?t:o),JSON.stringify(i[o]))}else ctSetCookie("apbct_visible_fields",JSON.stringify(i))}function apbct_js_keys__set_input_value(e,t,i,o){if(0<document.querySelectorAll("[name^=ct_checkjs]").length)for(var n=document.querySelectorAll("[name^=ct_checkjs]"),c=0;c<n.length;c++)n[c].value=e.js_key}function apbctGetScreenInfo(){return JSON.stringify({fullWidth:document.documentElement.scrollWidth,fullHeight:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),visibleWidth:document.documentElement.clientWidth,visibleHeight:document.documentElement.clientHeight})}function ctSetPixelUrlLocalstorage(e){localStorage.setItem("session_pixel_url",e),localStorage.setItem(e,Math.floor(Date.now()/1e3).toString())}function ctGetPixelUrlLocalstorage(){var e=localStorage.getItem("session_pixel_url");return null!==e&&e}function ctIsOutdatedPixelUrlLocalstorage(e){e=Number(localStorage.getItem(e));return 10800<Math.floor(Date.now()/1e3).toString()-e}function ctCleaPixelUrlLocalstorage(e){localStorage.removeItem(e),localStorage.removeItem("session_pixel_url")}!function(){var c=new Date,t=(new Date).getTime(),i=!0,o=[],n=0,a={},e=!1,l=!1;function s(e,t,i){"function"==typeof window.addEventListener?e.addEventListener(t,i):e.attachEvent(t,i)}function r(e,t,i){"function"==typeof window.removeEventListener?e.removeEventListener(t,i):e.detachEvent(t,i)}var d=function(e){var t=Math.floor((new Date).getTime()/1e3);ctSetCookie("ct_fkp_timestamp",t),r(window,"mousedown",d),r(window,"keydown",d)},u=setInterval(function(){i=!0},150),_=setInterval(function(){ctSetCookie("ct_pointer_data",JSON.stringify(o))},1200),m=function(e){l||(ctSetCookie("ct_mouse_moved","true"),l=!0),!0===i&&(o.push([Math.round(e.clientY),Math.round(e.clientX),Math.round((new Date).getTime()-t)]),i=!1,50<=++n&&(r(window,"mousemove",m),clearInterval(u),clearInterval(_)))};function p(e){var t=e.target.value;!t||t in a||("rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("check_email_before_post",{method:"POST",data:{email:t},callback:function(e){e.result&&(a[t]={result:e.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(a)))}}):"admin_ajax"===ctPublicFunctions.data__ajax_type&&apbct_public_sendAJAX({action:"apbct_email_check_before_post",email:t},{callback:function(e){e.result&&(a[t]={result:e.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(a)))}}))}function f(e){ctSetCookie("apbct_pixel_url",e),+ctPublic.pixel__enabled&&!document.getElementById("apbct_pixel")&&jQuery("body").append('<img alt="Cleantalk Pixel" id="apbct_pixel" style="display: none; left: 99999px;" src="'+e+'">')}s(window,"mousemove",m),s(window,"mousedown",d),s(window,"keydown",d),s(window,"scroll",function(){e||(ctSetCookie("ct_has_scrolled","true"),e=!0)}),s(window,"DOMContentLoaded",function(){var e=[["ct_ps_timestamp",Math.floor((new Date).getTime()/1e3)],["ct_fkp_timestamp","0"],["ct_pointer_data","0"],["ct_timezone",c.getTimezoneOffset()/60*-1],["ct_screen_info",apbctGetScreenInfo()],["ct_has_scrolled","false"],["ct_mouse_moved","false"],["apbct_headless",navigator.webdriver]];if("native"!==ctPublic.data__cookies_type)e.push(["apbct_visible_fields","0"]);else{var t=document.cookie.split(";");if(0!==t.length)for(var i=0;i<t.length;i++){var o=t[i].trim().split("=")[0];0===o.indexOf("apbct_visible_fields_")&&ctDeleteCookie(o)}}+ctPublic.pixel__setting&&(+ctPublic.pixel__enabled?function(){var e=ctGetPixelUrlLocalstorage();if(!1!==e){if(!ctIsOutdatedPixelUrlLocalstorage(e))return f(e);ctCleaPixelUrlLocalstorage(e)}"rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("apbct_get_pixel_url",{method:"POST",callback:function(e){e&&(ctGetPixelUrlLocalstorage()||ctSetPixelUrlLocalstorage(e),f(e))}}):apbct_public_sendAJAX({action:"apbct_get_pixel_url"},{notJson:!0,callback:function(e){e&&(ctGetPixelUrlLocalstorage()||ctSetPixelUrlLocalstorage(e),f(e))}})}():e.push(["apbct_pixel_url",ctPublic.pixel__url])),+ctPublic.data__email_check_before_post&&(e.push(["ct_checked_emails","0"]),jQuery("input[type = 'email'], #email").blur(p)),ctSetCookie(e),setTimeout(function(){for(var e=0;e<document.forms.length;e++){var t,i,o=document.forms[e];0==+ctPublic.data__visible_fields_required||"get"===o.method.toString().toLowerCase()||o.classList.contains("slp_search_form")||o.parentElement.classList.contains("mec-booking")||-1!==o.action.toString().indexOf("activehosted.com")||o.id&&"caspioform"===o.id||o.classList&&o.classList.contains("tinkoffPayRow")||o.classList&&o.classList.contains("give-form")||o.id&&"ult-forgot-password-form"===o.id||o.id&&-1!==o.id.toString().indexOf("calculatedfields")||o.id&&-1!==o.id.toString().indexOf("sac-form")||o.id&&-1!==o.id.toString().indexOf("cp_tslotsbooking_pform")||o.name&&-1!==o.name.toString().indexOf("cp_tslotsbooking_pform")||"https://epayment.epymtservice.com/epay.jhtml"===o.action.toString()||o.name&&-1!==o.name.toString().indexOf("tribe-bar-form")||((t=document.createElement("input")).setAttribute("type","hidden"),t.setAttribute("id","apbct_visible_fields_"+e),t.setAttribute("name","apbct_visible_fields"),(i={})[0]=apbct_collect_visible_fields(o),t.value=JSON.stringify(i),o.append(t),o.onsubmit_prev=o.onsubmit,o.ctFormIndex=e,o.onsubmit=function(e){var t;"native"!==ctPublic.data__cookies_type&&void 0!==e.target.ctFormIndex&&((t={})[0]=apbct_collect_visible_fields(this),apbct_visible_fields_set_cookie(t,e.target.ctFormIndex)),e.target.onsubmit_prev instanceof Function&&setTimeout(function(){e.target.onsubmit_prev.call(e.target,e)},500)})}},1e3);let n=document.querySelectorAll("[data-original-string]");if(n.length)for(let e=0;e<n.length;++e)n[e].parentElement.href||n[e].parentElement.parentElement.href||n[e].addEventListener("click",function e(t){this.removeEventListener("click",e),apbctAjaxEmailDecode(t)})})}(),"undefined"!=typeof jQuery&&jQuery(document).ajaxComplete(function(e,t,i){t.responseText&&-1!==t.responseText.indexOf('"apbct')&&void 0!==(t=JSON.parse(t.responseText)).apbct&&(t=t.apbct).blocked&&(document.dispatchEvent(new CustomEvent("apbctAjaxBockAlert",{bubbles:!0,detail:{message:t.comment}})),cleantalkModal.loaded=t.comment,cleantalkModal.open(),1==+t.stop_script&&window.stop())});
//# sourceMappingURL=apbct-public.min.js.map
