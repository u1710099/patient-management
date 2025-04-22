goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22448 = arguments.length;
var i__5727__auto___22449 = (0);
while(true){
if((i__5727__auto___22449 < len__5726__auto___22448)){
args__5732__auto__.push((arguments[i__5727__auto___22449]));

var G__22450 = (i__5727__auto___22449 + (1));
i__5727__auto___22449 = G__22450;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22006){
var G__22007 = cljs.core.first(seq22006);
var seq22006__$1 = cljs.core.next(seq22006);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22007,seq22006__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22010 = cljs.core.seq(sources);
var chunk__22011 = null;
var count__22012 = (0);
var i__22013 = (0);
while(true){
if((i__22013 < count__22012)){
var map__22018 = chunk__22011.cljs$core$IIndexed$_nth$arity$2(null,i__22013);
var map__22018__$1 = cljs.core.__destructure_map(map__22018);
var src = map__22018__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22018__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22018__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22018__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22018__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22019){var e_22451 = e22019;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22451);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22451.message)].join('')));
}

var G__22452 = seq__22010;
var G__22453 = chunk__22011;
var G__22454 = count__22012;
var G__22455 = (i__22013 + (1));
seq__22010 = G__22452;
chunk__22011 = G__22453;
count__22012 = G__22454;
i__22013 = G__22455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22010);
if(temp__5804__auto__){
var seq__22010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22010__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22010__$1);
var G__22456 = cljs.core.chunk_rest(seq__22010__$1);
var G__22457 = c__5525__auto__;
var G__22458 = cljs.core.count(c__5525__auto__);
var G__22459 = (0);
seq__22010 = G__22456;
chunk__22011 = G__22457;
count__22012 = G__22458;
i__22013 = G__22459;
continue;
} else {
var map__22020 = cljs.core.first(seq__22010__$1);
var map__22020__$1 = cljs.core.__destructure_map(map__22020);
var src = map__22020__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22020__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22021){var e_22460 = e22021;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22460);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22460.message)].join('')));
}

var G__22461 = cljs.core.next(seq__22010__$1);
var G__22462 = null;
var G__22463 = (0);
var G__22464 = (0);
seq__22010 = G__22461;
chunk__22011 = G__22462;
count__22012 = G__22463;
i__22013 = G__22464;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22022 = cljs.core.seq(js_requires);
var chunk__22023 = null;
var count__22024 = (0);
var i__22025 = (0);
while(true){
if((i__22025 < count__22024)){
var js_ns = chunk__22023.cljs$core$IIndexed$_nth$arity$2(null,i__22025);
var require_str_22465 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22465);


var G__22466 = seq__22022;
var G__22467 = chunk__22023;
var G__22468 = count__22024;
var G__22469 = (i__22025 + (1));
seq__22022 = G__22466;
chunk__22023 = G__22467;
count__22024 = G__22468;
i__22025 = G__22469;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22022);
if(temp__5804__auto__){
var seq__22022__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22022__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22022__$1);
var G__22470 = cljs.core.chunk_rest(seq__22022__$1);
var G__22471 = c__5525__auto__;
var G__22472 = cljs.core.count(c__5525__auto__);
var G__22473 = (0);
seq__22022 = G__22470;
chunk__22023 = G__22471;
count__22024 = G__22472;
i__22025 = G__22473;
continue;
} else {
var js_ns = cljs.core.first(seq__22022__$1);
var require_str_22474 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22474);


var G__22475 = cljs.core.next(seq__22022__$1);
var G__22476 = null;
var G__22477 = (0);
var G__22478 = (0);
seq__22022 = G__22475;
chunk__22023 = G__22476;
count__22024 = G__22477;
i__22025 = G__22478;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22029){
var map__22030 = p__22029;
var map__22030__$1 = cljs.core.__destructure_map(map__22030);
var msg = map__22030__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22030__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22030__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22035(s__22036){
return (new cljs.core.LazySeq(null,(function (){
var s__22036__$1 = s__22036;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22036__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22041 = cljs.core.first(xs__6360__auto__);
var map__22041__$1 = cljs.core.__destructure_map(map__22041);
var src = map__22041__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22041__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22041__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22036__$1,map__22041,map__22041__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22030,map__22030__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22035_$_iter__22037(s__22038){
return (new cljs.core.LazySeq(null,((function (s__22036__$1,map__22041,map__22041__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22030,map__22030__$1,msg,info,reload_info){
return (function (){
var s__22038__$1 = s__22038;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22038__$1);
if(temp__5804__auto____$1){
var s__22038__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22038__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22038__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22040 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22039 = (0);
while(true){
if((i__22039 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22039);
cljs.core.chunk_append(b__22040,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22479 = (i__22039 + (1));
i__22039 = G__22479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22040),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22035_$_iter__22037(cljs.core.chunk_rest(s__22038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22040),null);
}
} else {
var warning = cljs.core.first(s__22038__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22035_$_iter__22037(cljs.core.rest(s__22038__$2)));
}
} else {
return null;
}
break;
}
});})(s__22036__$1,map__22041,map__22041__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22030,map__22030__$1,msg,info,reload_info))
,null,null));
});})(s__22036__$1,map__22041,map__22041__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22030,map__22030__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22035(cljs.core.rest(s__22036__$1)));
} else {
var G__22480 = cljs.core.rest(s__22036__$1);
s__22036__$1 = G__22480;
continue;
}
} else {
var G__22481 = cljs.core.rest(s__22036__$1);
s__22036__$1 = G__22481;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22046_22482 = cljs.core.seq(warnings);
var chunk__22047_22483 = null;
var count__22048_22484 = (0);
var i__22049_22485 = (0);
while(true){
if((i__22049_22485 < count__22048_22484)){
var map__22052_22486 = chunk__22047_22483.cljs$core$IIndexed$_nth$arity$2(null,i__22049_22485);
var map__22052_22487__$1 = cljs.core.__destructure_map(map__22052_22486);
var w_22488 = map__22052_22487__$1;
var msg_22489__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052_22487__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052_22487__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052_22487__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052_22487__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22492)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22490),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22491),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22489__$1)].join(''));


var G__22493 = seq__22046_22482;
var G__22494 = chunk__22047_22483;
var G__22495 = count__22048_22484;
var G__22496 = (i__22049_22485 + (1));
seq__22046_22482 = G__22493;
chunk__22047_22483 = G__22494;
count__22048_22484 = G__22495;
i__22049_22485 = G__22496;
continue;
} else {
var temp__5804__auto___22497 = cljs.core.seq(seq__22046_22482);
if(temp__5804__auto___22497){
var seq__22046_22498__$1 = temp__5804__auto___22497;
if(cljs.core.chunked_seq_QMARK_(seq__22046_22498__$1)){
var c__5525__auto___22499 = cljs.core.chunk_first(seq__22046_22498__$1);
var G__22500 = cljs.core.chunk_rest(seq__22046_22498__$1);
var G__22501 = c__5525__auto___22499;
var G__22502 = cljs.core.count(c__5525__auto___22499);
var G__22503 = (0);
seq__22046_22482 = G__22500;
chunk__22047_22483 = G__22501;
count__22048_22484 = G__22502;
i__22049_22485 = G__22503;
continue;
} else {
var map__22054_22504 = cljs.core.first(seq__22046_22498__$1);
var map__22054_22505__$1 = cljs.core.__destructure_map(map__22054_22504);
var w_22506 = map__22054_22505__$1;
var msg_22507__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054_22505__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054_22505__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054_22505__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054_22505__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22510)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22508),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22509),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22507__$1)].join(''));


var G__22511 = cljs.core.next(seq__22046_22498__$1);
var G__22512 = null;
var G__22513 = (0);
var G__22514 = (0);
seq__22046_22482 = G__22511;
chunk__22047_22483 = G__22512;
count__22048_22484 = G__22513;
i__22049_22485 = G__22514;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22028_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22028_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22058 = node_uri;
G__22058.setQuery(null);

G__22058.setPath(new$);

return G__22058;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22063){
var map__22064 = p__22063;
var map__22064__$1 = cljs.core.__destructure_map(map__22064);
var msg = map__22064__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22065 = cljs.core.seq(updates);
var chunk__22067 = null;
var count__22068 = (0);
var i__22069 = (0);
while(true){
if((i__22069 < count__22068)){
var path = chunk__22067.cljs$core$IIndexed$_nth$arity$2(null,i__22069);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22234_22515 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22238_22516 = null;
var count__22239_22517 = (0);
var i__22240_22518 = (0);
while(true){
if((i__22240_22518 < count__22239_22517)){
var node_22519 = chunk__22238_22516.cljs$core$IIndexed$_nth$arity$2(null,i__22240_22518);
if(cljs.core.not(node_22519.shadow$old)){
var path_match_22520 = shadow.cljs.devtools.client.browser.match_paths(node_22519.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22520)){
var new_link_22521 = (function (){var G__22320 = node_22519.cloneNode(true);
G__22320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22520),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22320;
})();
(node_22519.shadow$old = true);

(new_link_22521.onload = ((function (seq__22234_22515,chunk__22238_22516,count__22239_22517,i__22240_22518,seq__22065,chunk__22067,count__22068,i__22069,new_link_22521,path_match_22520,node_22519,path,map__22064,map__22064__$1,msg,updates,reload_info){
return (function (e){
var seq__22321_22522 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22323_22523 = null;
var count__22324_22524 = (0);
var i__22325_22525 = (0);
while(true){
if((i__22325_22525 < count__22324_22524)){
var map__22329_22526 = chunk__22323_22523.cljs$core$IIndexed$_nth$arity$2(null,i__22325_22525);
var map__22329_22527__$1 = cljs.core.__destructure_map(map__22329_22526);
var task_22528 = map__22329_22527__$1;
var fn_str_22529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22329_22527__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22329_22527__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22531 = goog.getObjectByName(fn_str_22529,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22530)].join(''));

(fn_obj_22531.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22531.cljs$core$IFn$_invoke$arity$2(path,new_link_22521) : fn_obj_22531.call(null,path,new_link_22521));


var G__22532 = seq__22321_22522;
var G__22533 = chunk__22323_22523;
var G__22534 = count__22324_22524;
var G__22535 = (i__22325_22525 + (1));
seq__22321_22522 = G__22532;
chunk__22323_22523 = G__22533;
count__22324_22524 = G__22534;
i__22325_22525 = G__22535;
continue;
} else {
var temp__5804__auto___22536 = cljs.core.seq(seq__22321_22522);
if(temp__5804__auto___22536){
var seq__22321_22537__$1 = temp__5804__auto___22536;
if(cljs.core.chunked_seq_QMARK_(seq__22321_22537__$1)){
var c__5525__auto___22538 = cljs.core.chunk_first(seq__22321_22537__$1);
var G__22539 = cljs.core.chunk_rest(seq__22321_22537__$1);
var G__22540 = c__5525__auto___22538;
var G__22541 = cljs.core.count(c__5525__auto___22538);
var G__22542 = (0);
seq__22321_22522 = G__22539;
chunk__22323_22523 = G__22540;
count__22324_22524 = G__22541;
i__22325_22525 = G__22542;
continue;
} else {
var map__22330_22543 = cljs.core.first(seq__22321_22537__$1);
var map__22330_22544__$1 = cljs.core.__destructure_map(map__22330_22543);
var task_22545 = map__22330_22544__$1;
var fn_str_22546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22330_22544__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22330_22544__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22548 = goog.getObjectByName(fn_str_22546,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22547)].join(''));

(fn_obj_22548.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22548.cljs$core$IFn$_invoke$arity$2(path,new_link_22521) : fn_obj_22548.call(null,path,new_link_22521));


var G__22549 = cljs.core.next(seq__22321_22537__$1);
var G__22550 = null;
var G__22551 = (0);
var G__22552 = (0);
seq__22321_22522 = G__22549;
chunk__22323_22523 = G__22550;
count__22324_22524 = G__22551;
i__22325_22525 = G__22552;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22519);
});})(seq__22234_22515,chunk__22238_22516,count__22239_22517,i__22240_22518,seq__22065,chunk__22067,count__22068,i__22069,new_link_22521,path_match_22520,node_22519,path,map__22064,map__22064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22520], 0));

goog.dom.insertSiblingAfter(new_link_22521,node_22519);


var G__22553 = seq__22234_22515;
var G__22554 = chunk__22238_22516;
var G__22555 = count__22239_22517;
var G__22556 = (i__22240_22518 + (1));
seq__22234_22515 = G__22553;
chunk__22238_22516 = G__22554;
count__22239_22517 = G__22555;
i__22240_22518 = G__22556;
continue;
} else {
var G__22558 = seq__22234_22515;
var G__22559 = chunk__22238_22516;
var G__22560 = count__22239_22517;
var G__22561 = (i__22240_22518 + (1));
seq__22234_22515 = G__22558;
chunk__22238_22516 = G__22559;
count__22239_22517 = G__22560;
i__22240_22518 = G__22561;
continue;
}
} else {
var G__22562 = seq__22234_22515;
var G__22563 = chunk__22238_22516;
var G__22564 = count__22239_22517;
var G__22565 = (i__22240_22518 + (1));
seq__22234_22515 = G__22562;
chunk__22238_22516 = G__22563;
count__22239_22517 = G__22564;
i__22240_22518 = G__22565;
continue;
}
} else {
var temp__5804__auto___22566 = cljs.core.seq(seq__22234_22515);
if(temp__5804__auto___22566){
var seq__22234_22567__$1 = temp__5804__auto___22566;
if(cljs.core.chunked_seq_QMARK_(seq__22234_22567__$1)){
var c__5525__auto___22568 = cljs.core.chunk_first(seq__22234_22567__$1);
var G__22569 = cljs.core.chunk_rest(seq__22234_22567__$1);
var G__22570 = c__5525__auto___22568;
var G__22571 = cljs.core.count(c__5525__auto___22568);
var G__22572 = (0);
seq__22234_22515 = G__22569;
chunk__22238_22516 = G__22570;
count__22239_22517 = G__22571;
i__22240_22518 = G__22572;
continue;
} else {
var node_22573 = cljs.core.first(seq__22234_22567__$1);
if(cljs.core.not(node_22573.shadow$old)){
var path_match_22574 = shadow.cljs.devtools.client.browser.match_paths(node_22573.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22574)){
var new_link_22575 = (function (){var G__22331 = node_22573.cloneNode(true);
G__22331.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22574),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22331;
})();
(node_22573.shadow$old = true);

(new_link_22575.onload = ((function (seq__22234_22515,chunk__22238_22516,count__22239_22517,i__22240_22518,seq__22065,chunk__22067,count__22068,i__22069,new_link_22575,path_match_22574,node_22573,seq__22234_22567__$1,temp__5804__auto___22566,path,map__22064,map__22064__$1,msg,updates,reload_info){
return (function (e){
var seq__22332_22576 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22334_22577 = null;
var count__22335_22578 = (0);
var i__22336_22579 = (0);
while(true){
if((i__22336_22579 < count__22335_22578)){
var map__22340_22580 = chunk__22334_22577.cljs$core$IIndexed$_nth$arity$2(null,i__22336_22579);
var map__22340_22581__$1 = cljs.core.__destructure_map(map__22340_22580);
var task_22582 = map__22340_22581__$1;
var fn_str_22583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340_22581__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340_22581__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22585 = goog.getObjectByName(fn_str_22583,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22584)].join(''));

(fn_obj_22585.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22585.cljs$core$IFn$_invoke$arity$2(path,new_link_22575) : fn_obj_22585.call(null,path,new_link_22575));


var G__22586 = seq__22332_22576;
var G__22587 = chunk__22334_22577;
var G__22588 = count__22335_22578;
var G__22589 = (i__22336_22579 + (1));
seq__22332_22576 = G__22586;
chunk__22334_22577 = G__22587;
count__22335_22578 = G__22588;
i__22336_22579 = G__22589;
continue;
} else {
var temp__5804__auto___22590__$1 = cljs.core.seq(seq__22332_22576);
if(temp__5804__auto___22590__$1){
var seq__22332_22591__$1 = temp__5804__auto___22590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22332_22591__$1)){
var c__5525__auto___22592 = cljs.core.chunk_first(seq__22332_22591__$1);
var G__22593 = cljs.core.chunk_rest(seq__22332_22591__$1);
var G__22594 = c__5525__auto___22592;
var G__22595 = cljs.core.count(c__5525__auto___22592);
var G__22596 = (0);
seq__22332_22576 = G__22593;
chunk__22334_22577 = G__22594;
count__22335_22578 = G__22595;
i__22336_22579 = G__22596;
continue;
} else {
var map__22342_22597 = cljs.core.first(seq__22332_22591__$1);
var map__22342_22598__$1 = cljs.core.__destructure_map(map__22342_22597);
var task_22599 = map__22342_22598__$1;
var fn_str_22600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342_22598__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342_22598__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22602 = goog.getObjectByName(fn_str_22600,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22601)].join(''));

(fn_obj_22602.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22602.cljs$core$IFn$_invoke$arity$2(path,new_link_22575) : fn_obj_22602.call(null,path,new_link_22575));


var G__22603 = cljs.core.next(seq__22332_22591__$1);
var G__22604 = null;
var G__22605 = (0);
var G__22606 = (0);
seq__22332_22576 = G__22603;
chunk__22334_22577 = G__22604;
count__22335_22578 = G__22605;
i__22336_22579 = G__22606;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22573);
});})(seq__22234_22515,chunk__22238_22516,count__22239_22517,i__22240_22518,seq__22065,chunk__22067,count__22068,i__22069,new_link_22575,path_match_22574,node_22573,seq__22234_22567__$1,temp__5804__auto___22566,path,map__22064,map__22064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22574], 0));

goog.dom.insertSiblingAfter(new_link_22575,node_22573);


var G__22607 = cljs.core.next(seq__22234_22567__$1);
var G__22608 = null;
var G__22609 = (0);
var G__22610 = (0);
seq__22234_22515 = G__22607;
chunk__22238_22516 = G__22608;
count__22239_22517 = G__22609;
i__22240_22518 = G__22610;
continue;
} else {
var G__22611 = cljs.core.next(seq__22234_22567__$1);
var G__22612 = null;
var G__22613 = (0);
var G__22614 = (0);
seq__22234_22515 = G__22611;
chunk__22238_22516 = G__22612;
count__22239_22517 = G__22613;
i__22240_22518 = G__22614;
continue;
}
} else {
var G__22615 = cljs.core.next(seq__22234_22567__$1);
var G__22616 = null;
var G__22617 = (0);
var G__22618 = (0);
seq__22234_22515 = G__22615;
chunk__22238_22516 = G__22616;
count__22239_22517 = G__22617;
i__22240_22518 = G__22618;
continue;
}
}
} else {
}
}
break;
}


var G__22619 = seq__22065;
var G__22620 = chunk__22067;
var G__22621 = count__22068;
var G__22622 = (i__22069 + (1));
seq__22065 = G__22619;
chunk__22067 = G__22620;
count__22068 = G__22621;
i__22069 = G__22622;
continue;
} else {
var G__22623 = seq__22065;
var G__22624 = chunk__22067;
var G__22625 = count__22068;
var G__22626 = (i__22069 + (1));
seq__22065 = G__22623;
chunk__22067 = G__22624;
count__22068 = G__22625;
i__22069 = G__22626;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22065);
if(temp__5804__auto__){
var seq__22065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22065__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22065__$1);
var G__22627 = cljs.core.chunk_rest(seq__22065__$1);
var G__22628 = c__5525__auto__;
var G__22629 = cljs.core.count(c__5525__auto__);
var G__22630 = (0);
seq__22065 = G__22627;
chunk__22067 = G__22628;
count__22068 = G__22629;
i__22069 = G__22630;
continue;
} else {
var path = cljs.core.first(seq__22065__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22343_22631 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22347_22632 = null;
var count__22348_22633 = (0);
var i__22349_22634 = (0);
while(true){
if((i__22349_22634 < count__22348_22633)){
var node_22635 = chunk__22347_22632.cljs$core$IIndexed$_nth$arity$2(null,i__22349_22634);
if(cljs.core.not(node_22635.shadow$old)){
var path_match_22636 = shadow.cljs.devtools.client.browser.match_paths(node_22635.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22636)){
var new_link_22637 = (function (){var G__22382 = node_22635.cloneNode(true);
G__22382.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22636),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22382;
})();
(node_22635.shadow$old = true);

(new_link_22637.onload = ((function (seq__22343_22631,chunk__22347_22632,count__22348_22633,i__22349_22634,seq__22065,chunk__22067,count__22068,i__22069,new_link_22637,path_match_22636,node_22635,path,seq__22065__$1,temp__5804__auto__,map__22064,map__22064__$1,msg,updates,reload_info){
return (function (e){
var seq__22383_22638 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22385_22639 = null;
var count__22386_22640 = (0);
var i__22387_22641 = (0);
while(true){
if((i__22387_22641 < count__22386_22640)){
var map__22391_22642 = chunk__22385_22639.cljs$core$IIndexed$_nth$arity$2(null,i__22387_22641);
var map__22391_22643__$1 = cljs.core.__destructure_map(map__22391_22642);
var task_22644 = map__22391_22643__$1;
var fn_str_22645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22391_22643__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22391_22643__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22647 = goog.getObjectByName(fn_str_22645,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22646)].join(''));

(fn_obj_22647.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22647.cljs$core$IFn$_invoke$arity$2(path,new_link_22637) : fn_obj_22647.call(null,path,new_link_22637));


var G__22648 = seq__22383_22638;
var G__22649 = chunk__22385_22639;
var G__22650 = count__22386_22640;
var G__22651 = (i__22387_22641 + (1));
seq__22383_22638 = G__22648;
chunk__22385_22639 = G__22649;
count__22386_22640 = G__22650;
i__22387_22641 = G__22651;
continue;
} else {
var temp__5804__auto___22652__$1 = cljs.core.seq(seq__22383_22638);
if(temp__5804__auto___22652__$1){
var seq__22383_22653__$1 = temp__5804__auto___22652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22383_22653__$1)){
var c__5525__auto___22654 = cljs.core.chunk_first(seq__22383_22653__$1);
var G__22655 = cljs.core.chunk_rest(seq__22383_22653__$1);
var G__22656 = c__5525__auto___22654;
var G__22657 = cljs.core.count(c__5525__auto___22654);
var G__22658 = (0);
seq__22383_22638 = G__22655;
chunk__22385_22639 = G__22656;
count__22386_22640 = G__22657;
i__22387_22641 = G__22658;
continue;
} else {
var map__22392_22659 = cljs.core.first(seq__22383_22653__$1);
var map__22392_22660__$1 = cljs.core.__destructure_map(map__22392_22659);
var task_22661 = map__22392_22660__$1;
var fn_str_22662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392_22660__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392_22660__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22665 = goog.getObjectByName(fn_str_22662,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22663)].join(''));

(fn_obj_22665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22665.cljs$core$IFn$_invoke$arity$2(path,new_link_22637) : fn_obj_22665.call(null,path,new_link_22637));


var G__22666 = cljs.core.next(seq__22383_22653__$1);
var G__22667 = null;
var G__22668 = (0);
var G__22669 = (0);
seq__22383_22638 = G__22666;
chunk__22385_22639 = G__22667;
count__22386_22640 = G__22668;
i__22387_22641 = G__22669;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22635);
});})(seq__22343_22631,chunk__22347_22632,count__22348_22633,i__22349_22634,seq__22065,chunk__22067,count__22068,i__22069,new_link_22637,path_match_22636,node_22635,path,seq__22065__$1,temp__5804__auto__,map__22064,map__22064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22636], 0));

goog.dom.insertSiblingAfter(new_link_22637,node_22635);


var G__22670 = seq__22343_22631;
var G__22671 = chunk__22347_22632;
var G__22672 = count__22348_22633;
var G__22673 = (i__22349_22634 + (1));
seq__22343_22631 = G__22670;
chunk__22347_22632 = G__22671;
count__22348_22633 = G__22672;
i__22349_22634 = G__22673;
continue;
} else {
var G__22674 = seq__22343_22631;
var G__22675 = chunk__22347_22632;
var G__22676 = count__22348_22633;
var G__22677 = (i__22349_22634 + (1));
seq__22343_22631 = G__22674;
chunk__22347_22632 = G__22675;
count__22348_22633 = G__22676;
i__22349_22634 = G__22677;
continue;
}
} else {
var G__22678 = seq__22343_22631;
var G__22679 = chunk__22347_22632;
var G__22680 = count__22348_22633;
var G__22681 = (i__22349_22634 + (1));
seq__22343_22631 = G__22678;
chunk__22347_22632 = G__22679;
count__22348_22633 = G__22680;
i__22349_22634 = G__22681;
continue;
}
} else {
var temp__5804__auto___22682__$1 = cljs.core.seq(seq__22343_22631);
if(temp__5804__auto___22682__$1){
var seq__22343_22683__$1 = temp__5804__auto___22682__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22343_22683__$1)){
var c__5525__auto___22684 = cljs.core.chunk_first(seq__22343_22683__$1);
var G__22685 = cljs.core.chunk_rest(seq__22343_22683__$1);
var G__22686 = c__5525__auto___22684;
var G__22687 = cljs.core.count(c__5525__auto___22684);
var G__22688 = (0);
seq__22343_22631 = G__22685;
chunk__22347_22632 = G__22686;
count__22348_22633 = G__22687;
i__22349_22634 = G__22688;
continue;
} else {
var node_22689 = cljs.core.first(seq__22343_22683__$1);
if(cljs.core.not(node_22689.shadow$old)){
var path_match_22690 = shadow.cljs.devtools.client.browser.match_paths(node_22689.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22690)){
var new_link_22691 = (function (){var G__22399 = node_22689.cloneNode(true);
G__22399.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22690),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22399;
})();
(node_22689.shadow$old = true);

(new_link_22691.onload = ((function (seq__22343_22631,chunk__22347_22632,count__22348_22633,i__22349_22634,seq__22065,chunk__22067,count__22068,i__22069,new_link_22691,path_match_22690,node_22689,seq__22343_22683__$1,temp__5804__auto___22682__$1,path,seq__22065__$1,temp__5804__auto__,map__22064,map__22064__$1,msg,updates,reload_info){
return (function (e){
var seq__22400_22692 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22402_22693 = null;
var count__22403_22694 = (0);
var i__22404_22695 = (0);
while(true){
if((i__22404_22695 < count__22403_22694)){
var map__22411_22696 = chunk__22402_22693.cljs$core$IIndexed$_nth$arity$2(null,i__22404_22695);
var map__22411_22697__$1 = cljs.core.__destructure_map(map__22411_22696);
var task_22698 = map__22411_22697__$1;
var fn_str_22699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22411_22697__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22411_22697__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22701 = goog.getObjectByName(fn_str_22699,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22700)].join(''));

(fn_obj_22701.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22701.cljs$core$IFn$_invoke$arity$2(path,new_link_22691) : fn_obj_22701.call(null,path,new_link_22691));


var G__22702 = seq__22400_22692;
var G__22703 = chunk__22402_22693;
var G__22704 = count__22403_22694;
var G__22705 = (i__22404_22695 + (1));
seq__22400_22692 = G__22702;
chunk__22402_22693 = G__22703;
count__22403_22694 = G__22704;
i__22404_22695 = G__22705;
continue;
} else {
var temp__5804__auto___22706__$2 = cljs.core.seq(seq__22400_22692);
if(temp__5804__auto___22706__$2){
var seq__22400_22707__$1 = temp__5804__auto___22706__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22400_22707__$1)){
var c__5525__auto___22708 = cljs.core.chunk_first(seq__22400_22707__$1);
var G__22709 = cljs.core.chunk_rest(seq__22400_22707__$1);
var G__22710 = c__5525__auto___22708;
var G__22711 = cljs.core.count(c__5525__auto___22708);
var G__22712 = (0);
seq__22400_22692 = G__22709;
chunk__22402_22693 = G__22710;
count__22403_22694 = G__22711;
i__22404_22695 = G__22712;
continue;
} else {
var map__22415_22713 = cljs.core.first(seq__22400_22707__$1);
var map__22415_22714__$1 = cljs.core.__destructure_map(map__22415_22713);
var task_22715 = map__22415_22714__$1;
var fn_str_22716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22415_22714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22415_22714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22718 = goog.getObjectByName(fn_str_22716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22717)].join(''));

(fn_obj_22718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22718.cljs$core$IFn$_invoke$arity$2(path,new_link_22691) : fn_obj_22718.call(null,path,new_link_22691));


var G__22719 = cljs.core.next(seq__22400_22707__$1);
var G__22720 = null;
var G__22721 = (0);
var G__22722 = (0);
seq__22400_22692 = G__22719;
chunk__22402_22693 = G__22720;
count__22403_22694 = G__22721;
i__22404_22695 = G__22722;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22689);
});})(seq__22343_22631,chunk__22347_22632,count__22348_22633,i__22349_22634,seq__22065,chunk__22067,count__22068,i__22069,new_link_22691,path_match_22690,node_22689,seq__22343_22683__$1,temp__5804__auto___22682__$1,path,seq__22065__$1,temp__5804__auto__,map__22064,map__22064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22690], 0));

goog.dom.insertSiblingAfter(new_link_22691,node_22689);


var G__22723 = cljs.core.next(seq__22343_22683__$1);
var G__22724 = null;
var G__22725 = (0);
var G__22726 = (0);
seq__22343_22631 = G__22723;
chunk__22347_22632 = G__22724;
count__22348_22633 = G__22725;
i__22349_22634 = G__22726;
continue;
} else {
var G__22727 = cljs.core.next(seq__22343_22683__$1);
var G__22728 = null;
var G__22729 = (0);
var G__22730 = (0);
seq__22343_22631 = G__22727;
chunk__22347_22632 = G__22728;
count__22348_22633 = G__22729;
i__22349_22634 = G__22730;
continue;
}
} else {
var G__22731 = cljs.core.next(seq__22343_22683__$1);
var G__22732 = null;
var G__22733 = (0);
var G__22734 = (0);
seq__22343_22631 = G__22731;
chunk__22347_22632 = G__22732;
count__22348_22633 = G__22733;
i__22349_22634 = G__22734;
continue;
}
}
} else {
}
}
break;
}


var G__22735 = cljs.core.next(seq__22065__$1);
var G__22736 = null;
var G__22737 = (0);
var G__22738 = (0);
seq__22065 = G__22735;
chunk__22067 = G__22736;
count__22068 = G__22737;
i__22069 = G__22738;
continue;
} else {
var G__22739 = cljs.core.next(seq__22065__$1);
var G__22740 = null;
var G__22741 = (0);
var G__22742 = (0);
seq__22065 = G__22739;
chunk__22067 = G__22740;
count__22068 = G__22741;
i__22069 = G__22742;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__22420 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22420) : success.call(null,G__22420));
}catch (e22419){var e = e22419;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22421,success,fail){
var map__22422 = p__22421;
var map__22422__$1 = cljs.core.__destructure_map(map__22422);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22429 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22429) : success.call(null,G__22429));
}catch (e22428){var e = e22428;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22430,done,error){
var map__22431 = p__22430;
var map__22431__$1 = cljs.core.__destructure_map(map__22431);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22433,done,error){
var map__22434 = p__22433;
var map__22434__$1 = cljs.core.__destructure_map(map__22434);
var msg = map__22434__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22435){
var map__22436 = p__22435;
var map__22436__$1 = cljs.core.__destructure_map(map__22436);
var src = map__22436__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22436__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22437 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22437) : done.call(null,G__22437));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22438){
var map__22439 = p__22438;
var map__22439__$1 = cljs.core.__destructure_map(map__22439);
var msg__$1 = map__22439__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22439__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22440){var ex = e22440;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22441){
var map__22442 = p__22441;
var map__22442__$1 = cljs.core.__destructure_map(map__22442);
var env = map__22442__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22444){
var map__22445 = p__22444;
var map__22445__$1 = cljs.core.__destructure_map(map__22445);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22445__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22445__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22446){
var map__22447 = p__22446;
var map__22447__$1 = cljs.core.__destructure_map(map__22447);
var svc = map__22447__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22447__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
