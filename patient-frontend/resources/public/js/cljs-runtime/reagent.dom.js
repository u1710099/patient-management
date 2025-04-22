goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22782 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22783 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22783);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__22784 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22785 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22785);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22784);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22782);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22790 = arguments.length;
switch (G__22790) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22792 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22792,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22792,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22798_22819 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22799_22820 = null;
var count__22800_22821 = (0);
var i__22801_22822 = (0);
while(true){
if((i__22801_22822 < count__22800_22821)){
var vec__22809_22823 = chunk__22799_22820.cljs$core$IIndexed$_nth$arity$2(null,i__22801_22822);
var container_22824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22809_22823,(0),null);
var comp_22825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22809_22823,(1),null);
reagent.dom.re_render_component(comp_22825,container_22824);


var G__22826 = seq__22798_22819;
var G__22827 = chunk__22799_22820;
var G__22828 = count__22800_22821;
var G__22829 = (i__22801_22822 + (1));
seq__22798_22819 = G__22826;
chunk__22799_22820 = G__22827;
count__22800_22821 = G__22828;
i__22801_22822 = G__22829;
continue;
} else {
var temp__5804__auto___22830 = cljs.core.seq(seq__22798_22819);
if(temp__5804__auto___22830){
var seq__22798_22831__$1 = temp__5804__auto___22830;
if(cljs.core.chunked_seq_QMARK_(seq__22798_22831__$1)){
var c__5525__auto___22833 = cljs.core.chunk_first(seq__22798_22831__$1);
var G__22834 = cljs.core.chunk_rest(seq__22798_22831__$1);
var G__22835 = c__5525__auto___22833;
var G__22836 = cljs.core.count(c__5525__auto___22833);
var G__22837 = (0);
seq__22798_22819 = G__22834;
chunk__22799_22820 = G__22835;
count__22800_22821 = G__22836;
i__22801_22822 = G__22837;
continue;
} else {
var vec__22812_22839 = cljs.core.first(seq__22798_22831__$1);
var container_22840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812_22839,(0),null);
var comp_22841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812_22839,(1),null);
reagent.dom.re_render_component(comp_22841,container_22840);


var G__22842 = cljs.core.next(seq__22798_22831__$1);
var G__22843 = null;
var G__22844 = (0);
var G__22845 = (0);
seq__22798_22819 = G__22842;
chunk__22799_22820 = G__22843;
count__22800_22821 = G__22844;
i__22801_22822 = G__22845;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
