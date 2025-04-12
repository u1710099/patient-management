goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__17364__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17366__i = 0, G__17366__a = new Array(arguments.length -  0);
while (G__17366__i < G__17366__a.length) {G__17366__a[G__17366__i] = arguments[G__17366__i + 0]; ++G__17366__i;}
  args = new cljs.core.IndexedSeq(G__17366__a,0,null);
} 
return G__17364__delegate.call(this,args);};
G__17364.cljs$lang$maxFixedArity = 0;
G__17364.cljs$lang$applyTo = (function (arglist__17367){
var args = cljs.core.seq(arglist__17367);
return G__17364__delegate(args);
});
G__17364.cljs$core$IFn$_invoke$arity$variadic = G__17364__delegate;
return G__17364;
})()
);

(o.error = (function() { 
var G__17368__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17370__i = 0, G__17370__a = new Array(arguments.length -  0);
while (G__17370__i < G__17370__a.length) {G__17370__a[G__17370__i] = arguments[G__17370__i + 0]; ++G__17370__i;}
  args = new cljs.core.IndexedSeq(G__17370__a,0,null);
} 
return G__17368__delegate.call(this,args);};
G__17368.cljs$lang$maxFixedArity = 0;
G__17368.cljs$lang$applyTo = (function (arglist__17372){
var args = cljs.core.seq(arglist__17372);
return G__17368__delegate(args);
});
G__17368.cljs$core$IFn$_invoke$arity$variadic = G__17368__delegate;
return G__17368;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
