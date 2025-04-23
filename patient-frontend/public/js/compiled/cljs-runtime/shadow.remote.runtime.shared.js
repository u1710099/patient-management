goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14066){
var map__14067 = p__14066;
var map__14067__$1 = cljs.core.__destructure_map(map__14067);
var runtime = map__14067__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14311 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14311)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14080 = runtime;
var G__14081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14311);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14080,G__14081) : shadow.remote.runtime.shared.process.call(null,G__14080,G__14081));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14083,res){
var map__14084 = p__14083;
var map__14084__$1 = cljs.core.__destructure_map(map__14084);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14089 = res;
var G__14089__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14089,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14089);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14089__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14089__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14098 = arguments.length;
switch (G__14098) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14100,msg,handlers,timeout_after_ms){
var map__14101 = p__14100;
var map__14101__$1 = cljs.core.__destructure_map(map__14101);
var runtime = map__14101__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14101__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14333 = arguments.length;
var i__5727__auto___14334 = (0);
while(true){
if((i__5727__auto___14334 < len__5726__auto___14333)){
args__5732__auto__.push((arguments[i__5727__auto___14334]));

var G__14335 = (i__5727__auto___14334 + (1));
i__5727__auto___14334 = G__14335;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14121,ev,args){
var map__14122 = p__14121;
var map__14122__$1 = cljs.core.__destructure_map(map__14122);
var runtime = map__14122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14123 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14126 = null;
var count__14127 = (0);
var i__14128 = (0);
while(true){
if((i__14128 < count__14127)){
var ext = chunk__14126.cljs$core$IIndexed$_nth$arity$2(null,i__14128);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14362 = seq__14123;
var G__14363 = chunk__14126;
var G__14364 = count__14127;
var G__14365 = (i__14128 + (1));
seq__14123 = G__14362;
chunk__14126 = G__14363;
count__14127 = G__14364;
i__14128 = G__14365;
continue;
} else {
var G__14371 = seq__14123;
var G__14372 = chunk__14126;
var G__14373 = count__14127;
var G__14374 = (i__14128 + (1));
seq__14123 = G__14371;
chunk__14126 = G__14372;
count__14127 = G__14373;
i__14128 = G__14374;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14123);
if(temp__5804__auto__){
var seq__14123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14123__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14123__$1);
var G__14375 = cljs.core.chunk_rest(seq__14123__$1);
var G__14376 = c__5525__auto__;
var G__14377 = cljs.core.count(c__5525__auto__);
var G__14378 = (0);
seq__14123 = G__14375;
chunk__14126 = G__14376;
count__14127 = G__14377;
i__14128 = G__14378;
continue;
} else {
var ext = cljs.core.first(seq__14123__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14380 = cljs.core.next(seq__14123__$1);
var G__14381 = null;
var G__14382 = (0);
var G__14383 = (0);
seq__14123 = G__14380;
chunk__14126 = G__14381;
count__14127 = G__14382;
i__14128 = G__14383;
continue;
} else {
var G__14385 = cljs.core.next(seq__14123__$1);
var G__14386 = null;
var G__14387 = (0);
var G__14388 = (0);
seq__14123 = G__14385;
chunk__14126 = G__14386;
count__14127 = G__14387;
i__14128 = G__14388;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14109){
var G__14110 = cljs.core.first(seq14109);
var seq14109__$1 = cljs.core.next(seq14109);
var G__14111 = cljs.core.first(seq14109__$1);
var seq14109__$2 = cljs.core.next(seq14109__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14110,G__14111,seq14109__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14153,p__14154){
var map__14156 = p__14153;
var map__14156__$1 = cljs.core.__destructure_map(map__14156);
var runtime = map__14156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14157 = p__14154;
var map__14157__$1 = cljs.core.__destructure_map(map__14157);
var msg = map__14157__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14157__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14161 = cljs.core.deref(state_ref);
var map__14161__$1 = cljs.core.__destructure_map(map__14161);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14164,msg){
var map__14165 = p__14164;
var map__14165__$1 = cljs.core.__destructure_map(map__14165);
var runtime = map__14165__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14169,key,p__14170){
var map__14171 = p__14169;
var map__14171__$1 = cljs.core.__destructure_map(map__14171);
var state = map__14171__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14172 = p__14170;
var map__14172__$1 = cljs.core.__destructure_map(map__14172);
var spec = map__14172__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14172__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14172__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14174,key,spec){
var map__14175 = p__14174;
var map__14175__$1 = cljs.core.__destructure_map(map__14175);
var runtime = map__14175__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14417 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14417 == null)){
} else {
var on_welcome_14418 = temp__5808__auto___14417;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14418.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14418.cljs$core$IFn$_invoke$arity$0() : on_welcome_14418.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14180_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14180_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14181_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14181_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14182_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14182_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14183_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14183_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14184_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14184_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14202,key){
var map__14203 = p__14202;
var map__14203__$1 = cljs.core.__destructure_map(map__14203);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14203__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14209,msg){
var map__14211 = p__14209;
var map__14211__$1 = cljs.core.__destructure_map(map__14211);
var runtime = map__14211__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14211__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14235,p__14236){
var map__14237 = p__14235;
var map__14237__$1 = cljs.core.__destructure_map(map__14237);
var runtime = map__14237__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14238 = p__14236;
var map__14238__$1 = cljs.core.__destructure_map(map__14238);
var msg = map__14238__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14255 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14257 = null;
var count__14258 = (0);
var i__14259 = (0);
while(true){
if((i__14259 < count__14258)){
var map__14283 = chunk__14257.cljs$core$IIndexed$_nth$arity$2(null,i__14259);
var map__14283__$1 = cljs.core.__destructure_map(map__14283);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14283__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14449 = seq__14255;
var G__14450 = chunk__14257;
var G__14451 = count__14258;
var G__14452 = (i__14259 + (1));
seq__14255 = G__14449;
chunk__14257 = G__14450;
count__14258 = G__14451;
i__14259 = G__14452;
continue;
} else {
var G__14454 = seq__14255;
var G__14455 = chunk__14257;
var G__14456 = count__14258;
var G__14457 = (i__14259 + (1));
seq__14255 = G__14454;
chunk__14257 = G__14455;
count__14258 = G__14456;
i__14259 = G__14457;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14255);
if(temp__5804__auto__){
var seq__14255__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14255__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14255__$1);
var G__14464 = cljs.core.chunk_rest(seq__14255__$1);
var G__14465 = c__5525__auto__;
var G__14466 = cljs.core.count(c__5525__auto__);
var G__14467 = (0);
seq__14255 = G__14464;
chunk__14257 = G__14465;
count__14258 = G__14466;
i__14259 = G__14467;
continue;
} else {
var map__14296 = cljs.core.first(seq__14255__$1);
var map__14296__$1 = cljs.core.__destructure_map(map__14296);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14296__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14480 = cljs.core.next(seq__14255__$1);
var G__14481 = null;
var G__14482 = (0);
var G__14483 = (0);
seq__14255 = G__14480;
chunk__14257 = G__14481;
count__14258 = G__14482;
i__14259 = G__14483;
continue;
} else {
var G__14488 = cljs.core.next(seq__14255__$1);
var G__14489 = null;
var G__14490 = (0);
var G__14491 = (0);
seq__14255 = G__14488;
chunk__14257 = G__14489;
count__14258 = G__14490;
i__14259 = G__14491;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
