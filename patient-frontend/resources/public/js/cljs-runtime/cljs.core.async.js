goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14988 = (function (f,blockable,meta14989){
this.f = f;
this.blockable = blockable;
this.meta14989 = meta14989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14990,meta14989__$1){
var self__ = this;
var _14990__$1 = this;
return (new cljs.core.async.t_cljs$core$async14988(self__.f,self__.blockable,meta14989__$1));
}));

(cljs.core.async.t_cljs$core$async14988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14990){
var self__ = this;
var _14990__$1 = this;
return self__.meta14989;
}));

(cljs.core.async.t_cljs$core$async14988.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14989","meta14989",-968596315,null)], null);
}));

(cljs.core.async.t_cljs$core$async14988.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14988");

(cljs.core.async.t_cljs$core$async14988.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14988");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14988.
 */
cljs.core.async.__GT_t_cljs$core$async14988 = (function cljs$core$async$__GT_t_cljs$core$async14988(f,blockable,meta14989){
return (new cljs.core.async.t_cljs$core$async14988(f,blockable,meta14989));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14980 = arguments.length;
switch (G__14980) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14988(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15026 = arguments.length;
switch (G__15026) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15040 = arguments.length;
switch (G__15040) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15052 = arguments.length;
switch (G__15052) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18690 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18690) : fn1.call(null,val_18690));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18690) : fn1.call(null,val_18690));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15069 = arguments.length;
switch (G__15069) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18699 = n;
var x_18700 = (0);
while(true){
if((x_18700 < n__5593__auto___18699)){
(a[x_18700] = x_18700);

var G__18701 = (x_18700 + (1));
x_18700 = G__18701;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15084 = (function (flag,meta15085){
this.flag = flag;
this.meta15085 = meta15085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15086,meta15085__$1){
var self__ = this;
var _15086__$1 = this;
return (new cljs.core.async.t_cljs$core$async15084(self__.flag,meta15085__$1));
}));

(cljs.core.async.t_cljs$core$async15084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15086){
var self__ = this;
var _15086__$1 = this;
return self__.meta15085;
}));

(cljs.core.async.t_cljs$core$async15084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15085","meta15085",841845964,null)], null);
}));

(cljs.core.async.t_cljs$core$async15084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15084");

(cljs.core.async.t_cljs$core$async15084.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15084.
 */
cljs.core.async.__GT_t_cljs$core$async15084 = (function cljs$core$async$__GT_t_cljs$core$async15084(flag,meta15085){
return (new cljs.core.async.t_cljs$core$async15084(flag,meta15085));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15084(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15095 = (function (flag,cb,meta15096){
this.flag = flag;
this.cb = cb;
this.meta15096 = meta15096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15097,meta15096__$1){
var self__ = this;
var _15097__$1 = this;
return (new cljs.core.async.t_cljs$core$async15095(self__.flag,self__.cb,meta15096__$1));
}));

(cljs.core.async.t_cljs$core$async15095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15097){
var self__ = this;
var _15097__$1 = this;
return self__.meta15096;
}));

(cljs.core.async.t_cljs$core$async15095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15096","meta15096",748223803,null)], null);
}));

(cljs.core.async.t_cljs$core$async15095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15095");

(cljs.core.async.t_cljs$core$async15095.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15095.
 */
cljs.core.async.__GT_t_cljs$core$async15095 = (function cljs$core$async$__GT_t_cljs$core$async15095(flag,cb,meta15096){
return (new cljs.core.async.t_cljs$core$async15095(flag,cb,meta15096));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15095(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15114_SHARP_){
var G__15121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15114_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15121) : fret.call(null,G__15121));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15115_SHARP_){
var G__15123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15115_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15123) : fret.call(null,G__15123));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18703 = (i + (1));
i = G__18703;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18707 = arguments.length;
var i__5727__auto___18708 = (0);
while(true){
if((i__5727__auto___18708 < len__5726__auto___18707)){
args__5732__auto__.push((arguments[i__5727__auto___18708]));

var G__18710 = (i__5727__auto___18708 + (1));
i__5727__auto___18708 = G__18710;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15136){
var map__15137 = p__15136;
var map__15137__$1 = cljs.core.__destructure_map(map__15137);
var opts = map__15137__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15133){
var G__15134 = cljs.core.first(seq15133);
var seq15133__$1 = cljs.core.next(seq15133);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15134,seq15133__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15157 = arguments.length;
switch (G__15157) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14834__auto___18715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_15389){
var state_val_15390 = (state_15389[(1)]);
if((state_val_15390 === (7))){
var inst_15347 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15397_18716 = state_15389__$1;
(statearr_15397_18716[(2)] = inst_15347);

(statearr_15397_18716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (1))){
var state_15389__$1 = state_15389;
var statearr_15398_18717 = state_15389__$1;
(statearr_15398_18717[(2)] = null);

(statearr_15398_18717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (4))){
var inst_15289 = (state_15389[(7)]);
var inst_15289__$1 = (state_15389[(2)]);
var inst_15314 = (inst_15289__$1 == null);
var state_15389__$1 = (function (){var statearr_15411 = state_15389;
(statearr_15411[(7)] = inst_15289__$1);

return statearr_15411;
})();
if(cljs.core.truth_(inst_15314)){
var statearr_15413_18718 = state_15389__$1;
(statearr_15413_18718[(1)] = (5));

} else {
var statearr_15414_18719 = state_15389__$1;
(statearr_15414_18719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (13))){
var state_15389__$1 = state_15389;
var statearr_15418_18724 = state_15389__$1;
(statearr_15418_18724[(2)] = null);

(statearr_15418_18724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (6))){
var inst_15289 = (state_15389[(7)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15389__$1,(11),to,inst_15289);
} else {
if((state_val_15390 === (3))){
var inst_15368 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15389__$1,inst_15368);
} else {
if((state_val_15390 === (12))){
var state_15389__$1 = state_15389;
var statearr_15424_18730 = state_15389__$1;
(statearr_15424_18730[(2)] = null);

(statearr_15424_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (2))){
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15389__$1,(4),from);
} else {
if((state_val_15390 === (11))){
var inst_15327 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
if(cljs.core.truth_(inst_15327)){
var statearr_15427_18731 = state_15389__$1;
(statearr_15427_18731[(1)] = (12));

} else {
var statearr_15428_18732 = state_15389__$1;
(statearr_15428_18732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (9))){
var state_15389__$1 = state_15389;
var statearr_15430_18737 = state_15389__$1;
(statearr_15430_18737[(2)] = null);

(statearr_15430_18737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (5))){
var state_15389__$1 = state_15389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15434_18738 = state_15389__$1;
(statearr_15434_18738[(1)] = (8));

} else {
var statearr_15439_18739 = state_15389__$1;
(statearr_15439_18739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (14))){
var inst_15345 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15441_18740 = state_15389__$1;
(statearr_15441_18740[(2)] = inst_15345);

(statearr_15441_18740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (10))){
var inst_15324 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15443_18741 = state_15389__$1;
(statearr_15443_18741[(2)] = inst_15324);

(statearr_15443_18741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (8))){
var inst_15319 = cljs.core.async.close_BANG_(to);
var state_15389__$1 = state_15389;
var statearr_15444_18743 = state_15389__$1;
(statearr_15444_18743[(2)] = inst_15319);

(statearr_15444_18743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_15445 = [null,null,null,null,null,null,null,null];
(statearr_15445[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_15445[(1)] = (1));

return statearr_15445;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_15389){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_15389);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e15447){var ex__13646__auto__ = e15447;
var statearr_15448_18747 = state_15389;
(statearr_15448_18747[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_15389[(4)]))){
var statearr_15450_18748 = state_15389;
(statearr_15450_18748[(1)] = cljs.core.first((state_15389[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18749 = state_15389;
state_15389 = G__18749;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_15389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_15389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_15453 = f__14835__auto__();
(statearr_15453[(6)] = c__14834__auto___18715);

return statearr_15453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15460){
var vec__15461 = p__15460;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15461,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15461,(1),null);
var job = vec__15461;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14834__auto___18788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_15472){
var state_val_15473 = (state_15472[(1)]);
if((state_val_15473 === (1))){
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15472__$1,(2),res,v);
} else {
if((state_val_15473 === (2))){
var inst_15468 = (state_15472[(2)]);
var inst_15469 = cljs.core.async.close_BANG_(res);
var state_15472__$1 = (function (){var statearr_15474 = state_15472;
(statearr_15474[(7)] = inst_15468);

return statearr_15474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15472__$1,inst_15469);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0 = (function (){
var statearr_15475 = [null,null,null,null,null,null,null,null];
(statearr_15475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__);

(statearr_15475[(1)] = (1));

return statearr_15475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1 = (function (state_15472){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_15472);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e15478){var ex__13646__auto__ = e15478;
var statearr_15479_18795 = state_15472;
(statearr_15479_18795[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_15472[(4)]))){
var statearr_15481_18796 = state_15472;
(statearr_15481_18796[(1)] = cljs.core.first((state_15472[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18800 = state_15472;
state_15472 = G__18800;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = function(state_15472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1.call(this,state_15472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_15483 = f__14835__auto__();
(statearr_15483[(6)] = c__14834__auto___18788);

return statearr_15483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15487){
var vec__15488 = p__15487;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15488,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15488,(1),null);
var job = vec__15488;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18802 = n;
var __18803 = (0);
while(true){
if((__18803 < n__5593__auto___18802)){
var G__15497_18804 = type;
var G__15497_18805__$1 = (((G__15497_18804 instanceof cljs.core.Keyword))?G__15497_18804.fqn:null);
switch (G__15497_18805__$1) {
case "compute":
var c__14834__auto___18808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18803,c__14834__auto___18808,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async){
return (function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = ((function (__18803,c__14834__auto___18808,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async){
return (function (state_15532){
var state_val_15534 = (state_15532[(1)]);
if((state_val_15534 === (1))){
var state_15532__$1 = state_15532;
var statearr_15549_18809 = state_15532__$1;
(statearr_15549_18809[(2)] = null);

(statearr_15549_18809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15534 === (2))){
var state_15532__$1 = state_15532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15532__$1,(4),jobs);
} else {
if((state_val_15534 === (3))){
var inst_15528 = (state_15532[(2)]);
var state_15532__$1 = state_15532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15532__$1,inst_15528);
} else {
if((state_val_15534 === (4))){
var inst_15515 = (state_15532[(2)]);
var inst_15517 = process__$1(inst_15515);
var state_15532__$1 = state_15532;
if(cljs.core.truth_(inst_15517)){
var statearr_15574_18810 = state_15532__$1;
(statearr_15574_18810[(1)] = (5));

} else {
var statearr_15580_18811 = state_15532__$1;
(statearr_15580_18811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15534 === (5))){
var state_15532__$1 = state_15532;
var statearr_15598_18812 = state_15532__$1;
(statearr_15598_18812[(2)] = null);

(statearr_15598_18812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15534 === (6))){
var state_15532__$1 = state_15532;
var statearr_15606_18814 = state_15532__$1;
(statearr_15606_18814[(2)] = null);

(statearr_15606_18814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15534 === (7))){
var inst_15523 = (state_15532[(2)]);
var state_15532__$1 = state_15532;
var statearr_15609_18817 = state_15532__$1;
(statearr_15609_18817[(2)] = inst_15523);

(statearr_15609_18817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18803,c__14834__auto___18808,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async))
;
return ((function (__18803,switch__13642__auto__,c__14834__auto___18808,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0 = (function (){
var statearr_15631 = [null,null,null,null,null,null,null];
(statearr_15631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__);

(statearr_15631[(1)] = (1));

return statearr_15631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1 = (function (state_15532){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_15532);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e15643){var ex__13646__auto__ = e15643;
var statearr_15645_18821 = state_15532;
(statearr_15645_18821[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_15532[(4)]))){
var statearr_15660_18822 = state_15532;
(statearr_15660_18822[(1)] = cljs.core.first((state_15532[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18824 = state_15532;
state_15532 = G__18824;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = function(state_15532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1.call(this,state_15532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__;
})()
;})(__18803,switch__13642__auto__,c__14834__auto___18808,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async))
})();
var state__14836__auto__ = (function (){var statearr_15672 = f__14835__auto__();
(statearr_15672[(6)] = c__14834__auto___18808);

return statearr_15672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
});})(__18803,c__14834__auto___18808,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async))
);


break;
case "async":
var c__14834__auto___18825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18803,c__14834__auto___18825,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async){
return (function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = ((function (__18803,c__14834__auto___18825,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async){
return (function (state_15690){
var state_val_15691 = (state_15690[(1)]);
if((state_val_15691 === (1))){
var state_15690__$1 = state_15690;
var statearr_15697_18826 = state_15690__$1;
(statearr_15697_18826[(2)] = null);

(statearr_15697_18826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15691 === (2))){
var state_15690__$1 = state_15690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15690__$1,(4),jobs);
} else {
if((state_val_15691 === (3))){
var inst_15688 = (state_15690[(2)]);
var state_15690__$1 = state_15690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15690__$1,inst_15688);
} else {
if((state_val_15691 === (4))){
var inst_15679 = (state_15690[(2)]);
var inst_15680 = async(inst_15679);
var state_15690__$1 = state_15690;
if(cljs.core.truth_(inst_15680)){
var statearr_15707_18833 = state_15690__$1;
(statearr_15707_18833[(1)] = (5));

} else {
var statearr_15712_18834 = state_15690__$1;
(statearr_15712_18834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15691 === (5))){
var state_15690__$1 = state_15690;
var statearr_15716_18835 = state_15690__$1;
(statearr_15716_18835[(2)] = null);

(statearr_15716_18835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15691 === (6))){
var state_15690__$1 = state_15690;
var statearr_15719_18836 = state_15690__$1;
(statearr_15719_18836[(2)] = null);

(statearr_15719_18836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15691 === (7))){
var inst_15686 = (state_15690[(2)]);
var state_15690__$1 = state_15690;
var statearr_15721_18837 = state_15690__$1;
(statearr_15721_18837[(2)] = inst_15686);

(statearr_15721_18837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18803,c__14834__auto___18825,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async))
;
return ((function (__18803,switch__13642__auto__,c__14834__auto___18825,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0 = (function (){
var statearr_15726 = [null,null,null,null,null,null,null];
(statearr_15726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__);

(statearr_15726[(1)] = (1));

return statearr_15726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1 = (function (state_15690){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_15690);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e15729){var ex__13646__auto__ = e15729;
var statearr_15732_18839 = state_15690;
(statearr_15732_18839[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_15690[(4)]))){
var statearr_15734_18841 = state_15690;
(statearr_15734_18841[(1)] = cljs.core.first((state_15690[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18842 = state_15690;
state_15690 = G__18842;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = function(state_15690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1.call(this,state_15690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__;
})()
;})(__18803,switch__13642__auto__,c__14834__auto___18825,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async))
})();
var state__14836__auto__ = (function (){var statearr_15740 = f__14835__auto__();
(statearr_15740[(6)] = c__14834__auto___18825);

return statearr_15740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
});})(__18803,c__14834__auto___18825,G__15497_18804,G__15497_18805__$1,n__5593__auto___18802,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15497_18805__$1)].join('')));

}

var G__18845 = (__18803 + (1));
__18803 = G__18845;
continue;
} else {
}
break;
}

var c__14834__auto___18846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_15780){
var state_val_15781 = (state_15780[(1)]);
if((state_val_15781 === (7))){
var inst_15776 = (state_15780[(2)]);
var state_15780__$1 = state_15780;
var statearr_15789_18848 = state_15780__$1;
(statearr_15789_18848[(2)] = inst_15776);

(statearr_15789_18848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15781 === (1))){
var state_15780__$1 = state_15780;
var statearr_15793_18850 = state_15780__$1;
(statearr_15793_18850[(2)] = null);

(statearr_15793_18850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15781 === (4))){
var inst_15751 = (state_15780[(7)]);
var inst_15751__$1 = (state_15780[(2)]);
var inst_15754 = (inst_15751__$1 == null);
var state_15780__$1 = (function (){var statearr_15801 = state_15780;
(statearr_15801[(7)] = inst_15751__$1);

return statearr_15801;
})();
if(cljs.core.truth_(inst_15754)){
var statearr_15802_18852 = state_15780__$1;
(statearr_15802_18852[(1)] = (5));

} else {
var statearr_15803_18853 = state_15780__$1;
(statearr_15803_18853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15781 === (6))){
var inst_15762 = (state_15780[(8)]);
var inst_15751 = (state_15780[(7)]);
var inst_15762__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15766 = [inst_15751,inst_15762__$1];
var inst_15767 = (new cljs.core.PersistentVector(null,2,(5),inst_15764,inst_15766,null));
var state_15780__$1 = (function (){var statearr_15805 = state_15780;
(statearr_15805[(8)] = inst_15762__$1);

return statearr_15805;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15780__$1,(8),jobs,inst_15767);
} else {
if((state_val_15781 === (3))){
var inst_15778 = (state_15780[(2)]);
var state_15780__$1 = state_15780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15780__$1,inst_15778);
} else {
if((state_val_15781 === (2))){
var state_15780__$1 = state_15780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15780__$1,(4),from);
} else {
if((state_val_15781 === (9))){
var inst_15772 = (state_15780[(2)]);
var state_15780__$1 = (function (){var statearr_15809 = state_15780;
(statearr_15809[(9)] = inst_15772);

return statearr_15809;
})();
var statearr_15812_18856 = state_15780__$1;
(statearr_15812_18856[(2)] = null);

(statearr_15812_18856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15781 === (5))){
var inst_15756 = cljs.core.async.close_BANG_(jobs);
var state_15780__$1 = state_15780;
var statearr_15815_18857 = state_15780__$1;
(statearr_15815_18857[(2)] = inst_15756);

(statearr_15815_18857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15781 === (8))){
var inst_15762 = (state_15780[(8)]);
var inst_15770 = (state_15780[(2)]);
var state_15780__$1 = (function (){var statearr_15817 = state_15780;
(statearr_15817[(10)] = inst_15770);

return statearr_15817;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15780__$1,(9),results,inst_15762);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0 = (function (){
var statearr_15820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__);

(statearr_15820[(1)] = (1));

return statearr_15820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1 = (function (state_15780){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_15780);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e15824){var ex__13646__auto__ = e15824;
var statearr_15826_18858 = state_15780;
(statearr_15826_18858[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_15780[(4)]))){
var statearr_15827_18859 = state_15780;
(statearr_15827_18859[(1)] = cljs.core.first((state_15780[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18860 = state_15780;
state_15780 = G__18860;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = function(state_15780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1.call(this,state_15780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_15830 = f__14835__auto__();
(statearr_15830[(6)] = c__14834__auto___18846);

return statearr_15830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


var c__14834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_15876){
var state_val_15877 = (state_15876[(1)]);
if((state_val_15877 === (7))){
var inst_15872 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15878_18863 = state_15876__$1;
(statearr_15878_18863[(2)] = inst_15872);

(statearr_15878_18863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (20))){
var state_15876__$1 = state_15876;
var statearr_15880_18864 = state_15876__$1;
(statearr_15880_18864[(2)] = null);

(statearr_15880_18864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (1))){
var state_15876__$1 = state_15876;
var statearr_15884_18865 = state_15876__$1;
(statearr_15884_18865[(2)] = null);

(statearr_15884_18865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (4))){
var inst_15833 = (state_15876[(7)]);
var inst_15833__$1 = (state_15876[(2)]);
var inst_15834 = (inst_15833__$1 == null);
var state_15876__$1 = (function (){var statearr_15888 = state_15876;
(statearr_15888[(7)] = inst_15833__$1);

return statearr_15888;
})();
if(cljs.core.truth_(inst_15834)){
var statearr_15890_18866 = state_15876__$1;
(statearr_15890_18866[(1)] = (5));

} else {
var statearr_15891_18867 = state_15876__$1;
(statearr_15891_18867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (15))){
var inst_15852 = (state_15876[(8)]);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15876__$1,(18),to,inst_15852);
} else {
if((state_val_15877 === (21))){
var inst_15866 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15893_18872 = state_15876__$1;
(statearr_15893_18872[(2)] = inst_15866);

(statearr_15893_18872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (13))){
var inst_15868 = (state_15876[(2)]);
var state_15876__$1 = (function (){var statearr_15896 = state_15876;
(statearr_15896[(9)] = inst_15868);

return statearr_15896;
})();
var statearr_15899_18874 = state_15876__$1;
(statearr_15899_18874[(2)] = null);

(statearr_15899_18874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (6))){
var inst_15833 = (state_15876[(7)]);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15876__$1,(11),inst_15833);
} else {
if((state_val_15877 === (17))){
var inst_15861 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
if(cljs.core.truth_(inst_15861)){
var statearr_15908_18875 = state_15876__$1;
(statearr_15908_18875[(1)] = (19));

} else {
var statearr_15909_18876 = state_15876__$1;
(statearr_15909_18876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (3))){
var inst_15874 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15876__$1,inst_15874);
} else {
if((state_val_15877 === (12))){
var inst_15848 = (state_15876[(10)]);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15876__$1,(14),inst_15848);
} else {
if((state_val_15877 === (2))){
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15876__$1,(4),results);
} else {
if((state_val_15877 === (19))){
var state_15876__$1 = state_15876;
var statearr_15915_18880 = state_15876__$1;
(statearr_15915_18880[(2)] = null);

(statearr_15915_18880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (11))){
var inst_15848 = (state_15876[(2)]);
var state_15876__$1 = (function (){var statearr_15920 = state_15876;
(statearr_15920[(10)] = inst_15848);

return statearr_15920;
})();
var statearr_15923_18881 = state_15876__$1;
(statearr_15923_18881[(2)] = null);

(statearr_15923_18881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (9))){
var state_15876__$1 = state_15876;
var statearr_15925_18882 = state_15876__$1;
(statearr_15925_18882[(2)] = null);

(statearr_15925_18882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (5))){
var state_15876__$1 = state_15876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15926_18886 = state_15876__$1;
(statearr_15926_18886[(1)] = (8));

} else {
var statearr_15927_18887 = state_15876__$1;
(statearr_15927_18887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (14))){
var inst_15852 = (state_15876[(8)]);
var inst_15855 = (state_15876[(11)]);
var inst_15852__$1 = (state_15876[(2)]);
var inst_15854 = (inst_15852__$1 == null);
var inst_15855__$1 = cljs.core.not(inst_15854);
var state_15876__$1 = (function (){var statearr_15932 = state_15876;
(statearr_15932[(8)] = inst_15852__$1);

(statearr_15932[(11)] = inst_15855__$1);

return statearr_15932;
})();
if(inst_15855__$1){
var statearr_15933_18892 = state_15876__$1;
(statearr_15933_18892[(1)] = (15));

} else {
var statearr_15934_18893 = state_15876__$1;
(statearr_15934_18893[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (16))){
var inst_15855 = (state_15876[(11)]);
var state_15876__$1 = state_15876;
var statearr_15936_18894 = state_15876__$1;
(statearr_15936_18894[(2)] = inst_15855);

(statearr_15936_18894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (10))){
var inst_15842 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15937_18895 = state_15876__$1;
(statearr_15937_18895[(2)] = inst_15842);

(statearr_15937_18895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (18))){
var inst_15858 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15941_18896 = state_15876__$1;
(statearr_15941_18896[(2)] = inst_15858);

(statearr_15941_18896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15877 === (8))){
var inst_15839 = cljs.core.async.close_BANG_(to);
var state_15876__$1 = state_15876;
var statearr_15945_18897 = state_15876__$1;
(statearr_15945_18897[(2)] = inst_15839);

(statearr_15945_18897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0 = (function (){
var statearr_15952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__);

(statearr_15952[(1)] = (1));

return statearr_15952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1 = (function (state_15876){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_15876);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e15954){var ex__13646__auto__ = e15954;
var statearr_15955_18899 = state_15876;
(statearr_15955_18899[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_15876[(4)]))){
var statearr_15959_18900 = state_15876;
(statearr_15959_18900[(1)] = cljs.core.first((state_15876[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18906 = state_15876;
state_15876 = G__18906;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__ = function(state_15876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1.call(this,state_15876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13643__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_15960 = f__14835__auto__();
(statearr_15960[(6)] = c__14834__auto__);

return statearr_15960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

return c__14834__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15969 = arguments.length;
switch (G__15969) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15979 = arguments.length;
switch (G__15979) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15987 = arguments.length;
switch (G__15987) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14834__auto___18910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_16038){
var state_val_16040 = (state_16038[(1)]);
if((state_val_16040 === (7))){
var inst_16029 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
var statearr_16045_18915 = state_16038__$1;
(statearr_16045_18915[(2)] = inst_16029);

(statearr_16045_18915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (1))){
var state_16038__$1 = state_16038;
var statearr_16047_18916 = state_16038__$1;
(statearr_16047_18916[(2)] = null);

(statearr_16047_18916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (4))){
var inst_16006 = (state_16038[(7)]);
var inst_16006__$1 = (state_16038[(2)]);
var inst_16010 = (inst_16006__$1 == null);
var state_16038__$1 = (function (){var statearr_16048 = state_16038;
(statearr_16048[(7)] = inst_16006__$1);

return statearr_16048;
})();
if(cljs.core.truth_(inst_16010)){
var statearr_16049_18917 = state_16038__$1;
(statearr_16049_18917[(1)] = (5));

} else {
var statearr_16050_18922 = state_16038__$1;
(statearr_16050_18922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (13))){
var state_16038__$1 = state_16038;
var statearr_16052_18923 = state_16038__$1;
(statearr_16052_18923[(2)] = null);

(statearr_16052_18923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (6))){
var inst_16006 = (state_16038[(7)]);
var inst_16016 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16006) : p.call(null,inst_16006));
var state_16038__$1 = state_16038;
if(cljs.core.truth_(inst_16016)){
var statearr_16053_18937 = state_16038__$1;
(statearr_16053_18937[(1)] = (9));

} else {
var statearr_16055_18938 = state_16038__$1;
(statearr_16055_18938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (3))){
var inst_16031 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16038__$1,inst_16031);
} else {
if((state_val_16040 === (12))){
var state_16038__$1 = state_16038;
var statearr_16065_18939 = state_16038__$1;
(statearr_16065_18939[(2)] = null);

(statearr_16065_18939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (2))){
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16038__$1,(4),ch);
} else {
if((state_val_16040 === (11))){
var inst_16006 = (state_16038[(7)]);
var inst_16020 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16038__$1,(8),inst_16020,inst_16006);
} else {
if((state_val_16040 === (9))){
var state_16038__$1 = state_16038;
var statearr_16070_18940 = state_16038__$1;
(statearr_16070_18940[(2)] = tc);

(statearr_16070_18940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (5))){
var inst_16013 = cljs.core.async.close_BANG_(tc);
var inst_16014 = cljs.core.async.close_BANG_(fc);
var state_16038__$1 = (function (){var statearr_16074 = state_16038;
(statearr_16074[(8)] = inst_16013);

return statearr_16074;
})();
var statearr_16075_18948 = state_16038__$1;
(statearr_16075_18948[(2)] = inst_16014);

(statearr_16075_18948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (14))){
var inst_16027 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
var statearr_16079_18953 = state_16038__$1;
(statearr_16079_18953[(2)] = inst_16027);

(statearr_16079_18953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (10))){
var state_16038__$1 = state_16038;
var statearr_16085_18954 = state_16038__$1;
(statearr_16085_18954[(2)] = fc);

(statearr_16085_18954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (8))){
var inst_16022 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
if(cljs.core.truth_(inst_16022)){
var statearr_16086_18955 = state_16038__$1;
(statearr_16086_18955[(1)] = (12));

} else {
var statearr_16087_18956 = state_16038__$1;
(statearr_16087_18956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_16089 = [null,null,null,null,null,null,null,null,null];
(statearr_16089[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_16089[(1)] = (1));

return statearr_16089;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_16038){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_16038);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e16093){var ex__13646__auto__ = e16093;
var statearr_16095_18961 = state_16038;
(statearr_16095_18961[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_16038[(4)]))){
var statearr_16100_18964 = state_16038;
(statearr_16100_18964[(1)] = cljs.core.first((state_16038[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18973 = state_16038;
state_16038 = G__18973;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_16038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_16038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_16109 = f__14835__auto__();
(statearr_16109[(6)] = c__14834__auto___18910);

return statearr_16109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_16153){
var state_val_16154 = (state_16153[(1)]);
if((state_val_16154 === (7))){
var inst_16146 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16163_18987 = state_16153__$1;
(statearr_16163_18987[(2)] = inst_16146);

(statearr_16163_18987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (1))){
var inst_16126 = init;
var inst_16127 = inst_16126;
var state_16153__$1 = (function (){var statearr_16164 = state_16153;
(statearr_16164[(7)] = inst_16127);

return statearr_16164;
})();
var statearr_16165_19003 = state_16153__$1;
(statearr_16165_19003[(2)] = null);

(statearr_16165_19003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (4))){
var inst_16133 = (state_16153[(8)]);
var inst_16133__$1 = (state_16153[(2)]);
var inst_16134 = (inst_16133__$1 == null);
var state_16153__$1 = (function (){var statearr_16170 = state_16153;
(statearr_16170[(8)] = inst_16133__$1);

return statearr_16170;
})();
if(cljs.core.truth_(inst_16134)){
var statearr_16174_19004 = state_16153__$1;
(statearr_16174_19004[(1)] = (5));

} else {
var statearr_16176_19005 = state_16153__$1;
(statearr_16176_19005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (6))){
var inst_16137 = (state_16153[(9)]);
var inst_16133 = (state_16153[(8)]);
var inst_16127 = (state_16153[(7)]);
var inst_16137__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16127,inst_16133) : f.call(null,inst_16127,inst_16133));
var inst_16138 = cljs.core.reduced_QMARK_(inst_16137__$1);
var state_16153__$1 = (function (){var statearr_16178 = state_16153;
(statearr_16178[(9)] = inst_16137__$1);

return statearr_16178;
})();
if(inst_16138){
var statearr_16179_19006 = state_16153__$1;
(statearr_16179_19006[(1)] = (8));

} else {
var statearr_16180_19007 = state_16153__$1;
(statearr_16180_19007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (3))){
var inst_16150 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16153__$1,inst_16150);
} else {
if((state_val_16154 === (2))){
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16153__$1,(4),ch);
} else {
if((state_val_16154 === (9))){
var inst_16137 = (state_16153[(9)]);
var inst_16127 = inst_16137;
var state_16153__$1 = (function (){var statearr_16185 = state_16153;
(statearr_16185[(7)] = inst_16127);

return statearr_16185;
})();
var statearr_16186_19008 = state_16153__$1;
(statearr_16186_19008[(2)] = null);

(statearr_16186_19008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (5))){
var inst_16127 = (state_16153[(7)]);
var state_16153__$1 = state_16153;
var statearr_16187_19009 = state_16153__$1;
(statearr_16187_19009[(2)] = inst_16127);

(statearr_16187_19009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (10))){
var inst_16144 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16189_19014 = state_16153__$1;
(statearr_16189_19014[(2)] = inst_16144);

(statearr_16189_19014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (8))){
var inst_16137 = (state_16153[(9)]);
var inst_16140 = cljs.core.deref(inst_16137);
var state_16153__$1 = state_16153;
var statearr_16191_19019 = state_16153__$1;
(statearr_16191_19019[(2)] = inst_16140);

(statearr_16191_19019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13643__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13643__auto____0 = (function (){
var statearr_16193 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16193[(0)] = cljs$core$async$reduce_$_state_machine__13643__auto__);

(statearr_16193[(1)] = (1));

return statearr_16193;
});
var cljs$core$async$reduce_$_state_machine__13643__auto____1 = (function (state_16153){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_16153);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e16194){var ex__13646__auto__ = e16194;
var statearr_16195_19023 = state_16153;
(statearr_16195_19023[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_16153[(4)]))){
var statearr_16196_19025 = state_16153;
(statearr_16196_19025[(1)] = cljs.core.first((state_16153[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19030 = state_16153;
state_16153 = G__19030;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13643__auto__ = function(state_16153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13643__auto____1.call(this,state_16153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13643__auto____0;
cljs$core$async$reduce_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13643__auto____1;
return cljs$core$async$reduce_$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_16201 = f__14835__auto__();
(statearr_16201[(6)] = c__14834__auto__);

return statearr_16201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

return c__14834__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_16211){
var state_val_16213 = (state_16211[(1)]);
if((state_val_16213 === (1))){
var inst_16205 = cljs.core.async.reduce(f__$1,init,ch);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16211__$1,(2),inst_16205);
} else {
if((state_val_16213 === (2))){
var inst_16208 = (state_16211[(2)]);
var inst_16209 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16208) : f__$1.call(null,inst_16208));
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16211__$1,inst_16209);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13643__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13643__auto____0 = (function (){
var statearr_16218 = [null,null,null,null,null,null,null];
(statearr_16218[(0)] = cljs$core$async$transduce_$_state_machine__13643__auto__);

(statearr_16218[(1)] = (1));

return statearr_16218;
});
var cljs$core$async$transduce_$_state_machine__13643__auto____1 = (function (state_16211){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_16211);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e16219){var ex__13646__auto__ = e16219;
var statearr_16220_19039 = state_16211;
(statearr_16220_19039[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_16211[(4)]))){
var statearr_16221_19040 = state_16211;
(statearr_16221_19040[(1)] = cljs.core.first((state_16211[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19041 = state_16211;
state_16211 = G__19041;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13643__auto__ = function(state_16211){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13643__auto____1.call(this,state_16211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13643__auto____0;
cljs$core$async$transduce_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13643__auto____1;
return cljs$core$async$transduce_$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_16222 = f__14835__auto__();
(statearr_16222[(6)] = c__14834__auto__);

return statearr_16222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

return c__14834__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16224 = arguments.length;
switch (G__16224) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_16256){
var state_val_16257 = (state_16256[(1)]);
if((state_val_16257 === (7))){
var inst_16236 = (state_16256[(2)]);
var state_16256__$1 = state_16256;
var statearr_16261_19043 = state_16256__$1;
(statearr_16261_19043[(2)] = inst_16236);

(statearr_16261_19043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (1))){
var inst_16229 = cljs.core.seq(coll);
var inst_16230 = inst_16229;
var state_16256__$1 = (function (){var statearr_16263 = state_16256;
(statearr_16263[(7)] = inst_16230);

return statearr_16263;
})();
var statearr_16264_19048 = state_16256__$1;
(statearr_16264_19048[(2)] = null);

(statearr_16264_19048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (4))){
var inst_16230 = (state_16256[(7)]);
var inst_16234 = cljs.core.first(inst_16230);
var state_16256__$1 = state_16256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16256__$1,(7),ch,inst_16234);
} else {
if((state_val_16257 === (13))){
var inst_16248 = (state_16256[(2)]);
var state_16256__$1 = state_16256;
var statearr_16265_19049 = state_16256__$1;
(statearr_16265_19049[(2)] = inst_16248);

(statearr_16265_19049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (6))){
var inst_16239 = (state_16256[(2)]);
var state_16256__$1 = state_16256;
if(cljs.core.truth_(inst_16239)){
var statearr_16266_19050 = state_16256__$1;
(statearr_16266_19050[(1)] = (8));

} else {
var statearr_16267_19051 = state_16256__$1;
(statearr_16267_19051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (3))){
var inst_16252 = (state_16256[(2)]);
var state_16256__$1 = state_16256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16256__$1,inst_16252);
} else {
if((state_val_16257 === (12))){
var state_16256__$1 = state_16256;
var statearr_16268_19055 = state_16256__$1;
(statearr_16268_19055[(2)] = null);

(statearr_16268_19055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (2))){
var inst_16230 = (state_16256[(7)]);
var state_16256__$1 = state_16256;
if(cljs.core.truth_(inst_16230)){
var statearr_16273_19056 = state_16256__$1;
(statearr_16273_19056[(1)] = (4));

} else {
var statearr_16278_19057 = state_16256__$1;
(statearr_16278_19057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (11))){
var inst_16245 = cljs.core.async.close_BANG_(ch);
var state_16256__$1 = state_16256;
var statearr_16286_19058 = state_16256__$1;
(statearr_16286_19058[(2)] = inst_16245);

(statearr_16286_19058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (9))){
var state_16256__$1 = state_16256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16287_19059 = state_16256__$1;
(statearr_16287_19059[(1)] = (11));

} else {
var statearr_16288_19060 = state_16256__$1;
(statearr_16288_19060[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (5))){
var inst_16230 = (state_16256[(7)]);
var state_16256__$1 = state_16256;
var statearr_16290_19061 = state_16256__$1;
(statearr_16290_19061[(2)] = inst_16230);

(statearr_16290_19061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (10))){
var inst_16250 = (state_16256[(2)]);
var state_16256__$1 = state_16256;
var statearr_16291_19062 = state_16256__$1;
(statearr_16291_19062[(2)] = inst_16250);

(statearr_16291_19062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16257 === (8))){
var inst_16230 = (state_16256[(7)]);
var inst_16241 = cljs.core.next(inst_16230);
var inst_16230__$1 = inst_16241;
var state_16256__$1 = (function (){var statearr_16292 = state_16256;
(statearr_16292[(7)] = inst_16230__$1);

return statearr_16292;
})();
var statearr_16293_19069 = state_16256__$1;
(statearr_16293_19069[(2)] = null);

(statearr_16293_19069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_16294 = [null,null,null,null,null,null,null,null];
(statearr_16294[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_16294[(1)] = (1));

return statearr_16294;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_16256){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_16256);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e16296){var ex__13646__auto__ = e16296;
var statearr_16297_19078 = state_16256;
(statearr_16297_19078[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_16256[(4)]))){
var statearr_16298_19079 = state_16256;
(statearr_16298_19079[(1)] = cljs.core.first((state_16256[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19088 = state_16256;
state_16256 = G__19088;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_16256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_16256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_16299 = f__14835__auto__();
(statearr_16299[(6)] = c__14834__auto__);

return statearr_16299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

return c__14834__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16308 = arguments.length;
switch (G__16308) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19095 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19095(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19140 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19140(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19167 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19167(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19171 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19171(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16342 = (function (ch,cs,meta16343){
this.ch = ch;
this.cs = cs;
this.meta16343 = meta16343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16344,meta16343__$1){
var self__ = this;
var _16344__$1 = this;
return (new cljs.core.async.t_cljs$core$async16342(self__.ch,self__.cs,meta16343__$1));
}));

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16344){
var self__ = this;
var _16344__$1 = this;
return self__.meta16343;
}));

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16342.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16343","meta16343",557504066,null)], null);
}));

(cljs.core.async.t_cljs$core$async16342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16342");

(cljs.core.async.t_cljs$core$async16342.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16342.
 */
cljs.core.async.__GT_t_cljs$core$async16342 = (function cljs$core$async$__GT_t_cljs$core$async16342(ch,cs,meta16343){
return (new cljs.core.async.t_cljs$core$async16342(ch,cs,meta16343));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16342(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14834__auto___19185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_16516){
var state_val_16517 = (state_16516[(1)]);
if((state_val_16517 === (7))){
var inst_16512 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16518_19189 = state_16516__$1;
(statearr_16518_19189[(2)] = inst_16512);

(statearr_16518_19189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (20))){
var inst_16411 = (state_16516[(7)]);
var inst_16424 = cljs.core.first(inst_16411);
var inst_16425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16424,(0),null);
var inst_16426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16424,(1),null);
var state_16516__$1 = (function (){var statearr_16521 = state_16516;
(statearr_16521[(8)] = inst_16425);

return statearr_16521;
})();
if(cljs.core.truth_(inst_16426)){
var statearr_16522_19194 = state_16516__$1;
(statearr_16522_19194[(1)] = (22));

} else {
var statearr_16524_19195 = state_16516__$1;
(statearr_16524_19195[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (27))){
var inst_16454 = (state_16516[(9)]);
var inst_16372 = (state_16516[(10)]);
var inst_16465 = (state_16516[(11)]);
var inst_16456 = (state_16516[(12)]);
var inst_16465__$1 = cljs.core._nth(inst_16454,inst_16456);
var inst_16466 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16465__$1,inst_16372,done);
var state_16516__$1 = (function (){var statearr_16525 = state_16516;
(statearr_16525[(11)] = inst_16465__$1);

return statearr_16525;
})();
if(cljs.core.truth_(inst_16466)){
var statearr_16526_19201 = state_16516__$1;
(statearr_16526_19201[(1)] = (30));

} else {
var statearr_16527_19204 = state_16516__$1;
(statearr_16527_19204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (1))){
var state_16516__$1 = state_16516;
var statearr_16528_19208 = state_16516__$1;
(statearr_16528_19208[(2)] = null);

(statearr_16528_19208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (24))){
var inst_16411 = (state_16516[(7)]);
var inst_16431 = (state_16516[(2)]);
var inst_16432 = cljs.core.next(inst_16411);
var inst_16381 = inst_16432;
var inst_16382 = null;
var inst_16383 = (0);
var inst_16384 = (0);
var state_16516__$1 = (function (){var statearr_16529 = state_16516;
(statearr_16529[(13)] = inst_16431);

(statearr_16529[(14)] = inst_16383);

(statearr_16529[(15)] = inst_16382);

(statearr_16529[(16)] = inst_16384);

(statearr_16529[(17)] = inst_16381);

return statearr_16529;
})();
var statearr_16534_19209 = state_16516__$1;
(statearr_16534_19209[(2)] = null);

(statearr_16534_19209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (39))){
var state_16516__$1 = state_16516;
var statearr_16538_19210 = state_16516__$1;
(statearr_16538_19210[(2)] = null);

(statearr_16538_19210[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (4))){
var inst_16372 = (state_16516[(10)]);
var inst_16372__$1 = (state_16516[(2)]);
var inst_16373 = (inst_16372__$1 == null);
var state_16516__$1 = (function (){var statearr_16539 = state_16516;
(statearr_16539[(10)] = inst_16372__$1);

return statearr_16539;
})();
if(cljs.core.truth_(inst_16373)){
var statearr_16540_19211 = state_16516__$1;
(statearr_16540_19211[(1)] = (5));

} else {
var statearr_16541_19212 = state_16516__$1;
(statearr_16541_19212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (15))){
var inst_16383 = (state_16516[(14)]);
var inst_16382 = (state_16516[(15)]);
var inst_16384 = (state_16516[(16)]);
var inst_16381 = (state_16516[(17)]);
var inst_16402 = (state_16516[(2)]);
var inst_16407 = (inst_16384 + (1));
var tmp16535 = inst_16383;
var tmp16536 = inst_16382;
var tmp16537 = inst_16381;
var inst_16381__$1 = tmp16537;
var inst_16382__$1 = tmp16536;
var inst_16383__$1 = tmp16535;
var inst_16384__$1 = inst_16407;
var state_16516__$1 = (function (){var statearr_16542 = state_16516;
(statearr_16542[(14)] = inst_16383__$1);

(statearr_16542[(18)] = inst_16402);

(statearr_16542[(15)] = inst_16382__$1);

(statearr_16542[(16)] = inst_16384__$1);

(statearr_16542[(17)] = inst_16381__$1);

return statearr_16542;
})();
var statearr_16543_19223 = state_16516__$1;
(statearr_16543_19223[(2)] = null);

(statearr_16543_19223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (21))){
var inst_16435 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16547_19233 = state_16516__$1;
(statearr_16547_19233[(2)] = inst_16435);

(statearr_16547_19233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (31))){
var inst_16465 = (state_16516[(11)]);
var inst_16469 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16465);
var state_16516__$1 = state_16516;
var statearr_16548_19234 = state_16516__$1;
(statearr_16548_19234[(2)] = inst_16469);

(statearr_16548_19234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (32))){
var inst_16453 = (state_16516[(19)]);
var inst_16455 = (state_16516[(20)]);
var inst_16454 = (state_16516[(9)]);
var inst_16456 = (state_16516[(12)]);
var inst_16471 = (state_16516[(2)]);
var inst_16472 = (inst_16456 + (1));
var tmp16544 = inst_16453;
var tmp16545 = inst_16455;
var tmp16546 = inst_16454;
var inst_16453__$1 = tmp16544;
var inst_16454__$1 = tmp16546;
var inst_16455__$1 = tmp16545;
var inst_16456__$1 = inst_16472;
var state_16516__$1 = (function (){var statearr_16549 = state_16516;
(statearr_16549[(19)] = inst_16453__$1);

(statearr_16549[(21)] = inst_16471);

(statearr_16549[(20)] = inst_16455__$1);

(statearr_16549[(9)] = inst_16454__$1);

(statearr_16549[(12)] = inst_16456__$1);

return statearr_16549;
})();
var statearr_16550_19257 = state_16516__$1;
(statearr_16550_19257[(2)] = null);

(statearr_16550_19257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (40))){
var inst_16485 = (state_16516[(22)]);
var inst_16489 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16485);
var state_16516__$1 = state_16516;
var statearr_16559_19259 = state_16516__$1;
(statearr_16559_19259[(2)] = inst_16489);

(statearr_16559_19259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (33))){
var inst_16475 = (state_16516[(23)]);
var inst_16478 = cljs.core.chunked_seq_QMARK_(inst_16475);
var state_16516__$1 = state_16516;
if(inst_16478){
var statearr_16564_19261 = state_16516__$1;
(statearr_16564_19261[(1)] = (36));

} else {
var statearr_16565_19262 = state_16516__$1;
(statearr_16565_19262[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (13))){
var inst_16396 = (state_16516[(24)]);
var inst_16399 = cljs.core.async.close_BANG_(inst_16396);
var state_16516__$1 = state_16516;
var statearr_16566_19263 = state_16516__$1;
(statearr_16566_19263[(2)] = inst_16399);

(statearr_16566_19263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (22))){
var inst_16425 = (state_16516[(8)]);
var inst_16428 = cljs.core.async.close_BANG_(inst_16425);
var state_16516__$1 = state_16516;
var statearr_16568_19264 = state_16516__$1;
(statearr_16568_19264[(2)] = inst_16428);

(statearr_16568_19264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (36))){
var inst_16475 = (state_16516[(23)]);
var inst_16480 = cljs.core.chunk_first(inst_16475);
var inst_16481 = cljs.core.chunk_rest(inst_16475);
var inst_16482 = cljs.core.count(inst_16480);
var inst_16453 = inst_16481;
var inst_16454 = inst_16480;
var inst_16455 = inst_16482;
var inst_16456 = (0);
var state_16516__$1 = (function (){var statearr_16570 = state_16516;
(statearr_16570[(19)] = inst_16453);

(statearr_16570[(20)] = inst_16455);

(statearr_16570[(9)] = inst_16454);

(statearr_16570[(12)] = inst_16456);

return statearr_16570;
})();
var statearr_16571_19267 = state_16516__$1;
(statearr_16571_19267[(2)] = null);

(statearr_16571_19267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (41))){
var inst_16475 = (state_16516[(23)]);
var inst_16491 = (state_16516[(2)]);
var inst_16492 = cljs.core.next(inst_16475);
var inst_16453 = inst_16492;
var inst_16454 = null;
var inst_16455 = (0);
var inst_16456 = (0);
var state_16516__$1 = (function (){var statearr_16572 = state_16516;
(statearr_16572[(25)] = inst_16491);

(statearr_16572[(19)] = inst_16453);

(statearr_16572[(20)] = inst_16455);

(statearr_16572[(9)] = inst_16454);

(statearr_16572[(12)] = inst_16456);

return statearr_16572;
})();
var statearr_16573_19286 = state_16516__$1;
(statearr_16573_19286[(2)] = null);

(statearr_16573_19286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (43))){
var state_16516__$1 = state_16516;
var statearr_16574_19295 = state_16516__$1;
(statearr_16574_19295[(2)] = null);

(statearr_16574_19295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (29))){
var inst_16500 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16580_19301 = state_16516__$1;
(statearr_16580_19301[(2)] = inst_16500);

(statearr_16580_19301[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (44))){
var inst_16509 = (state_16516[(2)]);
var state_16516__$1 = (function (){var statearr_16581 = state_16516;
(statearr_16581[(26)] = inst_16509);

return statearr_16581;
})();
var statearr_16582_19302 = state_16516__$1;
(statearr_16582_19302[(2)] = null);

(statearr_16582_19302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (6))){
var inst_16445 = (state_16516[(27)]);
var inst_16444 = cljs.core.deref(cs);
var inst_16445__$1 = cljs.core.keys(inst_16444);
var inst_16446 = cljs.core.count(inst_16445__$1);
var inst_16447 = cljs.core.reset_BANG_(dctr,inst_16446);
var inst_16452 = cljs.core.seq(inst_16445__$1);
var inst_16453 = inst_16452;
var inst_16454 = null;
var inst_16455 = (0);
var inst_16456 = (0);
var state_16516__$1 = (function (){var statearr_16585 = state_16516;
(statearr_16585[(19)] = inst_16453);

(statearr_16585[(20)] = inst_16455);

(statearr_16585[(9)] = inst_16454);

(statearr_16585[(27)] = inst_16445__$1);

(statearr_16585[(28)] = inst_16447);

(statearr_16585[(12)] = inst_16456);

return statearr_16585;
})();
var statearr_16593_19303 = state_16516__$1;
(statearr_16593_19303[(2)] = null);

(statearr_16593_19303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (28))){
var inst_16453 = (state_16516[(19)]);
var inst_16475 = (state_16516[(23)]);
var inst_16475__$1 = cljs.core.seq(inst_16453);
var state_16516__$1 = (function (){var statearr_16596 = state_16516;
(statearr_16596[(23)] = inst_16475__$1);

return statearr_16596;
})();
if(inst_16475__$1){
var statearr_16597_19314 = state_16516__$1;
(statearr_16597_19314[(1)] = (33));

} else {
var statearr_16598_19315 = state_16516__$1;
(statearr_16598_19315[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (25))){
var inst_16455 = (state_16516[(20)]);
var inst_16456 = (state_16516[(12)]);
var inst_16462 = (inst_16456 < inst_16455);
var inst_16463 = inst_16462;
var state_16516__$1 = state_16516;
if(cljs.core.truth_(inst_16463)){
var statearr_16599_19316 = state_16516__$1;
(statearr_16599_19316[(1)] = (27));

} else {
var statearr_16601_19317 = state_16516__$1;
(statearr_16601_19317[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (34))){
var state_16516__$1 = state_16516;
var statearr_16602_19322 = state_16516__$1;
(statearr_16602_19322[(2)] = null);

(statearr_16602_19322[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (17))){
var state_16516__$1 = state_16516;
var statearr_16603_19323 = state_16516__$1;
(statearr_16603_19323[(2)] = null);

(statearr_16603_19323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (3))){
var inst_16514 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16516__$1,inst_16514);
} else {
if((state_val_16517 === (12))){
var inst_16440 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16604_19333 = state_16516__$1;
(statearr_16604_19333[(2)] = inst_16440);

(statearr_16604_19333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (2))){
var state_16516__$1 = state_16516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16516__$1,(4),ch);
} else {
if((state_val_16517 === (23))){
var state_16516__$1 = state_16516;
var statearr_16605_19340 = state_16516__$1;
(statearr_16605_19340[(2)] = null);

(statearr_16605_19340[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (35))){
var inst_16498 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16606_19342 = state_16516__$1;
(statearr_16606_19342[(2)] = inst_16498);

(statearr_16606_19342[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (19))){
var inst_16411 = (state_16516[(7)]);
var inst_16416 = cljs.core.chunk_first(inst_16411);
var inst_16417 = cljs.core.chunk_rest(inst_16411);
var inst_16418 = cljs.core.count(inst_16416);
var inst_16381 = inst_16417;
var inst_16382 = inst_16416;
var inst_16383 = inst_16418;
var inst_16384 = (0);
var state_16516__$1 = (function (){var statearr_16613 = state_16516;
(statearr_16613[(14)] = inst_16383);

(statearr_16613[(15)] = inst_16382);

(statearr_16613[(16)] = inst_16384);

(statearr_16613[(17)] = inst_16381);

return statearr_16613;
})();
var statearr_16618_19353 = state_16516__$1;
(statearr_16618_19353[(2)] = null);

(statearr_16618_19353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (11))){
var inst_16381 = (state_16516[(17)]);
var inst_16411 = (state_16516[(7)]);
var inst_16411__$1 = cljs.core.seq(inst_16381);
var state_16516__$1 = (function (){var statearr_16622 = state_16516;
(statearr_16622[(7)] = inst_16411__$1);

return statearr_16622;
})();
if(inst_16411__$1){
var statearr_16624_19355 = state_16516__$1;
(statearr_16624_19355[(1)] = (16));

} else {
var statearr_16625_19360 = state_16516__$1;
(statearr_16625_19360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (9))){
var inst_16442 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16626_19361 = state_16516__$1;
(statearr_16626_19361[(2)] = inst_16442);

(statearr_16626_19361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (5))){
var inst_16379 = cljs.core.deref(cs);
var inst_16380 = cljs.core.seq(inst_16379);
var inst_16381 = inst_16380;
var inst_16382 = null;
var inst_16383 = (0);
var inst_16384 = (0);
var state_16516__$1 = (function (){var statearr_16627 = state_16516;
(statearr_16627[(14)] = inst_16383);

(statearr_16627[(15)] = inst_16382);

(statearr_16627[(16)] = inst_16384);

(statearr_16627[(17)] = inst_16381);

return statearr_16627;
})();
var statearr_16628_19368 = state_16516__$1;
(statearr_16628_19368[(2)] = null);

(statearr_16628_19368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (14))){
var state_16516__$1 = state_16516;
var statearr_16629_19374 = state_16516__$1;
(statearr_16629_19374[(2)] = null);

(statearr_16629_19374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (45))){
var inst_16506 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16632_19379 = state_16516__$1;
(statearr_16632_19379[(2)] = inst_16506);

(statearr_16632_19379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (26))){
var inst_16445 = (state_16516[(27)]);
var inst_16502 = (state_16516[(2)]);
var inst_16503 = cljs.core.seq(inst_16445);
var state_16516__$1 = (function (){var statearr_16634 = state_16516;
(statearr_16634[(29)] = inst_16502);

return statearr_16634;
})();
if(inst_16503){
var statearr_16637_19380 = state_16516__$1;
(statearr_16637_19380[(1)] = (42));

} else {
var statearr_16638_19381 = state_16516__$1;
(statearr_16638_19381[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (16))){
var inst_16411 = (state_16516[(7)]);
var inst_16413 = cljs.core.chunked_seq_QMARK_(inst_16411);
var state_16516__$1 = state_16516;
if(inst_16413){
var statearr_16642_19382 = state_16516__$1;
(statearr_16642_19382[(1)] = (19));

} else {
var statearr_16643_19383 = state_16516__$1;
(statearr_16643_19383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (38))){
var inst_16495 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16646_19384 = state_16516__$1;
(statearr_16646_19384[(2)] = inst_16495);

(statearr_16646_19384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (30))){
var state_16516__$1 = state_16516;
var statearr_16648_19386 = state_16516__$1;
(statearr_16648_19386[(2)] = null);

(statearr_16648_19386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (10))){
var inst_16382 = (state_16516[(15)]);
var inst_16384 = (state_16516[(16)]);
var inst_16395 = cljs.core._nth(inst_16382,inst_16384);
var inst_16396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16395,(0),null);
var inst_16397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16395,(1),null);
var state_16516__$1 = (function (){var statearr_16651 = state_16516;
(statearr_16651[(24)] = inst_16396);

return statearr_16651;
})();
if(cljs.core.truth_(inst_16397)){
var statearr_16652_19391 = state_16516__$1;
(statearr_16652_19391[(1)] = (13));

} else {
var statearr_16653_19392 = state_16516__$1;
(statearr_16653_19392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (18))){
var inst_16438 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16659_19393 = state_16516__$1;
(statearr_16659_19393[(2)] = inst_16438);

(statearr_16659_19393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (42))){
var state_16516__$1 = state_16516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16516__$1,(45),dchan);
} else {
if((state_val_16517 === (37))){
var inst_16485 = (state_16516[(22)]);
var inst_16475 = (state_16516[(23)]);
var inst_16372 = (state_16516[(10)]);
var inst_16485__$1 = cljs.core.first(inst_16475);
var inst_16486 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16485__$1,inst_16372,done);
var state_16516__$1 = (function (){var statearr_16662 = state_16516;
(statearr_16662[(22)] = inst_16485__$1);

return statearr_16662;
})();
if(cljs.core.truth_(inst_16486)){
var statearr_16665_19402 = state_16516__$1;
(statearr_16665_19402[(1)] = (39));

} else {
var statearr_16667_19403 = state_16516__$1;
(statearr_16667_19403[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (8))){
var inst_16383 = (state_16516[(14)]);
var inst_16384 = (state_16516[(16)]);
var inst_16386 = (inst_16384 < inst_16383);
var inst_16387 = inst_16386;
var state_16516__$1 = state_16516;
if(cljs.core.truth_(inst_16387)){
var statearr_16668_19404 = state_16516__$1;
(statearr_16668_19404[(1)] = (10));

} else {
var statearr_16670_19408 = state_16516__$1;
(statearr_16670_19408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13643__auto__ = null;
var cljs$core$async$mult_$_state_machine__13643__auto____0 = (function (){
var statearr_16677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16677[(0)] = cljs$core$async$mult_$_state_machine__13643__auto__);

(statearr_16677[(1)] = (1));

return statearr_16677;
});
var cljs$core$async$mult_$_state_machine__13643__auto____1 = (function (state_16516){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_16516);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e16682){var ex__13646__auto__ = e16682;
var statearr_16683_19412 = state_16516;
(statearr_16683_19412[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_16516[(4)]))){
var statearr_16684_19414 = state_16516;
(statearr_16684_19414[(1)] = cljs.core.first((state_16516[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19415 = state_16516;
state_16516 = G__19415;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13643__auto__ = function(state_16516){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13643__auto____1.call(this,state_16516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13643__auto____0;
cljs$core$async$mult_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13643__auto____1;
return cljs$core$async$mult_$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_16687 = f__14835__auto__();
(statearr_16687[(6)] = c__14834__auto___19185);

return statearr_16687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16696 = arguments.length;
switch (G__16696) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19421 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19421(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19434 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19434(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19435 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19435(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19438 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19438(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19444 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19444(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19446 = arguments.length;
var i__5727__auto___19447 = (0);
while(true){
if((i__5727__auto___19447 < len__5726__auto___19446)){
args__5732__auto__.push((arguments[i__5727__auto___19447]));

var G__19448 = (i__5727__auto___19447 + (1));
i__5727__auto___19447 = G__19448;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16787){
var map__16788 = p__16787;
var map__16788__$1 = cljs.core.__destructure_map(map__16788);
var opts = map__16788__$1;
var statearr_16793_19452 = state;
(statearr_16793_19452[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16822_19453 = state;
(statearr_16822_19453[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16828_19454 = state;
(statearr_16828_19454[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16777){
var G__16778 = cljs.core.first(seq16777);
var seq16777__$1 = cljs.core.next(seq16777);
var G__16779 = cljs.core.first(seq16777__$1);
var seq16777__$2 = cljs.core.next(seq16777__$1);
var G__16780 = cljs.core.first(seq16777__$2);
var seq16777__$3 = cljs.core.next(seq16777__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16778,G__16779,G__16780,seq16777__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16862 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16863){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16863 = meta16863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16864,meta16863__$1){
var self__ = this;
var _16864__$1 = this;
return (new cljs.core.async.t_cljs$core$async16862(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16863__$1));
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16864){
var self__ = this;
var _16864__$1 = this;
return self__.meta16863;
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16863","meta16863",372325206,null)], null);
}));

(cljs.core.async.t_cljs$core$async16862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16862");

(cljs.core.async.t_cljs$core$async16862.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16862.
 */
cljs.core.async.__GT_t_cljs$core$async16862 = (function cljs$core$async$__GT_t_cljs$core$async16862(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16863){
return (new cljs.core.async.t_cljs$core$async16862(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16863));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16862(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14834__auto___19473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_16978){
var state_val_16980 = (state_16978[(1)]);
if((state_val_16980 === (7))){
var inst_16932 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16932)){
var statearr_16989_19474 = state_16978__$1;
(statearr_16989_19474[(1)] = (8));

} else {
var statearr_16990_19475 = state_16978__$1;
(statearr_16990_19475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (20))){
var inst_16925 = (state_16978[(7)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16978__$1,(23),out,inst_16925);
} else {
if((state_val_16980 === (1))){
var inst_16907 = calc_state();
var inst_16908 = cljs.core.__destructure_map(inst_16907);
var inst_16909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16908,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16908,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16908,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16912 = inst_16907;
var state_16978__$1 = (function (){var statearr_16998 = state_16978;
(statearr_16998[(8)] = inst_16912);

(statearr_16998[(9)] = inst_16911);

(statearr_16998[(10)] = inst_16909);

(statearr_16998[(11)] = inst_16910);

return statearr_16998;
})();
var statearr_16999_19480 = state_16978__$1;
(statearr_16999_19480[(2)] = null);

(statearr_16999_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (24))){
var inst_16915 = (state_16978[(12)]);
var inst_16912 = inst_16915;
var state_16978__$1 = (function (){var statearr_17004 = state_16978;
(statearr_17004[(8)] = inst_16912);

return statearr_17004;
})();
var statearr_17005_19485 = state_16978__$1;
(statearr_17005_19485[(2)] = null);

(statearr_17005_19485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (4))){
var inst_16927 = (state_16978[(13)]);
var inst_16925 = (state_16978[(7)]);
var inst_16924 = (state_16978[(2)]);
var inst_16925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16924,(0),null);
var inst_16926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16924,(1),null);
var inst_16927__$1 = (inst_16925__$1 == null);
var state_16978__$1 = (function (){var statearr_17008 = state_16978;
(statearr_17008[(14)] = inst_16926);

(statearr_17008[(13)] = inst_16927__$1);

(statearr_17008[(7)] = inst_16925__$1);

return statearr_17008;
})();
if(cljs.core.truth_(inst_16927__$1)){
var statearr_17012_19492 = state_16978__$1;
(statearr_17012_19492[(1)] = (5));

} else {
var statearr_17014_19493 = state_16978__$1;
(statearr_17014_19493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (15))){
var inst_16946 = (state_16978[(15)]);
var inst_16916 = (state_16978[(16)]);
var inst_16946__$1 = cljs.core.empty_QMARK_(inst_16916);
var state_16978__$1 = (function (){var statearr_17020 = state_16978;
(statearr_17020[(15)] = inst_16946__$1);

return statearr_17020;
})();
if(inst_16946__$1){
var statearr_17026_19494 = state_16978__$1;
(statearr_17026_19494[(1)] = (17));

} else {
var statearr_17027_19495 = state_16978__$1;
(statearr_17027_19495[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (21))){
var inst_16915 = (state_16978[(12)]);
var inst_16912 = inst_16915;
var state_16978__$1 = (function (){var statearr_17041 = state_16978;
(statearr_17041[(8)] = inst_16912);

return statearr_17041;
})();
var statearr_17042_19497 = state_16978__$1;
(statearr_17042_19497[(2)] = null);

(statearr_17042_19497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (13))){
var inst_16939 = (state_16978[(2)]);
var inst_16940 = calc_state();
var inst_16912 = inst_16940;
var state_16978__$1 = (function (){var statearr_17049 = state_16978;
(statearr_17049[(8)] = inst_16912);

(statearr_17049[(17)] = inst_16939);

return statearr_17049;
})();
var statearr_17053_19499 = state_16978__$1;
(statearr_17053_19499[(2)] = null);

(statearr_17053_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (22))){
var inst_16968 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17054_19500 = state_16978__$1;
(statearr_17054_19500[(2)] = inst_16968);

(statearr_17054_19500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (6))){
var inst_16926 = (state_16978[(14)]);
var inst_16930 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16926,change);
var state_16978__$1 = state_16978;
var statearr_17055_19501 = state_16978__$1;
(statearr_17055_19501[(2)] = inst_16930);

(statearr_17055_19501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (25))){
var state_16978__$1 = state_16978;
var statearr_17056_19502 = state_16978__$1;
(statearr_17056_19502[(2)] = null);

(statearr_17056_19502[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (17))){
var inst_16926 = (state_16978[(14)]);
var inst_16917 = (state_16978[(18)]);
var inst_16949 = (inst_16917.cljs$core$IFn$_invoke$arity$1 ? inst_16917.cljs$core$IFn$_invoke$arity$1(inst_16926) : inst_16917.call(null,inst_16926));
var inst_16950 = cljs.core.not(inst_16949);
var state_16978__$1 = state_16978;
var statearr_17057_19504 = state_16978__$1;
(statearr_17057_19504[(2)] = inst_16950);

(statearr_17057_19504[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (3))){
var inst_16973 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16978__$1,inst_16973);
} else {
if((state_val_16980 === (12))){
var state_16978__$1 = state_16978;
var statearr_17073_19505 = state_16978__$1;
(statearr_17073_19505[(2)] = null);

(statearr_17073_19505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (2))){
var inst_16912 = (state_16978[(8)]);
var inst_16915 = (state_16978[(12)]);
var inst_16915__$1 = cljs.core.__destructure_map(inst_16912);
var inst_16916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16915__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16915__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16915__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16978__$1 = (function (){var statearr_17079 = state_16978;
(statearr_17079[(16)] = inst_16916);

(statearr_17079[(18)] = inst_16917);

(statearr_17079[(12)] = inst_16915__$1);

return statearr_17079;
})();
return cljs.core.async.ioc_alts_BANG_(state_16978__$1,(4),inst_16918);
} else {
if((state_val_16980 === (23))){
var inst_16958 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16958)){
var statearr_17080_19506 = state_16978__$1;
(statearr_17080_19506[(1)] = (24));

} else {
var statearr_17081_19507 = state_16978__$1;
(statearr_17081_19507[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (19))){
var inst_16953 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17085_19508 = state_16978__$1;
(statearr_17085_19508[(2)] = inst_16953);

(statearr_17085_19508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (11))){
var inst_16926 = (state_16978[(14)]);
var inst_16936 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16926);
var state_16978__$1 = state_16978;
var statearr_17086_19512 = state_16978__$1;
(statearr_17086_19512[(2)] = inst_16936);

(statearr_17086_19512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (9))){
var inst_16943 = (state_16978[(19)]);
var inst_16926 = (state_16978[(14)]);
var inst_16916 = (state_16978[(16)]);
var inst_16943__$1 = (inst_16916.cljs$core$IFn$_invoke$arity$1 ? inst_16916.cljs$core$IFn$_invoke$arity$1(inst_16926) : inst_16916.call(null,inst_16926));
var state_16978__$1 = (function (){var statearr_17091 = state_16978;
(statearr_17091[(19)] = inst_16943__$1);

return statearr_17091;
})();
if(cljs.core.truth_(inst_16943__$1)){
var statearr_17092_19514 = state_16978__$1;
(statearr_17092_19514[(1)] = (14));

} else {
var statearr_17093_19515 = state_16978__$1;
(statearr_17093_19515[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (5))){
var inst_16927 = (state_16978[(13)]);
var state_16978__$1 = state_16978;
var statearr_17094_19516 = state_16978__$1;
(statearr_17094_19516[(2)] = inst_16927);

(statearr_17094_19516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (14))){
var inst_16943 = (state_16978[(19)]);
var state_16978__$1 = state_16978;
var statearr_17095_19517 = state_16978__$1;
(statearr_17095_19517[(2)] = inst_16943);

(statearr_17095_19517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (26))){
var inst_16963 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17096_19519 = state_16978__$1;
(statearr_17096_19519[(2)] = inst_16963);

(statearr_17096_19519[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (16))){
var inst_16955 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16955)){
var statearr_17097_19521 = state_16978__$1;
(statearr_17097_19521[(1)] = (20));

} else {
var statearr_17098_19522 = state_16978__$1;
(statearr_17098_19522[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (10))){
var inst_16970 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17100_19523 = state_16978__$1;
(statearr_17100_19523[(2)] = inst_16970);

(statearr_17100_19523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (18))){
var inst_16946 = (state_16978[(15)]);
var state_16978__$1 = state_16978;
var statearr_17102_19524 = state_16978__$1;
(statearr_17102_19524[(2)] = inst_16946);

(statearr_17102_19524[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (8))){
var inst_16925 = (state_16978[(7)]);
var inst_16934 = (inst_16925 == null);
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16934)){
var statearr_17104_19528 = state_16978__$1;
(statearr_17104_19528[(1)] = (11));

} else {
var statearr_17106_19529 = state_16978__$1;
(statearr_17106_19529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13643__auto__ = null;
var cljs$core$async$mix_$_state_machine__13643__auto____0 = (function (){
var statearr_17107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17107[(0)] = cljs$core$async$mix_$_state_machine__13643__auto__);

(statearr_17107[(1)] = (1));

return statearr_17107;
});
var cljs$core$async$mix_$_state_machine__13643__auto____1 = (function (state_16978){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_16978);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e17108){var ex__13646__auto__ = e17108;
var statearr_17109_19533 = state_16978;
(statearr_17109_19533[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_16978[(4)]))){
var statearr_17113_19534 = state_16978;
(statearr_17113_19534[(1)] = cljs.core.first((state_16978[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19535 = state_16978;
state_16978 = G__19535;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13643__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13643__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13643__auto____0;
cljs$core$async$mix_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13643__auto____1;
return cljs$core$async$mix_$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_17114 = f__14835__auto__();
(statearr_17114[(6)] = c__14834__auto___19473);

return statearr_17114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19541 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19541(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19547 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19547(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19554 = (function() {
var G__19555 = null;
var G__19555__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19555__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19555 = function(p,v){
switch(arguments.length){
case 1:
return G__19555__1.call(this,p);
case 2:
return G__19555__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19555.cljs$core$IFn$_invoke$arity$1 = G__19555__1;
G__19555.cljs$core$IFn$_invoke$arity$2 = G__19555__2;
return G__19555;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17135 = arguments.length;
switch (G__17135) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19554(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19554(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17150 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17151){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17151 = meta17151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17152,meta17151__$1){
var self__ = this;
var _17152__$1 = this;
return (new cljs.core.async.t_cljs$core$async17150(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17151__$1));
}));

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17152){
var self__ = this;
var _17152__$1 = this;
return self__.meta17151;
}));

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17151","meta17151",1809900323,null)], null);
}));

(cljs.core.async.t_cljs$core$async17150.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17150");

(cljs.core.async.t_cljs$core$async17150.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17150");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17150.
 */
cljs.core.async.__GT_t_cljs$core$async17150 = (function cljs$core$async$__GT_t_cljs$core$async17150(ch,topic_fn,buf_fn,mults,ensure_mult,meta17151){
return (new cljs.core.async.t_cljs$core$async17150(ch,topic_fn,buf_fn,mults,ensure_mult,meta17151));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17149 = arguments.length;
switch (G__17149) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17147_SHARP_){
if(cljs.core.truth_((p1__17147_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17147_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17147_SHARP_.call(null,topic)))){
return p1__17147_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17147_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17150(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14834__auto___19572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_17282){
var state_val_17283 = (state_17282[(1)]);
if((state_val_17283 === (7))){
var inst_17276 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17286_19574 = state_17282__$1;
(statearr_17286_19574[(2)] = inst_17276);

(statearr_17286_19574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (20))){
var state_17282__$1 = state_17282;
var statearr_17288_19575 = state_17282__$1;
(statearr_17288_19575[(2)] = null);

(statearr_17288_19575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (1))){
var state_17282__$1 = state_17282;
var statearr_17290_19577 = state_17282__$1;
(statearr_17290_19577[(2)] = null);

(statearr_17290_19577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (24))){
var inst_17259 = (state_17282[(7)]);
var inst_17268 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17259);
var state_17282__$1 = state_17282;
var statearr_17292_19578 = state_17282__$1;
(statearr_17292_19578[(2)] = inst_17268);

(statearr_17292_19578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (4))){
var inst_17189 = (state_17282[(8)]);
var inst_17189__$1 = (state_17282[(2)]);
var inst_17190 = (inst_17189__$1 == null);
var state_17282__$1 = (function (){var statearr_17293 = state_17282;
(statearr_17293[(8)] = inst_17189__$1);

return statearr_17293;
})();
if(cljs.core.truth_(inst_17190)){
var statearr_17297_19580 = state_17282__$1;
(statearr_17297_19580[(1)] = (5));

} else {
var statearr_17299_19581 = state_17282__$1;
(statearr_17299_19581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (15))){
var inst_17253 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17304_19582 = state_17282__$1;
(statearr_17304_19582[(2)] = inst_17253);

(statearr_17304_19582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (21))){
var inst_17273 = (state_17282[(2)]);
var state_17282__$1 = (function (){var statearr_17305 = state_17282;
(statearr_17305[(9)] = inst_17273);

return statearr_17305;
})();
var statearr_17306_19584 = state_17282__$1;
(statearr_17306_19584[(2)] = null);

(statearr_17306_19584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (13))){
var inst_17223 = (state_17282[(10)]);
var inst_17231 = cljs.core.chunked_seq_QMARK_(inst_17223);
var state_17282__$1 = state_17282;
if(inst_17231){
var statearr_17307_19585 = state_17282__$1;
(statearr_17307_19585[(1)] = (16));

} else {
var statearr_17309_19592 = state_17282__$1;
(statearr_17309_19592[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (22))){
var inst_17265 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
if(cljs.core.truth_(inst_17265)){
var statearr_17311_19593 = state_17282__$1;
(statearr_17311_19593[(1)] = (23));

} else {
var statearr_17312_19594 = state_17282__$1;
(statearr_17312_19594[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (6))){
var inst_17259 = (state_17282[(7)]);
var inst_17261 = (state_17282[(11)]);
var inst_17189 = (state_17282[(8)]);
var inst_17259__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17189) : topic_fn.call(null,inst_17189));
var inst_17260 = cljs.core.deref(mults);
var inst_17261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17260,inst_17259__$1);
var state_17282__$1 = (function (){var statearr_17313 = state_17282;
(statearr_17313[(7)] = inst_17259__$1);

(statearr_17313[(11)] = inst_17261__$1);

return statearr_17313;
})();
if(cljs.core.truth_(inst_17261__$1)){
var statearr_17314_19600 = state_17282__$1;
(statearr_17314_19600[(1)] = (19));

} else {
var statearr_17315_19601 = state_17282__$1;
(statearr_17315_19601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (25))){
var inst_17270 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17316_19603 = state_17282__$1;
(statearr_17316_19603[(2)] = inst_17270);

(statearr_17316_19603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (17))){
var inst_17223 = (state_17282[(10)]);
var inst_17238 = cljs.core.first(inst_17223);
var inst_17239 = cljs.core.async.muxch_STAR_(inst_17238);
var inst_17240 = cljs.core.async.close_BANG_(inst_17239);
var inst_17241 = cljs.core.next(inst_17223);
var inst_17199 = inst_17241;
var inst_17200 = null;
var inst_17201 = (0);
var inst_17202 = (0);
var state_17282__$1 = (function (){var statearr_17319 = state_17282;
(statearr_17319[(12)] = inst_17201);

(statearr_17319[(13)] = inst_17200);

(statearr_17319[(14)] = inst_17202);

(statearr_17319[(15)] = inst_17199);

(statearr_17319[(16)] = inst_17240);

return statearr_17319;
})();
var statearr_17320_19604 = state_17282__$1;
(statearr_17320_19604[(2)] = null);

(statearr_17320_19604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (3))){
var inst_17278 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17282__$1,inst_17278);
} else {
if((state_val_17283 === (12))){
var inst_17255 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17321_19606 = state_17282__$1;
(statearr_17321_19606[(2)] = inst_17255);

(statearr_17321_19606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (2))){
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17282__$1,(4),ch);
} else {
if((state_val_17283 === (23))){
var state_17282__$1 = state_17282;
var statearr_17330_19607 = state_17282__$1;
(statearr_17330_19607[(2)] = null);

(statearr_17330_19607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (19))){
var inst_17261 = (state_17282[(11)]);
var inst_17189 = (state_17282[(8)]);
var inst_17263 = cljs.core.async.muxch_STAR_(inst_17261);
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17282__$1,(22),inst_17263,inst_17189);
} else {
if((state_val_17283 === (11))){
var inst_17223 = (state_17282[(10)]);
var inst_17199 = (state_17282[(15)]);
var inst_17223__$1 = cljs.core.seq(inst_17199);
var state_17282__$1 = (function (){var statearr_17343 = state_17282;
(statearr_17343[(10)] = inst_17223__$1);

return statearr_17343;
})();
if(inst_17223__$1){
var statearr_17345_19609 = state_17282__$1;
(statearr_17345_19609[(1)] = (13));

} else {
var statearr_17347_19610 = state_17282__$1;
(statearr_17347_19610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (9))){
var inst_17257 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17350_19611 = state_17282__$1;
(statearr_17350_19611[(2)] = inst_17257);

(statearr_17350_19611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (5))){
var inst_17196 = cljs.core.deref(mults);
var inst_17197 = cljs.core.vals(inst_17196);
var inst_17198 = cljs.core.seq(inst_17197);
var inst_17199 = inst_17198;
var inst_17200 = null;
var inst_17201 = (0);
var inst_17202 = (0);
var state_17282__$1 = (function (){var statearr_17353 = state_17282;
(statearr_17353[(12)] = inst_17201);

(statearr_17353[(13)] = inst_17200);

(statearr_17353[(14)] = inst_17202);

(statearr_17353[(15)] = inst_17199);

return statearr_17353;
})();
var statearr_17357_19612 = state_17282__$1;
(statearr_17357_19612[(2)] = null);

(statearr_17357_19612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (14))){
var state_17282__$1 = state_17282;
var statearr_17362_19620 = state_17282__$1;
(statearr_17362_19620[(2)] = null);

(statearr_17362_19620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (16))){
var inst_17223 = (state_17282[(10)]);
var inst_17233 = cljs.core.chunk_first(inst_17223);
var inst_17234 = cljs.core.chunk_rest(inst_17223);
var inst_17235 = cljs.core.count(inst_17233);
var inst_17199 = inst_17234;
var inst_17200 = inst_17233;
var inst_17201 = inst_17235;
var inst_17202 = (0);
var state_17282__$1 = (function (){var statearr_17368 = state_17282;
(statearr_17368[(12)] = inst_17201);

(statearr_17368[(13)] = inst_17200);

(statearr_17368[(14)] = inst_17202);

(statearr_17368[(15)] = inst_17199);

return statearr_17368;
})();
var statearr_17369_19635 = state_17282__$1;
(statearr_17369_19635[(2)] = null);

(statearr_17369_19635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (10))){
var inst_17201 = (state_17282[(12)]);
var inst_17200 = (state_17282[(13)]);
var inst_17202 = (state_17282[(14)]);
var inst_17199 = (state_17282[(15)]);
var inst_17207 = cljs.core._nth(inst_17200,inst_17202);
var inst_17208 = cljs.core.async.muxch_STAR_(inst_17207);
var inst_17209 = cljs.core.async.close_BANG_(inst_17208);
var inst_17216 = (inst_17202 + (1));
var tmp17358 = inst_17201;
var tmp17359 = inst_17200;
var tmp17360 = inst_17199;
var inst_17199__$1 = tmp17360;
var inst_17200__$1 = tmp17359;
var inst_17201__$1 = tmp17358;
var inst_17202__$1 = inst_17216;
var state_17282__$1 = (function (){var statearr_17373 = state_17282;
(statearr_17373[(17)] = inst_17209);

(statearr_17373[(12)] = inst_17201__$1);

(statearr_17373[(13)] = inst_17200__$1);

(statearr_17373[(14)] = inst_17202__$1);

(statearr_17373[(15)] = inst_17199__$1);

return statearr_17373;
})();
var statearr_17376_19648 = state_17282__$1;
(statearr_17376_19648[(2)] = null);

(statearr_17376_19648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (18))){
var inst_17244 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17378_19653 = state_17282__$1;
(statearr_17378_19653[(2)] = inst_17244);

(statearr_17378_19653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (8))){
var inst_17201 = (state_17282[(12)]);
var inst_17202 = (state_17282[(14)]);
var inst_17204 = (inst_17202 < inst_17201);
var inst_17205 = inst_17204;
var state_17282__$1 = state_17282;
if(cljs.core.truth_(inst_17205)){
var statearr_17382_19658 = state_17282__$1;
(statearr_17382_19658[(1)] = (10));

} else {
var statearr_17384_19659 = state_17282__$1;
(statearr_17384_19659[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_17389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17389[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_17389[(1)] = (1));

return statearr_17389;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_17282){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_17282);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e17391){var ex__13646__auto__ = e17391;
var statearr_17392_19660 = state_17282;
(statearr_17392_19660[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_17282[(4)]))){
var statearr_17397_19662 = state_17282;
(statearr_17397_19662[(1)] = cljs.core.first((state_17282[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19664 = state_17282;
state_17282 = G__19664;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_17282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_17282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_17415 = f__14835__auto__();
(statearr_17415[(6)] = c__14834__auto___19572);

return statearr_17415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17418 = arguments.length;
switch (G__17418) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17423 = arguments.length;
switch (G__17423) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17449 = arguments.length;
switch (G__17449) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14834__auto___19696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_17525){
var state_val_17526 = (state_17525[(1)]);
if((state_val_17526 === (7))){
var state_17525__$1 = state_17525;
var statearr_17531_19699 = state_17525__$1;
(statearr_17531_19699[(2)] = null);

(statearr_17531_19699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (1))){
var state_17525__$1 = state_17525;
var statearr_17535_19700 = state_17525__$1;
(statearr_17535_19700[(2)] = null);

(statearr_17535_19700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (4))){
var inst_17466 = (state_17525[(7)]);
var inst_17464 = (state_17525[(8)]);
var inst_17468 = (inst_17466 < inst_17464);
var state_17525__$1 = state_17525;
if(cljs.core.truth_(inst_17468)){
var statearr_17539_19705 = state_17525__$1;
(statearr_17539_19705[(1)] = (6));

} else {
var statearr_17540_19706 = state_17525__$1;
(statearr_17540_19706[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (15))){
var inst_17510 = (state_17525[(9)]);
var inst_17515 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17510);
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17525__$1,(17),out,inst_17515);
} else {
if((state_val_17526 === (13))){
var inst_17510 = (state_17525[(9)]);
var inst_17510__$1 = (state_17525[(2)]);
var inst_17511 = cljs.core.some(cljs.core.nil_QMARK_,inst_17510__$1);
var state_17525__$1 = (function (){var statearr_17544 = state_17525;
(statearr_17544[(9)] = inst_17510__$1);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17511)){
var statearr_17545_19708 = state_17525__$1;
(statearr_17545_19708[(1)] = (14));

} else {
var statearr_17547_19709 = state_17525__$1;
(statearr_17547_19709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (6))){
var state_17525__$1 = state_17525;
var statearr_17551_19710 = state_17525__$1;
(statearr_17551_19710[(2)] = null);

(statearr_17551_19710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (17))){
var inst_17517 = (state_17525[(2)]);
var state_17525__$1 = (function (){var statearr_17563 = state_17525;
(statearr_17563[(10)] = inst_17517);

return statearr_17563;
})();
var statearr_17564_19711 = state_17525__$1;
(statearr_17564_19711[(2)] = null);

(statearr_17564_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (3))){
var inst_17522 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17525__$1,inst_17522);
} else {
if((state_val_17526 === (12))){
var _ = (function (){var statearr_17568 = state_17525;
(statearr_17568[(4)] = cljs.core.rest((state_17525[(4)])));

return statearr_17568;
})();
var state_17525__$1 = state_17525;
var ex17559 = (state_17525__$1[(2)]);
var statearr_17569_19713 = state_17525__$1;
(statearr_17569_19713[(5)] = ex17559);


if((ex17559 instanceof Object)){
var statearr_17577_19714 = state_17525__$1;
(statearr_17577_19714[(1)] = (11));

(statearr_17577_19714[(5)] = null);

} else {
throw ex17559;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (2))){
var inst_17463 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17464 = cnt;
var inst_17466 = (0);
var state_17525__$1 = (function (){var statearr_17597 = state_17525;
(statearr_17597[(7)] = inst_17466);

(statearr_17597[(11)] = inst_17463);

(statearr_17597[(8)] = inst_17464);

return statearr_17597;
})();
var statearr_17598_19717 = state_17525__$1;
(statearr_17598_19717[(2)] = null);

(statearr_17598_19717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (11))){
var inst_17477 = (state_17525[(2)]);
var inst_17482 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17525__$1 = (function (){var statearr_17599 = state_17525;
(statearr_17599[(12)] = inst_17477);

return statearr_17599;
})();
var statearr_17600_19720 = state_17525__$1;
(statearr_17600_19720[(2)] = inst_17482);

(statearr_17600_19720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (9))){
var inst_17466 = (state_17525[(7)]);
var _ = (function (){var statearr_17601 = state_17525;
(statearr_17601[(4)] = cljs.core.cons((12),(state_17525[(4)])));

return statearr_17601;
})();
var inst_17492 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17466) : chs__$1.call(null,inst_17466));
var inst_17493 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17466) : done.call(null,inst_17466));
var inst_17494 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17492,inst_17493);
var ___$1 = (function (){var statearr_17609 = state_17525;
(statearr_17609[(4)] = cljs.core.rest((state_17525[(4)])));

return statearr_17609;
})();
var state_17525__$1 = state_17525;
var statearr_17610_19721 = state_17525__$1;
(statearr_17610_19721[(2)] = inst_17494);

(statearr_17610_19721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (5))){
var inst_17508 = (state_17525[(2)]);
var state_17525__$1 = (function (){var statearr_17614 = state_17525;
(statearr_17614[(13)] = inst_17508);

return statearr_17614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17525__$1,(13),dchan);
} else {
if((state_val_17526 === (14))){
var inst_17513 = cljs.core.async.close_BANG_(out);
var state_17525__$1 = state_17525;
var statearr_17615_19725 = state_17525__$1;
(statearr_17615_19725[(2)] = inst_17513);

(statearr_17615_19725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (16))){
var inst_17520 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17616_19726 = state_17525__$1;
(statearr_17616_19726[(2)] = inst_17520);

(statearr_17616_19726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (10))){
var inst_17466 = (state_17525[(7)]);
var inst_17497 = (state_17525[(2)]);
var inst_17498 = (inst_17466 + (1));
var inst_17466__$1 = inst_17498;
var state_17525__$1 = (function (){var statearr_17617 = state_17525;
(statearr_17617[(7)] = inst_17466__$1);

(statearr_17617[(14)] = inst_17497);

return statearr_17617;
})();
var statearr_17618_19731 = state_17525__$1;
(statearr_17618_19731[(2)] = null);

(statearr_17618_19731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (8))){
var inst_17502 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17619_19732 = state_17525__$1;
(statearr_17619_19732[(2)] = inst_17502);

(statearr_17619_19732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_17627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17627[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_17627[(1)] = (1));

return statearr_17627;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_17525){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_17525);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e17631){var ex__13646__auto__ = e17631;
var statearr_17632_19736 = state_17525;
(statearr_17632_19736[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_17525[(4)]))){
var statearr_17634_19737 = state_17525;
(statearr_17634_19737[(1)] = cljs.core.first((state_17525[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19738 = state_17525;
state_17525 = G__19738;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_17525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_17525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_17638 = f__14835__auto__();
(statearr_17638[(6)] = c__14834__auto___19696);

return statearr_17638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17645 = arguments.length;
switch (G__17645) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14834__auto___19743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_17683){
var state_val_17684 = (state_17683[(1)]);
if((state_val_17684 === (7))){
var inst_17658 = (state_17683[(7)]);
var inst_17660 = (state_17683[(8)]);
var inst_17658__$1 = (state_17683[(2)]);
var inst_17660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17658__$1,(0),null);
var inst_17661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17658__$1,(1),null);
var inst_17662 = (inst_17660__$1 == null);
var state_17683__$1 = (function (){var statearr_17685 = state_17683;
(statearr_17685[(9)] = inst_17661);

(statearr_17685[(7)] = inst_17658__$1);

(statearr_17685[(8)] = inst_17660__$1);

return statearr_17685;
})();
if(cljs.core.truth_(inst_17662)){
var statearr_17686_19744 = state_17683__$1;
(statearr_17686_19744[(1)] = (8));

} else {
var statearr_17687_19745 = state_17683__$1;
(statearr_17687_19745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (1))){
var inst_17648 = cljs.core.vec(chs);
var inst_17649 = inst_17648;
var state_17683__$1 = (function (){var statearr_17688 = state_17683;
(statearr_17688[(10)] = inst_17649);

return statearr_17688;
})();
var statearr_17689_19746 = state_17683__$1;
(statearr_17689_19746[(2)] = null);

(statearr_17689_19746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (4))){
var inst_17649 = (state_17683[(10)]);
var state_17683__$1 = state_17683;
return cljs.core.async.ioc_alts_BANG_(state_17683__$1,(7),inst_17649);
} else {
if((state_val_17684 === (6))){
var inst_17676 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17690_19747 = state_17683__$1;
(statearr_17690_19747[(2)] = inst_17676);

(statearr_17690_19747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (3))){
var inst_17678 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17683__$1,inst_17678);
} else {
if((state_val_17684 === (2))){
var inst_17649 = (state_17683[(10)]);
var inst_17651 = cljs.core.count(inst_17649);
var inst_17652 = (inst_17651 > (0));
var state_17683__$1 = state_17683;
if(cljs.core.truth_(inst_17652)){
var statearr_17696_19748 = state_17683__$1;
(statearr_17696_19748[(1)] = (4));

} else {
var statearr_17697_19750 = state_17683__$1;
(statearr_17697_19750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (11))){
var inst_17649 = (state_17683[(10)]);
var inst_17669 = (state_17683[(2)]);
var tmp17693 = inst_17649;
var inst_17649__$1 = tmp17693;
var state_17683__$1 = (function (){var statearr_17698 = state_17683;
(statearr_17698[(10)] = inst_17649__$1);

(statearr_17698[(11)] = inst_17669);

return statearr_17698;
})();
var statearr_17699_19752 = state_17683__$1;
(statearr_17699_19752[(2)] = null);

(statearr_17699_19752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (9))){
var inst_17660 = (state_17683[(8)]);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17683__$1,(11),out,inst_17660);
} else {
if((state_val_17684 === (5))){
var inst_17674 = cljs.core.async.close_BANG_(out);
var state_17683__$1 = state_17683;
var statearr_17704_19753 = state_17683__$1;
(statearr_17704_19753[(2)] = inst_17674);

(statearr_17704_19753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (10))){
var inst_17672 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17708_19754 = state_17683__$1;
(statearr_17708_19754[(2)] = inst_17672);

(statearr_17708_19754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17684 === (8))){
var inst_17661 = (state_17683[(9)]);
var inst_17658 = (state_17683[(7)]);
var inst_17660 = (state_17683[(8)]);
var inst_17649 = (state_17683[(10)]);
var inst_17664 = (function (){var cs = inst_17649;
var vec__17654 = inst_17658;
var v = inst_17660;
var c = inst_17661;
return (function (p1__17643_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17643_SHARP_);
});
})();
var inst_17665 = cljs.core.filterv(inst_17664,inst_17649);
var inst_17649__$1 = inst_17665;
var state_17683__$1 = (function (){var statearr_17709 = state_17683;
(statearr_17709[(10)] = inst_17649__$1);

return statearr_17709;
})();
var statearr_17710_19759 = state_17683__$1;
(statearr_17710_19759[(2)] = null);

(statearr_17710_19759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_17713 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17713[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_17713[(1)] = (1));

return statearr_17713;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_17683){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_17683);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e17720){var ex__13646__auto__ = e17720;
var statearr_17721_19761 = state_17683;
(statearr_17721_19761[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_17683[(4)]))){
var statearr_17723_19762 = state_17683;
(statearr_17723_19762[(1)] = cljs.core.first((state_17683[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19764 = state_17683;
state_17683 = G__19764;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_17683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_17683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_17727 = f__14835__auto__();
(statearr_17727[(6)] = c__14834__auto___19743);

return statearr_17727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17744 = arguments.length;
switch (G__17744) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14834__auto___19774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_17783){
var state_val_17784 = (state_17783[(1)]);
if((state_val_17784 === (7))){
var inst_17755 = (state_17783[(7)]);
var inst_17755__$1 = (state_17783[(2)]);
var inst_17760 = (inst_17755__$1 == null);
var inst_17761 = cljs.core.not(inst_17760);
var state_17783__$1 = (function (){var statearr_17788 = state_17783;
(statearr_17788[(7)] = inst_17755__$1);

return statearr_17788;
})();
if(inst_17761){
var statearr_17792_19778 = state_17783__$1;
(statearr_17792_19778[(1)] = (8));

} else {
var statearr_17793_19779 = state_17783__$1;
(statearr_17793_19779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (1))){
var inst_17750 = (0);
var state_17783__$1 = (function (){var statearr_17794 = state_17783;
(statearr_17794[(8)] = inst_17750);

return statearr_17794;
})();
var statearr_17796_19783 = state_17783__$1;
(statearr_17796_19783[(2)] = null);

(statearr_17796_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (4))){
var state_17783__$1 = state_17783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17783__$1,(7),ch);
} else {
if((state_val_17784 === (6))){
var inst_17775 = (state_17783[(2)]);
var state_17783__$1 = state_17783;
var statearr_17798_19784 = state_17783__$1;
(statearr_17798_19784[(2)] = inst_17775);

(statearr_17798_19784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (3))){
var inst_17777 = (state_17783[(2)]);
var inst_17778 = cljs.core.async.close_BANG_(out);
var state_17783__$1 = (function (){var statearr_17799 = state_17783;
(statearr_17799[(9)] = inst_17777);

return statearr_17799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17783__$1,inst_17778);
} else {
if((state_val_17784 === (2))){
var inst_17750 = (state_17783[(8)]);
var inst_17752 = (inst_17750 < n);
var state_17783__$1 = state_17783;
if(cljs.core.truth_(inst_17752)){
var statearr_17801_19785 = state_17783__$1;
(statearr_17801_19785[(1)] = (4));

} else {
var statearr_17802_19786 = state_17783__$1;
(statearr_17802_19786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (11))){
var inst_17750 = (state_17783[(8)]);
var inst_17767 = (state_17783[(2)]);
var inst_17768 = (inst_17750 + (1));
var inst_17750__$1 = inst_17768;
var state_17783__$1 = (function (){var statearr_17811 = state_17783;
(statearr_17811[(8)] = inst_17750__$1);

(statearr_17811[(10)] = inst_17767);

return statearr_17811;
})();
var statearr_17812_19790 = state_17783__$1;
(statearr_17812_19790[(2)] = null);

(statearr_17812_19790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (9))){
var state_17783__$1 = state_17783;
var statearr_17813_19791 = state_17783__$1;
(statearr_17813_19791[(2)] = null);

(statearr_17813_19791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (5))){
var state_17783__$1 = state_17783;
var statearr_17816_19792 = state_17783__$1;
(statearr_17816_19792[(2)] = null);

(statearr_17816_19792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (10))){
var inst_17772 = (state_17783[(2)]);
var state_17783__$1 = state_17783;
var statearr_17817_19793 = state_17783__$1;
(statearr_17817_19793[(2)] = inst_17772);

(statearr_17817_19793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17784 === (8))){
var inst_17755 = (state_17783[(7)]);
var state_17783__$1 = state_17783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17783__$1,(11),out,inst_17755);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_17822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17822[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_17822[(1)] = (1));

return statearr_17822;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_17783){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_17783);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e17823){var ex__13646__auto__ = e17823;
var statearr_17824_19797 = state_17783;
(statearr_17824_19797[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_17783[(4)]))){
var statearr_17825_19798 = state_17783;
(statearr_17825_19798[(1)] = cljs.core.first((state_17783[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19799 = state_17783;
state_17783 = G__19799;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_17783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_17783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_17834 = f__14835__auto__();
(statearr_17834[(6)] = c__14834__auto___19774);

return statearr_17834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17852 = (function (f,ch,meta17846,_,fn1,meta17853){
this.f = f;
this.ch = ch;
this.meta17846 = meta17846;
this._ = _;
this.fn1 = fn1;
this.meta17853 = meta17853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17854,meta17853__$1){
var self__ = this;
var _17854__$1 = this;
return (new cljs.core.async.t_cljs$core$async17852(self__.f,self__.ch,self__.meta17846,self__._,self__.fn1,meta17853__$1));
}));

(cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17854){
var self__ = this;
var _17854__$1 = this;
return self__.meta17853;
}));

(cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17844_SHARP_){
var G__17861 = (((p1__17844_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17844_SHARP_) : self__.f.call(null,p1__17844_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17861) : f1.call(null,G__17861));
});
}));

(cljs.core.async.t_cljs$core$async17852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17846","meta17846",1035509202,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17845","cljs.core.async/t_cljs$core$async17845",292292363,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17853","meta17853",1195669260,null)], null);
}));

(cljs.core.async.t_cljs$core$async17852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17852");

(cljs.core.async.t_cljs$core$async17852.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17852.
 */
cljs.core.async.__GT_t_cljs$core$async17852 = (function cljs$core$async$__GT_t_cljs$core$async17852(f,ch,meta17846,_,fn1,meta17853){
return (new cljs.core.async.t_cljs$core$async17852(f,ch,meta17846,_,fn1,meta17853));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17845 = (function (f,ch,meta17846){
this.f = f;
this.ch = ch;
this.meta17846 = meta17846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17847,meta17846__$1){
var self__ = this;
var _17847__$1 = this;
return (new cljs.core.async.t_cljs$core$async17845(self__.f,self__.ch,meta17846__$1));
}));

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17847){
var self__ = this;
var _17847__$1 = this;
return self__.meta17846;
}));

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17852(self__.f,self__.ch,self__.meta17846,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17913 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17913) : self__.f.call(null,G__17913));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17846","meta17846",1035509202,null)], null);
}));

(cljs.core.async.t_cljs$core$async17845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17845");

(cljs.core.async.t_cljs$core$async17845.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17845.
 */
cljs.core.async.__GT_t_cljs$core$async17845 = (function cljs$core$async$__GT_t_cljs$core$async17845(f,ch,meta17846){
return (new cljs.core.async.t_cljs$core$async17845(f,ch,meta17846));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17845(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17931 = (function (f,ch,meta17932){
this.f = f;
this.ch = ch;
this.meta17932 = meta17932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17933,meta17932__$1){
var self__ = this;
var _17933__$1 = this;
return (new cljs.core.async.t_cljs$core$async17931(self__.f,self__.ch,meta17932__$1));
}));

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17933){
var self__ = this;
var _17933__$1 = this;
return self__.meta17932;
}));

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17932","meta17932",-154195254,null)], null);
}));

(cljs.core.async.t_cljs$core$async17931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17931");

(cljs.core.async.t_cljs$core$async17931.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17931.
 */
cljs.core.async.__GT_t_cljs$core$async17931 = (function cljs$core$async$__GT_t_cljs$core$async17931(f,ch,meta17932){
return (new cljs.core.async.t_cljs$core$async17931(f,ch,meta17932));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17931(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17965 = (function (p,ch,meta17966){
this.p = p;
this.ch = ch;
this.meta17966 = meta17966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17967,meta17966__$1){
var self__ = this;
var _17967__$1 = this;
return (new cljs.core.async.t_cljs$core$async17965(self__.p,self__.ch,meta17966__$1));
}));

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17967){
var self__ = this;
var _17967__$1 = this;
return self__.meta17966;
}));

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17966","meta17966",-1756319665,null)], null);
}));

(cljs.core.async.t_cljs$core$async17965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17965");

(cljs.core.async.t_cljs$core$async17965.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17965.
 */
cljs.core.async.__GT_t_cljs$core$async17965 = (function cljs$core$async$__GT_t_cljs$core$async17965(p,ch,meta17966){
return (new cljs.core.async.t_cljs$core$async17965(p,ch,meta17966));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17965(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18002 = arguments.length;
switch (G__18002) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14834__auto___19812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_18033){
var state_val_18034 = (state_18033[(1)]);
if((state_val_18034 === (7))){
var inst_18029 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18044_19813 = state_18033__$1;
(statearr_18044_19813[(2)] = inst_18029);

(statearr_18044_19813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (1))){
var state_18033__$1 = state_18033;
var statearr_18048_19814 = state_18033__$1;
(statearr_18048_19814[(2)] = null);

(statearr_18048_19814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (4))){
var inst_18014 = (state_18033[(7)]);
var inst_18014__$1 = (state_18033[(2)]);
var inst_18015 = (inst_18014__$1 == null);
var state_18033__$1 = (function (){var statearr_18049 = state_18033;
(statearr_18049[(7)] = inst_18014__$1);

return statearr_18049;
})();
if(cljs.core.truth_(inst_18015)){
var statearr_18052_19815 = state_18033__$1;
(statearr_18052_19815[(1)] = (5));

} else {
var statearr_18053_19816 = state_18033__$1;
(statearr_18053_19816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (6))){
var inst_18014 = (state_18033[(7)]);
var inst_18020 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18014) : p.call(null,inst_18014));
var state_18033__$1 = state_18033;
if(cljs.core.truth_(inst_18020)){
var statearr_18055_19821 = state_18033__$1;
(statearr_18055_19821[(1)] = (8));

} else {
var statearr_18056_19822 = state_18033__$1;
(statearr_18056_19822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (3))){
var inst_18031 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18033__$1,inst_18031);
} else {
if((state_val_18034 === (2))){
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18033__$1,(4),ch);
} else {
if((state_val_18034 === (11))){
var inst_18023 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18066_19825 = state_18033__$1;
(statearr_18066_19825[(2)] = inst_18023);

(statearr_18066_19825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (9))){
var state_18033__$1 = state_18033;
var statearr_18067_19826 = state_18033__$1;
(statearr_18067_19826[(2)] = null);

(statearr_18067_19826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (5))){
var inst_18017 = cljs.core.async.close_BANG_(out);
var state_18033__$1 = state_18033;
var statearr_18068_19832 = state_18033__$1;
(statearr_18068_19832[(2)] = inst_18017);

(statearr_18068_19832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (10))){
var inst_18026 = (state_18033[(2)]);
var state_18033__$1 = (function (){var statearr_18069 = state_18033;
(statearr_18069[(8)] = inst_18026);

return statearr_18069;
})();
var statearr_18071_19833 = state_18033__$1;
(statearr_18071_19833[(2)] = null);

(statearr_18071_19833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (8))){
var inst_18014 = (state_18033[(7)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18033__$1,(11),out,inst_18014);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_18073 = [null,null,null,null,null,null,null,null,null];
(statearr_18073[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_18073[(1)] = (1));

return statearr_18073;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_18033){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_18033);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e18074){var ex__13646__auto__ = e18074;
var statearr_18075_19834 = state_18033;
(statearr_18075_19834[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_18033[(4)]))){
var statearr_18076_19835 = state_18033;
(statearr_18076_19835[(1)] = cljs.core.first((state_18033[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19836 = state_18033;
state_18033 = G__19836;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_18033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_18033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_18078 = f__14835__auto__();
(statearr_18078[(6)] = c__14834__auto___19812);

return statearr_18078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18081 = arguments.length;
switch (G__18081) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_18178){
var state_val_18179 = (state_18178[(1)]);
if((state_val_18179 === (7))){
var inst_18173 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
var statearr_18188_19851 = state_18178__$1;
(statearr_18188_19851[(2)] = inst_18173);

(statearr_18188_19851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (20))){
var inst_18143 = (state_18178[(7)]);
var inst_18154 = (state_18178[(2)]);
var inst_18155 = cljs.core.next(inst_18143);
var inst_18116 = inst_18155;
var inst_18117 = null;
var inst_18118 = (0);
var inst_18119 = (0);
var state_18178__$1 = (function (){var statearr_18196 = state_18178;
(statearr_18196[(8)] = inst_18116);

(statearr_18196[(9)] = inst_18118);

(statearr_18196[(10)] = inst_18119);

(statearr_18196[(11)] = inst_18117);

(statearr_18196[(12)] = inst_18154);

return statearr_18196;
})();
var statearr_18200_19853 = state_18178__$1;
(statearr_18200_19853[(2)] = null);

(statearr_18200_19853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (1))){
var state_18178__$1 = state_18178;
var statearr_18207_19854 = state_18178__$1;
(statearr_18207_19854[(2)] = null);

(statearr_18207_19854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (4))){
var inst_18093 = (state_18178[(13)]);
var inst_18093__$1 = (state_18178[(2)]);
var inst_18095 = (inst_18093__$1 == null);
var state_18178__$1 = (function (){var statearr_18208 = state_18178;
(statearr_18208[(13)] = inst_18093__$1);

return statearr_18208;
})();
if(cljs.core.truth_(inst_18095)){
var statearr_18209_19855 = state_18178__$1;
(statearr_18209_19855[(1)] = (5));

} else {
var statearr_18210_19856 = state_18178__$1;
(statearr_18210_19856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (15))){
var state_18178__$1 = state_18178;
var statearr_18215_19858 = state_18178__$1;
(statearr_18215_19858[(2)] = null);

(statearr_18215_19858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (21))){
var state_18178__$1 = state_18178;
var statearr_18216_19859 = state_18178__$1;
(statearr_18216_19859[(2)] = null);

(statearr_18216_19859[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (13))){
var inst_18116 = (state_18178[(8)]);
var inst_18118 = (state_18178[(9)]);
var inst_18119 = (state_18178[(10)]);
var inst_18117 = (state_18178[(11)]);
var inst_18137 = (state_18178[(2)]);
var inst_18138 = (inst_18119 + (1));
var tmp18212 = inst_18116;
var tmp18213 = inst_18118;
var tmp18214 = inst_18117;
var inst_18116__$1 = tmp18212;
var inst_18117__$1 = tmp18214;
var inst_18118__$1 = tmp18213;
var inst_18119__$1 = inst_18138;
var state_18178__$1 = (function (){var statearr_18218 = state_18178;
(statearr_18218[(8)] = inst_18116__$1);

(statearr_18218[(14)] = inst_18137);

(statearr_18218[(9)] = inst_18118__$1);

(statearr_18218[(10)] = inst_18119__$1);

(statearr_18218[(11)] = inst_18117__$1);

return statearr_18218;
})();
var statearr_18219_19865 = state_18178__$1;
(statearr_18219_19865[(2)] = null);

(statearr_18219_19865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (22))){
var state_18178__$1 = state_18178;
var statearr_18220_19869 = state_18178__$1;
(statearr_18220_19869[(2)] = null);

(statearr_18220_19869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (6))){
var inst_18093 = (state_18178[(13)]);
var inst_18103 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18093) : f.call(null,inst_18093));
var inst_18104 = cljs.core.seq(inst_18103);
var inst_18116 = inst_18104;
var inst_18117 = null;
var inst_18118 = (0);
var inst_18119 = (0);
var state_18178__$1 = (function (){var statearr_18223 = state_18178;
(statearr_18223[(8)] = inst_18116);

(statearr_18223[(9)] = inst_18118);

(statearr_18223[(10)] = inst_18119);

(statearr_18223[(11)] = inst_18117);

return statearr_18223;
})();
var statearr_18229_19871 = state_18178__$1;
(statearr_18229_19871[(2)] = null);

(statearr_18229_19871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (17))){
var inst_18143 = (state_18178[(7)]);
var inst_18147 = cljs.core.chunk_first(inst_18143);
var inst_18148 = cljs.core.chunk_rest(inst_18143);
var inst_18149 = cljs.core.count(inst_18147);
var inst_18116 = inst_18148;
var inst_18117 = inst_18147;
var inst_18118 = inst_18149;
var inst_18119 = (0);
var state_18178__$1 = (function (){var statearr_18235 = state_18178;
(statearr_18235[(8)] = inst_18116);

(statearr_18235[(9)] = inst_18118);

(statearr_18235[(10)] = inst_18119);

(statearr_18235[(11)] = inst_18117);

return statearr_18235;
})();
var statearr_18236_19875 = state_18178__$1;
(statearr_18236_19875[(2)] = null);

(statearr_18236_19875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (3))){
var inst_18175 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18178__$1,inst_18175);
} else {
if((state_val_18179 === (12))){
var inst_18163 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
var statearr_18243_19876 = state_18178__$1;
(statearr_18243_19876[(2)] = inst_18163);

(statearr_18243_19876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (2))){
var state_18178__$1 = state_18178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18178__$1,(4),in$);
} else {
if((state_val_18179 === (23))){
var inst_18171 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
var statearr_18246_19877 = state_18178__$1;
(statearr_18246_19877[(2)] = inst_18171);

(statearr_18246_19877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (19))){
var inst_18158 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
var statearr_18250_19878 = state_18178__$1;
(statearr_18250_19878[(2)] = inst_18158);

(statearr_18250_19878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (11))){
var inst_18116 = (state_18178[(8)]);
var inst_18143 = (state_18178[(7)]);
var inst_18143__$1 = cljs.core.seq(inst_18116);
var state_18178__$1 = (function (){var statearr_18252 = state_18178;
(statearr_18252[(7)] = inst_18143__$1);

return statearr_18252;
})();
if(inst_18143__$1){
var statearr_18253_19884 = state_18178__$1;
(statearr_18253_19884[(1)] = (14));

} else {
var statearr_18254_19885 = state_18178__$1;
(statearr_18254_19885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (9))){
var inst_18165 = (state_18178[(2)]);
var inst_18166 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18178__$1 = (function (){var statearr_18264 = state_18178;
(statearr_18264[(15)] = inst_18165);

return statearr_18264;
})();
if(cljs.core.truth_(inst_18166)){
var statearr_18265_19886 = state_18178__$1;
(statearr_18265_19886[(1)] = (21));

} else {
var statearr_18267_19887 = state_18178__$1;
(statearr_18267_19887[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (5))){
var inst_18097 = cljs.core.async.close_BANG_(out);
var state_18178__$1 = state_18178;
var statearr_18269_19888 = state_18178__$1;
(statearr_18269_19888[(2)] = inst_18097);

(statearr_18269_19888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (14))){
var inst_18143 = (state_18178[(7)]);
var inst_18145 = cljs.core.chunked_seq_QMARK_(inst_18143);
var state_18178__$1 = state_18178;
if(inst_18145){
var statearr_18270_19889 = state_18178__$1;
(statearr_18270_19889[(1)] = (17));

} else {
var statearr_18272_19890 = state_18178__$1;
(statearr_18272_19890[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (16))){
var inst_18161 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
var statearr_18279_19891 = state_18178__$1;
(statearr_18279_19891[(2)] = inst_18161);

(statearr_18279_19891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18179 === (10))){
var inst_18119 = (state_18178[(10)]);
var inst_18117 = (state_18178[(11)]);
var inst_18135 = cljs.core._nth(inst_18117,inst_18119);
var state_18178__$1 = state_18178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18178__$1,(13),out,inst_18135);
} else {
if((state_val_18179 === (18))){
var inst_18143 = (state_18178[(7)]);
var inst_18152 = cljs.core.first(inst_18143);
var state_18178__$1 = state_18178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18178__$1,(20),out,inst_18152);
} else {
if((state_val_18179 === (8))){
var inst_18118 = (state_18178[(9)]);
var inst_18119 = (state_18178[(10)]);
var inst_18123 = (inst_18119 < inst_18118);
var inst_18124 = inst_18123;
var state_18178__$1 = state_18178;
if(cljs.core.truth_(inst_18124)){
var statearr_18280_19902 = state_18178__$1;
(statearr_18280_19902[(1)] = (10));

} else {
var statearr_18281_19903 = state_18178__$1;
(statearr_18281_19903[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13643__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13643__auto____0 = (function (){
var statearr_18283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13643__auto__);

(statearr_18283[(1)] = (1));

return statearr_18283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13643__auto____1 = (function (state_18178){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_18178);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e18285){var ex__13646__auto__ = e18285;
var statearr_18287_19906 = state_18178;
(statearr_18287_19906[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_18178[(4)]))){
var statearr_18288_19907 = state_18178;
(statearr_18288_19907[(1)] = cljs.core.first((state_18178[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19908 = state_18178;
state_18178 = G__19908;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13643__auto__ = function(state_18178){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13643__auto____1.call(this,state_18178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13643__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13643__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_18295 = f__14835__auto__();
(statearr_18295[(6)] = c__14834__auto__);

return statearr_18295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

return c__14834__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18297 = arguments.length;
switch (G__18297) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18312 = arguments.length;
switch (G__18312) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18326 = arguments.length;
switch (G__18326) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14834__auto___19926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_18354){
var state_val_18355 = (state_18354[(1)]);
if((state_val_18355 === (7))){
var inst_18349 = (state_18354[(2)]);
var state_18354__$1 = state_18354;
var statearr_18358_19927 = state_18354__$1;
(statearr_18358_19927[(2)] = inst_18349);

(statearr_18358_19927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (1))){
var inst_18330 = null;
var state_18354__$1 = (function (){var statearr_18359 = state_18354;
(statearr_18359[(7)] = inst_18330);

return statearr_18359;
})();
var statearr_18361_19928 = state_18354__$1;
(statearr_18361_19928[(2)] = null);

(statearr_18361_19928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (4))){
var inst_18333 = (state_18354[(8)]);
var inst_18333__$1 = (state_18354[(2)]);
var inst_18335 = (inst_18333__$1 == null);
var inst_18336 = cljs.core.not(inst_18335);
var state_18354__$1 = (function (){var statearr_18366 = state_18354;
(statearr_18366[(8)] = inst_18333__$1);

return statearr_18366;
})();
if(inst_18336){
var statearr_18368_19929 = state_18354__$1;
(statearr_18368_19929[(1)] = (5));

} else {
var statearr_18369_19930 = state_18354__$1;
(statearr_18369_19930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (6))){
var state_18354__$1 = state_18354;
var statearr_18370_19931 = state_18354__$1;
(statearr_18370_19931[(2)] = null);

(statearr_18370_19931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (3))){
var inst_18351 = (state_18354[(2)]);
var inst_18352 = cljs.core.async.close_BANG_(out);
var state_18354__$1 = (function (){var statearr_18372 = state_18354;
(statearr_18372[(9)] = inst_18351);

return statearr_18372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18354__$1,inst_18352);
} else {
if((state_val_18355 === (2))){
var state_18354__$1 = state_18354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18354__$1,(4),ch);
} else {
if((state_val_18355 === (11))){
var inst_18333 = (state_18354[(8)]);
var inst_18343 = (state_18354[(2)]);
var inst_18330 = inst_18333;
var state_18354__$1 = (function (){var statearr_18374 = state_18354;
(statearr_18374[(10)] = inst_18343);

(statearr_18374[(7)] = inst_18330);

return statearr_18374;
})();
var statearr_18377_19933 = state_18354__$1;
(statearr_18377_19933[(2)] = null);

(statearr_18377_19933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (9))){
var inst_18333 = (state_18354[(8)]);
var state_18354__$1 = state_18354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18354__$1,(11),out,inst_18333);
} else {
if((state_val_18355 === (5))){
var inst_18333 = (state_18354[(8)]);
var inst_18330 = (state_18354[(7)]);
var inst_18338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18333,inst_18330);
var state_18354__$1 = state_18354;
if(inst_18338){
var statearr_18381_19934 = state_18354__$1;
(statearr_18381_19934[(1)] = (8));

} else {
var statearr_18382_19935 = state_18354__$1;
(statearr_18382_19935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (10))){
var inst_18346 = (state_18354[(2)]);
var state_18354__$1 = state_18354;
var statearr_18383_19936 = state_18354__$1;
(statearr_18383_19936[(2)] = inst_18346);

(statearr_18383_19936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (8))){
var inst_18330 = (state_18354[(7)]);
var tmp18378 = inst_18330;
var inst_18330__$1 = tmp18378;
var state_18354__$1 = (function (){var statearr_18386 = state_18354;
(statearr_18386[(7)] = inst_18330__$1);

return statearr_18386;
})();
var statearr_18387_19938 = state_18354__$1;
(statearr_18387_19938[(2)] = null);

(statearr_18387_19938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_18389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18389[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_18389[(1)] = (1));

return statearr_18389;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_18354){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_18354);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e18390){var ex__13646__auto__ = e18390;
var statearr_18394_19939 = state_18354;
(statearr_18394_19939[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_18354[(4)]))){
var statearr_18395_19940 = state_18354;
(statearr_18395_19940[(1)] = cljs.core.first((state_18354[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19941 = state_18354;
state_18354 = G__19941;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_18354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_18354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_18399 = f__14835__auto__();
(statearr_18399[(6)] = c__14834__auto___19926);

return statearr_18399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18406 = arguments.length;
switch (G__18406) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14834__auto___19947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_18460){
var state_val_18461 = (state_18460[(1)]);
if((state_val_18461 === (7))){
var inst_18456 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18465_19950 = state_18460__$1;
(statearr_18465_19950[(2)] = inst_18456);

(statearr_18465_19950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (1))){
var inst_18415 = (new Array(n));
var inst_18417 = inst_18415;
var inst_18420 = (0);
var state_18460__$1 = (function (){var statearr_18466 = state_18460;
(statearr_18466[(7)] = inst_18420);

(statearr_18466[(8)] = inst_18417);

return statearr_18466;
})();
var statearr_18470_19953 = state_18460__$1;
(statearr_18470_19953[(2)] = null);

(statearr_18470_19953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (4))){
var inst_18423 = (state_18460[(9)]);
var inst_18423__$1 = (state_18460[(2)]);
var inst_18424 = (inst_18423__$1 == null);
var inst_18425 = cljs.core.not(inst_18424);
var state_18460__$1 = (function (){var statearr_18473 = state_18460;
(statearr_18473[(9)] = inst_18423__$1);

return statearr_18473;
})();
if(inst_18425){
var statearr_18474_19955 = state_18460__$1;
(statearr_18474_19955[(1)] = (5));

} else {
var statearr_18475_19958 = state_18460__$1;
(statearr_18475_19958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (15))){
var inst_18449 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18478_19963 = state_18460__$1;
(statearr_18478_19963[(2)] = inst_18449);

(statearr_18478_19963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (13))){
var state_18460__$1 = state_18460;
var statearr_18486_19964 = state_18460__$1;
(statearr_18486_19964[(2)] = null);

(statearr_18486_19964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (6))){
var inst_18420 = (state_18460[(7)]);
var inst_18444 = (inst_18420 > (0));
var state_18460__$1 = state_18460;
if(cljs.core.truth_(inst_18444)){
var statearr_18489_19965 = state_18460__$1;
(statearr_18489_19965[(1)] = (12));

} else {
var statearr_18491_19966 = state_18460__$1;
(statearr_18491_19966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (3))){
var inst_18458 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18460__$1,inst_18458);
} else {
if((state_val_18461 === (12))){
var inst_18417 = (state_18460[(8)]);
var inst_18446 = cljs.core.vec(inst_18417);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18460__$1,(15),out,inst_18446);
} else {
if((state_val_18461 === (2))){
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18460__$1,(4),ch);
} else {
if((state_val_18461 === (11))){
var inst_18438 = (state_18460[(2)]);
var inst_18439 = (new Array(n));
var inst_18417 = inst_18439;
var inst_18420 = (0);
var state_18460__$1 = (function (){var statearr_18494 = state_18460;
(statearr_18494[(10)] = inst_18438);

(statearr_18494[(7)] = inst_18420);

(statearr_18494[(8)] = inst_18417);

return statearr_18494;
})();
var statearr_18500_19967 = state_18460__$1;
(statearr_18500_19967[(2)] = null);

(statearr_18500_19967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (9))){
var inst_18417 = (state_18460[(8)]);
var inst_18436 = cljs.core.vec(inst_18417);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18460__$1,(11),out,inst_18436);
} else {
if((state_val_18461 === (5))){
var inst_18420 = (state_18460[(7)]);
var inst_18417 = (state_18460[(8)]);
var inst_18431 = (state_18460[(11)]);
var inst_18423 = (state_18460[(9)]);
var inst_18430 = (inst_18417[inst_18420] = inst_18423);
var inst_18431__$1 = (inst_18420 + (1));
var inst_18432 = (inst_18431__$1 < n);
var state_18460__$1 = (function (){var statearr_18522 = state_18460;
(statearr_18522[(12)] = inst_18430);

(statearr_18522[(11)] = inst_18431__$1);

return statearr_18522;
})();
if(cljs.core.truth_(inst_18432)){
var statearr_18523_19970 = state_18460__$1;
(statearr_18523_19970[(1)] = (8));

} else {
var statearr_18524_19971 = state_18460__$1;
(statearr_18524_19971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (14))){
var inst_18452 = (state_18460[(2)]);
var inst_18454 = cljs.core.async.close_BANG_(out);
var state_18460__$1 = (function (){var statearr_18528 = state_18460;
(statearr_18528[(13)] = inst_18452);

return statearr_18528;
})();
var statearr_18529_19972 = state_18460__$1;
(statearr_18529_19972[(2)] = inst_18454);

(statearr_18529_19972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (10))){
var inst_18442 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18530_19973 = state_18460__$1;
(statearr_18530_19973[(2)] = inst_18442);

(statearr_18530_19973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (8))){
var inst_18417 = (state_18460[(8)]);
var inst_18431 = (state_18460[(11)]);
var tmp18527 = inst_18417;
var inst_18417__$1 = tmp18527;
var inst_18420 = inst_18431;
var state_18460__$1 = (function (){var statearr_18535 = state_18460;
(statearr_18535[(7)] = inst_18420);

(statearr_18535[(8)] = inst_18417__$1);

return statearr_18535;
})();
var statearr_18536_19974 = state_18460__$1;
(statearr_18536_19974[(2)] = null);

(statearr_18536_19974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_18460){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_18460);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e18545){var ex__13646__auto__ = e18545;
var statearr_18546_19975 = state_18460;
(statearr_18546_19975[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_18460[(4)]))){
var statearr_18547_19976 = state_18460;
(statearr_18547_19976[(1)] = cljs.core.first((state_18460[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19977 = state_18460;
state_18460 = G__19977;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_18460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_18460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_18548 = f__14835__auto__();
(statearr_18548[(6)] = c__14834__auto___19947);

return statearr_18548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18551 = arguments.length;
switch (G__18551) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14834__auto___19985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_18605){
var state_val_18606 = (state_18605[(1)]);
if((state_val_18606 === (7))){
var inst_18601 = (state_18605[(2)]);
var state_18605__$1 = state_18605;
var statearr_18610_19986 = state_18605__$1;
(statearr_18610_19986[(2)] = inst_18601);

(statearr_18610_19986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (1))){
var inst_18558 = [];
var inst_18560 = inst_18558;
var inst_18561 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18605__$1 = (function (){var statearr_18611 = state_18605;
(statearr_18611[(7)] = inst_18561);

(statearr_18611[(8)] = inst_18560);

return statearr_18611;
})();
var statearr_18612_19987 = state_18605__$1;
(statearr_18612_19987[(2)] = null);

(statearr_18612_19987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (4))){
var inst_18564 = (state_18605[(9)]);
var inst_18564__$1 = (state_18605[(2)]);
var inst_18565 = (inst_18564__$1 == null);
var inst_18566 = cljs.core.not(inst_18565);
var state_18605__$1 = (function (){var statearr_18613 = state_18605;
(statearr_18613[(9)] = inst_18564__$1);

return statearr_18613;
})();
if(inst_18566){
var statearr_18614_19988 = state_18605__$1;
(statearr_18614_19988[(1)] = (5));

} else {
var statearr_18615_19989 = state_18605__$1;
(statearr_18615_19989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (15))){
var inst_18560 = (state_18605[(8)]);
var inst_18593 = cljs.core.vec(inst_18560);
var state_18605__$1 = state_18605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18605__$1,(18),out,inst_18593);
} else {
if((state_val_18606 === (13))){
var inst_18588 = (state_18605[(2)]);
var state_18605__$1 = state_18605;
var statearr_18619_19992 = state_18605__$1;
(statearr_18619_19992[(2)] = inst_18588);

(statearr_18619_19992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (6))){
var inst_18560 = (state_18605[(8)]);
var inst_18590 = inst_18560.length;
var inst_18591 = (inst_18590 > (0));
var state_18605__$1 = state_18605;
if(cljs.core.truth_(inst_18591)){
var statearr_18620_19993 = state_18605__$1;
(statearr_18620_19993[(1)] = (15));

} else {
var statearr_18621_19994 = state_18605__$1;
(statearr_18621_19994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (17))){
var inst_18598 = (state_18605[(2)]);
var inst_18599 = cljs.core.async.close_BANG_(out);
var state_18605__$1 = (function (){var statearr_18622 = state_18605;
(statearr_18622[(10)] = inst_18598);

return statearr_18622;
})();
var statearr_18623_19995 = state_18605__$1;
(statearr_18623_19995[(2)] = inst_18599);

(statearr_18623_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (3))){
var inst_18603 = (state_18605[(2)]);
var state_18605__$1 = state_18605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18605__$1,inst_18603);
} else {
if((state_val_18606 === (12))){
var inst_18560 = (state_18605[(8)]);
var inst_18579 = cljs.core.vec(inst_18560);
var state_18605__$1 = state_18605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18605__$1,(14),out,inst_18579);
} else {
if((state_val_18606 === (2))){
var state_18605__$1 = state_18605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18605__$1,(4),ch);
} else {
if((state_val_18606 === (11))){
var inst_18564 = (state_18605[(9)]);
var inst_18560 = (state_18605[(8)]);
var inst_18568 = (state_18605[(11)]);
var inst_18576 = inst_18560.push(inst_18564);
var tmp18627 = inst_18560;
var inst_18560__$1 = tmp18627;
var inst_18561 = inst_18568;
var state_18605__$1 = (function (){var statearr_18628 = state_18605;
(statearr_18628[(7)] = inst_18561);

(statearr_18628[(8)] = inst_18560__$1);

(statearr_18628[(12)] = inst_18576);

return statearr_18628;
})();
var statearr_18629_19996 = state_18605__$1;
(statearr_18629_19996[(2)] = null);

(statearr_18629_19996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (9))){
var inst_18561 = (state_18605[(7)]);
var inst_18572 = cljs.core.keyword_identical_QMARK_(inst_18561,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18605__$1 = state_18605;
var statearr_18633_19997 = state_18605__$1;
(statearr_18633_19997[(2)] = inst_18572);

(statearr_18633_19997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (5))){
var inst_18564 = (state_18605[(9)]);
var inst_18561 = (state_18605[(7)]);
var inst_18568 = (state_18605[(11)]);
var inst_18569 = (state_18605[(13)]);
var inst_18568__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18564) : f.call(null,inst_18564));
var inst_18569__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18568__$1,inst_18561);
var state_18605__$1 = (function (){var statearr_18634 = state_18605;
(statearr_18634[(11)] = inst_18568__$1);

(statearr_18634[(13)] = inst_18569__$1);

return statearr_18634;
})();
if(inst_18569__$1){
var statearr_18635_20007 = state_18605__$1;
(statearr_18635_20007[(1)] = (8));

} else {
var statearr_18636_20008 = state_18605__$1;
(statearr_18636_20008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (14))){
var inst_18564 = (state_18605[(9)]);
var inst_18568 = (state_18605[(11)]);
var inst_18581 = (state_18605[(2)]);
var inst_18582 = [];
var inst_18583 = inst_18582.push(inst_18564);
var inst_18560 = inst_18582;
var inst_18561 = inst_18568;
var state_18605__$1 = (function (){var statearr_18637 = state_18605;
(statearr_18637[(14)] = inst_18581);

(statearr_18637[(15)] = inst_18583);

(statearr_18637[(7)] = inst_18561);

(statearr_18637[(8)] = inst_18560);

return statearr_18637;
})();
var statearr_18638_20009 = state_18605__$1;
(statearr_18638_20009[(2)] = null);

(statearr_18638_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (16))){
var state_18605__$1 = state_18605;
var statearr_18639_20010 = state_18605__$1;
(statearr_18639_20010[(2)] = null);

(statearr_18639_20010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (10))){
var inst_18574 = (state_18605[(2)]);
var state_18605__$1 = state_18605;
if(cljs.core.truth_(inst_18574)){
var statearr_18640_20011 = state_18605__$1;
(statearr_18640_20011[(1)] = (11));

} else {
var statearr_18641_20012 = state_18605__$1;
(statearr_18641_20012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (18))){
var inst_18595 = (state_18605[(2)]);
var state_18605__$1 = state_18605;
var statearr_18642_20013 = state_18605__$1;
(statearr_18642_20013[(2)] = inst_18595);

(statearr_18642_20013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18606 === (8))){
var inst_18569 = (state_18605[(13)]);
var state_18605__$1 = state_18605;
var statearr_18646_20014 = state_18605__$1;
(statearr_18646_20014[(2)] = inst_18569);

(statearr_18646_20014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13643__auto__ = null;
var cljs$core$async$state_machine__13643__auto____0 = (function (){
var statearr_18648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18648[(0)] = cljs$core$async$state_machine__13643__auto__);

(statearr_18648[(1)] = (1));

return statearr_18648;
});
var cljs$core$async$state_machine__13643__auto____1 = (function (state_18605){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_18605);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e18649){var ex__13646__auto__ = e18649;
var statearr_18651_20019 = state_18605;
(statearr_18651_20019[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_18605[(4)]))){
var statearr_18655_20020 = state_18605;
(statearr_18655_20020[(1)] = cljs.core.first((state_18605[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20021 = state_18605;
state_18605 = G__20021;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs$core$async$state_machine__13643__auto__ = function(state_18605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13643__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13643__auto____1.call(this,state_18605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13643__auto____0;
cljs$core$async$state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13643__auto____1;
return cljs$core$async$state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_18658 = f__14835__auto__();
(statearr_18658[(6)] = c__14834__auto___19985);

return statearr_18658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
