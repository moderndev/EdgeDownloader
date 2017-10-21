(function(g,k,l,m){function n(a,c){this.w=g(k);this.el=g(a);this.options=g.extend({},t,c);this.init()}var h="ontouchstart"in k,p=function(){var a=l.createElement("div"),c=l.documentElement;if(!("pointerEvents"in a.style))return!1;a.style.pointerEvents="auto";a.style.pointerEvents="x";c.appendChild(a);var f=k.getComputedStyle&&"auto"===k.getComputedStyle(a,"").pointerEvents;c.removeChild(a);return!!f}(),q=h?"touchstart":"mousedown",r=h?"touchmove":"mousemove",s=h?"touchend":"mouseup";eCancel=h?"touchcancel":
"mouseup";var t={listNodeName:"ol",itemNodeName:"li",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",emptyClass:"dd-empty",expandBtnHTML:'<button data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20};n.prototype={init:function(){var a=this;a.reset();a.el.data("nestable-group",
this.options.group);a.placeEl=g('<div class="'+a.options.placeClass+'"/>');g.each(this.el.find(a.options.itemNodeName),function(b,c){a.setParent(g(c))});a.el.on("click","button",function(b){if(!a.dragEl&&(h||0===b.button)){var c=g(b.currentTarget);b=c.data("action");c=c.parent(a.options.itemNodeName);"collapse"===b&&a.collapseItem(c);"expand"===b&&a.expandItem(c)}});var c,f,e=function(b){var d=g(b.target);if(!d.hasClass(a.options.handleClass)){if(d.closest("."+a.options.noDragClass).length)return;
d=d.closest("."+a.options.handleClass)}!d.length||a.dragEl||!h&&0!==b.button||h&&1!==b.touches.length||(c=b.screenX,f=b.screenY,b.preventDefault())},d=function(b){a.dragEl?(b.preventDefault(),a.dragMove(h?b.touches[0]:b)):c&&(9<Math.abs(b.screenX-c)||9<Math.abs(b.screenY-f))&&a.dragStart(h?b.touches[0]:b)},b=function(b){a.dragEl&&(b.preventDefault(),a.dragStop(h?b.touches[0]:b));f=c=m};h?(a.el[0].addEventListener(q,e,!1),k.addEventListener(r,d,!1),k.addEventListener(s,b,!1),k.addEventListener(eCancel,
b,!1)):(a.el.on(q,e),a.w.on(r,d),a.w.on(s,b))},serialize:function(){var a=this;step=function(c,f){var e=[];c.children(a.options.itemNodeName).each(function(){var c=g(this),b=g.extend({},c.data()),c=c.children(a.options.listNodeName);c.length&&(b.children=step(c,f+1));e.push(b)});return e};return step(a.el.find(a.options.listNodeName).first(),0)},serialise:function(){return this.serialize()},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,
dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0};this.moving=!1;this.dragRootEl=this.dragEl=null;this.dragDepth=0;this.hasNewRoot=!1;this.pointEl=null},expandItem:function(a){a.removeClass(this.options.collapsedClass);a.children('[data-action="expand"]').hide();a.children('[data-action="collapse"]').show();a.children(this.options.listNodeName).show()},collapseItem:function(a){a.children(this.options.listNodeName).length&&(a.addClass(this.options.collapsedClass),a.children('[data-action="collapse"]').hide(),
a.children('[data-action="expand"]').show(),a.children(this.options.listNodeName).hide())},expandAll:function(){var a=this;a.el.find(a.options.itemNodeName).each(function(){a.expandItem(g(this))})},collapseAll:function(){var a=this;a.el.find(a.options.itemNodeName).each(function(){a.collapseItem(g(this))})},setParent:function(a){a.children(this.options.listNodeName).length&&(a.prepend(g(this.options.expandBtnHTML)),a.prepend(g(this.options.collapseBtnHTML)));a.children('[data-action="expand"]').hide()},
unsetParent:function(a){a.removeClass(this.options.collapsedClass);a.children("[data-action]").remove();a.children(this.options.listNodeName).remove()},dragStart:function(a){var c=this.mouse,f=g(a.target),e=f.closest(this.options.itemNodeName);this.placeEl.css("height",e.height());c.offsetX=a.offsetX!==m?a.offsetX:a.pageX-f.offset().left;c.offsetY=a.offsetY!==m?a.offsetY:a.pageY-f.offset().top;c.startX=c.lastX=a.pageX;c.startY=c.lastY=a.pageY;this.dragRootEl=this.el;this.dragEl=g(l.createElement(this.options.listNodeName)).addClass(this.options.listClass+
" "+this.options.dragClass);this.dragEl.css("width",e.width());e.after(this.placeEl);e[0].parentNode.removeChild(e[0]);e.appendTo(this.dragEl);g(l.body).append(this.dragEl);this.dragEl.css({left:a.pageX-c.offsetX,top:a.pageY-c.offsetY});f=this.dragEl.find(this.options.itemNodeName);for(a=0;a<f.length;a++)c=g(f[a]).parents(this.options.listNodeName).length,c>this.dragDepth&&(this.dragDepth=c)},dragStop:function(a){a=this.dragEl.children(this.options.itemNodeName).first();a[0].parentNode.removeChild(a[0]);
this.placeEl.replaceWith(a);this.dragEl.remove();this.el.trigger("change");this.hasNewRoot&&this.dragRootEl.trigger("change");this.reset()},dragMove:function(a){var c,f,e,d=this.options,b=this.mouse;this.dragEl.css({left:a.pageX-b.offsetX,top:a.pageY-b.offsetY});b.lastX=b.nowX;b.lastY=b.nowY;b.nowX=a.pageX;b.nowY=a.pageY;b.distX=b.nowX-b.lastX;b.distY=b.nowY-b.lastY;b.lastDirX=b.dirX;b.lastDirY=b.dirY;b.dirX=0===b.distX?0:0<b.distX?1:-1;b.dirY=0===b.distY?0:0<b.distY?1:-1;e=Math.abs(b.distX)>Math.abs(b.distY)?
1:0;if(b.moving){b.dirAx!==e?(b.distAxX=0,b.distAxY=0):(b.distAxX+=Math.abs(b.distX),0!==b.dirX&&b.dirX!==b.lastDirX&&(b.distAxX=0),b.distAxY+=Math.abs(b.distY),0!==b.dirY&&b.dirY!==b.lastDirY&&(b.distAxY=0));b.dirAx=e;b.dirAx&&b.distAxX>=d.threshold&&(b.distAxX=0,e=this.placeEl.prev(d.itemNodeName),0<b.distX&&e.length&&!e.hasClass(d.collapsedClass)&&(c=e.find(d.listNodeName).last(),f=this.placeEl.parents(d.listNodeName).length,f+this.dragDepth<=d.maxDepth&&(c.length?(c=e.children(d.listNodeName).last(),
c.append(this.placeEl)):(c=g("<"+d.listNodeName+"/>").addClass(d.listClass),c.append(this.placeEl),e.append(c),this.setParent(e)))),0>b.distX&&(e=this.placeEl.next(d.itemNodeName),e.length||(f=this.placeEl.parent(),this.placeEl.closest(d.itemNodeName).after(this.placeEl),f.children().length||this.unsetParent(f.parent()))));c=!1;p||(this.dragEl[0].style.visibility="hidden");this.pointEl=g(l.elementFromPoint(a.pageX-l.body.scrollLeft,a.pageY-(k.pageYOffset||l.documentElement.scrollTop)));p||(this.dragEl[0].style.visibility=
"visible");this.pointEl.hasClass(d.handleClass)&&(this.pointEl=this.pointEl.parent(d.itemNodeName));if(this.pointEl.hasClass(d.emptyClass))c=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(d.itemClass))return;e=this.pointEl.closest("."+d.rootClass);var h=this.dragRootEl.data("nestable-id")!==e.data("nestable-id");b.dirAx&&!h&&!c||h&&d.group!==e.data("nestable-group")||(f=this.dragDepth-1+this.pointEl.parents(d.listNodeName).length,f>d.maxDepth||(a=a.pageY<this.pointEl.offset().top+this.pointEl.height()/
2,f=this.placeEl.parent(),c?(c=g(l.createElement(d.listNodeName)).addClass(d.listClass),c.append(this.placeEl),this.pointEl.replaceWith(c)):a?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),f.children().length||this.unsetParent(f.parent()),this.dragRootEl.find(d.itemNodeName).length||this.dragRootEl.append('<div class="'+d.emptyClass+'"/>'),h&&(this.dragRootEl=e,this.hasNewRoot=this.el[0]!==this.dragRootEl[0])))}else b.dirAx=e,b.moving=!0}};g.fn.nestable=function(a){var c=this;
this.each(function(){var f=g(this).data("nestable");f?"string"===typeof a&&"function"===typeof f[a]&&(c=f[a]()):(g(this).data("nestable",new n(this,a)),g(this).data("nestable-id",(new Date).getTime()))});return c||this}})(window.jQuery||window.Zepto,window,document);