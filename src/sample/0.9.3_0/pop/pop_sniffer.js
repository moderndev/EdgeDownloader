dy_popsniffer={};
(function(){function I(w,f,k){if(x!=w){if(x=w){B.rowHeight=64;for(var h=0;h<g.length;++h)if("url"==g[h].field){g[h].cssClass="slick-cell-center";break}}else for(B.rowHeight=25,h=0;h<g.length;++h)if("url"==g[h].field){g[h].cssClass="slick-cell-left";break}$("#links_grid").toggleClass("grid-preview",w);!1!=f&&b&&(k&&b.beginRender(),b.setOptions(B),b.setColumns(g),k&&b.endRender())}}function L(b){b=p[b];for(var f={},k=[],h=0,g=b.fit_data.length;h<g;++h)f[b.fit_data[h]]=1;for(var n in f)k.push(parseInt(n));n=
k.length;b.key_data=[];k.sort(function(b,w){return b-w});if(10>=n)for(h=0;h<n;++h)b.key_data.push(k[h]-0.1);else for(b.key_data.push(k[0]-0.1),h=1;10>h;++h)b.key_data.push(k[Math.floor(h*(n-1)/9)]-0.1)}function t(b,f,k){b=$('#filter_tabs .filter_tab[icat="'+b+'"]');if(k){var h=b.data("sel_cnt")||0;f=0<k?h+f:h-f}k="";0<f&&(k=" ("+f+")");b.data("sel_cnt",f);b.find(".tab_selcount").text(k);f=$(".filter_tab");for(b=k=0;b<f.length;++b)k+=f.eq(b).data("sel_cnt")||0;$("#btn_start").prop("disabled",0==k);
$("#btn_addpause").prop("disabled",0==k)}function H(b,f,k){switch(b.cmd){case "add_links":S(b.data),$("#wrap_sniffer_loading").hide()}}function S(g){function s(a,c){$('#ext_filters input[fext="'+c+'"]').siblings().text((c||".")+" ("+r[a][c]+")")}function k(a){for(var c=$('#ext_filters div[icat="'+a.icat+'"] input:checkbox:checked'),d=c.length,b=0;b<d;++b)if(a.fext==c[b].attributes.fext.value)return!0;return!1}function h(a){for(var c=a!=D?G[a].caption:chrome.i18n.getMessage("extsOthers"),d="filter_tab",
b=$("#filter_tabs .filter_tab"),l=b.length-1;0<=l;--l){var e=parseInt($(b[l]).attr("icat"));if(a>e)break}0>l?(N||(d+=" active_tab",f=a,b.removeClass("active_tab")),c='<li class="'+d+'" icat="'+a+'"><a href="#">'+c+'<span class="tab_selcount"></span></a></li>',$("#filter_tabs").prepend(c)):(c='<li class="'+d+'" icat="'+a+'"><a href="#">'+c+'<span class="tab_selcount"></span></a></li>',$(b[l]).after(c));b='<div icat="'+a+'"';f==a&&($("#ext_filters div").removeClass("active_exts"),b+=' class="active_exts"');
b+="><ul></ul></div>";$("#ext_filters").append(b)}function v(a,c){var b='<li><label><input type="checkbox"  fext="'+c+'"><span>'+(c||".")+" ("+r[a][c]+")</span></label></li>",d=$('#ext_filters div[icat="'+a+'"] li:last-child');0==d.length||""!=d.find("input").attr("fext")?$('#ext_filters div[icat="'+a+'"] ul').append(b):d.before(b)}function x(a){if(!a)return D;for(var c=0,d=G.length;c<d;++c)if(J[c]&&J[c].test(a))return c;return D}if(g&&g.length){for(var B=z.length,y={},m={},K=[],A=!1,u=0,q=g.length;u<
q;++u){var e=g[u],a=e.fext||fext_from_url(e.url)||xtractFile(e.desc).fext;if(!T.test(tab_url)||!U.test(a)){var d=E[e.url];if(void 0!=d){if(e.desc||e.title||e.text)if(d=n.getItemById(d))e.title||e.text?(d.desc=d.desc||e.desc||e.text||e.title,d.text=d.text||e.text,d.title=d.title||e.title):d.desc=e.desc}else{e.referer=tab_url;e.naming=F.naming;e.folder=F.folder;e.threads=F.threads;e.desc=e.desc||e.text||e.title;var c=x(a);r[c]||(r[c]={},h(c));r[c][a]||(r[c][a]=0,v(c,a));++r[c][a];e.id=B+u;e.index=e.id;
e.icat=c;e.fext=a;e.size&&-1!=e.size?(p[c].fit_data.push(e.size),c==f&&(A=!0)):e.size=-1;d=k(e);e.sel=d;var l=p[c];d&&(0==l.sz_index||-1==e.size||e.size>=l.fit_val)&&(m[c]?++m[c]:m[c]=1);y[c]||(y[c]={});y[c][a]=1;V.test(a)?(e.preview="img",p[c].need_preview=!0):W.test(a)&&(e.preview="audio",p[c].need_preview=!0);K.push(e);E[e.url]=e.id}}}g=!1;p[f].need_preview?($("#cb_preview_wrap").show(),g=$("#cb_preview").prop("checked")):$("#cb_preview_wrap").hide();O=!1;b.beginRender();I(g,!0,!1);n.addItems(K);
b.endRender();for(c in y)for(a in y[c])s(c,a);for(c in m)t(c,m[c],1);A&&L(f)}}"undefined"===typeof trim_str&&(trim_str=function(b){return b?b.trim():""});var D=9999,F=dy_settings.get_taskdef(),G=dy_rules.getLinkFilters(),P=!1,J=null,g=[],B={},b=null,s=null,n=null,Q=null,z=[],p={},r={},E={},x=!1,O=!0,f=-1,N=0,v={},R=0;dy_popsniffer.setup=function(){function w(a){var b=p[f];return f==a.icat&&(0==b.sz_index||-1==a.size||a.size>=b.fit_val)}function r(a){return f==a.icat}function k(a,b){var c=new XMLHttpRequest,
l=++R;v[l]=c;c.open("HEAD",a,!0);c.onreadystatechange=function(){if(this.readyState==this.DONE){var a=parseInt(c.getResponseHeader("Content-Length"));if(isNaN(a)||!isFinite(a))a=-2;b(a)}delete v[l]};c.onerror=function(){b(-2);console.log("Error",c.statusText);delete v[l]};c.send()}function h(a){$('[name="'+a+'"]').change(function(){if(b){var d=trim_str($(this).val()),c=Q.getSelectedRows();if(c.length){for(var l=0,C=c.length;l<C;++l)b.getDataItem(c[l])[a]=d;b.beginRender();b.invalidateRows(c);d=b.getSortColumns();
0<d.length&&u[d[0].columnId]==a&&n.reSortUpdate(n.mapRowsToIds(c));b.endRender()}}})}function D(){var a=Q.getSelectedRows();if(0==a.length){for(a=0;a<q.length;++a)$('[name="'+q[a][0]+'"]').val("").removeAttr("placeholder");$(".dy_new_task_dlg input, .dy_new_task_dlg textarea, .dy_new_task_dlg select").attr("disabled","disabled")}else if($(".dy_new_task_dlg input, .dy_new_task_dlg textarea, .dy_new_task_dlg select").removeAttr("disabled"),1==a.length)for(var d=b.getDataItem(a[0]),a=0;a<q.length;++a){var c=
q[a][0],l=q[a][1];if("naming"==c||"folder"==c)l=chrome.i18n.getMessage("phraseAutomatic");$('[name="'+c+'"]').val(d[c]).attr("placeholder",l)}else if(1<a.length)for(a=0;a<q.length;++a)$('[name="'+q[a][0]+'"]').val("").attr("placeholder",chrome.i18n.getMessage("phraseMultiValues"))}function E(){var a=[];if(!$("#filter_exclusive").is(":checked"))for(var d=$("#ext_filters .active_exts input:checkbox:checked"),c=d.length,l=0,C=b.getDataLength();l<C;++l)for(var g=b.getDataItem(l),M=0;M<c;++M)if(g.fext==
d[M].attributes.fext.value){a.push(l);break}if(e)for(d=0,c=b.getDataLength();d<c;++d)e.test(b.getDataItem(d).url)&&a.push(d);s.setCheckedRows(a,!0,!0);t(f,a.length)}function H(a,b){for(var c=$("[name=addtop]").prop("checked"),l=[],C=0,e=z.length;C<e;++C){var f=z[C];!0==f.sel&&(0==p[f.icat].sz_index||-1==f.size||f.size>=p[f.icat].fit_val)&&l.push({url:trim_str(f.url),folder:trim_str(f.folder),naming:normalizeNaming(f.naming),referer:trim_str(f.referer),desc:trim_str(f.desc),title:trim_str(f.title),
text:trim_str(f.text),threads:parseInt(f.threads)})}l.length?chrome.tabs.sendMessage(tab_id,{cmd:"g_title"},function(f){chrome.runtime.sendMessage({cmd:"new_task",add_paused:a,add_top:c,tasks:l,page_title:f||""});b&&b(!0)}):b&&b(!1)}function y(a,b,c){"size"==b?a.sort(function(a,b){if(0>a.size){if(0>b.size){var d=a.size-b.size;return d?c?d:-d:a.index-b.index}return c?1:-1}return 0>b.size?c?-1:1:a.size-b.size||a.index-b.index},c):"sel"==b?a.sort(function(a,b){return a.sel-b.sel||a.index-b.index},c):
a.sort(function(a,c){return(a[b]||"").localeCompare(c[b]||"")||a.index-c.index},c)}J=Array(G.length);for(var m=0,K=G.length;m<K;++m)G[m].filter_links&&(J[m]=RegExp("^("+dy_rules.ref_filteri(m)+")$","i"));m=1;g=[{id:m++,name:chrome.i18n.getMessage("fieldURL"),field:"url",sortable:!0,cssClass:"slick-cell-left",formatter:function(a,b,c,f,e){return!x||O?c:"audio"==e.preview?'<div class="audplayer"><audio src="'+c+'"/></div>':"img"==e.preview?'<img src="'+c+'"/>':trimLen(c,256,"...")}},{id:m++,name:chrome.i18n.getMessage("fieldType"),
field:"fext",sortable:!0,cssClass:"slick-cell-center"},{id:m++,name:chrome.i18n.getMessage("fieldNaming"),field:"naming",sortable:!0,cssClass:"slick-cell-center"},{id:m++,name:chrome.i18n.getMessage("fieldFolder"),field:"folder",sortable:!0,native_only:!0},{id:m++,name:chrome.i18n.getMessage("fieldRemarks"),field:"desc",sortable:!0,cssClass:"slick-cell-center"},{id:m++,name:chrome.i18n.getMessage("fieldReferer"),field:"referer",sortable:!0,cssClass:"slick-cell-left"}];var A={id:m++,name:chrome.i18n.getMessage("fieldFileSize"),
field:"size",sortable:!0,cssClass:"slick-cell-center",formatter:function(a,d,c,e,g){return 0<=c?get_byte_string(c):-1==c?(g._size_fetched||k(g.url,function(a){if(P){g.size=a;if(f==g.icat){var c=n.getRowById(g.id);void 0!=c&&b.updateCell(c,3);(c=b.getSortColumns()[0])&&c.columnId==A.id?n.reSortOne(g.id):n.refresh()}c=p[g.icat];0<a&&(c.fit_data.push(a),f==g.icat&&L(f));g.sel&&0<c.sz_index&&a<c.fit_val&&t(f,s.getCheckedRowsCount())}}),g._size_fetched=!0,'<img src="../icons/pop/loading.gif"/>'):"-"}},
u={};B={explicitInitialization:!0,enableColumnReorder:!1,forceFitColumns:!1,fullWidthRows:!0,editable:!1,autoEdit:!1};for(m=g.length-1;0<=m;--m)if(!0==g[m].native_only){g.splice(m,1);break}var q=[["naming",F.naming],["folder",F.folder],["desc",""],["threads",F.threads]],e=null;(function(){s=new Slick.CheckboxSelectColumn({cssClass:"slick-cell-center",onCheck:function(a){0<a?t(f,a,1):t(f,-a,-1)},onCheckAll:function(a){a?t(f,b.getDataLength()):t(f,0);$(".active_exts input:checkbox").prop("checked",
a)}});g.unshift(s.getColumnDefinition());for(var a=0;a<g.length;++a)u[g[a].id]=g[a].field;u[A.id]=A.field;!0==dy_settings.get("pop_showsize")&&($("#cb_show_size").prop("checked",!0),g.splice(3,0,A),$("#slider_filesize").show());!0==dy_settings.get("pop_preview")&&($("#cb_preview").prop("checked",!0),I(!0,!1));var d=new Slick.Data.DataView;b=new Slick.Grid("#links_grid",d,g,B);b.registerPlugin(new Slick.AutoTooltips({enableForHeaderCells:!0,enableForCells:!0,maxToolTipLength:256}));a=new Slick.RowSelectionModel;
a.onSelectedRangesChanged.subscribe(D);b.setSelectionModel(a);b.registerPlugin(s);Q=a;b.onMouseEnter.subscribe(function(a,d){if(x){var f=b.getCellNodeFromEvent(a);if(f&&"url"==g[f.cell].field){var e=f.$cell,h=e.find("img");if(0!=h.length){var k=e.height(),m=e.width();h[0].naturalWidth<=m&&h[0].naturalHeight<=k||(h=e.outerHeight(),k=e.outerWidth(),e=e.offset(),$("#img_enlarge img").attr("src",b.getDataItem(f.row).url),f=$("#img_enlarge").show().height(),$("#img_enlarge").css("left",e.left+k).css("top",
Math.max(0,e.top+h/2-f/2)))}}}});b.onMouseLeave.subscribe(function(a,b){x&&$("#img_enlarge").hide()});b.onSort.subscribe(function(a,b){y(d,b.sortCol.field,b.sortAsc)});b.onClick.subscribe(function(a,b){var d=$(a.target);if(d.hasClass("audplayer")){var f=a.target.firstChild;!0!=d.data("evtattached")&&(f.addEventListener("ended",function(){this.currentTime=0;this.pause();$(this).parent().removeClass("audpause")}),d.data("evtattached",!0));!1==f.paused?(f.pause(),d.removeClass("audpause")):($("audio").each(function(){this.pause();
$(this).parent().removeClass("audpause")}),f.play(),d.addClass("audpause"))}});d.onRowCountChanged.subscribe(function(a,d){b.updateRowCount();d.diff_rows&&d.diff_rows.length||b.render()});d.onRowsChanged.subscribe(function(a,d){b.invalidateRows(d.rows);b.render()});d.syncGridSelection(b,!1);b.enableColumnFit();n=d})();n.beginUpdate();n.setItems(z);n.setFilter(dy_settings.get("pop_showsize")?w:r);n.endUpdate();(function(a){if(!a)for(a=q.length-1;0<=a;--a)"folder"!=q[a][0]&&"threads"!=q[a][0]||q.splice(a,
1);for(a=0;a<q.length;++a)h(q[a][0]);D();loadRecentList("naming_history","naming_list")})(!1);(function(){$("#cb_show_size").change(function(){this.checked?("size"!=g[3].field&&g.splice(3,0,A),$("#slider_filesize").show()):("size"==g[3].field&&g.splice(3,1),$("#slider_filesize").hide());dy_settings.set("pop_showsize",this.checked);b.beginRender();b.setColumns(g);n.setFilter(this.checked?w:r);b.endRender()});$("#cb_preview").change(function(){I(this.checked,!0,!0);dy_settings.set("pop_preview",this.checked)});
$("#slider_filesize").mouseenter(function(){$("#text_filesize").show()}).mouseleave(function(){$("#text_filesize").hide()});$('#slider_filesize input[type="range"]').bind("input",function(){var a=parseInt(this.value);p[f].sz_index=a;var b;if(0>=a||50<a)b=0;else if(b=p[f],0==b.key_data.length)b=0;else{var c=(a-1)*(b.key_data.length-1)/49,e=Math.floor(c);b=e>=b.key_data.length-1?b.key_data[b.key_data.length-1]:b.key_data[e]+(b.key_data[e+1]-b.key_data[e])*(c-e)}p[f].fit_val=b;$("#text_filesize").text(a?
"> "+get_byte_string(b):"-");n.refresh();t(f,s.getCheckedRowsCount())});$(document).on("click",".filter_tab",function(){var a=$(".active_tab.filter_tab");0!=a.length&&(a.data("RE",$("#filter_custom").val()),a.data("exclusive",$("#filter_exclusive").prop("checked")),a.data("sortcols",b.getSortColumns()),a.removeClass("active_tab"));$curtab=$(this);a=$curtab.data("RE")||"";$("#filter_custom").val(a);a=$curtab.data("exclusive")||!1;$("#filter_exclusive").prop("checked",a);var a=$curtab.data("sortcols")||
[],d=b.getSortColumns(),d=0<a.length&&(0==d.length||a[0].columnId!=d[0].columnId||a[0].sortAsc!=d[0].sortAsc);b.setSortColumns(a);$curtab.addClass("active_tab");f=parseInt($curtab.attr("icat"));var c=!1;p[f].need_preview?($("#cb_preview_wrap").show(),c=$("#cb_preview").prop("checked")):$("#cb_preview_wrap").hide();b.beginRender();d?y(n,u[a[0].columnId],a[0].sortAsc):n.refresh();I(c,!0,!1);b.endRender();s.recheckFull();a=$('#slider_filesize input[type="range"]')[0];d=p[f];a.min=0;a.max=50;a.value=
d.sz_index;$("#text_filesize").text(d.sz_index?"> "+get_byte_string(d.fit_val):"-");L(f);$('#ext_filters div[icat="'+f+'"]').addClass("active_exts").siblings().removeClass("active_exts");N=1});$(document).on("click","#ext_filters input:checkbox",function(){if(!$("#filter_exclusive").is(":checked")){for(var a=this.attributes.fext.value,d=this.checked,c=[],e=0,g=b.getDataLength();e<g;++e)b.getDataItem(e).fext==a&&c.push(e);s.setCheckedRows(c,d);t(f,s.getCheckedRowsCount())}});$("#settings_tabs li").click(function(){$("#settings_tabs .active_tab").removeClass("active_tab");
$(".settings_active").removeClass("settings_active");$(this).addClass("active_tab");$("#"+$(this).attr("tab-target")).addClass("settings_active")});$("#filter_custom").bind("input",function(){var a=trim_str($(this).val());if(""==a)e=null;else{$("#filter_custom").removeAttr("style");var b;console.log(a);try{b=RegExp(a,"i")}catch(c){console.log(c),$("#filter_custom").attr("style","border: 1px solid rgb(255, 0, 0);")}e=b}E()});$("#filter_exclusive").bind("change",function(){this.checked?$("#ext_filters .active_exts input:checkbox").attr("disabled",
"disabled"):$("#ext_filters .active_exts input:checkbox").removeAttr("disabled");E()});$("#btn_start").click(function(){H(!1,function(a){a&&window.close()})});$("#btn_addpause").click(function(){H(!0,function(a){a&&window.close()})});$("#btn_cancel").click(function(){window.close()});$("input[type=number]").numeric({decimal:!1,negative:!1});F.addtop&&$("[name=addtop]").attr("checked","checked");$("#config_cats").click(function(){dy_tabman.open_options({section:"category"})})})();b.beginRender();b.init();
b.autosizeColumns();b.endRender()};dy_popsniffer.init=function(b){x=!1;O=!0;f=-1;N=0;chrome.runtime.onMessage.addListener(H);R=0;v={};p={};r={};E={};z.splice(0,z.length);n.refresh();p[D]={need_preview:!1,sz_index:0,fit_val:0,key_data:[],fit_data:[]};for(var g=0,k=G.length;g<k;++g)p[g]={need_preview:!1,sz_index:0,fit_val:0,key_data:[],fit_data:[]};chrome.tabs.sendMessage(b,{cmd:"g_links"});P=!0};dy_popsniffer.cleanup=function(){P=!1;chrome.runtime.onMessage.removeListener(H);$("#filter_tabs .filter_tab").remove();
$("#ext_filters").empty();for(xhr_id in v){var b=v[xhr_id];b&&b.abort()}R=0;v={};p={};r={};E={};z.splice(0,z.length)};var T=/.*youtube.com.*/i,U=RegExp("^("+dy_rules.internal_video+")$","i"),V=RegExp("^("+imgtag_formats+")$","i"),W=RegExp("^("+audiotag_formats+")$","i")})();
