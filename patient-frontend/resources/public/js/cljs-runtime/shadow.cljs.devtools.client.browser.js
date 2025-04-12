goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22249 = arguments.length;
var i__5727__auto___22250 = (0);
while(true){
if((i__5727__auto___22250 < len__5726__auto___22249)){
args__5732__auto__.push((arguments[i__5727__auto___22250]));

var G__22251 = (i__5727__auto___22250 + (1));
i__5727__auto___22250 = G__22251;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21735){
var G__21742 = cljs.core.first(seq21735);
var seq21735__$1 = cljs.core.next(seq21735);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21742,seq21735__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21767 = cljs.core.seq(sources);
var chunk__21768 = null;
var count__21769 = (0);
var i__21770 = (0);
while(true){
if((i__21770 < count__21769)){
var map__21786 = chunk__21768.cljs$core$IIndexed$_nth$arity$2(null,i__21770);
var map__21786__$1 = cljs.core.__destructure_map(map__21786);
var src = map__21786__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21789){var e_22252 = e21789;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22252);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22252.message)].join('')));
}

var G__22253 = seq__21767;
var G__22254 = chunk__21768;
var G__22255 = count__21769;
var G__22256 = (i__21770 + (1));
seq__21767 = G__22253;
chunk__21768 = G__22254;
count__21769 = G__22255;
i__21770 = G__22256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21767);
if(temp__5804__auto__){
var seq__21767__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21767__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21767__$1);
var G__22257 = cljs.core.chunk_rest(seq__21767__$1);
var G__22258 = c__5525__auto__;
var G__22259 = cljs.core.count(c__5525__auto__);
var G__22260 = (0);
seq__21767 = G__22257;
chunk__21768 = G__22258;
count__21769 = G__22259;
i__21770 = G__22260;
continue;
} else {
var map__21791 = cljs.core.first(seq__21767__$1);
var map__21791__$1 = cljs.core.__destructure_map(map__21791);
var src = map__21791__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21791__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21791__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21791__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21791__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21800){var e_22262 = e21800;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22262);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22262.message)].join('')));
}

var G__22263 = cljs.core.next(seq__21767__$1);
var G__22264 = null;
var G__22265 = (0);
var G__22266 = (0);
seq__21767 = G__22263;
chunk__21768 = G__22264;
count__21769 = G__22265;
i__21770 = G__22266;
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
var seq__21802 = cljs.core.seq(js_requires);
var chunk__21803 = null;
var count__21804 = (0);
var i__21805 = (0);
while(true){
if((i__21805 < count__21804)){
var js_ns = chunk__21803.cljs$core$IIndexed$_nth$arity$2(null,i__21805);
var require_str_22268 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22268);


var G__22269 = seq__21802;
var G__22270 = chunk__21803;
var G__22271 = count__21804;
var G__22272 = (i__21805 + (1));
seq__21802 = G__22269;
chunk__21803 = G__22270;
count__21804 = G__22271;
i__21805 = G__22272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21802);
if(temp__5804__auto__){
var seq__21802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21802__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21802__$1);
var G__22273 = cljs.core.chunk_rest(seq__21802__$1);
var G__22274 = c__5525__auto__;
var G__22275 = cljs.core.count(c__5525__auto__);
var G__22276 = (0);
seq__21802 = G__22273;
chunk__21803 = G__22274;
count__21804 = G__22275;
i__21805 = G__22276;
continue;
} else {
var js_ns = cljs.core.first(seq__21802__$1);
var require_str_22277 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22277);


var G__22278 = cljs.core.next(seq__21802__$1);
var G__22279 = null;
var G__22280 = (0);
var G__22281 = (0);
seq__21802 = G__22278;
chunk__21803 = G__22279;
count__21804 = G__22280;
i__21805 = G__22281;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21808){
var map__21809 = p__21808;
var map__21809__$1 = cljs.core.__destructure_map(map__21809);
var msg = map__21809__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21810(s__21811){
return (new cljs.core.LazySeq(null,(function (){
var s__21811__$1 = s__21811;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21811__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21816 = cljs.core.first(xs__6360__auto__);
var map__21816__$1 = cljs.core.__destructure_map(map__21816);
var src = map__21816__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21816__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21811__$1,map__21816,map__21816__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21809,map__21809__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21810_$_iter__21812(s__21813){
return (new cljs.core.LazySeq(null,((function (s__21811__$1,map__21816,map__21816__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21809,map__21809__$1,msg,info,reload_info){
return (function (){
var s__21813__$1 = s__21813;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21813__$1);
if(temp__5804__auto____$1){
var s__21813__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21813__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21813__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21815 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21814 = (0);
while(true){
if((i__21814 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21814);
cljs.core.chunk_append(b__21815,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22284 = (i__21814 + (1));
i__21814 = G__22284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21815),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21810_$_iter__21812(cljs.core.chunk_rest(s__21813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21815),null);
}
} else {
var warning = cljs.core.first(s__21813__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21810_$_iter__21812(cljs.core.rest(s__21813__$2)));
}
} else {
return null;
}
break;
}
});})(s__21811__$1,map__21816,map__21816__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21809,map__21809__$1,msg,info,reload_info))
,null,null));
});})(s__21811__$1,map__21816,map__21816__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21809,map__21809__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21810(cljs.core.rest(s__21811__$1)));
} else {
var G__22285 = cljs.core.rest(s__21811__$1);
s__21811__$1 = G__22285;
continue;
}
} else {
var G__22286 = cljs.core.rest(s__21811__$1);
s__21811__$1 = G__22286;
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
var seq__21817_22287 = cljs.core.seq(warnings);
var chunk__21818_22288 = null;
var count__21819_22289 = (0);
var i__21820_22290 = (0);
while(true){
if((i__21820_22290 < count__21819_22289)){
var map__21824_22291 = chunk__21818_22288.cljs$core$IIndexed$_nth$arity$2(null,i__21820_22290);
var map__21824_22292__$1 = cljs.core.__destructure_map(map__21824_22291);
var w_22293 = map__21824_22292__$1;
var msg_22294__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824_22292__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824_22292__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824_22292__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824_22292__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22297)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22295),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22296),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22294__$1)].join(''));


var G__22300 = seq__21817_22287;
var G__22301 = chunk__21818_22288;
var G__22302 = count__21819_22289;
var G__22303 = (i__21820_22290 + (1));
seq__21817_22287 = G__22300;
chunk__21818_22288 = G__22301;
count__21819_22289 = G__22302;
i__21820_22290 = G__22303;
continue;
} else {
var temp__5804__auto___22304 = cljs.core.seq(seq__21817_22287);
if(temp__5804__auto___22304){
var seq__21817_22305__$1 = temp__5804__auto___22304;
if(cljs.core.chunked_seq_QMARK_(seq__21817_22305__$1)){
var c__5525__auto___22306 = cljs.core.chunk_first(seq__21817_22305__$1);
var G__22307 = cljs.core.chunk_rest(seq__21817_22305__$1);
var G__22308 = c__5525__auto___22306;
var G__22309 = cljs.core.count(c__5525__auto___22306);
var G__22310 = (0);
seq__21817_22287 = G__22307;
chunk__21818_22288 = G__22308;
count__21819_22289 = G__22309;
i__21820_22290 = G__22310;
continue;
} else {
var map__21826_22311 = cljs.core.first(seq__21817_22305__$1);
var map__21826_22312__$1 = cljs.core.__destructure_map(map__21826_22311);
var w_22313 = map__21826_22312__$1;
var msg_22314__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826_22312__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826_22312__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826_22312__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826_22312__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22317)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22315),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22316),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22314__$1)].join(''));


var G__22318 = cljs.core.next(seq__21817_22305__$1);
var G__22319 = null;
var G__22320 = (0);
var G__22321 = (0);
seq__21817_22287 = G__22318;
chunk__21818_22288 = G__22319;
count__21819_22289 = G__22320;
i__21820_22290 = G__22321;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21807_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21807_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21828 = node_uri;
G__21828.setQuery(null);

G__21828.setPath(new$);

return G__21828;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21829){
var map__21830 = p__21829;
var map__21830__$1 = cljs.core.__destructure_map(map__21830);
var msg = map__21830__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21831 = cljs.core.seq(updates);
var chunk__21833 = null;
var count__21834 = (0);
var i__21835 = (0);
while(true){
if((i__21835 < count__21834)){
var path = chunk__21833.cljs$core$IIndexed$_nth$arity$2(null,i__21835);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22017_22322 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22021_22323 = null;
var count__22022_22324 = (0);
var i__22023_22325 = (0);
while(true){
if((i__22023_22325 < count__22022_22324)){
var node_22326 = chunk__22021_22323.cljs$core$IIndexed$_nth$arity$2(null,i__22023_22325);
if(cljs.core.not(node_22326.shadow$old)){
var path_match_22327 = shadow.cljs.devtools.client.browser.match_paths(node_22326.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22327)){
var new_link_22328 = (function (){var G__22064 = node_22326.cloneNode(true);
G__22064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22327),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22064;
})();
(node_22326.shadow$old = true);

(new_link_22328.onload = ((function (seq__22017_22322,chunk__22021_22323,count__22022_22324,i__22023_22325,seq__21831,chunk__21833,count__21834,i__21835,new_link_22328,path_match_22327,node_22326,path,map__21830,map__21830__$1,msg,updates,reload_info){
return (function (e){
var seq__22066_22329 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22068_22330 = null;
var count__22069_22331 = (0);
var i__22070_22332 = (0);
while(true){
if((i__22070_22332 < count__22069_22331)){
var map__22078_22333 = chunk__22068_22330.cljs$core$IIndexed$_nth$arity$2(null,i__22070_22332);
var map__22078_22334__$1 = cljs.core.__destructure_map(map__22078_22333);
var task_22335 = map__22078_22334__$1;
var fn_str_22336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22078_22334__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22078_22334__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22338 = goog.getObjectByName(fn_str_22336,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22337)].join(''));

(fn_obj_22338.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22338.cljs$core$IFn$_invoke$arity$2(path,new_link_22328) : fn_obj_22338.call(null,path,new_link_22328));


var G__22339 = seq__22066_22329;
var G__22340 = chunk__22068_22330;
var G__22341 = count__22069_22331;
var G__22342 = (i__22070_22332 + (1));
seq__22066_22329 = G__22339;
chunk__22068_22330 = G__22340;
count__22069_22331 = G__22341;
i__22070_22332 = G__22342;
continue;
} else {
var temp__5804__auto___22343 = cljs.core.seq(seq__22066_22329);
if(temp__5804__auto___22343){
var seq__22066_22344__$1 = temp__5804__auto___22343;
if(cljs.core.chunked_seq_QMARK_(seq__22066_22344__$1)){
var c__5525__auto___22345 = cljs.core.chunk_first(seq__22066_22344__$1);
var G__22346 = cljs.core.chunk_rest(seq__22066_22344__$1);
var G__22347 = c__5525__auto___22345;
var G__22348 = cljs.core.count(c__5525__auto___22345);
var G__22349 = (0);
seq__22066_22329 = G__22346;
chunk__22068_22330 = G__22347;
count__22069_22331 = G__22348;
i__22070_22332 = G__22349;
continue;
} else {
var map__22079_22350 = cljs.core.first(seq__22066_22344__$1);
var map__22079_22351__$1 = cljs.core.__destructure_map(map__22079_22350);
var task_22352 = map__22079_22351__$1;
var fn_str_22353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22079_22351__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22079_22351__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22355 = goog.getObjectByName(fn_str_22353,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22354)].join(''));

(fn_obj_22355.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22355.cljs$core$IFn$_invoke$arity$2(path,new_link_22328) : fn_obj_22355.call(null,path,new_link_22328));


var G__22356 = cljs.core.next(seq__22066_22344__$1);
var G__22357 = null;
var G__22358 = (0);
var G__22359 = (0);
seq__22066_22329 = G__22356;
chunk__22068_22330 = G__22357;
count__22069_22331 = G__22358;
i__22070_22332 = G__22359;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22326);
});})(seq__22017_22322,chunk__22021_22323,count__22022_22324,i__22023_22325,seq__21831,chunk__21833,count__21834,i__21835,new_link_22328,path_match_22327,node_22326,path,map__21830,map__21830__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22327], 0));

goog.dom.insertSiblingAfter(new_link_22328,node_22326);


var G__22360 = seq__22017_22322;
var G__22361 = chunk__22021_22323;
var G__22362 = count__22022_22324;
var G__22363 = (i__22023_22325 + (1));
seq__22017_22322 = G__22360;
chunk__22021_22323 = G__22361;
count__22022_22324 = G__22362;
i__22023_22325 = G__22363;
continue;
} else {
var G__22364 = seq__22017_22322;
var G__22365 = chunk__22021_22323;
var G__22366 = count__22022_22324;
var G__22367 = (i__22023_22325 + (1));
seq__22017_22322 = G__22364;
chunk__22021_22323 = G__22365;
count__22022_22324 = G__22366;
i__22023_22325 = G__22367;
continue;
}
} else {
var G__22368 = seq__22017_22322;
var G__22369 = chunk__22021_22323;
var G__22370 = count__22022_22324;
var G__22371 = (i__22023_22325 + (1));
seq__22017_22322 = G__22368;
chunk__22021_22323 = G__22369;
count__22022_22324 = G__22370;
i__22023_22325 = G__22371;
continue;
}
} else {
var temp__5804__auto___22372 = cljs.core.seq(seq__22017_22322);
if(temp__5804__auto___22372){
var seq__22017_22373__$1 = temp__5804__auto___22372;
if(cljs.core.chunked_seq_QMARK_(seq__22017_22373__$1)){
var c__5525__auto___22374 = cljs.core.chunk_first(seq__22017_22373__$1);
var G__22375 = cljs.core.chunk_rest(seq__22017_22373__$1);
var G__22376 = c__5525__auto___22374;
var G__22377 = cljs.core.count(c__5525__auto___22374);
var G__22378 = (0);
seq__22017_22322 = G__22375;
chunk__22021_22323 = G__22376;
count__22022_22324 = G__22377;
i__22023_22325 = G__22378;
continue;
} else {
var node_22379 = cljs.core.first(seq__22017_22373__$1);
if(cljs.core.not(node_22379.shadow$old)){
var path_match_22380 = shadow.cljs.devtools.client.browser.match_paths(node_22379.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22380)){
var new_link_22381 = (function (){var G__22082 = node_22379.cloneNode(true);
G__22082.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22380),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22082;
})();
(node_22379.shadow$old = true);

(new_link_22381.onload = ((function (seq__22017_22322,chunk__22021_22323,count__22022_22324,i__22023_22325,seq__21831,chunk__21833,count__21834,i__21835,new_link_22381,path_match_22380,node_22379,seq__22017_22373__$1,temp__5804__auto___22372,path,map__21830,map__21830__$1,msg,updates,reload_info){
return (function (e){
var seq__22084_22382 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22086_22383 = null;
var count__22087_22384 = (0);
var i__22088_22385 = (0);
while(true){
if((i__22088_22385 < count__22087_22384)){
var map__22092_22386 = chunk__22086_22383.cljs$core$IIndexed$_nth$arity$2(null,i__22088_22385);
var map__22092_22387__$1 = cljs.core.__destructure_map(map__22092_22386);
var task_22388 = map__22092_22387__$1;
var fn_str_22389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22092_22387__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22092_22387__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22391 = goog.getObjectByName(fn_str_22389,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22390)].join(''));

(fn_obj_22391.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22391.cljs$core$IFn$_invoke$arity$2(path,new_link_22381) : fn_obj_22391.call(null,path,new_link_22381));


var G__22392 = seq__22084_22382;
var G__22393 = chunk__22086_22383;
var G__22394 = count__22087_22384;
var G__22395 = (i__22088_22385 + (1));
seq__22084_22382 = G__22392;
chunk__22086_22383 = G__22393;
count__22087_22384 = G__22394;
i__22088_22385 = G__22395;
continue;
} else {
var temp__5804__auto___22396__$1 = cljs.core.seq(seq__22084_22382);
if(temp__5804__auto___22396__$1){
var seq__22084_22397__$1 = temp__5804__auto___22396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22084_22397__$1)){
var c__5525__auto___22398 = cljs.core.chunk_first(seq__22084_22397__$1);
var G__22399 = cljs.core.chunk_rest(seq__22084_22397__$1);
var G__22400 = c__5525__auto___22398;
var G__22401 = cljs.core.count(c__5525__auto___22398);
var G__22402 = (0);
seq__22084_22382 = G__22399;
chunk__22086_22383 = G__22400;
count__22087_22384 = G__22401;
i__22088_22385 = G__22402;
continue;
} else {
var map__22094_22403 = cljs.core.first(seq__22084_22397__$1);
var map__22094_22404__$1 = cljs.core.__destructure_map(map__22094_22403);
var task_22405 = map__22094_22404__$1;
var fn_str_22406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22094_22404__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22094_22404__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22409 = goog.getObjectByName(fn_str_22406,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22407)].join(''));

(fn_obj_22409.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22409.cljs$core$IFn$_invoke$arity$2(path,new_link_22381) : fn_obj_22409.call(null,path,new_link_22381));


var G__22410 = cljs.core.next(seq__22084_22397__$1);
var G__22411 = null;
var G__22412 = (0);
var G__22413 = (0);
seq__22084_22382 = G__22410;
chunk__22086_22383 = G__22411;
count__22087_22384 = G__22412;
i__22088_22385 = G__22413;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22379);
});})(seq__22017_22322,chunk__22021_22323,count__22022_22324,i__22023_22325,seq__21831,chunk__21833,count__21834,i__21835,new_link_22381,path_match_22380,node_22379,seq__22017_22373__$1,temp__5804__auto___22372,path,map__21830,map__21830__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22380], 0));

goog.dom.insertSiblingAfter(new_link_22381,node_22379);


var G__22414 = cljs.core.next(seq__22017_22373__$1);
var G__22415 = null;
var G__22416 = (0);
var G__22417 = (0);
seq__22017_22322 = G__22414;
chunk__22021_22323 = G__22415;
count__22022_22324 = G__22416;
i__22023_22325 = G__22417;
continue;
} else {
var G__22418 = cljs.core.next(seq__22017_22373__$1);
var G__22419 = null;
var G__22420 = (0);
var G__22421 = (0);
seq__22017_22322 = G__22418;
chunk__22021_22323 = G__22419;
count__22022_22324 = G__22420;
i__22023_22325 = G__22421;
continue;
}
} else {
var G__22422 = cljs.core.next(seq__22017_22373__$1);
var G__22423 = null;
var G__22424 = (0);
var G__22425 = (0);
seq__22017_22322 = G__22422;
chunk__22021_22323 = G__22423;
count__22022_22324 = G__22424;
i__22023_22325 = G__22425;
continue;
}
}
} else {
}
}
break;
}


var G__22426 = seq__21831;
var G__22427 = chunk__21833;
var G__22428 = count__21834;
var G__22429 = (i__21835 + (1));
seq__21831 = G__22426;
chunk__21833 = G__22427;
count__21834 = G__22428;
i__21835 = G__22429;
continue;
} else {
var G__22430 = seq__21831;
var G__22431 = chunk__21833;
var G__22432 = count__21834;
var G__22433 = (i__21835 + (1));
seq__21831 = G__22430;
chunk__21833 = G__22431;
count__21834 = G__22432;
i__21835 = G__22433;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21831);
if(temp__5804__auto__){
var seq__21831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21831__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21831__$1);
var G__22434 = cljs.core.chunk_rest(seq__21831__$1);
var G__22435 = c__5525__auto__;
var G__22436 = cljs.core.count(c__5525__auto__);
var G__22437 = (0);
seq__21831 = G__22434;
chunk__21833 = G__22435;
count__21834 = G__22436;
i__21835 = G__22437;
continue;
} else {
var path = cljs.core.first(seq__21831__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22098_22438 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22102_22439 = null;
var count__22103_22440 = (0);
var i__22104_22441 = (0);
while(true){
if((i__22104_22441 < count__22103_22440)){
var node_22442 = chunk__22102_22439.cljs$core$IIndexed$_nth$arity$2(null,i__22104_22441);
if(cljs.core.not(node_22442.shadow$old)){
var path_match_22443 = shadow.cljs.devtools.client.browser.match_paths(node_22442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22443)){
var new_link_22444 = (function (){var G__22143 = node_22442.cloneNode(true);
G__22143.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22443),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22143;
})();
(node_22442.shadow$old = true);

(new_link_22444.onload = ((function (seq__22098_22438,chunk__22102_22439,count__22103_22440,i__22104_22441,seq__21831,chunk__21833,count__21834,i__21835,new_link_22444,path_match_22443,node_22442,path,seq__21831__$1,temp__5804__auto__,map__21830,map__21830__$1,msg,updates,reload_info){
return (function (e){
var seq__22145_22445 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22147_22446 = null;
var count__22148_22447 = (0);
var i__22149_22448 = (0);
while(true){
if((i__22149_22448 < count__22148_22447)){
var map__22161_22449 = chunk__22147_22446.cljs$core$IIndexed$_nth$arity$2(null,i__22149_22448);
var map__22161_22450__$1 = cljs.core.__destructure_map(map__22161_22449);
var task_22451 = map__22161_22450__$1;
var fn_str_22452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22161_22450__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22161_22450__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22454 = goog.getObjectByName(fn_str_22452,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22453)].join(''));

(fn_obj_22454.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22454.cljs$core$IFn$_invoke$arity$2(path,new_link_22444) : fn_obj_22454.call(null,path,new_link_22444));


var G__22455 = seq__22145_22445;
var G__22456 = chunk__22147_22446;
var G__22457 = count__22148_22447;
var G__22458 = (i__22149_22448 + (1));
seq__22145_22445 = G__22455;
chunk__22147_22446 = G__22456;
count__22148_22447 = G__22457;
i__22149_22448 = G__22458;
continue;
} else {
var temp__5804__auto___22459__$1 = cljs.core.seq(seq__22145_22445);
if(temp__5804__auto___22459__$1){
var seq__22145_22460__$1 = temp__5804__auto___22459__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22145_22460__$1)){
var c__5525__auto___22461 = cljs.core.chunk_first(seq__22145_22460__$1);
var G__22462 = cljs.core.chunk_rest(seq__22145_22460__$1);
var G__22463 = c__5525__auto___22461;
var G__22464 = cljs.core.count(c__5525__auto___22461);
var G__22465 = (0);
seq__22145_22445 = G__22462;
chunk__22147_22446 = G__22463;
count__22148_22447 = G__22464;
i__22149_22448 = G__22465;
continue;
} else {
var map__22170_22466 = cljs.core.first(seq__22145_22460__$1);
var map__22170_22467__$1 = cljs.core.__destructure_map(map__22170_22466);
var task_22468 = map__22170_22467__$1;
var fn_str_22469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22170_22467__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22170_22467__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22471 = goog.getObjectByName(fn_str_22469,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22470)].join(''));

(fn_obj_22471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22471.cljs$core$IFn$_invoke$arity$2(path,new_link_22444) : fn_obj_22471.call(null,path,new_link_22444));


var G__22472 = cljs.core.next(seq__22145_22460__$1);
var G__22473 = null;
var G__22474 = (0);
var G__22475 = (0);
seq__22145_22445 = G__22472;
chunk__22147_22446 = G__22473;
count__22148_22447 = G__22474;
i__22149_22448 = G__22475;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22442);
});})(seq__22098_22438,chunk__22102_22439,count__22103_22440,i__22104_22441,seq__21831,chunk__21833,count__21834,i__21835,new_link_22444,path_match_22443,node_22442,path,seq__21831__$1,temp__5804__auto__,map__21830,map__21830__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22443], 0));

goog.dom.insertSiblingAfter(new_link_22444,node_22442);


var G__22476 = seq__22098_22438;
var G__22477 = chunk__22102_22439;
var G__22478 = count__22103_22440;
var G__22479 = (i__22104_22441 + (1));
seq__22098_22438 = G__22476;
chunk__22102_22439 = G__22477;
count__22103_22440 = G__22478;
i__22104_22441 = G__22479;
continue;
} else {
var G__22480 = seq__22098_22438;
var G__22481 = chunk__22102_22439;
var G__22482 = count__22103_22440;
var G__22483 = (i__22104_22441 + (1));
seq__22098_22438 = G__22480;
chunk__22102_22439 = G__22481;
count__22103_22440 = G__22482;
i__22104_22441 = G__22483;
continue;
}
} else {
var G__22484 = seq__22098_22438;
var G__22485 = chunk__22102_22439;
var G__22486 = count__22103_22440;
var G__22487 = (i__22104_22441 + (1));
seq__22098_22438 = G__22484;
chunk__22102_22439 = G__22485;
count__22103_22440 = G__22486;
i__22104_22441 = G__22487;
continue;
}
} else {
var temp__5804__auto___22488__$1 = cljs.core.seq(seq__22098_22438);
if(temp__5804__auto___22488__$1){
var seq__22098_22489__$1 = temp__5804__auto___22488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22098_22489__$1)){
var c__5525__auto___22490 = cljs.core.chunk_first(seq__22098_22489__$1);
var G__22491 = cljs.core.chunk_rest(seq__22098_22489__$1);
var G__22492 = c__5525__auto___22490;
var G__22493 = cljs.core.count(c__5525__auto___22490);
var G__22494 = (0);
seq__22098_22438 = G__22491;
chunk__22102_22439 = G__22492;
count__22103_22440 = G__22493;
i__22104_22441 = G__22494;
continue;
} else {
var node_22495 = cljs.core.first(seq__22098_22489__$1);
if(cljs.core.not(node_22495.shadow$old)){
var path_match_22496 = shadow.cljs.devtools.client.browser.match_paths(node_22495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22496)){
var new_link_22497 = (function (){var G__22173 = node_22495.cloneNode(true);
G__22173.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22173;
})();
(node_22495.shadow$old = true);

(new_link_22497.onload = ((function (seq__22098_22438,chunk__22102_22439,count__22103_22440,i__22104_22441,seq__21831,chunk__21833,count__21834,i__21835,new_link_22497,path_match_22496,node_22495,seq__22098_22489__$1,temp__5804__auto___22488__$1,path,seq__21831__$1,temp__5804__auto__,map__21830,map__21830__$1,msg,updates,reload_info){
return (function (e){
var seq__22174_22498 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22176_22499 = null;
var count__22177_22500 = (0);
var i__22178_22501 = (0);
while(true){
if((i__22178_22501 < count__22177_22500)){
var map__22191_22502 = chunk__22176_22499.cljs$core$IIndexed$_nth$arity$2(null,i__22178_22501);
var map__22191_22503__$1 = cljs.core.__destructure_map(map__22191_22502);
var task_22504 = map__22191_22503__$1;
var fn_str_22505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22191_22503__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22191_22503__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22507 = goog.getObjectByName(fn_str_22505,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22506)].join(''));

(fn_obj_22507.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22507.cljs$core$IFn$_invoke$arity$2(path,new_link_22497) : fn_obj_22507.call(null,path,new_link_22497));


var G__22508 = seq__22174_22498;
var G__22509 = chunk__22176_22499;
var G__22510 = count__22177_22500;
var G__22511 = (i__22178_22501 + (1));
seq__22174_22498 = G__22508;
chunk__22176_22499 = G__22509;
count__22177_22500 = G__22510;
i__22178_22501 = G__22511;
continue;
} else {
var temp__5804__auto___22512__$2 = cljs.core.seq(seq__22174_22498);
if(temp__5804__auto___22512__$2){
var seq__22174_22513__$1 = temp__5804__auto___22512__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22174_22513__$1)){
var c__5525__auto___22514 = cljs.core.chunk_first(seq__22174_22513__$1);
var G__22515 = cljs.core.chunk_rest(seq__22174_22513__$1);
var G__22516 = c__5525__auto___22514;
var G__22517 = cljs.core.count(c__5525__auto___22514);
var G__22518 = (0);
seq__22174_22498 = G__22515;
chunk__22176_22499 = G__22516;
count__22177_22500 = G__22517;
i__22178_22501 = G__22518;
continue;
} else {
var map__22195_22519 = cljs.core.first(seq__22174_22513__$1);
var map__22195_22520__$1 = cljs.core.__destructure_map(map__22195_22519);
var task_22521 = map__22195_22520__$1;
var fn_str_22522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22195_22520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22195_22520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22524 = goog.getObjectByName(fn_str_22522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22523)].join(''));

(fn_obj_22524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22524.cljs$core$IFn$_invoke$arity$2(path,new_link_22497) : fn_obj_22524.call(null,path,new_link_22497));


var G__22530 = cljs.core.next(seq__22174_22513__$1);
var G__22531 = null;
var G__22532 = (0);
var G__22533 = (0);
seq__22174_22498 = G__22530;
chunk__22176_22499 = G__22531;
count__22177_22500 = G__22532;
i__22178_22501 = G__22533;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22495);
});})(seq__22098_22438,chunk__22102_22439,count__22103_22440,i__22104_22441,seq__21831,chunk__21833,count__21834,i__21835,new_link_22497,path_match_22496,node_22495,seq__22098_22489__$1,temp__5804__auto___22488__$1,path,seq__21831__$1,temp__5804__auto__,map__21830,map__21830__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22496], 0));

goog.dom.insertSiblingAfter(new_link_22497,node_22495);


var G__22545 = cljs.core.next(seq__22098_22489__$1);
var G__22546 = null;
var G__22547 = (0);
var G__22548 = (0);
seq__22098_22438 = G__22545;
chunk__22102_22439 = G__22546;
count__22103_22440 = G__22547;
i__22104_22441 = G__22548;
continue;
} else {
var G__22550 = cljs.core.next(seq__22098_22489__$1);
var G__22551 = null;
var G__22552 = (0);
var G__22553 = (0);
seq__22098_22438 = G__22550;
chunk__22102_22439 = G__22551;
count__22103_22440 = G__22552;
i__22104_22441 = G__22553;
continue;
}
} else {
var G__22558 = cljs.core.next(seq__22098_22489__$1);
var G__22559 = null;
var G__22560 = (0);
var G__22561 = (0);
seq__22098_22438 = G__22558;
chunk__22102_22439 = G__22559;
count__22103_22440 = G__22560;
i__22104_22441 = G__22561;
continue;
}
}
} else {
}
}
break;
}


var G__22562 = cljs.core.next(seq__21831__$1);
var G__22563 = null;
var G__22564 = (0);
var G__22565 = (0);
seq__21831 = G__22562;
chunk__21833 = G__22563;
count__21834 = G__22564;
i__21835 = G__22565;
continue;
} else {
var G__22570 = cljs.core.next(seq__21831__$1);
var G__22571 = null;
var G__22572 = (0);
var G__22573 = (0);
seq__21831 = G__22570;
chunk__21833 = G__22571;
count__21834 = G__22572;
i__21835 = G__22573;
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
try{var G__22200 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22200) : success.call(null,G__22200));
}catch (e22199){var e = e22199;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22201,success,fail){
var map__22202 = p__22201;
var map__22202__$1 = cljs.core.__destructure_map(map__22202);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22204 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22204) : success.call(null,G__22204));
}catch (e22203){var e = e22203;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22208,done,error){
var map__22209 = p__22208;
var map__22209__$1 = cljs.core.__destructure_map(map__22209);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22209__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22210,done,error){
var map__22211 = p__22210;
var map__22211__$1 = cljs.core.__destructure_map(map__22211);
var msg = map__22211__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22211__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22211__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22211__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22212){
var map__22213 = p__22212;
var map__22213__$1 = cljs.core.__destructure_map(map__22213);
var src = map__22213__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22213__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22214 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22214) : done.call(null,G__22214));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22218){
var map__22219 = p__22218;
var map__22219__$1 = cljs.core.__destructure_map(map__22219);
var msg__$1 = map__22219__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22219__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22220){var ex = e22220;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22221){
var map__22222 = p__22221;
var map__22222__$1 = cljs.core.__destructure_map(map__22222);
var env = map__22222__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22227){
var map__22228 = p__22227;
var map__22228__$1 = cljs.core.__destructure_map(map__22228);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22228__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22228__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__22238){
var map__22239 = p__22238;
var map__22239__$1 = cljs.core.__destructure_map(map__22239);
var svc = map__22239__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22239__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
