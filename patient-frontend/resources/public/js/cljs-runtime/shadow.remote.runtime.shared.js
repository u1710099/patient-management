goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13765){
var map__13768 = p__13765;
var map__13768__$1 = cljs.core.__destructure_map(map__13768);
var runtime = map__13768__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13768__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14073 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14073)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13784 = runtime;
var G__13785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14073);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13784,G__13785) : shadow.remote.runtime.shared.process.call(null,G__13784,G__13785));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13801,res){
var map__13804 = p__13801;
var map__13804__$1 = cljs.core.__destructure_map(map__13804);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13805 = res;
var G__13805__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13805,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13805);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13805__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13805__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13810 = arguments.length;
switch (G__13810) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13816,msg,handlers,timeout_after_ms){
var map__13819 = p__13816;
var map__13819__$1 = cljs.core.__destructure_map(map__13819);
var runtime = map__13819__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13819__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___14100 = arguments.length;
var i__5727__auto___14101 = (0);
while(true){
if((i__5727__auto___14101 < len__5726__auto___14100)){
args__5732__auto__.push((arguments[i__5727__auto___14101]));

var G__14102 = (i__5727__auto___14101 + (1));
i__5727__auto___14101 = G__14102;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13840,ev,args){
var map__13841 = p__13840;
var map__13841__$1 = cljs.core.__destructure_map(map__13841);
var runtime = map__13841__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13841__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13842 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13845 = null;
var count__13846 = (0);
var i__13847 = (0);
while(true){
if((i__13847 < count__13846)){
var ext = chunk__13845.cljs$core$IIndexed$_nth$arity$2(null,i__13847);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14127 = seq__13842;
var G__14128 = chunk__13845;
var G__14129 = count__13846;
var G__14130 = (i__13847 + (1));
seq__13842 = G__14127;
chunk__13845 = G__14128;
count__13846 = G__14129;
i__13847 = G__14130;
continue;
} else {
var G__14131 = seq__13842;
var G__14132 = chunk__13845;
var G__14133 = count__13846;
var G__14134 = (i__13847 + (1));
seq__13842 = G__14131;
chunk__13845 = G__14132;
count__13846 = G__14133;
i__13847 = G__14134;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13842);
if(temp__5804__auto__){
var seq__13842__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13842__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13842__$1);
var G__14135 = cljs.core.chunk_rest(seq__13842__$1);
var G__14136 = c__5525__auto__;
var G__14137 = cljs.core.count(c__5525__auto__);
var G__14138 = (0);
seq__13842 = G__14135;
chunk__13845 = G__14136;
count__13846 = G__14137;
i__13847 = G__14138;
continue;
} else {
var ext = cljs.core.first(seq__13842__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14139 = cljs.core.next(seq__13842__$1);
var G__14140 = null;
var G__14141 = (0);
var G__14142 = (0);
seq__13842 = G__14139;
chunk__13845 = G__14140;
count__13846 = G__14141;
i__13847 = G__14142;
continue;
} else {
var G__14143 = cljs.core.next(seq__13842__$1);
var G__14144 = null;
var G__14145 = (0);
var G__14146 = (0);
seq__13842 = G__14143;
chunk__13845 = G__14144;
count__13846 = G__14145;
i__13847 = G__14146;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13828){
var G__13829 = cljs.core.first(seq13828);
var seq13828__$1 = cljs.core.next(seq13828);
var G__13830 = cljs.core.first(seq13828__$1);
var seq13828__$2 = cljs.core.next(seq13828__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13829,G__13830,seq13828__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13868,p__13869){
var map__13871 = p__13868;
var map__13871__$1 = cljs.core.__destructure_map(map__13871);
var runtime = map__13871__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13873 = p__13869;
var map__13873__$1 = cljs.core.__destructure_map(map__13873);
var msg = map__13873__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13876 = cljs.core.deref(state_ref);
var map__13876__$1 = cljs.core.__destructure_map(map__13876);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13881,msg){
var map__13882 = p__13881;
var map__13882__$1 = cljs.core.__destructure_map(map__13882);
var runtime = map__13882__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13888,key,p__13889){
var map__13890 = p__13888;
var map__13890__$1 = cljs.core.__destructure_map(map__13890);
var state = map__13890__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13890__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13891 = p__13889;
var map__13891__$1 = cljs.core.__destructure_map(map__13891);
var spec = map__13891__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13907,key,spec){
var map__13910 = p__13907;
var map__13910__$1 = cljs.core.__destructure_map(map__13910);
var runtime = map__13910__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13910__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14233 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14233 == null)){
} else {
var on_welcome_14238 = temp__5808__auto___14233;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14238.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14238.cljs$core$IFn$_invoke$arity$0() : on_welcome_14238.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13922_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13922_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13923_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13923_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13924_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13924_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13925_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13925_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13926_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13926_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13941,key){
var map__13946 = p__13941;
var map__13946__$1 = cljs.core.__destructure_map(map__13946);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13962,msg){
var map__13971 = p__13962;
var map__13971__$1 = cljs.core.__destructure_map(map__13971);
var runtime = map__13971__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14015,p__14016){
var map__14017 = p__14015;
var map__14017__$1 = cljs.core.__destructure_map(map__14017);
var runtime = map__14017__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14018 = p__14016;
var map__14018__$1 = cljs.core.__destructure_map(map__14018);
var msg = map__14018__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__14034 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14036 = null;
var count__14037 = (0);
var i__14038 = (0);
while(true){
if((i__14038 < count__14037)){
var map__14053 = chunk__14036.cljs$core$IIndexed$_nth$arity$2(null,i__14038);
var map__14053__$1 = cljs.core.__destructure_map(map__14053);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14053__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14291 = seq__14034;
var G__14292 = chunk__14036;
var G__14293 = count__14037;
var G__14294 = (i__14038 + (1));
seq__14034 = G__14291;
chunk__14036 = G__14292;
count__14037 = G__14293;
i__14038 = G__14294;
continue;
} else {
var G__14295 = seq__14034;
var G__14296 = chunk__14036;
var G__14297 = count__14037;
var G__14298 = (i__14038 + (1));
seq__14034 = G__14295;
chunk__14036 = G__14296;
count__14037 = G__14297;
i__14038 = G__14298;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14034);
if(temp__5804__auto__){
var seq__14034__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14034__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14034__$1);
var G__14299 = cljs.core.chunk_rest(seq__14034__$1);
var G__14300 = c__5525__auto__;
var G__14301 = cljs.core.count(c__5525__auto__);
var G__14302 = (0);
seq__14034 = G__14299;
chunk__14036 = G__14300;
count__14037 = G__14301;
i__14038 = G__14302;
continue;
} else {
var map__14061 = cljs.core.first(seq__14034__$1);
var map__14061__$1 = cljs.core.__destructure_map(map__14061);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14303 = cljs.core.next(seq__14034__$1);
var G__14304 = null;
var G__14305 = (0);
var G__14306 = (0);
seq__14034 = G__14303;
chunk__14036 = G__14304;
count__14037 = G__14305;
i__14038 = G__14306;
continue;
} else {
var G__14307 = cljs.core.next(seq__14034__$1);
var G__14308 = null;
var G__14309 = (0);
var G__14310 = (0);
seq__14034 = G__14307;
chunk__14036 = G__14308;
count__14037 = G__14309;
i__14038 = G__14310;
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
