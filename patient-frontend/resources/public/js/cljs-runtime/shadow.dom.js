goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15454 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_15454(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15457 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_15457(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13998 = coll;
var G__13999 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13998,G__13999) : shadow.dom.lazy_native_coll_seq.call(null,G__13998,G__13999));
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
var G__14030 = arguments.length;
switch (G__14030) {
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
var G__14033 = arguments.length;
switch (G__14033) {
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
var G__14043 = arguments.length;
switch (G__14043) {
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
var G__14046 = arguments.length;
switch (G__14046) {
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
var G__14056 = arguments.length;
switch (G__14056) {
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
var G__14073 = arguments.length;
switch (G__14073) {
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
}catch (e14091){if((e14091 instanceof Object)){
var e = e14091;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14091;

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
var seq__14102 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14103 = null;
var count__14104 = (0);
var i__14105 = (0);
while(true){
if((i__14105 < count__14104)){
var el = chunk__14103.cljs$core$IIndexed$_nth$arity$2(null,i__14105);
var handler_15508__$1 = ((function (seq__14102,chunk__14103,count__14104,i__14105,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14102,chunk__14103,count__14104,i__14105,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15508__$1);


var G__15509 = seq__14102;
var G__15510 = chunk__14103;
var G__15511 = count__14104;
var G__15512 = (i__14105 + (1));
seq__14102 = G__15509;
chunk__14103 = G__15510;
count__14104 = G__15511;
i__14105 = G__15512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14102);
if(temp__5804__auto__){
var seq__14102__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14102__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14102__$1);
var G__15514 = cljs.core.chunk_rest(seq__14102__$1);
var G__15515 = c__5525__auto__;
var G__15516 = cljs.core.count(c__5525__auto__);
var G__15517 = (0);
seq__14102 = G__15514;
chunk__14103 = G__15515;
count__14104 = G__15516;
i__14105 = G__15517;
continue;
} else {
var el = cljs.core.first(seq__14102__$1);
var handler_15518__$1 = ((function (seq__14102,chunk__14103,count__14104,i__14105,el,seq__14102__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14102,chunk__14103,count__14104,i__14105,el,seq__14102__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15518__$1);


var G__15519 = cljs.core.next(seq__14102__$1);
var G__15520 = null;
var G__15521 = (0);
var G__15522 = (0);
seq__14102 = G__15519;
chunk__14103 = G__15520;
count__14104 = G__15521;
i__14105 = G__15522;
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
var G__14145 = arguments.length;
switch (G__14145) {
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
var seq__14185 = cljs.core.seq(events);
var chunk__14186 = null;
var count__14187 = (0);
var i__14188 = (0);
while(true){
if((i__14188 < count__14187)){
var vec__14222 = chunk__14186.cljs$core$IIndexed$_nth$arity$2(null,i__14188);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15528 = seq__14185;
var G__15529 = chunk__14186;
var G__15530 = count__14187;
var G__15531 = (i__14188 + (1));
seq__14185 = G__15528;
chunk__14186 = G__15529;
count__14187 = G__15530;
i__14188 = G__15531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14185);
if(temp__5804__auto__){
var seq__14185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14185__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14185__$1);
var G__15532 = cljs.core.chunk_rest(seq__14185__$1);
var G__15533 = c__5525__auto__;
var G__15534 = cljs.core.count(c__5525__auto__);
var G__15535 = (0);
seq__14185 = G__15532;
chunk__14186 = G__15533;
count__14187 = G__15534;
i__14188 = G__15535;
continue;
} else {
var vec__14231 = cljs.core.first(seq__14185__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14231,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15536 = cljs.core.next(seq__14185__$1);
var G__15537 = null;
var G__15538 = (0);
var G__15539 = (0);
seq__14185 = G__15536;
chunk__14186 = G__15537;
count__14187 = G__15538;
i__14188 = G__15539;
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
var seq__14242 = cljs.core.seq(styles);
var chunk__14243 = null;
var count__14244 = (0);
var i__14245 = (0);
while(true){
if((i__14245 < count__14244)){
var vec__14275 = chunk__14243.cljs$core$IIndexed$_nth$arity$2(null,i__14245);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14275,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15547 = seq__14242;
var G__15548 = chunk__14243;
var G__15549 = count__14244;
var G__15550 = (i__14245 + (1));
seq__14242 = G__15547;
chunk__14243 = G__15548;
count__14244 = G__15549;
i__14245 = G__15550;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14242);
if(temp__5804__auto__){
var seq__14242__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14242__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14242__$1);
var G__15553 = cljs.core.chunk_rest(seq__14242__$1);
var G__15554 = c__5525__auto__;
var G__15555 = cljs.core.count(c__5525__auto__);
var G__15556 = (0);
seq__14242 = G__15553;
chunk__14243 = G__15554;
count__14244 = G__15555;
i__14245 = G__15556;
continue;
} else {
var vec__14289 = cljs.core.first(seq__14242__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14289,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15558 = cljs.core.next(seq__14242__$1);
var G__15559 = null;
var G__15560 = (0);
var G__15561 = (0);
seq__14242 = G__15558;
chunk__14243 = G__15559;
count__14244 = G__15560;
i__14245 = G__15561;
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
var G__14300_15563 = key;
var G__14300_15564__$1 = (((G__14300_15563 instanceof cljs.core.Keyword))?G__14300_15563.fqn:null);
switch (G__14300_15564__$1) {
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
var ks_15569 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15569,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15569,"aria-");
}
})())){
el.setAttribute(ks_15569,value);
} else {
(el[ks_15569] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14405){
var map__14406 = p__14405;
var map__14406__$1 = cljs.core.__destructure_map(map__14406);
var props = map__14406__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14406__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14410 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14410,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14410,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14410,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14416 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14416,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14416;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14427 = arguments.length;
switch (G__14427) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14438){
var vec__14439 = p__14438;
var seq__14440 = cljs.core.seq(vec__14439);
var first__14441 = cljs.core.first(seq__14440);
var seq__14440__$1 = cljs.core.next(seq__14440);
var nn = first__14441;
var first__14441__$1 = cljs.core.first(seq__14440__$1);
var seq__14440__$2 = cljs.core.next(seq__14440__$1);
var np = first__14441__$1;
var nc = seq__14440__$2;
var node = vec__14439;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14477 = nn;
var G__14478 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14477,G__14478) : create_fn.call(null,G__14477,G__14478));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14494 = nn;
var G__14495 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14494,G__14495) : create_fn.call(null,G__14494,G__14495));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14497 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14497,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14497,(1),null);
var seq__14501_15614 = cljs.core.seq(node_children);
var chunk__14502_15615 = null;
var count__14503_15616 = (0);
var i__14504_15617 = (0);
while(true){
if((i__14504_15617 < count__14503_15616)){
var child_struct_15618 = chunk__14502_15615.cljs$core$IIndexed$_nth$arity$2(null,i__14504_15617);
var children_15623 = shadow.dom.dom_node(child_struct_15618);
if(cljs.core.seq_QMARK_(children_15623)){
var seq__14599_15624 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15623));
var chunk__14601_15625 = null;
var count__14602_15626 = (0);
var i__14603_15627 = (0);
while(true){
if((i__14603_15627 < count__14602_15626)){
var child_15632 = chunk__14601_15625.cljs$core$IIndexed$_nth$arity$2(null,i__14603_15627);
if(cljs.core.truth_(child_15632)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15632);


var G__15638 = seq__14599_15624;
var G__15639 = chunk__14601_15625;
var G__15640 = count__14602_15626;
var G__15641 = (i__14603_15627 + (1));
seq__14599_15624 = G__15638;
chunk__14601_15625 = G__15639;
count__14602_15626 = G__15640;
i__14603_15627 = G__15641;
continue;
} else {
var G__15644 = seq__14599_15624;
var G__15645 = chunk__14601_15625;
var G__15646 = count__14602_15626;
var G__15647 = (i__14603_15627 + (1));
seq__14599_15624 = G__15644;
chunk__14601_15625 = G__15645;
count__14602_15626 = G__15646;
i__14603_15627 = G__15647;
continue;
}
} else {
var temp__5804__auto___15650 = cljs.core.seq(seq__14599_15624);
if(temp__5804__auto___15650){
var seq__14599_15651__$1 = temp__5804__auto___15650;
if(cljs.core.chunked_seq_QMARK_(seq__14599_15651__$1)){
var c__5525__auto___15653 = cljs.core.chunk_first(seq__14599_15651__$1);
var G__15654 = cljs.core.chunk_rest(seq__14599_15651__$1);
var G__15655 = c__5525__auto___15653;
var G__15656 = cljs.core.count(c__5525__auto___15653);
var G__15657 = (0);
seq__14599_15624 = G__15654;
chunk__14601_15625 = G__15655;
count__14602_15626 = G__15656;
i__14603_15627 = G__15657;
continue;
} else {
var child_15660 = cljs.core.first(seq__14599_15651__$1);
if(cljs.core.truth_(child_15660)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15660);


var G__15661 = cljs.core.next(seq__14599_15651__$1);
var G__15662 = null;
var G__15663 = (0);
var G__15664 = (0);
seq__14599_15624 = G__15661;
chunk__14601_15625 = G__15662;
count__14602_15626 = G__15663;
i__14603_15627 = G__15664;
continue;
} else {
var G__15667 = cljs.core.next(seq__14599_15651__$1);
var G__15668 = null;
var G__15669 = (0);
var G__15670 = (0);
seq__14599_15624 = G__15667;
chunk__14601_15625 = G__15668;
count__14602_15626 = G__15669;
i__14603_15627 = G__15670;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15623);
}


var G__15671 = seq__14501_15614;
var G__15672 = chunk__14502_15615;
var G__15673 = count__14503_15616;
var G__15674 = (i__14504_15617 + (1));
seq__14501_15614 = G__15671;
chunk__14502_15615 = G__15672;
count__14503_15616 = G__15673;
i__14504_15617 = G__15674;
continue;
} else {
var temp__5804__auto___15676 = cljs.core.seq(seq__14501_15614);
if(temp__5804__auto___15676){
var seq__14501_15679__$1 = temp__5804__auto___15676;
if(cljs.core.chunked_seq_QMARK_(seq__14501_15679__$1)){
var c__5525__auto___15680 = cljs.core.chunk_first(seq__14501_15679__$1);
var G__15682 = cljs.core.chunk_rest(seq__14501_15679__$1);
var G__15683 = c__5525__auto___15680;
var G__15684 = cljs.core.count(c__5525__auto___15680);
var G__15685 = (0);
seq__14501_15614 = G__15682;
chunk__14502_15615 = G__15683;
count__14503_15616 = G__15684;
i__14504_15617 = G__15685;
continue;
} else {
var child_struct_15686 = cljs.core.first(seq__14501_15679__$1);
var children_15687 = shadow.dom.dom_node(child_struct_15686);
if(cljs.core.seq_QMARK_(children_15687)){
var seq__14623_15688 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15687));
var chunk__14628_15689 = null;
var count__14629_15690 = (0);
var i__14630_15691 = (0);
while(true){
if((i__14630_15691 < count__14629_15690)){
var child_15693 = chunk__14628_15689.cljs$core$IIndexed$_nth$arity$2(null,i__14630_15691);
if(cljs.core.truth_(child_15693)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15693);


var G__15695 = seq__14623_15688;
var G__15696 = chunk__14628_15689;
var G__15697 = count__14629_15690;
var G__15698 = (i__14630_15691 + (1));
seq__14623_15688 = G__15695;
chunk__14628_15689 = G__15696;
count__14629_15690 = G__15697;
i__14630_15691 = G__15698;
continue;
} else {
var G__15700 = seq__14623_15688;
var G__15701 = chunk__14628_15689;
var G__15702 = count__14629_15690;
var G__15703 = (i__14630_15691 + (1));
seq__14623_15688 = G__15700;
chunk__14628_15689 = G__15701;
count__14629_15690 = G__15702;
i__14630_15691 = G__15703;
continue;
}
} else {
var temp__5804__auto___15704__$1 = cljs.core.seq(seq__14623_15688);
if(temp__5804__auto___15704__$1){
var seq__14623_15707__$1 = temp__5804__auto___15704__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14623_15707__$1)){
var c__5525__auto___15709 = cljs.core.chunk_first(seq__14623_15707__$1);
var G__15711 = cljs.core.chunk_rest(seq__14623_15707__$1);
var G__15712 = c__5525__auto___15709;
var G__15713 = cljs.core.count(c__5525__auto___15709);
var G__15714 = (0);
seq__14623_15688 = G__15711;
chunk__14628_15689 = G__15712;
count__14629_15690 = G__15713;
i__14630_15691 = G__15714;
continue;
} else {
var child_15716 = cljs.core.first(seq__14623_15707__$1);
if(cljs.core.truth_(child_15716)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15716);


var G__15720 = cljs.core.next(seq__14623_15707__$1);
var G__15721 = null;
var G__15722 = (0);
var G__15723 = (0);
seq__14623_15688 = G__15720;
chunk__14628_15689 = G__15721;
count__14629_15690 = G__15722;
i__14630_15691 = G__15723;
continue;
} else {
var G__15724 = cljs.core.next(seq__14623_15707__$1);
var G__15726 = null;
var G__15727 = (0);
var G__15728 = (0);
seq__14623_15688 = G__15724;
chunk__14628_15689 = G__15726;
count__14629_15690 = G__15727;
i__14630_15691 = G__15728;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15687);
}


var G__15729 = cljs.core.next(seq__14501_15679__$1);
var G__15730 = null;
var G__15731 = (0);
var G__15732 = (0);
seq__14501_15614 = G__15729;
chunk__14502_15615 = G__15730;
count__14503_15616 = G__15731;
i__14504_15617 = G__15732;
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
var seq__14656 = cljs.core.seq(node);
var chunk__14657 = null;
var count__14658 = (0);
var i__14659 = (0);
while(true){
if((i__14659 < count__14658)){
var n = chunk__14657.cljs$core$IIndexed$_nth$arity$2(null,i__14659);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15752 = seq__14656;
var G__15753 = chunk__14657;
var G__15754 = count__14658;
var G__15755 = (i__14659 + (1));
seq__14656 = G__15752;
chunk__14657 = G__15753;
count__14658 = G__15754;
i__14659 = G__15755;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14656);
if(temp__5804__auto__){
var seq__14656__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14656__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14656__$1);
var G__15758 = cljs.core.chunk_rest(seq__14656__$1);
var G__15759 = c__5525__auto__;
var G__15760 = cljs.core.count(c__5525__auto__);
var G__15761 = (0);
seq__14656 = G__15758;
chunk__14657 = G__15759;
count__14658 = G__15760;
i__14659 = G__15761;
continue;
} else {
var n = cljs.core.first(seq__14656__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15764 = cljs.core.next(seq__14656__$1);
var G__15765 = null;
var G__15766 = (0);
var G__15767 = (0);
seq__14656 = G__15764;
chunk__14657 = G__15765;
count__14658 = G__15766;
i__14659 = G__15767;
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
var G__14680 = arguments.length;
switch (G__14680) {
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
var G__14691 = arguments.length;
switch (G__14691) {
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
var G__14712 = arguments.length;
switch (G__14712) {
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
var len__5726__auto___15815 = arguments.length;
var i__5727__auto___15816 = (0);
while(true){
if((i__5727__auto___15816 < len__5726__auto___15815)){
args__5732__auto__.push((arguments[i__5727__auto___15816]));

var G__15819 = (i__5727__auto___15816 + (1));
i__5727__auto___15816 = G__15819;
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
var seq__14809_15826 = cljs.core.seq(nodes);
var chunk__14810_15827 = null;
var count__14811_15828 = (0);
var i__14812_15829 = (0);
while(true){
if((i__14812_15829 < count__14811_15828)){
var node_15833 = chunk__14810_15827.cljs$core$IIndexed$_nth$arity$2(null,i__14812_15829);
fragment.appendChild(shadow.dom._to_dom(node_15833));


var G__15834 = seq__14809_15826;
var G__15835 = chunk__14810_15827;
var G__15836 = count__14811_15828;
var G__15837 = (i__14812_15829 + (1));
seq__14809_15826 = G__15834;
chunk__14810_15827 = G__15835;
count__14811_15828 = G__15836;
i__14812_15829 = G__15837;
continue;
} else {
var temp__5804__auto___15839 = cljs.core.seq(seq__14809_15826);
if(temp__5804__auto___15839){
var seq__14809_15840__$1 = temp__5804__auto___15839;
if(cljs.core.chunked_seq_QMARK_(seq__14809_15840__$1)){
var c__5525__auto___15842 = cljs.core.chunk_first(seq__14809_15840__$1);
var G__15843 = cljs.core.chunk_rest(seq__14809_15840__$1);
var G__15844 = c__5525__auto___15842;
var G__15845 = cljs.core.count(c__5525__auto___15842);
var G__15846 = (0);
seq__14809_15826 = G__15843;
chunk__14810_15827 = G__15844;
count__14811_15828 = G__15845;
i__14812_15829 = G__15846;
continue;
} else {
var node_15847 = cljs.core.first(seq__14809_15840__$1);
fragment.appendChild(shadow.dom._to_dom(node_15847));


var G__15851 = cljs.core.next(seq__14809_15840__$1);
var G__15852 = null;
var G__15853 = (0);
var G__15854 = (0);
seq__14809_15826 = G__15851;
chunk__14810_15827 = G__15852;
count__14811_15828 = G__15853;
i__14812_15829 = G__15854;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14756){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14756));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14867_15864 = cljs.core.seq(scripts);
var chunk__14868_15865 = null;
var count__14869_15866 = (0);
var i__14870_15867 = (0);
while(true){
if((i__14870_15867 < count__14869_15866)){
var vec__14890_15868 = chunk__14868_15865.cljs$core$IIndexed$_nth$arity$2(null,i__14870_15867);
var script_tag_15869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14890_15868,(0),null);
var script_body_15870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14890_15868,(1),null);
eval(script_body_15870);


var G__15875 = seq__14867_15864;
var G__15876 = chunk__14868_15865;
var G__15877 = count__14869_15866;
var G__15878 = (i__14870_15867 + (1));
seq__14867_15864 = G__15875;
chunk__14868_15865 = G__15876;
count__14869_15866 = G__15877;
i__14870_15867 = G__15878;
continue;
} else {
var temp__5804__auto___15879 = cljs.core.seq(seq__14867_15864);
if(temp__5804__auto___15879){
var seq__14867_15880__$1 = temp__5804__auto___15879;
if(cljs.core.chunked_seq_QMARK_(seq__14867_15880__$1)){
var c__5525__auto___15882 = cljs.core.chunk_first(seq__14867_15880__$1);
var G__15888 = cljs.core.chunk_rest(seq__14867_15880__$1);
var G__15889 = c__5525__auto___15882;
var G__15890 = cljs.core.count(c__5525__auto___15882);
var G__15891 = (0);
seq__14867_15864 = G__15888;
chunk__14868_15865 = G__15889;
count__14869_15866 = G__15890;
i__14870_15867 = G__15891;
continue;
} else {
var vec__14903_15892 = cljs.core.first(seq__14867_15880__$1);
var script_tag_15893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14903_15892,(0),null);
var script_body_15894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14903_15892,(1),null);
eval(script_body_15894);


var G__15900 = cljs.core.next(seq__14867_15880__$1);
var G__15901 = null;
var G__15902 = (0);
var G__15903 = (0);
seq__14867_15864 = G__15900;
chunk__14868_15865 = G__15901;
count__14869_15866 = G__15902;
i__14870_15867 = G__15903;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14917){
var vec__14918 = p__14917;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(1),null);
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
var G__14935 = arguments.length;
switch (G__14935) {
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
var seq__14964 = cljs.core.seq(style_keys);
var chunk__14965 = null;
var count__14966 = (0);
var i__14967 = (0);
while(true){
if((i__14967 < count__14966)){
var it = chunk__14965.cljs$core$IIndexed$_nth$arity$2(null,i__14967);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15920 = seq__14964;
var G__15921 = chunk__14965;
var G__15922 = count__14966;
var G__15923 = (i__14967 + (1));
seq__14964 = G__15920;
chunk__14965 = G__15921;
count__14966 = G__15922;
i__14967 = G__15923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14964);
if(temp__5804__auto__){
var seq__14964__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14964__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14964__$1);
var G__15927 = cljs.core.chunk_rest(seq__14964__$1);
var G__15928 = c__5525__auto__;
var G__15929 = cljs.core.count(c__5525__auto__);
var G__15930 = (0);
seq__14964 = G__15927;
chunk__14965 = G__15928;
count__14966 = G__15929;
i__14967 = G__15930;
continue;
} else {
var it = cljs.core.first(seq__14964__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15933 = cljs.core.next(seq__14964__$1);
var G__15934 = null;
var G__15935 = (0);
var G__15936 = (0);
seq__14964 = G__15933;
chunk__14965 = G__15934;
count__14966 = G__15935;
i__14967 = G__15936;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14994,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15043 = k14994;
var G__15043__$1 = (((G__15043 instanceof cljs.core.Keyword))?G__15043.fqn:null);
switch (G__15043__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14994,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15048){
var vec__15050 = p__15048;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15050,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15050,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14993){
var self__ = this;
var G__14993__$1 = this;
return (new cljs.core.RecordIter((0),G__14993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14996,other14997){
var self__ = this;
var this14996__$1 = this;
return (((!((other14997 == null)))) && ((((this14996__$1.constructor === other14997.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14996__$1.x,other14997.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14996__$1.y,other14997.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14996__$1.__extmap,other14997.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14994){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15090 = k14994;
var G__15090__$1 = (((G__15090 instanceof cljs.core.Keyword))?G__15090.fqn:null);
switch (G__15090__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14994);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14993){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15099 = cljs.core.keyword_identical_QMARK_;
var expr__15100 = k__5309__auto__;
if(cljs.core.truth_((pred__15099.cljs$core$IFn$_invoke$arity$2 ? pred__15099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15100) : pred__15099.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15100)))){
return (new shadow.dom.Coordinate(G__14993,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15099.cljs$core$IFn$_invoke$arity$2 ? pred__15099.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15100) : pred__15099.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15100)))){
return (new shadow.dom.Coordinate(self__.x,G__14993,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14993),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14993){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14993,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15037){
var extmap__5342__auto__ = (function (){var G__15133 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15037,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15037)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15133);
} else {
return G__15133;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15037),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15037),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15145,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15162 = k15145;
var G__15162__$1 = (((G__15162 instanceof cljs.core.Keyword))?G__15162.fqn:null);
switch (G__15162__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15145,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15168){
var vec__15169 = p__15168;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15144){
var self__ = this;
var G__15144__$1 = this;
return (new cljs.core.RecordIter((0),G__15144__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15146,other15147){
var self__ = this;
var this15146__$1 = this;
return (((!((other15147 == null)))) && ((((this15146__$1.constructor === other15147.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.w,other15147.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.h,other15147.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.__extmap,other15147.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15145){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15207 = k15145;
var G__15207__$1 = (((G__15207 instanceof cljs.core.Keyword))?G__15207.fqn:null);
switch (G__15207__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15145);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15144){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15209 = cljs.core.keyword_identical_QMARK_;
var expr__15210 = k__5309__auto__;
if(cljs.core.truth_((pred__15209.cljs$core$IFn$_invoke$arity$2 ? pred__15209.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15210) : pred__15209.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15210)))){
return (new shadow.dom.Size(G__15144,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15209.cljs$core$IFn$_invoke$arity$2 ? pred__15209.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15210) : pred__15209.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15210)))){
return (new shadow.dom.Size(self__.w,G__15144,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15144),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15144){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15144,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15149){
var extmap__5342__auto__ = (function (){var G__15213 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15149,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15149)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15213);
} else {
return G__15213;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15149),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15149),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__16108 = (i + (1));
var G__16110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16108;
ret = G__16110;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15242){
var vec__15244 = p__15242;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15252 = arguments.length;
switch (G__15252) {
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
var G__16136 = ps;
var G__16137 = (i + (1));
el__$1 = G__16136;
i = G__16137;
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
var vec__15288 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15288,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15288,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15288,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15304_16158 = cljs.core.seq(props);
var chunk__15305_16159 = null;
var count__15306_16160 = (0);
var i__15307_16161 = (0);
while(true){
if((i__15307_16161 < count__15306_16160)){
var vec__15324_16164 = chunk__15305_16159.cljs$core$IIndexed$_nth$arity$2(null,i__15307_16161);
var k_16165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324_16164,(0),null);
var v_16166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324_16164,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16165);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16165),v_16166);


var G__16179 = seq__15304_16158;
var G__16180 = chunk__15305_16159;
var G__16181 = count__15306_16160;
var G__16182 = (i__15307_16161 + (1));
seq__15304_16158 = G__16179;
chunk__15305_16159 = G__16180;
count__15306_16160 = G__16181;
i__15307_16161 = G__16182;
continue;
} else {
var temp__5804__auto___16189 = cljs.core.seq(seq__15304_16158);
if(temp__5804__auto___16189){
var seq__15304_16198__$1 = temp__5804__auto___16189;
if(cljs.core.chunked_seq_QMARK_(seq__15304_16198__$1)){
var c__5525__auto___16199 = cljs.core.chunk_first(seq__15304_16198__$1);
var G__16201 = cljs.core.chunk_rest(seq__15304_16198__$1);
var G__16202 = c__5525__auto___16199;
var G__16203 = cljs.core.count(c__5525__auto___16199);
var G__16204 = (0);
seq__15304_16158 = G__16201;
chunk__15305_16159 = G__16202;
count__15306_16160 = G__16203;
i__15307_16161 = G__16204;
continue;
} else {
var vec__15328_16207 = cljs.core.first(seq__15304_16198__$1);
var k_16208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328_16207,(0),null);
var v_16209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328_16207,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16208);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16208),v_16209);


var G__16211 = cljs.core.next(seq__15304_16198__$1);
var G__16212 = null;
var G__16213 = (0);
var G__16214 = (0);
seq__15304_16158 = G__16211;
chunk__15305_16159 = G__16212;
count__15306_16160 = G__16213;
i__15307_16161 = G__16214;
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
var vec__15353 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15353,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15353,(1),null);
var seq__15356_16218 = cljs.core.seq(node_children);
var chunk__15358_16219 = null;
var count__15359_16220 = (0);
var i__15360_16221 = (0);
while(true){
if((i__15360_16221 < count__15359_16220)){
var child_struct_16223 = chunk__15358_16219.cljs$core$IIndexed$_nth$arity$2(null,i__15360_16221);
if((!((child_struct_16223 == null)))){
if(typeof child_struct_16223 === 'string'){
var text_16225 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16225),child_struct_16223].join(''));
} else {
var children_16227 = shadow.dom.svg_node(child_struct_16223);
if(cljs.core.seq_QMARK_(children_16227)){
var seq__15405_16228 = cljs.core.seq(children_16227);
var chunk__15407_16229 = null;
var count__15408_16230 = (0);
var i__15409_16231 = (0);
while(true){
if((i__15409_16231 < count__15408_16230)){
var child_16234 = chunk__15407_16229.cljs$core$IIndexed$_nth$arity$2(null,i__15409_16231);
if(cljs.core.truth_(child_16234)){
node.appendChild(child_16234);


var G__16237 = seq__15405_16228;
var G__16238 = chunk__15407_16229;
var G__16239 = count__15408_16230;
var G__16240 = (i__15409_16231 + (1));
seq__15405_16228 = G__16237;
chunk__15407_16229 = G__16238;
count__15408_16230 = G__16239;
i__15409_16231 = G__16240;
continue;
} else {
var G__16241 = seq__15405_16228;
var G__16242 = chunk__15407_16229;
var G__16243 = count__15408_16230;
var G__16244 = (i__15409_16231 + (1));
seq__15405_16228 = G__16241;
chunk__15407_16229 = G__16242;
count__15408_16230 = G__16243;
i__15409_16231 = G__16244;
continue;
}
} else {
var temp__5804__auto___16245 = cljs.core.seq(seq__15405_16228);
if(temp__5804__auto___16245){
var seq__15405_16246__$1 = temp__5804__auto___16245;
if(cljs.core.chunked_seq_QMARK_(seq__15405_16246__$1)){
var c__5525__auto___16251 = cljs.core.chunk_first(seq__15405_16246__$1);
var G__16253 = cljs.core.chunk_rest(seq__15405_16246__$1);
var G__16254 = c__5525__auto___16251;
var G__16255 = cljs.core.count(c__5525__auto___16251);
var G__16256 = (0);
seq__15405_16228 = G__16253;
chunk__15407_16229 = G__16254;
count__15408_16230 = G__16255;
i__15409_16231 = G__16256;
continue;
} else {
var child_16257 = cljs.core.first(seq__15405_16246__$1);
if(cljs.core.truth_(child_16257)){
node.appendChild(child_16257);


var G__16260 = cljs.core.next(seq__15405_16246__$1);
var G__16261 = null;
var G__16262 = (0);
var G__16263 = (0);
seq__15405_16228 = G__16260;
chunk__15407_16229 = G__16261;
count__15408_16230 = G__16262;
i__15409_16231 = G__16263;
continue;
} else {
var G__16265 = cljs.core.next(seq__15405_16246__$1);
var G__16266 = null;
var G__16267 = (0);
var G__16268 = (0);
seq__15405_16228 = G__16265;
chunk__15407_16229 = G__16266;
count__15408_16230 = G__16267;
i__15409_16231 = G__16268;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16227);
}
}


var G__16271 = seq__15356_16218;
var G__16272 = chunk__15358_16219;
var G__16273 = count__15359_16220;
var G__16274 = (i__15360_16221 + (1));
seq__15356_16218 = G__16271;
chunk__15358_16219 = G__16272;
count__15359_16220 = G__16273;
i__15360_16221 = G__16274;
continue;
} else {
var G__16275 = seq__15356_16218;
var G__16276 = chunk__15358_16219;
var G__16277 = count__15359_16220;
var G__16278 = (i__15360_16221 + (1));
seq__15356_16218 = G__16275;
chunk__15358_16219 = G__16276;
count__15359_16220 = G__16277;
i__15360_16221 = G__16278;
continue;
}
} else {
var temp__5804__auto___16280 = cljs.core.seq(seq__15356_16218);
if(temp__5804__auto___16280){
var seq__15356_16281__$1 = temp__5804__auto___16280;
if(cljs.core.chunked_seq_QMARK_(seq__15356_16281__$1)){
var c__5525__auto___16282 = cljs.core.chunk_first(seq__15356_16281__$1);
var G__16283 = cljs.core.chunk_rest(seq__15356_16281__$1);
var G__16284 = c__5525__auto___16282;
var G__16285 = cljs.core.count(c__5525__auto___16282);
var G__16286 = (0);
seq__15356_16218 = G__16283;
chunk__15358_16219 = G__16284;
count__15359_16220 = G__16285;
i__15360_16221 = G__16286;
continue;
} else {
var child_struct_16289 = cljs.core.first(seq__15356_16281__$1);
if((!((child_struct_16289 == null)))){
if(typeof child_struct_16289 === 'string'){
var text_16291 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16291),child_struct_16289].join(''));
} else {
var children_16293 = shadow.dom.svg_node(child_struct_16289);
if(cljs.core.seq_QMARK_(children_16293)){
var seq__15423_16296 = cljs.core.seq(children_16293);
var chunk__15425_16297 = null;
var count__15426_16298 = (0);
var i__15427_16299 = (0);
while(true){
if((i__15427_16299 < count__15426_16298)){
var child_16302 = chunk__15425_16297.cljs$core$IIndexed$_nth$arity$2(null,i__15427_16299);
if(cljs.core.truth_(child_16302)){
node.appendChild(child_16302);


var G__16303 = seq__15423_16296;
var G__16304 = chunk__15425_16297;
var G__16305 = count__15426_16298;
var G__16306 = (i__15427_16299 + (1));
seq__15423_16296 = G__16303;
chunk__15425_16297 = G__16304;
count__15426_16298 = G__16305;
i__15427_16299 = G__16306;
continue;
} else {
var G__16307 = seq__15423_16296;
var G__16308 = chunk__15425_16297;
var G__16309 = count__15426_16298;
var G__16310 = (i__15427_16299 + (1));
seq__15423_16296 = G__16307;
chunk__15425_16297 = G__16308;
count__15426_16298 = G__16309;
i__15427_16299 = G__16310;
continue;
}
} else {
var temp__5804__auto___16312__$1 = cljs.core.seq(seq__15423_16296);
if(temp__5804__auto___16312__$1){
var seq__15423_16313__$1 = temp__5804__auto___16312__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15423_16313__$1)){
var c__5525__auto___16314 = cljs.core.chunk_first(seq__15423_16313__$1);
var G__16315 = cljs.core.chunk_rest(seq__15423_16313__$1);
var G__16316 = c__5525__auto___16314;
var G__16317 = cljs.core.count(c__5525__auto___16314);
var G__16318 = (0);
seq__15423_16296 = G__16315;
chunk__15425_16297 = G__16316;
count__15426_16298 = G__16317;
i__15427_16299 = G__16318;
continue;
} else {
var child_16321 = cljs.core.first(seq__15423_16313__$1);
if(cljs.core.truth_(child_16321)){
node.appendChild(child_16321);


var G__16325 = cljs.core.next(seq__15423_16313__$1);
var G__16326 = null;
var G__16327 = (0);
var G__16328 = (0);
seq__15423_16296 = G__16325;
chunk__15425_16297 = G__16326;
count__15426_16298 = G__16327;
i__15427_16299 = G__16328;
continue;
} else {
var G__16329 = cljs.core.next(seq__15423_16313__$1);
var G__16330 = null;
var G__16331 = (0);
var G__16332 = (0);
seq__15423_16296 = G__16329;
chunk__15425_16297 = G__16330;
count__15426_16298 = G__16331;
i__15427_16299 = G__16332;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16293);
}
}


var G__16333 = cljs.core.next(seq__15356_16281__$1);
var G__16334 = null;
var G__16335 = (0);
var G__16336 = (0);
seq__15356_16218 = G__16333;
chunk__15358_16219 = G__16334;
count__15359_16220 = G__16335;
i__15360_16221 = G__16336;
continue;
} else {
var G__16337 = cljs.core.next(seq__15356_16281__$1);
var G__16338 = null;
var G__16339 = (0);
var G__16340 = (0);
seq__15356_16218 = G__16337;
chunk__15358_16219 = G__16338;
count__15359_16220 = G__16339;
i__15360_16221 = G__16340;
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
var len__5726__auto___16347 = arguments.length;
var i__5727__auto___16348 = (0);
while(true){
if((i__5727__auto___16348 < len__5726__auto___16347)){
args__5732__auto__.push((arguments[i__5727__auto___16348]));

var G__16350 = (i__5727__auto___16348 + (1));
i__5727__auto___16348 = G__16350;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15448){
var G__15449 = cljs.core.first(seq15448);
var seq15448__$1 = cljs.core.next(seq15448);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15449,seq15448__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
