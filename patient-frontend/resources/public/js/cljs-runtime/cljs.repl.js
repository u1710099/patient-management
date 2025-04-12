goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18819){
var map__18820 = p__18819;
var map__18820__$1 = cljs.core.__destructure_map(map__18820);
var m = map__18820__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18820__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18820__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18829_19268 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18830_19269 = null;
var count__18831_19270 = (0);
var i__18832_19271 = (0);
while(true){
if((i__18832_19271 < count__18831_19270)){
var f_19272 = chunk__18830_19269.cljs$core$IIndexed$_nth$arity$2(null,i__18832_19271);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19272], 0));


var G__19274 = seq__18829_19268;
var G__19275 = chunk__18830_19269;
var G__19276 = count__18831_19270;
var G__19277 = (i__18832_19271 + (1));
seq__18829_19268 = G__19274;
chunk__18830_19269 = G__19275;
count__18831_19270 = G__19276;
i__18832_19271 = G__19277;
continue;
} else {
var temp__5804__auto___19278 = cljs.core.seq(seq__18829_19268);
if(temp__5804__auto___19278){
var seq__18829_19279__$1 = temp__5804__auto___19278;
if(cljs.core.chunked_seq_QMARK_(seq__18829_19279__$1)){
var c__5525__auto___19280 = cljs.core.chunk_first(seq__18829_19279__$1);
var G__19281 = cljs.core.chunk_rest(seq__18829_19279__$1);
var G__19282 = c__5525__auto___19280;
var G__19283 = cljs.core.count(c__5525__auto___19280);
var G__19284 = (0);
seq__18829_19268 = G__19281;
chunk__18830_19269 = G__19282;
count__18831_19270 = G__19283;
i__18832_19271 = G__19284;
continue;
} else {
var f_19287 = cljs.core.first(seq__18829_19279__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19287], 0));


var G__19291 = cljs.core.next(seq__18829_19279__$1);
var G__19292 = null;
var G__19293 = (0);
var G__19294 = (0);
seq__18829_19268 = G__19291;
chunk__18830_19269 = G__19292;
count__18831_19270 = G__19293;
i__18832_19271 = G__19294;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19296 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19296], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19296)))?cljs.core.second(arglists_19296):arglists_19296)], 0));
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
var seq__18868_19304 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18869_19305 = null;
var count__18870_19306 = (0);
var i__18871_19307 = (0);
while(true){
if((i__18871_19307 < count__18870_19306)){
var vec__18945_19308 = chunk__18869_19305.cljs$core$IIndexed$_nth$arity$2(null,i__18871_19307);
var name_19309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945_19308,(0),null);
var map__18949_19310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945_19308,(1),null);
var map__18949_19311__$1 = cljs.core.__destructure_map(map__18949_19310);
var doc_19312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18949_19311__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18949_19311__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19309], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19313], 0));

if(cljs.core.truth_(doc_19312)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19312], 0));
} else {
}


var G__19318 = seq__18868_19304;
var G__19319 = chunk__18869_19305;
var G__19320 = count__18870_19306;
var G__19321 = (i__18871_19307 + (1));
seq__18868_19304 = G__19318;
chunk__18869_19305 = G__19319;
count__18870_19306 = G__19320;
i__18871_19307 = G__19321;
continue;
} else {
var temp__5804__auto___19326 = cljs.core.seq(seq__18868_19304);
if(temp__5804__auto___19326){
var seq__18868_19327__$1 = temp__5804__auto___19326;
if(cljs.core.chunked_seq_QMARK_(seq__18868_19327__$1)){
var c__5525__auto___19328 = cljs.core.chunk_first(seq__18868_19327__$1);
var G__19329 = cljs.core.chunk_rest(seq__18868_19327__$1);
var G__19330 = c__5525__auto___19328;
var G__19331 = cljs.core.count(c__5525__auto___19328);
var G__19332 = (0);
seq__18868_19304 = G__19329;
chunk__18869_19305 = G__19330;
count__18870_19306 = G__19331;
i__18871_19307 = G__19332;
continue;
} else {
var vec__19010_19334 = cljs.core.first(seq__18868_19327__$1);
var name_19335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19010_19334,(0),null);
var map__19013_19336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19010_19334,(1),null);
var map__19013_19337__$1 = cljs.core.__destructure_map(map__19013_19336);
var doc_19338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19013_19337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19013_19337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19335], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19339], 0));

if(cljs.core.truth_(doc_19338)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19338], 0));
} else {
}


var G__19343 = cljs.core.next(seq__18868_19327__$1);
var G__19344 = null;
var G__19345 = (0);
var G__19346 = (0);
seq__18868_19304 = G__19343;
chunk__18869_19305 = G__19344;
count__18870_19306 = G__19345;
i__18871_19307 = G__19346;
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

var seq__19031 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19032 = null;
var count__19033 = (0);
var i__19034 = (0);
while(true){
if((i__19034 < count__19033)){
var role = chunk__19032.cljs$core$IIndexed$_nth$arity$2(null,i__19034);
var temp__5804__auto___19352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19352__$1)){
var spec_19354 = temp__5804__auto___19352__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19354)], 0));
} else {
}


var G__19356 = seq__19031;
var G__19357 = chunk__19032;
var G__19358 = count__19033;
var G__19359 = (i__19034 + (1));
seq__19031 = G__19356;
chunk__19032 = G__19357;
count__19033 = G__19358;
i__19034 = G__19359;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19031);
if(temp__5804__auto____$1){
var seq__19031__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19031__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19031__$1);
var G__19362 = cljs.core.chunk_rest(seq__19031__$1);
var G__19363 = c__5525__auto__;
var G__19364 = cljs.core.count(c__5525__auto__);
var G__19365 = (0);
seq__19031 = G__19362;
chunk__19032 = G__19363;
count__19033 = G__19364;
i__19034 = G__19365;
continue;
} else {
var role = cljs.core.first(seq__19031__$1);
var temp__5804__auto___19366__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19366__$2)){
var spec_19367 = temp__5804__auto___19366__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19367)], 0));
} else {
}


var G__19369 = cljs.core.next(seq__19031__$1);
var G__19370 = null;
var G__19371 = (0);
var G__19372 = (0);
seq__19031 = G__19369;
chunk__19032 = G__19370;
count__19033 = G__19371;
i__19034 = G__19372;
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
var map__19106 = datafied_throwable;
var map__19106__$1 = cljs.core.__destructure_map(map__19106);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19106__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19106__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19106__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19107 = cljs.core.last(via);
var map__19107__$1 = cljs.core.__destructure_map(map__19107);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19107__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19107__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19107__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19108 = data;
var map__19108__$1 = cljs.core.__destructure_map(map__19108);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19108__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19108__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19108__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19109 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19109__$1 = cljs.core.__destructure_map(map__19109);
var top_data = map__19109__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19119 = phase;
var G__19119__$1 = (((G__19119 instanceof cljs.core.Keyword))?G__19119.fqn:null);
switch (G__19119__$1) {
case "read-source":
var map__19120 = data;
var map__19120__$1 = cljs.core.__destructure_map(map__19120);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19121 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19121__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19121,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19121);
var G__19121__$2 = (cljs.core.truth_((function (){var fexpr__19127 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19127.cljs$core$IFn$_invoke$arity$1 ? fexpr__19127.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19127.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19121__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19121__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19121__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19121__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19129 = top_data;
var G__19129__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19129);
var G__19129__$2 = (cljs.core.truth_((function (){var fexpr__19130 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19130.cljs$core$IFn$_invoke$arity$1 ? fexpr__19130.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19130.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19129__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19129__$1);
var G__19129__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19129__$2);
var G__19129__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19129__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19129__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19132 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19132,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19132,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19132,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19132,(3),null);
var G__19139 = top_data;
var G__19139__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19139);
var G__19139__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19139__$1);
var G__19139__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19139__$2);
var G__19139__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19139__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19139__$4;
}

break;
case "execution":
var vec__19148 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19102_SHARP_){
var or__5002__auto__ = (p1__19102_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19151 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19151.cljs$core$IFn$_invoke$arity$1 ? fexpr__19151.cljs$core$IFn$_invoke$arity$1(p1__19102_SHARP_) : fexpr__19151.call(null,p1__19102_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19156 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19156__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19156);
var G__19156__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19156__$1);
var G__19156__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19156__$2);
var G__19156__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19156__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19156__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19119__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19175){
var map__19176 = p__19175;
var map__19176__$1 = cljs.core.__destructure_map(map__19176);
var triage_data = map__19176__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19186 = phase;
var G__19186__$1 = (((G__19186 instanceof cljs.core.Keyword))?G__19186.fqn:null);
switch (G__19186__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19190 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19192 = loc;
var G__19193 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19199_19440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19200_19441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19202_19442 = true;
var _STAR_print_fn_STAR__temp_val__19203_19443 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19202_19442);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19203_19443);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19173_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19173_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19200_19441);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19199_19440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19190,G__19191,G__19192,G__19193) : format.call(null,G__19190,G__19191,G__19192,G__19193));

break;
case "macroexpansion":
var G__19213 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19214 = cause_type;
var G__19215 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19216 = loc;
var G__19217 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19213,G__19214,G__19215,G__19216,G__19217) : format.call(null,G__19213,G__19214,G__19215,G__19216,G__19217));

break;
case "compile-syntax-check":
var G__19218 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19219 = cause_type;
var G__19220 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19221 = loc;
var G__19222 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19218,G__19219,G__19220,G__19221,G__19222) : format.call(null,G__19218,G__19219,G__19220,G__19221,G__19222));

break;
case "compilation":
var G__19225 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19226 = cause_type;
var G__19227 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19228 = loc;
var G__19229 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19225,G__19226,G__19227,G__19228,G__19229) : format.call(null,G__19225,G__19226,G__19227,G__19228,G__19229));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19239 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19240 = symbol;
var G__19241 = loc;
var G__19242 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19243_19455 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19244_19456 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19245_19457 = true;
var _STAR_print_fn_STAR__temp_val__19246_19458 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19245_19457);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19246_19458);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19174_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19174_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19244_19456);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19243_19455);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19239,G__19240,G__19241,G__19242) : format.call(null,G__19239,G__19240,G__19241,G__19242));
} else {
var G__19252 = "Execution error%s at %s(%s).\n%s\n";
var G__19253 = cause_type;
var G__19254 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19255 = loc;
var G__19256 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19252,G__19253,G__19254,G__19255,G__19256) : format.call(null,G__19252,G__19253,G__19254,G__19255,G__19256));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19186__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
