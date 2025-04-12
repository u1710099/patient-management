goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15106 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15106(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15108 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15108(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13684 = coll;
var G__13685 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13684,G__13685) : shadow.dom.lazy_native_coll_seq.call(null,G__13684,G__13685));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13740 = arguments.length;
switch (G__13740) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13756 = arguments.length;
switch (G__13756) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13771 = arguments.length;
switch (G__13771) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13812 = arguments.length;
switch (G__13812) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13839 = arguments.length;
switch (G__13839) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13856 = arguments.length;
switch (G__13856) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13879){if((e13879 instanceof Object)){
var e = e13879;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13879;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13884 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13885 = null;
var count__13886 = (0);
var i__13887 = (0);
while(true){
if((i__13887 < count__13886)){
var el = chunk__13885.cljs$core$IIndexed$_nth$arity$2(null,i__13887);
var handler_15138__$1 = ((function (seq__13884,chunk__13885,count__13886,i__13887,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13884,chunk__13885,count__13886,i__13887,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15138__$1);


var G__15140 = seq__13884;
var G__15141 = chunk__13885;
var G__15142 = count__13886;
var G__15143 = (i__13887 + (1));
seq__13884 = G__15140;
chunk__13885 = G__15141;
count__13886 = G__15142;
i__13887 = G__15143;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13884);
if(temp__5804__auto__){
var seq__13884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13884__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13884__$1);
var G__15144 = cljs.core.chunk_rest(seq__13884__$1);
var G__15145 = c__5525__auto__;
var G__15146 = cljs.core.count(c__5525__auto__);
var G__15147 = (0);
seq__13884 = G__15144;
chunk__13885 = G__15145;
count__13886 = G__15146;
i__13887 = G__15147;
continue;
} else {
var el = cljs.core.first(seq__13884__$1);
var handler_15148__$1 = ((function (seq__13884,chunk__13885,count__13886,i__13887,el,seq__13884__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13884,chunk__13885,count__13886,i__13887,el,seq__13884__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15148__$1);


var G__15149 = cljs.core.next(seq__13884__$1);
var G__15150 = null;
var G__15151 = (0);
var G__15152 = (0);
seq__13884 = G__15149;
chunk__13885 = G__15150;
count__13886 = G__15151;
i__13887 = G__15152;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13906 = arguments.length;
switch (G__13906) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13917 = cljs.core.seq(events);
var chunk__13919 = null;
var count__13920 = (0);
var i__13921 = (0);
while(true){
if((i__13921 < count__13920)){
var vec__13972 = chunk__13919.cljs$core$IIndexed$_nth$arity$2(null,i__13921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13972,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15158 = seq__13917;
var G__15159 = chunk__13919;
var G__15160 = count__13920;
var G__15161 = (i__13921 + (1));
seq__13917 = G__15158;
chunk__13919 = G__15159;
count__13920 = G__15160;
i__13921 = G__15161;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13917);
if(temp__5804__auto__){
var seq__13917__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13917__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13917__$1);
var G__15162 = cljs.core.chunk_rest(seq__13917__$1);
var G__15163 = c__5525__auto__;
var G__15164 = cljs.core.count(c__5525__auto__);
var G__15165 = (0);
seq__13917 = G__15162;
chunk__13919 = G__15163;
count__13920 = G__15164;
i__13921 = G__15165;
continue;
} else {
var vec__13979 = cljs.core.first(seq__13917__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13979,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15166 = cljs.core.next(seq__13917__$1);
var G__15167 = null;
var G__15168 = (0);
var G__15169 = (0);
seq__13917 = G__15166;
chunk__13919 = G__15167;
count__13920 = G__15168;
i__13921 = G__15169;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13999 = cljs.core.seq(styles);
var chunk__14000 = null;
var count__14001 = (0);
var i__14002 = (0);
while(true){
if((i__14002 < count__14001)){
var vec__14041 = chunk__14000.cljs$core$IIndexed$_nth$arity$2(null,i__14002);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15172 = seq__13999;
var G__15173 = chunk__14000;
var G__15174 = count__14001;
var G__15175 = (i__14002 + (1));
seq__13999 = G__15172;
chunk__14000 = G__15173;
count__14001 = G__15174;
i__14002 = G__15175;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13999);
if(temp__5804__auto__){
var seq__13999__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13999__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13999__$1);
var G__15176 = cljs.core.chunk_rest(seq__13999__$1);
var G__15177 = c__5525__auto__;
var G__15178 = cljs.core.count(c__5525__auto__);
var G__15179 = (0);
seq__13999 = G__15176;
chunk__14000 = G__15177;
count__14001 = G__15178;
i__14002 = G__15179;
continue;
} else {
var vec__14046 = cljs.core.first(seq__13999__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15184 = cljs.core.next(seq__13999__$1);
var G__15185 = null;
var G__15186 = (0);
var G__15187 = (0);
seq__13999 = G__15184;
chunk__14000 = G__15185;
count__14001 = G__15186;
i__14002 = G__15187;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14054_15188 = key;
var G__14054_15189__$1 = (((G__14054_15188 instanceof cljs.core.Keyword))?G__14054_15188.fqn:null);
switch (G__14054_15189__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15192 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15192,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15192,"aria-");
}
})())){
el.setAttribute(ks_15192,value);
} else {
(el[ks_15192] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14178){
var map__14179 = p__14178;
var map__14179__$1 = cljs.core.__destructure_map(map__14179);
var props = map__14179__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14180 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14185 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14185,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14185;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14203 = arguments.length;
switch (G__14203) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14212){
var vec__14213 = p__14212;
var seq__14214 = cljs.core.seq(vec__14213);
var first__14215 = cljs.core.first(seq__14214);
var seq__14214__$1 = cljs.core.next(seq__14214);
var nn = first__14215;
var first__14215__$1 = cljs.core.first(seq__14214__$1);
var seq__14214__$2 = cljs.core.next(seq__14214__$1);
var np = first__14215__$1;
var nc = seq__14214__$2;
var node = vec__14213;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14217 = nn;
var G__14218 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14217,G__14218) : create_fn.call(null,G__14217,G__14218));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14219 = nn;
var G__14220 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14219,G__14220) : create_fn.call(null,G__14219,G__14220));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14228 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(1),null);
var seq__14234_15199 = cljs.core.seq(node_children);
var chunk__14235_15200 = null;
var count__14236_15201 = (0);
var i__14237_15202 = (0);
while(true){
if((i__14237_15202 < count__14236_15201)){
var child_struct_15203 = chunk__14235_15200.cljs$core$IIndexed$_nth$arity$2(null,i__14237_15202);
var children_15204 = shadow.dom.dom_node(child_struct_15203);
if(cljs.core.seq_QMARK_(children_15204)){
var seq__14331_15206 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15204));
var chunk__14333_15207 = null;
var count__14334_15208 = (0);
var i__14335_15209 = (0);
while(true){
if((i__14335_15209 < count__14334_15208)){
var child_15210 = chunk__14333_15207.cljs$core$IIndexed$_nth$arity$2(null,i__14335_15209);
if(cljs.core.truth_(child_15210)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15210);


var G__15215 = seq__14331_15206;
var G__15216 = chunk__14333_15207;
var G__15217 = count__14334_15208;
var G__15218 = (i__14335_15209 + (1));
seq__14331_15206 = G__15215;
chunk__14333_15207 = G__15216;
count__14334_15208 = G__15217;
i__14335_15209 = G__15218;
continue;
} else {
var G__15219 = seq__14331_15206;
var G__15220 = chunk__14333_15207;
var G__15221 = count__14334_15208;
var G__15222 = (i__14335_15209 + (1));
seq__14331_15206 = G__15219;
chunk__14333_15207 = G__15220;
count__14334_15208 = G__15221;
i__14335_15209 = G__15222;
continue;
}
} else {
var temp__5804__auto___15223 = cljs.core.seq(seq__14331_15206);
if(temp__5804__auto___15223){
var seq__14331_15224__$1 = temp__5804__auto___15223;
if(cljs.core.chunked_seq_QMARK_(seq__14331_15224__$1)){
var c__5525__auto___15225 = cljs.core.chunk_first(seq__14331_15224__$1);
var G__15226 = cljs.core.chunk_rest(seq__14331_15224__$1);
var G__15227 = c__5525__auto___15225;
var G__15228 = cljs.core.count(c__5525__auto___15225);
var G__15229 = (0);
seq__14331_15206 = G__15226;
chunk__14333_15207 = G__15227;
count__14334_15208 = G__15228;
i__14335_15209 = G__15229;
continue;
} else {
var child_15230 = cljs.core.first(seq__14331_15224__$1);
if(cljs.core.truth_(child_15230)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15230);


var G__15231 = cljs.core.next(seq__14331_15224__$1);
var G__15232 = null;
var G__15233 = (0);
var G__15234 = (0);
seq__14331_15206 = G__15231;
chunk__14333_15207 = G__15232;
count__14334_15208 = G__15233;
i__14335_15209 = G__15234;
continue;
} else {
var G__15236 = cljs.core.next(seq__14331_15224__$1);
var G__15237 = null;
var G__15238 = (0);
var G__15239 = (0);
seq__14331_15206 = G__15236;
chunk__14333_15207 = G__15237;
count__14334_15208 = G__15238;
i__14335_15209 = G__15239;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15204);
}


var G__15240 = seq__14234_15199;
var G__15241 = chunk__14235_15200;
var G__15242 = count__14236_15201;
var G__15243 = (i__14237_15202 + (1));
seq__14234_15199 = G__15240;
chunk__14235_15200 = G__15241;
count__14236_15201 = G__15242;
i__14237_15202 = G__15243;
continue;
} else {
var temp__5804__auto___15244 = cljs.core.seq(seq__14234_15199);
if(temp__5804__auto___15244){
var seq__14234_15245__$1 = temp__5804__auto___15244;
if(cljs.core.chunked_seq_QMARK_(seq__14234_15245__$1)){
var c__5525__auto___15246 = cljs.core.chunk_first(seq__14234_15245__$1);
var G__15247 = cljs.core.chunk_rest(seq__14234_15245__$1);
var G__15248 = c__5525__auto___15246;
var G__15249 = cljs.core.count(c__5525__auto___15246);
var G__15250 = (0);
seq__14234_15199 = G__15247;
chunk__14235_15200 = G__15248;
count__14236_15201 = G__15249;
i__14237_15202 = G__15250;
continue;
} else {
var child_struct_15251 = cljs.core.first(seq__14234_15245__$1);
var children_15252 = shadow.dom.dom_node(child_struct_15251);
if(cljs.core.seq_QMARK_(children_15252)){
var seq__14386_15253 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15252));
var chunk__14388_15254 = null;
var count__14389_15255 = (0);
var i__14390_15256 = (0);
while(true){
if((i__14390_15256 < count__14389_15255)){
var child_15257 = chunk__14388_15254.cljs$core$IIndexed$_nth$arity$2(null,i__14390_15256);
if(cljs.core.truth_(child_15257)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15257);


var G__15258 = seq__14386_15253;
var G__15259 = chunk__14388_15254;
var G__15260 = count__14389_15255;
var G__15261 = (i__14390_15256 + (1));
seq__14386_15253 = G__15258;
chunk__14388_15254 = G__15259;
count__14389_15255 = G__15260;
i__14390_15256 = G__15261;
continue;
} else {
var G__15262 = seq__14386_15253;
var G__15263 = chunk__14388_15254;
var G__15264 = count__14389_15255;
var G__15265 = (i__14390_15256 + (1));
seq__14386_15253 = G__15262;
chunk__14388_15254 = G__15263;
count__14389_15255 = G__15264;
i__14390_15256 = G__15265;
continue;
}
} else {
var temp__5804__auto___15266__$1 = cljs.core.seq(seq__14386_15253);
if(temp__5804__auto___15266__$1){
var seq__14386_15267__$1 = temp__5804__auto___15266__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14386_15267__$1)){
var c__5525__auto___15268 = cljs.core.chunk_first(seq__14386_15267__$1);
var G__15269 = cljs.core.chunk_rest(seq__14386_15267__$1);
var G__15270 = c__5525__auto___15268;
var G__15271 = cljs.core.count(c__5525__auto___15268);
var G__15272 = (0);
seq__14386_15253 = G__15269;
chunk__14388_15254 = G__15270;
count__14389_15255 = G__15271;
i__14390_15256 = G__15272;
continue;
} else {
var child_15273 = cljs.core.first(seq__14386_15267__$1);
if(cljs.core.truth_(child_15273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15273);


var G__15274 = cljs.core.next(seq__14386_15267__$1);
var G__15275 = null;
var G__15276 = (0);
var G__15277 = (0);
seq__14386_15253 = G__15274;
chunk__14388_15254 = G__15275;
count__14389_15255 = G__15276;
i__14390_15256 = G__15277;
continue;
} else {
var G__15278 = cljs.core.next(seq__14386_15267__$1);
var G__15279 = null;
var G__15280 = (0);
var G__15281 = (0);
seq__14386_15253 = G__15278;
chunk__14388_15254 = G__15279;
count__14389_15255 = G__15280;
i__14390_15256 = G__15281;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15252);
}


var G__15283 = cljs.core.next(seq__14234_15245__$1);
var G__15284 = null;
var G__15285 = (0);
var G__15286 = (0);
seq__14234_15199 = G__15283;
chunk__14235_15200 = G__15284;
count__14236_15201 = G__15285;
i__14237_15202 = G__15286;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14448 = cljs.core.seq(node);
var chunk__14449 = null;
var count__14450 = (0);
var i__14451 = (0);
while(true){
if((i__14451 < count__14450)){
var n = chunk__14449.cljs$core$IIndexed$_nth$arity$2(null,i__14451);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15295 = seq__14448;
var G__15296 = chunk__14449;
var G__15297 = count__14450;
var G__15298 = (i__14451 + (1));
seq__14448 = G__15295;
chunk__14449 = G__15296;
count__14450 = G__15297;
i__14451 = G__15298;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14448);
if(temp__5804__auto__){
var seq__14448__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14448__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14448__$1);
var G__15299 = cljs.core.chunk_rest(seq__14448__$1);
var G__15300 = c__5525__auto__;
var G__15301 = cljs.core.count(c__5525__auto__);
var G__15302 = (0);
seq__14448 = G__15299;
chunk__14449 = G__15300;
count__14450 = G__15301;
i__14451 = G__15302;
continue;
} else {
var n = cljs.core.first(seq__14448__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15303 = cljs.core.next(seq__14448__$1);
var G__15304 = null;
var G__15305 = (0);
var G__15306 = (0);
seq__14448 = G__15303;
chunk__14449 = G__15304;
count__14450 = G__15305;
i__14451 = G__15306;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14512 = arguments.length;
switch (G__14512) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14522 = arguments.length;
switch (G__14522) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14544 = arguments.length;
switch (G__14544) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15328 = arguments.length;
var i__5727__auto___15330 = (0);
while(true){
if((i__5727__auto___15330 < len__5726__auto___15328)){
args__5732__auto__.push((arguments[i__5727__auto___15330]));

var G__15331 = (i__5727__auto___15330 + (1));
i__5727__auto___15330 = G__15331;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14579_15332 = cljs.core.seq(nodes);
var chunk__14580_15333 = null;
var count__14581_15334 = (0);
var i__14582_15335 = (0);
while(true){
if((i__14582_15335 < count__14581_15334)){
var node_15336 = chunk__14580_15333.cljs$core$IIndexed$_nth$arity$2(null,i__14582_15335);
fragment.appendChild(shadow.dom._to_dom(node_15336));


var G__15338 = seq__14579_15332;
var G__15339 = chunk__14580_15333;
var G__15340 = count__14581_15334;
var G__15341 = (i__14582_15335 + (1));
seq__14579_15332 = G__15338;
chunk__14580_15333 = G__15339;
count__14581_15334 = G__15340;
i__14582_15335 = G__15341;
continue;
} else {
var temp__5804__auto___15343 = cljs.core.seq(seq__14579_15332);
if(temp__5804__auto___15343){
var seq__14579_15348__$1 = temp__5804__auto___15343;
if(cljs.core.chunked_seq_QMARK_(seq__14579_15348__$1)){
var c__5525__auto___15350 = cljs.core.chunk_first(seq__14579_15348__$1);
var G__15351 = cljs.core.chunk_rest(seq__14579_15348__$1);
var G__15352 = c__5525__auto___15350;
var G__15353 = cljs.core.count(c__5525__auto___15350);
var G__15354 = (0);
seq__14579_15332 = G__15351;
chunk__14580_15333 = G__15352;
count__14581_15334 = G__15353;
i__14582_15335 = G__15354;
continue;
} else {
var node_15355 = cljs.core.first(seq__14579_15348__$1);
fragment.appendChild(shadow.dom._to_dom(node_15355));


var G__15356 = cljs.core.next(seq__14579_15348__$1);
var G__15357 = null;
var G__15358 = (0);
var G__15359 = (0);
seq__14579_15332 = G__15356;
chunk__14580_15333 = G__15357;
count__14581_15334 = G__15358;
i__14582_15335 = G__15359;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14571){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14571));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14591_15360 = cljs.core.seq(scripts);
var chunk__14592_15361 = null;
var count__14593_15362 = (0);
var i__14594_15363 = (0);
while(true){
if((i__14594_15363 < count__14593_15362)){
var vec__14610_15365 = chunk__14592_15361.cljs$core$IIndexed$_nth$arity$2(null,i__14594_15363);
var script_tag_15366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14610_15365,(0),null);
var script_body_15367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14610_15365,(1),null);
eval(script_body_15367);


var G__15370 = seq__14591_15360;
var G__15371 = chunk__14592_15361;
var G__15372 = count__14593_15362;
var G__15373 = (i__14594_15363 + (1));
seq__14591_15360 = G__15370;
chunk__14592_15361 = G__15371;
count__14593_15362 = G__15372;
i__14594_15363 = G__15373;
continue;
} else {
var temp__5804__auto___15374 = cljs.core.seq(seq__14591_15360);
if(temp__5804__auto___15374){
var seq__14591_15375__$1 = temp__5804__auto___15374;
if(cljs.core.chunked_seq_QMARK_(seq__14591_15375__$1)){
var c__5525__auto___15376 = cljs.core.chunk_first(seq__14591_15375__$1);
var G__15377 = cljs.core.chunk_rest(seq__14591_15375__$1);
var G__15378 = c__5525__auto___15376;
var G__15379 = cljs.core.count(c__5525__auto___15376);
var G__15380 = (0);
seq__14591_15360 = G__15377;
chunk__14592_15361 = G__15378;
count__14593_15362 = G__15379;
i__14594_15363 = G__15380;
continue;
} else {
var vec__14614_15381 = cljs.core.first(seq__14591_15375__$1);
var script_tag_15382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14614_15381,(0),null);
var script_body_15383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14614_15381,(1),null);
eval(script_body_15383);


var G__15384 = cljs.core.next(seq__14591_15375__$1);
var G__15385 = null;
var G__15386 = (0);
var G__15387 = (0);
seq__14591_15360 = G__15384;
chunk__14592_15361 = G__15385;
count__14593_15362 = G__15386;
i__14594_15363 = G__15387;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14620){
var vec__14621 = p__14620;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14621,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14621,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14634 = arguments.length;
switch (G__14634) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14671 = cljs.core.seq(style_keys);
var chunk__14672 = null;
var count__14673 = (0);
var i__14674 = (0);
while(true){
if((i__14674 < count__14673)){
var it = chunk__14672.cljs$core$IIndexed$_nth$arity$2(null,i__14674);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15399 = seq__14671;
var G__15400 = chunk__14672;
var G__15401 = count__14673;
var G__15402 = (i__14674 + (1));
seq__14671 = G__15399;
chunk__14672 = G__15400;
count__14673 = G__15401;
i__14674 = G__15402;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14671);
if(temp__5804__auto__){
var seq__14671__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14671__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14671__$1);
var G__15403 = cljs.core.chunk_rest(seq__14671__$1);
var G__15404 = c__5525__auto__;
var G__15405 = cljs.core.count(c__5525__auto__);
var G__15406 = (0);
seq__14671 = G__15403;
chunk__14672 = G__15404;
count__14673 = G__15405;
i__14674 = G__15406;
continue;
} else {
var it = cljs.core.first(seq__14671__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15407 = cljs.core.next(seq__14671__$1);
var G__15408 = null;
var G__15409 = (0);
var G__15410 = (0);
seq__14671 = G__15407;
chunk__14672 = G__15408;
count__14673 = G__15409;
i__14674 = G__15410;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14695,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14733 = k14695;
var G__14733__$1 = (((G__14733 instanceof cljs.core.Keyword))?G__14733.fqn:null);
switch (G__14733__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14695,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14734){
var vec__14735 = p__14734;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14694){
var self__ = this;
var G__14694__$1 = this;
return (new cljs.core.RecordIter((0),G__14694__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14696,other14697){
var self__ = this;
var this14696__$1 = this;
return (((!((other14697 == null)))) && ((((this14696__$1.constructor === other14697.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14696__$1.x,other14697.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14696__$1.y,other14697.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14696__$1.__extmap,other14697.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14695){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14760 = k14695;
var G__14760__$1 = (((G__14760 instanceof cljs.core.Keyword))?G__14760.fqn:null);
switch (G__14760__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14695);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14694){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14765 = cljs.core.keyword_identical_QMARK_;
var expr__14766 = k__5309__auto__;
if(cljs.core.truth_((pred__14765.cljs$core$IFn$_invoke$arity$2 ? pred__14765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14766) : pred__14765.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14766)))){
return (new shadow.dom.Coordinate(G__14694,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14765.cljs$core$IFn$_invoke$arity$2 ? pred__14765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14766) : pred__14765.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14766)))){
return (new shadow.dom.Coordinate(self__.x,G__14694,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14694),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14694){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14694,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14720){
var extmap__5342__auto__ = (function (){var G__14791 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14720,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14720)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14791);
} else {
return G__14791;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14720),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14720),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14824,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14837 = k14824;
var G__14837__$1 = (((G__14837 instanceof cljs.core.Keyword))?G__14837.fqn:null);
switch (G__14837__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14824,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14839){
var vec__14840 = p__14839;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14840,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14840,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14823){
var self__ = this;
var G__14823__$1 = this;
return (new cljs.core.RecordIter((0),G__14823__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14825,other14826){
var self__ = this;
var this14825__$1 = this;
return (((!((other14826 == null)))) && ((((this14825__$1.constructor === other14826.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14825__$1.w,other14826.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14825__$1.h,other14826.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14825__$1.__extmap,other14826.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14824){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14863 = k14824;
var G__14863__$1 = (((G__14863 instanceof cljs.core.Keyword))?G__14863.fqn:null);
switch (G__14863__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14824);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14823){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14869 = cljs.core.keyword_identical_QMARK_;
var expr__14870 = k__5309__auto__;
if(cljs.core.truth_((pred__14869.cljs$core$IFn$_invoke$arity$2 ? pred__14869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14870) : pred__14869.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14870)))){
return (new shadow.dom.Size(G__14823,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14869.cljs$core$IFn$_invoke$arity$2 ? pred__14869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14870) : pred__14869.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14870)))){
return (new shadow.dom.Size(self__.w,G__14823,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14823),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14823){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14823,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14830){
var extmap__5342__auto__ = (function (){var G__14895 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14830,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14830)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14895);
} else {
return G__14895;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14830),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14830),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__15476 = (i + (1));
var G__15477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15476;
ret = G__15477;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14924){
var vec__14925 = p__14924;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14925,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14931 = arguments.length;
switch (G__14931) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15491 = ps;
var G__15492 = (i + (1));
el__$1 = G__15491;
i = G__15492;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14966 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14969_15507 = cljs.core.seq(props);
var chunk__14970_15508 = null;
var count__14971_15509 = (0);
var i__14972_15510 = (0);
while(true){
if((i__14972_15510 < count__14971_15509)){
var vec__14991_15511 = chunk__14970_15508.cljs$core$IIndexed$_nth$arity$2(null,i__14972_15510);
var k_15512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14991_15511,(0),null);
var v_15513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14991_15511,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15512);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15512),v_15513);


var G__15525 = seq__14969_15507;
var G__15526 = chunk__14970_15508;
var G__15527 = count__14971_15509;
var G__15529 = (i__14972_15510 + (1));
seq__14969_15507 = G__15525;
chunk__14970_15508 = G__15526;
count__14971_15509 = G__15527;
i__14972_15510 = G__15529;
continue;
} else {
var temp__5804__auto___15531 = cljs.core.seq(seq__14969_15507);
if(temp__5804__auto___15531){
var seq__14969_15533__$1 = temp__5804__auto___15531;
if(cljs.core.chunked_seq_QMARK_(seq__14969_15533__$1)){
var c__5525__auto___15535 = cljs.core.chunk_first(seq__14969_15533__$1);
var G__15538 = cljs.core.chunk_rest(seq__14969_15533__$1);
var G__15539 = c__5525__auto___15535;
var G__15540 = cljs.core.count(c__5525__auto___15535);
var G__15541 = (0);
seq__14969_15507 = G__15538;
chunk__14970_15508 = G__15539;
count__14971_15509 = G__15540;
i__14972_15510 = G__15541;
continue;
} else {
var vec__14995_15542 = cljs.core.first(seq__14969_15533__$1);
var k_15543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995_15542,(0),null);
var v_15544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995_15542,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15543);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15543),v_15544);


var G__15545 = cljs.core.next(seq__14969_15533__$1);
var G__15546 = null;
var G__15547 = (0);
var G__15548 = (0);
seq__14969_15507 = G__15545;
chunk__14970_15508 = G__15546;
count__14971_15509 = G__15547;
i__14972_15510 = G__15548;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15000 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(1),null);
var seq__15003_15550 = cljs.core.seq(node_children);
var chunk__15005_15551 = null;
var count__15006_15552 = (0);
var i__15007_15553 = (0);
while(true){
if((i__15007_15553 < count__15006_15552)){
var child_struct_15554 = chunk__15005_15551.cljs$core$IIndexed$_nth$arity$2(null,i__15007_15553);
if((!((child_struct_15554 == null)))){
if(typeof child_struct_15554 === 'string'){
var text_15555 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15555),child_struct_15554].join(''));
} else {
var children_15556 = shadow.dom.svg_node(child_struct_15554);
if(cljs.core.seq_QMARK_(children_15556)){
var seq__15056_15557 = cljs.core.seq(children_15556);
var chunk__15058_15558 = null;
var count__15059_15559 = (0);
var i__15060_15560 = (0);
while(true){
if((i__15060_15560 < count__15059_15559)){
var child_15561 = chunk__15058_15558.cljs$core$IIndexed$_nth$arity$2(null,i__15060_15560);
if(cljs.core.truth_(child_15561)){
node.appendChild(child_15561);


var G__15562 = seq__15056_15557;
var G__15563 = chunk__15058_15558;
var G__15564 = count__15059_15559;
var G__15565 = (i__15060_15560 + (1));
seq__15056_15557 = G__15562;
chunk__15058_15558 = G__15563;
count__15059_15559 = G__15564;
i__15060_15560 = G__15565;
continue;
} else {
var G__15566 = seq__15056_15557;
var G__15567 = chunk__15058_15558;
var G__15568 = count__15059_15559;
var G__15569 = (i__15060_15560 + (1));
seq__15056_15557 = G__15566;
chunk__15058_15558 = G__15567;
count__15059_15559 = G__15568;
i__15060_15560 = G__15569;
continue;
}
} else {
var temp__5804__auto___15570 = cljs.core.seq(seq__15056_15557);
if(temp__5804__auto___15570){
var seq__15056_15572__$1 = temp__5804__auto___15570;
if(cljs.core.chunked_seq_QMARK_(seq__15056_15572__$1)){
var c__5525__auto___15575 = cljs.core.chunk_first(seq__15056_15572__$1);
var G__15576 = cljs.core.chunk_rest(seq__15056_15572__$1);
var G__15577 = c__5525__auto___15575;
var G__15578 = cljs.core.count(c__5525__auto___15575);
var G__15579 = (0);
seq__15056_15557 = G__15576;
chunk__15058_15558 = G__15577;
count__15059_15559 = G__15578;
i__15060_15560 = G__15579;
continue;
} else {
var child_15581 = cljs.core.first(seq__15056_15572__$1);
if(cljs.core.truth_(child_15581)){
node.appendChild(child_15581);


var G__15582 = cljs.core.next(seq__15056_15572__$1);
var G__15583 = null;
var G__15584 = (0);
var G__15585 = (0);
seq__15056_15557 = G__15582;
chunk__15058_15558 = G__15583;
count__15059_15559 = G__15584;
i__15060_15560 = G__15585;
continue;
} else {
var G__15586 = cljs.core.next(seq__15056_15572__$1);
var G__15587 = null;
var G__15588 = (0);
var G__15589 = (0);
seq__15056_15557 = G__15586;
chunk__15058_15558 = G__15587;
count__15059_15559 = G__15588;
i__15060_15560 = G__15589;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15556);
}
}


var G__15590 = seq__15003_15550;
var G__15591 = chunk__15005_15551;
var G__15592 = count__15006_15552;
var G__15593 = (i__15007_15553 + (1));
seq__15003_15550 = G__15590;
chunk__15005_15551 = G__15591;
count__15006_15552 = G__15592;
i__15007_15553 = G__15593;
continue;
} else {
var G__15594 = seq__15003_15550;
var G__15595 = chunk__15005_15551;
var G__15596 = count__15006_15552;
var G__15597 = (i__15007_15553 + (1));
seq__15003_15550 = G__15594;
chunk__15005_15551 = G__15595;
count__15006_15552 = G__15596;
i__15007_15553 = G__15597;
continue;
}
} else {
var temp__5804__auto___15599 = cljs.core.seq(seq__15003_15550);
if(temp__5804__auto___15599){
var seq__15003_15600__$1 = temp__5804__auto___15599;
if(cljs.core.chunked_seq_QMARK_(seq__15003_15600__$1)){
var c__5525__auto___15601 = cljs.core.chunk_first(seq__15003_15600__$1);
var G__15602 = cljs.core.chunk_rest(seq__15003_15600__$1);
var G__15603 = c__5525__auto___15601;
var G__15604 = cljs.core.count(c__5525__auto___15601);
var G__15605 = (0);
seq__15003_15550 = G__15602;
chunk__15005_15551 = G__15603;
count__15006_15552 = G__15604;
i__15007_15553 = G__15605;
continue;
} else {
var child_struct_15607 = cljs.core.first(seq__15003_15600__$1);
if((!((child_struct_15607 == null)))){
if(typeof child_struct_15607 === 'string'){
var text_15608 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15608),child_struct_15607].join(''));
} else {
var children_15610 = shadow.dom.svg_node(child_struct_15607);
if(cljs.core.seq_QMARK_(children_15610)){
var seq__15071_15613 = cljs.core.seq(children_15610);
var chunk__15073_15614 = null;
var count__15074_15615 = (0);
var i__15075_15616 = (0);
while(true){
if((i__15075_15616 < count__15074_15615)){
var child_15621 = chunk__15073_15614.cljs$core$IIndexed$_nth$arity$2(null,i__15075_15616);
if(cljs.core.truth_(child_15621)){
node.appendChild(child_15621);


var G__15623 = seq__15071_15613;
var G__15624 = chunk__15073_15614;
var G__15625 = count__15074_15615;
var G__15626 = (i__15075_15616 + (1));
seq__15071_15613 = G__15623;
chunk__15073_15614 = G__15624;
count__15074_15615 = G__15625;
i__15075_15616 = G__15626;
continue;
} else {
var G__15627 = seq__15071_15613;
var G__15628 = chunk__15073_15614;
var G__15629 = count__15074_15615;
var G__15630 = (i__15075_15616 + (1));
seq__15071_15613 = G__15627;
chunk__15073_15614 = G__15628;
count__15074_15615 = G__15629;
i__15075_15616 = G__15630;
continue;
}
} else {
var temp__5804__auto___15632__$1 = cljs.core.seq(seq__15071_15613);
if(temp__5804__auto___15632__$1){
var seq__15071_15633__$1 = temp__5804__auto___15632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15071_15633__$1)){
var c__5525__auto___15634 = cljs.core.chunk_first(seq__15071_15633__$1);
var G__15637 = cljs.core.chunk_rest(seq__15071_15633__$1);
var G__15638 = c__5525__auto___15634;
var G__15639 = cljs.core.count(c__5525__auto___15634);
var G__15640 = (0);
seq__15071_15613 = G__15637;
chunk__15073_15614 = G__15638;
count__15074_15615 = G__15639;
i__15075_15616 = G__15640;
continue;
} else {
var child_15644 = cljs.core.first(seq__15071_15633__$1);
if(cljs.core.truth_(child_15644)){
node.appendChild(child_15644);


var G__15646 = cljs.core.next(seq__15071_15633__$1);
var G__15647 = null;
var G__15648 = (0);
var G__15649 = (0);
seq__15071_15613 = G__15646;
chunk__15073_15614 = G__15647;
count__15074_15615 = G__15648;
i__15075_15616 = G__15649;
continue;
} else {
var G__15650 = cljs.core.next(seq__15071_15633__$1);
var G__15651 = null;
var G__15652 = (0);
var G__15653 = (0);
seq__15071_15613 = G__15650;
chunk__15073_15614 = G__15651;
count__15074_15615 = G__15652;
i__15075_15616 = G__15653;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15610);
}
}


var G__15656 = cljs.core.next(seq__15003_15600__$1);
var G__15657 = null;
var G__15658 = (0);
var G__15659 = (0);
seq__15003_15550 = G__15656;
chunk__15005_15551 = G__15657;
count__15006_15552 = G__15658;
i__15007_15553 = G__15659;
continue;
} else {
var G__15661 = cljs.core.next(seq__15003_15600__$1);
var G__15662 = null;
var G__15663 = (0);
var G__15664 = (0);
seq__15003_15550 = G__15661;
chunk__15005_15551 = G__15662;
count__15006_15552 = G__15663;
i__15007_15553 = G__15664;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15673 = arguments.length;
var i__5727__auto___15674 = (0);
while(true){
if((i__5727__auto___15674 < len__5726__auto___15673)){
args__5732__auto__.push((arguments[i__5727__auto___15674]));

var G__15675 = (i__5727__auto___15674 + (1));
i__5727__auto___15674 = G__15675;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15089){
var G__15090 = cljs.core.first(seq15089);
var seq15089__$1 = cljs.core.next(seq15089);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15090,seq15089__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
