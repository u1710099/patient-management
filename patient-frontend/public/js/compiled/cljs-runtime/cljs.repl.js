goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18902){
var map__18904 = p__18902;
var map__18904__$1 = cljs.core.__destructure_map(map__18904);
var m = map__18904__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18904__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18922_19380 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18923_19381 = null;
var count__18924_19382 = (0);
var i__18925_19383 = (0);
while(true){
if((i__18925_19383 < count__18924_19382)){
var f_19384 = chunk__18923_19381.cljs$core$IIndexed$_nth$arity$2(null,i__18925_19383);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19384], 0));


var G__19385 = seq__18922_19380;
var G__19386 = chunk__18923_19381;
var G__19387 = count__18924_19382;
var G__19388 = (i__18925_19383 + (1));
seq__18922_19380 = G__19385;
chunk__18923_19381 = G__19386;
count__18924_19382 = G__19387;
i__18925_19383 = G__19388;
continue;
} else {
var temp__5804__auto___19389 = cljs.core.seq(seq__18922_19380);
if(temp__5804__auto___19389){
var seq__18922_19390__$1 = temp__5804__auto___19389;
if(cljs.core.chunked_seq_QMARK_(seq__18922_19390__$1)){
var c__5525__auto___19391 = cljs.core.chunk_first(seq__18922_19390__$1);
var G__19392 = cljs.core.chunk_rest(seq__18922_19390__$1);
var G__19393 = c__5525__auto___19391;
var G__19394 = cljs.core.count(c__5525__auto___19391);
var G__19395 = (0);
seq__18922_19380 = G__19392;
chunk__18923_19381 = G__19393;
count__18924_19382 = G__19394;
i__18925_19383 = G__19395;
continue;
} else {
var f_19396 = cljs.core.first(seq__18922_19390__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19396], 0));


var G__19398 = cljs.core.next(seq__18922_19390__$1);
var G__19399 = null;
var G__19400 = (0);
var G__19401 = (0);
seq__18922_19380 = G__19398;
chunk__18923_19381 = G__19399;
count__18924_19382 = G__19400;
i__18925_19383 = G__19401;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19402 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19402], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19402)))?cljs.core.second(arglists_19402):arglists_19402)], 0));
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
var seq__18950_19417 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18951_19418 = null;
var count__18952_19419 = (0);
var i__18953_19420 = (0);
while(true){
if((i__18953_19420 < count__18952_19419)){
var vec__19021_19427 = chunk__18951_19418.cljs$core$IIndexed$_nth$arity$2(null,i__18953_19420);
var name_19428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19021_19427,(0),null);
var map__19028_19429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19021_19427,(1),null);
var map__19028_19430__$1 = cljs.core.__destructure_map(map__19028_19429);
var doc_19431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19028_19430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19028_19430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19428], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19432], 0));

if(cljs.core.truth_(doc_19431)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19431], 0));
} else {
}


var G__19434 = seq__18950_19417;
var G__19435 = chunk__18951_19418;
var G__19436 = count__18952_19419;
var G__19437 = (i__18953_19420 + (1));
seq__18950_19417 = G__19434;
chunk__18951_19418 = G__19435;
count__18952_19419 = G__19436;
i__18953_19420 = G__19437;
continue;
} else {
var temp__5804__auto___19439 = cljs.core.seq(seq__18950_19417);
if(temp__5804__auto___19439){
var seq__18950_19440__$1 = temp__5804__auto___19439;
if(cljs.core.chunked_seq_QMARK_(seq__18950_19440__$1)){
var c__5525__auto___19441 = cljs.core.chunk_first(seq__18950_19440__$1);
var G__19442 = cljs.core.chunk_rest(seq__18950_19440__$1);
var G__19443 = c__5525__auto___19441;
var G__19444 = cljs.core.count(c__5525__auto___19441);
var G__19445 = (0);
seq__18950_19417 = G__19442;
chunk__18951_19418 = G__19443;
count__18952_19419 = G__19444;
i__18953_19420 = G__19445;
continue;
} else {
var vec__19062_19450 = cljs.core.first(seq__18950_19440__$1);
var name_19451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19062_19450,(0),null);
var map__19065_19452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19062_19450,(1),null);
var map__19065_19453__$1 = cljs.core.__destructure_map(map__19065_19452);
var doc_19454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065_19453__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065_19453__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19451], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19455], 0));

if(cljs.core.truth_(doc_19454)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19454], 0));
} else {
}


var G__19460 = cljs.core.next(seq__18950_19440__$1);
var G__19461 = null;
var G__19462 = (0);
var G__19463 = (0);
seq__18950_19417 = G__19460;
chunk__18951_19418 = G__19461;
count__18952_19419 = G__19462;
i__18953_19420 = G__19463;
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

var seq__19102 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19103 = null;
var count__19104 = (0);
var i__19105 = (0);
while(true){
if((i__19105 < count__19104)){
var role = chunk__19103.cljs$core$IIndexed$_nth$arity$2(null,i__19105);
var temp__5804__auto___19465__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19465__$1)){
var spec_19466 = temp__5804__auto___19465__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19466)], 0));
} else {
}


var G__19468 = seq__19102;
var G__19469 = chunk__19103;
var G__19470 = count__19104;
var G__19471 = (i__19105 + (1));
seq__19102 = G__19468;
chunk__19103 = G__19469;
count__19104 = G__19470;
i__19105 = G__19471;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19102);
if(temp__5804__auto____$1){
var seq__19102__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19102__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19102__$1);
var G__19473 = cljs.core.chunk_rest(seq__19102__$1);
var G__19474 = c__5525__auto__;
var G__19475 = cljs.core.count(c__5525__auto__);
var G__19476 = (0);
seq__19102 = G__19473;
chunk__19103 = G__19474;
count__19104 = G__19475;
i__19105 = G__19476;
continue;
} else {
var role = cljs.core.first(seq__19102__$1);
var temp__5804__auto___19479__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19479__$2)){
var spec_19483 = temp__5804__auto___19479__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19483)], 0));
} else {
}


var G__19486 = cljs.core.next(seq__19102__$1);
var G__19487 = null;
var G__19488 = (0);
var G__19489 = (0);
seq__19102 = G__19486;
chunk__19103 = G__19487;
count__19104 = G__19488;
i__19105 = G__19489;
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
var map__19161 = datafied_throwable;
var map__19161__$1 = cljs.core.__destructure_map(map__19161);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19161__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19161__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19161__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19163 = cljs.core.last(via);
var map__19163__$1 = cljs.core.__destructure_map(map__19163);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19164 = data;
var map__19164__$1 = cljs.core.__destructure_map(map__19164);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19164__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19164__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19164__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19165 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19165__$1 = cljs.core.__destructure_map(map__19165);
var top_data = map__19165__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19182 = phase;
var G__19182__$1 = (((G__19182 instanceof cljs.core.Keyword))?G__19182.fqn:null);
switch (G__19182__$1) {
case "read-source":
var map__19187 = data;
var map__19187__$1 = cljs.core.__destructure_map(map__19187);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19187__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19187__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19195 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19195__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19195,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19195);
var G__19195__$2 = (cljs.core.truth_((function (){var fexpr__19197 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19197.cljs$core$IFn$_invoke$arity$1 ? fexpr__19197.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19197.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19195__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19195__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19195__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19195__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19201 = top_data;
var G__19201__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19201,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19201);
var G__19201__$2 = (cljs.core.truth_((function (){var fexpr__19207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19207.cljs$core$IFn$_invoke$arity$1 ? fexpr__19207.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19207.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19201__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19201__$1);
var G__19201__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19201__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19201__$2);
var G__19201__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19201__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19201__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19201__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19201__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19219 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19219,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19219,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19219,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19219,(3),null);
var G__19226 = top_data;
var G__19226__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19226,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19226);
var G__19226__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19226__$1);
var G__19226__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19226__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19226__$2);
var G__19226__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19226__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19226__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19226__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19226__$4;
}

break;
case "execution":
var vec__19242 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19157_SHARP_){
var or__5002__auto__ = (p1__19157_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19246.cljs$core$IFn$_invoke$arity$1 ? fexpr__19246.cljs$core$IFn$_invoke$arity$1(p1__19157_SHARP_) : fexpr__19246.call(null,p1__19157_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19248 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19248__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19248,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19248);
var G__19248__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19248__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19248__$1);
var G__19248__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19248__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19248__$2);
var G__19248__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19248__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19248__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19248__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19248__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19182__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19276){
var map__19278 = p__19276;
var map__19278__$1 = cljs.core.__destructure_map(map__19278);
var triage_data = map__19278__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19278__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19292 = phase;
var G__19292__$1 = (((G__19292 instanceof cljs.core.Keyword))?G__19292.fqn:null);
switch (G__19292__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19293 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19295 = loc;
var G__19296 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19302_19571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19303_19572 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19304_19573 = true;
var _STAR_print_fn_STAR__temp_val__19305_19574 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19304_19573);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19305_19574);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19265_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19265_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19303_19572);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19302_19571);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19293,G__19294,G__19295,G__19296) : format.call(null,G__19293,G__19294,G__19295,G__19296));

break;
case "macroexpansion":
var G__19314 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19315 = cause_type;
var G__19316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19317 = loc;
var G__19318 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19314,G__19315,G__19316,G__19317,G__19318) : format.call(null,G__19314,G__19315,G__19316,G__19317,G__19318));

break;
case "compile-syntax-check":
var G__19320 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19321 = cause_type;
var G__19322 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19323 = loc;
var G__19324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19320,G__19321,G__19322,G__19323,G__19324) : format.call(null,G__19320,G__19321,G__19322,G__19323,G__19324));

break;
case "compilation":
var G__19325 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19326 = cause_type;
var G__19327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19328 = loc;
var G__19329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19325,G__19326,G__19327,G__19328,G__19329) : format.call(null,G__19325,G__19326,G__19327,G__19328,G__19329));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19334 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19335 = symbol;
var G__19336 = loc;
var G__19337 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19340_19584 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19341_19585 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19342_19586 = true;
var _STAR_print_fn_STAR__temp_val__19343_19587 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19342_19586);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19343_19587);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19268_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19268_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19341_19585);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19340_19584);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19334,G__19335,G__19336,G__19337) : format.call(null,G__19334,G__19335,G__19336,G__19337));
} else {
var G__19347 = "Execution error%s at %s(%s).\n%s\n";
var G__19348 = cause_type;
var G__19349 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19350 = loc;
var G__19351 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19347,G__19348,G__19349,G__19350,G__19351) : format.call(null,G__19347,G__19348,G__19349,G__19350,G__19351));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19292__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
