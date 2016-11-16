/* Zepto 1.1.6 - zepto event ajax form ie detect fx fx_methods assets data deferred callbacks selector touch gesture stack ios3 - zeptojs.com/license */
var Zepto=function() {
	function M(t) {
	return null==t?String(t):T[S.call(t)]||"object"
}
function k(t) {
	return"function"==M(t)
}
function Z(t) {
	return null!=t&&t==t.window
}
function D(t) {
	return null!=t&&t.nodeType==t.DOCUMENT_NODE
}
function _(t) {
	return"object"==M(t)
}
function L(t) {
	return _(t)&&!Z(t)&&Object.getPrototypeOf(t)==Object.prototype
}
function $(t) {
	return"number"==typeof t.length
}
function F(t) {
	return a.call(t,function(t) {
	return null!=t
}
)}function R(t) {
	return t.length>0?n.fn.concat.apply([],t):t
}
function z(t) {
	return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()
}
function q(t) {
	return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")
}
function I(t,e) {
	return"number"!=typeof e||c[z(t)]?e:e+"px"
}
function W(t) {
	var e,n;
	return u[t]||(e=s.createElement(t),s.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]
}
function B(t) {
	return"children"in t?o.call(t.children):n.map(t.childNodes,function(t) {
	return 1==t.nodeType?t:void 0
}
)}function V(n,i,r) {
	for(e in i)r&&(L(i[e])||N(i[e]))?(L(i[e])&&!L(n[e])&&(n[e]= {
	}),N(i[e])&&!N(n[e])&&(n[e]=[]),V(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])
}
function H(t,e) {
	return null==e?n(t):n(t).filter(e)
}
function U(t,e,n,i) {
	return k(e)?e.call(t,n,i):e
}
function X(t,e,n) {
	null==n?t.removeAttribute(e):t.setAttribute(e,n)
}
function Y(e,n) {
	var i=e.className||"",r=i&&i.baseVal!==t;
	return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)
}
function G(t) {
	try {
	return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\ {
	]/.test(t)?n.parseJSON(t):t):t
}
catch(e) {
	return t
}
}function J(t,e) {
	e(t);
	for(var n=0,i=t.childNodes.length;
	i>n;
	n++)J(t.childNodes[n],e)
}
var t,e,n,i,C,O,r=[],o=r.slice,a=r.filter,s=window.document,u= {
	},f= {
	},c= {
	"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1
}
,l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=s.createElement("table"),w=s.createElement("tr"),b= {
	tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:w,th:w,"*":s.createElement("div")
}
,x=/complete|loaded|interactive/,E=/^[\w-]*$/,T= {
	},S=T.toString,j= {
	},P=s.createElement("div"),A= {
	tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"
}
,N=Array.isArray||function(t) {
	return t instanceof Array
}
;return j.matches=function(t,e) {
	if(!e||!t||1!==t.nodeType)return!1;
	var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;
	if(n)return n.call(t,e);
	var i,r=t.parentNode,o=!r;
	return o&&(r=P).appendChild(t),i=~j.qsa(r,e).indexOf(t),o&&P.removeChild(t),i
}
,C=function(t) {
	return t.replace(/-+(.)?/g,function(t,e) {
	return e?e.toUpperCase():""
}
)},O=function(t) {
	return a.call(t,function(e,n) {
	return t.indexOf(e)==n
}
)},j.fragment=function(e,i,r) {
	var a,u,f;
	return h.test(e)&&(a=n(s.createElement(RegExp.$1))),a||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,a=n.each(o.call(f.childNodes),function() {
	f.removeChild(this)
}
)),L(r)&&(u=n(a),n.each(r,function(t,e) {
	g.indexOf(t)>-1?u[t](e):u.attr(t,e)
}
)),a},j.Z=function(t,e) {
	return t=t||[],t.__proto__=n.fn,t.selector=e||"",t
}
,j.isZ=function(t) {
	return t instanceof j.Z
}
,j.init=function(e,i) {
	var r;
	if(!e)return j.Z();
	if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=j.fragment(e,RegExp.$1,i),e=null;
	else {
	if(i!==t)return n(i).find(e);
	r=j.qsa(s,e)
}
else {
	if(k(e))return n(s).ready(e);
	if(j.isZ(e))return e;
	if(N(e))r=F(e);
	else if(_(e))r=[e],e=null;
	else if(l.test(e))r=j.fragment(e.trim(),RegExp.$1,i),e=null;
	else {
	if(i!==t)return n(i).find(e);
	r=j.qsa(s,e)
}
}return j.Z(r,e)},n=function(t,e) {
	return j.init(t,e)
}
,n.extend=function(t) {
	var e,n=o.call(arguments,1);
	return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n) {
	V(t,n,e)
}
),t},j.qsa=function(t,e) {
	var n,i="#"==e[0],r=!i&&"."==e[0],a=i||r?e.slice(1):e,s=E.test(a);
	return D(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(s&&!i?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))
}
,n.contains=s.documentElement.contains?function(t,e) {
	return t!==e&&t.contains(e)
}
:function(t,e) {
	for(;
	e&&(e=e.parentNode);
	)if(e===t)return!0;
	return!1
}
,n.type=M,n.isFunction=k,n.isWindow=Z,n.isArray=N,n.isPlainObject=L,n.isEmptyObject=function(t) {
	var e;
	for(e in t)return!1;
	return!0
}
,n.inArray=function(t,e,n) {
	return r.indexOf.call(e,t,n)
}
,n.camelCase=C,n.trim=function(t) {
	return null==t?"":String.prototype.trim.call(t)
}
,n.uuid=0,n.support= {
	},n.expr= {
	},n.map=function(t,e) {
	var n,r,o,i=[];
	if($(t))for(r=0;
	r<t.length;
	r++)n=e(t[r],r),null!=n&&i.push(n);
	else for(o in t)n=e(t[o],o),null!=n&&i.push(n);
	return R(i)
}
,n.each=function(t,e) {
	var n,i;
	if($(t)) {
	for(n=0;
	n<t.length;
	n++)if(e.call(t[n],n,t[n])===!1)return t
}
else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;
	return t},n.grep=function(t,e) {
	return a.call(t,e)
}
,window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e) {
	T["[object "+e+"]"]=e.toLowerCase()
}
),n.fn= {
	forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t) {
	return n(n.map(this,function(e,n) {
	return t.call(e,n,e)
}
))},slice:function() {
	return n(o.apply(this,arguments))
}
,ready:function(t) {
	return x.test(s.readyState)&&s.body?t(n):s.addEventListener("DOMContentLoaded",function() {
	t(n)
}
,!1),this},get:function(e) {
	return e===t?o.call(this):this[e>=0?e:e+this.length]
}
,toArray:function() {
	return this.get()
}
,size:function() {
	return this.length
}
,remove:function() {
	return this.each(function() {
	null!=this.parentNode&&this.parentNode.removeChild(this)
}
)},each:function(t) {
	return r.every.call(this,function(e,n) {
	return t.call(e,n,e)!==!1
}
),this},filter:function(t) {
	return k(t)?this.not(this.not(t)):n(a.call(this,function(e) {
	return j.matches(e,t)
}
))},add:function(t,e) {
	return n(O(this.concat(n(t,e))))
}
,is:function(t) {
	return this.length>0&&j.matches(this[0],t)
}
,not:function(e) {
	var i=[];
	if(k(e)&&e.call!==t)this.each(function(t) {
	e.call(this,t)||i.push(this)
}
);
	else {
	var r="string"==typeof e?this.filter(e):$(e)&&k(e.item)?o.call(e):n(e);
	this.forEach(function(t) {
	r.indexOf(t)<0&&i.push(t)
}
)}return n(i)},has:function(t) {
	return this.filter(function() {
	return _(t)?n.contains(this,t):n(this).find(t).size()
}
)},eq:function(t) {
	return-1===t?this.slice(t):this.slice(t,+t+1)
}
,first:function() {
	var t=this[0];
	return t&&!_(t)?t:n(t)
}
,last:function() {
	var t=this[this.length-1];
	return t&&!_(t)?t:n(t)
}
,find:function(t) {
	var e,i=this;
	return e=t?"object"==typeof t?n(t).filter(function() {
	var t=this;
	return r.some.call(i,function(e) {
	return n.contains(e,t)
}
)}):1==this.length?n(j.qsa(this[0],t)):this.map(function() {
	return j.qsa(this,t)
}
):n()},closest:function(t,e) {
	var i=this[0],r=!1;
	for("object"==typeof t&&(r=n(t));
	i&&!(r?r.indexOf(i)>=0:j.matches(i,t));
	)i=i!==e&&!D(i)&&i.parentNode;
	return n(i)
}
,parents:function(t) {
	for(var e=[],i=this;
	i.length>0;
	)i=n.map(i,function(t) {
	return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0
}
);
	return H(e,t)},parent:function(t) {
	return H(O(this.pluck("parentNode")),t)
}
,children:function(t) {
	return H(this.map(function() {
	return B(this)
}
),t)},contents:function() {
	return this.map(function() {
	return o.call(this.childNodes)
}
)},siblings:function(t) {
	return H(this.map(function(t,e) {
	return a.call(B(e.parentNode),function(t) {
	return t!==e
}
)}),t)},empty:function() {
	return this.each(function() {
	this.innerHTML=""
}
)},pluck:function(t) {
	return n.map(this,function(e) {
	return e[t]
}
)},show:function() {
	return this.each(function() {
	"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=W(this.nodeName))
}
)},replaceWith:function(t) {
	return this.before(t).remove()
}
,wrap:function(t) {
	var e=k(t);
	if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;
	return this.each(function(o) {
	n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)
}
)},wrapAll:function(t) {
	if(this[0]) {
	n(this[0]).before(t=n(t));
	for(var e;
	(e=t.children()).length;
	)t=e.first();
	n(t).append(this)
}
return this},wrapInner:function(t) {
	var e=k(t);
	return this.each(function(i) {
	var r=n(this),o=r.contents(),a=e?t.call(this,i):t;
	o.length?o.wrapAll(a):r.append(a)
}
)},unwrap:function() {
	return this.parent().each(function() {
	n(this).replaceWith(n(this).children())
}
),this},clone:function() {
	return this.map(function() {
	return this.cloneNode(!0)
}
)},hide:function() {
	return this.css("display","none")
}
,toggle:function(e) {
	return this.each(function() {
	var i=n(this);
	(e===t?"none"==i.css("display"):e)?i.show():i.hide()
}
)},prev:function(t) {
	return n(this.pluck("previousElementSibling")).filter(t||"*")
}
,next:function(t) {
	return n(this.pluck("nextElementSibling")).filter(t||"*")
}
,html:function(t) {
	return 0 in arguments?this.each(function(e) {
	var i=this.innerHTML;
	n(this).empty().append(U(this,t,e,i))
}
):0 in this?this[0].innerHTML:null},text:function(t) {
	return 0 in arguments?this.each(function(e) {
	var n=U(this,t,e,this.textContent);
	this.textContent=null==n?"":""+n
}
):0 in this?this[0].textContent:null},attr:function(n,i) {
	var r;
	return"string"!=typeof n||1 in arguments?this.each(function(t) {
	if(1===this.nodeType)if(_(n))for(e in n)X(this,e,n[e]);
	else X(this,n,U(this,i,t,this.getAttribute(n)))
}
):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t) {
	return this.each(function() {
	1===this.nodeType&&t.split(" ").forEach(function(t) {
	X(this,t)
}
,this)})},prop:function(t,e) {
	return t=A[t]||t,1 in arguments?this.each(function(n) {
	this[t]=U(this,e,n,this[t])
}
):this[0]&&this[0][t]},data:function(e,n) {
	var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);
	return null!==r?G(r):t
}
,val:function(t) {
	return 0 in arguments?this.each(function(e) {
	this.value=U(this,t,e,this.value)
}
):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function() {
	return this.selected
}
).pluck("value"):this[0].value)},offset:function(t) {
	if(t)return this.each(function(e) {
	var i=n(this),r=U(this,t,e,i.offset()),o=i.offsetParent().offset(),a= {
	top:r.top-o.top,left:r.left-o.left
}
;"static"==i.css("position")&&(a.position="relative"),i.css(a)});
	if(!this.length)return null;
	var e=this[0].getBoundingClientRect();
	return {
	left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)
}
},css:function(t,i) {
	if(arguments.length<2) {
	var r,o=this[0];
	if(!o)return;
	if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);
	if(N(t)) {
	var a= {
	};
	return n.each(t,function(t,e) {
	a[e]=o.style[C(e)]||r.getPropertyValue(e)
}
),a}}var s="";
	if("string"==M(t))i||0===i?s=z(t)+":"+I(t,i):this.each(function() {
	this.style.removeProperty(z(t))
}
);
	else for(e in t)t[e]||0===t[e]?s+=z(e)+":"+I(e,t[e])+";
	":this.each(function() {
	this.style.removeProperty(z(e))
}
);
	return this.each(function() {
	this.style.cssText+=";
	"+s
}
)},index:function(t) {
	return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])
}
,hasClass:function(t) {
	return t?r.some.call(this,function(t) {
	return this.test(Y(t))
}
,q(t)):!1},addClass:function(t) {
	return t?this.each(function(e) {
	if("className"in this) {
	i=[];
	var r=Y(this),o=U(this,t,e,r);
	o.split(/\s+/g).forEach(function(t) {
	n(this).hasClass(t)||i.push(t)
}
,this),i.length&&Y(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e) {
	return this.each(function(n) {
	if("className"in this) {
	if(e===t)return Y(this,"");
	i=Y(this),U(this,e,n,i).split(/\s+/g).forEach(function(t) {
	i=i.replace(q(t)," ")
}
),Y(this,i.trim())}})},toggleClass:function(e,i) {
	return e?this.each(function(r) {
	var o=n(this),a=U(this,e,r,Y(this));
	a.split(/\s+/g).forEach(function(e) {
	(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)
}
)}):this},scrollTop:function(e) {
	if(this.length) {
	var n="scrollTop"in this[0];
	return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function() {
	this.scrollTop=e
}
:function() {
	this.scrollTo(this.scrollX,e)
}
)}},scrollLeft:function(e) {
	if(this.length) {
	var n="scrollLeft"in this[0];
	return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function() {
	this.scrollLeft=e
}
:function() {
	this.scrollTo(e,this.scrollY)
}
)}},position:function() {
	if(this.length) {
	var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)? {
	top:0,left:0
}
:e.offset();
	return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0 {
	top:i.top-r.top,left:i.left-r.left
}
}},offsetParent:function() {
	return this.map(function() {
	for(var t=this.offsetParent||s.body;
	t&&!d.test(t.nodeName)&&"static"==n(t).css("position");
	)t=t.offsetParent;
	return t
}
)}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e) {
	var i=e.replace(/./,function(t) {
	return t[0].toUpperCase()
}
);
	n.fn[e]=function(r) {
	var o,a=this[0];
	return r===t?Z(a)?a["inner"+i]:D(a)?a.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t) {
	a=n(this),a.css(e,U(this,r,t,a[e]()))
}
)}}),v.forEach(function(t,e) {
	var i=e%2;
	n.fn[t]=function() {
	var t,o,r=n.map(arguments,function(e) {
	return t=M(e),"object"==t||"array"==t||null==e?e:j.fragment(e)
}
),a=this.length>1;
	return r.length<1?this:this.each(function(t,u) {
	o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;
	var f=n.contains(s.documentElement,o);
	r.forEach(function(t) {
	if(a)t=t.cloneNode(!0);
	else if(!o)return n(t).remove();
	o.insertBefore(t,u),f&&J(t,function(t) {
	null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)
}
)})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e) {
	return n(e)[t](this),this
}
}),j.Z.prototype=n.fn,j.uniq=O,j.deserializeValue=G,n.zepto=j,n}();
	window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t) {
	function l(t) {
	return t._zid||(t._zid=e++)
}
function h(t,e,n,i) {
	if(e=p(e),e.ns)var r=d(e.ns);
	return(a[l(t)]||[]).filter(function(t) {
	return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!i||t.sel==i)
}
)}function p(t) {
	var e=(""+t).split(".");
	return {
	e:e[0],ns:e.slice(1).sort().join(" ")
}
}function d(t) {
	return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?:|$)")
}
function m(t,e) {
	return t.del&&!u&&t.e in f||!!e
}
function g(t) {
	return c[t]||u&&f[t]||t
}
function v(e,i,r,o,s,u,f) {
	var h=l(e),d=a[h]||(a[h]=[]);
	i.split(/\s/).forEach(function(i) {
	if("ready"==i)return t(document).ready(r);
	var a=p(i);
	a.fn=r,a.sel=s,a.e in c&&(r=function(e) {
	var n=e.relatedTarget;
	return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0
}
),a.del=u;
	var l=u||r;
	a.proxy=function(t) {
	if(t=T(t),!t.isImmediatePropagationStopped()) {
	t.data=o;
	var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));
	return i===!1&&(t.preventDefault(),t.stopPropagation()),i
}
},a.i=d.length,d.push(a),"addEventListener"in e&&e.addEventListener(g(a.e),a.proxy,m(a,f))})}function y(t,e,n,i,r) {
	var o=l(t);
	(e||"").split(/\s/).forEach(function(e) {
	h(t,e,n,i).forEach(function(e) {
	delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))
}
)})}function T(e,i) {
	return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n) {
	var r=i[t];
	e[t]=function() {
	return this[n]=w,r&&r.apply(i,arguments)
}
,e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function S(t) {
	var e,i= {
	originalEvent:t
}
;for(e in t)x.test(e)||t[e]===n||(i[e]=t[e]);
	return T(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t) {
	return"string"==typeof t
}
,a= {
	},s= {
	},u="onfocusin"in window,f= {
	focus:"focusin",blur:"focusout"
}
,c= {
	mouseenter:"mouseover",mouseleave:"mouseout"
}
;s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event= {
	add:v,remove:y
}
,t.proxy=function(e,n) {
	var a=2 in arguments&&i.call(arguments,2);
	if(r(e)) {
	var s=function() {
	return e.apply(n,a?a.concat(i.call(arguments)):arguments)
}
;return s._zid=l(e),s}if(o(n))return a?(a.unshift(e[n],e),t.proxy.apply(null,a)):t.proxy(e[n],e);
	throw new TypeError("expected function")},t.fn.bind=function(t,e,n) {
	return this.on(t,e,n)
}
,t.fn.unbind=function(t,e) {
	return this.off(t,e)
}
,t.fn.one=function(t,e,n,i) {
	return this.on(t,e,n,i,1)
}
;var w=function() {
	return!0
}
,b=function() {
	return!1
}
,x=/^([A-Z]|returnValue$|layer[XY]$)/,E= {
	preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"
}
;t.fn.delegate=function(t,e,n) {
	return this.on(e,t,n)
}
,t.fn.undelegate=function(t,e,n) {
	return this.off(e,t,n)
}
,t.fn.live=function(e,n) {
	return t(document.body).delegate(this.selector,e,n),this
}
,t.fn.die=function(e,n) {
	return t(document.body).undelegate(this.selector,e,n),this
}
,t.fn.on=function(e,a,s,u,f) {
	var c,l,h=this;
	return e&&!o(e)?(t.each(e,function(t,e) {
	h.on(t,a,s,e,f)
}
),h):(o(a)||r(u)||u===!1||(u=s,s=a,a=n),(r(s)||s===!1)&&(u=s,s=n),u===!1&&(u=b),h.each(function(n,r) {
	f&&(c=function(t) {
	return y(r,t.type,u),u.apply(this,arguments)
}
),a&&(l=function(e) {
	var n,o=t(e.target).closest(a,r).get(0);
	return o&&o!==r?(n=t.extend(S(e) {
	currentTarget:o,liveFired:r
}
),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,s,a,l||c)}))},t.fn.off=function(e,i,a) {
	var s=this;
	return e&&!o(e)?(t.each(e,function(t,e) {
	s.off(t,i,e)
}
),s):(o(i)||r(a)||a===!1||(a=i,i=n),a===!1&&(a=b),s.each(function() {
	y(this,e,a,i)
}
))},t.fn.trigger=function(e,n) {
	return e=o(e)||t.isPlainObject(e)?t.Event(e):T(e),e._args=n,this.each(function() {
	e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)
}
)},t.fn.triggerHandler=function(e,n) {
	var i,r;
	return this.each(function(a,s) {
	i=S(o(e)?t.Event(e):e),i._args=n,i.target=s,t.each(h(s,e.type||e),function(t,e) {
	return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0
}
)}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
	t.fn[e]=function(t) {
	return 0 in arguments?this.bind(e,t):this.trigger(e)
}
}),t.Event=function(t,e) {
	o(t)||(e=t,t=e.type);
	var n=document.createEvent(s[t]||"Events"),i=!0;
	if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];
	return n.initEvent(t,i,!0),T(n)
}
}(Zepto),function(t) {
	function h(e,n,i) {
	var r=t.Event(n);
	return t(e).trigger(r,i),!r.isDefaultPrevented()
}
function p(t,e,i,r) {
	return t.global?h(e||n,i,r):void 0
}
function d(e) {
	e.global&&0===t.active++&&p(e,null,"ajaxStart")
}
function m(e) {
	e.global&&!--t.active&&p(e,null,"ajaxStop")
}
function g(t,e) {
	var n=e.context;
	return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])
}
function v(t,e,n,i) {
	var r=n.context,o="success";
	n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),w(o,e,n)
}
function y(t,e,n,i,r) {
	var o=i.context;
	i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),w(e,n,i)
}
function w(t,e,n) {
	var i=n.context;
	n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)
}
function b() {
	}function x(t) {
	return t&&(t=t.split(";
	",2)[0]),t&&(t==f?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"
}
function E(t,e) {
	return""==e?t:(t+"&"+e).replace(/[&?] {
	1,2
}
/,"?")}function T(e) {
	e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)
}
function S(e,n,i,r) {
	return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0) {
	url:e,data:n,success:i,dataType:r
}
}function C(e,n,i,r) {
	var o,a=t.isArray(n),s=t.isPlainObject(n);
	t.each(n,function(n,u) {
	o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)
}
)}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");
	l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r) {
	if(!("type"in i))return t.ajax(i);
	var f,h,o=i.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c=function(e) {
	t(s).triggerHandler("error",e||"abort")
}
,l= {
	abort:c
}
;return r&&r.promise(l),t(s).on("load error",function(e,n) {
	clearTimeout(h),t(s).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[a]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0
}
),g(l,i)===!1?(c("abort"),l):(window[a]=function() {
	f=arguments
}
,s.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),n.head.appendChild(s),i.timeout>0&&(h=setTimeout(function() {
	c("timeout")
}
,i.timeout)),l)},t.ajaxSettings= {
	type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function() {
	return new window.XMLHttpRequest
}
,accepts: {
	script:"text/javascript,application/javascript,application/x-javascript",json:u,xml:"application/xml,text/xml",html:f,text:"text/plain"
}
,crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e) {
	var s,o=t.extend( {
	},e|| {
	}),a=t.Deferred&&t.Deferred();
	for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);
	d(o),o.crossDomain||(s=n.createElement("a"),s.href=o.url,s.href=s.href,o.crossDomain=l.protocol+"//"+l.host!=s.protocol+"//"+s.host),o.url||(o.url=window.location.toString()),T(o);
	var u=o.dataType,f=/\?.+=\?/.test(o.url);
	if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,a);
	var C,h=o.accepts[u],p= {
	},m=function(t,e) {
	p[t.toLowerCase()]=[t,e]
}
,w=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),j=S.setRequestHeader;
	if(a&&a.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);
	if(S.setRequestHeader=m,S.onreadystatechange=function() {
	if(4==S.readyState) {
	S.onreadystatechange=b,clearTimeout(C);
	var e,n=!1;
	if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==w) {
	u=u||x(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;
	try {
	"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))
}
catch(i) {
	n=i
}
n?y(n,"parsererror",S,o,a):v(e,S,o,a)}else y(S.statusText||null,S.status?"error":"abort",S,o,a)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,a),S;
	if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];
	var O="async"in o?o.async:!0;
	S.open(o.type,o.url,O,o.username,o.password);
	for(r in p)j.apply(S,p[r]);
	return o.timeout>0&&(C=setTimeout(function() {
	S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,a)
}
,o.timeout)),S.send(o.data?o.data:null),S},t.get=function() {
	return t.ajax(S.apply(null,arguments))
}
,t.post=function() {
	var e=S.apply(null,arguments);
	return e.type="POST",t.ajax(e)
}
,t.getJSON=function() {
	var e=S.apply(null,arguments);
	return e.dataType="json",t.ajax(e)
}
,t.fn.load=function(e,n,i) {
	if(!this.length)return this;
	var s,r=this,a=e.split(/\s/),u=S(e,n,i),f=u.success;
	return a.length>1&&(u.url=a[0],s=a[1]),u.success=function(e) {
	r.html(s?t("<div>").html(e.replace(o,"")).find(s):e),f&&f.apply(r,arguments)
}
,t.ajax(u),this};
	var j=encodeURIComponent;
	t.param=function(e,n) {
	var i=[];
	return i.add=function(e,n) {
	t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(j(e)+"="+j(n))
}
,C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t) {
	t.fn.serializeArray=function() {
	var e,n,i=[],r=function(t) {
	return t.forEach?t.forEach(r):void i.push( {
	name:e,value:t
}
)};
	return this[0]&&t.each(this[0].elements,function(i,o) {
	n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())
}
),i},t.fn.serialize=function() {
	var t=[];
	return this.serializeArray().forEach(function(e) {
	t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))
}
),t.join("&")},t.fn.submit=function(e) {
	if(0 in arguments)this.bind("submit",e);
	else if(this.length) {
	var n=t.Event("submit");
	this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()
}
return this}}(Zepto),function(t) {
	"__proto__"in {
	}||t.extend(t.zepto {
	Z:function(e,n) {
	return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e
}
,isZ:function(e) {
	return"array"===t.type(e)&&"__Z"in e
}
});
	try {
	getComputedStyle(void 0)
}
catch(e) {
	var n=getComputedStyle;
	window.getComputedStyle=function(t) {
	try {
	return n(t)
}
catch(e) {
	return null
}
}}}(Zepto),function(t) {
	function e(t,e) {
	var n=this.os= {
	},i=this.browser= {
	},r=t.match(/Web[kK]it[\/] {
	0,1
}
([\d.]+)/),o=t.match(/(Android);
	?[\s\/]+([\d.]+)?/),a=!!t.match(/\(Macintosh\;
	Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),u=t.match(/(iPod)(.*OS\s([\d_]+))?/),f=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),c=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=/Win\d {
	2
}
|Windows/.test(e),h=t.match(/Windows Phone ([\d.]+)/),p=c&&t.match(/TouchPad/),d=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),g=t.match(/(BlackBerry).*Version\/([\d.]+)/),v=t.match(/(BB10).*Version\/([\d.]+)/),y=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),w=t.match(/PlayBook/),b=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),x=t.match(/Firefox\/([\d.]+)/),E=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),T=!b&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),S=T||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
	(i.webkit=!!r)&&(i.version=r[1]),o&&(n.android=!0,n.version=o[2]),f&&!u&&(n.ios=n.iphone=!0,n.version=f[2].replace(/_/g,".")),s&&(n.ios=n.ipad=!0,n.version=s[2].replace(/_/g,".")),u&&(n.ios=n.ipod=!0,n.version=u[3]?u[3].replace(/_/g,"."):null),h&&(n.wp=!0,n.version=h[1]),c&&(n.webos=!0,n.version=c[2]),p&&(n.touchpad=!0),g&&(n.blackberry=!0,n.version=g[2]),v&&(n.bb10=!0,n.version=v[2]),y&&(n.rimtabletos=!0,n.version=y[2]),w&&(i.playbook=!0),d&&(n.kindle=!0,n.version=d[1]),m&&(i.silk=!0,i.version=m[1]),!m&&n.android&&t.match(/Kindle Fire/)&&(i.silk=!0),b&&(i.chrome=!0,i.version=b[1]),x&&(i.firefox=!0,i.version=x[1]),E&&(i.ie=!0,i.version=E[1]),S&&(a||n.ios||l)&&(i.safari=!0,n.ios||(i.version=S[1])),T&&(i.webview=!0),n.tablet=!!(s||w||o&&!t.match(/Mobile/)||x&&t.match(/Tablet/)||E&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(o||f||c||g||v||b&&t.match(/Android/)||b&&t.match(/CriOS\/([\d.]+)/)||x&&t.match(/Mobile/)||E&&t.match(/Touch/)))}e.call(t,navigator.userAgent,navigator.platform),t.__detect=e}(Zepto),function(t,e) {
	function b(t) {
	return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()
}
function x(t) {
	return i?i+t:t.toLowerCase()
}
var i,c,l,h,p,d,m,g,v,y,n="",a= {
	Webkit:"webkit",Moz:"",O:"o"
}
,s=window.document,u=s.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w= {
	};
	t.each(a,function(t,r) {
	return u.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0
}
),c=n+"transform",w[l=n+"transition-property"]=w[h=n+"transition-duration"]=w[d=n+"transition-delay"]=w[p=n+"transition-timing-function"]=w[m=n+"animation-name"]=w[g=n+"animation-duration"]=w[y=n+"animation-delay"]=w[v=n+"animation-timing-function"]="",t.fx= {
	off:i===e&&u.style.transitionProperty===e,speeds: {
	_default:400,fast:200,slow:600
}
,cssPrefix:n,transitionEnd:x("TransitionEnd"),animationEnd:x("AnimationEnd")},t.fn.animate=function(n,i,r,o,a) {
	return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)
}
,t.fn.anim=function(n,i,r,o,a) {
	var s,x,S,u= {
	},E="",T=this,j=t.fx.transitionEnd,C=!1;
	if(i===e&&(i=t.fx.speeds._default/1e3),a===e&&(a=0),t.fx.off&&(i=0),"string"==typeof n)u[m]=n,u[g]=i+"s",u[y]=a+"s",u[v]=r||"linear",j=t.fx.animationEnd;
	else {
	x=[];
	for(s in n)f.test(s)?E+=s+"("+n[s]+") ":(u[s]=n[s],x.push(b(s)));
	E&&(u[c]=E,x.push(c)),i>0&&"object"==typeof n&&(u[l]=x.join(","),u[h]=i+"s",u[d]=a+"s",u[p]=r||"linear")
}
return S=function(e) {
	if("undefined"!=typeof e) {
	if(e.target!==e.currentTarget)return;
	t(e.target).unbind(j,S)
}
else t(this).unbind(j,S);
	C=!0,t(this).css(w),o&&o.call(this)},i>0&&(this.bind(j,S),setTimeout(function() {
	C||S.call(T)
}
,1e3*(i+a)+25)),this.size()&&this.get(0).clientLeft,this.css(u),0>=i&&setTimeout(function() {
	T.each(function() {
	S.call(this)
}
)},0),this},u=null}(Zepto),function(t,e) {
	function s(n,i,r,o,a) {
	"function"!=typeof i||a||(a=i,i=e);
	var s= {
	opacity:r
}
;return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function u(e,n,i,r) {
	return s(e,n,0,i,function() {
	o.call(t(this)),r&&r.call(this)
}
)}var n=window.document,r=(n.documentElement,t.fn.show),o=t.fn.hide,a=t.fn.toggle;
	t.fn.show=function(t,n) {
	return r.call(this),t===e?t=0:this.css("opacity",0),s(this,t,1,"1,1",n)
}
,t.fn.hide=function(t,n) {
	return t===e?o.call(this):u(this,t,"0,0",n)
}
,t.fn.toggle=function(n,i) {
	return n===e||"boolean"==typeof n?a.call(this,n):this.each(function() {
	var e=t(this);
	e["none"==e.css("display")?"show":"hide"](n,i)
}
)},t.fn.fadeTo=function(t,e,n) {
	return s(this,t,e,null,n)
}
,t.fn.fadeIn=function(t,e) {
	var n=this.css("opacity");
	return n>0?this.css("opacity",0):n=1,r.call(this).fadeTo(t,n,e)
}
,t.fn.fadeOut=function(t,e) {
	return u(this,t,null,e)
}
,t.fn.fadeToggle=function(e,n) {
	return this.each(function() {
	var i=t(this);
	i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)
}
)}}(Zepto),function(t) {
	var n,e=[];
	t.fn.remove=function() {
	return this.each(function() {
	this.parentNode&&("IMG"===this.tagName&&(e.push(this),this.src="data:image/gif;
	base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",n&&clearTimeout(n),n=setTimeout(function() {
	e=[]
}
,6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t) {
	function a(o,a) {
	var u=o[r],f=u&&e[u];
	if(void 0===a)return f||s(o);
	if(f) {
	if(a in f)return f[a];
	var c=i(a);
	if(c in f)return f[c]
}
return n.call(t(o),a)}function s(n,o,a) {
	var s=n[r]||(n[r]=++t.uuid),f=e[s]||(e[s]=u(n));
	return void 0!==o&&(f[i(o)]=a),f
}
function u(e) {
	var n= {
	};
	return t.each(e.attributes||o,function(e,r) {
	0==r.name.indexOf("data-")&&(n[i(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))
}
),n}var e= {
	},n=t.fn.data,i=t.camelCase,r=t.expando="Zepto"+ +new Date,o=[];
	t.fn.data=function(e,n) {
	return void 0===n?t.isPlainObject(e)?this.each(function(n,i) {
	t.each(e,function(t,e) {
	s(i,t,e)
}
)}):0 in this?a(this[0],e):void 0:this.each(function() {
	s(this,e,n)
}
)},t.fn.removeData=function(n) {
	return"string"==typeof n&&(n=n.split(/\s+/)),this.each(function() {
	var o=this[r],a=o&&e[o];
	a&&t.each(n||a,function(t) {
	delete a[n?i(this):t]
}
)})},["remove","empty"].forEach(function(e) {
	var n=t.fn[e];
	t.fn[e]=function() {
	var t=this.find("*");
	return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)
}
})}(Zepto),function(t) {
	function n(e) {
	var i=[["resolve","done",t.Callbacks( {
	once:1,memory:1
}
),"resolved"],["reject","fail",t.Callbacks( {
	once:1,memory:1
}
),"rejected"],["notify","progress",t.Callbacks( {
	memory:1
}
)]],r="pending",o= {
	state:function() {
	return r
}
,always:function() {
	return a.done(arguments).fail(arguments),this
}
,then:function() {
	var e=arguments;
	return n(function(n) {
	t.each(i,function(i,r) {
	var s=t.isFunction(e[i])&&e[i];
	a[r[1]](function() {
	var e=s&&s.apply(this,arguments);
	if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
	else {
	var i=this===o?n.promise():this,a=s?[e]:arguments;
	n[r[0]+"With"](i,a)
}
})}),e=null}).promise();},promise:function(e) {
	return null!=e?t.extend(e,o):o
}
},a= {
	};
	return t.each(i,function(t,e) {
	var n=e[2],s=e[3];
	o[e[1]]=n.add,s&&n.add(function() {
	r=s
}
,i[1^t][2].disable,i[2][2].lock),a[e[0]]=function() {
	return a[e[0]+"With"](this===a?o:this,arguments),this
}
,a[e[0]+"With"]=n.fireWith}),o.promise(a),e&&e.call(a,a),a}var e=Array.prototype.slice;
	t.when=function(i) {
	var f,c,l,r=e.call(arguments),o=r.length,a=0,s=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===s?i:n(),h=function(t,n,i) {
	return function(r) {
	n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--s||u.resolveWith(n,i)
}
};
	if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);
	o>a;
	++a)r[a]&&t.isFunction(r[a].promise)?r[a].promise().done(h(a,l,r)).fail(u.reject).progress(h(a,c,f)):--s;
	return s||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t) {
	t.Callbacks=function(e) {
	e=t.extend( {
	},e);
	var n,i,r,o,a,s,u=[],f=!e.once&&[],c=function(t) {
	for(n=e.memory&&t,i=!0,s=o||0,o=0,a=u.length,r=!0;
	u&&a>s;
	++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse) {
	n=!1;
	break
}
r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l= {
	add:function() {
	if(u) {
	var i=u.length,s=function(n) {
	t.each(n,function(t,n) {
	"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)
}
)};
	s(arguments),r?a=u.length:n&&(o=i,c(n))}return this},remove:function() {
	return u&&t.each(arguments,function(e,n) {
	for(var i;
	(i=t.inArray(n,u,i))>-1;
	)u.splice(i,1),r&&(a>=i&&--a,s>=i&&--s)
}
),this},has:function(e) {
	return!(!u||!(e?t.inArray(e,u)>-1:u.length))
}
,empty:function() {
	return a=u.length=0,this
}
,disable:function() {
	return u=f=n=void 0,this
}
,disabled:function() {
	return!u
}
,lock:function() {
	return f=void 0,n||l.disable(),this
}
,locked:function() {
	return!f
}
,fireWith:function(t,e) {
	return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this
}
,fire:function() {
	return l.fireWith(this,arguments)
}
,fired:function() {
	return!!i
}
};
	return l}}(Zepto),function(t) {
	function r(e) {
	return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")
}
function f(t,e) {
	t=t.replace(/=#\]/g,'="#"]');
	var n,i,r=a.exec(t);
	if(r&&r[2]in o&&(n=o[r[2]],i=r[3],t=r[1],i)) {
	var s=Number(i);
	i=isNaN(s)?i.replace(/^["']|["']$/g,""):s
}
return e(t,n,i)}var e=t.zepto,n=e.qsa,i=e.matches,o=t.expr[":"]= {
	visible:function() {
	return r(this)?this:void 0
}
,hidden:function() {
	return r(this)?void 0:this
}
,selected:function() {
	return this.selected?this:void 0
}
,checked:function() {
	return this.checked?this:void 0
}
,parent:function() {
	return this.parentNode
}
,first:function(t) {
	return 0===t?this:void 0
}
,last:function(t,e) {
	return t===e.length-1?this:void 0
}
,eq:function(t,e,n) {
	return t===n?this:void 0
}
,contains:function(e,n,i) {
	return t(this).text().indexOf(i)>-1?this:void 0
}
,has:function(t,n,i) {
	return e.qsa(this,i).length?this:void 0
}
},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),s=/^\s*>/,u="Zepto"+ +new Date;
	e.qsa=function(i,r) {
	return f(r,function(o,a,f) {
	try {
	var c;
	!o&&a?o="*":s.test(o)&&(c=t(i).addClass(u),o="."+u+" "+o);
	var l=n(i,o)
}
catch(h) {
	throw console.error("error performing selector:%o",r),h
}
finally {
	c&&c.removeClass(u)
}
return a?e.uniq(t.map(l,function(t,e) {
	return a.call(t,e,l,f)
}
)):l})},e.matches=function(t,e) {
	return f(e,function(e,n,r) {
	return(!e||i(t,e))&&(!n||n.call(t,null,r)===t)
}
)}}(Zepto),function(t) {
	function u(t,e,n,i) {
	return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"
}
function f() {
	o=null,e.last&&(e.el.trigger("longTap"),e= {
	})
}
function c() {
	o&&clearTimeout(o),o=null
}
function l() {
	n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e= {
	}
}
function h(t) {
	return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary
}
function p(t,e) {
	return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e
}
var n,i,r,o,s,e= {
	},a=750;
	t(document).ready(function() {
	var d,m,y,w,g=0,v=0;
	"MSGesture"in window&&(s=new MSGesture,s.target=document.body),t(document).bind("MSGestureEnd",function(t) {
	var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;
	n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))
}
).on("touchstart MSPointerDown pointerdown",function(i) {
	(!(w=p(i,"down"))||h(i))&&(y=w?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,a),s&&w&&s.addPointer(i.pointerId))
}
).on("touchmove MSPointerMove pointermove",function(t) {
	(!(w=p(t,"move"))||h(t))&&(y=w?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,g+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))
}
).on("touchend MSPointerUp pointerup",function(o) {
	(!(w=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function() {
	e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e= {
	}
}
,0):"last"in e&&(30>g&&30>v?i=setTimeout(function() {
	var i=t.Event("tap");
	i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e= {
	}):n=setTimeout(function() {
	n=null,e.el&&e.el.trigger("singleTap"),e= {
	}
}
,250)},0):e= {
	}),g=v=0)
}
).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e) {
	t.fn[e]=function(t) {
	return this.on(e,t)
}
})}(Zepto),function(t) {
	function i(t) {
	return"tagName"in t?t:t.parentNode
}
if(t.os.ios) {
	var n,e= {
	};
	t(document).bind("gesturestart",function(t) {
	var r=Date.now();
	r-(e.last||r);
	e.target=i(t.target),n&&clearTimeout(n),e.e1=t.scale,e.last=r
}
).bind("gesturechange",function(t) {
	e.e2=t.scale
}
).bind("gestureend",function(n) {
	e.e2>0?(0!=Math.abs(e.e1-e.e2)&&t(e.target).trigger("pinch")&&t(e.target).trigger("pinch"+(e.e1-e.e2>0?"In":"Out")),e.e1=e.e2=e.last=0):"last"in e&&(e= {
	})
}
),["pinch","pinchIn","pinchOut"].forEach(function(e) {
	t.fn[e]=function(t) {
	return this.bind(e,t)
}
})}}(Zepto),function(t) {
	t.fn.end=function() {
	return this.prevObject||t()
}
,t.fn.andSelf=function() {
	return this.add(this.prevObject||t())
}
,"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
	var n=t.fn[e];
	t.fn[e]=function() {
	var t=n.apply(this,arguments);
	return t.prevObject=this,t
}
})}(Zepto),function(t) {
	String.prototype.trim===t&&(String.prototype.trim=function() {
	return this.replace(/^\s+|\s+$/g,"")
}
),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e) {
	if(void 0===this||null===this)throw new TypeError;
	var o,n=Object(this),i=n.length>>>0,r=0;
	if("function"!=typeof e)throw new TypeError;
	if(0==i&&1==arguments.length)throw new TypeError;
	if(arguments.length>=2)o=arguments[1];
	else for(;
	) {
	if(r in n) {
	o=n[r++];
	break
}
if(++r>=i)throw new TypeError}for(;
	i>r;
	)r in n&&(o=e.call(t,o,n[r],r,n)),r++;
	return o})}();
	define("zepto",(function (global) {
	return function () {
	var ret,fn;
	return ret || global.$;
}
;}(this)));
	/*!
 * CanJS - 2.1.3
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Mon,25 Aug 2014 21:51:36 GMT
 * Licensed MIT
 * Includes:can/component,can/construct,can/map,can/list,can/observe,can/compute,can/model,can/view,can/control,can/route,can/control/route,can/view/mustache,can/view/bindings,can/view/live,can/view/scope,can/util/string,can/util/attr
 * Download from:http://canjs.com
 */
// (function(undefined) {
	define('can',['zepto'],function (zepto) {
	// ## util/can.js
    var __m3 = (function() {
	var can = window.can || {
	};
	if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
	window.can = can;
}
// An empty function useful for where you need a dummy callback.
        can.k = function() {
	};
	can.isDeferred = function(obj) {
	// Returns `true` if something looks like a deferred.
            return obj && typeof obj.then === "function" && typeof obj.pipe === "function";
}
;var cid = 0;
	can.cid = function(object,name) {
	if (!object._cid) {
	cid++;
	object._cid = (name || '') + cid;
}
return object._cid;};
	can.VERSION = '2.1.3';
	can.simpleExtend = function(d,s) {
	for (var prop in s) {
	d[prop] = s[prop];
}
return d;};
	can.frag = function(item) {
	var frag;
	if (!item || typeof item === "string") {
	frag = can.buildFragment(item == null ? "":"" + item,document.body);
	// If we have an empty frag...
                if (!frag.childNodes.length) {
	frag.appendChild(document.createTextNode(''));
}
return frag;}else if (item.nodeType === 11) {
	return item;
}
else if (typeof item.nodeType === "number") {
	frag = document.createDocumentFragment();
	frag.appendChild(item);
	return frag;
}
else if (typeof item.length === "number") {
	frag = document.createDocumentFragment();
	can.each(item,function(item) {
	frag.appendChild(can.frag(item));
}
);
	return frag;}else {
	frag = can.buildFragment("" + item,document.body);
	// If we have an empty frag...
                if (!frag.childNodes.length) {
	frag.appendChild(document.createTextNode(''));
}
return frag;}};
	// this is here in case can.compute hasn't loaded
        can.__reading = function() {
	};
	return can;
}
)();
	// ## util/attr/attr.js
    var __m4 = (function(can) {
	// Acts as a polyfill for setImmediate which only works in IE 10+. Needed to make
        // the triggering of `attributes` event async.
        var setImmediate = window.setImmediate || function(cb) {
	return setTimeout(cb,0);
}
,attr = {
	// This property lets us know if the browser supports mutation observers.
                // If they are supported then that will be setup in can/util/jquery and those native events will be used to inform observers of attribute changes.
                // Otherwise this module handles triggering an `attributes` event on the element.
                MutationObserver:window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,map: {
	"class":"className","value":"value","innerText":"innerText","textContent":"textContent","checked":true,"disabled":true,"readonly":true,"required":true,// For the `src` attribute we are using a setter function to prevent values such as an empty string or null from being set.
                    // An `img` tag attempts to fetch the `src` when it is set,so we need to prevent that from happening by removing the attribute instead.
                    src:function(el,val) {
	if (val == null || val === "") {
	el.removeAttribute("src");
	return null;
}
else {
	el.setAttribute("src",val);
	return val;
}
},style:function(el,val) {
	return el.style.cssText = val || "";
}
},// These are elements whos default value we should set.
                defaultValue:["input","textarea"],// ## attr.set
                // Set the value an attribute on an element.
                set:function(el,attrName,val) {
	var oldValue;
	// In order to later trigger an event we need to compare the new value to the old value,so here we go ahead and retrieve the old value for browsers that don't have native MutationObservers.
                    if (!attr.MutationObserver) {
	oldValue = attr.get(el,attrName);
}
var tagName = el.nodeName.toString()
                        .toLowerCase(),prop = attr.map[attrName],newValue;
	// Using the property of `attr.map`,go through and check if the property is a function,and if so call it. Then check if the property is `true`,and if so set the value to `true`,also making sure to set `defaultChecked` to `true` for elements of `attr.defaultValue`. We always set the value to true because for these boolean properties,setting them to false would be the same as removing the attribute.
                    // For all other attributes use `setAttribute` to set the new value.
                    if (typeof prop === "function") {
	newValue = prop(el,val);
}
else if (prop === true) {
	newValue = el[attrName] = true;
	if (attrName === "checked" && el.type === "radio") {
	if (can.inArray(tagName,attr.defaultValue) >= 0) {
	el.defaultChecked = true;
}
}}else if (prop) {
	newValue = el[prop] = val;
	if (prop === "value" && can.inArray(tagName,attr.defaultValue) >= 0) {
	el.defaultValue = val;
}
}else {
	el.setAttribute(attrName,val);
	newValue = val;
}
// Now that the value has been set,for browsers without MutationObservers,check to see that value has changed and if so trigger the "attributes" event on the element.
                    if (!attr.MutationObserver && newValue !== oldValue) {
	attr.trigger(el,attrName,oldValue);
}
},// ## attr.trigger
                // Used to trigger an "attributes" event on an element. Checks to make sure that someone is listening for the event and then queues a function to be called asynchronously using `setImmediate.
                trigger:function(el,attrName,oldValue) {
	if (can.data(can.$(el),"canHasAttributesBindings")) {
	return setImmediate(function() {
	can.trigger(el {
	type:"attributes",attributeName:attrName,target:el,oldValue:oldValue,bubbles:false
}
,[]);});}},// ## attr.get
                // Gets the value of an attribute. First checks to see if the property is a string on `attr.map` and if so returns the value from the element's property. Otherwise uses `getAttribute` to retrieve the value.
                get:function(el,attrName) {
	var prop = attr.map[attrName];
	if (typeof prop === "string" && el[prop]) {
	return el[prop];
}
return el.getAttribute(attrName);},// ## attr.remove
                // Removes an attribute from an element. Works by using the `attr.map` to see if the attribute is a special type of property. If the property is a function then the fuction is called with `undefined` as the value. If the property is `true` then the attribute is set to false. If the property is a string then the attribute is set to an empty string. Otherwise `removeAttribute` is used.
                // If the attribute previously had a value and the browser doesn't support MutationObservers we then trigger an "attributes" event.
                remove:function(el,attrName) {
	var oldValue;
	if (!attr.MutationObserver) {
	oldValue = attr.get(el,attrName);
}
var setter = attr.map[attrName];
	if (typeof setter === "function") {
	setter(el,undefined);
}
if (setter === true) {
	el[attrName] = false;
}
else if (typeof setter === "string") {
	el[setter] = "";
}
else {
	el.removeAttribute(attrName);
}
if (!attr.MutationObserver && oldValue != null) {
	attr.trigger(el,attrName,oldValue);
}
},// ## attr.has
                // Checks if an element contains an attribute.
                // For browsers that support `hasAttribute`,creates a function that calls hasAttribute,otherwise creates a function that uses `getAttribute` to check that the attribute is not null.
                has:(function() {
	var el = document.createElement('div');
	if (el.hasAttribute) {
	return function(el,name) {
	return el.hasAttribute(name);
}
;}else {
	return function(el,name) {
	return el.getAttribute(name) !== null;
}
;}})()};
	return attr;})(__m3);
	// ## event/event.js
    var __m5 = (function(can) {
	// ## can.event.addEvent
        // Adds a basic event listener to an object.
        // This consists of storing a cache of event listeners on each object,// that are iterated through later when events are dispatched.

        can.addEvent = function(event,handler) {
	// Initialize event cache.
            var allEvents = this.__bindEvents || (this.__bindEvents = {
	}),eventList = allEvents[event] || (allEvents[event] = []);
	// Add the event
            eventList.push( {
	handler:handler,name:event
}
);
	return this;};
	// ## can.event.listenTo
        // Listens to an event without know how bind is implemented.
        // The primary use for this is to listen to another's objects event while
        // tracking events on the local object (similar to namespacing).
        // The API was heavily influenced by BackboneJS:http://backbonejs.org/

        can.listenTo = function(other,event,handler) {
	// Initialize event cache
            var idedEvents = this.__listenToEvents;
	if (!idedEvents) {
	idedEvents = this.__listenToEvents = {
	};
}
// Identify the other object
            var otherId = can.cid(other);
	var othersEvents = idedEvents[otherId];
	// Create a local event cache
            if (!othersEvents) {
	othersEvents = idedEvents[otherId] = {
	obj:other,events: {
	}
}
;}var eventsEvents = othersEvents.events[event];
	if (!eventsEvents) {
	eventsEvents = othersEvents.events[event] = [];
}
// Add the event,both locally and to the other object
            eventsEvents.push(handler);
	can.bind.call(other,event,handler);
}
;// ## can.event.stopListening
        // Stops listening for events on other objects

        can.stopListening = function(other,event,handler) {
	var idedEvents = this.__listenToEvents,iterIdedEvents = idedEvents,i = 0;
	if (!idedEvents) {
	return this;
}
if (other) {
	var othercid = can.cid(other);
	(iterIdedEvents = {
	})[othercid] = idedEvents[othercid];
	// you might be trying to listen to something that is not there
                if (!idedEvents[othercid]) {
	return this;
}
}// Clean up events on the other object
            for (var cid in iterIdedEvents) {
	var othersEvents = iterIdedEvents[cid],eventsEvents;
	other = idedEvents[cid].obj;
	// Find the cache of events
                if (!event) {
	eventsEvents = othersEvents.events;
}
else {
	(eventsEvents = {
	})[event] = othersEvents.events[event];
}
// Unbind event handlers,both locally and on the other object
                for (var eventName in eventsEvents) {
	var handlers = eventsEvents[eventName] || [];
	i = 0;
	while (i < handlers.length) {
	if (handler && handler === handlers[i] || !handler) {
	can.unbind.call(other,eventName,handlers[i]);
	handlers.splice(i,1);
}
else {
	i++;
}
}// no more handlers?
                    if (!handlers.length) {
	delete othersEvents.events[eventName];
}
}if (can.isEmptyObject(othersEvents.events)) {
	delete idedEvents[cid];
}
}return this;};
	// ## can.event.removeEvent
        // Removes a basic event listener from an object.
        // This removes event handlers from the cache of listened events.

        can.removeEvent = function(event,fn,__validate) {
	if (!this.__bindEvents) {
	return this;
}
var events = this.__bindEvents[event] || [],i = 0,ev,isFunction = typeof fn === 'function';
	while (i < events.length) {
	ev = events[i];
	// Determine whether this event handler is "equivalent" to the one requested
                // Generally this requires the same event/function,but a validation function
                // can be included for extra conditions. This is used in some plugins like `can/event/namespace`.
                if (__validate ? __validate(ev,event,fn):isFunction && ev.handler === fn || !isFunction && (ev.cid === fn || !fn)) {
	events.splice(i,1);
}
else {
	i++;
}
}return this;};
	// ## can.event.dispatch
        // Dispatches/triggers a basic event on an object.

        can.dispatch = function(event,args) {
	var events = this.__bindEvents;
	if (!events) {
	return;
}
// Initialize the event object
            if (typeof event === 'string') {
	event = {
	type:event
}
;}// Grab event listeners
            var eventName = event.type,handlers = (events[eventName] || []).slice(0),passed = [event];
	// Execute handlers listening for this event.
            if (args) {
	passed.push.apply(passed,args);
}
for (var i = 0,len = handlers.length;
	i < len;
	i++) {
	handlers[i].handler.apply(this,passed);
}
return event;};
	// ## can.event.one
        // Adds a basic event listener that listens to an event once and only once.

        can.one = function(event,handler) {
	// Unbind the listener after it has been executed
            var one = function() {
	can.unbind.call(this,event,one);
	return handler.apply(this,arguments);
}
;// Bind the altered listener
            can.bind.call(this,event,one);
	return this;
}
;// ## can.event
        // Create and export the `can.event` mixin
        can.event = {
	// Event method aliases

            on:function() {
	if (arguments.length === 0 && can.Control && this instanceof can.Control) {
	return can.Control.prototype.on.call(this);
}
else {
	return can.addEvent.apply(this,arguments);
}
},off:function() {
	if (arguments.length === 0 && can.Control && this instanceof can.Control) {
	return can.Control.prototype.off.call(this);
}
else {
	return can.removeEvent.apply(this,arguments);
}
},bind:can.addEvent,unbind:can.removeEvent,delegate:function(selector,event,handler) {
	return can.addEvent.call(this,event,handler);
}
,undelegate:function(selector,event,handler) {
	return can.removeEvent.call(this,event,handler);
}
,trigger:can.dispatch,// Normal can/event methods
            one:can.one,addEvent:can.addEvent,removeEvent:can.removeEvent,listenTo:can.listenTo,stopListening:can.stopListening,dispatch:can.dispatch
}
;return can.event;})(__m3);
	// ## util/object/isplain/isplain.js
    var __m7 = (function(can) {
	var core_hasOwn = Object.prototype.hasOwnProperty,isWindow = function(obj) {
	// In IE8 window.window !== window.window,so we allow == here.

                return obj !== null && obj == obj.window;
}
,isPlainObject = function(obj) {
	// Must be an Object.
                // Because of IE,we also have to check the presence of the constructor property.
                // Make sure that DOM nodes and window objects don't pass through,as well
                if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
	return false;
}
try {
	// Not own constructor property must be Object
                    if (obj.constructor && !core_hasOwn.call(obj,'constructor') && !core_hasOwn.call(obj.constructor.prototype,'isPrototypeOf')) {
	return false;
}
}catch (e) {
	// IE8,9 Will throw exceptions on certain host objects #9897
                    return false;
}
// Own properties are enumerated firstly,so to speed up,// if last one is own,then all properties are own.
                var key;
	for (key in obj) {
	}return key === undefined || core_hasOwn.call(obj,key);
}
;can.isPlainObject = isPlainObject;
	return can;})(__m3);
	// ## util/fragment.js
    var __m8 = (function(can) {
	// fragment.js
        // ---------
        // _DOM Fragment support._
        var fragmentRE = /^\s*<(\w+)[^>]*>/,toString = {
	}.toString,fragment = function(html,name) {
	if (name === undefined) {
	name = fragmentRE.test(html) && RegExp.$1;
}
if (html && toString.call(html.replace) === "[object Function]") {
	// Fix "XHTML"-style tags in all browsers
                    html = html.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,'<$1></$2>');
}
var container = document.createElement('div'),temp = document.createElement('div');
	// IE's parser will strip any `<tr><td>` tags when `innerHTML`
                // is called on a `tbody`. To get around this,we construct a
                // valid table with a `tbody` that has the `innerHTML` we want.
                // Then the container is the `firstChild` of the `tbody`.
                // [source](http://www.ericvasilik.com/2006/07/code-karma.html).
                if (name === 'tbody' || name === 'tfoot' || name === 'thead') {
	temp.innerHTML = '<table>' + html + '</table>';
	container = temp.firstChild.nodeType === 3 ? temp.lastChild:temp.firstChild;
}
else if (name === 'tr') {
	temp.innerHTML = '<table><tbody>' + html + '</tbody></table>';
	container = temp.firstChild.nodeType === 3 ? temp.lastChild:temp.firstChild.firstChild;
}
else if (name === 'td' || name === 'th') {
	temp.innerHTML = '<table><tbody><tr>' + html + '</tr></tbody></table>';
	container = temp.firstChild.nodeType === 3 ? temp.lastChild:temp.firstChild.firstChild.firstChild;
}
else if (name === 'option') {
	temp.innerHTML = '<select>' + html + '</select>';
	container = temp.firstChild.nodeType === 3 ? temp.lastChild:temp.firstChild;
}
else {
	container.innerHTML = '' + html;
}
// IE8 barfs if you pass slice a `childNodes` object,so make a copy.
                var tmp = {
	},children = container.childNodes;
	tmp.length = children.length;
	for (var i = 0;
	i < children.length;
	i++) {
	tmp[i] = children[i];
}
return [].slice.call(tmp);};
	can.buildFragment = function(html,nodes) {
	if (html && html.nodeType === 11) {
	return html;
}
var parts = fragment(html),frag = document.createDocumentFragment();
	for (var i = 0,length = parts.length;
	i < length;
	i++) {
	frag.appendChild(parts[i]);
}
return frag;};
	// ## Fix build fragment.
        // In IE8,we can pass a fragment and it removes newlines.
        // This checks for that and replaces can.buildFragment with something
        // that if only a single text node is returned,returns a fragment with
        // a text node that is set to the content.
        (function() {
	var text = "<-\n>",frag = can.buildFragment(text,document);
	if (text !== frag.childNodes[0].nodeValue) {
	var oldBuildFragment = can.buildFragment;
	can.buildFragment = function(html,nodes) {
	var res = oldBuildFragment(html,nodes);
	if (res.childNodes.length === 1 && res.childNodes[0].nodeType === 3) {
	res.childNodes[0].nodeValue = html;
}
return res;};}})();
	return can;})(__m3);
	// ## util/deferred.js
    var __m9 = (function(can) {
	// deferred.js
        // ---------
        // _Lightweight,jQuery style deferreds._
        // extend is usually provided by the wrapper but to avoid steal.then calls
        // we define a simple extend here as well
        var extend = function(target,src) {
	for (var key in src) {
	if (src.hasOwnProperty(key)) {
	target[key] = src[key];
}
}},Deferred = function(func) {
	if (!(this instanceof Deferred)) {
	return new Deferred();
}
this._doneFuncs = [];
	this._failFuncs = [];
	this._resultArgs = null;
	this._status = '';
	// Check for option `function` -- call it with this as context and as first
                // parameter,as specified in jQuery API.
                if (func) {
	func.call(this,this);
}
};
	can.Deferred = Deferred;
	can.when = Deferred.when = function() {
	var args = can.makeArray(arguments);
	if (args.length < 2) {
	var obj = args[0];
	if (obj && (can.isFunction(obj.isResolved) && can.isFunction(obj.isRejected))) {
	return obj;
}
else {
	return Deferred()
                        .resolve(obj);
}
}else {
	var df = Deferred(),done = 0,// Resolve params -- params of each resolve,we need to track them down
                    // to be able to pass them in the correct order if the master
                    // needs to be resolved.
                    rp = [];
	can.each(args,function(arg,j) {
	arg.done(function() {
	rp[j] = arguments.length < 2 ? arguments[0]:arguments;
	if (++done === args.length) {
	df.resolve.apply(df,rp);
}
})
                        .fail(function() {
	df.reject(arguments.length === 1 ? arguments[0]:arguments);
}
);});
	return df;}};
	var resolveFunc = function(type,_status) {
	return function(context) {
	var args = this._resultArgs = arguments.length > 1 ? arguments[1]:[];
	return this.exec(context,this[type],args,_status);
}
;},doneFunc = function doneFunc(type,_status) {
	return function() {
	var self = this;
	// In Safari,the properties of the `arguments` object are not enumerable,// so we have to convert arguments to an `Array` that allows `can.each` to loop over them.
                    can.each(Array.prototype.slice.call(arguments),function(v,i,args) {
	if (!v) {
	return;
}
if (v.constructor === Array) {
	doneFunc.apply(self,v);
}
else {
	// Immediately call the `function` if the deferred has been resolved.
                            if (self._status === _status) {
	v.apply(self,self._resultArgs || []);
}
self[type].push(v);}});
	return this;};};
	var isDeferred = function(obj) {
	return obj && obj.then && obj.fail && obj.done;
}
;var wire = function(parentDeferred,result,setter,value) {
	if (isDeferred(result)) {
	result.done(can.proxy(parentDeferred.resolve,parentDeferred))
                    .fail(can.proxy(parentDeferred.reject,parentDeferred));
}
else {
	setter.call(parentDeferred,result !== undefined ? result:value);
}
};
	extend(Deferred.prototype {
	then:function(done,fail) {
	var d = can.Deferred(),resolve = d.resolve,reject = d.reject;
	this.done(function(value) {
	if (typeof done === "function") {
	wire(d,done.apply(this,arguments),resolve,value);
}
else {
	resolve.apply(d,arguments);
}
});
	this.fail(function(value) {
	if (typeof fail === "function") {
	wire(d,fail.apply(this,arguments),reject,value);
}
else {
	reject.apply(d,arguments);
}
});
	return d;},resolveWith:resolveFunc('_doneFuncs','rs'),rejectWith:resolveFunc('_failFuncs','rj'),done:doneFunc('_doneFuncs','rs'),fail:doneFunc('_failFuncs','rj'),always:function() {
	var args = can.makeArray(arguments);
	if (args.length && args[0]) {
	this.done(args[0])
                            .fail(args[0]);
}
return this;},state:function() {
	switch (this._status) {
	case 'rs':return 'resolved';
	case 'rj':return 'rejected';
	default:return 'pending';
}
},isResolved:function() {
	return this._status === 'rs';
}
,isRejected:function() {
	return this._status === 'rj';
}
,reject:function() {
	return this.rejectWith(this,arguments);
}
,resolve:function() {
	return this.resolveWith(this,arguments);
}
,exec:function(context,dst,args,st) {
	if (this._status !== '') {
	return this;
}
this._status = st;
	can.each(dst,function(d) {
	if (typeof d.apply === 'function') {
	d.apply(context,args);
}
});
	return this;},promise:function() {
	var promise = this.then();
	promise.reject = promise.resolve = undefined;
	return promise;
}
});
	Deferred.prototype.pipe = Deferred.prototype.then;
	return can;})(__m3);
	// ## util/array/each.js
    var __m10 = (function(can) {
	// The following is from jQuery
        var isArrayLike = function(obj) {
	var length = obj.length;
	return typeof arr !== "function" &&
            (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
}
;can.each = function(elements,callback,context) {
	var i = 0,key,len,item;
	if (elements) {
	if (isArrayLike(elements)) {
	if (can.List && elements instanceof can.List) {
	for (len = elements.attr("length");
	i < len;
	i++) {
	item = elements.attr(i);
	if (callback.call(context || item,item,i,elements) === false) {
	break;
}
}}else {
	for (len = elements.length;
	i < len;
	i++) {
	item = elements[i];
	if (callback.call(context || item,item,i,elements) === false) {
	break;
}
}}}else if (typeof elements === "object") {
	if (can.Map && elements instanceof can.Map || elements === can.route) {
	var keys = can.Map.keys(elements);
	for (i = 0,len = keys.length;
	i < len;
	i++) {
	key = keys[i];
	item = elements.attr(key);
	if (callback.call(context || item,item,key,elements) === false) {
	break;
}
}}else {
	for (key in elements) {
	if (elements.hasOwnProperty(key) && callback.call(context || elements[key],elements[key],key,elements) === false) {
	break;
}
}}}}return elements;};
	return can;})(__m3);
	// ## util/inserted/inserted.js
    var __m11 = (function(can) {
	can.inserted = function(elems) {
	// Turn the `elems` property into an array to prevent mutations from changing the looping.
            elems = can.makeArray(elems);
	var inDocument = false,// Gets the `doc` to use as a reference for finding out whether the element is in the document.
                doc = can.$(document.contains ? document:document.body),children;
	// Go through `elems` and trigger the `inserted` event.
            // If the first element is not in the document (a Document Fragment) it will exit the function. If it is in the document it sets the `inDocument` flag to true. This means that we only check for the first element and either exit the function or start triggering "inserted" for child elements.
            for (var i = 0,elem;
	(elem = elems[i]) !== undefined;
	i++) {
	if (!inDocument) {
	if (elem.getElementsByTagName) {
	if (can.has(doc,elem)
                            .length) {
	inDocument = true;
}
else {
	return;
}
}else {
	continue;
}
}// If we've found an element in the document then we can now trigger **"inserted"** for `elem` and all of its children. We are using `getElementsByTagName("*")` so that we grab all of the descendant nodes.
                if (inDocument && elem.getElementsByTagName) {
	children = can.makeArray(elem.getElementsByTagName("*"));
	can.trigger(elem,"inserted",[],false);
	for (var j = 0,child;
	(child = children[j]) !== undefined;
	j++) {
	can.trigger(child,"inserted",[],false);
}
}}};
	// ## can.appendChild
        // Used to append a node to an element and trigger the "inserted" event on all of the newly inserted children. Since `can.inserted` takes an array we convert the child to an array,or in the case of a DocumentFragment we first convert the childNodes to an array and call inserted on those.
        can.appendChild = function(el,child) {
	var children;
	if (child.nodeType === 11) {
	children = can.makeArray(child.childNodes);
}
else {
	children = [child];
}
el.appendChild(child);
	can.inserted(children);};
	// ## can.insertBefore
        // Like can.appendChild,used to insert a node to an element before a reference node and then trigger the "inserted" event.
        can.insertBefore = function(el,child,ref) {
	var children;
	if (child.nodeType === 11) {
	children = can.makeArray(child.childNodes);
}
else {
	children = [child];
}
el.insertBefore(child,ref);
	can.inserted(children);};})(__m3);
	// ## util/zepto/zepto.js
    var __m2 = (function(can,attr,event) {
	// data.js
        // ---------
        // _jQuery-like data methods._
        var $ = Zepto;
	// data.js
        // ---------
        // _jQuery-like data methods._
        var data = {
	},dataAttr = $.fn.data,uuid = $.uuid = +new Date(),exp = $.expando = 'Zepto' + uuid;
	function getData(node,name) {
	var id = node[exp],store = id && data[id];
	return name === undefined ? store || setData(node):(store && store[name]) || dataAttr.call($(node),name);
}
function setData(node,name,value) {
	var id = node[exp] || (node[exp] = ++uuid),store = data[id] || (data[id] = {
	});
	if (name !== undefined) {
	store[name] = value;
}
return store;}$.fn.data = function(name,value) {
	return value === undefined ?
                this.length === 0 ? undefined:getData(this[0],name):this.each(function(idx) {
	setData(this,name,$.isFunction(value) ?
                        value.call(this,idx,getData(this,name)):value);
}
);};
	$.cleanData = function(elems) {
	// trigger all the events ... then remove the data
            for (var i = 0,elem;
	(elem = elems[i]) !== undefined;
	i++) {
	can.trigger(elem,"removed",[],false);
}
for (i = 0;
	(elem = elems[i]) !== undefined;
	i++) {
	var id = elem[exp];
	delete data[id];
}
};
	// zepto.js
        // ---------
        // _Zepto node list._

        var oldEach = can.each;
	// Extend what you can out of Zepto.
        $.extend(can,Zepto);
	can.each = oldEach;
	can.attr = attr;
	can.event = event;
	var arrHas = function(obj,name) {
	return obj[0] && obj[0][name] || obj[name];
}
;// Do what's similar for jQuery.
        can.trigger = function(obj,event,args,bubble) {
	if (obj.trigger) {
	obj.trigger(event,args);
}
else if (arrHas(obj,"dispatchEvent")) {
	if (bubble === false) {
	$([obj])
                        .triggerHandler(event,args);
}
else {
	$([obj])
                        .trigger(event,args);
}
}else {
	if (typeof event === "string") {
	event = {
	type:event
}
;}event.target = event.target || obj;
	can.dispatch.call(obj,event,can.makeArray(args));}};
	can.$ = Zepto;
	can.bind = function(ev,cb) {
	// If we can bind to it...
            if (this.bind && this.bind !== can.bind) {
	this.bind(ev,cb);
}
else if (arrHas(this,"addEventListener")) {
	$([this])
                    .bind(ev,cb);
}
else {
	can.addEvent.call(this,ev,cb);
}
return this;};
	can.unbind = function(ev,cb) {
	// If we can bind to it...
            if (this.unbind && this.unbind !== can.unbind) {
	this.unbind(ev,cb);
}
else if (arrHas(this,"addEventListener")) {
	$([this])
                    .unbind(ev,cb);
}
else {
	can.removeEvent.call(this,ev,cb);
}
return this;};
	// Alias on/off to bind/unbind respectively
        can.on = can.bind;
	can.off = can.unbind;
	can.delegate = function(selector,ev,cb) {
	if (!selector) {
	// Zepto fails with no selector
                can.bind.call(this,ev,cb);
}
else if (this.delegate) {
	this.delegate(selector,ev,cb);
}
else if (arrHas(this,"addEventListener")) {
	$([this])
                    .delegate(selector,ev,cb);
}
else {
	// Make it bind-able...
                can.addEvent.call(this,ev,cb);
}
};
	can.undelegate = function(selector,ev,cb) {
	if (!selector) {
	// Zepto fails with no selector
                can.unbind.call(this,ev,cb);
}
else if (this.undelegate) {
	this.undelegate(selector,ev,cb);
}
else if (arrHas(this,"addEventListener")) {
	$([this])
                    .undelegate(selector,ev,cb);
}
else {
	// Make it bind-able...
                can.removeEvent.call(this,ev,cb);
}
};
	$.each(["append","filter","addClass","remove","data","has"],function(i,name) {
	can[name] = function(wrapped) {
	return wrapped[name].apply(wrapped,can.makeArray(arguments)
                    .slice(1));
}
;});
	can.makeArray = function(arr) {
	var ret = [];
	if (arr == null) {
	return [];
}
if (arr.length === undefined || typeof arr === 'string') {
	return [arr];
}
can.each(arr,function(a,i) {
	ret[i] = a;
}
);
	return ret;};
	can.proxy = function(f,ctx) {
	return function() {
	return f.apply(ctx,arguments);
}
;};
	// Make ajax.
        var XHR = $.ajaxSettings.xhr;
	$.ajaxSettings.xhr = function() {
	var xhr = XHR();
	var open = xhr.open;
	xhr.open = function(type,url,async) {
	open.call(this,type,url,ASYNC === undefined ? true:ASYNC);
}
;return xhr;};
	var ASYNC;
	var AJAX = $.ajax;
	var updateDeferred = function(xhr,d) {
	for (var prop in xhr) {
	if (typeof d[prop] === 'function') {
	d[prop] = function() {
	xhr[prop].apply(xhr,arguments);
}
;}else {
	d[prop] = prop[xhr];
}
}};
	can.ajax = function(options) {
	var success = options.success,error = options.error;
	var d = can.Deferred();
	options.success = function(data) {
	updateDeferred(xhr,d);
	d.resolve.call(d,data);
	if (success) {
	success.apply(this,arguments);
}
};
	options.error = function() {
	updateDeferred(xhr,d);
	d.reject.apply(d,arguments);
	if (error) {
	error.apply(this,arguments);
}
};
	if (options.async === false) {
	ASYNC = false;
}
var xhr = AJAX(options);
	ASYNC = undefined;
	updateDeferred(xhr,d);
	return d;};
	// Make destroyed and empty work.
        var $_empty = $.fn.empty;
	$.fn.empty = function() {
	this.each(function() {
	$.cleanData(this.getElementsByTagName('*'));
	this.innerHTML = '';
}
);
	return $_empty.call(this);};
	var $_remove = $.fn.remove;
	$.fn.remove = function() {
	this.each(function() {
	if (this.getElementsByTagName) {
	$.cleanData([this].concat(can.makeArray(this.getElementsByTagName('*'))));
}
});
	return $_remove.call(this);};
	can.trim = function(str) {
	return str.trim();
}
;can.isEmptyObject = function(object) {
	var name;
	for (name in object) {
	}return name === undefined;
}
;// Make extend handle `true` for deep.
        can.extend = function(first) {
	if (first === true) {
	var args = can.makeArray(arguments);
	args.shift();
	return $.extend.apply($,args);
}
return $.extend.apply($,arguments);};
	can.get = function(wrapped,index) {
	return wrapped[index];
}
;// setup inserted calls
        can.each(['after','prepend','before','append','html'],function(name) {
	var original = Zepto.fn[name];
	Zepto.fn[name] = function() {
	var elems,args = can.makeArray(arguments);
	if (args[0] != null) {
	// documentFragment
                    if (typeof args[0] === "string") {
	args[0] = $.zepto.fragment(args[0]);
}
if (args[0].nodeType === 11) {
	elems = can.makeArray(args[0].childNodes);
}
else {
	elems = [args[0]];
}
}var ret = original.apply(this,args);
	can.inserted(elems);
	return ret;};});
	// Setup attributes events

        // turn off mutation events for zepto
        delete attr.MutationObserver;
	var oldAttr = $.fn.attr;
	$.fn.attr = function(attrName,value) {
	var isString = typeof attrName === "string",oldValue,newValue;
	if (value !== undefined && isString) {
	oldValue = oldAttr.call(this,attrName);
}
var res = oldAttr.apply(this,arguments);
	if (value !== undefined && isString) {
	newValue = oldAttr.call(this,attrName);
}
if (newValue !== oldValue) {
	can.attr.trigger(this[0],attrName,oldValue);
}
return res;};
	var oldRemove = $.fn.removeAttr;
	$.fn.removeAttr = function(attrName) {
	var oldValue = oldAttr.call(this,attrName),res = oldRemove.apply(this,arguments);
	if (oldValue != null) {
	can.attr.trigger(this[0],attrName,oldValue);
}
return res;};
	var oldBind = $.fn.bind,oldUnbind = $.fn.unbind;
	$.fn.bind = function(event) {
	if (event === "attributes") {
	this.each(function() {
	var el = can.$(this);
	can.data(el,"canHasAttributesBindings",(can.data(el,"canHasAttributesBindings") || 0) + 1);
}
);}return oldBind.apply(this,arguments);};
	$.fn.unbind = function(event) {
	if (event === "attributes") {
	this.each(function() {
	var el = can.$(this),cur = can.data(el,"canHasAttributesBindings") || 0;
	if (cur <= 0) {
	can.data(el,"canHasAttributesBindings",0);
}
else {
	can.data(el,"canHasAttributesBindings",cur - 1);
}
});}return oldUnbind.apply(this,arguments);};
	return can;})(__m3,__m4,__m5,Zepto,__m7,__m8,__m9,__m10,__m11);
	// ## view/view.js
    var __m13 = (function(can) {
	var isFunction = can.isFunction,makeArray = can.makeArray,// Used for hookup `id`s.
            hookupId = 1;
	// internal utility methods
        // ------------------------

        // ##### makeRenderer

        var makeRenderer = function(textRenderer) {
	var renderer = function() {
	return $view.frag(textRenderer.apply(this,arguments));
}
;renderer.render = function() {
	return textRenderer.apply(textRenderer,arguments);
}
;return renderer;};
	// ##### checkText
        // Makes sure there's a template,if not,have `steal` provide a warning.
        var checkText = function(text,url) {
	if (!text.length) {
	// _removed if not used as a steal module_



                throw "can.view:No template or empty template:" + url;
}
};
	// ##### get
        // get a deferred renderer for provided url

        var get = function(obj,async) {
	var url = typeof obj === 'string' ? obj:obj.url,suffix = (obj.engine && '.' + obj.engine) || url.match(/\.[\w\d]+$/),type,// If we are reading a script element for the content of the template,// `el` will be set to that script element.
                el,// A unique identifier for the view (used for caching).
                // This is typically derived from the element id or
                // the url for the template.
                id;
	//If the url has a #,we assume we want to use an inline template
            //from a script element and not current page's HTML
            if (url.match(/^#/)) {
	url = url.substr(1);
}
// If we have an inline template,derive the suffix from the `text/???` part.
            // This only supports `<script>` tags.
            if (el = document.getElementById(url)) {
	suffix = '.' + el.type.match(/\/(x\-)?(.+)/)[2];
}
// If there is no suffix,add one.
            if (!suffix && !$view.cached[url]) {
	url += suffix = $view.ext;
}
// if the suffix was derived from the .match() operation,pluck out the first value
            if (can.isArray(suffix)) {
	suffix = suffix[0];
}
// Convert to a unique and valid id.
            id = $view.toId(url);
	// If an absolute path,use `steal`/`require` to get it.
            // You should only be using `//` if you are using an AMD loader like `steal` or `require` (not almond).
            if (url.match(/^\/\//)) {
	url = url.substr(2);
	url = !window.steal ?
                    url:steal.config()
                    .root.mapJoin("" + steal.id(url));
}
// Localize for `require` (not almond)
            if (window.require) {
	if (require.toUrl) {
	url = require.toUrl(url);
}
}// Set the template engine type.
            type = $view.types[suffix];
	// If it is cached,if ($view.cached[id]) {
	// Return the cached deferred renderer.
                return $view.cached[id];
	// Otherwise if we are getting this from a `<script>` element.
}
else if (el) {
	// Resolve immediately with the element's `innerHTML`.
                return $view.registerView(id,el.innerHTML,type);
}
else {
	// Make an ajax request for text.
                var d = new can.Deferred();
	can.ajax( {
	cache:false,async:async,url:url,dataType:'text',error:function(jqXHR) {
	checkText('',url);
	d.reject(jqXHR);
}
,success:function(text) {
	// Make sure we got some text back.
                            checkText(text,url);
	$view.registerView(id,text,type,d);
}
});
	return d;}};
	// ##### getDeferreds
        // Gets an `array` of deferreds from an `object`.
        // This only goes one level deep.

        var getDeferreds = function(data) {
	var deferreds = [];
	// pull out deferreds
            if (can.isDeferred(data)) {
	return [data];
}
else {
	for (var prop in data) {
	if (can.isDeferred(data[prop])) {
	deferreds.push(data[prop]);
}
}}return deferreds;};
	// ##### usefulPart
        // Gets the useful part of a resolved deferred.
        // When a jQuery.when is resolved,it returns an array to each argument.
        // Reference ($.when)[https://api.jquery.com/jQuery.when/]
        // This is for `model`s and `can.ajax` that resolve to an `array`.

        var usefulPart = function(resolved) {
	return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0]:resolved;
}
;// #### can.view
        //defines $view for internal use,can.template for backwards compatibility

        var $view = can.view = can.template = function(view,data,helpers,callback) {
	// If helpers is a `function`,it is actually a callback.
            if (isFunction(helpers)) {
	callback = helpers;
	helpers = undefined;
}
var result;
	// Get the result,if a renderer function is passed in,then we just use that to render the data
            if (isFunction(view)) {
	result = view(data,helpers,callback);
}
else {
	result = $view.renderAs("fragment",view,data,helpers,callback);
}
return result;};
	// can.view methods
        // --------------------------
        can.extend($view {
	// ##### frag
                // creates a fragment and hooks it up all at once

                frag:function(result,parentNode) {
	return $view.hookup($view.fragment(result),parentNode);
}
,// #### fragment
                // this is used internally to create a document fragment,insert it,then hook it up
                fragment:function(result) {
	if (typeof result !== "string" && result.nodeType === 11) {
	return result;
}
var frag = can.buildFragment(result,document.body);
	// If we have an empty frag...
                    if (!frag.childNodes.length) {
	frag.appendChild(document.createTextNode(''));
}
return frag;},// ##### toId
                // Convert a path like string into something that's ok for an `element` ID.
                toId:function(src) {
	return can.map(src.toString()
                        .split(/\/|\./g),function(part) {
	// Dont include empty strings in toId functions
                            if (part) {
	return part;
}
})
                        .join('_');
}
,// ##### toStr
                // convert argument to a string
                toStr:function(txt) {
	return txt == null ? "":"" + txt;
}
,// ##### hookup
                // attach the provided `fragment` to `parentNode`

                hookup:function(fragment,parentNode) {
	var hookupEls = [],id,func;
	// Get all `childNodes`.
                    can.each(fragment.childNodes ? can.makeArray(fragment.childNodes):fragment,function(node) {
	if (node.nodeType === 1) {
	hookupEls.push(node);
	hookupEls.push.apply(hookupEls,can.makeArray(node.getElementsByTagName('*')));
}
});
	// Filter by `data-view-id` attribute.
                    can.each(hookupEls,function(el) {
	if (el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id])) {
	func(el,parentNode,id);
	delete $view.hookups[id];
	el.removeAttribute('data-view-id');
}
});
	return fragment;},// `hookups` keeps list of pending hookups,ie fragments to attach to a parent node

                hookups: {
	},// `hook` factory method for hookup function inserted into templates
                // hookup functions are called after the html is rendered to the page
                // only implemented by EJS templates.

                hook:function(cb) {
	$view.hookups[++hookupId] = cb;
	return ' data-view-id=\'' + hookupId + '\'';
}
,cached: {
	},cachedRenderers: {
	},// cache view templates resolved via XHR on the client

                cache:true,// ##### register
                // given an info object,register a template type
                // different templating solutions produce strings or document fragments via their renderer function

                register:function(info) {
	this.types['.' + info.suffix] = info;
	// _removed if not used as a steal module_



                    can[info.suffix] = $view[info.suffix] = function(id,text) {
	var renderer,renderFunc;
	// If there is no text,assume id is the template text,so return a nameless renderer.
                        if (!text) {
	renderFunc = function() {
	if (!renderer) {
	// if the template has a fragRenderer already,just return that.
                                    if (info.fragRenderer) {
	renderer = info.fragRenderer(null,id);
}
else {
	renderer = makeRenderer(info.renderer(null,id));
}
}return renderer.apply(this,arguments);};
	renderFunc.render = function() {
	var textRenderer = info.renderer(null,id);
	return textRenderer.apply(textRenderer,arguments);
}
;return renderFunc;}var registeredRenderer = function() {
	if (!renderer) {
	if (info.fragRenderer) {
	renderer = info.fragRenderer(id,text);
}
else {
	renderer = info.renderer(id,text);
}
}return renderer.apply(this,arguments);};
	if (info.fragRenderer) {
	return $view.preload(id,registeredRenderer);
}
else {
	return $view.preloadStringRenderer(id,registeredRenderer);
}
};},//registered view types
                types: {
	},ext:".ejs",registerScript:function(type,id,src) {
	return 'can.view.preloadStringRenderer(\'' + id + '\',' + $view.types['.' + type].script(id,src) + ');
	';
}
,preload:function(id,renderer) {
	var def = $view.cached[id] = new can.Deferred()
                        .resolve(function(data,helpers) {
	return renderer.call(data,data,helpers);
}
);
	// set cache references (otherwise preloaded recursive views won't recurse properly)
                    def.__view_id = id;
	$view.cachedRenderers[id] = renderer;
	return renderer;
}
,preloadStringRenderer:function(id,stringRenderer) {
	return this.preload(id,makeRenderer(stringRenderer));
}
,// #### renderers
                // ---------------
                // can.view's primary purpose is to load templates (from strings or filesystem) and render them
                // can.view supports two different forms of rendering systems
                // mustache templates return a string based rendering function

                // stache (or other fragment based templating systems) return a document fragment,so 'hookup' steps are not required
                // ##### render
                //call `renderAs` with a hardcoded string,as view.render
                // always operates against resolved template files or hardcoded strings
                render:function(view,data,helpers,callback) {
	return can.view.renderAs("string",view,data,helpers,callback);
}
,// ##### renderTo
                renderTo:function(format,renderer,data,helpers) {
	return (format === "string" && renderer.render ? renderer.render:renderer)(data,helpers);
}
,renderAs:function(format,view,data,helpers,callback) {
	// If helpers is a `function`,it is actually a callback.
                    if (isFunction(helpers)) {
	callback = helpers;
	helpers = undefined;
}
// See if we got passed any deferreds.
                    var deferreds = getDeferreds(data);
	var reading,deferred,dataCopy,async,response;
	if (deferreds.length) {
	// Does data contain any deferreds?
                        // The deferred that resolves into the rendered content...
                        deferred = new can.Deferred();
	dataCopy = can.extend( {
	},data);
	// Add the view request to the list of deferreds.
                        deferreds.push(get(view,true));
	// Wait for the view and all deferreds to finish...
                        can.when.apply(can,deferreds)
                            .then(function(resolved) {
	// Get all the resolved deferreds.
                                var objs = makeArray(arguments),// Renderer is the last index of the data.
                                    renderer = objs.pop(),// The result of the template rendering with data.
                                    result;
	// Make data look like the resolved deferreds.
                                if (can.isDeferred(data)) {
	dataCopy = usefulPart(resolved);
}
else {
	// Go through each prop in data again and
                                    // replace the defferreds with what they resolved to.
                                    for (var prop in data) {
	if (can.isDeferred(data[prop])) {
	dataCopy[prop] = usefulPart(objs.shift());
}
}}// Get the rendered result.
                                result = can.view.renderTo(format,renderer,dataCopy,helpers);
	// Resolve with the rendered view.
                                deferred.resolve(result,dataCopy);
	// If there's a `callback`,call it back with the result.
                                if (callback) {
	callback(result,dataCopy);
}
},function() {
	deferred.reject.apply(deferred,arguments);
}
);
	// Return the deferred...
                        return deferred;
}
else {
	// get is called async but in
                        // ff will be async so we need to temporarily reset
                        reading = can.__clearReading();
	// If there's a `callback` function
                        async = isFunction(callback);
	// Get the `view` type
                        deferred = get(view,async);
	if (reading) {
	can.__setReading(reading);
}
// If we are `async`...
                        if (async) {
	// Return the deferred
                            response = deferred;
	// And fire callback with the rendered result.
                            deferred.then(function(renderer) {
	callback(data ? can.view.renderTo(format,renderer,data,helpers):renderer);
}
);}else {
	// if the deferred is resolved,call the cached renderer instead
                            // this is because it's possible,with recursive deferreds to
                            // need to render a view while its deferred is _resolving_.  A _resolving_ deferred
                            // is a deferred that was just resolved and is calling back it's success callbacks.
                            // If a new success handler is called while resoliving,it does not get fired by
                            // jQuery's deferred system.  So instead of adding a new callback
                            // we use the cached renderer.
                            // We also add __view_id on the deferred so we can look up it's cached renderer.
                            // In the future,we might simply store either a deferred or the cached result.
                            if (deferred.state() === 'resolved' && deferred.__view_id) {
	var currentRenderer = $view.cachedRenderers[deferred.__view_id];
	return data ? can.view.renderTo(format,currentRenderer,data,helpers):currentRenderer;
}
else {
	// Otherwise,the deferred is complete,so
                                // set response to the result of the rendering.
                                deferred.then(function(renderer) {
	response = data ? can.view.renderTo(format,renderer,data,helpers):renderer;
}
);}}return response;}},registerView:function(id,text,type,def) {
	// Get the renderer function.
                    var info = (typeof type === "object" ? type:$view.types[type || $view.ext]),renderer;
	if (info.fragRenderer) {
	renderer = info.fragRenderer(id,text);
}
else {
	renderer = makeRenderer(info.renderer(id,text));
}
def = def || new can.Deferred();
	// Cache if we are caching.
                    if ($view.cache) {
	$view.cached[id] = def;
	def.__view_id = id;
	$view.cachedRenderers[id] = renderer;
}
// Return the objects for the response's `dataTypes`
                    // (in this case view).
                    return def.resolve(renderer);
}
});
	// _removed if not used as a steal module_

        return can;
}
)(__m2);
	// ## view/callbacks/callbacks.js
    var __m12 = (function(can) {
	var attr = can.view.attr = function(attributeName,attrHandler) {
	if (attrHandler) {
	if (typeof attributeName === "string") {
	attributes[attributeName] = attrHandler;
}
else {
	regExpAttributes.push( {
	match:attributeName,handler:attrHandler
}
);}}else {
	var cb = attributes[attributeName];
	if (!cb) {
	for (var i = 0,len = regExpAttributes.length;
	i < len;
	i++) {
	var attrMatcher = regExpAttributes[i];
	if (attrMatcher.match.test(attributeName)) {
	cb = attrMatcher.handler;
	break;
}
}}return cb;}};
	var attributes = {
	},regExpAttributes = [],automaticCustomElementCharacters = /[-\:]/;
	var tag = can.view.tag = function(tagName,tagHandler) {
	if (tagHandler) {
	// if we have html5shive ... re-generate
                if (window.html5) {
	window.html5.elements += " " + tagName;
	window.html5.shivDocument();
}
tags[tagName.toLowerCase()] = tagHandler;}else {
	var cb = tags[tagName.toLowerCase()];
	if (!cb && automaticCustomElementCharacters.test(tagName)) {
	// empty callback for things that look like special tags
                    cb = function() {
	};
}
return cb;}};
	var tags = {
	};
	can.view.callbacks = {
	_tags:tags,_attributes:attributes,_regExpAttributes:regExpAttributes,tag:tag,attr:attr,// handles calling back a tag callback
            tagHandler:function(el,tagName,tagData) {
	var helperTagCallback = tagData.options.attr('tags.' + tagName),tagCallback = helperTagCallback || tags[tagName];
	// If this was an element like <foo-bar> that doesn't have a component,just render its content
                var scope = tagData.scope,res;
	if (tagCallback) {
	var reads = can.__clearReading();
	res = tagCallback(el,tagData);
	can.__setReading(reads);
}
else {
	res = scope;
}
// If the tagCallback gave us something to render with,and there is content within that element
                // render it!
                if (res && tagData.subtemplate) {
	if (scope !== res) {
	scope = scope.add(res);
}
var result = tagData.subtemplate(scope,tagData.options);
	var frag = typeof result === "string" ? can.view.frag(result):result;
	can.appendChild(el,frag);}}};
	return can.view.callbacks;})(__m2,__m13);
	// ## util/string/string.js
    var __m16 = (function(can) {
	// ##string.js
        // _Miscellaneous string utility functions._
        // Several of the methods in this plugin use code adapated from Prototype
        // Prototype JavaScript framework,version 1.6.0.1.
        // 漏 2005-2007 Sam Stephenson
        var strUndHash = /_|-/,strColons = /\=\=/,strWords = /([A-Z]+)([A-Z][a-z])/g,strLowUp = /([a-z\d])([A-Z])/g,strDash = /([a-z\d])([A-Z])/g,strReplacer = /\ {
	([^\
}
]+)\}/g,strQuote = /"/g,strSingleQuote = /'/g,strHyphenMatch = /-+(.)?/g,strCamelMatch = /[a-z][A-Z]/g,// Returns the `prop` property from `obj`.
            // If `add` is true and `prop` doesn't exist in `obj`,create it as an
            // empty object.
            getNext = function(obj,prop,add) {
	var result = obj[prop];
	if (result === undefined && add === true) {
	result = obj[prop] = {
	};
}
return result;},// Returns `true` if the object can have properties (no `null`s).
            isContainer = function(current) {
	return /^f|^o/.test(typeof current);
}
,convertBadValues = function(content) {
	// Convert bad values into empty strings
                var isInvalid = content === null || content === undefined || isNaN(content) && '' + content === 'NaN';
	return '' + (isInvalid ? '':content);
}
;can.extend(can {
	esc:function(content) {
	return convertBadValues(content)
                        .replace(/&/g,'&amp;
	')
                        .replace(/</g,'&lt;
	')
                        .replace(/>/g,'&gt;
	')
                        .replace(strQuote,'&#34;
	')
                        .replace(strSingleQuote,'&#39;
	');
}
,getObject:function(name,roots,add) {
	// The parts of the name we are looking up
                    // `['App','Models','Recipe']`
                    var parts = name ? name.split('.'):[],length = parts.length,current,r = 0,i,container,rootsLength;
	// Make sure roots is an `array`.
                    roots = can.isArray(roots) ? roots:[roots || window];
	rootsLength = roots.length;
	if (!length) {
	return roots[0];
}
// For each root,mark it as current.
                    for (r;
	r < rootsLength;
	r++) {
	current = roots[r];
	container = undefined;
	// Walk current to the 2nd to last object or until there
                        // is not a container.
                        for (i = 0;
	i < length && isContainer(current);
	i++) {
	container = current;
	current = getNext(container,parts[i]);
}
// If we found property break cycle
                        if (container !== undefined && current !== undefined) {
	break;
}
}// Remove property from found container
                    if (add === false && current !== undefined) {
	delete container[parts[i - 1]];
}
// When adding property add it to the first root
                    if (add === true && current === undefined) {
	current = roots[0];
	for (i = 0;
	i < length && isContainer(current);
	i++) {
	current = getNext(current,parts[i],true);
}
}return current;},capitalize:function(s,cache) {
	// Used to make newId.
                    return s.charAt(0)
                        .toUpperCase() + s.slice(1);
}
,camelize:function(str) {
	return convertBadValues(str)
                        .replace(strHyphenMatch,function(match,chr) {
	return chr ? chr.toUpperCase():'';
}
);},hyphenate:function(str) {
	return convertBadValues(str)
                        .replace(strCamelMatch,function(str,offset) {
	return str.charAt(0) + '-' + str.charAt(1)
                                .toLowerCase();
}
);},underscore:function(s) {
	return s.replace(strColons,'/')
                        .replace(strWords,'$1_$2')
                        .replace(strLowUp,'$1_$2')
                        .replace(strDash,'_')
                        .toLowerCase();
}
,sub:function(str,data,remove) {
	var obs = [];
	str = str || '';
	obs.push(str.replace(strReplacer,function(whole,inside) {
	// Convert inside to type.
                                var ob = can.getObject(inside,data,remove === true ? false:undefined);
	if (ob === undefined || ob === null) {
	obs = null;
	return '';
}
// If a container,push into objs (which will return objects found).
                                if (isContainer(ob) && obs) {
	obs.push(ob);
	return '';
}
return '' + ob;}));
	return obs === null ? obs:obs.length <= 1 ? obs[0]:obs;},replacer:strReplacer,undHash:strUndHash});
	return can;})(__m2);
	// ## construct/construct.js
    var __m15 = (function(can) {
	// ## construct.js
        // `can.Construct`
        // _This is a modified version of
        // [John Resig's class](http://ejohn.org/blog/simple-javascript-inheritance/).
        // It provides class level inheritance and callbacks._
        // A private flag used to initialize a new class instance without
        // initializing it's bindings.
        var initializing = 0;
	can.Construct = function() {
	if (arguments.length) {
	return can.Construct.extend.apply(can.Construct,arguments);
}
};
	can.extend(can.Construct {
	constructorExtends:true,newInstance:function() {
	// Get a raw instance object (`init` is not called).
                    var inst = this.instance(),args;
	// Call `setup` if there is a `setup`
                    if (inst.setup) {
	args = inst.setup.apply(inst,arguments);
}
// Call `init` if there is an `init`
                    // If `setup` returned `args`,use those as the arguments
                    if (inst.init) {
	inst.init.apply(inst,args || arguments);
}
return inst;},// Overwrites an object with methods. Used in the `super` plugin.
                // `newProps` - New properties to add.
                // `oldProps` - Where the old properties might be (used with `super`).
                // `addTo` - What we are adding to.
                _inherit:function(newProps,oldProps,addTo) {
	can.extend(addTo || newProps,newProps || {
	});
}
,// used for overwriting a single property.
                // this should be used for patching other objects
                // the super plugin overwrites this
                _overwrite:function(what,oldProps,propName,val) {
	what[propName] = val;
}
,// Set `defaults` as the merger of the parent `defaults` and this
                // object's `defaults`. If you overwrite this method,make sure to
                // include option merging logic.

                setup:function(base,fullName) {
	this.defaults = can.extend(true {
	},base.defaults,this.defaults);
}
,// Create's a new `class` instance without initializing by setting the
                // `initializing` flag.
                instance:function() {
	// Prevents running `init`.
                    initializing = 1;
	var inst = new this();
	// Allow running `init`.
                    initializing = 0;
	return inst;
}
,// Extends classes.

                extend:function(name,staticProperties,instanceProperties) {
	var fullName = name,klass = staticProperties,proto = instanceProperties;
	// Figure out what was passed and normalize it.
                    if (typeof fullName !== 'string') {
	proto = klass;
	klass = fullName;
	fullName = null;
}
if (!proto) {
	proto = klass;
	klass = null;
}
proto = proto || {
	};
	var _super_class = this,_super = this.prototype,parts,current,_fullName,_shortName,propName,shortName,namespace,prototype;
	// Instantiate a base class (but only create the instance,// don't run the init constructor).
                    prototype = this.instance();
	// Copy the properties over onto the new prototype.
                    can.Construct._inherit(proto,_super,prototype);
	// The dummy class constructor.

                    function Constructor() {
	// All construction is actually done in the init method.
                        if (!initializing) {
	return this.constructor !== Constructor &&
                            // We are being called without `new` or we are extending.
                            arguments.length && Constructor.constructorExtends ? Constructor.extend.apply(Constructor,arguments):// We are being called with `new`.
                            Constructor.newInstance.apply(Constructor,arguments);
}
}// Copy old stuff onto class (can probably be merged w/ inherit)
                    for (propName in _super_class) {
	if (_super_class.hasOwnProperty(propName)) {
	Constructor[propName] = _super_class[propName];
}
}// Copy new static properties on class.
                    can.Construct._inherit(klass,_super_class,Constructor);
	// Setup namespaces.
                    if (fullName) {
	parts = fullName.split('.');
	shortName = parts.pop();
	current = can.getObject(parts.join('.'),window,true);
	namespace = current;
	_fullName = can.underscore(fullName.replace(/\./g,"_"));
	_shortName = can.underscore(shortName);
	current[shortName] = Constructor;
}
// Set things that shouldn't be overwritten.
                    can.extend(Constructor {
	constructor:Constructor,prototype:prototype,namespace:namespace,_shortName:_shortName,fullName:fullName,_fullName:_fullName
}
);
	// Dojo and YUI extend undefined
                    if (shortName !== undefined) {
	Constructor.shortName = shortName;
}
// Make sure our prototype looks nice.
                    Constructor.prototype.constructor = Constructor;
	// Call the class `setup` and `init`
                    var t = [_super_class].concat(can.makeArray(arguments)),args = Constructor.setup.apply(Constructor,t);
	if (Constructor.init) {
	Constructor.init.apply(Constructor,args || t);
}
return Constructor;}});
	can.Construct.prototype.setup = function() {
	};
	can.Construct.prototype.init = function() {
	};
	return can.Construct;
}
)(__m16);
	// ## control/control.js
    var __m14 = (function(can) {
	// ### bind
        // this helper binds to one element and returns a function that unbinds from that element.
        var bind = function(el,ev,callback) {
	can.bind.call(el,ev,callback);
	return function() {
	can.unbind.call(el,ev,callback);
}
;},isFunction = can.isFunction,extend = can.extend,each = can.each,slice = [].slice,paramReplacer = /\ {
	([^\
}
]+)\}/g,special = can.getObject("$.event.special",[can]) || {
	},// ### delegate
            // this helper binds to elements based on a selector and returns a
            // function that unbinds.
            delegate = function(el,selector,ev,callback) {
	can.delegate.call(el,selector,ev,callback);
	return function() {
	can.undelegate.call(el,selector,ev,callback);
}
;},// ### binder
            // Calls bind or unbind depending if there is a selector.
            binder = function(el,ev,callback,selector) {
	return selector ?
                    delegate(el,can.trim(selector),ev,callback):bind(el,ev,callback);
}
,basicProcessor;
	var Control = can.Control = can.Construct(

            // ## *static functions* {
	// ## can.Control.setup
                // This function pre-processes which methods are event listeners and which are methods of
                // the control. It has a mechanism to allow controllers to inherit default values from super
                // classes,like `can.Construct`,and will cache functions that are action functions (see `_isAction`)
                // or functions with an underscored name.
                setup:function() {
	can.Construct.setup.apply(this,arguments);
	if (can.Control) {
	var control = this,funcName;
	control.actions = {
	};
	for (funcName in control.prototype) {
	if (control._isAction(funcName)) {
	control.actions[funcName] = control._action(funcName);
}
}}},// ## can.Control._shifter
                // Moves `this` to the first argument,wraps it with `jQuery` if it's
                // an element.
                _shifter:function(context,name) {
	var method = typeof name === "string" ? context[name]:name;
	if (!isFunction(method)) {
	method = context[method];
}
return function() {
	context.called = name;
	return method.apply(context,[this.nodeName ? can.$(this):this].concat(slice.call(arguments,0)));
}
;},// ## can.Control._isAction
                // Return `true` if `methodName` refers to an action. An action is a `methodName` value that
                // is not the constructor,and is either a function or string that refers to a function,or is
                // defined in `special`,`processors`. Detects whether `methodName` is also a valid method name.
                _isAction:function(methodName) {
	var val = this.prototype[methodName],type = typeof val;
	return (methodName !== 'constructor') &&
                    (type === "function" || (type === "string" && isFunction(this.prototype[val]))) && !! (special[methodName] || processors[methodName] || /[^\w]/.test(methodName));
}
,// ## can.Control._action
                // Takes a method name and the options passed to a control and tries to return the data
                // necessary to pass to a processor (something that binds things).
                // For performance reasons,`_action` is called twice:// * It's called when the Control class is created. for templated method names (e.g.,` {
	window
}
foo`),it returns null. For non-templated method names it returns the event binding data. That data is added to `this.actions`.
                // * It is called wehn a control instance is created,but only for templated actions.
                _action:function(methodName,options) {
	// If we don't have options (a `control` instance),we'll run this later. If we have
                    // options,run `can.sub` to replace the action template ` {
	}` with values from the `options`
                    // or `window`. If a ` {
	}` template resolves to an object,`convertedName` will be an array.
                    // In that case,the event name we want will be the last item in that array.
                    paramReplacer.lastIndex = 0;
	if (options || !paramReplacer.test(methodName)) {
	var convertedName = options ? can.sub(methodName,this._lookup(options)):methodName;
	if (!convertedName) {
	return null;
}
var arr = can.isArray(convertedName),name = arr ? convertedName[1]:convertedName,parts = name.split(/\s+/g),event = parts.pop();
	return {
	processor:processors[event] || basicProcessor,parts:[name,parts.join(" "),event],delegate:arr ? convertedName[0]:undefined
}
;}},_lookup:function(options) {
	return [options,window];
}
,// ## can.Control.processors
                // An object of ` {
	eventName:function
}
` pairs that Control uses to
                // hook up events automatically.
                processors: {
	},// ## can.Control.defaults
                // A object of name-value pairs that act as default values for a control instance
                defaults: {
	}
}
 {
	// ## *prototype functions*

                // ## setup
                // Setup is where most of the Control's magic happens. It performs several pre-initialization steps:// - Sets `this.element`
                // - Adds the Control's name to the element's className
                // - Saves the Control in `$.data`
                // - Merges Options
                // - Binds event handlers using `delegate`
                // The final step is to return pass the element and prepareed options,to be used in `init`.
                setup:function(element,options) {
	var cls = this.constructor,pluginname = cls.pluginName || cls._fullName,arr;
	// Retrieve the raw element,then set the plugin name as a class there.
                    this.element = can.$(element);
	if (pluginname && pluginname !== 'can_control') {
	this.element.addClass(pluginname);
}
// Set up the 'controls' data on the element. If it does not exist,initialize
                    // it to an empty array.
                    arr = can.data(this.element,'controls');
	if (!arr) {
	arr = [];
	can.data(this.element,'controls',arr);
}
arr.push(this);
	// The `this.options` property is an Object that contains configuration data
                    // passed to a control when it is created (`new can.Control(element,options)`)
                    // The `options` argument passed when creating the control is merged with `can.Control.defaults`
                    // in [can.Control.prototype.setup setup].
                    // If no `options` value is used during creation,the value in `defaults` is used instead
                    this.options = extend( {
	},cls.defaults,options);
	this.on();
	return [this.element,this.options];
}
,// ## on
                // This binds an event handler for an event to a selector under the scope of `this.element`
                // If no options are specified,all events are rebound to their respective elements. The actions,// which were cached in `setup`,are used and all elements are bound using `delegate` from `this.element`.
                on:function(el,selector,eventName,func) {
	if (!el) {
	this.off();
	var cls = this.constructor,bindings = this._bindings,actions = cls.actions,element = this.element,destroyCB = can.Control._shifter(this,"destroy"),funcName,ready;
	for (funcName in actions) {
	// Only push if we have the action and no option is `undefined`
                            if (actions.hasOwnProperty(funcName)) {
	ready = actions[funcName] || cls._action(funcName,this.options,this);
	if (ready) {
	bindings.control[funcName] = ready.processor(ready.delegate || element,ready.parts[2],ready.parts[1],funcName,this);
}
}}// Set up the ability to `destroy` the control later.
                        can.bind.call(element,"removed",destroyCB);
	bindings.user.push(function(el) {
	can.unbind.call(el,"removed",destroyCB);
}
);
	return bindings.user.length;}// if `el` is a string,use that as `selector` and re-set it to this control's element...
                    if (typeof el === 'string') {
	func = eventName;
	eventName = selector;
	selector = el;
	el = this.element;
}
// ...otherwise,set `selector` to null
                    if (func === undefined) {
	func = eventName;
	eventName = selector;
	selector = null;
}
if (typeof func === 'string') {
	func = can.Control._shifter(this,func);
}
this._bindings.user.push(binder(el,eventName,func,selector));
	return this._bindings.user.length;},// ## off
                // Unbinds all event handlers on the controller.
                // This should _only_ be called in combination with .on()
                off:function() {
	var el = this.element[0],bindings = this._bindings;
	if (bindings) {
	each(bindings.user || [],function(value) {
	value(el);
}
);
	each(bindings.control || {
	},function(value) {
	value(el);
}
);}// Adds bindings.
                    this._bindings = {
	user:[],control: {
	}
}
;},// ## destroy
                // Prepares a `control` for garbage collection.
                // First checks if it has already been removed. Then,removes all the bindings,data,and
                // the element from the Control instance.
                destroy:function() {
	if (this.element === null) {
	return;
}
var Class = this.constructor,pluginName = Class.pluginName || Class._fullName,controls;
	this.off();
	if (pluginName && pluginName !== 'can_control') {
	this.element.removeClass(pluginName);
}
controls = can.data(this.element,"controls");
	controls.splice(can.inArray(this,controls),1);
	can.trigger(this,"destroyed");
	this.element = null;}});
	// ## Processors
        // Processors do the binding. This basic processor binds events. Each returns a function that unbinds
        // when called.
        var processors = can.Control.processors;
	basicProcessor = function(el,event,selector,methodName,control) {
	return binder(el,event,can.Control._shifter(control,methodName),selector);
}
;// Set common events to be processed as a `basicProcessor`
        each(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave","inserted","removed"
            ],function(v) {
	processors[v] = basicProcessor;
}
);
	return Control;})(__m2,__m15);
	// ## util/bind/bind.js
    var __m19 = (function(can) {
	// ## Bind helpers
        can.bindAndSetup = function() {
	// Add the event to this object
            can.addEvent.apply(this,arguments);
	// If not initializing,and the first binding
            // call bindsetup if the function exists.
            if (!this._init) {
	if (!this._bindings) {
	this._bindings = 1;
	// setup live-binding
                    if (this._bindsetup) {
	this._bindsetup();
}
}else {
	this._bindings++;
}
}return this;};
	can.unbindAndTeardown = function(ev,handler) {
	// Remove the event handler
            can.removeEvent.apply(this,arguments);
	if (this._bindings === null) {
	this._bindings = 0;
}
else {
	this._bindings--;
}
// If there are no longer any bindings and
            // there is a bindteardown method,call it.
            if (!this._bindings && this._bindteardown) {
	this._bindteardown();
}
return this;};
	return can;})(__m2);
	// ## map/bubble.js
    var __m20 = (function(can) {
	var bubble = can.bubble = {
	// Given a binding,returns a string event name used to set up bubbline.
            // If no binding should be done,undefined or null should be returned
            event:function(map,eventName) {
	return map.constructor._bubbleRule(eventName,map);
}
,childrenOf:function(parentMap,eventName) {
	parentMap._each(function(child,prop) {
	if (child && child.bind) {
	bubble.toParent(child,parentMap,prop,eventName);
}
});},teardownChildrenFrom:function(parentMap,eventName) {
	parentMap._each(function(child) {
	bubble.teardownFromParent(parentMap,child,eventName);
}
);},toParent:function(child,parent,prop,eventName) {
	can.listenTo.call(parent,child,eventName,function() {
	// `batchTrigger` the type on this...
                    var args = can.makeArray(arguments),ev = args.shift();
	args[0] =
                    (can.List && parent instanceof can.List ?
                        parent.indexOf(child):prop) + (args[0] ? "." + args[0]:"");
	// track objects dispatched on this map
                    ev.triggeredNS = ev.triggeredNS || {
	};
	// if it has already been dispatched exit
                    if (ev.triggeredNS[parent._cid]) {
	return;
}
ev.triggeredNS[parent._cid] = true;
	// send change event with modified attr to parent
                    can.trigger(parent,ev,args);
}
);},teardownFromParent:function(parent,child,eventName) {
	if (child && child.unbind) {
	can.stopListening.call(parent,child,eventName);
}
},isBubbling:function(parent,eventName) {
	return parent._bubbleBindings && parent._bubbleBindings[eventName];
}
,bind:function(parent,eventName) {
	if (!parent._init) {
	var bubbleEvent = bubble.event(parent,eventName);
	if (bubbleEvent) {
	if (!parent._bubbleBindings) {
	parent._bubbleBindings = {
	};
}
if (!parent._bubbleBindings[bubbleEvent]) {
	parent._bubbleBindings[bubbleEvent] = 1;
	// setup live-binding
                            bubble.childrenOf(parent,bubbleEvent);
}
else {
	parent._bubbleBindings[bubbleEvent]++;
}
}}},unbind:function(parent,eventName) {
	var bubbleEvent = bubble.event(parent,eventName);
	if (bubbleEvent) {
	if (parent._bubbleBindings) {
	parent._bubbleBindings[bubbleEvent]--;
}
if (parent._bubbleBindings && !parent._bubbleBindings[bubbleEvent]) {
	delete parent._bubbleBindings[bubbleEvent];
	bubble.teardownChildrenFrom(parent,bubbleEvent);
	if (can.isEmptyObject(parent._bubbleBindings)) {
	delete parent._bubbleBindings;
}
}}},add:function(parent,child,prop) {
	if (child instanceof can.Map && parent._bubbleBindings) {
	for (var eventName in parent._bubbleBindings) {
	if (parent._bubbleBindings[eventName]) {
	bubble.teardownFromParent(parent,child,eventName);
	bubble.toParent(child,parent,prop,eventName);
}
}}},removeMany:function(parent,children) {
	for (var i = 0,len = children.length;
	i < len;
	i++) {
	bubble.remove(parent,children[i]);
}
},remove:function(parent,child) {
	if (child instanceof can.Map && parent._bubbleBindings) {
	for (var eventName in parent._bubbleBindings) {
	if (parent._bubbleBindings[eventName]) {
	bubble.teardownFromParent(parent,child,eventName);
}
}}},set:function(parent,prop,value,current) {
	//var res = parent.__type(value,prop);
	if (can.Map.helpers.isObservable(value)) {
	bubble.add(parent,value,prop);
}
// bubble.add will remove,so only remove if we are replacing another object
                if (can.Map.helpers.isObservable(current)) {
	bubble.remove(parent,current);
}
return value;}};
	return bubble;})(__m2);
	// ## util/batch/batch.js
    var __m21 = (function(can) {
	// Which batch of events this is for -- might not want to send multiple
        // messages on the same batch.  This is mostly for event delegation.
        var batchNum = 1,// how many times has start been called without a stop
            transactions = 0,// an array of events within a transaction
            batchEvents = [],stopCallbacks = [];
	can.batch = {
	start:function(batchStopHandler) {
	transactions++;
	if (batchStopHandler) {
	stopCallbacks.push(batchStopHandler);
}
},stop:function(force,callStart) {
	if (force) {
	transactions = 0;
}
else {
	transactions--;
}
if (transactions === 0) {
	var items = batchEvents.slice(0),callbacks = stopCallbacks.slice(0),i,len;
	batchEvents = [];
	stopCallbacks = [];
	batchNum++;
	if (callStart) {
	can.batch.start();
}
for (i = 0,len = items.length;
	i < len;
	i++) {
	can.dispatch.apply(items[i][0],items[i][1]);
}
for (i = 0,len = callbacks.length;
	i < callbacks.length;
	i++) {
	callbacks[i]();
}
}},trigger:function(item,event,args) {
	// Don't send events if initalizing.
                if (!item._init) {
	if (transactions === 0) {
	return can.dispatch.call(item,event,args);
}
else {
	event = typeof event === 'string' ? {
	type:event
}
:event;
	event.batchNum = batchNum;
	batchEvents.push([
                                item,[event,args]
                            ]);
}
}}};})(__m3);
	// ## map/map.js
    var __m18 = (function(can,bind,bubble) {
	// ## Helpers

        // A temporary map of Maps that have been made from plain JS objects.
        var madeMap = null;
	// Clears out map of converted objects.
        var teardownMap = function() {
	for (var cid in madeMap) {
	if (madeMap[cid].added) {
	delete madeMap[cid].obj._cid;
}
}madeMap = null;};
	// Retrieves a Map instance from an Object.
        var getMapFromObject = function(obj) {
	return madeMap && madeMap[obj._cid] && madeMap[obj._cid].instance;
}
;// A temporary map of Maps
        var serializeMap = null;
	var Map = can.Map = can.Construct.extend( {
	setup:function() {
	can.Construct.setup.apply(this,arguments);
	// Do not run if we are defining can.Map.
                    if (can.Map) {
	if (!this.defaults) {
	this.defaults = {
	};
}
// Builds a list of compute and non-compute properties in this Object's prototype.
                        this._computes = [];
	for (var prop in this.prototype) {
	// Non-functions are regular defaults.
                            if (prop !== "define" && typeof this.prototype[prop] !== "function") {
	this.defaults[prop] = this.prototype[prop];
	// Functions with an `isComputed` property are computes.
}
else if (this.prototype[prop].isComputed) {
	this._computes.push(prop);
}
}if (this.helpers.define) {
	this.helpers.define(this);
}
}// If we inherit from can.Map,but not can.List,make sure any lists are the correct type.
                    if (can.List && !(this.prototype instanceof can.List)) {
	this.List = Map.List.extend( {
	Map:this
}
 {
	});
}
},// Reference to bubbling helpers.
                _bubble:bubble,// Given an eventName,determine if bubbling should be setup.
                _bubbleRule:function(eventName) {
	return (eventName === "change" || eventName.indexOf(".") >= 0) && "change";
}
,// List of computes on the Map's prototype.
                _computes:[],// Adds an event to this Map.
                bind:can.bindAndSetup,on:can.bindAndSetup,// Removes an event from this Map.
                unbind:can.unbindAndTeardown,off:can.unbindAndTeardown,// Name of the id field. Used in can.Model.
                id:"id",// ## Internal helpers
                helpers: {
	// ### can.Map.helpers.define
                    // Stub function for the define plugin.
                    define:null,// ### can.Map.helpers.attrParts
                    // Parses attribute name into its parts.
                    attrParts:function(attr,keepKey) {
	//Keep key intact

                        if (keepKey) {
	return [attr];
}
// Split key on '.'
                        return typeof attr === "object" ? attr:("" + attr)
                            .split(".");
}
,// ### can.Map.helpers.addToMap
                    // Tracks Map instances created from JS Objects
                    addToMap:function(obj,instance) {
	var teardown;
	// Setup a fresh mapping if `madeMap` is missing.
                        if (!madeMap) {
	teardown = teardownMap;
	madeMap = {
	};
}
// Record if Object has a `_cid` before adding one.
                        var hasCid = obj._cid;
	var cid = can.cid(obj);
	// Only update if there already isn't one already.
                        if (!madeMap[cid]) {
	madeMap[cid] = {
	obj:obj,instance:instance,added:!hasCid
}
;}return teardown;},// ### can.Map.helpers.isObservable
                    // Determines if `obj` is observable.
                    isObservable:function(obj) {
	return obj instanceof can.Map || (obj && obj === can.route);
}
,// ### can.Map.helpers.canMakeObserve
                    // Determines if an object can be made into an observable.
                    canMakeObserve:function(obj) {
	return obj && !can.isDeferred(obj) && (can.isArray(obj) || can.isPlainObject(obj));
}
,// ### can.Map.helpers.serialize
                    // Serializes a Map or Map.List
                    serialize:function(map,how,where) {
	var cid = can.cid(map),firstSerialize = false;
	if (!serializeMap) {
	firstSerialize = true;
	// Serialize might call .attr() so we need to keep different map
                            serializeMap = {
	attr: {
	},serialize: {
	}
}
;}serializeMap[how][cid] = where;
	// Go through each property.
                        map.each(function(val,name) {
	// If the value is an `object`,and has an `attrs` or `serialize` function.
                            var result,isObservable = Map.helpers.isObservable(val),serialized = isObservable && serializeMap[how][can.cid(val)];
	if (serialized) {
	result = serialized;
}
else {
	if (how === "serialize") {
	result = Map.helpers._serialize(map,name,val);
}
else {
	result = Map.helpers._getValue(map,name,val,how);
}
}// this is probably removable
                            if (result !== undefined) {
	where[name] = result;
}
});
	can.__reading(map,'__keys');
	if (firstSerialize) {
	serializeMap = null;
}
return where;},_serialize:function(map,name,val) {
	return Map.helpers._getValue(map,name,val,"serialize");
}
,_getValue:function(map,name,val,how) {
	if (Map.helpers.isObservable(val)) {
	return val[how]();
}
else {
	return val;
}
}},keys:function(map) {
	var keys = [];
	can.__reading(map,'__keys');
	for (var keyName in map._data) {
	keys.push(keyName);
}
return keys;}} {
	setup:function(obj) {
	if (obj instanceof can.Map) {
	obj = obj.serialize();
}
// `_data` is where we keep the properties.
                    this._data = {
	};
	// The namespace this `object` uses to listen to events.
                    can.cid(this,".map");
	// Sets all `attrs`.
                    this._init = 1;
	// It's handy if we pass this to comptues,because computes can have a default value.
                    var defaultValues = this._setupDefaults();
	this._setupComputes(defaultValues);
	var teardownMapping = obj && can.Map.helpers.addToMap(obj,this);
	var data = can.extend(can.extend(true {
	},defaultValues),obj);
	this.attr(data);
	if (teardownMapping) {
	teardownMapping();
}
// `batchTrigger` change events.
                    this.bind('change',can.proxy(this._changes,this));
	delete this._init;
}
,// Sets up computed properties on a Map.
                _setupComputes:function() {
	var computes = this.constructor._computes;
	this._computedBindings = {
	};
	for (var i = 0,len = computes.length,prop;
	i < len;
	i++) {
	prop = computes[i];
	// Make the context of the compute the current Map
                        this[prop] = this[prop].clone(this);
	// Keep track of computed properties
                        this._computedBindings[prop] = {
	count:0
}
;}},_setupDefaults:function() {
	return this.constructor.defaults || {
	};
}
,// Setup child bindings.
                _bindsetup:function() {
	},// Teardown child bindings.
                _bindteardown:function() {
	},// `change`event handler.
                _changes:function(ev,attr,how,newVal,oldVal) {
	// when a change happens,create the named event.
                    can.batch.trigger(this {
	type:attr,batchNum:ev.batchNum,target:ev.target
}
,[newVal,oldVal]);},// Trigger a change event.
                _triggerChange:function(attr,how,newVal,oldVal) {
	// so this change can bubble ... a bubbling change triggers the
                    // _changes trigger
                    if (bubble.isBubbling(this,"change")) {
	can.batch.trigger(this {
	type:"change",target:this
}
,[attr,how,newVal,oldVal]);}else {
	can.batch.trigger(this,attr,[newVal,oldVal]);
}
if (how === "remove" || how === "add") {
	can.batch.trigger(this {
	type:"__keys",target:this
}
);}},// Iterator that does not trigger live binding.
                _each:function(callback) {
	var data = this.__get();
	for (var prop in data) {
	if (data.hasOwnProperty(prop)) {
	callback(data[prop],prop);
}
}},attr:function(attr,val) {
	// This is super obfuscated for space -- basically,we're checking
                    // if the type of the attribute is not a `number` or a `string`.
                    var type = typeof attr;
	if (type !== "string" && type !== "number") {
	return this._attrs(attr,val);
	// If we are getting a value.
}
else if (arguments.length === 1) {
	can.__reading(this,attr);
	return this._get(attr);
}
else {
	// Otherwise we are setting.
                        this._set(attr,val);
	return this;
}
},each:function() {
	return can.each.apply(undefined,[this].concat(can.makeArray(arguments)));
}
,removeAttr:function(attr) {
	// If this is List.
                    var isList = can.List && this instanceof can.List,// Convert the `attr` into parts (if nested).
                        parts = can.Map.helpers.attrParts(attr),// The actual property to remove.
                        prop = parts.shift(),// The current value.
                        current = isList ? this[prop]:this._data[prop];
	// If we have more parts,call `removeAttr` on that part.
                    if (parts.length && current) {
	return current.removeAttr(parts);
}
else {
	// If attr does not have a `.`
                        if (typeof attr === 'string' && !! ~attr.indexOf('.')) {
	prop = attr;
}
this._remove(prop,current);
	return current;}},// Remove a property.
                _remove:function(prop,current) {
	if (prop in this._data) {
	// Delete the property from `_data` and the Map
                        // as long as it isn't part of the Map's prototype.
                        delete this._data[prop];
	if (!(prop in this.constructor.prototype)) {
	delete this[prop];
}
// Let others now this property has been removed.
                        this._triggerChange(prop,"remove",undefined,current);
}
},// Reads a property from the `object`.
                _get:function(attr) {
	attr = "" + attr;
	var dotIndex = attr.indexOf('.');
	// Handles the case of a key having a `.` in its name
                    // Otherwise we have to dig deeper into the Map to get the value.
                    if (dotIndex >= 0) {
	// Attempt to get the value
                        var value = this.__get(attr);
	// For keys with a `.` in them,value will be defined
                        if (value !== undefined) {
	return value;
}
var first = attr.substr(0,dotIndex),second = attr.substr(dotIndex + 1),current = this.__get(first);
	return current && current._get ? current._get(second):undefined;}else {
	return this.__get(attr);
}
},// Reads a property directly if an `attr` is provided,otherwise
                // returns the "real" data object itself.
                __get:function(attr) {
	if (attr) {
	// If property is a compute return the result,otherwise get the value directly
                        if (this._computedBindings[attr]) {
	return this[attr]();
}
else {
	return this._data[attr];
}
// If not property is provided,return entire `_data` object}else {
	return this._data;
}
},// converts the value into an observable if needed
                __type:function(value,prop) {
	// If we are getting an object.
                    if (!(value instanceof can.Map) && can.Map.helpers.canMakeObserve(value)) {
	var cached = getMapFromObject(value);
	if (cached) {
	return cached;
}
if (can.isArray(value)) {
	var List = can.List;
	return new List(value);
}
else {
	var Map = this.constructor.Map || can.Map;
	return new Map(value);
}
}return value;},// Sets `attr` prop as value on this object where.
                // `attr` - Is a string of properties or an array  of property values.
                // `value` - The raw value to set.
                _set:function(attr,value,keepKey) {
	attr = "" + attr;
	var dotIndex = attr.indexOf('.'),current;
	if (!keepKey && dotIndex >= 0) {
	var first = attr.substr(0,dotIndex),second = attr.substr(dotIndex + 1);
	current = this._init ? undefined:this.__get(first);
	if (Map.helpers.isObservable(current)) {
	current._set(second,value);
}
else {
	throw "can.Map:Object does not exist";
}
}else {
	if (this.__convert) {
	//Convert if there is a converter
                            value = this.__convert(attr,value);
}
current = this._init ? undefined:this.__get(attr);
	this.__set(attr,this.__type(value,attr),current);}},__set:function(prop,value,current) {
	// TODO:Check if value is object and transform.
                    // Don't do anything if the value isn't changing.
                    if (value !== current) {
	// Check if we are adding this for the first time --
                        // if we are,we need to create an `add` event.
                        var changeType = current !== undefined || this.__get()
                            .hasOwnProperty(prop) ? "set":"add";
	// Set the value on `_data` and hook it up to send event.
                        this.___set(prop,this.constructor._bubble.set(this,prop,value,current));
	// `batchTrigger` the change event.
                        this._triggerChange(prop,changeType,value,current);
	// If we can stop listening to our old value,do it.
                        if (current) {
	this.constructor._bubble.teardownFromParent(this,current);
}
}},// Directly sets a property on this `object`.
                ___set:function(prop,val) {
	if (this._computedBindings[prop]) {
	this[prop](val);
}
else {
	this._data[prop] = val;
}
// Add property directly for easy writing.
                    // Check if its on the `prototype` so we don't overwrite methods like `attrs`.
                    if (typeof this.constructor.prototype[prop] !== 'function' && !this._computedBindings[prop]) {
	this[prop] = val;
}
},bind:function(eventName,handler) {
	var computedBinding = this._computedBindings && this._computedBindings[eventName];
	if (computedBinding) {
	// The first time we bind to this computed property we
                        // initialize `count` and `batchTrigger` the change event.
                        if (!computedBinding.count) {
	computedBinding.count = 1;
	var self = this;
	computedBinding.handler = function(ev,newVal,oldVal) {
	can.batch.trigger(self {
	type:eventName,batchNum:ev.batchNum,target:self
}
,[newVal,oldVal]);};
	this[eventName].bind("change",computedBinding.handler);}else {
	// Increment number of things listening to this computed property.
                            computedBinding.count++;
}
}// The first time we bind to this Map,`_bindsetup` will
                    // be called to setup child event bubbling.
                    this.constructor._bubble.bind(this,eventName);
	return can.bindAndSetup.apply(this,arguments);
}
,unbind:function(eventName,handler) {
	var computedBinding = this._computedBindings && this._computedBindings[eventName];
	if (computedBinding) {
	// If there is only one listener,we unbind the change event handler
                        // and clean it up since no one is listening to this property any more.
                        if (computedBinding.count === 1) {
	computedBinding.count = 0;
	this[eventName].unbind("change",computedBinding.handler);
	delete computedBinding.handler;
}
else {
	// Decrement number of things listening to this computed property
                            computedBinding.count--;
}
}this.constructor._bubble.unbind(this,eventName);
	return can.unbindAndTeardown.apply(this,arguments);},serialize:function() {
	return can.Map.helpers.serialize(this,'serialize' {
	});
}
,_attrs:function(props,remove) {
	if (props === undefined) {
	return Map.helpers.serialize(this,'attr' {
	});
}
props = can.simpleExtend( {
	},props);
	var prop,self = this,newVal;
	// Batch all of the change events until we are done.
                    can.batch.start();
	// Merge current properties with the new ones.
                    this.each(function(curVal,prop) {
	// You can not have a _cid property;
	abort.
                        if (prop === "_cid") {
	return;
}
newVal = props[prop];
	// If we are merging,remove the property if it has no value.
                        if (newVal === undefined) {
	if (remove) {
	self.removeAttr(prop);
}
return;}// Run converter if there is one
                        if (self.__convert) {
	newVal = self.__convert(prop,newVal);
}
// If we're dealing with models,we want to call _set to let converters run.
                        if (Map.helpers.isObservable(newVal)) {
	self.__set(prop,self.__type(newVal,prop),curVal);
	// If its an object,let attr merge.
}
else if (Map.helpers.isObservable(curVal) && Map.helpers.canMakeObserve(newVal)) {
	curVal.attr(newVal,remove);
	// Otherwise just set.
}
else if (curVal !== newVal) {
	self.__set(prop,self.__type(newVal,prop),curVal);
}
delete props[prop];});
	// Add remaining props.
                    for (prop in props) {
	// Ignore _cid.
                        if (prop !== "_cid") {
	newVal = props[prop];
	this._set(prop,newVal,true);
}
}can.batch.stop();
	return this;},compute:function(prop) {
	// If the property is a function,use it as the getter/setter
                    // otherwise,create a new compute that returns the value of a property on `this`
                    if (can.isFunction(this.constructor.prototype[prop])) {
	return can.compute(this[prop],this);
}
else {
	var reads = prop.split("."),last = reads.length - 1,options = {
	args:[]
}
;return can.compute(function(newVal) {
	if (arguments.length) {
	can.compute.read(this,reads.slice(0,last))
                                    .value.attr(reads[last],newVal);
}
else {
	return can.compute.read(this,reads,options)
                                    .value;
}
},this);}}});
	// Setup on/off aliases
        Map.prototype.on = Map.prototype.bind;
	Map.prototype.off = Map.prototype.unbind;
	return Map;
}
)(__m2,__m19,__m20,__m15,__m21);
	// ## list/list.js
    var __m22 = (function(can,Map,bubble) {
	// Helpers for `observable` lists.
        var splice = [].splice,// test if splice works correctly
            spliceRemovesProps = (function() {
	// IE's splice doesn't remove properties
                var obj = {
	0:"a",length:1
}
;splice.call(obj,0,1);
	return !obj[0];})();
	var list = Map.extend( {
	Map:Map
}
 {
	setup:function(instances,options) {
	this.length = 0;
	can.cid(this,".map");
	this._init = 1;
	this._setupComputes();
	instances = instances || [];
	var teardownMapping;
	if (can.isDeferred(instances)) {
	this.replace(instances);
}
else {
	teardownMapping = instances.length && can.Map.helpers.addToMap(instances,this);
	this.push.apply(this,can.makeArray(instances || []));
}
if (teardownMapping) {
	teardownMapping();
}
// this change needs to be ignored
                    this.bind('change',can.proxy(this._changes,this));
	can.simpleExtend(this,options);
	delete this._init;
}
,_triggerChange:function(attr,how,newVal,oldVal) {
	Map.prototype._triggerChange.apply(this,arguments);
	// `batchTrigger` direct add and remove events...
                    var index = +attr;
	// Make sure this is not nested and not an expando
                    if (!~attr.indexOf('.') && !isNaN(index)) {
	if (how === 'add') {
	can.batch.trigger(this,how,[newVal,index]);
	can.batch.trigger(this,'length',[this.length]);
}
else if (how === 'remove') {
	can.batch.trigger(this,how,[oldVal,index]);
	can.batch.trigger(this,'length',[this.length]);
}
else {
	can.batch.trigger(this,how,[newVal,index]);
}
}},__get:function(attr) {
	if (attr) {
	if (this[attr] && this[attr].isComputed && can.isFunction(this.constructor.prototype[attr])) {
	return this[attr]();
}
else {
	return this[attr];
}
}else {
	return this;
}
},___set:function(attr,val) {
	this[attr] = val;
	if (+attr >= this.length) {
	this.length = (+attr + 1);
}
},_remove:function(prop,current) {
	// if removing an expando property
                    if (isNaN(+prop)) {
	delete this[prop];
	this._triggerChange(prop,"remove",undefined,current);
}
else {
	this.splice(prop,1);
}
},_each:function(callback) {
	var data = this.__get();
	for (var i = 0;
	i < data.length;
	i++) {
	callback(data[i],i);
}
},// Returns the serialized form of this list.

                serialize:function() {
	return Map.helpers.serialize(this,'serialize',[]);
}
,splice:function(index,howMany) {
	var args = can.makeArray(arguments),added = [],i,j;
	for (i = 2;
	i < args.length;
	i++) {
	args[i] = bubble.set(this,i,this.__type(args[i],i));
	added.push(args[i]);
}
if (howMany === undefined) {
	howMany = args[1] = this.length - index;
}
var removed = splice.apply(this,args),cleanRemoved = removed;
	// remove any items that were just added from the removed array
                    if (added.length && removed.length) {
	for (j = 0;
	j < removed.length;
	j++) {
	if (can.inArray(removed[j],added) >= 0) {
	cleanRemoved.splice(j,1);
}
}}if (!spliceRemovesProps) {
	for (i = this.length;
	i < removed.length + this.length;
	i++) {
	delete this[i];
}
}can.batch.start();
	if (howMany > 0) {
	this._triggerChange("" + index,"remove",undefined,removed);
	bubble.removeMany(this,removed);
}
if (args.length > 2) {
	this._triggerChange("" + index,"add",args.slice(2),removed);
}
can.batch.stop();
	return removed;},_attrs:function(items,remove) {
	if (items === undefined) {
	return Map.helpers.serialize(this,'attr',[]);
}
// Create a copy.
                    items = can.makeArray(items);
	can.batch.start();
	this._updateAttrs(items,remove);
	can.batch.stop();
}
,_updateAttrs:function(items,remove) {
	var len = Math.min(items.length,this.length);
	for (var prop = 0;
	prop < len;
	prop++) {
	var curVal = this[prop],newVal = items[prop];
	if (Map.helpers.isObservable(curVal) && Map.helpers.canMakeObserve(newVal)) {
	curVal.attr(newVal,remove);
	//changed from a coercion to an explicit
}
else if (curVal !== newVal) {
	this._set(prop,newVal);
}
else {
	}
}
if (items.length > this.length) {
	// Add in the remaining props.
                        this.push.apply(this,items.slice(this.length));
}
else if (items.length < this.length && remove) {
	this.splice(items.length);
}
}}),// Converts to an `array` of arguments.
            getArgs = function(args) {
	return args[0] && can.isArray(args[0]) ?
                    args[0]:can.makeArray(args);
}
;// Create `push`,`pop`,`shift`,and `unshift`
        can.each( {
	push:"length",unshift:0
}
,// Adds a method
            // `name` - The method name.
            // `where` - Where items in the `array` should be added.

            function(where,name) {
	var orig = [][name];
	list.prototype[name] = function() {
	// Get the items being added.
                    var args = [],// Where we are going to add items.
                        len = where ? this.length:0,i = arguments.length,res,val;
	// Go through and convert anything to an `map` that needs to be converted.
                    while (i--) {
	val = arguments[i];
	args[i] = bubble.set(this,i,this.__type(val,i));
}
// Call the original method.
                    res = orig.apply(this,args);
	if (!this.comparator || args.length) {
	this._triggerChange("" + len,"add",args,undefined);
}
return res;};});
	can.each( {
	pop:"length",shift:0
}
,// Creates a `remove` type method

            function(where,name) {
	list.prototype[name] = function() {
	var args = getArgs(arguments),len = where && this.length ? this.length - 1:0;
	var res = [][name].apply(this,args);
	// Create a change where the args are
                    // `len` - Where these items were removed.
                    // `remove` - Items removed.
                    // `undefined` - The new values (there are none).
                    // `res` - The old,removed values (should these be unbound).
                    this._triggerChange("" + len,"remove",undefined,[res]);
	if (res && res.unbind) {
	bubble.remove(this,res);
}
return res;};});
	can.extend(list.prototype {
	indexOf:function(item,fromIndex) {
	this.attr('length');
	return can.inArray(item,this,fromIndex);
}
,join:function() {
	return [].join.apply(this.attr(),arguments);
}
,reverse:function() {
	var list = can.makeArray([].reverse.call(this));
	this.replace(list);
}
,slice:function() {
	var temp = Array.prototype.slice.apply(this,arguments);
	return new this.constructor(temp);
}
,concat:function() {
	var args = [];
	can.each(can.makeArray(arguments),function(arg,i) {
	args[i] = arg instanceof can.List ? arg.serialize():arg;
}
);
	return new this.constructor(Array.prototype.concat.apply(this.serialize(),args));},forEach:function(cb,thisarg) {
	return can.each(this,cb,thisarg || this);
}
,replace:function(newList) {
	if (can.isDeferred(newList)) {
	newList.then(can.proxy(this.replace,this));
}
else {
	this.splice.apply(this,[0,this.length].concat(can.makeArray(newList || [])));
}
return this;},filter:function(callback,thisArg) {
	var filteredList = new can.List(),self = this,filtered;
	this.each(function(item,index,list) {
	filtered = callback.call(thisArg | self,item,index,self);
	if (filtered) {
	filteredList.push(item);
}
});
	return filteredList;}});
	can.List = Map.List = list;
	return can.List;})(__m2,__m18,__m20);
	// ## compute/compute.js
    var __m23 = (function(can,bind) {
	// ## Reading Helpers
        // The following methods are used to call a function that relies on
        // observable data and to track the observable events which should
        // be listened to when changes occur.
        // To do this,[`can.__reading(observable,event)`](#can-__reading) is called to
        // "broadcast" the corresponding event on each read.
        // ### Observed
        // An "Observed" is an object of observable objects and events that
        // a function relies on. These objects and events must be listened to
        // in order to determine when to check a function for updates.
        // This looks like the following:// {
	//       "map1|first": {
	obj:map,event:"first"
}
,//       "map1|last": {
	obj:map,event:"last"
}
//}// Each object-event pair is mapped so no duplicates will be listed.

        // ### State
        // `can.__read` may call a function that calls `can.__read` again. For
        // example,a compute can read another compute. To track each compute's
        // `Observed` object (containing observable objects and events),we maintain
        // a stack of Observed values for each call to `__read`.
        var stack = [];
	// ### can.__read
        // With a given function and context,calls the function
        // and returns the resulting value of the function as well
        // as the observable properties and events that were read.
        can.__read = function(func,self) {
	// Add an object that `can.__read` will write to.
            stack.push( {
	});
	var value = func.call(self);
	// Example return value:// ` {
	value:100,observed:Observed
}
`
            return {
	value:value,observed:stack.pop()
}
;};
	// ### can.__reading
        // When an observable value is read,it must call `can.__reading` to
        // broadcast which object and event should be listened to.
        can.__reading = function(obj,event) {
	// Add the observable object and the event
            // that was read to the `Observed` object on
            // the stack.
            if (stack.length) {
	stack[stack.length - 1][obj._cid + '|' + event] = {
	obj:obj,event:event + ""
}
;}};
	// ### can.__clearReading
        // Clears and returns the current observables.
        // This can be used to access a value without
        // it being handled as a regular `read`.
        can.__clearReading = function() {
	if (stack.length) {
	var ret = stack[stack.length - 1];
	stack[stack.length - 1] = {
	};
	return ret;
}
};
	// Specifies current observables.
        can.__setReading = function(o) {
	if (stack.length) {
	stack[stack.length - 1] = o;
}
};
	can.__addReading = function(o) {
	if (stack.length) {
	can.simpleExtend(stack[stack.length - 1],o);
}
};
	// ## Section Name

        // ### getValueAndBind
        // Calls a function and sets up bindings to call `onchanged`
        // when events from its "Observed" object are triggered.
        // Removes bindings from `oldObserved` that are no longer needed.
        // - func - the function to call.
        // - context - the `this` of the function.
        // - oldObserved - an object that contains what has already been bound to
        // - onchanged - the function to call when any change occurs
        var getValueAndBind = function(func,context,oldObserved,onchanged) {
	// Call the function,get the value as well as the observed objects and events
            var info = can.__read(func,context),// The objects-event pairs that must be bound to
                newObserveSet = info.observed;
	// Go through what needs to be observed.
            bindNewSet(oldObserved,newObserveSet,onchanged);
	unbindOldSet(oldObserved,onchanged);
	return info;
}
;// This will not be optimized.
        var bindNewSet = function(oldObserved,newObserveSet,onchanged) {
	for (var name in newObserveSet) {
	bindOrPreventUnbinding(oldObserved,newObserveSet,name,onchanged);
}
};
	// This will be optimized.
        var bindOrPreventUnbinding = function(oldObserved,newObserveSet,name,onchanged) {
	if (oldObserved[name]) {
	// After binding is set up,values
                // in `oldObserved` will be unbound. So if a name
                // has already be observed,remove from `oldObserved`
                // to prevent this.
                delete oldObserved[name];
}
else {
	// If current name has not been observed,listen to it.
                var obEv = newObserveSet[name];
	obEv.obj.bind(obEv.event,onchanged);
}
};
	// Iterate through oldObserved,looking for observe/attributes
        // that are no longer being bound and unbind them.
        var unbindOldSet = function(oldObserved,onchanged) {
	for (var name in oldObserved) {
	var obEv = oldObserved[name];
	obEv.obj.unbind(obEv.event,onchanged);
}
};
	// ### updateOnChange
        // Fires a change event when a compute's value changes
        var updateOnChange = function(compute,newValue,oldValue,batchNum) {
	// Only trigger event when value has changed
            if (newValue !== oldValue) {
	can.batch.trigger(compute,batchNum ? {
	type:"change",batchNum:batchNum
}
:'change',[
                        newValue,oldValue
                    ]);
}
};
	// ###setupComputeHandlers
        // Sets up handlers for a compute.
        // - compute - the compute to set up handlers for
        // - func - the getter/setter function for the compute
        // - context - the `this` for the compute
        // - setCachedValue - function for setting cached value
        // Returns an object with `on` and `off` functions.
        var setupComputeHandlers = function(compute,func,context,setCachedValue) {
	var readInfo,onchanged,batchNum;
	return {
	// Set up handler for when the compute changes
                on:function(updater) {
	if (!onchanged) {
	onchanged = function(ev) {
	if (compute.bound && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
	// Keep the old value
                                var oldValue = readInfo.value;
	// Get the new value
                                readInfo = getValueAndBind(func,context,readInfo.observed,onchanged);
	// Call the updater with old and new values
                                updater(readInfo.value,oldValue,ev.batchNum);
	batchNum = batchNum = ev.batchNum;
}
};}readInfo = getValueAndBind(func,context {
	},onchanged);
	setCachedValue(readInfo.value);
	compute.hasDependencies = !can.isEmptyObject(readInfo.observed);
}
,// Remove handler for the compute
                off:function(updater) {
	for (var name in readInfo.observed) {
	var ob = readInfo.observed[name];
	ob.obj.unbind(ob.event,onchanged);
}
}};};
	var setupSingleBindComputeHandlers = function(compute,func,context,setCachedValue) {
	var readInfo,oldValue,onchanged,batchNum;
	return {
	// Set up handler for when the compute changes
                on:function(updater) {
	if (!onchanged) {
	onchanged = function(ev) {
	if (compute.bound && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
	// Get the new value
                                var reads = can.__clearReading();
	var newValue = func.call(context);
	can.__setReading(reads);
	// Call the updater with old and new values
                                updater(newValue,oldValue,ev.batchNum);
	oldValue = newValue;
	batchNum = batchNum = ev.batchNum;
}
};}readInfo = getValueAndBind(func,context {
	},onchanged);
	oldValue = readInfo.value;
	setCachedValue(readInfo.value);
	compute.hasDependencies = !can.isEmptyObject(readInfo.observed);
}
,// Remove handler for the compute
                off:function(updater) {
	for (var name in readInfo.observed) {
	var ob = readInfo.observed[name];
	ob.obj.unbind(ob.event,onchanged);
}
}};};
	// ###isObserve
        // Checks if an object is observable
        var isObserve = function(obj) {
	return obj instanceof can.Map || obj && obj.__get;
}
,// Instead of calculating whether anything is listening every time,// use a function to do nothing (which may be overwritten)
            k = function() {
	};
	// ## Creating a can.compute
        // A `can.compute` can be created by
        // - [Specifying the getterSeter function](#specifying-gettersetter-function)
        // - [Observing a property of an object](#observing-a-property-of-an-object)
        // - [Specifying an initial value and a setter function](#specifying-an-initial-value-and-a-setter)
        // - [Specifying an initial value and how to read,update,and listen to changes](#specifying-an-initial-value-and-a-settings-object)
        // - [Simply specifying an initial value](#specifying-only-a-value)
        can.compute = function(getterSetter,context,eventName,bindOnce) {
	// ### Setting up
            // Do nothing if getterSetter is already a compute
            if (getterSetter && getterSetter.isComputed) {
	return getterSetter;
}
// The computed object
            var computed,// The following functions are overwritten depending on how compute() is called
                // A method to set up listening
                on = k,// A method to teardown listening
                off = k,// Current cached value (valid only when bound is true)
                value,// How the value is read by default
                get = function() {
	return value;
}
,// How the value is set by default
                set = function(newVal) {
	value = newVal;
}
,setCached = set,// Save arguments for cloning
                args = [],// updater for when value is changed
                updater = function(newValue,oldValue,batchNum) {
	setCached(newValue);
	updateOnChange(computed,newValue,oldValue,batchNum);
}
,// the form of the arguments
                form;
	// convert arguments to args to make V8 Happy
            for (var i = 0,arglen = arguments.length;
	i < arglen;
	i++) {
	args[i] = arguments[i];
}
computed = function(newVal) {
	// If the computed function is called with arguments,// a value should be set
                if (arguments.length) {
	// Save a reference to the old value
                    var old = value;
	// Setter may return the value if setter
                    // is for a value maintained exclusively by this compute.
                    var setVal = set.call(context,newVal,old);
	// If the computed function has dependencies,// return the current value
                    if (computed.hasDependencies) {
	return get.call(context);
}
// Setting may not fire a change event,in which case
                    // the value must be read
                    if (setVal === undefined) {
	value = get.call(context);
}
else {
	value = setVal;
}
// Fire the change
                    updateOnChange(computed,value,old);
	return value;
}
else {
	// Another compute may bind to this `computed`
                    if (stack.length && computed.canReadForChangeEvent !== false) {
	// Tell the compute to listen to change on this computed
                        // Use `can.__reading` to allow other compute to listen
                        // for a change on this `computed`
                        can.__reading(computed,'change');
	// We are going to bind on this compute.
                        // If we are not bound,we should bind so that
                        // we don't have to re-read to get the value of this compute.
                        if (!computed.bound) {
	can.compute.temporarilyBind(computed);
}
}// If computed is bound,use the cached value
                    if (computed.bound) {
	return value;
}
else {
	return get.call(context);
}
}};
	// ###Specifying getterSetter function
            // If `can.compute` is [called with a getterSetter function](http://canjs.com/docs/can.compute.html#sig_can_compute_getterSetter__context__),// override set and get
            if (typeof getterSetter === 'function') {
	// `can.compute(getterSetter,[context])`
                set = getterSetter;
	get = getterSetter;
	computed.canReadForChangeEvent = eventName === false ? false:true;
	var handlers = bindOnce ?
                    setupSingleBindComputeHandlers(computed,getterSetter,context || this,setCached):setupComputeHandlers(computed,getterSetter,context || this,setCached);
	on = handlers.on;
	off = handlers.off;
	// ###Observing a property of an object
                // If `can.compute` is called with an
                // [object,property name,and optional event name](http://canjs.com/docs/can.compute.html#sig_can_compute_object_propertyName__eventName__),// create a compute from a property of an object. This allows the
                // creation of a compute on objects that can be listened to with [`can.bind`](http://canjs.com/docs/can.bind.html)
}
else if (context) {
	if (typeof context === 'string') {
	// `can.compute(obj,"propertyName",[eventName])`
                    var propertyName = context,isObserve = getterSetter instanceof can.Map;
	if (isObserve) {
	computed.hasDependencies = true;
	var handler;
	get = function() {
	return getterSetter.attr(propertyName);
}
;set = function(newValue) {
	getterSetter.attr(propertyName,newValue);
}
;on = function(update) {
	handler = function(ev,newVal,oldVal) {
	update(newVal,oldVal,ev.batchNum);
}
;getterSetter.bind(eventName || propertyName,handler);
	// Set the cached value
                            value = can.__read(get).value;
}
;off = function(update) {
	getterSetter.unbind(eventName || propertyName,handler);
}
;}else {
	get = function() {
	return getterSetter[propertyName];
}
;set = function(newValue) {
	getterSetter[propertyName] = newValue;
}
;on = function(update) {
	handler = function() {
	update(get(),value);
}
;can.bind.call(getterSetter,eventName || propertyName,handler);
	// use can.__read because
                            // we should not be indicating that some parent
                            // reads this property if it happens to be binding on it
                            value = can.__read(get)
                                .value;
}
;off = function(update) {
	can.unbind.call(getterSetter,eventName || propertyName,handler);
}
;}// ###Specifying an initial value and a setter
                    // If `can.compute` is called with an [initial value and a setter function](http://canjs.com/docs/can.compute.html#sig_can_compute_initialValue_setter_newVal_oldVal__),// a compute that can adjust incoming values is set up.
}
else {
	// `can.compute(initialValue,setter)`
                    if (typeof context === 'function') {
	value = getterSetter;
	set = context;
	context = eventName;
	form = 'setter';
	// ###Specifying an initial value and a settings object
                        // If `can.compute` is called with an [initial value and optionally a settings object](http://canjs.com/docs/can.compute.html#sig_can_compute_initialValue__settings__),// a can.compute is created that can optionally specify how to read,// update,and listen to changes in dependent values. This form of
                        // can.compute can be used to derive a compute that derives its
                        // value from any source
}
else {
	// `can.compute(initialValue {
	get:,set:,on:,off:
}
)`


                        value = getterSetter;
	var options = context,oldUpdater = updater;
	context = options.context || options;
	get = options.get || get;
	set = options.set || function() {
	return value;
}
;// This is a "hack" to allow async computes.
                        if (options.fn) {
	var fn = options.fn,data;
	// make sure get is called with the newVal,but not setter
                            get = function() {
	return fn.call(context,value);
}
;// Check the number of arguments the
                            // async function takes.
                            if (fn.length === 0) {
	data = setupComputeHandlers(computed,fn,context,setCached);
}
else if (fn.length === 1) {
	data = setupComputeHandlers(computed,function() {
	return fn.call(context,value);
}
,context,setCached);}else {
	updater = function(newVal) {
	if (newVal !== undefined) {
	oldUpdater(newVal,value);
}
};
	data = setupComputeHandlers(computed,function() {
	var res = fn.call(context,value,function(newVal) {
	oldUpdater(newVal,value);
}
);
	// If undefined is returned,don't update the value.
                                    return res !== undefined ? res:value;
}
,context,setCached);}on = data.on;
	off = data.off;}else {
	updater = function() {
	var newVal = get.call(context);
	oldUpdater(newVal,value);
}
;}on = options.on || on;
	off = options.off || off;}}// ###Specifying only a value
                // If can.compute is called with an initialValue only,// reads to this value can be observed.
}
else {
	// `can.compute(initialValue)`
                value = getterSetter;
}
can.cid(computed,'compute');
	return can.simpleExtend(computed {
	isComputed:true,_bindsetup:function() {
	this.bound = true;
	// Set up live-binding
                        // While binding,this should not count as a read
                        var oldReading = can.__clearReading();
	on.call(this,updater);
	// Restore "Observed" for reading
                        can.__setReading(oldReading);
}
,_bindteardown:function() {
	off.call(this,updater);
	this.bound = false;
}
,bind:can.bindAndSetup,unbind:can.unbindAndTeardown,clone:function(context) {
	if (context) {
	if (form === 'setter') {
	args[2] = context;
}
else {
	args[1] = context;
}
}return can.compute.apply(can,args);}});};
	// A list of temporarily bound computes
        var computes,unbindComputes = function() {
	for (var i = 0,len = computes.length;
	i < len;
	i++) {
	computes[i].unbind('change',k);
}
computes = null;};
	// Binds computes for a moment to retain their value and prevent caching
        can.compute.temporarilyBind = function(compute) {
	compute.bind('change',k);
	if (!computes) {
	computes = [];
	setTimeout(unbindComputes,10);
}
computes.push(compute);};
	// Whether a compute is truthy
        can.compute.truthy = function(compute) {
	return can.compute(function() {
	var res = compute();
	if (typeof res === 'function') {
	res = res();
}
return !!res;});};
	can.compute.async = function(initialValue,asyncComputer,context) {
	return can.compute(initialValue {
	fn:asyncComputer,context:context
}
);};
	// {
	map:new can.Map( {
	first:"Justin"
}
)},["map","first"]
        can.compute.read = function(parent,reads,options) {
	options = options || {
	};
	// `cur` is the current value.
            var cur = parent,type,// `prev` is the object we are reading from.
                prev,// `foundObs` did we find an observable.
                foundObs;
	for (var i = 0,readLength = reads.length;
	i < readLength;
	i++) {
	// Update what we are reading from.
                prev = cur;
	// Read from the compute. We can't read a property yet.
                if (prev && prev.isComputed) {
	if (options.foundObservable) {
	options.foundObservable(prev,i);
}
prev = cur = prev();}// Look to read a property from something.
                if (isObserve(prev)) {
	if (!foundObs && options.foundObservable) {
	options.foundObservable(prev,i);
}
foundObs = 1;
	// is it a method on the prototype?
                    if (typeof prev[reads[i]] === 'function' && prev.constructor.prototype[reads[i]] === prev[reads[i]]) {
	// call that method
                        if (options.returnObserveMethods) {
	cur = cur[reads[i]];
}
else if (reads[i] === 'constructor' && prev instanceof can.Construct) {
	cur = prev[reads[i]];
}
else {
	cur = prev[reads[i]].apply(prev,options.args || []);
}
}else {
	// use attr to get that value
                        cur = cur.attr(reads[i]);
}
}else {
	// just do the dot operator
                    cur = prev[reads[i]];
}
type = typeof cur;
	// If it's a compute,get the compute's value
                // unless we are at the end of the
                if (cur && cur.isComputed && (!options.isArgument && i < readLength - 1)) {
	if (!foundObs && options.foundObservable) {
	options.foundObservable(prev,i + 1);
}
cur = cur();}// If it's an anonymous function,execute as requested
                else if (i < reads.length - 1 && type === 'function' && options.executeAnonymousFunctions && !(can.Construct && cur.prototype instanceof can.Construct)) {
	cur = cur();
}
// if there are properties left to read,and we don't have an object,early exit
                if (i < reads.length - 1 && (cur === null || type !== 'function' && type !== 'object')) {
	if (options.earlyExit) {
	options.earlyExit(prev,i,cur);
}
// return undefined so we know this isn't the right value
                    return {
	value:undefined,parent:prev
}
;}}// handle an ending function
            // unless it is a can.Construct-derived constructor
            if (typeof cur === 'function' && !(can.Construct && cur.prototype instanceof can.Construct) && !(can.route && cur === can.route)) {
	if (options.isArgument) {
	if (!cur.isComputed && options.proxyMethods !== false) {
	cur = can.proxy(cur,prev);
}
}else {
	if (cur.isComputed && !foundObs && options.foundObservable) {
	options.foundObservable(cur,i);
}
cur = cur.call(prev);}}// if we don't have a value,exit early.
            if (cur === undefined) {
	if (options.earlyExit) {
	options.earlyExit(prev,i - 1);
}
}return {
	value:cur,parent:prev
}
;};
	return can.compute;})(__m2,__m19,__m21);
	// ## observe/observe.js
    var __m17 = (function(can) {
	can.Observe = can.Map;
	can.Observe.startBatch = can.batch.start;
	can.Observe.stopBatch = can.batch.stop;
	can.Observe.triggerBatch = can.batch.trigger;
	return can;
}
)(__m2,__m18,__m22,__m23);
	// ## view/scope/scope.js
    var __m25 = (function(can) {
	// ## Helpers

        // Regex for escaped periods
        var escapeReg = /(\\)?\./g,// Regex for double escaped periods
            escapeDotReg = /\\\./g,// **getNames**
            // Returns array of names by splitting provided string by periods and single escaped periods.
            // ```getNames("a.b\.c.d\\.e") //-> ['a','b','c','d.e']```
            getNames = function(attr) {
	var names = [],last = 0;
	// Goes through attr string and places the characters found between the periods and single escaped periods into the
                // `names` array.  Double escaped periods are ignored.
                attr.replace(escapeReg,function(first,second,index) {
	if (!second) {
	names.push(
                            attr
                            .slice(last,index)

                            .replace(escapeDotReg,'.'));
	last = index + first.length;
}
});
	names.push(
                    attr
                    .slice(last)

                    .replace(escapeDotReg,'.'));
	return names;
}
;var Scope = can.Construct.extend( {
	// ## Scope.read
                // Scope.read was moved to can.compute.read
                // can.compute.read reads properties from a parent.  A much more complex version of getObject.
                read:can.compute.read
}
 {
	init:function(context,parent) {
	this._context = context;
	this._parent = parent;
	this.__cache = {
	};
}
,// ## Scope.prototype.attr
                // Reads a value from the current context or parent contexts.
                attr:function(key) {
	// Reads for whatever called before attr.  It's possible
                    // that this.read clears them.  We want to restore them.
                    var previousReads = can.__clearReading(),res = this.read(key {
	isArgument:true,returnObserveMethods:true,proxyMethods:false
}
).value;
	can.__setReading(previousReads);
	return res;},// ## Scope.prototype.add
                // Creates a new scope and sets the current scope to be the parent.
                // ```
                // var scope = new can.view.Scope([ {
	name:"Chris"
}
 {
	name:"Justin"
}
]).add( {
	name:"Brian"
}
);
	// scope.attr("name") //-> "Brian"
                // ```
                add:function(context) {
	if (context !== this._context) {
	return new this.constructor(context,this);
}
else {
	return this;
}
},// ## Scope.prototype.computeData
                // Finds the first location of the key in the scope and then provides a get-set compute that represents the key's value
                // and other information about where the value was found.
                computeData:function(key,options) {
	options = options || {
	args:[]
}
;var self = this,rootObserve,rootReads,computeData = {
	// computeData.compute returns a get-set compute that is tied to the first location of the provided
                            // key in the context of the scope.
                            compute:can.compute(function(newVal) {
	// **Compute setter**
                                if (arguments.length) {
	if (rootObserve.isComputed && !rootReads.length) {
	rootObserve(newVal);
}
else {
	var last = rootReads.length - 1;
	can.compute.read(rootObserve,rootReads.slice(0,last))
                                            .value.attr(rootReads[last],newVal);
}
// **Compute getter**}else {
	// If computeData has found the value for the key in the past in an observable then go directly to
                                    // the observable (rootObserve) that the value was found in the last time and return the new value.  This
                                    // is a huge performance gain for the fact that we aren't having to check the entire scope each time.
                                    if (rootObserve) {
	return can.compute.read(rootObserve,rootReads,options)
                                            .value;
}
// If the key has not already been located in a observable then we need to search the scope for the
                                    // key.  Once we find the key then we need to return it's value and if it is found in an observable
                                    // then we need to store the observable so the next time this compute is called it can grab the value
                                    // directly from the observable.
                                    var data = self.read(key,options);
	rootObserve = data.rootObserve;
	rootReads = data.reads;
	computeData.scope = data.scope;
	computeData.initialValue = data.value;
	computeData.reads = data.reads;
	computeData.root = rootObserve;
	return data.value;
}
})};
	return computeData;},// ## Scope.prototype.compute
                // Provides a get-set compute that represents a key's value.
                compute:function(key,options) {
	return this.computeData(key,options)
                        .compute;
}
,// ## Scope.prototype.read
                // Finds the first isntance of a key in the available scopes and returns the keys value along with the the observable the key
                // was found in,readsData and the current scope.

                read:function(attr,options) {
	// check if we should only look within current scope
                    var stopLookup;
	if (attr.substr(0,2) === './') {
	// set flag to halt lookup from walking up scope
                        stopLookup = true;
	// stop lookup from checking parent scopes
                        attr = attr.substr(2);
}
// check if we should be running this on a parent.
                    else if (attr.substr(0,3) === "../") {
	return this._parent.read(attr.substr(3),options);
}
else if (attr === "..") {
	return {
	value:this._parent._context
}
;}else if (attr === "." || attr === "this") {
	return {
	value:this._context
}
;}// Array of names from splitting attr string into names.  ```"a.b\.c.d\\.e" //-> ['a','b','c','d.e']```
                    var names = attr.indexOf('\\.') === -1 ?
                    // Reference doesn't contain escaped periods
                    attr.split('.')
                    // Reference contains escaped periods ```(`a.b\.c.foo` == `a["b.c"].foo)```:getNames(attr),// The current context (a scope is just data and a parent scope).
                        context,// The current scope.
                        scope = this,// While we are looking for a value,we track the most likely place this value will be found.
                        // This is so if there is no me.name.first,we setup a listener on me.name.
                        // The most likely candidate is the one with the most "read matches" "lowest" in the
                        // context chain.
                        // By "read matches",we mean the most number of values along the key.
                        // By "lowest" in the context chain,we mean the closest to the current context.
                        // We track the starting position of the likely place with `defaultObserve`.
                        defaultObserve,// Tracks how to read from the defaultObserve.
                        defaultReads = [],// Tracks the highest found number of "read matches".
                        defaultPropertyDepth = -1,// `scope.read` is designed to be called within a compute,but
                        // for performance reasons only listens to observables within one context.
                        // This is to say,if you have me.name in the current context,but me.name.first and
                        // we are looking for me.name.first,we don't setup bindings on me.name and me.name.first.
                        // To make this happen,we clear readings if they do not find a value.  But,// if that path turns out to be the default read,we need to restore them.  This
                        // variable remembers those reads so they can be restored.
                        defaultComputeReadings,// Tracks the default's scope.
                        defaultScope,// Tracks the first found observe.
                        currentObserve,// Tracks the reads to get the value for a scope.
                        currentReads;
	// Goes through each scope context provided until it finds the key (attr).  Once the key is found
                    // then it's value is returned along with an observe,the current scope and reads.
                    // While going through each scope context searching for the key,each observable found is returned and
                    // saved so that either the observable the key is found in can be returned,or in the case the key is not
                    // found in an observable the closest observable can be returned.

                    while (scope) {
	context = scope._context;
	if (context !== null) {
	var data = can.compute.read(context,names,can.simpleExtend( {
	foundObservable:function(observe,nameIndex) {
	currentObserve = observe;
	currentReads = names.slice(nameIndex);
}
,// Called when we were unable to find a value.
                                        earlyExit:function(parentValue,nameIndex) {
	if (nameIndex > defaultPropertyDepth) {
	defaultObserve = currentObserve;
	defaultReads = currentReads;
	defaultPropertyDepth = nameIndex;
	defaultScope = scope;
	defaultComputeReadings = can.__clearReading();
}
},// Execute anonymous functions found along the way
                                        executeAnonymousFunctions:true
}
,options));
	// **Key was found**,return value and location data
                            if (data.value !== undefined) {
	return {
	scope:scope,rootObserve:currentObserve,value:data.value,reads:currentReads
}
;}}// Prevent prior readings and then move up to the next scope.
                        can.__clearReading();
	if (!stopLookup) {
	// Move up to the next scope.
                            scope = scope._parent;
}
else {
	scope = null;
}
}// **Key was not found**,return undefined for the value.  Unless an observable was
                    // found in the process of searching for the key,then return the most likely observable along with it's
                    // scope and reads.

                    if (defaultObserve) {
	can.__setReading(defaultComputeReadings);
	return {
	scope:defaultScope,rootObserve:defaultObserve,reads:defaultReads,value:undefined
}
;}else {
	return {
	names:names,value:undefined
}
;}}});
	can.view.Scope = Scope;
	return Scope;})(__m2,__m15,__m18,__m22,__m13,__m23);
	// ## view/elements.js
    var __m27 = (function(can) {
	var selectsCommentNodes = (function() {
	return can.$(document.createComment('~')).length === 1;
}
)();
	var elements = {
	tagToContentPropMap: {
	option:'textContent' in document.createElement('option') ? 'textContent':'innerText',textarea:'value'
}
,// 3.0 TODO:remove
            attrMap:can.attr.map,// matches the attrName of a regexp
            attrReg:/([^\s=]+)[\s]*=[\s]*/,// 3.0 TODO:remove
            defaultValue:can.attr.defaultValue,// a map of parent element to child elements

            tagMap: {
	'':'span',colgroup:'col',table:'tbody',tr:'td',ol:'li',ul:'li',tbody:'tr',thead:'tr',tfoot:'tr',select:'option',optgroup:'option'
}
,// a tag's parent element
            reverseTagMap: {
	col:'colgroup',tr:'tbody',option:'select',td:'tr',th:'tr',li:'ul'
}
,// Used to determine the parentNode if el is directly within a documentFragment
            getParentNode:function(el,defaultParentNode) {
	return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode:el.parentNode;
}
,// 3.0 TODO:remove
            setAttr:can.attr.set,// 3.0 TODO:remove
            getAttr:can.attr.get,// 3.0 TODO:remove
            removeAttr:can.attr.remove,// Gets a "pretty" value for something
            contentText:function(text) {
	if (typeof text === 'string') {
	return text;
}
// If has no value,return an empty string.
                if (!text && text !== 0) {
	return '';
}
return '' + text;},after:function(oldElements,newFrag) {
	var last = oldElements[oldElements.length - 1];
	// Insert it in the `document` or `documentFragment`
                if (last.nextSibling) {
	can.insertBefore(last.parentNode,newFrag,last.nextSibling);
}
else {
	can.appendChild(last.parentNode,newFrag);
}
},replace:function(oldElements,newFrag) {
	elements.after(oldElements,newFrag);
	if (can.remove(can.$(oldElements)).length < oldElements.length && !selectsCommentNodes) {
	can.each(oldElements,function(el) {
	if (el.nodeType === 8) {
	el.parentNode.removeChild(el);
}
});}}};
	can.view.elements = elements;
	return elements;})(__m2,__m13);
	// ## view/scanner.js
    var __m26 = (function(can,elements,viewCallbacks) {
	var newLine = /(\r|\n)+/g,notEndTag = /\//,// Escapes characters starting with `\`.
            clean = function(content) {
	return content
                    .split('\\')
                    .join("\\\\")
                    .split("\n")
                    .join("\\n")
                    .split('"')
                    .join('\\"')
                    .split("\t")
                    .join("\\t");
}
,// Returns a tagName to use as a temporary placeholder for live content
            // looks forward ... could be slow,but we only do it when necessary
            getTag = function(tagName,tokens,i) {
	// if a tagName is provided,use that
                if (tagName) {
	return tagName;
}
else {
	// otherwise go searching for the next two tokens like "<",TAG
                    while (i < tokens.length) {
	if (tokens[i] === "<" && !notEndTag.test(tokens[i + 1])) {
	return elements.reverseTagMap[tokens[i + 1]] || 'span';
}
i++;}}return '';},bracketNum = function(content) {
	return (--content.split(" {
	")
                    .length) - (--content.split("
}
")
                    .length);
}
,myEval = function(script) {
	eval(script);
}
,attrReg = /([^\s]+)[\s]*=[\s]*$/,// Commands for caching.
            startTxt = 'var ___v1ew = [];
	',finishTxt = "return ___v1ew.join('')",put_cmd = "___v1ew.push(\n",insert_cmd = put_cmd,// Global controls (used by other functions to know where we are).
            // Are we inside a tag?
            htmlTag = null,// Are we within a quote within a tag?
            quote = null,// What was the text before the current quote? (used to get the `attr` name)
            beforeQuote = null,// Whether a rescan is in progress
            rescan = null,getAttrName = function() {
	var matches = beforeQuote.match(attrReg);
	return matches && matches[1];
}
,// Used to mark where the element is.
            status = function() {
	// `t` - `1`.
                // `h` - `0`.
                // `q` - String `beforeQuote`.
                return quote ? "'" + getAttrName() + "'":(htmlTag ? 1:0);
}
,// returns the top of a stack
            top = function(stack) {
	return stack[stack.length - 1];
}
,Scanner;
	can.view.Scanner = Scanner = function(options) {
	// Set options on self
            can.extend(this {
	text: {
	},tokens:[]
}
,options);
	// make sure it's an empty string if it's not
            this.text.options = this.text.options || "";
	// Cache a token lookup
            this.tokenReg = [];
	this.tokenSimple = {
	"<":"<",">":">",'"':'"',"'":"'"
}
;this.tokenComplex = [];
	this.tokenMap = {
	};
	for (var i = 0,token;
	token = this.tokens[i];
	i++) {
	// Save complex mappings (custom regexp)
                if (token[2]) {
	this.tokenReg.push(token[2]);
	this.tokenComplex.push( {
	abbr:token[1],re:new RegExp(token[2]),rescan:token[3]
}
);}// Save simple mappings (string only,no regexp)
                else {
	this.tokenReg.push(token[1]);
	this.tokenSimple[token[1]] = token[0];
}
this.tokenMap[token[0]] = token[1];}// Cache the token registry.
            this.tokenReg = new RegExp("(" + this.tokenReg.slice(0)
                .concat(["<",">",'"',"'"])
                .join("|") + ")","g");
}
;Scanner.prototype = {
	// a default that can be overwritten
            helpers:[],scan:function(source,name) {
	var tokens = [],last = 0,simple = this.tokenSimple,complex = this.tokenComplex;
	source = source.replace(newLine,"\n");
	if (this.transform) {
	source = this.transform(source);
}
source.replace(this.tokenReg,function(whole,part) {
	// offset is the second to last argument
                    var offset = arguments[arguments.length - 2];
	// if the next token starts after the last token ends
                    // push what's in between
                    if (offset > last) {
	tokens.push(source.substring(last,offset));
}
// push the simple token (if there is one)
                    if (simple[whole]) {
	tokens.push(whole);
}
// otherwise lookup complex tokens
                    else {
	for (var i = 0,token;
	token = complex[i];
	i++) {
	if (token.re.test(whole)) {
	tokens.push(token.abbr);
	// Push a rescan function if one exists
                                if (token.rescan) {
	tokens.push(token.rescan(part));
}
break;}}}// update the position of the last part of the last token
                    last = offset + part.length;
}
);
	// if there's something at the end,add it
                if (last < source.length) {
	tokens.push(source.substr(last));
}
var content = '',buff = [startTxt + (this.text.start || '')],// Helper `function` for putting stuff in the view concat.
                    put = function(content,bonus) {
	buff.push(put_cmd,'"',clean(content),'"' + (bonus || '') + ');
	');
}
,// A stack used to keep track of how we should end a bracket
                    // `
}
`.
                    // Once we have a `<%= %>` with a `leftBracket`,// we store how the file should end here (either `))` or `;
	`).
                    endStack = [],// The last token,used to remember which tag we are in.
                    lastToken,// The corresponding magic tag.
                    startTag = null,// Was there a magic tag inside an html tag?
                    magicInTag = false,// was there a special state
                    specialStates = {
	attributeHookups:[],// a stack of tagHookups
                        tagHookups:[],//last tag hooked up
                        lastTagHookup:''
}
,// Helper `function` for removing tagHookups from the hookup stack
                    popTagHookup = function() {
	// The length of tagHookups is the nested depth which can be used to uniquely identify custom tags of the same type
                        specialStates.lastTagHookup = specialStates.tagHookups.pop() + specialStates.tagHookups.length;
}
,// The current tag name.
                    tagName = '',// stack of tagNames
                    tagNames = [],// Pop from tagNames?
                    popTagName = false,// Declared here.
                    bracketCount,// in a special attr like src= or style=
                    specialAttribute = false,i = 0,token,tmap = this.tokenMap,attrName;
	// Reinitialize the tag state goodness.
                htmlTag = quote = beforeQuote = null;
	for (;
	(token = tokens[i++]) !== undefined;
	) {
	if (startTag === null) {
	switch (token) {
	case tmap.left:case tmap.escapeLeft:case tmap.returnLeft:magicInTag = htmlTag && 1;
	case tmap.commentLeft:// A new line -- just add whatever content within a clean.
                                // Reset everything.
                                startTag = token;
	if (content.length) {
	put(content);
}
content = '';
	break;
	case tmap.escapeFull:// This is a full line escape (a line that contains only whitespace and escaped logic)
                                // Break it up into escape left and right
                                magicInTag = htmlTag && 1;
	rescan = 1;
	startTag = tmap.escapeLeft;
	if (content.length) {
	put(content);
}
rescan = tokens[i++];
	content = rescan.content || rescan;
	if (rescan.before) {
	put(rescan.before);
}
tokens.splice(i,0,tmap.right);
	break;
	case tmap.commentFull:// Ignore full line comments.
                                break;
	case tmap.templateLeft:content += tmap.left;
	break;
	case '<':// Make sure we are not in a comment.
                                if (tokens[i].indexOf("!--") !== 0) {
	htmlTag = 1;
	magicInTag = 0;
}
content += token;
	break;
	case '>':htmlTag = 0;
	// content.substr(-1) doesn't work in IE7/8
                                var emptyElement = (content.substr(content.length - 1) === "/" || content.substr(content.length - 2) === "--"),attrs = "";
	// if there was a magic tag
                                // or it's an element that has text content between its tags,// but content is not other tags add a hookup
                                // TODO:we should only add `can.EJS.pending()` if there's a magic tag
                                // within the html tags.
                                if (specialStates.attributeHookups.length) {
	attrs = "attrs:['" + specialStates.attributeHookups.join("','") + "'],";
	specialStates.attributeHookups = [];
}
// this is the > of a special tag
                                // comparison to lastTagHookup makes sure the same custom tags can be nested
                                if ((tagName + specialStates.tagHookups.length) !== specialStates.lastTagHookup && tagName === top(specialStates.tagHookups)) {
	// If it's a self closing tag (like <content/>) make sure we put the / at the end.
                                    if (emptyElement) {
	content = content.substr(0,content.length - 1);
}
// Put the start of the end
                                    buff.push(put_cmd,'"',clean(content),'"',",can.view.pending( {
	tagName:'" + tagName + "'," + (attrs) + "scope:" + (this.text.scope || "this") + this.text.options);
	// if it's a self closing tag (like <content/>) close and end the tag
                                    if (emptyElement) {
	buff.push("
}
));
	");
	content = "/>";
	popTagHookup();}// if it's an empty tag
                                    else if (tokens[i] === "<" && tokens[i + 1] === "/" + tagName) {
	buff.push("
}
));
	");
	content = token;
	popTagHookup();}else {
	// it has content
                                        buff.push(",subtemplate:function(" + this.text.argNames + ") {
	\n" + startTxt + (this.text.start || ''));
	content = '';
}
}else if (magicInTag || (!popTagName && elements.tagToContentPropMap[tagNames[tagNames.length - 1]]) || attrs) {
	// make sure / of /> is on the right of pending
                                    var pendingPart = ",can.view.pending( {
	" + attrs + "scope:" + (this.text.scope || "this") + this.text.options + "
}
),\"";
	if (emptyElement) {
	put(content.substr(0,content.length - 1),pendingPart + "/>\"");
}
else {
	put(content,pendingPart + ">\"");
}
content = '';
	magicInTag = 0;}else {
	content += token;
}
// if it's a tag like <input/>
                                if (emptyElement || popTagName) {
	// remove the current tag in the stack
                                    tagNames.pop();
	// set the current tag to the previous parent
                                    tagName = tagNames[tagNames.length - 1];
	// Don't pop next time
                                    popTagName = false;
}
specialStates.attributeHookups = [];
	break;
	case "'":case '"':// If we are in an html tag,finding matching quotes.
                                if (htmlTag) {
	// We have a quote and it matches.
                                    if (quote && quote === token) {
	// We are exiting the quote.
                                        quote = null;
	// Otherwise we are creating a quote.
                                        // TODO:does this handle `\`?
                                        var attr = getAttrName();
	if (viewCallbacks.attr(attr)) {
	specialStates.attributeHookups.push(attr);
}
if (specialAttribute) {
	content += token;
	put(content);
	buff.push(finishTxt,"
}
));
	\n");
	content = "";
	specialAttribute = false;
	break;}}else if (quote === null) {
	quote = token;
	beforeQuote = lastToken;
	attrName = getAttrName();
	// TODO:check if there's magic!!!!
                                        if ((tagName === "img" && attrName === "src") || attrName === "style") {
	// put content that was before the attr name,but don't include the src=
                                            put(content.replace(attrReg,""));
	content = "";
	specialAttribute = true;
	buff.push(insert_cmd,"can.view.txt(2,'" + getTag(tagName,tokens,i) + "'," + status() + ",this,function() {
	",startTxt);
	put(attrName + "=" + token);
	break;
}
}}default:// Track the current tag
                                if (lastToken === '<') {
	tagName = token.substr(0,3) === "!--" ?
                                        "!--":token.split(/\s/)[0];
	var isClosingTag = false,cleanedTagName;
	if (tagName.indexOf("/") === 0) {
	isClosingTag = true;
	cleanedTagName = tagName.substr(1);
}
if (isClosingTag) {
	// </tag>

                                        // when we enter a new tag,pop the tag name stack
                                        if (top(tagNames) === cleanedTagName) {
	// set tagName to the last tagName
                                            // if there are no more tagNames,we'll rely on getTag.
                                            tagName = cleanedTagName;
	popTagName = true;
}
// if we are in a closing tag of a custom tag
                                        if (top(specialStates.tagHookups) === cleanedTagName) {
	// remove the last < from the content
                                            put(content.substr(0,content.length - 1));
	// finish the "section"
                                            buff.push(finishTxt + "
}
}) );
	");
	// the < belongs to the outside
                                            content = "><";
	popTagHookup();
}
}else {
	if (tagName.lastIndexOf("/") === tagName.length - 1) {
	tagName = tagName.substr(0,tagName.length - 1);
}
if (tagName !== "!--" && (viewCallbacks.tag(tagName))) {
	// if the content tag is inside something it doesn't belong ...
                                            if (tagName === "content" && elements.tagMap[top(tagNames)]) {
	// convert it to an element that will work
                                                token = token.replace("content",elements.tagMap[top(tagNames)]);
}
// we will hookup at the ending tag>
                                            specialStates.tagHookups.push(tagName);
}
tagNames.push(tagName);}}content += token;
	break;}}else {
	// We have a start tag.
                        switch (token) {
	case tmap.right:case tmap.returnRight:switch (startTag) {
	case tmap.left:// Get the number of ` {
	minus
}
`
                                        bracketCount = bracketNum(content);
	// We are ending a block.
                                        if (bracketCount === 1) {
	// We are starting on.
                                            buff.push(insert_cmd,'can.view.txt(0,\'' + getTag(tagName,tokens,i) + '\',' + status() + ',this,function() {
	',startTxt,content);
	endStack.push( {
	before:"",after:finishTxt + "
}
));
	\n"});}else {
	// How are we ending this statement?
                                            last = // If the stack has value and we are ending a block...
                                            endStack.length && bracketCount === -1 ? // Use the last item in the block stack.
                                            endStack.pop():// Or use the default ending. {
	after:";
	"
}
;// If we are ending a returning block,// add the finish text which returns the result of the
                                            // block.
                                            if (last.before) {
	buff.push(last.before);
}
// Add the remaining content.
                                            buff.push(content,";
	",last.after);
}
break;
	case tmap.escapeLeft:case tmap.returnLeft:// We have an extra ` {
	` -> `block`.
                                        // Get the number of ` {
	minus
}
`.
                                        bracketCount = bracketNum(content);
	// If we have more ` {
	`,it means there is a block.
                                        if (bracketCount) {
	// When we return to the same # of ` {
	` vs `
}
` end with a `doubleParent`.
                                            endStack.push( {
	before:finishTxt,after:"
}
));
	\n"});}var escaped = startTag === tmap.escapeLeft ? 1:0,commands = {
	insert:insert_cmd,tagName:getTag(tagName,tokens,i),status:status(),specialAttribute:specialAttribute
}
;for (var ii = 0;
	ii < this.helpers.length;
	ii++) {
	// Match the helper based on helper
                                            // regex name value
                                            var helper = this.helpers[ii];
	if (helper.name.test(content)) {
	content = helper.fn(content,commands);
	// dont escape partials
                                                if (helper.name.source === /^>[\s]*\w*/.source) {
	escaped = 0;
}
break;}}// Handle special cases
                                        if (typeof content === 'object') {
	if (content.startTxt && content.end && specialAttribute) {
	buff.push(insert_cmd,"can.view.toStr( ",content.content,'() ) );
	');
}
else {
	if (content.startTxt) {
	buff.push(insert_cmd,"can.view.txt(\n" +
                                                        (typeof status() === "string" || (content.escaped != null ? content.escaped:escaped)) + ",\n'" + tagName + "',\n" + status() + ",\nthis,\n");
}
else if (content.startOnlyTxt) {
	buff.push(insert_cmd,'can.view.onlytxt(this,\n');
}
buff.push(content.content);
	if (content.end) {
	buff.push('));
	');
}
}}else if (specialAttribute) {
	buff.push(insert_cmd,content,');
	');
}
else {
	// If we have `<%== a(function() {
	%>` then we want
                                            // `can.EJS.text(0,this,function() {
	return a(function() {
	var _v1ew = [];
	`.

                                            buff.push(insert_cmd,"can.view.txt(\n" + (typeof status() === "string" || escaped) +
                                                ",\n'" + tagName + "',\n" + status() + ",\nthis,\nfunction() {
	" +
                                                (this.text.escape || '') +
                                                "return ",content,// If we have a block.
                                                bracketCount ?
                                                // Start with startTxt `"var _v1ew = [];
	"`.
                                                startTxt:// If not,add `doubleParent` to close push and text.
                                                "
}
));
	\n");}if (rescan && rescan.after && rescan.after.length) {
	put(rescan.after.length);
	rescan = null;
}
break;}startTag = null;
	content = '';
	break;
	case tmap.templateLeft:content += tmap.left;
	break;
	default:content += token;
	break;}}lastToken = token;}// Put it together...
                if (content.length) {
	// Should be `content.dump` in Ruby.
                    put(content);
}
buff.push(";
	");
	var template = buff.join(''),out = {
	out:(this.text.outStart || "") + template + " " + finishTxt + (this.text.outEnd || "")
}
;// Use `eval` instead of creating a function,because it is easier to debug.
                myEval.call(out,'this.fn = (function(' + this.text.argNames + ') {
	' + out.out + '
}
);
	\r\n//# sourceURL=' + name + '.js');
	return out;}};
	// can.view.attr

        // This is called when there is a special tag
        can.view.pending = function(viewData) {
	// we need to call any live hookups
            // so get that and return the hook
            // a better system will always be called with the same stuff
            var hooks = can.view.getHooks();
	return can.view.hook(function(el) {
	can.each(hooks,function(fn) {
	fn(el);
}
);
	viewData.templateType = "legacy";
	if (viewData.tagName) {
	viewCallbacks.tagHandler(el,viewData.tagName,viewData);
}
can.each(viewData && viewData.attrs || [],function(attributeName) {
	viewData.attributeName = attributeName;
	var callback = viewCallbacks.attr(attributeName);
	if (callback) {
	callback(el,viewData);
}
});});};
	can.view.tag("content",function(el,tagData) {
	return tagData.scope;
}
);
	can.view.Scanner = Scanner;
	return Scanner;})(__m13,__m27,__m12);
	// ## view/node_lists/node_lists.js
    var __m30 = (function(can) {
	// ## Helpers
        // Some browsers don't allow expando properties on HTMLTextNodes
        // so let's try to assign a custom property,an 'expando' property.
        // We use this boolean to determine how we are going to hold on
        // to HTMLTextNode within a nodeList.  More about this in the 'id'
        // function.
        var canExpando = true;
	try {
	document.createTextNode('')._ = 0;
}
catch (ex) {
	canExpando = false;
}
// A mapping of element ids to nodeList id allowing us to quickly find an element
        // that needs to be replaced when updated.
        var nodeMap = {
	},// A mapping of ids to text nodes,this map will be used in the
            // case of the browser not supporting expando properties.
            textNodeMap = {
	},// The name of the expando property;
	the value returned
            // given a nodeMap key.
            expando = 'ejs_' + Math.random(),// The id used as the key in our nodeMap,this integer
            // will be preceded by 'element_' or 'obj_' depending on whether
            // the element has a nodeName.
            _id = 0,// ## nodeLists.id
            // Given a template node,create an id on the node as a expando
            // property,or if the node is an HTMLTextNode and the browser
            // doesn't support expando properties store the id with a
            // reference to the text node in an internal collection then return
            // the lookup id.
            id = function(node,localMap) {
	var _textNodeMap = localMap || textNodeMap;
	var id = readId(node,_textNodeMap);
	if (id) {
	return id;
}
else {
	// If the browser supports expando properties or the node
                    // provided is not an HTMLTextNode,we don't need to work
                    // with the internal textNodeMap and we can place the property
                    // on the node.
                    if (canExpando || node.nodeType !== 3) {
	++_id;
	return node[expando] = (node.nodeName ? 'element_':'obj_') + _id;
}
else {
	// If we didn't find the node,we need to register it and return
                        // the id used.
                        ++_id;
	// If we didn't find the node,we need to register it and return
                        // the id used.
                        // We have to store the node itself because of the browser's lack
                        // of support for expando properties (i.e. we can't use a look-up
                        // table and store the id on the node as a custom property).
                        _textNodeMap['text_' + _id] = node;
	return 'text_' + _id;
}
}},readId = function(node,textNodeMap) {
	if (canExpando || node.nodeType !== 3) {
	return node[expando];
}
else {
	// The nodeList has a specific collection for HTMLTextNodes for
                    // (older) browsers that do not support expando properties.
                    for (var textNodeID in textNodeMap) {
	if (textNodeMap[textNodeID] === node) {
	return textNodeID;
}
}}},splice = [].splice,push = [].push,// ## nodeLists.itemsInChildListTree
            // Given a nodeList return the number of child items in the provided
            // list and any child lists.
            itemsInChildListTree = function(list) {
	var count = 0;
	for (var i = 0,len = list.length;
	i < len;
	i++) {
	var item = list[i];
	// If the item is an HTMLElement then increment the count by 1.
                    if (item.nodeType) {
	count++;
}
else {
	// If the item is not an HTMLElement it is a list,so
                        // increment the count by the number of items in the child
                        // list.
                        count += itemsInChildListTree(item);
}
}return count;},replacementMap = function(replacements,idMap) {
	var map = {
	};
	for (var i = 0,len = replacements.length;
	i < len;
	i++) {
	var node = nodeLists.first(replacements[i]);
	map[id(node,idMap)] = replacements[i];
}
return map;};
	// ## Registering & Updating
        // To keep all live-bound sections knowing which elements they are managing,// all live-bound elments are registered and updated when they change.
        // For example,the above template,when rendered with data like://     data = new can.Map( {
	//         items:["first","second"]
        //
}
)
        // This will first render the following content://     <div>
        //         <span data-view-id='5'/>
        //     </div>
        // When the `5` callback is called,this will register the `<span>` like://     var ifsNodes = [<span 5>]
        //     nodeLists.register(ifsNodes);
	// And then render ` {
	{if
}
}`'s contents and update `ifsNodes` with it://     nodeLists.update( ifsNodes,[<"\nItems:\n">,<span data-view-id="6">] );
	// Next,hookup `6` is called which will regsiter the `<span>` like://     var eachsNodes = [<span 6>];
	//     nodeLists.register(eachsNodes);
	// And then it will render ` {
	{#each
}
}`'s content and update `eachsNodes` with it://     nodeLists.update(eachsNodes,[<label>,<label>]);
	// As `nodeLists` knows that `eachsNodes` is inside `ifsNodes`,it also updates
        // `ifsNodes`'s nodes to look like://     [<"\nItems:\n">,<label>,<label>]
        // Now,if all items were removed,` {
	{#if
}
}` would be able to remove
        // all the `<label>` elements.
        // When you regsiter a nodeList,you can also provide a callback to know when
        // that nodeList has been replaced by a parent nodeList.  This is
        // useful for tearing down live-binding.
        var nodeLists = {
	id:id,// ## nodeLists.update
            // Updates a nodeList with new items,i.e. when values for the template have changed.
            update:function(nodeList,newNodes) {
	// Unregister all childNodeLists.
                var oldNodes = nodeLists.unregisterChildren(nodeList);
	newNodes = can.makeArray(newNodes);
	var oldListLength = nodeList.length;
	// Replace oldNodeLists's contents.
                splice.apply(nodeList,[
                        0,oldListLength
                    ].concat(newNodes));
	if (nodeList.replacements) {
	nodeLists.nestReplacements(nodeList);
}
else {
	nodeLists.nestList(nodeList);
}
return oldNodes;},nestReplacements:function(list) {
	var index = 0,// temporary id map that is limited to this call
                    idMap = {
	},// replacements are in reverse order in the DOM
                    rMap = replacementMap(list.replacements,idMap),rCount = list.replacements.length;
	while (index < list.length && rCount) {
	var node = list[index],replacement = rMap[readId(node,idMap)];
	if (replacement) {
	list.splice(index,itemsInChildListTree(replacement),replacement);
	rCount--;
}
index++;}list.replacements = [];},// ## nodeLists.nestList
            // If a given list does not exist in the nodeMap then create an lookup
            // id for it in the nodeMap and assign the list to it.
            // If the the provided does happen to exist in the nodeMap update the
            // elements in the list.
            // @param {
	Array.<HTMLElement>
}
nodeList The nodeList being nested.
            nestList:function(list) {
	var index = 0;
	while (index < list.length) {
	var node = list[index],childNodeList = nodeMap[id(node)];
	if (childNodeList) {
	if (childNodeList !== list) {
	list.splice(index,itemsInChildListTree(childNodeList),childNodeList);
}
}else {
	// Indicate the new nodes belong to this list.
                        nodeMap[id(node)] = list;
}
index++;}},// ## nodeLists.last
            // Return the last HTMLElement in a nodeList,if the last
            // element is a nodeList,returns the last HTMLElement of
            // the child list,etc.
            last:function(nodeList) {
	var last = nodeList[nodeList.length - 1];
	// If the last node in the list is not an HTMLElement
                // it is a nodeList so call `last` again.
                if (last.nodeType) {
	return last;
}
else {
	return nodeLists.last(last);
}
},// ## nodeLists.first
            // Return the first HTMLElement in a nodeList,if the first
            // element is a nodeList,returns the first HTMLElement of
            // the child list,etc.
            first:function(nodeList) {
	var first = nodeList[0];
	// If the first node in the list is not an HTMLElement
                // it is a nodeList so call `first` again.
                if (first.nodeType) {
	return first;
}
else {
	return nodeLists.first(first);
}
},// ## nodeLists.register
            // Registers a nodeList and returns the nodeList passed to register
            register:function(nodeList,unregistered,parent) {
	// If a unregistered callback has been provided assign it to the nodeList
                // as a property to be called when the nodeList is unregistred.
                nodeList.unregistered = unregistered;
	nodeList.parentList = parent;
	if (parent === true) {
	// this is the "top" parent in stache
                    nodeList.replacements = [];
}
else if (parent) {
	// TOOD:remove
                    parent.replacements.push(nodeList);
	nodeList.replacements = [];
}
else {
	nodeLists.nestList(nodeList);
}
return nodeList;},// ## nodeLists.unregisterChildren
            // Unregister all childen within the provided list and return the
            // unregistred nodes.
            // @param {
	Array.<HTMLElement>
}
nodeList The child list to unregister.
            unregisterChildren:function(nodeList) {
	var nodes = [];
	// For each node in the nodeList we want to compute it's id
                // and delete it from the nodeList's internal map.
                can.each(nodeList,function(node) {
	// If the node does not have a nodeType it is an array of
                    // nodes.
                    if (node.nodeType) {
	if (!nodeList.replacements) {
	delete nodeMap[id(node)];
}
nodes.push(node);}else {
	// Recursively unregister each of the child lists in
                        // the nodeList.
                        push.apply(nodes,nodeLists.unregister(node));
}
});
	return nodes;},// ## nodeLists.unregister
            // Unregister's a nodeList and returns the unregistered nodes.
            // Call if the nodeList is no longer being updated. This will
            // also unregister all child nodeLists.
            unregister:function(nodeList) {
	var nodes = nodeLists.unregisterChildren(nodeList);
	// If an 'unregisted' function was provided during registration,remove
                // it from the list,and call the function provided.
                if (nodeList.unregistered) {
	var unregisteredCallback = nodeList.unregistered;
	delete nodeList.unregistered;
	delete nodeList.replacements;
	unregisteredCallback();
}
return nodes;},nodeMap:nodeMap};
	can.view.nodeLists = nodeLists;
	return nodeLists;})(__m2,__m27);
	// ## view/parser/parser.js
    var __m31 = (function(can) {
	function makeMap(str) {
	var obj = {
	},items = str.split(",");
	for (var i = 0;
	i < items.length;
	i++) {
	obj[items[i]] = true;
}
return obj;}var alphaNumericHU = "-A-Za-z0-9_",attributeNames = "[a-zA-Z_:][" + alphaNumericHU + ":.]*",spaceEQspace = "\\s*=\\s*",dblQuote2dblQuote = "\"((?:\\\\.|[^\"])*)\"",quote2quote = "'((?:\\\\.|[^'])*)'",attributeEqAndValue = "(?:" + spaceEQspace + "(?:" +
                "(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",matchStash = "\\ {
	\\ {
	[^\\
}
]*\\}\\}\\}?",stash = "\\ {
	\\ {
	([^\\
}
]*)\\}\\}\\}?",startTag = new RegExp("^<([" + alphaNumericHU + "]+)" +
                "(" +
                "(?:\\s*" +
                "(?:(?:" +
                "(?:" + attributeNames + ")?" +
                attributeEqAndValue + ")|" +
                "(?:" + matchStash + ")+)" +
                ")*" +
                ")\\s*(\\/?)>"),endTag = new RegExp("^<\\/([" + alphaNumericHU + "]+)[^>]*>"),attr = new RegExp("(?:" +
                "(?:(" + attributeNames + ")|" + stash + ")" +
                "(?:" + spaceEQspace +
                "(?:" +
                "(?:" + dblQuote2dblQuote + ")|(?:" + quote2quote + ")|([^>\\s]+)" +
                ")" +
                ")?)","g"),mustache = new RegExp(stash,"g"),txtBreak = /<|\ {
	\{/;
	// Empty Elements - HTML 5
        var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");
	// Block Elements - HTML 5
        var block = makeMap("address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");
	// Inline Elements - HTML 5
        var inline = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
	// Elements that you can,intentionally,leave open
        // (and which close themselves)
        var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
	// Attributes that have their values filled in disabled="disabled"
        var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
	// Special Elements (can contain anything)
        var special = makeMap("script,style");
	var HTMLParser = function(html,handler) {
	function parseStartTag(tag,tagName,rest,unary) {
	tagName = tagName.toLowerCase();
	if (block[tagName]) {
	while (stack.last() && inline[stack.last()]) {
	parseEndTag("",stack.last());
}
}if (closeSelf[tagName] && stack.last() === tagName) {
	parseEndTag("",tagName);
}
unary = empty[tagName] || !! unary;
	handler.start(tagName,unary);
	if (!unary) {
	stack.push(tagName);
}
// find attribute or special
                HTMLParser.parseAttrs(rest,handler);
	handler.end(tagName,unary);
}
function parseEndTag(tag,tagName) {
	// If no tag name is provided,clean shop
                var pos;
	if (!tagName) {
	pos = 0;
}
// Find the closest opened tag of the same type
                else {
	for (pos = stack.length - 1;
	pos >= 0;
	pos--) {
	if (stack[pos] === tagName) {
	break;
}
}}if (pos >= 0) {
	// Close all the open elements,up the stack
                    for (var i = stack.length - 1;
	i >= pos;
	i--) {
	if (handler.close) {
	handler.close(stack[i]);
}
}// Remove the open elements from the stack
                    stack.length = pos;
}
}function parseMustache(mustache,inside) {
	if (handler.special) {
	handler.special(inside);
}
}var index,chars,match,stack = [],last = html;
	stack.last = function() {
	return this[this.length - 1];
}
;while (html) {
	chars = true;
	// Make sure we're not in a script or style element
                if (!stack.last() || !special[stack.last()]) {
	// Comment
                    if (html.indexOf("<!--") === 0) {
	index = html.indexOf("-->");
	if (index >= 0) {
	if (handler.comment) {
	handler.comment(html.substring(4,index));
}
html = html.substring(index + 3);
	chars = false;}// end tag}else if (html.indexOf("</") === 0) {
	match = html.match(endTag);
	if (match) {
	html = html.substring(match[0].length);
	match[0].replace(endTag,parseEndTag);
	chars = false;
}
// start tag}else if (html.indexOf("<") === 0) {
	match = html.match(startTag);
	if (match) {
	html = html.substring(match[0].length);
	match[0].replace(startTag,parseStartTag);
	chars = false;
}
}else if (html.indexOf(" {
	{") === 0) {
	match = html.match(mustache);
	if (match) {
	html = html.substring(match[0].length);
	match[0].replace(mustache,parseMustache);
}
}if (chars) {
	index = html.search(txtBreak);
	var text = index < 0 ? html:html.substring(0,index);
	html = index < 0 ? "":html.substring(index);
	if (handler.chars && text) {
	handler.chars(text);
}
}}else {
	html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"),function(all,text) {
	text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2");
	if (handler.chars) {
	handler.chars(text);
}
return "";});
	parseEndTag("",stack.last());}if (html === last) {
	throw "Parse Error:" + html;
}
last = html;}// Clean up any remaining tags
            parseEndTag();
	handler.done();
}
;HTMLParser.parseAttrs = function(rest,handler) {
	(rest != null ? rest:"").replace(attr,function(text,name,special,dblQuote,singleQuote,val) {
	if (special) {
	handler.special(special);
}
if (name || dblQuote || singleQuote || val) {
	var value = arguments[3] ? arguments[3]:arguments[4] ? arguments[4]:arguments[5] ? arguments[5]:fillAttrs[name.toLowerCase()] ? name:"";
	handler.attrStart(name || "");
	var last = mustache.lastIndex = 0,res = mustache.exec(value),chars;
	while (res) {
	chars = value.substring(
                            last,mustache.lastIndex - res[0].length);
	if (chars.length) {
	handler.attrValue(chars);
}
handler.special(res[1]);
	last = mustache.lastIndex;
	res = mustache.exec(value);}chars = value.substr(
                        last,value.length);
	if (chars) {
	handler.attrValue(chars);
}
handler.attrEnd(name || "");}});};
	can.view.parser = HTMLParser;
	return HTMLParser;})(__m13);
	// ## view/live/live.js
    var __m29 = (function(can,elements,view,nodeLists,parser) {
	elements = elements || can.view.elements;
	nodeLists = nodeLists || can.view.NodeLists;
	parser = parser || can.view.parser;
	// ## live.js
        // The live module provides live binding for computes
        // and can.List.
        // Currently,it's API is designed for `can/view/render`,but
        // it could easily be used for other purposes.
        // ### Helper methods
        // #### setup
        // `setup(HTMLElement,bind(data),unbind(data)) -> data`
        // Calls bind right away,but will call unbind
        // if the element is "destroyed" (removed from the DOM).
        var setup = function(el,bind,unbind) {
	// Removing an element can call teardown which
            // unregister the nodeList which calls teardown
            var tornDown = false,teardown = function() {
	if (!tornDown) {
	tornDown = true;
	unbind(data);
	can.unbind.call(el,'removed',teardown);
}
return true;},data = {
	teardownCheck:function(parent) {
	return parent ? false:teardown();
}
};
	can.bind.call(el,'removed',teardown);
	bind(data);
	return data;},// #### listen
            // Calls setup,but presets bind and unbind to
            // operate on a compute
            listen = function(el,compute,change) {
	return setup(el,function() {
	compute.bind('change',change);
}
,function(data) {
	compute.unbind('change',change);
	if (data.nodeList) {
	nodeLists.unregister(data.nodeList);
}
});},// #### getAttributeParts
            // Breaks up a string like foo='bar' into ["foo","'bar'""]
            getAttributeParts = function(newVal) {
	var attrs = {
	},attr;
	parser.parseAttrs(newVal {
	attrStart:function(name) {
	attrs[name] = "";
	attr = name;
}
,attrValue:function(value) {
	attrs[attr] += value;
}
,attrEnd:function() {
	}
}
);
	return attrs;},splice = [].splice,isNode = function(obj) {
	return obj && obj.nodeType;
}
,addTextNodeIfNoChildren = function(frag) {
	if (!frag.childNodes.length) {
	frag.appendChild(document.createTextNode(""));
}
};
	var live = {
	list:function(el,compute,render,context,parentNode,nodeList) {
	// A nodeList of all elements this live-list manages.
                // This is here so that if this live list is within another section
                // that section is able to remove the items in this list.
                var masterNodeList = nodeList || [el],// A mapping of items to their indicies'
                    indexMap = [],// Called when items are added to the list.
                    add = function(ev,items,index) {
	// Collect new html and mappings
                        var frag = document.createDocumentFragment(),newNodeLists = [],newIndicies = [];
	// For each new item,can.each(items,function(item,key) {
	var itemNodeList = [];
	if (nodeList) {
	nodeLists.register(itemNodeList,null,true);
}
var itemIndex = can.compute(key + index),// get its string content
                                itemHTML = render.call(context,item,itemIndex,itemNodeList),gotText = typeof itemHTML === "string",// and convert it into elements.
                                itemFrag = can.frag(itemHTML);
	// Add those elements to the mappings.

                            itemFrag = gotText ? can.view.hookup(itemFrag):itemFrag;
	var childNodes = can.makeArray(itemFrag.childNodes);
	if (nodeList) {
	nodeLists.update(itemNodeList,childNodes);
	newNodeLists.push(itemNodeList);
}
else {
	newNodeLists.push(nodeLists.register(childNodes));
}
// Hookup the fragment (which sets up child live-bindings) and
                            // add it to the collection of all added elements.
                            frag.appendChild(itemFrag);
	// track indicies;
	newIndicies.push(itemIndex);
}
);
	// The position of elements is always after the initial text placeholder node
                        var masterListIndex = index + 1;
	// Check if we are adding items at the end
                        if (!masterNodeList[masterListIndex]) {
	elements.after(masterListIndex === 1 ? [text]:[nodeLists.last(masterNodeList[masterListIndex - 1])],frag);
}
else {
	// Add elements before the next index's first element.
                            var el = nodeLists.first(masterNodeList[masterListIndex]);
	can.insertBefore(el.parentNode,frag,el);
}
splice.apply(masterNodeList,[
                                masterListIndex,0
                            ].concat(newNodeLists));
	// update indices after insert point
                        splice.apply(indexMap,[
                                index,0
                            ].concat(newIndicies));
	for (var i = index + newIndicies.length,len = indexMap.length;
	i < len;
	i++) {
	indexMap[i](i);
}
},// Called when items are removed or when the bindings are torn down.
                    remove = function(ev,items,index,duringTeardown,fullTeardown) {
	// If this is because an element was removed,we should
                        // check to make sure the live elements are still in the page.
                        // If we did this during a teardown,it would cause an infinite loop.
                        if (!duringTeardown && data.teardownCheck(text.parentNode)) {
	return;
}
var removedMappings = masterNodeList.splice(index + 1,items.length),itemsToRemove = [];
	can.each(removedMappings,function(nodeList) {
	// Unregister to free up event bindings.
                            var nodesToRemove = nodeLists.unregister(nodeList);
	// add items that we will remove all at once
                            [].push.apply(itemsToRemove,nodesToRemove);
}
);
	// update indices after remove point
                        indexMap.splice(index,items.length);
	for (var i = index,len = indexMap.length;
	i < len;
	i++) {
	indexMap[i](i);
}
// don't remove elements during teardown.  Something else will probably be doing that.
                        if (!fullTeardown) {
	can.remove(can.$(itemsToRemove));
}
},// A text node placeholder
                    text = document.createTextNode(''),// The current list.
                    list,// Called when the list is replaced with a new list or the binding is torn-down.
                    teardownList = function(fullTeardown) {
	// there might be no list right away,and the list might be a plain
                        // array
                        if (list && list.unbind) {
	list.unbind('add',add)
                                .unbind('remove',remove);
}
// use remove to clean stuff up for us
                        remove( {
	}{length:masterNodeList.length - 1
}
,0,true,fullTeardown);},// Called when the list is replaced or setup.
                    updateList = function(ev,newList,oldList) {
	teardownList();
	// make an empty list if the compute returns null or undefined
                        list = newList || [];
	// list might be a plain array
                        if (list.bind) {
	list.bind('add',add)
                                .bind('remove',remove);
}
add( {
	},list,0);
}
;parentNode = elements.getParentNode(el,parentNode);
	// Setup binding and teardown to add and remove events
                var data = setup(parentNode,function() {
	if (can.isFunction(compute)) {
	compute.bind('change',updateList);
}
},function() {
	if (can.isFunction(compute)) {
	compute.unbind('change',updateList);
}
teardownList(true);});
	if (!nodeList) {
	live.replace(masterNodeList,text,data.teardownCheck);
}
else {
	elements.replace(masterNodeList,text);
	nodeLists.update(masterNodeList,[text]);
	nodeList.unregistered = data.teardownCheck;
}
// run the list setup
                updateList( {
	},can.isFunction(compute) ? compute():compute);
}
,html:function(el,compute,parentNode,nodeList) {
	var data;
	parentNode = elements.getParentNode(el,parentNode);
	data = listen(parentNode,compute,function(ev,newVal,oldVal) {
	// TODO:remove teardownCheck in 2.1
                    var attached = nodeLists.first(nodes).parentNode;
	// update the nodes in the DOM with the new rendered value
                    if (attached) {
	makeAndPut(newVal);
}
data.teardownCheck(nodeLists.first(nodes).parentNode);});
	var nodes = nodeList || [el],makeAndPut = function(val) {
	var isString = !isNode(val),frag = can.frag(val),oldNodes = can.makeArray(nodes);
	// Add a placeholder textNode if necessary.
                        addTextNodeIfNoChildren(frag);
	if (isString) {
	frag = can.view.hookup(frag,parentNode);
}
// We need to mark each node as belonging to the node list.
                        oldNodes = nodeLists.update(nodes,frag.childNodes);
	elements.replace(oldNodes,frag);
}
;data.nodeList = nodes;
	// register the span so nodeLists knows the parentNodeList
                if (!nodeList) {
	nodeLists.register(nodes,data.teardownCheck);
}
else {
	nodeList.unregistered = data.teardownCheck;
}
makeAndPut(compute());},replace:function(nodes,val,teardown) {
	var oldNodes = nodes.slice(0),frag = can.frag(val);
	nodeLists.register(nodes,teardown);
	if (typeof val === 'string') {
	// if it was a string,check for hookups
                    frag = can.view.hookup(frag,nodes[0].parentNode);
}
// We need to mark each node as belonging to the node list.
                nodeLists.update(nodes,frag.childNodes);
	elements.replace(oldNodes,frag);
	return nodes;
}
,text:function(el,compute,parentNode,nodeList) {
	var parent = elements.getParentNode(el,parentNode);
	// setup listening right away so we don't have to re-calculate value
                var data = listen(parent,compute,function(ev,newVal,oldVal) {
	// Sometimes this is 'unknown' in IE and will throw an exception if it is

                    if (typeof node.nodeValue !== 'unknown') {
	node.nodeValue = can.view.toStr(newVal);
}
// TODO:remove in 2.1
                    data.teardownCheck(node.parentNode);
}
);
	// The text node that will be updated

                var node = document.createTextNode(can.view.toStr(compute()));
	if (nodeList) {
	nodeList.unregistered = data.teardownCheck;
	data.nodeList = nodeList;
	nodeLists.update(nodeList,[node]);
	elements.replace([el],node);
}
else {
	// Replace the placeholder with the live node and do the nodeLists thing.
                    // Add that node to nodeList so we can remove it when the parent element is removed from the page
                    data.nodeList = live.replace([el],node,data.teardownCheck);
}
},setAttributes:function(el,newVal) {
	var attrs = getAttributeParts(newVal);
	for (var name in attrs) {
	can.attr.set(el,name,attrs[name]);
}
},attributes:function(el,compute,currentValue) {
	var oldAttrs = {
	};
	var setAttrs = function(newVal) {
	var newAttrs = getAttributeParts(newVal),name;
	for (name in newAttrs) {
	var newValue = newAttrs[name],oldValue = oldAttrs[name];
	if (newValue !== oldValue) {
	can.attr.set(el,name,newValue);
}
delete oldAttrs[name];}for (name in oldAttrs) {
	elements.removeAttr(el,name);
}
oldAttrs = newAttrs;};
	listen(el,compute,function(ev,newVal) {
	setAttrs(newVal);
}
);
	// current value has been set
                if (arguments.length >= 3) {
	oldAttrs = getAttributeParts(currentValue);
}
else {
	setAttrs(compute());
}
},attributePlaceholder:'__!!__',attributeReplace:/__!!__/g,attribute:function(el,attributeName,compute) {
	listen(el,compute,function(ev,newVal) {
	elements.setAttr(el,attributeName,hook.render());
}
);
	var wrapped = can.$(el),hooks;
	// Get the list of hookups or create one for this element.
                // Hooks is a map of attribute names to hookup `data`s.
                // Each hookup data has:// `render` - A `function` to render the value of the attribute.
                // `funcs` - A list of hookup `function`s on that attribute.
                // `batchNum` - The last event `batchNum`,used for performance.
                hooks = can.data(wrapped,'hooks');
	if (!hooks) {
	can.data(wrapped,'hooks',hooks = {
	});
}
// Get the attribute value.
                var attr = elements.getAttr(el,attributeName),// Split the attribute value by the template.
                    // Only split out the first __!!__ so if we have multiple hookups in the same attribute,// they will be put in the right spot on first render
                    parts = attr.split(live.attributePlaceholder),goodParts = [],hook;
	goodParts.push(parts.shift(),parts.join(live.attributePlaceholder));
	// If we already had a hookup for this attribute...
                if (hooks[attributeName]) {
	// Just add to that attribute's list of `function`s.
                    hooks[attributeName].computes.push(compute);
}
else {
	// Create the hookup data.
                    hooks[attributeName] = {
	render:function() {
	var i = 0,// attr doesn't have a value in IE
                                newAttr = attr ? attr.replace(live.attributeReplace,function() {
	return elements.contentText(hook.computes[i++]());
}
):elements.contentText(hook.computes[i++]());
	return newAttr;},computes:[compute],batchNum:undefined};}// Save the hook for slightly faster performance.
                hook = hooks[attributeName];
	// Insert the value in parts.
                goodParts.splice(1,0,compute());
	// Set the attribute.
                elements.setAttr(el,attributeName,goodParts.join(''));
}
,specialAttribute:function(el,attributeName,compute) {
	listen(el,compute,function(ev,newVal) {
	elements.setAttr(el,attributeName,getValue(newVal));
}
);
	elements.setAttr(el,attributeName,getValue(compute()));},simpleAttribute:function(el,attributeName,compute) {
	listen(el,compute,function(ev,newVal) {
	elements.setAttr(el,attributeName,newVal);
}
);
	elements.setAttr(el,attributeName,compute());}};
	live.attr = live.simpleAttribute;
	live.attrs = live.attributes;
	var newLine = /(\r|\n)+/g;
	var getValue = function(val) {
	var regexp = /^["'].*["']$/;
	val = val.replace(elements.attrReg,'')
                .replace(newLine,'');
	// check if starts and ends with " or '
            return regexp.test(val) ? val.substr(1,val.length - 2):val;
}
;can.view.live = live;
	return live;})(__m2,__m27,__m13,__m30,__m31);
	// ## view/render.js
    var __m28 = (function(can,elements,live) {
	var pendingHookups = [],tagChildren = function(tagName) {
	var newTag = elements.tagMap[tagName] || "span";
	if (newTag === "span") {
	//innerHTML in IE doesn't honor leading whitespace after empty elements
                    return "@@!!@@";
}
return "<" + newTag + ">" + tagChildren(newTag) + "</" + newTag + ">";},contentText = function(input,tag) {
	// If it's a string,return.
                if (typeof input === 'string') {
	return input;
}
// If has no value,return an empty string.
                if (!input && input !== 0) {
	return '';
}
// If it's an object,and it has a hookup method.
                var hook = (input.hookup &&

                    // Make a function call the hookup method.

                    function(el,id) {
	input.hookup.call(input,el,id);
}
) ||

                // Or if it's a `function`,just use the input.
                (typeof input === 'function' && input);
	// Finally,if there is a `function` to hookup on some dom,// add it to pending hookups.
                if (hook) {
	if (tag) {
	return "<" + tag + " " + can.view.hook(hook) + "></" + tag + ">";
}
else {
	pendingHookups.push(hook);
}
return '';}// Finally,if all else is `false`,`toString()` it.
                return "" + input;
}
,// Returns escaped/sanatized content for anything other than a live-binding
            contentEscape = function(txt,tag) {
	return (typeof txt === 'string' || typeof txt === 'number') ?
                    can.esc(txt):contentText(txt,tag);
}
,// A flag to indicate if .txt was called within a live section within an element like the {
	{name
}
}// within `<div {
	{#person
}
} {
	{name
}
} {
	{/person
}
}/>`.
            withinTemplatedSectionWithinAnElement = false,emptyHandler = function() {
	};
	var lastHookups;
	can.extend(can.view {
	live:live,// called in text to make a temporary
                // can.view.lists function that can be called with
                // the list to iterate over and the template
                // used to produce the content within the list
                setupLists:function() {
	var old = can.view.lists,data;
	can.view.lists = function(list,renderer) {
	data = {
	list:list,renderer:renderer
}
;return Math.random();};
	// sets back to the old data
                    return function() {
	can.view.lists = old;
	return data;
}
;},getHooks:function() {
	var hooks = pendingHookups.slice(0);
	lastHookups = hooks;
	pendingHookups = [];
	return hooks;
}
,onlytxt:function(self,func) {
	return contentEscape(func.call(self));
}
,txt:function(escape,tagName,status,self,func) {
	// the temporary tag needed for any live setup
                    var tag = (elements.tagMap[tagName] || "span"),// should live-binding be setup
                        setupLiveBinding = false,// the compute's value
                        value,listData,compute,unbind = emptyHandler,attributeName;
	// Are we currently within a live section within an element like the {
	{name
}
}// within `<div {
	{#person
}
} {
	{name
}
} {
	{/person
}
}/>`.
                    if (withinTemplatedSectionWithinAnElement) {
	value = func.call(self);
}
else {
	// If this magic tag is within an attribute or an html element,// set the flag to true so we avoid trying to live bind
                        // anything that func might be setup.
                        // TODO:the scanner should be able to set this up.
                        if (typeof status === "string" || status === 1) {
	withinTemplatedSectionWithinAnElement = true;
}
// Sets up a listener so we know any can.view.lists called
                        // when func is called
                        var listTeardown = can.view.setupLists();
	unbind = function() {
	compute.unbind("change",emptyHandler);
}
;// Create a compute that calls func and looks for dependencies.
                        // By passing `false`,this compute can not be a dependency of other
                        // computes.  This is because live-bits are nested,but
                        // handle their own updating. For example:// {
	{#if items.length
}
} {
	{#items
}
} {
	{.
}
} {
	{/items
}
} {
	{/if
}
}// We do not want ` {
	{#if items.length
}
}` changing the DOM if
                        // ` {
	{#items
}
}` text changes.
                        compute = can.compute(func,self,false);
	// Bind to get and temporarily cache the value of the compute.
                        compute.bind("change",emptyHandler);
	// Call the "wrapping" function and get the binding information
                        listData = listTeardown();
	// Get the value of the compute
                        value = compute();
	// Let people know we are no longer within an element.
                        withinTemplatedSectionWithinAnElement = false;
	// If we should setup live-binding.
                        setupLiveBinding = compute.hasDependencies;
}
if (listData) {
	unbind();
	return "<" + tag + can.view.hook(function(el,parentNode) {
	live.list(el,listData.list,listData.renderer,self,parentNode);
}
) + "></" + tag + ">";}// If we had no observes just return the value returned by func.
                    if (!setupLiveBinding || typeof value === "function") {
	unbind();
	return ((withinTemplatedSectionWithinAnElement || escape === 2 || !escape) ?
                            contentText:contentEscape)(value,status === 0 && tag);
}
// the property (instead of innerHTML elements) to adjust. For
                    // example options should use textContent
                    var contentProp = elements.tagToContentPropMap[tagName];
	// The magic tag is outside or between tags.
                    if (status === 0 && !contentProp) {
	// Return an element tag with a hookup in place of the content
                        return "<" + tag + can.view.hook(
                            // if value is an object,it's likely something returned by .safeString
                            escape && typeof value !== "object" ?
                            // If we are escaping,replace the parentNode with
                            // a text node who's value is `func`'s return value.

                            function(el,parentNode) {
	live.text(el,compute,parentNode);
	unbind();
}
:// If we are not escaping,replace the parentNode with a
                            // documentFragment created as with `func`'s return value.

                            function(el,parentNode) {
	live.html(el,compute,parentNode);
	unbind();
	//children have to be properly nested HTML for buildFragment to work properly
}
) + ">" + tagChildren(tag) + "</" + tag + ">";
	// In a tag,but not in an attribute}else if (status === 1) {
	// remember the old attr name
                        pendingHookups.push(function(el) {
	live.attributes(el,compute,compute());
	unbind();
}
);
	return compute();}else if (escape === 2) {
	// In a special attribute like src or style

                        attributeName = status;
	pendingHookups.push(function(el) {
	live.specialAttribute(el,attributeName,compute);
	unbind();
}
);
	return compute();}else {
	// In an attribute...
                        attributeName = status === 0 ? contentProp:status;
	// if the magic tag is inside the element,like `<option><% TAG %></option>`,// we add this hookup to the last element (ex:`option`'s) hookups.
                        // Otherwise,the magic tag is in an attribute,just add to the current element's
                        // hookups.
                        (status === 0 ? lastHookups:pendingHookups)
                            .push(function(el) {
	live.attribute(el,attributeName,compute);
	unbind();
}
);
	return live.attributePlaceholder;}}});
	return can;})(__m13,__m27,__m29,__m16);
	// ## view/mustache/mustache.js
    var __m24 = (function(can) {
	// # mustache.js
        // `can.Mustache`:The Mustache templating engine.
        // See the [Transformation](#section-29) section within *Scanning Helpers* for a detailed explanation
        // of the runtime render code design. The majority of the Mustache engine implementation
        // occurs within the *Transformation* scanning helper.

        // ## Initialization
        // Define the view extension.
        can.view.ext = ".mustache";
	// ### Setup internal helper variables and functions.
        // An alias for the context variable used for tracking a stack of contexts.
        // This is also used for passing to helper functions to maintain proper context.
        var SCOPE = 'scope',// An alias for the variable used for the hash object that can be passed
            // to helpers via `options.hash`.
            HASH = '___h4sh',// An alias for the most used context stacking call.
            CONTEXT_OBJ = ' {
	scope:' + SCOPE + ',options:options
}
',// a context object used to incidate being special
            SPECIAL_CONTEXT_OBJ = ' {
	scope:' + SCOPE + ',options:options,special:true
}
',// argument names used to start the function (used by scanner and steal)
            ARG_NAMES = SCOPE + ",options",// matches arguments inside a {
	{
}
}argumentsRegExp = /((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,// matches a literal number,string,null or regexp
            literalNumberStringBooleanRegExp = /^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,// returns an object literal that we can use to look up a value in the current scope
            makeLookupLiteral = function(type) {
	return ' {
	get:"' + type.replace(/"/g,'\\"') + '"
}
';},// returns if the object is a lookup
            isLookup = function(obj) {
	return obj && typeof obj.get === "string";
}
,isObserveLike = function(obj) {
	return obj instanceof can.Map || (obj && !! obj._get);
}
,isArrayLike = function(obj) {
	return obj && obj.splice && typeof obj.length === 'number';
}
,// used to make sure .fn and .inverse are always called with a Scope like object
            makeConvertToScopes = function(original,scope,options) {
	var originalWithScope = function(ctx,opts) {
	return original(ctx || scope,opts);
}
;return function(updatedScope,updatedOptions) {
	if (updatedScope !== undefined && !(updatedScope instanceof can.view.Scope)) {
	updatedScope = scope.add(updatedScope);
}
if (updatedOptions !== undefined && !(updatedOptions instanceof can.view.Options)) {
	updatedOptions = options.add(updatedOptions);
}
return originalWithScope(updatedScope,updatedOptions || options);};};
	// ## Mustache

        var Mustache = function(options,helpers) {
	// Support calling Mustache without the constructor.
            // This returns a function that renders the template.
            if (this.constructor !== Mustache) {
	var mustache = new Mustache(options);
	return function(data,options) {
	return mustache.render(data,options);
}
;}// If we get a `function` directly,it probably is coming from
            // a `steal`-packaged view.
            if (typeof options === "function") {
	this.template = {
	fn:options
}
;return;}// Set options on self.
            can.extend(this,options);
	this.template = this.scanner.scan(this.text,this.name);
}
;// Put Mustache on the `can` object.
        can.Mustache = window.Mustache = Mustache;
	Mustache.prototype.

        render = function(data,options) {
	if (!(data instanceof can.view.Scope)) {
	data = new can.view.Scope(data || {
	});
}
if (!(options instanceof can.view.Options)) {
	options = new can.view.Options(options || {
	});
}
options = options || {
	};
	return this.template.fn.call(data,data,options);
}
;can.extend(Mustache.prototype {
	// Share a singleton scanner for parsing templates.
                scanner:new can.view.Scanner( {
	// A hash of strings for the scanner to inject at certain points.
                        text: {
	// This is the logic to inject at the beginning of a rendered template.
                            // This includes initializing the `context` stack.
                            start:"",//"var "+SCOPE+"= this instanceof can.view.Scope? this:new can.view.Scope(this);
	\n",scope:SCOPE,options:",options:options",argNames:ARG_NAMES
}
,// An ordered token registry for the scanner.
                        // This needs to be ordered by priority to prevent token parsing errors.
                        // Each token follows the following structure://		[
                        //			// Which key in the token map to match.
                        //			"tokenMapName",//			// A simple token to match,like " {
	{".
                        //			"token",//			// Optional. A complex (regexp) token to match that
                        //			// overrides the simple token.
                        //			"[\\s\\t]* {
	{",//			// Optional. A function that executes advanced
                        //			// manipulation of the matched content. This is
                        //			// rarely used.
                        //			function(content) {
	//				return content;
	//
}
//		]
                        tokens:[

                            // Return unescaped
                            ["returnLeft"," {
	{{"," {
	{[ {
	&]"],// Full line comments
                            ["commentFull"," {
	{!
}
}","^[\\s\\t]* {
	{!.+?
}
}\\n"],// Inline comments
                            ["commentLeft"," {
	{!","(\\n[\\s\\t]* {
	{!| {
	{!)"],// Full line escapes
                            // This is used for detecting lines with only whitespace and an escaped tag
                            ["escapeFull"," {
	{
}
}","(^[\\s\\t]* {
	{[#/^][^
}
]+?}}\\n|\\n[\\s\\t]* {
	{[#/^][^
}
]+?}}\\n|\\n[\\s\\t]* {
	{[#/^][^
}
]+?}}$)",function(content) {
	return {
	before:/^\n.+?\n$/.test(content) ? '\n':'',content:content.match(/\ {
	\{(.+?)\
}
\}/)[1] || ''};}],// Return escaped
                            ["escapeLeft"," {
	{"],// Close return unescaped
                            ["returnRight","
}
}}"],// Close tag
                            ["right","
}
}"]
                        ],// ## Scanning Helpers
                        // This is an array of helpers that transform content that is within escaped tags like ` {
	{token
}
}`. These helpers are solely for the scanning phase;
	they are unrelated to Mustache/Handlebars helpers which execute at render time. Each helper has a definition like the following:// {
	//			// The content pattern to match in order to execute.
                        //			// Only the first matching helper is executed.
                        //			name:/pattern to match/,//			// The function to transform the content with.
                        //			// @param {
	String
}
content   The content to transform.
                        //			// @param {
	Object
}
cmd       Scanner helper data.
                        //			// {
	//			//                             insert:"insert command",//			//                             tagName:"div",//			//                             status:0
                        //			//
}
//			fn:function(content,cmd) {
	//				return 'for text injection' ||
                        // {
	raw:'to bypass text injection'
}
;//}//}helpers:[
                            // ### Partials
                            // Partials begin with a greater than sign,like {
	{> box
}
}.
                            // Partials are rendered at runtime (as opposed to compile time),// so recursive partials are possible. Just avoid infinite loops.
                            // For example,this template and partial:// 		base.mustache:// 			<h2>Names</h2>
                            // {
	{#names
}
}// {
	{> user
}
}// {
	{/names
}
}// 		user.mustache:// 			<strong> {
	{name
}
}</strong> {
	name:/^>[\s]*\w*/,fn:function(content,cmd) {
	// Get the template name and call back into the render method,// passing the name and the current context.
                                    var templateName = can.trim(content.replace(/^>\s?/,''))
                                        .replace(/["|']/g,"");
	return "can.Mustache.renderPartial('" + templateName + "'," + ARG_NAMES + ")";
}
},// ### Data Hookup
                            // This will attach the data property of `this` to the element
                            // its found on using the first argument as the data attribute
                            // key.
                            // For example://		<li id="nameli" {
	{data 'name'
}
}></li>
                            // then later you can access it like://		can.$('#nameli').data('name'); {
	name:/^\s*data\s/,fn:function(content,cmd) {
	var attr = content.match(/["|'](.*)["|']/)[1];
	// return a function which calls `can.data` on the element
                                    // with the attribute name with the current context.
                                    return "can.proxy(function(__) {
	" +
                                    // "var context = this[this.length-1];
	" +
                                    // "context = context." + STACKED + " ? context[context.length-2]:context;
	console.warn(this,context);
	" +
                                    "can.data(can.$(__),'" + attr + "',this.attr('.'));
}
," + SCOPE + ")";}} {
	name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(content) {
	var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,parts = content.match(quickFunc);
	//find
                                    return "can.proxy(function(__) {
	var " + parts[1] + "=can.$(__);
	with(" + SCOPE + ".attr('.')) {
	" + parts[2] + "
}
},this);
	";}},// ### Transformation (default)
                            // This transforms all content to its interpolated equivalent,// including calls to the corresponding helpers as applicable.
                            // This outputs the render code for almost all cases.
                            // #### Definitions
                            // * `context` - This is the object that the current rendering context operates within.
                            //		Each nested template adds a new `context` to the context stack.
                            // * `stack` - Mustache supports nested sections,//		each of which add their own context to a stack of contexts.
                            //		Whenever a token gets interpolated,it will check for a match against the
                            //		last context in the stack,then iterate through the rest of the stack checking for matches.
                            //		The first match is the one that gets returned.
                            // * `Mustache.txt` - This serializes a collection of logic,optionally contained within a section.
                            //		If this is a simple interpolation,only the interpolation lookup will be passed.
                            //		If this is a section,then an `options` object populated by the truthy (`options.fn`) and
                            //		falsey (`options.inverse`) encapsulated functions will also be passed. This section handling
                            //		exists to support the runtime context nesting that Mustache supports.
                            // * `Mustache.get` - This resolves an interpolation reference given a stack of contexts.
                            // * `options` - An object containing methods for executing the inner contents of sections or helpers.
                            //		`options.fn` - Contains the inner template logic for a truthy section.
                            //		`options.inverse` - Contains the inner template logic for a falsey section.
                            //		`options.hash` - Contains the merged hash object argument for custom helpers.
                            // #### Design
                            // This covers the design of the render code that the transformation helper generates.
                            // ##### Pseudocode
                            // A detailed explanation is provided in the following sections,but here is some brief pseudocode
                            // that gives a high level overview of what the generated render code does (with a template similar to
                            // `" {
	{#a
}
} {
	{b.c.d.e.name
}
} {
	{/a
}
}" == "Phil"`).
                            // *Initialize the render code.*
                            // 		view = []
                            // 		context = []
                            // 		stack = fn {
	context.concat([this])
}
// *Render the root section.*
                            // 		view.push( "string" )
                            // 		view.push( can.view.txt(
                            // *Render the nested section with `can.Mustache.txt`.*
                            // 			txt(
                            // *Add the current context to the stack.*
                            // 				stack(),// *Flag this for truthy section mode.*
                            // 				"#",// *Interpolate and check the `a` variable for truthyness using the stack with `can.Mustache.get`.*
                            // 				get( "a",stack() ),// *Include the nested section's inner logic.
                            // The stack argument is usually the parent section's copy of the stack,// but it can be an override context that was passed by a custom helper.
                            // Sections can nest `0..n` times -- **NESTCEPTION**.*
                            // {
	fn:fn(stack) {
	// *Render the nested section (everything between the ` {
	{#a
}
}` and ` {
	{/a
}
}` tokens).*
                            // 					view = []
                            // 					view.push( "string" )
                            // 					view.push(
                            // *Add the current context to the stack.*
                            // 						stack(),// *Flag this as interpolation-only mode.*
                            // 						null,// *Interpolate the `b.c.d.e.name` variable using the stack.*
                            // 						get( "b.c.d.e.name",stack() ),// 					)
                            // 					view.push( "string" )
                            // *Return the result for the nested section.*
                            // 					return view.join()
                            //
}
}// 			)
                            // 		))
                            // 		view.push( "string" )
                            // *Return the result for the root section,which includes all nested sections.*
                            // 		return view.join()
                            // ##### Initialization
                            // Each rendered template is started with the following initialization code:// 		var ___v1ew = [];
	// 		var ___c0nt3xt = [];
	// 		___c0nt3xt.__sc0pe = true;
	// 		var __sc0pe = function(context,self) {
	// 			var s;
	// 			if (arguments.length == 1 && context) {
	// 				s = !context.__sc0pe ? [context]:context;
	//
}
else {
	// 				s = context && context.__sc0pe
                            //					? context.concat([self])
                            //:__sc0pe(context).concat([self]);
	//
}
// 			return (s.__sc0pe = true) && s;
	//};
	// The `___v1ew` is the the array used to serialize the view.
                            // The `___c0nt3xt` is a stacking array of contexts that slices and expands with each nested section.
                            // The `__sc0pe` function is used to more easily update the context stack in certain situations.
                            // Usually,the stack function simply adds a new context (`self`/`this`) to a context stack.
                            // However,custom helpers will occasionally pass override contexts that need their own context stack.
                            // ##### Sections
                            // Each section,` {
	{#section
}
}content {
	{/section
}
}`,within a Mustache template generates a section
                            // context in the resulting render code. The template itself is treated like a root section,with the
                            // same execution logic as any others. Each section can have `0..n` nested sections within it.
                            // Here's an example of a template without any descendent sections.
                            // Given the template:`" {
	{a.b.c.d.e.name
}
}" == "Phil"`
                            // Would output the following render code://		___v1ew.push("\"");
	//		___v1ew.push(can.view.txt(1,'',0,this,function() {
	// 			return can.Mustache.txt(__sc0pe(___c0nt3xt,this),null,//				can.Mustache.get("a.b.c.d.e.name",//					__sc0pe(___c0nt3xt,this))
                            //			);
	//
}
));
	//		___v1ew.push("\" == \"Phil\"");
	// The simple strings will get appended to the view. Any interpolated references (like ` {
	{a.b.c.d.e.name
}
}`)
                            // will be pushed onto the view via `can.view.txt` in order to support live binding.
                            // The function passed to `can.view.txt` will call `can.Mustache.txt`,which serializes the object data by doing
                            // a context lookup with `can.Mustache.get`.
                            // `can.Mustache.txt`'s first argument is a copy of the context stack with the local context `this` added to it.
                            // This stack will grow larger as sections nest.
                            // The second argument is for the section type. This will be `"#"` for truthy sections,`"^"` for falsey,// or `null` if it is an interpolation instead of a section.
                            // The third argument is the interpolated value retrieved with `can.Mustache.get`,which will perform the
                            // context lookup and return the approriate string or object.
                            // Any additional arguments,if they exist,are used for passing arguments to custom helpers.
                            // For nested sections,the last argument is an `options` object that contains the nested section's logic.
                            // Here's an example of a template with a single nested section.
                            // Given the template:`" {
	{#a
}
} {
	{b.c.d.e.name
}
} {
	{/a
}
}" == "Phil"`
                            // Would output the following render code://		___v1ew.push("\"");
	// 		___v1ew.push(can.view.txt(0,'',0,this,function() {
	// 			return can.Mustache.txt(__sc0pe(___c0nt3xt,this),"#",//				can.Mustache.get("a",__sc0pe(___c0nt3xt,this)),//					[ {
	// 					_:function() {
	// 						return ___v1ew.join("");
	//
}
//} {
	// 					fn:function(___c0nt3xt) {
	// 						var ___v1ew = [];
	// 						___v1ew.push(can.view.txt(1,'',0,this,//								function() {
	//                                  return can.Mustache.txt(
                            // 									__sc0pe(___c0nt3xt,this),// 									null,// 									can.Mustache.get("b.c.d.e.name",// 										__sc0pe(___c0nt3xt,this))
                            // 								);
	//
}
// 						));
	// 						return ___v1ew.join("");
	//}//}]
                            //			)
                            //
}
));
	//		___v1ew.push("\" == \"Phil\"");
	// This is specified as a truthy section via the `"#"` argument. The last argument includes an array of helper methods used with `options`.
                            // These act similarly to custom helpers:`options.fn` will be called for truthy sections,`options.inverse` will be called for falsey sections.
                            // The `options._` function only exists as a dummy function to make generating the section nesting easier (a section may have a `fn`,`inverse`,// or both,but there isn't any way to determine that at compilation time).
                            // Within the `fn` function is the section's render context,which in this case will render anything between the ` {
	{#a
}
}` and ` {
	{/a
}
}` tokens.
                            // This function has `___c0nt3xt` as an argument because custom helpers can pass their own override contexts. For any case where custom helpers
                            // aren't used,`___c0nt3xt` will be equivalent to the `__sc0pe(___c0nt3xt,this)` stack created by its parent section. The `inverse` function
                            // works similarly,except that it is added when ` {
	{^a
}
}` and ` {
	{else
}
}` are used. `var ___v1ew = []` is specified in `fn` and `inverse` to
                            // ensure that live binding in nested sections works properly.
                            // All of these nested sections will combine to return a compiled string that functions similar to EJS in its uses of `can.view.txt`.
                            // #### Implementation {
	name:/^.*$/,fn:function(content,cmd) {
	var mode = false,result = {
	content:"",startTxt:false,startOnlyTxt:false,end:false
}
;// Trim the content so we don't have any trailing whitespace.
                                    content = can.trim(content);
	// Determine what the active mode is.
                                    // * `#` - Truthy section
                                    // * `^` - Falsey section
                                    // * `/` - Close the prior section
                                    // * `else` - Inverted section (only exists within a truthy/falsey section)
                                    if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
	mode = mode[0];
	switch (mode) {
	// Open a new section.
                                            case '#':case '^':if (cmd.specialAttribute) {
	result.startOnlyTxt = true;
	//result.push(cmd.insert + 'can.view.onlytxt(this,function() {
	return ');
}
else {
	result.startTxt = true;
	// sections should never be escaped
                                                    result.escaped = 0;
	//result.push(cmd.insert + 'can.view.txt(0,\'' + cmd.tagName + '\',' + cmd.status + ',this,function() {
	return ');
}
break;
	// Close the prior section.

                                            case '/':result.end = true;
	result.content += 'return ___v1ew.join("");
}
}])';
	return result;}// Trim the mode off of the content.
                                        content = content.substring(1);
}
// `else` helpers are special and should be skipped since they don't
                                    // have any logic aside from kicking off an `inverse` function.
                                    if (mode !== 'else') {
	var args = [],hashes = [],i = 0,m;
	// Start the content render block.
                                        result.content += 'can.Mustache.txt(\n' +
                                        (cmd.specialAttribute ? SPECIAL_CONTEXT_OBJ:CONTEXT_OBJ) +
                                            ',\n' + (mode ? '"' + mode + '"':'null') + ',';
	// Parse the helper arguments.
                                        // This needs uses this method instead of a split(/\s/) so that
                                        // strings with spaces can be correctly parsed.
                                        (can.trim(content) + ' ')
                                            .replace(argumentsRegExp,function(whole,arg) {
	// Check for special helper arguments (string/number/boolean/hashes).
                                                if (i && (m = arg.match(literalNumberStringBooleanRegExp))) {
	// Found a native type like string/number/boolean.
                                                    if (m[2]) {
	args.push(m[0]);
}
// Found a hash object.
                                                    else {
	// Addd to the hash object.

                                                        hashes.push(m[4] + ":" + (m[6] ? m[6]:makeLookupLiteral(m[5])));
}
}// Otherwise output a normal interpolation reference.
                                                else {
	args.push(makeLookupLiteral(arg));
}
i++;});
	result.content += args.join(",");
	if (hashes.length) {
	result.content += " {
	" + HASH + ": {
	" + hashes.join(",") + "
}
}";}}// Create an option object for sections of code.
                                    if (mode && mode !== 'else') {
	result.content += ',[\n\n';
}
switch (mode) {
	// Truthy section
                                        case '^':case '#':result.content += (' {
	fn:function(' + ARG_NAMES + ') {
	var ___v1ew = [];
	');
	break;
	// If/else section
                                            // Falsey section

                                        case 'else':result.content += 'return ___v1ew.join("");
}
},\n {
	inverse:function(' + ARG_NAMES + ') {
	\nvar ___v1ew = [];
	';break;
	// Not a section,no mode
                                        default:result.content += (')');
	break;
}
if (!mode) {
	result.startTxt = true;
	result.end = true;
}
return result;}}]})});
	// Add in default scanner helpers first.
        // We could probably do this differently if we didn't 'break' on every match.
        var helpers = can.view.Scanner.prototype.helpers;
	for (var i = 0;
	i < helpers.length;
	i++) {
	Mustache.prototype.scanner.helpers.unshift(helpers[i]);
}
Mustache.txt = function(scopeAndOptions,mode,name) {
	// here we are going to cache the lookup values so future calls are much faster
            var scope = scopeAndOptions.scope,options = scopeAndOptions.options,args = [],helperOptions = {
	fn:function() {
	},inverse:function() {
	}
}
,hash,context = scope.attr("."),getHelper = true,helper;
	// convert lookup values to actual values in name,arguments,and hash
            for (var i = 3;
	i < arguments.length;
	i++) {
	var arg = arguments[i];
	if (mode && can.isArray(arg)) {
	// merge into options
                    helperOptions = can.extend.apply(can,[helperOptions].concat(arg));
}
else if (arg && arg[HASH]) {
	hash = arg[HASH];
	// get values on hash
                    for (var prop in hash) {
	if (isLookup(hash[prop])) {
	hash[prop] = Mustache.get(hash[prop].get,scopeAndOptions,false,true);
}
}}else if (arg && isLookup(arg)) {
	args.push(Mustache.get(arg.get,scopeAndOptions,false,true,true));
}
else {
	args.push(arg);
}
}if (isLookup(name)) {
	var get = name.get;
	name = Mustache.get(name.get,scopeAndOptions,args.length,false);
	// Base whether or not we will get a helper on whether or not the original
                // name.get and Mustache.get resolve to the same thing. Saves us from running
                // into issues like {
	{text
}
}/ {
	text:'with'
}
getHelper = (get === name);}// overwrite fn and inverse to always convert to scopes
            helperOptions.fn = makeConvertToScopes(helperOptions.fn,scope,options);
	helperOptions.inverse = makeConvertToScopes(helperOptions.inverse,scope,options);
	// if mode is ^,swap fn and inverse
            if (mode === '^') {
	var tmp = helperOptions.fn;
	helperOptions.fn = helperOptions.inverse;
	helperOptions.inverse = tmp;
}
// Check for a registered helper or a helper-like function.
            if (helper = (getHelper && (typeof name === "string" && Mustache.getHelper(name,options)) || (can.isFunction(name) && !name.isComputed && {
	fn:name
}
))) {
	// Add additional data to be used by helper functions

                can.extend(helperOptions {
	context:context,scope:scope,contexts:scope,hash:hash
}
);
	args.push(helperOptions);
	// Call the helper.
                return function() {
	return helper.fn.apply(context,args) || '';
}
;}return function() {
	// {
	{#foo.bar zed ted
}
}var value;
	if (can.isFunction(name) && name.isComputed) {
	value = name();
}
else {
	value = name;
}
// An array of arguments to check for truthyness when evaluating sections.
                var validArgs = args.length ? args:[value],// Whether the arguments meet the condition of the section.
                    valid = true,result = [],i,argIsObserve,arg;
	// Validate the arguments based on the section mode.
                if (mode) {
	for (i = 0;
	i < validArgs.length;
	i++) {
	arg = validArgs[i];
	argIsObserve = typeof arg !== 'undefined' && isObserveLike(arg);
	// Array-like objects are falsey if their length = 0.
                        if (isArrayLike(arg)) {
	// Use .attr to trigger binding on empty lists returned from function
                            if (mode === '#') {
	valid = valid && !! (argIsObserve ? arg.attr('length'):arg.length);
}
else if (mode === '^') {
	valid = valid && !(argIsObserve ? arg.attr('length'):arg.length);
}
}// Otherwise just check if it is truthy or not.
                        else {
	valid = mode === '#' ? valid && !! arg:mode === '^' ? valid && !arg:valid;
}
}}// Otherwise interpolate like normal.
                if (valid) {
	if (mode === "#") {
	if (isArrayLike(value)) {
	var isObserveList = isObserveLike(value);
	// Add the reference to the list in the contexts.
                            for (i = 0;
	i < value.length;
	i++) {
	result.push(helperOptions.fn(
                                        isObserveList ? value.attr('' + i):value[i]));
}
return result.join('');}// Normal case.
                        else {
	return helperOptions.fn(value || {
	}) || '';
}
}else if (mode === "^") {
	return helperOptions.inverse(value || {
	}) || '';
}
else {
	return '' + (value != null ? value:'');
}
}return '';};};
	Mustache.get = function(key,scopeAndOptions,isHelper,isArgument,isLookup) {
	// Cache a reference to the current context and options,we will use them a bunch.
            var context = scopeAndOptions.scope.attr('.'),options = scopeAndOptions.options || {
	};
	// If key is called as a helper,if (isHelper) {
	// try to find a registered helper.
                if (Mustache.getHelper(key,options)) {
	return key;
}
// Support helper-like functions as anonymous helpers.
                // Check if there is a method directly in the "top" context.
                if (scopeAndOptions.scope && can.isFunction(context[key])) {
	return context[key];
}
}// Get a compute (and some helper data) that represents key's value in the current scope
            var computeData = scopeAndOptions.scope.computeData(key {
	isArgument:isArgument,args:[context,scopeAndOptions.scope]
}
),compute = computeData.compute;
	// Bind on the compute to cache its value. We will unbind in a timeout later.
            can.compute.temporarilyBind(compute);
	// computeData gives us an initial value
            var initialValue = computeData.initialValue;
	// Use helper over the found value if the found value isn't in the current context
            if (!isLookup && (initialValue === undefined || computeData.scope !== scopeAndOptions.scope) && Mustache.getHelper(key,options)) {
	return key;
}
// If there are no dependencies,just return the value.
            if (!compute.hasDependencies) {
	return initialValue;
}
else {
	return compute;
}
};
	Mustache.resolve = function(value) {
	if (isObserveLike(value) && isArrayLike(value) && value.attr('length')) {
	return value;
}
else if (can.isFunction(value)) {
	return value();
}
else {
	return value;
}
};
	can.view.Options = can.view.Scope.extend( {
	init:function(data,parent) {
	if (!data.helpers && !data.partials && !data.tags) {
	data = {
	helpers:data
}
;}can.view.Scope.prototype.init.apply(this,arguments);}});
	// ## Helpers
        // Helpers are functions that can be called from within a template.
        // These helpers differ from the scanner helpers in that they execute
        // at runtime instead of during compilation.
        // Custom helpers can be added via `can.Mustache.registerHelper`,// but there are also some built-in helpers included by default.
        // Most of the built-in helpers are little more than aliases to actions
        // that the base version of Mustache simply implies based on the
        // passed in object.
        // Built-in helpers:// * `data` - `data` is a special helper that is implemented via scanning helpers.
        //		It hooks up the active element to the active data object:`<div {
	{data "key"
}
}/>`
        // * `if` - Renders a truthy section:` {
	{#if var
}
}render {
	{/if
}
}`
        // * `unless` - Renders a falsey section:` {
	{#unless var
}
}render {
	{/unless
}
}`
        // * `each` - Renders an array:` {
	{#each array
}
}render {
	{this
}
} {
	{/each
}
}`
        // * `with` - Opens a context section:` {
	{#with var
}
}render {
	{/with
}
}`
        Mustache._helpers = {
	};
	Mustache.registerHelper = function(name,fn) {
	this._helpers[name] = {
	name:name,fn:fn
}
;};
	Mustache.getHelper = function(name,options) {
	var helper = options.attr("helpers." + name);
	return helper ? {
	fn:helper
}
:this._helpers[name];};
	Mustache.render = function(partial,scope,options) {
	// TOOD:clean up the following
            // If there is a "partial" property and there is not
            // an already-cached partial,we use the value of the
            // property to look up the partial

            // if this partial is not cached ...
            if (!can.view.cached[partial]) {
	// we don't want to bind to changes so clear and restore reading
                var reads = can.__clearReading();
	if (scope.attr('partial')) {
	partial = scope.attr('partial');
}
can.__setReading(reads);}// Call into `can.view.render` passing the
            // partial and scope.
            return can.view.render(partial,scope,options);
}
;Mustache.safeString = function(str) {
	return {
	toString:function() {
	return str;
}
};};
	Mustache.renderPartial = function(partialName,scope,options) {
	var partial = options.attr("partials." + partialName);
	if (partial) {
	return partial.render ? partial.render(scope,options):partial(scope,options);
}
else {
	return can.Mustache.render(partialName,scope,options);
}
};
	// The built-in Mustache helpers.
        can.each( {
	// Implements the `if` built-in helper.

                'if':function(expr,options) {
	var value;
	// if it's a function,wrap its value in a compute
                    // that will only change values from true to false
                    if (can.isFunction(expr)) {
	value = can.compute.truthy(expr)();
}
else {
	value = !! Mustache.resolve(expr);
}
if (value) {
	return options.fn(options.contexts || this);
}
else {
	return options.inverse(options.contexts || this);
}
},// Implements the `unless` built-in helper.

                'unless':function(expr,options) {
	return Mustache._helpers['if'].fn.apply(this,[can.isFunction(expr) ? can.compute(function() {
	return !expr();
}
):!expr,options]);},// Implements the `each` built-in helper.

                'each':function(expr,options) {
	// Check if this is a list or a compute that resolves to a list,and setup
                    // the incremental live-binding

                    // First,see what we are dealing with.  It's ok to read the compute
                    // because can.view.text is only temporarily binding to what is going on here.
                    // Calling can.view.lists prevents anything from listening on that compute.
                    var resolved = Mustache.resolve(expr),result = [],keys,key,i;
	// When resolved === undefined,the property hasn't been defined yet
                    // Assume it is intended to be a list
                    if (can.view.lists && (resolved instanceof can.List || (expr && expr.isComputed && resolved === undefined))) {
	return can.view.lists(expr,function(item,index) {
	return options.fn(options.scope.add( {
	"@index":index
}
)
                                .add(item));
}
);}expr = resolved;
	if ( !! expr && isArrayLike(expr)) {
	for (i = 0;
	i < expr.length;
	i++) {
	result.push(options.fn(options.scope.add( {
	"@index":i
}
)
                                    .add(expr[i])));
}
return result.join('');}else if (isObserveLike(expr)) {
	keys = can.Map.keys(expr);
	// listen to keys changing so we can livebind lists of attributes.

                        for (i = 0;
	i < keys.length;
	i++) {
	key = keys[i];
	result.push(options.fn(options.scope.add( {
	"@key":key
}
)
                                    .add(expr[key])));
}
return result.join('');}else if (expr instanceof Object) {
	for (key in expr) {
	result.push(options.fn(options.scope.add( {
	"@key":key
}
)
                                    .add(expr[key])));
}
return result.join('');}},// Implements the `with` built-in helper.

                'with':function(expr,options) {
	var ctx = expr;
	expr = Mustache.resolve(expr);
	if ( !! expr) {
	return options.fn(ctx);
}
},'log':function(expr,options) {
	if (typeof console !== "undefined" && console.log) {
	if (!options) {
	console.log(expr.context);
}
else {
	console.log(expr,options.context);
}
}},"@index":function(offset,options) {
	if (!options) {
	options = offset;
	offset = 0;
}
var index = options.scope.attr("@index");
	return "" + ((can.isFunction(index) ? index():index) + offset);}},function(fn,name) {
	Mustache.registerHelper(name,fn);
}
);
	// ## Registration
        // Registers Mustache with can.view.
        can.view.register( {
	suffix:"mustache",contentType:"x-mustache-template",// Returns a `function` that renders the view.
                script:function(id,src) {
	return "can.Mustache(function(" + ARG_NAMES + ") {
	" + new Mustache( {
	text:src,name:id
}
)
                        .template.out + "
}
)";},renderer:function(id,text) {
	return Mustache( {
	text:text,name:id
}
);}});
	can.mustache.registerHelper = can.proxy(can.Mustache.registerHelper,can.Mustache);
	can.mustache.safeString = can.Mustache.safeString;
	return can;})(__m2,__m25,__m13,__m26,__m23,__m28);
	// ## view/bindings/bindings.js
    var __m32 = (function(can) {
	// Function for determining of an element is contenteditable
        var isContentEditable = (function() {
	// A contenteditable element has a value of an empty string or "true"
            var values = {
	"":true,"true":true,"false":false
}
;// Tests if an element has the appropriate contenteditable attribute
            var editable = function(el) {
	// DocumentFragments do not have a getAttribute
                if (!el || !el.getAttribute) {
	return;
}
var attr = el.getAttribute("contenteditable");
	return values[attr];};
	return function(el) {
	// First check if the element is explicitly true or false
                var val = editable(el);
	if (typeof val === "boolean") {
	return val;
}
else {
	// Otherwise,check the parent
                    return !!editable(el.parentNode);
}
};})(),removeCurly = function(value) {
	if (value[0] === " {
	" && value[value.length - 1] === "
}
") {
	return value.substr(1,value.length - 2);
}
return value;};
	// ## can-value
        // Implement the `can-value` special attribute
        // ### Usage
        // 		<input can-value="name" />
        // When a view engine finds this attribute,it will call this callback. The value of the attribute
        // should be a string representing some value in the current scope to cross-bind to.
        can.view.attr("can-value",function(el,data) {
	var attr = removeCurly(el.getAttribute("can-value")),// Turn the attribute passed in into a compute.  If the user passed in can-value="name" and the current
                // scope of the template is some object called data,the compute representing this can-value will be the
                // data.attr('name') property.
                value = data.scope.computeData(attr {
	args:[]
}
)
                    .compute,trueValue,falseValue;
	// Depending on the type of element,this attribute has different behavior. can.Controls are defined (further below
            // in this file) for each type of input. This block of code collects arguments and instantiates each can.Control. There
            // is one for checkboxes/radios,another for multiselect inputs,and another for everything else.
            if (el.nodeName.toLowerCase() === "input") {
	if (el.type === "checkbox") {
	// If the element is a checkbox and has an attribute called "can-true-value",// set up a compute that toggles the value of the checkbox to "true" based on another attribute.
                    // 		<input type='checkbox' can-value='sex' can-true-value='male' can-false-value='female' />
                    if (can.attr.has(el,"can-true-value")) {
	trueValue = el.getAttribute("can-true-value");
}
else {
	trueValue = true;
}
if (can.attr.has(el,"can-false-value")) {
	falseValue = el.getAttribute("can-false-value");
}
else {
	falseValue = false;
}
}if (el.type === "checkbox" || el.type === "radio") {
	// For checkboxes and radio buttons,create a Checked can.Control around the input.  Pass in
                    // the compute representing the can-value and can-true-value and can-false-value properties (if
                    // they were used).
                    new Checked(el {
	value:value,trueValue:trueValue,falseValue:falseValue
}
);
	return;}}if (el.nodeName.toLowerCase() === "select" && el.multiple) {
	// For multiselect enabled select inputs,we instantiate a special control around that select element
                // called Multiselect
                new Multiselect(el {
	value:value
}
);
	return;}// For contenteditable elements,we instantiate a Content control.
            if (isContentEditable(el)) {
	new Content(el {
	value:value
}
);
	return;}// The default case. Instantiate the Value control around the element. Pass it the compute representing
            // the observable attribute property that was set.
            new Value(el {
	value:value
}
);});
	// ## Special Event Types (can-SPECIAL)

        // A special object,similar to [$.event.special](http://benalman.com/news/2010/03/jquery-special-events/),// for adding hooks for special can-SPECIAL types (not native DOM events). Right now,only can-enter is
        // supported,but this object might be exported so that it can be added to easily.
        // To implement a can-SPECIAL event type,add a property to the special object,whose value is a function
        // that returns the following://		// the real event name to bind to
        //		event:"event-name",//		handler:function (ev) {
	//			// some logic that figures out if the original handler should be called or not,and if so...
        //			return original.call(this,ev);
	//
}
var special = {
	enter:function(data,el,original) {
	return {
	event:"keyup",handler:function(ev) {
	if (ev.keyCode === 13) {
	return original.call(this,ev);
}
}};}};
	// ## can-EVENT
        // The following section contains code for implementing the can-EVENT attribute.
        // This binds on a wildcard attribute name. Whenever a view is being processed
        // and can-xxx (anything starting with can-),this callback will be run.  Inside,its setting up an event handler
        // that calls a method identified by the value of this attribute.
        can.view.attr(/can-[\w\.]+/,function(el,data) {
	// the attribute name is the function to call
            var attributeName = data.attributeName,// The event type to bind on is deteremined by whatever is after can-
                // For example,can-submit binds on the submit event.
                event = attributeName.substr("can-".length),// This is the method that the event will initially trigger. It will look up the method by the string name
                // passed in the attribute and call it.
                handler = function(ev) {
	// The attribute value,representing the name of the method to call (i.e. can-submit="foo" foo is the
                    // name of the method)
                    var attr = removeCurly(el.getAttribute(attributeName)),scopeData = data.scope.read(attr {
	returnObserveMethods:true,isArgument:true
}
);
	return scopeData.value.call(scopeData.parent,data.scope._context,can.$(this),ev);};
	// This code adds support for special event types,like can-enter="foo". special.enter (or any special[event]) is
            // a function that returns an object containing an event and a handler. These are to be used for binding. For example,// when a user adds a can-enter attribute,we'll bind on the keyup event,and the handler performs special logic to
            // determine on keyup if the enter key was pressed.
            if (special[event]) {
	var specialData = special[event](data,el,handler);
	handler = specialData.handler;
	event = specialData.event;
}
// Bind the handler defined above to the element we're currently processing and the event name provided in this
            // attribute name (can-click="foo")
            can.bind.call(el,event,handler);
}
);
	// ## Two way binding can.Controls
        // Each type of input that is supported by view/bindings is wrapped with a special can.Control.  The control serves
        // two functions:// 1. Bind on the property changing (the compute we're two-way binding to) and change the input value.
        // 2. Bind on the input changing and change the property (compute) we're two-way binding to.
        // There is one control per input type. There could easily be more for more advanced input types,like the HTML5 type="date" input type.

        // ### Value
        // A can.Control that manages the two-way bindings on most inputs.  When can-value is found as an attribute
        // on an input,the callback above instantiates this Value control on the input element.
        var Value = can.Control.extend( {
	init:function() {
	// Handle selects by calling `set` after this thread so the rest of the element can finish rendering.
                    if (this.element[0].nodeName.toUpperCase() === "SELECT") {
	setTimeout(can.proxy(this.set,this),1);
}
else {
	this.set();
}
},// If the live bound data changes,call set to reflect the change in the dom.
                " {
	value
}
change":"set",set:function() {
	// This may happen in some edgecases,esp. with selects that are not in DOM after the timeout has fired
                    if (!this.element) {
	return;
}
var val = this.options.value();
	// Set the element's value to match the attribute that was passed in
                    this.element[0].value = (val == null ? '':val);
}
,// If the input value changes,this will set the live bound data to reflect the change.
                "change":function() {
	// This may happen in some edgecases,esp. with selects that are not in DOM after the timeout has fired
                    if (!this.element) {
	return;
}
// Set the value of the attribute passed in to reflect what the user typed
                    this.options.value(this.element[0].value);
}
}),// ### Checked
            // A can.Control that manages the two-way bindings on a checkbox element.  When can-value is found as an attribute
            // on a checkbox,the callback above instantiates this Checked control on the checkbox element.
            Checked = can.Control.extend( {
	init:function() {
	// If its not a checkbox,its a radio input
                        this.isCheckbox = (this.element[0].type.toLowerCase() === "checkbox");
	this.check();
}
,// `value` is the compute representing the can-value for this element.  For example can-value="foo" and current
                    // scope is someObj,value is the compute representing someObj.attr('foo')
                    " {
	value
}
change":"check",check:function() {
	// jshint eqeqeq:false
                        if (this.isCheckbox) {
	var value = this.options.value(),trueValue = this.options.trueValue || true;
	// If `can-true-value` attribute was set,check if the value is equal to that string value,and set
                            // the checked property based on their equality.
                            this.element[0].checked = (value === trueValue);
}
// Its a radio input type
                        else {
	var setOrRemove = this.options.value() == this.element[0].value ?
                                "set":"remove";
	can.attr[setOrRemove](this.element[0],'checked',true);
}
},// This event is triggered by the DOM.  If a change event occurs,we must set the value of the compute (options.value).
                    "change":function() {
	if (this.isCheckbox) {
	// If the checkbox is checked and can-true-value was used,set value to the string value of can-true-value.  If
                            // can-false-value was used and checked is false,set value to the string value of can-false-value.
                            this.options.value(this.element[0].checked ? this.options.trueValue:this.options.falseValue);
}
// Radio input type
                        else {
	if (this.element[0].checked) {
	this.options.value(this.element[0].value);
}
}}}),// ### Multiselect
            // A can.Control that handles select input with the "multiple" attribute (meaning more than one can be selected at once).
            Multiselect = Value.extend( {
	init:function() {
	this.delimiter = ";
	";this.set();
}
,// Since this control extends Value (above),the set method will be called when the value compute changes (and on init).
                    set:function() {
	var newVal = this.options.value();
	// When given a string,try to extract all the options from it (i.e. "a;
	b;c;
	d")
                        if (typeof newVal === 'string') {
	newVal = newVal.split(this.delimiter);
	this.isString = true;
}
// When given something else,try to make it an array and deal with it
                        else if (newVal) {
	newVal = can.makeArray(newVal);
}
// Make an object containing all the options passed in for convenient lookup
                        var isSelected = {
	};
	can.each(newVal,function(val) {
	isSelected[val] = true;
}
);
	// Go through each &lt;
	option/&gt;
	element,if it has a value property (its a valid option),then
                        // set its selected property if it was in the list of vals that were just set.
                        can.each(this.element[0].childNodes,function(option) {
	if (option.value) {
	option.selected = !! isSelected[option.value];
}
});},// A helper function used by the 'change' handler below. Its purpose is to return an array of selected
                    // values,like ["foo","bar"]
                    get:function() {
	var values = [],children = this.element[0].childNodes;
	can.each(children,function(child) {
	if (child.selected && child.value) {
	values.push(child.value);
}
});
	return values;},// Called when the user changes this input in any way.
                    'change':function() {
	// Get an array of the currently selected values
                        var value = this.get(),currentValue = this.options.value();
	// If the compute is a string,set its value to the joined version of the values array (i.e. "foo;
	bar")
                        if (this.isString || typeof currentValue === "string") {
	this.isString = true;
	this.options.value(value.join(this.delimiter));
}
// If the compute is a can.List,replace its current contents with the new array of values
                        else if (currentValue instanceof can.List) {
	currentValue.attr(value,true);
}
// Otherwise set the value to the array of values selected in the input.
                        else {
	this.options.value(value);
}
}}),Content = can.Control.extend( {
	init:function() {
	this.set();
	this.on("blur","setValue");
}
," {
	value
}
change":"set",set:function() {
	var val = this.options.value();
	this.element[0].innerHTML = (typeof val === 'undefined' ? '':val);
}
,setValue:function() {
	this.options.value(this.element[0].innerHTML);
}
});})(__m2,__m24,__m14);
	// ## component/component.js
    var __m1 = (function(can,viewCallbacks) {
	// ## Helpers
        // Attribute names to ignore for setting scope values.
        var ignoreAttributesRegExp = /^(dataViewId|class|id)$/i,paramReplacer = /\ {
	([^\
}
]+)\}/g;
	var Component = can.Component = can.Construct.extend(

            // ## Static {
	// ### setup
                // When a component is extended,this sets up the component's internal constructor
                // functions and templates for later fast initialization.
                setup:function() {
	can.Construct.setup.apply(this,arguments);
	// When `can.Component.setup` function is ran for the first time,`can.Component` doesn't exist yet
                    // which ensures that the following code is ran only in constructors that extend `can.Component`.
                    if (can.Component) {
	var self = this,scope = this.prototype.scope;
	// Define a control using the `events` prototype property.
                        this.Control = ComponentControl.extend(this.prototype.events);
	// Look to convert `scope` to a Map constructor function.
                        if (!scope || (typeof scope === "object" && !(scope instanceof can.Map))) {
	// If scope is an object,use that object as the prototype of an extended
                            // Map constructor function.
                            // A new instance of that Map constructor function will be created and
                            // set a the constructor instance's scope.
                            this.Map = can.Map.extend(scope || {
	});
}
else if (scope.prototype instanceof can.Map) {
	// If scope is a can.Map constructor function,just use that.
                            this.Map = scope;
}
// Look for default `@` values. If a `@` is found,these
                        // attributes string values will be set and 2-way bound on the
                        // component instance's scope.
                        this.attributeScopeMappings = {
	};
	can.each(this.Map ? this.Map.defaults: {
	},function(val,prop) {
	if (val === "@") {
	self.attributeScopeMappings[prop] = prop;
}
});
	// Convert the template into a renderer function.
                        if (this.prototype.template) {
	// If `this.prototype.template` is a function create renderer from it by
                            // wrapping it with the anonymous function that will pass it the arguments,// otherwise create the render from the string
                            if (typeof this.prototype.template === "function") {
	var temp = this.prototype.template;
	this.renderer = function() {
	return can.view.frag(temp.apply(null,arguments));
}
;}else {
	this.renderer = can.view.mustache(this.prototype.template);
}
}// Register this component to be created when its `tag` is found.
                        can.view.tag(this.prototype.tag,function(el,options) {
	new self(el,options);
}
);}}} {
	// ## Prototype

                // ### setup
                // When a new component instance is created,setup bindings,render the template,etc.
                setup:function(el,hookupOptions) {
	// Setup values passed to component
                    var initalScopeData = {
	},component = this,twoWayBindings = {
	},// what scope property is currently updating
                        scopePropertyUpdating,// the object added to the scope
                        componentScope,frag;
	// ## Scope

                    // Add scope prototype properties marked with an "@" to the `initialScopeData` object
                    can.each(this.constructor.attributeScopeMappings,function(val,prop) {
	initalScopeData[prop] = el.getAttribute(can.hyphenate(val));
}
);
	// Get the value in the scope for each attribute
                    // the hookup should probably happen after?
                    can.each(can.makeArray(el.attributes),function(node,index) {
	var name = can.camelize(node.nodeName.toLowerCase()),value = node.value;
	// Ignore attributes already present in the ScopeMappings.
                        if (component.constructor.attributeScopeMappings[name] || ignoreAttributesRegExp.test(name) || viewCallbacks.attr(node.nodeName)) {
	return;
}
// Only setup bindings if attribute looks like `foo=" {
	bar
}
"`
                        if (value[0] === " {
	" && value[value.length - 1] === "
}
") {
	value = value.substr(1,value.length - 2);
}
else {
	// Legacy template types will crossbind "foo=bar"
                            if (hookupOptions.templateType !== "legacy") {
	initalScopeData[name] = value;
	return;
}
}// Cross-bind the value in the scope to this
                        // component's scope
                        var computeData = hookupOptions.scope.computeData(value {
	args:[]
}
),compute = computeData.compute;
	// bind on this,check it's value,if it has dependencies
                        var handler = function(ev,newVal) {
	scopePropertyUpdating = name;
	componentScope.attr(name,newVal);
	scopePropertyUpdating = null;
}
;// Compute only returned if bindable
                        compute.bind("change",handler);
	// Set the value to be added to the scope
                        initalScopeData[name] = compute();
	// We don't need to listen to the compute `change` if it doesn't have any dependencies
                        if (!compute.hasDependencies) {
	compute.unbind("change",handler);
}
else {
	// Make sure we unbind (there's faster ways of doing this)
                            can.bind.call(el,"removed",function() {
	compute.unbind("change",handler);
}
);
	// Setup the two-way binding
                            twoWayBindings[name] = computeData;
}
});
	if (this.constructor.Map) {
	// If `Map` property is set on the constructor use it to wrap the `initialScopeData`
                        componentScope = new this.constructor.Map(initalScopeData);
}
else if (this.scope instanceof can.Map) {
	// If `this.scope` is instance of `can.Map` assign it to the `componentScope`
                        componentScope = this.scope;
}
else if (can.isFunction(this.scope)) {
	// If `this.scope` is a function,call the function and
                        var scopeResult = this.scope(initalScopeData,hookupOptions.scope,el);
	if (scopeResult instanceof can.Map) {
	// If the function returns a can.Map,use that as the scope
                            componentScope = scopeResult;
}
else if (scopeResult.prototype instanceof can.Map) {
	// If `scopeResult` is of a `can.Map` type,use it to wrap the `initialScopeData`
                            componentScope = new scopeResult(initalScopeData);
}
else {
	// Otherwise extend `can.Map` with the `scopeResult` and initialize it with the `initialScopeData`
                            componentScope = new(can.Map.extend(scopeResult))(initalScopeData);
}
}// ## Two way bindings

                    // Object to hold the bind handlers so we can tear them down
                    var handlers = {
	};
	// Setup reverse bindings
                    can.each(twoWayBindings,function(computeData,prop) {
	handlers[prop] = function(ev,newVal) {
	// Check that this property is not being changed because
                            // it's source value just changed
                            if (scopePropertyUpdating !== prop) {
	computeData.compute(newVal);
}
};
	componentScope.bind(prop,handlers[prop]);});
	// Teardown reverse bindings when the element is removed
                    can.bind.call(el,"removed",function() {
	can.each(handlers,function(handler,prop) {
	componentScope.unbind(prop,handlers[prop]);
}
);});
	// Setup the attributes bindings
                    if (!can.isEmptyObject(this.constructor.attributeScopeMappings) || hookupOptions.templateType !== "legacy") {
	// Bind on the `attributes` event and update the scope.
                        can.bind.call(el,"attributes",function(ev) {
	// Convert attribute name from the `attribute-name` to the `attributeName` format.
                            var camelized = can.camelize(ev.attributeName);
	if (!twoWayBindings[camelized] && !ignoreAttributesRegExp.test(camelized)) {
	// If there is a mapping for this attribute,update the `componentScope` attribute
                                componentScope.attr(camelized,el.getAttribute(ev.attributeName));
}
});}// Set `componentScope` to `this.scope` and set it to the element's `data` object as a `scope` property
                    this.scope = componentScope;
	can.data(can.$(el),"scope",this.scope);
	// Create a real Scope object out of the scope property
                    var renderedScope = hookupOptions.scope.add(this.scope),options = {
	helpers: {
	}
}
;// ## Helpers

                    // Setup helpers to callback with `this` as the component
                    can.each(this.helpers || {
	},function(val,prop) {
	if (can.isFunction(val)) {
	options.helpers[prop] = function() {
	return val.apply(componentScope,arguments);
}
;}});
	// ## `events` control

                    // Create a control to listen to events
                    this._control = new this.constructor.Control(el {
	// Pass the scope to the control so we can listen to it's changes from the controller.
                            scope:this.scope
}
);
	// ## Rendering

                    // If this component has a template (that we've already converted to a renderer)
                    if (this.constructor.renderer) {
	// If `options.tags` doesn't exist set it to an empty object.
                        if (!options.tags) {
	options.tags = {
	};
}
// We need be alerted to when a <content> element is rendered so we can put the original contents of the widget in its place
                        options.tags.content = function contentHookup(el,rendererOptions) {
	// First check if there was content within the custom tag
                            // otherwise,render what was within <content>,the default code
                            var subtemplate = hookupOptions.subtemplate || rendererOptions.subtemplate;
	if (subtemplate) {
	// `rendererOptions.options` is a scope of helpers where `<content>` was found,so
                                // the right helpers should already be available.
                                // However,`_tags.content` is going to point to this current content callback.  We need to
                                // remove that so it will walk up the chain

                                delete options.tags.content;
	can.view.live.replace([el],subtemplate(
                                        // This is the context of where `<content>` was found
                                        // which will have the the component's context
                                        rendererOptions.scope,rendererOptions.options));
	// Restore the content tag so it could potentially be used again (as in lists)
                                options.tags.content = contentHookup;
}
};
	// Render the component's template
                        frag = this.constructor.renderer(renderedScope,hookupOptions.options.add(options));
}
else {
	// Otherwise render the contents between the
                        if (hookupOptions.templateType === "legacy") {
	frag = can.view.frag(hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope,hookupOptions.options.add(options)):"");
}
else {
	frag = hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope,hookupOptions.options.add(options)):document.createDocumentFragment();
}
}// Append the resulting document fragment to the element
                    can.appendChild(el,frag);
}
});
	var ComponentControl = can.Control.extend( {
	// Change lookup to first look in the scope.
                _lookup:function(options) {
	return [options.scope,options,window];
}
,_action:function(methodName,options,controlInstance) {
	var hasObjectLookup,readyCompute;
	paramReplacer.lastIndex = 0;
	hasObjectLookup = paramReplacer.test(methodName);
	// If we don't have options (a `control` instance),we'll run this
                    // later.
                    if (!controlInstance && hasObjectLookup) {
	return;
}
else if (!hasObjectLookup) {
	return can.Control._action.apply(this,arguments);
}
else {
	// We have `hasObjectLookup` and `controlInstance`.

                        readyCompute = can.compute(function() {
	var delegate;
	// Set the delegate target and get the name of the event we're listening to.
                            var name = methodName.replace(paramReplacer,function(matched,key) {
	var value;
	// If we are listening directly on the `scope` set it as a delegate target.
                                if (key === "scope") {
	delegate = options.scope;
	return "";
}
// Remove `scope.` from the start of the key and read the value from the `scope`.
                                key = key.replace(/^scope\./,"");
	value = can.compute.read(options.scope,key.split(".") {
	isArgument:true
}
).value;
	// If `value` is undefined use `can.getObject` to get the value.
                                if (value === undefined) {
	value = can.getObject(key);
}
// If `value` is a string we just return it,otherwise we set it as a delegate target.
                                if (typeof value === "string") {
	return value;
}
else {
	delegate = value;
	return "";
}
});
	// Get the name of the `event` we're listening to.
                            var parts = name.split(/\s+/g),event = parts.pop();
	// Return everything needed to handle the event we're listening to.
                            return {
	processor:this.processors[event] || this.processors.click,parts:[name,parts.join(" "),event],delegate:delegate || undefined
}
;},this);
	// Create a handler function that we'll use to handle the `change` event on the `readyCompute`.
                        var handler = function(ev,ready) {
	controlInstance._bindings.control[methodName](controlInstance.element);
	controlInstance._bindings.control[methodName] = ready.processor(
                                ready.delegate || controlInstance.element,ready.parts[2],ready.parts[1],methodName,controlInstance);
}
;readyCompute.bind("change",handler);
	controlInstance._bindings.readyComputes[methodName] = {
	compute:readyCompute,handler:handler
}
;return readyCompute();}}},// Extend `events` with a setup method that listens to changes in `scope` and
            // rebinds all templated event handlers. {
	setup:function(el,options) {
	this.scope = options.scope;
	return can.Control.prototype.setup.call(this,el,options);
}
,off:function() {
	// If `this._bindings` exists we need to go through it's `readyComputes` and manually
                    // unbind `change` event listeners set by the controller.
                    if (this._bindings) {
	can.each(this._bindings.readyComputes || {
	},function(value) {
	value.compute.unbind("change",value.handler);
}
);}// Call `can.Control.prototype.off` function on this instance to cleanup the bindings.
                    can.Control.prototype.off.apply(this,arguments);
	this._bindings.readyComputes = {
	};
}
});
	// If there is a `$` object and it has the `fn` object,create the `scope` plugin that returns
        // the scope object
        if (window.$ && $.fn) {
	$.fn.scope = function(attr) {
	// If `attr` is passed to the `scope` plugin return the value of that
                // attribute on the `scope` object,otherwise return the whole scope
                if (attr) {
	return this.data("scope")
                        .attr(attr);
}
else {
	return this.data("scope");
}
};}// Define the `can.scope` function that can be used to retrieve the `scope` from the element
        can.scope = function(el,attr) {
	el = can.$(el);
	// If `attr` is passed to the `can.scope` function return the value of that
            // attribute on the `scope` object otherwise return the whole scope
            if (attr) {
	return can.data(el,"scope")
                    .attr(attr);
}
else {
	return can.data(el,"scope");
}
};
	return Component;})(__m2,__m12,__m14,__m17,__m24,__m32);
	// ## model/model.js
    var __m33 = (function(can) {
	// ## model.js
        // (Don't steal this file directly in your code.)

        // ## pipe
        // `pipe` lets you pipe the results of a successful deferred
        // through a function before resolving the deferred.

        var pipe = function(def,thisArg,func) {
	// The piped result will be available through a new Deferred.
            var d = new can.Deferred();
	def.then(function() {
	var args = can.makeArray(arguments),success = true;
	try {
	// Pipe the results through the function.
                    args[0] = func.apply(thisArg,args);
}
catch (e) {
	success = false;
	// The function threw an error,so reject the Deferred.
                    d.rejectWith(d,[e].concat(args));
}
if (success) {
	// Resolve the new Deferred with the piped value.
                    d.resolveWith(d,args);
}
},function() {
	// Pass on the rejection if the original Deferred never resolved.
                d.rejectWith(this,arguments);
}
);
	// `can.ajax` returns a Deferred with an abort method to halt the AJAX call.
            if (typeof def.abort === 'function') {
	d.abort = function() {
	return def.abort();
}
;}// Return the new (piped) Deferred.
            return d;
}
,// ## modelNum
            // When new model constructors are set up without a full name,// `modelNum` lets us name them uniquely (to keep track of them).
            modelNum = 0,// ## getId
            getId = function(inst) {
	// `can.__reading` makes a note that `id` was just read.
                can.__reading(inst,inst.constructor.id);
	// Use `__get` instead of `attr` for performance. (But that means we have to remember to call `can.__reading`.)
                return inst.__get(inst.constructor.id);
}
,// ## ajax
            // This helper method makes it easier to make an AJAX call from the configuration of the Model.
            ajax = function(ajaxOb,data,type,dataType,success,error) {
	var params = {
	};
	// A string here would be something like `"GET /endpoint"`.
                if (typeof ajaxOb === 'string') {
	// Split on spaces to separate the HTTP method and the URL.
                    var parts = ajaxOb.split(/\s+/);
	params.url = parts.pop();
	if (parts.length) {
	params.type = parts.pop();
}
}else {
	// If the first argument is an object,just load it into `params`.
                    can.extend(params,ajaxOb);
}
// If the `data` argument is a plain object,copy it into `params`.
                params.data = typeof data === "object" && !can.isArray(data) ?
                    can.extend(params.data || {
	},data):data;
	// Substitute in data for any templated parts of the URL.
                params.url = can.sub(params.url,params.data,true);
	return can.ajax(can.extend( {
	type:type || 'post',dataType:dataType || 'json',success:success,error:error
}
,params));},// ## makeRequest
            // This function abstracts making the actual AJAX request away from the Model.
            makeRequest = function(modelObj,type,success,error,method) {
	var args;
	// If `modelObj` is an Array,it it means we are coming from
                // the queued request,and we're passing already-serialized data.
                if (can.isArray(modelObj)) {
	// In that case,modelObj's signature will be `[modelObj,serializedData]`,so we need to unpack it.
                    args = modelObj[1];
	modelObj = modelObj[0];
}
else {
	// If we aren't supplied with serialized data,we'll make our own.
                    args = modelObj.serialize();
}
args = [args];
	var deferred,model = modelObj.constructor,jqXHR;
	// When calling `update` and `destroy`,the current ID needs to be the first parameter in the AJAX call.
                if (type === 'update' || type === 'destroy') {
	args.unshift(getId(modelObj));
}
jqXHR = model[type].apply(model,args);
	// Make sure that can.Model can react to the request before anything else does.
                deferred = pipe(jqXHR,modelObj,function(data) {
	// `method` is here because `"destroyed" !== "destroy" + "d"`.
                    // TODO:Do something smarter/more consistent here?
                    modelObj[method || type + "d"](data,jqXHR);
	return modelObj;
}
);
	// Hook up `abort`
                if (jqXHR.abort) {
	deferred.abort = function() {
	jqXHR.abort();
}
;}deferred.then(success,error);
	return deferred;},initializers = {
	// ## models
                // Returns a function that,when handed a list of objects,makes them into models and returns a model list of them.
                // `prop` is the property on `instancesRawData` that has the array of objects in it (if it's not `data`).
                models:function(prop) {
	return function(instancesRawData,oldList) {
	// Increment reqs counter so new instances will be added to the store.
                        // (This is cleaned up at the end of the method.)
                        can.Model._reqs++;
	// If there is no data,we can't really do anything with it.
                        if (!instancesRawData) {
	return;
}
// If the "raw" data is already a List,it's not raw.
                        if (instancesRawData instanceof this.List) {
	return instancesRawData;
}
var self = this,// `tmp` will hold the models before we push them onto `modelList`.
                            tmp = [],// `ML` (see way below) is just `can.Model.List`.
                            ListClass = self.List || ML,modelList = oldList instanceof can.List ? oldList:new ListClass(),// Check if we were handed an Array or a model list.
                            rawDataIsArray = can.isArray(instancesRawData),rawDataIsList = instancesRawData instanceof ML,// Get the "plain" objects from the models from the list/array.
                            raw = rawDataIsArray ? instancesRawData:(
                                rawDataIsList ? instancesRawData.serialize():can.getObject(prop || "data",instancesRawData));
	if (typeof raw === 'undefined') {
	throw new Error('Could not get any raw data while converting using .models');
}
// If there was anything left in the list we were given,get rid of it.
                        if (modelList.length) {
	modelList.splice(0);
}
// If we pushed these directly onto the list,it would cause a change event for each model.
                        // So,we push them onto `tmp` first and then push everything at once,causing one atomic change event that contains all the models at once.
                        can.each(raw,function(rawPart) {
	tmp.push(self.model(rawPart));
}
);
	modelList.push.apply(modelList,tmp);
	// If there was other stuff on `instancesRawData`,let's transfer that onto `modelList` too.
                        if (!rawDataIsArray) {
	can.each(instancesRawData,function(val,prop) {
	if (prop !== 'data') {
	modelList.attr(prop,val);
}
});}// Clean up the store on the next turn of the event loop. (`this` is a model constructor.)
                        setTimeout(can.proxy(this._clean,this),1);
	return modelList;
}
;},// ## model
                // Returns a function that,when handed a plain object,turns it into a model.
                // `prop` is the property on `attributes` that has the properties for the model in it.
                model:function(prop) {
	return function(attributes) {
	// If there're no properties,there can be no model.
                        if (!attributes) {
	return;
}
// If this object knows how to serialize,parse,or access itself,we'll use that instead.
                        if (typeof attributes.serialize === 'function') {
	attributes = attributes.serialize();
}
if (this.parseModel) {
	attributes = this.parseModel.apply(this,arguments);
}
else if (prop) {
	attributes = can.getObject(prop || "data",attributes);
}
var id = attributes[this.id],// 0 is a valid ID.
                            model = (id || id === 0) && this.store[id] ?
                            // If this model is in the store already,just update it.
                            this.store[id].attr(attributes,this.removeAttr || false):// Otherwise,we need a new model.
                            new this(attributes);
	return model;
}
;}},parserMaker = function(prop) {
	return function(attributes) {
	return prop ? can.getObject(prop || "data",attributes):attributes;
}
;},// ## parsers
            // This object describes how to take the data from an AJAX request and prepare it for `models` and `model`.
            // These functions are meant to be overwritten (if necessary) in an extended model constructor.
            parsers = {
	parseModel:parserMaker,parseModels:parserMaker
}
,// ## ajaxMethods
            // This object describes how to make an AJAX request for each ajax method (`create`,`update`,etc.)
            // Each AJAX method is an object in `ajaxMethods` and can have the following properties:// - `url`:Which property on the model contains the default URL for this method.
            // - `type`:The default HTTP request method.
            // - `data`:A method that takes the arguments from `makeRequest` (see above) and returns a data object for use in the AJAX call.


            ajaxMethods = {
	create: {
	url:"_shortName",type:"post"
}
,update: {
	// ## update.data
                    data:function(id,attrs) {
	attrs = attrs || {
	};
	// `this.id` is the property that represents the ID (and is usually `"id"`).
                        var identity = this.id;
	// If the value of the property being used as the ID changed,// indicate that in the request and replace the current ID property.
                        if (attrs[identity] && attrs[identity] !== id) {
	attrs["new" + can.capitalize(id)] = attrs[identity];
	delete attrs[identity];
}
attrs[identity] = id;
	return attrs;},type:"put"},destroy: {
	type:'delete',// ## destroy.data
                    data:function(id,attrs) {
	attrs = attrs || {
	};
	// `this.id` is the property that represents the ID (and is usually `"id"`).
                        attrs.id = attrs[this.id] = id;
	return attrs;
}
},findAll: {
	url:"_shortName"
}
,findOne: {
	}
}
,// ## ajaxMaker
            // Takes a method defined just above and a string that describes how to call that method
            // and makes a function that calls that method with the given data.
            // - `ajaxMethod`:The object defined above in `ajaxMethods`.
            // - `str`:The string the configuration provided (such as `"/recipes.json"` for a `findAll` call).
            ajaxMaker = function(ajaxMethod,str) {
	return function(data) {
	data = ajaxMethod.data ?
                    // If the AJAX method mentioned above has its own way of getting `data`,use that.
                    ajaxMethod.data.apply(this,arguments):// Otherwise,just use the data passed in.
                    data;
	// Make the AJAX call with the URL,data,and type indicated by the proper `ajaxMethod` above.
                    return ajax(str || this[ajaxMethod.url || "_url"],data,ajaxMethod.type || "get");
}
;},// ## createURLFromResource
            // For each of the names (create,update,destroy,findOne,and findAll) use the
            // URL provided by the `resource` property. For example:// 		ToDo = can.Model.extend( {
	// 			resource:"/todos"
            //
}
 {
	});
	// 	Will create a can.Model that is identical to:// 		ToDo = can.Model.extend( {
	// 			findAll:"GET /todos",// 			findOne:"GET /todos/ {
	id
}
",// 			create:"POST /todos",// 			update:"PUT /todos/ {
	id
}
",// 			destroy:"DELETE /todos/ {
	id
}
"
            //
}
 {
	});
	// - `model`:the can.Model that has the resource property
            // - `method`:a property from the ajaxMethod object
            createURLFromResource = function(model,name) {
	if (!model.resource) {
	return;
}
var resource = model.resource.replace(/\/+$/,"");
	if (name === "findAll" || name === "create") {
	return resource;
}
else {
	return resource + "/ {
	" + model.id + "
}
";}};
	// # can.Model
        // A can.Map that connects to a RESTful interface.
        can.Model = can.Map.extend( {
	// `fullName` identifies the model type in debugging.
                fullName:"can.Model",_reqs:0,// ## can.Model.setup

                setup:function(base,fullName,staticProps,protoProps) {
	// Assume `fullName` wasn't passed. (`can.Model.extend( {
	...
}
 {
	...
}
)`)
                    // This is pretty usual.
                    if (typeof fullName !== "string") {
	protoProps = staticProps;
	staticProps = fullName;
}
// Assume no static properties were passed. (`can.Model.extend( {
	...
}
)`)
                    // This is really unusual for a model though,since there's so much configuration.
                    if (!protoProps) {
	protoProps = staticProps;
}
// Create the model store here,in case someone wants to use can.Model without inheriting from it.
                    this.store = {
	};
	can.Map.setup.apply(this,arguments);
	if (!can.Model) {
	return;
}
// `List` is just a regular can.Model.List that knows what kind of Model it's hooked up to.

                    if (staticProps && staticProps.List) {
	this.List = staticProps.List;
	this.List.Map = this;
}
else {
	this.List = base.List.extend( {
	Map:this
}
 {
	});
}
var self = this,clean = can.proxy(this._clean,self);
	// Go through `ajaxMethods` and set up static methods according to their configurations.
                    can.each(ajaxMethods,function(method,name) {
	// Check the configuration for this ajaxMethod.
                        // If the configuration isn't a function,it should be a string (like `"GET /endpoint"`)
                        // or an object like ` {
	url:"/endpoint",type:'GET'
}
`.

                        //if we have a string(like `"GET /endpoint"`) or an object(ajaxSettings) set in the static definition(not inherited),//convert it to a function.
                        if (staticProps && staticProps[name] && (typeof staticProps[name] === 'string' || typeof staticProps[name] === 'object')) {
	self[name] = ajaxMaker(method,staticProps[name]);
}
//if we have a resource property set in the static definition
                        else if (staticProps && staticProps.resource) {
	self[name] = ajaxMaker(method,createURLFromResource(self,name));
}
// There may also be a "maker" function (like `makeFindAll`) that alters the behavior of acting upon models
                        // by changing when and how the function we just made with `ajaxMaker` gets called.
                        // For example,you might cache responses and only make a call when you don't have a cached response.
                        if (self["make" + can.capitalize(name)]) {
	// Use the "maker" function to make the new "ajaxMethod" function.
                            var newMethod = self["make" + can.capitalize(name)](self[name]);
	// Replace the "ajaxMethod" function in the configuration with the new one.
                            // (`_overwrite` just overwrites a property in a given Construct.)
                            can.Construct._overwrite(self,base,name,function() {
	// Increment the numer of requests...
                                can.Model._reqs++;
	// ...make the AJAX call (and whatever else you're doing)...
                                var def = newMethod.apply(this,arguments);
	// ...and clean up the store.
                                var then = def.then(clean,clean);
	// Pass along `abort` so you can still abort the AJAX call.
                                then.abort = def.abort;
	return then;
}
);}});
	// Set up the methods that will set up `models` and `model`.
                    can.each(initializers,function(makeInitializer,name) {
	var parseName = "parse" + can.capitalize(name),dataProperty = self[name];
	// If there was a different property to find the model's data in than `data`,// make `parseModel` and `parseModels` functions that look that up instead.
                        if (typeof dataProperty === "string") {
	can.Construct._overwrite(self,base,parseName,parsers[parseName](dataProperty));
	can.Construct._overwrite(self,base,name,makeInitializer(dataProperty));
}
// If there was no prototype,or no `model` and no `parseModel`,// we'll have to create a `parseModel`.
                        else if (!staticProps || (!staticProps[name] && !staticProps[parseName])) {
	can.Construct._overwrite(self,base,parseName,parsers[parseName]());
}
});
	// With the overridden parse methods,set up `models` and `model`.
                    can.each(parsers,function(makeParser,name) {
	// If there was a different property to find the model's data in than `data`,// make `model` and `models` functions that look that up instead.
                        if (typeof self[name] === "string") {
	can.Construct._overwrite(self,base,name,makeParser(self[name]));
}
});
	// Make sure we have a unique name for this Model.
                    if (self.fullName === "can.Model" || !self.fullName) {
	self.fullName = "Model" + (++modelNum);
}
can.Model._reqs = 0;
	this._url = this._shortName + "/ {
	" + this.id + "
}
";},_ajax:ajaxMaker,_makeRequest:makeRequest,// ## can.Model._clean
                // `_clean` cleans up the model store after a request happens.
                _clean:function() {
	can.Model._reqs--;
	// Don't clean up unless we have no pending requests.
                    if (!can.Model._reqs) {
	for (var id in this.store) {
	// Delete all items in the store without any event bindings.
                            if (!this.store[id]._bindings) {
	delete this.store[id];
}
}}return arguments[0];},models:initializers.models("data"),model:initializers.model()} {
	// ## can.Model#setup
                setup:function(attrs) {
	// Try to add things as early as possible to the store (#457).
                    // This is the earliest possible moment,even before any properties are set.
                    var id = attrs && attrs[this.constructor.id];
	if (can.Model._reqs && id != null) {
	this.constructor.store[id] = this;
}
can.Map.prototype.setup.apply(this,arguments);},// ## can.Model#isNew
                // Something is new if its ID is `null` or `undefined`.

                isNew:function() {
	var id = getId(this);
	// 0 is a valid ID.
                    // TODO:Why not `return id === null || id === undefined;
	`?
                    return !(id || id === 0);
	// If `null` or `undefined`
}
,// ## can.Model#save
                // `save` calls `create` or `update` as necessary,based on whether a model is new.

                save:function(success,error) {
	return makeRequest(this,this.isNew() ? 'create':'update',success,error);
}
,// ## can.Model#destroy
                // Acts like can.Map.destroy but it also makes an AJAX call.

                destroy:function(success,error) {
	// If this model is new,don't make an AJAX call.
                    // Instead,we have to construct the Deferred ourselves and return it.
                    if (this.isNew()) {
	var self = this;
	var def = can.Deferred();
	def.then(success,error);
	return def.done(function(data) {
	self.destroyed(data);
}
).resolve(self);}// If it isn't new,though,go ahead and make a request.
                    return makeRequest(this,'destroy',success,error,'destroyed');
}
,// ## can.Model#bind and can.Model#unbind
                // These aren't actually implemented here,but their setup needs to be changed to account for the store.

                _bindsetup:function() {
	this.constructor.store[this.__get(this.constructor.id)] = this;
	return can.Map.prototype._bindsetup.apply(this,arguments);
}
,_bindteardown:function() {
	delete this.constructor.store[getId(this)];
	return can.Map.prototype._bindteardown.apply(this,arguments);
}
,// Change the behavior of `___set` to account for the store.
                ___set:function(prop,val) {
	can.Map.prototype.___set.call(this,prop,val);
	// If we add or change the ID,update the store accordingly.
                    // TODO:shouldn't this also delete the record from the old ID in the store?
                    if (prop === this.constructor.id && this._bindings) {
	this.constructor.store[getId(this)] = this;
}
}});
	// Returns a function that knows how to prepare data from `findAll` or `findOne` calls.
        // `name` should be either `model` or `models`.
        var makeGetterHandler = function(name) {
	var parseName = "parse" + can.capitalize(name);
	return function(data) {
	// If there's a `parse...` function,use its output.
                if (this[parseName]) {
	data = this[parseName].apply(this,arguments);
}
// Run our maybe-parsed data through `model` or `models`.
                return this[name](data);
}
;},// Handle data returned from `create`,`update`,and `destroy` calls.
            createUpdateDestroyHandler = function(data) {
	if (this.parseModel) {
	return this.parseModel.apply(this,arguments);
}
else {
	return this.model(data);
}
};
	var responseHandlers = {
	makeFindAll:makeGetterHandler("models"),makeFindOne:makeGetterHandler("model"),makeCreate:createUpdateDestroyHandler,makeUpdate:createUpdateDestroyHandler
}
;// Go through the response handlers and make the actual "make" methods.
        can.each(responseHandlers,function(method,name) {
	can.Model[name] = function(oldMethod) {
	return function() {
	var args = can.makeArray(arguments),// If args[1] is a function,we were only passed one argument before success and failure callbacks.
                        oldArgs = can.isFunction(args[1]) ? args.splice(0,1):args.splice(0,2),// Call the AJAX method (`findAll` or `update`,etc.) and pipe it through the response handler from above.
                        def = pipe(oldMethod.apply(this,oldArgs),this,method);
	def.then(args[0],args[1]);
	return def;
}
;};});
	// ## can.Model.created,can.Model.updated,and can.Model.destroyed
        // Livecycle methods for models.
        can.each([

                "created","updated","destroyed"
            ],function(funcName) {
	// Each of these is pretty much the same,except for the events they trigger.
                can.Model.prototype[funcName] = function(attrs) {
	var stub,constructor = this.constructor;
	// Update attributes if attributes have been passed
                    stub = attrs && typeof attrs === 'object' && this.attr(attrs.attr ? attrs.attr():attrs);
	// triggers change event that bubble's like
                    // handler( 'change','1.destroyed' ). This is used
                    // to remove items on destroyed from Model Lists.
                    // but there should be a better way.
                    can.dispatch.call(this {
	type:"change",target:this
}
,[funcName]);
	// Call event on the instance's Class
                    can.dispatch.call(constructor,funcName,[this]);
}
;});
	// # can.Model.List
        // Model Lists are just like `Map.List`s except that when their items are
        // destroyed,they automatically get removed from the List.
        var ML = can.Model.List = can.List.extend( {
	// ## can.Model.List.setup
                // On change or a nested named event,setup change bubbling.
                // On any other type of event,setup "destroyed" bubbling.
                _bubbleRule:function(eventName,list) {
	return can.List._bubbleRule(eventName,list) || "destroyed";
}
} {
	setup:function(params) {
	// If there was a plain object passed to the List constructor,// we use those as parameters for an initial findAll.
                    if (can.isPlainObject(params) && !can.isArray(params)) {
	can.List.prototype.setup.apply(this);
	this.replace(can.isDeferred(params) ? params:this.constructor.Map.findAll(params));
}
else {
	// Otherwise,set up the list like normal.
                        can.List.prototype.setup.apply(this,arguments);
}
this._init = 1;
	this.bind('destroyed',can.proxy(this._destroyed,this));
	delete this._init;},_destroyed:function(ev,attr) {
	if (/\w+/.test(attr)) {
	var index;
	while ((index = this.indexOf(ev.target)) > -1) {
	this.splice(index,1);
}
}}});
	return can.Model;})(__m2,__m18,__m22);
	// ## util/string/deparam/deparam.js
    var __m35 = (function(can) {
	// ## deparam.js
        // `can.deparam`
        // _Takes a string of name value pairs and returns a Object literal that represents those params._
        var digitTest = /^\d+$/,keyBreaker = /([^\[\]]+)|(\[\])/g,paramTest = /([^?#]*)(#.*)?$/,prep = function(str) {
	return decodeURIComponent(str.replace(/\+/g,' '));
}
;can.extend(can {
	deparam:function(params) {
	var data = {
	},pairs,lastPart;
	if (params && paramTest.test(params)) {
	pairs = params.split('&');
	can.each(pairs,function(pair) {
	var parts = pair.split('='),key = prep(parts.shift()),value = prep(parts.join('=')),current = data;
	if (key) {
	parts = key.match(keyBreaker);
	for (var j = 0,l = parts.length - 1;
	j < l;
	j++) {
	if (!current[parts[j]]) {
	// If what we are pointing to looks like an `array`
                                        current[parts[j]] = digitTest.test(parts[j + 1]) || parts[j + 1] === '[]' ? []: {
	};
}
current = current[parts[j]];}lastPart = parts.pop();
	if (lastPart === '[]') {
	current.push(value);
}
else {
	current[lastPart] = value;
}
}});}return data;}});
	return can;})(__m2,__m16);
	// ## route/route.js
    var __m34 = (function(can) {
	// ## route.js
        // `can.route`
        // _Helps manage browser history (and client state) by synchronizing the
        // `window.location.hash` with a `can.Map`._
        // Helper methods used for matching routes.
        var
        // `RegExp` used to match route variables of the type ':name'.
        // Any word character or a period is matched.
        matcher = /\:([\w\.]+)/g,// Regular expression for identifying &amp;
	key=value lists.
            paramsMatcher = /^(?:&[^=]+=[^&]*)+/,// Converts a JS Object into a list of parameters that can be
            // inserted into an html element tag.
            makeProps = function(props) {
	var tags = [];
	can.each(props,function(val,name) {
	tags.push((name === 'className' ? 'class':name) + '="' +
                        (name === "href" ? val:can.esc(val)) + '"');
}
);
	return tags.join(" ");},// Checks if a route matches the data provided. If any route variable
            // is not present in the data,the route does not match. If all route
            // variables are present in the data,the number of matches is returned
            // to allow discerning between general and more specific routes.
            matchesData = function(route,data) {
	var count = 0,i = 0,defaults = {
	};
	// look at default values,if they match ...
                for (var name in route.defaults) {
	if (route.defaults[name] === data[name]) {
	// mark as matched
                        defaults[name] = 1;
	count++;
}
}for (;
	i < route.names.length;
	i++) {
	if (!data.hasOwnProperty(route.names[i])) {
	return -1;
}
if (!defaults[route.names[i]]) {
	count++;
}
}return count;},location = window.location,wrapQuote = function(str) {
	return (str + '')
                    .replace(/([.?*+\^$\[\]\\() {
	}|\-])/g,"\\$1");
}
,each = can.each,extend = can.extend,// Helper for convert any object (or value) to stringified object (or value)
            stringify = function(obj) {
	// Object is array,plain object,Map or List
                if (obj && typeof obj === "object") {
	// Get native object or array from Map or List
                    if (obj instanceof can.Map) {
	obj = obj.attr();
	// Clone object to prevent change original values
}
else {
	obj = can.isFunction(obj.slice) ? obj.slice():can.extend( {
	},obj);
}
// Convert each object property or array item into stringified new
                    can.each(obj,function(val,prop) {
	obj[prop] = stringify(val);
}
);
	// Object supports toString function}else if (obj !== undefined && obj !== null && can.isFunction(obj.toString)) {
	obj = obj.toString();
}
return obj;},removeBackslash = function(str) {
	return str.replace(/\\/g,"");
}
,// A ~~throttled~~ debounced function called multiple times will only fire once the
            // timer runs down. Each call resets the timer.
            timer,// Intermediate storage for `can.route.data`.
            curParams,// The last hash caused by a data change
            lastHash,// Are data changes pending that haven't yet updated the hash
            changingData,// If the `can.route.data` changes,update the hash.
            // Using `.serialize()` retrieves the raw data contained in the `observable`.
            // This function is ~~throttled~~ debounced so it only updates once even if multiple values changed.
            // This might be able to use batchNum and avoid this.
            onRouteDataChange = function(ev,attr,how,newval) {
	// indicate that data is changing
                changingData = 1;
	clearTimeout(timer);
	timer = setTimeout(function() {
	// indicate that the hash is set to look like the data
                    changingData = 0;
	var serialized = can.route.data.serialize(),path = can.route.param(serialized,true);
	can.route._call("setURL",path);
	// trigger a url change so its possible to live-bind on url-based changes
                    can.batch.trigger(eventsObject,"__url",[path,lastHash]);
	lastHash = path;
}
,10);},// A dummy events object used to dispatch url change events on.
            eventsObject = can.extend( {
	},can.event);
	can.route = function(url,defaults) {
	// if route ends with a / and url starts with a /,remove the leading / of the url
            var root = can.route._call("root");
	if (root.lastIndexOf("/") === root.length - 1 &&
                url.indexOf("/") === 0) {
	url = url.substr(1);
}
defaults = defaults || {
	};
	// Extract the variable names and replace with `RegExp` that will match
            // an atual URL with values.
            var names = [],res,test = "",lastIndex = matcher.lastIndex = 0,next,querySeparator = can.route._call("querySeparator"),matchSlashes = can.route._call("matchSlashes");
	// res will be something like [":foo","foo"]
            while (res = matcher.exec(url)) {
	names.push(res[1]);
	test += removeBackslash(url.substring(lastIndex,matcher.lastIndex - res[0].length));
	// if matchSlashes is false (the default) don't greedily match any slash in the string,assume its part of the URL
                next = "\\" + (removeBackslash(url.substr(matcher.lastIndex,1)) || querySeparator + (matchSlashes ? "":"|/"));
	// a name without a default value HAS to have a value
                // a name that has a default value can be empty
                // The `\\` is for string-escaping giving single `\` for `RegExp` escaping.
                test += "([^" + next + "]" + (defaults[res[1]] ? "*":"+") + ")";
	lastIndex = matcher.lastIndex;
}
test += url.substr(lastIndex)
                .replace("\\","");
	// Add route in a form that can be easily figured out.
            can.route.routes[url] = {
	// A regular expression that will match the route when variable values
                // are present;
	i.e. for `:page/:type` the `RegExp` is `/([\w\.]*)/([\w\.]*)/` which
                // will match for any value of `:page` and `:type` (word chars or period).
                test:new RegExp("^" + test + "($|" + wrapQuote(querySeparator) + ")"),// The original URL,same as the index for this entry in routes.
                route:url,// An `array` of all the variable names in this route.
                names:names,// Default values provided for the variables.
                defaults:defaults,// The number of parts in the URL separated by `/`.
                length:url.split('/')
                    .length
}
;return can.route;};
	extend(can.route {
	param:function(data,_setRoute) {
	// Check if the provided data keys match the names in any routes;
	// Get the one with the most matches.
                    var route,// Need to have at least 1 match.
                        matches = 0,matchCount,routeName = data.route,propCount = 0;
	delete data.route;
	each(data,function() {
	propCount++;
}
);
	// Otherwise find route.
                    each(can.route.routes,function(temp,name) {
	// best route is the first with all defaults matching

                        matchCount = matchesData(temp,data);
	if (matchCount > matches) {
	route = temp;
	matches = matchCount;
}
if (matchCount >= propCount) {
	return false;
}
});
	// If we have a route name in our `can.route` data,and it's
                    // just as good as what currently matches,use that
                    if (can.route.routes[routeName] && matchesData(can.route.routes[routeName],data) === matches) {
	route = can.route.routes[routeName];
}
// If this is match...
                    if (route) {
	var cpy = extend( {
	},data),// Create the url by replacing the var names with the provided data.
                            // If the default value is found an empty string is inserted.
                            res = route.route.replace(matcher,function(whole,name) {
	delete cpy[name];
	return data[name] === route.defaults[name] ? "":encodeURIComponent(data[name]);
}
)
                                .replace("\\",""),after;
	// Remove matching default values
                        each(route.defaults,function(val,name) {
	if (cpy[name] === val) {
	delete cpy[name];
}
});
	// The remaining elements of data are added as
                        // `&amp;
	` separated parameters to the url.
                        after = can.param(cpy);
	// if we are paraming for setting the hash
                        // we also want to make sure the route value is updated
                        if (_setRoute) {
	can.route.attr('route',route.route);
}
return res + (after ? can.route._call("querySeparator") + after:"");}// If no route was found,there is no hash URL,only paramters.
                    return can.isEmptyObject(data) ? "":can.route._call("querySeparator") + can.param(data);
}
,deparam:function(url) {
	// remove the url
                    var root = can.route._call("root");
	if (root.lastIndexOf("/") === root.length - 1 &&
                        url.indexOf("/") === 0) {
	url = url.substr(1);
}
// See if the url matches any routes by testing it against the `route.test` `RegExp`.
                    // By comparing the URL length the most specialized route that matches is used.
                    var route = {
	length:-1
}
,querySeparator = can.route._call("querySeparator"),paramsMatcher = can.route._call("paramsMatcher");
	each(can.route.routes,function(temp,name) {
	if (temp.test.test(url) && temp.length > route.length) {
	route = temp;
}
});
	// If a route was matched.
                    if (route.length > -1) {
	var // Since `RegExp` backreferences are used in `route.test` (parens)
                        // the parts will contain the full matched string and each variable (back-referenced) value.
                        parts = url.match(route.test),// Start will contain the full matched string;
	parts contain the variable values.
                            start = parts.shift(),// The remainder will be the `&amp;
	key=value` list at the end of the URL.
                            remainder = url.substr(start.length - (parts[parts.length - 1] === querySeparator ? 1:0)),// If there is a remainder and it contains a `&amp;
	key=value` list deparam it.
                            obj = (remainder && paramsMatcher.test(remainder)) ? can.deparam(remainder.slice(1)): {
	};
	// Add the default values for this route.
                        obj = extend(true {
	},route.defaults,obj);
	// Overwrite each of the default values in `obj` with those in
                        // parts if that part is not empty.
                        each(parts,function(part,i) {
	if (part && part !== querySeparator) {
	obj[route.names[i]] = decodeURIComponent(part);
}
});
	obj.route = route.route;
	return obj;}// If no route was matched,it is parsed as a `&amp;
	key=value` list.
                    if (url.charAt(0) !== querySeparator) {
	url = querySeparator + url;
}
return paramsMatcher.test(url) ? can.deparam(url.slice(1)): {
	};
}
,data:new can.Map( {
	}),map:function(data) {
	var appState;
	// appState is a can.Map constructor function
                    if (data.prototype instanceof can.Map) {
	appState = new data();
}
// appState is an instance of can.Map
                    else {
	appState = data;
}
can.route.data = appState;},routes: {
	},ready:function(val) {
	if (val !== true) {
	can.route._setup();
	can.route.setState();
}
return can.route;},url:function(options,merge) {
	if (merge) {
	options = can.extend( {
	},can.route.deparam(can.route._call("matchingPartOfURL")),options);
}
return can.route._call("root") + can.route.param(options);},link:function(name,options,props,merge) {
	return "<a " + makeProps(
                        extend( {
	href:can.route.url(options,merge)
}
,props)) + ">" + name + "</a>";},current:function(options) {
	// "reads" the url so the url is live-bindable.
                    can.__reading(eventsObject,"__url");
	return this._call("matchingPartOfURL") === can.route.param(options);
}
,bindings: {
	hashchange: {
	paramsMatcher:paramsMatcher,querySeparator:"&",// don't greedily match slashes in routing rules
                        matchSlashes:false,bind:function() {
	can.bind.call(window,'hashchange',setState);
}
,unbind:function() {
	can.unbind.call(window,'hashchange',setState);
}
,// Gets the part of the url we are determinging the route from.
                        // For hashbased routing,it's everything after the #,for
                        // pushState it's configurable
                        matchingPartOfURL:function() {
	return location.href.split(/#!?/)[1] || "";
}
,// gets called with the serialized can.route data after a route has changed
                        // returns what the url has been updated to (for matching purposes)
                        setURL:function(path) {
	location.hash = "#!" + path;
	return path;
}
,root:"#!"}},defaultBinding:"hashchange",currentBinding:null,// ready calls setup
                // setup binds and listens to data changes
                // bind listens to whatever you should be listening to
                // data changes tries to set the path

                // we need to be able to
                // easily kick off calling setState
                // 	teardown whatever is there
                //  turn on a particular binding

                // called when the route is ready
                _setup:function() {
	if (!can.route.currentBinding) {
	can.route._call("bind");
	can.route.bind("change",onRouteDataChange);
	can.route.currentBinding = can.route.defaultBinding;
}
},_teardown:function() {
	if (can.route.currentBinding) {
	can.route._call("unbind");
	can.route.unbind("change",onRouteDataChange);
	can.route.currentBinding = null;
}
clearTimeout(timer);
	changingData = 0;},// a helper to get stuff from the current or default bindings
                _call:function() {
	var args = can.makeArray(arguments),prop = args.shift(),binding = can.route.bindings[can.route.currentBinding || can.route.defaultBinding],method = binding[prop];
	if (method.apply) {
	return method.apply(binding,args);
}
else {
	return method;
}
}});
	// The functions in the following list applied to `can.route` (e.g. `can.route.attr('...')`) will
        // instead act on the `can.route.data` observe.
        each(['bind','unbind','on','off','delegate','undelegate','removeAttr','compute','_get','__get','each'],function(name) {
	can.route[name] = function() {
	// `delegate` and `undelegate` require
                // the `can/map/delegate` plugin
                if (!can.route.data[name]) {
	return;
}
return can.route.data[name].apply(can.route.data,arguments);};});
	// Because everything in hashbang is in fact a string this will automaticaly convert new values to string. Works with single value,or deep hashes.
        // Main motivation for this is to prevent double route event call for same value.
        // Example (the problem):// When you load page with hashbang like #!&some_number=2 and bind 'some_number' on routes.
        // It will fire event with adding of "2" (string) to 'some_number' property
        // But when you after this set can.route.attr( {
	some_number:2
}
) or can.route.attr('some_number',2). it fires another event with change of 'some_number' from "2" (string) to 2 (integer)
        // This wont happen again with this normalization
        can.route.attr = function(attr,val) {
	var type = typeof attr,newArguments;
	// Reading
            if (val === undefined) {
	newArguments = arguments;
	// Sets object
}
else if (type !== "string" && type !== "number") {
	newArguments = [stringify(attr),val];
	// Sets key - value
}
else {
	newArguments = [attr,stringify(val)];
}
return can.route.data.attr.apply(can.route.data,newArguments);};
	var // Deparameterizes the portion of the hash of interest and assign the
        // values to the `can.route.data` removing existing values no longer in the hash.
        // setState is called typically by hashchange which fires asynchronously
        // So it's possible that someone started changing the data before the
        // hashchange event fired.  For this reason,it will not set the route data
        // if the data is changing or the hash already matches the hash that was set.
        setState = can.route.setState = function() {
	var hash = can.route._call("matchingPartOfURL");
	var oldParams = curParams;
	curParams = can.route.deparam(hash);
	// if the hash data is currently changing,or
            // the hash is what we set it to anyway,do NOT change the hash
            if (!changingData || hash !== lastHash) {
	can.batch.start();
	for (var attr in oldParams) {
	if (!curParams[attr]) {
	can.route.removeAttr(attr);
}
}can.route.attr(curParams);
	// trigger a url change so its possible to live-bind on url-based changes
                can.batch.trigger(eventsObject,"__url",[hash,lastHash]);
	can.batch.stop();
}
};
	return can.route;})(__m2,__m18,__m22,__m35);
	// ## control/route/route.js
    var __m36 = (function(can) {
	// ## control/route.js
        // _Controller route integration._

        can.Control.processors.route = function(el,event,selector,funcName,controller) {
	selector = selector || "";
	if (!can.route.routes[selector]) {
	if (selector[0] === '/') {
	selector = selector.substring(1);
}
can.route(selector);}var batchNum,check = function(ev,attr,how) {
	if (can.route.attr('route') === (selector) &&
                        (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
	batchNum = ev.batchNum;
	var d = can.route.attr();
	delete d.route;
	if (can.isFunction(controller[funcName])) {
	controller[funcName](d);
}
else {
	controller[controller[funcName]](d);
}
}};
	can.route.bind('change',check);
	return function() {
	can.route.unbind('change',check);
}
;};
	return can;})(__m2,__m34,__m14);
	window['can'] = __m3;
	return __m3;
	//})();});
	(function () {
	/**
	 * @preserve FastClick:polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true,node:true*/
	/*global define,Event,Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {
	Element
}
layer The layer to listen on
	 * @param {
	Object
}
[options= {
	}] The options to override the defaults
	 */
	function FastClick(layer,options) {
	var oldOnClick;
	options = options || {
	};
	/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;
	/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;
	/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;
	/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;
	/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;
	/**
		 * ID of the last touch,retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;
	/**
		 * Touchmove boundary,beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;
	/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;
	/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;
	/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;
	if (FastClick.notNeeded(layer)) {
	return;
}
// Some old versions of Android don't have Function.prototype.bind
		function bind(method,context) {
	return function() {
	return method.apply(context,arguments);
}
;}var methods = ['onMouse','onClick','onTouchStart','onTouchMove','onTouchEnd','onTouchCancel'];
	var context = this;
	for (var i = 0,l = methods.length;
	i < l;
	i++) {
	context[methods[i]] = bind(context[methods[i]],context);
}
// Set up event handlers as required
		if (deviceIsAndroid) {
	layer.addEventListener('mouseover',this.onMouse,true);
	layer.addEventListener('mousedown',this.onMouse,true);
	layer.addEventListener('mouseup',this.onMouse,true);
}
layer.addEventListener('click',this.onClick,true);
	layer.addEventListener('touchstart',this.onTouchStart,false);
	layer.addEventListener('touchmove',this.onTouchMove,false);
	layer.addEventListener('touchend',this.onTouchEnd,false);
	layer.addEventListener('touchcancel',this.onTouchCancel,false);
	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
	layer.removeEventListener = function(type,callback,capture) {
	var rmv = Node.prototype.removeEventListener;
	if (type === 'click') {
	rmv.call(layer,type,callback.hijacked || callback,capture);
}
else {
	rmv.call(layer,type,callback,capture);
}
};
	layer.addEventListener = function(type,callback,capture) {
	var adv = Node.prototype.addEventListener;
	if (type === 'click') {
	adv.call(layer,type,callback.hijacked || (callback.hijacked = function(event) {
	if (!event.propagationStopped) {
	callback(event);
}
}),capture);}else {
	adv.call(layer,type,callback,capture);
}
};}// If a handler is already declared in the element's onclick attribute,it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {
	// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
	layer.addEventListener('click',function(event) {
	oldOnClick(event);
}
,false);
	layer.onclick = null;}}/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {
	EventTarget|Element
}
target Target DOM element
	 * @returns {
	boolean
}
Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
	switch (target.nodeName.toLowerCase()) {
	// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':case 'select':case 'textarea':if (target.disabled) {
	return true;
}
break;
	case 'input':// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
	return true;
}
break;
	case 'label':case 'iframe':// iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':return true;
}
return (/\bneedsclick\b/).test(target.className);};
	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {
	EventTarget|Element
}
target Target DOM element
	 * @returns {
	boolean
}
Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':return true;
	case 'select':return !deviceIsAndroid;
	case 'input':switch (target.type) {
	case 'button':case 'checkbox':case 'file':case 'image':case 'radio':case 'submit':return false;
}
// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
	default:return (/\bneedsfocus\b/).test(target.className);
}
};
	/**
	 * Send a click event to the specified element.
	 *
	 * @param {
	EventTarget|Element
}
targetElement
	 * @param {
	Event
}
event
	 */
	FastClick.prototype.sendClick = function(targetElement,event) {
	var clickEvent,touch;
	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
	document.activeElement.blur();
}
touch = event.changedTouches[0];
	// Synthesise a click event,with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
}
;FastClick.prototype.determineEventType = function(targetElement) {
	//Issue #159:Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
	return 'mousedown';
}
return 'click';};
	/**
	 * @param {
	EventTarget|Element
}
targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
	var length;
	// Issue #160:on iOS 7,some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties,but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
	length = targetElement.value.length;
	targetElement.setSelectionRange(length,length);
}
else {
	targetElement.focus();
}
};
	/**
	 * Check whether the given target element is a child of a scrollable layer and if so,set a flag on it.
	 *
	 * @param {
	EventTarget|Element
}
targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
	var scrollParent,parentElement;
	scrollParent = targetElement.fastClickScrollParent;
	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
	parentElement = targetElement;
	do {
	if (parentElement.scrollHeight > parentElement.offsetHeight) {
	scrollParent = parentElement;
	targetElement.fastClickScrollParent = parentElement;
	break;
}
parentElement = parentElement.parentElement;}while (parentElement);}// Always update the scroll top tracker if possible.
		if (scrollParent) {
	scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
}
};
	/**
	 * @param {
	EventTarget
}
targetElement
	 * @returns {
	Element|EventTarget
}
*/
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
	return eventTarget.parentNode;
}
return eventTarget;};
	/**
	 * On touch start,record the position and scroll offset.
	 *
	 * @param {
	Event
}
event
	 * @returns {
	boolean
}
*/
	FastClick.prototype.onTouchStart = function(event) {
	var targetElement,touch,selection;
	// Ignore multiple touches,otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
	return true;
}
targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];
	if (deviceIsIOS) {
	// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
	if (selection.rangeCount && !selection.isCollapsed) {
	return true;
}
if (!deviceIsIOS4) {
	// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):// when the user next taps anywhere else on the page,new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly,there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52),so this fix is unavailable on that platform.
				// Issue 120:touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,// which causes all touch events to be ignored. As this block only applies to iOS,and iOS identifiers are always long,// random integers,it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
	event.preventDefault();
	return false;
}
this.lastTouchIdentifier = touch.identifier;
	// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling:touch) and:// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started,causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
}
}this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;
	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;
	// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
	event.preventDefault();
}
return true;};
	/**
	 * Based on a touchmove event object,check whether the touch has moved past a boundary since it started.
	 *
	 * @param {
	Event
}
event
	 * @returns {
	boolean
}
*/
	FastClick.prototype.touchHasMoved = function(event) {
	var touch = event.changedTouches[0],boundary = this.touchBoundary;
	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
	return true;
}
return false;};
	/**
	 * Update the last position.
	 *
	 * @param {
	Event
}
event
	 * @returns {
	boolean
}
*/
	FastClick.prototype.onTouchMove = function(event) {
	if (!this.trackingClick) {
	return true;
}
// If the touch has moved,cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
	this.trackingClick = false;
	this.targetElement = null;
}
return true;};
	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {
	EventTarget|HTMLLabelElement
}
labelElement
	 * @returns {
	Element|null
}
*/
	FastClick.prototype.findControl = function(labelElement) {
	// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
	return labelElement.control;
}
// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
	return document.getElementById(labelElement.htmlFor);
}
// If no for attribute exists,attempt to retrieve the first labellable descendant element
		// the list of which is defined here:http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea');
}
;/**
	 * On touch end,determine whether to send a click event at once.
	 *
	 * @param {
	Event
}
event
	 * @returns {
	boolean
}
*/
	FastClick.prototype.onTouchEnd = function(event) {
	var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement = this.targetElement;
	if (!this.trackingClick) {
	return true;
}
// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
	this.cancelNextClick = true;
	return true;
}
if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
	return true;
}
// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;
	this.lastClickTime = event.timeStamp;
	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;
	// On some iOS devices,the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll,and has to be re-detected manually. Note that
		// for this to function correctly,it must be called *after* the event target is checked!
		// See issue #57;
	also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
	touch = event.changedTouches[0];
	// In certain cases arguments of elementFromPoint can be negative,so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset,touch.pageY - window.pageYOffset) || targetElement;
	targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
}
targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
	forElement = this.findControl(targetElement);
	if (forElement) {
	this.focus(targetElement);
	if (deviceIsAndroid) {
	return false;
}
targetElement = forElement;}}else if (this.needsFocus(targetElement)) {
	// Case 1:If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2:Without this exception for input elements tapped when the document is contained in an iframe,then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
	this.targetElement = null;
	return false;
}
this.focus(targetElement);
	this.sendClick(targetElement,event);
	// Select elements need the event to go through on iOS 4,otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6,iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
	this.targetElement = null;
	event.preventDefault();
}
return false;}if (deviceIsIOS && !deviceIsIOS4) {
	// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
	if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
	return true;
}
}// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
	event.preventDefault();
	this.sendClick(targetElement,event);
}
return false;};
	/**
	 * On touch cancel,stop tracking the click.
	 *
	 * @returns {
	void
}
*/
	FastClick.prototype.onTouchCancel = function() {
	this.trackingClick = false;
	this.targetElement = null;
}
;/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {
	Event
}
event
	 * @returns {
	boolean
}
*/
	FastClick.prototype.onMouse = function(event) {
	// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
	return true;
}
if (event.forwardedTouchEvent) {
	return true;
}
// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
	return true;
}
// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled,prevent non-touch click events from triggering actions,// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
	// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
	event.stopImmediatePropagation();
}
else {
	// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
}
// Cancel the event
			event.stopPropagation();
	event.preventDefault();
	return false;
}
// If the mouse event is permitted,return true for the action to go through.
		return true;
}
;/**
	 * On actual clicks,determine whether this is a touch-generated click,a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication),or
	 * an actual click which should be permitted.
	 *
	 * @param {
	Event
}
event
	 * @returns {
	boolean
}
*/
	FastClick.prototype.onClick = function(event) {
	var permitted;
	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case,set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
	this.targetElement = null;
	this.trackingClick = false;
	return true;
}
// Very odd behaviour on iOS (issue #18):if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
	return true;
}
permitted = this.onMouse(event);
	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
	this.targetElement = null;
}
// If clicks are permitted,return true for the action to go through.
		return permitted;
}
;/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {
	void
}
*/
	FastClick.prototype.destroy = function() {
	var layer = this.layer;
	if (deviceIsAndroid) {
	layer.removeEventListener('mouseover',this.onMouse,true);
	layer.removeEventListener('mousedown',this.onMouse,true);
	layer.removeEventListener('mouseup',this.onMouse,true);
}
layer.removeEventListener('click',this.onClick,true);
	layer.removeEventListener('touchstart',this.onTouchStart,false);
	layer.removeEventListener('touchmove',this.onTouchMove,false);
	layer.removeEventListener('touchend',this.onTouchEnd,false);
	layer.removeEventListener('touchcancel',this.onTouchCancel,false);};
	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {
	Element
}
layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
	var metaViewport;
	var chromeVersion;
	var blackberryVersion;
	var firefoxVersion;
	// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
	return true;
}
// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	if (chromeVersion) {
	if (deviceIsAndroid) {
	metaViewport = document.querySelector('meta[name=viewport]');
	if (metaViewport) {
	// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
	return true;
}
// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
	return true;
}
}// Chrome desktop doesn't need FastClick (issue #15)}else {
	return true;
}
}if (deviceIsBlackBerry10) {
	blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
	// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
	metaViewport = document.querySelector('meta[name=viewport]');
	if (metaViewport) {
	// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
	return true;
}
// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
	return true;
}
}}}// IE10 with -ms-touch-action:none or manipulation,which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
	return true;
}
// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	if (firefoxVersion >= 27) {
	// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
	if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
	return true;
}
}// IE11:prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
	return true;
}
return false;};
	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {
	Element
}
layer The layer to listen on
	 * @param {
	Object
}
[options= {
	}] The options to override the defaults
	 */
	FastClick.attach = function(layer,options) {
	return new FastClick(layer,options);
}
;if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
	// AMD. Register as an anonymous module.
		define('fastclick',[],function() {
	return FastClick;
}
);}else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
}
else {
	window.FastClick = FastClick;
}
}());
	// Zepto.cookie plugin
// 
// Copyright (c) 2010,2012 
// @author Klaus Hartl (stilbuero.de)
// @author Daniel Lacy (daniellacy.com)
// 
// Dual licensed under the MIT and GPL licenses:// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html;
	(function($) {
	$.extend($.fn {
	cookie:function (key,value,options) {
	var days,time,result,decode

            // A key and value were given. Set cookie.
            if (arguments.length > 1 && String(value) !== "[object Object]") {
	// Enforce object
                options = $.extend( {
	},options)

                if (value === null || value === undefined) options.expires = -1

                if (typeof options.expires === 'number') {
	days = (options.expires * 24 * 60 * 60 * 1000)
                    time = options.expires = new Date()

                    time.setTime(time.getTime() + days)
}
value = String(value)

                return (document.cookie = [
                    encodeURIComponent(key),'=',options.raw ? value:encodeURIComponent(value),options.expires ? ';
	expires=' + options.expires.toUTCString():'',options.path ? ';
	path=' + options.path:'',options.domain ? ';
	domain=' + options.domain:'',options.secure ? ';
	secure':''
                ].join(''))
}
// Key and possibly options given,get cookie
            options = value || {
	}decode = options.raw ? function (s) {
	return s
}
:decodeURIComponent

            return (result = new RegExp('(?:^|;
	)' + encodeURIComponent(key) + '=([^;
	]*)').exec(document.cookie)) ? decode(result[1]):null
}
})})(Zepto);
	define("zepto.cookie",["zepto"],function() {
	});
	//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas,DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
	var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n) {
	return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)
}
;"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";
	var g=function(n,t,r) {
	if(t===void 0)return n;
	switch(null==r?3:r) {
	case 1:return function(r) {
	return n.call(t,r)
}
;case 2:return function(r,e) {
	return n.call(t,r,e)
}
;case 3:return function(r,e,u) {
	return n.call(t,r,e,u)
}
;case 4:return function(r,e,u,i) {
	return n.call(t,r,e,u,i)
}
}return function() {
	return n.apply(t,arguments)
}
};
	h.iteratee=function(n,t,r) {
	return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)
}
,h.each=h.forEach=function(n,t,r) {
	if(null==n)return n;
	t=g(t,r);
	var e,u=n.length;
	if(u===+u)for(e=0;
	u>e;
	e++)t(n[e],e,n);
	else {
	var i=h.keys(n);
	for(e=0,u=i.length;
	u>e;
	e++)t(n[i[e]],i[e],n)
}
return n},h.map=h.collect=function(n,t,r) {
	if(null==n)return[];
	t=h.iteratee(t,r);
	for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;
	i>o;
	o++)e=u?u[o]:o,a[o]=t(n[e],e,n);
	return a
}
;var v="Reduce of empty array with no initial value";
	h.reduce=h.foldl=h.inject=function(n,t,r,e) {
	null==n&&(n=[]),t=g(t,e,4);
	var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;
	if(arguments.length<3) {
	if(!a)throw new TypeError(v);
	r=n[i?i[o++]:o++]
}
for(;
	a>o;
	o++)u=i?i[o]:o,r=t(r,n[u],u,n);
	return r},h.reduceRight=h.foldr=function(n,t,r,e) {
	null==n&&(n=[]),t=g(t,e,4);
	var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;
	if(arguments.length<3) {
	if(!a)throw new TypeError(v);
	r=n[i?i[--a]:--a]
}
for(;
	a--;
	)u=i?i[a]:a,r=t(r,n[u],u,n);
	return r},h.find=h.detect=function(n,t,r) {
	var e;
	return t=h.iteratee(t,r),h.some(n,function(n,r,u) {
	return t(n,r,u)?(e=n,!0):void 0
}
),e},h.filter=h.select=function(n,t,r) {
	var e=[];
	return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u) {
	t(n,r,u)&&e.push(n)
}
),e)},h.reject=function(n,t,r) {
	return h.filter(n,h.negate(h.iteratee(t)),r)
}
,h.every=h.all=function(n,t,r) {
	if(null==n)return!0;
	t=h.iteratee(t,r);
	var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;
	for(e=0;
	a>e;
	e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;
	return!0
}
,h.some=h.any=function(n,t,r) {
	if(null==n)return!1;
	t=h.iteratee(t,r);
	var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;
	for(e=0;
	a>e;
	e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;
	return!1
}
,h.contains=h.include=function(n,t) {
	return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)
}
,h.invoke=function(n,t) {
	var r=a.call(arguments,2),e=h.isFunction(t);
	return h.map(n,function(n) {
	return(e?t:n[t]).apply(n,r)
}
)},h.pluck=function(n,t) {
	return h.map(n,h.property(t))
}
,h.where=function(n,t) {
	return h.filter(n,h.matches(t))
}
,h.findWhere=function(n,t) {
	return h.find(n,h.matches(t))
}
,h.max=function(n,t,r) {
	var e,u,i=-1/0,a=-1/0;
	if(null==t&&null!=n) {
	n=n.length===+n.length?n:h.values(n);
	for(var o=0,l=n.length;
	l>o;
	o++)e=n[o],e>i&&(i=e)
}
else t=h.iteratee(t,r),h.each(n,function(n,r,e) {
	u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)
}
);
	return i},h.min=function(n,t,r) {
	var e,u,i=1/0,a=1/0;
	if(null==t&&null!=n) {
	n=n.length===+n.length?n:h.values(n);
	for(var o=0,l=n.length;
	l>o;
	o++)e=n[o],i>e&&(i=e)
}
else t=h.iteratee(t,r),h.each(n,function(n,r,e) {
	u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)
}
);
	return i},h.shuffle=function(n) {
	for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;
	e>i;
	i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];
	return u
}
,h.sample=function(n,t,r) {
	return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))
}
,h.sortBy=function(n,t,r) {
	return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e) {
	return {
	value:n,index:r,criteria:t(n,r,e)
}
}).sort(function(n,t) {
	var r=n.criteria,e=t.criteria;
	if(r!==e) {
	if(r>e||r===void 0)return 1;
	if(e>r||e===void 0)return-1
}
return n.index-t.index}),"value")};
	var m=function(n) {
	return function(t,r,e) {
	var u= {
	};
	return r=h.iteratee(r,e),h.each(t,function(e,i) {
	var a=r(e,i,t);
	n(u,e,a)
}
),u}};
	h.groupBy=m(function(n,t,r) {
	h.has(n,r)?n[r].push(t):n[r]=[t]
}
),h.indexBy=m(function(n,t,r) {
	n[r]=t
}
),h.countBy=m(function(n,t,r) {
	h.has(n,r)?n[r]++:n[r]=1
}
),h.sortedIndex=function(n,t,r,e) {
	r=h.iteratee(r,e,1);
	for(var u=r(t),i=0,a=n.length;
	a>i;
	) {
	var o=i+a>>>1;
	r(n[o])<u?i=o+1:a=o
}
return i},h.toArray=function(n) {
	return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]
}
,h.size=function(n) {
	return null==n?0:n.length===+n.length?n.length:h.keys(n).length
}
,h.partition=function(n,t,r) {
	t=h.iteratee(t,r);
	var e=[],u=[];
	return h.each(n,function(n,r,i) {
	(t(n,r,i)?e:u).push(n)
}
),[e,u]},h.first=h.head=h.take=function(n,t,r) {
	return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)
}
,h.initial=function(n,t,r) {
	return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))
}
,h.last=function(n,t,r) {
	return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))
}
,h.rest=h.tail=h.drop=function(n,t,r) {
	return a.call(n,null==t||r?1:t)
}
,h.compact=function(n) {
	return h.filter(n,h.identity)
}
;var y=function(n,t,r,e) {
	if(t&&h.every(n,h.isArray))return o.apply(e,n);
	for(var u=0,a=n.length;
	a>u;
	u++) {
	var l=n[u];
	h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)
}
return e};
	h.flatten=function(n,t) {
	return y(n,t,!1,[])
}
,h.without=function(n) {
	return h.difference(n,a.call(arguments,1))
}
,h.uniq=h.unique=function(n,t,r,e) {
	if(null==n)return[];
	h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));
	for(var u=[],i=[],a=0,o=n.length;
	o>a;
	a++) {
	var l=n[a];
	if(t)a&&i===l||u.push(l),i=l;
	else if(r) {
	var c=r(l,a,n);
	h.indexOf(i,c)<0&&(i.push(c),u.push(l))
}
else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function() {
	return h.uniq(y(arguments,!0,!0,[]))
}
,h.intersection=function(n) {
	if(null==n)return[];
	for(var t=[],r=arguments.length,e=0,u=n.length;
	u>e;
	e++) {
	var i=n[e];
	if(!h.contains(t,i)) {
	for(var a=1;
	r>a&&h.contains(arguments[a],i);
	a++);
	a===r&&t.push(i)
}
}return t},h.difference=function(n) {
	var t=y(a.call(arguments,1),!0,!0,[]);
	return h.filter(n,function(n) {
	return!h.contains(t,n)
}
)},h.zip=function(n) {
	if(null==n)return[];
	for(var t=h.max(arguments,"length").length,r=Array(t),e=0;
	t>e;
	e++)r[e]=h.pluck(arguments,e);
	return r
}
,h.object=function(n,t) {
	if(null==n)return {
	};
	for(var r= {
	},e=0,u=n.length;
	u>e;
	e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];
	return r
}
,h.indexOf=function(n,t,r) {
	if(null==n)return-1;
	var e=0,u=n.length;
	if(r) {
	if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;
	e=0>r?Math.max(0,u+r):r
}
for(;
	u>e;
	e++)if(n[e]===t)return e;
	return-1},h.lastIndexOf=function(n,t,r) {
	if(null==n)return-1;
	var e=n.length;
	for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));
	--e>=0;
	)if(n[e]===t)return e;
	return-1
}
,h.range=function(n,t,r) {
	arguments.length<=1&&(t=n||0,n=0),r=r||1;
	for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;
	e>i;
	i++,n+=r)u[i]=n;
	return u
}
;var d=function() {
	};
	h.bind=function(n,t) {
	var r,e;
	if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));
	if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");
	return r=a.call(arguments,2),e=function() {
	if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));
	d.prototype=n.prototype;
	var u=new d;
	d.prototype=null;
	var i=n.apply(u,r.concat(a.call(arguments)));
	return h.isObject(i)?i:u
}
},h.partial=function(n) {
	var t=a.call(arguments,1);
	return function() {
	for(var r=0,e=t.slice(),u=0,i=e.length;
	i>u;
	u++)e[u]===h&&(e[u]=arguments[r++]);
	for(;
	r<arguments.length;
	)e.push(arguments[r++]);
	return n.apply(this,e)
}
},h.bindAll=function(n) {
	var t,r,e=arguments.length;
	if(1>=e)throw new Error("bindAll must be passed function names");
	for(t=1;
	e>t;
	t++)r=arguments[t],n[r]=h.bind(n[r],n);
	return n
}
,h.memoize=function(n,t) {
	var r=function(e) {
	var u=r.cache,i=t?t.apply(this,arguments):e;
	return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]
}
;return r.cache= {
	},r
}
,h.delay=function(n,t) {
	var r=a.call(arguments,2);
	return setTimeout(function() {
	return n.apply(null,r)
}
,t)},h.defer=function(n) {
	return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))
}
,h.throttle=function(n,t,r) {
	var e,u,i,a=null,o=0;
	r||(r= {
	});
	var l=function() {
	o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)
}
;return function() {
	var c=h.now();
	o||r.leading!==!1||(o=c);
	var f=t-(c-o);
	return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i
}
},h.debounce=function(n,t,r) {
	var e,u,i,a,o,l=function() {
	var c=h.now()-a;
	t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))
}
;return function() {
	i=this,u=arguments,a=h.now();
	var c=r&&!e;
	return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o
}
},h.wrap=function(n,t) {
	return h.partial(t,n)
}
,h.negate=function(n) {
	return function() {
	return!n.apply(this,arguments)
}
},h.compose=function() {
	var n=arguments,t=n.length-1;
	return function() {
	for(var r=t,e=n[t].apply(this,arguments);
	r--;
	)e=n[r].call(this,e);
	return e
}
},h.after=function(n,t) {
	return function() {
	return--n<1?t.apply(this,arguments):void 0
}
},h.before=function(n,t) {
	var r;
	return function() {
	return--n>0?r=t.apply(this,arguments):t=null,r
}
},h.once=h.partial(h.before,2),h.keys=function(n) {
	if(!h.isObject(n))return[];
	if(s)return s(n);
	var t=[];
	for(var r in n)h.has(n,r)&&t.push(r);
	return t
}
,h.values=function(n) {
	for(var t=h.keys(n),r=t.length,e=Array(r),u=0;
	r>u;
	u++)e[u]=n[t[u]];
	return e
}
,h.pairs=function(n) {
	for(var t=h.keys(n),r=t.length,e=Array(r),u=0;
	r>u;
	u++)e[u]=[t[u],n[t[u]]];
	return e
}
,h.invert=function(n) {
	for(var t= {
	},r=h.keys(n),e=0,u=r.length;
	u>e;
	e++)t[n[r[e]]]=r[e];
	return t
}
,h.functions=h.methods=function(n) {
	var t=[];
	for(var r in n)h.isFunction(n[r])&&t.push(r);
	return t.sort()
}
,h.extend=function(n) {
	if(!h.isObject(n))return n;
	for(var t,r,e=1,u=arguments.length;
	u>e;
	e++) {
	t=arguments[e];
	for(r in t)c.call(t,r)&&(n[r]=t[r])
}
return n},h.pick=function(n,t,r) {
	var e,u= {
	};
	if(null==n)return u;
	if(h.isFunction(t)) {
	t=g(t,r);
	for(e in n) {
	var i=n[e];
	t(i,e,n)&&(u[e]=i)
}
}else {
	var l=o.apply([],a.call(arguments,1));
	n=new Object(n);
	for(var c=0,f=l.length;
	f>c;
	c++)e=l[c],e in n&&(u[e]=n[e])
}
return u},h.omit=function(n,t,r) {
	if(h.isFunction(t))t=h.negate(t);
	else {
	var e=h.map(o.apply([],a.call(arguments,1)),String);
	t=function(n,t) {
	return!h.contains(e,t)
}
}return h.pick(n,t,r)},h.defaults=function(n) {
	if(!h.isObject(n))return n;
	for(var t=1,r=arguments.length;
	r>t;
	t++) {
	var e=arguments[t];
	for(var u in e)n[u]===void 0&&(n[u]=e[u])
}
return n},h.clone=function(n) {
	return h.isObject(n)?h.isArray(n)?n.slice():h.extend( {
	},n):n
}
,h.tap=function(n,t) {
	return t(n),n
}
;var b=function(n,t,r,e) {
	if(n===t)return 0!==n||1/n===1/t;
	if(null==n||null==t)return n===t;
	n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);
	var u=l.call(n);
	if(u!==l.call(t))return!1;
	switch(u) {
	case"[object RegExp]":case"[object String]":return""+n==""+t;
	case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;
	case"[object Date]":case"[object Boolean]":return+n===+t
}
if("object"!=typeof n||"object"!=typeof t)return!1;
	for(var i=r.length;
	i--;
	)if(r[i]===n)return e[i]===t;
	var a=n.constructor,o=t.constructor;
	if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;
	r.push(n),e.push(t);
	var c,f;
	if("[object Array]"===u) {
	if(c=n.length,f=c===t.length)for(;
	c--&&(f=b(n[c],t[c],r,e));
	);
}
else {
	var s,p=h.keys(n);
	if(c=p.length,f=h.keys(t).length===c)for(;
	c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e));
	);
}
return r.pop(),e.pop(),f};
	h.isEqual=function(n,t) {
	return b(n,t,[],[])
}
,h.isEmpty=function(n) {
	if(null==n)return!0;
	if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;
	for(var t in n)if(h.has(n,t))return!1;
	return!0
}
,h.isElement=function(n) {
	return!(!n||1!==n.nodeType)
}
,h.isArray=f||function(n) {
	return"[object Array]"===l.call(n)
}
,h.isObject=function(n) {
	var t=typeof n;
	return"function"===t||"object"===t&&!!n
}
,h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n) {
	h["is"+n]=function(t) {
	return l.call(t)==="[object "+n+"]"
}
}),h.isArguments(arguments)||(h.isArguments=function(n) {
	return h.has(n,"callee")
}
),"function"!=typeof/./&&(h.isFunction=function(n) {
	return"function"==typeof n||!1
}
),h.isFinite=function(n) {
	return isFinite(n)&&!isNaN(parseFloat(n))
}
,h.isNaN=function(n) {
	return h.isNumber(n)&&n!==+n
}
,h.isBoolean=function(n) {
	return n===!0||n===!1||"[object Boolean]"===l.call(n)
}
,h.isNull=function(n) {
	return null===n
}
,h.isUndefined=function(n) {
	return n===void 0
}
,h.has=function(n,t) {
	return null!=n&&c.call(n,t)
}
,h.noConflict=function() {
	return n._=t,this
}
,h.identity=function(n) {
	return n
}
,h.constant=function(n) {
	return function() {
	return n
}
},h.noop=function() {
	},h.property=function(n) {
	return function(t) {
	return t[n]
}
},h.matches=function(n) {
	var t=h.pairs(n),r=t.length;
	return function(n) {
	if(null==n)return!r;
	n=new Object(n);
	for(var e=0;
	r>e;
	e++) {
	var u=t[e],i=u[0];
	if(u[1]!==n[i]||!(i in n))return!1
}
return!0}},h.times=function(n,t,r) {
	var e=Array(Math.max(0,n));
	t=g(t,r,1);
	for(var u=0;
	n>u;
	u++)e[u]=t(u);
	return e
}
,h.random=function(n,t) {
	return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))
}
,h.now=Date.now||function() {
	return(new Date).getTime()
}
;var _= {
	"&":"&amp;
	","<":"&lt;
	",">":"&gt;
	",'"':"&quot;
	","'":"&#x27;
	","`":"&#x60;
	"
}
,w=h.invert(_),j=function(n) {
	var t=function(t) {
	return n[t]
}
,r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");
	return function(n) {
	return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n
}
};
	h.escape=j(_),h.unescape=j(w),h.result=function(n,t) {
	if(null==n)return void 0;
	var r=n[t];
	return h.isFunction(r)?n[t]():r
}
;var x=0;
	h.uniqueId=function(n) {
	var t=++x+"";
	return n?n+t:t
}
,h.templateSettings= {
	evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g
}
;var A=/(.)^/,k= {
	"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"
}
,O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n) {
	return"\\"+k[n]
}
;h.template=function(n,t,r) {
	!t&&r&&(t=r),t=h.defaults( {
	},t,h.templateSettings);
	var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";
	n.replace(e,function(t,r,e,a,o) {
	return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';
	\n"+a+"\n__p+='"),t
}
),i+="';
	\n",t.variable||(i="with(obj|| {
	}) {
	\n"+i+"
}
\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function() {
	__p+=__j.call(arguments,'');
}
;\n"+i+"return __p;
	\n";
	try {
	var a=new Function(t.variable||"obj","_",i)
}
catch(o) {
	throw o.source=i,o
}
var l=function(n) {
	return a.call(this,n,h)
}
,c=t.variable||"obj";
	return l.source="function("+c+") {
	\n"+i+"
}
",l},h.chain=function(n) {
	var t=h(n);
	return t._chain=!0,t
}
;var E=function(n) {
	return this._chain?h(n).chain():n
}
;h.mixin=function(n) {
	h.each(h.functions(n),function(t) {
	var r=h[t]=n[t];
	h.prototype[t]=function() {
	var n=[this._wrapped];
	return i.apply(n,arguments),E.call(this,r.apply(h,n))
}
})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n) {
	var t=r[n];
	h.prototype[n]=function() {
	var r=this._wrapped;
	return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)
}
}),h.each(["concat","join","slice"],function(n) {
	var t=r[n];
	h.prototype[n]=function() {
	return E.call(this,t.apply(this._wrapped,arguments))
}
}),h.prototype.value=function() {
	return this._wrapped
}
,"function"==typeof define&&define.amd&&define("underscore",[],function() {
	return h
}
)}).call(this);
	//# sourceMappingURL=underscore-min.map;
	!function(e,n) {
	function r(e,n) {
	var r,t,u=e.toLowerCase();
	for(n=[].concat(n),r=0;
	r<n.length;
	r+=1)if(t=n[r]) {
	if(t.test&&t.test(e))return!0;
	if(t.toLowerCase()===u)return!0
}
}var t=n.prototype.trim,u=n.prototype.trimRight,i=n.prototype.trimLeft,l=function(e) {
	return 1*e||0
}
,o=function(e,n) {
	if(1>n)return"";
	for(var r="";
	n>0;
	)1&n&&(r+=e),n>>=1,e+=e;
	return r
}
,a=[].slice,c=function(e) {
	return null==e?"\\s":e.source?e.source:"["+g.escapeRegExp(e)+"]"
}
,s= {
	lt:"<",gt:">",quot:'"',amp:"&",apos:"'"
}
,f= {
	};
	for(var p in s)f[s[p]]=p;
	f["'"]="#39";
	var h=function() {
	function e(e) {
	return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()
}
var r=o,t=function() {
	return t.cache.hasOwnProperty(arguments[0])||(t.cache[arguments[0]]=t.parse(arguments[0])),t.format.call(null,t.cache[arguments[0]],arguments)
}
;return t.format=function(t,u) {
	var i,l,o,a,c,s,f,p=1,g=t.length,d="",m=[];
	for(l=0;
	g>l;
	l++)if(d=e(t[l]),"string"===d)m.push(t[l]);
	else if("array"===d) {
	if(a=t[l],a[2])for(i=u[p],o=0;
	o<a[2].length;
	o++) {
	if(!i.hasOwnProperty(a[2][o]))throw new Error(h('[_.sprintf] property "%s" does not exist',a[2][o]));
	i=i[a[2][o]]
}
else i=a[1]?u[a[1]]:u[p++];
	if(/[^s]/.test(a[8])&&"number"!=e(i))throw new Error(h("[_.sprintf] expecting number but found %s",e(i)));
	switch(a[8]) {
	case"b":i=i.toString(2);
	break;
	case"c":i=n.fromCharCode(i);
	break;
	case"d":i=parseInt(i,10);
	break;
	case"e":i=a[7]?i.toExponential(a[7]):i.toExponential();
	break;
	case"f":i=a[7]?parseFloat(i).toFixed(a[7]):parseFloat(i);
	break;
	case"o":i=i.toString(8);
	break;
	case"s":i=(i=n(i))&&a[7]?i.substring(0,a[7]):i;
	break;
	case"u":i=Math.abs(i);
	break;
	case"x":i=i.toString(16);
	break;
	case"X":i=i.toString(16).toUpperCase()
}
i=/[def]/.test(a[8])&&a[3]&&i>=0?"+"+i:i,s=a[4]?"0"==a[4]?"0":a[4].charAt(1):" ",f=a[6]-n(i).length,c=a[6]?r(s,f):"",m.push(a[5]?i+c:c+i)}return m.join("")},t.cache= {
	},t.parse=function(e) {
	for(var n=e,r=[],t=[],u=0;
	n;) {
	if(null!==(r=/^[^\x25]+/.exec(n)))t.push(r[0]);
	else if(null!==(r=/^\x25 {
	2
}
/.exec(n)))t.push("%");
	else {
	if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)))throw new Error("[_.sprintf] huh?");
	if(r[2]) {
	u|=1;
	var i=[],l=r[2],o=[];
	if(null===(o=/^([a-z_][a-z_\d]*)/i.exec(l)))throw new Error("[_.sprintf] huh?");
	for(i.push(o[1]);
	""!==(l=l.substring(o[0].length));
	)if(null!==(o=/^\.([a-z_][a-z_\d]*)/i.exec(l)))i.push(o[1]);
	else {
	if(null===(o=/^\[(\d+)\]/.exec(l)))throw new Error("[_.sprintf] huh?");
	i.push(o[1])
}
r[2]=i}else u|=2;
	if(3===u)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
	t.push(r)}n=n.substring(r[0].length)}return t},t}(),g= {
	VERSION:"2.4.0",isBlank:function(e) {
	return null==e&&(e=""),/^\s*$/.test(e)
}
,stripTags:function(e) {
	return null==e?"":n(e).replace(/<\/?[^>]+>/g,"")
}
,capitalize:function(e) {
	return e=null==e?"":n(e),e.charAt(0).toUpperCase()+e.slice(1)
}
,chop:function(e,r) {
	return null==e?[]:(e=n(e),r=~~r,r>0?e.match(new RegExp(". {
	1,"+r+"
}
","g")):[e])},clean:function(e) {
	return g.strip(e).replace(/\s+/g," ")
}
,count:function(e,r) {
	if(null==e||null==r)return 0;
	e=n(e),r=n(r);
	for(var t=0,u=0,i=r.length;
	) {
	if(u=e.indexOf(r,u),-1===u)break;
	t++,u+=i
}
return t},chars:function(e) {
	return null==e?[]:n(e).split("")
}
,swapCase:function(e) {
	return null==e?"":n(e).replace(/\S/g,function(e) {
	return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()
}
)},escapeHTML:function(e) {
	return null==e?"":n(e).replace(/[&<>"']/g,function(e) {
	return"&"+f[e]+";
	"
}
)},unescapeHTML:function(e) {
	return null==e?"":n(e).replace(/\&([^;
	]+);
	/g,function(e,r) {
	var t;
	return r in s?s[r]:(t=r.match(/^#x([\da-fA-F]+)$/))?n.fromCharCode(parseInt(t[1],16)):(t=r.match(/^#(\d+)$/))?n.fromCharCode(~~t[1]):e
}
)},escapeRegExp:function(e) {
	return null==e?"":n(e).replace(/([.*+?^=!:$ {
	}()|[\]\/\\])/g,"\\$1")
}
,splice:function(e,n,r,t) {
	var u=g.chars(e);
	return u.splice(~~n,~~r,t),u.join("")
}
,insert:function(e,n,r) {
	return g.splice(e,n,0,r)
}
,include:function(e,r) {
	return""===r?!0:null==e?!1:-1!==n(e).indexOf(r)
}
,join:function() {
	var e=a.call(arguments),n=e.shift();
	return null==n&&(n=""),e.join(n)
}
,lines:function(e) {
	return null==e?[]:n(e).split("\n")
}
,reverse:function(e) {
	return g.chars(e).reverse().join("")
}
,startsWith:function(e,r) {
	return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(0,r.length)===r)
}
,endsWith:function(e,r) {
	return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(e.length-r.length)===r)
}
,succ:function(e) {
	return null==e?"":(e=n(e),e.slice(0,-1)+n.fromCharCode(e.charCodeAt(e.length-1)+1))
}
,titleize:function(e) {
	return null==e?"":(e=n(e).toLowerCase(),e.replace(/(?:^|\s|-)\S/g,function(e) {
	return e.toUpperCase()
}
))},camelize:function(e) {
	return g.trim(e).replace(/[-_\s]+(.)?/g,function(e,n) {
	return n?n.toUpperCase():""
}
)},underscored:function(e) {
	return g.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()
}
,dasherize:function(e) {
	return g.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()
}
,classify:function(e) {
	return g.capitalize(g.camelize(n(e).replace(/[\W_]/g," ")).replace(/\s/g,""))
}
,humanize:function(e) {
	return g.capitalize(g.underscored(e).replace(/_id$/,"").replace(/_/g," "))
}
,trim:function(e,r) {
	return null==e?"":!r&&t?t.call(e):(r=c(r),n(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))
}
,ltrim:function(e,r) {
	return null==e?"":!r&&i?i.call(e):(r=c(r),n(e).replace(new RegExp("^"+r+"+"),""))
}
,rtrim:function(e,r) {
	return null==e?"":!r&&u?u.call(e):(r=c(r),n(e).replace(new RegExp(r+"+$"),""))
}
,truncate:function(e,r,t) {
	return null==e?"":(e=n(e),t=t||"...",r=~~r,e.length>r?e.slice(0,r)+t:e)
}
,prune:function(e,r,t) {
	if(null==e)return"";
	if(e=n(e),r=~~r,t=null!=t?n(t):"...",e.length<=r)return e;
	var u=function(e) {
	return e.toUpperCase()!==e.toLowerCase()?"A":" "
}
,i=e.slice(0,r+1).replace(/.(?=\W*\w*$)/g,u);
	return i=i.slice(i.length-2).match(/\w\w/)?i.replace(/\s*\S+$/,""):g.rtrim(i.slice(0,i.length-1)),(i+t).length>e.length?e:e.slice(0,i.length)+t},words:function(e,n) {
	return g.isBlank(e)?[]:g.trim(e,n).split(n||/\s+/)
}
,pad:function(e,r,t,u) {
	e=null==e?"":n(e),r=~~r;
	var i=0;
	switch(t?t.length>1&&(t=t.charAt(0)):t=" ",u) {
	case"right":return i=r-e.length,e+o(t,i);
	case"both":return i=r-e.length,o(t,Math.ceil(i/2))+e+o(t,Math.floor(i/2));
	default:return i=r-e.length,o(t,i)+e
}
},lpad:function(e,n,r) {
	return g.pad(e,n,r)
}
,rpad:function(e,n,r) {
	return g.pad(e,n,r,"right")
}
,lrpad:function(e,n,r) {
	return g.pad(e,n,r,"both")
}
,sprintf:h,vsprintf:function(e,n) {
	return n.unshift(e),h.apply(null,n)
}
,toNumber:function(e,n) {
	return e?(e=g.trim(e),e.match(/^-?\d+(?:\.\d+)?$/)?l(l(e).toFixed(~~n)):0/0):0
}
,numberFormat:function(e,n,r,t) {
	if(isNaN(e)||null==e)return"";
	e=e.toFixed(~~n),t="string"==typeof t?t:",";
	var u=e.split("."),i=u[0],l=u[1]?(r||".")+u[1]:"";
	return i.replace(/(\d)(?=(?:\d {
	3
}
)+$)/g,"$1"+t)+l},strRight:function(e,r) {
	if(null==e)return"";
	e=n(e),r=null!=r?n(r):r;
	var t=r?e.indexOf(r):-1;
	return~t?e.slice(t+r.length,e.length):e
}
,strRightBack:function(e,r) {
	if(null==e)return"";
	e=n(e),r=null!=r?n(r):r;
	var t=r?e.lastIndexOf(r):-1;
	return~t?e.slice(t+r.length,e.length):e
}
,strLeft:function(e,r) {
	if(null==e)return"";
	e=n(e),r=null!=r?n(r):r;
	var t=r?e.indexOf(r):-1;
	return~t?e.slice(0,t):e
}
,strLeftBack:function(e,n) {
	if(null==e)return"";
	e+="",n=null!=n?""+n:n;
	var r=e.lastIndexOf(n);
	return~r?e.slice(0,r):e
}
,toSentence:function(e,n,r,t) {
	n=n||",",r=r||" and ";
	var u=e.slice(),i=u.pop();
	return e.length>2&&t&&(r=g.rtrim(n)+r),u.length?u.join(n)+r+i:i
}
,toSentenceSerial:function() {
	var e=a.call(arguments);
	return e[3]=!0,g.toSentence.apply(g,e)
}
,slugify:function(e) {
	if(null==e)return"";
	var r="膮脿谩盲芒茫氓忙膬膰臋猫茅毛锚矛铆茂卯艂艅貌贸枚么玫酶艣葯葲霉煤眉没帽莽偶藕",t="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",u=new RegExp(c(r),"g");
	return e=n(e).toLowerCase().replace(u,function(e) {
	var n=r.indexOf(e);
	return t.charAt(n)||"-"
}
),g.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,n) {
	return[n,e,n].join("")
}
,quote:function(e,n) {
	return g.surround(e,n||'"')
}
,unquote:function(e,n) {
	return n=n||'"',e[0]===n&&e[e.length-1]===n?e.slice(1,e.length-1):e
}
,exports:function() {
	var e= {
	};
	for(var n in this)this.hasOwnProperty(n)&&!n.match(/^(?:include|contains|reverse)$/)&&(e[n]=this[n]);
	return e
}
,repeat:function(e,r,t) {
	if(null==e)return"";
	if(r=~~r,null==t)return o(n(e),r);
	for(var u=[];
	r>0;
	u[--r]=e);
	return u.join(t)
}
,naturalCmp:function(e,r) {
	if(e==r)return 0;
	if(!e)return-1;
	if(!r)return 1;
	for(var t=/(\.\d+)|(\d+)|(\D+)/g,u=n(e).toLowerCase().match(t),i=n(r).toLowerCase().match(t),l=Math.min(u.length,i.length),o=0;
	l>o;
	o++) {
	var a=u[o],c=i[o];
	if(a!==c) {
	var s=parseInt(a,10);
	if(!isNaN(s)) {
	var f=parseInt(c,10);
	if(!isNaN(f)&&s-f)return s-f
}
return c>a?-1:1}}return u.length===i.length?u.length-i.length:r>e?-1:1},levenshtein:function(e,r) {
	if(null==e&&null==r)return 0;
	if(null==e)return n(r).length;
	if(null==r)return n(e).length;
	e=n(e),r=n(r);
	for(var t,u,i=[],l=0;
	l<=r.length;
	l++)for(var o=0;
	o<=e.length;
	o++)u=l&&o?e.charAt(o-1)===r.charAt(l-1)?t:Math.min(i[o],i[o-1],t)+1:l+o,t=i[o],i[o]=u;
	return i.pop()
}
,toBoolean:function(e,n,t) {
	return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=g.trim(e),r(e,n||["true","1"])?!0:r(e,t||["false","0"])?!1:void 0)
}
};
	g.strip=g.trim,g.lstrip=g.ltrim,g.rstrip=g.rtrim,g.center=g.lrpad,g.rjust=g.lpad,g.ljust=g.rpad,g.contains=g.include,g.q=g.quote,g.toBool=g.toBoolean,"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(module.exports=g),exports._s=g),"function"==typeof define&&define.amd&&define("underscore.string",[],function() {
	return g
}
),e._=e._|| {
	},e._.string=e._.str=g
}
(this,String);
	!function(a) {
	function b(a,b) {
	var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);
	return d<<16|65535&c
}
function c(a,b) {
	return a<<b|a>>>32-b
}
function d(a,d,e,f,g,h) {
	return b(c(b(b(d,a),b(f,h)),g),e)
}
function e(a,b,c,e,f,g,h) {
	return d(b&c|~b&e,a,b,f,g,h)
}
function f(a,b,c,e,f,g,h) {
	return d(b&e|c&~e,a,b,f,g,h)
}
function g(a,b,c,e,f,g,h) {
	return d(b^c^e,a,b,f,g,h)
}
function h(a,b,c,e,f,g,h) {
	return d(c^(b|~e),a,b,f,g,h)
}
function i(a,c) {
	a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;
	var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;
	for(d=0;
	d<a.length;
	d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);
	return[m,n,o,p]
}
function j(a) {
	var b,c="";
	for(b=0;
	b<32*a.length;
	b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);
	return c
}
function k(a) {
	var b,c=[];
	for(c[(a.length>>2)-1]=void 0,b=0;
	b<c.length;
	b+=1)c[b]=0;
	for(b=0;
	b<8*a.length;
	b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;
	return c
}
function l(a) {
	return j(i(k(a),8*a.length))
}
function m(a,b) {
	var c,d,e=k(a),f=[],g=[];
	for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;
	16>c;
	c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];
	return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))
}
function n(a) {
	var b,c,d="0123456789abcdef",e="";
	for(c=0;
	c<a.length;
	c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);
	return e
}
function o(a) {
	return unescape(encodeURIComponent(a))
}
function p(a) {
	return l(o(a))
}
function q(a) {
	return n(p(a))
}
function r(a,b) {
	return m(o(a),o(b))
}
function s(a,b) {
	return n(r(a,b))
}
function t(a,b,c) {
	return b?c?r(b,a):s(b,a):c?p(a):q(a)
}
"function"==typeof define&&define.amd?define('md5',[],function() {
	return t
}
):a.md5=t}(this);
	(function(win) {
	var store = {
	},doc = win.document,localStorageName = 'localStorage',scriptTag = 'script',storage

	store.disabled = false
	store.version = '1.3.17'
	store.set = function(key,value) {
	}store.get = function(key,defaultVal) {
	}store.has = function(key) {
	return store.get(key) !== undefined
}
store.remove = function(key) {
	}store.clear = function() {
	}store.transact = function(key,defaultVal,transactionFn) {
	if (transactionFn == null) {
	transactionFn = defaultVal
			defaultVal = null
}
if (defaultVal == null) {
	defaultVal = {
	}
}
var val = store.get(key,defaultVal)
		transactionFn(val)
		store.set(key,val)
}
store.getAll = function() {
	}store.forEach = function() {
	}store.serialize = function(value) {
	return JSON.stringify(value)
}
store.deserialize = function(value) {
	if (typeof value != 'string') {
	return undefined
}
try {
	return JSON.parse(value)
}
catch(e) {
	return value || undefined
}
}// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
	try {
	return (localStorageName in win && win[localStorageName])
}
catch(err) {
	return false
}
}if (isLocalStorageNameSupported()) {
	storage = win[localStorageName]
		store.set = function(key,val) {
	if (val === undefined) {
	return store.remove(key)
}
storage.setItem(key,store.serialize(val))
			return val
}
store.get = function(key,defaultVal) {
	var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal:val)
}
store.remove = function(key) {
	storage.removeItem(key)
}
store.clear = function() {
	storage.clear()
}
store.getAll = function() {
	var ret = {
	}store.forEach(function(key,val) {
	ret[key] = val
}
)
			return ret
}
store.forEach = function(callback) {
	for (var i=0;
	i<storage.length;
	i++) {
	var key = storage.key(i)
				callback(key,store.get(key))
}
}}else if (doc.documentElement.addBehavior) {
	var storageOwner,storageContainer
		// Since #userData storage applies only to specific paths,we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option,since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see:http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element,even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
	storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
}
catch(e) {
	// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse),fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
}
var withIEStorage = function(storeFunction) {
	return function() {
	var args = Array.prototype.slice.call(arguments,0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store,args)
				storageOwner.removeChild(storage)
				return result
}
}// In IE7,keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;
	<=>?@[\\]^` {
	|
}
~]","g")
		function ieKeyFix(key) {
	return key.replace(/^d/,'___$&').replace(forbiddenCharsRegex,'___')
}
store.set = withIEStorage(function(storage,key,val) {
	key = ieKeyFix(key)
			if (val === undefined) {
	return store.remove(key)
}
storage.setAttribute(key,store.serialize(val))
			storage.save(localStorageName)
			return val
}
)
		store.get = withIEStorage(function(storage,key,defaultVal) {
	key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal:val)
}
)
		store.remove = withIEStorage(function(storage,key) {
	key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
}
)
		store.clear = withIEStorage(function(storage) {
	var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=0,attr;
	attr=attributes[i];
	i++) {
	storage.removeAttribute(attr.name)
}
storage.save(localStorageName)})
		store.getAll = function(storage) {
	var ret = {
	}store.forEach(function(key,val) {
	ret[key] = val
}
)
			return ret
}
store.forEach = withIEStorage(function(storage,callback) {
	var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0,attr;
	attr=attributes[i];
	++i) {
	callback(attr.name,store.deserialize(storage.getAttribute(attr.name)))
}
})}try {
	var testKey = '__storejs__'
		store.set(testKey,testKey)
		if (store.get(testKey) != testKey) {
	store.disabled = true
}
store.remove(testKey)}catch(e) {
	store.disabled = true
}
store.enabled = !store.disabled

	if (typeof module != 'undefined' && module.exports && this.module !== module) {
	module.exports = store
}
else if (typeof define === 'function' && define.amd) {
	define('store',store)
}
else {
	win.store = store
}
})(Function('return this')());
	/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014,The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see:http://github.com/requirejs/text for details
 */
/*jslint regexp:true */
/*global require,XMLHttpRequest,ActiveXObject,define,window,process,Packages,java,location,Components,FileUtils */

define('text',['module'],function (module) {
	var text,fs,Cc,Ci,xpcIsWindows,progIds = ['Msxml2.XMLHTTP','Microsoft.XMLHTTP','Msxml2.XMLHTTP.4.0'],xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,hasLocation = typeof location !== 'undefined' && location.href,defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/,''),defaultHostName = hasLocation && location.hostname,defaultPort = hasLocation && (location.port || undefined),buildMap = {
	},masterConfig = (module.config && module.config()) || {
	};
	text = {
	version:'2.0.14',strip:function (content) {
	//Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also,if the string
            //is an HTML document,only the part inside the body tag is returned.
            if (content) {
	content = content.replace(xmlRegExp,"");
	var matches = content.match(bodyRegExp);
	if (matches) {
	content = matches[1];
}
}else {
	content = "";
}
return content;},jsEscape:function (content) {
	return content.replace(/(['\\])/g,'\\$1')
                .replace(/[\f]/g,"\\f")
                .replace(/[\b]/g,"\\b")
                .replace(/[\n]/g,"\\n")
                .replace(/[\t]/g,"\\t")
                .replace(/[\r]/g,"\\r")
                .replace(/[\u2028]/g,"\\u2028")
                .replace(/[\u2029]/g,"\\u2029");
}
,createXhr:masterConfig.createXhr || function () {
	//Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr,i,progId;
	if (typeof XMLHttpRequest !== "undefined") {
	return new XMLHttpRequest();
}
else if (typeof ActiveXObject !== "undefined") {
	for (i = 0;
	i < 3;
	i += 1) {
	progId = progIds[i];
	try {
	xhr = new ActiveXObject(progId);
}
catch (e) {
	}if (xhr) {
	progIds = [progId];
	// so faster next time
                        break;
}
}}return xhr;},/**
         * Parses a resource name into its component parts. Resource names
         * look like:module/name.ext!strip,where the !strip part is
         * optional.
         * @param {
	String
}
name the resource name
         * @returns {
	Object
}
with properties "moduleName","ext" and "strip"
         * where strip is a boolean.
         */
        parseName:function (name) {
	var modName,ext,temp,strip = false,index = name.lastIndexOf("."),isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;
	if (index !== -1 && (!isRelative || index > 1)) {
	modName = name.substring(0,index);
	ext = name.substring(index + 1);
}
else {
	modName = name;
}
temp = ext || modName;
	index = temp.indexOf("!");
	if (index !== -1) {
	//Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
	temp = temp.substring(0,index);
	if (ext) {
	ext = temp;
}
else {
	modName = temp;
}
}return {
	moduleName:modName,ext:ext,strip:strip
}
;},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,/**
         * Is an URL on another domain. Only works for browser use,returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {
	String
}
url
         * @returns Boolean
         */
        useXhr:function (url,protocol,hostname,port) {
	var uProtocol,uHostName,uPort,match = text.xdRegExp.exec(url);
	if (!match) {
	return true;
}
uProtocol = match[2];
	uHostName = match[3];
	uHostName = uHostName.split(':');
	uPort = uHostName[1];
	uHostName = uHostName[0];
	return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
}
,finishLoad:function (name,strip,content,onLoad) {
	content = strip ? text.strip(content):content;
	if (masterConfig.isBuild) {
	buildMap[name] = content;
}
onLoad(content);},load:function (name,req,onLoad,config) {
	//Name has format:some.module.filext!strip
            //The strip part is optional.
            //if strip is present,then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
	onLoad();
	return;
}
masterConfig.isBuild = config && config.isBuild;
	var parsed = text.parseName(name),nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext:''),url = req.toUrl(nonStripName),useXhr = (masterConfig.useXhr) ||
                         text.useXhr;
	// Do not load if it is an empty:url
            if (url.indexOf('empty:') === 0) {
	onLoad();
	return;
}
//Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url,defaultProtocol,defaultHostName,defaultPort)) {
	text.get(url,function (content) {
	text.finishLoad(name,parsed.strip,content,onLoad);
}
,function (err) {
	if (onLoad.error) {
	onLoad.error(err);
}
});}else {
	//Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension,but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName],function (content) {
	text.finishLoad(parsed.moduleName + '.' + parsed.ext,parsed.strip,content,onLoad);
}
);}},write:function (pluginName,moduleName,write,config) {
	if (buildMap.hasOwnProperty(moduleName)) {
	var content = text.jsEscape(buildMap[moduleName]);
	write.asModule(pluginName + "!" + moduleName,"define(function () {
	return '" +
                                   content +
                               "';
}
);
	\n");}},writeFile:function (pluginName,moduleName,req,write,config) {
	var parsed = text.parseName(moduleName),extPart = parsed.ext ? '.' + parsed.ext:'',nonStripName = parsed.moduleName + extPart,//Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';
	//Leverage own load() method to load plugin value,but only
            //write out values that do not have the strip argument,//to avoid any potential issues with ! in file names.
            text.load(nonStripName,req,function (value) {
	//Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
	return write(fileName,contents);
}
;textWrite.asModule = function (moduleName,contents) {
	return write.asModule(moduleName,fileName,contents);
}
;text.write(pluginName,nonStripName,textWrite,config);},config);}};
	if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
	//Using special require.nodeRequire,something added by r.js.
        fs = require.nodeRequire('fs');
	text.get = function (url,callback,errback) {
	try {
	var file = fs.readFileSync(url,'utf8');
	//Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
	file = file.substring(1);
}
callback(file);}catch (e) {
	if (errback) {
	errback(e);
}
}};}else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
	text.get = function (url,callback,errback,headers) {
	var xhr = text.createXhr(),header;
	xhr.open('GET',url,true);
	//Allow plugins direct access to xhr headers
            if (headers) {
	for (header in headers) {
	if (headers.hasOwnProperty(header)) {
	xhr.setRequestHeader(header.toLowerCase(),headers[header]);
}
}}//Allow overrides specified in config
            if (masterConfig.onXhr) {
	masterConfig.onXhr(xhr,url);
}
xhr.onreadystatechange = function (evt) {
	var status,err;
	//Do not explicitly handle errors,those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
	status = xhr.status || 0;
	if (status > 399 && status < 600) {
	//An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status:' + status);
	err.xhr = xhr;
	if (errback) {
	errback(err);
}
}else {
	callback(xhr.responseText);
}
if (masterConfig.onXhrComplete) {
	masterConfig.onXhrComplete(xhr,url);
}
}};
	xhr.send(null);};}else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
	//Why Java,why is this so awkward?
        text.get = function (url,callback) {
	var stringBuffer,line,encoding = "utf-8",file = new java.io.File(url),lineSeparator = java.lang.System.getProperty("line.separator"),input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file),encoding)),content = '';
	try {
	stringBuffer = new java.lang.StringBuffer();
	line = input.readLine();
	// Byte Order Mark (BOM) - The Unicode Standard,version 3.0,page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8,the BOM should appear as "EF BB BF",but it doesn't due to this bug in the JDK:// http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
	// Eat the BOM,since we've already found the encoding on this file,// and we plan to concatenating this buffer with others;
	the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
}
if (line !== null) {
	stringBuffer.append(line);
}
while ((line = input.readLine()) !== null) {
	stringBuffer.append(lineSeparator);
	stringBuffer.append(line);
}
//Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString());
	//String
}
finally {
	input.close();
}
callback(content);};}else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
	//Avert your gaze!
        Cc = Components.classes;
	Ci = Components.interfaces;
	Components.utils['import']('resource://gre/modules/FileUtils.jsm');
	xpcIsWindows = ('@mozilla.org/windows-registry-key;
	1' in Cc);
	text.get = function (url,callback) {
	var inStream,convertStream,fileObj,readData = {
	};
	if (xpcIsWindows) {
	url = url.replace(/\//g,'\\');
}
fileObj = new FileUtils.File(url);
	//XPCOM,you so crazy
            try {
	inStream = Cc['@mozilla.org/network/file-input-stream;
	1']
                           .createInstance(Ci.nsIFileInputStream);
	inStream.init(fileObj,1,0,false);
	convertStream = Cc['@mozilla.org/intl/converter-input-stream;
	1']
                                .createInstance(Ci.nsIConverterInputStream);
	convertStream.init(inStream,"utf-8",inStream.available(),Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);
	convertStream.readString(inStream.available(),readData);
	convertStream.close();
	inStream.close();
	callback(readData.value);
}
catch (e) {
	throw new Error((fileObj && fileObj.path || '') + ':' + e);
}
};}return text;});
	//! moment.js
//! version:2.8.4
//! authors:Tim Wood,Iskren Chernev,Moment.js contributors
//! license:MIT
//! momentjs.com

(function (undefined) {
	/************************************
        Constants
    ************************************/

    var moment,VERSION = '2.8.4',// the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global:this,oldGlobalMoment,round = Math.round,hasOwnProperty = Object.prototype.hasOwnProperty,i,YEAR = 0,MONTH = 1,DATE = 2,HOUR = 3,MINUTE = 4,SECOND = 5,MILLISECOND = 6,// internal storage for locale config files
        locales = {
	},// extra moment internal properties (plugins register props here)
        momentProperties = [],// check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),// ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d {
	3
}
)?)?/,// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec,but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,// format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S {
	1,4
}
|x|X|zz?|ZZ?|.)/g,localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l {
	1,4
}
)/g,// parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/,// 0 - 99
        parseTokenOneToThreeDigits = /\d {
	1,3
}
/,// 0 - 999
        parseTokenOneToFourDigits = /\d {
	1,4
}
/,// 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d {
	1,6
}
/,// -999,999 - 999,999
        parseTokenDigits = /\d+/,// nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+) {
	1,2
}
/i,// any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,// +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i,// T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/,// 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d {
	1,3
}
)?/,// 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/,// 0 - 9
        parseTokenTwoDigits = /\d\d/,// 00 - 99
        parseTokenThreeDigits = /\d {
	3
}
/,// 000 - 999
        parseTokenFourDigits = /\d {
	4
}
/,// 0000 - 9999
        parseTokenSixDigits = /[+-]?\d {
	6
}
/,// -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/,// -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d {
	6
}
|\d {
	4
}
)-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',isoDates = [
            ['YYYYYY-MM-DD',/[+-]\d {
	6
}
-\d {
	2
}
-\d {
	2
}
/],['YYYY-MM-DD',/\d {
	4
}
-\d {
	2
}
-\d {
	2
}
/],['GGGG-[W]WW-E',/\d {
	4
}
-W\d {
	2
}
-\d/],['GGGG-[W]WW',/\d {
	4
}
-W\d {
	2
}
/],['YYYY-DDD',/\d {
	4
}
-\d {
	3
}
/]
        ],// iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS',/(T| )\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss',/(T| )\d\d:\d\d:\d\d/],['HH:mm',/(T| )\d\d:\d\d/],['HH',/(T| )\d\d/]
        ],// timezone chunker '+10:00' > ['10','00'] or '-1530' > ['-15','30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,// getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),unitMillisecondFactors = {
	'Milliseconds':1,'Seconds':1e3,'Minutes':6e4,'Hours':36e5,'Days':864e5,'Months':2592e6,'Years':31536e6
}
,unitAliases = {
	ms:'millisecond',s:'second',m:'minute',h:'hour',d:'day',D:'date',w:'week',W:'isoWeek',M:'month',Q:'quarter',y:'year',DDD:'dayOfYear',e:'weekday',E:'isoWeekday',gg:'weekYear',GG:'isoWeekYear'
}
,camelFunctions = {
	dayofyear:'dayOfYear',isoweekday:'isoWeekday',isoweek:'isoWeek',weekyear:'weekYear',isoweekyear:'isoWeekYear'
}
,// format function strings
        formatFunctions = {
	},// default relative time thresholds
        relativeTimeThresholds = {
	s:45,// seconds to minute
            m:45,// minutes to hour
            h:22,// hours to day
            d:26,// days to month
            M:11   // months to year
}
,// tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),paddedTokens = 'M D H h m s w W'.split(' '),formatTokenFunctions = {
	M:function () {
	return this.month() + 1;
}
,MMM:function (format) {
	return this.localeData().monthsShort(this,format);
}
,MMMM:function (format) {
	return this.localeData().months(this,format);
}
,D:function () {
	return this.date();
}
,DDD:function () {
	return this.dayOfYear();
}
,d:function () {
	return this.day();
}
,dd:function (format) {
	return this.localeData().weekdaysMin(this,format);
}
,ddd:function (format) {
	return this.localeData().weekdaysShort(this,format);
}
,dddd:function (format) {
	return this.localeData().weekdays(this,format);
}
,w:function () {
	return this.week();
}
,W:function () {
	return this.isoWeek();
}
,YY:function () {
	return leftZeroFill(this.year() % 100,2);
}
,YYYY:function () {
	return leftZeroFill(this.year(),4);
}
,YYYYY:function () {
	return leftZeroFill(this.year(),5);
}
,YYYYYY:function () {
	var y = this.year(),sign = y >= 0 ? '+':'-';
	return sign + leftZeroFill(Math.abs(y),6);
}
,gg:function () {
	return leftZeroFill(this.weekYear() % 100,2);
}
,gggg:function () {
	return leftZeroFill(this.weekYear(),4);
}
,ggggg:function () {
	return leftZeroFill(this.weekYear(),5);
}
,GG:function () {
	return leftZeroFill(this.isoWeekYear() % 100,2);
}
,GGGG:function () {
	return leftZeroFill(this.isoWeekYear(),4);
}
,GGGGG:function () {
	return leftZeroFill(this.isoWeekYear(),5);
}
,e:function () {
	return this.weekday();
}
,E:function () {
	return this.isoWeekday();
}
,a:function () {
	return this.localeData().meridiem(this.hours(),this.minutes(),true);
}
,A:function () {
	return this.localeData().meridiem(this.hours(),this.minutes(),false);
}
,H:function () {
	return this.hours();
}
,h:function () {
	return this.hours() % 12 || 12;
}
,m:function () {
	return this.minutes();
}
,s:function () {
	return this.seconds();
}
,S:function () {
	return toInt(this.milliseconds() / 100);
}
,SS:function () {
	return leftZeroFill(toInt(this.milliseconds() / 10),2);
}
,SSS:function () {
	return leftZeroFill(this.milliseconds(),3);
}
,SSSS:function () {
	return leftZeroFill(this.milliseconds(),3);
}
,Z:function () {
	var a = -this.zone(),b = '+';
	if (a < 0) {
	a = -a;
	b = '-';
}
return b + leftZeroFill(toInt(a / 60),2) + ':' + leftZeroFill(toInt(a) % 60,2);},ZZ:function () {
	var a = -this.zone(),b = '+';
	if (a < 0) {
	a = -a;
	b = '-';
}
return b + leftZeroFill(toInt(a / 60),2) + leftZeroFill(toInt(a) % 60,2);},z:function () {
	return this.zoneAbbr();
}
,zz:function () {
	return this.zoneName();
}
,x:function () {
	return this.valueOf();
}
,X:function () {
	return this.unix();
}
,Q:function () {
	return this.quarter();
}
},deprecations = {
	},lists = ['months','monthsShort','weekdays','weekdaysShort','weekdaysMin'];
	// Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a,b,c) {
	switch (arguments.length) {
	case 2:return a != null ? a:b;
	case 3:return a != null ? a:b != null ? b:c;
	default:throw new Error('Implement me');
}
}function hasOwnProp(a,b) {
	return hasOwnProperty.call(a,b);
}
function defaultParsingFlags() {
	// We need to deep clone this object,and es5 standard is not very
        // helpful.
        return {
	empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false
}
;}function printMsg(msg) {
	if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
	console.warn('Deprecation warning:' + msg);
}
}function deprecate(msg,fn) {
	var firstTime = true;
	return extend(function () {
	if (firstTime) {
	printMsg(msg);
	firstTime = false;
}
return fn.apply(this,arguments);},fn);}function deprecateSimple(name,msg) {
	if (!deprecations[name]) {
	printMsg(msg);
	deprecations[name] = true;
}
}function padToken(func,count) {
	return function (a) {
	return leftZeroFill(func.call(this,a),count);
}
;}function ordinalizeToken(func,period) {
	return function (a) {
	return this.localeData().ordinal(func.call(this,a),period);
}
;}while (ordinalizeTokens.length) {
	i = ordinalizeTokens.pop();
	formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i],i);
}
while (paddedTokens.length) {
	i = paddedTokens.pop();
	formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i],2);
}
formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD,3);
	/************************************
        Constructors
    ************************************/

    function Locale() {
	}// Moment prototype object
    function Moment(config,skipOverflow) {
	if (skipOverflow !== false) {
	checkOverflow(config);
}
copyConfig(this,config);
	this._d = new Date(+config._d);}// Duration Constructor
    function Duration(duration) {
	var normalizedInput = normalizeObjectUnits(duration),years = normalizedInput.year || 0,quarters = normalizedInput.quarter || 0,months = normalizedInput.month || 0,weeks = normalizedInput.week || 0,days = normalizedInput.day || 0,hours = normalizedInput.hour || 0,minutes = normalizedInput.minute || 0,seconds = normalizedInput.second || 0,milliseconds = normalizedInput.millisecond || 0;
	// representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5;
	// 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST,we need to store them separately
        this._days = +days +
            weeks * 7;
	// It is impossible translate months into days without knowing
        // which months you are are talking about,so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
	this._data = {
	};
	this._locale = moment.localeData();
	this._bubble();
}
/************************************
        Helpers
    ************************************/


    function extend(a,b) {
	for (var i in b) {
	if (hasOwnProp(b,i)) {
	a[i] = b[i];
}
}if (hasOwnProp(b,'toString')) {
	a.toString = b.toString;
}
if (hasOwnProp(b,'valueOf')) {
	a.valueOf = b.valueOf;
}
return a;}function copyConfig(to,from) {
	var i,prop,val;
	if (typeof from._isAMomentObject !== 'undefined') {
	to._isAMomentObject = from._isAMomentObject;
}
if (typeof from._i !== 'undefined') {
	to._i = from._i;
}
if (typeof from._f !== 'undefined') {
	to._f = from._f;
}
if (typeof from._l !== 'undefined') {
	to._l = from._l;
}
if (typeof from._strict !== 'undefined') {
	to._strict = from._strict;
}
if (typeof from._tzm !== 'undefined') {
	to._tzm = from._tzm;
}
if (typeof from._isUTC !== 'undefined') {
	to._isUTC = from._isUTC;
}
if (typeof from._offset !== 'undefined') {
	to._offset = from._offset;
}
if (typeof from._pf !== 'undefined') {
	to._pf = from._pf;
}
if (typeof from._locale !== 'undefined') {
	to._locale = from._locale;
}
if (momentProperties.length > 0) {
	for (i in momentProperties) {
	prop = momentProperties[i];
	val = from[prop];
	if (typeof val !== 'undefined') {
	to[prop] = val;
}
}}return to;}function absRound(number) {
	if (number < 0) {
	return Math.ceil(number);
}
else {
	return Math.floor(number);
}
}// left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number,targetLength,forceSign) {
	var output = '' + Math.abs(number),sign = number >= 0;
	while (output.length < targetLength) {
	output = '0' + output;
}
return (sign ? (forceSign ? '+':''):'-') + output;}function positiveMomentsDifference(base,other) {
	var res = {
	milliseconds:0,months:0
}
;res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
	if (base.clone().add(res.months,'M').isAfter(other)) {
	--res.months;
}
res.milliseconds = +other - +(base.clone().add(res.months,'M'));
	return res;}function momentsDifference(base,other) {
	var res;
	other = makeAs(other,base);
	if (base.isBefore(other)) {
	res = positiveMomentsDifference(base,other);
}
else {
	res = positiveMomentsDifference(other,base);
	res.milliseconds = -res.milliseconds;
	res.months = -res.months;
}
return res;}// TODO:remove 'name' arg after deprecation is removed
    function createAdder(direction,name) {
	return function (val,period) {
	var dur,tmp;
	//invert the arguments,but complain about it
            if (period !== null && !isNaN(+period)) {
	deprecateSimple(name,'moment().' + name  + '(period,number) is deprecated. Please use moment().' + name + '(number,period).');
	tmp = val;
	val = period;
	period = tmp;
}
val = typeof val === 'string' ? +val:val;
	dur = moment.duration(val,period);
	addOrSubtractDurationFromMoment(this,dur,direction);
	return this;};}function addOrSubtractDurationFromMoment(mom,duration,isAdding,updateOffset) {
	var milliseconds = duration._milliseconds,days = duration._days,months = duration._months;
	updateOffset = updateOffset == null ? true:updateOffset;
	if (milliseconds) {
	mom._d.setTime(+mom._d + milliseconds * isAdding);
}
if (days) {
	rawSetter(mom,'Date',rawGetter(mom,'Date') + days * isAdding);
}
if (months) {
	rawMonthSetter(mom,rawGetter(mom,'Month') + months * isAdding);
}
if (updateOffset) {
	moment.updateOffset(mom,days || months);
}
}// check if is an array
    function isArray(input) {
	return Object.prototype.toString.call(input) === '[object Array]';
}
function isDate(input) {
	return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
}
// compare two arrays,return the number of differences
    function compareArrays(array1,array2,dontConvert) {
	var len = Math.min(array1.length,array2.length),lengthDiff = Math.abs(array1.length - array2.length),diffs = 0,i;
	for (i = 0;
	i < len;
	i++) {
	if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	diffs++;
}
}return diffs + lengthDiff;}function normalizeUnits(units) {
	if (units) {
	var lowered = units.toLowerCase().replace(/(.)s$/,'$1');
	units = unitAliases[units] || camelFunctions[lowered] || lowered;
}
return units;}function normalizeObjectUnits(inputObject) {
	var normalizedInput = {
	},normalizedProp,prop;
	for (prop in inputObject) {
	if (hasOwnProp(inputObject,prop)) {
	normalizedProp = normalizeUnits(prop);
	if (normalizedProp) {
	normalizedInput[normalizedProp] = inputObject[prop];
}
}}return normalizedInput;}function makeList(field) {
	var count,setter;
	if (field.indexOf('week') === 0) {
	count = 7;
	setter = 'day';
}
else if (field.indexOf('month') === 0) {
	count = 12;
	setter = 'month';
}
else {
	return;
}
moment[field] = function (format,index) {
	var i,getter,method = moment._locale[field],results = [];
	if (typeof format === 'number') {
	index = format;
	format = undefined;
}
getter = function (i) {
	var m = moment().utc().set(setter,i);
	return method.call(moment._locale,m,format || '');
}
;if (index != null) {
	return getter(index);
}
else {
	for (i = 0;
	i < count;
	i++) {
	results.push(getter(i));
}
return results;}};}function toInt(argumentForCoercion) {
	var coercedNumber = +argumentForCoercion,value = 0;
	if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	if (coercedNumber >= 0) {
	value = Math.floor(coercedNumber);
}
else {
	value = Math.ceil(coercedNumber);
}
}return value;}function daysInMonth(year,month) {
	return new Date(Date.UTC(year,month + 1,0)).getUTCDate();
}
function weeksInYear(year,dow,doy) {
	return weekOfYear(moment([year,11,31 + dow - doy]),dow,doy).week;
}
function daysInYear(year) {
	return isLeapYear(year) ? 366:365;
}
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function checkOverflow(m) {
	var overflow;
	if (m._a && m._pf.overflow === -2) {
	overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH:m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR],m._a[MONTH]) ? DATE:m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR:m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE:m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND:m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND:-1;
	if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	overflow = DATE;
}
m._pf.overflow = overflow;}}function isValid(m) {
	if (m._isValid == null) {
	m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;
	if (m._strict) {
	m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
}
}return m._isValid;}function normalizeLocale(key) {
	return key ? key.toLowerCase().replace('_','-'):key;
}
// pick the locale from the array
    // try ['en-au','en-gb'] as 'en-au','en-gb','en',as in move through the list trying each
    // substring from most specific to least,but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
	var i = 0,j,next,locale,split;
	while (i < names.length) {
	split = normalizeLocale(names[i]).split('-');
	j = split.length;
	next = normalizeLocale(names[i + 1]);
	next = next ? next.split('-'):null;
	while (j > 0) {
	locale = loadLocale(split.slice(0,j).join('-'));
	if (locale) {
	return locale;
}
if (next && next.length >= j && compareArrays(split,next,true) >= j - 1) {
	//the next array item is better than a shallower substring of this one
                    break;
}
j--;}i++;}return null;}function loadLocale(name) {
	var oldLocale = null;
	if (!locales[name] && hasModule) {
	try {
	oldLocale = moment.locale();
	require('./locale/' + name);
	// because defineLocale currently also sets the global locale,we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
}
catch (e) {
	}
}
return locales[name];}// Return a moment from input,that is local/utc/zone equivalent to model.
    function makeAs(input,model) {
	var res,diff;
	if (model._isUTC) {
	res = model.clone();
	diff = (moment.isMoment(input) || isDate(input) ?
                    +input:+moment(input)) - (+res);
	// Use low-level api,because this fn is low-level api.
            res._d.setTime(+res._d + diff);
	moment.updateOffset(res,false);
	return res;
}
else {
	return moment(input).local();
}
}/************************************
        Locale
    ************************************/


    extend(Locale.prototype {
	set:function (config) {
	var prop,i;
	for (i in config) {
	prop = config[i];
	if (typeof prop === 'function') {
	this[i] = prop;
}
else {
	this['_' + i] = prop;
}
}// Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d {
	1,2
}
/.source);},_months:'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),months:function (m) {
	return this._months[m.month()];
}
,_monthsShort:'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),monthsShort:function (m) {
	return this._monthsShort[m.month()];
}
,monthsParse:function (monthName,format,strict) {
	var i,mom,regex;
	if (!this._monthsParse) {
	this._monthsParse = [];
	this._longMonthsParse = [];
	this._shortMonthsParse = [];
}
for (i = 0;
	i < 12;
	i++) {
	// make the regex if we don't have it already
                mom = moment.utc([2000,i]);
	if (strict && !this._longMonthsParse[i]) {
	this._longMonthsParse[i] = new RegExp('^' + this.months(mom,'').replace('.','') + '$','i');
	this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom,'').replace('.','') + '$','i');
}
if (!strict && !this._monthsParse[i]) {
	regex = '^' + this.months(mom,'') + '|^' + this.monthsShort(mom,'');
	this._monthsParse[i] = new RegExp(regex.replace('.',''),'i');
}
// test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	return i;
}
else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	return i;
}
else if (!strict && this._monthsParse[i].test(monthName)) {
	return i;
}
}},_weekdays:'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),weekdays:function (m) {
	return this._weekdays[m.day()];
}
,_weekdaysShort:'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),weekdaysShort:function (m) {
	return this._weekdaysShort[m.day()];
}
,_weekdaysMin:'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),weekdaysMin:function (m) {
	return this._weekdaysMin[m.day()];
}
,weekdaysParse:function (weekdayName) {
	var i,mom,regex;
	if (!this._weekdaysParse) {
	this._weekdaysParse = [];
}
for (i = 0;
	i < 7;
	i++) {
	// make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
	mom = moment([2000,1]).day(i);
	regex = '^' + this.weekdays(mom,'') + '|^' + this.weekdaysShort(mom,'') + '|^' + this.weekdaysMin(mom,'');
	this._weekdaysParse[i] = new RegExp(regex.replace('.',''),'i');
}
// test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
	return i;
}
}},_longDateFormat: {
	LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D,YYYY',LLL:'MMMM D,YYYY LT',LLLL:'dddd,MMMM D,YYYY LT'
}
,longDateFormat:function (key) {
	var output = this._longDateFormat[key];
	if (!output && this._longDateFormat[key.toUpperCase()]) {
	output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function (val) {
	return val.slice(1);
}
);
	this._longDateFormat[key] = output;}return output;},isPM:function (input) {
	// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
}
,_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function (hours,minutes,isLower) {
	if (hours > 11) {
	return isLower ? 'pm':'PM';
}
else {
	return isLower ? 'am':'AM';
}
},_calendar: {
	sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'
}
,calendar:function (key,mom,now) {
	var output = this._calendar[key];
	return typeof output === 'function' ? output.apply(mom,[now]):output;
}
,_relativeTime: {
	future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'
}
,relativeTime:function (number,withoutSuffix,string,isFuture) {
	var output = this._relativeTime[string];
	return (typeof output === 'function') ?
                output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);
}
,pastFuture:function (diff,output) {
	var format = this._relativeTime[diff > 0 ? 'future':'past'];
	return typeof format === 'function' ? format(output):format.replace(/%s/i,output);
}
,ordinal:function (number) {
	return this._ordinal.replace('%d',number);
}
,_ordinal:'%d',_ordinalParse:/\d {
	1,2
}
/,preparse:function (string) {
	return string;
}
,postformat:function (string) {
	return string;
}
,week:function (mom) {
	return weekOfYear(mom,this._week.dow,this._week.doy).week;
}
,_week: {
	dow:0,// Sunday is the first day of the week.
            doy:6  // The week that contains Jan 1st is the first week of the year.
}
,_invalidDate:'Invalid date',invalidDate:function () {
	return this._invalidDate;
}
});
	/************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
	if (input.match(/\[[\s\S]/)) {
	return input.replace(/^\[|\]$/g,'');
}
return input.replace(/\\/g,'');}function makeFormatFunction(format) {
	var array = format.match(formattingTokens),i,length;
	for (i = 0,length = array.length;
	i < length;
	i++) {
	if (formatTokenFunctions[array[i]]) {
	array[i] = formatTokenFunctions[array[i]];
}
else {
	array[i] = removeFormattingTokens(array[i]);
}
}return function (mom) {
	var output = '';
	for (i = 0;
	i < length;
	i++) {
	output += array[i] instanceof Function ? array[i].call(mom,format):array[i];
}
return output;};}// format date using native date object
    function formatMoment(m,format) {
	if (!m.isValid()) {
	return m.localeData().invalidDate();
}
format = expandFormat(format,m.localeData());
	if (!formatFunctions[format]) {
	formatFunctions[format] = makeFormatFunction(format);
}
return formatFunctions[format](m);}function expandFormat(format,locale) {
	var i = 5;
	function replaceLongDateFormatTokens(input) {
	return locale.longDateFormat(input) || input;
}
localFormattingTokens.lastIndex = 0;
	while (i >= 0 && localFormattingTokens.test(format)) {
	format = format.replace(localFormattingTokens,replaceLongDateFormatTokens);
	localFormattingTokens.lastIndex = 0;
	i -= 1;
}
return format;}/************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token,config) {
	var a,strict = config._strict;
	switch (token) {
	case 'Q':return parseTokenOneDigit;
	case 'DDDD':return parseTokenThreeDigits;
	case 'YYYY':case 'GGGG':case 'gggg':return strict ? parseTokenFourDigits:parseTokenOneToFourDigits;
	case 'Y':case 'G':case 'g':return parseTokenSignedNumber;
	case 'YYYYYY':case 'YYYYY':case 'GGGGG':case 'ggggg':return strict ? parseTokenSixDigits:parseTokenOneToSixDigits;
	case 'S':if (strict) {
	return parseTokenOneDigit;
}
/* falls through */
        case 'SS':if (strict) {
	return parseTokenTwoDigits;
}
/* falls through */
        case 'SSS':if (strict) {
	return parseTokenThreeDigits;
}
/* falls through */
        case 'DDD':return parseTokenOneToThreeDigits;
	case 'MMM':case 'MMMM':case 'dd':case 'ddd':case 'dddd':return parseTokenWord;
	case 'a':case 'A':return config._locale._meridiemParse;
	case 'x':return parseTokenOffsetMs;
	case 'X':return parseTokenTimestampMs;
	case 'Z':case 'ZZ':return parseTokenTimezone;
	case 'T':return parseTokenT;
	case 'SSSS':return parseTokenDigits;
	case 'MM':case 'DD':case 'YY':case 'GG':case 'gg':case 'HH':case 'hh':case 'mm':case 'ss':case 'ww':case 'WW':return strict ? parseTokenTwoDigits:parseTokenOneOrTwoDigits;
	case 'M':case 'D':case 'd':case 'H':case 'h':case 'm':case 's':case 'w':case 'W':case 'e':case 'E':return parseTokenOneOrTwoDigits;
	case 'Do':return strict ? config._locale._ordinalParse:config._locale._ordinalParseLenient;
	default:a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\','')),'i'));
	return a;
}
}function timezoneMinutesFromString(string) {
	string = string || '';
	var possibleTzMatches = (string.match(parseTokenTimezone) || []),tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],parts = (tzChunk + '').match(parseTimezoneChunker) || ['-',0,0],minutes = +(parts[1] * 60) + toInt(parts[2]);
	return parts[0] === '+' ? -minutes:minutes;
}
// function to convert string input to date
    function addTimeToArrayFromToken(token,input,config) {
	var a,datePartArray = config._a;
	switch (token) {
	// QUARTER
        case 'Q':if (input != null) {
	datePartArray[MONTH] = (toInt(input) - 1) * 3;
}
break;
	// MONTH
        case 'M':// fall through to MM
        case 'MM':if (input != null) {
	datePartArray[MONTH] = toInt(input) - 1;
}
break;
	case 'MMM':// fall through to MMMM
        case 'MMMM':a = config._locale.monthsParse(input,token,config._strict);
	// if we didn't find a month name,mark the date as invalid.
            if (a != null) {
	datePartArray[MONTH] = a;
}
else {
	config._pf.invalidMonth = input;
}
break;
	// DAY OF MONTH
        case 'D':// fall through to DD
        case 'DD':if (input != null) {
	datePartArray[DATE] = toInt(input);
}
break;
	case 'Do':if (input != null) {
	datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d {
	1,2
}
/)[0],10));}break;
	// DAY OF YEAR
        case 'DDD':// fall through to DDDD
        case 'DDDD':if (input != null) {
	config._dayOfYear = toInt(input);
}
break;
	// YEAR
        case 'YY':datePartArray[YEAR] = moment.parseTwoDigitYear(input);
	break;
	case 'YYYY':case 'YYYYY':case 'YYYYYY':datePartArray[YEAR] = toInt(input);
	break;
	// AM / PM
        case 'a':// fall through to A
        case 'A':config._isPm = config._locale.isPM(input);
	break;
	// HOUR
        case 'h':// fall through to hh
        case 'hh':config._pf.bigHour = true;
	/* falls through */
        case 'H':// fall through to HH
        case 'HH':datePartArray[HOUR] = toInt(input);
	break;
	// MINUTE
        case 'm':// fall through to mm
        case 'mm':datePartArray[MINUTE] = toInt(input);
	break;
	// SECOND
        case 's':// fall through to ss
        case 'ss':datePartArray[SECOND] = toInt(input);
	break;
	// MILLISECOND
        case 'S':case 'SS':case 'SSS':case 'SSSS':datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
	break;
	// UNIX OFFSET (MILLISECONDS)
        case 'x':config._d = new Date(toInt(input));
	break;
	// UNIX TIMESTAMP WITH MS
        case 'X':config._d = new Date(parseFloat(input) * 1000);
	break;
	// TIMEZONE
        case 'Z':// fall through to ZZ
        case 'ZZ':config._useUTC = true;
	config._tzm = timezoneMinutesFromString(input);
	break;
	// WEEKDAY - human
        case 'dd':case 'ddd':case 'dddd':a = config._locale.weekdaysParse(input);
	// if we didn't get a weekday name,mark the date as invalid
            if (a != null) {
	config._w = config._w || {
	};
	config._w['d'] = a;
}
else {
	config._pf.invalidWeekday = input;
}
break;
	// WEEK,WEEK DAY - numeric
        case 'w':case 'ww':case 'W':case 'WW':case 'd':case 'e':case 'E':token = token.substr(0,1);
	/* falls through */
        case 'gggg':case 'GGGG':case 'GGGGG':token = token.substr(0,2);
	if (input) {
	config._w = config._w || {
	};
	config._w[token] = toInt(input);
}
break;
	case 'gg':case 'GG':config._w = config._w || {
	};
	config._w[token] = moment.parseTwoDigitYear(input);
}
}function dayOfYearFromWeekInfo(config) {
	var w,weekYear,week,weekday,dow,doy,temp;
	w = config._w;
	if (w.GG != null || w.W != null || w.E != null) {
	dow = 1;
	doy = 4;
	// TODO:We need to take the current isoWeekYear,but that depends on
            // how we interpret now (local,utc,fixed offset). So create
            // a now version of current config (take local/utc/offset flags,and
            // create now).
            weekYear = dfl(w.GG,config._a[YEAR],weekOfYear(moment(),1,4).year);
	week = dfl(w.W,1);
	weekday = dfl(w.E,1);
}
else {
	dow = config._locale._week.dow;
	doy = config._locale._week.doy;
	weekYear = dfl(w.gg,config._a[YEAR],weekOfYear(moment(),dow,doy).year);
	week = dfl(w.w,1);
	if (w.d != null) {
	// weekday -- low day numbers are considered next week
                weekday = w.d;
	if (weekday < dow) {
	++week;
}
}else if (w.e != null) {
	// local weekday -- counting starts from begining of week
                weekday = w.e + dow;
}
else {
	// default to begining of week
                weekday = dow;
}
}temp = dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);
	config._a[YEAR] = temp.year;
	config._dayOfYear = temp.dayOfYear;}// convert an array to a date.
    // the array should mirror the parameters below
    // note:all values past the year are optional and will default to the lowest possible value.
    // [year,month,day,hour,minute,second,millisecond]
    function dateFromConfig(config) {
	var i,date,input = [],currentDate,yearToUse;
	if (config._d) {
	return;
}
currentDate = currentDateArray(config);
	//compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	dayOfYearFromWeekInfo(config);
}
//if the day of the year is set,figure out what it is
        if (config._dayOfYear) {
	yearToUse = dfl(config._a[YEAR],currentDate[YEAR]);
	if (config._dayOfYear > daysInYear(yearToUse)) {
	config._pf._overflowDayOfYear = true;
}
date = makeUTCDate(yearToUse,0,config._dayOfYear);
	config._a[MONTH] = date.getUTCMonth();
	config._a[DATE] = date.getUTCDate();}// Default to current date.
        // * if no year,month,day of month are given,default to today
        // * if day of month is given,default month and year
        // * if month is given,default only year
        // * if year is given,don't default anything
        for (i = 0;
	i < 3 && config._a[i] == null;
	++i) {
	config._a[i] = input[i] = currentDate[i];
}
// Zero out whatever was not defaulted,including time
        for (;
	i < 7;
	i++) {
	config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1:0):config._a[i];
}
// Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
	config._nextDay = true;
	config._a[HOUR] = 0;
}
config._d = (config._useUTC ? makeUTCDate:makeDate).apply(null,input);
	// Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
	config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
}
if (config._nextDay) {
	config._a[HOUR] = 24;
}
}function dateFromObject(config) {
	var normalizedInput;
	if (config._d) {
	return;
}
normalizedInput = normalizeObjectUnits(config._i);
	config._a = [
            normalizedInput.year,normalizedInput.month,normalizedInput.day || normalizedInput.date,normalizedInput.hour,normalizedInput.minute,normalizedInput.second,normalizedInput.millisecond
        ];
	dateFromConfig(config);
}
function currentDateArray(config) {
	var now = new Date();
	if (config._useUTC) {
	return [
                now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()
            ];
}
else {
	return [now.getFullYear(),now.getMonth(),now.getDate()];
}
}// date from string and format string
    function makeDateFromStringAndFormat(config) {
	if (config._f === moment.ISO_8601) {
	parseISO(config);
	return;
}
config._a = [];
	config._pf.empty = true;
	// This array is used to make a Date,either with `new Date` or `Date.UTC`
        var string = '' + config._i,i,parsedInput,tokens,token,skipped,stringLength = string.length,totalParsedInputLength = 0;
	tokens = expandFormat(config._f,config._locale).match(formattingTokens) || [];
	for (i = 0;
	i < tokens.length;
	i++) {
	token = tokens[i];
	parsedInput = (string.match(getParseRegexForToken(token,config)) || [])[0];
	if (parsedInput) {
	skipped = string.substr(0,string.indexOf(parsedInput));
	if (skipped.length > 0) {
	config._pf.unusedInput.push(skipped);
}
string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	totalParsedInputLength += parsedInput.length;}// don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
	if (parsedInput) {
	config._pf.empty = false;
}
else {
	config._pf.unusedTokens.push(token);
}
addTimeToArrayFromToken(token,parsedInput,config);}else if (config._strict && !parsedInput) {
	config._pf.unusedTokens.push(token);
}
}// add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
	if (string.length > 0) {
	config._pf.unusedInput.push(string);
}
// clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
	config._pf.bigHour = undefined;
}
// handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
	config._a[HOUR] += 12;
}
// if is 12 am,change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
	config._a[HOUR] = 0;
}
dateFromConfig(config);
	checkOverflow(config);}function unescapeFormat(s) {
	return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function (matched,p1,p2,p3,p4) {
	return p1 || p2 || p3 || p4;
}
);}// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
	return s.replace(/[-\/\\^$*+?.()|[\] {
	}]/g,'\\$&');
}
// date from string and array of format strings
    function makeDateFromStringAndArray(config) {
	var tempConfig,bestMoment,scoreToBeat,i,currentScore;
	if (config._f.length === 0) {
	config._pf.invalidFormat = true;
	config._d = new Date(NaN);
	return;
}
for (i = 0;
	i < config._f.length;
	i++) {
	currentScore = 0;
	tempConfig = copyConfig( {
	},config);
	if (config._useUTC != null) {
	tempConfig._useUTC = config._useUTC;
}
tempConfig._pf = defaultParsingFlags();
	tempConfig._f = config._f[i];
	makeDateFromStringAndFormat(tempConfig);
	if (!isValid(tempConfig)) {
	continue;
}
// if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;
	//or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;
	tempConfig._pf.score = currentScore;
	if (scoreToBeat == null || currentScore < scoreToBeat) {
	scoreToBeat = currentScore;
	bestMoment = tempConfig;
}
}extend(config,bestMoment || tempConfig);}// date from iso format
    function parseISO(config) {
	var i,l,string = config._i,match = isoRegex.exec(string);
	if (match) {
	config._pf.iso = true;
	for (i = 0,l = isoDates.length;
	i < l;
	i++) {
	if (isoDates[i][1].exec(string)) {
	// match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
	break;
}
}for (i = 0,l = isoTimes.length;
	i < l;
	i++) {
	if (isoTimes[i][1].exec(string)) {
	config._f += isoTimes[i][0];
	break;
}
}if (string.match(parseTokenTimezone)) {
	config._f += 'Z';
}
makeDateFromStringAndFormat(config);}else {
	config._isValid = false;
}
}// date from iso format or fallback
    function makeDateFromString(config) {
	parseISO(config);
	if (config._isValid === false) {
	delete config._isValid;
	moment.createFromInputFallback(config);
}
}function map(arr,fn) {
	var res = [],i;
	for (i = 0;
	i < arr.length;
	++i) {
	res.push(fn(arr[i],i));
}
return res;}function makeDateFromInput(config) {
	var input = config._i,matched;
	if (input === undefined) {
	config._d = new Date();
}
else if (isDate(input)) {
	config._d = new Date(+input);
}
else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
	config._d = new Date(+matched[1]);
}
else if (typeof input === 'string') {
	makeDateFromString(config);
}
else if (isArray(input)) {
	config._a = map(input.slice(0),function (obj) {
	return parseInt(obj,10);
}
);
	dateFromConfig(config);}else if (typeof(input) === 'object') {
	dateFromObject(config);
}
else if (typeof(input) === 'number') {
	// from milliseconds
            config._d = new Date(input);
}
else {
	moment.createFromInputFallback(config);
}
}function makeDate(y,m,d,h,M,s,ms) {
	//can't just apply() to create a date://http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y,m,d,h,M,s,ms);
	//the date constructor doesn't accept years < 1970
        if (y < 1970) {
	date.setFullYear(y);
}
return date;}function makeUTCDate(y) {
	var date = new Date(Date.UTC.apply(null,arguments));
	if (y < 1970) {
	date.setUTCFullYear(y);
}
return date;}function parseWeekday(input,locale) {
	if (typeof input === 'string') {
	if (!isNaN(input)) {
	input = parseInt(input,10);
}
else {
	input = locale.weekdaysParse(input);
	if (typeof input !== 'number') {
	return null;
}
}}return input;}/************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from,moment.fn.fromNow,and moment.duration.fn.humanize
    function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale) {
	return locale.relativeTime(number || 1,!!withoutSuffix,string,isFuture);
}
function relativeTime(posNegDuration,withoutSuffix,locale) {
	var duration = moment.duration(posNegDuration).abs(),seconds = round(duration.as('s')),minutes = round(duration.as('m')),hours = round(duration.as('h')),days = round(duration.as('d')),months = round(duration.as('M')),years = round(duration.as('y')),args = seconds < relativeTimeThresholds.s && ['s',seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm',minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh',hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd',days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM',months] ||
                years === 1 && ['y'] || ['yy',years];
	args[2] = withoutSuffix;
	args[3] = +posNegDuration > 0;
	args[4] = locale;
	return substituteTimeAgo.apply( {
	},args);
}
/************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun,6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun,6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear) {
	var end = firstDayOfWeekOfYear - firstDayOfWeek,daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),adjustedMoment;
	if (daysToDayOfWeek > end) {
	daysToDayOfWeek -= 7;
}
if (daysToDayOfWeek < end - 7) {
	daysToDayOfWeek += 7;
}
adjustedMoment = moment(mom).add(daysToDayOfWeek,'d');
	return {
	week:Math.ceil(adjustedMoment.dayOfYear() / 7),year:adjustedMoment.year()
}
;}//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek) {
	var d = makeUTCDate(year,0,1).getUTCDay(),daysToAdd,dayOfYear;
	d = d === 0 ? 7:d;
	weekday = weekday != null ? weekday:firstDayOfWeek;
	daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7:0) - (d < firstDayOfWeek ? 7:0);
	dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
	return {
	year:dayOfYear > 0 ? year:year - 1,dayOfYear:dayOfYear > 0 ?  dayOfYear:daysInYear(year - 1) + dayOfYear
}
;}/************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
	var input = config._i,format = config._f,res;
	config._locale = config._locale || moment.localeData(config._l);
	if (input === null || (format === undefined && input === '')) {
	return moment.invalid( {
	nullInput:true
}
);}if (typeof input === 'string') {
	config._i = input = config._locale.preparse(input);
}
if (moment.isMoment(input)) {
	return new Moment(input,true);
}
else if (format) {
	if (isArray(format)) {
	makeDateFromStringAndArray(config);
}
else {
	makeDateFromStringAndFormat(config);
}
}else {
	makeDateFromInput(config);
}
res = new Moment(config);
	if (res._nextDay) {
	// Adding is smart enough around DST
            res.add(1,'d');
	res._nextDay = undefined;
}
return res;}moment = function (input,format,locale,strict) {
	var c;
	if (typeof(locale) === 'boolean') {
	strict = locale;
	locale = undefined;
}
// object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {
	};
	c._isAMomentObject = true;
	c._i = input;
	c._f = format;
	c._l = locale;
	c._strict = strict;
	c._isUTC = false;
	c._pf = defaultParsingFlags();
	return makeMoment(c);
}
;moment.suppressDeprecationWarnings = false;
	moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',function (config) {
	config._d = new Date(config._i + (config._useUTC ? ' UTC':''));
}
);
	// Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array,whose
    // first element is an array of moment objects.
    function pickBy(fn,moments) {
	var res,i;
	if (moments.length === 1 && isArray(moments[0])) {
	moments = moments[0];
}
if (!moments.length) {
	return moment();
}
res = moments[0];
	for (i = 1;
	i < moments.length;
	++i) {
	if (moments[i][fn](res)) {
	res = moments[i];
}
}return res;}moment.min = function () {
	var args = [].slice.call(arguments,0);
	return pickBy('isBefore',args);
}
;moment.max = function () {
	var args = [].slice.call(arguments,0);
	return pickBy('isAfter',args);
}
;// creating with utc
    moment.utc = function (input,format,locale,strict) {
	var c;
	if (typeof(locale) === 'boolean') {
	strict = locale;
	locale = undefined;
}
// object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {
	};
	c._isAMomentObject = true;
	c._useUTC = true;
	c._isUTC = true;
	c._l = locale;
	c._i = input;
	c._f = format;
	c._strict = strict;
	c._pf = defaultParsingFlags();
	return makeMoment(c).utc();
}
;// creating with unix timestamp (in seconds)
    moment.unix = function (input) {
	return moment(input * 1000);
}
;// duration
    moment.duration = function (input,key) {
	var duration = input,// matching against regexp is expensive,do it on demand
            match = null,sign,ret,parseIso,diffRes;
	if (moment.isDuration(input)) {
	duration = {
	ms:input._milliseconds,d:input._days,M:input._months
}
;}else if (typeof input === 'number') {
	duration = {
	};
	if (key) {
	duration[key] = input;
}
else {
	duration.milliseconds = input;
}
}else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
	sign = (match[1] === '-') ? -1:1;
	duration = {
	y:0,d:toInt(match[DATE]) * sign,h:toInt(match[HOUR]) * sign,m:toInt(match[MINUTE]) * sign,s:toInt(match[SECOND]) * sign,ms:toInt(match[MILLISECOND]) * sign
}
;}else if (!!(match = isoDurationRegex.exec(input))) {
	sign = (match[1] === '-') ? -1:1;
	parseIso = function (inp) {
	// We'd normally use ~~inp for this,but unfortunately it also
                // converts floats to ints.
                // inp may be undefined,so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',','.'));
	// apply sign while we're at it
                return (isNaN(res) ? 0:res) * sign;
}
;duration = {
	y:parseIso(match[2]),M:parseIso(match[3]),d:parseIso(match[4]),h:parseIso(match[5]),m:parseIso(match[6]),s:parseIso(match[7]),w:parseIso(match[8])
}
;}else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
	diffRes = momentsDifference(moment(duration.from),moment(duration.to));
	duration = {
	};
	duration.ms = diffRes.milliseconds;
	duration.M = diffRes.months;
}
ret = new Duration(duration);
	if (moment.isDuration(input) && hasOwnProp(input,'_locale')) {
	ret._locale = input._locale;
}
return ret;};
	// version number
    moment.version = VERSION;
	// default format
    moment.defaultFormat = isoFormat;
	// constant that refers to the ISO standard
    moment.ISO_8601 = function () {
	};
	// Plugins that add properties should also add the key here (null value),// so we can properly clone ourselves.
    moment.momentProperties = momentProperties;
	// This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {
	};
	// This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold,limit) {
	if (relativeTimeThresholds[threshold] === undefined) {
	return false;
}
if (limit === undefined) {
	return relativeTimeThresholds[threshold];
}
relativeTimeThresholds[threshold] = limit;
	return true;};
	moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',function (key,value) {
	return moment.locale(key,value);
}
);
	// This function will load locale and then set the global locale.  If
    // no arguments are passed in,it will simply return the current global
    // locale key.
    moment.locale = function (key,values) {
	var data;
	if (key) {
	if (typeof(values) !== 'undefined') {
	data = moment.defineLocale(key,values);
}
else {
	data = moment.localeData(key);
}
if (data) {
	moment.duration._locale = moment._locale = data;
}
}return moment._locale._abbr;};
	moment.defineLocale = function (name,values) {
	if (values !== null) {
	values.abbr = name;
	if (!locales[name]) {
	locales[name] = new Locale();
}
locales[name].set(values);
	// backwards compat for now:also set the locale
            moment.locale(name);
	return locales[name];
}
else {
	// useful for testing
            delete locales[name];
	return null;
}
};
	moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',function (key) {
	return moment.localeData(key);
}
);
	// returns locale data
    moment.localeData = function (key) {
	var locale;
	if (key && key._locale && key._locale._abbr) {
	key = key._locale._abbr;
}
if (!key) {
	return moment._locale;
}
if (!isArray(key)) {
	//short-circuit everything else
            locale = loadLocale(key);
	if (locale) {
	return locale;
}
key = [key];}return chooseLocale(key);};
	// compare moment object
    moment.isMoment = function (obj) {
	return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj,'_isAMomentObject'));
}
;// for typechecking Duration objects
    moment.isDuration = function (obj) {
	return obj instanceof Duration;
}
;for (i = lists.length - 1;
	i >= 0;
	--i) {
	makeList(lists[i]);
}
moment.normalizeUnits = function (units) {
	return normalizeUnits(units);
}
;moment.invalid = function (flags) {
	var m = moment.utc(NaN);
	if (flags != null) {
	extend(m._pf,flags);
}
else {
	m._pf.userInvalidated = true;
}
return m;};
	moment.parseZone = function () {
	return moment.apply(null,arguments).parseZone();
}
;moment.parseTwoDigitYear = function (input) {
	return toInt(input) + (toInt(input) > 68 ? 1900:2000);
}
;/************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype {
	clone:function () {
	return moment(this);
}
,valueOf:function () {
	return +this._d + ((this._offset || 0) * 60000);
}
,unix:function () {
	return Math.floor(+this / 1000);
}
,toString:function () {
	return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}
,toDate:function () {
	return this._offset ? new Date(+this):this._d;
}
,toISOString:function () {
	var m = moment(this).utc();
	if (0 < m.year() && m.year() <= 9999) {
	if ('function' === typeof Date.prototype.toISOString) {
	// native implementation is ~50x faster,use it when we can
                    return this.toDate().toISOString();
}
else {
	return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}
}else {
	return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}
},toArray:function () {
	var m = this;
	return [
                m.year(),m.month(),m.date(),m.hours(),m.minutes(),m.seconds(),m.milliseconds()
            ];
}
,isValid:function () {
	return isValid(this);
}
,isDSTShifted:function () {
	if (this._a) {
	return this.isValid() && compareArrays(this._a,(this._isUTC ? moment.utc(this._a):moment(this._a)).toArray()) > 0;
}
return false;},parsingFlags:function () {
	return extend( {
	},this._pf);
}
,invalidAt:function () {
	return this._pf.overflow;
}
,utc:function (keepLocalTime) {
	return this.zone(0,keepLocalTime);
}
,local:function (keepLocalTime) {
	if (this._isUTC) {
	this.zone(0,keepLocalTime);
	this._isUTC = false;
	if (keepLocalTime) {
	this.add(this._dateTzOffset(),'m');
}
}return this;},format:function (inputString) {
	var output = formatMoment(this,inputString || moment.defaultFormat);
	return this.localeData().postformat(output);
}
,add:createAdder(1,'add'),subtract:createAdder(-1,'subtract'),diff:function (input,units,asFloat) {
	var that = makeAs(input,this),zoneDiff = (this.zone() - that.zone()) * 6e4,diff,output,daysAdjust;
	units = normalizeUnits(units);
	if (units === 'year' || units === 'month') {
	// average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5;
	// 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
	// adjust by taking difference in days,average number of days
                // and dst in the given months.
                daysAdjust = (this - moment(this).startOf('month')) -
                    (that - moment(that).startOf('month'));
	// same as above but with zones,to negate all dst
                daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4;
	output += daysAdjust / diff;
	if (units === 'year') {
	output = output / 12;
}
}else {
	diff = (this - that);
	output = units === 'second' ? diff / 1e3:// 1000
                    units === 'minute' ? diff / 6e4:// 1000 * 60
                    units === 'hour' ? diff / 36e5:// 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5:// 1000 * 60 * 60 * 24,negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5:// 1000 * 60 * 60 * 24 * 7,negate dst
                    diff;
}
return asFloat ? output:absRound(output);},from:function (time,withoutSuffix) {
	return moment.duration( {
	to:this,from:time
}
).locale(this.locale()).humanize(!withoutSuffix);},fromNow:function (withoutSuffix) {
	return this.from(moment(),withoutSuffix);
}
,calendar:function (time) {
	// We want to compare the start of today,vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),sod = makeAs(now,this).startOf('day'),diff = this.diff(sod,'days',true),format = diff < -6 ? 'sameElse':diff < -1 ? 'lastWeek':diff < 0 ? 'lastDay':diff < 1 ? 'sameDay':diff < 2 ? 'nextDay':diff < 7 ? 'nextWeek':'sameElse';
	return this.format(this.localeData().calendar(format,this,moment(now)));
}
,isLeapYear:function () {
	return isLeapYear(this.year());
}
,isDST:function () {
	return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
}
,day:function (input) {
	var day = this._isUTC ? this._d.getUTCDay():this._d.getDay();
	if (input != null) {
	input = parseWeekday(input,this.localeData());
	return this.add(input - day,'d');
}
else {
	return day;
}
},month:makeAccessor('Month',true),startOf:function (units) {
	units = normalizeUnits(units);
	// the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
	case 'year':this.month(0);
	/* falls through */
            case 'quarter':case 'month':this.date(1);
	/* falls through */
            case 'week':case 'isoWeek':case 'day':this.hours(0);
	/* falls through */
            case 'hour':this.minutes(0);
	/* falls through */
            case 'minute':this.seconds(0);
	/* falls through */
            case 'second':this.milliseconds(0);
	/* falls through */
}
// weeks are a special case
            if (units === 'week') {
	this.weekday(0);
}
else if (units === 'isoWeek') {
	this.isoWeekday(1);
}
// quarters are also special
            if (units === 'quarter') {
	this.month(Math.floor(this.month() / 3) * 3);
}
return this;},endOf:function (units) {
	units = normalizeUnits(units);
	if (units === undefined || units === 'millisecond') {
	return this;
}
return this.startOf(units).add(1,(units === 'isoWeek' ? 'week':units)).subtract(1,'ms');},isAfter:function (input,units) {
	var inputMs;
	units = normalizeUnits(typeof units !== 'undefined' ? units:'millisecond');
	if (units === 'millisecond') {
	input = moment.isMoment(input) ? input:moment(input);
	return +this > +input;
}
else {
	inputMs = moment.isMoment(input) ? +input:+moment(input);
	return inputMs < +this.clone().startOf(units);
}
},isBefore:function (input,units) {
	var inputMs;
	units = normalizeUnits(typeof units !== 'undefined' ? units:'millisecond');
	if (units === 'millisecond') {
	input = moment.isMoment(input) ? input:moment(input);
	return +this < +input;
}
else {
	inputMs = moment.isMoment(input) ? +input:+moment(input);
	return +this.clone().endOf(units) < inputMs;
}
},isSame:function (input,units) {
	var inputMs;
	units = normalizeUnits(units || 'millisecond');
	if (units === 'millisecond') {
	input = moment.isMoment(input) ? input:moment(input);
	return +this === +input;
}
else {
	inputMs = +moment(input);
	return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
}
},min:deprecate(
                 'moment().min is deprecated,use moment.min instead. https://github.com/moment/moment/issues/1548',function (other) {
	other = moment.apply(null,arguments);
	return other < this ? this:other;
}
),max:deprecate(
                'moment().max is deprecated,use moment.max instead. https://github.com/moment/moment/issues/1548',function (other) {
	other = moment.apply(null,arguments);
	return other > this ? this:other;
}
),// keepLocalTime = true means only change the timezone,without
        // affecting the local hour. So 5:31:26 +0300 --[zone(2,true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
        // +0200,so we adjust the time as needed,to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case,then we have to adjust,because
        // there is no such time in the given timezone.
        zone:function (input,keepLocalTime) {
	var offset = this._offset || 0,localAdjust;
	if (input != null) {
	if (typeof input === 'string') {
	input = timezoneMinutesFromString(input);
}
if (Math.abs(input) < 16) {
	input = input * 60;
}
if (!this._isUTC && keepLocalTime) {
	localAdjust = this._dateTzOffset();
}
this._offset = input;
	this._isUTC = true;
	if (localAdjust != null) {
	this.subtract(localAdjust,'m');
}
if (offset !== input) {
	if (!keepLocalTime || this._changeInProgress) {
	addOrSubtractDurationFromMoment(this,moment.duration(offset - input,'m'),1,false);
}
else if (!this._changeInProgress) {
	this._changeInProgress = true;
	moment.updateOffset(this,true);
	this._changeInProgress = null;
}
}}else {
	return this._isUTC ? offset:this._dateTzOffset();
}
return this;},zoneAbbr:function () {
	return this._isUTC ? 'UTC':'';
}
,zoneName:function () {
	return this._isUTC ? 'Coordinated Universal Time':'';
}
,parseZone:function () {
	if (this._tzm) {
	this.zone(this._tzm);
}
else if (typeof this._i === 'string') {
	this.zone(this._i);
}
return this;},hasAlignedHourOffset:function (input) {
	if (!input) {
	input = 0;
}
else {
	input = moment(input).zone();
}
return (this.zone() - input) % 60 === 0;},daysInMonth:function () {
	return daysInMonth(this.year(),this.month());
}
,dayOfYear:function (input) {
	var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
	return input == null ? dayOfYear:this.add((input - dayOfYear),'d');
}
,quarter:function (input) {
	return input == null ? Math.ceil((this.month() + 1) / 3):this.month((input - 1) * 3 + this.month() % 3);
}
,weekYear:function (input) {
	var year = weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;
	return input == null ? year:this.add((input - year),'y');
}
,isoWeekYear:function (input) {
	var year = weekOfYear(this,1,4).year;
	return input == null ? year:this.add((input - year),'y');
}
,week:function (input) {
	var week = this.localeData().week(this);
	return input == null ? week:this.add((input - week) * 7,'d');
}
,isoWeek:function (input) {
	var week = weekOfYear(this,1,4).week;
	return input == null ? week:this.add((input - week) * 7,'d');
}
,weekday:function (input) {
	var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	return input == null ? weekday:this.add(input - weekday,'d');
}
,isoWeekday:function (input) {
	// behaves the same as moment#day except
            // as a getter,returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter,sunday should belong to the previous week.
            return input == null ? this.day() || 7:this.day(this.day() % 7 ? input:input - 7);
}
,isoWeeksInYear:function () {
	return weeksInYear(this.year(),1,4);
}
,weeksInYear:function () {
	var weekInfo = this.localeData()._week;
	return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);
}
,get:function (units) {
	units = normalizeUnits(units);
	return this[units]();
}
,set:function (units,value) {
	units = normalizeUnits(units);
	if (typeof this[units] === 'function') {
	this[units](value);
}
return this;},// If passed a locale key,it will set the locale for this
        // instance.  Otherwise,it will return the locale configuration
        // variables for this instance.
        locale:function (key) {
	var newLocaleData;
	if (key === undefined) {
	return this._locale._abbr;
}
else {
	newLocaleData = moment.localeData(key);
	if (newLocaleData != null) {
	this._locale = newLocaleData;
}
return this;}},lang:deprecate(
            'moment().lang() is deprecated. Instead,use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function (key) {
	if (key === undefined) {
	return this.localeData();
}
else {
	return this.locale(key);
}
}),localeData:function () {
	return this._locale;
}
,_dateTzOffset:function () {
	// On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return Math.round(this._d.getTimezoneOffset() / 15) * 15;
}
});
	function rawMonthSetter(mom,value) {
	var dayOfMonth;
	// TODO:Move this out of here!
        if (typeof value === 'string') {
	value = mom.localeData().monthsParse(value);
	// TODO:Another silent failure?
            if (typeof value !== 'number') {
	return mom;
}
}dayOfMonth = Math.min(mom.date(),daysInMonth(mom.year(),value));
	mom._d['set' + (mom._isUTC ? 'UTC':'') + 'Month'](value,dayOfMonth);
	return mom;}function rawGetter(mom,unit) {
	return mom._d['get' + (mom._isUTC ? 'UTC':'') + unit]();
}
function rawSetter(mom,unit,value) {
	if (unit === 'Month') {
	return rawMonthSetter(mom,value);
}
else {
	return mom._d['set' + (mom._isUTC ? 'UTC':'') + unit](value);
}
}function makeAccessor(unit,keepTime) {
	return function (value) {
	if (value != null) {
	rawSetter(this,unit,value);
	moment.updateOffset(this,keepTime);
	return this;
}
else {
	return rawGetter(this,unit);
}
};}moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds',false);
	moment.fn.second = moment.fn.seconds = makeAccessor('Seconds',false);
	moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes',false);
	// Setting the hour should keep the time,because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours',true);
	// moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date',true);
	moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.',makeAccessor('Date',true));
	moment.fn.year = makeAccessor('FullYear',true);
	moment.fn.years = deprecate('years accessor is deprecated. Use year instead.',makeAccessor('FullYear',true));
	// add plural methods
    moment.fn.days = moment.fn.day;
	moment.fn.months = moment.fn.month;
	moment.fn.weeks = moment.fn.week;
	moment.fn.isoWeeks = moment.fn.isoWeek;
	moment.fn.quarters = moment.fn.quarter;
	// add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;
	/************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
	// 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
}
function yearsToDays (years) {
	// years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
	return years * 146097 / 400;
}
extend(moment.duration.fn = Duration.prototype {
	_bubble:function () {
	var milliseconds = this._milliseconds,days = this._days,months = this._months,data = this._data,seconds,minutes,hours,years = 0;
	// The following code bubbles up values,see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;
	seconds = absRound(milliseconds / 1000);
	data.seconds = seconds % 60;
	minutes = absRound(seconds / 60);
	data.minutes = minutes % 60;
	hours = absRound(minutes / 60);
	data.hours = hours % 24;
	days += absRound(hours / 24);
	// Accurately convert days to years,assume start from year 0.
            years = absRound(daysToYears(days));
	days -= absRound(yearsToDays(years));
	// 30 days to a month
            // TODO (iskren):Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
	days %= 30;
	// 12 months -> 1 year
            years += absRound(months / 12);
	months %= 12;
	data.days = days;
	data.months = months;
	data.years = years;
}
,abs:function () {
	this._milliseconds = Math.abs(this._milliseconds);
	this._days = Math.abs(this._days);
	this._months = Math.abs(this._months);
	this._data.milliseconds = Math.abs(this._data.milliseconds);
	this._data.seconds = Math.abs(this._data.seconds);
	this._data.minutes = Math.abs(this._data.minutes);
	this._data.hours = Math.abs(this._data.hours);
	this._data.months = Math.abs(this._data.months);
	this._data.years = Math.abs(this._data.years);
	return this;
}
,weeks:function () {
	return absRound(this.days() / 7);
}
,valueOf:function () {
	return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
}
,humanize:function (withSuffix) {
	var output = relativeTime(this,!withSuffix,this.localeData());
	if (withSuffix) {
	output = this.localeData().pastFuture(+this,output);
}
return this.localeData().postformat(output);},add:function (input,val) {
	// supports only 2.0-style add(1,'s') or add(moment)
            var dur = moment.duration(input,val);
	this._milliseconds += dur._milliseconds;
	this._days += dur._days;
	this._months += dur._months;
	this._bubble();
	return this;
}
,subtract:function (input,val) {
	var dur = moment.duration(input,val);
	this._milliseconds -= dur._milliseconds;
	this._days -= dur._days;
	this._months -= dur._months;
	this._bubble();
	return this;
}
,get:function (units) {
	units = normalizeUnits(units);
	return this[units.toLowerCase() + 's']();
}
,as:function (units) {
	var days,months;
	units = normalizeUnits(units);
	if (units === 'month' || units === 'year') {
	days = this._days + this._milliseconds / 864e5;
	months = this._months + daysToYears(days) * 12;
	return units === 'month' ? months:months / 12;
}
else {
	// handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
	switch (units) {
	case 'week':return days / 7 + this._milliseconds / 6048e5;
	case 'day':return days + this._milliseconds / 864e5;
	case 'hour':return days * 24 + this._milliseconds / 36e5;
	case 'minute':return days * 24 * 60 + this._milliseconds / 6e4;
	case 'second':return days * 24 * 60 * 60 + this._milliseconds / 1000;
	// Math.floor prevents floating point math errors here
                    case 'millisecond':return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
	default:throw new Error('Unknown unit ' + units);
}
}},lang:moment.fn.lang,locale:moment.fn.locale,toIsoString:deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',function () {
	return this.toISOString();
}
),toISOString:function () {
	// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),months = Math.abs(this.months()),days = Math.abs(this.days()),hours = Math.abs(this.hours()),minutes = Math.abs(this.minutes()),seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
	if (!this.asSeconds()) {
	// this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
}
return (this.asSeconds() < 0 ? '-':'') +
                'P' +
                (years ? years + 'Y':'') +
                (months ? months + 'M':'') +
                (days ? days + 'D':'') +
                ((hours || minutes || seconds) ? 'T':'') +
                (hours ? hours + 'H':'') +
                (minutes ? minutes + 'M':'') +
                (seconds ? seconds + 'S':'');
}
,localeData:function () {
	return this._locale;
}
});
	moment.duration.fn.toString = moment.duration.fn.toISOString;
	function makeDurationGetter(name) {
	moment.duration.fn[name] = function () {
	return this._data[name];
}
;}for (i in unitMillisecondFactors) {
	if (hasOwnProp(unitMillisecondFactors,i)) {
	makeDurationGetter(i.toLowerCase());
}
}moment.duration.fn.asMilliseconds = function () {
	return this.as('ms');
}
;moment.duration.fn.asSeconds = function () {
	return this.as('s');
}
;moment.duration.fn.asMinutes = function () {
	return this.as('m');
}
;moment.duration.fn.asHours = function () {
	return this.as('h');
}
;moment.duration.fn.asDays = function () {
	return this.as('d');
}
;moment.duration.fn.asWeeks = function () {
	return this.as('weeks');
}
;moment.duration.fn.asMonths = function () {
	return this.as('M');
}
;moment.duration.fn.asYears = function () {
	return this.as('y');
}
;/************************************
        Default Locale
    ************************************/


    // Set default locale,other locale will inherit from English.
    moment.locale('en' {
	ordinalParse:/\d {
	1,2
}
(th|st|nd|rd)/,ordinal:function (number) {
	var b = number % 10,output = (toInt(number % 100 / 10) === 1) ? 'th':(b === 1) ? 'st':(b === 2) ? 'nd':(b === 3) ? 'rd':'th';
	return number + output;
}
});
	/* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
	/*global ender:false */
        if (typeof ender !== 'undefined') {
	return;
}
oldGlobalMoment = globalScope.moment;
	if (shouldDeprecate) {
	globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated,and will be removed in an upcoming ' +
                    'release.',moment);
}
else {
	globalScope.moment = moment;
}
}// CommonJS module is defined
    if (hasModule) {
	module.exports = moment;
}
else if (typeof define === 'function' && define.amd) {
	define('moment',['require','exports','module'],function (require,exports,module) {
	if (module.config && module.config() && module.config().noGlobal === true) {
	// release the global variable
                globalScope.moment = oldGlobalMoment;
}
return moment;});
	makeGlobal(true);}else {
	makeGlobal();
}
}).call(this);
	define('sf.b2c.mall.api.security.type',[],function() {
	return {
	UserLogin: {
	name:'UserLogin',code:0x2000
}
,RegisteredDevice: {
	name:'RegisteredDevice',code:0x0100
}
,None: {
	name:'None',code:0
}
};});
	/**
 * @class sf.b2c.mall.framework.adapter
 * @description adapter鍩虹被
 * @param {
	Object
}
can
 * @param {
	Object
}
_   underscore
 * @return {
	can.Map
}
*/
define('sf.b2c.mall.framework.adapter',['can','underscore'],function (can,_) {
	return can.Map.extend( {
	/**
     * @function sf.b2c.mall.framework.adapter.format
     * @description 瀵逛紶杈撹繘鏉ョ殑鏁版嵁杩涜鏍煎紡鍖�
     */
    format:function () {
	throw new Error('浣跨敤鍓嶅繀椤昏澶嶅啓');
}
,/**
     * @function sf.b2c.mall.framework.adapter.empty
     * @description 娓呯┖鐜板湪鐨刟ttrs
     */
    empty:function () {
	var handler = _.bind(function (value,key) {
	this.removeAttr(key);
}
,this);
	this.each(handler);},/**
     * @function sf.b2c.mall.framework.adapter.replace
     * @description 娓呯┖鐜板湪鐨刟ttrs涔嬪悗璁剧疆
     * @param {
	Map
}
attrs 闇€瑕佽缃殑鐔熸倝
     */
    replace:function (attrs) {
	this.empty();
	this.attr(attrs);
}
});});
	define('sf.b2c.mall.business.config',['zepto'],function($) {
	var MD5_KEY = 'www.sfht.com';
	var NONE_APPEND_WORD = 'sfhaitao.xyz!';
	var M_HOST = 'http://m.fengqu.com/';
	var HTTPS_M_HOST = 'https://m.fengqu.com/';
	var openHttps = true;
	// https 寮€鍏� begin
  var httpsAdapter = function() {
	if (openHttps) {
	HTTPS_M_HOST = 'https://m.fengqu.com/';
}
else {
	HTTPS_M_HOST = 'http://m.fengqu.com/';
}
};
	// https 寮€鍏� end

  httpsAdapter.apply(this);
	var VER = $('#version').attr('data-version') || Date.now();
	var DEFAULT_REQUEST_HEADER = {
	_aid:3,_sm:'md5'
}
;var host = window.location.hostname;
	var DEV_API_URL = {
	url:M_HOST + 'm.api',fileurl:M_HOST + 'file.api'
}
;var DEV_API_HTTPS_URL = {
	url:HTTPS_M_HOST + 'm.api',fileurl:HTTPS_M_HOST + 'file.api'
}
;var DEV_FILE_LINK = {
	'agreement':M_HOST + 'other/agreement.html?t=' + VER,'alipayframe':M_HOST + 'order/alipayframe.html?t=' + VER,'center':M_HOST + 'center/center.html?t=' + VER,'detail':M_HOST + 'detail/','gotopay':M_HOST + 'order/gotopay.html?t=' + VER,'index':M_HOST + 'index.html','login':openHttps ? M_HOST + 'user/login.html?t=' + VER:M_HOST + 'user/i.login.html?t=' + VER,'ilogin':HTTPS_M_HOST + 'user/i.login.html?t=' + VER,'order':M_HOST + 'order/order.html?t=' + VER,'mypoint':M_HOST + 'order/mypoint.html?t=' + VER,'orderdetail':M_HOST + 'order/orderdetail.html?t=' + VER,'orderlist':M_HOST + 'order/orderlist.html?t=' + VER,'pay-success':M_HOST + 'order/pay-success.html?t=' + VER,'register':openHttps ? M_HOST + 'user/register.html?t=' + VER:M_HOST + 'user/i.register.html?t=' + VER,'iregister':HTTPS_M_HOST + 'user/i.register.html?t=' + VER,'coupon':M_HOST + 'center/coupon.html?t=' + VER,'setpassword':M_HOST + 'user/setpassword.html?t=' + VER,'bindaccount':M_HOST + 'user/bindaccount.html?t=' + VER,'weixincenter':M_HOST + 'user/weixincenter.html?t=' + VER,'luckymoneyshare':M_HOST + 'other/luckymoneyshare.html?t=' + VER,'luckymoneyaccept':M_HOST + 'other/luckymoneyaccept.html?t=' + VER,'recaddrmanage':M_HOST + 'center/recaddrmanage.html?t=' + VER,// 'getalipaycoupon':M_HOST + 'getcoupons.html?t='+VER,'paysuccess':M_HOST + 'order/pay-success?t=' + VER
}
;return {
	setting: {
	'ver':VER,'none_append_word':NONE_APPEND_WORD,'default_header':DEFAULT_REQUEST_HEADER,'md5_key':MD5_KEY,'api':DEV_API_URL,'httpsapi':DEV_API_HTTPS_URL,'link':DEV_FILE_LINK,'openHttps':openHttps
}
};});
	/**
 * @author jiyanliang|weizhiqiang
 * @class sf.b2c.mall.framework.comm
 * @description comm閫氫俊鍩虹被
 */
define('sf.b2c.mall.framework.comm',[
    'zepto','zepto.cookie','can','underscore','md5','store','sf.b2c.mall.business.config','sf.b2c.mall.api.security.type'
  ],function($,cookie,can,_,md5,store,SFBizConfig,SecurityType) {
	window.getMetaData = function (key) {
	var meta = document.getElementsByTagName('meta');
	var share_desc = '';
	for (i in meta) {
	if (typeof meta[i].name != "undefined" && meta[i].name.toLowerCase() == key) {
	share_desc = meta[i].content;
}
}return share_desc;}window.title = window.document.title;
	window.getDescription = (function() {
	return window.getMetaData('description');
}
)(window);
	window.getShareIcon = (function () {
	return window.getMetaData('shareicon');
}
)(window);
	var ERROR_CODE_TOKEN_ERROR = -360;
	var ERROR_CODE_TOKEN_EXPIRE = -300;
	var ERROR_CODE_SIGNATURE_ERROR = -180;
	var ERROR_CODE_ACCESS_DENIED = -160;
	var TOKEN_AND_SIGNATURE_ERROR_GROUP = [
      ERROR_CODE_TOKEN_ERROR,ERROR_CODE_TOKEN_EXPIRE,ERROR_CODE_SIGNATURE_ERROR,ERROR_CODE_ACCESS_DENIED
    ];
	/**
     * @note 鏆傛椂鍏抽棴閿欒鎻愪氦
     * @param {
	String
}
errorMessage   閿欒淇℃伅
     * @param {
	String
}
scriptURI      鍑洪敊鐨勬枃浠�
     * @param {
	Long
}
lineNumber     鍑洪敊浠ｇ爜鐨勮鍙�
     * @param {
	Long
}
columnNumber   鍑洪敊浠ｇ爜鐨勫垪鍙凤紙IE鏀寔锛�
     * @param {
	Long
}
error          閿欒鍫嗘爤 锛坈hrome30鏀寔锛�
     */
    // window.onerror = function(errorMessage,scriptURI,lineNumber,columnNumber,error) {
	//   var msgs = [];
	//   msgs.push("errorMessage锛�",errorMessage);
	//   msgs.push(",file锛�",scriptURI);
	//   msgs.push(",errorplace锛�",lineNumber + 'line,' + columnNumber + 'column');
	//   msgs.push(",stack锛�",error);
	//   can.ajax( {
	//         url:"http://stat.t.sfht.com/b.txt?" + msgs.join(''),//         type:'post',//         contentType:"application/x-www-form-urlencoded;
	charset=UTF-8"
    //
}
)
    //
}
;can.route.ready();
	var _aid = $.fn.cookie('_aid');
	var addParamsToCookies = function () {
	if (window.userinfo) {
	// console.log(JSON.stringify(window.userinfo));
	return addParamsByAppSetting(window.userinfo);
}
var params = can.route.attr();
	if (params.cookieInfo) {
	$.fn.cookie(_aid + '_uinfo',params.cookieInfo);
}
if (params.appId) {
	SFBaseComm._aid = params.appId
        $.fn.cookie('_aid',params.appId {
	path:'/',domain:'.fengqu.com'
}
);}if (params.csrfToken) {
	store.set('csrfToken',params.csrfToken);
	$.fn.cookie(SFBaseComm._aid + '_ct',1 {
	path:'/',domain:'.fengqu.com'
}
);}if (params.token) {
	$.fn.cookie(SFBaseComm._aid + '_tk',window.decodeURIComponent(params.token) {
	path:'/',domain:'.fengqu.com'
}
);}if (params.deviceId) {
	$.fn.cookie('__da',params.deviceId {
	path:'/',domain:'.fengqu.com'
}
);}}var addParamsByAppSetting = function(params) {
	params = _.isArray(params) ? params[0]:params;
	if (params.appInfo && params.appInfo.appId) {
	SFBaseComm._aid = params.appInfo.appId
        $.fn.cookie('_aid',params.appInfo.appId {
	path:'/',domain:'.fengqu.com'
}
);}if (params.token && params.token.webCsrfToken) {
	store.set('csrfToken',params.token.webCsrfToken);
	$.fn.cookie(SFBaseComm._aid + '_ct',1 {
	path:'/',domain:'.fengqu.com'
}
);}else {
	$.fn.cookie(SFBaseComm._aid + '_ct',null);
}
if (params.token && params.token.cookieInfo) {
	$.fn.cookie(SFBaseComm._aid + '_uinfo',params.token.cookieInfo);
}
else {
	$.fn.cookie(SFBaseComm._aid + '_uinfo',null);
}
if (params.token && params.token.webToken) {
	$.fn.cookie(SFBaseComm._aid + '_tk',window.decodeURIComponent(params.token.webToken) {
	path:'/',domain:'.fengqu.com'
}
);}else {
	$.fn.cookie(SFBaseComm._aid + '_tk',null);
}
if (params.device && params.device.deviceId) {
	$.fn.cookie('__da',params.device.deviceId {
	path:'/',domain:'.fengqu.com'
}
);}}var SFBaseComm = can.Construct.extend( {
	/**
       * api鐨勫畾涔夐渶瑕佽姣忎釜瀛愮被澶嶅啓
       * @type {
	Object
}
*/
      api: {
	},/**
       * @function sf.b2c.mall.framework.comm.buildRequestData
       * @description 閫氳繃涓庡畾涔夌殑API鎺ュ彛鍜岀敤鎴烽€氳繃this.data浼犲叆鐨勫弬鏁版瀯寤哄悜鏈嶅姟绔彂璧疯姹傞渶瑕佺敤鍒扮殑鏁版嵁
       * @return {
	Object
}
鍚戞湇鍔＄鎻愪氦鐨勬暟鎹粨鏋�
       */
      buildRequestData:function() {
	if (this.api) {
	// 鍒ゆ柇fixture鐗规€�
          this.fixture = false;
	if (this.data && this.data.fixture) {
	this.fixture = true;
}
this.https = false;
	if (this.data && this.data['https']) {
	this.https = true;
}
if (!SFBizConfig.setting.openHttps) {
	this.https = false;
}
var requestData = {
	};
	// 娣诲姞姣忎釜璇锋眰鐨刜mt鍙傛暟
          _.extend(requestData {
	_mt:this.api.METHOD_NAME
}
);
	// 鎻愪緵鍏叡鍙傛暟
          _.extend(requestData,this.api.COMMON);
	var key;
	// 娣诲姞蹇呭～鍙傛暟
          for (key in this.api.REQUIRED) {
	requestData[key] = this.data[key];
}
// 娣诲姞閫夊～鍙傛暟
          for (key in this.api.OPTIONAL) {
	requestData[key] = this.data[key];
}
return requestData;}},/**
       * @override
       * @function sf.b2c.mall.framework.comm.init
       * @description 鍒濆鍖栨柟娉�
       * @param {
	Object
}
data 浼犲叆鐨勬秾鏉ユ彁浜ゆ湇鍔＄鐨勬暟鎹�
       */
      init:function(data) {
	addParamsToCookies();
	this.setData(data);
}
,/**
       * @function sf.b2c.mall.framework.setData
       * @description 淇敼璇锋眰鍙傛暟
       */
      setData:function(data) {
	this.data = data;
}
,/**
       * @function sf.b2c.mall.framework.sendRequest
       * @description 鏋勫缓璇锋眰
       * @param {
	boolean
}
isForceUserLogin 鏄惁闇€瑕佸己鍒剁敤鎴风櫥褰�
       * @return {
	Object
}
can.Deferred
       */
      sendRequest:function(isForceUserLogin,type) {
	//step1 璋冪敤瀛愪笟鍔＄被杩涜鏁版嵁鏍￠獙
        var checkResult = this.validate(isForceUserLogin);
	if (checkResult !== true) {
	return checkResult;
}
//step2 鏋勫缓ajax璇锋眰鏁版嵁锛屾斁鍒癰aseCommon鐨勫叏灞€鍙橀噺涓紝鍙互鏀寔澶氫釜璇锋眰涓€璧峰彂閫�
        var requestData = this.buildRequestData();
	if (type == 'jsonp' && SFBizConfig.setting.openHttps) {
	return this.jsonp(requestData);
}
//step3 鍙戦€佽姹�,鑾峰緱杩斿洖鏁版嵁
        return this.request(requestData,isForceUserLogin);
}
,/**
       * @function sf.b2c.framework.comm.validate
       * @description 鏍规嵁鐢ㄦ埛SecurityType杩涜妫€楠岋紝鍚屾椂涔熶細妫€楠屾瘮澶╁瓧娈垫槸鍚﹀啓鍏�
       * @returns {
	Error|Boolean
}
閿欒瀵硅薄|楠岃瘉鎴愬姛
       */
      validate:function(isForceUserLogin) {
	// 妫€鏌ュ繀濉瓧娈碉紝濡傛灉娌℃湁蹇呭～瀛楁鐩存帴鎶涢敊
        if (this.api) {
	if (!this.api.METHOD_NAME) {
	return '缂哄皯_mt';
}
for (var key in this.api.REQUIRED) {
	if (!_.has(this.data,key)) {
	return new Error('缂哄皯蹇呭～瀛楁' + key);
}
}}//鏍规嵁action鏍￠獙鏄惁鐧诲綍
        if (this.api.SECURITY_TYPE === SecurityType.UserLogin.name) {
	if (!this.checkUserLogin()) {
	if (isForceUserLogin) {
	this.goToLogin();
}
else {
	return new Error('璇ヨ姹傞渶瑕佸湪鐧诲綍鍚庡彂璧�');
}
}}return true;},addParamsToCookies:function () {
	// 濡傛灉鍦℉ash涓湁csrfToke鐩存帴鏇挎崲
        var params = can.route.attr();
	if (params.cookieInfo) {
	$.fn.cookie(_aid + '_uinfo',params.cookieInfo);
}
if (params.appId) {
	SFBaseComm._aid = params.appId
          $.fn.cookie('_aid',params.appId {
	path:'/',domain:'.fengqu.com'
}
);}if (params.csrfToken) {
	store.set('csrfToken',params.csrfToken);
	$.fn.cookie(SFBaseComm._aid + '_ct',1 {
	path:'/',domain:'.fengqu.com'
}
);}if (params.token) {
	$.fn.cookie(SFBaseComm._aid + '_tk',window.decodeURIComponent(params.token) {
	path:'/',domain:'.fengqu.com'
}
);}if (params.deviceId) {
	$.fn.cookie('__da',params.deviceId {
	path:'/',domain:'.fengqu.com'
}
);}},/**
       * @function sf.b2c.mall.framework.checkUserLogin
       * @description 妫€鏌ョ敤鎴锋槸鍚︾櫥闄�
       * @return {
	Boolean
}
鐢ㄦ埛鏄惁鐧婚檰
       */
      checkUserLogin:function() {
	// var csrf = window.localStorage ? window.localStorage.getItem('csrfToken'):$.jStorage.get('csrfToken');
	addParamsToCookies();
	var csrf = store.get('csrfToken');
	return !!($.fn.cookie(SFBaseComm._aid + '_ct') && csrf);
}
,/**
       * @function sf.b2c.mall.framework.goToLogin
       * @description 璺宠浆鍒扮櫥闄�
       */
      goToLogin:function() {
	// 鑾峰彇鐜板湪鐨刾athname浣滀负璺宠浆鐨刦rom渚濇嵁
        // var path = window.location.pathname;
	var path = window.location.href;
	if (path !== SFBizConfig.setting.login) {
	window.location.href = "http://m.fengqu.com/user/login.html" + '?from=' + escape(path);
}
},/**
       * @function sf.b2c.mall.framework.comm.access
       * @description 杩斿洖鐨勫弬鏁版槸鍚︽纭�
       * @param {
	Map
}
response          鏈嶅姟绔繑鍥炵殑淇℃伅
       * @param {
	Boolean
}
isForceUserLogin  鏄惁闇€瑕佸己鍒剁櫥闄�
       */
      access:function(response,isForceUserLogin) {
	if (response.stat.code === 0 && response.content[0] && response.stat.stateList[0].code === 0) {
	return true;
}
else if (_.contains(TOKEN_AND_SIGNATURE_ERROR_GROUP,response.stat.code) && isForceUserLogin) {
	this.goToLogin();
}
else {
	return false;
}
},/**
       * @function sf.b2c.mall.framework.comm.encrypt
       * @param {
	Map
}
params      闇€瑕佸姞瀵嗙殑鍙傛暟
       * @param {
	String
}
appendWord  鍔犺█
       */
      encrypt:function(params,appendWord) {
	var arr = [];
	// 灏哅ap鍙樻垚Array锛屼娇鐢╧ey=value鐨勬柟寮忚繘琛屾嫾鎺�
        _.each(params,function(value,key) {
	arr.push(key + '=' + value);
}
);
	// 浠scii杩涜鎺掑簭
        arr.sort();
	// 灏嗛槦鍒楁嫾鎺ユ垚String
        var str = arr.join('');
	str = str + appendWord;
	// 鍋歮d5鍔犲瘑
        return md5(str);
}
,/**
       * @function sf.b2c.mall.framework.comm.sign
       * @param {
	Map
}
params           鍙備笌璇锋眰绛惧悕鐨勫疄浣�
       * @param {
	Boolean
}
isForceUserLogin 鏄惁闇€瑕佸己鍒剁櫥闄�
       */
      sign:function(params,isForceUserLogin) {
	var map = {
	'None':function(data,force) {
	return _.extend(data {
	_sig:this.encrypt(data,SFBizConfig.setting['none_append_word'])
}
);},'RegisteredDevice':function(data,force) {
	return _.extend(data {
	_sig:this.encrypt(data,SFBizConfig.setting['none_append_word'])
}
);},'UserLogin':function(data,force) {
	// var csrf = window.localStorage ? window.localStorage.getItem('csrfToken'):$.jStorage.get('csrfToken');
	var csrf = store.get('csrfToken');
	if (csrf) {
	return _.extend(data {
	_sig:this.encrypt(data,csrf)
}
);}else {
	this.goToLogin();
}
}};
	if (_.isFunction(map[this.api.SECURITY_TYPE])) {
	// 杩囨护鎵€鏈夌殑undefined鍜宯ull鐨勬暟鎹�
          _.each(params,function(value,key,list) {
	if (_.isUndefined(value) || _.isNull(value)) {
	delete params[key];
}
});
	// 灏嗗弬鏁伴檮鍔犱笂蹇呴』瑕佷紶閫掔殑鏍囪
          var required = _.extend(params,SFBizConfig.setting['default_header']);
	required = _.extend(required {
	_aid:SFBaseComm._aid
}
);
	// 鍋氬姞瀵嗙敓浜sig瀵硅薄
          var _sig = map[this.api.SECURITY_TYPE].call(this,required,isForceUserLogin);
	// 杩斿洖鏁版嵁鍙互鐩存帴鍋氳姹�
          return _.extend(required,_sig);
}
else {
	return params;
}
},jsonp:function (data) {
	data = _.extend(data {
	_cb:'fengqujsonpcallback',_:Date.now()
}
);
	var def = can.Deferred();
	var that = this;
	window.fengqujsonpcallback = function (data) {
	if (that.access(data,false)) {
	def.resolve(data.content[0])
}
else {
	if (data.stat.stateList.length == 0) {
	def.reject(data.stat.code);
}
else {
	def.reject(data.stat.stateList[0].code,data.stat.stateList[0].msg);
}
}}var scriptTag = document.createElement('script');
	scriptTag.src = 'https://www.fengqu.com/m.api' + '?' + $.param(this.sign(data));
	scriptTag.type="text/javascript"
        document.body.appendChild(scriptTag);
	return def;
}
,/**
       * @function sf.b2c.mall.framework.request
       * @param {
	Map
}
data             璇锋眰鍙傛暟
       * @param {
	Boolean
}
isForceUserLogin 鏄惁闇€瑕佸己鍒剁櫥闄�
       * @return {
	can.Deferred
}
*/
      request:function(data,isForceUserLogin) {
	var def = can.Deferred();
	var that = this;
	var successCallback = function(response) {
	if (response && response.stat) {
	that.serverTime = response.stat.systime;
}
if (that.access(response,isForceUserLogin)) {
	that.afterRequest(data._mt,response.content[0]);
	def.resolve(response.content[0]);
}
else {
	if (response.stat.stateList.length == 0) {
	// -180鍒欐竻绌烘墍鏈塻torage
              if (response.stat.code == ERROR_CODE_SIGNATURE_ERROR) {
	store.clear();
	that.goToLogin();
}
def.reject(response.stat.code);}else {
	// -180鍒欐竻绌烘墍鏈塻torage
              if (response.stat.code == ERROR_CODE_SIGNATURE_ERROR) {
	store.clear();
	that.goToLogin();
}
def.reject(response.stat.stateList[0].code,response.stat.stateList[0].msg);}}}var failCallback = function(error) {
	def.reject(error);
}
$.ajax( {
	url:that.https ? SFBizConfig.setting.httpsapi.url:SFBizConfig.setting.api.url,type:'post',contentType:"application/x-www-form-urlencoded;
	charset=UTF-8",data:that.sign(data),fixture:that.fixture,success:function(response) {
	successCallback(response);
}
,fail:function(error) {
	failCallback(error);
}
})
          .done(function(response) {
	successCallback(response);
}
)
          .fail(function(error) {
	failCallback(error);
}
);
	return def;},/**
       * @description 閫氳繃鏈嶅姟绔帴鍙ｆ瘡娆′粠stat涓繑鍥炵殑system鍦ㄥ鎴风涓繚鐣欐湇鍔＄鏃堕棿
       * @return {
	Int
}
鏈嶅姟绔椂闂寸殑鏃堕棿鎴�
       */
      getServerTime:function() {
	return this.serverTime;
}
,/**
       * @description 璇锋眰鍚庡鐞嗗洖璋�
       * @function sf.b2c.mall.framework.comm.afterRequest
       * @param {
	String
}
mt
       * @param {
	Map
}
response
       */
      afterRequest:function(mt,response) {
	var map = {
	'user.webLogin':function(response) {
	store.set('csrfToken',response.csrfToken);
	// if (window.localStorage) {
	//   window.localStorage.setItem('csrfToken',response.csrfToken);
	//
}
else {
	//   $.jStorage.set('csrfToken',response.csrfToken);
	//
}
},"user.partnerLogin":function(response) {
	store.set('csrfToken',response.csrfToken);
}
,"user.mobileRegister":function(response) {
	store.set('csrfToken',response.csrfToken);
}
};
	if (_.isFunction(map[mt])) {
	map[mt].call(this,response);
}
},/**
       * @description 璋冪敤绠€鍗曠殑ajax璇锋眰
       * @param {
	Map
}
data 璇锋眰$.ajaxSetting
       * @return {
	Object
}
can.Deferred
       */
      ajax:function(data) {
	return can.ajax(data);
}
});
	SFBaseComm.register = function(aid) {
	if (_aid) {
	this._aid = _aid;
}
else {
	this._aid = aid;
}
}return SFBaseComm;});
	/**
 * @class sf.b2c.mall.framework.multiple.comm
 * @description comm鐨勫悎骞堕€氫俊
 * @example
 *
 * ```
 * var webLogin = new SFUserWebLogin(utils.testData.user4Login);
	*
 *     webLogin
 *       .sendRequest()
 *       .done(function(loginResult) {
	*
}
)
 *       .fail(function(errorCode) {
	*         errorCode.should.equal(0);
	*         done();
	*
}
)
 *       .then(function(loginResult) {
	*         request_a = new SFGetSKUInfo( {
	sku:1
}
);
	*         request_b = new SFGetUserInfo();
	*
 *         var mComm = new SFFrameworkMultipleComm([request_a,request_b]);
	*         mComm.setData([request_a.data,request_b.data]);
	*         return mComm.sendRequest();
	*
}
)
 *       .done(function(message) {
	*         console.log(message)
 *         message.length.should.equal(2)
 *         message[0].skuId.should.equal('1')
 *         message[1].mailId.should.equal(utils.testData.user4Login.accountId)
 *         done();
	*
}
)
 *       .fail(function(stat) {
	*         for(var i in stat.stateList) {
	*           stat.stateList[i].code.should.equal(0);
	*
}
*         done();
	*})
 * ```
 */

define(
  'sf.b2c.mall.framework.multiple.comm',[
    'underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.business.config','sf.b2c.mall.api.security.type'
  ],function ( _,SFComm,SFBizConfig,SecurityType) {
	var ERROR_CODE_TOKEN_ERROR = -360;
	var ERROR_CODE_TOKEN_EXPIRE = -300;
	var ERROR_CODE_SIGNATURE_ERROR = -180;
	var ERROR_CODE_ACCESS_DENIED = -160;
	var TOKEN_AND_SIGNATURE_ERROR_GROUP = [
      ERROR_CODE_TOKEN_ERROR,ERROR_CODE_TOKEN_EXPIRE,ERROR_CODE_SIGNATURE_ERROR,ERROR_CODE_ACCESS_DENIED
    ];
	return SFComm.extend( {
	/**
       * @override
       * @function sf.b2c.mall.framework.multiple.comm.init
       * @description 鍦╥nit鏂规硶涓紶鍏omm鐨勯槦鍒�
       * @param {
	List<Comm>
}
comms comms 闇€瑕佸悎骞剁殑鎺ュ彛Array
       */
      init:function (comms) {
	this.buildApi(comms);
}
,/**
       * @function sf.b2c.mall.framework.multiple.comm.buildApi
       * @description 涓簃ultiple鍒涘缓api瀵硅薄
       * @param {
	List<Comm>
}
comms 闇€瑕佸悎骞剁殑鎺ュ彛Array
       */
      buildApi:function (comms) {
	var apis = _.pluck(comms,'api');
	// 鎷兼帴_mt瀛楁楗挎柟娉曡姹�
        var _mt_arr = _.pluck(apis,'METHOD_NAME');
	this.api.METHOD_NAME = _mt_arr.join(',');
	// 鑾峰彇SecurityType
        var securityType = {
	code:-1,name:null
}
;_.each(apis,function(api) {
	var st = SecurityType[api.SECURITY_TYPE];
	if (st.code > securityType.code) {
	securityType = st;
}
});
	this.api.SECURITY_TYPE = securityType.name;
	// 璁剧疆Data
        this.api.REQUIRED = _.pluck(apis,'REQUIRED');
	this.api.OPTIONAL = _.pluck(apis,'OPTIONAL');
}
,/**
       * @override
       * @function sf.b2c.mall.framework.multiple.comm.buildRequestData
       * @description 瀵筸ultiple鐨刢omms鍋氭暟鎹鐞�
       */
      buildRequestData:function () {
	if (this.api) {
	var requestData = {
	};
	_.extend(requestData {
	'_mt':this.api.METHOD_NAME
}
);
	_.extend(requestData,this.api.COMMON);
	var that = this;
	var key;
	_.each(this.api.REQUIRED,function(apis,index) {
	for (key in that.api.REQUIRED[index]) {
	requestData[index + '_' + key] = that.data[index][key];
}
});
	_.each(this.api.OPTIONAL,function(apis,index) {
	for (key in that.api.OPTIONAL[index]) {
	requestData[index + '_' + key] = that.data[index][key];
}
});
	return requestData;}},/**
       * @override
       * @function sf.b2c.mall.framework.multiple.comm.access
       * @description 杩斿洖鐨勫弬鏁版槸鍚︽纭�
       * @param {
	Map
}
response          鏈嶅姟绔繑鍥炵殑淇℃伅
       * @param {
	Boolean
}
isForceUserLogin  鏄惁闇€瑕佸己鍒剁櫥闄�
       */
      access:function(responses,isForceUserLogin) {
	if (_.isArray(responses.content)) {
	var that = this;
	var result = true;
	_.each(responses.content,function(response,index) {
	result = result && that._access(responses,index,isForceUserLogin);
}
);
	return result;}else {
	return this._access(responses,0,isForceUserLogin);
}
},_access:function (response,index,isForceUserLogin) {
	if (response.stat.code === 0 && response.content[index] && response.stat.stateList[index].code === 0) {
	return true;
}
else if (_.contains(TOKEN_AND_SIGNATURE_ERROR_GROUP,response.stat.code) && isForceUserLogin) {
	this.goToLogin();
}
else {
	return false;
}
},/**
       * @function sf.b2c.mall.framework.request
       * @param {
	Map
}
data             璇锋眰鍙傛暟
       * @param {
	Boolean
}
isForceUserLogin 鏄惁闇€瑕佸己鍒剁櫥闄�
       * @return {
	can.Deferred
}
*/
      request:function(data,isForceUserLogin) {
	var def = can.Deferred();
	var successCallback = function(response) {
	if (response && response.stat) {
	that.serverTime = response.stat.systime;
}
if (that.access(response,isForceUserLogin)) {
	that.afterRequest(data._mt,response.content);
	def.resolve(response.content);
}
else {
	if (response.stat.stateList.length == 0) {
	// -180鍒欐竻绌烘墍鏈塻torage
              if (response.stat.code == ERROR_CODE_SIGNATURE_ERROR) {
	store.clear();
	that.goToLogin();
}
def.reject(response.stat.code);}else {
	def.reject(response.stat.stateList[0].code,response.stat.stateList[0].msg);
}
}}var failCallback = function(error) {
	def.reject(error);
}
var that = this;
	$.ajax( {
	url:SFBizConfig.setting.api.url,type:'post',contentType:"application/x-www-form-urlencoded;
	charset=UTF-8",data:that.sign(data),fixture:that.fixture,success:function(response) {
	successCallback(response);
}
,fail:function(error) {
	failCallback(error);
}
})
          .done(function(response) {
	successCallback(response);
}
)
          .fail(function(error) {
	failCallback(error);
}
);
	return def;},});});
	/**
 * @class sf.b2c.mall.framework.view.controller
 * @description view.controller鍩虹被
 * @param {
	Object
}
can
 * @param {
	Object
}
_   underscore
 * @return {
	can.Map
}
*/
define('sf.b2c.mall.framework.view.controller',['can','underscore'],function (can,_) {
	return can.Control.extend( {
	/**
     * @function sf.b2c.mall.framework.view.controller.draw
     * @description view鐨勭粯鍒�
     * @param {
	String
}
template  妯＄増鍚嶇О
     * @param {
	Map
}
data      鏁版嵁
     * @param {
	Mustache.Helper
}
helper
     */
    draw:function (template,data,helper) {
	this.element.html(can.view(template,data,helper || {
	}));
}
,/**
     * @function sf.b2c.mall.framework.view.controller.render
     * @description view鐨勭1灞傛覆鏌�
     */
    render:function () {
	throw('浣跨敤鍓嶅繀椤昏澶嶅啓');
}
,/**
     * @function sf.b2c.mall.framework.view.controller.supplement
     * @description view鐨勭2灞傛覆鏌�
     */
    supplement:function () {
	throw('浣跨敤鍓嶅繀椤昏澶嶅啓');
}
});});
	// Auto Generated.  DO NOT EDIT!
/**
  * @class sf.b2c.mall.api.b2cmall.getPrices
  * @param {
	Object
}
$
  * @param {
	Object
}
can
  * @param {
	Object
}
_
  * @param {
	can.Construct
}
Comm
  * @param {
	Object
}
SecurityType
  * @return {
	can.Construct
}
*/
define(
'sf.b2c.mall.api.user.findbackCsrf',[
  'zepto','can','underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.api.security.type'
],function($,can,_,Comm,SecurityType) {
	return Comm.extend( {
	api: {
	METHOD_NAME:'user.findbackCsrf',SECURITY_TYPE:SecurityType.None.name,REQUIRED: {
	},OPTIONAL: {
	},VERIFY: {
	},ERROR_CODE: {
	}
}
});});
	/**
 * @author jiyanliang|weizhiqiang
 * @class sf.b2c.mall.framework.comm
 * @description comm閫氫俊鍩虹被
 */
define('sf.b2c.mall.framework.https',[
    'zepto','zepto.cookie','can','underscore','md5','store','sf.b2c.mall.framework.comm','sf.b2c.mall.api.user.findbackCsrf',],function($,cookie,can,_,md5,store,SFComm,SFfindbackCsrf) {
	var SFHttps = can.Construct.extend( {
	/**
       * @override
       * @function sf.b2c.mall.framework.comm.init
       * @description 鍒濆鍖栨柟娉�
       */
      init:function() {
	this.checkCsrfToken();
}
,checkCsrfToken:function() {
	if (typeof $.fn.cookie('3_ct') === 'undefined' || $.fn.cookie('3_ct') === "0" || $.fn.cookie('3_ct') === null) {
	store.remove("csrfToken");
	return false;
}
if ($.fn.cookie('3_ct') == 1 && !store.get('csrfToken')) {
	var findbackCsrf = new SFfindbackCsrf( {
	"https":true
}
);
	findbackCsrf.sendRequest(false,'jsonp')
            .done(function(data) {
	store.set('csrfToken',data.value);
	// window.location.reload();
	return false;
}
)
            .fail(function(error) {
	console.error(error);
}
);}}});
	return new SFHttps();});
	/**
 * @class sf.b2c.mall.util.check
 * @param {
	Object
}
$
 * @param {
	Object
}
can
 * @param {
	Object
}
_
 * @param {
	Object
}
errorCode
 */
define('sf.b2c.mall.util.utils',[
    'zepto','can','underscore','md5','sf.b2c.mall.business.config',],function($,can,_,md5,SFBizConfig) {
	return {
	/**
       * [md5 杩涜MD5鍔犲瘑]
       * @param {
	[type]
}
str
       * @return {
	[type]
}
*/
      md5:function(str) {
	return md5(str + SFBizConfig.setting.md5_key);
}
}});
	define('text!template_widget_message',[],function () {
	return '<div id="messagedialog">\n <section class="mask dialog dialog1">\n    <div class=" center" style="\n    padding-top:30px;
	\n    padding-left:12px;
	\n    padding-right:12px;
	\n">\n      <h2> {
	{{tip
}
}}</h2>\n      <div class="dialog1-r1">\n {
	{{buttons
}
}}\n      </div>\n      <a href="javascript:" class="icon icon15" id="close">鍏抽棴</a>\n    </div>\n\n  </section>\n</div>';});
	define(
  'sf.b2c.mall.widget.message',[
    'zepto','can','sf.b2c.mall.business.config','text!template_widget_message'
  ],function($,can,SFConfig,template_widget_message) {
	return can.Control.extend( {
	init:function(element,options) {
	//绫诲瀷鏈変笁绉嶏紝鎻愮ず閿欒淇℃伅error锛屾彁绀虹‘璁や俊鎭痗onfirm锛屾彁绀烘垚鍔熶俊鎭痵uccess
        this.data = {
	};
	this.data.type = this.options.type;
	this.data.tip = this.options.tip;
	this.data.okFunction = typeof this.options.okFunction != 'undefined' ? this.options.okFunction:null;
	this.data.closeFunction = typeof this.options.closeFunction != 'undefined' ? this.options.closeFunction:null;
	this.data.buttons = this.buttonsMap[this.data.type];
	this.render();
}
,render:function() {
	this.setup($('body'));
	// this.options.html = can.view(template_widget_message,this.data);
	var renderFn = can.mustache(template_widget_message);
	this.options.html = renderFn(this.data);
	$('body').append(this.options.html);
}
,buttonsMap: {
	'confirm':'<a href="javascript:void(0)" class="btn btn-normal warnning" id="ok">纭畾</a><a href="javascript:void(0)" class="btn btn-normal" id="cancel">鍙栨秷</a>','error':'<a href="javascript:void(0)" class="btn btn-normal warnning" id="ok">纭畾</a>','success':'<a href="javascript:void(0)" class="btn btn-normal warnning" id="ok">纭畾</a>'
}
,'#close click':function() {
	this.close();
	return false;
}
,'#ok click':function() {
	if (typeof this.data.okFunction != 'undefined' && this.data.okFunction != null) {
	this.data.okFunction.apply(this);
}
this.close();
	return false;},'#cancel click':function() {
	if (typeof this.data.closeFunction != 'undefined' && this.data.closeFunction != null) {
	this.data.closeFunction.apply(this);
}
this.close();
	return false;},close:function() {
	$('#messagedialog').remove();
	//瑕佸仛閿€姣侊紝鍚﹀垯缁戝畾鐨勪簨浠惰繕浼氬瓨鍦�
        this.destroy();
}
});});
	define('text!template_widget_loading',[],function () {
	return '<div class="loadingDIV loading center"></div>';
}
);
	define(
  'sf.hybrid',[
    'zepto','can','underscore','md5','store'
  ],function($,can,_,md5,store) {
	var toRoot = function() {
	$('.nav-index').click(function(e) {
	e.preventDefault();
	sfnavigator.popToRoot();
}
)}var getInfo = {
	getAppInfo:function() {
	//杩欓噷缁欏嚭榛樿鍊�
        var appVersion = "1.0.0";
	if (device.appVersion) {
	appVersion = device.appVersion;
}
return appVersion;}}var toast = {
	show:function(message) {
	sf.toast.show(message);
}
,loading:function(message) {
	sf.toast.loading(message);
}
,dismiss:function() {
	sf.toast.dismiss();
}
}var login = function() {
	var def = can.Deferred();
	var completecallback = function(logininfo) {
	if (logininfo.isLogin) {
	getTokenInfo()
            .done(function(data) {
	def.resolve(data);
}
)
            .fail(function(error) {
	def.reject();
}
)}else {
	def.reject();
}
};
	var cancelcallback = function() {
	def.reject();
}
;sf.sign.auth(completecallback,cancelcallback);
	return def;};
	var getTokenInfo = function() {
	var def = can.Deferred();
	var successcallback = function(data) {
	store.set('csrfToken',data.device.deviceSecret);
	store.set('_tk',data.token);
	def.resolve(data);
}
sf.userapi.getTokenInfo(successcallback);
	return def;};
	var logout = function() {
	var def = can.Deferred();
	var successcallback = function(data) {
	store.set('HYBRID_IS_LOGIN',false);
	def.resolve(data);
}
;var errorcallback = function(error) {
	def.reject(error);
}
;sf.userapi.logout(successcallback,errorcallback);
	return def;};
	var isLogin = function() {
	var def = can.Deferred();
	var successcallback = function(isLogin) {
	if (isLogin) {
	store.set('HYBRID_IS_LOGIN',true);
}
else {
	store.set('HYBRID_IS_LOGIN',false);
}
def.resolve(isLogin);}sf.userapi.isLogin(successcallback);
	return def;};
	var pay = function(orderId,payType) {
	var def = can.Deferred();
	var map = {
	'ALIPAY':sf.payment.PayType.ALIPAY,'WEIXINPAY':sf.payment.PayType.WXPAY
}
var successcallback = function(data) {
	def.resolve(data);
}
var errorcallback = function(error) {
	def.reject(error);
}
sf.payment.requestPay(orderId,map[payType],successcallback,errorcallback);
	return def;};
	var share = function(message) {
	var def = can.Deferred();
	var successcallback = function(data) {
	def.resolve(data);
}
var errorcallback = function(error) {
	def.reject(error)
}
sf.socialsharing.share(message,successcallback.errorcallback);
	return def;}var sfnavigator = {
	setTitle:function(title) {
	sf.navigation.setTitle(title)
}
,setRightButton:function(title,imagePath,onclick) {
	sf.navigation.setRightButton(title,imagePath,onclick);
}
,setLeftButton:function(onclick) {
	sf.navigation.setLeftButton(onclick);
}
,setNavigationBarHidden:function(hidden,animate) {
	sf.navigation.setNavigationBarHidden(hidden,animate);
}
,pop:function(animate) {
	sf.navigation.pop(animate);
}
,popToRoot:function(animate) {
	sf.navigation.popToRoot(animate);
}
,popToIdentifier:function(identifier,animate) {
	sf.navigation.popToIdentifier(identifier,animate);
}
}var sfnotifivation = {
	add:function(key,callback) {
	sf.notificationCenter.add(key,callback);
}
,remove:function(key) {
	sf.notificationCenter.remove(key)
}
,post:function (key,params) {
	sf.notificationCenter.post(key,params)
}
}var setNetworkListener = function() {
	var isBroken = false;
	document.addEventListener("offline",function() {
	if ($('.network').length == 0) {
	$('body').prepend('<div style="background:#ffb900;
	font-size:14px;
	padding:12px;
	" class="network">褰撳墠缃戠粶涓嶅彲鐢紝璇锋鏌ョ綉缁滆缃�</div>');
	isBroken = true;
}
;},false);
	document.addEventListener("online",function() {
	if (isBroken) {
	window.location.reload();
}
else {
	$('.network').remove()
}
},false);}var run = function (key,params) {
	var map = {
	'updateCartNumber':'NotificationAddedCart'
}
;var urlscheme = 'sfht://service/pluginHelper?plugin=SFNotificationCenter&method=post&params=["' + map[key] + '",' + JSON.stringify(params) + ']';
	if ($('#apprunner').length == 0) {
	var $el = $('<iframe id="apprunner" style="height:0px"></iframe>');
	$el.attr('src',urlscheme);
	$('body').append($el);
}
else {
	$('#apprunner').attr('src',urlscheme);
}
return false;};
	var h5pop = function (animate) {
	var params = {
	"animate":animate
}
;var urlscheme = 'sfht://service/pluginHelper?plugin=SFNavigation&method=pop';
	if ($('#apprunner').length == 0) {
	var $el = $('<iframe id="apprunner" style="height:0px"></iframe>');
	$el.attr('src',urlscheme);
	$('body').append($el);
}
else {
	$('#apprunner').attr('src',urlscheme);
}
return false;};
	var h5share = function (title,description,imageUrl,url) {
	var params = {
	"subject":title,"description":description,"imageUrl":imageUrl,"url":url
}
;var urlscheme = 'sfht://service/pluginHelper?plugin=SocialSharing&method=share&params='+ encodeURIComponent('[' + JSON.stringify(params) + ']');
	if ($('#apprunner').length == 0) {
	var $el = $('<iframe id="apprunner" style="height:0px"></iframe>');
	$el.attr('src',urlscheme);
	$('body').append($el);
}
else {
	$('#apprunner').attr('src',urlscheme);
}
return false;};
	return {
	login:login,isLogin:isLogin,getTokenInfo:getTokenInfo,getInfo:getInfo,pay:pay,logout:logout,sfnavigator:sfnavigator,share:share,setNetworkListener:setNetworkListener,toRoot:toRoot,toast:toast,notification:sfnotifivation,run:run,h5pop:h5pop,h5share:h5share
}
});
	define('sf.util',[
  'zepto','can','underscore','md5','store','sf.b2c.mall.business.config'
],function($,can,_,md5,store,config) {
	//$(window).hashchange();
	can.route.ready();
	// window.getShareIcon = function() {
	//   var src = $('#icon').attr('data-src');
	//   return src || 'false';
	//
}
// @note 璇锋眰瀛樺湪璺ㄥ煙闂锛岄渶瑕佸閮ㄦ敮鎸�
  window.onerror = function(msg,url,line) {
	var params = $.param( {
	msg:msg,url:url,line:line
}
);
	var code = window.btoa(params);
	var link = 'http://stat.t.sfht.com/jserror.gif?' + code;
	var img = new Image();
	img.width = 1;
	img.height = 1;
	img.onload = function() {
	img = img.onerror = img.onload = null;
}
img.onerror = function() {
	img = img.onerror = img.onload = null;
}
;img.src = link;}return {
	checkEmail:function(data) {
	return /^([a-zA-Z0-9-_]*[-_\.]?[a-zA-Z0-9]+)*@([a-zA-Z0-9]*[-_]?[a-zA-Z0-9]+)+[\.][a-zA-Z] {
	2,3
}
([\.][a-zA-Z] {
	2
}
)?$/.test(data)},/** [dotCode 浠ｇ爜鎵撶偣] */
    dotCode:function() {
	if (window.SFHT && window.SFHT.T && window.SFHT.T.send) {
	SFHT.T.send();
}
},isMobile: {
	Android:function() {
	return navigator.userAgent.match(/Android/i);
}
,BlackBerry:function() {
	return navigator.userAgent.match(/BlackBerry/i);
}
,iOS:function() {
	return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}
,Opera:function() {
	return navigator.userAgent.match(/Opera Mini/i);
}
,Windows:function() {
	return navigator.userAgent.match(/IEMobile/i);
}
,Firefox:function() {
	return (navigator.userAgent.indexOf("Firefox") > -1)
}
,QQ:function () {
	return (navigator.userAgent.indexOf('QQ') > -1);
}
,WeChat:function() {
	var isWeChat = navigator.userAgent.match(/MicroMessenger/i);
	if (isWeChat) {
	store.remove('IS_APP');
}
return isWeChat},AlipayChat:function() {
	var isAlipayChat = navigator.userAgent.match(/AlipayClient/i);
	if (isAlipayChat) {
	store.remove('IS_APP');
}
return isAlipayChat},APP:function() {
	var isApp = config.setting['is_app'] || store.get('IS_APP');
	var hash = window.location.hash;
	var search = window.location.search;
	var whole = search + hash;
	if (isApp) {
	return isApp;
}
else if (whole.indexOf('platform=android') > -1) {
	store.set('IS_APP','android');
	return 'android';
}
else if (whole.indexOf('platform=ios') > -1) {
	store.set('IS_APP','ios');
	return 'ios';
}
else {
	return false;
}
},onlineApp:function() {
	if (this.APP() && !window.cordova) {
	return true;
}
else {
	return false;
}
},localApp:function() {
	if (this.APP() && window.cordova && window.sf) {
	return true;
}
else {
	return false;
}
},any:function() {
	return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()) || this.Firefox();
}
},namespace:function(name) {
	var arr = name.split('.');
	var container = sf;
	for (var i = 0;
	i < arr.length;
	i++) {
	container[arr[i]] = container[arr[i]] || {
	};
	container = container[arr[i]];
}
return container;},access:function(data,isForce) {
	if (data.stat.code === 0 && data.content[0] && data.stat.stateList[0].code === 0) {
	return true;
}
else if (data.stat.code == -180 || data.stat.code == -360) {
	if (isForce) {
	var pathname = window.location.pathname;
	if (pathname != '/login.html') {
	window.location.href = 'http://m.fengqu.com/user/login.html';
}
}}else {
	return false;
}
},clean:function(params) {
	_.each(params,function(value,key,list) {
	if (_.isUndefined(value) || _.isNull(value)) {
	delete params[key];
}
});
	return params;},encrypt:function(params,word) {
	_.each(params,function(value,key,list) {
	if (_.isUndefined(value)) {
	delete params[key];
}
});
	var arr = [];
	_.each(params,function(value,key,list) {
	arr.push(key + '=' + value);
}
);
	arr.sort();
	var str = arr.join('');
	str = str + word;
	return md5(str);},tip:function(message,time) {
	var $el = $('<div class="dialog-cart" style="z-index:9999;
	"><div class="dialog-cart-inner" style="width:242px;
	padding:20px 60px;
	"><p style="margin-bottom:10px;
	">' + message + '</p></div><a href="javascript:" class="icon icon108 closeDialog">鍏抽棴</a></div>');
	if ($('.dialog-cart').length > 0) {
	return false;
}
;$(document.body).append($el);
	$('.closeDialog').click(function(event) {
	$el.remove();
}
);
	setTimeout(function() {
	$el.remove();
}
,time || "3000");},sign:function(params,isForce) {
	var that = this;
	var map = {
	'NONE':function(data,force) {
	var word = 'sfhaitao.xyz!';
	return _.extend(data {
	_sig:sf.util.encrypt(data,word)
}
);},'USERLOGIN':function(data,force) {
	var csrf = store.get('csrfToken')

          if (csrf) {
	return _.extend(data {
	_sig:that.encrypt(data,csrf)
}
);}else {
	if (force) {
	var pathname = window.location.pathname;
	if (pathname != '/login.html') {
	window.location.href = 'http://m.fengqu.com/user/login.html';
}
}else {
	return data;
}
}}};
	var action = map[params.level];
	if (_.isFunction(action)) {
	var p = _.extend(params.data {
	_aid:1,_sm:'md5'
}
);
	return action(p);}else {
	return params.data;
}
}};});
	define(

  'sf.env.switcher',[
    'zepto','can','underscore','sf.util',],function($,can,_,SFFn) {
	var setting = ['web','wechat','alipay','localapp','onlineapp','app'];
	var defaultSetting = 'web';
	return can.Control.extend( {
	init:function() {
	this.options.env = this.getEnvInfo();
	this.options.group = {
	};
}
,getEnvInfo:function() {
	var defaultEnv = 'web';
	var loop = {
	'wechat':function() {
	return SFFn.isMobile.WeChat();
}
,'alipay':function() {
	return SFFn.isMobile.AlipayChat();
}
,'localapp':function () {
	return SFFn.isMobile.localApp();
}
,'onlineapp':function () {
	return SFFn.isMobile.onlineApp();
}
,// @todo app鐨勫垽鏂€昏緫棰勭暀
          'app':function() {
	// @deprecated
            // 濡傛灉鏈塩ordova瀵硅薄瀛樺湪鍒欏垽鏂湪app涓�
            // return !!cordova;
	return SFFn.isMobile.APP();
}
}var env = [];
	for (var i in loop) {
	if (loop[i]()) {
	env.push(i);
}
}return env.length > 0 ? env:[defaultEnv];},register:function(envs,callback) {
	var fn = function (env) {
	if (_.contains(setting,env)) {
	this.options.group[env] = callback;
}
}if (_.isArray(envs)) {
	_.each(envs,_.bind(fn,this));
}
else {
	fn.call(this,envs);
}
},go:function() {
	var runFn = this.options.group[defaultSetting];
	for(var i in this.options.env) {
	var fn = this.options.group[this.options.env[i]];
	if (_.isFunction(fn)) {
	runFn = fn;
	break;
}
}if (_.isFunction(runFn)) {
	runFn.call(this);
}
}});});
	define(
  'sf.b2c.mall.widget.loading',[
    'zepto','can','sf.b2c.mall.business.config','text!template_widget_loading','sf.hybrid','sf.env.switcher'
  ],function($,can,SFConfig,template_widget_loading,SFHybrid,SFSwitcher) {
	return can.Control.extend( {
	init:function() {
	},render:function() {
	this.setup($('body'));
	if ($('.loadingDIV').length == 0) {
	var renderFn = can.mustache(template_widget_loading);
	var html = renderFn( {
	});
	$('body').append(html);
}
else {
	$('.loadingDIV').css("display","block");
}
},show:function() {
	// if ($('.loadingDIV').length == 0) {
	//   this.render();
	//
}
var switcher = new SFSwitcher();
	switcher.register('web',_.bind(function() {
	this.render();
}
,this));
	switcher.register('localapp',function () {
	SFHybrid.toast.loading();
}
)

        switcher.go();
}
,hide:function() {
	var switcher = new SFSwitcher();
	switcher.register('web',function () {
	$('.loadingDIV').remove();
}
);
	switcher.register('localapp',function () {
	$('.loadingDIV').remove();
	SFHybrid.toast.dismiss();
}
);
	switcher.go();}});});
	// Auto Generated.  DO NOT EDIT!
/**
  * @class sf.b2c.mall.api.user.reqLoginAuth
  * @param {
	Object
}
$
  * @param {
	Object
}
can
  * @param {
	Object
}
_
  * @param {
	can.Construct
}
Comm
  * @param {
	Object
}
SecurityType
  * @return {
	can.Construct
}
*/
define(
'sf.b2c.mall.api.user.reqLoginAuth',[
  'zepto','can','underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.api.security.type'
],function($,can,_,Comm,SecurityType) {
	return Comm.extend( {
	api: {
	METHOD_NAME:'user.reqLoginAuth',SECURITY_TYPE:SecurityType.None.name,REQUIRED: {
	'partnerId':'string',
}
,OPTIONAL: {
	'redirectUrl':'string'
}
,VERIFY: {
	},ERROR_CODE: {
	}
}
});});
	define(
  'sf.b2c.mall.widget.login',[
    'zepto','can','store','sf.b2c.mall.framework.comm','sf.b2c.mall.business.config','sf.util','sf.b2c.mall.api.user.reqLoginAuth'
  ],function($,can,store,SFFrameworkComm,SFConfig,SFUtil,SFReqLoginAuth) {
	return can.Control.extend( {
	link:SFConfig.setting.link,init:function() {
	},blogin:function(redirectUrl) {
	redirectUrl = redirectUrl || window.location.href;
	this.processReqLoginAuthBridge(redirectUrl,"wechat_svm");
}
,//寰俊鐧诲綍
      login:function(redirectUrl) {
	redirectUrl = redirectUrl || window.location.href;
	this.processReqLoginAuth("tag=wechat_svm&redirectUrl=" + redirectUrl,"wechat_svm");
}
,//寰俊鐧婚檰
      tmplLogin:function(redirectUrl) {
	redirectUrl = redirectUrl || window.location.href;
	this.processReqLoginAuth("tag=wechat_svm&tmpl=true&redirectUrl=" + encodeURIComponent(redirectUrl),"wechat_svm");
}
,alipayLogin:function(redirectUrl) {
	redirectUrl = redirectUrl || window.location.href;
	this.processReqLoginAuth("tag=alipay_qklg&redirectUrl=" + encodeURIComponent(redirectUrl),"alipay_qklg");
}
,alipayTmplLogin:function(redirectUrl) {
	redirectUrl = redirectUrl || window.location.href;
	this.processReqLoginAuth("tag=alipay_qklg&tmpl=true&redirectUrl=" + encodeURIComponent(redirectUrl),"alipay_qklg");
}
,//鑰佸甫鏂版柊鍔�
      processReqLoginAuthBridge:function(redirectUrl,partnerId) {
	var reqLoginAuth = new SFReqLoginAuth( {
	"partnerId":partnerId,"redirectUrl":redirectUrl
}
);
	reqLoginAuth
          .sendRequest()
          .done(function(data) {
	window.location.href = data.loginAuthLink;
	//浠ｇ爜鎵撶偣
            SFUtil.dotCode();
}
)
          .fail(function(error) {
	console.error(error);
}
);},processReqLoginAuth:function(redirectUrl,partnerId) {
	var redirectUrlTemp = "";
	if (SFConfig.setting.openHttps) {
	redirectUrlTemp = "http://m.fengqu.com/user/logincenter.html?" + redirectUrl;
}
else {
	redirectUrlTemp = "http://m.fengqu.com/user/logincenter.html?" + redirectUrl;
}
var reqLoginAuth = new SFReqLoginAuth( {
	"partnerId":partnerId,"redirectUrl":redirectUrlTemp,"https":true
}
);
	reqLoginAuth
          .sendRequest()
          .done(function(data) {
	window.location.href = data.loginAuthLink;
	//浠ｇ爜鎵撶偣
            SFUtil.dotCode();
}
)
          .fail(function(error) {
	console.error(error);
}
);}});});
	// Auto Generated.  DO NOT EDIT!
/**
  * @class sf.b2c.mall.api.minicart.getTotalCount
  * @param {
	Object
}
$
  * @param {
	Object
}
can
  * @param {
	Object
}
_
  * @param {
	can.Construct
}
Comm
  * @param {
	Object
}
SecurityType
  * @return {
	can.Construct
}
*/
define(
'sf.b2c.mall.api.minicart.getTotalCount',[
  'zepto','can','underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.api.security.type'
],function($,can,_,Comm,SecurityType) {
	return Comm.extend( {
	api: {
	METHOD_NAME:'minicart.getTotalCount',SECURITY_TYPE:SecurityType.UserLogin.name,REQUIRED: {
	},OPTIONAL: {
	},VERIFY: {
	},ERROR_CODE: {
	'15000100':'璇锋眰鍙傛暟鏈夎'
}
}});});
	'use strict'

define(
  'sf.b2c.mall.widget.cartnumber',[
    'underscore','sf.b2c.mall.api.minicart.getTotalCount','sf.env.switcher','sf.hybrid','sf.util'
  ],function (_,SFGetTotalCount,SFSwitcher,SFHybrid,SFFn) {
	return function (success,error) {
	var switcher = new SFSwitcher();
	switcher.register('web',function () {
	var getTotalCount = new SFGetTotalCount();
	getTotalCount.sendRequest()
          .done(success)
          .fail(error);
}
);
	switcher.register('app',function () {
	var getTotalCount = new SFGetTotalCount();
	getTotalCount.sendRequest()
          .done(function (data) {
	// if (SFFn.isMobile.iOS()) {
	SFHybrid.run('updateCartNumber' {
	amount:data.value
}
);
	//}if (_.isFunction(success)) {
	success(data);
}
;})
          .fail(error);
}
);
	switcher.go();}});
	define('sf.b2c.mall.adapter.regions',['can'],function(can) {
	return can.Map( {
	findOne:function(id) {
	var cityList = this.attr('cityList');
	return _.findWhere(cityList {
	id:id
}
);},findGroup:function(id) {
	var cityList = this.attr('cityList');
	return _.filter(cityList,function(value,key,list) {
	return value.superregion_id == id;
}
);},getIdByName:function(name) {
	var cityList = this.cityList.attr();
	var address = _.findWhere(cityList {
	name:name
}
);
	return address.id;},getIdBySuperreginIdAndName:function(superregionId,name) {
	var cityList = this.cityList.attr();
	var address = _.findWhere(cityList {
	superregion_id:superregionId,name:name
}
);
	return address.id;},getGroupByName:function(name) {
	var id = this.getIdByName(name);
	return this.findGroup(id);
}
,findOneName:function(id) {
	if (id && this.findOne(id)) {
	var o = this.findOne(id);
	return o.name;
}
}})});
	define('text!json_regions',[],function () {
	return '[ {
	\n    "id":0,\n    "name":"姹夋步鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":1,\n    "name":"鍖椾含",\n    "superregion_id":0\n
}
 {
	\n    "id":2,\n    "name":"澶╂触",\n    "superregion_id":0\n
}
 {
	\n    "id":3,\n    "name":"娌冲寳鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":4,\n    "name":"灞辫タ鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":5,\n    "name":"鍐呰挋鍙よ嚜娌诲尯",\n    "superregion_id":0\n
}
 {
	\n    "id":6,\n    "name":"杈藉畞鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":7,\n    "name":"鍚夋灄鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":8,\n    "name":"榛戦緳姹熺渷",\n    "superregion_id":0\n
}
 {
	\n    "id":9,\n    "name":"涓婃捣",\n    "superregion_id":0\n
}
 {
	\n    "id":10,\n    "name":"姹熻嫃鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":11,\n    "name":"娴欐睙鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":12,\n    "name":"瀹夊窘鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":13,\n    "name":"绂忓缓鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":14,\n    "name":"姹熻タ鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":15,\n    "name":"灞变笢鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":16,\n    "name":"娌冲崡鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":17,\n    "name":"婀栧寳鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":18,\n    "name":"婀栧崡鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":19,\n    "name":"骞夸笢鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":20,\n    "name":"骞胯タ澹棌鑷不鍖�",\n    "superregion_id":0\n
}
 {
	\n    "id":21,\n    "name":"娴峰崡鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":22,\n    "name":"閲嶅簡",\n    "superregion_id":0\n
}
 {
	\n    "id":23,\n    "name":"鍥涘窛鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":24,\n    "name":"璐靛窞鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":25,\n    "name":"浜戝崡鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":26,\n    "name":"瑗胯棌鑷不鍖�",\n    "superregion_id":0\n
}
 {
	\n    "id":27,\n    "name":"闄曡タ鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":28,\n    "name":"鐢樿們鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":29,\n    "name":"闈掓捣鐪�",\n    "superregion_id":0\n
}
 {
	\n    "id":30,\n    "name":"瀹佸鍥炴棌鑷不鍖�",\n    "superregion_id":0\n
}
 {
	\n    "id":31,\n    "name":"鏂扮枂缁村惥灏旇嚜娌诲尯",\n    "superregion_id":0\n
}
 {
	\n    "id":36,\n    "name":"鍖椾含甯�",\n    "superregion_id":1\n
}
 {
	\n    "id":37,\n    "name":"涓滃煄鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":38,\n    "name":"瑗垮煄鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":39,\n    "name":"涓婃捣甯�",\n    "superregion_id":9\n
}
 {
	\n    "id":40,\n    "name":"澶╂触甯�",\n    "superregion_id":2\n
}
 {
	\n    "id":41,\n    "name":"鏈濋槼鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":42,\n    "name":"涓板彴鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":43,\n    "name":"鐭虫櫙灞卞尯",\n    "superregion_id":36\n
}
 {
	\n    "id":44,\n    "name":"娴锋穩鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":45,\n    "name":"闂ㄥご娌熷尯",\n    "superregion_id":36\n
}
 {
	\n    "id":46,\n    "name":"鎴垮北鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":47,\n    "name":"閫氬窞鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":48,\n    "name":"椤轰箟鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":49,\n    "name":"鏄屽钩鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":50,\n    "name":"澶у叴鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":51,\n    "name":"鎬€鏌斿尯",\n    "superregion_id":36\n
}
 {
	\n    "id":52,\n    "name":"骞宠胺鍖�",\n    "superregion_id":36\n
}
 {
	\n    "id":53,\n    "name":"瀵嗕簯鍘�",\n    "superregion_id":36\n
}
 {
	\n    "id":54,\n    "name":"寤跺簡鍘�",\n    "superregion_id":36\n
}
 {
	\n    "id":55,\n    "name":"鍜屽钩鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":56,\n    "name":"娌充笢鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":57,\n    "name":"娌宠タ鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":58,\n    "name":"鍗楀紑鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":59,\n    "name":"娌冲寳鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":60,\n    "name":"绾㈡ˉ鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":61,\n    "name":"濉樻步鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":62,\n    "name":"閲嶅簡甯�",\n    "superregion_id":22\n
}
 {
	\n    "id":64,\n    "name":"涓滀附鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":65,\n    "name":"瑗块潚鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":66,\n    "name":"娲ュ崡鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":67,\n    "name":"鍖楄景鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":68,\n    "name":"姝︽竻鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":69,\n    "name":"瀹濆澔鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":70,\n    "name":"瀹佹渤鍘�",\n    "superregion_id":40\n
}
 {
	\n    "id":71,\n    "name":"闈欐捣鍘�",\n    "superregion_id":40\n
}
 {
	\n    "id":72,\n    "name":"钃熷幙",\n    "superregion_id":40\n
}
 {
	\n    "id":73,\n    "name":"鐭冲搴勫競",\n    "superregion_id":3\n
}
 {
	\n    "id":74,\n    "name":"鍞愬北甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":75,\n    "name":"绉︾殗宀涘競",\n    "superregion_id":3\n
}
 {
	\n    "id":76,\n    "name":"閭兏甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":77,\n    "name":"閭㈠彴甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":78,\n    "name":"淇濆畾甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":79,\n    "name":"寮犲鍙ｅ競",\n    "superregion_id":3\n
}
 {
	\n    "id":80,\n    "name":"鎵垮痉甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":81,\n    "name":"琛℃按甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":82,\n    "name":"寤婂潑甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":83,\n    "name":"娌у窞甯�",\n    "superregion_id":3\n
}
 {
	\n    "id":84,\n    "name":"澶師甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":85,\n    "name":"澶у悓甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":86,\n    "name":"闃虫硥甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":87,\n    "name":"闀挎不甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":88,\n    "name":"鏅嬪煄甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":89,\n    "name":"鏈斿窞甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":90,\n    "name":"鏅嬩腑甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":91,\n    "name":"杩愬煄甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":92,\n    "name":"蹇诲窞甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":93,\n    "name":"涓存本甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":94,\n    "name":"鍚曟甯�",\n    "superregion_id":4\n
}
 {
	\n    "id":95,\n    "name":"鍛煎拰娴╃壒甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":96,\n    "name":"鍖呭ご甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":97,\n    "name":"涔屾捣甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":98,\n    "name":"璧ゅ嘲甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":99,\n    "name":"閫氳窘甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":100,\n    "name":"閯傚皵澶氭柉甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":101,\n    "name":"鍛间鸡璐濆皵甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":102,\n    "name":"宸村溅娣栧皵甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":103,\n    "name":"涔屽叞瀵熷竷甯�",\n    "superregion_id":5\n
}
 {
	\n    "id":104,\n    "name":"鍏村畨鐩�",\n    "superregion_id":5\n
}
 {
	\n    "id":105,\n    "name":"閿℃灄閮嫆鐩�",\n    "superregion_id":5\n
}
 {
	\n    "id":106,\n    "name":"闃挎媺鍠勭洘",\n    "superregion_id":5\n
}
 {
	\n    "id":107,\n    "name":"娌堥槼甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":108,\n    "name":"澶ц繛甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":109,\n    "name":"闉嶅北甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":110,\n    "name":"鎶氶『甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":111,\n    "name":"鏈邯甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":112,\n    "name":"涓逛笢甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":113,\n    "name":"閿﹀窞甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":114,\n    "name":"钀ュ彛甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":115,\n    "name":"闃滄柊甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":116,\n    "name":"杈介槼甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":117,\n    "name":"鐩橀敠甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":118,\n    "name":"閾佸箔甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":119,\n    "name":"鏈濋槼甯�",\n    "superregion_id":6\n
}
 {
	\n    "id":120,\n    "name":"钁姦宀涘競",\n    "superregion_id":6\n
}
 {
	\n    "id":121,\n    "name":"闀挎槬甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":122,\n    "name":"鍚夋灄甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":123,\n    "name":"鍥涘钩甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":124,\n    "name":"杈芥簮甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":125,\n    "name":"閫氬寲甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":126,\n    "name":"鐧藉北甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":127,\n    "name":"鏉惧師甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":128,\n    "name":"鐧藉煄甯�",\n    "superregion_id":7\n
}
 {
	\n    "id":129,\n    "name":"寤惰竟鏈濋矞鏃忚嚜娌诲窞",\n    "superregion_id":7\n
}
 {
	\n    "id":130,\n    "name":"鍝堝皵婊ㄥ競",\n    "superregion_id":8\n
}
 {
	\n    "id":131,\n    "name":"榻愰綈鍝堝皵甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":132,\n    "name":"楦¤タ甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":133,\n    "name":"楣ゅ矖甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":134,\n    "name":"鍙岄腑灞卞競",\n    "superregion_id":8\n
}
 {
	\n    "id":135,\n    "name":"澶у簡甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":136,\n    "name":"浼婃槬甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":137,\n    "name":"浣虫湪鏂競",\n    "superregion_id":8\n
}
 {
	\n    "id":138,\n    "name":"涓冨彴娌冲競",\n    "superregion_id":8\n
}
 {
	\n    "id":139,\n    "name":"鐗′腹姹熷競",\n    "superregion_id":8\n
}
 {
	\n    "id":140,\n    "name":"榛戞渤甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":141,\n    "name":"缁ュ寲甯�",\n    "superregion_id":8\n
}
 {
	\n    "id":142,\n    "name":"澶у叴瀹夊箔鍦板尯",\n    "superregion_id":8\n
}
 {
	\n    "id":143,\n    "name":"榛勬郸鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":144,\n    "name":"鍗㈡咕鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":145,\n    "name":"寰愭眹鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":146,\n    "name":"闀垮畞鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":147,\n    "name":"闈欏畨鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":148,\n    "name":"鏅檧鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":149,\n    "name":"闂稿寳鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":150,\n    "name":"铏瑰彛鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":151,\n    "name":"鏉ㄦ郸鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":152,\n    "name":"闂佃鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":153,\n    "name":"瀹濆北鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":154,\n    "name":"鍢夊畾鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":155,\n    "name":"娴︿笢鏂板尯",\n    "superregion_id":39\n
}
 {
	\n    "id":156,\n    "name":"閲戝北鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":157,\n    "name":"鏉炬睙鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":158,\n    "name":"闈掓郸鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":159,\n    "name":"鍗楁眹鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":160,\n    "name":"濂夎搐鍖�",\n    "superregion_id":39\n
}
 {
	\n    "id":161,\n    "name":"宕囨槑鍘�",\n    "superregion_id":39\n
}
 {
	\n    "id":162,\n    "name":"鍗椾含甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":163,\n    "name":"鏃犻敗甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":164,\n    "name":"寰愬窞甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":165,\n    "name":"甯稿窞甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":166,\n    "name":"鑻忓窞甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":167,\n    "name":"鍗楅€氬競",\n    "superregion_id":10\n
}
 {
	\n    "id":168,\n    "name":"杩炰簯娓競",\n    "superregion_id":10\n
}
 {
	\n    "id":169,\n    "name":"娣畨甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":170,\n    "name":"鐩愬煄甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":171,\n    "name":"鎵窞甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":172,\n    "name":"闀囨睙甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":173,\n    "name":"娉板窞甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":174,\n    "name":"瀹胯縼甯�",\n    "superregion_id":10\n
}
 {
	\n    "id":175,\n    "name":"鏉窞甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":176,\n    "name":"瀹佹尝甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":177,\n    "name":"娓╁窞甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":178,\n    "name":"鍢夊叴甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":179,\n    "name":"婀栧窞甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":180,\n    "name":"缁嶅叴甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":181,\n    "name":"鑸熷北甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":182,\n    "name":"琛㈠窞甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":183,\n    "name":"閲戝崕甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":184,\n    "name":"鍙板窞甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":185,\n    "name":"涓芥按甯�",\n    "superregion_id":11\n
}
 {
	\n    "id":186,\n    "name":"鍚堣偉甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":187,\n    "name":"鑺滄箹甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":188,\n    "name":"铓屽煚甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":189,\n    "name":"娣崡甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":190,\n    "name":"椹瀺灞卞競",\n    "superregion_id":12\n
}
 {
	\n    "id":191,\n    "name":"娣寳甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":192,\n    "name":"閾滈櫟甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":193,\n    "name":"瀹夊簡甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":194,\n    "name":"榛勫北甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":195,\n    "name":"婊佸窞甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":196,\n    "name":"闃滈槼甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":197,\n    "name":"瀹垮窞甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":198,\n    "name":"宸㈡箹甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":199,\n    "name":"鍏畨甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":200,\n    "name":"浜冲窞甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":201,\n    "name":"姹犲窞甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":202,\n    "name":"瀹ｅ煄甯�",\n    "superregion_id":12\n
}
 {
	\n    "id":203,\n    "name":"绂忓窞甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":204,\n    "name":"鍘﹂棬甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":205,\n    "name":"鑾嗙敯甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":206,\n    "name":"涓夋槑甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":207,\n    "name":"娉夊窞甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":208,\n    "name":"婕冲窞甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":209,\n    "name":"鍗楀钩甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":210,\n    "name":"榫欏博甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":211,\n    "name":"瀹佸痉甯�",\n    "superregion_id":13\n
}
 {
	\n    "id":212,\n    "name":"鍗楁槍甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":213,\n    "name":"鏅痉闀囧競",\n    "superregion_id":14\n
}
 {
	\n    "id":214,\n    "name":"钀嶄埂甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":215,\n    "name":"涔濇睙甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":216,\n    "name":"鏂颁綑甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":217,\n    "name":"楣版江甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":218,\n    "name":"璧ｅ窞甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":219,\n    "name":"鍚夊畨甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":220,\n    "name":"瀹滄槬甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":221,\n    "name":"鎶氬窞甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":222,\n    "name":"涓婇ザ甯�",\n    "superregion_id":14\n
}
 {
	\n    "id":223,\n    "name":"娴庡崡甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":224,\n    "name":"闈掑矝甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":225,\n    "name":"娣勫崥甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":226,\n    "name":"鏋ｅ簞甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":227,\n    "name":"涓滆惀甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":228,\n    "name":"鐑熷彴甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":229,\n    "name":"娼嶅潑甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":230,\n    "name":"娴庡畞甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":231,\n    "name":"娉板畨甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":232,\n    "name":"濞佹捣甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":233,\n    "name":"鏃ョ収甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":234,\n    "name":"鑾辫姕甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":235,\n    "name":"涓存矀甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":236,\n    "name":"寰峰窞甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":237,\n    "name":"鑱婂煄甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":238,\n    "name":"婊ㄥ窞甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":239,\n    "name":"鑿忔辰甯�",\n    "superregion_id":15\n
}
 {
	\n    "id":240,\n    "name":"閮戝窞甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":241,\n    "name":"寮€灏佸競",\n    "superregion_id":16\n
}
 {
	\n    "id":242,\n    "name":"娲涢槼甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":243,\n    "name":"骞抽《灞卞競",\n    "superregion_id":16\n
}
 {
	\n    "id":244,\n    "name":"瀹夐槼甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":245,\n    "name":"楣ゅ甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":246,\n    "name":"鏂颁埂甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":247,\n    "name":"鐒︿綔甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":248,\n    "name":"婵槼甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":249,\n    "name":"璁告槍甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":250,\n    "name":"婕渤甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":251,\n    "name":"涓夐棬宄″競",\n    "superregion_id":16\n
}
 {
	\n    "id":252,\n    "name":"鍗楅槼甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":253,\n    "name":"鍟嗕笜甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":254,\n    "name":"淇￠槼甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":255,\n    "name":"鍛ㄥ彛甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":256,\n    "name":"椹婚┈搴楀競",\n    "superregion_id":16\n
}
 {
	\n    "id":257,\n    "name":"娴庢簮甯�",\n    "superregion_id":16\n
}
 {
	\n    "id":258,\n    "name":"姝︽眽甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":259,\n    "name":"榛勭煶甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":260,\n    "name":"鍗佸牥甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":261,\n    "name":"瀹滄槍甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":262,\n    "name":"瑗勯槼甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":263,\n    "name":"閯傚窞甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":264,\n    "name":"鑽嗛棬甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":265,\n    "name":"瀛濇劅甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":266,\n    "name":"鑽嗗窞甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":267,\n    "name":"榛勫唸甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":268,\n    "name":"鍜稿畞甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":269,\n    "name":"闅忓窞甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":270,\n    "name":"鎭╂柦鍦熷鏃忚嫍鏃忚嚜娌诲窞",\n    "superregion_id":17\n
}
 {
	\n    "id":271,\n    "name":"浠欐甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":272,\n    "name":"娼滄睙甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":273,\n    "name":"澶╅棬甯�",\n    "superregion_id":17\n
}
 {
	\n    "id":274,\n    "name":"绁炲啘鏋舵灄鍖�",\n    "superregion_id":17\n
}
 {
	\n    "id":275,\n    "name":"闀挎矙甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":276,\n    "name":"鏍床甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":277,\n    "name":"婀樻江甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":278,\n    "name":"琛￠槼甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":279,\n    "name":"閭甸槼甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":280,\n    "name":"宀抽槼甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":281,\n    "name":"甯稿痉甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":282,\n    "name":"寮犲鐣屽競",\n    "superregion_id":18\n
}
 {
	\n    "id":283,\n    "name":"鐩婇槼甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":284,\n    "name":"閮村窞甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":285,\n    "name":"姘稿窞甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":286,\n    "name":"鎬€鍖栧競",\n    "superregion_id":18\n
}
 {
	\n    "id":287,\n    "name":"濞勫簳甯�",\n    "superregion_id":18\n
}
 {
	\n    "id":288,\n    "name":"婀樿タ鍦熷鏃忚嫍鏃忚嚜娌诲窞",\n    "superregion_id":18\n
}
 {
	\n    "id":289,\n    "name":"骞垮窞甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":290,\n    "name":"闊跺叧甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":291,\n    "name":"娣卞湷甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":292,\n    "name":"鐝犳捣甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":293,\n    "name":"姹曞ご甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":294,\n    "name":"浣涘北甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":295,\n    "name":"姹熼棬甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":296,\n    "name":"婀涙睙甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":297,\n    "name":"鑼傚悕甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":298,\n    "name":"鑲囧簡甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":299,\n    "name":"鎯犲窞甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":300,\n    "name":"姊呭窞甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":301,\n    "name":"姹曞熬甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":302,\n    "name":"娌虫簮甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":303,\n    "name":"闃虫睙甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":304,\n    "name":"娓呰繙甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":305,\n    "name":"涓滆帪甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":306,\n    "name":"涓北甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":307,\n    "name":"娼窞甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":308,\n    "name":"鎻槼甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":309,\n    "name":"浜戞诞甯�",\n    "superregion_id":19\n
}
 {
	\n    "id":310,\n    "name":"鍗楀畞甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":311,\n    "name":"鏌冲窞甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":312,\n    "name":"妗傛灄甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":313,\n    "name":"姊у窞甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":314,\n    "name":"鍖楁捣甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":315,\n    "name":"闃插煄娓競",\n    "superregion_id":20\n
}
 {
	\n    "id":316,\n    "name":"閽﹀窞甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":317,\n    "name":"璐垫腐甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":318,\n    "name":"鐜夋灄甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":319,\n    "name":"鐧捐壊甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":320,\n    "name":"璐哄窞甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":321,\n    "name":"娌虫睜甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":322,\n    "name":"鏉ュ甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":323,\n    "name":"宕囧乏甯�",\n    "superregion_id":20\n
}
 {
	\n    "id":324,\n    "name":"娴峰彛甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":325,\n    "name":"涓変簹甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":326,\n    "name":"浜旀寚灞卞競",\n    "superregion_id":21\n
}
 {
	\n    "id":327,\n    "name":"鐞兼捣甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":328,\n    "name":"鍎嬪窞甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":329,\n    "name":"鏂囨槍甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":330,\n    "name":"涓囧畞甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":331,\n    "name":"涓滄柟甯�",\n    "superregion_id":21\n
}
 {
	\n    "id":332,\n    "name":"瀹氬畨鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":333,\n    "name":"灞槍鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":334,\n    "name":"婢勮繄鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":335,\n    "name":"涓撮珮鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":336,\n    "name":"鐧芥矙榛庢棌鑷不鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":337,\n    "name":"鏄屾睙榛庢棌鑷不鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":338,\n    "name":"涔愪笢榛庢棌鑷不鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":339,\n    "name":"闄垫按榛庢棌鑷不鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":340,\n    "name":"淇濅涵榛庢棌鑻楁棌鑷不鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":341,\n    "name":"鐞间腑榛庢棌鑻楁棌鑷不鍘�",\n    "superregion_id":21\n
}
 {
	\n    "id":342,\n    "name":"瑗挎矙缇ゅ矝",\n    "superregion_id":21\n
}
 {
	\n    "id":343,\n    "name":"鍗楁矙缇ゅ矝",\n    "superregion_id":21\n
}
 {
	\n    "id":344,\n    "name":"涓矙缇ゅ矝鐨勫矝绀佸強鍏舵捣鍩�",\n    "superregion_id":21\n
}
 {
	\n    "id":345,\n    "name":"涓囧窞鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":346,\n    "name":"娑櫟鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":347,\n    "name":"娓濅腑鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":348,\n    "name":"澶ф浮鍙ｅ尯",\n    "superregion_id":62\n
}
 {
	\n    "id":349,\n    "name":"姹熷寳鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":350,\n    "name":"娌欏潽鍧濆尯",\n    "superregion_id":62\n
}
 {
	\n    "id":351,\n    "name":"涔濋緳鍧″尯",\n    "superregion_id":62\n
}
 {
	\n    "id":352,\n    "name":"鍗楀哺鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":353,\n    "name":"鍖楃鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":354,\n    "name":"鍙屾ˉ鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":355,\n    "name":"涓囩洓鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":356,\n    "name":"娓濆寳鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":357,\n    "name":"宸村崡鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":358,\n    "name":"榛旀睙鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":359,\n    "name":"闀垮鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":360,\n    "name":"缍︽睙鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":361,\n    "name":"娼煎崡鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":362,\n    "name":"閾滄鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":363,\n    "name":"澶ц冻鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":364,\n    "name":"鑽ｆ槍鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":365,\n    "name":"鐠у北鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":366,\n    "name":"姊佸钩鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":367,\n    "name":"鍩庡彛鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":368,\n    "name":"涓伴兘鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":369,\n    "name":"鍨睙鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":370,\n    "name":"姝﹂殕鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":371,\n    "name":"蹇犲幙",\n    "superregion_id":62\n
}
 {
	\n    "id":372,\n    "name":"寮€鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":373,\n    "name":"浜戦槼鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":374,\n    "name":"濂夎妭鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":375,\n    "name":"宸北鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":376,\n    "name":"宸邯鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":377,\n    "name":"鐭虫煴鍦熷鏃忚嚜娌诲幙",\n    "superregion_id":62\n
}
 {
	\n    "id":378,\n    "name":"绉€灞卞湡瀹舵棌鑻楁棌鑷不鍘�",\n    "superregion_id":62\n
}
 {
	\n    "id":379,\n    "name":"閰夐槼鍦熷鏃忚嫍鏃忚嚜娌诲幙",\n    "superregion_id":62\n
}
 {
	\n    "id":380,\n    "name":"褰按鑻楁棌鍦熷鏃忚嚜娌诲幙",\n    "superregion_id":62\n
}
 {
	\n    "id":381,\n    "name":"姹熸触鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":382,\n    "name":"鍚堝窛鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":383,\n    "name":"姘稿窛鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":384,\n    "name":"鍗楀窛鍖�",\n    "superregion_id":62\n
}
 {
	\n    "id":385,\n    "name":"鎴愰兘甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":386,\n    "name":"鑷础甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":387,\n    "name":"鏀€鏋濊姳甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":388,\n    "name":"娉稿窞甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":389,\n    "name":"寰烽槼甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":390,\n    "name":"缁甸槼甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":391,\n    "name":"骞垮厓甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":392,\n    "name":"閬傚畞甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":393,\n    "name":"鍐呮睙甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":394,\n    "name":"涔愬北甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":395,\n    "name":"鍗楀厖甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":396,\n    "name":"鐪夊北甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":397,\n    "name":"瀹滃甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":398,\n    "name":"骞垮畨甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":399,\n    "name":"杈惧窞甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":400,\n    "name":"闆呭畨甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":401,\n    "name":"宸翠腑甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":402,\n    "name":"璧勯槼甯�",\n    "superregion_id":23\n
}
 {
	\n    "id":403,\n    "name":"闃垮潩钘忔棌缇屾棌鑷不宸�",\n    "superregion_id":23\n
}
 {
	\n    "id":404,\n    "name":"鐢樺瓬钘忔棌鑷不宸�",\n    "superregion_id":23\n
}
 {
	\n    "id":405,\n    "name":"鍑夊北褰濇棌鑷不宸�",\n    "superregion_id":23\n
}
 {
	\n    "id":406,\n    "name":"璐甸槼甯�",\n    "superregion_id":24\n
}
 {
	\n    "id":407,\n    "name":"鍏洏姘村競",\n    "superregion_id":24\n
}
 {
	\n    "id":408,\n    "name":"閬典箟甯�",\n    "superregion_id":24\n
}
 {
	\n    "id":409,\n    "name":"瀹夐『甯�",\n    "superregion_id":24\n
}
 {
	\n    "id":410,\n    "name":"閾滀粊鍦板尯",\n    "superregion_id":24\n
}
 {
	\n    "id":411,\n    "name":"榛旇タ鍗楀竷渚濇棌鑻楁棌鑷不宸�",\n    "superregion_id":24\n
}
 {
	\n    "id":412,\n    "name":"姣曡妭甯�",\n    "superregion_id":24\n
}
 {
	\n    "id":413,\n    "name":"榛斾笢鍗楄嫍鏃忎緱鏃忚嚜娌诲窞",\n    "superregion_id":24\n
}
 {
	\n    "id":414,\n    "name":"榛斿崡甯冧緷鏃忚嫍鏃忚嚜娌诲窞",\n    "superregion_id":24\n
}
 {
	\n    "id":415,\n    "name":"鏄嗘槑甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":416,\n    "name":"鏇查潠甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":417,\n    "name":"鐜夋邯甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":418,\n    "name":"淇濆北甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":419,\n    "name":"鏄€氬競",\n    "superregion_id":25\n
}
 {
	\n    "id":420,\n    "name":"涓芥睙甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":421,\n    "name":"鏅幢甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":422,\n    "name":"涓存钵甯�",\n    "superregion_id":25\n
}
 {
	\n    "id":423,\n    "name":"妤氶泟褰濇棌鑷不宸�",\n    "superregion_id":25\n
}
 {
	\n    "id":424,\n    "name":"绾㈡渤鍝堝凹鏃忓綕鏃忚嚜娌诲窞",\n    "superregion_id":25\n
}
 {
	\n    "id":425,\n    "name":"鏂囧北澹棌鑻楁棌鑷不宸�",\n    "superregion_id":25\n
}
 {
	\n    "id":426,\n    "name":"瑗垮弻鐗堢撼鍌ｆ棌鑷不宸�",\n    "superregion_id":25\n
}
 {
	\n    "id":427,\n    "name":"澶х悊鐧芥棌鑷不宸�",\n    "superregion_id":25\n
}
 {
	\n    "id":428,\n    "name":"寰峰畯鍌ｆ棌鏅鏃忚嚜娌诲窞",\n    "superregion_id":25\n
}
 {
	\n    "id":429,\n    "name":"鎬掓睙鍌堝兂鏃忚嚜娌诲窞",\n    "superregion_id":25\n
}
 {
	\n    "id":430,\n    "name":"杩簡钘忔棌鑷不宸�",\n    "superregion_id":25\n
}
 {
	\n    "id":431,\n    "name":"鎷夎惃甯�",\n    "superregion_id":26\n
}
 {
	\n    "id":432,\n    "name":"鏄岄兘鍦板尯",\n    "superregion_id":26\n
}
 {
	\n    "id":433,\n    "name":"灞卞崡鍦板尯",\n    "superregion_id":26\n
}
 {
	\n    "id":434,\n    "name":"鏃ュ杸鍒欏湴鍖�",\n    "superregion_id":26\n
}
 {
	\n    "id":435,\n    "name":"閭ｆ洸鍦板尯",\n    "superregion_id":26\n
}
 {
	\n    "id":436,\n    "name":"闃块噷鍦板尯",\n    "superregion_id":26\n
}
 {
	\n    "id":437,\n    "name":"鏋楄姖鍦板尯",\n    "superregion_id":26\n
}
 {
	\n    "id":438,\n    "name":"瑗垮畨甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":439,\n    "name":"閾滃窛甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":440,\n    "name":"瀹濋浮甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":441,\n    "name":"鍜搁槼甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":442,\n    "name":"娓崡甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":443,\n    "name":"寤跺畨甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":444,\n    "name":"姹変腑甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":445,\n    "name":"姒嗘灄甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":446,\n    "name":"瀹夊悍甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":447,\n    "name":"鍟嗘礇甯�",\n    "superregion_id":27\n
}
 {
	\n    "id":448,\n    "name":"鍏板窞甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":449,\n    "name":"鍢夊唱鍏冲競",\n    "superregion_id":28\n
}
 {
	\n    "id":450,\n    "name":"閲戞槍甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":451,\n    "name":"鐧介摱甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":452,\n    "name":"澶╂按甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":453,\n    "name":"姝﹀▉甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":454,\n    "name":"寮犳帠甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":455,\n    "name":"骞冲噳甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":456,\n    "name":"閰掓硥甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":457,\n    "name":"搴嗛槼甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":458,\n    "name":"瀹氳タ甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":459,\n    "name":"闄囧崡甯�",\n    "superregion_id":28\n
}
 {
	\n    "id":460,\n    "name":"涓村鍥炴棌鑷不宸�",\n    "superregion_id":28\n
}
 {
	\n    "id":461,\n    "name":"鐢樺崡钘忔棌鑷不宸�",\n    "superregion_id":28\n
}
 {
	\n    "id":462,\n    "name":"瑗垮畞甯�",\n    "superregion_id":29\n
}
 {
	\n    "id":463,\n    "name":"娴蜂笢甯�",\n    "superregion_id":29\n
}
 {
	\n    "id":464,\n    "name":"娴峰寳钘忔棌鑷不宸�",\n    "superregion_id":29\n
}
 {
	\n    "id":465,\n    "name":"榛勫崡钘忔棌鑷不宸�",\n    "superregion_id":29\n
}
 {
	\n    "id":466,\n    "name":"娴峰崡钘忔棌鑷不宸�",\n    "superregion_id":29\n
}
 {
	\n    "id":467,\n    "name":"鏋滄礇钘忔棌鑷不宸�",\n    "superregion_id":29\n
}
 {
	\n    "id":468,\n    "name":"鐜夋爲钘忔棌鑷不宸�",\n    "superregion_id":29\n
}
 {
	\n    "id":469,\n    "name":"娴疯タ钂欏彜鏃忚棌鏃忚嚜娌诲窞",\n    "superregion_id":29\n
}
 {
	\n    "id":470,\n    "name":"閾跺窛甯�",\n    "superregion_id":30\n
}
 {
	\n    "id":471,\n    "name":"鐭冲槾灞卞競",\n    "superregion_id":30\n
}
 {
	\n    "id":472,\n    "name":"鍚村繝甯�",\n    "superregion_id":30\n
}
 {
	\n    "id":473,\n    "name":"鍥哄師甯�",\n    "superregion_id":30\n
}
 {
	\n    "id":474,\n    "name":"涓崼甯�",\n    "superregion_id":30\n
}
 {
	\n    "id":475,\n    "name":"涔岄瞾鏈ㄩ綈甯�",\n    "superregion_id":31\n
}
 {
	\n    "id":476,\n    "name":"鍏嬫媺鐜涗緷甯�",\n    "superregion_id":31\n
}
 {
	\n    "id":477,\n    "name":"鍚愰瞾鐣湴鍖�",\n    "superregion_id":31\n
}
 {
	\n    "id":478,\n    "name":"鍝堝瘑鍦板尯",\n    "superregion_id":31\n
}
 {
	\n    "id":479,\n    "name":"鏄屽悏鍥炴棌鑷不宸�",\n    "superregion_id":31\n
}
 {
	\n    "id":480,\n    "name":"鍗氬皵濉旀媺钂欏彜鑷不宸�",\n    "superregion_id":31\n
}
 {
	\n    "id":481,\n    "name":"宸撮煶閮钂欏彜鑷不宸�",\n    "superregion_id":31\n
}
 {
	\n    "id":482,\n    "name":"闃垮厠鑻忓湴鍖�",\n    "superregion_id":31\n
}
 {
	\n    "id":483,\n    "name":"鍏嬪瓬鍕掕嫃鏌皵鍏嬪瓬鑷不宸�",\n    "superregion_id":31\n
}
 {
	\n    "id":484,\n    "name":"鍠€浠€鍦板尯",\n    "superregion_id":31\n
}
 {
	\n    "id":485,\n    "name":"鍜岀敯鍦板尯",\n    "superregion_id":31\n
}
 {
	\n    "id":486,\n    "name":"浼婄妬鍝堣惃鍏嬭嚜娌诲窞",\n    "superregion_id":31\n
}
 {
	\n    "id":487,\n    "name":"濉斿煄鍦板尯",\n    "superregion_id":31\n
}
 {
	\n    "id":488,\n    "name":"闃垮嫆娉板湴鍖�",\n    "superregion_id":31\n
}
 {
	\n    "id":489,\n    "name":"鐭虫渤瀛愬競",\n    "superregion_id":31\n
}
 {
	\n    "id":490,\n    "name":"闃挎媺灏斿競",\n    "superregion_id":31\n
}
 {
	\n    "id":491,\n    "name":"鍥炬湪鑸掑厠甯�",\n    "superregion_id":31\n
}
 {
	\n    "id":492,\n    "name":"浜斿娓犲競",\n    "superregion_id":31\n
}
 {
	\n    "id":536,\n    "name":"鍔犳嬁澶�",\n    "superregion_id":45055\n
}
 {
	\n    "id":537,\n    "name":"婢冲ぇ鍒╀簹",\n    "superregion_id":45055\n
}
 {
	\n    "id":538,\n    "name":"鏂拌タ鍏�",\n    "superregion_id":45055\n
}
 {
	\n    "id":539,\n    "name":"鑻卞浗",\n    "superregion_id":45055\n
}
 {
	\n    "id":540,\n    "name":"娉曞浗",\n    "superregion_id":45055\n
}
 {
	\n    "id":541,\n    "name":"寰峰浗",\n    "superregion_id":45055\n
}
 {
	\n    "id":542,\n    "name":"鎹峰厠",\n    "superregion_id":45055\n
}
 {
	\n    "id":543,\n    "name":"鑽峰叞",\n    "superregion_id":45055\n
}
 {
	\n    "id":544,\n    "name":"鐟炲＋",\n    "superregion_id":45055\n
}
 {
	\n    "id":545,\n    "name":"甯岃厞",\n    "superregion_id":45055\n
}
 {
	\n    "id":546,\n    "name":"鎸▉",\n    "superregion_id":45055\n
}
 {
	\n    "id":547,\n    "name":"鐟炲吀",\n    "superregion_id":45055\n
}
 {
	\n    "id":548,\n    "name":"涓归害",\n    "superregion_id":45055\n
}
 {
	\n    "id":549,\n    "name":"鑺叞",\n    "superregion_id":45055\n
}
 {
	\n    "id":550,\n    "name":"鐖卞皵鍏�",\n    "superregion_id":45055\n
}
 {
	\n    "id":551,\n    "name":"濂ュ湴鍒�",\n    "superregion_id":45055\n
}
 {
	\n    "id":552,\n    "name":"鎰忓ぇ鍒�",\n    "superregion_id":45055\n
}
 {
	\n    "id":553,\n    "name":"涔屽厠鍏�",\n    "superregion_id":45055\n
}
 {
	\n    "id":554,\n    "name":"淇勭綏鏂�",\n    "superregion_id":45055\n
}
 {
	\n    "id":555,\n    "name":"瑗跨彮鐗�",\n    "superregion_id":45055\n
}
 {
	\n    "id":556,\n    "name":"闊╁浗",\n    "superregion_id":45055\n
}
 {
	\n    "id":557,\n    "name":"鏂板姞鍧�",\n    "superregion_id":45055\n
}
 {
	\n    "id":558,\n    "name":"椹潵瑗夸簹",\n    "superregion_id":45055\n
}
 {
	\n    "id":559,\n    "name":"鍗板害",\n    "superregion_id":45055\n
}
 {
	\n    "id":560,\n    "name":"娉板浗",\n    "superregion_id":45055\n
}
 {
	\n    "id":561,\n    "name":"鏃ユ湰",\n    "superregion_id":45055\n
}
 {
	\n    "id":562,\n    "name":"宸磋タ",\n    "superregion_id":45055\n
}
 {
	\n    "id":563,\n    "name":"闃挎牴寤�",\n    "superregion_id":45055\n
}
 {
	\n    "id":564,\n    "name":"鍗楅潪",\n    "superregion_id":45055\n
}
 {
	\n    "id":565,\n    "name":"鍩冨強",\n    "superregion_id":45055\n
}
 {
	\n    "id":566,\n    "name":"鍏朵粬",\n    "superregion_id":36\n
}
 {
	\n    "id":1126,\n    "name":"浜曢檳鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1127,\n    "name":"浜曢檳鐭垮尯",\n    "superregion_id":73\n
}
 {
	\n    "id":1128,\n    "name":"鍏冩皬鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1129,\n    "name":"骞冲北鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1130,\n    "name":"鏂颁箰甯�",\n    "superregion_id":73\n
}
 {
	\n    "id":1131,\n    "name":"鏂板崕鍖�",\n    "superregion_id":73\n
}
 {
	\n    "id":1132,\n    "name":"鏃犳瀬鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1133,\n    "name":"鏅嬪窞甯�",\n    "superregion_id":73\n
}
 {
	\n    "id":1134,\n    "name":"鏍惧煄鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1135,\n    "name":"妗ヤ笢鍖�",\n    "superregion_id":73\n
}
 {
	\n    "id":1136,\n    "name":"妗ヨタ鍖�",\n    "superregion_id":73\n
}
 {
	\n    "id":1137,\n    "name":"姝ｅ畾鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1138,\n    "name":"娣辨辰鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1139,\n    "name":"鐏靛鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1140,\n    "name":"钘佸煄甯�",\n    "superregion_id":73\n
}
 {
	\n    "id":1141,\n    "name":"琛屽攼鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1142,\n    "name":"瑁曞崕鍖�",\n    "superregion_id":73\n
}
 {
	\n    "id":1143,\n    "name":"璧炵殗鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1144,\n    "name":"璧靛幙",\n    "superregion_id":73\n
}
 {
	\n    "id":1145,\n    "name":"杈涢泦甯�",\n    "superregion_id":73\n
}
 {
	\n    "id":1146,\n    "name":"闀垮畨鍖�",\n    "superregion_id":73\n
}
 {
	\n    "id":1147,\n    "name":"楂橀倯鍘�",\n    "superregion_id":73\n
}
 {
	\n    "id":1148,\n    "name":"楣挎硥甯�",\n    "superregion_id":73\n
}
 {
	\n    "id":1149,\n    "name":"涓板崡鍖�",\n    "superregion_id":74\n
}
 {
	\n    "id":1150,\n    "name":"涓版鼎鍖�",\n    "superregion_id":74\n
}
 {
	\n    "id":1151,\n    "name":"涔愪涵鍘�",\n    "superregion_id":74\n
}
 {
	\n    "id":1152,\n    "name":"鍙ゅ喍鍖�",\n    "superregion_id":74\n
}
 {
	\n    "id":1153,\n    "name":"鍞愭捣鍘�",\n    "superregion_id":74\n
}
 {
	\n    "id":1154,\n    "name":"寮€骞冲尯",\n    "superregion_id":74\n
}
 {
	\n    "id":1155,\n    "name":"婊﹀崡鍘�",\n    "superregion_id":74\n
}
 {
	\n    "id":1156,\n    "name":"婊﹀幙",\n    "superregion_id":74\n
}
 {
	\n    "id":1157,\n    "name":"鐜夌敯鍘�",\n    "superregion_id":74\n
}
 {
	\n    "id":1158,\n    "name":"璺寳鍖�",\n    "superregion_id":74\n
}
 {
	\n    "id":1159,\n    "name":"璺崡鍖�",\n    "superregion_id":74\n
}
 {
	\n    "id":1160,\n    "name":"杩佸畨甯�",\n    "superregion_id":74\n
}
 {
	\n    "id":1161,\n    "name":"杩佽タ鍘�",\n    "superregion_id":74\n
}
 {
	\n    "id":1162,\n    "name":"閬靛寲甯�",\n    "superregion_id":74\n
}
 {
	\n    "id":1163,\n    "name":"鍖楁埓娌冲尯",\n    "superregion_id":75\n
}
 {
	\n    "id":1164,\n    "name":"鍗㈤緳鍘�",\n    "superregion_id":75\n
}
 {
	\n    "id":1165,\n    "name":"灞辨捣鍏冲尯",\n    "superregion_id":75\n
}
 {
	\n    "id":1166,\n    "name":"鎶氬畞鍘�",\n    "superregion_id":75\n
}
 {
	\n    "id":1167,\n    "name":"鏄岄粠鍘�",\n    "superregion_id":75\n
}
 {
	\n    "id":1168,\n    "name":"娴锋腐鍖�",\n    "superregion_id":75\n
}
 {
	\n    "id":1169,\n    "name":"闈掗緳婊℃棌鑷不鍘�",\n    "superregion_id":75\n
}
 {
	\n    "id":1170,\n    "name":"涓涘彴鍖�",\n    "superregion_id":76\n
}
 {
	\n    "id":1171,\n    "name":"涓存汲鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1172,\n    "name":"澶嶅叴鍖�",\n    "superregion_id":76\n
}
 {
	\n    "id":1173,\n    "name":"澶у悕鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1174,\n    "name":"宄板嘲鐭垮尯",\n    "superregion_id":76\n
}
 {
	\n    "id":1175,\n    "name":"骞垮钩鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1176,\n    "name":"鎴愬畨鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1177,\n    "name":"鏇插懆鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1178,\n    "name":"姝﹀畨甯�",\n    "superregion_id":76\n
}
 {
	\n    "id":1179,\n    "name":"姘稿勾鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1180,\n    "name":"娑夊幙",\n    "superregion_id":76\n
}
 {
	\n    "id":1181,\n    "name":"纾佸幙",\n    "superregion_id":76\n
}
 {
	\n    "id":1182,\n    "name":"鑲ヤ埂鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1183,\n    "name":"閭北鍖�",\n    "superregion_id":76\n
}
 {
	\n    "id":1184,\n    "name":"閭兏鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1185,\n    "name":"閭卞幙",\n    "superregion_id":76\n
}
 {
	\n    "id":1186,\n    "name":"棣嗛櫠鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1187,\n    "name":"榄忓幙",\n    "superregion_id":76\n
}
 {
	\n    "id":1188,\n    "name":"楦℃辰鍘�",\n    "superregion_id":76\n
}
 {
	\n    "id":1189,\n    "name":"涓村煄鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1190,\n    "name":"涓磋タ鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1191,\n    "name":"浠诲幙",\n    "superregion_id":77\n
}
 {
	\n    "id":1192,\n    "name":"鍐呬笜鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1193,\n    "name":"鍗楀拰鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1194,\n    "name":"鍗楀甯�",\n    "superregion_id":77\n
}
 {
	\n    "id":1195,\n    "name":"濞佸幙",\n    "superregion_id":77\n
}
 {
	\n    "id":1196,\n    "name":"瀹佹檵鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1197,\n    "name":"宸ㄩ箍鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1198,\n    "name":"骞充埂鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1199,\n    "name":"骞垮畻鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1200,\n    "name":"鏂版渤鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1201,\n    "name":"鏌忎埂鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1202,\n    "name":"妗ヤ笢鍖�",\n    "superregion_id":77\n
}
 {
	\n    "id":1203,\n    "name":"妗ヨタ鍖�",\n    "superregion_id":77\n
}
 {
	\n    "id":1204,\n    "name":"娌欐渤甯�",\n    "superregion_id":77\n
}
 {
	\n    "id":1205,\n    "name":"娓呮渤鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1206,\n    "name":"閭㈠彴鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1207,\n    "name":"闅嗗哀鍘�",\n    "superregion_id":77\n
}
 {
	\n    "id":1208,\n    "name":"鍖楀競鍖�",\n    "superregion_id":78\n
}
 {
	\n    "id":1209,\n    "name":"鍗楀競鍖�",\n    "superregion_id":78\n
}
 {
	\n    "id":1210,\n    "name":"鍗氶噹鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1211,\n    "name":"鍞愬幙",\n    "superregion_id":78\n
}
 {
	\n    "id":1212,\n    "name":"瀹夊浗甯�",\n    "superregion_id":78\n
}
 {
	\n    "id":1213,\n    "name":"瀹夋柊鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1214,\n    "name":"瀹氬叴鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1215,\n    "name":"瀹氬窞甯�",\n    "superregion_id":78\n
}
 {
	\n    "id":1216,\n    "name":"瀹瑰煄鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1217,\n    "name":"寰愭按鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1218,\n    "name":"鏂板競鍖�",\n    "superregion_id":78\n
}
 {
	\n    "id":1219,\n    "name":"鏄撳幙",\n    "superregion_id":78\n
}
 {
	\n    "id":1220,\n    "name":"鏇查槼鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1221,\n    "name":"鏈涢兘鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1222,\n    "name":"娑炴按鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1223,\n    "name":"娑炴簮鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1224,\n    "name":"娑垮窞甯�",\n    "superregion_id":78\n
}
 {
	\n    "id":1225,\n    "name":"娓呰嫅鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1226,\n    "name":"婊″煄鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1227,\n    "name":"锠″幙",\n    "superregion_id":78\n
}
 {
	\n    "id":1228,\n    "name":"闃滃钩鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1229,\n    "name":"闆勫幙",\n    "superregion_id":78\n
}
 {
	\n    "id":1230,\n    "name":"椤哄钩鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1231,\n    "name":"楂樼搴楀競",\n    "superregion_id":78\n
}
 {
	\n    "id":1232,\n    "name":"楂橀槼鍘�",\n    "superregion_id":78\n
}
 {
	\n    "id":1233,\n    "name":"涓囧叏鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1234,\n    "name":"涓嬭姳鍥尯",\n    "superregion_id":79\n
}
 {
	\n    "id":1235,\n    "name":"瀹ｅ寲鍖�",\n    "superregion_id":79\n
}
 {
	\n    "id":1236,\n    "name":"瀹ｅ寲鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1237,\n    "name":"灏氫箟鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1238,\n    "name":"宕囩ぜ鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1239,\n    "name":"搴蜂繚鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1240,\n    "name":"寮犲寳鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1241,\n    "name":"鎬€瀹夊幙",\n    "superregion_id":79\n
}
 {
	\n    "id":1242,\n    "name":"鎬€鏉ュ幙",\n    "superregion_id":79\n
}
 {
	\n    "id":1243,\n    "name":"妗ヤ笢鍖�",\n    "superregion_id":79\n
}
 {
	\n    "id":1244,\n    "name":"妗ヨタ鍖�",\n    "superregion_id":79\n
}
 {
	\n    "id":1245,\n    "name":"娌芥簮鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1246,\n    "name":"娑块箍鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1247,\n    "name":"钄氬幙",\n    "superregion_id":79\n
}
 {
	\n    "id":1248,\n    "name":"璧ゅ煄鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1249,\n    "name":"闃冲師鍘�",\n    "superregion_id":79\n
}
 {
	\n    "id":1250,\n    "name":"涓板畞婊℃棌鑷不鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1251,\n    "name":"鍏撮殕鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1252,\n    "name":"鍙屾ˉ鍖�",\n    "superregion_id":80\n
}
 {
	\n    "id":1253,\n    "name":"鍙屾沪鍖�",\n    "superregion_id":80\n
}
 {
	\n    "id":1254,\n    "name":"鍥村満婊℃棌钂欏彜鏃忚嚜娌诲幙",\n    "superregion_id":80\n
}
 {
	\n    "id":1255,\n    "name":"瀹藉煄婊℃棌鑷不鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1256,\n    "name":"骞虫硥鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1257,\n    "name":"鎵垮痉鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1258,\n    "name":"婊﹀钩鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1259,\n    "name":"闅嗗寲鍘�",\n    "superregion_id":80\n
}
 {
	\n    "id":1260,\n    "name":"楣版墜钀ュ瓙鐭垮尯",\n    "superregion_id":80\n
}
 {
	\n    "id":1261,\n    "name":"鍐€宸炲競",\n    "superregion_id":81\n
}
 {
	\n    "id":1262,\n    "name":"瀹夊钩鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1263,\n    "name":"鏁呭煄鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1264,\n    "name":"鏅幙",\n    "superregion_id":81\n
}
 {
	\n    "id":1265,\n    "name":"鏋ｅ己鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1266,\n    "name":"妗冨煄鍖�",\n    "superregion_id":81\n
}
 {
	\n    "id":1267,\n    "name":"姝﹀己鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1268,\n    "name":"姝﹂倯鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1269,\n    "name":"娣卞窞甯�",\n    "superregion_id":81\n
}
 {
	\n    "id":1270,\n    "name":"闃滃煄鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1271,\n    "name":"楗堕槼鍘�",\n    "superregion_id":81\n
}
 {
	\n    "id":1272,\n    "name":"涓夋渤甯�",\n    "superregion_id":82\n
}
 {
	\n    "id":1273,\n    "name":"鍥哄畨鍘�",\n    "superregion_id":82\n
}
 {
	\n    "id":1274,\n    "name":"澶у巶鍥炴棌鑷不鍘�",\n    "superregion_id":82\n
}
 {
	\n    "id":1275,\n    "name":"澶у煄鍘�",\n    "superregion_id":82\n
}
 {
	\n    "id":1276,\n    "name":"瀹夋鍖�",\n    "superregion_id":82\n
}
 {
	\n    "id":1277,\n    "name":"骞块槼鍖�",\n    "superregion_id":82\n
}
 {
	\n    "id":1278,\n    "name":"鏂囧畨鍘�",\n    "superregion_id":82\n
}
 {
	\n    "id":1279,\n    "name":"姘告竻鍘�",\n    "superregion_id":82\n
}
 {
	\n    "id":1280,\n    "name":"闇稿窞甯�",\n    "superregion_id":82\n
}
 {
	\n    "id":1281,\n    "name":"棣欐渤鍘�",\n    "superregion_id":82\n
}
 {
	\n    "id":1282,\n    "name":"涓滃厜鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1283,\n    "name":"浠讳笜甯�",\n    "superregion_id":83\n
}
 {
	\n    "id":1284,\n    "name":"鍗楃毊鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1285,\n    "name":"鍚存ˉ鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1286,\n    "name":"瀛熸潙鍥炴棌鑷不鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1287,\n    "name":"鏂板崕鍖�",\n    "superregion_id":83\n
}
 {
	\n    "id":1288,\n    "name":"娌у幙",\n    "superregion_id":83\n
}
 {
	\n    "id":1289,\n    "name":"娌抽棿甯�",\n    "superregion_id":83\n
}
 {
	\n    "id":1290,\n    "name":"娉婂ご甯�",\n    "superregion_id":83\n
}
 {
	\n    "id":1291,\n    "name":"娴峰叴鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1292,\n    "name":"鐚幙",\n    "superregion_id":83\n
}
 {
	\n    "id":1293,\n    "name":"鐩愬北鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1294,\n    "name":"鑲冨畞鍘�",\n    "superregion_id":83\n
}
 {
	\n    "id":1295,\n    "name":"杩愭渤鍖�",\n    "superregion_id":83\n
}
 {
	\n    "id":1296,\n    "name":"闈掑幙",\n    "superregion_id":83\n
}
 {
	\n    "id":1297,\n    "name":"榛勯獏甯�",\n    "superregion_id":83\n
}
 {
	\n    "id":1298,\n    "name":"涓囨煆鏋楀尯",\n    "superregion_id":84\n
}
 {
	\n    "id":1299,\n    "name":"鍙や氦甯�",\n    "superregion_id":84\n
}
 {
	\n    "id":1300,\n    "name":"濞勭儲鍘�",\n    "superregion_id":84\n
}
 {
	\n    "id":1301,\n    "name":"灏忓簵鍖�",\n    "superregion_id":84\n
}
 {
	\n    "id":1302,\n    "name":"灏栬崏鍧尯",\n    "superregion_id":84\n
}
 {
	\n    "id":1303,\n    "name":"鏅嬫簮鍖�",\n    "superregion_id":84\n
}
 {
	\n    "id":1304,\n    "name":"鏉忚姳宀尯",\n    "superregion_id":84\n
}
 {
	\n    "id":1305,\n    "name":"娓呭緪鍘�",\n    "superregion_id":84\n
}
 {
	\n    "id":1306,\n    "name":"杩庢辰鍖�",\n    "superregion_id":84\n
}
 {
	\n    "id":1307,\n    "name":"闃虫洸鍘�",\n    "superregion_id":84\n
}
 {
	\n    "id":1308,\n    "name":"鍗楅儕鍖�",\n    "superregion_id":85\n
}
 {
	\n    "id":1309,\n    "name":"鍩庡尯",\n    "superregion_id":85\n
}
 {
	\n    "id":1310,\n    "name":"澶у悓鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1311,\n    "name":"澶╅晣鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1312,\n    "name":"宸︿簯鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1313,\n    "name":"骞跨伒鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1314,\n    "name":"鏂拌崳鍖�",\n    "superregion_id":85\n
}
 {
	\n    "id":1315,\n    "name":"娴戞簮鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1316,\n    "name":"鐏典笜鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1317,\n    "name":"鐭垮尯",\n    "superregion_id":85\n
}
 {
	\n    "id":1318,\n    "name":"闃抽珮鍘�",\n    "superregion_id":85\n
}
 {
	\n    "id":1319,\n    "name":"鍩庡尯",\n    "superregion_id":86\n
}
 {
	\n    "id":1320,\n    "name":"骞冲畾鍘�",\n    "superregion_id":86\n
}
 {
	\n    "id":1321,\n    "name":"鐩傚幙",\n    "superregion_id":86\n
}
 {
	\n    "id":1322,\n    "name":"鐭垮尯",\n    "superregion_id":86\n
}
 {
	\n    "id":1323,\n    "name":"閮婂尯",\n    "superregion_id":86\n
}
 {
	\n    "id":1324,\n    "name":"鍩庡尯",\n    "superregion_id":87\n
}
 {
	\n    "id":1325,\n    "name":"澹跺叧鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1326,\n    "name":"灞暀鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1327,\n    "name":"骞抽『鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1328,\n    "name":"姝︿埂鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1329,\n    "name":"娌佸幙",\n    "superregion_id":87\n
}
 {
	\n    "id":1330,\n    "name":"娌佹簮鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1331,\n    "name":"娼炲煄甯�",\n    "superregion_id":87\n
}
 {
	\n    "id":1332,\n    "name":"瑗勫灒鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1333,\n    "name":"閮婂尯",\n    "superregion_id":87\n
}
 {
	\n    "id":1334,\n    "name":"闀垮瓙鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1335,\n    "name":"闀挎不鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1336,\n    "name":"榛庡煄鍘�",\n    "superregion_id":87\n
}
 {
	\n    "id":1337,\n    "name":"鍩庡尯",\n    "superregion_id":88\n
}
 {
	\n    "id":1338,\n    "name":"娌佹按鍘�",\n    "superregion_id":88\n
}
 {
	\n    "id":1339,\n    "name":"娉藉窞鍘�",\n    "superregion_id":88\n
}
 {
	\n    "id":1340,\n    "name":"闃冲煄鍘�",\n    "superregion_id":88\n
}
 {
	\n    "id":1341,\n    "name":"闄靛窛鍘�",\n    "superregion_id":88\n
}
 {
	\n    "id":1342,\n    "name":"楂樺钩甯�",\n    "superregion_id":88\n
}
 {
	\n    "id":1343,\n    "name":"鍙崇帀鍘�",\n    "superregion_id":89\n
}
 {
	\n    "id":1344,\n    "name":"灞遍槾鍘�",\n    "superregion_id":89\n
}
 {
	\n    "id":1345,\n    "name":"骞抽瞾鍖�",\n    "superregion_id":89\n
}
 {
	\n    "id":1346,\n    "name":"搴斿幙",\n    "superregion_id":89\n
}
 {
	\n    "id":1347,\n    "name":"鎬€浠佸幙",\n    "superregion_id":89\n
}
 {
	\n    "id":1348,\n    "name":"鏈斿煄鍖�",\n    "superregion_id":89\n
}
 {
	\n    "id":1349,\n    "name":"浠嬩紤甯�",\n    "superregion_id":90\n
}
 {
	\n    "id":1350,\n    "name":"鍜岄『鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1351,\n    "name":"澶胺鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1352,\n    "name":"瀵块槼鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1353,\n    "name":"宸︽潈鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1354,\n    "name":"骞抽仴鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1355,\n    "name":"鏄旈槼鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1356,\n    "name":"姒嗘鍖�",\n    "superregion_id":90\n
}
 {
	\n    "id":1357,\n    "name":"姒嗙ぞ鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1358,\n    "name":"鐏电煶鍘�",\n    "superregion_id":90\n
}
 {
	\n    "id":1359,\n    "name":"绁佸幙",\n    "superregion_id":90\n
}
 {
	\n    "id":1360,\n    "name":"涓囪崳鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1361,\n    "name":"涓寸寳鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1362,\n    "name":"鍨ｆ洸鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1363,\n    "name":"澶忓幙",\n    "superregion_id":91\n
}
 {
	\n    "id":1364,\n    "name":"骞抽檰鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1365,\n    "name":"鏂扮粵鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1366,\n    "name":"姘告祹甯�",\n    "superregion_id":91\n
}
 {
	\n    "id":1367,\n    "name":"娌虫触甯�",\n    "superregion_id":91\n
}
 {
	\n    "id":1368,\n    "name":"鐩愭箹鍖�",\n    "superregion_id":91\n
}
 {
	\n    "id":1369,\n    "name":"绋峰北鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1370,\n    "name":"缁涘幙",\n    "superregion_id":91\n
}
 {
	\n    "id":1371,\n    "name":"鑺煄鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1372,\n    "name":"闂诲枩鍘�",\n    "superregion_id":91\n
}
 {
	\n    "id":1373,\n    "name":"浜斿彴鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1374,\n    "name":"浜斿鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1375,\n    "name":"浠ｅ幙",\n    "superregion_id":92\n
}
 {
	\n    "id":1376,\n    "name":"淇濆痉鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1377,\n    "name":"鍋忓叧鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1378,\n    "name":"鍘熷钩甯�",\n    "superregion_id":92\n
}
 {
	\n    "id":1379,\n    "name":"瀹佹鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1380,\n    "name":"瀹氳鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1381,\n    "name":"宀㈠矚鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1382,\n    "name":"蹇诲簻鍖�",\n    "superregion_id":92\n
}
 {
	\n    "id":1383,\n    "name":"娌虫洸鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1384,\n    "name":"绁炴睜鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1385,\n    "name":"绻佸硻鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1386,\n    "name":"闈欎箰鍘�",\n    "superregion_id":92\n
}
 {
	\n    "id":1387,\n    "name":"涔″畞鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1388,\n    "name":"渚┈甯�",\n    "superregion_id":93\n
}
 {
	\n    "id":1389,\n    "name":"鍙ゅ幙",\n    "superregion_id":93\n
}
 {
	\n    "id":1390,\n    "name":"鍚夊幙",\n    "superregion_id":93\n
}
 {
	\n    "id":1391,\n    "name":"澶у畞鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1392,\n    "name":"瀹夋辰鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1393,\n    "name":"灏ч兘鍖�",\n    "superregion_id":93\n
}
 {
	\n    "id":1394,\n    "name":"鏇叉矁鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1395,\n    "name":"姘稿拰鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1396,\n    "name":"姹捐タ鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1397,\n    "name":"娲礊鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1398,\n    "name":"娴北鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1399,\n    "name":"缈煎煄鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1400,\n    "name":"钂插幙",\n    "superregion_id":93\n
}
 {
	\n    "id":1401,\n    "name":"瑗勬本鍘�",\n    "superregion_id":93\n
}
 {
	\n    "id":1402,\n    "name":"闅板幙",\n    "superregion_id":93\n
}
 {
	\n    "id":1403,\n    "name":"闇嶅窞甯�",\n    "superregion_id":93\n
}
 {
	\n    "id":1404,\n    "name":"涓槼鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1405,\n    "name":"涓村幙",\n    "superregion_id":94\n
}
 {
	\n    "id":1406,\n    "name":"浜ゅ彛鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1407,\n    "name":"浜ゅ煄鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1408,\n    "name":"鍏村幙",\n    "superregion_id":94\n
}
 {
	\n    "id":1409,\n    "name":"瀛濅箟甯�",\n    "superregion_id":94\n
}
 {
	\n    "id":1410,\n    "name":"宀氬幙",\n    "superregion_id":94\n
}
 {
	\n    "id":1411,\n    "name":"鏂囨按鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1412,\n    "name":"鏂瑰北鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1413,\n    "name":"鏌虫灄鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1414,\n    "name":"姹鹃槼甯�",\n    "superregion_id":94\n
}
 {
	\n    "id":1415,\n    "name":"鐭虫ゼ鍘�",\n    "superregion_id":94\n
}
 {
	\n    "id":1416,\n    "name":"绂荤煶鍖�",\n    "superregion_id":94\n
}
 {
	\n    "id":1417,\n    "name":"鍜屾灄鏍煎皵鍘�",\n    "superregion_id":95\n
}
 {
	\n    "id":1418,\n    "name":"鍥炴皯鍖�",\n    "superregion_id":95\n
}
 {
	\n    "id":1419,\n    "name":"鍦熼粯鐗瑰乏鏃�",\n    "superregion_id":95\n
}
 {
	\n    "id":1420,\n    "name":"鎵樺厠鎵樺幙",\n    "superregion_id":95\n
}
 {
	\n    "id":1421,\n    "name":"鏂板煄鍖�",\n    "superregion_id":95\n
}
 {
	\n    "id":1422,\n    "name":"姝﹀窛鍘�",\n    "superregion_id":95\n
}
 {
	\n    "id":1423,\n    "name":"娓呮按娌冲幙",\n    "superregion_id":95\n
}
 {
	\n    "id":1424,\n    "name":"鐜夋硥鍖�",\n    "superregion_id":95\n
}
 {
	\n    "id":1425,\n    "name":"璧涚綍鍖�",\n    "superregion_id":95\n
}
 {
	\n    "id":1426,\n    "name":"涓滄渤鍖�",\n    "superregion_id":96\n
}
 {
	\n    "id":1427,\n    "name":"涔濆師鍖�",\n    "superregion_id":96\n
}
 {
	\n    "id":1428,\n    "name":"鍥洪槼鍘�",\n    "superregion_id":96\n
}
 {
	\n    "id":1429,\n    "name":"鍦熼粯鐗瑰彸鏃�",\n    "superregion_id":96\n
}
 {
	\n    "id":1430,\n    "name":"鏄嗛兘浠戝尯",\n    "superregion_id":96\n
}
 {
	\n    "id":1431,\n    "name":"鐧戒簯閯傚崥鐭垮尯",\n    "superregion_id":96\n
}
 {
	\n    "id":1432,\n    "name":"鐭虫嫄鍖�",\n    "superregion_id":96\n
}
 {
	\n    "id":1433,\n    "name":"杈惧皵缃曡寕鏄庡畨鑱斿悎鏃�",\n    "superregion_id":96\n
}
 {
	\n    "id":1434,\n    "name":"闈掑北鍖�",\n    "superregion_id":96\n
}
 {
	\n    "id":1435,\n    "name":"涔岃揪鍖�",\n    "superregion_id":97\n
}
 {
	\n    "id":1436,\n    "name":"娴峰媰婀惧尯",\n    "superregion_id":97\n
}
 {
	\n    "id":1437,\n    "name":"娴峰崡鍖�",\n    "superregion_id":97\n
}
 {
	\n    "id":1438,\n    "name":"鍏冨疂灞卞尯",\n    "superregion_id":98\n
}
 {
	\n    "id":1439,\n    "name":"鍏嬩粈鍏嬭吘鏃�",\n    "superregion_id":98\n
}
 {
	\n    "id":1440,\n    "name":"鍠€鍠囨瞾鏃�",\n    "superregion_id":98\n
}
 {
	\n    "id":1441,\n    "name":"瀹佸煄鍘�",\n    "superregion_id":98\n
}
 {
	\n    "id":1442,\n    "name":"宸存灄鍙虫棗",\n    "superregion_id":98\n
}
 {
	\n    "id":1443,\n    "name":"宸存灄宸︽棗",\n    "superregion_id":98\n
}
 {
	\n    "id":1444,\n    "name":"鏁栨眽鏃�",\n    "superregion_id":98\n
}
 {
	\n    "id":1445,\n    "name":"鏉惧北鍖�",\n    "superregion_id":98\n
}
 {
	\n    "id":1446,\n    "name":"鏋楄タ鍘�",\n    "superregion_id":98\n
}
 {
	\n    "id":1447,\n    "name":"绾㈠北鍖�",\n    "superregion_id":98\n
}
 {
	\n    "id":1448,\n    "name":"缈佺墰鐗规棗",\n    "superregion_id":98\n
}
 {
	\n    "id":1449,\n    "name":"闃块瞾绉戝皵娌佹棗",\n    "superregion_id":98\n
}
 {
	\n    "id":1450,\n    "name":"濂堟浖鏃�",\n    "superregion_id":99\n
}
 {
	\n    "id":1451,\n    "name":"搴撲鸡鏃�",\n    "superregion_id":99\n
}
 {
	\n    "id":1452,\n    "name":"寮€椴佸幙",\n    "superregion_id":99\n
}
 {
	\n    "id":1453,\n    "name":"鎵庨瞾鐗规棗",\n    "superregion_id":99\n
}
 {
	\n    "id":1454,\n    "name":"绉戝皵娌佸尯",\n    "superregion_id":99\n
}
 {
	\n    "id":1455,\n    "name":"绉戝皵娌佸乏缈间腑鏃�",\n    "superregion_id":99\n
}
 {
	\n    "id":1456,\n    "name":"绉戝皵娌佸乏缈煎悗鏃�",\n    "superregion_id":99\n
}
 {
	\n    "id":1457,\n    "name":"闇嶆灄閮嫆甯�",\n    "superregion_id":99\n
}
 {
	\n    "id":1458,\n    "name":"涓滆儨鍖�",\n    "superregion_id":100\n
}
 {
	\n    "id":1459,\n    "name":"涔屽鏃�",\n    "superregion_id":100\n
}
 {
	\n    "id":1460,\n    "name":"浼婇噾闇嶆礇鏃�",\n    "superregion_id":100\n
}
 {
	\n    "id":1461,\n    "name":"鍑嗘牸灏旀棗",\n    "superregion_id":100\n
}
 {
	\n    "id":1462,\n    "name":"鏉敠鏃�",\n    "superregion_id":100\n
}
 {
	\n    "id":1463,\n    "name":"杈炬媺鐗规棗",\n    "superregion_id":100\n
}
 {
	\n    "id":1465,\n    "name":"閯傛墭鍏嬪墠鏃�",\n    "superregion_id":100\n
}
 {
	\n    "id":1466,\n    "name":"閯傛墭鍏嬫棗",\n    "superregion_id":100\n
}
 {
	\n    "id":1467,\n    "name":"鎵庡叞灞競",\n    "superregion_id":101\n
}
 {
	\n    "id":1468,\n    "name":"鏂板反灏旇檸鍙虫棗",\n    "superregion_id":101\n
}
 {
	\n    "id":1469,\n    "name":"鏂板反灏旇檸宸︽棗",\n    "superregion_id":101\n
}
 {
	\n    "id":1470,\n    "name":"鏍规渤甯�",\n    "superregion_id":101\n
}
 {
	\n    "id":1471,\n    "name":"娴锋媺灏斿尯",\n    "superregion_id":101\n
}
 {
	\n    "id":1472,\n    "name":"婊℃床閲屽競",\n    "superregion_id":101\n
}
 {
	\n    "id":1473,\n    "name":"鐗欏厠鐭冲競",\n    "superregion_id":101\n
}
 {
	\n    "id":1474,\n    "name":"鑾姏杈剧摝杈炬枴灏旀棌鑷不鏃�",\n    "superregion_id":101\n
}
 {
	\n    "id":1475,\n    "name":"閯備鸡鏄ヨ嚜娌绘棗",\n    "superregion_id":101\n
}
 {
	\n    "id":1476,\n    "name":"閯傛俯鍏嬫棌鑷不鏃�",\n    "superregion_id":101\n
}
 {
	\n    "id":1477,\n    "name":"闃胯崳鏃�",\n    "superregion_id":101\n
}
 {
	\n    "id":1478,\n    "name":"闄堝反灏旇檸鏃�",\n    "superregion_id":101\n
}
 {
	\n    "id":1479,\n    "name":"棰濆皵鍙ょ撼甯�",\n    "superregion_id":101\n
}
 {
	\n    "id":1480,\n    "name":"涓存渤鍖�",\n    "superregion_id":102\n
}
 {
	\n    "id":1481,\n    "name":"涔屾媺鐗逛腑鏃�",\n    "superregion_id":102\n
}
 {
	\n    "id":1482,\n    "name":"涔屾媺鐗瑰墠鏃�",\n    "superregion_id":102\n
}
 {
	\n    "id":1483,\n    "name":"涔屾媺鐗瑰悗鏃�",\n    "superregion_id":102\n
}
 {
	\n    "id":1484,\n    "name":"浜斿師鍘�",\n    "superregion_id":102\n
}
 {
	\n    "id":1485,\n    "name":"鏉敠鍚庢棗",\n    "superregion_id":102\n
}
 {
	\n    "id":1486,\n    "name":"纾村彛鍘�",\n    "superregion_id":102\n
}
 {
	\n    "id":1487,\n    "name":"涓伴晣甯�",\n    "superregion_id":103\n
}
 {
	\n    "id":1488,\n    "name":"鍏村拰鍘�",\n    "superregion_id":103\n
}
 {
	\n    "id":1489,\n    "name":"鍑夊煄鍘�",\n    "superregion_id":103\n
}
 {
	\n    "id":1490,\n    "name":"鍖栧痉鍘�",\n    "superregion_id":103\n
}
 {
	\n    "id":1491,\n    "name":"鍗撹祫鍘�",\n    "superregion_id":103\n
}
 {
	\n    "id":1492,\n    "name":"鍟嗛兘鍘�",\n    "superregion_id":103\n
}
 {
	\n    "id":1493,\n    "name":"鍥涘瓙鐜嬫棗",\n    "superregion_id":103\n
}
 {
	\n    "id":1494,\n    "name":"瀵熷搱灏斿彸缈间腑鏃�",\n    "superregion_id":103\n
}
 {
	\n    "id":1495,\n    "name":"瀵熷搱灏斿彸缈煎墠鏃�",\n    "superregion_id":103\n
}
 {
	\n    "id":1496,\n    "name":"瀵熷搱灏斿彸缈煎悗鏃�",\n    "superregion_id":103\n
}
 {
	\n    "id":1497,\n    "name":"闆嗗畞鍖�",\n    "superregion_id":103\n
}
 {
	\n    "id":1498,\n    "name":"涔屽叞娴╃壒甯�",\n    "superregion_id":104\n
}
 {
	\n    "id":1499,\n    "name":"鎵庤祲鐗规棗",\n    "superregion_id":104\n
}
 {
	\n    "id":1500,\n    "name":"绉戝皵娌佸彸缈间腑鏃�",\n    "superregion_id":104\n
}
 {
	\n    "id":1501,\n    "name":"绉戝皵娌佸彸缈煎墠鏃�",\n    "superregion_id":104\n
}
 {
	\n    "id":1502,\n    "name":"绐佹硥鍘�",\n    "superregion_id":104\n
}
 {
	\n    "id":1503,\n    "name":"闃垮皵灞卞競",\n    "superregion_id":104\n
}
 {
	\n    "id":1504,\n    "name":"涓滀箤鐝犵﹩娌佹棗",\n    "superregion_id":105\n
}
 {
	\n    "id":1505,\n    "name":"浜岃繛娴╃壒甯�",\n    "superregion_id":105\n
}
 {
	\n    "id":1506,\n    "name":"澶氫鸡鍘�",\n    "superregion_id":105\n
}
 {
	\n    "id":1507,\n    "name":"澶粏瀵烘棗",\n    "superregion_id":105\n
}
 {
	\n    "id":1508,\n    "name":"姝ｈ摑鏃�",\n    "superregion_id":105\n
}
 {
	\n    "id":1509,\n    "name":"姝ｉ暥鐧芥棗",\n    "superregion_id":105\n
}
 {
	\n    "id":1510,\n    "name":"鑻忓凹鐗瑰彸鏃�",\n    "superregion_id":105\n
}
 {
	\n    "id":1511,\n    "name":"鑻忓凹鐗瑰乏鏃�",\n    "superregion_id":105\n
}
 {
	\n    "id":1512,\n    "name":"瑗夸箤鐝犵﹩娌佹棗",\n    "superregion_id":105\n
}
 {
	\n    "id":1513,\n    "name":"閿℃灄娴╃壒甯�",\n    "superregion_id":105\n
}
 {
	\n    "id":1514,\n    "name":"闀堕粍鏃�",\n    "superregion_id":105\n
}
 {
	\n    "id":1515,\n    "name":"闃垮反鍢庢棗",\n    "superregion_id":105\n
}
 {
	\n    "id":1516,\n    "name":"闃挎媺鍠勫彸鏃�",\n    "superregion_id":106\n
}
 {
	\n    "id":1517,\n    "name":"闃挎媺鍠勫乏鏃�",\n    "superregion_id":106\n
}
 {
	\n    "id":1518,\n    "name":"棰濇祹绾虫棗",\n    "superregion_id":106\n
}
 {
	\n    "id":1519,\n    "name":"涓滈櫟鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1520,\n    "name":"浜庢椽鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1521,\n    "name":"鍜屽钩鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1522,\n    "name":"澶т笢鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1523,\n    "name":"搴峰钩鍘�",\n    "superregion_id":107\n
}
 {
	\n    "id":1524,\n    "name":"鏂版皯甯�",\n    "superregion_id":107\n
}
 {
	\n    "id":1525,\n    "name":"娌堝寳鏂板尯",\n    "superregion_id":107\n
}
 {
	\n    "id":1526,\n    "name":"娌堟渤鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1527,\n    "name":"娉曞簱鍘�",\n    "superregion_id":107\n
}
 {
	\n    "id":1528,\n    "name":"鐨囧鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1529,\n    "name":"鑻忓灞尯",\n    "superregion_id":107\n
}
 {
	\n    "id":1530,\n    "name":"杈戒腑鍘�",\n    "superregion_id":107\n
}
 {
	\n    "id":1531,\n    "name":"閾佽タ鍖�",\n    "superregion_id":107\n
}
 {
	\n    "id":1532,\n    "name":"涓北鍖�",\n    "superregion_id":108\n
}
 {
	\n    "id":1533,\n    "name":"搴勬渤甯�",\n    "superregion_id":108\n
}
 {
	\n    "id":1534,\n    "name":"鏃呴『鍙ｅ尯",\n    "superregion_id":108\n
}
 {
	\n    "id":1535,\n    "name":"鏅叞搴楀競",\n    "superregion_id":108\n
}
 {
	\n    "id":1536,\n    "name":"娌欐渤鍙ｅ尯",\n    "superregion_id":108\n
}
 {
	\n    "id":1537,\n    "name":"鐡︽埧搴楀競",\n    "superregion_id":108\n
}
 {
	\n    "id":1538,\n    "name":"鐢樹簳瀛愬尯",\n    "superregion_id":108\n
}
 {
	\n    "id":1539,\n    "name":"瑗垮矖鍖�",\n    "superregion_id":108\n
}
 {
	\n    "id":1540,\n    "name":"閲戝窞鍖�",\n    "superregion_id":108\n
}
 {
	\n    "id":1541,\n    "name":"闀挎捣鍘�",\n    "superregion_id":108\n
}
 {
	\n    "id":1542,\n    "name":"鍗冨北鍖�",\n    "superregion_id":109\n
}
 {
	\n    "id":1543,\n    "name":"鍙板畨鍘�",\n    "superregion_id":109\n
}
 {
	\n    "id":1544,\n    "name":"宀博婊℃棌鑷不鍘�",\n    "superregion_id":109\n
}
 {
	\n    "id":1545,\n    "name":"娴峰煄甯�",\n    "superregion_id":109\n
}
 {
	\n    "id":1546,\n    "name":"绔嬪北鍖�",\n    "superregion_id":109\n
}
 {
	\n    "id":1547,\n    "name":"閾佷笢鍖�",\n    "superregion_id":109\n
}
 {
	\n    "id":1548,\n    "name":"閾佽タ鍖�",\n    "superregion_id":109\n
}
 {
	\n    "id":1549,\n    "name":"涓滄床鍖�",\n    "superregion_id":110\n
}
 {
	\n    "id":1550,\n    "name":"鎶氶『鍘�",\n    "superregion_id":110\n
}
 {
	\n    "id":1551,\n    "name":"鏂板婊℃棌鑷不鍘�",\n    "superregion_id":110\n
}
 {
	\n    "id":1552,\n    "name":"鏂版姎鍖�",\n    "superregion_id":110\n
}
 {
	\n    "id":1553,\n    "name":"鏈涜姳鍖�",\n    "superregion_id":110\n
}
 {
	\n    "id":1554,\n    "name":"娓呭師婊℃棌鑷不鍘�",\n    "superregion_id":110\n
}
 {
	\n    "id":1555,\n    "name":"椤哄煄鍖�",\n    "superregion_id":110\n
}
 {
	\n    "id":1556,\n    "name":"鍗楄姮鍖�",\n    "superregion_id":111\n
}
 {
	\n    "id":1557,\n    "name":"骞冲北鍖�",\n    "superregion_id":111\n
}
 {
	\n    "id":1558,\n    "name":"鏄庡北鍖�",\n    "superregion_id":111\n
}
 {
	\n    "id":1559,\n    "name":"鏈邯婊℃棌鑷不鍘�",\n    "superregion_id":111\n
}
 {
	\n    "id":1560,\n    "name":"妗撲粊婊℃棌鑷不鍘�",\n    "superregion_id":111\n
}
 {
	\n    "id":1561,\n    "name":"婧箹鍖�",\n    "superregion_id":111\n
}
 {
	\n    "id":1562,\n    "name":"涓滄腐甯�",\n    "superregion_id":112\n
}
 {
	\n    "id":1563,\n    "name":"鍏冨疂鍖�",\n    "superregion_id":112\n
}
 {
	\n    "id":1564,\n    "name":"鍑ゅ煄甯�",\n    "superregion_id":112\n
}
 {
	\n    "id":1565,\n    "name":"瀹界敻婊℃棌鑷不鍘�",\n    "superregion_id":112\n
}
 {
	\n    "id":1566,\n    "name":"鎸叴鍖�",\n    "superregion_id":112\n
}
 {
	\n    "id":1567,\n    "name":"鎸畨鍖�",\n    "superregion_id":112\n
}
 {
	\n    "id":1568,\n    "name":"涔夊幙",\n    "superregion_id":113\n
}
 {
	\n    "id":1569,\n    "name":"鍑屾渤鍖�",\n    "superregion_id":113\n
}
 {
	\n    "id":1570,\n    "name":"鍑屾捣甯�",\n    "superregion_id":113\n
}
 {
	\n    "id":1571,\n    "name":"鍖楅晣甯�",\n    "superregion_id":113\n
}
 {
	\n    "id":1572,\n    "name":"鍙ゅ鍖�",\n    "superregion_id":113\n
}
 {
	\n    "id":1573,\n    "name":"澶拰鍖�",\n    "superregion_id":113\n
}
 {
	\n    "id":1574,\n    "name":"榛戝北鍘�",\n    "superregion_id":113\n
}
 {
	\n    "id":1575,\n    "name":"澶х煶妗ュ競",\n    "superregion_id":114\n
}
 {
	\n    "id":1576,\n    "name":"鐩栧窞甯�",\n    "superregion_id":114\n
}
 {
	\n    "id":1577,\n    "name":"绔欏墠鍖�",\n    "superregion_id":114\n
}
 {
	\n    "id":1578,\n    "name":"鑰佽竟鍖�",\n    "superregion_id":114\n
}
 {
	\n    "id":1579,\n    "name":"瑗垮競鍖�",\n    "superregion_id":114\n
}
 {
	\n    "id":1580,\n    "name":"椴呴奔鍦堝尯",\n    "superregion_id":114\n
}
 {
	\n    "id":1581,\n    "name":"澶钩鍖�",\n    "superregion_id":115\n
}
 {
	\n    "id":1582,\n    "name":"褰版鍘�",\n    "superregion_id":115\n
}
 {
	\n    "id":1583,\n    "name":"鏂伴偙鍖�",\n    "superregion_id":115\n
}
 {
	\n    "id":1584,\n    "name":"娴峰窞鍖�",\n    "superregion_id":115\n
}
 {
	\n    "id":1585,\n    "name":"娓呮渤闂ㄥ尯",\n    "superregion_id":115\n
}
 {
	\n    "id":1586,\n    "name":"缁嗘渤鍖�",\n    "superregion_id":115\n
}
 {
	\n    "id":1587,\n    "name":"闃滄柊钂欏彜鏃忚嚜娌诲幙",\n    "superregion_id":115\n
}
 {
	\n    "id":1588,\n    "name":"澶瓙娌冲尯",\n    "superregion_id":116\n
}
 {
	\n    "id":1589,\n    "name":"瀹忎紵鍖�",\n    "superregion_id":116\n
}
 {
	\n    "id":1590,\n    "name":"寮撻暱宀尯",\n    "superregion_id":116\n
}
 {
	\n    "id":1591,\n    "name":"鏂囧湥鍖�",\n    "superregion_id":116\n
}
 {
	\n    "id":1592,\n    "name":"鐏甯�",\n    "superregion_id":116\n
}
 {
	\n    "id":1593,\n    "name":"鐧藉鍖�",\n    "superregion_id":116\n
}
 {
	\n    "id":1594,\n    "name":"杈介槼鍘�",\n    "superregion_id":116\n
}
 {
	\n    "id":1595,\n    "name":"鍏撮殕鍙板尯",\n    "superregion_id":117\n
}
 {
	\n    "id":1596,\n    "name":"鍙屽彴瀛愬尯",\n    "superregion_id":117\n
}
 {
	\n    "id":1597,\n    "name":"澶ф醇鍘�",\n    "superregion_id":117\n
}
 {
	\n    "id":1598,\n    "name":"鐩樺北鍘�",\n    "superregion_id":117\n
}
 {
	\n    "id":1599,\n    "name":"寮€鍘熷競",\n    "superregion_id":118\n
}
 {
	\n    "id":1600,\n    "name":"鏄屽浘鍘�",\n    "superregion_id":118\n
}
 {
	\n    "id":1601,\n    "name":"娓呮渤鍖�",\n    "superregion_id":118\n
}
 {
	\n    "id":1602,\n    "name":"瑗夸赴鍘�",\n    "superregion_id":118\n
}
 {
	\n    "id":1603,\n    "name":"璋冨叺灞卞競",\n    "superregion_id":118\n
}
 {
	\n    "id":1604,\n    "name":"閾佸箔鍘�",\n    "superregion_id":118\n
}
 {
	\n    "id":1605,\n    "name":"閾跺窞鍖�",\n    "superregion_id":118\n
}
 {
	\n    "id":1606,\n    "name":"鍑屾簮甯�",\n    "superregion_id":119\n
}
 {
	\n    "id":1607,\n    "name":"鍖楃エ甯�",\n    "superregion_id":119\n
}
 {
	\n    "id":1608,\n    "name":"鍙屽鍖�",\n    "superregion_id":119\n
}
 {
	\n    "id":1609,\n    "name":"鍠€鍠囨瞾宸︾考钂欏彜鏃忚嚜娌诲幙",\n    "superregion_id":119\n
}
 {
	\n    "id":1610,\n    "name":"寤哄钩鍘�",\n    "superregion_id":119\n
}
 {
	\n    "id":1611,\n    "name":"鏈濋槼鍘�",\n    "superregion_id":119\n
}
 {
	\n    "id":1612,\n    "name":"榫欏煄鍖�",\n    "superregion_id":119\n
}
 {
	\n    "id":1613,\n    "name":"鍏村煄甯�",\n    "superregion_id":120\n
}
 {
	\n    "id":1614,\n    "name":"鍗楃エ鍖�",\n    "superregion_id":120\n
}
 {
	\n    "id":1615,\n    "name":"寤烘槍鍘�",\n    "superregion_id":120\n
}
 {
	\n    "id":1616,\n    "name":"缁ヤ腑鍘�",\n    "superregion_id":120\n
}
 {
	\n    "id":1617,\n    "name":"杩炲北鍖�",\n    "superregion_id":120\n
}
 {
	\n    "id":1618,\n    "name":"榫欐腐鍖�",\n    "superregion_id":120\n
}
 {
	\n    "id":1619,\n    "name":"涔濆彴甯�",\n    "superregion_id":121\n
}
 {
	\n    "id":1620,\n    "name":"浜岄亾鍖�",\n    "superregion_id":121\n
}
 {
	\n    "id":1621,\n    "name":"鍐滃畨鍘�",\n    "superregion_id":121\n
}
 {
	\n    "id":1622,\n    "name":"鍗楀叧鍖�",\n    "superregion_id":121\n
}
 {
	\n    "id":1623,\n    "name":"鍙岄槼鍖�",\n    "superregion_id":121\n
}
 {
	\n    "id":1624,\n    "name":"瀹藉煄鍖�",\n    "superregion_id":121\n
}
 {
	\n    "id":1625,\n    "name":"寰锋儬甯�",\n    "superregion_id":121\n
}
 {
	\n    "id":1626,\n    "name":"鏈濋槼鍖�",\n    "superregion_id":121\n
}
 {
	\n    "id":1627,\n    "name":"姒嗘爲甯�",\n    "superregion_id":121\n
}
 {
	\n    "id":1628,\n    "name":"缁垮洯鍖�",\n    "superregion_id":121\n
}
 {
	\n    "id":1629,\n    "name":"涓版弧鍖�",\n    "superregion_id":122\n
}
 {
	\n    "id":1630,\n    "name":"鏄岄倯鍖�",\n    "superregion_id":122\n
}
 {
	\n    "id":1631,\n    "name":"妗︾敻甯�",\n    "superregion_id":122\n
}
 {
	\n    "id":1632,\n    "name":"姘稿悏鍘�",\n    "superregion_id":122\n
}
 {
	\n    "id":1633,\n    "name":"纾愮煶甯�",\n    "superregion_id":122\n
}
 {
	\n    "id":1634,\n    "name":"鑸掑叞甯�",\n    "superregion_id":122\n
}
 {
	\n    "id":1635,\n    "name":"鑸硅惀鍖�",\n    "superregion_id":122\n
}
 {
	\n    "id":1636,\n    "name":"铔熸渤甯�",\n    "superregion_id":122\n
}
 {
	\n    "id":1637,\n    "name":"榫欐江鍖�",\n    "superregion_id":122\n
}
 {
	\n    "id":1638,\n    "name":"浼婇€氭弧鏃忚嚜娌诲幙",\n    "superregion_id":123\n
}
 {
	\n    "id":1639,\n    "name":"鍏富宀競",\n    "superregion_id":123\n
}
 {
	\n    "id":1640,\n    "name":"鍙岃窘甯�",\n    "superregion_id":123\n
}
 {
	\n    "id":1641,\n    "name":"姊ㄦ爲鍘�",\n    "superregion_id":123\n
}
 {
	\n    "id":1642,\n    "name":"閾佷笢鍖�",\n    "superregion_id":123\n
}
 {
	\n    "id":1643,\n    "name":"閾佽タ鍖�",\n    "superregion_id":123\n
}
 {
	\n    "id":1644,\n    "name":"涓滀赴鍘�",\n    "superregion_id":124\n
}
 {
	\n    "id":1645,\n    "name":"涓滆窘鍘�",\n    "superregion_id":124\n
}
 {
	\n    "id":1646,\n    "name":"瑗垮畨鍖�",\n    "superregion_id":124\n
}
 {
	\n    "id":1647,\n    "name":"榫欏北鍖�",\n    "superregion_id":124\n
}
 {
	\n    "id":1648,\n    "name":"涓滄槍鍖�",\n    "superregion_id":125\n
}
 {
	\n    "id":1649,\n    "name":"浜岄亾姹熷尯",\n    "superregion_id":125\n
}
 {
	\n    "id":1650,\n    "name":"鏌虫渤鍘�",\n    "superregion_id":125\n
}
 {
	\n    "id":1651,\n    "name":"姊呮渤鍙ｅ競",\n    "superregion_id":125\n
}
 {
	\n    "id":1652,\n    "name":"杈夊崡鍘�",\n    "superregion_id":125\n
}
 {
	\n    "id":1653,\n    "name":"閫氬寲鍘�",\n    "superregion_id":125\n
}
 {
	\n    "id":1654,\n    "name":"闆嗗畨甯�",\n    "superregion_id":125\n
}
 {
	\n    "id":1655,\n    "name":"涓存睙甯�",\n    "superregion_id":126\n
}
 {
	\n    "id":1656,\n    "name":"鍏亾姹熷尯",\n    "superregion_id":126\n
}
 {
	\n    "id":1657,\n    "name":"鎶氭澗鍘�",\n    "superregion_id":126\n
}
 {
	\n    "id":1658,\n    "name":"姹熸簮鍖�",\n    "superregion_id":126\n
}
 {
	\n    "id":1659,\n    "name":"闀跨櫧鏈濋矞鏃忚嚜娌诲幙",\n    "superregion_id":126\n
}
 {
	\n    "id":1660,\n    "name":"闈栧畤鍘�",\n    "superregion_id":126\n
}
 {
	\n    "id":1661,\n    "name":"涔惧畨鍘�",\n    "superregion_id":127\n
}
 {
	\n    "id":1662,\n    "name":"鍓嶉儹灏旂綏鏂挋鍙ゆ棌鑷不鍘�",\n    "superregion_id":127\n
}
 {
	\n    "id":1663,\n    "name":"瀹佹睙鍖�",\n    "superregion_id":127\n
}
 {
	\n    "id":1664,\n    "name":"鎵朵綑甯�",\n    "superregion_id":127\n
}
 {
	\n    "id":1665,\n    "name":"闀垮箔鍘�",\n    "superregion_id":127\n
}
 {
	\n    "id":1666,\n    "name":"澶у畨甯�",\n    "superregion_id":128\n
}
 {
	\n    "id":1667,\n    "name":"娲寳鍖�",\n    "superregion_id":128\n
}
 {
	\n    "id":1668,\n    "name":"娲崡甯�",\n    "superregion_id":128\n
}
 {
	\n    "id":1669,\n    "name":"閫氭鍘�",\n    "superregion_id":128\n
}
 {
	\n    "id":1670,\n    "name":"闀囪祲鍘�",\n    "superregion_id":128\n
}
 {
	\n    "id":1671,\n    "name":"鍜岄緳甯�",\n    "superregion_id":129\n
}
 {
	\n    "id":1672,\n    "name":"鍥句滑甯�",\n    "superregion_id":129\n
}
 {
	\n    "id":1673,\n    "name":"瀹夊浘鍘�",\n    "superregion_id":129\n
}
 {
	\n    "id":1674,\n    "name":"寤跺悏甯�",\n    "superregion_id":129\n
}
 {
	\n    "id":1675,\n    "name":"鏁﹀寲甯�",\n    "superregion_id":129\n
}
 {
	\n    "id":1676,\n    "name":"姹竻鍘�",\n    "superregion_id":129\n
}
 {
	\n    "id":1677,\n    "name":"鐝叉槬甯�",\n    "superregion_id":129\n
}
 {
	\n    "id":1678,\n    "name":"榫欎簳甯�",\n    "superregion_id":129\n
}
 {
	\n    "id":1679,\n    "name":"浜斿父甯�",\n    "superregion_id":130\n
}
 {
	\n    "id":1680,\n    "name":"渚濆叞鍘�",\n    "superregion_id":130\n
}
 {
	\n    "id":1681,\n    "name":"鍗楀矖鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1682,\n    "name":"鍙屽煄甯�",\n    "superregion_id":130\n
}
 {
	\n    "id":1683,\n    "name":"鍛煎叞鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1684,\n    "name":"閬撻噷鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1685,\n    "name":"瀹惧幙",\n    "superregion_id":130\n
}
 {
	\n    "id":1686,\n    "name":"灏氬織甯�",\n    "superregion_id":130\n
}
 {
	\n    "id":1687,\n    "name":"宸村溅鍘�",\n    "superregion_id":130\n
}
 {
	\n    "id":1688,\n    "name":"骞虫埧鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1689,\n    "name":"寤跺鍘�",\n    "superregion_id":130\n
}
 {
	\n    "id":1690,\n    "name":"鏂规鍘�",\n    "superregion_id":130\n
}
 {
	\n    "id":1691,\n    "name":"鏈ㄥ叞鍘�",\n    "superregion_id":130\n
}
 {
	\n    "id":1692,\n    "name":"鏉惧寳鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1693,\n    "name":"閫氭渤鍘�",\n    "superregion_id":130\n
}
 {
	\n    "id":1694,\n    "name":"閬撳鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1695,\n    "name":"闃垮煄鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1696,\n    "name":"棣欏潑鍖�",\n    "superregion_id":130\n
}
 {
	\n    "id":1697,\n    "name":"渚濆畨鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1698,\n    "name":"鍏嬩笢鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1699,\n    "name":"鍏嬪北鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1700,\n    "name":"瀵屾媺灏斿熀鍖�",\n    "superregion_id":131\n
}
 {
	\n    "id":1701,\n    "name":"瀵岃鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1702,\n    "name":"寤哄崕鍖�",\n    "superregion_id":131\n
}
 {
	\n    "id":1703,\n    "name":"鎷滄硥鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1704,\n    "name":"鏄傛槀婧尯",\n    "superregion_id":131\n
}
 {
	\n    "id":1705,\n    "name":"姊呴噷鏂揪鏂″皵鏃忓尯",\n    "superregion_id":131\n
}
 {
	\n    "id":1706,\n    "name":"娉版潵鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1707,\n    "name":"鐢樺崡鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1708,\n    "name":"纰惧瓙灞卞尯",\n    "superregion_id":131\n
}
 {
	\n    "id":1709,\n    "name":"璁锋渤甯�",\n    "superregion_id":131\n
}
 {
	\n    "id":1710,\n    "name":"閾侀攱鍖�",\n    "superregion_id":131\n
}
 {
	\n    "id":1711,\n    "name":"榫欐睙鍘�",\n    "superregion_id":131\n
}
 {
	\n    "id":1712,\n    "name":"榫欐矙鍖�",\n    "superregion_id":131\n
}
 {
	\n    "id":1713,\n    "name":"鍩庡瓙娌冲尯",\n    "superregion_id":132\n
}
 {
	\n    "id":1714,\n    "name":"瀵嗗北甯�",\n    "superregion_id":132\n
}
 {
	\n    "id":1715,\n    "name":"鎭掑北鍖�",\n    "superregion_id":132\n
}
 {
	\n    "id":1716,\n    "name":"姊ㄦ爲鍖�",\n    "superregion_id":132\n
}
 {
	\n    "id":1717,\n    "name":"婊撮亾鍖�",\n    "superregion_id":132\n
}
 {
	\n    "id":1718,\n    "name":"铏庢灄甯�",\n    "superregion_id":132\n
}
 {
	\n    "id":1719,\n    "name":"楦′笢鍘�",\n    "superregion_id":132\n
}
 {
	\n    "id":1720,\n    "name":"楦″啝鍖�",\n    "superregion_id":132\n
}
 {
	\n    "id":1721,\n    "name":"楹诲北鍖�",\n    "superregion_id":132\n
}
 {
	\n    "id":1722,\n    "name":"涓滃北鍖�",\n    "superregion_id":133\n
}
 {
	\n    "id":1723,\n    "name":"鍏村畨鍖�",\n    "superregion_id":133\n
}
 {
	\n    "id":1724,\n    "name":"鍏村北鍖�",\n    "superregion_id":133\n
}
 {
	\n    "id":1725,\n    "name":"鍗楀北鍖�",\n    "superregion_id":133\n
}
 {
	\n    "id":1726,\n    "name":"鍚戦槼鍖�",\n    "superregion_id":133\n
}
 {
	\n    "id":1727,\n    "name":"宸ュ啘鍖�",\n    "superregion_id":133\n
}
 {
	\n    "id":1728,\n    "name":"缁ユ花鍘�",\n    "superregion_id":133\n
}
 {
	\n    "id":1729,\n    "name":"钀濆寳鍘�",\n    "superregion_id":133\n
}
 {
	\n    "id":1730,\n    "name":"鍙嬭皧鍘�",\n    "superregion_id":134\n
}
 {
	\n    "id":1731,\n    "name":"鍥涙柟鍙板尯",\n    "superregion_id":134\n
}
 {
	\n    "id":1732,\n    "name":"瀹濆北鍖�",\n    "superregion_id":134\n
}
 {
	\n    "id":1733,\n    "name":"瀹濇竻鍘�",\n    "superregion_id":134\n
}
 {
	\n    "id":1734,\n    "name":"灏栧北鍖�",\n    "superregion_id":134\n
}
 {
	\n    "id":1735,\n    "name":"宀笢鍖�",\n    "superregion_id":134\n
}
 {
	\n    "id":1736,\n    "name":"闆嗚搐鍘�",\n    "superregion_id":134\n
}
 {
	\n    "id":1737,\n    "name":"楗舵渤鍘�",\n    "superregion_id":134\n
}
 {
	\n    "id":1738,\n    "name":"澶у悓鍖�",\n    "superregion_id":135\n
}
 {
	\n    "id":1739,\n    "name":"鏉滃皵浼壒钂欏彜鏃忚嚜娌诲幙",\n    "superregion_id":135\n
}
 {
	\n    "id":1740,\n    "name":"鏋楃敻鍘�",\n    "superregion_id":135\n
}
 {
	\n    "id":1741,\n    "name":"绾㈠矖鍖�",\n    "superregion_id":135\n
}
 {
	\n    "id":1742,\n    "name":"鑲囧窞鍘�",\n    "superregion_id":135\n
}
 {
	\n    "id":1743,\n    "name":"鑲囨簮鍘�",\n    "superregion_id":135\n
}
 {
	\n    "id":1744,\n    "name":"璁╄儭璺尯",\n    "superregion_id":135\n
}
 {
	\n    "id":1745,\n    "name":"钀ㄥ皵鍥惧尯",\n    "superregion_id":135\n
}
 {
	\n    "id":1746,\n    "name":"榫欏嚖鍖�",\n    "superregion_id":135\n
}
 {
	\n    "id":1747,\n    "name":"涓婄敇宀尯",\n    "superregion_id":136\n
}
 {
	\n    "id":1748,\n    "name":"涔屼紛宀尯",\n    "superregion_id":136\n
}
 {
	\n    "id":1749,\n    "name":"涔岄┈娌冲尯",\n    "superregion_id":136\n
}
 {
	\n    "id":1750,\n    "name":"浜旇惀鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1751,\n    "name":"浼婃槬鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1752,\n    "name":"鍗楀矓鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1753,\n    "name":"鍙嬪ソ鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1754,\n    "name":"鍢夎崼鍘�",\n    "superregion_id":136\n
}
 {
	\n    "id":1755,\n    "name":"甯﹀箔鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1756,\n    "name":"鏂伴潚鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1757,\n    "name":"姹ゆ椇娌冲尯",\n    "superregion_id":136\n
}
 {
	\n    "id":1758,\n    "name":"绾㈡槦鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1759,\n    "name":"缇庢邯鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1760,\n    "name":"缈犲肠鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1761,\n    "name":"瑗挎灄鍖�",\n    "superregion_id":136\n
}
 {
	\n    "id":1762,\n    "name":"閲戝北灞尯",\n    "superregion_id":136\n
}
 {
	\n    "id":1763,\n    "name":"閾佸姏甯�",\n    "superregion_id":136\n
}
 {
	\n    "id":1764,\n    "name":"涓滈鍖�",\n    "superregion_id":137\n
}
 {
	\n    "id":1765,\n    "name":"鍓嶈繘鍖�",\n    "superregion_id":137\n
}
 {
	\n    "id":1766,\n    "name":"鍚屾睙甯�",\n    "superregion_id":137\n
}
 {
	\n    "id":1767,\n    "name":"鍚戦槼鍖�",\n    "superregion_id":137\n
}
 {
	\n    "id":1768,\n    "name":"瀵岄敠甯�",\n    "superregion_id":137\n
}
 {
	\n    "id":1769,\n    "name":"鎶氳繙鍘�",\n    "superregion_id":137\n
}
 {
	\n    "id":1770,\n    "name":"妗﹀崡鍘�",\n    "superregion_id":137\n
}
 {
	\n    "id":1771,\n    "name":"妗﹀窛鍘�",\n    "superregion_id":137\n
}
 {
	\n    "id":1772,\n    "name":"姹ゅ師鍘�",\n    "superregion_id":137\n
}
 {
	\n    "id":1773,\n    "name":"閮婂尯",\n    "superregion_id":137\n
}
 {
	\n    "id":1774,\n    "name":"鍕冨埄鍘�",\n    "superregion_id":138\n
}
 {
	\n    "id":1775,\n    "name":"鏂板叴鍖�",\n    "superregion_id":138\n
}
 {
	\n    "id":1776,\n    "name":"妗冨北鍖�",\n    "superregion_id":138\n
}
 {
	\n    "id":1777,\n    "name":"鑼勫瓙娌冲尯",\n    "superregion_id":138\n
}
 {
	\n    "id":1778,\n    "name":"涓滃畞鍘�",\n    "superregion_id":139\n
}
 {
	\n    "id":1779,\n    "name":"涓滃畨鍖�",\n    "superregion_id":139\n
}
 {
	\n    "id":1780,\n    "name":"瀹佸畨甯�",\n    "superregion_id":139\n
}
 {
	\n    "id":1781,\n    "name":"鏋楀彛鍘�",\n    "superregion_id":139\n
}
 {
	\n    "id":1782,\n    "name":"娴锋灄甯�",\n    "superregion_id":139\n
}
 {
	\n    "id":1783,\n    "name":"鐖辨皯鍖�",\n    "superregion_id":139\n
}
 {
	\n    "id":1784,\n    "name":"绌嗘１甯�",\n    "superregion_id":139\n
}
 {
	\n    "id":1785,\n    "name":"缁ヨ姮娌冲競",\n    "superregion_id":139\n
}
 {
	\n    "id":1786,\n    "name":"瑗垮畨鍖�",\n    "superregion_id":139\n
}
 {
	\n    "id":1787,\n    "name":"闃虫槑鍖�",\n    "superregion_id":139\n
}
 {
	\n    "id":1788,\n    "name":"浜斿ぇ杩炴睜甯�",\n    "superregion_id":140\n
}
 {
	\n    "id":1789,\n    "name":"鍖楀畨甯�",\n    "superregion_id":140\n
}
 {
	\n    "id":1790,\n    "name":"瀚╂睙鍘�",\n    "superregion_id":140\n
}
 {
	\n    "id":1791,\n    "name":"瀛欏惔鍘�",\n    "superregion_id":140\n
}
 {
	\n    "id":1792,\n    "name":"鐖辫緣鍖�",\n    "superregion_id":140\n
}
 {
	\n    "id":1794,\n    "name":"閫婂厠鍘�",\n    "superregion_id":140\n
}
 {
	\n    "id":1795,\n    "name":"鍏拌タ鍘�",\n    "superregion_id":141\n
}
 {
	\n    "id":1796,\n    "name":"瀹夎揪甯�",\n    "superregion_id":141\n
}
 {
	\n    "id":1797,\n    "name":"搴嗗畨鍘�",\n    "superregion_id":141\n
}
 {
	\n    "id":1798,\n    "name":"鏄庢按鍘�",\n    "superregion_id":141\n
}
 {
	\n    "id":1799,\n    "name":"鏈涘鍘�",\n    "superregion_id":141\n
}
 {
	\n    "id":1800,\n    "name":"娴蜂鸡甯�",\n    "superregion_id":141\n
}
 {
	\n    "id":1801,\n    "name":"鍖楁灄鍖�",\n    "superregion_id":141\n
}
 {
	\n    "id":1802,\n    "name":"缁ユ１鍘�",\n    "superregion_id":141\n
}
 {
	\n    "id":1803,\n    "name":"鑲囦笢甯�",\n    "superregion_id":141\n
}
 {
	\n    "id":1804,\n    "name":"闈掑唸鍘�",\n    "superregion_id":141\n
}
 {
	\n    "id":1805,\n    "name":"鍛肩帥鍘�",\n    "superregion_id":142\n
}
 {
	\n    "id":1806,\n    "name":"濉旀渤鍘�",\n    "superregion_id":142\n
}
 {
	\n    "id":1807,\n    "name":"鍔犳牸杈惧鍖�",\n    "superregion_id":142\n
}
 {
	\n    "id":1808,\n    "name":"鍛间腑鍖�",\n    "superregion_id":142\n
}
 {
	\n    "id":1809,\n    "name":"鏂版灄鍖�",\n    "superregion_id":142\n
}
 {
	\n    "id":1810,\n    "name":"鏉惧箔鍖�",\n    "superregion_id":142\n
}
 {
	\n    "id":1811,\n    "name":"婕犳渤鍘�",\n    "superregion_id":142\n
}
 {
	\n    "id":2027,\n    "name":"涓嬪叧鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2028,\n    "name":"鍏悎鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2029,\n    "name":"寤洪偤鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2030,\n    "name":"鏍栭湠鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2031,\n    "name":"姹熷畞鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2032,\n    "name":"娴﹀彛鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2033,\n    "name":"婧ф按鍘�",\n    "superregion_id":162\n
}
 {
	\n    "id":2034,\n    "name":"鐜勬鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2035,\n    "name":"鐧戒笅鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2036,\n    "name":"绉︽樊鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2037,\n    "name":"闆ㄨ姳鍙板尯",\n    "superregion_id":162\n
}
 {
	\n    "id":2038,\n    "name":"楂樻烦鍘�",\n    "superregion_id":162\n
}
 {
	\n    "id":2039,\n    "name":"榧撴ゼ鍖�",\n    "superregion_id":162\n
}
 {
	\n    "id":2040,\n    "name":"鍖楀鍖�",\n    "superregion_id":163\n
}
 {
	\n    "id":2041,\n    "name":"鍗楅暱鍖�",\n    "superregion_id":163\n
}
 {
	\n    "id":2042,\n    "name":"瀹滃叴甯�",\n    "superregion_id":163\n
}
 {
	\n    "id":2043,\n    "name":"宕囧畨鍖�",\n    "superregion_id":163\n
}
 {
	\n    "id":2044,\n    "name":"鎯犲北鍖�",\n    "superregion_id":163\n
}
 {
	\n    "id":2045,\n    "name":"姹熼槾甯�",\n    "superregion_id":163\n
}
 {
	\n    "id":2046,\n    "name":"婊ㄦ箹鍖�",\n    "superregion_id":163\n
}
 {
	\n    "id":2047,\n    "name":"閿″北鍖�",\n    "superregion_id":163\n
}
 {
	\n    "id":2048,\n    "name":"涓板幙",\n    "superregion_id":164\n
}
 {
	\n    "id":2049,\n    "name":"涔濋噷鍖�",\n    "superregion_id":164\n
}
 {
	\n    "id":2050,\n    "name":"浜戦緳鍖�",\n    "superregion_id":164\n
}
 {
	\n    "id":2051,\n    "name":"鏂版矀甯�",\n    "superregion_id":164\n
}
 {
	\n    "id":2052,\n    "name":"娌涘幙",\n    "superregion_id":164\n
}
 {
	\n    "id":2053,\n    "name":"娉夊北鍖�",\n    "superregion_id":164\n
}
 {
	\n    "id":2054,\n    "name":"鐫㈠畞鍘�",\n    "superregion_id":164\n
}
 {
	\n    "id":2055,\n    "name":"璐炬豹鍖�",\n    "superregion_id":164\n
}
 {
	\n    "id":2056,\n    "name":"閭冲窞甯�",\n    "superregion_id":164\n
}
 {
	\n    "id":2057,\n    "name":"閾滃北鍖�",\n    "superregion_id":164\n
}
 {
	\n    "id":2058,\n    "name":"榧撴ゼ鍖�",\n    "superregion_id":164\n
}
 {
	\n    "id":2059,\n    "name":"澶╁畞鍖�",\n    "superregion_id":165\n
}
 {
	\n    "id":2060,\n    "name":"鎴氬鍫板尯",\n    "superregion_id":165\n
}
 {
	\n    "id":2061,\n    "name":"鏂板寳鍖�",\n    "superregion_id":165\n
}
 {
	\n    "id":2062,\n    "name":"姝﹁繘鍖�",\n    "superregion_id":165\n
}
 {
	\n    "id":2063,\n    "name":"婧ч槼甯�",\n    "superregion_id":165\n
}
 {
	\n    "id":2064,\n    "name":"閲戝潧甯�",\n    "superregion_id":165\n
}
 {
	\n    "id":2065,\n    "name":"閽熸ゼ鍖�",\n    "superregion_id":165\n
}
 {
	\n    "id":2066,\n    "name":"鍚翠腑鍖�",\n    "superregion_id":166\n
}
 {
	\n    "id":2067,\n    "name":"鍚存睙甯�",\n    "superregion_id":166\n
}
 {
	\n    "id":2068,\n    "name":"澶粨甯�",\n    "superregion_id":166\n
}
 {
	\n    "id":2069,\n    "name":"甯哥啛甯�",\n    "superregion_id":166\n
}
 {
	\n    "id":2070,\n    "name":"骞虫睙鍖�",\n    "superregion_id":166\n
}
 {
	\n    "id":2071,\n    "name":"寮犲娓競",\n    "superregion_id":166\n
}
 {
	\n    "id":2072,\n    "name":"鏄嗗北甯�",\n    "superregion_id":166\n
}
 {
	\n    "id":2073,\n    "name":"娌ф氮鍖�",\n    "superregion_id":166\n
}
 {
	\n    "id":2074,\n    "name":"鐩稿煄鍖�",\n    "superregion_id":166\n
}
 {
	\n    "id":2076,\n    "name":"铏庝笜鍖�",\n    "superregion_id":166\n
}
 {
	\n    "id":2077,\n    "name":"閲戦槉鍖�",\n    "superregion_id":166\n
}
 {
	\n    "id":2078,\n    "name":"鍚笢甯�",\n    "superregion_id":167\n
}
 {
	\n    "id":2079,\n    "name":"濡備笢鍘�",\n    "superregion_id":167\n
}
 {
	\n    "id":2080,\n    "name":"濡傜殝甯�",\n    "superregion_id":167\n
}
 {
	\n    "id":2081,\n    "name":"宕囧窛鍖�",\n    "superregion_id":167\n
}
 {
	\n    "id":2082,\n    "name":"娴峰畨鍘�",\n    "superregion_id":167\n
}
 {
	\n    "id":2083,\n    "name":"娴烽棬甯�",\n    "superregion_id":167\n
}
 {
	\n    "id":2084,\n    "name":"娓椄鍖�",\n    "superregion_id":167\n
}
 {
	\n    "id":2085,\n    "name":"閫氬窞鍖�",\n    "superregion_id":167\n
}
 {
	\n    "id":2086,\n    "name":"涓滄捣鍘�",\n    "superregion_id":168\n
}
 {
	\n    "id":2087,\n    "name":"鏂版郸鍖�",\n    "superregion_id":168\n
}
 {
	\n    "id":2088,\n    "name":"娴峰窞鍖�",\n    "superregion_id":168\n
}
 {
	\n    "id":2089,\n    "name":"鐏屼簯鍘�",\n    "superregion_id":168\n
}
 {
	\n    "id":2090,\n    "name":"鐏屽崡鍘�",\n    "superregion_id":168\n
}
 {
	\n    "id":2091,\n    "name":"璧ｆ鍘�",\n    "superregion_id":168\n
}
 {
	\n    "id":2092,\n    "name":"杩炰簯鍖�",\n    "superregion_id":168\n
}
 {
	\n    "id":2093,\n    "name":"妤氬窞鍖�",\n    "superregion_id":169\n
}
 {
	\n    "id":2094,\n    "name":"娲辰鍘�",\n    "superregion_id":169\n
}
 {
	\n    "id":2095,\n    "name":"娑熸按鍘�",\n    "superregion_id":169\n
}
 {
	\n    "id":2096,\n    "name":"娣槾鍖�",\n    "superregion_id":169\n
}
 {
	\n    "id":2097,\n    "name":"娓呮渤鍖�",\n    "superregion_id":169\n
}
 {
	\n    "id":2098,\n    "name":"娓呮郸鍖�",\n    "superregion_id":169\n
}
 {
	\n    "id":2099,\n    "name":"鐩辩湙鍘�",\n    "superregion_id":169\n
}
 {
	\n    "id":2100,\n    "name":"閲戞箹鍘�",\n    "superregion_id":169\n
}
 {
	\n    "id":2101,\n    "name":"涓滃彴甯�",\n    "superregion_id":170\n
}
 {
	\n    "id":2102,\n    "name":"浜箹鍖�",\n    "superregion_id":170\n
}
 {
	\n    "id":2103,\n    "name":"鍝嶆按鍘�",\n    "superregion_id":170\n
}
 {
	\n    "id":2104,\n    "name":"澶т赴甯�",\n    "superregion_id":170\n
}
 {
	\n    "id":2105,\n    "name":"灏勯槼鍘�",\n    "superregion_id":170\n
}
 {
	\n    "id":2106,\n    "name":"寤烘箹鍘�",\n    "superregion_id":170\n
}
 {
	\n    "id":2107,\n    "name":"婊ㄦ捣鍘�",\n    "superregion_id":170\n
}
 {
	\n    "id":2108,\n    "name":"鐩愰兘鍖�",\n    "superregion_id":170\n
}
 {
	\n    "id":2109,\n    "name":"闃滃畞鍘�",\n    "superregion_id":170\n
}
 {
	\n    "id":2110,\n    "name":"浠緛甯�",\n    "superregion_id":171\n
}
 {
	\n    "id":2111,\n    "name":"瀹濆簲鍘�",\n    "superregion_id":171\n
}
 {
	\n    "id":2112,\n    "name":"骞块櫟鍖�",\n    "superregion_id":171\n
}
 {
	\n    "id":2113,\n    "name":"姹熼兘鍖�",\n    "superregion_id":171\n
}
 {
	\n    "id":2114,\n    "name":"缁存壃鍖�",\n    "superregion_id":171\n
}
 {
	\n    "id":2115,\n    "name":"閭楁睙鍖�",\n    "superregion_id":171\n
}
 {
	\n    "id":2116,\n    "name":"楂橀偖甯�",\n    "superregion_id":171\n
}
 {
	\n    "id":2117,\n    "name":"涓瑰緬鍖�",\n    "superregion_id":172\n
}
 {
	\n    "id":2118,\n    "name":"涓归槼甯�",\n    "superregion_id":172\n
}
 {
	\n    "id":2119,\n    "name":"浜彛鍖�",\n    "superregion_id":172\n
}
 {
	\n    "id":2120,\n    "name":"鍙ュ甯�",\n    "superregion_id":172\n
}
 {
	\n    "id":2121,\n    "name":"鎵腑甯�",\n    "superregion_id":172\n
}
 {
	\n    "id":2122,\n    "name":"娑﹀窞鍖�",\n    "superregion_id":172\n
}
 {
	\n    "id":2123,\n    "name":"鍏村寲甯�",\n    "superregion_id":173\n
}
 {
	\n    "id":2124,\n    "name":"濮滃牥甯�",\n    "superregion_id":173\n
}
 {
	\n    "id":2125,\n    "name":"娉板叴甯�",\n    "superregion_id":173\n
}
 {
	\n    "id":2126,\n    "name":"娴烽櫟鍖�",\n    "superregion_id":173\n
}
 {
	\n    "id":2127,\n    "name":"闈栨睙甯�",\n    "superregion_id":173\n
}
 {
	\n    "id":2128,\n    "name":"楂樻腐鍖�",\n    "superregion_id":173\n
}
 {
	\n    "id":2129,\n    "name":"瀹垮煄鍖�",\n    "superregion_id":174\n
}
 {
	\n    "id":2130,\n    "name":"瀹胯鲍鍖�",\n    "superregion_id":174\n
}
 {
	\n    "id":2131,\n    "name":"娌槼鍘�",\n    "superregion_id":174\n
}
 {
	\n    "id":2132,\n    "name":"娉楁椽鍘�",\n    "superregion_id":174\n
}
 {
	\n    "id":2133,\n    "name":"娉楅槼鍘�",\n    "superregion_id":174\n
}
 {
	\n    "id":2134,\n    "name":"涓婂煄鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2135,\n    "name":"涓嬪煄鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2136,\n    "name":"涓村畨甯�",\n    "superregion_id":175\n
}
 {
	\n    "id":2137,\n    "name":"浣欐澀鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2138,\n    "name":"瀵岄槼甯�",\n    "superregion_id":175\n
}
 {
	\n    "id":2139,\n    "name":"寤哄痉甯�",\n    "superregion_id":175\n
}
 {
	\n    "id":2140,\n    "name":"鎷卞鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2141,\n    "name":"妗愬簮鍘�",\n    "superregion_id":175\n
}
 {
	\n    "id":2142,\n    "name":"姹熷共鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2143,\n    "name":"娣冲畨鍘�",\n    "superregion_id":175\n
}
 {
	\n    "id":2144,\n    "name":"婊ㄦ睙鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2145,\n    "name":"钀у北鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2146,\n    "name":"瑗挎箹鍖�",\n    "superregion_id":175\n
}
 {
	\n    "id":2147,\n    "name":"浣欏甯�",\n    "superregion_id":176\n
}
 {
	\n    "id":2148,\n    "name":"鍖椾粦鍖�",\n    "superregion_id":176\n
}
 {
	\n    "id":2149,\n    "name":"濂夊寲甯�",\n    "superregion_id":176\n
}
 {
	\n    "id":2150,\n    "name":"瀹佹捣鍘�",\n    "superregion_id":176\n
}
 {
	\n    "id":2151,\n    "name":"鎱堟邯甯�",\n    "superregion_id":176\n
}
 {
	\n    "id":2152,\n    "name":"姹熶笢鍖�",\n    "superregion_id":176\n
}
 {
	\n    "id":2153,\n    "name":"姹熷寳鍖�",\n    "superregion_id":176\n
}
 {
	\n    "id":2154,\n    "name":"娴锋洐鍖�",\n    "superregion_id":176\n
}
 {
	\n    "id":2155,\n    "name":"璞″北鍘�",\n    "superregion_id":176\n
}
 {
	\n    "id":2156,\n    "name":"閯炲窞鍖�",\n    "superregion_id":176\n
}
 {
	\n    "id":2157,\n    "name":"闀囨捣鍖�",\n    "superregion_id":176\n
}
 {
	\n    "id":2158,\n    "name":"涔愭竻甯�",\n    "superregion_id":177\n
}
 {
	\n    "id":2159,\n    "name":"骞抽槼鍘�",\n    "superregion_id":177\n
}
 {
	\n    "id":2160,\n    "name":"鏂囨垚鍘�",\n    "superregion_id":177\n
}
 {
	\n    "id":2161,\n    "name":"姘稿槈鍘�",\n    "superregion_id":177\n
}
 {
	\n    "id":2162,\n    "name":"娉伴『鍘�",\n    "superregion_id":177\n
}
 {
	\n    "id":2163,\n    "name":"娲炲ご鍘�",\n    "superregion_id":177\n
}
 {
	\n    "id":2164,\n    "name":"鐟炲畨甯�",\n    "superregion_id":177\n
}
 {
	\n    "id":2165,\n    "name":"鐡捣鍖�",\n    "superregion_id":177\n
}
 {
	\n    "id":2166,\n    "name":"鑻嶅崡鍘�",\n    "superregion_id":177\n
}
 {
	\n    "id":2167,\n    "name":"楣垮煄鍖�",\n    "superregion_id":177\n
}
 {
	\n    "id":2168,\n    "name":"榫欐咕鍖�",\n    "superregion_id":177\n
}
 {
	\n    "id":2169,\n    "name":"鍗楁箹鍖�",\n    "superregion_id":178\n
}
 {
	\n    "id":2170,\n    "name":"鍢夊杽鍘�",\n    "superregion_id":178\n
}
 {
	\n    "id":2171,\n    "name":"骞虫箹甯�",\n    "superregion_id":178\n
}
 {
	\n    "id":2172,\n    "name":"妗愪埂甯�",\n    "superregion_id":178\n
}
 {
	\n    "id":2173,\n    "name":"娴峰畞甯�",\n    "superregion_id":178\n
}
 {
	\n    "id":2174,\n    "name":"娴风洂鍘�",\n    "superregion_id":178\n
}
 {
	\n    "id":2175,\n    "name":"绉€娲插尯",\n    "superregion_id":178\n
}
 {
	\n    "id":2176,\n    "name":"鍗楁禂鍖�",\n    "superregion_id":179\n
}
 {
	\n    "id":2177,\n    "name":"鍚村叴鍖�",\n    "superregion_id":179\n
}
 {
	\n    "id":2178,\n    "name":"瀹夊悏鍘�",\n    "superregion_id":179\n
}
 {
	\n    "id":2179,\n    "name":"寰锋竻鍘�",\n    "superregion_id":179\n
}
 {
	\n    "id":2180,\n    "name":"闀垮叴鍘�",\n    "superregion_id":179\n
}
 {
	\n    "id":2181,\n    "name":"涓婅櫈甯�",\n    "superregion_id":180\n
}
 {
	\n    "id":2182,\n    "name":"宓婂窞甯�",\n    "superregion_id":180\n
}
 {
	\n    "id":2183,\n    "name":"鏂版槍鍘�",\n    "superregion_id":180\n
}
 {
	\n    "id":2184,\n    "name":"缁嶅叴鍘�",\n    "superregion_id":180\n
}
 {
	\n    "id":2185,\n    "name":"璇告毃甯�",\n    "superregion_id":180\n
}
 {
	\n    "id":2186,\n    "name":"瓒婂煄鍖�",\n    "superregion_id":180\n
}
 {
	\n    "id":2187,\n    "name":"瀹氭捣鍖�",\n    "superregion_id":181\n
}
 {
	\n    "id":2188,\n    "name":"宀卞北鍘�",\n    "superregion_id":181\n
}
 {
	\n    "id":2189,\n    "name":"宓婃硹鍘�",\n    "superregion_id":181\n
}
 {
	\n    "id":2190,\n    "name":"鏅檧鍖�",\n    "superregion_id":181\n
}
 {
	\n    "id":2191,\n    "name":"甯稿北鍘�",\n    "superregion_id":182\n
}
 {
	\n    "id":2192,\n    "name":"寮€鍖栧幙",\n    "superregion_id":182\n
}
 {
	\n    "id":2193,\n    "name":"鏌煄鍖�",\n    "superregion_id":182\n
}
 {
	\n    "id":2194,\n    "name":"姹熷北甯�",\n    "superregion_id":182\n
}
 {
	\n    "id":2195,\n    "name":"琛㈡睙鍖�",\n    "superregion_id":182\n
}
 {
	\n    "id":2196,\n    "name":"榫欐父鍘�",\n    "superregion_id":182\n
}
 {
	\n    "id":2197,\n    "name":"涓滈槼甯�",\n    "superregion_id":183\n
}
 {
	\n    "id":2198,\n    "name":"涔変箤甯�",\n    "superregion_id":183\n
}
 {
	\n    "id":2199,\n    "name":"鍏版邯甯�",\n    "superregion_id":183\n
}
 {
	\n    "id":2200,\n    "name":"濠哄煄鍖�",\n    "superregion_id":183\n
}
 {
	\n    "id":2201,\n    "name":"姝︿箟鍘�",\n    "superregion_id":183\n
}
 {
	\n    "id":2202,\n    "name":"姘稿悍甯�",\n    "superregion_id":183\n
}
 {
	\n    "id":2203,\n    "name":"娴︽睙鍘�",\n    "superregion_id":183\n
}
 {
	\n    "id":2204,\n    "name":"纾愬畨鍘�",\n    "superregion_id":183\n
}
 {
	\n    "id":2205,\n    "name":"閲戜笢鍖�",\n    "superregion_id":183\n
}
 {
	\n    "id":2206,\n    "name":"涓夐棬鍘�",\n    "superregion_id":184\n
}
 {
	\n    "id":2207,\n    "name":"涓存捣甯�",\n    "superregion_id":184\n
}
 {
	\n    "id":2208,\n    "name":"浠欏眳鍘�",\n    "superregion_id":184\n
}
 {
	\n    "id":2209,\n    "name":"澶╁彴鍘�",\n    "superregion_id":184\n
}
 {
	\n    "id":2210,\n    "name":"妞掓睙鍖�",\n    "superregion_id":184\n
}
 {
	\n    "id":2211,\n    "name":"娓╁箔甯�",\n    "superregion_id":184\n
}
 {
	\n    "id":2212,\n    "name":"鐜夌幆鍘�",\n    "superregion_id":184\n
}
 {
	\n    "id":2213,\n    "name":"璺ˉ鍖�",\n    "superregion_id":184\n
}
 {
	\n    "id":2214,\n    "name":"榛勫博鍖�",\n    "superregion_id":184\n
}
 {
	\n    "id":2215,\n    "name":"浜戝拰鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2216,\n    "name":"搴嗗厓鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2217,\n    "name":"鏅畞鐣叉棌鑷不鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2218,\n    "name":"鏉鹃槼鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2219,\n    "name":"缂欎簯鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2220,\n    "name":"鑾查兘鍖�",\n    "superregion_id":185\n
}
 {
	\n    "id":2221,\n    "name":"閬傛槍鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2222,\n    "name":"闈掔敯鍘�",\n    "superregion_id":185\n
}
 {
	\n    "id":2223,\n    "name":"榫欐硥甯�",\n    "superregion_id":185\n
}
 {
	\n    "id":2224,\n    "name":"鍖呮渤鍖�",\n    "superregion_id":186\n
}
 {
	\n    "id":2225,\n    "name":"搴愰槼鍖�",\n    "superregion_id":186\n
}
 {
	\n    "id":2226,\n    "name":"鐟舵捣鍖�",\n    "superregion_id":186\n
}
 {
	\n    "id":2227,\n    "name":"鑲ヤ笢鍘�",\n    "superregion_id":186\n
}
 {
	\n    "id":2228,\n    "name":"鑲ヨタ鍘�",\n    "superregion_id":186\n
}
 {
	\n    "id":2229,\n    "name":"铚€灞卞尯",\n    "superregion_id":186\n
}
 {
	\n    "id":2230,\n    "name":"闀夸赴鍘�",\n    "superregion_id":186\n
}
 {
	\n    "id":2231,\n    "name":"涓夊北鍖�",\n    "superregion_id":187\n
}
 {
	\n    "id":2232,\n    "name":"鍗楅櫟鍘�",\n    "superregion_id":187\n
}
 {
	\n    "id":2233,\n    "name":"寮嬫睙鍖�",\n    "superregion_id":187\n
}
 {
	\n    "id":2234,\n    "name":"绻佹槍鍘�",\n    "superregion_id":187\n
}
 {
	\n    "id":2235,\n    "name":"鑺滄箹鍘�",\n    "superregion_id":187\n
}
 {
	\n    "id":2236,\n    "name":"闀滄箹鍖�",\n    "superregion_id":187\n
}
 {
	\n    "id":2237,\n    "name":"楦犳睙鍖�",\n    "superregion_id":187\n
}
 {
	\n    "id":2238,\n    "name":"浜旀渤鍘�",\n    "superregion_id":188\n
}
 {
	\n    "id":2239,\n    "name":"鍥洪晣鍘�",\n    "superregion_id":188\n
}
 {
	\n    "id":2240,\n    "name":"鎬€杩滃幙",\n    "superregion_id":188\n
}
 {
	\n    "id":2241,\n    "name":"娣笂鍖�",\n    "superregion_id":188\n
}
 {
	\n    "id":2242,\n    "name":"绂逛細鍖�",\n    "superregion_id":188\n
}
 {
	\n    "id":2243,\n    "name":"铓屽北鍖�",\n    "superregion_id":188\n
}
 {
	\n    "id":2244,\n    "name":"榫欏瓙婀栧尯",\n    "superregion_id":188\n
}
 {
	\n    "id":2245,\n    "name":"鍏叕灞卞尯",\n    "superregion_id":189\n
}
 {
	\n    "id":2246,\n    "name":"鍑ゅ彴鍘�",\n    "superregion_id":189\n
}
 {
	\n    "id":2247,\n    "name":"澶ч€氬尯",\n    "superregion_id":189\n
}
 {
	\n    "id":2248,\n    "name":"娼橀泦鍖�",\n    "superregion_id":189\n
}
 {
	\n    "id":2249,\n    "name":"鐢板搴靛尯",\n    "superregion_id":189\n
}
 {
	\n    "id":2250,\n    "name":"璋㈠闆嗗尯",\n    "superregion_id":189\n
}
 {
	\n    "id":2251,\n    "name":"褰撴秱鍘�",\n    "superregion_id":190\n
}
 {
	\n    "id":2252,\n    "name":"鑺卞北鍖�",\n    "superregion_id":190\n
}
 {
	\n    "id":2253,\n    "name":"閲戝搴勫尯",\n    "superregion_id":190\n
}
 {
	\n    "id":2254,\n    "name":"闆ㄥ北鍖�",\n    "superregion_id":190\n
}
 {
	\n    "id":2255,\n    "name":"鏉滈泦鍖�",\n    "superregion_id":191\n
}
 {
	\n    "id":2256,\n    "name":"婵夋邯鍘�",\n    "superregion_id":191\n
}
 {
	\n    "id":2257,\n    "name":"鐑堝北鍖�",\n    "superregion_id":191\n
}
 {
	\n    "id":2258,\n    "name":"鐩稿北鍖�",\n    "superregion_id":191\n
}
 {
	\n    "id":2259,\n    "name":"鐙瓙灞卞尯",\n    "superregion_id":192\n
}
 {
	\n    "id":2260,\n    "name":"閮婂尯",\n    "superregion_id":192\n
}
 {
	\n    "id":2261,\n    "name":"閾滃畼灞卞尯",\n    "superregion_id":192\n
}
 {
	\n    "id":2262,\n    "name":"閾滈櫟鍘�",\n    "superregion_id":192\n
}
 {
	\n    "id":2263,\n    "name":"澶ц鍖�",\n    "superregion_id":193\n
}
 {
	\n    "id":2264,\n    "name":"澶箹鍘�",\n    "superregion_id":193\n
}
 {
	\n    "id":2265,\n    "name":"瀹滅鍖�",\n    "superregion_id":193\n
}
 {
	\n    "id":2266,\n    "name":"瀹挎澗鍘�",\n    "superregion_id":193\n
}
 {
	\n    "id":2267,\n    "name":"宀宠タ鍘�",\n    "superregion_id":193\n
}
 {
	\n    "id":2268,\n    "name":"鎬€瀹佸幙",\n    "superregion_id":193\n
}
 {
	\n    "id":2269,\n    "name":"鏈涙睙鍘�",\n    "superregion_id":193\n
}
 {
	\n    "id":2270,\n    "name":"鏋為槼鍘�",\n    "superregion_id":193\n
}
 {
	\n    "id":2271,\n    "name":"妗愬煄甯�",\n    "superregion_id":193\n
}
 {
	\n    "id":2272,\n    "name":"娼滃北鍘�",\n    "superregion_id":193\n
}
 {
	\n    "id":2273,\n    "name":"杩庢睙鍖�",\n    "superregion_id":193\n
}
 {
	\n    "id":2274,\n    "name":"浼戝畞鍘�",\n    "superregion_id":194\n
}
 {
	\n    "id":2275,\n    "name":"灞邯鍖�",\n    "superregion_id":194\n
}
 {
	\n    "id":2276,\n    "name":"寰藉窞鍖�",\n    "superregion_id":194\n
}
 {
	\n    "id":2277,\n    "name":"姝欏幙",\n    "superregion_id":194\n
}
 {
	\n    "id":2278,\n    "name":"绁侀棬鍘�",\n    "superregion_id":194\n
}
 {
	\n    "id":2279,\n    "name":"榛勫北鍖�",\n    "superregion_id":194\n
}
 {
	\n    "id":2280,\n    "name":"榛熷幙",\n    "superregion_id":194\n
}
 {
	\n    "id":2281,\n    "name":"鍏ㄦ鍘�",\n    "superregion_id":195\n
}
 {
	\n    "id":2282,\n    "name":"鍑ら槼鍘�",\n    "superregion_id":195\n
}
 {
	\n    "id":2283,\n    "name":"鍗楄隘鍖�",\n    "superregion_id":195\n
}
 {
	\n    "id":2284,\n    "name":"澶╅暱甯�",\n    "superregion_id":195\n
}
 {
	\n    "id":2285,\n    "name":"瀹氳繙鍘�",\n    "superregion_id":195\n
}
 {
	\n    "id":2286,\n    "name":"鏄庡厜甯�",\n    "superregion_id":195\n
}
 {
	\n    "id":2287,\n    "name":"鏉ュ畨鍘�",\n    "superregion_id":195\n
}
 {
	\n    "id":2288,\n    "name":"鐞呯悐鍖�",\n    "superregion_id":195\n
}
 {
	\n    "id":2289,\n    "name":"涓存硥鍘�",\n    "superregion_id":196\n
}
 {
	\n    "id":2290,\n    "name":"澶拰鍘�",\n    "superregion_id":196\n
}
 {
	\n    "id":2291,\n    "name":"鐣岄甯�",\n    "superregion_id":196\n
}
 {
	\n    "id":2292,\n    "name":"闃滃崡鍘�",\n    "superregion_id":196\n
}
 {
	\n    "id":2293,\n    "name":"棰嶄笢鍖�",\n    "superregion_id":196\n
}
 {
	\n    "id":2294,\n    "name":"棰嶅窞鍖�",\n    "superregion_id":196\n
}
 {
	\n    "id":2295,\n    "name":"棰嶆硥鍖�",\n    "superregion_id":196\n
}
 {
	\n    "id":2296,\n    "name":"棰嶄笂鍘�",\n    "superregion_id":196\n
}
 {
	\n    "id":2297,\n    "name":"鍩囨ˉ鍖�",\n    "superregion_id":197\n
}
 {
	\n    "id":2298,\n    "name":"娉楀幙",\n    "superregion_id":197\n
}
 {
	\n    "id":2299,\n    "name":"鐏电挧鍘�",\n    "superregion_id":197\n
}
 {
	\n    "id":2300,\n    "name":"鐮€灞卞幙",\n    "superregion_id":197\n
}
 {
	\n    "id":2301,\n    "name":"钀у幙",\n    "superregion_id":197\n
}
 {
	\n    "id":2302,\n    "name":"鍚北鍘�",\n    "superregion_id":190\n
}
 {
	\n    "id":2303,\n    "name":"鍜屽幙",\n    "superregion_id":190\n
}
 {
	\n    "id":2304,\n    "name":"灞呭发鍖�",\n    "superregion_id":198\n
}
 {
	\n    "id":2305,\n    "name":"搴愭睙鍘�",\n    "superregion_id":186\n
}
 {
	\n    "id":2306,\n    "name":"鏃犱负鍘�",\n    "superregion_id":187\n
}
 {
	\n    "id":2307,\n    "name":"瀵垮幙",\n    "superregion_id":199\n
}
 {
	\n    "id":2308,\n    "name":"鑸掑煄鍘�",\n    "superregion_id":199\n
}
 {
	\n    "id":2309,\n    "name":"瑁曞畨鍖�",\n    "superregion_id":199\n
}
 {
	\n    "id":2310,\n    "name":"閲戝畨鍖�",\n    "superregion_id":199\n
}
 {
	\n    "id":2311,\n    "name":"閲戝鍘�",\n    "superregion_id":199\n
}
 {
	\n    "id":2312,\n    "name":"闇嶅北鍘�",\n    "superregion_id":199\n
}
 {
	\n    "id":2313,\n    "name":"闇嶉偙鍘�",\n    "superregion_id":199\n
}
 {
	\n    "id":2314,\n    "name":"鍒╄緵鍘�",\n    "superregion_id":200\n
}
 {
	\n    "id":2315,\n    "name":"娑￠槼鍘�",\n    "superregion_id":200\n
}
 {
	\n    "id":2316,\n    "name":"钂欏煄鍘�",\n    "superregion_id":200\n
}
 {
	\n    "id":2317,\n    "name":"璋煄鍖�",\n    "superregion_id":200\n
}
 {
	\n    "id":2318,\n    "name":"涓滆嚦鍘�",\n    "superregion_id":201\n
}
 {
	\n    "id":2319,\n    "name":"鐭冲彴鍘�",\n    "superregion_id":201\n
}
 {
	\n    "id":2320,\n    "name":"璐垫睜鍖�",\n    "superregion_id":201\n
}
 {
	\n    "id":2321,\n    "name":"闈掗槼鍘�",\n    "superregion_id":201\n
}
 {
	\n    "id":2322,\n    "name":"瀹佸浗甯�",\n    "superregion_id":202\n
}
 {
	\n    "id":2323,\n    "name":"瀹ｅ窞鍖�",\n    "superregion_id":202\n
}
 {
	\n    "id":2324,\n    "name":"骞垮痉鍘�",\n    "superregion_id":202\n
}
 {
	\n    "id":2325,\n    "name":"鏃屽痉鍘�",\n    "superregion_id":202\n
}
 {
	\n    "id":2326,\n    "name":"娉惧幙",\n    "superregion_id":202\n
}
 {
	\n    "id":2327,\n    "name":"缁╂邯鍘�",\n    "superregion_id":202\n
}
 {
	\n    "id":2328,\n    "name":"閮庢邯鍘�",\n    "superregion_id":202\n
}
 {
	\n    "id":2329,\n    "name":"浠撳北鍖�",\n    "superregion_id":203\n
}
 {
	\n    "id":2330,\n    "name":"鍙版睙鍖�",\n    "superregion_id":203\n
}
 {
	\n    "id":2331,\n    "name":"骞虫江鍘�",\n    "superregion_id":203\n
}
 {
	\n    "id":2332,\n    "name":"鏅嬪畨鍖�",\n    "superregion_id":203\n
}
 {
	\n    "id":2333,\n    "name":"姘告嘲鍘�",\n    "superregion_id":203\n
}
 {
	\n    "id":2334,\n    "name":"绂忔竻甯�",\n    "superregion_id":203\n
}
 {
	\n    "id":2335,\n    "name":"缃楁簮鍘�",\n    "superregion_id":203\n
}
 {
	\n    "id":2336,\n    "name":"杩炴睙鍘�",\n    "superregion_id":203\n
}
 {
	\n    "id":2337,\n    "name":"闀夸箰甯�",\n    "superregion_id":203\n
}
 {
	\n    "id":2338,\n    "name":"闂戒警鍘�",\n    "superregion_id":203\n
}
 {
	\n    "id":2339,\n    "name":"闂芥竻鍘�",\n    "superregion_id":203\n
}
 {
	\n    "id":2340,\n    "name":"椹熬鍖�",\n    "superregion_id":203\n
}
 {
	\n    "id":2341,\n    "name":"榧撴ゼ鍖�",\n    "superregion_id":203\n
}
 {
	\n    "id":2342,\n    "name":"鍚屽畨鍖�",\n    "superregion_id":204\n
}
 {
	\n    "id":2343,\n    "name":"鎬濇槑鍖�",\n    "superregion_id":204\n
}
 {
	\n    "id":2344,\n    "name":"娴锋钵鍖�",\n    "superregion_id":204\n
}
 {
	\n    "id":2345,\n    "name":"婀栭噷鍖�",\n    "superregion_id":204\n
}
 {
	\n    "id":2346,\n    "name":"缈斿畨鍖�",\n    "superregion_id":204\n
}
 {
	\n    "id":2347,\n    "name":"闆嗙編鍖�",\n    "superregion_id":204\n
}
 {
	\n    "id":2348,\n    "name":"浠欐父鍘�",\n    "superregion_id":205\n
}
 {
	\n    "id":2349,\n    "name":"鍩庡帰鍖�",\n    "superregion_id":205\n
}
 {
	\n    "id":2350,\n    "name":"娑垫睙鍖�",\n    "superregion_id":205\n
}
 {
	\n    "id":2351,\n    "name":"绉€灞垮尯",\n    "superregion_id":205\n
}
 {
	\n    "id":2352,\n    "name":"鑽斿煄鍖�",\n    "superregion_id":205\n
}
 {
	\n    "id":2353,\n    "name":"涓夊厓鍖�",\n    "superregion_id":206\n
}
 {
	\n    "id":2354,\n    "name":"澶х敯鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2355,\n    "name":"瀹佸寲鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2356,\n    "name":"灏嗕箰鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2357,\n    "name":"灏ゆ邯鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2358,\n    "name":"寤哄畞鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2359,\n    "name":"鏄庢邯鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2360,\n    "name":"姊呭垪鍖�",\n    "superregion_id":206\n
}
 {
	\n    "id":2361,\n    "name":"姘稿畨甯�",\n    "superregion_id":206\n
}
 {
	\n    "id":2362,\n    "name":"娌欏幙",\n    "superregion_id":206\n
}
 {
	\n    "id":2363,\n    "name":"娉板畞鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2364,\n    "name":"娓呮祦鍘�",\n    "superregion_id":206\n
}
 {
	\n    "id":2365,\n    "name":"涓版辰鍖�",\n    "superregion_id":207\n
}
 {
	\n    "id":2366,\n    "name":"鍗楀畨甯�",\n    "superregion_id":207\n
}
 {
	\n    "id":2367,\n    "name":"瀹夋邯鍘�",\n    "superregion_id":207\n
}
 {
	\n    "id":2368,\n    "name":"寰峰寲鍘�",\n    "superregion_id":207\n
}
 {
	\n    "id":2369,\n    "name":"鎯犲畨鍘�",\n    "superregion_id":207\n
}
 {
	\n    "id":2370,\n    "name":"鏅嬫睙甯�",\n    "superregion_id":207\n
}
 {
	\n    "id":2371,\n    "name":"姘告槬鍘�",\n    "superregion_id":207\n
}
 {
	\n    "id":2372,\n    "name":"娉夋腐鍖�",\n    "superregion_id":207\n
}
 {
	\n    "id":2373,\n    "name":"娲涙睙鍖�",\n    "superregion_id":207\n
}
 {
	\n    "id":2374,\n    "name":"鐭崇嫯甯�",\n    "superregion_id":207\n
}
 {
	\n    "id":2375,\n    "name":"閲戦棬鍘�",\n    "superregion_id":207\n
}
 {
	\n    "id":2376,\n    "name":"椴ゅ煄鍖�",\n    "superregion_id":207\n
}
 {
	\n    "id":2377,\n    "name":"涓滃北鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2378,\n    "name":"浜戦渼鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2379,\n    "name":"鍗庡畨鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2380,\n    "name":"鍗楅潠鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2381,\n    "name":"骞冲拰鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2382,\n    "name":"婕虫郸鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2383,\n    "name":"鑺楀煄鍖�",\n    "superregion_id":208\n
}
 {
	\n    "id":2384,\n    "name":"璇忓畨鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2385,\n    "name":"闀挎嘲鍘�",\n    "superregion_id":208\n
}
 {
	\n    "id":2386,\n    "name":"榫欐枃鍖�",\n    "superregion_id":208\n
}
 {
	\n    "id":2387,\n    "name":"榫欐捣甯�",\n    "superregion_id":208\n
}
 {
	\n    "id":2388,\n    "name":"鍏夋辰鍘�",\n    "superregion_id":209\n
}
 {
	\n    "id":2389,\n    "name":"寤跺钩鍖�",\n    "superregion_id":209\n
}
 {
	\n    "id":2390,\n    "name":"寤虹摨甯�",\n    "superregion_id":209\n
}
 {
	\n    "id":2391,\n    "name":"寤洪槼甯�",\n    "superregion_id":209\n
}
 {
	\n    "id":2392,\n    "name":"鏀垮拰鍘�",\n    "superregion_id":209\n
}
 {
	\n    "id":2393,\n    "name":"鏉炬邯鍘�",\n    "superregion_id":209\n
}
 {
	\n    "id":2394,\n    "name":"姝﹀し灞卞競",\n    "superregion_id":209\n
}
 {
	\n    "id":2395,\n    "name":"娴﹀煄鍘�",\n    "superregion_id":209\n
}
 {
	\n    "id":2396,\n    "name":"閭垫甯�",\n    "superregion_id":209\n
}
 {
	\n    "id":2397,\n    "name":"椤烘槍鍘�",\n    "superregion_id":209\n
}
 {
	\n    "id":2398,\n    "name":"涓婃澀鍘�",\n    "superregion_id":210\n
}
 {
	\n    "id":2399,\n    "name":"鏂扮綏鍖�",\n    "superregion_id":210\n
}
 {
	\n    "id":2400,\n    "name":"姝﹀钩鍘�",\n    "superregion_id":210\n
}
 {
	\n    "id":2401,\n    "name":"姘稿畾鍘�",\n    "superregion_id":210\n
}
 {
	\n    "id":2402,\n    "name":"婕冲钩甯�",\n    "superregion_id":210\n
}
 {
	\n    "id":2403,\n    "name":"杩炲煄鍘�",\n    "superregion_id":210\n
}
 {
	\n    "id":2404,\n    "name":"闀挎眬鍘�",\n    "superregion_id":210\n
}
 {
	\n    "id":2405,\n    "name":"鍙ょ敯鍘�",\n    "superregion_id":211\n
}
 {
	\n    "id":2406,\n    "name":"鍛ㄥ畞鍘�",\n    "superregion_id":211\n
}
 {
	\n    "id":2407,\n    "name":"瀵垮畞鍘�",\n    "superregion_id":211\n
}
 {
	\n    "id":2408,\n    "name":"灞忓崡鍘�",\n    "superregion_id":211\n
}
 {
	\n    "id":2409,\n    "name":"鏌樿崳鍘�",\n    "superregion_id":211\n
}
 {
	\n    "id":2410,\n    "name":"绂忓畨甯�",\n    "superregion_id":211\n
}
 {
	\n    "id":2411,\n    "name":"绂忛紟甯�",\n    "superregion_id":211\n
}
 {
	\n    "id":2412,\n    "name":"钑夊煄鍖�",\n    "superregion_id":211\n
}
 {
	\n    "id":2413,\n    "name":"闇炴郸鍘�",\n    "superregion_id":211\n
}
 {
	\n    "id":2414,\n    "name":"涓滄箹鍖�",\n    "superregion_id":212\n
}
 {
	\n    "id":2415,\n    "name":"鍗楁槍鍘�",\n    "superregion_id":212\n
}
 {
	\n    "id":2416,\n    "name":"瀹変箟鍘�",\n    "superregion_id":212\n
}
 {
	\n    "id":2417,\n    "name":"鏂板缓鍘�",\n    "superregion_id":212\n
}
 {
	\n    "id":2418,\n    "name":"婀鹃噷鍖�",\n    "superregion_id":212\n
}
 {
	\n    "id":2419,\n    "name":"瑗挎箹鍖�",\n    "superregion_id":212\n
}
 {
	\n    "id":2420,\n    "name":"杩涜搐鍘�",\n    "superregion_id":212\n
}
 {
	\n    "id":2421,\n    "name":"闈掍簯璋卞尯",\n    "superregion_id":212\n
}
 {
	\n    "id":2422,\n    "name":"闈掑北婀栧尯",\n    "superregion_id":212\n
}
 {
	\n    "id":2423,\n    "name":"涔愬钩甯�",\n    "superregion_id":213\n
}
 {
	\n    "id":2424,\n    "name":"鏄屾睙鍖�",\n    "superregion_id":213\n
}
 {
	\n    "id":2425,\n    "name":"娴鍘�",\n    "superregion_id":213\n
}
 {
	\n    "id":2426,\n    "name":"鐝犲北鍖�",\n    "superregion_id":213\n
}
 {
	\n    "id":2427,\n    "name":"涓婃牀鍘�",\n    "superregion_id":214\n
}
 {
	\n    "id":2428,\n    "name":"瀹夋簮鍖�",\n    "superregion_id":214\n
}
 {
	\n    "id":2429,\n    "name":"婀樹笢鍖�",\n    "superregion_id":214\n
}
 {
	\n    "id":2430,\n    "name":"鑺︽邯鍘�",\n    "superregion_id":214\n
}
 {
	\n    "id":2431,\n    "name":"鑾茶姳鍘�",\n    "superregion_id":214\n
}
 {
	\n    "id":2432,\n    "name":"涔濇睙鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2433,\n    "name":"淇按鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2434,\n    "name":"搴愬北鍖�",\n    "superregion_id":215\n
}
 {
	\n    "id":2435,\n    "name":"褰辰鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2436,\n    "name":"寰峰畨鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2437,\n    "name":"鏄熷瓙鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2438,\n    "name":"姝﹀畞鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2439,\n    "name":"姘镐慨鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2440,\n    "name":"娴旈槼鍖�",\n    "superregion_id":215\n
}
 {
	\n    "id":2441,\n    "name":"婀栧彛鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2442,\n    "name":"鐟炴槍甯�",\n    "superregion_id":215\n
}
 {
	\n    "id":2443,\n    "name":"閮芥槍鍘�",\n    "superregion_id":215\n
}
 {
	\n    "id":2444,\n    "name":"鍒嗗疁鍘�",\n    "superregion_id":216\n
}
 {
	\n    "id":2445,\n    "name":"娓濇按鍖�",\n    "superregion_id":216\n
}
 {
	\n    "id":2446,\n    "name":"浣欐睙鍘�",\n    "superregion_id":217\n
}
 {
	\n    "id":2447,\n    "name":"鏈堟箹鍖�",\n    "superregion_id":217\n
}
 {
	\n    "id":2448,\n    "name":"璐垫邯甯�",\n    "superregion_id":217\n
}
 {
	\n    "id":2449,\n    "name":"涓婄姽鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2450,\n    "name":"浜庨兘鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2451,\n    "name":"浼氭槍鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2452,\n    "name":"淇′赴鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2453,\n    "name":"鍏ㄥ崡鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2454,\n    "name":"鍏村浗鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2455,\n    "name":"鍗楀悍甯�",\n    "superregion_id":218\n
}
 {
	\n    "id":2456,\n    "name":"澶т綑鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2457,\n    "name":"瀹侀兘鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2458,\n    "name":"瀹夎繙鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2459,\n    "name":"瀹氬崡鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2460,\n    "name":"瀵讳箤鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2461,\n    "name":"宕囦箟鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2462,\n    "name":"鐟為噾甯�",\n    "superregion_id":218\n
}
 {
	\n    "id":2463,\n    "name":"鐭冲煄鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2464,\n    "name":"绔犺础鍖�",\n    "superregion_id":218\n
}
 {
	\n    "id":2465,\n    "name":"璧ｅ幙",\n    "superregion_id":218\n
}
 {
	\n    "id":2466,\n    "name":"榫欏崡鍘�",\n    "superregion_id":218\n
}
 {
	\n    "id":2467,\n    "name":"涓囧畨鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2468,\n    "name":"浜曞唸灞卞競",\n    "superregion_id":219\n
}
 {
	\n    "id":2469,\n    "name":"鍚夊畨鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2470,\n    "name":"鍚夊窞鍖�",\n    "superregion_id":219\n
}
 {
	\n    "id":2471,\n    "name":"鍚夋按鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2472,\n    "name":"瀹夌鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2473,\n    "name":"宄℃睙鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2474,\n    "name":"鏂板共鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2475,\n    "name":"姘镐赴鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2476,\n    "name":"姘告柊鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2477,\n    "name":"娉板拰鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2478,\n    "name":"閬傚窛鍘�",\n    "superregion_id":219\n
}
 {
	\n    "id":2479,\n    "name":"闈掑師鍖�",\n    "superregion_id":219\n
}
 {
	\n    "id":2480,\n    "name":"涓囪浇鍘�",\n    "superregion_id":220\n
}
 {
	\n    "id":2481,\n    "name":"涓婇珮鍘�",\n    "superregion_id":220\n
}
 {
	\n    "id":2482,\n    "name":"涓板煄甯�",\n    "superregion_id":220\n
}
 {
	\n    "id":2483,\n    "name":"濂夋柊鍘�",\n    "superregion_id":220\n
}
 {
	\n    "id":2484,\n    "name":"瀹滀赴鍘�",\n    "superregion_id":220\n
}
 {
	\n    "id":2485,\n    "name":"妯熸爲甯�",\n    "superregion_id":220\n
}
 {
	\n    "id":2486,\n    "name":"琚佸窞鍖�",\n    "superregion_id":220\n
}
 {
	\n    "id":2487,\n    "name":"閾滈紦鍘�",\n    "superregion_id":220\n
}
 {
	\n    "id":2488,\n    "name":"闈栧畨鍘�",\n    "superregion_id":220\n
}
 {
	\n    "id":2489,\n    "name":"楂樺畨甯�",\n    "superregion_id":220\n
}
 {
	\n    "id":2490,\n    "name":"涓滀埂鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2491,\n    "name":"涓村窛鍖�",\n    "superregion_id":221\n
}
 {
	\n    "id":2492,\n    "name":"涔愬畨鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2493,\n    "name":"鍗椾赴鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2494,\n    "name":"鍗楀煄鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2495,\n    "name":"瀹滈粍鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2496,\n    "name":"宕囦粊鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2497,\n    "name":"骞挎槍鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2498,\n    "name":"璧勬邯鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2499,\n    "name":"閲戞邯鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2500,\n    "name":"榛庡窛鍘�",\n    "superregion_id":221\n
}
 {
	\n    "id":2501,\n    "name":"涓囧勾鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2502,\n    "name":"涓婇ザ鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2503,\n    "name":"浣欏共鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2504,\n    "name":"淇″窞鍖�",\n    "superregion_id":222\n
}
 {
	\n    "id":2505,\n    "name":"濠烘簮鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2506,\n    "name":"骞夸赴鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2507,\n    "name":"寮嬮槼鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2508,\n    "name":"寰峰叴甯�",\n    "superregion_id":222\n
}
 {
	\n    "id":2509,\n    "name":"妯嘲鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2510,\n    "name":"鐜夊北鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2511,\n    "name":"閯遍槼鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2512,\n    "name":"閾呭北鍘�",\n    "superregion_id":222\n
}
 {
	\n    "id":2513,\n    "name":"鍘嗕笅鍖�",\n    "superregion_id":223\n
}
 {
	\n    "id":2514,\n    "name":"鍘嗗煄鍖�",\n    "superregion_id":223\n
}
 {
	\n    "id":2515,\n    "name":"鍟嗘渤鍘�",\n    "superregion_id":223\n
}
 {
	\n    "id":2516,\n    "name":"澶╂ˉ鍖�",\n    "superregion_id":223\n
}
 {
	\n    "id":2517,\n    "name":"甯備腑鍖�",\n    "superregion_id":223\n
}
 {
	\n    "id":2518,\n    "name":"骞抽槾鍘�",\n    "superregion_id":223\n
}
 {
	\n    "id":2519,\n    "name":"妲愯崼鍖�",\n    "superregion_id":223\n
}
 {
	\n    "id":2520,\n    "name":"娴庨槼鍘�",\n    "superregion_id":223\n
}
 {
	\n    "id":2521,\n    "name":"绔犱笜甯�",\n    "superregion_id":223\n
}
 {
	\n    "id":2522,\n    "name":"闀挎竻鍖�",\n    "superregion_id":223\n
}
 {
	\n    "id":2523,\n    "name":"鍗冲ⅷ甯�",\n    "superregion_id":224\n
}
 {
	\n    "id":2524,\n    "name":"鍥涙柟鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2525,\n    "name":"鍩庨槼鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2526,\n    "name":"宕傚北鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2527,\n    "name":"甯傚寳鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2528,\n    "name":"甯傚崡鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2529,\n    "name":"骞冲害甯�",\n    "superregion_id":224\n
}
 {
	\n    "id":2530,\n    "name":"鏉庢钵鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2531,\n    "name":"鑳跺崡甯�",\n    "superregion_id":224\n
}
 {
	\n    "id":2532,\n    "name":"鑳跺窞甯�",\n    "superregion_id":224\n
}
 {
	\n    "id":2533,\n    "name":"鑾辫タ甯�",\n    "superregion_id":224\n
}
 {
	\n    "id":2534,\n    "name":"榛勫矝鍖�",\n    "superregion_id":224\n
}
 {
	\n    "id":2535,\n    "name":"涓存穭鍖�",\n    "superregion_id":225\n
}
 {
	\n    "id":2536,\n    "name":"鍗氬北鍖�",\n    "superregion_id":225\n
}
 {
	\n    "id":2537,\n    "name":"鍛ㄦ潙鍖�",\n    "superregion_id":225\n
}
 {
	\n    "id":2538,\n    "name":"寮犲簵鍖�",\n    "superregion_id":225\n
}
 {
	\n    "id":2539,\n    "name":"妗撳彴鍘�",\n    "superregion_id":225\n
}
 {
	\n    "id":2540,\n    "name":"娌傛簮鍘�",\n    "superregion_id":225\n
}
 {
	\n    "id":2541,\n    "name":"娣勫窛鍖�",\n    "superregion_id":225\n
}
 {
	\n    "id":2542,\n    "name":"楂橀潚鍘�",\n    "superregion_id":225\n
}
 {
	\n    "id":2543,\n    "name":"鍙板効搴勫尯",\n    "superregion_id":226\n
}
 {
	\n    "id":2544,\n    "name":"灞变涵鍖�",\n    "superregion_id":226\n
}
 {
	\n    "id":2545,\n    "name":"宄勫煄鍖�",\n    "superregion_id":226\n
}
 {
	\n    "id":2546,\n    "name":"甯備腑鍖�",\n    "superregion_id":226\n
}
 {
	\n    "id":2547,\n    "name":"婊曞窞甯�",\n    "superregion_id":226\n
}
 {
	\n    "id":2548,\n    "name":"钖涘煄鍖�",\n    "superregion_id":226\n
}
 {
	\n    "id":2549,\n    "name":"涓滆惀鍖�",\n    "superregion_id":227\n
}
 {
	\n    "id":2550,\n    "name":"鍒╂触鍘�",\n    "superregion_id":227\n
}
 {
	\n    "id":2551,\n    "name":"鍨﹀埄鍘�",\n    "superregion_id":227\n
}
 {
	\n    "id":2552,\n    "name":"骞块ザ鍘�",\n    "superregion_id":227\n
}
 {
	\n    "id":2553,\n    "name":"娌冲彛鍖�",\n    "superregion_id":227\n
}
 {
	\n    "id":2554,\n    "name":"鎷涜繙甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2555,\n    "name":"鏍栭湠甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2556,\n    "name":"娴烽槼甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2557,\n    "name":"鐗熷钩鍖�",\n    "superregion_id":228\n
}
 {
	\n    "id":2558,\n    "name":"绂忓北鍖�",\n    "superregion_id":228\n
}
 {
	\n    "id":2559,\n    "name":"鑺濈綐鍖�",\n    "superregion_id":228\n
}
 {
	\n    "id":2560,\n    "name":"鑾卞北鍖�",\n    "superregion_id":228\n
}
 {
	\n    "id":2561,\n    "name":"鑾卞窞甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2562,\n    "name":"鑾遍槼甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2563,\n    "name":"钃幈甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2564,\n    "name":"闀垮矝鍘�",\n    "superregion_id":228\n
}
 {
	\n    "id":2565,\n    "name":"榫欏彛甯�",\n    "superregion_id":228\n
}
 {
	\n    "id":2566,\n    "name":"涓存湊鍘�",\n    "superregion_id":229\n
}
 {
	\n    "id":2567,\n    "name":"鍧婂瓙鍖�",\n    "superregion_id":229\n
}
 {
	\n    "id":2568,\n    "name":"濂庢枃鍖�",\n    "superregion_id":229\n
}
 {
	\n    "id":2569,\n    "name":"瀹変笜甯�",\n    "superregion_id":229\n
}
 {
	\n    "id":2570,\n    "name":"瀵掍涵鍖�",\n    "superregion_id":229\n
}
 {
	\n    "id":2571,\n    "name":"瀵垮厜甯�",\n    "superregion_id":229\n
}
 {
	\n    "id":2572,\n    "name":"鏄屼箰鍘�",\n    "superregion_id":229\n
}
 {
	\n    "id":2573,\n    "name":"鏄岄倯甯�",\n    "superregion_id":229\n
}
 {
	\n    "id":2574,\n    "name":"娼嶅煄鍖�",\n    "superregion_id":229\n
}
 {
	\n    "id":2575,\n    "name":"璇稿煄甯�",\n    "superregion_id":229\n
}
 {
	\n    "id":2576,\n    "name":"闈掑窞甯�",\n    "superregion_id":229\n
}
 {
	\n    "id":2577,\n    "name":"楂樺瘑甯�",\n    "superregion_id":229\n
}
 {
	\n    "id":2578,\n    "name":"浠诲煄鍖�",\n    "superregion_id":230\n
}
 {
	\n    "id":2579,\n    "name":"鍏栧窞甯�",\n    "superregion_id":230\n
}
 {
	\n    "id":2580,\n    "name":"鍢夌ゥ鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2581,\n    "name":"甯備腑鍖�",\n    "superregion_id":230\n
}
 {
	\n    "id":2582,\n    "name":"寰北鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2583,\n    "name":"鏇查槣甯�",\n    "superregion_id":230\n
}
 {
	\n    "id":2584,\n    "name":"姊佸北鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2585,\n    "name":"姹朵笂鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2586,\n    "name":"娉楁按鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2587,\n    "name":"閭瑰煄甯�",\n    "superregion_id":230\n
}
 {
	\n    "id":2588,\n    "name":"閲戜埂鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2589,\n    "name":"楸煎彴鍘�",\n    "superregion_id":230\n
}
 {
	\n    "id":2590,\n    "name":"涓滃钩鍘�",\n    "superregion_id":231\n
}
 {
	\n    "id":2591,\n    "name":"瀹侀槼鍘�",\n    "superregion_id":231\n
}
 {
	\n    "id":2592,\n    "name":"宀卞渤鍖�",\n    "superregion_id":231\n
}
 {
	\n    "id":2593,\n    "name":"鏂版嘲甯�",\n    "superregion_id":231\n
}
 {
	\n    "id":2594,\n    "name":"娉板北鍖�",\n    "superregion_id":231\n
}
 {
	\n    "id":2595,\n    "name":"鑲ュ煄甯�",\n    "superregion_id":231\n
}
 {
	\n    "id":2596,\n    "name":"涔冲北甯�",\n    "superregion_id":232\n
}
 {
	\n    "id":2597,\n    "name":"鏂囩櫥甯�",\n    "superregion_id":232\n
}
 {
	\n    "id":2598,\n    "name":"鐜繝鍖�",\n    "superregion_id":232\n
}
 {
	\n    "id":2599,\n    "name":"鑽ｆ垚甯�",\n    "superregion_id":232\n
}
 {
	\n    "id":2600,\n    "name":"涓滄腐鍖�",\n    "superregion_id":233\n
}
 {
	\n    "id":2601,\n    "name":"浜旇幉鍘�",\n    "superregion_id":233\n
}
 {
	\n    "id":2602,\n    "name":"宀氬北鍖�",\n    "superregion_id":233\n
}
 {
	\n    "id":2603,\n    "name":"鑾掑幙",\n    "superregion_id":233\n
}
 {
	\n    "id":2604,\n    "name":"鑾卞煄鍖�",\n    "superregion_id":234\n
}
 {
	\n    "id":2605,\n    "name":"閽㈠煄鍖�",\n    "superregion_id":234\n
}
 {
	\n    "id":2606,\n    "name":"涓存箔鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2607,\n    "name":"鍏板北鍖�",\n    "superregion_id":235\n
}
 {
	\n    "id":2608,\n    "name":"骞抽倯鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2609,\n    "name":"娌傚崡鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2610,\n    "name":"娌傛按鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2611,\n    "name":"娌充笢鍖�",\n    "superregion_id":235\n
}
 {
	\n    "id":2612,\n    "name":"缃楀簞鍖�",\n    "superregion_id":235\n
}
 {
	\n    "id":2613,\n    "name":"鑻嶅北鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2614,\n    "name":"鑾掑崡鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2615,\n    "name":"钂欓槾鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2616,\n    "name":"璐瑰幙",\n    "superregion_id":235\n
}
 {
	\n    "id":2617,\n    "name":"閮煄鍘�",\n    "superregion_id":235\n
}
 {
	\n    "id":2618,\n    "name":"涓撮倯鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2619,\n    "name":"涔愰櫟甯�",\n    "superregion_id":236\n
}
 {
	\n    "id":2620,\n    "name":"澶忔触鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2621,\n    "name":"瀹佹触鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2622,\n    "name":"骞冲師鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2623,\n    "name":"搴嗕簯鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2624,\n    "name":"寰峰煄鍖�",\n    "superregion_id":236\n
}
 {
	\n    "id":2625,\n    "name":"姝﹀煄鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2626,\n    "name":"绂瑰煄甯�",\n    "superregion_id":236\n
}
 {
	\n    "id":2627,\n    "name":"闄靛幙",\n    "superregion_id":236\n
}
 {
	\n    "id":2628,\n    "name":"榻愭渤鍘�",\n    "superregion_id":236\n
}
 {
	\n    "id":2629,\n    "name":"涓滄槍搴滃尯",\n    "superregion_id":237\n
}
 {
	\n    "id":2630,\n    "name":"涓滈樋鍘�",\n    "superregion_id":237\n
}
 {
	\n    "id":2631,\n    "name":"涓存竻甯�",\n    "superregion_id":237\n
}
 {
	\n    "id":2632,\n    "name":"鍐犲幙",\n    "superregion_id":237\n
}
 {
	\n    "id":2633,\n    "name":"鑼屽钩鍘�",\n    "superregion_id":237\n
}
 {
	\n    "id":2634,\n    "name":"鑾樺幙",\n    "superregion_id":237\n
}
 {
	\n    "id":2635,\n    "name":"闃宠胺鍘�",\n    "superregion_id":237\n
}
 {
	\n    "id":2636,\n    "name":"楂樺攼鍘�",\n    "superregion_id":237\n
}
 {
	\n    "id":2637,\n    "name":"鍗氬叴鍘�",\n    "superregion_id":238\n
}
 {
	\n    "id":2638,\n    "name":"鎯犳皯鍘�",\n    "superregion_id":238\n
}
 {
	\n    "id":2639,\n    "name":"鏃犳＃鍘�",\n    "superregion_id":238\n
}
 {
	\n    "id":2640,\n    "name":"娌惧寲鍘�",\n    "superregion_id":238\n
}
 {
	\n    "id":2641,\n    "name":"婊ㄥ煄鍖�",\n    "superregion_id":238\n
}
 {
	\n    "id":2642,\n    "name":"閭瑰钩鍘�",\n    "superregion_id":238\n
}
 {
	\n    "id":2643,\n    "name":"闃充俊鍘�",\n    "superregion_id":238\n
}
 {
	\n    "id":2644,\n    "name":"涓滄槑鍘�",\n    "superregion_id":239\n
}
 {
	\n    "id":2645,\n    "name":"鍗曞幙",\n    "superregion_id":239\n
}
 {
	\n    "id":2646,\n    "name":"瀹氶櫠鍘�",\n    "superregion_id":239\n
}
 {
	\n    "id":2647,\n    "name":"宸ㄩ噹鍘�",\n    "superregion_id":239\n
}
 {
	\n    "id":2648,\n    "name":"鎴愭鍘�",\n    "superregion_id":239\n
}
 {
	\n    "id":2649,\n    "name":"鏇瑰幙",\n    "superregion_id":239\n
}
 {
	\n    "id":2650,\n    "name":"鐗′腹鍖�",\n    "superregion_id":239\n
}
 {
	\n    "id":2651,\n    "name":"閮撳煄鍘�",\n    "superregion_id":239\n
}
 {
	\n    "id":2652,\n    "name":"閯勫煄鍘�",\n    "superregion_id":239\n
}
 {
	\n    "id":2653,\n    "name":"涓婅鍖�",\n    "superregion_id":240\n
}
 {
	\n    "id":2654,\n    "name":"涓師鍖�",\n    "superregion_id":240\n
}
 {
	\n    "id":2655,\n    "name":"涓墴鍘�",\n    "superregion_id":240\n
}
 {
	\n    "id":2656,\n    "name":"浜屼竷鍖�",\n    "superregion_id":240\n
}
 {
	\n    "id":2657,\n    "name":"宸╀箟甯�",\n    "superregion_id":240\n
}
 {
	\n    "id":2658,\n    "name":"鎯犳祹鍖�",\n    "superregion_id":240\n
}
 {
	\n    "id":2659,\n    "name":"鏂板瘑甯�",\n    "superregion_id":240\n
}
 {
	\n    "id":2660,\n    "name":"鏂伴儜甯�",\n    "superregion_id":240\n
}
 {
	\n    "id":2661,\n    "name":"鐧诲皝甯�",\n    "superregion_id":240\n
}
 {
	\n    "id":2662,\n    "name":"绠″煄鍥炴棌鍖�",\n    "superregion_id":240\n
}
 {
	\n    "id":2663,\n    "name":"鑽ラ槼甯�",\n    "superregion_id":240\n
}
 {
	\n    "id":2664,\n    "name":"閲戞按鍖�",\n    "superregion_id":240\n
}
 {
	\n    "id":2665,\n    "name":"鍏拌€冨幙",\n    "superregion_id":241\n
}
 {
	\n    "id":2666,\n    "name":"灏夋皬鍘�",\n    "superregion_id":241\n
}
 {
	\n    "id":2667,\n    "name":"寮€灏佸幙",\n    "superregion_id":241\n
}
 {
	\n    "id":2668,\n    "name":"鏉炲幙",\n    "superregion_id":241\n
}
 {
	\n    "id":2669,\n    "name":"绂圭帇鍙板尯",\n    "superregion_id":241\n
}
 {
	\n    "id":2670,\n    "name":"閫氳鍘�",\n    "superregion_id":241\n
}
 {
	\n    "id":2671,\n    "name":"閲戞槑鍖�",\n    "superregion_id":241\n
}
 {
	\n    "id":2672,\n    "name":"椤烘渤鍥炴棌鍖�",\n    "superregion_id":241\n
}
 {
	\n    "id":2673,\n    "name":"榧撴ゼ鍖�",\n    "superregion_id":241\n
}
 {
	\n    "id":2674,\n    "name":"榫欎涵鍖�",\n    "superregion_id":241\n
}
 {
	\n    "id":2675,\n    "name":"浼婂窛鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2676,\n    "name":"鍋冨笀甯�",\n    "superregion_id":242\n
}
 {
	\n    "id":2677,\n    "name":"鍚夊埄鍖�",\n    "superregion_id":242\n
}
 {
	\n    "id":2678,\n    "name":"瀛熸触鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2679,\n    "name":"瀹滈槼鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2680,\n    "name":"宓╁幙",\n    "superregion_id":242\n
}
 {
	\n    "id":2681,\n    "name":"鏂板畨鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2682,\n    "name":"鏍惧窛鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2683,\n    "name":"姹濋槼鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2684,\n    "name":"娲涘畞鍘�",\n    "superregion_id":242\n
}
 {
	\n    "id":2685,\n    "name":"娲涢緳鍖�",\n    "superregion_id":242\n
}
 {
	\n    "id":2686,\n    "name":"娑цタ鍖�",\n    "superregion_id":242\n
}
 {
	\n    "id":2687,\n    "name":"鐎嶆渤鍥炴棌鍖�",\n    "superregion_id":242\n
}
 {
	\n    "id":2688,\n    "name":"鑰佸煄鍖�",\n    "superregion_id":242\n
}
 {
	\n    "id":2689,\n    "name":"瑗垮伐鍖�",\n    "superregion_id":242\n
}
 {
	\n    "id":2690,\n    "name":"鍗笢鍖�",\n    "superregion_id":243\n
}
 {
	\n    "id":2691,\n    "name":"鍙跺幙",\n    "superregion_id":243\n
}
 {
	\n    "id":2692,\n    "name":"瀹濅赴鍘�",\n    "superregion_id":243\n
}
 {
	\n    "id":2693,\n    "name":"鏂板崕鍖�",\n    "superregion_id":243\n
}
 {
	\n    "id":2694,\n    "name":"姹濆窞甯�",\n    "superregion_id":243\n
}
 {
	\n    "id":2695,\n    "name":"婀涙渤鍖�",\n    "superregion_id":243\n
}
 {
	\n    "id":2696,\n    "name":"鐭抽緳鍖�",\n    "superregion_id":243\n
}
 {
	\n    "id":2697,\n    "name":"鑸為挗甯�",\n    "superregion_id":243\n
}
 {
	\n    "id":2698,\n    "name":"閮忓幙",\n    "superregion_id":243\n
}
 {
	\n    "id":2699,\n    "name":"椴佸北鍘�",\n    "superregion_id":243\n
}
 {
	\n    "id":2700,\n    "name":"鍐呴粍鍘�",\n    "superregion_id":244\n
}
 {
	\n    "id":2701,\n    "name":"鍖楀叧鍖�",\n    "superregion_id":244\n
}
 {
	\n    "id":2702,\n    "name":"瀹夐槼鍘�",\n    "superregion_id":244\n
}
 {
	\n    "id":2703,\n    "name":"鏂囧嘲鍖�",\n    "superregion_id":244\n
}
 {
	\n    "id":2704,\n    "name":"鏋楀窞甯�",\n    "superregion_id":244\n
}
 {
	\n    "id":2705,\n    "name":"娈烽兘鍖�",\n    "superregion_id":244\n
}
 {
	\n    "id":2706,\n    "name":"姹ら槾鍘�",\n    "superregion_id":244\n
}
 {
	\n    "id":2707,\n    "name":"婊戝幙",\n    "superregion_id":244\n
}
 {
	\n    "id":2708,\n    "name":"榫欏畨鍖�",\n    "superregion_id":244\n
}
 {
	\n    "id":2709,\n    "name":"灞卞煄鍖�",\n    "superregion_id":245\n
}
 {
	\n    "id":2710,\n    "name":"娴氬幙",\n    "superregion_id":245\n
}
 {
	\n    "id":2711,\n    "name":"娣囧幙",\n    "superregion_id":245\n
}
 {
	\n    "id":2712,\n    "name":"娣囨花鍖�",\n    "superregion_id":245\n
}
 {
	\n    "id":2713,\n    "name":"楣ゅ北鍖�",\n    "superregion_id":245\n
}
 {
	\n    "id":2714,\n    "name":"鍑ゆ硥鍖�",\n    "superregion_id":246\n
}
 {
	\n    "id":2715,\n    "name":"鍗花鍖�",\n    "superregion_id":246\n
}
 {
	\n    "id":2716,\n    "name":"鍗緣甯�",\n    "superregion_id":246\n
}
 {
	\n    "id":2717,\n    "name":"鍘熼槼鍘�",\n    "superregion_id":246\n
}
 {
	\n    "id":2718,\n    "name":"灏佷笜鍘�",\n    "superregion_id":246\n
}
 {
	\n    "id":2719,\n    "name":"寤舵触鍘�",\n    "superregion_id":246\n
}
 {
	\n    "id":2720,\n    "name":"鏂颁埂鍘�",\n    "superregion_id":246\n
}
 {
	\n    "id":2721,\n    "name":"鐗ч噹鍖�",\n    "superregion_id":246\n
}
 {
	\n    "id":2722,\n    "name":"绾㈡棗鍖�",\n    "superregion_id":246\n
}
 {
	\n    "id":2723,\n    "name":"鑾峰槈鍘�",\n    "superregion_id":246\n
}
 {
	\n    "id":2724,\n    "name":"杈夊幙甯�",\n    "superregion_id":246\n
}
 {
	\n    "id":2725,\n    "name":"闀垮灒鍘�",\n    "superregion_id":246\n
}
 {
	\n    "id":2726,\n    "name":"涓珯鍖�",\n    "superregion_id":247\n
}
 {
	\n    "id":2727,\n    "name":"淇鍘�",\n    "superregion_id":247\n
}
 {
	\n    "id":2728,\n    "name":"鍗氱埍鍘�",\n    "superregion_id":247\n
}
 {
	\n    "id":2729,\n    "name":"瀛熷窞甯�",\n    "superregion_id":247\n
}
 {
	\n    "id":2730,\n    "name":"灞遍槼鍖�",\n    "superregion_id":247\n
}
 {
	\n    "id":2731,\n    "name":"姝﹂櫉鍘�",\n    "superregion_id":247\n
}
 {
	\n    "id":2732,\n    "name":"娌侀槼甯�",\n    "superregion_id":247\n
}
 {
	\n    "id":2733,\n    "name":"娓╁幙",\n    "superregion_id":247\n
}
 {
	\n    "id":2734,\n    "name":"瑙ｆ斁鍖�",\n    "superregion_id":247\n
}
 {
	\n    "id":2735,\n    "name":"椹潙鍖�",\n    "superregion_id":247\n
}
 {
	\n    "id":2736,\n    "name":"鍗庨緳鍖�",\n    "superregion_id":248\n
}
 {
	\n    "id":2737,\n    "name":"鍗椾箰鍘�",\n    "superregion_id":248\n
}
 {
	\n    "id":2738,\n    "name":"鍙板墠鍘�",\n    "superregion_id":248\n
}
 {
	\n    "id":2739,\n    "name":"娓呬赴鍘�",\n    "superregion_id":248\n
}
 {
	\n    "id":2740,\n    "name":"婵槼鍘�",\n    "superregion_id":248\n
}
 {
	\n    "id":2741,\n    "name":"鑼冨幙",\n    "superregion_id":248\n
}
 {
	\n    "id":2742,\n    "name":"绂瑰窞甯�",\n    "superregion_id":249\n
}
 {
	\n    "id":2743,\n    "name":"瑗勫煄鍘�",\n    "superregion_id":249\n
}
 {
	\n    "id":2744,\n    "name":"璁告槍鍘�",\n    "superregion_id":249\n
}
 {
	\n    "id":2745,\n    "name":"閯㈤櫟鍘�",\n    "superregion_id":249\n
}
 {
	\n    "id":2746,\n    "name":"闀胯憶甯�",\n    "superregion_id":249\n
}
 {
	\n    "id":2747,\n    "name":"榄忛兘鍖�",\n    "superregion_id":249\n
}
 {
	\n    "id":2748,\n    "name":"涓撮鍘�",\n    "superregion_id":250\n
}
 {
	\n    "id":2749,\n    "name":"鍙櫟鍖�",\n    "superregion_id":250\n
}
 {
	\n    "id":2750,\n    "name":"婧愭眹鍖�",\n    "superregion_id":250\n
}
 {
	\n    "id":2751,\n    "name":"鑸為槼鍘�",\n    "superregion_id":250\n
}
 {
	\n    "id":2752,\n    "name":"閮惧煄鍖�",\n    "superregion_id":250\n
}
 {
	\n    "id":2753,\n    "name":"涔夐┈甯�",\n    "superregion_id":251\n
}
 {
	\n    "id":2754,\n    "name":"鍗㈡皬鍘�",\n    "superregion_id":251\n
}
 {
	\n    "id":2755,\n    "name":"娓戞睜鍘�",\n    "superregion_id":251\n
}
 {
	\n    "id":2756,\n    "name":"婀栨花鍖�",\n    "superregion_id":251\n
}
 {
	\n    "id":2757,\n    "name":"鐏靛疂甯�",\n    "superregion_id":251\n
}
 {
	\n    "id":2758,\n    "name":"闄曞幙",\n    "superregion_id":251\n
}
 {
	\n    "id":2759,\n    "name":"鍐呬埂鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2760,\n    "name":"鍗楀彫鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2761,\n    "name":"鍗ч緳鍖�",\n    "superregion_id":252\n
}
 {
	\n    "id":2762,\n    "name":"鍞愭渤鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2763,\n    "name":"瀹涘煄鍖�",\n    "superregion_id":252\n
}
 {
	\n    "id":2764,\n    "name":"鏂伴噹鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2765,\n    "name":"鏂瑰煄鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2766,\n    "name":"妗愭煆鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2767,\n    "name":"娣呭窛鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2768,\n    "name":"绀炬棗鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2769,\n    "name":"瑗垮场鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2770,\n    "name":"閭撳窞甯�",\n    "superregion_id":252\n
}
 {
	\n    "id":2771,\n    "name":"闀囧钩鍘�",\n    "superregion_id":252\n
}
 {
	\n    "id":2772,\n    "name":"澶忛倯鍘�",\n    "superregion_id":253\n
}
 {
	\n    "id":2773,\n    "name":"瀹侀櫟鍘�",\n    "superregion_id":253\n
}
 {
	\n    "id":2774,\n    "name":"鏌樺煄鍘�",\n    "superregion_id":253\n
}
 {
	\n    "id":2775,\n    "name":"姘戞潈鍘�",\n    "superregion_id":253\n
}
 {
	\n    "id":2776,\n    "name":"姘稿煄甯�",\n    "superregion_id":253\n
}
 {
	\n    "id":2777,\n    "name":"鐫㈠幙",\n    "superregion_id":253\n
}
 {
	\n    "id":2778,\n    "name":"鐫㈤槼鍖�",\n    "superregion_id":253\n
}
 {
	\n    "id":2779,\n    "name":"姊佸洯鍖�",\n    "superregion_id":253\n
}
 {
	\n    "id":2780,\n    "name":"铏炲煄鍘�",\n    "superregion_id":253\n
}
 {
	\n    "id":2781,\n    "name":"鍏夊北鍘�",\n    "superregion_id":254\n
}
 {
	\n    "id":2782,\n    "name":"鍟嗗煄鍘�",\n    "superregion_id":254\n
}
 {
	\n    "id":2783,\n    "name":"鍥哄鍘�",\n    "superregion_id":254\n
}
 {
	\n    "id":2784,\n    "name":"骞虫ˉ鍖�",\n    "superregion_id":254\n
}
 {
	\n    "id":2785,\n    "name":"鎭幙",\n    "superregion_id":254\n
}
 {
	\n    "id":2786,\n    "name":"鏂板幙",\n    "superregion_id":254\n
}
 {
	\n    "id":2787,\n    "name":"娴夋渤鍖�",\n    "superregion_id":254\n
}
 {
	\n    "id":2788,\n    "name":"娣花鍘�",\n    "superregion_id":254\n
}
 {
	\n    "id":2789,\n    "name":"娼㈠窛鍘�",\n    "superregion_id":254\n
}
 {
	\n    "id":2790,\n    "name":"缃楀北鍘�",\n    "superregion_id":254\n
}
 {
	\n    "id":2791,\n    "name":"鍟嗘按鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2792,\n    "name":"澶悍鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2793,\n    "name":"宸濇眹鍖�",\n    "superregion_id":255\n
}
 {
	\n    "id":2794,\n    "name":"鎵舵矡鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2795,\n    "name":"娌堜笜鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2796,\n    "name":"娣槼鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2797,\n    "name":"瑗垮崕鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2798,\n    "name":"閮稿煄鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2799,\n    "name":"椤瑰煄甯�",\n    "superregion_id":255\n
}
 {
	\n    "id":2800,\n    "name":"楣块倯鍘�",\n    "superregion_id":255\n
}
 {
	\n    "id":2801,\n    "name":"涓婅敗鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2802,\n    "name":"骞宠垎鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2803,\n    "name":"鏂拌敗鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2804,\n    "name":"姝ｉ槼鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2805,\n    "name":"姹濆崡鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2806,\n    "name":"娉岄槼鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2807,\n    "name":"纭北鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2808,\n    "name":"瑗垮钩鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2809,\n    "name":"閬傚钩鍘�",\n    "superregion_id":256\n
}
 {
	\n    "id":2810,\n    "name":"椹垮煄鍖�",\n    "superregion_id":256\n
}
 {
	\n    "id":2811,\n    "name":"娴庢簮甯�",\n    "superregion_id":257\n
}
 {
	\n    "id":2812,\n    "name":"涓滆タ婀栧尯",\n    "superregion_id":258\n
}
 {
	\n    "id":2813,\n    "name":"鏂版床鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2814,\n    "name":"姝︽槍鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2815,\n    "name":"姹夊崡鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2816,\n    "name":"姹夐槼鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2817,\n    "name":"姹熷鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2818,\n    "name":"姹熷哺鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2819,\n    "name":"姹熸眽鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2820,\n    "name":"娲北鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2821,\n    "name":"纭氬彛鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2822,\n    "name":"钄＄敻鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2823,\n    "name":"闈掑北鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2824,\n    "name":"榛勯檪鍖�",\n    "superregion_id":258\n
}
 {
	\n    "id":2825,\n    "name":"涓嬮檰鍖�",\n    "superregion_id":259\n
}
 {
	\n    "id":2826,\n    "name":"澶у喍甯�",\n    "superregion_id":259\n
}
 {
	\n    "id":2827,\n    "name":"瑗垮灞卞尯",\n    "superregion_id":259\n
}
 {
	\n    "id":2828,\n    "name":"閾佸北鍖�",\n    "superregion_id":259\n
}
 {
	\n    "id":2829,\n    "name":"闃虫柊鍘�",\n    "superregion_id":259\n
}
 {
	\n    "id":2830,\n    "name":"榛勭煶娓尯",\n    "superregion_id":259\n
}
 {
	\n    "id":2831,\n    "name":"涓规睙鍙ｅ競",\n    "superregion_id":260\n
}
 {
	\n    "id":2832,\n    "name":"寮犳咕鍖�",\n    "superregion_id":260\n
}
 {
	\n    "id":2833,\n    "name":"鎴垮幙",\n    "superregion_id":260\n
}
 {
	\n    "id":2834,\n    "name":"绔瑰北鍘�",\n    "superregion_id":260\n
}
 {
	\n    "id":2835,\n    "name":"绔规邯鍘�",\n    "superregion_id":260\n
}
 {
	\n    "id":2836,\n    "name":"鑼呯鍖�",\n    "superregion_id":260\n
}
 {
	\n    "id":2837,\n    "name":"閮у幙",\n    "superregion_id":260\n
}
 {
	\n    "id":2838,\n    "name":"閮цタ鍘�",\n    "superregion_id":260\n
}
 {
	\n    "id":2839,\n    "name":"浜斿嘲鍦熷鏃忚嚜娌诲幙",\n    "superregion_id":261\n
}
 {
	\n    "id":2840,\n    "name":"浼嶅宀楀尯",\n    "superregion_id":261\n
}
 {
	\n    "id":2841,\n    "name":"鍏村北鍘�",\n    "superregion_id":261\n
}
 {
	\n    "id":2842,\n    "name":"澶烽櫟鍖�",\n    "superregion_id":261\n
}
 {
	\n    "id":2843,\n    "name":"瀹滈兘甯�",\n    "superregion_id":261\n
}
 {
	\n    "id":2844,\n    "name":"褰撻槼甯�",\n    "superregion_id":261\n
}
 {
	\n    "id":2845,\n    "name":"鏋濇睙甯�",\n    "superregion_id":261\n
}
 {
	\n    "id":2846,\n    "name":"鐐瑰啗鍖�",\n    "superregion_id":261\n
}
 {
	\n    "id":2847,\n    "name":"绉綊鍘�",\n    "superregion_id":261\n
}
 {
	\n    "id":2848,\n    "name":"鐚囦涵鍖�",\n    "superregion_id":261\n
}
 {
	\n    "id":2849,\n    "name":"瑗块櫟鍖�",\n    "superregion_id":261\n
}
 {
	\n    "id":2850,\n    "name":"杩滃畨鍘�",\n    "superregion_id":261\n
}
 {
	\n    "id":2851,\n    "name":"闀块槼鍦熷鏃忚嚜娌诲幙",\n    "superregion_id":261\n
}
 {
	\n    "id":2852,\n    "name":"淇濆悍鍘�",\n    "superregion_id":262\n
}
 {
	\n    "id":2853,\n    "name":"鍗楁汲鍘�",\n    "superregion_id":262\n
}
 {
	\n    "id":2854,\n    "name":"瀹滃煄甯�",\n    "superregion_id":262\n
}
 {
	\n    "id":2855,\n    "name":"鏋ｉ槼甯�",\n    "superregion_id":262\n
}
 {
	\n    "id":2856,\n    "name":"妯婂煄鍖�",\n    "superregion_id":262\n
}
 {
	\n    "id":2857,\n    "name":"鑰佹渤鍙ｅ競",\n    "superregion_id":262\n
}
 {
	\n    "id":2858,\n    "name":"瑗勫煄鍖�",\n    "superregion_id":262\n
}
 {
	\n    "id":2859,\n    "name":"瑗勯槼鍖�",\n    "superregion_id":262\n
}
 {
	\n    "id":2860,\n    "name":"璋峰煄鍘�",\n    "superregion_id":262\n
}
 {
	\n    "id":2861,\n    "name":"鍗庡鍖�",\n    "superregion_id":263\n
}
 {
	\n    "id":2862,\n    "name":"姊佸瓙婀栧尯",\n    "superregion_id":263\n
}
 {
	\n    "id":2863,\n    "name":"閯傚煄鍖�",\n    "superregion_id":263\n
}
 {
	\n    "id":2864,\n    "name":"涓滃疂鍖�",\n    "superregion_id":264\n
}
 {
	\n    "id":2865,\n    "name":"浜北鍘�",\n    "superregion_id":264\n
}
 {
	\n    "id":2866,\n    "name":"鎺囧垁鍖�",\n    "superregion_id":264\n
}
 {
	\n    "id":2867,\n    "name":"娌欐磱鍘�",\n    "superregion_id":264\n
}
 {
	\n    "id":2868,\n    "name":"閽熺ゥ甯�",\n    "superregion_id":264\n
}
 {
	\n    "id":2869,\n    "name":"浜戞ⅵ鍘�",\n    "superregion_id":265\n
}
 {
	\n    "id":2870,\n    "name":"澶ф偀鍘�",\n    "superregion_id":265\n
}
 {
	\n    "id":2871,\n    "name":"瀛濆崡鍖�",\n    "superregion_id":265\n
}
 {
	\n    "id":2872,\n    "name":"瀛濇槍鍘�",\n    "superregion_id":265\n
}
 {
	\n    "id":2873,\n    "name":"瀹夐檰甯�",\n    "superregion_id":265\n
}
 {
	\n    "id":2874,\n    "name":"搴斿煄甯�",\n    "superregion_id":265\n
}
 {
	\n    "id":2875,\n    "name":"姹夊窛甯�",\n    "superregion_id":265\n
}
 {
	\n    "id":2876,\n    "name":"鍏畨鍘�",\n    "superregion_id":266\n
}
 {
	\n    "id":2877,\n    "name":"鏉炬粙甯�",\n    "superregion_id":266\n
}
 {
	\n    "id":2878,\n    "name":"姹熼櫟鍘�",\n    "superregion_id":266\n
}
 {
	\n    "id":2879,\n    "name":"娌欏競鍖�",\n    "superregion_id":266\n
}
 {
	\n    "id":2880,\n    "name":"娲箹甯�",\n    "superregion_id":266\n
}
 {
	\n    "id":2881,\n    "name":"鐩戝埄鍘�",\n    "superregion_id":266\n
}
 {
	\n    "id":2882,\n    "name":"鐭抽甯�",\n    "superregion_id":266\n
}
 {
	\n    "id":2883,\n    "name":"鑽嗗窞鍖�",\n    "superregion_id":266\n
}
 {
	\n    "id":2884,\n    "name":"鍥㈤鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2885,\n    "name":"姝︾┐甯�",\n    "superregion_id":267\n
}
 {
	\n    "id":2886,\n    "name":"娴犳按鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2887,\n    "name":"绾㈠畨鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2888,\n    "name":"缃楃敯鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2889,\n    "name":"鑻卞北鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2890,\n    "name":"钑叉槬鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2891,\n    "name":"楹诲煄甯�",\n    "superregion_id":267\n
}
 {
	\n    "id":2892,\n    "name":"榛勫窞鍖�",\n    "superregion_id":267\n
}
 {
	\n    "id":2893,\n    "name":"榛勬鍘�",\n    "superregion_id":267\n
}
 {
	\n    "id":2894,\n    "name":"鍜稿畨鍖�",\n    "superregion_id":268\n
}
 {
	\n    "id":2895,\n    "name":"鍢夐奔鍘�",\n    "superregion_id":268\n
}
 {
	\n    "id":2896,\n    "name":"宕囬槼鍘�",\n    "superregion_id":268\n
}
 {
	\n    "id":2897,\n    "name":"璧ゅ甯�",\n    "superregion_id":268\n
}
 {
	\n    "id":2898,\n    "name":"閫氬煄鍘�",\n    "superregion_id":268\n
}
 {
	\n    "id":2899,\n    "name":"閫氬北鍘�",\n    "superregion_id":268\n
}
 {
	\n    "id":2900,\n    "name":"骞挎按甯�",\n    "superregion_id":269\n
}
 {
	\n    "id":2901,\n    "name":"鏇鹃兘鍖�",\n    "superregion_id":269\n
}
 {
	\n    "id":2902,\n    "name":"鍒╁窛甯�",\n    "superregion_id":270\n
}
 {
	\n    "id":2903,\n    "name":"鍜镐赴鍘�",\n    "superregion_id":270\n
}
 {
	\n    "id":2904,\n    "name":"瀹ｆ仼鍘�",\n    "superregion_id":270\n
}
 {
	\n    "id":2905,\n    "name":"宸翠笢鍘�",\n    "superregion_id":270\n
}
 {
	\n    "id":2906,\n    "name":"寤哄鍘�",\n    "superregion_id":270\n
}
 {
	\n    "id":2907,\n    "name":"鎭╂柦甯�",\n    "superregion_id":270\n
}
 {
	\n    "id":2908,\n    "name":"鏉ュ嚖鍘�",\n    "superregion_id":270\n
}
 {
	\n    "id":2909,\n    "name":"楣ゅ嘲鍘�",\n    "superregion_id":270\n
}
 {
	\n    "id":2910,\n    "name":"浠欐甯�",\n    "superregion_id":271\n
}
 {
	\n    "id":2911,\n    "name":"娼滄睙甯�",\n    "superregion_id":272\n
}
 {
	\n    "id":2912,\n    "name":"澶╅棬甯�",\n    "superregion_id":273\n
}
 {
	\n    "id":2913,\n    "name":"绁炲啘鏋舵灄鍖�",\n    "superregion_id":274\n
}
 {
	\n    "id":2914,\n    "name":"澶╁績鍖�",\n    "superregion_id":275\n
}
 {
	\n    "id":2915,\n    "name":"瀹佷埂鍘�",\n    "superregion_id":275\n
}
 {
	\n    "id":2916,\n    "name":"宀抽簱鍖�",\n    "superregion_id":275\n
}
 {
	\n    "id":2917,\n    "name":"寮€绂忓尯",\n    "superregion_id":275\n
}
 {
	\n    "id":2918,\n    "name":"鏈涘煄鍖�",\n    "superregion_id":275\n
}
 {
	\n    "id":2919,\n    "name":"娴忛槼甯�",\n    "superregion_id":275\n
}
 {
	\n    "id":2920,\n    "name":"鑺欒搲鍖�",\n    "superregion_id":275\n
}
 {
	\n    "id":2921,\n    "name":"闀挎矙鍘�",\n    "superregion_id":275\n
}
 {
	\n    "id":2922,\n    "name":"闆ㄨ姳鍖�",\n    "superregion_id":275\n
}
 {
	\n    "id":2923,\n    "name":"澶╁厓鍖�",\n    "superregion_id":276\n
}
 {
	\n    "id":2924,\n    "name":"鏀稿幙",\n    "superregion_id":276\n
}
 {
	\n    "id":2925,\n    "name":"鏍床鍘�",\n    "superregion_id":276\n
}
 {
	\n    "id":2926,\n    "name":"鐐庨櫟鍘�",\n    "superregion_id":276\n
}
 {
	\n    "id":2927,\n    "name":"鐭冲嘲鍖�",\n    "superregion_id":276\n
}
 {
	\n    "id":2928,\n    "name":"鑺︽窞鍖�",\n    "superregion_id":276\n
}
 {
	\n    "id":2929,\n    "name":"鑼堕櫟鍘�",\n    "superregion_id":276\n
}
 {
	\n    "id":2930,\n    "name":"鑽峰鍖�",\n    "superregion_id":276\n
}
 {
	\n    "id":2931,\n    "name":"閱撮櫟甯�",\n    "superregion_id":276\n
}
 {
	\n    "id":2932,\n    "name":"宀冲鍖�",\n    "superregion_id":277\n
}
 {
	\n    "id":2933,\n    "name":"婀樹埂甯�",\n    "superregion_id":277\n
}
 {
	\n    "id":2934,\n    "name":"婀樻江鍘�",\n    "superregion_id":277\n
}
 {
	\n    "id":2935,\n    "name":"闆ㄦ箹鍖�",\n    "superregion_id":277\n
}
 {
	\n    "id":2936,\n    "name":"闊跺北甯�",\n    "superregion_id":277\n
}
 {
	\n    "id":2937,\n    "name":"鍗楀渤鍖�",\n    "superregion_id":278\n
}
 {
	\n    "id":2938,\n    "name":"甯稿畞甯�",\n    "superregion_id":278\n
}
 {
	\n    "id":2939,\n    "name":"鐝犳櫀鍖�",\n    "superregion_id":278\n
}
 {
	\n    "id":2940,\n    "name":"鐭抽紦鍖�",\n    "superregion_id":278\n
}
 {
	\n    "id":2941,\n    "name":"绁佷笢鍘�",\n    "superregion_id":278\n
}
 {
	\n    "id":2942,\n    "name":"鑰掗槼甯�",\n    "superregion_id":278\n
}
 {
	\n    "id":2943,\n    "name":"钂告箻鍖�",\n    "superregion_id":278\n
}
 {
	\n    "id":2944,\n    "name":"琛′笢鍘�",\n    "superregion_id":278\n
}
 {
	\n    "id":2945,\n    "name":"琛″崡鍘�",\n    "superregion_id":278\n
}
 {
	\n    "id":2946,\n    "name":"琛″北鍘�",\n    "superregion_id":278\n
}
 {
	\n    "id":2947,\n    "name":"琛￠槼鍘�",\n    "superregion_id":278\n
}
 {
	\n    "id":2948,\n    "name":"闆佸嘲鍖�",\n    "superregion_id":278\n
}
 {
	\n    "id":2949,\n    "name":"鍖楀鍖�",\n    "superregion_id":279\n
}
 {
	\n    "id":2950,\n    "name":"鍙屾竻鍖�",\n    "superregion_id":279\n
}
 {
	\n    "id":2951,\n    "name":"鍩庢鑻楁棌鑷不鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2952,\n    "name":"澶хゥ鍖�",\n    "superregion_id":279\n
}
 {
	\n    "id":2953,\n    "name":"鏂板畞鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2954,\n    "name":"鏂伴偟鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2955,\n    "name":"姝﹀唸甯�",\n    "superregion_id":279\n
}
 {
	\n    "id":2956,\n    "name":"娲炲彛鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2957,\n    "name":"缁ュ畞鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2958,\n    "name":"閭典笢鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2959,\n    "name":"閭甸槼鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2960,\n    "name":"闅嗗洖鍘�",\n    "superregion_id":279\n
}
 {
	\n    "id":2961,\n    "name":"涓存箻甯�",\n    "superregion_id":280\n
}
 {
	\n    "id":2962,\n    "name":"浜戞邯鍖�",\n    "superregion_id":280\n
}
 {
	\n    "id":2963,\n    "name":"鍗庡鍘�",\n    "superregion_id":280\n
}
 {
	\n    "id":2964,\n    "name":"鍚涘北鍖�",\n    "superregion_id":280\n
}
 {
	\n    "id":2965,\n    "name":"宀抽槼鍘�",\n    "superregion_id":280\n
}
 {
	\n    "id":2966,\n    "name":"宀抽槼妤煎尯",\n    "superregion_id":280\n
}
 {
	\n    "id":2967,\n    "name":"骞虫睙鍘�",\n    "superregion_id":280\n
}
 {
	\n    "id":2968,\n    "name":"姹ㄧ綏甯�",\n    "superregion_id":280\n
}
 {
	\n    "id":2969,\n    "name":"婀橀槾鍘�",\n    "superregion_id":280\n
}
 {
	\n    "id":2970,\n    "name":"涓存晶鍘�",\n    "superregion_id":281\n
}
 {
	\n    "id":2971,\n    "name":"瀹変埂鍘�",\n    "superregion_id":281\n
}
 {
	\n    "id":2972,\n    "name":"妗冩簮鍘�",\n    "superregion_id":281\n
}
 {
	\n    "id":2973,\n    "name":"姝﹂櫟鍖�",\n    "superregion_id":281\n
}
 {
	\n    "id":2974,\n    "name":"姹夊鍘�",\n    "superregion_id":281\n
}
 {
	\n    "id":2975,\n    "name":"娲ュ競甯�",\n    "superregion_id":281\n
}
 {
	\n    "id":2976,\n    "name":"婢у幙",\n    "superregion_id":281\n
}
 {
	\n    "id":2977,\n    "name":"鐭抽棬鍘�",\n    "superregion_id":281\n
}
 {
	\n    "id":2978,\n    "name":"榧庡煄鍖�",\n    "superregion_id":281\n
}
 {
	\n    "id":2979,\n    "name":"鎱堝埄鍘�",\n    "superregion_id":282\n
}
 {
	\n    "id":2980,\n    "name":"妗戞鍘�",\n    "superregion_id":282\n
}
 {
	\n    "id":2981,\n    "name":"姝﹂櫟婧愬尯",\n    "superregion_id":282\n
}
 {
	\n    "id":2982,\n    "name":"姘稿畾鍖�",\n    "superregion_id":282\n
}
 {
	\n    "id":2983,\n    "name":"鍗楀幙",\n    "superregion_id":283\n
}
 {
	\n    "id":2984,\n    "name":"瀹夊寲鍘�",\n    "superregion_id":283\n
}
 {
	\n    "id":2985,\n    "name":"妗冩睙鍘�",\n    "superregion_id":283\n
}
 {
	\n    "id":2986,\n    "name":"娌呮睙甯�",\n    "superregion_id":283\n
}
 {
	\n    "id":2987,\n    "name":"璧勯槼鍖�",\n    "superregion_id":283\n
}
 {
	\n    "id":2988,\n    "name":"璧北鍖�",\n    "superregion_id":283\n
}
 {
	\n    "id":2989,\n    "name":"涓存鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2990,\n    "name":"鍖楁箹鍖�",\n    "superregion_id":284\n
}
 {
	\n    "id":2991,\n    "name":"鍢夌鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2992,\n    "name":"瀹変粊鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2993,\n    "name":"瀹滅珷鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2994,\n    "name":"妗備笢鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2995,\n    "name":"妗傞槼鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2996,\n    "name":"姘稿叴鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2997,\n    "name":"姹濆煄鍘�",\n    "superregion_id":284\n
}
 {
	\n    "id":2998,\n    "name":"鑻忎粰鍖�",\n    "superregion_id":284\n
}
 {
	\n    "id":2999,\n    "name":"璧勫叴甯�",\n    "superregion_id":284\n
}
 {
	\n    "id":3000,\n    "name":"涓滃畨鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3001,\n    "name":"鍐锋按婊╁尯",\n    "superregion_id":285\n
}
 {
	\n    "id":3002,\n    "name":"鍙岀墝鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3003,\n    "name":"瀹佽繙鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3004,\n    "name":"鏂扮敯鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3005,\n    "name":"姹熷崕鐟舵棌鑷不鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3006,\n    "name":"姹熸案鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3007,\n    "name":"绁侀槼鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3008,\n    "name":"钃濆北鍘�",\n    "superregion_id":285\n
}
 {
	\n    "id":3009,\n    "name":"閬撳幙",\n    "superregion_id":285\n
}
 {
	\n    "id":3010,\n    "name":"闆堕櫟鍖�",\n    "superregion_id":285\n
}
 {
	\n    "id":3011,\n    "name":"涓柟鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3012,\n    "name":"浼氬悓鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3013,\n    "name":"鏂版檭渚楁棌鑷不鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3014,\n    "name":"娌呴櫟鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3015,\n    "name":"娲睙甯�",\n    "superregion_id":286\n
}
 {
	\n    "id":3016,\n    "name":"婧嗘郸鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3017,\n    "name":"鑺锋睙渚楁棌鑷不鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3018,\n    "name":"杈版邯鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3019,\n    "name":"閫氶亾渚楁棌鑷不鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3020,\n    "name":"闈栧窞鑻楁棌渚楁棌鑷不鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3021,\n    "name":"楣ゅ煄鍖�",\n    "superregion_id":286\n
}
 {
	\n    "id":3022,\n    "name":"楹婚槼鑻楁棌鑷不鍘�",\n    "superregion_id":286\n
}
 {
	\n    "id":3023,\n    "name":"鍐锋按姹熷競",\n    "superregion_id":287\n
}
 {
	\n    "id":3024,\n    "name":"鍙屽嘲鍘�",\n    "superregion_id":287\n
}
 {
	\n    "id":3025,\n    "name":"濞勬槦鍖�",\n    "superregion_id":287\n
}
 {
	\n    "id":3026,\n    "name":"鏂板寲鍘�",\n    "superregion_id":287\n
}
 {
	\n    "id":3027,\n    "name":"娑熸簮甯�",\n    "superregion_id":287\n
}
 {
	\n    "id":3028,\n    "name":"淇濋潠鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3029,\n    "name":"鍑ゅ嚢鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3030,\n    "name":"鍙や笀鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3031,\n    "name":"鍚夐甯�",\n    "superregion_id":288\n
}
 {
	\n    "id":3032,\n    "name":"姘搁『鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3033,\n    "name":"娉告邯鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3034,\n    "name":"鑺卞灒鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3035,\n    "name":"榫欏北鍘�",\n    "superregion_id":288\n
}
 {
	\n    "id":3036,\n    "name":"钀濆矖鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3037,\n    "name":"鍗楁矙鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3038,\n    "name":"浠庡寲甯�",\n    "superregion_id":289\n
}
 {
	\n    "id":3039,\n    "name":"澧炲煄甯�",\n    "superregion_id":289\n
}
 {
	\n    "id":3040,\n    "name":"澶╂渤鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3041,\n    "name":"娴风彔鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3042,\n    "name":"鐣鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3043,\n    "name":"鐧戒簯鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3044,\n    "name":"鑺遍兘鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3045,\n    "name":"鑽旀咕鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3046,\n    "name":"瓒婄鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3047,\n    "name":"榛勫煍鍖�",\n    "superregion_id":289\n
}
 {
	\n    "id":3048,\n    "name":"涔愭槍甯�",\n    "superregion_id":290\n
}
 {
	\n    "id":3049,\n    "name":"涔虫簮鐟舵棌鑷不鍘�",\n    "superregion_id":290\n
}
 {
	\n    "id":3050,\n    "name":"浠佸寲鍘�",\n    "superregion_id":290\n
}
 {
	\n    "id":3051,\n    "name":"鍗楅泟甯�",\n    "superregion_id":290\n
}
 {
	\n    "id":3052,\n    "name":"濮嬪叴鍘�",\n    "superregion_id":290\n
}
 {
	\n    "id":3053,\n    "name":"鏂颁赴鍘�",\n    "superregion_id":290\n
}
 {
	\n    "id":3054,\n    "name":"鏇叉睙鍖�",\n    "superregion_id":290\n
}
 {
	\n    "id":3055,\n    "name":"姝︽睙鍖�",\n    "superregion_id":290\n
}
 {
	\n    "id":3056,\n    "name":"娴堟睙鍖�",\n    "superregion_id":290\n
}
 {
	\n    "id":3057,\n    "name":"缈佹簮鍘�",\n    "superregion_id":290\n
}
 {
	\n    "id":3058,\n    "name":"鍗楀北鍖�",\n    "superregion_id":291\n
}
 {
	\n    "id":3059,\n    "name":"瀹濆畨鍖�",\n    "superregion_id":291\n
}
 {
	\n    "id":3060,\n    "name":"鐩愮敯鍖�",\n    "superregion_id":291\n
}
 {
	\n    "id":3061,\n    "name":"绂忕敯鍖�",\n    "superregion_id":291\n
}
 {
	\n    "id":3062,\n    "name":"缃楁箹鍖�",\n    "superregion_id":291\n
}
 {
	\n    "id":3063,\n    "name":"榫欏矖鍖�",\n    "superregion_id":291\n
}
 {
	\n    "id":3064,\n    "name":"鏂楅棬鍖�",\n    "superregion_id":292\n
}
 {
	\n    "id":3065,\n    "name":"閲戞咕鍖�",\n    "superregion_id":292\n
}
 {
	\n    "id":3066,\n    "name":"棣欐床鍖�",\n    "superregion_id":292\n
}
 {
	\n    "id":3067,\n    "name":"鍗楁境鍘�",\n    "superregion_id":293\n
}
 {
	\n    "id":3068,\n    "name":"娼崡鍖�",\n    "superregion_id":293\n
}
 {
	\n    "id":3069,\n    "name":"娼槼鍖�",\n    "superregion_id":293\n
}
 {
	\n    "id":3070,\n    "name":"婢勬捣鍖�",\n    "superregion_id":293\n
}
 {
	\n    "id":3071,\n    "name":"婵犳睙鍖�",\n    "superregion_id":293\n
}
 {
	\n    "id":3072,\n    "name":"閲戝钩鍖�",\n    "superregion_id":293\n
}
 {
	\n    "id":3073,\n    "name":"榫欐箹鍖�",\n    "superregion_id":293\n
}
 {
	\n    "id":3074,\n    "name":"涓夋按鍖�",\n    "superregion_id":294\n
}
 {
	\n    "id":3075,\n    "name":"鍗楁捣鍖�",\n    "superregion_id":294\n
}
 {
	\n    "id":3076,\n    "name":"绂呭煄鍖�",\n    "superregion_id":294\n
}
 {
	\n    "id":3077,\n    "name":"椤哄痉鍖�",\n    "superregion_id":294\n
}
 {
	\n    "id":3078,\n    "name":"楂樻槑鍖�",\n    "superregion_id":294\n
}
 {
	\n    "id":3079,\n    "name":"鍙板北甯�",\n    "superregion_id":295\n
}
 {
	\n    "id":3080,\n    "name":"寮€骞冲競",\n    "superregion_id":295\n
}
 {
	\n    "id":3081,\n    "name":"鎭╁钩甯�",\n    "superregion_id":295\n
}
 {
	\n    "id":3082,\n    "name":"鏂颁細鍖�",\n    "superregion_id":295\n
}
 {
	\n    "id":3083,\n    "name":"姹熸捣鍖�",\n    "superregion_id":295\n
}
 {
	\n    "id":3084,\n    "name":"钃睙鍖�",\n    "superregion_id":295\n
}
 {
	\n    "id":3085,\n    "name":"楣ゅ北甯�",\n    "superregion_id":295\n
}
 {
	\n    "id":3086,\n    "name":"鍚村窛甯�",\n    "superregion_id":296\n
}
 {
	\n    "id":3087,\n    "name":"鍧″ご鍖�",\n    "superregion_id":296\n
}
 {
	\n    "id":3088,\n    "name":"寤夋睙甯�",\n    "superregion_id":296\n
}
 {
	\n    "id":3089,\n    "name":"寰愰椈鍘�",\n    "superregion_id":296\n
}
 {
	\n    "id":3090,\n    "name":"璧ゅ潕鍖�",\n    "superregion_id":296\n
}
 {
	\n    "id":3091,\n    "name":"閬傛邯鍘�",\n    "superregion_id":296\n
}
 {
	\n    "id":3092,\n    "name":"闆峰窞甯�",\n    "superregion_id":296\n
}
 {
	\n    "id":3093,\n    "name":"闇炲北鍖�",\n    "superregion_id":296\n
}
 {
	\n    "id":3094,\n    "name":"楹荤珷鍖�",\n    "superregion_id":296\n
}
 {
	\n    "id":3095,\n    "name":"淇″疁甯�",\n    "superregion_id":297\n
}
 {
	\n    "id":3096,\n    "name":"鍖栧窞甯�",\n    "superregion_id":297\n
}
 {
	\n    "id":3097,\n    "name":"鐢电櫧鍘�",\n    "superregion_id":297\n
}
 {
	\n    "id":3098,\n    "name":"鑼傚崡鍖�",\n    "superregion_id":297\n
}
 {
	\n    "id":3099,\n    "name":"鑼傛腐鍖�",\n    "superregion_id":297\n
}
 {
	\n    "id":3100,\n    "name":"楂樺窞甯�",\n    "superregion_id":297\n
}
 {
	\n    "id":3101,\n    "name":"鍥涗細甯�",\n    "superregion_id":298\n
}
 {
	\n    "id":3102,\n    "name":"灏佸紑鍘�",\n    "superregion_id":298\n
}
 {
	\n    "id":3103,\n    "name":"骞垮畞鍘�",\n    "superregion_id":298\n
}
 {
	\n    "id":3104,\n    "name":"寰峰簡鍘�",\n    "superregion_id":298\n
}
 {
	\n    "id":3105,\n    "name":"鎬€闆嗗幙",\n    "superregion_id":298\n
}
 {
	\n    "id":3106,\n    "name":"绔窞鍖�",\n    "superregion_id":298\n
}
 {
	\n    "id":3107,\n    "name":"楂樿甯�",\n    "superregion_id":298\n
}
 {
	\n    "id":3108,\n    "name":"榧庢箹鍖�",\n    "superregion_id":298\n
}
 {
	\n    "id":3109,\n    "name":"鍗氱綏鍘�",\n    "superregion_id":299\n
}
 {
	\n    "id":3110,\n    "name":"鎯犱笢鍘�",\n    "superregion_id":299\n
}
 {
	\n    "id":3111,\n    "name":"鎯犲煄鍖�",\n    "superregion_id":299\n
}
 {
	\n    "id":3112,\n    "name":"鎯犻槼鍖�",\n    "superregion_id":299\n
}
 {
	\n    "id":3113,\n    "name":"榫欓棬鍘�",\n    "superregion_id":299\n
}
 {
	\n    "id":3114,\n    "name":"涓伴『鍘�",\n    "superregion_id":300\n
}
 {
	\n    "id":3115,\n    "name":"浜斿崕鍘�",\n    "superregion_id":300\n
}
 {
	\n    "id":3116,\n    "name":"鍏村畞甯�",\n    "superregion_id":300\n
}
 {
	\n    "id":3117,\n    "name":"澶у煍鍘�",\n    "superregion_id":300\n
}
 {
	\n    "id":3118,\n    "name":"骞宠繙鍘�",\n    "superregion_id":300\n
}
 {
	\n    "id":3119,\n    "name":"姊呭幙",\n    "superregion_id":300\n
}
 {
	\n    "id":3120,\n    "name":"姊呮睙鍖�",\n    "superregion_id":300\n
}
 {
	\n    "id":3121,\n    "name":"钑夊箔鍘�",\n    "superregion_id":300\n
}
 {
	\n    "id":3122,\n    "name":"鍩庡尯",\n    "superregion_id":301\n
}
 {
	\n    "id":3123,\n    "name":"娴蜂赴鍘�",\n    "superregion_id":301\n
}
 {
	\n    "id":3124,\n    "name":"闄嗕赴甯�",\n    "superregion_id":301\n
}
 {
	\n    "id":3125,\n    "name":"闄嗘渤鍘�",\n    "superregion_id":301\n
}
 {
	\n    "id":3126,\n    "name":"涓滄簮鍘�",\n    "superregion_id":302\n
}
 {
	\n    "id":3127,\n    "name":"鍜屽钩鍘�",\n    "superregion_id":302\n
}
 {
	\n    "id":3128,\n    "name":"婧愬煄鍖�",\n    "superregion_id":302\n
}
 {
	\n    "id":3129,\n    "name":"绱噾鍘�",\n    "superregion_id":302\n
}
 {
	\n    "id":3130,\n    "name":"杩炲钩鍘�",\n    "superregion_id":302\n
}
 {
	\n    "id":3131,\n    "name":"榫欏窛鍘�",\n    "superregion_id":302\n
}
 {
	\n    "id":3132,\n    "name":"姹熷煄鍖�",\n    "superregion_id":303\n
}
 {
	\n    "id":3133,\n    "name":"闃充笢鍘�",\n    "superregion_id":303\n
}
 {
	\n    "id":3134,\n    "name":"闃虫槬甯�",\n    "superregion_id":303\n
}
 {
	\n    "id":3135,\n    "name":"闃宠タ鍘�",\n    "superregion_id":303\n
}
 {
	\n    "id":3136,\n    "name":"浣涘唸鍘�",\n    "superregion_id":304\n
}
 {
	\n    "id":3137,\n    "name":"娓呭煄鍖�",\n    "superregion_id":304\n
}
 {
	\n    "id":3138,\n    "name":"娓呮柊鍖�",\n    "superregion_id":304\n
}
 {
	\n    "id":3139,\n    "name":"鑻卞痉甯�",\n    "superregion_id":304\n
}
 {
	\n    "id":3140,\n    "name":"杩炲崡鐟舵棌鑷不鍘�",\n    "superregion_id":304\n
}
 {
	\n    "id":3141,\n    "name":"杩炲北澹棌鐟舵棌鑷不鍘�",\n    "superregion_id":304\n
}
 {
	\n    "id":3142,\n    "name":"杩炲窞甯�",\n    "superregion_id":304\n
}
 {
	\n    "id":3143,\n    "name":"闃冲北鍘�",\n    "superregion_id":304\n
}
 {
	\n    "id":3144,\n    "name":"涓滆帪甯�",\n    "superregion_id":305\n
}
 {
	\n    "id":3145,\n    "name":"涓北甯�",\n    "superregion_id":306\n
}
 {
	\n    "id":3146,\n    "name":"婀樻ˉ鍖�",\n    "superregion_id":307\n
}
 {
	\n    "id":3147,\n    "name":"娼畨鍖�",\n    "superregion_id":307\n
}
 {
	\n    "id":3148,\n    "name":"楗跺钩鍘�",\n    "superregion_id":307\n
}
 {
	\n    "id":3149,\n    "name":"鎯犳潵鍘�",\n    "superregion_id":308\n
}
 {
	\n    "id":3150,\n    "name":"鎻笢鍖�",\n    "superregion_id":308\n
}
 {
	\n    "id":3151,\n    "name":"鎻タ鍘�",\n    "superregion_id":308\n
}
 {
	\n    "id":3152,\n    "name":"鏅畞甯�",\n    "superregion_id":308\n
}
 {
	\n    "id":3153,\n    "name":"姒曞煄鍖�",\n    "superregion_id":308\n
}
 {
	\n    "id":3154,\n    "name":"浜戝煄鍖�",\n    "superregion_id":309\n
}
 {
	\n    "id":3155,\n    "name":"浜戝畨鍘�",\n    "superregion_id":309\n
}
 {
	\n    "id":3156,\n    "name":"鏂板叴鍘�",\n    "superregion_id":309\n
}
 {
	\n    "id":3157,\n    "name":"缃楀畾甯�",\n    "superregion_id":309\n
}
 {
	\n    "id":3158,\n    "name":"閮佸崡鍘�",\n    "superregion_id":309\n
}
 {
	\n    "id":3159,\n    "name":"涓婃灄鍘�",\n    "superregion_id":310\n
}
 {
	\n    "id":3160,\n    "name":"鍏村畞鍖�",\n    "superregion_id":310\n
}
 {
	\n    "id":3161,\n    "name":"瀹鹃槼鍘�",\n    "superregion_id":310\n
}
 {
	\n    "id":3162,\n    "name":"妯幙",\n    "superregion_id":310\n
}
 {
	\n    "id":3163,\n    "name":"姝﹂福鍘�",\n    "superregion_id":310\n
}
 {
	\n    "id":3164,\n    "name":"姹熷崡鍖�",\n    "superregion_id":310\n
}
 {
	\n    "id":3165,\n    "name":"鑹簡鍖�",\n    "superregion_id":310\n
}
 {
	\n    "id":3166,\n    "name":"瑗夸埂濉樺尯",\n    "superregion_id":310\n
}
 {
	\n    "id":3167,\n    "name":"閭曞畞鍖�",\n    "superregion_id":310\n
}
 {
	\n    "id":3168,\n    "name":"闅嗗畨鍘�",\n    "superregion_id":310\n
}
 {
	\n    "id":3169,\n    "name":"闈掔鍖�",\n    "superregion_id":310\n
}
 {
	\n    "id":3170,\n    "name":"椹北鍘�",\n    "superregion_id":310\n
}
 {
	\n    "id":3171,\n    "name":"涓夋睙渚楁棌鑷不鍘�",\n    "superregion_id":311\n
}
 {
	\n    "id":3172,\n    "name":"鍩庝腑鍖�",\n    "superregion_id":311\n
}
 {
	\n    "id":3173,\n    "name":"鏌冲寳鍖�",\n    "superregion_id":311\n
}
 {
	\n    "id":3174,\n    "name":"鏌冲崡鍖�",\n    "superregion_id":311\n
}
 {
	\n    "id":3175,\n    "name":"鏌冲煄鍘�",\n    "superregion_id":311\n
}
 {
	\n    "id":3176,\n    "name":"鏌虫睙鍘�",\n    "superregion_id":311\n
}
 {
	\n    "id":3177,\n    "name":"铻嶅畨鍘�",\n    "superregion_id":311\n
}
 {
	\n    "id":3178,\n    "name":"铻嶆按鑻楁棌鑷不鍘�",\n    "superregion_id":311\n
}
 {
	\n    "id":3179,\n    "name":"楸煎嘲鍖�",\n    "superregion_id":311\n
}
 {
	\n    "id":3180,\n    "name":"楣垮鍘�",\n    "superregion_id":311\n
}
 {
	\n    "id":3181,\n    "name":"涓冩槦鍖�",\n    "superregion_id":312\n
}
 {
	\n    "id":3182,\n    "name":"涓存鍖�",\n    "superregion_id":312\n
}
 {
	\n    "id":3183,\n    "name":"鍏ㄥ窞鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3184,\n    "name":"鍏村畨鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3185,\n    "name":"鍙犲僵鍖�",\n    "superregion_id":312\n
}
 {
	\n    "id":3186,\n    "name":"骞充箰鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3187,\n    "name":"鎭煄鐟舵棌鑷不鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3188,\n    "name":"姘哥鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3189,\n    "name":"鐏岄槼鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3190,\n    "name":"鐏靛窛鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3191,\n    "name":"绉€宄板尯",\n    "superregion_id":312\n
}
 {
	\n    "id":3192,\n    "name":"鑽旀郸鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3193,\n    "name":"璞″北鍖�",\n    "superregion_id":312\n
}
 {
	\n    "id":3194,\n    "name":"璧勬簮鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3195,\n    "name":"闃虫湐鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3196,\n    "name":"闆佸北鍖�",\n    "superregion_id":312\n
}
 {
	\n    "id":3197,\n    "name":"榫欒儨鍚勬棌鑷不鍘�",\n    "superregion_id":312\n
}
 {
	\n    "id":3198,\n    "name":"涓囩鍖�",\n    "superregion_id":313\n
}
 {
	\n    "id":3199,\n    "name":"宀戞邯甯�",\n    "superregion_id":313\n
}
 {
	\n    "id":3200,\n    "name":"鑻嶆ⅶ鍘�",\n    "superregion_id":313\n
}
 {
	\n    "id":3201,\n    "name":"钂欏北鍘�",\n    "superregion_id":313\n
}
 {
	\n    "id":3202,\n    "name":"钘ゅ幙",\n    "superregion_id":313\n
}
 {
	\n    "id":3203,\n    "name":"铦跺北鍖�",\n    "superregion_id":313\n
}
 {
	\n    "id":3204,\n    "name":"闀挎床鍖�",\n    "superregion_id":313\n
}
 {
	\n    "id":3205,\n    "name":"鍚堟郸鍘�",\n    "superregion_id":314\n
}
 {
	\n    "id":3206,\n    "name":"娴峰煄鍖�",\n    "superregion_id":314\n
}
 {
	\n    "id":3207,\n    "name":"閾佸北娓尯",\n    "superregion_id":314\n
}
 {
	\n    "id":3208,\n    "name":"閾舵捣鍖�",\n    "superregion_id":314\n
}
 {
	\n    "id":3209,\n    "name":"涓婃€濆幙",\n    "superregion_id":315\n
}
 {
	\n    "id":3210,\n    "name":"涓滃叴甯�",\n    "superregion_id":315\n
}
 {
	\n    "id":3211,\n    "name":"娓彛鍖�",\n    "superregion_id":315\n
}
 {
	\n    "id":3212,\n    "name":"闃插煄鍖�",\n    "superregion_id":315\n
}
 {
	\n    "id":3213,\n    "name":"娴﹀寳鍘�",\n    "superregion_id":316\n
}
 {
	\n    "id":3214,\n    "name":"鐏靛北鍘�",\n    "superregion_id":316\n
}
 {
	\n    "id":3215,\n    "name":"閽﹀寳鍖�",\n    "superregion_id":316\n
}
 {
	\n    "id":3216,\n    "name":"閽﹀崡鍖�",\n    "superregion_id":316\n
}
 {
	\n    "id":3217,\n    "name":"骞冲崡鍘�",\n    "superregion_id":317\n
}
 {
	\n    "id":3218,\n    "name":"妗傚钩甯�",\n    "superregion_id":317\n
}
 {
	\n    "id":3219,\n    "name":"娓寳鍖�",\n    "superregion_id":317\n
}
 {
	\n    "id":3220,\n    "name":"娓崡鍖�",\n    "superregion_id":317\n
}
 {
	\n    "id":3221,\n    "name":"瑕冨鍖�",\n    "superregion_id":317\n
}
 {
	\n    "id":3222,\n    "name":"鍏翠笟鍘�",\n    "superregion_id":318\n
}
 {
	\n    "id":3223,\n    "name":"鍖楁祦甯�",\n    "superregion_id":318\n
}
 {
	\n    "id":3224,\n    "name":"鍗氱櫧鍘�",\n    "superregion_id":318\n
}
 {
	\n    "id":3225,\n    "name":"瀹瑰幙",\n    "superregion_id":318\n
}
 {
	\n    "id":3226,\n    "name":"鐜夊窞鍖�",\n    "superregion_id":318\n
}
 {
	\n    "id":3227,\n    "name":"闄嗗窛鍘�",\n    "superregion_id":318\n
}
 {
	\n    "id":3228,\n    "name":"涔愪笟鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3229,\n    "name":"鍑屼簯鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3230,\n    "name":"鍙虫睙鍖�",\n    "superregion_id":319\n
}
 {
	\n    "id":3231,\n    "name":"骞虫灉鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3232,\n    "name":"寰蜂繚鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3233,\n    "name":"鐢颁笢鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3234,\n    "name":"鐢版灄鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3235,\n    "name":"鐢伴槼鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3236,\n    "name":"瑗挎灄鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3237,\n    "name":"閭ｅ潯鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3238,\n    "name":"闅嗘灄鍚勬棌鑷不鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3239,\n    "name":"闈栬タ鍘�",\n    "superregion_id":319\n
}
 {
	\n    "id":3240,\n    "name":"鍏鍖�",\n    "superregion_id":320\n
}
 {
	\n    "id":3241,\n    "name":"瀵屽窛鐟舵棌鑷不鍘�",\n    "superregion_id":320\n
}
 {
	\n    "id":3242,\n    "name":"鏄钩鍘�",\n    "superregion_id":320\n
}
 {
	\n    "id":3243,\n    "name":"閽熷北鍘�",\n    "superregion_id":320\n
}
 {
	\n    "id":3244,\n    "name":"涓滃叞鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3245,\n    "name":"鍑ゅ北鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3246,\n    "name":"鍗椾腹鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3247,\n    "name":"澶у寲鐟舵棌鑷不鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3248,\n    "name":"澶╁敞鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3249,\n    "name":"瀹滃窞甯�",\n    "superregion_id":321\n
}
 {
	\n    "id":3250,\n    "name":"宸撮┈鐟舵棌鑷不鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3251,\n    "name":"鐜睙姣涘崡鏃忚嚜娌诲幙",\n    "superregion_id":321\n
}
 {
	\n    "id":3252,\n    "name":"缃楀煄浠浆鏃忚嚜娌诲幙",\n    "superregion_id":321\n
}
 {
	\n    "id":3253,\n    "name":"閮藉畨鐟舵棌鑷不鍘�",\n    "superregion_id":321\n
}
 {
	\n    "id":3254,\n    "name":"閲戝煄姹熷尯",\n    "superregion_id":321\n
}
 {
	\n    "id":3255,\n    "name":"鍏村鍖�",\n    "superregion_id":322\n
}
 {
	\n    "id":3256,\n    "name":"鍚堝北甯�",\n    "superregion_id":322\n
}
 {
	\n    "id":3257,\n    "name":"蹇诲煄鍘�",\n    "superregion_id":322\n
}
 {
	\n    "id":3258,\n    "name":"姝﹀鍘�",\n    "superregion_id":322\n
}
 {
	\n    "id":3259,\n    "name":"璞″窞鍘�",\n    "superregion_id":322\n
}
 {
	\n    "id":3260,\n    "name":"閲戠鐟舵棌鑷不鍘�",\n    "superregion_id":322\n
}
 {
	\n    "id":3261,\n    "name":"鍑ゥ甯�",\n    "superregion_id":323\n
}
 {
	\n    "id":3262,\n    "name":"澶ф柊鍘�",\n    "superregion_id":323\n
}
 {
	\n    "id":3263,\n    "name":"澶╃瓑鍘�",\n    "superregion_id":323\n
}
 {
	\n    "id":3264,\n    "name":"瀹佹槑鍘�",\n    "superregion_id":323\n
}
 {
	\n    "id":3265,\n    "name":"鎵剁互鍘�",\n    "superregion_id":323\n
}
 {
	\n    "id":3266,\n    "name":"姹熷窞鍖�",\n    "superregion_id":323\n
}
 {
	\n    "id":3267,\n    "name":"榫欏窞鍘�",\n    "superregion_id":323\n
}
 {
	\n    "id":3268,\n    "name":"鐞煎北鍖�",\n    "superregion_id":324\n
}
 {
	\n    "id":3269,\n    "name":"绉€鑻卞尯",\n    "superregion_id":324\n
}
 {
	\n    "id":3270,\n    "name":"缇庡叞鍖�",\n    "superregion_id":324\n
}
 {
	\n    "id":3271,\n    "name":"榫欏崕鍖�",\n    "superregion_id":324\n
}
 {
	\n    "id":3272,\n    "name":"涓変簹甯�",\n    "superregion_id":325\n
}
 {
	\n    "id":3273,\n    "name":"浜旀寚灞卞競",\n    "superregion_id":326\n
}
 {
	\n    "id":3274,\n    "name":"鐞兼捣甯�",\n    "superregion_id":327\n
}
 {
	\n    "id":3275,\n    "name":"鍎嬪窞甯�",\n    "superregion_id":328\n
}
 {
	\n    "id":3276,\n    "name":"鏂囨槍甯�",\n    "superregion_id":329\n
}
 {
	\n    "id":3277,\n    "name":"涓囧畞甯�",\n    "superregion_id":330\n
}
 {
	\n    "id":3278,\n    "name":"涓滄柟甯�",\n    "superregion_id":331\n
}
 {
	\n    "id":3279,\n    "name":"瀹氬畨鍘�",\n    "superregion_id":332\n
}
 {
	\n    "id":3280,\n    "name":"灞槍鍘�",\n    "superregion_id":333\n
}
 {
	\n    "id":3281,\n    "name":"婢勮繄鍘�",\n    "superregion_id":334\n
}
 {
	\n    "id":3282,\n    "name":"涓撮珮鍘�",\n    "superregion_id":335\n
}
 {
	\n    "id":3283,\n    "name":"鐧芥矙榛庢棌鑷不鍘�",\n    "superregion_id":336\n
}
 {
	\n    "id":3284,\n    "name":"鏄屾睙榛庢棌鑷不鍘�",\n    "superregion_id":337\n
}
 {
	\n    "id":3285,\n    "name":"涔愪笢榛庢棌鑷不鍘�",\n    "superregion_id":338\n
}
 {
	\n    "id":3286,\n    "name":"闄垫按榛庢棌鑷不鍘�",\n    "superregion_id":339\n
}
 {
	\n    "id":3287,\n    "name":"淇濅涵榛庢棌鑻楁棌鑷不鍘�",\n    "superregion_id":340\n
}
 {
	\n    "id":3288,\n    "name":"鐞间腑榛庢棌鑻楁棌鑷不鍘�",\n    "superregion_id":341\n
}
 {
	\n    "id":4209,\n    "name":"鍙屾祦鍘�",\n    "superregion_id":385\n
}
 {
	\n    "id":4210,\n    "name":"澶ч倯鍘�",\n    "superregion_id":385\n
}
 {
	\n    "id":4211,\n    "name":"宕囧窞甯�",\n    "superregion_id":385\n
}
 {
	\n    "id":4212,\n    "name":"褰窞甯�",\n    "superregion_id":385\n
}
 {
	\n    "id":4213,\n    "name":"鎴愬崕鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4214,\n    "name":"鏂版触鍘�",\n    "superregion_id":385\n
}
 {
	\n    "id":4215,\n    "name":"鏂伴兘鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4216,\n    "name":"姝︿警鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4217,\n    "name":"娓╂睙鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4218,\n    "name":"钂叉睙鍘�",\n    "superregion_id":385\n
}
 {
	\n    "id":4219,\n    "name":"閭涘磧甯�",\n    "superregion_id":385\n
}
 {
	\n    "id":4220,\n    "name":"閮幙",\n    "superregion_id":385\n
}
 {
	\n    "id":4221,\n    "name":"閮芥睙鍫板競",\n    "superregion_id":385\n
}
 {
	\n    "id":4222,\n    "name":"閲戝爞鍘�",\n    "superregion_id":385\n
}
 {
	\n    "id":4223,\n    "name":"閲戠墰鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4224,\n    "name":"閿︽睙鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4225,\n    "name":"闈掔櫧姹熷尯",\n    "superregion_id":385\n
}
 {
	\n    "id":4226,\n    "name":"闈掔緤鍖�",\n    "superregion_id":385\n
}
 {
	\n    "id":4227,\n    "name":"榫欐硥椹垮尯",\n    "superregion_id":385\n
}
 {
	\n    "id":4228,\n    "name":"澶у畨鍖�",\n    "superregion_id":386\n
}
 {
	\n    "id":4229,\n    "name":"瀵岄『鍘�",\n    "superregion_id":386\n
}
 {
	\n    "id":4230,\n    "name":"娌挎哗鍖�",\n    "superregion_id":386\n
}
 {
	\n    "id":4231,\n    "name":"鑷祦浜曞尯",\n    "superregion_id":386\n
}
 {
	\n    "id":4232,\n    "name":"鑽ｅ幙",\n    "superregion_id":386\n
}
 {
	\n    "id":4233,\n    "name":"璐′簳鍖�",\n    "superregion_id":386\n
}
 {
	\n    "id":4234,\n    "name":"涓滃尯",\n    "superregion_id":387\n
}
 {
	\n    "id":4235,\n    "name":"浠佸拰鍖�",\n    "superregion_id":387\n
}
 {
	\n    "id":4236,\n    "name":"鐩愯竟鍘�",\n    "superregion_id":387\n
}
 {
	\n    "id":4237,\n    "name":"绫虫槗鍘�",\n    "superregion_id":387\n
}
 {
	\n    "id":4238,\n    "name":"瑗垮尯",\n    "superregion_id":387\n
}
 {
	\n    "id":4239,\n    "name":"鍙欐案鍘�",\n    "superregion_id":388\n
}
 {
	\n    "id":4240,\n    "name":"鍙よ敽鍘�",\n    "superregion_id":388\n
}
 {
	\n    "id":4241,\n    "name":"鍚堟睙鍘�",\n    "superregion_id":388\n
}
 {
	\n    "id":4242,\n    "name":"姹熼槼鍖�",\n    "superregion_id":388\n
}
 {
	\n    "id":4243,\n    "name":"娉稿幙",\n    "superregion_id":388\n
}
 {
	\n    "id":4244,\n    "name":"绾虫邯鍖�",\n    "superregion_id":388\n
}
 {
	\n    "id":4245,\n    "name":"榫欓┈娼尯",\n    "superregion_id":388\n
}
 {
	\n    "id":4246,\n    "name":"涓睙鍘�",\n    "superregion_id":389\n
}
 {
	\n    "id":4247,\n    "name":"浠€閭″競",\n    "superregion_id":389\n
}
 {
	\n    "id":4248,\n    "name":"骞挎眽甯�",\n    "superregion_id":389\n
}
 {
	\n    "id":4249,\n    "name":"鏃岄槼鍖�",\n    "superregion_id":389\n
}
 {
	\n    "id":4250,\n    "name":"缁电甯�",\n    "superregion_id":389\n
}
 {
	\n    "id":4251,\n    "name":"缃楁睙鍘�",\n    "superregion_id":389\n
}
 {
	\n    "id":4252,\n    "name":"涓夊彴鍘�",\n    "superregion_id":390\n
}
 {
	\n    "id":4253,\n    "name":"鍖楀窛缇屾棌鑷不鍘�",\n    "superregion_id":390\n
}
 {
	\n    "id":4254,\n    "name":"瀹夊幙",\n    "superregion_id":390\n
}
 {
	\n    "id":4255,\n    "name":"骞虫鍘�",\n    "superregion_id":390\n
}
 {
	\n    "id":4256,\n    "name":"姊撴郊鍘�",\n    "superregion_id":390\n
}
 {
	\n    "id":4257,\n    "name":"姹熸补甯�",\n    "superregion_id":390\n
}
 {
	\n    "id":4258,\n    "name":"娑煄鍖�",\n    "superregion_id":390\n
}
 {
	\n    "id":4259,\n    "name":"娓镐粰鍖�",\n    "superregion_id":390\n
}
 {
	\n    "id":4260,\n    "name":"鐩愪涵鍘�",\n    "superregion_id":390\n
}
 {
	\n    "id":4261,\n    "name":"鍏冨潩鍖�",\n    "superregion_id":391\n
}
 {
	\n    "id":4262,\n    "name":"鍒╁窞鍖�",\n    "superregion_id":391\n
}
 {
	\n    "id":4263,\n    "name":"鍓戦榿鍘�",\n    "superregion_id":391\n
}
 {
	\n    "id":4264,\n    "name":"鏃鸿媿鍘�",\n    "superregion_id":391\n
}
 {
	\n    "id":4265,\n    "name":"鏈濆ぉ鍖�",\n    "superregion_id":391\n
}
 {
	\n    "id":4266,\n    "name":"鑻嶆邯鍘�",\n    "superregion_id":391\n
}
 {
	\n    "id":4267,\n    "name":"闈掑窛鍘�",\n    "superregion_id":391\n
}
 {
	\n    "id":4268,\n    "name":"澶ц嫳鍘�",\n    "superregion_id":392\n
}
 {
	\n    "id":4269,\n    "name":"瀹夊眳鍖�",\n    "superregion_id":392\n
}
 {
	\n    "id":4270,\n    "name":"灏勬椽鍘�",\n    "superregion_id":392\n
}
 {
	\n    "id":4271,\n    "name":"鑸瑰北鍖�",\n    "superregion_id":392\n
}
 {
	\n    "id":4272,\n    "name":"钃邯鍘�",\n    "superregion_id":392\n
}
 {
	\n    "id":4273,\n    "name":"涓滃叴鍖�",\n    "superregion_id":393\n
}
 {
	\n    "id":4274,\n    "name":"濞佽繙鍘�",\n    "superregion_id":393\n
}
 {
	\n    "id":4275,\n    "name":"甯備腑鍖�",\n    "superregion_id":393\n
}
 {
	\n    "id":4276,\n    "name":"璧勪腑鍘�",\n    "superregion_id":393\n
}
 {
	\n    "id":4277,\n    "name":"闅嗘槍鍘�",\n    "superregion_id":393\n
}
 {
	\n    "id":4278,\n    "name":"浜旈€氭ˉ鍖�",\n    "superregion_id":394\n
}
 {
	\n    "id":4279,\n    "name":"浜曠爺鍘�",\n    "superregion_id":394\n
}
 {
	\n    "id":4280,\n    "name":"澶规睙鍘�",\n    "superregion_id":394\n
}
 {
	\n    "id":4281,\n    "name":"宄ㄧ湁灞卞競",\n    "superregion_id":394\n
}
 {
	\n    "id":4282,\n    "name":"宄ㄨ竟褰濇棌鑷不鍘�",\n    "superregion_id":394\n
}
 {
	\n    "id":4283,\n    "name":"甯備腑鍖�",\n    "superregion_id":394\n
}
 {
	\n    "id":4284,\n    "name":"娌愬窛鍘�",\n    "superregion_id":394\n
}
 {
	\n    "id":4285,\n    "name":"娌欐咕鍖�",\n    "superregion_id":394\n
}
 {
	\n    "id":4286,\n    "name":"鐘嶄负鍘�",\n    "superregion_id":394\n
}
 {
	\n    "id":4287,\n    "name":"閲戝彛娌冲尯",\n    "superregion_id":394\n
}
 {
	\n    "id":4288,\n    "name":"椹竟褰濇棌鑷不鍘�",\n    "superregion_id":394\n
}
 {
	\n    "id":4289,\n    "name":"浠檱鍘�",\n    "superregion_id":395\n
}
 {
	\n    "id":4291,\n    "name":"鍗楅儴鍘�",\n    "superregion_id":395\n
}
 {
	\n    "id":4292,\n    "name":"鍢夐櫟鍖�",\n    "superregion_id":395\n
}
 {
	\n    "id":4293,\n    "name":"钀ュ北鍘�",\n    "superregion_id":395\n
}
 {
	\n    "id":4294,\n    "name":"钃畨鍘�",\n    "superregion_id":395\n
}
 {
	\n    "id":4295,\n    "name":"瑗垮厖鍘�",\n    "superregion_id":395\n
}
 {
	\n    "id":4296,\n    "name":"闃嗕腑甯�",\n    "superregion_id":395\n
}
 {
	\n    "id":4297,\n    "name":"椤哄簡鍖�",\n    "superregion_id":395\n
}
 {
	\n    "id":4298,\n    "name":"楂樺潽鍖�",\n    "superregion_id":395\n
}
 {
	\n    "id":4299,\n    "name":"涓滃潯鍖�",\n    "superregion_id":396\n
}
 {
	\n    "id":4300,\n    "name":"涓规１鍘�",\n    "superregion_id":396\n
}
 {
	\n    "id":4301,\n    "name":"浠佸鍘�",\n    "superregion_id":396\n
}
 {
	\n    "id":4302,\n    "name":"褰北鍘�",\n    "superregion_id":396\n
}
 {
	\n    "id":4303,\n    "name":"娲泤鍘�",\n    "superregion_id":396\n
}
 {
	\n    "id":4304,\n    "name":"闈掔鍘�",\n    "superregion_id":396\n
}
 {
	\n    "id":4305,\n    "name":"鍏存枃鍘�",\n    "superregion_id":397\n
}
 {
	\n    "id":4306,\n    "name":"鍗楁邯鍖�",\n    "superregion_id":397\n
}
 {
	\n    "id":4307,\n    "name":"瀹滃鍘�",\n    "superregion_id":397\n
}
 {
	\n    "id":4308,\n    "name":"灞忓北鍘�",\n    "superregion_id":397\n
}
 {
	\n    "id":4309,\n    "name":"姹熷畨鍘�",\n    "superregion_id":397\n
}
 {
	\n    "id":4310,\n    "name":"鐝欏幙",\n    "superregion_id":397\n
}
 {
	\n    "id":4311,\n    "name":"绛犺繛鍘�",\n    "superregion_id":397\n
}
 {
	\n    "id":4312,\n    "name":"缈犲睆鍖�",\n    "superregion_id":397\n
}
 {
	\n    "id":4313,\n    "name":"闀垮畞鍘�",\n    "superregion_id":397\n
}
 {
	\n    "id":4314,\n    "name":"楂樺幙",\n    "superregion_id":397\n
}
 {
	\n    "id":4315,\n    "name":"鍗庤摜甯�",\n    "superregion_id":398\n
}
 {
	\n    "id":4316,\n    "name":"宀虫睜鍘�",\n    "superregion_id":398\n
}
 {
	\n    "id":4317,\n    "name":"骞垮畨鍖�",\n    "superregion_id":398\n
}
 {
	\n    "id":4318,\n    "name":"姝﹁儨鍘�",\n    "superregion_id":398\n
}
 {
	\n    "id":4319,\n    "name":"閭绘按鍘�",\n    "superregion_id":398\n
}
 {
	\n    "id":4320,\n    "name":"涓囨簮甯�",\n    "superregion_id":399\n
}
 {
	\n    "id":4321,\n    "name":"澶х鍘�",\n    "superregion_id":399\n
}
 {
	\n    "id":4322,\n    "name":"瀹ｆ眽鍘�",\n    "superregion_id":399\n
}
 {
	\n    "id":4323,\n    "name":"寮€姹熷幙",\n    "superregion_id":399\n
}
 {
	\n    "id":4324,\n    "name":"娓犲幙",\n    "superregion_id":399\n
}
 {
	\n    "id":4325,\n    "name":"杈惧幙",\n    "superregion_id":399\n
}
 {
	\n    "id":4326,\n    "name":"閫氬窛鍖�",\n    "superregion_id":399\n
}
 {
	\n    "id":4327,\n    "name":"鍚嶅北鍖�",\n    "superregion_id":400\n
}
 {
	\n    "id":4328,\n    "name":"澶╁叏鍘�",\n    "superregion_id":400\n
}
 {
	\n    "id":4329,\n    "name":"瀹濆叴鍘�",\n    "superregion_id":400\n
}
 {
	\n    "id":4330,\n    "name":"姹夋簮鍘�",\n    "superregion_id":400\n
}
 {
	\n    "id":4331,\n    "name":"鐭虫鍘�",\n    "superregion_id":400\n
}
 {
	\n    "id":4332,\n    "name":"鑺﹀北鍘�",\n    "superregion_id":400\n
}
 {
	\n    "id":4333,\n    "name":"鑽ョ粡鍘�",\n    "superregion_id":400\n
}
 {
	\n    "id":4334,\n    "name":"闆ㄥ煄鍖�",\n    "superregion_id":400\n
}
 {
	\n    "id":4335,\n    "name":"鍗楁睙鍘�",\n    "superregion_id":401\n
}
 {
	\n    "id":4336,\n    "name":"宸村窞鍖�",\n    "superregion_id":401\n
}
 {
	\n    "id":4337,\n    "name":"骞虫槍鍘�",\n    "superregion_id":401\n
}
 {
	\n    "id":4338,\n    "name":"閫氭睙鍘�",\n    "superregion_id":401\n
}
 {
	\n    "id":4339,\n    "name":"涔愯嚦鍘�",\n    "superregion_id":402\n
}
 {
	\n    "id":4340,\n    "name":"瀹夊渤鍘�",\n    "superregion_id":402\n
}
 {
	\n    "id":4341,\n    "name":"绠€闃冲競",\n    "superregion_id":402\n
}
 {
	\n    "id":4342,\n    "name":"闆佹睙鍖�",\n    "superregion_id":402\n
}
 {
	\n    "id":4343,\n    "name":"涔濆娌熷幙",\n    "superregion_id":403\n
}
 {
	\n    "id":4344,\n    "name":"澹ゅ鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4345,\n    "name":"灏忛噾鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4346,\n    "name":"鏉炬綐鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4347,\n    "name":"姹跺窛鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4348,\n    "name":"鐞嗗幙",\n    "superregion_id":403\n
}
 {
	\n    "id":4349,\n    "name":"绾㈠師鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4350,\n    "name":"鑻ュ皵鐩栧幙",\n    "superregion_id":403\n
}
 {
	\n    "id":4351,\n    "name":"鑼傚幙",\n    "superregion_id":403\n
}
 {
	\n    "id":4352,\n    "name":"閲戝窛鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4353,\n    "name":"闃垮潩鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4354,\n    "name":"椹皵搴峰幙",\n    "superregion_id":403\n
}
 {
	\n    "id":4355,\n    "name":"榛戞按鍘�",\n    "superregion_id":403\n
}
 {
	\n    "id":4356,\n    "name":"涓瑰反鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4357,\n    "name":"涔″煄鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4358,\n    "name":"宸村鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4359,\n    "name":"搴峰畾鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4360,\n    "name":"寰楄崳鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4361,\n    "name":"寰锋牸鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4362,\n    "name":"鏂伴緳鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4363,\n    "name":"娉稿畾鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4364,\n    "name":"鐐夐湇鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4365,\n    "name":"鐞嗗鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4366,\n    "name":"鐢樺瓬鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4367,\n    "name":"鐧界帀鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4368,\n    "name":"鐭虫笭鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4369,\n    "name":"绋诲煄鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4370,\n    "name":"鑹茶揪鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4371,\n    "name":"閬撳瓪鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4372,\n    "name":"闆呮睙鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":4373,\n    "name":"浼氫笢鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4374,\n    "name":"浼氱悊鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4375,\n    "name":"鍐曞畞鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4376,\n    "name":"鍠滃痉鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4377,\n    "name":"瀹佸崡鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4378,\n    "name":"甯冩嫋鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4379,\n    "name":"寰锋槍鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4380,\n    "name":"鏄鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4381,\n    "name":"鏅牸鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4382,\n    "name":"鏈ㄩ噷钘忔棌鑷不鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4383,\n    "name":"鐢樻礇鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4384,\n    "name":"鐩愭簮鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4385,\n    "name":"缇庡鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4386,\n    "name":"瑗挎槍甯�",\n    "superregion_id":405\n
}
 {
	\n    "id":4387,\n    "name":"瓒婅タ鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4388,\n    "name":"閲戦槼鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4389,\n    "name":"闆锋尝鍘�",\n    "superregion_id":405\n
}
 {
	\n    "id":4390,\n    "name":"涔屽綋鍖�",\n    "superregion_id":406\n
}
 {
	\n    "id":4391,\n    "name":"浜戝博鍖�",\n    "superregion_id":406\n
}
 {
	\n    "id":4392,\n    "name":"淇枃鍘�",\n    "superregion_id":406\n
}
 {
	\n    "id":4393,\n    "name":"鍗楁槑鍖�",\n    "superregion_id":406\n
}
 {
	\n    "id":4394,\n    "name":"灏忔渤鍖�",\n    "superregion_id":406\n
}
 {
	\n    "id":4395,\n    "name":"寮€闃冲幙",\n    "superregion_id":406\n
}
 {
	\n    "id":4396,\n    "name":"鎭兘鍘�",\n    "superregion_id":406\n
}
 {
	\n    "id":4397,\n    "name":"娓呴晣甯�",\n    "superregion_id":406\n
}
 {
	\n    "id":4398,\n    "name":"鐧戒簯鍖�",\n    "superregion_id":406\n
}
 {
	\n    "id":4399,\n    "name":"鑺辨邯鍖�",\n    "superregion_id":406\n
}
 {
	\n    "id":4400,\n    "name":"鍏灊鐗瑰尯",\n    "superregion_id":407\n
}
 {
	\n    "id":4401,\n    "name":"姘村煄鍘�",\n    "superregion_id":407\n
}
 {
	\n    "id":4402,\n    "name":"鐩樺幙",\n    "superregion_id":407\n
}
 {
	\n    "id":4403,\n    "name":"閽熷北鍖�",\n    "superregion_id":407\n
}
 {
	\n    "id":4404,\n    "name":"涔犳按鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4405,\n    "name":"浠佹€€甯�",\n    "superregion_id":408\n
}
 {
	\n    "id":4406,\n    "name":"浣欏簡鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4407,\n    "name":"鍑ゅ唸鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4408,\n    "name":"鍔″窛浠′浆鏃忚嫍鏃忚嚜娌诲幙",\n    "superregion_id":408\n
}
 {
	\n    "id":4409,\n    "name":"妗愭鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4410,\n    "name":"姝ｅ畨鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4411,\n    "name":"姹囧窛鍖�",\n    "superregion_id":408\n
}
 {
	\n    "id":4412,\n    "name":"婀勬江鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4413,\n    "name":"绾㈣姳宀楀尯",\n    "superregion_id":408\n
}
 {
	\n    "id":4414,\n    "name":"缁ラ槼鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4415,\n    "name":"璧ゆ按甯�",\n    "superregion_id":408\n
}
 {
	\n    "id":4416,\n    "name":"閬撶湡浠′浆鏃忚嫍鏃忚嚜娌诲幙",\n    "superregion_id":408\n
}
 {
	\n    "id":4417,\n    "name":"閬典箟鍘�",\n    "superregion_id":408\n
}
 {
	\n    "id":4418,\n    "name":"鍏冲箔甯冧緷鏃忚嫍鏃忚嚜娌诲幙",\n    "superregion_id":409\n
}
 {
	\n    "id":4419,\n    "name":"骞冲潩鍘�",\n    "superregion_id":409\n
}
 {
	\n    "id":4420,\n    "name":"鏅畾鍘�",\n    "superregion_id":409\n
}
 {
	\n    "id":4421,\n    "name":"绱簯鑻楁棌甯冧緷鏃忚嚜娌诲幙",\n    "superregion_id":409\n
}
 {
	\n    "id":4422,\n    "name":"瑗跨鍖�",\n    "superregion_id":409\n
}
 {
	\n    "id":4423,\n    "name":"闀囧畞甯冧緷鏃忚嫍鏃忚嚜娌诲幙",\n    "superregion_id":409\n
}
 {
	\n    "id":4424,\n    "name":"涓囧北鍖�",\n    "superregion_id":410\n
}
 {
	\n    "id":4425,\n    "name":"鍗版睙鍦熷鏃忚嫍鏃忚嚜娌诲幙",\n    "superregion_id":410\n
}
 {
	\n    "id":4426,\n    "name":"寰锋睙鍘�",\n    "superregion_id":410\n
}
 {
	\n    "id":4427,\n    "name":"鎬濆崡鍘�",\n    "superregion_id":410\n
}
 {
	\n    "id":4428,\n    "name":"鏉炬鑻楁棌鑷不鍘�",\n    "superregion_id":410\n
}
 {
	\n    "id":4429,\n    "name":"姹熷彛鍘�",\n    "superregion_id":410\n
}
 {
	\n    "id":4430,\n    "name":"娌挎渤鍦熷鏃忚嚜娌诲幙",\n    "superregion_id":410\n
}
 {
	\n    "id":4431,\n    "name":"鐜夊睆渚楁棌鑷不鍘�",\n    "superregion_id":410\n
}
 {
	\n    "id":4432,\n    "name":"鐭抽槨鍘�",\n    "superregion_id":410\n
}
 {
	\n    "id":4433,\n    "name":"閾滀粊甯�",\n    "superregion_id":410\n
}
 {
	\n    "id":4434,\n    "name":"鍏翠箟甯�",\n    "superregion_id":411\n
}
 {
	\n    "id":4435,\n    "name":"鍏翠粊鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4436,\n    "name":"鍐屼酣鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4437,\n    "name":"瀹夐緳鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4438,\n    "name":"鏅畨鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4439,\n    "name":"鏅撮殕鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4440,\n    "name":"鏈涜盁鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4441,\n    "name":"璐炰赴鍘�",\n    "superregion_id":411\n
}
 {
	\n    "id":4442,\n    "name":"澶ф柟鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4443,\n    "name":"濞佸畞褰濇棌鍥炴棌鑻楁棌鑷不鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4444,\n    "name":"姣曡妭甯�",\n    "superregion_id":412\n
}
 {
	\n    "id":4445,\n    "name":"绾抽泹鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4446,\n    "name":"缁囬噾鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4447,\n    "name":"璧珷鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4448,\n    "name":"閲戞矙鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4449,\n    "name":"榛旇タ鍘�",\n    "superregion_id":412\n
}
 {
	\n    "id":4450,\n    "name":"涓夌鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4451,\n    "name":"涓瑰鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4452,\n    "name":"浠庢睙鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4453,\n    "name":"鍑噷甯�",\n    "superregion_id":413\n
}
 {
	\n    "id":4454,\n    "name":"鍓戞渤鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4455,\n    "name":"鍙版睙鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4456,\n    "name":"澶╂煴鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4457,\n    "name":"宀戝珐鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4458,\n    "name":"鏂界鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4459,\n    "name":"姒曟睙鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4460,\n    "name":"閿﹀睆鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4461,\n    "name":"闀囪繙鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4462,\n    "name":"闆峰北鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4463,\n    "name":"楹绘睙鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4464,\n    "name":"榛勫钩鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4465,\n    "name":"榛庡钩鍘�",\n    "superregion_id":413\n
}
 {
	\n    "id":4466,\n    "name":"涓夐兘姘存棌鑷不鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4467,\n    "name":"骞冲鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4468,\n    "name":"鎯犳按鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4469,\n    "name":"鐙北鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4470,\n    "name":"鐡畨鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4471,\n    "name":"绂忔硥甯�",\n    "superregion_id":414\n
}
 {
	\n    "id":4472,\n    "name":"缃楃敻鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4473,\n    "name":"鑽旀尝鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4474,\n    "name":"璐靛畾鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4475,\n    "name":"閮藉寑甯�",\n    "superregion_id":414\n
}
 {
	\n    "id":4476,\n    "name":"闀块『鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4477,\n    "name":"榫欓噷鍘�",\n    "superregion_id":414\n
}
 {
	\n    "id":4478,\n    "name":"涓滃窛鍖�",\n    "superregion_id":415\n
}
 {
	\n    "id":4479,\n    "name":"浜斿崕鍖�",\n    "superregion_id":415\n
}
 {
	\n    "id":4480,\n    "name":"鍛堣础鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4481,\n    "name":"瀹夊畞甯�",\n    "superregion_id":415\n
}
 {
	\n    "id":4482,\n    "name":"瀹樻浮鍖�",\n    "superregion_id":415\n
}
 {
	\n    "id":4483,\n    "name":"瀹滆壇鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4484,\n    "name":"瀵屾皯鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4485,\n    "name":"瀵荤敻鍥炴棌褰濇棌鑷不鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4486,\n    "name":"宓╂槑鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4487,\n    "name":"鏅嬪畞鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4488,\n    "name":"鐩橀緳鍖�",\n    "superregion_id":415\n
}
 {
	\n    "id":4489,\n    "name":"鐭虫灄褰濇棌鑷不鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4490,\n    "name":"绂勫姖褰濇棌鑻楁棌鑷不鍘�",\n    "superregion_id":415\n
}
 {
	\n    "id":4491,\n    "name":"瑗垮北鍖�",\n    "superregion_id":415\n
}
 {
	\n    "id":4492,\n    "name":"浼氭辰鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4493,\n    "name":"瀹ｅ▉甯�",\n    "superregion_id":416\n
}
 {
	\n    "id":4494,\n    "name":"瀵屾簮鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4495,\n    "name":"甯堝畻鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4496,\n    "name":"娌剧泭鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4497,\n    "name":"缃楀钩鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4498,\n    "name":"闄嗚壇鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4499,\n    "name":"椹緳鍘�",\n    "superregion_id":416\n
}
 {
	\n    "id":4500,\n    "name":"楹掗簾鍖�",\n    "superregion_id":416\n
}
 {
	\n    "id":4501,\n    "name":"鍏冩睙鍝堝凹鏃忓綕鏃忓偅鏃忚嚜娌诲幙",\n    "superregion_id":417\n
}
 {
	\n    "id":4502,\n    "name":"鍗庡畞鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4503,\n    "name":"宄ㄥ北褰濇棌鑷不鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4504,\n    "name":"鏂板钩褰濇棌鍌ｆ棌鑷不鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4505,\n    "name":"鏄撻棬鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4506,\n    "name":"姹熷窛鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4507,\n    "name":"婢勬睙鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4508,\n    "name":"绾㈠鍖�",\n    "superregion_id":417\n
}
 {
	\n    "id":4509,\n    "name":"閫氭捣鍘�",\n    "superregion_id":417\n
}
 {
	\n    "id":4510,\n    "name":"鏂界敻鍘�",\n    "superregion_id":418\n
}
 {
	\n    "id":4511,\n    "name":"鏄屽畞鍘�",\n    "superregion_id":418\n
}
 {
	\n    "id":4512,\n    "name":"鑵惧啿鍘�",\n    "superregion_id":418\n
}
 {
	\n    "id":4513,\n    "name":"闅嗛槼鍖�",\n    "superregion_id":418\n
}
 {
	\n    "id":4514,\n    "name":"榫欓櫟鍘�",\n    "superregion_id":418\n
}
 {
	\n    "id":4515,\n    "name":"澶у叧鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4516,\n    "name":"濞佷俊鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4517,\n    "name":"宸у鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4518,\n    "name":"褰濊壇鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4519,\n    "name":"鏄槼鍖�",\n    "superregion_id":419\n
}
 {
	\n    "id":4520,\n    "name":"姘村瘜鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4521,\n    "name":"姘稿杽鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4522,\n    "name":"鐩愭触鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4523,\n    "name":"缁ユ睙鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4524,\n    "name":"闀囬泟鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4525,\n    "name":"椴佺敻鍘�",\n    "superregion_id":419\n
}
 {
	\n    "id":4526,\n    "name":"鍗庡潽鍘�",\n    "superregion_id":420\n
}
 {
	\n    "id":4527,\n    "name":"鍙ゅ煄鍖�",\n    "superregion_id":420\n
}
 {
	\n    "id":4528,\n    "name":"瀹佽挆褰濇棌鑷不鍘�",\n    "superregion_id":420\n
}
 {
	\n    "id":4529,\n    "name":"姘歌儨鍘�",\n    "superregion_id":420\n
}
 {
	\n    "id":4530,\n    "name":"鐜夐緳绾宠タ鏃忚嚜娌诲幙",\n    "superregion_id":420\n
}
 {
	\n    "id":4531,\n    "name":"涓寸繑鍖�",\n    "superregion_id":422\n
}
 {
	\n    "id":4532,\n    "name":"浜戝幙",\n    "superregion_id":422\n
}
 {
	\n    "id":4533,\n    "name":"鍑ゅ簡鍘�",\n    "superregion_id":422\n
}
 {
	\n    "id":4534,\n    "name":"鍙屾睙鎷夌鏃忎饯鏃忓竷鏈楁棌鍌ｆ棌鑷不鍘�",\n    "superregion_id":422\n
}
 {
	\n    "id":4535,\n    "name":"姘稿痉鍘�",\n    "superregion_id":422\n
}
 {
	\n    "id":4536,\n    "name":"娌ф簮浣ゆ棌鑷不鍘�",\n    "superregion_id":422\n
}
 {
	\n    "id":4537,\n    "name":"鑰块┈鍌ｆ棌浣ゆ棌鑷不鍘�",\n    "superregion_id":422\n
}
 {
	\n    "id":4538,\n    "name":"闀囧悍鍘�",\n    "superregion_id":422\n
}
 {
	\n    "id":4539,\n    "name":"鍏冭皨鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4540,\n    "name":"鍗楀崕鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4541,\n    "name":"鍙屾煆鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4542,\n    "name":"澶у鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4543,\n    "name":"濮氬畨鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4544,\n    "name":"妤氶泟甯�",\n    "superregion_id":423\n
}
 {
	\n    "id":4545,\n    "name":"姝﹀畾鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4546,\n    "name":"姘镐粊鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4547,\n    "name":"鐗熷畾鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4548,\n    "name":"绂勪赴鍘�",\n    "superregion_id":423\n
}
 {
	\n    "id":4549,\n    "name":"涓棫甯�",\n    "superregion_id":424\n
}
 {
	\n    "id":4550,\n    "name":"鍏冮槼鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4551,\n    "name":"灞忚竟鑻楁棌鑷不鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4552,\n    "name":"寤烘按鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4553,\n    "name":"寮€杩滃競",\n    "superregion_id":424\n
}
 {
	\n    "id":4554,\n    "name":"寮ュ嫆鍖�",\n    "superregion_id":424\n
}
 {
	\n    "id":4555,\n    "name":"娌冲彛鐟舵棌鑷不鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4556,\n    "name":"娉歌タ鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4557,\n    "name":"鐭冲睆鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4558,\n    "name":"绾㈡渤鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4559,\n    "name":"缁挎槬鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4560,\n    "name":"钂欒嚜甯�",\n    "superregion_id":424\n
}
 {
	\n    "id":4561,\n    "name":"閲戝钩鑻楁棌鐟舵棌鍌ｆ棌鑷不鍘�",\n    "superregion_id":424\n
}
 {
	\n    "id":4562,\n    "name":"涓樺寳鍘�",\n    "superregion_id":425\n
}
 {
	\n    "id":4563,\n    "name":"瀵屽畞鍘�",\n    "superregion_id":425\n
}
 {
	\n    "id":4564,\n    "name":"骞垮崡鍘�",\n    "superregion_id":425\n
}
 {
	\n    "id":4565,\n    "name":"鏂囧北甯�",\n    "superregion_id":425\n
}
 {
	\n    "id":4566,\n    "name":"鐮氬北鍘�",\n    "superregion_id":425\n
}
 {
	\n    "id":4567,\n    "name":"瑗跨暣鍘�",\n    "superregion_id":425\n
}
 {
	\n    "id":4568,\n    "name":"椹叧鍘�",\n    "superregion_id":425\n
}
 {
	\n    "id":4569,\n    "name":"楹绘牀鍧″幙",\n    "superregion_id":425\n
}
 {
	\n    "id":4570,\n    "name":"鍕愭捣鍘�",\n    "superregion_id":426\n
}
 {
	\n    "id":4571,\n    "name":"鍕愯厞鍘�",\n    "superregion_id":426\n
}
 {
	\n    "id":4572,\n    "name":"鏅椽甯�",\n    "superregion_id":426\n
}
 {
	\n    "id":4573,\n    "name":"浜戦緳鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4574,\n    "name":"鍓戝窛鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4575,\n    "name":"鍗楁锭褰濇棌鑷不鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4576,\n    "name":"澶х悊甯�",\n    "superregion_id":427\n
}
 {
	\n    "id":4577,\n    "name":"瀹惧窛鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4578,\n    "name":"宸嶅北褰濇棌鍥炴棌鑷不鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4579,\n    "name":"寮ユ浮鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4580,\n    "name":"姘稿钩鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4581,\n    "name":"娲辨簮鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4582,\n    "name":"婕炬繛褰濇棌鑷不鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4583,\n    "name":"绁ヤ簯鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4584,\n    "name":"楣ゅ簡鍘�",\n    "superregion_id":427\n
}
 {
	\n    "id":4585,\n    "name":"姊佹渤鍘�",\n    "superregion_id":428\n
}
 {
	\n    "id":4586,\n    "name":"鑺掑競",\n    "superregion_id":428\n
}
 {
	\n    "id":4587,\n    "name":"鐟炰附甯�",\n    "superregion_id":428\n
}
 {
	\n    "id":4588,\n    "name":"鐩堟睙鍘�",\n    "superregion_id":428\n
}
 {
	\n    "id":4589,\n    "name":"闄囧窛鍘�",\n    "superregion_id":428\n
}
 {
	\n    "id":4590,\n    "name":"寰烽挦鍘�",\n    "superregion_id":430\n
}
 {
	\n    "id":4591,\n    "name":"缁磋タ鍌堝兂鏃忚嚜娌诲幙",\n    "superregion_id":430\n
}
 {
	\n    "id":4592,\n    "name":"棣欐牸閲屾媺鍘�",\n    "superregion_id":430\n
}
 {
	\n    "id":4593,\n    "name":"鍩庡叧鍖�",\n    "superregion_id":431\n
}
 {
	\n    "id":4594,\n    "name":"鍫嗛緳寰峰簡鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4595,\n    "name":"澧ㄧ宸ュ崱鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4596,\n    "name":"灏兼湪鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4597,\n    "name":"褰撻泟鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4598,\n    "name":"鏇叉按鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4599,\n    "name":"鏋楀懆鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4600,\n    "name":"杈惧瓬鍘�",\n    "superregion_id":431\n
}
 {
	\n    "id":4601,\n    "name":"涓侀潚鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4602,\n    "name":"鍏鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4603,\n    "name":"瀵熼泤鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4604,\n    "name":"宸﹁础鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4605,\n    "name":"鏄岄兘鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4606,\n    "name":"姹熻揪鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4607,\n    "name":"娲涢殕鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4608,\n    "name":"绫讳箤榻愬幙",\n    "superregion_id":432\n
}
 {
	\n    "id":4609,\n    "name":"鑺掑悍鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4610,\n    "name":"璐¤鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4611,\n    "name":"杈瑰潩鍘�",\n    "superregion_id":432\n
}
 {
	\n    "id":4612,\n    "name":"涔冧笢鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4613,\n    "name":"鍔犳煡鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4614,\n    "name":"鎵庡泭鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4615,\n    "name":"鎺編鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4616,\n    "name":"鏇叉澗鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4617,\n    "name":"妗戞棩鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4618,\n    "name":"娲涙墡鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4619,\n    "name":"娴崱瀛愬幙",\n    "superregion_id":433\n
}
 {
	\n    "id":4620,\n    "name":"鐞肩粨鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4621,\n    "name":"璐″槑鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4622,\n    "name":"閿欓偅鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4623,\n    "name":"闅嗗瓙鍘�",\n    "superregion_id":433\n
}
 {
	\n    "id":4624,\n    "name":"浜氫笢鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4625,\n    "name":"浠佸竷鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4626,\n    "name":"浠插反鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4627,\n    "name":"鍗楁湪鏋楀幙",\n    "superregion_id":434\n
}
 {
	\n    "id":4628,\n    "name":"鍚夐殕鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4629,\n    "name":"瀹氭棩鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4630,\n    "name":"瀹氱粨鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4631,\n    "name":"宀楀反鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4632,\n    "name":"搴烽┈鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4633,\n    "name":"鎷夊瓬鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4634,\n    "name":"鏃ュ杸鍒欏競",\n    "superregion_id":434\n
}
 {
	\n    "id":4635,\n    "name":"鏄備粊鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4636,\n    "name":"姹熷瓬鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4637,\n    "name":"鐧芥湕鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4638,\n    "name":"鑱傛媺鏈ㄥ幙",\n    "superregion_id":434\n
}
 {
	\n    "id":4639,\n    "name":"钀ㄥ槑鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4640,\n    "name":"钀ㄨ喀鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4641,\n    "name":"璋㈤€氶棬鍘�",\n    "superregion_id":434\n
}
 {
	\n    "id":4642,\n    "name":"鍢夐粠鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4643,\n    "name":"瀹夊鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4644,\n    "name":"灏肩帥鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4645,\n    "name":"宸撮潚鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4646,\n    "name":"姣斿鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4647,\n    "name":"鐝垐鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4648,\n    "name":"鐢虫墡鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4649,\n    "name":"绱㈠幙",\n    "superregion_id":435\n
}
 {
	\n    "id":4650,\n    "name":"鑱傝崳鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4651,\n    "name":"閭ｆ洸鍘�",\n    "superregion_id":435\n
}
 {
	\n    "id":4652,\n    "name":"鍣跺皵鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4653,\n    "name":"鎺嫟鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4654,\n    "name":"鏀瑰垯鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4655,\n    "name":"鏃ュ湡鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4656,\n    "name":"鏅叞鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4657,\n    "name":"鏈揪鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4658,\n    "name":"闈╁悏鍘�",\n    "superregion_id":436\n
}
 {
	\n    "id":4659,\n    "name":"澧ㄨ劚鍘�",\n    "superregion_id":437\n
}
 {
	\n    "id":4660,\n    "name":"瀵熼殔鍘�",\n    "superregion_id":437\n
}
 {
	\n    "id":4661,\n    "name":"宸ュ竷姹熻揪鍘�",\n    "superregion_id":437\n
}
 {
	\n    "id":4662,\n    "name":"鏈楀幙",\n    "superregion_id":437\n
}
 {
	\n    "id":4663,\n    "name":"鏋楄姖鍘�",\n    "superregion_id":437\n
}
 {
	\n    "id":4664,\n    "name":"娉㈠瘑鍘�",\n    "superregion_id":437\n
}
 {
	\n    "id":4665,\n    "name":"绫虫灄鍘�",\n    "superregion_id":437\n
}
 {
	\n    "id":4666,\n    "name":"涓存郊鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4667,\n    "name":"鍛ㄨ嚦鍘�",\n    "superregion_id":438\n
}
 {
	\n    "id":4668,\n    "name":"鎴峰幙",\n    "superregion_id":438\n
}
 {
	\n    "id":4669,\n    "name":"鏂板煄鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4670,\n    "name":"鏈ぎ鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4671,\n    "name":"鐏炴ˉ鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4672,\n    "name":"纰戞灄鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4673,\n    "name":"鑾叉箹鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4674,\n    "name":"钃濈敯鍘�",\n    "superregion_id":438\n
}
 {
	\n    "id":4675,\n    "name":"闀垮畨鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4676,\n    "name":"闃庤壇鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4677,\n    "name":"闆佸鍖�",\n    "superregion_id":438\n
}
 {
	\n    "id":4678,\n    "name":"楂橀櫟鍘�",\n    "superregion_id":438\n
}
 {
	\n    "id":4679,\n    "name":"鍗板彴鍖�",\n    "superregion_id":439\n
}
 {
	\n    "id":4680,\n    "name":"瀹滃悰鍘�",\n    "superregion_id":439\n
}
 {
	\n    "id":4681,\n    "name":"鐜嬬泭鍖�",\n    "superregion_id":439\n
}
 {
	\n    "id":4682,\n    "name":"鑰€宸炲尯",\n    "superregion_id":439\n
}
 {
	\n    "id":4683,\n    "name":"鍑ゅ幙",\n    "superregion_id":440\n
}
 {
	\n    "id":4684,\n    "name":"鍑ょ繑鍘�",\n    "superregion_id":440\n
}
 {
	\n    "id":4685,\n    "name":"鍗冮槼鍘�",\n    "superregion_id":440\n
}
 {
	\n    "id":4686,\n    "name":"澶櫧鍘�",\n    "superregion_id":440\n
}
 {
	\n    "id":4687,\n    "name":"宀愬北鍘�",\n    "superregion_id":440\n
}
 {
	\n    "id":4688,\n    "name":"鎵堕鍘�",\n    "superregion_id":440\n
}
 {
	\n    "id":4689,\n    "name":"娓花鍖�",\n    "superregion_id":440\n
}
 {
	\n    "id":4690,\n    "name":"鐪夊幙",\n    "superregion_id":440\n
}
 {
	\n    "id":4691,\n    "name":"閲戝彴鍖�",\n    "superregion_id":440\n
}
 {
	\n    "id":4692,\n    "name":"闄囧幙",\n    "superregion_id":440\n
}
 {
	\n    "id":4693,\n    "name":"闄堜粨鍖�",\n    "superregion_id":440\n
}
 {
	\n    "id":4694,\n    "name":"楹熸父鍘�",\n    "superregion_id":440\n
}
 {
	\n    "id":4695,\n    "name":"涓夊師鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4696,\n    "name":"涔惧幙",\n    "superregion_id":441\n
}
 {
	\n    "id":4697,\n    "name":"鍏村钩甯�",\n    "superregion_id":441\n
}
 {
	\n    "id":4698,\n    "name":"褰幙",\n    "superregion_id":441\n
}
 {
	\n    "id":4699,\n    "name":"鏃倯鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4700,\n    "name":"鏉ㄩ櫟鍖�",\n    "superregion_id":441\n
}
 {
	\n    "id":4701,\n    "name":"姝﹀姛鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4702,\n    "name":"姘稿鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4703,\n    "name":"娉鹃槼鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4704,\n    "name":"娣冲寲鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4705,\n    "name":"娓煄鍖�",\n    "superregion_id":441\n
}
 {
	\n    "id":4706,\n    "name":"绀兼硥鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4707,\n    "name":"绉﹂兘鍖�",\n    "superregion_id":441\n
}
 {
	\n    "id":4708,\n    "name":"闀挎鍘�",\n    "superregion_id":441\n
}
 {
	\n    "id":4709,\n    "name":"涓存腑鍖�",\n    "superregion_id":442\n
}
 {
	\n    "id":4710,\n    "name":"鍗庡幙",\n    "superregion_id":442\n
}
 {
	\n    "id":4711,\n    "name":"鍗庨槾甯�",\n    "superregion_id":442\n
}
 {
	\n    "id":4712,\n    "name":"鍚堥槼鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4713,\n    "name":"澶ц崝鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4714,\n    "name":"瀵屽钩鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4715,\n    "name":"娼煎叧鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4716,\n    "name":"婢勫煄鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4717,\n    "name":"鐧芥按鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4718,\n    "name":"钂插煄鍘�",\n    "superregion_id":442\n
}
 {
	\n    "id":4719,\n    "name":"闊╁煄甯�",\n    "superregion_id":442\n
}
 {
	\n    "id":4720,\n    "name":"鍚磋捣鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4721,\n    "name":"瀛愰暱鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4722,\n    "name":"瀹夊鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4723,\n    "name":"瀹滃窛鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4724,\n    "name":"瀹濆鍖�",\n    "superregion_id":443\n
}
 {
	\n    "id":4725,\n    "name":"瀵屽幙",\n    "superregion_id":443\n
}
 {
	\n    "id":4726,\n    "name":"寤跺窛鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4727,\n    "name":"寤堕暱鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4728,\n    "name":"蹇椾腹鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4729,\n    "name":"娲涘窛鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4730,\n    "name":"鐢樻硥鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4731,\n    "name":"榛勯櫟鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4732,\n    "name":"榛勯緳鍘�",\n    "superregion_id":443\n
}
 {
	\n    "id":4733,\n    "name":"浣涘潽鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4734,\n    "name":"鍕夊幙",\n    "superregion_id":444\n
}
 {
	\n    "id":4735,\n    "name":"鍗楅儜鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4736,\n    "name":"鍩庡浐鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4737,\n    "name":"瀹佸己鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4738,\n    "name":"姹夊彴鍖�",\n    "superregion_id":444\n
}
 {
	\n    "id":4739,\n    "name":"娲嬪幙",\n    "superregion_id":444\n
}
 {
	\n    "id":4740,\n    "name":"鐣欏潩鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4741,\n    "name":"鐣ラ槼鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4742,\n    "name":"瑗夸埂鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4743,\n    "name":"闀囧反鍘�",\n    "superregion_id":444\n
}
 {
	\n    "id":4744,\n    "name":"浣冲幙",\n    "superregion_id":445\n
}
 {
	\n    "id":4745,\n    "name":"鍚村牎鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4746,\n    "name":"瀛愭床鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4747,\n    "name":"瀹氳竟鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4748,\n    "name":"搴滆胺鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4749,\n    "name":"姒嗛槼鍖�",\n    "superregion_id":445\n
}
 {
	\n    "id":4750,\n    "name":"妯北鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4751,\n    "name":"娓呮锭鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4752,\n    "name":"绁炴湪鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4753,\n    "name":"绫宠剛鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4754,\n    "name":"缁ュ痉鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4755,\n    "name":"闈栬竟鍘�",\n    "superregion_id":445\n
}
 {
	\n    "id":4756,\n    "name":"瀹侀檿鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4757,\n    "name":"宀氱殝鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4758,\n    "name":"骞冲埄鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4759,\n    "name":"鏃槼鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4760,\n    "name":"姹夋花鍖�",\n    "superregion_id":446\n
}
 {
	\n    "id":4761,\n    "name":"姹夐槾鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4762,\n    "name":"鐧芥渤鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4763,\n    "name":"鐭虫硥鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4764,\n    "name":"绱槼鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4765,\n    "name":"闀囧潽鍘�",\n    "superregion_id":446\n
}
 {
	\n    "id":4766,\n    "name":"涓瑰嚖鍘�",\n    "superregion_id":447\n
}
 {
	\n    "id":4767,\n    "name":"鍟嗗崡鍘�",\n    "superregion_id":447\n
}
 {
	\n    "id":4768,\n    "name":"鍟嗗窞鍖�",\n    "superregion_id":447\n
}
 {
	\n    "id":4769,\n    "name":"灞遍槼鍘�",\n    "superregion_id":447\n
}
 {
	\n    "id":4770,\n    "name":"鏌炴按鍘�",\n    "superregion_id":447\n
}
 {
	\n    "id":4771,\n    "name":"娲涘崡鍘�",\n    "superregion_id":447\n
}
 {
	\n    "id":4772,\n    "name":"闀囧畨鍘�",\n    "superregion_id":447\n
}
 {
	\n    "id":4773,\n    "name":"涓冮噷娌冲尯",\n    "superregion_id":448\n
}
 {
	\n    "id":4774,\n    "name":"鍩庡叧鍖�",\n    "superregion_id":448\n
}
 {
	\n    "id":4775,\n    "name":"瀹夊畞鍖�",\n    "superregion_id":448\n
}
 {
	\n    "id":4776,\n    "name":"姒嗕腑鍘�",\n    "superregion_id":448\n
}
 {
	\n    "id":4777,\n    "name":"姘哥櫥鍘�",\n    "superregion_id":448\n
}
 {
	\n    "id":4778,\n    "name":"鐨嬪叞鍘�",\n    "superregion_id":448\n
}
 {
	\n    "id":4779,\n    "name":"绾㈠彜鍖�",\n    "superregion_id":448\n
}
 {
	\n    "id":4780,\n    "name":"瑗垮浐鍖�",\n    "superregion_id":448\n
}
 {
	\n    "id":4781,\n    "name":"鍢夊唱鍏冲競",\n    "superregion_id":449\n
}
 {
	\n    "id":4782,\n    "name":"姘告槍鍘�",\n    "superregion_id":450\n
}
 {
	\n    "id":4783,\n    "name":"閲戝窛鍖�",\n    "superregion_id":450\n
}
 {
	\n    "id":4784,\n    "name":"浼氬畞鍘�",\n    "superregion_id":451\n
}
 {
	\n    "id":4785,\n    "name":"骞冲窛鍖�",\n    "superregion_id":451\n
}
 {
	\n    "id":4786,\n    "name":"鏅嘲鍘�",\n    "superregion_id":451\n
}
 {
	\n    "id":4787,\n    "name":"鐧介摱鍖�",\n    "superregion_id":451\n
}
 {
	\n    "id":4788,\n    "name":"闈栬繙鍘�",\n    "superregion_id":451\n
}
 {
	\n    "id":4789,\n    "name":"寮犲宸濆洖鏃忚嚜娌诲幙",\n    "superregion_id":452\n
}
 {
	\n    "id":4790,\n    "name":"姝﹀北鍘�",\n    "superregion_id":452\n
}
 {
	\n    "id":4791,\n    "name":"娓呮按鍘�",\n    "superregion_id":452\n
}
 {
	\n    "id":4792,\n    "name":"鐢樿胺鍘�",\n    "superregion_id":452\n
}
 {
	\n    "id":4793,\n    "name":"绉﹀畨鍘�",\n    "superregion_id":452\n
}
 {
	\n    "id":4794,\n    "name":"绉﹀窞鍖�",\n    "superregion_id":452\n
}
 {
	\n    "id":4795,\n    "name":"楹︾Н鍖�",\n    "superregion_id":452\n
}
 {
	\n    "id":4796,\n    "name":"鍑夊窞鍖�",\n    "superregion_id":453\n
}
 {
	\n    "id":4797,\n    "name":"鍙ゆ氮鍘�",\n    "superregion_id":453\n
}
 {
	\n    "id":4798,\n    "name":"澶╃钘忔棌鑷不鍘�",\n    "superregion_id":453\n
}
 {
	\n    "id":4799,\n    "name":"姘戝嫟鍘�",\n    "superregion_id":453\n
}
 {
	\n    "id":4800,\n    "name":"涓存辰鍘�",\n    "superregion_id":454\n
}
 {
	\n    "id":4801,\n    "name":"灞变腹鍘�",\n    "superregion_id":454\n
}
 {
	\n    "id":4802,\n    "name":"姘戜箰鍘�",\n    "superregion_id":454\n
}
 {
	\n    "id":4803,\n    "name":"鐢樺窞鍖�",\n    "superregion_id":454\n
}
 {
	\n    "id":4804,\n    "name":"鑲冨崡瑁曞浐鏃忚嚜娌诲幙",\n    "superregion_id":454\n
}
 {
	\n    "id":4805,\n    "name":"楂樺彴鍘�",\n    "superregion_id":454\n
}
 {
	\n    "id":4806,\n    "name":"鍗庝涵鍘�",\n    "superregion_id":455\n
}
 {
	\n    "id":4807,\n    "name":"宕嗗硳鍖�",\n    "superregion_id":455\n
}
 {
	\n    "id":4808,\n    "name":"宕囦俊鍘�",\n    "superregion_id":455\n
}
 {
	\n    "id":4809,\n    "name":"搴勬氮鍘�",\n    "superregion_id":455\n
}
 {
	\n    "id":4810,\n    "name":"娉惧窛鍘�",\n    "superregion_id":455\n
}
 {
	\n    "id":4811,\n    "name":"鐏靛彴鍘�",\n    "superregion_id":455\n
}
 {
	\n    "id":4812,\n    "name":"闈欏畞鍘�",\n    "superregion_id":455\n
}
 {
	\n    "id":4813,\n    "name":"鏁︾厡甯�",\n    "superregion_id":456\n
}
 {
	\n    "id":4814,\n    "name":"鐜夐棬甯�",\n    "superregion_id":456\n
}
 {
	\n    "id":4815,\n    "name":"鐡滃窞鍘�",\n    "superregion_id":456\n
}
 {
	\n    "id":4816,\n    "name":"鑲冨寳钂欏彜鏃忚嚜娌诲幙",\n    "superregion_id":456\n
}
 {
	\n    "id":4817,\n    "name":"鑲冨窞鍖�",\n    "superregion_id":456\n
}
 {
	\n    "id":4818,\n    "name":"閲戝鍘�",\n    "superregion_id":456\n
}
 {
	\n    "id":4819,\n    "name":"闃垮厠濉炲搱钀ㄥ厠鏃忚嚜娌诲幙",\n    "superregion_id":456\n
}
 {
	\n    "id":4820,\n    "name":"鍗庢睜鍘�",\n    "superregion_id":457\n
}
 {
	\n    "id":4821,\n    "name":"鍚堟按鍘�",\n    "superregion_id":457\n
}
 {
	\n    "id":4822,\n    "name":"瀹佸幙",\n    "superregion_id":457\n
}
 {
	\n    "id":4823,\n    "name":"搴嗗煄鍘�",\n    "superregion_id":457\n
}
 {
	\n    "id":4824,\n    "name":"姝ｅ畞鍘�",\n    "superregion_id":457\n
}
 {
	\n    "id":4825,\n    "name":"鐜幙",\n    "superregion_id":457\n
}
 {
	\n    "id":4826,\n    "name":"瑗垮嘲鍖�",\n    "superregion_id":457\n
}
 {
	\n    "id":4827,\n    "name":"闀囧師鍘�",\n    "superregion_id":457\n
}
 {
	\n    "id":4828,\n    "name":"涓存串鍘�",\n    "superregion_id":458\n
}
 {
	\n    "id":4829,\n    "name":"瀹夊畾鍖�",\n    "superregion_id":458\n
}
 {
	\n    "id":4830,\n    "name":"宀峰幙",\n    "superregion_id":458\n
}
 {
	\n    "id":4831,\n    "name":"娓簮鍘�",\n    "superregion_id":458\n
}
 {
	\n    "id":4832,\n    "name":"婕冲幙",\n    "superregion_id":458\n
}
 {
	\n    "id":4833,\n    "name":"閫氭腑鍘�",\n    "superregion_id":458\n
}
 {
	\n    "id":4834,\n    "name":"闄囪タ鍘�",\n    "superregion_id":458\n
}
 {
	\n    "id":4835,\n    "name":"涓ゅ綋鍘�",\n    "superregion_id":459\n
}
 {
	\n    "id":4836,\n    "name":"瀹曟槍鍘�",\n    "superregion_id":459\n
}
 {
	\n    "id":4837,\n    "name":"搴峰幙",\n    "superregion_id":459\n
}
 {
	\n    "id":4838,\n    "name":"寰藉幙",\n    "superregion_id":459\n
}
 {
	\n    "id":4839,\n    "name":"鎴愬幙",\n    "superregion_id":459\n
}
 {
	\n    "id":4840,\n    "name":"鏂囧幙",\n    "superregion_id":459\n
}
 {
	\n    "id":4841,\n    "name":"姝﹂兘鍖�",\n    "superregion_id":459\n
}
 {
	\n    "id":4842,\n    "name":"绀煎幙",\n    "superregion_id":459\n
}
 {
	\n    "id":4843,\n    "name":"瑗垮拰鍘�",\n    "superregion_id":459\n
}
 {
	\n    "id":4844,\n    "name":"涓滀埂鏃忚嚜娌诲幙",\n    "superregion_id":460\n
}
 {
	\n    "id":4845,\n    "name":"涓村鍘�",\n    "superregion_id":460\n
}
 {
	\n    "id":4846,\n    "name":"涓村甯�",\n    "superregion_id":460\n
}
 {
	\n    "id":4847,\n    "name":"鍜屾斂鍘�",\n    "superregion_id":460\n
}
 {
	\n    "id":4848,\n    "name":"骞挎渤鍘�",\n    "superregion_id":460\n
}
 {
	\n    "id":4849,\n    "name":"搴蜂箰鍘�",\n    "superregion_id":460\n
}
 {
	\n    "id":4850,\n    "name":"姘搁潠鍘�",\n    "superregion_id":460\n
}
 {
	\n    "id":4851,\n    "name":"绉煶灞变繚瀹夋棌涓滀埂鏃忔拻鎷夋棌鑷不鍘�",\n    "superregion_id":460\n
}
 {
	\n    "id":4852,\n    "name":"涓存江鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4853,\n    "name":"鍗撳凹鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4854,\n    "name":"鍚堜綔甯�",\n    "superregion_id":461\n
}
 {
	\n    "id":4855,\n    "name":"澶忔渤鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4856,\n    "name":"鐜涙洸鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4857,\n    "name":"纰屾洸鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4858,\n    "name":"鑸熸洸鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4859,\n    "name":"杩儴鍘�",\n    "superregion_id":461\n
}
 {
	\n    "id":4860,\n    "name":"鍩庝笢鍖�",\n    "superregion_id":462\n
}
 {
	\n    "id":4861,\n    "name":"鍩庝腑鍖�",\n    "superregion_id":462\n
}
 {
	\n    "id":4862,\n    "name":"鍩庡寳鍖�",\n    "superregion_id":462\n
}
 {
	\n    "id":4863,\n    "name":"鍩庤タ鍖�",\n    "superregion_id":462\n
}
 {
	\n    "id":4864,\n    "name":"澶ч€氬洖鏃忓湡鏃忚嚜娌诲幙",\n    "superregion_id":462\n
}
 {
	\n    "id":4865,\n    "name":"婀熶腑鍘�",\n    "superregion_id":462\n
}
 {
	\n    "id":4866,\n    "name":"婀熸簮鍘�",\n    "superregion_id":462\n
}
 {
	\n    "id":4867,\n    "name":"涔愰兘鍖�",\n    "superregion_id":463\n
}
 {
	\n    "id":4868,\n    "name":"浜掑姪鍦熸棌鑷不鍘�",\n    "superregion_id":463\n
}
 {
	\n    "id":4869,\n    "name":"鍖栭殕鍥炴棌鑷不鍘�",\n    "superregion_id":463\n
}
 {
	\n    "id":4870,\n    "name":"骞冲畨鍘�",\n    "superregion_id":463\n
}
 {
	\n    "id":4871,\n    "name":"寰寲鎾掓媺鏃忚嚜娌诲幙",\n    "superregion_id":463\n
}
 {
	\n    "id":4872,\n    "name":"姘戝拰鍥炴棌鍦熸棌鑷不鍘�",\n    "superregion_id":463\n
}
 {
	\n    "id":4873,\n    "name":"鍒氬療鍘�",\n    "superregion_id":464\n
}
 {
	\n    "id":4874,\n    "name":"娴锋檹鍘�",\n    "superregion_id":464\n
}
 {
	\n    "id":4875,\n    "name":"绁佽繛鍘�",\n    "superregion_id":464\n
}
 {
	\n    "id":4876,\n    "name":"闂ㄦ簮鍥炴棌鑷不鍘�",\n    "superregion_id":464\n
}
 {
	\n    "id":4877,\n    "name":"鍚屼粊鍘�",\n    "superregion_id":465\n
}
 {
	\n    "id":4878,\n    "name":"灏栨墡鍘�",\n    "superregion_id":465\n
}
 {
	\n    "id":4879,\n    "name":"娌冲崡钂欏彜鏃忚嚜娌诲幙",\n    "superregion_id":465\n
}
 {
	\n    "id":4880,\n    "name":"娉藉簱鍘�",\n    "superregion_id":465\n
}
 {
	\n    "id":4881,\n    "name":"鍏卞拰鍘�",\n    "superregion_id":466\n
}
 {
	\n    "id":4882,\n    "name":"鍏存捣鍘�",\n    "superregion_id":466\n
}
 {
	\n    "id":4883,\n    "name":"鍚屽痉鍘�",\n    "superregion_id":466\n
}
 {
	\n    "id":4884,\n    "name":"璐靛崡鍘�",\n    "superregion_id":466\n
}
 {
	\n    "id":4885,\n    "name":"璐靛痉鍘�",\n    "superregion_id":466\n
}
 {
	\n    "id":4886,\n    "name":"涔呮不鍘�",\n    "superregion_id":467\n
}
 {
	\n    "id":4887,\n    "name":"鐜涘鍘�",\n    "superregion_id":467\n
}
 {
	\n    "id":4888,\n    "name":"鐜涙瞾鍘�",\n    "superregion_id":467\n
}
 {
	\n    "id":4889,\n    "name":"鐝帥鍘�",\n    "superregion_id":467\n
}
 {
	\n    "id":4890,\n    "name":"鐢樺痉鍘�",\n    "superregion_id":467\n
}
 {
	\n    "id":4891,\n    "name":"杈炬棩鍘�",\n    "superregion_id":467\n
}
 {
	\n    "id":4892,\n    "name":"鍥婅唉鍘�",\n    "superregion_id":468\n
}
 {
	\n    "id":4893,\n    "name":"鏇查夯鑾卞幙",\n    "superregion_id":468\n
}
 {
	\n    "id":4894,\n    "name":"鏉傚鍘�",\n    "superregion_id":468\n
}
 {
	\n    "id":4895,\n    "name":"娌诲鍘�",\n    "superregion_id":468\n
}
 {
	\n    "id":4896,\n    "name":"鐜夋爲甯�",\n    "superregion_id":468\n
}
 {
	\n    "id":4897,\n    "name":"绉板鍘�",\n    "superregion_id":468\n
}
 {
	\n    "id":4898,\n    "name":"涔屽叞鍘�",\n    "superregion_id":469\n
}
 {
	\n    "id":4899,\n    "name":"鍐锋箹琛屾斂鍖�",\n    "superregion_id":469\n
}
 {
	\n    "id":4900,\n    "name":"澶ф煷鏃﹁鏀垮尯",\n    "superregion_id":469\n
}
 {
	\n    "id":4901,\n    "name":"澶╁郴鍘�",\n    "superregion_id":469\n
}
 {
	\n    "id":4902,\n    "name":"寰蜂护鍝堝競",\n    "superregion_id":469\n
}
 {
	\n    "id":4903,\n    "name":"鏍煎皵鏈ㄥ競",\n    "superregion_id":469\n
}
 {
	\n    "id":4904,\n    "name":"鑼礀琛屾斂鍖�",\n    "superregion_id":469\n
}
 {
	\n    "id":4905,\n    "name":"閮藉叞鍘�",\n    "superregion_id":469\n
}
 {
	\n    "id":4906,\n    "name":"鍏村簡鍖�",\n    "superregion_id":470\n
}
 {
	\n    "id":4907,\n    "name":"姘稿畞鍘�",\n    "superregion_id":470\n
}
 {
	\n    "id":4908,\n    "name":"鐏垫甯�",\n    "superregion_id":470\n
}
 {
	\n    "id":4909,\n    "name":"瑗垮鍖�",\n    "superregion_id":470\n
}
 {
	\n    "id":4910,\n    "name":"璐哄叞鍘�",\n    "superregion_id":470\n
}
 {
	\n    "id":4911,\n    "name":"閲戝嚖鍖�",\n    "superregion_id":470\n
}
 {
	\n    "id":4912,\n    "name":"澶ф鍙ｅ尯",\n    "superregion_id":471\n
}
 {
	\n    "id":4913,\n    "name":"骞崇綏鍘�",\n    "superregion_id":471\n
}
 {
	\n    "id":4914,\n    "name":"鎯犲啘鍖�",\n    "superregion_id":471\n
}
 {
	\n    "id":4915,\n    "name":"鍒╅€氬尯",\n    "superregion_id":472\n
}
 {
	\n    "id":4916,\n    "name":"鍚屽績鍘�",\n    "superregion_id":472\n
}
 {
	\n    "id":4917,\n    "name":"鐩愭睜鍘�",\n    "superregion_id":472\n
}
 {
	\n    "id":4918,\n    "name":"闈掗摐宄″競",\n    "superregion_id":472\n
}
 {
	\n    "id":4919,\n    "name":"鍘熷窞鍖�",\n    "superregion_id":473\n
}
 {
	\n    "id":4920,\n    "name":"褰槼鍘�",\n    "superregion_id":473\n
}
 {
	\n    "id":4921,\n    "name":"娉炬簮鍘�",\n    "superregion_id":473\n
}
 {
	\n    "id":4922,\n    "name":"瑗垮悏鍘�",\n    "superregion_id":473\n
}
 {
	\n    "id":4923,\n    "name":"闅嗗痉鍘�",\n    "superregion_id":473\n
}
 {
	\n    "id":4924,\n    "name":"涓畞鍘�",\n    "superregion_id":474\n
}
 {
	\n    "id":4925,\n    "name":"娌欏潯澶村尯",\n    "superregion_id":474\n
}
 {
	\n    "id":4926,\n    "name":"娴峰師鍘�",\n    "superregion_id":474\n
}
 {
	\n    "id":4928,\n    "name":"涔岄瞾鏈ㄩ綈鍘�",\n    "superregion_id":475\n
}
 {
	\n    "id":4929,\n    "name":"澶╁北鍖�",\n    "superregion_id":475\n
}
 {
	\n    "id":4930,\n    "name":"澶村悲娌冲尯",\n    "superregion_id":475\n
}
 {
	\n    "id":4931,\n    "name":"鏂板競鍖�",\n    "superregion_id":475\n
}
 {
	\n    "id":4932,\n    "name":"姘寸（娌熷尯",\n    "superregion_id":475\n
}
 {
	\n    "id":4933,\n    "name":"娌欎緷宸村厠鍖�",\n    "superregion_id":475\n
}
 {
	\n    "id":4934,\n    "name":"杈惧潅鍩庡尯",\n    "superregion_id":475\n
}
 {
	\n    "id":4935,\n    "name":"涔屽皵绂惧尯",\n    "superregion_id":476\n
}
 {
	\n    "id":4936,\n    "name":"鍏嬫媺鐜涗緷鍖�",\n    "superregion_id":476\n
}
 {
	\n    "id":4937,\n    "name":"鐙北瀛愬尯",\n    "superregion_id":476\n
}
 {
	\n    "id":4938,\n    "name":"鐧界⒈婊╁尯",\n    "superregion_id":476\n
}
 {
	\n    "id":4939,\n    "name":"鍚愰瞾鐣競",\n    "superregion_id":477\n
}
 {
	\n    "id":4940,\n    "name":"鎵樺厠閫婂幙",\n    "superregion_id":477\n
}
 {
	\n    "id":4941,\n    "name":"閯杽鍘�",\n    "superregion_id":477\n
}
 {
	\n    "id":4942,\n    "name":"浼婂惥鍘�",\n    "superregion_id":478\n
}
 {
	\n    "id":4943,\n    "name":"鍝堝瘑甯�",\n    "superregion_id":478\n
}
 {
	\n    "id":4944,\n    "name":"宸撮噷鍧ゅ搱钀ㄥ厠鑷不鍘�",\n    "superregion_id":478\n
}
 {
	\n    "id":4945,\n    "name":"鍚夋湪钀ㄥ皵鍘�",\n    "superregion_id":479\n
}
 {
	\n    "id":4946,\n    "name":"鍛煎浘澹佸幙",\n    "superregion_id":479\n
}
 {
	\n    "id":4947,\n    "name":"濂囧彴鍘�",\n    "superregion_id":479\n
}
 {
	\n    "id":4948,\n    "name":"鏄屽悏甯�",\n    "superregion_id":479\n
}
 {
	\n    "id":4949,\n    "name":"鏈ㄥ瀿鍝堣惃鍏嬭嚜娌诲幙",\n    "superregion_id":479\n
}
 {
	\n    "id":4950,\n    "name":"鐜涚撼鏂幙",\n    "superregion_id":479\n
}
 {
	\n    "id":4952,\n    "name":"闃滃悍甯�",\n    "superregion_id":479\n
}
 {
	\n    "id":4953,\n    "name":"鍗氫箰甯�",\n    "superregion_id":480\n
}
 {
	\n    "id":4954,\n    "name":"娓╂硥鍘�",\n    "superregion_id":480\n
}
 {
	\n    "id":4955,\n    "name":"绮炬渤鍘�",\n    "superregion_id":480\n
}
 {
	\n    "id":4956,\n    "name":"鍗氭箹鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":4957,\n    "name":"鍜岀鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":4958,\n    "name":"鍜岄潤鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":4959,\n    "name":"灏夌妬鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":4960,\n    "name":"搴撳皵鍕掑競",\n    "superregion_id":481\n
}
 {
	\n    "id":4961,\n    "name":"鐒夎€嗗洖鏃忚嚜娌诲幙",\n    "superregion_id":481\n
}
 {
	\n    "id":4962,\n    "name":"鑻ョ緦鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":4963,\n    "name":"杞彴鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":4964,\n    "name":"涔屼粈鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4965,\n    "name":"搴撹溅鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4966,\n    "name":"鎷滃煄鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4967,\n    "name":"鏂板拰鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4968,\n    "name":"鏌潽鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4969,\n    "name":"娌欓泤鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4970,\n    "name":"娓╁鍘�",\n    "superregion_id":482\n
}
 {
	\n    "id":4971,\n    "name":"闃垮厠鑻忓競",\n    "superregion_id":482\n
}
 {
	\n    "id":4972,\n    "name":"闃跨摝鎻愬幙",\n    "superregion_id":482\n
}
 {
	\n    "id":4973,\n    "name":"涔屾伆鍘�",\n    "superregion_id":483\n
}
 {
	\n    "id":4974,\n    "name":"闃垮厠闄跺幙",\n    "superregion_id":483\n
}
 {
	\n    "id":4975,\n    "name":"闃垮悎濂囧幙",\n    "superregion_id":483\n
}
 {
	\n    "id":4976,\n    "name":"闃垮浘浠€甯�",\n    "superregion_id":483\n
}
 {
	\n    "id":4977,\n    "name":"浼藉笀鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4978,\n    "name":"鍙跺煄鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4979,\n    "name":"鍠€浠€甯�",\n    "superregion_id":484\n
}
 {
	\n    "id":4980,\n    "name":"濉斾粈搴撳皵骞插鍚夊厠鑷不鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4981,\n    "name":"宀虫櫘婀栧幙",\n    "superregion_id":484\n
}
 {
	\n    "id":4982,\n    "name":"宸存鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4983,\n    "name":"娉芥櫘鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4984,\n    "name":"鐤忓嫆鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4985,\n    "name":"鐤忛檮鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4986,\n    "name":"鑻卞悏娌欏幙",\n    "superregion_id":484\n
}
 {
	\n    "id":4987,\n    "name":"鑾庤溅鍘�",\n    "superregion_id":484\n
}
 {
	\n    "id":4988,\n    "name":"楹︾洊鎻愬幙",\n    "superregion_id":484\n
}
 {
	\n    "id":4989,\n    "name":"浜庣敯鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4990,\n    "name":"鍜岀敯鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4991,\n    "name":"鍜岀敯甯�",\n    "superregion_id":485\n
}
 {
	\n    "id":4992,\n    "name":"澧ㄧ帀鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4993,\n    "name":"姘戜赴鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4994,\n    "name":"娲涙郸鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4995,\n    "name":"鐨北鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4996,\n    "name":"绛栧嫆鍘�",\n    "superregion_id":485\n
}
 {
	\n    "id":4997,\n    "name":"浼婂畞鍘�",\n    "superregion_id":486\n
}
 {
	\n    "id":4998,\n    "name":"浼婂畞甯�",\n    "superregion_id":486\n
}
 {
	\n    "id":4999,\n    "name":"濂庡悲甯�",\n    "superregion_id":486\n
}
 {
	\n    "id":5000,\n    "name":"瀵熷竷鏌ュ皵閿′集鑷不鍘�",\n    "superregion_id":486\n
}
 {
	\n    "id":5001,\n    "name":"灏煎嫆鍏嬪幙",\n    "superregion_id":486\n
}
 {
	\n    "id":5002,\n    "name":"宸╃暀鍘�",\n    "superregion_id":486\n
}
 {
	\n    "id":5003,\n    "name":"鏂版簮鍘�",\n    "superregion_id":486\n
}
 {
	\n    "id":5004,\n    "name":"鏄嫃鍘�",\n    "superregion_id":486\n
}
 {
	\n    "id":5005,\n    "name":"鐗瑰厠鏂幙",\n    "superregion_id":486\n
}
 {
	\n    "id":5006,\n    "name":"闇嶅煄鍘�",\n    "superregion_id":486\n
}
 {
	\n    "id":5007,\n    "name":"涔岃嫃甯�",\n    "superregion_id":487\n
}
 {
	\n    "id":5008,\n    "name":"鍜屽竷鍏嬭禌灏旇挋鍙よ嚜娌诲幙",\n    "superregion_id":487\n
}
 {
	\n    "id":5009,\n    "name":"濉斿煄甯�",\n    "superregion_id":487\n
}
 {
	\n    "id":5010,\n    "name":"鎵橀噷鍘�",\n    "superregion_id":487\n
}
 {
	\n    "id":5011,\n    "name":"娌欐咕鍘�",\n    "superregion_id":487\n
}
 {
	\n    "id":5012,\n    "name":"瑁曟皯鍘�",\n    "superregion_id":487\n
}
 {
	\n    "id":5013,\n    "name":"棰濇晱鍘�",\n    "superregion_id":487\n
}
 {
	\n    "id":5014,\n    "name":"鍚夋湪涔冨幙",\n    "superregion_id":488\n
}
 {
	\n    "id":5015,\n    "name":"鍝堝反娌冲幙",\n    "superregion_id":488\n
}
 {
	\n    "id":5016,\n    "name":"瀵岃暣鍘�",\n    "superregion_id":488\n
}
 {
	\n    "id":5017,\n    "name":"甯冨皵娲ュ幙",\n    "superregion_id":488\n
}
 {
	\n    "id":5018,\n    "name":"绂忔捣鍘�",\n    "superregion_id":488\n
}
 {
	\n    "id":5019,\n    "name":"闃垮嫆娉板競",\n    "superregion_id":488\n
}
 {
	\n    "id":5020,\n    "name":"闈掓渤鍘�",\n    "superregion_id":488\n
}
 {
	\n    "id":5021,\n    "name":"鐭虫渤瀛愬競",\n    "superregion_id":489\n
}
 {
	\n    "id":5022,\n    "name":"闃挎媺灏斿競",\n    "superregion_id":490\n
}
 {
	\n    "id":5023,\n    "name":"鍥炬湪鑸掑厠甯�",\n    "superregion_id":491\n
}
 {
	\n    "id":5024,\n    "name":"浜斿娓犲競",\n    "superregion_id":492\n
}
 {
	\n    "id":5025,\n    "name":"姹夋步鍖�",\n    "superregion_id":40\n
}
 {
	\n    "id":5026,\n    "name":"婊ㄦ捣鏂板尯",\n    "superregion_id":40\n
}
 {
	\n    "id":5027,\n    "name":"涔濋緳鍘�",\n    "superregion_id":404\n
}
 {
	\n    "id":5028,\n    "name":"鎬濊寘鍖�",\n    "superregion_id":421\n
}
 {
	\n    "id":5029,\n    "name":"瀹佹幢鍝堝凹鏃忓綕鏃忚嚜娌诲幙",\n    "superregion_id":421\n
}
 {
	\n    "id":5030,\n    "name":"澧ㄦ睙鍝堝凹鏃忚嚜娌诲幙",\n    "superregion_id":421\n
}
 {
	\n    "id":5031,\n    "name":"鏅笢褰濇棌鑷不鍘�",\n    "superregion_id":421\n
}
 {
	\n    "id":5032,\n    "name":"鏅胺鍌ｆ棌褰濇棌鑷不鍘�",\n    "superregion_id":421\n
}
 {
	\n    "id":5033,\n    "name":"闀囨矃褰濇棌鍝堝凹鏃忔媺绁滄棌鑷不鍘�",\n    "superregion_id":421\n
}
 {
	\n    "id":5034,\n    "name":"姹熷煄鍝堝凹鏃忓綕鏃忚嚜娌诲幙",\n    "superregion_id":421\n
}
 {
	\n    "id":5035,\n    "name":"瀛熻繛鍌ｆ棌鎷夌鏃忎饯鏃忚嚜娌诲幙",\n    "superregion_id":421\n
}
 {
	\n    "id":5036,\n    "name":"婢滄钵鎷夌鏃忚嚜娌诲幙",\n    "superregion_id":421\n
}
 {
	\n    "id":5037,\n    "name":"瑗跨洘浣ゆ棌鑷不鍘�",\n    "superregion_id":421\n
}
 {
	\n    "id":5038,\n    "name":"娉告按鍘�",\n    "superregion_id":429\n
}
 {
	\n    "id":5039,\n    "name":"绂忚础鍘�",\n    "superregion_id":429\n
}
 {
	\n    "id":5040,\n    "name":"璐″北鐙緳鏃忔€掓棌鑷不鍘�",\n    "superregion_id":429\n
}
 {
	\n    "id":5041,\n    "name":"鍏板潽鐧芥棌鏅背鏃忚嚜娌诲幙",\n    "superregion_id":429\n
}
 {
	\n    "id":5042,\n    "name":"绫充笢鍖�",\n    "superregion_id":475\n
}
 {
	\n    "id":5043,\n    "name":"涓旀湯鍘�",\n    "superregion_id":481\n
}
 {
	\n    "id":5044,\n    "name":"鍑ゅ嚢闀�",\n    "superregion_id":325\n
}
 {
	\n    "id":5045,\n    "name":"娴锋　鍖�",\n    "superregion_id":325\n
}
 {
	\n    "id":5046,\n    "name":"娌充笢鍖�",\n    "superregion_id":325\n
}
 {
	\n    "id":5047,\n    "name":"娌宠タ鍖�",\n    "superregion_id":325\n
}
 {
	\n    "id":5048,\n    "name":"鍚夐槼闀�",\n    "superregion_id":325\n
}
 {
	\n    "id":5049,\n    "name":"澶╂动闀�",\n    "superregion_id":325\n
}
 {
	\n    "id":5050,\n    "name":"宕栧煄闀�",\n    "superregion_id":325\n
}
 {
	\n    "id":5051,\n    "name":"鑲叉墠闀�",\n    "superregion_id":325\n
}
]';});
	define('text!template_widget_region',[],function () {
	return '<ul>\n {
	{#if provinces.selected.data
}
}\n\t {
	{#provinces.selected
}
}\n\t\t<li can-click="tapItem" style="\n\t\theight:44px;
	\n\t\tline-height:44px;
	\n\t\tbackground:#ccc;
	\n\t  border-bottom:1px solid #dcdcdc;
	\n\t  padding:0 15px;
	\n\t  font-size:16px;
	"> {
	{data.name
}
}</li>\n\t {
	{/provinces.selected
}
}\n {
	{else
}
}\n\t {
	{^if cities.data
}
} {
	{^if regions.data
}
}\n\t\t {
	{#provinces
}
}\n\t\t\t {
	{#each provinces.data
}
}\n\t\t\t\t<li can-click="tapItem" style="\n\t\t\t\theight:44px;
	\n\t\t\t\tline-height:44px;
	\n\t\t\t\tbackground:#fff;
	\n\t\t\t  border-bottom:1px solid #dcdcdc;
	\n\t\t\t  padding:0 15px;
	\n\t\t\t  font-size:16px;
	"> {
	{name
}
}</li>\n\t\t\t {
	{/each
}
}\n\t\t {
	{/provinces
}
}\n\t {
	{/if
}
} {
	{/if
}
}\n {
	{/if
}
}\n\n\n {
	{#if cities.selected.data
}
}\n\t {
	{#cities.selected
}
}\n\t\t<li can-click="tapItem" style="\n\t\theight:44px;
	\n\t\tline-height:44px;
	\n\t\tbackground:#e5e5e5;
	\n\t  border-bottom:1px solid #dcdcdc;
	\n\t  padding:0 15px;
	\n\t  font-size:16px;
	"> {
	{data.name
}
}</li>\n\t {
	{/cities.selected
}
}\n {
	{else
}
}\n\t {
	{^if regions.data
}
}\n\t\t {
	{#cities
}
}\n\t\t\t {
	{#each cities.data
}
}\n\t\t\t\t<li can-click="tapItem" style="\n\t\t\t\theight:44px;
	\n\t\t\t\tline-height:44px;
	\n\t\t\t\tbackground:#fff;
	\n\t\t\t  border-bottom:1px solid #dcdcdc;
	\n\t\t\t  padding:0 15px;
	\n\t\t\t  font-size:16px;
	"> {
	{name
}
}</li>\n\t\t\t {
	{/each
}
}\n\t\t {
	{/cities
}
}\n\t {
	{/if
}
}\n {
	{/if
}
}\n\n {
	{#regions
}
}\n\t {
	{#each regions.data
}
}\n\t\t<li can-click="tapItem" style="\n\t\theight:44px;
	\n\t\tline-height:44px;
	\n\t\tbackground:#fff;
	\n\t  border-bottom:1px solid #dcdcdc;
	\n\t  padding:0 15px;
	\n\t  font-size:16px;
	"> {
	{name
}
}</li>\n\t {
	{/each
}
}\n {
	{/regions
}
}\n<ul>';});
	define(
  'sf.b2c.mall.widget.region',[
    'zepto','can','sf.b2c.mall.business.config','sf.b2c.mall.adapter.regions','text!json_regions','text!template_widget_region'
  ],function($,can,SFConfig,RegionsAdapter,json_regions,template_widget_region) {
	return can.Control.extend( {
	adapter: {
	},renderData:null,helpers: {
	},init:function() {
	this.request();
	this.initRenderData();
	this.render();
}
,initRenderData:function() {
	var that = this;
	this.renderData = new can.Map( {
	provinces: {
	data:this.adapter.regions.findGroup(0),selected: {
	data:null,tapItem:_.bind(function(context,targetElement,event) {
	this.renderData.attr("provinces.selected.data",null);
	this.changeCity(0);
	this.changeRegion(0);
}
,that)},tapItem:_.bind(function(context,targetElement,event) {
	this.renderData.attr("provinces.selected.data",context);
	this.changeCity(context.id);
	this.changeRegion(0);
}
,that)},cities: {
	data:null,selected: {
	data:null,tapItem:_.bind(function(context,targetElement,event) {
	this.renderData.attr("cities.selected.data",null);
	this.changeRegion(0);
}
,that)},tapItem:_.bind(function(context,targetElement,event) {
	this.renderData.attr("cities.selected.data",context);
	this.changeRegion(context.id);
}
,that)},regions: {
	data:null,selected: {
	data:null,
}
,tapItem:_.bind(function(context,targetElement,event) {
	this.renderData.attr("regions.selected.data",context);
	this.regionFinish();
}
,that)}});
	this.initDefaultData();},initDefaultData:function() {
	var that = this;
	if (this.options.data
					&& this.options.data.provinceName
					&& this.options.data.cityName
					&& this.options.data.regionName) {
	var provinceName = this.options.data.provinceName;
	var cityName = this.options.data.cityName;
	var regionName = this.options.data.regionName;
	this.renderData.attr("provinces.selected.data" {
	name:provinceName
}
);
	this.renderData.attr("cities.selected.data" {
	name:cityName
}
);
	this.renderData.attr("regions.selected.data" {
	name:regionName
}
);
	var cities = this.adapter.regions.getGroupByName(provinceName);
	this.renderData.attr('cities.data',cities);
	var regions = this.adapter.regions.getGroupByName(cityName);
	this.renderData.attr('regions.data',regions);}},render:function() {
	var renderFn = can.mustache(template_widget_region);
	var html = renderFn(this.renderData,this.helpers);
	this.element.html(html).show();
}
,request:function() {
	var cities = JSON.parse(json_regions);
	this.adapter.regions = new RegionsAdapter( {
	cityList:cities
}
);},regionFinish:function() {
	var result = {
	nationName:"涓浗",provinceName:this.renderData.provinces.selected.data.name,cityName:this.renderData.cities.selected.data.name,regionName:this.renderData.regions.selected.data.name
}
;this.options.onFinish(result);
	this.element.html("").hide();},changeCity:function(pid) {
	if (pid == 0) {
	this.renderData.attr('cities.data',null);
}
else {
	var cities = this.adapter.regions.findGroup(window.parseInt(pid,10));
	this.renderData.attr('cities.selected.data',null);
	this.renderData.attr('cities.data',cities);
}
},changeRegion:function(cid) {
	if (cid == 0) {
	this.renderData.attr('regions.data',null);
}
else {
	var regions = this.adapter.regions.findGroup(window.parseInt(cid,10));
	this.renderData.attr('regions.selected.data',null);
	this.renderData.attr('regions.data',regions);
}
}});});
	define(
  'sf.b2c.mall.widget.bubble',[
    'zepto','can','sf.b2c.mall.business.config'
  ],function($,can,SFConfig) {
	return can.Control.extend( {
	init:function(element,options) {
	this.show(options.message,options.tick);
}
,show:function(message,tick) {
	var $el = $('<section class="tooltip center overflow-num"><div>' + message + '</div></section>');
	$(document.body).append($el);
	setTimeout(function() {
	$el.remove();
}
,tick || 10000);},hide:function() {
	$(".tooltip").remove();
}
});});
	// Auto Generated.  DO NOT EDIT!
/**
  * @class sf.b2c.mall.api.product.getPrices
  * @param {
	Object
}
$
  * @param {
	Object
}
can
  * @param {
	Object
}
_
  * @param {
	can.Construct
}
Comm
  * @param {
	Object
}
SecurityType
  * @return {
	can.Construct
}
*/
define(
'sf.b2c.mall.api.product.getPrices',[
  'zepto','can','underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.api.security.type'
],function($,can,_,Comm,SecurityType) {
	return Comm.extend( {
	api: {
	METHOD_NAME:'product.getPrices',SECURITY_TYPE:SecurityType.None.name,REQUIRED: {
	'itemIds':'long',
}
,OPTIONAL: {
	'nr':'boolean'
}
,VERIFY: {
	},ERROR_CODE: {
	'5000000':'鍙傛暟閿欒'
}
}});});
	// Auto Generated.  DO NOT EDIT!
/**
  * @class sf.b2c.mall.api.shopcart.addItemsToCart
  * @param {
	Object
}
$
  * @param {
	Object
}
can
  * @param {
	Object
}
_
  * @param {
	can.Construct
}
Comm
  * @param {
	Object
}
SecurityType
  * @return {
	can.Construct
}
*/
define(
'sf.b2c.mall.api.shopcart.addItemsToCart',[
  'zepto','can','underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.api.security.type'
],function($,can,_,Comm,SecurityType) {
	return Comm.extend( {
	api: {
	METHOD_NAME:'shopcart.addItemsToCart',SECURITY_TYPE:SecurityType.UserLogin.name,REQUIRED: {
	'items':'json'
}
,OPTIONAL: {
	},VERIFY: {
	},ERROR_CODE: {
	'15000100':'璇锋眰鍙傛暟鏈夎','15000201':'璇ュ晢鍝佷笉鏀寔鍔犲叆璐墿杞�','15000202':'娣诲姞杩涜喘鐗╄溅鐨勫晢鍝佸垪琛ㄤ负绌�','15000203':'娣诲姞杩涜喘鐗╄溅鐨勫晢鍝佽秴杩囬檺璐�','15000800':'鎮ㄧ殑璐墿杞﹀凡婊�'
}
}});});
	define(
  'sf.b2c.mall.module.price',[
    'can','zepto','underscore','sf.b2c.mall.api.product.getPrices','sf.b2c.mall.api.shopcart.addItemsToCart','sf.b2c.mall.framework.comm','sf.b2c.mall.widget.cartnumber'
  ],function(can,$,_,SFGetPrices,SFAddItemToCart,SFFrameworkComm,SFWidgetCartNumber) {
	SFFrameworkComm.register(3);
	var price = can.Control.extend( {
	init:function(element,options) {
	this.render(element);
}
,render:function(element) {
	var that = this;
	var itemIds = this.getItemList();
	// 濡傛灉涓嶅瓨鍦╥temid 鐩存帴杩斿洖
        if (!_.isArray(itemIds) || itemIds.length <= 0) {
	return false;
}
// 娓叉煋
        can.when(this.requestPrices(itemIds))
          .done(function(data) {
	// 濡傛覆鏌撲环鏍�
            that.renderPrice(data,element);
}
)
          .fail(function(errorCode) {
	console.error(errorCode);
}
)},/**
       * [renderPrice 娓叉煋浠锋牸]
       * @param {
	[type]
}
data [description]
       * @return {
	[type]
}
[description]
       */
      renderPrice:function(data,element) {
	var that = this;
	_.each(data.value,function(value,key,list) {
	var itemIds = element.find("[data-cms-itemid='" + value.id + "']")
          if (itemIds.length && itemIds.length > 1) {
	_.each(itemIds,function(item) {
	that.fillPrice($(item),value);
}
)}else {
	that.fillPrice(itemIds,value);
}
});},/**
       * [fillPrice 濉厖浠锋牸]
       * @param {
	[type]
}
element [description]
       * @param {
	[type]
}
value   [description]
       * @return {
	[type]
}
[description]
       */
      fillPrice:function(element,value) {
	// 鍞环
        element.find('.cms-fill-price').text(value.p / 100);
	// 濡傛灉鍘熶环浣庝簬鍗栦环锛屽垯涓嶅睍绀烘姌鎵ｅ拰鍘熶环
        if (value.p >= value.m || value.m == null) {
	element.find('.cms-fill-discountparent').hide();
	element.find('.cms-fill-referencepriceparent').hide();
}
else {
	element.find('.cms-fill-referenceprice').text(value.m / 100);
	element.find('.cms-fill-discount').text((parseInt(value.p,10) * 10 / parseInt(value.m,10)).toFixed(1));
}
// 鍋氬敭绌哄鐞�
        if (value.stk == 0) {
	element.find('.cms-fill-gotobuy').text('宸茬粡鎶㈠厜');
	var status = element.find('.cms-fill-status');
	if (status && status.length && status.length > 0) {
	element.find(".cms-fill-status").append('<div class="mask"><span class="icon icon5 center">鍞畬</span></div>');
}
else {
	element.find(".cms-fill-soldout").show();
}
}},getItemList:function() {
	var $el = this.element.find('.cms-src-item');
	var ids = [];
	_.each($el,function(el) {
	var id = $(el).attr('data-cms-itemid');
	if (!_.isEmpty(id)) {
	ids.push(window.parseInt(id));
}
});
	return _.uniq(ids);},requestPrices:function(itemIds) {
	var request = new SFGetPrices( {
	itemIds:JSON.stringify(itemIds)
}
);
	return request.sendRequest();},/**
       * @description 娣诲姞璐墿杞﹀姩浣滆Е鍙�
       * @param {
	element
}
el
       */
      '[data-cart=addtocart] click':function(el,event) {
	event && event.preventDefault();
	var that = this;
	var itemId = el.parents("li[data-cms-itemid]").data("cmsItemid");
	if (SFFrameworkComm.prototype.checkUserLogin.call(this)) {
	//鍚戞湇鍔″櫒绔彂閫佸姞鍏ヨ喘鐗╄溅鐨勮姹�
          can.when(this.addCart(itemId))
            .done(function(data) {
	if (data.isSuccess) {
	setTimeout(function() {
	can.trigger(window,'updateCart');
	that.updateCart();
}
,1000);
	that.showMsg("娣诲姞鎴愬姛!");}else {
	that.showMsg(data.resultMsg);
}
});}else {
	window.location.href = 'http://m.fengqu.com/user/login.html?from=' + encodeURIComponent(window.location.href);
}
},showMsg:function(msg) {
	var $el = $('<section style="position:fixed" class="tooltip center overflow-num"><div>' + msg + '</div></section>');
	$(document.body).append($el);
	setTimeout(function() {
	$el.remove();
}
,2500);},/**
       * @author Michael.Lee
       * @description 鍔犲叆璐墿杞�
       */
      addCart:function(itemId,num) {
	var addItemToCart = new SFAddItemToCart( {
	items:JSON.stringify([ {
	itemId:itemId,num:num || 1
}
])});
	// 娣诲姞璐墿杞﹀彂閫佽姹�
        return addItemToCart.sendRequest()
          .done(function(data) {
	})
          .fail(function(data) {
	if (data == 15000800) {
	var $el = $('<section style="position:fixed" class="tooltip center overflow-num"><div>鎮ㄧ殑璐墿杞﹀凡婊★紝璧剁揣鍘讳拱鍗曞摝锝�</div></section>');
	$(document.body).append($el);
	setTimeout(function() {
	$el.remove();
}
,2500);}});},/**
       * @author Michael.Lee
       * @description 鏇存柊瀵艰埅鏍忚喘鐗╄溅锛岃皟鐢ㄦ帴鍙ｅ埛鏂拌喘鐗╄溅鏁伴噺
       */
      updateCart:function() {
	var that = this;
	// 濡傛灉鐢ㄦ埛宸茬粡鐧婚檰浜嗭紝鍙互杩涜璐墿杞︽洿鏂�
        // @todo 濡傛灉鏄櫧鍚嶅崟鐨勭敤鎴峰彲浠ョ湅鍒拌喘鐗╄溅
        if (SFFrameworkComm.prototype.checkUserLogin.call(this)) {
	this.element.find('.mini-cart-num').show();
	var success = function(data) {
	$(".mini-cart-num").text(data.value);
}
;var error = function() {
	// 鏇存柊mini cart澶辫触锛屼笉鍋氫换浣曟樉绀�
}
;new SFWidgetCartNumber(success,error);}}});
	// // 鏌ュ埌鎵€鏈夐渶瑕佹覆鏌撲环鏍肩殑妯″潡
    // var priceModules = $('.cms-module-fillprice');
	// // 鍒嗗埆杩涜瀹炰緥鍖�
    // _.each(priceModules,function(priceModule) {
	//   new price($(priceModule));
	//
}
);
	var priceModules = $('.cms-module-fillprice');
	var getPriceList = function(priceModules) {
	var currentView;
	var headerHeight = $('.header').height();
	_.each(priceModules,function(priceModule) {
	currentView = $(priceModule).position().top;
	if ($(window).scrollTop() == 0) {
	if (window.screen.height > currentView) {
	if (!$(priceModule).hasClass("price-loaded")) {
	$(priceModule).addClass("price-loaded");
	new price($(priceModule));
}
}}else {
	if ($(window).scrollTop() + window.screen.height > currentView) {
	if (!$(priceModule).hasClass("price-loaded")) {
	$(priceModule).addClass("price-loaded");
	new price($(priceModule));
}
}}});};
	new getPriceList(priceModules);
	$(window).scroll(function() {
	new getPriceList(priceModules);
}
);});
	! function(a,b) {
	"function" == typeof define && (define.amd || define.cmd) ? define('jweixin',[],function() {
	return b(a)
}
):b(a,!0)}(this,function(a,b) {
	function c(b,c,d) {
	a.WeixinJSBridge ? WeixinJSBridge.invoke(b,e(c),function(a) {
	g(b,a,d)
}
):j(b,d)}function d(b,c,d) {
	a.WeixinJSBridge ? WeixinJSBridge.on(b,function(a) {
	d && d.trigger && d.trigger(a),g(b,a,c)
}
):d ? j(b,d):j(b,c)}function e(a) {
	return a = a || {
	},a.appId = z.appId,a.verifyAppId = z.appId,a.verifySignType = "sha1",a.verifyTimestamp = z.timestamp + "",a.verifyNonceStr = z.nonceStr,a.verifySignature = z.signature,a
}
function f(a) {
	return {
	timeStamp:a.timestamp + "",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType || "SHA1"
}
}function g(a,b,c) {
	var d,e,f;
	switch (delete b.err_code,delete b.err_desc,delete b.err_detail,d = b.errMsg,d || (d = b.err_msg,delete b.err_msg,d = h(a,d,c),b.errMsg = d),c = c || {
	},c._complete && (c._complete(b),delete c._complete),d = b.errMsg || "",z.debug && !c.isInnerInvoke && alert(JSON.stringify(b)),e = d.indexOf(":"),f = d.substring(e + 1)) {
	case "ok":c.success && c.success(b);
	break;
	case "cancel":c.cancel && c.cancel(b);
	break;
	default:c.fail && c.fail(b)
}
c.complete && c.complete(b)}function h(a,b) {
	var d,e,f,g;
	if (b) {
	switch (d = b.indexOf(":"),a) {
	case o.config:e = "config";
	break;
	case o.openProductSpecificView:e = "openProductSpecificView";
	break;
	default:e = b.substring(0,d),e = e.replace(/_/g," "),e = e.replace(/\b\w+\b/g,function(a) {
	return a.substring(0,1).toUpperCase() + a.substring(1)
}
),e = e.substring(0,1).toLowerCase() + e.substring(1),e = e.replace(/ /g,""),-1 != e.indexOf("Wcpay") && (e = e.replace("Wcpay","WCPay")),f = p[e],f && (e = f)}g = b.substring(d + 1),"confirm" == g && (g = "ok"),"failed" == g && (g = "fail"),-1 != g.indexOf("failed_") && (g = g.substring(7)),-1 != g.indexOf("fail_") && (g = g.substring(5)),g = g.replace(/_/g," "),g = g.toLowerCase(),("access denied" == g || "no permission to execute" == g) && (g = "permission denied"),"config" == e && "function not exist" == g && (g = "ok"),b = e + ":" + g}return b}function i(a) {
	var b,c,d,e;
	if (a) {
	for (b = 0,c = a.length;
	c > b;
	++b) d = a[b],e = o[d],e && (a[b] = e);
	return a
}
}function j(a,b) {
	if (z.debug && !b.isInnerInvoke) {
	var c = p[a];
	c && (a = c),b && b._complete && delete b._complete,console.log('"' + a + '",',b || "")
}
}function k() {
	if (!("6.0.2" > w || y.systemType < 0)) {
	var b = new Image;
	y.appId = z.appId,y.initTime = x.initEndTime - x.initStartTime,y.preVerifyTime = x.preVerifyEndTime - x.preVerifyStartTime,C.getNetworkType( {
	isInnerInvoke:!0,success:function(a) {
	y.networkType = a.networkType;
	var c = "https://open.weixin.qq.com/sdk/report?v=" + y.version + "&o=" + y.isPreVerifyOk + "&s=" + y.systemType + "&c=" + y.clientVersion + "&a=" + y.appId + "&n=" + y.networkType + "&i=" + y.initTime + "&p=" + y.preVerifyTime + "&u=" + y.url;
	b.src = c
}
})}}function l() {
	return (new Date).getTime()
}
function m(b) {
	t && (a.WeixinJSBridge ? b():q.addEventListener && q.addEventListener("WeixinJSBridgeReady",b,!1))
}
function n() {
	C.invoke || (C.invoke = function(b,c,d) {
	a.WeixinJSBridge && WeixinJSBridge.invoke(b,e(c),d)
}
,C.on = function(b,c) {
	a.WeixinJSBridge && WeixinJSBridge.on(b,c)
}
)}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;
	if (!a.jWeixin) return o = {
	config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"
}
,p = function() {
	var b,a = {
	};
	for (b in o) a[o[b]] = b;
	return a
}
(),q = a.document,r = q.title,s = navigator.userAgent.toLowerCase(),t = -1 != s.indexOf("micromessenger"),u = -1 != s.indexOf("android"),v = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"),w = function() {
	var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
	return a ? a[1]:""
}
(),x = {
	initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0
}
,y = {
	version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v ? 1:u ? 2:-1,clientVersion:w,url:encodeURIComponent(location.href)
}
,z = {
	},A = {
	_completes:[]
}
,B = {
	state:0,res: {
	}
}
,m(function() {
	x.initEndTime = l()
}
),C = {
	config:function(a) {
	z = a,j("config",a),m(function() {
	c(o.config {
	verifyJsApiList:i(z.jsApiList)
}
,function() {
	A._complete = function(a) {
	x.preVerifyEndTime = l(),B.state = 1,B.res = a
}
,A.success = function() {
	y.isPreVerifyOk = 0
}
,A.fail = function(a) {
	A._fail ? A._fail(a):B.state = -1
}
;var a = A._completes;
	return a.push(function() {
	z.debug || k()
}
),A.complete = function(b) {
	for (var c = 0,d = a.length;
	d > c;
	++c) a[c](b);
	A._completes = []
}
,A}()),x.preVerifyStartTime = l()}),z.beta && n()},ready:function(a) {
	0 != B.state ? a():(A._completes.push(a),!t && z.debug && a())
}
,error:function(a) {
	"6.0.2" > w || (-1 == B.state ? a(B.res):A._fail = a)
}
,checkJsApi:function(a) {
	var b = function(a) {
	var c,d,b = a.checkResult;
	for (c in b) d = p[c],d && (b[d] = b[c],delete b[c]);
	return a
}
;c("checkJsApi" {
	jsApiList:i(a.jsApiList)
}
,function() {
	return a._complete = function(a) {
	if (u) {
	var c = a.checkResult;
	c && (a.checkResult = JSON.parse(c))
}
a = b(a)},a}())},onMenuShareTimeline:function(a) {
	d(o.onMenuShareTimeline {
	complete:function() {
	c("shareTimeline" {
	title:a.title || r,desc:a.title || r,img_url:a.imgUrl,link:a.link || location.href
}
,a)}},a)},onMenuShareAppMessage:function(a) {
	d(o.onMenuShareAppMessage {
	complete:function() {
	c("sendAppMessage" {
	title:a.title || r,desc:a.desc || "",link:a.link || location.href,img_url:a.imgUrl,type:a.type || "link",data_url:a.dataUrl || ""
}
,a)}},a)},onMenuShareQQ:function(a) {
	d(o.onMenuShareQQ {
	complete:function() {
	c("shareQQ" {
	title:a.title || r,desc:a.desc || "",img_url:a.imgUrl,link:a.link || location.href
}
,a)}},a)},onMenuShareWeibo:function(a) {
	d(o.onMenuShareWeibo {
	complete:function() {
	c("shareWeiboApp" {
	title:a.title || r,desc:a.desc || "",img_url:a.imgUrl,link:a.link || location.href
}
,a)}},a)},startRecord:function(a) {
	c("startRecord" {
	},a)
}
,stopRecord:function(a) {
	c("stopRecord" {
	},a)
}
,onVoiceRecordEnd:function(a) {
	d("onVoiceRecordEnd",a)
}
,playVoice:function(a) {
	c("playVoice" {
	localId:a.localId
}
,a)},pauseVoice:function(a) {
	c("pauseVoice" {
	localId:a.localId
}
,a)},stopVoice:function(a) {
	c("stopVoice" {
	localId:a.localId
}
,a)},onVoicePlayEnd:function(a) {
	d("onVoicePlayEnd",a)
}
,uploadVoice:function(a) {
	c("uploadVoice" {
	localId:a.localId,isShowProgressTips:0 == a.isShowProgressTips ? 0:1
}
,a)},downloadVoice:function(a) {
	c("downloadVoice" {
	serverId:a.serverId,isShowProgressTips:0 == a.isShowProgressTips ? 0:1
}
,a)},translateVoice:function(a) {
	c("translateVoice" {
	localId:a.localId,isShowProgressTips:0 == a.isShowProgressTips ? 0:1
}
,a)},chooseImage:function(a) {
	c("chooseImage" {
	scene:"1|2",count:a.count || 9,sizeType:a.sizeType || ["original","compressed"]
}
,function() {
	return a._complete = function(a) {
	if (u) {
	var b = a.localIds;
	b && (a.localIds = JSON.parse(b))
}
},a}())},previewImage:function(a) {
	c(o.previewImage {
	current:a.current,urls:a.urls
}
,a)},uploadImage:function(a) {
	c("uploadImage" {
	localId:a.localId,isShowProgressTips:0 == a.isShowProgressTips ? 0:1
}
,a)},downloadImage:function(a) {
	c("downloadImage" {
	serverId:a.serverId,isShowProgressTips:0 == a.isShowProgressTips ? 0:1
}
,a)},getNetworkType:function(a) {
	var b = function(a) {
	var c,d,e,b = a.errMsg;
	if (a.errMsg = "getNetworkType:ok",c = a.subtype,delete a.subtype,c) a.networkType = c;
	else switch (d = b.indexOf(":"),e = b.substring(d + 1)) {
	case "wifi":case "edge":case "wwan":a.networkType = e;
	break;
	default:a.errMsg = "getNetworkType:fail"
}
return a};
	c("getNetworkType" {
	},function() {
	return a._complete = function(a) {
	a = b(a)
}
,a}())},openLocation:function(a) {
	c("openLocation" {
	latitude:a.latitude,longitude:a.longitude,name:a.name || "",address:a.address || "",scale:a.scale || 28,infoUrl:a.infoUrl || ""
}
,a)},getLocation:function(a) {
	a = a || {
	},c(o.getLocation {
	type:a.type || "wgs84"
}
,function() {
	return a._complete = function(a) {
	delete a.type
}
,a}())},hideOptionMenu:function(a) {
	c("hideOptionMenu" {
	},a)
}
,showOptionMenu:function(a) {
	c("showOptionMenu" {
	},a)
}
,closeWindow:function(a) {
	a = a || {
	},c("closeWindow" {
	immediate_close:a.immediateClose || 0
}
,a)},hideMenuItems:function(a) {
	c("hideMenuItems" {
	menuList:a.menuList
}
,a)},showMenuItems:function(a) {
	c("showMenuItems" {
	menuList:a.menuList
}
,a)},hideAllNonBaseMenuItem:function(a) {
	c("hideAllNonBaseMenuItem" {
	},a)
}
,showAllNonBaseMenuItem:function(a) {
	c("showAllNonBaseMenuItem" {
	},a)
}
,scanQRCode:function(a) {
	a = a || {
	},c("scanQRCode" {
	needResult:a.needResult || 0,scanType:a.scanType || ["qrCode","barCode"]
}
,function() {
	return a._complete = function(a) {
	var b,c;
	v && (b = a.resultStr,b && (c = JSON.parse(b),a.resultStr = c && c.scan_code && c.scan_code.scan_result))
}
,a}())},openProductSpecificView:function(a) {
	c(o.openProductSpecificView {
	pid:a.productId,view_type:a.viewType || 0
}
,a)},addCard:function(a) {
	var e,f,g,h,b = a.cardList,d = [];
	for (e = 0,f = b.length;
	f > e;
	++e) g = b[e],h = {
	card_id:g.cardId,card_ext:g.cardExt
}
,d.push(h);
	c(o.addCard {
	card_list:d
}
,function() {
	return a._complete = function(a) {
	var c,d,e,b = a.card_list;
	if (b) {
	for (b = JSON.parse(b),c = 0,d = b.length;
	d > c;
	++c) e = b[c],e.cardId = e.card_id,e.cardExt = e.card_ext,e.isSuccess = e.is_succ ? !0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;
	a.cardList = b,delete a.card_list
}
},a}())},chooseCard:function(a) {
	c("chooseCard" {
	app_id:z.appId,location_id:a.shopId || "",sign_type:a.signType || "SHA1",card_id:a.cardId || "",card_type:a.cardType || "",card_sign:a.cardSign,time_stamp:a.timestamp + "",nonce_str:a.nonceStr
}
,function() {
	return a._complete = function(a) {
	a.cardList = a.choose_card_info,delete a.choose_card_info
}
,a}())},openCard:function(a) {
	var e,f,g,h,b = a.cardList,d = [];
	for (e = 0,f = b.length;
	f > e;
	++e) g = b[e],h = {
	card_id:g.cardId,code:g.code
}
,d.push(h);
	c(o.openCard {
	card_list:d
}
,a)},chooseWXPay:function(a) {
	c(o.chooseWXPay,f(a),a)
}
},b && (a.wx = a.jWeixin = C),C});
	// Auto Generated.  DO NOT EDIT!
/**
  * @class sf.b2c.mall.api.user.getWeChatJsApiSig
  * @param {
	Object
}
$
  * @param {
	Object
}
can
  * @param {
	Object
}
_
  * @param {
	can.Construct
}
Comm
  * @param {
	Object
}
SecurityType
  * @return {
	can.Construct
}
*/
define(
'sf.b2c.mall.api.user.getWeChatJsApiSig',[
  'zepto','can','underscore','sf.b2c.mall.framework.comm','sf.b2c.mall.api.security.type'
],function($,can,_,Comm,SecurityType) {
	return Comm.extend( {
	api: {
	METHOD_NAME:'user.getWeChatJsApiSig',SECURITY_TYPE:SecurityType.None.name,REQUIRED: {
	'keyValuePairs':'json'
}
,OPTIONAL: {
	},VERIFY: {
	},ERROR_CODE: {
	}
}
});});
	define('sf.weixin',[
    'zepto','can','jweixin','sf.util','store','sf.b2c.mall.api.user.getWeChatJsApiSig'
],function($,can,jweixin,SFUtil,store,SFGetWeChatJsApiSig) {
	var createNonceStr = function() {
	return Math.random().toString(36).substr(2,15);
}
;var createTimestamp = function() {
	return parseInt(new Date().getTime() / 1000) + '';
}
;var gethHostUrl = function() {
	// return window.location.origin + window.location.pathname;
	return window.location.href;
}
;var configWeixin = function() {
	var noncestr = createNonceStr();
	var timestamp = createTimestamp();
	var ret = {
	"keyValuePairs":JSON.stringify([ {
	"value":noncestr,"key":"noncestr"
}
 {
	"value":timestamp,"key":"timestamp"
}
 {
	"value":gethHostUrl(),"key":"url"
}
])};
	var getWeChatJsApiSig = new SFGetWeChatJsApiSig(ret);
	getWeChatJsApiSig
            .sendRequest()
            .done(function(data) {
	jweixin.config( {
	"debug":false,"appId":'wxba06a7bc806357c3',"timestamp":timestamp,"nonceStr":noncestr,"signature":data.value,"jsApiList":[
                        'onMenuShareTimeline','onMenuShareAppMessage','imagePreview'
                    ]
}
);})
            .fail(function(error) {
	console.error(error);
}
)};
	return {
	/** [shareIndex 鍒嗕韩棣栭〉] */
        shareIndex:function() {
	if (SFUtil.isMobile.WeChat()) {
	//杩涜寰俊璁剧疆
                configWeixin();
}
// 瀹氫箟寰俊鍒嗕韩鐨勬暟鎹�
            jweixin.ready(function() {
	jweixin.onMenuShareTimeline( {
	title:'椤轰赴娴锋窐--鍒啀娣樺疂鍟︼紒蹇潵椤轰赴娴锋窐锛屾寫娴峰濂借揣锛屼竴璧锋彁鍗嘊鏍硷紒',desc:'鍒啀娣樺疂鍟︼紒蹇潵椤轰赴娴锋窐锛屾寫娴峰濂借揣锛屼竴璧锋彁鍗嘊鏍硷紒',link:'http://m.fengqu.com/index.html',imgUrl:'http://img0.fengqucdn.com/sfht/img/sharelog.png',trigger:function(res) {
	// alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
}
,success:function(res) {
	// alert('宸插垎浜�');
}
,cancel:function(res) {
	// alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.onMenuShareAppMessage( {
	title:'椤轰赴娴锋窐--鍒啀娣樺疂鍟︼紒蹇潵椤轰赴娴锋窐锛屾寫娴峰濂借揣锛屼竴璧锋彁鍗嘊鏍硷紒',desc:'鍒啀娣樺疂鍟︼紒蹇潵椤轰赴娴锋窐锛屾寫娴峰濂借揣锛屼竴璧锋彁鍗嘊鏍硷紒',link:'http://m.fengqu.com/index.html',imgUrl:'http://img0.fengqucdn.com/fqhth5/h5-common-oss/2.0.24/img/sharelog.png',trigger:function(res) {
	// alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
}
,success:function(res) {
	// alert('宸插垎浜�');
}
,cancel:function(res) {
	// alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.showMenuItems( {
	menuList:['menuItem:share:timeline','menuItem:share:appmessage','imagePreview']
}
);})},share:function(params) {
	if (SFUtil.isMobile.WeChat()) {
	configWeixin();
}
params = params || {
	};
	var empty = function() {
	};
	// 瀹氫箟寰俊鍒嗕韩鐨勬暟鎹�
            jweixin.ready(function() {
	jweixin.onMenuShareTimeline( {
	title:params.title,desc:params.desc,link:params.link,imgUrl:params.imgUrl,trigger:params.trigger || empty,success:params.success || empty,cancel:params.cancel || empty,fail:params.fail || empty
}
);
	jweixin.onMenuShareAppMessage( {
	title:params.title,desc:params.desc,link:params.link,imgUrl:params.imgUrl,trigger:params.trigger || empty,success:params.success || empty,cancel:params.cancel || empty,fail:params.fail || empty
}
);
	jweixin.showMenuItems( {
	menuList:['menuItem:share:timeline','menuItem:share:appmessage']
}
);});},/**
         * [shareDetail 鍒嗕韩璇︽儏椤礭
         * @param {
	[type]
}
title  [鏍囬]
         * @param {
	[type]
}
desc   [鎻忚堪]
         * @param {
	[type]
}
link   [閾炬帴]
         * @param {
	[type]
}
imgUrl [鍥剧墖閾炬帴]
         */
        shareDetail:function(title,desc,link,imgUrl,successCallback) {
	var that = this;
	if (SFUtil.isMobile.WeChat()) {
	//杩涜寰俊璁剧疆
                configWeixin();
}
// 瀹氫箟寰俊鍒嗕韩鐨勬暟鎹�
            jweixin.ready(function() {
	//杩涜寰俊璁剧疆

                jweixin.onMenuShareTimeline( {
	title:title,desc:desc,link:link,imgUrl:imgUrl,trigger:function(res) {
	// alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
}
,success:function(res) {
	if (typeof successCallback != 'undefined') {
	successCallback.call(this);
}
// alert('宸插垎浜�');},cancel:function(res) {
	// alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.onMenuShareAppMessage( {
	title:title,desc:desc,link:link,imgUrl:imgUrl,trigger:function(res) {
	// alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
}
,success:function(res) {
	if (typeof successCallback != 'undefined') {
	successCallback.call(this);
}
// alert('宸插垎浜�');},cancel:function(res) {
	// alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.showMenuItems( {
	menuList:['menuItem:share:timeline','menuItem:share:appmessage']
}
);})},/**
         * [shareLuckyMoney 鍒嗕韩绾㈠寘]
         * @param {
	[type]
}
title  [鏍囬]
         * @param {
	[type]
}
desc   [鎻忚堪]
         * @param {
	[type]
}
id   [绾㈠寘ID]
         */
        shareInvitation:function(title,desc,bagid,userid) {
	var that = this;
	var shareUrl = "http://m.fengqu.com/center/invitation-bag.html?_ruser=" + userid + "&bagid=" + bagid;
	if (SFUtil.isMobile.WeChat()) {
	//杩涜寰俊璁剧疆
                configWeixin();
}
// 瀹氫箟寰俊鍒嗕韩鐨勬暟鎹�
            jweixin.ready(function() {
	jweixin.onMenuShareTimeline( {
	title:title,desc:desc,link:shareUrl,imgUrl:'http://img0.fengqucdn.com/sfhth5/1.1.2/img/luckymoneyshare.jpg',trigger:function(res) {
	//alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸鍦�');
}
,success:function(res) {
	//alert('宸插垎浜�');
}
,cancel:function(res) {
	//alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.onMenuShareAppMessage( {
	title:title,desc:desc,link:shareUrl,imgUrl:'http://img0.fengqucdn.com/sfhth5/1.1.2/img/luckymoneyshare.jpg',trigger:function(res) {
	//alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
}
,success:function(res) {
	//alert('宸插垎浜�');
}
,cancel:function(res) {
	//alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.showMenuItems( {
	menuList:['menuItem:share:timeline','menuItem:share:appmessage']
}
);})},/**
         * [shareLuckyMoney 鍒嗕韩绾㈠寘]
         * @param {
	[type]
}
title  [鏍囬]
         * @param {
	[type]
}
desc   [鎻忚堪]
         * @param {
	[type]
}
id   [绾㈠寘ID]
         */
        shareLuckyMoney:function(title,desc,id) {
	var that = this;
	/*
            var params = {
	appid:"wx90f1dcb866f3df60",redirect_uri:"http://m.fengqu.com/luckymoneyaccept.html",response_type:"code",scope:"snsapi_base",state:id
}
;var shareUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?"
              + $.param(params) + "#wechat_redirect"
            */
            var shareUrl = "http://m.fengqu.com/other/luckymoneyaccept.html?id=" + id;
	if (SFUtil.isMobile.WeChat()) {
	//杩涜寰俊璁剧疆
                configWeixin();
}
// 瀹氫箟寰俊鍒嗕韩鐨勬暟鎹�
            jweixin.ready(function() {
	jweixin.onMenuShareTimeline( {
	title:title,desc:desc,link:shareUrl,imgUrl:'http://img0.fengqucdn.com/sfhth5/1.1.2/img/luckymoneyshare.jpg',trigger:function(res) {
	//alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸鍦�');
}
,success:function(res) {
	//alert('宸插垎浜�');
}
,cancel:function(res) {
	//alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.onMenuShareAppMessage( {
	title:title,desc:desc,link:shareUrl,imgUrl:'http://img0.fengqucdn.com/sfhth5/1.1.2/img/luckymoneyshare.jpg',trigger:function(res) {
	//alert('鐢ㄦ埛鐐瑰嚮鍙戦€佺粰鏈嬪弸');
}
,success:function(res) {
	//alert('宸插垎浜�');
}
,cancel:function(res) {
	//alert('宸插彇娑�');
}
,fail:function(res) {
	//alert(JSON.stringify(res));
}
});
	jweixin.showMenuItems( {
	menuList:['menuItem:share:timeline','menuItem:share:appmessage']
}
);})}};});
	/*
* @Author:guankaiqiang
* @Date:2016-06-29 20:11:25
* @Last Modified by:guankaiqiang
* @Last Modified time:2016-06-29 21:39:30
*/


define('sf.b2c.mall.weixin.weixinshare',['sf.weixin'],function(SFWeixin) {
	var params = {
	title:document.title,desc:document.title,link:location.href,imgUrl:window.getMetaData('shareicon')?window.getMetaData('shareicon'):"http://img0.fengqucdn.com/cmsres/20160624/85ebcb02-2af8-4aa8-a1f3-353554ac9ea6.png"
}
;SFWeixin.share(params);});
	define('text!template_component_nav',[],function () {
	return '<section>\n  <div class="nav-r1" style="background:transparent;
	border:none;
	">\n    <div class="nav-c1 fl">\n      <a href="http://m.fengqu.com/index.html">\n        <span class="icon icon25"></span>\n        <div>棣栭〉</div>\n      </a>\n    </div>\n    <div class="nav-c1 fl">\n      <a href="http://m.fengqu.com/center/center.html">\n        <span class="icon icon26"></span>\n        <div>鎴戠殑</div>\n      </a>\n    </div>\n  </div>\n</section>';
}
);
	define('sf.b2c.mall.component.nav',[
  'can','zepto','text','text!template_component_nav'
],function(can,$,text,template_component_nav) {
	return can.Control.extend( {
	init:function() {
	this.render()
}
,render:function() {
	var renderFn = can.mustache(template_component_nav);
	var html = renderFn( {
	});
	this.element.html(html);
}
});});
	'use strict'

define(
  'sf.bridge',[
    'zepto','zepto.cookie','can','underscore',],function ($,cookies,can,_) {
	var emptyFn = function() {
	};
	var Bridge = can.Control.extend( {
	init:function () {
	this.troops = {
	};
	var tmp = can.route.attr('version') || $.fn.cookie('version');
	if (tmp) {
	var arr = tmp.split('.');
	this.version = arr.join('');
	$.fn.cookie('version',this.version);
}
},register:function (success,error) {
	var timestamp = Date.now()
        var callbackId = 'sfht_'+timestamp;
	this.troops[callbackId] = {
	success:success || emptyFn,error:error || emptyFn
}
;return callbackId;},run:function (plugin,method,params,success,error) {
	var callbackId = this.register(success,error);
	var msg;
	var paramsJs = JSON.stringify(params);
	try {
	if(_.isArray(params)) {
	msg = window.sfhtandroidbridge.runner(plugin,method,paramsJs,callbackId);
}
else {
	paramsJs = '[' +paramsJs+ ']';
	msg = window.sfhtandroidbridge.runner(plugin,method,paramsJs,callbackId);
}
}catch(e) {
	console.log(e.name + ":" + e.message)
}
//if not android
        if (!msg && this.version && this.version >= 130) {
	var urlscheme = 'sfhtbridge://service/pluginHelper?plugin='+ plugin +'&method='+ method +'&params='+ encodeURIComponent(paramsJs)+ '&callbackId='+callbackId;
	if ($('#apprunner').length == 0) {
	var $el = $('<iframe id="apprunner" style="height:0px"></iframe>');
	$el.attr('src',urlscheme);
	$('body').append($el);
}
else {
	$('#apprunner').attr('src',urlscheme);
}
}}});
	window.bridge = new Bridge();
	window.sfhtcallback = function (callbackId,status,json,keep) {
	var map = {
	0:'error',1:'success'
}
var type = map[status];
	if (window.bridge.troops && window.bridge.troops[callbackId]) {
	var fn = window.bridge.troops[callbackId][type];
	if (_.isFunction(fn)) {
	fn.call(window.bridge,json);
}
if (!keep) {
	delete window.bridge.troops[callbackId]
}
return true;}else {
	return false;
}
}});
	define('sf.helpers',[
  'zepto','can','underscore','moment'
],function($,can,_,moment) {
	can.Mustache.registerHelper('sf.toggle',function(value) {
	return function(el) {
	new Toggle(el {
	value:value
}
);};});
	can.Mustache.registerHelper('sf.time',function(time,format) {
	if (_.isFunction(time)) {
	time = time();
}
if (_.isObject(arguments[1])) {
	format = 'YYYY-MM-DD HH:mm:ss';
}
return moment(time).format(format);});
	can.Mustache.registerHelper('sf.timeMDH',function(time) {
	if (_.isFunction(time)) {
	time = time();
}
return moment(time).format('M鏈圖鏃鐐�');});
	can.Mustache.registerHelper('sf.timeYMD',function(time) {
	if (_.isFunction(time)) {
	time = time();
}
return moment(time).format('YYYY-MM-DD');});
	can.Mustache.registerHelper('sf.split',function(str) {
	if (_.isFunction(str)) {
	str = str();
}
if (str.length > 3) {
	return str;
}
return str.split("").join(" ");});
	/**
   * @description sf.price
   * @param {
	int
}
price Price
   */
  can.Mustache.registerHelper('sf.price',function(price) {
	var getValue = function(v) {
	if (_.isFunction(v)) {
	price = v();
}
};
	while (_.isFunction(price)) {
	getValue(price);
}
// return (price/100).toFixed(2).toString();
	return (price / 100).toString();});
	can.Mustache.registerHelper('sf.img',function(img,options) {
	if (_.isFunction(img)) {
	img = img();
}
var arr = [];
	if (_.isString(img)) {
	arr = img.split(',');
}
else if (_.isArray(img)) {
	arr = img;
}
//鍋氱嚎涓婂吋瀹癸紝濡傛灉鏈塰ttp浜� 灏变笉瑕佸啀鍔犲墠缂€
    var hasURL = _.str.include(arr[0],'http://')
    if (hasURL) {
	return arr[0];
}
return 'http://img0.fengqucdn.com/' + arr[0];});});
	'use strict'

define('sf.mediav',[],function() {
	var monitor = {
	watchOrderDetail:function (user,order) {
	var __src = $.fn.cookie('_src');
	if(/^media_v/.test(__src)) {
	var _mvq = window._mvq || [];
	window._mvq = _mvq;
	_mvq.push(['$setAccount','m-123868-0']);
	_mvq.push(['$setGeneral','orderdetail','',/*鐢ㄦ埛鍚�*/ user.name,/*鐢ㄦ埛id*/ user.id]);
	_mvq.push(['$logConversion']);
	_mvq.push(['$addOrderDetail',/*璁㈠崟鍙�*/ order.id,/*璁㈠崟閲戦*/ order.amount,/*杩愯垂*/ order.fee,/*鐪�*/ order.province,/*甯�*/ order.city]);
	_mvq.push(['$logData']);
}
},watchShoppingCart:function (user,products) {
	var __src = $.fn.cookie('_src');
	if(/^media_v/.test(__src)) {
	if (user && products) {
	var _mvq = window._mvq || [];
	window._mvq = _mvq;
	_mvq.push(['$setAccount','m-123868-0']);
	_mvq.push(['$setGeneral','cartview','',/*鐢ㄦ埛鍚�*/ user.name,/*鐢ㄦ埛id*/ user.id]);
	_mvq.push(['$logConversion']);
	for (var i = 0;
	i < products.length;
	i++) {
	_mvq.push(['$addItem','',/*鍟嗗搧id*/ products[i].id,'','']);
}
;_mvq.push(['$logData']);}}},watchRegistered:function (user) {
	var __src = $.fn.cookie('_src');
	if(/^media_v/.test(__src)) {
	if (user) {
	var _mvq = window._mvq || [];
	window._mvq = _mvq;
	_mvq.push(['$setAccount','m-123868-0']);
	_mvq.push(['$setGeneral','registered','',/*鐢ㄦ埛鍚�*/ user.name,/*鐢ㄦ埛id*/ '']);
	_mvq.push(['$logConversion']);
}
}},watchOrderSubmit:function (user,order,products) {
	var orderid = (new Date).valueOf();
	var __src = $.fn.cookie('_src');
	if(/^media_v/.test(__src)) {
	var _mvq = window._mvq || [];
	window._mvq = _mvq;
	_mvq.push(['$setAccount','m-123868-0']);
	_mvq.push(['$setGeneral','ordercreate','',/*鐢ㄦ埛鍚�*/ user.name,/*鐢ㄦ埛id*/ '']);
	_mvq.push(['$logConversion']);
	_mvq.push(['$addOrder',/*璁㈠崟鍙�*/ orderid,/*璁㈠崟閲戦*/ order.amount]);
	for (var i = 0;
	i < products.length;
	i++) {
	var value  = products[i];
	_mvq.push(['$addItem',/*璁㈠崟鍙�*/ orderid,/*鍟嗗搧id*/ value.itemId,/*鍟嗗搧鍚嶇О*/ value.goodsName,/*鍟嗗搧浠锋牸*/ value.price,/*鍟嗗搧鏁伴噺*/ value.quantity,/*鍟嗗搧椤祏rl*/ value.detailUrl,/*鍟嗗搧椤靛浘鐗噓rl*/ '']);
}
;_mvq.push(['$logData']);}}};
	return monitor;});
	require(["sf.b2c.mall.framework.https"]);