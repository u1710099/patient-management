goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18883){
var map__18887 = p__18883;
var map__18887__$1 = cljs.core.__destructure_map(map__18887);
var m = map__18887__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18887__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18887__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18896_19328 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18897_19329 = null;
var count__18898_19330 = (0);
var i__18899_19331 = (0);
while(true){
if((i__18899_19331 < count__18898_19330)){
var f_19332 = chunk__18897_19329.cljs$core$IIndexed$_nth$arity$2(null, i__18899_19331);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19332], 0));


var G__19333 = seq__18896_19328;
var G__19334 = chunk__18897_19329;
var G__19335 = count__18898_19330;
var G__19336 = (i__18899_19331 + (1));
seq__18896_19328 = G__19333;
chunk__18897_19329 = G__19334;
count__18898_19330 = G__19335;
i__18899_19331 = G__19336;
continue;
} else {
var temp__5804__auto___19337 = cljs.core.seq(seq__18896_19328);
if(temp__5804__auto___19337){
var seq__18896_19338__$1 = temp__5804__auto___19337;
if(cljs.core.chunked_seq_QMARK_(seq__18896_19338__$1)){
var c__5525__auto___19339 = cljs.core.chunk_first(seq__18896_19338__$1);
var G__19340 = cljs.core.chunk_rest(seq__18896_19338__$1);
var G__19341 = c__5525__auto___19339;
var G__19342 = cljs.core.count(c__5525__auto___19339);
var G__19343 = (0);
seq__18896_19328 = G__19340;
chunk__18897_19329 = G__19341;
count__18898_19330 = G__19342;
i__18899_19331 = G__19343;
continue;
} else {
var f_19344 = cljs.core.first(seq__18896_19338__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19344], 0));


var G__19345 = cljs.core.next(seq__18896_19338__$1);
var G__19346 = null;
var G__19347 = (0);
var G__19348 = (0);
seq__18896_19328 = G__19345;
chunk__18897_19329 = G__19346;
count__18898_19330 = G__19347;
i__18899_19331 = G__19348;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19349 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19349], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19349)))?cljs.core.second(arglists_19349):arglists_19349)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18923_19361 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18924_19362 = null;
var count__18925_19363 = (0);
var i__18926_19364 = (0);
while(true){
if((i__18926_19364 < count__18925_19363)){
var vec__18953_19365 = chunk__18924_19362.cljs$core$IIndexed$_nth$arity$2(null, i__18926_19364);
var name_19366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18953_19365,(0),null);
var map__18956_19367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18953_19365,(1),null);
var map__18956_19368__$1 = cljs.core.__destructure_map(map__18956_19367);
var doc_19369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18956_19368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18956_19368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19366], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19370], 0));

if(cljs.core.truth_(doc_19369)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19369], 0));
} else {
}


var G__19374 = seq__18923_19361;
var G__19375 = chunk__18924_19362;
var G__19376 = count__18925_19363;
var G__19377 = (i__18926_19364 + (1));
seq__18923_19361 = G__19374;
chunk__18924_19362 = G__19375;
count__18925_19363 = G__19376;
i__18926_19364 = G__19377;
continue;
} else {
var temp__5804__auto___19378 = cljs.core.seq(seq__18923_19361);
if(temp__5804__auto___19378){
var seq__18923_19379__$1 = temp__5804__auto___19378;
if(cljs.core.chunked_seq_QMARK_(seq__18923_19379__$1)){
var c__5525__auto___19380 = cljs.core.chunk_first(seq__18923_19379__$1);
var G__19381 = cljs.core.chunk_rest(seq__18923_19379__$1);
var G__19382 = c__5525__auto___19380;
var G__19383 = cljs.core.count(c__5525__auto___19380);
var G__19384 = (0);
seq__18923_19361 = G__19381;
chunk__18924_19362 = G__19382;
count__18925_19363 = G__19383;
i__18926_19364 = G__19384;
continue;
} else {
var vec__18968_19386 = cljs.core.first(seq__18923_19379__$1);
var name_19387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18968_19386,(0),null);
var map__18971_19388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18968_19386,(1),null);
var map__18971_19389__$1 = cljs.core.__destructure_map(map__18971_19388);
var doc_19390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18971_19389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18971_19389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19387], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19391], 0));

if(cljs.core.truth_(doc_19390)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19390], 0));
} else {
}


var G__19393 = cljs.core.next(seq__18923_19379__$1);
var G__19394 = null;
var G__19395 = (0);
var G__19396 = (0);
seq__18923_19361 = G__19393;
chunk__18924_19362 = G__19394;
count__18925_19363 = G__19395;
i__18926_19364 = G__19396;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18979 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18981 = null;
var count__18982 = (0);
var i__18983 = (0);
while(true){
if((i__18983 < count__18982)){
var role = chunk__18981.cljs$core$IIndexed$_nth$arity$2(null, i__18983);
var temp__5804__auto___19399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19399__$1)){
var spec_19401 = temp__5804__auto___19399__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19401)], 0));
} else {
}


var G__19404 = seq__18979;
var G__19405 = chunk__18981;
var G__19406 = count__18982;
var G__19407 = (i__18983 + (1));
seq__18979 = G__19404;
chunk__18981 = G__19405;
count__18982 = G__19406;
i__18983 = G__19407;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18979);
if(temp__5804__auto____$1){
var seq__18979__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18979__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18979__$1);
var G__19409 = cljs.core.chunk_rest(seq__18979__$1);
var G__19410 = c__5525__auto__;
var G__19411 = cljs.core.count(c__5525__auto__);
var G__19412 = (0);
seq__18979 = G__19409;
chunk__18981 = G__19410;
count__18982 = G__19411;
i__18983 = G__19412;
continue;
} else {
var role = cljs.core.first(seq__18979__$1);
var temp__5804__auto___19416__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19416__$2)){
var spec_19417 = temp__5804__auto___19416__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19417)], 0));
} else {
}


var G__19418 = cljs.core.next(seq__18979__$1);
var G__19419 = null;
var G__19420 = (0);
var G__19421 = (0);
seq__18979 = G__19418;
chunk__18981 = G__19419;
count__18982 = G__19420;
i__18983 = G__19421;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19096 = datafied_throwable;
var map__19096__$1 = cljs.core.__destructure_map(map__19096);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19096__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19096__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19096__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19097 = cljs.core.last(via);
var map__19097__$1 = cljs.core.__destructure_map(map__19097);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19098 = data;
var map__19098__$1 = cljs.core.__destructure_map(map__19098);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19098__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19098__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19098__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19099 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19099__$1 = cljs.core.__destructure_map(map__19099);
var top_data = map__19099__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19117 = phase;
var G__19117__$1 = (((G__19117 instanceof cljs.core.Keyword))?G__19117.fqn:null);
switch (G__19117__$1) {
case "read-source":
var map__19120 = data;
var map__19120__$1 = cljs.core.__destructure_map(map__19120);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19125 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19125__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19125,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19125);
var G__19125__$2 = (cljs.core.truth_((function (){var fexpr__19135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19135.cljs$core$IFn$_invoke$arity$1 ? fexpr__19135.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19135.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19125__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19125__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19125__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19140 = top_data;
var G__19140__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19140,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19140);
var G__19140__$2 = (cljs.core.truth_((function (){var fexpr__19146 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19146.cljs$core$IFn$_invoke$arity$1 ? fexpr__19146.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19146.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19140__$1);
var G__19140__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19140__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19140__$2);
var G__19140__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19140__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19140__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19140__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19140__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19156 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19156,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19156,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19156,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19156,(3),null);
var G__19166 = top_data;
var G__19166__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19166);
var G__19166__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19166__$1);
var G__19166__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19166__$2);
var G__19166__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19166__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19166__$4;
}

break;
case "execution":
var vec__19173 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19067_SHARP_){
var or__5002__auto__ = (p1__19067_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19178.cljs$core$IFn$_invoke$arity$1 ? fexpr__19178.cljs$core$IFn$_invoke$arity$1(p1__19067_SHARP_) : fexpr__19178.call(null, p1__19067_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19183 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19183__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19183,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19183);
var G__19183__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19183__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19183__$1);
var G__19183__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19183__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19183__$2);
var G__19183__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19183__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19183__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19183__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19183__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19117__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19207){
var map__19208 = p__19207;
var map__19208__$1 = cljs.core.__destructure_map(map__19208);
var triage_data = map__19208__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19235 = phase;
var G__19235__$1 = (((G__19235 instanceof cljs.core.Keyword))?G__19235.fqn:null);
switch (G__19235__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19238 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19239 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19240 = loc;
var G__19241 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19245_19495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19246_19496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19247_19497 = true;
var _STAR_print_fn_STAR__temp_val__19248_19498 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19247_19497);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19248_19498);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19196_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19196_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19246_19496);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19245_19495);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19238,G__19239,G__19240,G__19241) : format.call(null, G__19238,G__19239,G__19240,G__19241));

break;
case "macroexpansion":
var G__19265 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19266 = cause_type;
var G__19267 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19268 = loc;
var G__19269 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19265,G__19266,G__19267,G__19268,G__19269) : format.call(null, G__19265,G__19266,G__19267,G__19268,G__19269));

break;
case "compile-syntax-check":
var G__19272 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19273 = cause_type;
var G__19275 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19276 = loc;
var G__19277 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19272,G__19273,G__19275,G__19276,G__19277) : format.call(null, G__19272,G__19273,G__19275,G__19276,G__19277));

break;
case "compilation":
var G__19278 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19279 = cause_type;
var G__19280 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19281 = loc;
var G__19282 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19278,G__19279,G__19280,G__19281,G__19282) : format.call(null, G__19278,G__19279,G__19280,G__19281,G__19282));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19284 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19285 = symbol;
var G__19286 = loc;
var G__19287 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19289_19518 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19290_19519 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19291_19520 = true;
var _STAR_print_fn_STAR__temp_val__19292_19521 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19291_19520);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19292_19521);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19200_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19200_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19290_19519);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19289_19518);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19284,G__19285,G__19286,G__19287) : format.call(null, G__19284,G__19285,G__19286,G__19287));
} else {
var G__19299 = "Execution error%s at %s(%s).\n%s\n";
var G__19300 = cause_type;
var G__19301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19302 = loc;
var G__19303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19299,G__19300,G__19301,G__19302,G__19303) : format.call(null, G__19299,G__19300,G__19301,G__19302,G__19303));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19235__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
