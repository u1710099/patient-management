goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13978){
var map__13980 = p__13978;
var map__13980__$1 = cljs.core.__destructure_map(map__13980);
var runtime = map__13980__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13980__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14169 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14169)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13999 = runtime;
var G__14000 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14169);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13999,G__14000) : shadow.remote.runtime.shared.process.call(null, G__13999,G__14000));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14004,res){
var map__14005 = p__14004;
var map__14005__$1 = cljs.core.__destructure_map(map__14005);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14005__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14005__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14007 = res;
var G__14007__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14007,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14007);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14007__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14007__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14011 = arguments.length;
switch (G__14011) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14014,msg,handlers,timeout_after_ms){
var map__14015 = p__14014;
var map__14015__$1 = cljs.core.__destructure_map(map__14015);
var runtime = map__14015__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___14181 = arguments.length;
var i__5727__auto___14182 = (0);
while(true){
if((i__5727__auto___14182 < len__5726__auto___14181)){
args__5732__auto__.push((arguments[i__5727__auto___14182]));

var G__14183 = (i__5727__auto___14182 + (1));
i__5727__auto___14182 = G__14183;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14033,ev,args){
var map__14034 = p__14033;
var map__14034__$1 = cljs.core.__destructure_map(map__14034);
var runtime = map__14034__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14034__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14035 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14038 = null;
var count__14039 = (0);
var i__14040 = (0);
while(true){
if((i__14040 < count__14039)){
var ext = chunk__14038.cljs$core$IIndexed$_nth$arity$2(null, i__14040);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14186 = seq__14035;
var G__14187 = chunk__14038;
var G__14188 = count__14039;
var G__14189 = (i__14040 + (1));
seq__14035 = G__14186;
chunk__14038 = G__14187;
count__14039 = G__14188;
i__14040 = G__14189;
continue;
} else {
var G__14190 = seq__14035;
var G__14191 = chunk__14038;
var G__14192 = count__14039;
var G__14193 = (i__14040 + (1));
seq__14035 = G__14190;
chunk__14038 = G__14191;
count__14039 = G__14192;
i__14040 = G__14193;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14035);
if(temp__5804__auto__){
var seq__14035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14035__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14035__$1);
var G__14194 = cljs.core.chunk_rest(seq__14035__$1);
var G__14195 = c__5525__auto__;
var G__14196 = cljs.core.count(c__5525__auto__);
var G__14197 = (0);
seq__14035 = G__14194;
chunk__14038 = G__14195;
count__14039 = G__14196;
i__14040 = G__14197;
continue;
} else {
var ext = cljs.core.first(seq__14035__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14198 = cljs.core.next(seq__14035__$1);
var G__14199 = null;
var G__14200 = (0);
var G__14201 = (0);
seq__14035 = G__14198;
chunk__14038 = G__14199;
count__14039 = G__14200;
i__14040 = G__14201;
continue;
} else {
var G__14206 = cljs.core.next(seq__14035__$1);
var G__14207 = null;
var G__14208 = (0);
var G__14209 = (0);
seq__14035 = G__14206;
chunk__14038 = G__14207;
count__14039 = G__14208;
i__14040 = G__14209;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14021){
var G__14022 = cljs.core.first(seq14021);
var seq14021__$1 = cljs.core.next(seq14021);
var G__14024 = cljs.core.first(seq14021__$1);
var seq14021__$2 = cljs.core.next(seq14021__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14022,G__14024,seq14021__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14058,p__14059){
var map__14062 = p__14058;
var map__14062__$1 = cljs.core.__destructure_map(map__14062);
var runtime = map__14062__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14062__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14063 = p__14059;
var map__14063__$1 = cljs.core.__destructure_map(map__14063);
var msg = map__14063__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14063__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14064 = cljs.core.deref(state_ref);
var map__14064__$1 = cljs.core.__destructure_map(map__14064);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14064__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14064__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14065,msg){
var map__14066 = p__14065;
var map__14066__$1 = cljs.core.__destructure_map(map__14066);
var runtime = map__14066__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14066__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14067,key,p__14068){
var map__14073 = p__14067;
var map__14073__$1 = cljs.core.__destructure_map(map__14073);
var state = map__14073__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14073__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14074 = p__14068;
var map__14074__$1 = cljs.core.__destructure_map(map__14074);
var spec = map__14074__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14082,key,spec){
var map__14084 = p__14082;
var map__14084__$1 = cljs.core.__destructure_map(map__14084);
var runtime = map__14084__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14225 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14225 == null)){
} else {
var on_welcome_14230 = temp__5808__auto___14225;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14230.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14230.cljs$core$IFn$_invoke$arity$0() : on_welcome_14230.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14088_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14088_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14089_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14089_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14090_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14090_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14091_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14091_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14092_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14092_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14099,key){
var map__14103 = p__14099;
var map__14103__$1 = cljs.core.__destructure_map(map__14103);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14103__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14108,msg){
var map__14109 = p__14108;
var map__14109__$1 = cljs.core.__destructure_map(map__14109);
var runtime = map__14109__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14117,p__14118){
var map__14119 = p__14117;
var map__14119__$1 = cljs.core.__destructure_map(map__14119);
var runtime = map__14119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14120 = p__14118;
var map__14120__$1 = cljs.core.__destructure_map(map__14120);
var msg = map__14120__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14120__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14120__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
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
var seq__14134 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14136 = null;
var count__14137 = (0);
var i__14138 = (0);
while(true){
if((i__14138 < count__14137)){
var map__14146 = chunk__14136.cljs$core$IIndexed$_nth$arity$2(null, i__14138);
var map__14146__$1 = cljs.core.__destructure_map(map__14146);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14146__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14329 = seq__14134;
var G__14330 = chunk__14136;
var G__14331 = count__14137;
var G__14332 = (i__14138 + (1));
seq__14134 = G__14329;
chunk__14136 = G__14330;
count__14137 = G__14331;
i__14138 = G__14332;
continue;
} else {
var G__14333 = seq__14134;
var G__14334 = chunk__14136;
var G__14335 = count__14137;
var G__14336 = (i__14138 + (1));
seq__14134 = G__14333;
chunk__14136 = G__14334;
count__14137 = G__14335;
i__14138 = G__14336;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14134);
if(temp__5804__auto__){
var seq__14134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14134__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14134__$1);
var G__14343 = cljs.core.chunk_rest(seq__14134__$1);
var G__14344 = c__5525__auto__;
var G__14345 = cljs.core.count(c__5525__auto__);
var G__14346 = (0);
seq__14134 = G__14343;
chunk__14136 = G__14344;
count__14137 = G__14345;
i__14138 = G__14346;
continue;
} else {
var map__14150 = cljs.core.first(seq__14134__$1);
var map__14150__$1 = cljs.core.__destructure_map(map__14150);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14150__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14353 = cljs.core.next(seq__14134__$1);
var G__14354 = null;
var G__14355 = (0);
var G__14356 = (0);
seq__14134 = G__14353;
chunk__14136 = G__14354;
count__14137 = G__14355;
i__14138 = G__14356;
continue;
} else {
var G__14357 = cljs.core.next(seq__14134__$1);
var G__14358 = null;
var G__14359 = (0);
var G__14360 = (0);
seq__14134 = G__14357;
chunk__14136 = G__14358;
count__14137 = G__14359;
i__14138 = G__14360;
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
