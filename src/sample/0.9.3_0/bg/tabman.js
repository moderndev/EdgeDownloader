var dy_tabman=function(){function g(a){chrome.tabs.get(a.tabId,function(a){a.url==d&&e({activate:!0,tabId:a.id})})}function h(a,b,c){b.url==d&&e({activate:!0,tabId:a})}function k(a){a.url==d&&e({activate:!0,tabId:a.id})}function e(a,b){function c(){b&&b();l=!1;if(0<m.length){var a=m.shift();e(a.opt,a.call_back)}}function f(a){chrome.windows.getCurrent(function(c){chrome.runtime.lastError&&!c?(console.log(chrome.runtime.lastError),console.log("checking in one second"),setTimeout(function(){f(a)},1100)):
a&&a()})}l?(m.push({opt:a,call_back:b}),console.log("still opening")):(l=!0,a||(a={activate:!0}),void 0==a.activate&&(a.activate=!0),-1!=dy_bkg.ui_tabid?(a.tabId&&a.tabId!=dy_bkg.ui_tabid&&(console.log("opt.tabId != tab.id"),chrome.tabs.remove(a.tabId)),a.activate&&(chrome.tabs.get(dy_bkg.ui_tabid,function(a){chrome.windows.update(a.windowId,{focused:!0})}),chrome.tabs.update(dy_bkg.ui_tabid,{active:!0})),c()):(dy_bkg.scheduleUIInit(c),a.tabId?(a.activate&&chrome.tabs.get(a.tabId,function(a){chrome.windows.update(a.windowId,
{focused:!0})}),chrome.tabs.update(a.tabId,{active:a.activate,url:n})):f(function(){chrome.tabs.create({active:a.activate,url:n})})))}var n=chrome.extension.getURL("ui/index.htm"),p=chrome.extension.getURL("ui/options.htm"),l=!1,m=[],d="chrome://downloads/";return{index_url:n,options_url:p,getLastTab:function(a){chrome.windows.getLastFocused({populate:!1},function(b){chrome.tabs.query({active:!0,windowId:b.id},function(c){a(c&&c.length?c[0]:null)})})},override:function(a){a?(chrome.tabs.onUpdated.hasListener(h)||
chrome.tabs.onUpdated.addListener(h),chrome.tabs.onCreated.hasListener(k)||chrome.tabs.onCreated.addListener(k),chrome.tabs.onActivated.hasListener(g)||chrome.tabs.onActivated.addListener(g)):(chrome.tabs.onUpdated.removeListener(h),chrome.tabs.onCreated.removeListener(k),chrome.tabs.onActivated.removeListener(g))},open_ui:e,open_options:function(a,b){a||(a={});(function(a,f){chrome.tabs.query({url:a},function(b){b.length?f(b):chrome.tabs.query({url:a+"?*"},function(b){b.length?f(b):chrome.tabs.query({url:a+
"#*"},function(b){b.length?f(b):chrome.tabs.query({url:a+".*"},function(a){f(a)})})})})})(p,function(c){var b=p+(a.section?"#"+a.section:"");if(c&&c.length){c=c[0];var e=a.uiWinId||c.windowId;if(a&&a.uiWinId&&a.pos){var g=c.index,d=a.pos;c.windowId==a.uiWinId&&g<d&&--d;chrome.tabs.move(c.id,{windowId:a.uiWinId,index:d})}chrome.windows.update(e,{focused:!0});b!=c.url?chrome.tabs.update(c.id,{url:b,active:!0}):chrome.tabs.update(c.id,{active:!0})}else a&&a.uiWinId&&a.pos?chrome.tabs.create({url:b,windowId:a.uiWinId,
index:a.pos}):chrome.tabs.create({url:b})})}}}();