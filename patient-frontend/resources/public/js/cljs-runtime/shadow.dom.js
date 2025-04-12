goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15276 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15276(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15280 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15280(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13916 = coll;
var G__13917 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13916,G__13917) : shadow.dom.lazy_native_coll_seq.call(null, G__13916,G__13917));
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
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
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
var G__13946 = arguments.length;
switch (G__13946) {
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
var G__13954 = arguments.length;
switch (G__13954) {
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
var G__13962 = arguments.length;
switch (G__13962) {
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
var G__13966 = arguments.length;
switch (G__13966) {
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
var G__13981 = arguments.length;
switch (G__13981) {
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
var G__14008 = arguments.length;
switch (G__14008) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e14016){if((e14016 instanceof Object)){
var e = e14016;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14016;

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
var seq__14026 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14027 = null;
var count__14028 = (0);
var i__14029 = (0);
while(true){
if((i__14029 < count__14028)){
var el = chunk__14027.cljs$core$IIndexed$_nth$arity$2(null, i__14029);
var handler_15307__$1 = ((function (seq__14026,chunk__14027,count__14028,i__14029,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14026,chunk__14027,count__14028,i__14029,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15307__$1);


var G__15308 = seq__14026;
var G__15309 = chunk__14027;
var G__15310 = count__14028;
var G__15311 = (i__14029 + (1));
seq__14026 = G__15308;
chunk__14027 = G__15309;
count__14028 = G__15310;
i__14029 = G__15311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14026);
if(temp__5804__auto__){
var seq__14026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14026__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14026__$1);
var G__15312 = cljs.core.chunk_rest(seq__14026__$1);
var G__15313 = c__5525__auto__;
var G__15314 = cljs.core.count(c__5525__auto__);
var G__15315 = (0);
seq__14026 = G__15312;
chunk__14027 = G__15313;
count__14028 = G__15314;
i__14029 = G__15315;
continue;
} else {
var el = cljs.core.first(seq__14026__$1);
var handler_15316__$1 = ((function (seq__14026,chunk__14027,count__14028,i__14029,el,seq__14026__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14026,chunk__14027,count__14028,i__14029,el,seq__14026__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15316__$1);


var G__15321 = cljs.core.next(seq__14026__$1);
var G__15322 = null;
var G__15323 = (0);
var G__15324 = (0);
seq__14026 = G__15321;
chunk__14027 = G__15322;
count__14028 = G__15323;
i__14029 = G__15324;
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
var G__14055 = arguments.length;
switch (G__14055) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14069 = cljs.core.seq(events);
var chunk__14070 = null;
var count__14071 = (0);
var i__14072 = (0);
while(true){
if((i__14072 < count__14071)){
var vec__14085 = chunk__14070.cljs$core$IIndexed$_nth$arity$2(null, i__14072);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14085,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15327 = seq__14069;
var G__15328 = chunk__14070;
var G__15329 = count__14071;
var G__15330 = (i__14072 + (1));
seq__14069 = G__15327;
chunk__14070 = G__15328;
count__14071 = G__15329;
i__14072 = G__15330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14069);
if(temp__5804__auto__){
var seq__14069__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14069__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14069__$1);
var G__15331 = cljs.core.chunk_rest(seq__14069__$1);
var G__15332 = c__5525__auto__;
var G__15333 = cljs.core.count(c__5525__auto__);
var G__15334 = (0);
seq__14069 = G__15331;
chunk__14070 = G__15332;
count__14071 = G__15333;
i__14072 = G__15334;
continue;
} else {
var vec__14100 = cljs.core.first(seq__14069__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14100,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15335 = cljs.core.next(seq__14069__$1);
var G__15336 = null;
var G__15337 = (0);
var G__15338 = (0);
seq__14069 = G__15335;
chunk__14070 = G__15336;
count__14071 = G__15337;
i__14072 = G__15338;
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
var seq__14110 = cljs.core.seq(styles);
var chunk__14111 = null;
var count__14112 = (0);
var i__14113 = (0);
while(true){
if((i__14113 < count__14112)){
var vec__14147 = chunk__14111.cljs$core$IIndexed$_nth$arity$2(null, i__14113);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15340 = seq__14110;
var G__15341 = chunk__14111;
var G__15342 = count__14112;
var G__15343 = (i__14113 + (1));
seq__14110 = G__15340;
chunk__14111 = G__15341;
count__14112 = G__15342;
i__14113 = G__15343;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14110);
if(temp__5804__auto__){
var seq__14110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14110__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14110__$1);
var G__15345 = cljs.core.chunk_rest(seq__14110__$1);
var G__15346 = c__5525__auto__;
var G__15347 = cljs.core.count(c__5525__auto__);
var G__15348 = (0);
seq__14110 = G__15345;
chunk__14111 = G__15346;
count__14112 = G__15347;
i__14113 = G__15348;
continue;
} else {
var vec__14160 = cljs.core.first(seq__14110__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15349 = cljs.core.next(seq__14110__$1);
var G__15350 = null;
var G__15351 = (0);
var G__15352 = (0);
seq__14110 = G__15349;
chunk__14111 = G__15350;
count__14112 = G__15351;
i__14113 = G__15352;
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
var G__14180_15353 = key;
var G__14180_15354__$1 = (((G__14180_15353 instanceof cljs.core.Keyword))?G__14180_15353.fqn:null);
switch (G__14180_15354__$1) {
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
var ks_15358 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15358,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15358,"aria-");
}
})())){
el.setAttribute(ks_15358,value);
} else {
(el[ks_15358] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14235){
var map__14246 = p__14235;
var map__14246__$1 = cljs.core.__destructure_map(map__14246);
var props = map__14246__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14246__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14251 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14251,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14251,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14251,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14258 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14258,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14258;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14267 = arguments.length;
switch (G__14267) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14300){
var vec__14302 = p__14300;
var seq__14303 = cljs.core.seq(vec__14302);
var first__14304 = cljs.core.first(seq__14303);
var seq__14303__$1 = cljs.core.next(seq__14303);
var nn = first__14304;
var first__14304__$1 = cljs.core.first(seq__14303__$1);
var seq__14303__$2 = cljs.core.next(seq__14303__$1);
var np = first__14304__$1;
var nc = seq__14303__$2;
var node = vec__14302;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14327 = nn;
var G__14328 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14327,G__14328) : create_fn.call(null, G__14327,G__14328));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14341 = nn;
var G__14342 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14341,G__14342) : create_fn.call(null, G__14341,G__14342));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14361 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14361,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14361,(1),null);
var seq__14367_15368 = cljs.core.seq(node_children);
var chunk__14368_15369 = null;
var count__14369_15370 = (0);
var i__14370_15371 = (0);
while(true){
if((i__14370_15371 < count__14369_15370)){
var child_struct_15373 = chunk__14368_15369.cljs$core$IIndexed$_nth$arity$2(null, i__14370_15371);
var children_15375 = shadow.dom.dom_node(child_struct_15373);
if(cljs.core.seq_QMARK_(children_15375)){
var seq__14413_15376 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15375));
var chunk__14415_15377 = null;
var count__14416_15378 = (0);
var i__14417_15379 = (0);
while(true){
if((i__14417_15379 < count__14416_15378)){
var child_15380 = chunk__14415_15377.cljs$core$IIndexed$_nth$arity$2(null, i__14417_15379);
if(cljs.core.truth_(child_15380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15380);


var G__15381 = seq__14413_15376;
var G__15382 = chunk__14415_15377;
var G__15383 = count__14416_15378;
var G__15384 = (i__14417_15379 + (1));
seq__14413_15376 = G__15381;
chunk__14415_15377 = G__15382;
count__14416_15378 = G__15383;
i__14417_15379 = G__15384;
continue;
} else {
var G__15385 = seq__14413_15376;
var G__15386 = chunk__14415_15377;
var G__15387 = count__14416_15378;
var G__15388 = (i__14417_15379 + (1));
seq__14413_15376 = G__15385;
chunk__14415_15377 = G__15386;
count__14416_15378 = G__15387;
i__14417_15379 = G__15388;
continue;
}
} else {
var temp__5804__auto___15389 = cljs.core.seq(seq__14413_15376);
if(temp__5804__auto___15389){
var seq__14413_15390__$1 = temp__5804__auto___15389;
if(cljs.core.chunked_seq_QMARK_(seq__14413_15390__$1)){
var c__5525__auto___15391 = cljs.core.chunk_first(seq__14413_15390__$1);
var G__15392 = cljs.core.chunk_rest(seq__14413_15390__$1);
var G__15393 = c__5525__auto___15391;
var G__15394 = cljs.core.count(c__5525__auto___15391);
var G__15395 = (0);
seq__14413_15376 = G__15392;
chunk__14415_15377 = G__15393;
count__14416_15378 = G__15394;
i__14417_15379 = G__15395;
continue;
} else {
var child_15396 = cljs.core.first(seq__14413_15390__$1);
if(cljs.core.truth_(child_15396)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15396);


var G__15397 = cljs.core.next(seq__14413_15390__$1);
var G__15398 = null;
var G__15399 = (0);
var G__15400 = (0);
seq__14413_15376 = G__15397;
chunk__14415_15377 = G__15398;
count__14416_15378 = G__15399;
i__14417_15379 = G__15400;
continue;
} else {
var G__15401 = cljs.core.next(seq__14413_15390__$1);
var G__15402 = null;
var G__15403 = (0);
var G__15404 = (0);
seq__14413_15376 = G__15401;
chunk__14415_15377 = G__15402;
count__14416_15378 = G__15403;
i__14417_15379 = G__15404;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15375);
}


var G__15405 = seq__14367_15368;
var G__15406 = chunk__14368_15369;
var G__15407 = count__14369_15370;
var G__15408 = (i__14370_15371 + (1));
seq__14367_15368 = G__15405;
chunk__14368_15369 = G__15406;
count__14369_15370 = G__15407;
i__14370_15371 = G__15408;
continue;
} else {
var temp__5804__auto___15409 = cljs.core.seq(seq__14367_15368);
if(temp__5804__auto___15409){
var seq__14367_15410__$1 = temp__5804__auto___15409;
if(cljs.core.chunked_seq_QMARK_(seq__14367_15410__$1)){
var c__5525__auto___15411 = cljs.core.chunk_first(seq__14367_15410__$1);
var G__15412 = cljs.core.chunk_rest(seq__14367_15410__$1);
var G__15413 = c__5525__auto___15411;
var G__15414 = cljs.core.count(c__5525__auto___15411);
var G__15415 = (0);
seq__14367_15368 = G__15412;
chunk__14368_15369 = G__15413;
count__14369_15370 = G__15414;
i__14370_15371 = G__15415;
continue;
} else {
var child_struct_15417 = cljs.core.first(seq__14367_15410__$1);
var children_15418 = shadow.dom.dom_node(child_struct_15417);
if(cljs.core.seq_QMARK_(children_15418)){
var seq__14431_15419 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15418));
var chunk__14433_15420 = null;
var count__14434_15421 = (0);
var i__14435_15422 = (0);
while(true){
if((i__14435_15422 < count__14434_15421)){
var child_15423 = chunk__14433_15420.cljs$core$IIndexed$_nth$arity$2(null, i__14435_15422);
if(cljs.core.truth_(child_15423)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15423);


var G__15425 = seq__14431_15419;
var G__15426 = chunk__14433_15420;
var G__15427 = count__14434_15421;
var G__15428 = (i__14435_15422 + (1));
seq__14431_15419 = G__15425;
chunk__14433_15420 = G__15426;
count__14434_15421 = G__15427;
i__14435_15422 = G__15428;
continue;
} else {
var G__15431 = seq__14431_15419;
var G__15432 = chunk__14433_15420;
var G__15433 = count__14434_15421;
var G__15434 = (i__14435_15422 + (1));
seq__14431_15419 = G__15431;
chunk__14433_15420 = G__15432;
count__14434_15421 = G__15433;
i__14435_15422 = G__15434;
continue;
}
} else {
var temp__5804__auto___15436__$1 = cljs.core.seq(seq__14431_15419);
if(temp__5804__auto___15436__$1){
var seq__14431_15437__$1 = temp__5804__auto___15436__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14431_15437__$1)){
var c__5525__auto___15439 = cljs.core.chunk_first(seq__14431_15437__$1);
var G__15440 = cljs.core.chunk_rest(seq__14431_15437__$1);
var G__15441 = c__5525__auto___15439;
var G__15442 = cljs.core.count(c__5525__auto___15439);
var G__15443 = (0);
seq__14431_15419 = G__15440;
chunk__14433_15420 = G__15441;
count__14434_15421 = G__15442;
i__14435_15422 = G__15443;
continue;
} else {
var child_15444 = cljs.core.first(seq__14431_15437__$1);
if(cljs.core.truth_(child_15444)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15444);


var G__15445 = cljs.core.next(seq__14431_15437__$1);
var G__15446 = null;
var G__15447 = (0);
var G__15448 = (0);
seq__14431_15419 = G__15445;
chunk__14433_15420 = G__15446;
count__14434_15421 = G__15447;
i__14435_15422 = G__15448;
continue;
} else {
var G__15449 = cljs.core.next(seq__14431_15437__$1);
var G__15450 = null;
var G__15451 = (0);
var G__15452 = (0);
seq__14431_15419 = G__15449;
chunk__14433_15420 = G__15450;
count__14434_15421 = G__15451;
i__14435_15422 = G__15452;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15418);
}


var G__15453 = cljs.core.next(seq__14367_15410__$1);
var G__15454 = null;
var G__15455 = (0);
var G__15456 = (0);
seq__14367_15368 = G__15453;
chunk__14368_15369 = G__15454;
count__14369_15370 = G__15455;
i__14370_15371 = G__15456;
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
var seq__14519 = cljs.core.seq(node);
var chunk__14520 = null;
var count__14521 = (0);
var i__14522 = (0);
while(true){
if((i__14522 < count__14521)){
var n = chunk__14520.cljs$core$IIndexed$_nth$arity$2(null, i__14522);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15464 = seq__14519;
var G__15465 = chunk__14520;
var G__15466 = count__14521;
var G__15467 = (i__14522 + (1));
seq__14519 = G__15464;
chunk__14520 = G__15465;
count__14521 = G__15466;
i__14522 = G__15467;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14519);
if(temp__5804__auto__){
var seq__14519__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14519__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14519__$1);
var G__15469 = cljs.core.chunk_rest(seq__14519__$1);
var G__15470 = c__5525__auto__;
var G__15471 = cljs.core.count(c__5525__auto__);
var G__15472 = (0);
seq__14519 = G__15469;
chunk__14520 = G__15470;
count__14521 = G__15471;
i__14522 = G__15472;
continue;
} else {
var n = cljs.core.first(seq__14519__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15477 = cljs.core.next(seq__14519__$1);
var G__15478 = null;
var G__15479 = (0);
var G__15480 = (0);
seq__14519 = G__15477;
chunk__14520 = G__15478;
count__14521 = G__15479;
i__14522 = G__15480;
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
var G__14551 = arguments.length;
switch (G__14551) {
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
var G__14577 = arguments.length;
switch (G__14577) {
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
var G__14588 = arguments.length;
switch (G__14588) {
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
var len__5726__auto___15497 = arguments.length;
var i__5727__auto___15498 = (0);
while(true){
if((i__5727__auto___15498 < len__5726__auto___15497)){
args__5732__auto__.push((arguments[i__5727__auto___15498]));

var G__15500 = (i__5727__auto___15498 + (1));
i__5727__auto___15498 = G__15500;
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
var seq__14678_15502 = cljs.core.seq(nodes);
var chunk__14679_15504 = null;
var count__14680_15505 = (0);
var i__14681_15506 = (0);
while(true){
if((i__14681_15506 < count__14680_15505)){
var node_15510 = chunk__14679_15504.cljs$core$IIndexed$_nth$arity$2(null, i__14681_15506);
fragment.appendChild(shadow.dom._to_dom(node_15510));


var G__15511 = seq__14678_15502;
var G__15512 = chunk__14679_15504;
var G__15513 = count__14680_15505;
var G__15514 = (i__14681_15506 + (1));
seq__14678_15502 = G__15511;
chunk__14679_15504 = G__15512;
count__14680_15505 = G__15513;
i__14681_15506 = G__15514;
continue;
} else {
var temp__5804__auto___15515 = cljs.core.seq(seq__14678_15502);
if(temp__5804__auto___15515){
var seq__14678_15516__$1 = temp__5804__auto___15515;
if(cljs.core.chunked_seq_QMARK_(seq__14678_15516__$1)){
var c__5525__auto___15517 = cljs.core.chunk_first(seq__14678_15516__$1);
var G__15518 = cljs.core.chunk_rest(seq__14678_15516__$1);
var G__15519 = c__5525__auto___15517;
var G__15520 = cljs.core.count(c__5525__auto___15517);
var G__15521 = (0);
seq__14678_15502 = G__15518;
chunk__14679_15504 = G__15519;
count__14680_15505 = G__15520;
i__14681_15506 = G__15521;
continue;
} else {
var node_15522 = cljs.core.first(seq__14678_15516__$1);
fragment.appendChild(shadow.dom._to_dom(node_15522));


var G__15523 = cljs.core.next(seq__14678_15516__$1);
var G__15524 = null;
var G__15525 = (0);
var G__15526 = (0);
seq__14678_15502 = G__15523;
chunk__14679_15504 = G__15524;
count__14680_15505 = G__15525;
i__14681_15506 = G__15526;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14671){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14671));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14693_15527 = cljs.core.seq(scripts);
var chunk__14694_15528 = null;
var count__14695_15529 = (0);
var i__14696_15530 = (0);
while(true){
if((i__14696_15530 < count__14695_15529)){
var vec__14718_15531 = chunk__14694_15528.cljs$core$IIndexed$_nth$arity$2(null, i__14696_15530);
var script_tag_15532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14718_15531,(0),null);
var script_body_15533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14718_15531,(1),null);
eval(script_body_15533);


var G__15534 = seq__14693_15527;
var G__15535 = chunk__14694_15528;
var G__15536 = count__14695_15529;
var G__15537 = (i__14696_15530 + (1));
seq__14693_15527 = G__15534;
chunk__14694_15528 = G__15535;
count__14695_15529 = G__15536;
i__14696_15530 = G__15537;
continue;
} else {
var temp__5804__auto___15538 = cljs.core.seq(seq__14693_15527);
if(temp__5804__auto___15538){
var seq__14693_15539__$1 = temp__5804__auto___15538;
if(cljs.core.chunked_seq_QMARK_(seq__14693_15539__$1)){
var c__5525__auto___15540 = cljs.core.chunk_first(seq__14693_15539__$1);
var G__15541 = cljs.core.chunk_rest(seq__14693_15539__$1);
var G__15542 = c__5525__auto___15540;
var G__15543 = cljs.core.count(c__5525__auto___15540);
var G__15544 = (0);
seq__14693_15527 = G__15541;
chunk__14694_15528 = G__15542;
count__14695_15529 = G__15543;
i__14696_15530 = G__15544;
continue;
} else {
var vec__14724_15545 = cljs.core.first(seq__14693_15539__$1);
var script_tag_15546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724_15545,(0),null);
var script_body_15547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724_15545,(1),null);
eval(script_body_15547);


var G__15548 = cljs.core.next(seq__14693_15539__$1);
var G__15549 = null;
var G__15550 = (0);
var G__15551 = (0);
seq__14693_15527 = G__15548;
chunk__14694_15528 = G__15549;
count__14695_15529 = G__15550;
i__14696_15530 = G__15551;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14728){
var vec__14731 = p__14728;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14731,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14731,(1),null);
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
var G__14738 = arguments.length;
switch (G__14738) {
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
var seq__14756 = cljs.core.seq(style_keys);
var chunk__14757 = null;
var count__14758 = (0);
var i__14759 = (0);
while(true){
if((i__14759 < count__14758)){
var it = chunk__14757.cljs$core$IIndexed$_nth$arity$2(null, i__14759);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15575 = seq__14756;
var G__15576 = chunk__14757;
var G__15577 = count__14758;
var G__15578 = (i__14759 + (1));
seq__14756 = G__15575;
chunk__14757 = G__15576;
count__14758 = G__15577;
i__14759 = G__15578;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14756);
if(temp__5804__auto__){
var seq__14756__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14756__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14756__$1);
var G__15579 = cljs.core.chunk_rest(seq__14756__$1);
var G__15580 = c__5525__auto__;
var G__15581 = cljs.core.count(c__5525__auto__);
var G__15582 = (0);
seq__14756 = G__15579;
chunk__14757 = G__15580;
count__14758 = G__15581;
i__14759 = G__15582;
continue;
} else {
var it = cljs.core.first(seq__14756__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15584 = cljs.core.next(seq__14756__$1);
var G__15585 = null;
var G__15586 = (0);
var G__15587 = (0);
seq__14756 = G__15584;
chunk__14757 = G__15585;
count__14758 = G__15586;
i__14759 = G__15587;
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
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14811,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14871 = k14811;
var G__14871__$1 = (((G__14871 instanceof cljs.core.Keyword))?G__14871.fqn:null);
switch (G__14871__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14811,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14876){
var vec__14877 = p__14876;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14810){
var self__ = this;
var G__14810__$1 = this;
return (new cljs.core.RecordIter((0),G__14810__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14812,other14813){
var self__ = this;
var this14812__$1 = this;
return (((!((other14813 == null)))) && ((((this14812__$1.constructor === other14813.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14812__$1.x,other14813.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14812__$1.y,other14813.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14812__$1.__extmap,other14813.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14811){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14930 = k14811;
var G__14930__$1 = (((G__14930 instanceof cljs.core.Keyword))?G__14930.fqn:null);
switch (G__14930__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14811);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14810){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14934 = cljs.core.keyword_identical_QMARK_;
var expr__14935 = k__5309__auto__;
if(cljs.core.truth_((pred__14934.cljs$core$IFn$_invoke$arity$2 ? pred__14934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14935) : pred__14934.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__14935)))){
return (new shadow.dom.Coordinate(G__14810,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14934.cljs$core$IFn$_invoke$arity$2 ? pred__14934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14935) : pred__14934.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__14935)))){
return (new shadow.dom.Coordinate(self__.x,G__14810,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14810),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14810){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14810,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14858){
var extmap__5342__auto__ = (function (){var G__14943 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14858,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14858)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14943);
} else {
return G__14943;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14858),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14858),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14975,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14995 = k14975;
var G__14995__$1 = (((G__14995 instanceof cljs.core.Keyword))?G__14995.fqn:null);
switch (G__14995__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14975,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15000){
var vec__15001 = p__15000;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14974){
var self__ = this;
var G__14974__$1 = this;
return (new cljs.core.RecordIter((0),G__14974__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14976,other14977){
var self__ = this;
var this14976__$1 = this;
return (((!((other14977 == null)))) && ((((this14976__$1.constructor === other14977.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14976__$1.w,other14977.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14976__$1.h,other14977.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14976__$1.__extmap,other14977.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14975){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15025 = k14975;
var G__15025__$1 = (((G__15025 instanceof cljs.core.Keyword))?G__15025.fqn:null);
switch (G__15025__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14975);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14974){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15028 = cljs.core.keyword_identical_QMARK_;
var expr__15029 = k__5309__auto__;
if(cljs.core.truth_((pred__15028.cljs$core$IFn$_invoke$arity$2 ? pred__15028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15029) : pred__15028.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__15029)))){
return (new shadow.dom.Size(G__14974,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15028.cljs$core$IFn$_invoke$arity$2 ? pred__15028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15029) : pred__15028.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__15029)))){
return (new shadow.dom.Size(self__.w,G__14974,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14974),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14974){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14974,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14987){
var extmap__5342__auto__ = (function (){var G__15055 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14987,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15055);
} else {
return G__15055;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14987),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14987),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__15680 = (i + (1));
var G__15681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15680;
ret = G__15681;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15096){
var vec__15097 = p__15096;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15097,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15104 = arguments.length;
switch (G__15104) {
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
var G__15697 = ps;
var G__15698 = (i + (1));
el__$1 = G__15697;
i = G__15698;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
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
var vec__15129 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15129,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15129,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15129,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15134_15721 = cljs.core.seq(props);
var chunk__15135_15722 = null;
var count__15136_15723 = (0);
var i__15137_15724 = (0);
while(true){
if((i__15137_15724 < count__15136_15723)){
var vec__15157_15726 = chunk__15135_15722.cljs$core$IIndexed$_nth$arity$2(null, i__15137_15724);
var k_15727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15157_15726,(0),null);
var v_15728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15157_15726,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15727);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15727),v_15728);


var G__15729 = seq__15134_15721;
var G__15730 = chunk__15135_15722;
var G__15731 = count__15136_15723;
var G__15732 = (i__15137_15724 + (1));
seq__15134_15721 = G__15729;
chunk__15135_15722 = G__15730;
count__15136_15723 = G__15731;
i__15137_15724 = G__15732;
continue;
} else {
var temp__5804__auto___15734 = cljs.core.seq(seq__15134_15721);
if(temp__5804__auto___15734){
var seq__15134_15735__$1 = temp__5804__auto___15734;
if(cljs.core.chunked_seq_QMARK_(seq__15134_15735__$1)){
var c__5525__auto___15736 = cljs.core.chunk_first(seq__15134_15735__$1);
var G__15737 = cljs.core.chunk_rest(seq__15134_15735__$1);
var G__15738 = c__5525__auto___15736;
var G__15739 = cljs.core.count(c__5525__auto___15736);
var G__15740 = (0);
seq__15134_15721 = G__15737;
chunk__15135_15722 = G__15738;
count__15136_15723 = G__15739;
i__15137_15724 = G__15740;
continue;
} else {
var vec__15161_15742 = cljs.core.first(seq__15134_15735__$1);
var k_15743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161_15742,(0),null);
var v_15744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161_15742,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15743);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15743),v_15744);


var G__15751 = cljs.core.next(seq__15134_15735__$1);
var G__15752 = null;
var G__15753 = (0);
var G__15754 = (0);
seq__15134_15721 = G__15751;
chunk__15135_15722 = G__15752;
count__15136_15723 = G__15753;
i__15137_15724 = G__15754;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15175 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15175,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15175,(1),null);
var seq__15178_15758 = cljs.core.seq(node_children);
var chunk__15180_15759 = null;
var count__15181_15760 = (0);
var i__15182_15761 = (0);
while(true){
if((i__15182_15761 < count__15181_15760)){
var child_struct_15766 = chunk__15180_15759.cljs$core$IIndexed$_nth$arity$2(null, i__15182_15761);
if((!((child_struct_15766 == null)))){
if(typeof child_struct_15766 === 'string'){
var text_15767 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15767),child_struct_15766].join(''));
} else {
var children_15769 = shadow.dom.svg_node(child_struct_15766);
if(cljs.core.seq_QMARK_(children_15769)){
var seq__15222_15771 = cljs.core.seq(children_15769);
var chunk__15224_15772 = null;
var count__15225_15773 = (0);
var i__15226_15774 = (0);
while(true){
if((i__15226_15774 < count__15225_15773)){
var child_15776 = chunk__15224_15772.cljs$core$IIndexed$_nth$arity$2(null, i__15226_15774);
if(cljs.core.truth_(child_15776)){
node.appendChild(child_15776);


var G__15779 = seq__15222_15771;
var G__15780 = chunk__15224_15772;
var G__15781 = count__15225_15773;
var G__15782 = (i__15226_15774 + (1));
seq__15222_15771 = G__15779;
chunk__15224_15772 = G__15780;
count__15225_15773 = G__15781;
i__15226_15774 = G__15782;
continue;
} else {
var G__15785 = seq__15222_15771;
var G__15786 = chunk__15224_15772;
var G__15787 = count__15225_15773;
var G__15788 = (i__15226_15774 + (1));
seq__15222_15771 = G__15785;
chunk__15224_15772 = G__15786;
count__15225_15773 = G__15787;
i__15226_15774 = G__15788;
continue;
}
} else {
var temp__5804__auto___15794 = cljs.core.seq(seq__15222_15771);
if(temp__5804__auto___15794){
var seq__15222_15795__$1 = temp__5804__auto___15794;
if(cljs.core.chunked_seq_QMARK_(seq__15222_15795__$1)){
var c__5525__auto___15796 = cljs.core.chunk_first(seq__15222_15795__$1);
var G__15797 = cljs.core.chunk_rest(seq__15222_15795__$1);
var G__15798 = c__5525__auto___15796;
var G__15799 = cljs.core.count(c__5525__auto___15796);
var G__15800 = (0);
seq__15222_15771 = G__15797;
chunk__15224_15772 = G__15798;
count__15225_15773 = G__15799;
i__15226_15774 = G__15800;
continue;
} else {
var child_15801 = cljs.core.first(seq__15222_15795__$1);
if(cljs.core.truth_(child_15801)){
node.appendChild(child_15801);


var G__15803 = cljs.core.next(seq__15222_15795__$1);
var G__15804 = null;
var G__15805 = (0);
var G__15806 = (0);
seq__15222_15771 = G__15803;
chunk__15224_15772 = G__15804;
count__15225_15773 = G__15805;
i__15226_15774 = G__15806;
continue;
} else {
var G__15807 = cljs.core.next(seq__15222_15795__$1);
var G__15808 = null;
var G__15809 = (0);
var G__15810 = (0);
seq__15222_15771 = G__15807;
chunk__15224_15772 = G__15808;
count__15225_15773 = G__15809;
i__15226_15774 = G__15810;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15769);
}
}


var G__15812 = seq__15178_15758;
var G__15813 = chunk__15180_15759;
var G__15814 = count__15181_15760;
var G__15815 = (i__15182_15761 + (1));
seq__15178_15758 = G__15812;
chunk__15180_15759 = G__15813;
count__15181_15760 = G__15814;
i__15182_15761 = G__15815;
continue;
} else {
var G__15816 = seq__15178_15758;
var G__15817 = chunk__15180_15759;
var G__15818 = count__15181_15760;
var G__15819 = (i__15182_15761 + (1));
seq__15178_15758 = G__15816;
chunk__15180_15759 = G__15817;
count__15181_15760 = G__15818;
i__15182_15761 = G__15819;
continue;
}
} else {
var temp__5804__auto___15820 = cljs.core.seq(seq__15178_15758);
if(temp__5804__auto___15820){
var seq__15178_15821__$1 = temp__5804__auto___15820;
if(cljs.core.chunked_seq_QMARK_(seq__15178_15821__$1)){
var c__5525__auto___15822 = cljs.core.chunk_first(seq__15178_15821__$1);
var G__15824 = cljs.core.chunk_rest(seq__15178_15821__$1);
var G__15825 = c__5525__auto___15822;
var G__15826 = cljs.core.count(c__5525__auto___15822);
var G__15827 = (0);
seq__15178_15758 = G__15824;
chunk__15180_15759 = G__15825;
count__15181_15760 = G__15826;
i__15182_15761 = G__15827;
continue;
} else {
var child_struct_15830 = cljs.core.first(seq__15178_15821__$1);
if((!((child_struct_15830 == null)))){
if(typeof child_struct_15830 === 'string'){
var text_15832 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15832),child_struct_15830].join(''));
} else {
var children_15836 = shadow.dom.svg_node(child_struct_15830);
if(cljs.core.seq_QMARK_(children_15836)){
var seq__15238_15842 = cljs.core.seq(children_15836);
var chunk__15240_15843 = null;
var count__15241_15844 = (0);
var i__15242_15845 = (0);
while(true){
if((i__15242_15845 < count__15241_15844)){
var child_15852 = chunk__15240_15843.cljs$core$IIndexed$_nth$arity$2(null, i__15242_15845);
if(cljs.core.truth_(child_15852)){
node.appendChild(child_15852);


var G__15853 = seq__15238_15842;
var G__15854 = chunk__15240_15843;
var G__15855 = count__15241_15844;
var G__15856 = (i__15242_15845 + (1));
seq__15238_15842 = G__15853;
chunk__15240_15843 = G__15854;
count__15241_15844 = G__15855;
i__15242_15845 = G__15856;
continue;
} else {
var G__15859 = seq__15238_15842;
var G__15860 = chunk__15240_15843;
var G__15861 = count__15241_15844;
var G__15862 = (i__15242_15845 + (1));
seq__15238_15842 = G__15859;
chunk__15240_15843 = G__15860;
count__15241_15844 = G__15861;
i__15242_15845 = G__15862;
continue;
}
} else {
var temp__5804__auto___15865__$1 = cljs.core.seq(seq__15238_15842);
if(temp__5804__auto___15865__$1){
var seq__15238_15867__$1 = temp__5804__auto___15865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15238_15867__$1)){
var c__5525__auto___15869 = cljs.core.chunk_first(seq__15238_15867__$1);
var G__15870 = cljs.core.chunk_rest(seq__15238_15867__$1);
var G__15871 = c__5525__auto___15869;
var G__15872 = cljs.core.count(c__5525__auto___15869);
var G__15873 = (0);
seq__15238_15842 = G__15870;
chunk__15240_15843 = G__15871;
count__15241_15844 = G__15872;
i__15242_15845 = G__15873;
continue;
} else {
var child_15874 = cljs.core.first(seq__15238_15867__$1);
if(cljs.core.truth_(child_15874)){
node.appendChild(child_15874);


var G__15875 = cljs.core.next(seq__15238_15867__$1);
var G__15876 = null;
var G__15877 = (0);
var G__15878 = (0);
seq__15238_15842 = G__15875;
chunk__15240_15843 = G__15876;
count__15241_15844 = G__15877;
i__15242_15845 = G__15878;
continue;
} else {
var G__15880 = cljs.core.next(seq__15238_15867__$1);
var G__15881 = null;
var G__15882 = (0);
var G__15883 = (0);
seq__15238_15842 = G__15880;
chunk__15240_15843 = G__15881;
count__15241_15844 = G__15882;
i__15242_15845 = G__15883;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15836);
}
}


var G__15884 = cljs.core.next(seq__15178_15821__$1);
var G__15885 = null;
var G__15886 = (0);
var G__15887 = (0);
seq__15178_15758 = G__15884;
chunk__15180_15759 = G__15885;
count__15181_15760 = G__15886;
i__15182_15761 = G__15887;
continue;
} else {
var G__15888 = cljs.core.next(seq__15178_15821__$1);
var G__15889 = null;
var G__15890 = (0);
var G__15891 = (0);
seq__15178_15758 = G__15888;
chunk__15180_15759 = G__15889;
count__15181_15760 = G__15890;
i__15182_15761 = G__15891;
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
var len__5726__auto___15902 = arguments.length;
var i__5727__auto___15903 = (0);
while(true){
if((i__5727__auto___15903 < len__5726__auto___15902)){
args__5732__auto__.push((arguments[i__5727__auto___15903]));

var G__15905 = (i__5727__auto___15903 + (1));
i__5727__auto___15903 = G__15905;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15265){
var G__15266 = cljs.core.first(seq15265);
var seq15265__$1 = cljs.core.next(seq15265);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15266,seq15265__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
