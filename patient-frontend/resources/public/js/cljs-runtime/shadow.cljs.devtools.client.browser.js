goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22193 = arguments.length;
var i__5727__auto___22194 = (0);
while(true){
if((i__5727__auto___22194 < len__5726__auto___22193)){
args__5732__auto__.push((arguments[i__5727__auto___22194]));

var G__22195 = (i__5727__auto___22194 + (1));
i__5727__auto___22194 = G__22195;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21688){
var G__21689 = cljs.core.first(seq21688);
var seq21688__$1 = cljs.core.next(seq21688);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21689,seq21688__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21699 = cljs.core.seq(sources);
var chunk__21700 = null;
var count__21701 = (0);
var i__21702 = (0);
while(true){
if((i__21702 < count__21701)){
var map__21709 = chunk__21700.cljs$core$IIndexed$_nth$arity$2(null, i__21702);
var map__21709__$1 = cljs.core.__destructure_map(map__21709);
var src = map__21709__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21710){var e_22199 = e21710;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22199);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22199.message)].join('')));
}

var G__22200 = seq__21699;
var G__22201 = chunk__21700;
var G__22202 = count__21701;
var G__22203 = (i__21702 + (1));
seq__21699 = G__22200;
chunk__21700 = G__22201;
count__21701 = G__22202;
i__21702 = G__22203;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21699);
if(temp__5804__auto__){
var seq__21699__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21699__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21699__$1);
var G__22204 = cljs.core.chunk_rest(seq__21699__$1);
var G__22205 = c__5525__auto__;
var G__22206 = cljs.core.count(c__5525__auto__);
var G__22207 = (0);
seq__21699 = G__22204;
chunk__21700 = G__22205;
count__21701 = G__22206;
i__21702 = G__22207;
continue;
} else {
var map__21711 = cljs.core.first(seq__21699__$1);
var map__21711__$1 = cljs.core.__destructure_map(map__21711);
var src = map__21711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21713){var e_22208 = e21713;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22208);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22208.message)].join('')));
}

var G__22209 = cljs.core.next(seq__21699__$1);
var G__22210 = null;
var G__22211 = (0);
var G__22212 = (0);
seq__21699 = G__22209;
chunk__21700 = G__22210;
count__21701 = G__22211;
i__21702 = G__22212;
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

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null, ));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21736 = cljs.core.seq(js_requires);
var chunk__21737 = null;
var count__21738 = (0);
var i__21739 = (0);
while(true){
if((i__21739 < count__21738)){
var js_ns = chunk__21737.cljs$core$IIndexed$_nth$arity$2(null, i__21739);
var require_str_22213 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22213);


var G__22214 = seq__21736;
var G__22215 = chunk__21737;
var G__22216 = count__21738;
var G__22217 = (i__21739 + (1));
seq__21736 = G__22214;
chunk__21737 = G__22215;
count__21738 = G__22216;
i__21739 = G__22217;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21736);
if(temp__5804__auto__){
var seq__21736__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21736__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21736__$1);
var G__22218 = cljs.core.chunk_rest(seq__21736__$1);
var G__22219 = c__5525__auto__;
var G__22220 = cljs.core.count(c__5525__auto__);
var G__22221 = (0);
seq__21736 = G__22218;
chunk__21737 = G__22219;
count__21738 = G__22220;
i__21739 = G__22221;
continue;
} else {
var js_ns = cljs.core.first(seq__21736__$1);
var require_str_22222 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22222);


var G__22223 = cljs.core.next(seq__21736__$1);
var G__22224 = null;
var G__22225 = (0);
var G__22226 = (0);
seq__21736 = G__22223;
chunk__21737 = G__22224;
count__21738 = G__22225;
i__21739 = G__22226;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21742){
var map__21743 = p__21742;
var map__21743__$1 = cljs.core.__destructure_map(map__21743);
var msg = map__21743__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21744(s__21745){
return (new cljs.core.LazySeq(null,(function (){
var s__21745__$1 = s__21745;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21745__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21750 = cljs.core.first(xs__6360__auto__);
var map__21750__$1 = cljs.core.__destructure_map(map__21750);
var src = map__21750__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21750__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21745__$1,map__21750,map__21750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21743,map__21743__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21744_$_iter__21746(s__21747){
return (new cljs.core.LazySeq(null,((function (s__21745__$1,map__21750,map__21750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21743,map__21743__$1,msg,info,reload_info){
return (function (){
var s__21747__$1 = s__21747;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21747__$1);
if(temp__5804__auto____$1){
var s__21747__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21747__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21747__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21749 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21748 = (0);
while(true){
if((i__21748 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21748);
cljs.core.chunk_append(b__21749,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22227 = (i__21748 + (1));
i__21748 = G__22227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21749),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21744_$_iter__21746(cljs.core.chunk_rest(s__21747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21749),null);
}
} else {
var warning = cljs.core.first(s__21747__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21744_$_iter__21746(cljs.core.rest(s__21747__$2)));
}
} else {
return null;
}
break;
}
});})(s__21745__$1,map__21750,map__21750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21743,map__21743__$1,msg,info,reload_info))
,null,null));
});})(s__21745__$1,map__21750,map__21750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21743,map__21743__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21744(cljs.core.rest(s__21745__$1)));
} else {
var G__22228 = cljs.core.rest(s__21745__$1);
s__21745__$1 = G__22228;
continue;
}
} else {
var G__22229 = cljs.core.rest(s__21745__$1);
s__21745__$1 = G__22229;
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
var seq__21755_22230 = cljs.core.seq(warnings);
var chunk__21756_22231 = null;
var count__21757_22232 = (0);
var i__21758_22233 = (0);
while(true){
if((i__21758_22233 < count__21757_22232)){
var map__21761_22234 = chunk__21756_22231.cljs$core$IIndexed$_nth$arity$2(null, i__21758_22233);
var map__21761_22235__$1 = cljs.core.__destructure_map(map__21761_22234);
var w_22236 = map__21761_22235__$1;
var msg_22237__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761_22235__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761_22235__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761_22235__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761_22235__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22240)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22238),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22239),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22237__$1)].join(''));


var G__22243 = seq__21755_22230;
var G__22244 = chunk__21756_22231;
var G__22245 = count__21757_22232;
var G__22246 = (i__21758_22233 + (1));
seq__21755_22230 = G__22243;
chunk__21756_22231 = G__22244;
count__21757_22232 = G__22245;
i__21758_22233 = G__22246;
continue;
} else {
var temp__5804__auto___22249 = cljs.core.seq(seq__21755_22230);
if(temp__5804__auto___22249){
var seq__21755_22251__$1 = temp__5804__auto___22249;
if(cljs.core.chunked_seq_QMARK_(seq__21755_22251__$1)){
var c__5525__auto___22253 = cljs.core.chunk_first(seq__21755_22251__$1);
var G__22254 = cljs.core.chunk_rest(seq__21755_22251__$1);
var G__22255 = c__5525__auto___22253;
var G__22256 = cljs.core.count(c__5525__auto___22253);
var G__22257 = (0);
seq__21755_22230 = G__22254;
chunk__21756_22231 = G__22255;
count__21757_22232 = G__22256;
i__21758_22233 = G__22257;
continue;
} else {
var map__21770_22258 = cljs.core.first(seq__21755_22251__$1);
var map__21770_22259__$1 = cljs.core.__destructure_map(map__21770_22258);
var w_22260 = map__21770_22259__$1;
var msg_22261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21770_22259__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21770_22259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21770_22259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21770_22259__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22264)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22262),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22263),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22261__$1)].join(''));


var G__22265 = cljs.core.next(seq__21755_22251__$1);
var G__22266 = null;
var G__22267 = (0);
var G__22268 = (0);
seq__21755_22230 = G__22265;
chunk__21756_22231 = G__22266;
count__21757_22232 = G__22267;
i__21758_22233 = G__22268;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21740_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21740_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21772 = node_uri;
G__21772.setQuery(null);

G__21772.setPath(new$);

return G__21772;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21773){
var map__21774 = p__21773;
var map__21774__$1 = cljs.core.__destructure_map(map__21774);
var msg = map__21774__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21776 = cljs.core.seq(updates);
var chunk__21778 = null;
var count__21779 = (0);
var i__21780 = (0);
while(true){
if((i__21780 < count__21779)){
var path = chunk__21778.cljs$core$IIndexed$_nth$arity$2(null, i__21780);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21931_22269 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21935_22270 = null;
var count__21936_22271 = (0);
var i__21937_22272 = (0);
while(true){
if((i__21937_22272 < count__21936_22271)){
var node_22273 = chunk__21935_22270.cljs$core$IIndexed$_nth$arity$2(null, i__21937_22272);
if(cljs.core.not(node_22273.shadow$old)){
var path_match_22274 = shadow.cljs.devtools.client.browser.match_paths(node_22273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22274)){
var new_link_22275 = (function (){var G__21982 = node_22273.cloneNode(true);
G__21982.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21982;
})();
(node_22273.shadow$old = true);

(new_link_22275.onload = ((function (seq__21931_22269,chunk__21935_22270,count__21936_22271,i__21937_22272,seq__21776,chunk__21778,count__21779,i__21780,new_link_22275,path_match_22274,node_22273,path,map__21774,map__21774__$1,msg,updates,reload_info){
return (function (e){
var seq__21988_22276 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21990_22277 = null;
var count__21991_22278 = (0);
var i__21992_22279 = (0);
while(true){
if((i__21992_22279 < count__21991_22278)){
var map__22000_22280 = chunk__21990_22277.cljs$core$IIndexed$_nth$arity$2(null, i__21992_22279);
var map__22000_22281__$1 = cljs.core.__destructure_map(map__22000_22280);
var task_22282 = map__22000_22281__$1;
var fn_str_22283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22000_22281__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22000_22281__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22285 = goog.getObjectByName(fn_str_22283,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22284)].join(''));

(fn_obj_22285.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22285.cljs$core$IFn$_invoke$arity$2(path,new_link_22275) : fn_obj_22285.call(null, path,new_link_22275));


var G__22286 = seq__21988_22276;
var G__22287 = chunk__21990_22277;
var G__22288 = count__21991_22278;
var G__22289 = (i__21992_22279 + (1));
seq__21988_22276 = G__22286;
chunk__21990_22277 = G__22287;
count__21991_22278 = G__22288;
i__21992_22279 = G__22289;
continue;
} else {
var temp__5804__auto___22290 = cljs.core.seq(seq__21988_22276);
if(temp__5804__auto___22290){
var seq__21988_22291__$1 = temp__5804__auto___22290;
if(cljs.core.chunked_seq_QMARK_(seq__21988_22291__$1)){
var c__5525__auto___22292 = cljs.core.chunk_first(seq__21988_22291__$1);
var G__22293 = cljs.core.chunk_rest(seq__21988_22291__$1);
var G__22294 = c__5525__auto___22292;
var G__22295 = cljs.core.count(c__5525__auto___22292);
var G__22296 = (0);
seq__21988_22276 = G__22293;
chunk__21990_22277 = G__22294;
count__21991_22278 = G__22295;
i__21992_22279 = G__22296;
continue;
} else {
var map__22006_22297 = cljs.core.first(seq__21988_22291__$1);
var map__22006_22298__$1 = cljs.core.__destructure_map(map__22006_22297);
var task_22299 = map__22006_22298__$1;
var fn_str_22300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22006_22298__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22006_22298__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22302 = goog.getObjectByName(fn_str_22300,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22301)].join(''));

(fn_obj_22302.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22302.cljs$core$IFn$_invoke$arity$2(path,new_link_22275) : fn_obj_22302.call(null, path,new_link_22275));


var G__22303 = cljs.core.next(seq__21988_22291__$1);
var G__22304 = null;
var G__22305 = (0);
var G__22306 = (0);
seq__21988_22276 = G__22303;
chunk__21990_22277 = G__22304;
count__21991_22278 = G__22305;
i__21992_22279 = G__22306;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22273);
});})(seq__21931_22269,chunk__21935_22270,count__21936_22271,i__21937_22272,seq__21776,chunk__21778,count__21779,i__21780,new_link_22275,path_match_22274,node_22273,path,map__21774,map__21774__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22274], 0));

goog.dom.insertSiblingAfter(new_link_22275,node_22273);


var G__22307 = seq__21931_22269;
var G__22308 = chunk__21935_22270;
var G__22309 = count__21936_22271;
var G__22310 = (i__21937_22272 + (1));
seq__21931_22269 = G__22307;
chunk__21935_22270 = G__22308;
count__21936_22271 = G__22309;
i__21937_22272 = G__22310;
continue;
} else {
var G__22311 = seq__21931_22269;
var G__22312 = chunk__21935_22270;
var G__22313 = count__21936_22271;
var G__22314 = (i__21937_22272 + (1));
seq__21931_22269 = G__22311;
chunk__21935_22270 = G__22312;
count__21936_22271 = G__22313;
i__21937_22272 = G__22314;
continue;
}
} else {
var G__22315 = seq__21931_22269;
var G__22316 = chunk__21935_22270;
var G__22317 = count__21936_22271;
var G__22318 = (i__21937_22272 + (1));
seq__21931_22269 = G__22315;
chunk__21935_22270 = G__22316;
count__21936_22271 = G__22317;
i__21937_22272 = G__22318;
continue;
}
} else {
var temp__5804__auto___22319 = cljs.core.seq(seq__21931_22269);
if(temp__5804__auto___22319){
var seq__21931_22320__$1 = temp__5804__auto___22319;
if(cljs.core.chunked_seq_QMARK_(seq__21931_22320__$1)){
var c__5525__auto___22321 = cljs.core.chunk_first(seq__21931_22320__$1);
var G__22322 = cljs.core.chunk_rest(seq__21931_22320__$1);
var G__22323 = c__5525__auto___22321;
var G__22324 = cljs.core.count(c__5525__auto___22321);
var G__22325 = (0);
seq__21931_22269 = G__22322;
chunk__21935_22270 = G__22323;
count__21936_22271 = G__22324;
i__21937_22272 = G__22325;
continue;
} else {
var node_22326 = cljs.core.first(seq__21931_22320__$1);
if(cljs.core.not(node_22326.shadow$old)){
var path_match_22327 = shadow.cljs.devtools.client.browser.match_paths(node_22326.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22327)){
var new_link_22328 = (function (){var G__22009 = node_22326.cloneNode(true);
G__22009.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22327),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22009;
})();
(node_22326.shadow$old = true);

(new_link_22328.onload = ((function (seq__21931_22269,chunk__21935_22270,count__21936_22271,i__21937_22272,seq__21776,chunk__21778,count__21779,i__21780,new_link_22328,path_match_22327,node_22326,seq__21931_22320__$1,temp__5804__auto___22319,path,map__21774,map__21774__$1,msg,updates,reload_info){
return (function (e){
var seq__22010_22329 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22012_22330 = null;
var count__22013_22331 = (0);
var i__22014_22332 = (0);
while(true){
if((i__22014_22332 < count__22013_22331)){
var map__22026_22333 = chunk__22012_22330.cljs$core$IIndexed$_nth$arity$2(null, i__22014_22332);
var map__22026_22334__$1 = cljs.core.__destructure_map(map__22026_22333);
var task_22335 = map__22026_22334__$1;
var fn_str_22336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22026_22334__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22026_22334__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22338 = goog.getObjectByName(fn_str_22336,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22337)].join(''));

(fn_obj_22338.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22338.cljs$core$IFn$_invoke$arity$2(path,new_link_22328) : fn_obj_22338.call(null, path,new_link_22328));


var G__22339 = seq__22010_22329;
var G__22340 = chunk__22012_22330;
var G__22341 = count__22013_22331;
var G__22342 = (i__22014_22332 + (1));
seq__22010_22329 = G__22339;
chunk__22012_22330 = G__22340;
count__22013_22331 = G__22341;
i__22014_22332 = G__22342;
continue;
} else {
var temp__5804__auto___22344__$1 = cljs.core.seq(seq__22010_22329);
if(temp__5804__auto___22344__$1){
var seq__22010_22345__$1 = temp__5804__auto___22344__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22010_22345__$1)){
var c__5525__auto___22346 = cljs.core.chunk_first(seq__22010_22345__$1);
var G__22347 = cljs.core.chunk_rest(seq__22010_22345__$1);
var G__22348 = c__5525__auto___22346;
var G__22349 = cljs.core.count(c__5525__auto___22346);
var G__22350 = (0);
seq__22010_22329 = G__22347;
chunk__22012_22330 = G__22348;
count__22013_22331 = G__22349;
i__22014_22332 = G__22350;
continue;
} else {
var map__22028_22351 = cljs.core.first(seq__22010_22345__$1);
var map__22028_22352__$1 = cljs.core.__destructure_map(map__22028_22351);
var task_22353 = map__22028_22352__$1;
var fn_str_22354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22028_22352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22028_22352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22356 = goog.getObjectByName(fn_str_22354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22355)].join(''));

(fn_obj_22356.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22356.cljs$core$IFn$_invoke$arity$2(path,new_link_22328) : fn_obj_22356.call(null, path,new_link_22328));


var G__22357 = cljs.core.next(seq__22010_22345__$1);
var G__22358 = null;
var G__22359 = (0);
var G__22360 = (0);
seq__22010_22329 = G__22357;
chunk__22012_22330 = G__22358;
count__22013_22331 = G__22359;
i__22014_22332 = G__22360;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22326);
});})(seq__21931_22269,chunk__21935_22270,count__21936_22271,i__21937_22272,seq__21776,chunk__21778,count__21779,i__21780,new_link_22328,path_match_22327,node_22326,seq__21931_22320__$1,temp__5804__auto___22319,path,map__21774,map__21774__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22327], 0));

goog.dom.insertSiblingAfter(new_link_22328,node_22326);


var G__22361 = cljs.core.next(seq__21931_22320__$1);
var G__22362 = null;
var G__22363 = (0);
var G__22364 = (0);
seq__21931_22269 = G__22361;
chunk__21935_22270 = G__22362;
count__21936_22271 = G__22363;
i__21937_22272 = G__22364;
continue;
} else {
var G__22365 = cljs.core.next(seq__21931_22320__$1);
var G__22366 = null;
var G__22367 = (0);
var G__22368 = (0);
seq__21931_22269 = G__22365;
chunk__21935_22270 = G__22366;
count__21936_22271 = G__22367;
i__21937_22272 = G__22368;
continue;
}
} else {
var G__22369 = cljs.core.next(seq__21931_22320__$1);
var G__22370 = null;
var G__22371 = (0);
var G__22372 = (0);
seq__21931_22269 = G__22369;
chunk__21935_22270 = G__22370;
count__21936_22271 = G__22371;
i__21937_22272 = G__22372;
continue;
}
}
} else {
}
}
break;
}


var G__22373 = seq__21776;
var G__22374 = chunk__21778;
var G__22375 = count__21779;
var G__22376 = (i__21780 + (1));
seq__21776 = G__22373;
chunk__21778 = G__22374;
count__21779 = G__22375;
i__21780 = G__22376;
continue;
} else {
var G__22377 = seq__21776;
var G__22378 = chunk__21778;
var G__22379 = count__21779;
var G__22380 = (i__21780 + (1));
seq__21776 = G__22377;
chunk__21778 = G__22378;
count__21779 = G__22379;
i__21780 = G__22380;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21776);
if(temp__5804__auto__){
var seq__21776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21776__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21776__$1);
var G__22381 = cljs.core.chunk_rest(seq__21776__$1);
var G__22382 = c__5525__auto__;
var G__22383 = cljs.core.count(c__5525__auto__);
var G__22384 = (0);
seq__21776 = G__22381;
chunk__21778 = G__22382;
count__21779 = G__22383;
i__21780 = G__22384;
continue;
} else {
var path = cljs.core.first(seq__21776__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22029_22385 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22033_22386 = null;
var count__22034_22387 = (0);
var i__22035_22388 = (0);
while(true){
if((i__22035_22388 < count__22034_22387)){
var node_22389 = chunk__22033_22386.cljs$core$IIndexed$_nth$arity$2(null, i__22035_22388);
if(cljs.core.not(node_22389.shadow$old)){
var path_match_22390 = shadow.cljs.devtools.client.browser.match_paths(node_22389.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22390)){
var new_link_22391 = (function (){var G__22078 = node_22389.cloneNode(true);
G__22078.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22390),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22078;
})();
(node_22389.shadow$old = true);

(new_link_22391.onload = ((function (seq__22029_22385,chunk__22033_22386,count__22034_22387,i__22035_22388,seq__21776,chunk__21778,count__21779,i__21780,new_link_22391,path_match_22390,node_22389,path,seq__21776__$1,temp__5804__auto__,map__21774,map__21774__$1,msg,updates,reload_info){
return (function (e){
var seq__22081_22392 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22083_22393 = null;
var count__22084_22394 = (0);
var i__22085_22395 = (0);
while(true){
if((i__22085_22395 < count__22084_22394)){
var map__22099_22396 = chunk__22083_22393.cljs$core$IIndexed$_nth$arity$2(null, i__22085_22395);
var map__22099_22397__$1 = cljs.core.__destructure_map(map__22099_22396);
var task_22398 = map__22099_22397__$1;
var fn_str_22399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099_22397__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099_22397__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22401 = goog.getObjectByName(fn_str_22399,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22400)].join(''));

(fn_obj_22401.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22401.cljs$core$IFn$_invoke$arity$2(path,new_link_22391) : fn_obj_22401.call(null, path,new_link_22391));


var G__22402 = seq__22081_22392;
var G__22403 = chunk__22083_22393;
var G__22404 = count__22084_22394;
var G__22405 = (i__22085_22395 + (1));
seq__22081_22392 = G__22402;
chunk__22083_22393 = G__22403;
count__22084_22394 = G__22404;
i__22085_22395 = G__22405;
continue;
} else {
var temp__5804__auto___22406__$1 = cljs.core.seq(seq__22081_22392);
if(temp__5804__auto___22406__$1){
var seq__22081_22407__$1 = temp__5804__auto___22406__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22081_22407__$1)){
var c__5525__auto___22408 = cljs.core.chunk_first(seq__22081_22407__$1);
var G__22409 = cljs.core.chunk_rest(seq__22081_22407__$1);
var G__22410 = c__5525__auto___22408;
var G__22411 = cljs.core.count(c__5525__auto___22408);
var G__22412 = (0);
seq__22081_22392 = G__22409;
chunk__22083_22393 = G__22410;
count__22084_22394 = G__22411;
i__22085_22395 = G__22412;
continue;
} else {
var map__22103_22413 = cljs.core.first(seq__22081_22407__$1);
var map__22103_22414__$1 = cljs.core.__destructure_map(map__22103_22413);
var task_22415 = map__22103_22414__$1;
var fn_str_22416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103_22414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103_22414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22418 = goog.getObjectByName(fn_str_22416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22417)].join(''));

(fn_obj_22418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22418.cljs$core$IFn$_invoke$arity$2(path,new_link_22391) : fn_obj_22418.call(null, path,new_link_22391));


var G__22419 = cljs.core.next(seq__22081_22407__$1);
var G__22420 = null;
var G__22421 = (0);
var G__22422 = (0);
seq__22081_22392 = G__22419;
chunk__22083_22393 = G__22420;
count__22084_22394 = G__22421;
i__22085_22395 = G__22422;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22389);
});})(seq__22029_22385,chunk__22033_22386,count__22034_22387,i__22035_22388,seq__21776,chunk__21778,count__21779,i__21780,new_link_22391,path_match_22390,node_22389,path,seq__21776__$1,temp__5804__auto__,map__21774,map__21774__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22390], 0));

goog.dom.insertSiblingAfter(new_link_22391,node_22389);


var G__22423 = seq__22029_22385;
var G__22424 = chunk__22033_22386;
var G__22425 = count__22034_22387;
var G__22426 = (i__22035_22388 + (1));
seq__22029_22385 = G__22423;
chunk__22033_22386 = G__22424;
count__22034_22387 = G__22425;
i__22035_22388 = G__22426;
continue;
} else {
var G__22427 = seq__22029_22385;
var G__22428 = chunk__22033_22386;
var G__22429 = count__22034_22387;
var G__22430 = (i__22035_22388 + (1));
seq__22029_22385 = G__22427;
chunk__22033_22386 = G__22428;
count__22034_22387 = G__22429;
i__22035_22388 = G__22430;
continue;
}
} else {
var G__22431 = seq__22029_22385;
var G__22432 = chunk__22033_22386;
var G__22433 = count__22034_22387;
var G__22434 = (i__22035_22388 + (1));
seq__22029_22385 = G__22431;
chunk__22033_22386 = G__22432;
count__22034_22387 = G__22433;
i__22035_22388 = G__22434;
continue;
}
} else {
var temp__5804__auto___22435__$1 = cljs.core.seq(seq__22029_22385);
if(temp__5804__auto___22435__$1){
var seq__22029_22436__$1 = temp__5804__auto___22435__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22029_22436__$1)){
var c__5525__auto___22437 = cljs.core.chunk_first(seq__22029_22436__$1);
var G__22438 = cljs.core.chunk_rest(seq__22029_22436__$1);
var G__22439 = c__5525__auto___22437;
var G__22440 = cljs.core.count(c__5525__auto___22437);
var G__22441 = (0);
seq__22029_22385 = G__22438;
chunk__22033_22386 = G__22439;
count__22034_22387 = G__22440;
i__22035_22388 = G__22441;
continue;
} else {
var node_22442 = cljs.core.first(seq__22029_22436__$1);
if(cljs.core.not(node_22442.shadow$old)){
var path_match_22443 = shadow.cljs.devtools.client.browser.match_paths(node_22442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22443)){
var new_link_22444 = (function (){var G__22109 = node_22442.cloneNode(true);
G__22109.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22443),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22109;
})();
(node_22442.shadow$old = true);

(new_link_22444.onload = ((function (seq__22029_22385,chunk__22033_22386,count__22034_22387,i__22035_22388,seq__21776,chunk__21778,count__21779,i__21780,new_link_22444,path_match_22443,node_22442,seq__22029_22436__$1,temp__5804__auto___22435__$1,path,seq__21776__$1,temp__5804__auto__,map__21774,map__21774__$1,msg,updates,reload_info){
return (function (e){
var seq__22112_22445 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22114_22446 = null;
var count__22115_22447 = (0);
var i__22116_22448 = (0);
while(true){
if((i__22116_22448 < count__22115_22447)){
var map__22137_22449 = chunk__22114_22446.cljs$core$IIndexed$_nth$arity$2(null, i__22116_22448);
var map__22137_22450__$1 = cljs.core.__destructure_map(map__22137_22449);
var task_22451 = map__22137_22450__$1;
var fn_str_22452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137_22450__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137_22450__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22454 = goog.getObjectByName(fn_str_22452,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22453)].join(''));

(fn_obj_22454.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22454.cljs$core$IFn$_invoke$arity$2(path,new_link_22444) : fn_obj_22454.call(null, path,new_link_22444));


var G__22455 = seq__22112_22445;
var G__22456 = chunk__22114_22446;
var G__22457 = count__22115_22447;
var G__22458 = (i__22116_22448 + (1));
seq__22112_22445 = G__22455;
chunk__22114_22446 = G__22456;
count__22115_22447 = G__22457;
i__22116_22448 = G__22458;
continue;
} else {
var temp__5804__auto___22459__$2 = cljs.core.seq(seq__22112_22445);
if(temp__5804__auto___22459__$2){
var seq__22112_22460__$1 = temp__5804__auto___22459__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22112_22460__$1)){
var c__5525__auto___22461 = cljs.core.chunk_first(seq__22112_22460__$1);
var G__22462 = cljs.core.chunk_rest(seq__22112_22460__$1);
var G__22463 = c__5525__auto___22461;
var G__22464 = cljs.core.count(c__5525__auto___22461);
var G__22465 = (0);
seq__22112_22445 = G__22462;
chunk__22114_22446 = G__22463;
count__22115_22447 = G__22464;
i__22116_22448 = G__22465;
continue;
} else {
var map__22141_22466 = cljs.core.first(seq__22112_22460__$1);
var map__22141_22467__$1 = cljs.core.__destructure_map(map__22141_22466);
var task_22468 = map__22141_22467__$1;
var fn_str_22469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22141_22467__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22141_22467__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22471 = goog.getObjectByName(fn_str_22469,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22470)].join(''));

(fn_obj_22471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22471.cljs$core$IFn$_invoke$arity$2(path,new_link_22444) : fn_obj_22471.call(null, path,new_link_22444));


var G__22472 = cljs.core.next(seq__22112_22460__$1);
var G__22473 = null;
var G__22474 = (0);
var G__22475 = (0);
seq__22112_22445 = G__22472;
chunk__22114_22446 = G__22473;
count__22115_22447 = G__22474;
i__22116_22448 = G__22475;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22442);
});})(seq__22029_22385,chunk__22033_22386,count__22034_22387,i__22035_22388,seq__21776,chunk__21778,count__21779,i__21780,new_link_22444,path_match_22443,node_22442,seq__22029_22436__$1,temp__5804__auto___22435__$1,path,seq__21776__$1,temp__5804__auto__,map__21774,map__21774__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22443], 0));

goog.dom.insertSiblingAfter(new_link_22444,node_22442);


var G__22476 = cljs.core.next(seq__22029_22436__$1);
var G__22477 = null;
var G__22478 = (0);
var G__22479 = (0);
seq__22029_22385 = G__22476;
chunk__22033_22386 = G__22477;
count__22034_22387 = G__22478;
i__22035_22388 = G__22479;
continue;
} else {
var G__22480 = cljs.core.next(seq__22029_22436__$1);
var G__22481 = null;
var G__22482 = (0);
var G__22483 = (0);
seq__22029_22385 = G__22480;
chunk__22033_22386 = G__22481;
count__22034_22387 = G__22482;
i__22035_22388 = G__22483;
continue;
}
} else {
var G__22484 = cljs.core.next(seq__22029_22436__$1);
var G__22485 = null;
var G__22486 = (0);
var G__22487 = (0);
seq__22029_22385 = G__22484;
chunk__22033_22386 = G__22485;
count__22034_22387 = G__22486;
i__22035_22388 = G__22487;
continue;
}
}
} else {
}
}
break;
}


var G__22488 = cljs.core.next(seq__21776__$1);
var G__22489 = null;
var G__22490 = (0);
var G__22491 = (0);
seq__21776 = G__22488;
chunk__21778 = G__22489;
count__21779 = G__22490;
i__21780 = G__22491;
continue;
} else {
var G__22492 = cljs.core.next(seq__21776__$1);
var G__22493 = null;
var G__22494 = (0);
var G__22495 = (0);
seq__21776 = G__22492;
chunk__21778 = G__22493;
count__21779 = G__22494;
i__21780 = G__22495;
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
try{var G__22147 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22147) : success.call(null, G__22147));
}catch (e22146){var e = e22146;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22148,success,fail){
var map__22149 = p__22148;
var map__22149__$1 = cljs.core.__destructure_map(map__22149);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22149__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22151 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22151) : success.call(null, G__22151));
}catch (e22150){var e = e22150;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22152,done,error){
var map__22153 = p__22152;
var map__22153__$1 = cljs.core.__destructure_map(map__22153);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22157,done,error){
var map__22158 = p__22157;
var map__22158__$1 = cljs.core.__destructure_map(map__22158);
var msg = map__22158__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22158__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22159){
var map__22160 = p__22159;
var map__22160__$1 = cljs.core.__destructure_map(map__22160);
var src = map__22160__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22160__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22161 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22161) : done.call(null, G__22161));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22162){
var map__22163 = p__22162;
var map__22163__$1 = cljs.core.__destructure_map(map__22163);
var msg__$1 = map__22163__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e22164){var ex = e22164;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22165){
var map__22166 = p__22165;
var map__22166__$1 = cljs.core.__destructure_map(map__22166);
var env = map__22166__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22166__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22170){
var map__22171 = p__22170;
var map__22171__$1 = cljs.core.__destructure_map(map__22171);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22171__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22171__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__22176){
var map__22177 = p__22176;
var map__22177__$1 = cljs.core.__destructure_map(map__22177);
var svc = map__22177__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22177__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
