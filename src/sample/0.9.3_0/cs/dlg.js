$(function(){var c=[];chrome.runtime.onMessage.addListener(function(a,b,d){function k(a){var b=f-24,c=g-24;$('<div class="danim_icon" style="position:fixed;opacity:0;width:48px;height:48px;z-index:9999;left:'+b+"px; top:"+c+'px;"><img style="width: 100%;height: 100%" src="'+chrome.extension.getURL(a?"icons/newd_pause.png":"icons/newd.png")+'"/></div>').appendTo("body").animate({opacity:"1",width:"64px",height:"64px",left:b-8+"px",top:c-8+"px"},{duration:60,complete:function(){$(this).animate({opacity:"0",
width:"100px",height:"100px",left:b-26+"px",top:c-26+"px"},{duration:800,complete:function(){$(this).remove()}})}})}switch(a.cmd){case "g_links":b=[];d={};for(var e=0,l=c.length;e<l;++e){var h=c[e].url;void 0==d[h]&&(b.push(c[e]),d[h]=1)}0<b.length&&chrome.runtime.sendMessage({cmd:"add_links",data:b});break;case "stream_url":a.url&&(b={url:a.url,size:a.size},b.desc=a.desc||document.title,a.fext&&(b.fext=a.fext),c.push(b),a.need_send&&chrome.runtime.sendMessage({cmd:"add_links",data:[b]}));break;case "d_one":chrome.runtime.sendMessage({cmd:"dlg_options"},
function(b){open_new_dlg(a.task,b||{})});break;case "g_title":d(document.title);break;case "d_anim":k(a.addpause)}});var f=150,g=150;$(document).on("mousedown",function(a){if(1==a.which||3==a.which)g=a.clientY,f=a.clientX})});
