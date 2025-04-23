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
cljs.core.async.t_cljs$core$async15199 = (function (f,blockable,meta15200){
this.f = f;
this.blockable = blockable;
this.meta15200 = meta15200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15201,meta15200__$1){
var self__ = this;
var _15201__$1 = this;
return (new cljs.core.async.t_cljs$core$async15199(self__.f,self__.blockable,meta15200__$1));
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15201){
var self__ = this;
var _15201__$1 = this;
return self__.meta15200;
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15200","meta15200",-1201557543,null)], null);
}));

(cljs.core.async.t_cljs$core$async15199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15199");

(cljs.core.async.t_cljs$core$async15199.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15199.
 */
cljs.core.async.__GT_t_cljs$core$async15199 = (function cljs$core$async$__GT_t_cljs$core$async15199(f,blockable,meta15200){
return (new cljs.core.async.t_cljs$core$async15199(f,blockable,meta15200));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15188 = arguments.length;
switch (G__15188) {
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
return (new cljs.core.async.t_cljs$core$async15199(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15220 = arguments.length;
switch (G__15220) {
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
var G__15239 = arguments.length;
switch (G__15239) {
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
var G__15267 = arguments.length;
switch (G__15267) {
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
var val_18833 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18833) : fn1.call(null,val_18833));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18833) : fn1.call(null,val_18833));
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
var G__15281 = arguments.length;
switch (G__15281) {
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
var n__5593__auto___18836 = n;
var x_18837 = (0);
while(true){
if((x_18837 < n__5593__auto___18836)){
(a[x_18837] = x_18837);

var G__18838 = (x_18837 + (1));
x_18837 = G__18838;
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
cljs.core.async.t_cljs$core$async15312 = (function (flag,meta15313){
this.flag = flag;
this.meta15313 = meta15313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15314,meta15313__$1){
var self__ = this;
var _15314__$1 = this;
return (new cljs.core.async.t_cljs$core$async15312(self__.flag,meta15313__$1));
}));

(cljs.core.async.t_cljs$core$async15312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15314){
var self__ = this;
var _15314__$1 = this;
return self__.meta15313;
}));

(cljs.core.async.t_cljs$core$async15312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15313","meta15313",-1213831982,null)], null);
}));

(cljs.core.async.t_cljs$core$async15312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15312");

(cljs.core.async.t_cljs$core$async15312.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15312.
 */
cljs.core.async.__GT_t_cljs$core$async15312 = (function cljs$core$async$__GT_t_cljs$core$async15312(flag,meta15313){
return (new cljs.core.async.t_cljs$core$async15312(flag,meta15313));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15312(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15346 = (function (flag,cb,meta15347){
this.flag = flag;
this.cb = cb;
this.meta15347 = meta15347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15348,meta15347__$1){
var self__ = this;
var _15348__$1 = this;
return (new cljs.core.async.t_cljs$core$async15346(self__.flag,self__.cb,meta15347__$1));
}));

(cljs.core.async.t_cljs$core$async15346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15348){
var self__ = this;
var _15348__$1 = this;
return self__.meta15347;
}));

(cljs.core.async.t_cljs$core$async15346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15347","meta15347",-1808899823,null)], null);
}));

(cljs.core.async.t_cljs$core$async15346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15346");

(cljs.core.async.t_cljs$core$async15346.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15346.
 */
cljs.core.async.__GT_t_cljs$core$async15346 = (function cljs$core$async$__GT_t_cljs$core$async15346(flag,cb,meta15347){
return (new cljs.core.async.t_cljs$core$async15346(flag,cb,meta15347));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15346(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15374_SHARP_){
var G__15388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15374_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15388) : fret.call(null,G__15388));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15375_SHARP_){
var G__15389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15375_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15389) : fret.call(null,G__15389));
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
var G__18844 = (i + (1));
i = G__18844;
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
var len__5726__auto___18846 = arguments.length;
var i__5727__auto___18847 = (0);
while(true){
if((i__5727__auto___18847 < len__5726__auto___18846)){
args__5732__auto__.push((arguments[i__5727__auto___18847]));

var G__18848 = (i__5727__auto___18847 + (1));
i__5727__auto___18847 = G__18848;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15415){
var map__15416 = p__15415;
var map__15416__$1 = cljs.core.__destructure_map(map__15416);
var opts = map__15416__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15403){
var G__15404 = cljs.core.first(seq15403);
var seq15403__$1 = cljs.core.next(seq15403);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15404,seq15403__$1);
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
var G__15422 = arguments.length;
switch (G__15422) {
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
var c__15045__auto___18855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_15500){
var state_val_15501 = (state_15500[(1)]);
if((state_val_15501 === (7))){
var inst_15490 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15526_18860 = state_15500__$1;
(statearr_15526_18860[(2)] = inst_15490);

(statearr_15526_18860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (1))){
var state_15500__$1 = state_15500;
var statearr_15527_18861 = state_15500__$1;
(statearr_15527_18861[(2)] = null);

(statearr_15527_18861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (4))){
var inst_15462 = (state_15500[(7)]);
var inst_15462__$1 = (state_15500[(2)]);
var inst_15467 = (inst_15462__$1 == null);
var state_15500__$1 = (function (){var statearr_15541 = state_15500;
(statearr_15541[(7)] = inst_15462__$1);

return statearr_15541;
})();
if(cljs.core.truth_(inst_15467)){
var statearr_15543_18862 = state_15500__$1;
(statearr_15543_18862[(1)] = (5));

} else {
var statearr_15551_18863 = state_15500__$1;
(statearr_15551_18863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (13))){
var state_15500__$1 = state_15500;
var statearr_15566_18866 = state_15500__$1;
(statearr_15566_18866[(2)] = null);

(statearr_15566_18866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (6))){
var inst_15462 = (state_15500[(7)]);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15500__$1,(11),to,inst_15462);
} else {
if((state_val_15501 === (3))){
var inst_15498 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15500__$1,inst_15498);
} else {
if((state_val_15501 === (12))){
var state_15500__$1 = state_15500;
var statearr_15570_18868 = state_15500__$1;
(statearr_15570_18868[(2)] = null);

(statearr_15570_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (2))){
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15500__$1,(4),from);
} else {
if((state_val_15501 === (11))){
var inst_15480 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
if(cljs.core.truth_(inst_15480)){
var statearr_15571_18872 = state_15500__$1;
(statearr_15571_18872[(1)] = (12));

} else {
var statearr_15572_18873 = state_15500__$1;
(statearr_15572_18873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (9))){
var state_15500__$1 = state_15500;
var statearr_15573_18874 = state_15500__$1;
(statearr_15573_18874[(2)] = null);

(statearr_15573_18874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (5))){
var state_15500__$1 = state_15500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15574_18875 = state_15500__$1;
(statearr_15574_18875[(1)] = (8));

} else {
var statearr_15576_18877 = state_15500__$1;
(statearr_15576_18877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (14))){
var inst_15487 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15577_18884 = state_15500__$1;
(statearr_15577_18884[(2)] = inst_15487);

(statearr_15577_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (10))){
var inst_15476 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15578_18885 = state_15500__$1;
(statearr_15578_18885[(2)] = inst_15476);

(statearr_15578_18885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (8))){
var inst_15472 = cljs.core.async.close_BANG_(to);
var state_15500__$1 = state_15500;
var statearr_15580_18886 = state_15500__$1;
(statearr_15580_18886[(2)] = inst_15472);

(statearr_15580_18886[(1)] = (10));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_15587 = [null,null,null,null,null,null,null,null];
(statearr_15587[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_15587[(1)] = (1));

return statearr_15587;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_15500){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_15500);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e15589){var ex__13960__auto__ = e15589;
var statearr_15591_18890 = state_15500;
(statearr_15591_18890[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_15500[(4)]))){
var statearr_15593_18891 = state_15500;
(statearr_15593_18891[(1)] = cljs.core.first((state_15500[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18892 = state_15500;
state_15500 = G__18892;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_15500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_15500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_15599 = f__15046__auto__();
(statearr_15599[(6)] = c__15045__auto___18855);

return statearr_15599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
var process__$1 = (function (p__15613){
var vec__15619 = p__15613;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15619,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15619,(1),null);
var job = vec__15619;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15045__auto___18895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_15648){
var state_val_15649 = (state_15648[(1)]);
if((state_val_15649 === (1))){
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15648__$1,(2),res,v);
} else {
if((state_val_15649 === (2))){
var inst_15637 = (state_15648[(2)]);
var inst_15642 = cljs.core.async.close_BANG_(res);
var state_15648__$1 = (function (){var statearr_15694 = state_15648;
(statearr_15694[(7)] = inst_15637);

return statearr_15694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15648__$1,inst_15642);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0 = (function (){
var statearr_15719 = [null,null,null,null,null,null,null,null];
(statearr_15719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__);

(statearr_15719[(1)] = (1));

return statearr_15719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1 = (function (state_15648){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_15648);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e15733){var ex__13960__auto__ = e15733;
var statearr_15736_18899 = state_15648;
(statearr_15736_18899[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_15648[(4)]))){
var statearr_15739_18900 = state_15648;
(statearr_15739_18900[(1)] = cljs.core.first((state_15648[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18903 = state_15648;
state_15648 = G__18903;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = function(state_15648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1.call(this,state_15648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_15747 = f__15046__auto__();
(statearr_15747[(6)] = c__15045__auto___18895);

return statearr_15747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15762){
var vec__15768 = p__15762;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(1),null);
var job = vec__15768;
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
var n__5593__auto___18906 = n;
var __18907 = (0);
while(true){
if((__18907 < n__5593__auto___18906)){
var G__15779_18908 = type;
var G__15779_18909__$1 = (((G__15779_18908 instanceof cljs.core.Keyword))?G__15779_18908.fqn:null);
switch (G__15779_18909__$1) {
case "compute":
var c__15045__auto___18912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18907,c__15045__auto___18912,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async){
return (function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = ((function (__18907,c__15045__auto___18912,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async){
return (function (state_15802){
var state_val_15803 = (state_15802[(1)]);
if((state_val_15803 === (1))){
var state_15802__$1 = state_15802;
var statearr_15813_18915 = state_15802__$1;
(statearr_15813_18915[(2)] = null);

(statearr_15813_18915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15803 === (2))){
var state_15802__$1 = state_15802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15802__$1,(4),jobs);
} else {
if((state_val_15803 === (3))){
var inst_15800 = (state_15802[(2)]);
var state_15802__$1 = state_15802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15802__$1,inst_15800);
} else {
if((state_val_15803 === (4))){
var inst_15790 = (state_15802[(2)]);
var inst_15793 = process__$1(inst_15790);
var state_15802__$1 = state_15802;
if(cljs.core.truth_(inst_15793)){
var statearr_15830_18920 = state_15802__$1;
(statearr_15830_18920[(1)] = (5));

} else {
var statearr_15838_18921 = state_15802__$1;
(statearr_15838_18921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15803 === (5))){
var state_15802__$1 = state_15802;
var statearr_15850_18926 = state_15802__$1;
(statearr_15850_18926[(2)] = null);

(statearr_15850_18926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15803 === (6))){
var state_15802__$1 = state_15802;
var statearr_15862_18928 = state_15802__$1;
(statearr_15862_18928[(2)] = null);

(statearr_15862_18928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15803 === (7))){
var inst_15798 = (state_15802[(2)]);
var state_15802__$1 = state_15802;
var statearr_15881_18929 = state_15802__$1;
(statearr_15881_18929[(2)] = inst_15798);

(statearr_15881_18929[(1)] = (3));


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
});})(__18907,c__15045__auto___18912,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async))
;
return ((function (__18907,switch__13956__auto__,c__15045__auto___18912,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0 = (function (){
var statearr_15911 = [null,null,null,null,null,null,null];
(statearr_15911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__);

(statearr_15911[(1)] = (1));

return statearr_15911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1 = (function (state_15802){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_15802);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e15913){var ex__13960__auto__ = e15913;
var statearr_15915_18933 = state_15802;
(statearr_15915_18933[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_15802[(4)]))){
var statearr_15916_18934 = state_15802;
(statearr_15916_18934[(1)] = cljs.core.first((state_15802[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18935 = state_15802;
state_15802 = G__18935;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = function(state_15802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1.call(this,state_15802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__;
})()
;})(__18907,switch__13956__auto__,c__15045__auto___18912,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async))
})();
var state__15047__auto__ = (function (){var statearr_15932 = f__15046__auto__();
(statearr_15932[(6)] = c__15045__auto___18912);

return statearr_15932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
});})(__18907,c__15045__auto___18912,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async))
);


break;
case "async":
var c__15045__auto___18936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18907,c__15045__auto___18936,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async){
return (function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = ((function (__18907,c__15045__auto___18936,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async){
return (function (state_15955){
var state_val_15956 = (state_15955[(1)]);
if((state_val_15956 === (1))){
var state_15955__$1 = state_15955;
var statearr_15963_18937 = state_15955__$1;
(statearr_15963_18937[(2)] = null);

(statearr_15963_18937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15956 === (2))){
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15955__$1,(4),jobs);
} else {
if((state_val_15956 === (3))){
var inst_15953 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15955__$1,inst_15953);
} else {
if((state_val_15956 === (4))){
var inst_15943 = (state_15955[(2)]);
var inst_15945 = async(inst_15943);
var state_15955__$1 = state_15955;
if(cljs.core.truth_(inst_15945)){
var statearr_15968_18938 = state_15955__$1;
(statearr_15968_18938[(1)] = (5));

} else {
var statearr_15969_18939 = state_15955__$1;
(statearr_15969_18939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15956 === (5))){
var state_15955__$1 = state_15955;
var statearr_15972_18941 = state_15955__$1;
(statearr_15972_18941[(2)] = null);

(statearr_15972_18941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15956 === (6))){
var state_15955__$1 = state_15955;
var statearr_15975_18942 = state_15955__$1;
(statearr_15975_18942[(2)] = null);

(statearr_15975_18942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15956 === (7))){
var inst_15950 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15981_18943 = state_15955__$1;
(statearr_15981_18943[(2)] = inst_15950);

(statearr_15981_18943[(1)] = (3));


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
});})(__18907,c__15045__auto___18936,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async))
;
return ((function (__18907,switch__13956__auto__,c__15045__auto___18936,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0 = (function (){
var statearr_15993 = [null,null,null,null,null,null,null];
(statearr_15993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__);

(statearr_15993[(1)] = (1));

return statearr_15993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1 = (function (state_15955){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_15955);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e15995){var ex__13960__auto__ = e15995;
var statearr_15996_18945 = state_15955;
(statearr_15996_18945[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_15955[(4)]))){
var statearr_16000_18949 = state_15955;
(statearr_16000_18949[(1)] = cljs.core.first((state_15955[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18958 = state_15955;
state_15955 = G__18958;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = function(state_15955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1.call(this,state_15955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__;
})()
;})(__18907,switch__13956__auto__,c__15045__auto___18936,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async))
})();
var state__15047__auto__ = (function (){var statearr_16004 = f__15046__auto__();
(statearr_16004[(6)] = c__15045__auto___18936);

return statearr_16004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
});})(__18907,c__15045__auto___18936,G__15779_18908,G__15779_18909__$1,n__5593__auto___18906,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15779_18909__$1)].join('')));

}

var G__18976 = (__18907 + (1));
__18907 = G__18976;
continue;
} else {
}
break;
}

var c__15045__auto___18977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16057){
var state_val_16059 = (state_16057[(1)]);
if((state_val_16059 === (7))){
var inst_16050 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16076_18978 = state_16057__$1;
(statearr_16076_18978[(2)] = inst_16050);

(statearr_16076_18978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (1))){
var state_16057__$1 = state_16057;
var statearr_16079_18979 = state_16057__$1;
(statearr_16079_18979[(2)] = null);

(statearr_16079_18979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (4))){
var inst_16018 = (state_16057[(7)]);
var inst_16018__$1 = (state_16057[(2)]);
var inst_16021 = (inst_16018__$1 == null);
var state_16057__$1 = (function (){var statearr_16086 = state_16057;
(statearr_16086[(7)] = inst_16018__$1);

return statearr_16086;
})();
if(cljs.core.truth_(inst_16021)){
var statearr_16088_18989 = state_16057__$1;
(statearr_16088_18989[(1)] = (5));

} else {
var statearr_16091_18991 = state_16057__$1;
(statearr_16091_18991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (6))){
var inst_16030 = (state_16057[(8)]);
var inst_16018 = (state_16057[(7)]);
var inst_16030__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16039 = [inst_16018,inst_16030__$1];
var inst_16040 = (new cljs.core.PersistentVector(null,2,(5),inst_16037,inst_16039,null));
var state_16057__$1 = (function (){var statearr_16096 = state_16057;
(statearr_16096[(8)] = inst_16030__$1);

return statearr_16096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16057__$1,(8),jobs,inst_16040);
} else {
if((state_val_16059 === (3))){
var inst_16052 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16057__$1,inst_16052);
} else {
if((state_val_16059 === (2))){
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16057__$1,(4),from);
} else {
if((state_val_16059 === (9))){
var inst_16044 = (state_16057[(2)]);
var state_16057__$1 = (function (){var statearr_16107 = state_16057;
(statearr_16107[(9)] = inst_16044);

return statearr_16107;
})();
var statearr_16116_19004 = state_16057__$1;
(statearr_16116_19004[(2)] = null);

(statearr_16116_19004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (5))){
var inst_16024 = cljs.core.async.close_BANG_(jobs);
var state_16057__$1 = state_16057;
var statearr_16118_19013 = state_16057__$1;
(statearr_16118_19013[(2)] = inst_16024);

(statearr_16118_19013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (8))){
var inst_16030 = (state_16057[(8)]);
var inst_16042 = (state_16057[(2)]);
var state_16057__$1 = (function (){var statearr_16120 = state_16057;
(statearr_16120[(10)] = inst_16042);

return statearr_16120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16057__$1,(9),results,inst_16030);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0 = (function (){
var statearr_16127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__);

(statearr_16127[(1)] = (1));

return statearr_16127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1 = (function (state_16057){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16057);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e16128){var ex__13960__auto__ = e16128;
var statearr_16131_19051 = state_16057;
(statearr_16131_19051[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16057[(4)]))){
var statearr_16134_19052 = state_16057;
(statearr_16134_19052[(1)] = cljs.core.first((state_16057[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19053 = state_16057;
state_16057 = G__19053;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = function(state_16057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1.call(this,state_16057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_16141 = f__15046__auto__();
(statearr_16141[(6)] = c__15045__auto___18977);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));


var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16205){
var state_val_16206 = (state_16205[(1)]);
if((state_val_16206 === (7))){
var inst_16192 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
var statearr_16222_19061 = state_16205__$1;
(statearr_16222_19061[(2)] = inst_16192);

(statearr_16222_19061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (20))){
var state_16205__$1 = state_16205;
var statearr_16226_19066 = state_16205__$1;
(statearr_16226_19066[(2)] = null);

(statearr_16226_19066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (1))){
var state_16205__$1 = state_16205;
var statearr_16235_19074 = state_16205__$1;
(statearr_16235_19074[(2)] = null);

(statearr_16235_19074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (4))){
var inst_16145 = (state_16205[(7)]);
var inst_16145__$1 = (state_16205[(2)]);
var inst_16147 = (inst_16145__$1 == null);
var state_16205__$1 = (function (){var statearr_16252 = state_16205;
(statearr_16252[(7)] = inst_16145__$1);

return statearr_16252;
})();
if(cljs.core.truth_(inst_16147)){
var statearr_16258_19084 = state_16205__$1;
(statearr_16258_19084[(1)] = (5));

} else {
var statearr_16259_19086 = state_16205__$1;
(statearr_16259_19086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (15))){
var inst_16168 = (state_16205[(8)]);
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16205__$1,(18),to,inst_16168);
} else {
if((state_val_16206 === (21))){
var inst_16186 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
var statearr_16288_19096 = state_16205__$1;
(statearr_16288_19096[(2)] = inst_16186);

(statearr_16288_19096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (13))){
var inst_16188 = (state_16205[(2)]);
var state_16205__$1 = (function (){var statearr_16292 = state_16205;
(statearr_16292[(9)] = inst_16188);

return statearr_16292;
})();
var statearr_16300_19107 = state_16205__$1;
(statearr_16300_19107[(2)] = null);

(statearr_16300_19107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (6))){
var inst_16145 = (state_16205[(7)]);
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16205__$1,(11),inst_16145);
} else {
if((state_val_16206 === (17))){
var inst_16177 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
if(cljs.core.truth_(inst_16177)){
var statearr_16319_19110 = state_16205__$1;
(statearr_16319_19110[(1)] = (19));

} else {
var statearr_16324_19115 = state_16205__$1;
(statearr_16324_19115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (3))){
var inst_16195 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16205__$1,inst_16195);
} else {
if((state_val_16206 === (12))){
var inst_16162 = (state_16205[(10)]);
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16205__$1,(14),inst_16162);
} else {
if((state_val_16206 === (2))){
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16205__$1,(4),results);
} else {
if((state_val_16206 === (19))){
var state_16205__$1 = state_16205;
var statearr_16343_19118 = state_16205__$1;
(statearr_16343_19118[(2)] = null);

(statearr_16343_19118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (11))){
var inst_16162 = (state_16205[(2)]);
var state_16205__$1 = (function (){var statearr_16346 = state_16205;
(statearr_16346[(10)] = inst_16162);

return statearr_16346;
})();
var statearr_16349_19122 = state_16205__$1;
(statearr_16349_19122[(2)] = null);

(statearr_16349_19122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (9))){
var state_16205__$1 = state_16205;
var statearr_16353_19124 = state_16205__$1;
(statearr_16353_19124[(2)] = null);

(statearr_16353_19124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (5))){
var state_16205__$1 = state_16205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16355_19126 = state_16205__$1;
(statearr_16355_19126[(1)] = (8));

} else {
var statearr_16360_19127 = state_16205__$1;
(statearr_16360_19127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (14))){
var inst_16168 = (state_16205[(8)]);
var inst_16171 = (state_16205[(11)]);
var inst_16168__$1 = (state_16205[(2)]);
var inst_16170 = (inst_16168__$1 == null);
var inst_16171__$1 = cljs.core.not(inst_16170);
var state_16205__$1 = (function (){var statearr_16361 = state_16205;
(statearr_16361[(8)] = inst_16168__$1);

(statearr_16361[(11)] = inst_16171__$1);

return statearr_16361;
})();
if(inst_16171__$1){
var statearr_16362_19129 = state_16205__$1;
(statearr_16362_19129[(1)] = (15));

} else {
var statearr_16363_19130 = state_16205__$1;
(statearr_16363_19130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (16))){
var inst_16171 = (state_16205[(11)]);
var state_16205__$1 = state_16205;
var statearr_16364_19131 = state_16205__$1;
(statearr_16364_19131[(2)] = inst_16171);

(statearr_16364_19131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (10))){
var inst_16155 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
var statearr_16365_19132 = state_16205__$1;
(statearr_16365_19132[(2)] = inst_16155);

(statearr_16365_19132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (18))){
var inst_16174 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
var statearr_16366_19133 = state_16205__$1;
(statearr_16366_19133[(2)] = inst_16174);

(statearr_16366_19133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (8))){
var inst_16152 = cljs.core.async.close_BANG_(to);
var state_16205__$1 = state_16205;
var statearr_16367_19134 = state_16205__$1;
(statearr_16367_19134[(2)] = inst_16152);

(statearr_16367_19134[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0 = (function (){
var statearr_16368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__);

(statearr_16368[(1)] = (1));

return statearr_16368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1 = (function (state_16205){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16205);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e16372){var ex__13960__auto__ = e16372;
var statearr_16374_19138 = state_16205;
(statearr_16374_19138[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16205[(4)]))){
var statearr_16375_19139 = state_16205;
(statearr_16375_19139[(1)] = cljs.core.first((state_16205[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19140 = state_16205;
state_16205 = G__19140;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__ = function(state_16205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1.call(this,state_16205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_16376 = f__15046__auto__();
(statearr_16376[(6)] = c__15045__auto__);

return statearr_16376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
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
var G__16378 = arguments.length;
switch (G__16378) {
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
var G__16383 = arguments.length;
switch (G__16383) {
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
var G__16390 = arguments.length;
switch (G__16390) {
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
var c__15045__auto___19156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16432){
var state_val_16433 = (state_16432[(1)]);
if((state_val_16433 === (7))){
var inst_16422 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16438_19158 = state_16432__$1;
(statearr_16438_19158[(2)] = inst_16422);

(statearr_16438_19158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (1))){
var state_16432__$1 = state_16432;
var statearr_16439_19159 = state_16432__$1;
(statearr_16439_19159[(2)] = null);

(statearr_16439_19159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (4))){
var inst_16402 = (state_16432[(7)]);
var inst_16402__$1 = (state_16432[(2)]);
var inst_16403 = (inst_16402__$1 == null);
var state_16432__$1 = (function (){var statearr_16441 = state_16432;
(statearr_16441[(7)] = inst_16402__$1);

return statearr_16441;
})();
if(cljs.core.truth_(inst_16403)){
var statearr_16442_19160 = state_16432__$1;
(statearr_16442_19160[(1)] = (5));

} else {
var statearr_16444_19162 = state_16432__$1;
(statearr_16444_19162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (13))){
var state_16432__$1 = state_16432;
var statearr_16445_19169 = state_16432__$1;
(statearr_16445_19169[(2)] = null);

(statearr_16445_19169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (6))){
var inst_16402 = (state_16432[(7)]);
var inst_16408 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16402) : p.call(null,inst_16402));
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16408)){
var statearr_16455_19170 = state_16432__$1;
(statearr_16455_19170[(1)] = (9));

} else {
var statearr_16457_19175 = state_16432__$1;
(statearr_16457_19175[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (3))){
var inst_16424 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16432__$1,inst_16424);
} else {
if((state_val_16433 === (12))){
var state_16432__$1 = state_16432;
var statearr_16458_19176 = state_16432__$1;
(statearr_16458_19176[(2)] = null);

(statearr_16458_19176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (2))){
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16432__$1,(4),ch);
} else {
if((state_val_16433 === (11))){
var inst_16402 = (state_16432[(7)]);
var inst_16412 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16432__$1,(8),inst_16412,inst_16402);
} else {
if((state_val_16433 === (9))){
var state_16432__$1 = state_16432;
var statearr_16467_19177 = state_16432__$1;
(statearr_16467_19177[(2)] = tc);

(statearr_16467_19177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (5))){
var inst_16405 = cljs.core.async.close_BANG_(tc);
var inst_16406 = cljs.core.async.close_BANG_(fc);
var state_16432__$1 = (function (){var statearr_16475 = state_16432;
(statearr_16475[(8)] = inst_16405);

return statearr_16475;
})();
var statearr_16480_19183 = state_16432__$1;
(statearr_16480_19183[(2)] = inst_16406);

(statearr_16480_19183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (14))){
var inst_16420 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16495_19185 = state_16432__$1;
(statearr_16495_19185[(2)] = inst_16420);

(statearr_16495_19185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (10))){
var state_16432__$1 = state_16432;
var statearr_16496_19186 = state_16432__$1;
(statearr_16496_19186[(2)] = fc);

(statearr_16496_19186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (8))){
var inst_16414 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16414)){
var statearr_16501_19190 = state_16432__$1;
(statearr_16501_19190[(1)] = (12));

} else {
var statearr_16502_19194 = state_16432__$1;
(statearr_16502_19194[(1)] = (13));

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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_16506 = [null,null,null,null,null,null,null,null,null];
(statearr_16506[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_16506[(1)] = (1));

return statearr_16506;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_16432){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16432);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e16507){var ex__13960__auto__ = e16507;
var statearr_16510_19198 = state_16432;
(statearr_16510_19198[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16432[(4)]))){
var statearr_16514_19199 = state_16432;
(statearr_16514_19199[(1)] = cljs.core.first((state_16432[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19200 = state_16432;
state_16432 = G__19200;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_16432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_16432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_16529 = f__15046__auto__();
(statearr_16529[(6)] = c__15045__auto___19156);

return statearr_16529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16571){
var state_val_16572 = (state_16571[(1)]);
if((state_val_16572 === (7))){
var inst_16563 = (state_16571[(2)]);
var state_16571__$1 = state_16571;
var statearr_16577_19210 = state_16571__$1;
(statearr_16577_19210[(2)] = inst_16563);

(statearr_16577_19210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (1))){
var inst_16536 = init;
var inst_16537 = inst_16536;
var state_16571__$1 = (function (){var statearr_16582 = state_16571;
(statearr_16582[(7)] = inst_16537);

return statearr_16582;
})();
var statearr_16584_19211 = state_16571__$1;
(statearr_16584_19211[(2)] = null);

(statearr_16584_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (4))){
var inst_16544 = (state_16571[(8)]);
var inst_16544__$1 = (state_16571[(2)]);
var inst_16547 = (inst_16544__$1 == null);
var state_16571__$1 = (function (){var statearr_16590 = state_16571;
(statearr_16590[(8)] = inst_16544__$1);

return statearr_16590;
})();
if(cljs.core.truth_(inst_16547)){
var statearr_16595_19217 = state_16571__$1;
(statearr_16595_19217[(1)] = (5));

} else {
var statearr_16596_19218 = state_16571__$1;
(statearr_16596_19218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (6))){
var inst_16544 = (state_16571[(8)]);
var inst_16551 = (state_16571[(9)]);
var inst_16537 = (state_16571[(7)]);
var inst_16551__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16537,inst_16544) : f.call(null,inst_16537,inst_16544));
var inst_16552 = cljs.core.reduced_QMARK_(inst_16551__$1);
var state_16571__$1 = (function (){var statearr_16600 = state_16571;
(statearr_16600[(9)] = inst_16551__$1);

return statearr_16600;
})();
if(inst_16552){
var statearr_16601_19222 = state_16571__$1;
(statearr_16601_19222[(1)] = (8));

} else {
var statearr_16602_19223 = state_16571__$1;
(statearr_16602_19223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (3))){
var inst_16565 = (state_16571[(2)]);
var state_16571__$1 = state_16571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16571__$1,inst_16565);
} else {
if((state_val_16572 === (2))){
var state_16571__$1 = state_16571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16571__$1,(4),ch);
} else {
if((state_val_16572 === (9))){
var inst_16551 = (state_16571[(9)]);
var inst_16537 = inst_16551;
var state_16571__$1 = (function (){var statearr_16607 = state_16571;
(statearr_16607[(7)] = inst_16537);

return statearr_16607;
})();
var statearr_16608_19231 = state_16571__$1;
(statearr_16608_19231[(2)] = null);

(statearr_16608_19231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (5))){
var inst_16537 = (state_16571[(7)]);
var state_16571__$1 = state_16571;
var statearr_16610_19232 = state_16571__$1;
(statearr_16610_19232[(2)] = inst_16537);

(statearr_16610_19232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (10))){
var inst_16561 = (state_16571[(2)]);
var state_16571__$1 = state_16571;
var statearr_16611_19237 = state_16571__$1;
(statearr_16611_19237[(2)] = inst_16561);

(statearr_16611_19237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16572 === (8))){
var inst_16551 = (state_16571[(9)]);
var inst_16557 = cljs.core.deref(inst_16551);
var state_16571__$1 = state_16571;
var statearr_16615_19238 = state_16571__$1;
(statearr_16615_19238[(2)] = inst_16557);

(statearr_16615_19238[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13957__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13957__auto____0 = (function (){
var statearr_16616 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16616[(0)] = cljs$core$async$reduce_$_state_machine__13957__auto__);

(statearr_16616[(1)] = (1));

return statearr_16616;
});
var cljs$core$async$reduce_$_state_machine__13957__auto____1 = (function (state_16571){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16571);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e16618){var ex__13960__auto__ = e16618;
var statearr_16619_19239 = state_16571;
(statearr_16619_19239[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16571[(4)]))){
var statearr_16624_19241 = state_16571;
(statearr_16624_19241[(1)] = cljs.core.first((state_16571[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19245 = state_16571;
state_16571 = G__19245;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13957__auto__ = function(state_16571){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13957__auto____1.call(this,state_16571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13957__auto____0;
cljs$core$async$reduce_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13957__auto____1;
return cljs$core$async$reduce_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_16631 = f__15046__auto__();
(statearr_16631[(6)] = c__15045__auto__);

return statearr_16631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16647){
var state_val_16648 = (state_16647[(1)]);
if((state_val_16648 === (1))){
var inst_16642 = cljs.core.async.reduce(f__$1,init,ch);
var state_16647__$1 = state_16647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16647__$1,(2),inst_16642);
} else {
if((state_val_16648 === (2))){
var inst_16644 = (state_16647[(2)]);
var inst_16645 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16644) : f__$1.call(null,inst_16644));
var state_16647__$1 = state_16647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16647__$1,inst_16645);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13957__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13957__auto____0 = (function (){
var statearr_16655 = [null,null,null,null,null,null,null];
(statearr_16655[(0)] = cljs$core$async$transduce_$_state_machine__13957__auto__);

(statearr_16655[(1)] = (1));

return statearr_16655;
});
var cljs$core$async$transduce_$_state_machine__13957__auto____1 = (function (state_16647){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16647);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e16659){var ex__13960__auto__ = e16659;
var statearr_16660_19247 = state_16647;
(statearr_16660_19247[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16647[(4)]))){
var statearr_16662_19249 = state_16647;
(statearr_16662_19249[(1)] = cljs.core.first((state_16647[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19254 = state_16647;
state_16647 = G__19254;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13957__auto__ = function(state_16647){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13957__auto____1.call(this,state_16647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13957__auto____0;
cljs$core$async$transduce_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13957__auto____1;
return cljs$core$async$transduce_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_16663 = f__15046__auto__();
(statearr_16663[(6)] = c__15045__auto__);

return statearr_16663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
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
var G__16667 = arguments.length;
switch (G__16667) {
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
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16702){
var state_val_16703 = (state_16702[(1)]);
if((state_val_16703 === (7))){
var inst_16684 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16709_19256 = state_16702__$1;
(statearr_16709_19256[(2)] = inst_16684);

(statearr_16709_19256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (1))){
var inst_16677 = cljs.core.seq(coll);
var inst_16678 = inst_16677;
var state_16702__$1 = (function (){var statearr_16710 = state_16702;
(statearr_16710[(7)] = inst_16678);

return statearr_16710;
})();
var statearr_16715_19261 = state_16702__$1;
(statearr_16715_19261[(2)] = null);

(statearr_16715_19261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (4))){
var inst_16678 = (state_16702[(7)]);
var inst_16682 = cljs.core.first(inst_16678);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16702__$1,(7),ch,inst_16682);
} else {
if((state_val_16703 === (13))){
var inst_16696 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16721_19262 = state_16702__$1;
(statearr_16721_19262[(2)] = inst_16696);

(statearr_16721_19262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (6))){
var inst_16687 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
if(cljs.core.truth_(inst_16687)){
var statearr_16722_19264 = state_16702__$1;
(statearr_16722_19264[(1)] = (8));

} else {
var statearr_16723_19266 = state_16702__$1;
(statearr_16723_19266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (3))){
var inst_16700 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16702__$1,inst_16700);
} else {
if((state_val_16703 === (12))){
var state_16702__$1 = state_16702;
var statearr_16728_19269 = state_16702__$1;
(statearr_16728_19269[(2)] = null);

(statearr_16728_19269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (2))){
var inst_16678 = (state_16702[(7)]);
var state_16702__$1 = state_16702;
if(cljs.core.truth_(inst_16678)){
var statearr_16730_19270 = state_16702__$1;
(statearr_16730_19270[(1)] = (4));

} else {
var statearr_16732_19271 = state_16702__$1;
(statearr_16732_19271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (11))){
var inst_16693 = cljs.core.async.close_BANG_(ch);
var state_16702__$1 = state_16702;
var statearr_16736_19277 = state_16702__$1;
(statearr_16736_19277[(2)] = inst_16693);

(statearr_16736_19277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (9))){
var state_16702__$1 = state_16702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16738_19279 = state_16702__$1;
(statearr_16738_19279[(1)] = (11));

} else {
var statearr_16739_19281 = state_16702__$1;
(statearr_16739_19281[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (5))){
var inst_16678 = (state_16702[(7)]);
var state_16702__$1 = state_16702;
var statearr_16747_19282 = state_16702__$1;
(statearr_16747_19282[(2)] = inst_16678);

(statearr_16747_19282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (10))){
var inst_16698 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16750_19283 = state_16702__$1;
(statearr_16750_19283[(2)] = inst_16698);

(statearr_16750_19283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (8))){
var inst_16678 = (state_16702[(7)]);
var inst_16689 = cljs.core.next(inst_16678);
var inst_16678__$1 = inst_16689;
var state_16702__$1 = (function (){var statearr_16751 = state_16702;
(statearr_16751[(7)] = inst_16678__$1);

return statearr_16751;
})();
var statearr_16752_19285 = state_16702__$1;
(statearr_16752_19285[(2)] = null);

(statearr_16752_19285[(1)] = (2));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_16753 = [null,null,null,null,null,null,null,null];
(statearr_16753[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_16753[(1)] = (1));

return statearr_16753;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_16702){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16702);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e16754){var ex__13960__auto__ = e16754;
var statearr_16755_19286 = state_16702;
(statearr_16755_19286[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16702[(4)]))){
var statearr_16756_19287 = state_16702;
(statearr_16756_19287[(1)] = cljs.core.first((state_16702[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19291 = state_16702;
state_16702 = G__19291;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_16702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_16702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_16758 = f__15046__auto__();
(statearr_16758[(6)] = c__15045__auto__);

return statearr_16758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
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
var G__16761 = arguments.length;
switch (G__16761) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19301 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19301(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19307 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19307(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19313 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19313(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19319 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19319(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16767 = (function (ch,cs,meta16768){
this.ch = ch;
this.cs = cs;
this.meta16768 = meta16768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16769,meta16768__$1){
var self__ = this;
var _16769__$1 = this;
return (new cljs.core.async.t_cljs$core$async16767(self__.ch,self__.cs,meta16768__$1));
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16769){
var self__ = this;
var _16769__$1 = this;
return self__.meta16768;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16768","meta16768",477311017,null)], null);
}));

(cljs.core.async.t_cljs$core$async16767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16767");

(cljs.core.async.t_cljs$core$async16767.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16767.
 */
cljs.core.async.__GT_t_cljs$core$async16767 = (function cljs$core$async$__GT_t_cljs$core$async16767(ch,cs,meta16768){
return (new cljs.core.async.t_cljs$core$async16767(ch,cs,meta16768));
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
var m = (new cljs.core.async.t_cljs$core$async16767(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15045__auto___19344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_16940){
var state_val_16941 = (state_16940[(1)]);
if((state_val_16941 === (7))){
var inst_16932 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_16944_19345 = state_16940__$1;
(statearr_16944_19345[(2)] = inst_16932);

(statearr_16944_19345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (20))){
var inst_16811 = (state_16940[(7)]);
var inst_16823 = cljs.core.first(inst_16811);
var inst_16824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16823,(0),null);
var inst_16825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16823,(1),null);
var state_16940__$1 = (function (){var statearr_16951 = state_16940;
(statearr_16951[(8)] = inst_16824);

return statearr_16951;
})();
if(cljs.core.truth_(inst_16825)){
var statearr_16952_19346 = state_16940__$1;
(statearr_16952_19346[(1)] = (22));

} else {
var statearr_16954_19352 = state_16940__$1;
(statearr_16954_19352[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (27))){
var inst_16777 = (state_16940[(9)]);
var inst_16878 = (state_16940[(10)]);
var inst_16880 = (state_16940[(11)]);
var inst_16885 = (state_16940[(12)]);
var inst_16885__$1 = cljs.core._nth(inst_16878,inst_16880);
var inst_16886 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16885__$1,inst_16777,done);
var state_16940__$1 = (function (){var statearr_16956 = state_16940;
(statearr_16956[(12)] = inst_16885__$1);

return statearr_16956;
})();
if(cljs.core.truth_(inst_16886)){
var statearr_16957_19353 = state_16940__$1;
(statearr_16957_19353[(1)] = (30));

} else {
var statearr_16959_19354 = state_16940__$1;
(statearr_16959_19354[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (1))){
var state_16940__$1 = state_16940;
var statearr_16962_19357 = state_16940__$1;
(statearr_16962_19357[(2)] = null);

(statearr_16962_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (24))){
var inst_16811 = (state_16940[(7)]);
var inst_16830 = (state_16940[(2)]);
var inst_16831 = cljs.core.next(inst_16811);
var inst_16787 = inst_16831;
var inst_16788 = null;
var inst_16789 = (0);
var inst_16790 = (0);
var state_16940__$1 = (function (){var statearr_16964 = state_16940;
(statearr_16964[(13)] = inst_16788);

(statearr_16964[(14)] = inst_16789);

(statearr_16964[(15)] = inst_16790);

(statearr_16964[(16)] = inst_16830);

(statearr_16964[(17)] = inst_16787);

return statearr_16964;
})();
var statearr_16966_19358 = state_16940__$1;
(statearr_16966_19358[(2)] = null);

(statearr_16966_19358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (39))){
var state_16940__$1 = state_16940;
var statearr_16982_19359 = state_16940__$1;
(statearr_16982_19359[(2)] = null);

(statearr_16982_19359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (4))){
var inst_16777 = (state_16940[(9)]);
var inst_16777__$1 = (state_16940[(2)]);
var inst_16779 = (inst_16777__$1 == null);
var state_16940__$1 = (function (){var statearr_16986 = state_16940;
(statearr_16986[(9)] = inst_16777__$1);

return statearr_16986;
})();
if(cljs.core.truth_(inst_16779)){
var statearr_16992_19362 = state_16940__$1;
(statearr_16992_19362[(1)] = (5));

} else {
var statearr_16994_19369 = state_16940__$1;
(statearr_16994_19369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (15))){
var inst_16788 = (state_16940[(13)]);
var inst_16789 = (state_16940[(14)]);
var inst_16790 = (state_16940[(15)]);
var inst_16787 = (state_16940[(17)]);
var inst_16807 = (state_16940[(2)]);
var inst_16808 = (inst_16790 + (1));
var tmp16974 = inst_16788;
var tmp16975 = inst_16789;
var tmp16976 = inst_16787;
var inst_16787__$1 = tmp16976;
var inst_16788__$1 = tmp16974;
var inst_16789__$1 = tmp16975;
var inst_16790__$1 = inst_16808;
var state_16940__$1 = (function (){var statearr_16996 = state_16940;
(statearr_16996[(13)] = inst_16788__$1);

(statearr_16996[(14)] = inst_16789__$1);

(statearr_16996[(15)] = inst_16790__$1);

(statearr_16996[(18)] = inst_16807);

(statearr_16996[(17)] = inst_16787__$1);

return statearr_16996;
})();
var statearr_16999_19370 = state_16940__$1;
(statearr_16999_19370[(2)] = null);

(statearr_16999_19370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (21))){
var inst_16834 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17004_19375 = state_16940__$1;
(statearr_17004_19375[(2)] = inst_16834);

(statearr_17004_19375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (31))){
var inst_16885 = (state_16940[(12)]);
var inst_16889 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16885);
var state_16940__$1 = state_16940;
var statearr_17009_19379 = state_16940__$1;
(statearr_17009_19379[(2)] = inst_16889);

(statearr_17009_19379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (32))){
var inst_16879 = (state_16940[(19)]);
var inst_16877 = (state_16940[(20)]);
var inst_16878 = (state_16940[(10)]);
var inst_16880 = (state_16940[(11)]);
var inst_16891 = (state_16940[(2)]);
var inst_16892 = (inst_16880 + (1));
var tmp17000 = inst_16879;
var tmp17001 = inst_16877;
var tmp17002 = inst_16878;
var inst_16877__$1 = tmp17001;
var inst_16878__$1 = tmp17002;
var inst_16879__$1 = tmp17000;
var inst_16880__$1 = inst_16892;
var state_16940__$1 = (function (){var statearr_17036 = state_16940;
(statearr_17036[(19)] = inst_16879__$1);

(statearr_17036[(20)] = inst_16877__$1);

(statearr_17036[(21)] = inst_16891);

(statearr_17036[(10)] = inst_16878__$1);

(statearr_17036[(11)] = inst_16880__$1);

return statearr_17036;
})();
var statearr_17037_19397 = state_16940__$1;
(statearr_17037_19397[(2)] = null);

(statearr_17037_19397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (40))){
var inst_16904 = (state_16940[(22)]);
var inst_16909 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16904);
var state_16940__$1 = state_16940;
var statearr_17044_19403 = state_16940__$1;
(statearr_17044_19403[(2)] = inst_16909);

(statearr_17044_19403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (33))){
var inst_16895 = (state_16940[(23)]);
var inst_16897 = cljs.core.chunked_seq_QMARK_(inst_16895);
var state_16940__$1 = state_16940;
if(inst_16897){
var statearr_17048_19405 = state_16940__$1;
(statearr_17048_19405[(1)] = (36));

} else {
var statearr_17049_19414 = state_16940__$1;
(statearr_17049_19414[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (13))){
var inst_16799 = (state_16940[(24)]);
var inst_16804 = cljs.core.async.close_BANG_(inst_16799);
var state_16940__$1 = state_16940;
var statearr_17050_19423 = state_16940__$1;
(statearr_17050_19423[(2)] = inst_16804);

(statearr_17050_19423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (22))){
var inst_16824 = (state_16940[(8)]);
var inst_16827 = cljs.core.async.close_BANG_(inst_16824);
var state_16940__$1 = state_16940;
var statearr_17055_19426 = state_16940__$1;
(statearr_17055_19426[(2)] = inst_16827);

(statearr_17055_19426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (36))){
var inst_16895 = (state_16940[(23)]);
var inst_16899 = cljs.core.chunk_first(inst_16895);
var inst_16900 = cljs.core.chunk_rest(inst_16895);
var inst_16901 = cljs.core.count(inst_16899);
var inst_16877 = inst_16900;
var inst_16878 = inst_16899;
var inst_16879 = inst_16901;
var inst_16880 = (0);
var state_16940__$1 = (function (){var statearr_17065 = state_16940;
(statearr_17065[(19)] = inst_16879);

(statearr_17065[(20)] = inst_16877);

(statearr_17065[(10)] = inst_16878);

(statearr_17065[(11)] = inst_16880);

return statearr_17065;
})();
var statearr_17066_19433 = state_16940__$1;
(statearr_17066_19433[(2)] = null);

(statearr_17066_19433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (41))){
var inst_16895 = (state_16940[(23)]);
var inst_16911 = (state_16940[(2)]);
var inst_16912 = cljs.core.next(inst_16895);
var inst_16877 = inst_16912;
var inst_16878 = null;
var inst_16879 = (0);
var inst_16880 = (0);
var state_16940__$1 = (function (){var statearr_17067 = state_16940;
(statearr_17067[(19)] = inst_16879);

(statearr_17067[(20)] = inst_16877);

(statearr_17067[(25)] = inst_16911);

(statearr_17067[(10)] = inst_16878);

(statearr_17067[(11)] = inst_16880);

return statearr_17067;
})();
var statearr_17071_19446 = state_16940__$1;
(statearr_17071_19446[(2)] = null);

(statearr_17071_19446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (43))){
var state_16940__$1 = state_16940;
var statearr_17072_19457 = state_16940__$1;
(statearr_17072_19457[(2)] = null);

(statearr_17072_19457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (29))){
var inst_16920 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17074_19458 = state_16940__$1;
(statearr_17074_19458[(2)] = inst_16920);

(statearr_17074_19458[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (44))){
var inst_16929 = (state_16940[(2)]);
var state_16940__$1 = (function (){var statearr_17076 = state_16940;
(statearr_17076[(26)] = inst_16929);

return statearr_17076;
})();
var statearr_17081_19459 = state_16940__$1;
(statearr_17081_19459[(2)] = null);

(statearr_17081_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (6))){
var inst_16845 = (state_16940[(27)]);
var inst_16844 = cljs.core.deref(cs);
var inst_16845__$1 = cljs.core.keys(inst_16844);
var inst_16863 = cljs.core.count(inst_16845__$1);
var inst_16864 = cljs.core.reset_BANG_(dctr,inst_16863);
var inst_16876 = cljs.core.seq(inst_16845__$1);
var inst_16877 = inst_16876;
var inst_16878 = null;
var inst_16879 = (0);
var inst_16880 = (0);
var state_16940__$1 = (function (){var statearr_17086 = state_16940;
(statearr_17086[(19)] = inst_16879);

(statearr_17086[(20)] = inst_16877);

(statearr_17086[(27)] = inst_16845__$1);

(statearr_17086[(10)] = inst_16878);

(statearr_17086[(28)] = inst_16864);

(statearr_17086[(11)] = inst_16880);

return statearr_17086;
})();
var statearr_17087_19464 = state_16940__$1;
(statearr_17087_19464[(2)] = null);

(statearr_17087_19464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (28))){
var inst_16877 = (state_16940[(20)]);
var inst_16895 = (state_16940[(23)]);
var inst_16895__$1 = cljs.core.seq(inst_16877);
var state_16940__$1 = (function (){var statearr_17092 = state_16940;
(statearr_17092[(23)] = inst_16895__$1);

return statearr_17092;
})();
if(inst_16895__$1){
var statearr_17094_19467 = state_16940__$1;
(statearr_17094_19467[(1)] = (33));

} else {
var statearr_17096_19472 = state_16940__$1;
(statearr_17096_19472[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (25))){
var inst_16879 = (state_16940[(19)]);
var inst_16880 = (state_16940[(11)]);
var inst_16882 = (inst_16880 < inst_16879);
var inst_16883 = inst_16882;
var state_16940__$1 = state_16940;
if(cljs.core.truth_(inst_16883)){
var statearr_17097_19477 = state_16940__$1;
(statearr_17097_19477[(1)] = (27));

} else {
var statearr_17098_19478 = state_16940__$1;
(statearr_17098_19478[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (34))){
var state_16940__$1 = state_16940;
var statearr_17103_19484 = state_16940__$1;
(statearr_17103_19484[(2)] = null);

(statearr_17103_19484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (17))){
var state_16940__$1 = state_16940;
var statearr_17104_19490 = state_16940__$1;
(statearr_17104_19490[(2)] = null);

(statearr_17104_19490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (3))){
var inst_16934 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16940__$1,inst_16934);
} else {
if((state_val_16941 === (12))){
var inst_16839 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17105_19495 = state_16940__$1;
(statearr_17105_19495[(2)] = inst_16839);

(statearr_17105_19495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (2))){
var state_16940__$1 = state_16940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16940__$1,(4),ch);
} else {
if((state_val_16941 === (23))){
var state_16940__$1 = state_16940;
var statearr_17107_19496 = state_16940__$1;
(statearr_17107_19496[(2)] = null);

(statearr_17107_19496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (35))){
var inst_16918 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17108_19500 = state_16940__$1;
(statearr_17108_19500[(2)] = inst_16918);

(statearr_17108_19500[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (19))){
var inst_16811 = (state_16940[(7)]);
var inst_16815 = cljs.core.chunk_first(inst_16811);
var inst_16816 = cljs.core.chunk_rest(inst_16811);
var inst_16817 = cljs.core.count(inst_16815);
var inst_16787 = inst_16816;
var inst_16788 = inst_16815;
var inst_16789 = inst_16817;
var inst_16790 = (0);
var state_16940__$1 = (function (){var statearr_17113 = state_16940;
(statearr_17113[(13)] = inst_16788);

(statearr_17113[(14)] = inst_16789);

(statearr_17113[(15)] = inst_16790);

(statearr_17113[(17)] = inst_16787);

return statearr_17113;
})();
var statearr_17114_19507 = state_16940__$1;
(statearr_17114_19507[(2)] = null);

(statearr_17114_19507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (11))){
var inst_16787 = (state_16940[(17)]);
var inst_16811 = (state_16940[(7)]);
var inst_16811__$1 = cljs.core.seq(inst_16787);
var state_16940__$1 = (function (){var statearr_17115 = state_16940;
(statearr_17115[(7)] = inst_16811__$1);

return statearr_17115;
})();
if(inst_16811__$1){
var statearr_17118_19509 = state_16940__$1;
(statearr_17118_19509[(1)] = (16));

} else {
var statearr_17119_19510 = state_16940__$1;
(statearr_17119_19510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (9))){
var inst_16841 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17120_19511 = state_16940__$1;
(statearr_17120_19511[(2)] = inst_16841);

(statearr_17120_19511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (5))){
var inst_16785 = cljs.core.deref(cs);
var inst_16786 = cljs.core.seq(inst_16785);
var inst_16787 = inst_16786;
var inst_16788 = null;
var inst_16789 = (0);
var inst_16790 = (0);
var state_16940__$1 = (function (){var statearr_17122 = state_16940;
(statearr_17122[(13)] = inst_16788);

(statearr_17122[(14)] = inst_16789);

(statearr_17122[(15)] = inst_16790);

(statearr_17122[(17)] = inst_16787);

return statearr_17122;
})();
var statearr_17123_19525 = state_16940__$1;
(statearr_17123_19525[(2)] = null);

(statearr_17123_19525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (14))){
var state_16940__$1 = state_16940;
var statearr_17125_19526 = state_16940__$1;
(statearr_17125_19526[(2)] = null);

(statearr_17125_19526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (45))){
var inst_16926 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17126_19527 = state_16940__$1;
(statearr_17126_19527[(2)] = inst_16926);

(statearr_17126_19527[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (26))){
var inst_16845 = (state_16940[(27)]);
var inst_16922 = (state_16940[(2)]);
var inst_16923 = cljs.core.seq(inst_16845);
var state_16940__$1 = (function (){var statearr_17127 = state_16940;
(statearr_17127[(29)] = inst_16922);

return statearr_17127;
})();
if(inst_16923){
var statearr_17128_19528 = state_16940__$1;
(statearr_17128_19528[(1)] = (42));

} else {
var statearr_17130_19529 = state_16940__$1;
(statearr_17130_19529[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (16))){
var inst_16811 = (state_16940[(7)]);
var inst_16813 = cljs.core.chunked_seq_QMARK_(inst_16811);
var state_16940__$1 = state_16940;
if(inst_16813){
var statearr_17131_19538 = state_16940__$1;
(statearr_17131_19538[(1)] = (19));

} else {
var statearr_17132_19542 = state_16940__$1;
(statearr_17132_19542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (38))){
var inst_16915 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17136_19543 = state_16940__$1;
(statearr_17136_19543[(2)] = inst_16915);

(statearr_17136_19543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (30))){
var state_16940__$1 = state_16940;
var statearr_17137_19544 = state_16940__$1;
(statearr_17137_19544[(2)] = null);

(statearr_17137_19544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (10))){
var inst_16788 = (state_16940[(13)]);
var inst_16790 = (state_16940[(15)]);
var inst_16798 = cljs.core._nth(inst_16788,inst_16790);
var inst_16799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16798,(0),null);
var inst_16800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16798,(1),null);
var state_16940__$1 = (function (){var statearr_17138 = state_16940;
(statearr_17138[(24)] = inst_16799);

return statearr_17138;
})();
if(cljs.core.truth_(inst_16800)){
var statearr_17139_19545 = state_16940__$1;
(statearr_17139_19545[(1)] = (13));

} else {
var statearr_17140_19546 = state_16940__$1;
(statearr_17140_19546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (18))){
var inst_16837 = (state_16940[(2)]);
var state_16940__$1 = state_16940;
var statearr_17142_19549 = state_16940__$1;
(statearr_17142_19549[(2)] = inst_16837);

(statearr_17142_19549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (42))){
var state_16940__$1 = state_16940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16940__$1,(45),dchan);
} else {
if((state_val_16941 === (37))){
var inst_16777 = (state_16940[(9)]);
var inst_16904 = (state_16940[(22)]);
var inst_16895 = (state_16940[(23)]);
var inst_16904__$1 = cljs.core.first(inst_16895);
var inst_16905 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16904__$1,inst_16777,done);
var state_16940__$1 = (function (){var statearr_17148 = state_16940;
(statearr_17148[(22)] = inst_16904__$1);

return statearr_17148;
})();
if(cljs.core.truth_(inst_16905)){
var statearr_17149_19550 = state_16940__$1;
(statearr_17149_19550[(1)] = (39));

} else {
var statearr_17150_19551 = state_16940__$1;
(statearr_17150_19551[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16941 === (8))){
var inst_16789 = (state_16940[(14)]);
var inst_16790 = (state_16940[(15)]);
var inst_16792 = (inst_16790 < inst_16789);
var inst_16793 = inst_16792;
var state_16940__$1 = state_16940;
if(cljs.core.truth_(inst_16793)){
var statearr_17151_19552 = state_16940__$1;
(statearr_17151_19552[(1)] = (10));

} else {
var statearr_17152_19557 = state_16940__$1;
(statearr_17152_19557[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13957__auto__ = null;
var cljs$core$async$mult_$_state_machine__13957__auto____0 = (function (){
var statearr_17162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17162[(0)] = cljs$core$async$mult_$_state_machine__13957__auto__);

(statearr_17162[(1)] = (1));

return statearr_17162;
});
var cljs$core$async$mult_$_state_machine__13957__auto____1 = (function (state_16940){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_16940);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e17163){var ex__13960__auto__ = e17163;
var statearr_17164_19560 = state_16940;
(statearr_17164_19560[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_16940[(4)]))){
var statearr_17165_19561 = state_16940;
(statearr_17165_19561[(1)] = cljs.core.first((state_16940[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19562 = state_16940;
state_16940 = G__19562;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13957__auto__ = function(state_16940){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13957__auto____1.call(this,state_16940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13957__auto____0;
cljs$core$async$mult_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13957__auto____1;
return cljs$core$async$mult_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_17169 = f__15046__auto__();
(statearr_17169[(6)] = c__15045__auto___19344);

return statearr_17169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
var G__17171 = arguments.length;
switch (G__17171) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19568 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19568(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19581 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19581(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19582 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19582(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19583 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19583(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19588 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19588(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19589 = arguments.length;
var i__5727__auto___19590 = (0);
while(true){
if((i__5727__auto___19590 < len__5726__auto___19589)){
args__5732__auto__.push((arguments[i__5727__auto___19590]));

var G__19592 = (i__5727__auto___19590 + (1));
i__5727__auto___19590 = G__19592;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17218){
var map__17219 = p__17218;
var map__17219__$1 = cljs.core.__destructure_map(map__17219);
var opts = map__17219__$1;
var statearr_17220_19596 = state;
(statearr_17220_19596[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17221_19597 = state;
(statearr_17221_19597[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17223_19598 = state;
(statearr_17223_19598[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17210){
var G__17211 = cljs.core.first(seq17210);
var seq17210__$1 = cljs.core.next(seq17210);
var G__17212 = cljs.core.first(seq17210__$1);
var seq17210__$2 = cljs.core.next(seq17210__$1);
var G__17213 = cljs.core.first(seq17210__$2);
var seq17210__$3 = cljs.core.next(seq17210__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17211,G__17212,G__17213,seq17210__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17232 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17233){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17233 = meta17233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17234,meta17233__$1){
var self__ = this;
var _17234__$1 = this;
return (new cljs.core.async.t_cljs$core$async17232(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17233__$1));
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17234){
var self__ = this;
var _17234__$1 = this;
return self__.meta17233;
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17232.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17233","meta17233",-531614017,null)], null);
}));

(cljs.core.async.t_cljs$core$async17232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17232");

(cljs.core.async.t_cljs$core$async17232.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17232.
 */
cljs.core.async.__GT_t_cljs$core$async17232 = (function cljs$core$async$__GT_t_cljs$core$async17232(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17233){
return (new cljs.core.async.t_cljs$core$async17232(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17233));
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
var m = (new cljs.core.async.t_cljs$core$async17232(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15045__auto___19628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_17320){
var state_val_17321 = (state_17320[(1)]);
if((state_val_17321 === (7))){
var inst_17279 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
if(cljs.core.truth_(inst_17279)){
var statearr_17324_19629 = state_17320__$1;
(statearr_17324_19629[(1)] = (8));

} else {
var statearr_17325_19630 = state_17320__$1;
(statearr_17325_19630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (20))){
var inst_17269 = (state_17320[(7)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17320__$1,(23),out,inst_17269);
} else {
if((state_val_17321 === (1))){
var inst_17252 = calc_state();
var inst_17253 = cljs.core.__destructure_map(inst_17252);
var inst_17254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17253,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17253,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17253,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17257 = inst_17252;
var state_17320__$1 = (function (){var statearr_17329 = state_17320;
(statearr_17329[(8)] = inst_17254);

(statearr_17329[(9)] = inst_17255);

(statearr_17329[(10)] = inst_17256);

(statearr_17329[(11)] = inst_17257);

return statearr_17329;
})();
var statearr_17330_19635 = state_17320__$1;
(statearr_17330_19635[(2)] = null);

(statearr_17330_19635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (24))){
var inst_17260 = (state_17320[(12)]);
var inst_17257 = inst_17260;
var state_17320__$1 = (function (){var statearr_17331 = state_17320;
(statearr_17331[(11)] = inst_17257);

return statearr_17331;
})();
var statearr_17332_19636 = state_17320__$1;
(statearr_17332_19636[(2)] = null);

(statearr_17332_19636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (4))){
var inst_17274 = (state_17320[(13)]);
var inst_17269 = (state_17320[(7)]);
var inst_17268 = (state_17320[(2)]);
var inst_17269__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17268,(0),null);
var inst_17273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17268,(1),null);
var inst_17274__$1 = (inst_17269__$1 == null);
var state_17320__$1 = (function (){var statearr_17334 = state_17320;
(statearr_17334[(13)] = inst_17274__$1);

(statearr_17334[(14)] = inst_17273);

(statearr_17334[(7)] = inst_17269__$1);

return statearr_17334;
})();
if(cljs.core.truth_(inst_17274__$1)){
var statearr_17335_19643 = state_17320__$1;
(statearr_17335_19643[(1)] = (5));

} else {
var statearr_17336_19644 = state_17320__$1;
(statearr_17336_19644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (15))){
var inst_17293 = (state_17320[(15)]);
var inst_17261 = (state_17320[(16)]);
var inst_17293__$1 = cljs.core.empty_QMARK_(inst_17261);
var state_17320__$1 = (function (){var statearr_17341 = state_17320;
(statearr_17341[(15)] = inst_17293__$1);

return statearr_17341;
})();
if(inst_17293__$1){
var statearr_17345_19645 = state_17320__$1;
(statearr_17345_19645[(1)] = (17));

} else {
var statearr_17346_19646 = state_17320__$1;
(statearr_17346_19646[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (21))){
var inst_17260 = (state_17320[(12)]);
var inst_17257 = inst_17260;
var state_17320__$1 = (function (){var statearr_17347 = state_17320;
(statearr_17347[(11)] = inst_17257);

return statearr_17347;
})();
var statearr_17348_19647 = state_17320__$1;
(statearr_17348_19647[(2)] = null);

(statearr_17348_19647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (13))){
var inst_17286 = (state_17320[(2)]);
var inst_17287 = calc_state();
var inst_17257 = inst_17287;
var state_17320__$1 = (function (){var statearr_17349 = state_17320;
(statearr_17349[(17)] = inst_17286);

(statearr_17349[(11)] = inst_17257);

return statearr_17349;
})();
var statearr_17350_19648 = state_17320__$1;
(statearr_17350_19648[(2)] = null);

(statearr_17350_19648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (22))){
var inst_17313 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17351_19650 = state_17320__$1;
(statearr_17351_19650[(2)] = inst_17313);

(statearr_17351_19650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (6))){
var inst_17273 = (state_17320[(14)]);
var inst_17277 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17273,change);
var state_17320__$1 = state_17320;
var statearr_17352_19651 = state_17320__$1;
(statearr_17352_19651[(2)] = inst_17277);

(statearr_17352_19651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (25))){
var state_17320__$1 = state_17320;
var statearr_17353_19652 = state_17320__$1;
(statearr_17353_19652[(2)] = null);

(statearr_17353_19652[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (17))){
var inst_17273 = (state_17320[(14)]);
var inst_17262 = (state_17320[(18)]);
var inst_17295 = (inst_17262.cljs$core$IFn$_invoke$arity$1 ? inst_17262.cljs$core$IFn$_invoke$arity$1(inst_17273) : inst_17262.call(null,inst_17273));
var inst_17296 = cljs.core.not(inst_17295);
var state_17320__$1 = state_17320;
var statearr_17354_19654 = state_17320__$1;
(statearr_17354_19654[(2)] = inst_17296);

(statearr_17354_19654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (3))){
var inst_17317 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17320__$1,inst_17317);
} else {
if((state_val_17321 === (12))){
var state_17320__$1 = state_17320;
var statearr_17355_19655 = state_17320__$1;
(statearr_17355_19655[(2)] = null);

(statearr_17355_19655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (2))){
var inst_17260 = (state_17320[(12)]);
var inst_17257 = (state_17320[(11)]);
var inst_17260__$1 = cljs.core.__destructure_map(inst_17257);
var inst_17261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17260__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17260__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17260__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17320__$1 = (function (){var statearr_17356 = state_17320;
(statearr_17356[(12)] = inst_17260__$1);

(statearr_17356[(16)] = inst_17261);

(statearr_17356[(18)] = inst_17262);

return statearr_17356;
})();
return cljs.core.async.ioc_alts_BANG_(state_17320__$1,(4),inst_17263);
} else {
if((state_val_17321 === (23))){
var inst_17304 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
if(cljs.core.truth_(inst_17304)){
var statearr_17357_19657 = state_17320__$1;
(statearr_17357_19657[(1)] = (24));

} else {
var statearr_17358_19662 = state_17320__$1;
(statearr_17358_19662[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (19))){
var inst_17299 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17359_19663 = state_17320__$1;
(statearr_17359_19663[(2)] = inst_17299);

(statearr_17359_19663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (11))){
var inst_17273 = (state_17320[(14)]);
var inst_17283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17273);
var state_17320__$1 = state_17320;
var statearr_17360_19664 = state_17320__$1;
(statearr_17360_19664[(2)] = inst_17283);

(statearr_17360_19664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (9))){
var inst_17273 = (state_17320[(14)]);
var inst_17290 = (state_17320[(19)]);
var inst_17261 = (state_17320[(16)]);
var inst_17290__$1 = (inst_17261.cljs$core$IFn$_invoke$arity$1 ? inst_17261.cljs$core$IFn$_invoke$arity$1(inst_17273) : inst_17261.call(null,inst_17273));
var state_17320__$1 = (function (){var statearr_17361 = state_17320;
(statearr_17361[(19)] = inst_17290__$1);

return statearr_17361;
})();
if(cljs.core.truth_(inst_17290__$1)){
var statearr_17370_19665 = state_17320__$1;
(statearr_17370_19665[(1)] = (14));

} else {
var statearr_17375_19669 = state_17320__$1;
(statearr_17375_19669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (5))){
var inst_17274 = (state_17320[(13)]);
var state_17320__$1 = state_17320;
var statearr_17379_19671 = state_17320__$1;
(statearr_17379_19671[(2)] = inst_17274);

(statearr_17379_19671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (14))){
var inst_17290 = (state_17320[(19)]);
var state_17320__$1 = state_17320;
var statearr_17380_19673 = state_17320__$1;
(statearr_17380_19673[(2)] = inst_17290);

(statearr_17380_19673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (26))){
var inst_17309 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17387_19674 = state_17320__$1;
(statearr_17387_19674[(2)] = inst_17309);

(statearr_17387_19674[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (16))){
var inst_17301 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
if(cljs.core.truth_(inst_17301)){
var statearr_17388_19675 = state_17320__$1;
(statearr_17388_19675[(1)] = (20));

} else {
var statearr_17389_19676 = state_17320__$1;
(statearr_17389_19676[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (10))){
var inst_17315 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17390_19677 = state_17320__$1;
(statearr_17390_19677[(2)] = inst_17315);

(statearr_17390_19677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (18))){
var inst_17293 = (state_17320[(15)]);
var state_17320__$1 = state_17320;
var statearr_17391_19678 = state_17320__$1;
(statearr_17391_19678[(2)] = inst_17293);

(statearr_17391_19678[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (8))){
var inst_17269 = (state_17320[(7)]);
var inst_17281 = (inst_17269 == null);
var state_17320__$1 = state_17320;
if(cljs.core.truth_(inst_17281)){
var statearr_17400_19680 = state_17320__$1;
(statearr_17400_19680[(1)] = (11));

} else {
var statearr_17407_19681 = state_17320__$1;
(statearr_17407_19681[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13957__auto__ = null;
var cljs$core$async$mix_$_state_machine__13957__auto____0 = (function (){
var statearr_17414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17414[(0)] = cljs$core$async$mix_$_state_machine__13957__auto__);

(statearr_17414[(1)] = (1));

return statearr_17414;
});
var cljs$core$async$mix_$_state_machine__13957__auto____1 = (function (state_17320){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_17320);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e17415){var ex__13960__auto__ = e17415;
var statearr_17416_19683 = state_17320;
(statearr_17416_19683[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_17320[(4)]))){
var statearr_17417_19684 = state_17320;
(statearr_17417_19684[(1)] = cljs.core.first((state_17320[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19685 = state_17320;
state_17320 = G__19685;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13957__auto__ = function(state_17320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13957__auto____1.call(this,state_17320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13957__auto____0;
cljs$core$async$mix_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13957__auto____1;
return cljs$core$async$mix_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_17420 = f__15046__auto__();
(statearr_17420[(6)] = c__15045__auto___19628);

return statearr_17420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19687 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19687(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19688 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19688(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19700 = (function() {
var G__19701 = null;
var G__19701__1 = (function (p){
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
var G__19701__2 = (function (p,v){
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
G__19701 = function(p,v){
switch(arguments.length){
case 1:
return G__19701__1.call(this,p);
case 2:
return G__19701__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19701.cljs$core$IFn$_invoke$arity$1 = G__19701__1;
G__19701.cljs$core$IFn$_invoke$arity$2 = G__19701__2;
return G__19701;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17428 = arguments.length;
switch (G__17428) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19700(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19700(p,v);
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
cljs.core.async.t_cljs$core$async17439 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17440){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17440 = meta17440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17441,meta17440__$1){
var self__ = this;
var _17441__$1 = this;
return (new cljs.core.async.t_cljs$core$async17439(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17440__$1));
}));

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17441){
var self__ = this;
var _17441__$1 = this;
return self__.meta17440;
}));

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17440","meta17440",-12729599,null)], null);
}));

(cljs.core.async.t_cljs$core$async17439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17439");

(cljs.core.async.t_cljs$core$async17439.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17439.
 */
cljs.core.async.__GT_t_cljs$core$async17439 = (function cljs$core$async$__GT_t_cljs$core$async17439(ch,topic_fn,buf_fn,mults,ensure_mult,meta17440){
return (new cljs.core.async.t_cljs$core$async17439(ch,topic_fn,buf_fn,mults,ensure_mult,meta17440));
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
var G__17436 = arguments.length;
switch (G__17436) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17434_SHARP_){
if(cljs.core.truth_((p1__17434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17434_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17434_SHARP_.call(null,topic)))){
return p1__17434_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17434_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17439(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15045__auto___19720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_17531){
var state_val_17532 = (state_17531[(1)]);
if((state_val_17532 === (7))){
var inst_17527 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
var statearr_17533_19721 = state_17531__$1;
(statearr_17533_19721[(2)] = inst_17527);

(statearr_17533_19721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (20))){
var state_17531__$1 = state_17531;
var statearr_17534_19726 = state_17531__$1;
(statearr_17534_19726[(2)] = null);

(statearr_17534_19726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (1))){
var state_17531__$1 = state_17531;
var statearr_17535_19727 = state_17531__$1;
(statearr_17535_19727[(2)] = null);

(statearr_17535_19727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (24))){
var inst_17510 = (state_17531[(7)]);
var inst_17519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17510);
var state_17531__$1 = state_17531;
var statearr_17537_19729 = state_17531__$1;
(statearr_17537_19729[(2)] = inst_17519);

(statearr_17537_19729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (4))){
var inst_17456 = (state_17531[(8)]);
var inst_17456__$1 = (state_17531[(2)]);
var inst_17457 = (inst_17456__$1 == null);
var state_17531__$1 = (function (){var statearr_17538 = state_17531;
(statearr_17538[(8)] = inst_17456__$1);

return statearr_17538;
})();
if(cljs.core.truth_(inst_17457)){
var statearr_17539_19731 = state_17531__$1;
(statearr_17539_19731[(1)] = (5));

} else {
var statearr_17540_19732 = state_17531__$1;
(statearr_17540_19732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (15))){
var inst_17504 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
var statearr_17544_19733 = state_17531__$1;
(statearr_17544_19733[(2)] = inst_17504);

(statearr_17544_19733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (21))){
var inst_17524 = (state_17531[(2)]);
var state_17531__$1 = (function (){var statearr_17545 = state_17531;
(statearr_17545[(9)] = inst_17524);

return statearr_17545;
})();
var statearr_17546_19734 = state_17531__$1;
(statearr_17546_19734[(2)] = null);

(statearr_17546_19734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (13))){
var inst_17486 = (state_17531[(10)]);
var inst_17488 = cljs.core.chunked_seq_QMARK_(inst_17486);
var state_17531__$1 = state_17531;
if(inst_17488){
var statearr_17549_19736 = state_17531__$1;
(statearr_17549_19736[(1)] = (16));

} else {
var statearr_17550_19737 = state_17531__$1;
(statearr_17550_19737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (22))){
var inst_17516 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
if(cljs.core.truth_(inst_17516)){
var statearr_17553_19738 = state_17531__$1;
(statearr_17553_19738[(1)] = (23));

} else {
var statearr_17557_19743 = state_17531__$1;
(statearr_17557_19743[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (6))){
var inst_17510 = (state_17531[(7)]);
var inst_17456 = (state_17531[(8)]);
var inst_17512 = (state_17531[(11)]);
var inst_17510__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17456) : topic_fn.call(null,inst_17456));
var inst_17511 = cljs.core.deref(mults);
var inst_17512__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17511,inst_17510__$1);
var state_17531__$1 = (function (){var statearr_17563 = state_17531;
(statearr_17563[(7)] = inst_17510__$1);

(statearr_17563[(11)] = inst_17512__$1);

return statearr_17563;
})();
if(cljs.core.truth_(inst_17512__$1)){
var statearr_17564_19744 = state_17531__$1;
(statearr_17564_19744[(1)] = (19));

} else {
var statearr_17565_19745 = state_17531__$1;
(statearr_17565_19745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (25))){
var inst_17521 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
var statearr_17566_19746 = state_17531__$1;
(statearr_17566_19746[(2)] = inst_17521);

(statearr_17566_19746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (17))){
var inst_17486 = (state_17531[(10)]);
var inst_17495 = cljs.core.first(inst_17486);
var inst_17496 = cljs.core.async.muxch_STAR_(inst_17495);
var inst_17497 = cljs.core.async.close_BANG_(inst_17496);
var inst_17498 = cljs.core.next(inst_17486);
var inst_17469 = inst_17498;
var inst_17470 = null;
var inst_17471 = (0);
var inst_17472 = (0);
var state_17531__$1 = (function (){var statearr_17572 = state_17531;
(statearr_17572[(12)] = inst_17470);

(statearr_17572[(13)] = inst_17469);

(statearr_17572[(14)] = inst_17472);

(statearr_17572[(15)] = inst_17471);

(statearr_17572[(16)] = inst_17497);

return statearr_17572;
})();
var statearr_17573_19747 = state_17531__$1;
(statearr_17573_19747[(2)] = null);

(statearr_17573_19747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (3))){
var inst_17529 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17531__$1,inst_17529);
} else {
if((state_val_17532 === (12))){
var inst_17506 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
var statearr_17577_19751 = state_17531__$1;
(statearr_17577_19751[(2)] = inst_17506);

(statearr_17577_19751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (2))){
var state_17531__$1 = state_17531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17531__$1,(4),ch);
} else {
if((state_val_17532 === (23))){
var state_17531__$1 = state_17531;
var statearr_17578_19752 = state_17531__$1;
(statearr_17578_19752[(2)] = null);

(statearr_17578_19752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (19))){
var inst_17456 = (state_17531[(8)]);
var inst_17512 = (state_17531[(11)]);
var inst_17514 = cljs.core.async.muxch_STAR_(inst_17512);
var state_17531__$1 = state_17531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17531__$1,(22),inst_17514,inst_17456);
} else {
if((state_val_17532 === (11))){
var inst_17469 = (state_17531[(13)]);
var inst_17486 = (state_17531[(10)]);
var inst_17486__$1 = cljs.core.seq(inst_17469);
var state_17531__$1 = (function (){var statearr_17594 = state_17531;
(statearr_17594[(10)] = inst_17486__$1);

return statearr_17594;
})();
if(inst_17486__$1){
var statearr_17595_19753 = state_17531__$1;
(statearr_17595_19753[(1)] = (13));

} else {
var statearr_17596_19754 = state_17531__$1;
(statearr_17596_19754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (9))){
var inst_17508 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
var statearr_17597_19755 = state_17531__$1;
(statearr_17597_19755[(2)] = inst_17508);

(statearr_17597_19755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (5))){
var inst_17466 = cljs.core.deref(mults);
var inst_17467 = cljs.core.vals(inst_17466);
var inst_17468 = cljs.core.seq(inst_17467);
var inst_17469 = inst_17468;
var inst_17470 = null;
var inst_17471 = (0);
var inst_17472 = (0);
var state_17531__$1 = (function (){var statearr_17598 = state_17531;
(statearr_17598[(12)] = inst_17470);

(statearr_17598[(13)] = inst_17469);

(statearr_17598[(14)] = inst_17472);

(statearr_17598[(15)] = inst_17471);

return statearr_17598;
})();
var statearr_17601_19757 = state_17531__$1;
(statearr_17601_19757[(2)] = null);

(statearr_17601_19757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (14))){
var state_17531__$1 = state_17531;
var statearr_17605_19758 = state_17531__$1;
(statearr_17605_19758[(2)] = null);

(statearr_17605_19758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (16))){
var inst_17486 = (state_17531[(10)]);
var inst_17490 = cljs.core.chunk_first(inst_17486);
var inst_17491 = cljs.core.chunk_rest(inst_17486);
var inst_17492 = cljs.core.count(inst_17490);
var inst_17469 = inst_17491;
var inst_17470 = inst_17490;
var inst_17471 = inst_17492;
var inst_17472 = (0);
var state_17531__$1 = (function (){var statearr_17612 = state_17531;
(statearr_17612[(12)] = inst_17470);

(statearr_17612[(13)] = inst_17469);

(statearr_17612[(14)] = inst_17472);

(statearr_17612[(15)] = inst_17471);

return statearr_17612;
})();
var statearr_17616_19761 = state_17531__$1;
(statearr_17616_19761[(2)] = null);

(statearr_17616_19761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (10))){
var inst_17470 = (state_17531[(12)]);
var inst_17469 = (state_17531[(13)]);
var inst_17472 = (state_17531[(14)]);
var inst_17471 = (state_17531[(15)]);
var inst_17480 = cljs.core._nth(inst_17470,inst_17472);
var inst_17481 = cljs.core.async.muxch_STAR_(inst_17480);
var inst_17482 = cljs.core.async.close_BANG_(inst_17481);
var inst_17483 = (inst_17472 + (1));
var tmp17602 = inst_17470;
var tmp17603 = inst_17469;
var tmp17604 = inst_17471;
var inst_17469__$1 = tmp17603;
var inst_17470__$1 = tmp17602;
var inst_17471__$1 = tmp17604;
var inst_17472__$1 = inst_17483;
var state_17531__$1 = (function (){var statearr_17620 = state_17531;
(statearr_17620[(12)] = inst_17470__$1);

(statearr_17620[(13)] = inst_17469__$1);

(statearr_17620[(14)] = inst_17472__$1);

(statearr_17620[(15)] = inst_17471__$1);

(statearr_17620[(17)] = inst_17482);

return statearr_17620;
})();
var statearr_17621_19764 = state_17531__$1;
(statearr_17621_19764[(2)] = null);

(statearr_17621_19764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (18))){
var inst_17501 = (state_17531[(2)]);
var state_17531__$1 = state_17531;
var statearr_17623_19768 = state_17531__$1;
(statearr_17623_19768[(2)] = inst_17501);

(statearr_17623_19768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17532 === (8))){
var inst_17472 = (state_17531[(14)]);
var inst_17471 = (state_17531[(15)]);
var inst_17474 = (inst_17472 < inst_17471);
var inst_17475 = inst_17474;
var state_17531__$1 = state_17531;
if(cljs.core.truth_(inst_17475)){
var statearr_17624_19770 = state_17531__$1;
(statearr_17624_19770[(1)] = (10));

} else {
var statearr_17625_19771 = state_17531__$1;
(statearr_17625_19771[(1)] = (11));

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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_17638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17638[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_17638[(1)] = (1));

return statearr_17638;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_17531){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_17531);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e17643){var ex__13960__auto__ = e17643;
var statearr_17644_19777 = state_17531;
(statearr_17644_19777[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_17531[(4)]))){
var statearr_17650_19778 = state_17531;
(statearr_17650_19778[(1)] = cljs.core.first((state_17531[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19779 = state_17531;
state_17531 = G__19779;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_17531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_17531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_17651 = f__15046__auto__();
(statearr_17651[(6)] = c__15045__auto___19720);

return statearr_17651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
var G__17663 = arguments.length;
switch (G__17663) {
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
var G__17678 = arguments.length;
switch (G__17678) {
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
var G__17690 = arguments.length;
switch (G__17690) {
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
var c__15045__auto___19790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_17739){
var state_val_17740 = (state_17739[(1)]);
if((state_val_17740 === (7))){
var state_17739__$1 = state_17739;
var statearr_17753_19792 = state_17739__$1;
(statearr_17753_19792[(2)] = null);

(statearr_17753_19792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (1))){
var state_17739__$1 = state_17739;
var statearr_17754_19793 = state_17739__$1;
(statearr_17754_19793[(2)] = null);

(statearr_17754_19793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (4))){
var inst_17700 = (state_17739[(7)]);
var inst_17699 = (state_17739[(8)]);
var inst_17702 = (inst_17700 < inst_17699);
var state_17739__$1 = state_17739;
if(cljs.core.truth_(inst_17702)){
var statearr_17755_19794 = state_17739__$1;
(statearr_17755_19794[(1)] = (6));

} else {
var statearr_17756_19796 = state_17739__$1;
(statearr_17756_19796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (15))){
var inst_17725 = (state_17739[(9)]);
var inst_17730 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17725);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17739__$1,(17),out,inst_17730);
} else {
if((state_val_17740 === (13))){
var inst_17725 = (state_17739[(9)]);
var inst_17725__$1 = (state_17739[(2)]);
var inst_17726 = cljs.core.some(cljs.core.nil_QMARK_,inst_17725__$1);
var state_17739__$1 = (function (){var statearr_17757 = state_17739;
(statearr_17757[(9)] = inst_17725__$1);

return statearr_17757;
})();
if(cljs.core.truth_(inst_17726)){
var statearr_17758_19798 = state_17739__$1;
(statearr_17758_19798[(1)] = (14));

} else {
var statearr_17759_19799 = state_17739__$1;
(statearr_17759_19799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (6))){
var state_17739__$1 = state_17739;
var statearr_17760_19800 = state_17739__$1;
(statearr_17760_19800[(2)] = null);

(statearr_17760_19800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (17))){
var inst_17732 = (state_17739[(2)]);
var state_17739__$1 = (function (){var statearr_17779 = state_17739;
(statearr_17779[(10)] = inst_17732);

return statearr_17779;
})();
var statearr_17780_19801 = state_17739__$1;
(statearr_17780_19801[(2)] = null);

(statearr_17780_19801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (3))){
var inst_17737 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17739__$1,inst_17737);
} else {
if((state_val_17740 === (12))){
var _ = (function (){var statearr_17781 = state_17739;
(statearr_17781[(4)] = cljs.core.rest((state_17739[(4)])));

return statearr_17781;
})();
var state_17739__$1 = state_17739;
var ex17763 = (state_17739__$1[(2)]);
var statearr_17786_19802 = state_17739__$1;
(statearr_17786_19802[(5)] = ex17763);


if((ex17763 instanceof Object)){
var statearr_17801_19805 = state_17739__$1;
(statearr_17801_19805[(1)] = (11));

(statearr_17801_19805[(5)] = null);

} else {
throw ex17763;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (2))){
var inst_17698 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17699 = cnt;
var inst_17700 = (0);
var state_17739__$1 = (function (){var statearr_17812 = state_17739;
(statearr_17812[(11)] = inst_17698);

(statearr_17812[(7)] = inst_17700);

(statearr_17812[(8)] = inst_17699);

return statearr_17812;
})();
var statearr_17813_19808 = state_17739__$1;
(statearr_17813_19808[(2)] = null);

(statearr_17813_19808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (11))){
var inst_17704 = (state_17739[(2)]);
var inst_17705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17739__$1 = (function (){var statearr_17817 = state_17739;
(statearr_17817[(12)] = inst_17704);

return statearr_17817;
})();
var statearr_17818_19809 = state_17739__$1;
(statearr_17818_19809[(2)] = inst_17705);

(statearr_17818_19809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (9))){
var inst_17700 = (state_17739[(7)]);
var _ = (function (){var statearr_17819 = state_17739;
(statearr_17819[(4)] = cljs.core.cons((12),(state_17739[(4)])));

return statearr_17819;
})();
var inst_17711 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17700) : chs__$1.call(null,inst_17700));
var inst_17712 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17700) : done.call(null,inst_17700));
var inst_17713 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17711,inst_17712);
var ___$1 = (function (){var statearr_17823 = state_17739;
(statearr_17823[(4)] = cljs.core.rest((state_17739[(4)])));

return statearr_17823;
})();
var state_17739__$1 = state_17739;
var statearr_17824_19818 = state_17739__$1;
(statearr_17824_19818[(2)] = inst_17713);

(statearr_17824_19818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (5))){
var inst_17723 = (state_17739[(2)]);
var state_17739__$1 = (function (){var statearr_17825 = state_17739;
(statearr_17825[(13)] = inst_17723);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17739__$1,(13),dchan);
} else {
if((state_val_17740 === (14))){
var inst_17728 = cljs.core.async.close_BANG_(out);
var state_17739__$1 = state_17739;
var statearr_17826_19820 = state_17739__$1;
(statearr_17826_19820[(2)] = inst_17728);

(statearr_17826_19820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (16))){
var inst_17735 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17827_19821 = state_17739__$1;
(statearr_17827_19821[(2)] = inst_17735);

(statearr_17827_19821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (10))){
var inst_17700 = (state_17739[(7)]);
var inst_17716 = (state_17739[(2)]);
var inst_17717 = (inst_17700 + (1));
var inst_17700__$1 = inst_17717;
var state_17739__$1 = (function (){var statearr_17828 = state_17739;
(statearr_17828[(14)] = inst_17716);

(statearr_17828[(7)] = inst_17700__$1);

return statearr_17828;
})();
var statearr_17829_19822 = state_17739__$1;
(statearr_17829_19822[(2)] = null);

(statearr_17829_19822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (8))){
var inst_17721 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17830_19823 = state_17739__$1;
(statearr_17830_19823[(2)] = inst_17721);

(statearr_17830_19823[(1)] = (5));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_17831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17831[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_17831[(1)] = (1));

return statearr_17831;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_17739){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_17739);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e17832){var ex__13960__auto__ = e17832;
var statearr_17833_19825 = state_17739;
(statearr_17833_19825[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_17739[(4)]))){
var statearr_17834_19826 = state_17739;
(statearr_17834_19826[(1)] = cljs.core.first((state_17739[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19827 = state_17739;
state_17739 = G__19827;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_17739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_17739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_17836 = f__15046__auto__();
(statearr_17836[(6)] = c__15045__auto___19790);

return statearr_17836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
var G__17845 = arguments.length;
switch (G__17845) {
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
var c__15045__auto___19832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_17901){
var state_val_17902 = (state_17901[(1)]);
if((state_val_17902 === (7))){
var inst_17872 = (state_17901[(7)]);
var inst_17870 = (state_17901[(8)]);
var inst_17870__$1 = (state_17901[(2)]);
var inst_17872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17870__$1,(0),null);
var inst_17873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17870__$1,(1),null);
var inst_17874 = (inst_17872__$1 == null);
var state_17901__$1 = (function (){var statearr_17917 = state_17901;
(statearr_17917[(7)] = inst_17872__$1);

(statearr_17917[(8)] = inst_17870__$1);

(statearr_17917[(9)] = inst_17873);

return statearr_17917;
})();
if(cljs.core.truth_(inst_17874)){
var statearr_17918_19833 = state_17901__$1;
(statearr_17918_19833[(1)] = (8));

} else {
var statearr_17919_19834 = state_17901__$1;
(statearr_17919_19834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (1))){
var inst_17854 = cljs.core.vec(chs);
var inst_17855 = inst_17854;
var state_17901__$1 = (function (){var statearr_17920 = state_17901;
(statearr_17920[(10)] = inst_17855);

return statearr_17920;
})();
var statearr_17921_19839 = state_17901__$1;
(statearr_17921_19839[(2)] = null);

(statearr_17921_19839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (4))){
var inst_17855 = (state_17901[(10)]);
var state_17901__$1 = state_17901;
return cljs.core.async.ioc_alts_BANG_(state_17901__$1,(7),inst_17855);
} else {
if((state_val_17902 === (6))){
var inst_17894 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17922_19840 = state_17901__$1;
(statearr_17922_19840[(2)] = inst_17894);

(statearr_17922_19840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (3))){
var inst_17899 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17901__$1,inst_17899);
} else {
if((state_val_17902 === (2))){
var inst_17855 = (state_17901[(10)]);
var inst_17857 = cljs.core.count(inst_17855);
var inst_17858 = (inst_17857 > (0));
var state_17901__$1 = state_17901;
if(cljs.core.truth_(inst_17858)){
var statearr_17924_19841 = state_17901__$1;
(statearr_17924_19841[(1)] = (4));

} else {
var statearr_17925_19842 = state_17901__$1;
(statearr_17925_19842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (11))){
var inst_17855 = (state_17901[(10)]);
var inst_17881 = (state_17901[(2)]);
var tmp17923 = inst_17855;
var inst_17855__$1 = tmp17923;
var state_17901__$1 = (function (){var statearr_17926 = state_17901;
(statearr_17926[(11)] = inst_17881);

(statearr_17926[(10)] = inst_17855__$1);

return statearr_17926;
})();
var statearr_17927_19843 = state_17901__$1;
(statearr_17927_19843[(2)] = null);

(statearr_17927_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (9))){
var inst_17872 = (state_17901[(7)]);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17901__$1,(11),out,inst_17872);
} else {
if((state_val_17902 === (5))){
var inst_17889 = cljs.core.async.close_BANG_(out);
var state_17901__$1 = state_17901;
var statearr_17934_19844 = state_17901__$1;
(statearr_17934_19844[(2)] = inst_17889);

(statearr_17934_19844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (10))){
var inst_17884 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17938_19845 = state_17901__$1;
(statearr_17938_19845[(2)] = inst_17884);

(statearr_17938_19845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (8))){
var inst_17872 = (state_17901[(7)]);
var inst_17855 = (state_17901[(10)]);
var inst_17870 = (state_17901[(8)]);
var inst_17873 = (state_17901[(9)]);
var inst_17876 = (function (){var cs = inst_17855;
var vec__17866 = inst_17870;
var v = inst_17872;
var c = inst_17873;
return (function (p1__17841_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17841_SHARP_);
});
})();
var inst_17877 = cljs.core.filterv(inst_17876,inst_17855);
var inst_17855__$1 = inst_17877;
var state_17901__$1 = (function (){var statearr_17941 = state_17901;
(statearr_17941[(10)] = inst_17855__$1);

return statearr_17941;
})();
var statearr_17942_19849 = state_17901__$1;
(statearr_17942_19849[(2)] = null);

(statearr_17942_19849[(1)] = (2));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_17944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17944[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_17944[(1)] = (1));

return statearr_17944;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_17901){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_17901);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e17945){var ex__13960__auto__ = e17945;
var statearr_17950_19851 = state_17901;
(statearr_17950_19851[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_17901[(4)]))){
var statearr_17951_19852 = state_17901;
(statearr_17951_19852[(1)] = cljs.core.first((state_17901[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19853 = state_17901;
state_17901 = G__19853;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_17901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_17901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_17952 = f__15046__auto__();
(statearr_17952[(6)] = c__15045__auto___19832);

return statearr_17952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
var G__17959 = arguments.length;
switch (G__17959) {
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
var c__15045__auto___19857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_17996){
var state_val_17997 = (state_17996[(1)]);
if((state_val_17997 === (7))){
var inst_17971 = (state_17996[(7)]);
var inst_17971__$1 = (state_17996[(2)]);
var inst_17973 = (inst_17971__$1 == null);
var inst_17974 = cljs.core.not(inst_17973);
var state_17996__$1 = (function (){var statearr_18000 = state_17996;
(statearr_18000[(7)] = inst_17971__$1);

return statearr_18000;
})();
if(inst_17974){
var statearr_18001_19864 = state_17996__$1;
(statearr_18001_19864[(1)] = (8));

} else {
var statearr_18002_19865 = state_17996__$1;
(statearr_18002_19865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (1))){
var inst_17966 = (0);
var state_17996__$1 = (function (){var statearr_18012 = state_17996;
(statearr_18012[(8)] = inst_17966);

return statearr_18012;
})();
var statearr_18013_19866 = state_17996__$1;
(statearr_18013_19866[(2)] = null);

(statearr_18013_19866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (4))){
var state_17996__$1 = state_17996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17996__$1,(7),ch);
} else {
if((state_val_17997 === (6))){
var inst_17991 = (state_17996[(2)]);
var state_17996__$1 = state_17996;
var statearr_18014_19867 = state_17996__$1;
(statearr_18014_19867[(2)] = inst_17991);

(statearr_18014_19867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (3))){
var inst_17993 = (state_17996[(2)]);
var inst_17994 = cljs.core.async.close_BANG_(out);
var state_17996__$1 = (function (){var statearr_18019 = state_17996;
(statearr_18019[(9)] = inst_17993);

return statearr_18019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17996__$1,inst_17994);
} else {
if((state_val_17997 === (2))){
var inst_17966 = (state_17996[(8)]);
var inst_17968 = (inst_17966 < n);
var state_17996__$1 = state_17996;
if(cljs.core.truth_(inst_17968)){
var statearr_18020_19871 = state_17996__$1;
(statearr_18020_19871[(1)] = (4));

} else {
var statearr_18021_19872 = state_17996__$1;
(statearr_18021_19872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (11))){
var inst_17966 = (state_17996[(8)]);
var inst_17980 = (state_17996[(2)]);
var inst_17984 = (inst_17966 + (1));
var inst_17966__$1 = inst_17984;
var state_17996__$1 = (function (){var statearr_18035 = state_17996;
(statearr_18035[(8)] = inst_17966__$1);

(statearr_18035[(10)] = inst_17980);

return statearr_18035;
})();
var statearr_18038_19874 = state_17996__$1;
(statearr_18038_19874[(2)] = null);

(statearr_18038_19874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (9))){
var state_17996__$1 = state_17996;
var statearr_18041_19875 = state_17996__$1;
(statearr_18041_19875[(2)] = null);

(statearr_18041_19875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (5))){
var state_17996__$1 = state_17996;
var statearr_18045_19876 = state_17996__$1;
(statearr_18045_19876[(2)] = null);

(statearr_18045_19876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (10))){
var inst_17988 = (state_17996[(2)]);
var state_17996__$1 = state_17996;
var statearr_18046_19878 = state_17996__$1;
(statearr_18046_19878[(2)] = inst_17988);

(statearr_18046_19878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17997 === (8))){
var inst_17971 = (state_17996[(7)]);
var state_17996__$1 = state_17996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17996__$1,(11),out,inst_17971);
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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_18047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18047[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_18047[(1)] = (1));

return statearr_18047;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_17996){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_17996);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e18048){var ex__13960__auto__ = e18048;
var statearr_18051_19880 = state_17996;
(statearr_18051_19880[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_17996[(4)]))){
var statearr_18052_19881 = state_17996;
(statearr_18052_19881[(1)] = cljs.core.first((state_17996[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19882 = state_17996;
state_17996 = G__19882;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_17996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_17996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_18056 = f__15046__auto__();
(statearr_18056[(6)] = c__15045__auto___19857);

return statearr_18056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
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
cljs.core.async.t_cljs$core$async18071 = (function (f,ch,meta18064,_,fn1,meta18072){
this.f = f;
this.ch = ch;
this.meta18064 = meta18064;
this._ = _;
this.fn1 = fn1;
this.meta18072 = meta18072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18073,meta18072__$1){
var self__ = this;
var _18073__$1 = this;
return (new cljs.core.async.t_cljs$core$async18071(self__.f,self__.ch,self__.meta18064,self__._,self__.fn1,meta18072__$1));
}));

(cljs.core.async.t_cljs$core$async18071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18073){
var self__ = this;
var _18073__$1 = this;
return self__.meta18072;
}));

(cljs.core.async.t_cljs$core$async18071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18062_SHARP_){
var G__18088 = (((p1__18062_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18062_SHARP_) : self__.f.call(null,p1__18062_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18088) : f1.call(null,G__18088));
});
}));

(cljs.core.async.t_cljs$core$async18071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18064","meta18064",2100559244,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18063","cljs.core.async/t_cljs$core$async18063",1343461409,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18072","meta18072",347414733,null)], null);
}));

(cljs.core.async.t_cljs$core$async18071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18071");

(cljs.core.async.t_cljs$core$async18071.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18071.
 */
cljs.core.async.__GT_t_cljs$core$async18071 = (function cljs$core$async$__GT_t_cljs$core$async18071(f,ch,meta18064,_,fn1,meta18072){
return (new cljs.core.async.t_cljs$core$async18071(f,ch,meta18064,_,fn1,meta18072));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18063 = (function (f,ch,meta18064){
this.f = f;
this.ch = ch;
this.meta18064 = meta18064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18065,meta18064__$1){
var self__ = this;
var _18065__$1 = this;
return (new cljs.core.async.t_cljs$core$async18063(self__.f,self__.ch,meta18064__$1));
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18065){
var self__ = this;
var _18065__$1 = this;
return self__.meta18064;
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18071(self__.f,self__.ch,self__.meta18064,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18095 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18095) : self__.f.call(null,G__18095));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18064","meta18064",2100559244,null)], null);
}));

(cljs.core.async.t_cljs$core$async18063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18063");

(cljs.core.async.t_cljs$core$async18063.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18063.
 */
cljs.core.async.__GT_t_cljs$core$async18063 = (function cljs$core$async$__GT_t_cljs$core$async18063(f,ch,meta18064){
return (new cljs.core.async.t_cljs$core$async18063(f,ch,meta18064));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18063(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18110 = (function (f,ch,meta18111){
this.f = f;
this.ch = ch;
this.meta18111 = meta18111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18112,meta18111__$1){
var self__ = this;
var _18112__$1 = this;
return (new cljs.core.async.t_cljs$core$async18110(self__.f,self__.ch,meta18111__$1));
}));

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18112){
var self__ = this;
var _18112__$1 = this;
return self__.meta18111;
}));

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18110.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18111","meta18111",-667168679,null)], null);
}));

(cljs.core.async.t_cljs$core$async18110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18110");

(cljs.core.async.t_cljs$core$async18110.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18110.
 */
cljs.core.async.__GT_t_cljs$core$async18110 = (function cljs$core$async$__GT_t_cljs$core$async18110(f,ch,meta18111){
return (new cljs.core.async.t_cljs$core$async18110(f,ch,meta18111));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18110(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18129 = (function (p,ch,meta18130){
this.p = p;
this.ch = ch;
this.meta18130 = meta18130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18131,meta18130__$1){
var self__ = this;
var _18131__$1 = this;
return (new cljs.core.async.t_cljs$core$async18129(self__.p,self__.ch,meta18130__$1));
}));

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18131){
var self__ = this;
var _18131__$1 = this;
return self__.meta18130;
}));

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18130","meta18130",1045950526,null)], null);
}));

(cljs.core.async.t_cljs$core$async18129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18129");

(cljs.core.async.t_cljs$core$async18129.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18129.
 */
cljs.core.async.__GT_t_cljs$core$async18129 = (function cljs$core$async$__GT_t_cljs$core$async18129(p,ch,meta18130){
return (new cljs.core.async.t_cljs$core$async18129(p,ch,meta18130));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18129(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18159 = arguments.length;
switch (G__18159) {
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
var c__15045__auto___19921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_18194){
var state_val_18195 = (state_18194[(1)]);
if((state_val_18195 === (7))){
var inst_18189 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
var statearr_18200_19922 = state_18194__$1;
(statearr_18200_19922[(2)] = inst_18189);

(statearr_18200_19922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (1))){
var state_18194__$1 = state_18194;
var statearr_18201_19923 = state_18194__$1;
(statearr_18201_19923[(2)] = null);

(statearr_18201_19923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (4))){
var inst_18175 = (state_18194[(7)]);
var inst_18175__$1 = (state_18194[(2)]);
var inst_18176 = (inst_18175__$1 == null);
var state_18194__$1 = (function (){var statearr_18202 = state_18194;
(statearr_18202[(7)] = inst_18175__$1);

return statearr_18202;
})();
if(cljs.core.truth_(inst_18176)){
var statearr_18203_19924 = state_18194__$1;
(statearr_18203_19924[(1)] = (5));

} else {
var statearr_18204_19925 = state_18194__$1;
(statearr_18204_19925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (6))){
var inst_18175 = (state_18194[(7)]);
var inst_18180 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18175) : p.call(null,inst_18175));
var state_18194__$1 = state_18194;
if(cljs.core.truth_(inst_18180)){
var statearr_18206_19926 = state_18194__$1;
(statearr_18206_19926[(1)] = (8));

} else {
var statearr_18207_19927 = state_18194__$1;
(statearr_18207_19927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (3))){
var inst_18191 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18194__$1,inst_18191);
} else {
if((state_val_18195 === (2))){
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18194__$1,(4),ch);
} else {
if((state_val_18195 === (11))){
var inst_18183 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
var statearr_18220_19928 = state_18194__$1;
(statearr_18220_19928[(2)] = inst_18183);

(statearr_18220_19928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (9))){
var state_18194__$1 = state_18194;
var statearr_18224_19929 = state_18194__$1;
(statearr_18224_19929[(2)] = null);

(statearr_18224_19929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (5))){
var inst_18178 = cljs.core.async.close_BANG_(out);
var state_18194__$1 = state_18194;
var statearr_18227_19930 = state_18194__$1;
(statearr_18227_19930[(2)] = inst_18178);

(statearr_18227_19930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (10))){
var inst_18186 = (state_18194[(2)]);
var state_18194__$1 = (function (){var statearr_18228 = state_18194;
(statearr_18228[(8)] = inst_18186);

return statearr_18228;
})();
var statearr_18229_19935 = state_18194__$1;
(statearr_18229_19935[(2)] = null);

(statearr_18229_19935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (8))){
var inst_18175 = (state_18194[(7)]);
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18194__$1,(11),out,inst_18175);
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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_18232 = [null,null,null,null,null,null,null,null,null];
(statearr_18232[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_18232[(1)] = (1));

return statearr_18232;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_18194){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_18194);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e18236){var ex__13960__auto__ = e18236;
var statearr_18237_19936 = state_18194;
(statearr_18237_19936[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_18194[(4)]))){
var statearr_18238_19937 = state_18194;
(statearr_18238_19937[(1)] = cljs.core.first((state_18194[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19938 = state_18194;
state_18194 = G__19938;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_18194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_18194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_18239 = f__15046__auto__();
(statearr_18239[(6)] = c__15045__auto___19921);

return statearr_18239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18252 = arguments.length;
switch (G__18252) {
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
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_18336){
var state_val_18337 = (state_18336[(1)]);
if((state_val_18337 === (7))){
var inst_18332 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18344_19940 = state_18336__$1;
(statearr_18344_19940[(2)] = inst_18332);

(statearr_18344_19940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (20))){
var inst_18302 = (state_18336[(7)]);
var inst_18313 = (state_18336[(2)]);
var inst_18314 = cljs.core.next(inst_18302);
var inst_18288 = inst_18314;
var inst_18289 = null;
var inst_18290 = (0);
var inst_18291 = (0);
var state_18336__$1 = (function (){var statearr_18345 = state_18336;
(statearr_18345[(8)] = inst_18291);

(statearr_18345[(9)] = inst_18290);

(statearr_18345[(10)] = inst_18289);

(statearr_18345[(11)] = inst_18313);

(statearr_18345[(12)] = inst_18288);

return statearr_18345;
})();
var statearr_18346_19941 = state_18336__$1;
(statearr_18346_19941[(2)] = null);

(statearr_18346_19941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (1))){
var state_18336__$1 = state_18336;
var statearr_18347_19942 = state_18336__$1;
(statearr_18347_19942[(2)] = null);

(statearr_18347_19942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (4))){
var inst_18277 = (state_18336[(13)]);
var inst_18277__$1 = (state_18336[(2)]);
var inst_18278 = (inst_18277__$1 == null);
var state_18336__$1 = (function (){var statearr_18351 = state_18336;
(statearr_18351[(13)] = inst_18277__$1);

return statearr_18351;
})();
if(cljs.core.truth_(inst_18278)){
var statearr_18352_19943 = state_18336__$1;
(statearr_18352_19943[(1)] = (5));

} else {
var statearr_18353_19944 = state_18336__$1;
(statearr_18353_19944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (15))){
var state_18336__$1 = state_18336;
var statearr_18357_19945 = state_18336__$1;
(statearr_18357_19945[(2)] = null);

(statearr_18357_19945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (21))){
var state_18336__$1 = state_18336;
var statearr_18358_19947 = state_18336__$1;
(statearr_18358_19947[(2)] = null);

(statearr_18358_19947[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (13))){
var inst_18291 = (state_18336[(8)]);
var inst_18290 = (state_18336[(9)]);
var inst_18289 = (state_18336[(10)]);
var inst_18288 = (state_18336[(12)]);
var inst_18298 = (state_18336[(2)]);
var inst_18299 = (inst_18291 + (1));
var tmp18354 = inst_18290;
var tmp18355 = inst_18289;
var tmp18356 = inst_18288;
var inst_18288__$1 = tmp18356;
var inst_18289__$1 = tmp18355;
var inst_18290__$1 = tmp18354;
var inst_18291__$1 = inst_18299;
var state_18336__$1 = (function (){var statearr_18359 = state_18336;
(statearr_18359[(14)] = inst_18298);

(statearr_18359[(8)] = inst_18291__$1);

(statearr_18359[(9)] = inst_18290__$1);

(statearr_18359[(10)] = inst_18289__$1);

(statearr_18359[(12)] = inst_18288__$1);

return statearr_18359;
})();
var statearr_18360_19956 = state_18336__$1;
(statearr_18360_19956[(2)] = null);

(statearr_18360_19956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (22))){
var state_18336__$1 = state_18336;
var statearr_18361_19959 = state_18336__$1;
(statearr_18361_19959[(2)] = null);

(statearr_18361_19959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (6))){
var inst_18277 = (state_18336[(13)]);
var inst_18286 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18277) : f.call(null,inst_18277));
var inst_18287 = cljs.core.seq(inst_18286);
var inst_18288 = inst_18287;
var inst_18289 = null;
var inst_18290 = (0);
var inst_18291 = (0);
var state_18336__$1 = (function (){var statearr_18362 = state_18336;
(statearr_18362[(8)] = inst_18291);

(statearr_18362[(9)] = inst_18290);

(statearr_18362[(10)] = inst_18289);

(statearr_18362[(12)] = inst_18288);

return statearr_18362;
})();
var statearr_18363_19960 = state_18336__$1;
(statearr_18363_19960[(2)] = null);

(statearr_18363_19960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (17))){
var inst_18302 = (state_18336[(7)]);
var inst_18306 = cljs.core.chunk_first(inst_18302);
var inst_18307 = cljs.core.chunk_rest(inst_18302);
var inst_18308 = cljs.core.count(inst_18306);
var inst_18288 = inst_18307;
var inst_18289 = inst_18306;
var inst_18290 = inst_18308;
var inst_18291 = (0);
var state_18336__$1 = (function (){var statearr_18364 = state_18336;
(statearr_18364[(8)] = inst_18291);

(statearr_18364[(9)] = inst_18290);

(statearr_18364[(10)] = inst_18289);

(statearr_18364[(12)] = inst_18288);

return statearr_18364;
})();
var statearr_18365_19965 = state_18336__$1;
(statearr_18365_19965[(2)] = null);

(statearr_18365_19965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (3))){
var inst_18334 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18336__$1,inst_18334);
} else {
if((state_val_18337 === (12))){
var inst_18322 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18368_19966 = state_18336__$1;
(statearr_18368_19966[(2)] = inst_18322);

(statearr_18368_19966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (2))){
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18336__$1,(4),in$);
} else {
if((state_val_18337 === (23))){
var inst_18330 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18369_19967 = state_18336__$1;
(statearr_18369_19967[(2)] = inst_18330);

(statearr_18369_19967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (19))){
var inst_18317 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18373_19968 = state_18336__$1;
(statearr_18373_19968[(2)] = inst_18317);

(statearr_18373_19968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (11))){
var inst_18288 = (state_18336[(12)]);
var inst_18302 = (state_18336[(7)]);
var inst_18302__$1 = cljs.core.seq(inst_18288);
var state_18336__$1 = (function (){var statearr_18375 = state_18336;
(statearr_18375[(7)] = inst_18302__$1);

return statearr_18375;
})();
if(inst_18302__$1){
var statearr_18376_19973 = state_18336__$1;
(statearr_18376_19973[(1)] = (14));

} else {
var statearr_18377_19974 = state_18336__$1;
(statearr_18377_19974[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (9))){
var inst_18324 = (state_18336[(2)]);
var inst_18325 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18336__$1 = (function (){var statearr_18378 = state_18336;
(statearr_18378[(15)] = inst_18324);

return statearr_18378;
})();
if(cljs.core.truth_(inst_18325)){
var statearr_18381_19975 = state_18336__$1;
(statearr_18381_19975[(1)] = (21));

} else {
var statearr_18383_19976 = state_18336__$1;
(statearr_18383_19976[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (5))){
var inst_18280 = cljs.core.async.close_BANG_(out);
var state_18336__$1 = state_18336;
var statearr_18384_19977 = state_18336__$1;
(statearr_18384_19977[(2)] = inst_18280);

(statearr_18384_19977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (14))){
var inst_18302 = (state_18336[(7)]);
var inst_18304 = cljs.core.chunked_seq_QMARK_(inst_18302);
var state_18336__$1 = state_18336;
if(inst_18304){
var statearr_18391_19978 = state_18336__$1;
(statearr_18391_19978[(1)] = (17));

} else {
var statearr_18395_19979 = state_18336__$1;
(statearr_18395_19979[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (16))){
var inst_18320 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18396_19980 = state_18336__$1;
(statearr_18396_19980[(2)] = inst_18320);

(statearr_18396_19980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (10))){
var inst_18291 = (state_18336[(8)]);
var inst_18289 = (state_18336[(10)]);
var inst_18296 = cljs.core._nth(inst_18289,inst_18291);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18336__$1,(13),out,inst_18296);
} else {
if((state_val_18337 === (18))){
var inst_18302 = (state_18336[(7)]);
var inst_18311 = cljs.core.first(inst_18302);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18336__$1,(20),out,inst_18311);
} else {
if((state_val_18337 === (8))){
var inst_18291 = (state_18336[(8)]);
var inst_18290 = (state_18336[(9)]);
var inst_18293 = (inst_18291 < inst_18290);
var inst_18294 = inst_18293;
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18294)){
var statearr_18400_19981 = state_18336__$1;
(statearr_18400_19981[(1)] = (10));

} else {
var statearr_18401_19982 = state_18336__$1;
(statearr_18401_19982[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13957__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13957__auto____0 = (function (){
var statearr_18411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18411[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13957__auto__);

(statearr_18411[(1)] = (1));

return statearr_18411;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13957__auto____1 = (function (state_18336){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_18336);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e18412){var ex__13960__auto__ = e18412;
var statearr_18413_19983 = state_18336;
(statearr_18413_19983[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_18336[(4)]))){
var statearr_18420_19984 = state_18336;
(statearr_18420_19984[(1)] = cljs.core.first((state_18336[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19985 = state_18336;
state_18336 = G__19985;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13957__auto__ = function(state_18336){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13957__auto____1.call(this,state_18336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13957__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13957__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_18425 = f__15046__auto__();
(statearr_18425[(6)] = c__15045__auto__);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18427 = arguments.length;
switch (G__18427) {
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
var G__18445 = arguments.length;
switch (G__18445) {
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
var G__18494 = arguments.length;
switch (G__18494) {
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
var c__15045__auto___19990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_18519){
var state_val_18520 = (state_18519[(1)]);
if((state_val_18520 === (7))){
var inst_18514 = (state_18519[(2)]);
var state_18519__$1 = state_18519;
var statearr_18523_19991 = state_18519__$1;
(statearr_18523_19991[(2)] = inst_18514);

(statearr_18523_19991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (1))){
var inst_18496 = null;
var state_18519__$1 = (function (){var statearr_18524 = state_18519;
(statearr_18524[(7)] = inst_18496);

return statearr_18524;
})();
var statearr_18525_19992 = state_18519__$1;
(statearr_18525_19992[(2)] = null);

(statearr_18525_19992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (4))){
var inst_18499 = (state_18519[(8)]);
var inst_18499__$1 = (state_18519[(2)]);
var inst_18500 = (inst_18499__$1 == null);
var inst_18501 = cljs.core.not(inst_18500);
var state_18519__$1 = (function (){var statearr_18526 = state_18519;
(statearr_18526[(8)] = inst_18499__$1);

return statearr_18526;
})();
if(inst_18501){
var statearr_18527_20021 = state_18519__$1;
(statearr_18527_20021[(1)] = (5));

} else {
var statearr_18528_20022 = state_18519__$1;
(statearr_18528_20022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (6))){
var state_18519__$1 = state_18519;
var statearr_18529_20025 = state_18519__$1;
(statearr_18529_20025[(2)] = null);

(statearr_18529_20025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (3))){
var inst_18516 = (state_18519[(2)]);
var inst_18517 = cljs.core.async.close_BANG_(out);
var state_18519__$1 = (function (){var statearr_18530 = state_18519;
(statearr_18530[(9)] = inst_18516);

return statearr_18530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18519__$1,inst_18517);
} else {
if((state_val_18520 === (2))){
var state_18519__$1 = state_18519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18519__$1,(4),ch);
} else {
if((state_val_18520 === (11))){
var inst_18499 = (state_18519[(8)]);
var inst_18508 = (state_18519[(2)]);
var inst_18496 = inst_18499;
var state_18519__$1 = (function (){var statearr_18531 = state_18519;
(statearr_18531[(10)] = inst_18508);

(statearr_18531[(7)] = inst_18496);

return statearr_18531;
})();
var statearr_18532_20031 = state_18519__$1;
(statearr_18532_20031[(2)] = null);

(statearr_18532_20031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (9))){
var inst_18499 = (state_18519[(8)]);
var state_18519__$1 = state_18519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18519__$1,(11),out,inst_18499);
} else {
if((state_val_18520 === (5))){
var inst_18499 = (state_18519[(8)]);
var inst_18496 = (state_18519[(7)]);
var inst_18503 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18499,inst_18496);
var state_18519__$1 = state_18519;
if(inst_18503){
var statearr_18534_20034 = state_18519__$1;
(statearr_18534_20034[(1)] = (8));

} else {
var statearr_18535_20035 = state_18519__$1;
(statearr_18535_20035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (10))){
var inst_18511 = (state_18519[(2)]);
var state_18519__$1 = state_18519;
var statearr_18536_20036 = state_18519__$1;
(statearr_18536_20036[(2)] = inst_18511);

(statearr_18536_20036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18520 === (8))){
var inst_18496 = (state_18519[(7)]);
var tmp18533 = inst_18496;
var inst_18496__$1 = tmp18533;
var state_18519__$1 = (function (){var statearr_18540 = state_18519;
(statearr_18540[(7)] = inst_18496__$1);

return statearr_18540;
})();
var statearr_18541_20039 = state_18519__$1;
(statearr_18541_20039[(2)] = null);

(statearr_18541_20039[(1)] = (2));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_18546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18546[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_18546[(1)] = (1));

return statearr_18546;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_18519){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_18519);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e18547){var ex__13960__auto__ = e18547;
var statearr_18548_20041 = state_18519;
(statearr_18548_20041[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_18519[(4)]))){
var statearr_18549_20042 = state_18519;
(statearr_18549_20042[(1)] = cljs.core.first((state_18519[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20045 = state_18519;
state_18519 = G__20045;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_18519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_18519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_18551 = f__15046__auto__();
(statearr_18551[(6)] = c__15045__auto___19990);

return statearr_18551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18557 = arguments.length;
switch (G__18557) {
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
var c__15045__auto___20057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_18602){
var state_val_18603 = (state_18602[(1)]);
if((state_val_18603 === (7))){
var inst_18598 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18604_20058 = state_18602__$1;
(statearr_18604_20058[(2)] = inst_18598);

(statearr_18604_20058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (1))){
var inst_18559 = (new Array(n));
var inst_18560 = inst_18559;
var inst_18561 = (0);
var state_18602__$1 = (function (){var statearr_18605 = state_18602;
(statearr_18605[(7)] = inst_18561);

(statearr_18605[(8)] = inst_18560);

return statearr_18605;
})();
var statearr_18607_20060 = state_18602__$1;
(statearr_18607_20060[(2)] = null);

(statearr_18607_20060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (4))){
var inst_18564 = (state_18602[(9)]);
var inst_18564__$1 = (state_18602[(2)]);
var inst_18565 = (inst_18564__$1 == null);
var inst_18566 = cljs.core.not(inst_18565);
var state_18602__$1 = (function (){var statearr_18608 = state_18602;
(statearr_18608[(9)] = inst_18564__$1);

return statearr_18608;
})();
if(inst_18566){
var statearr_18609_20064 = state_18602__$1;
(statearr_18609_20064[(1)] = (5));

} else {
var statearr_18610_20065 = state_18602__$1;
(statearr_18610_20065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (15))){
var inst_18592 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18612_20066 = state_18602__$1;
(statearr_18612_20066[(2)] = inst_18592);

(statearr_18612_20066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (13))){
var state_18602__$1 = state_18602;
var statearr_18613_20067 = state_18602__$1;
(statearr_18613_20067[(2)] = null);

(statearr_18613_20067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (6))){
var inst_18561 = (state_18602[(7)]);
var inst_18588 = (inst_18561 > (0));
var state_18602__$1 = state_18602;
if(cljs.core.truth_(inst_18588)){
var statearr_18614_20068 = state_18602__$1;
(statearr_18614_20068[(1)] = (12));

} else {
var statearr_18615_20069 = state_18602__$1;
(statearr_18615_20069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (3))){
var inst_18600 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18602__$1,inst_18600);
} else {
if((state_val_18603 === (12))){
var inst_18560 = (state_18602[(8)]);
var inst_18590 = cljs.core.vec(inst_18560);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18602__$1,(15),out,inst_18590);
} else {
if((state_val_18603 === (2))){
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18602__$1,(4),ch);
} else {
if((state_val_18603 === (11))){
var inst_18576 = (state_18602[(2)]);
var inst_18577 = (new Array(n));
var inst_18560 = inst_18577;
var inst_18561 = (0);
var state_18602__$1 = (function (){var statearr_18619 = state_18602;
(statearr_18619[(7)] = inst_18561);

(statearr_18619[(8)] = inst_18560);

(statearr_18619[(10)] = inst_18576);

return statearr_18619;
})();
var statearr_18620_20070 = state_18602__$1;
(statearr_18620_20070[(2)] = null);

(statearr_18620_20070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (9))){
var inst_18560 = (state_18602[(8)]);
var inst_18574 = cljs.core.vec(inst_18560);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18602__$1,(11),out,inst_18574);
} else {
if((state_val_18603 === (5))){
var inst_18564 = (state_18602[(9)]);
var inst_18561 = (state_18602[(7)]);
var inst_18560 = (state_18602[(8)]);
var inst_18569 = (state_18602[(11)]);
var inst_18568 = (inst_18560[inst_18561] = inst_18564);
var inst_18569__$1 = (inst_18561 + (1));
var inst_18570 = (inst_18569__$1 < n);
var state_18602__$1 = (function (){var statearr_18627 = state_18602;
(statearr_18627[(12)] = inst_18568);

(statearr_18627[(11)] = inst_18569__$1);

return statearr_18627;
})();
if(cljs.core.truth_(inst_18570)){
var statearr_18628_20071 = state_18602__$1;
(statearr_18628_20071[(1)] = (8));

} else {
var statearr_18629_20072 = state_18602__$1;
(statearr_18629_20072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (14))){
var inst_18595 = (state_18602[(2)]);
var inst_18596 = cljs.core.async.close_BANG_(out);
var state_18602__$1 = (function (){var statearr_18631 = state_18602;
(statearr_18631[(13)] = inst_18595);

return statearr_18631;
})();
var statearr_18632_20079 = state_18602__$1;
(statearr_18632_20079[(2)] = inst_18596);

(statearr_18632_20079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (10))){
var inst_18580 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18633_20080 = state_18602__$1;
(statearr_18633_20080[(2)] = inst_18580);

(statearr_18633_20080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18603 === (8))){
var inst_18560 = (state_18602[(8)]);
var inst_18569 = (state_18602[(11)]);
var tmp18630 = inst_18560;
var inst_18560__$1 = tmp18630;
var inst_18561 = inst_18569;
var state_18602__$1 = (function (){var statearr_18636 = state_18602;
(statearr_18636[(7)] = inst_18561);

(statearr_18636[(8)] = inst_18560__$1);

return statearr_18636;
})();
var statearr_18643_20081 = state_18602__$1;
(statearr_18643_20081[(2)] = null);

(statearr_18643_20081[(1)] = (2));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_18644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18644[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_18644[(1)] = (1));

return statearr_18644;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_18602){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_18602);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e18645){var ex__13960__auto__ = e18645;
var statearr_18646_20092 = state_18602;
(statearr_18646_20092[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_18602[(4)]))){
var statearr_18647_20093 = state_18602;
(statearr_18647_20093[(1)] = cljs.core.first((state_18602[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20094 = state_18602;
state_18602 = G__20094;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_18602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_18602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_18658 = f__15046__auto__();
(statearr_18658[(6)] = c__15045__auto___20057);

return statearr_18658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18670 = arguments.length;
switch (G__18670) {
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
var c__15045__auto___20105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_18722){
var state_val_18723 = (state_18722[(1)]);
if((state_val_18723 === (7))){
var inst_18718 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18727_20109 = state_18722__$1;
(statearr_18727_20109[(2)] = inst_18718);

(statearr_18727_20109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (1))){
var inst_18671 = [];
var inst_18672 = inst_18671;
var inst_18673 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18722__$1 = (function (){var statearr_18728 = state_18722;
(statearr_18728[(7)] = inst_18672);

(statearr_18728[(8)] = inst_18673);

return statearr_18728;
})();
var statearr_18729_20110 = state_18722__$1;
(statearr_18729_20110[(2)] = null);

(statearr_18729_20110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (4))){
var inst_18676 = (state_18722[(9)]);
var inst_18676__$1 = (state_18722[(2)]);
var inst_18680 = (inst_18676__$1 == null);
var inst_18681 = cljs.core.not(inst_18680);
var state_18722__$1 = (function (){var statearr_18732 = state_18722;
(statearr_18732[(9)] = inst_18676__$1);

return statearr_18732;
})();
if(inst_18681){
var statearr_18733_20115 = state_18722__$1;
(statearr_18733_20115[(1)] = (5));

} else {
var statearr_18734_20116 = state_18722__$1;
(statearr_18734_20116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (15))){
var inst_18672 = (state_18722[(7)]);
var inst_18710 = cljs.core.vec(inst_18672);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18722__$1,(18),out,inst_18710);
} else {
if((state_val_18723 === (13))){
var inst_18705 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18739_20120 = state_18722__$1;
(statearr_18739_20120[(2)] = inst_18705);

(statearr_18739_20120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (6))){
var inst_18672 = (state_18722[(7)]);
var inst_18707 = inst_18672.length;
var inst_18708 = (inst_18707 > (0));
var state_18722__$1 = state_18722;
if(cljs.core.truth_(inst_18708)){
var statearr_18743_20121 = state_18722__$1;
(statearr_18743_20121[(1)] = (15));

} else {
var statearr_18744_20122 = state_18722__$1;
(statearr_18744_20122[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (17))){
var inst_18715 = (state_18722[(2)]);
var inst_18716 = cljs.core.async.close_BANG_(out);
var state_18722__$1 = (function (){var statearr_18747 = state_18722;
(statearr_18747[(10)] = inst_18715);

return statearr_18747;
})();
var statearr_18753_20126 = state_18722__$1;
(statearr_18753_20126[(2)] = inst_18716);

(statearr_18753_20126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (3))){
var inst_18720 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18722__$1,inst_18720);
} else {
if((state_val_18723 === (12))){
var inst_18672 = (state_18722[(7)]);
var inst_18695 = cljs.core.vec(inst_18672);
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18722__$1,(14),out,inst_18695);
} else {
if((state_val_18723 === (2))){
var state_18722__$1 = state_18722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18722__$1,(4),ch);
} else {
if((state_val_18723 === (11))){
var inst_18683 = (state_18722[(11)]);
var inst_18672 = (state_18722[(7)]);
var inst_18676 = (state_18722[(9)]);
var inst_18692 = inst_18672.push(inst_18676);
var tmp18755 = inst_18672;
var inst_18672__$1 = tmp18755;
var inst_18673 = inst_18683;
var state_18722__$1 = (function (){var statearr_18760 = state_18722;
(statearr_18760[(7)] = inst_18672__$1);

(statearr_18760[(8)] = inst_18673);

(statearr_18760[(12)] = inst_18692);

return statearr_18760;
})();
var statearr_18761_20130 = state_18722__$1;
(statearr_18761_20130[(2)] = null);

(statearr_18761_20130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (9))){
var inst_18673 = (state_18722[(8)]);
var inst_18687 = cljs.core.keyword_identical_QMARK_(inst_18673,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18722__$1 = state_18722;
var statearr_18762_20134 = state_18722__$1;
(statearr_18762_20134[(2)] = inst_18687);

(statearr_18762_20134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (5))){
var inst_18683 = (state_18722[(11)]);
var inst_18684 = (state_18722[(13)]);
var inst_18673 = (state_18722[(8)]);
var inst_18676 = (state_18722[(9)]);
var inst_18683__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18676) : f.call(null,inst_18676));
var inst_18684__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18683__$1,inst_18673);
var state_18722__$1 = (function (){var statearr_18763 = state_18722;
(statearr_18763[(11)] = inst_18683__$1);

(statearr_18763[(13)] = inst_18684__$1);

return statearr_18763;
})();
if(inst_18684__$1){
var statearr_18764_20135 = state_18722__$1;
(statearr_18764_20135[(1)] = (8));

} else {
var statearr_18765_20136 = state_18722__$1;
(statearr_18765_20136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (14))){
var inst_18683 = (state_18722[(11)]);
var inst_18676 = (state_18722[(9)]);
var inst_18697 = (state_18722[(2)]);
var inst_18701 = [];
var inst_18702 = inst_18701.push(inst_18676);
var inst_18672 = inst_18701;
var inst_18673 = inst_18683;
var state_18722__$1 = (function (){var statearr_18766 = state_18722;
(statearr_18766[(14)] = inst_18702);

(statearr_18766[(7)] = inst_18672);

(statearr_18766[(15)] = inst_18697);

(statearr_18766[(8)] = inst_18673);

return statearr_18766;
})();
var statearr_18768_20137 = state_18722__$1;
(statearr_18768_20137[(2)] = null);

(statearr_18768_20137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (16))){
var state_18722__$1 = state_18722;
var statearr_18772_20139 = state_18722__$1;
(statearr_18772_20139[(2)] = null);

(statearr_18772_20139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (10))){
var inst_18689 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
if(cljs.core.truth_(inst_18689)){
var statearr_18773_20140 = state_18722__$1;
(statearr_18773_20140[(1)] = (11));

} else {
var statearr_18774_20141 = state_18722__$1;
(statearr_18774_20141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (18))){
var inst_18712 = (state_18722[(2)]);
var state_18722__$1 = state_18722;
var statearr_18775_20143 = state_18722__$1;
(statearr_18775_20143[(2)] = inst_18712);

(statearr_18775_20143[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18723 === (8))){
var inst_18684 = (state_18722[(13)]);
var state_18722__$1 = state_18722;
var statearr_18777_20144 = state_18722__$1;
(statearr_18777_20144[(2)] = inst_18684);

(statearr_18777_20144[(1)] = (10));


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
var cljs$core$async$state_machine__13957__auto__ = null;
var cljs$core$async$state_machine__13957__auto____0 = (function (){
var statearr_18778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18778[(0)] = cljs$core$async$state_machine__13957__auto__);

(statearr_18778[(1)] = (1));

return statearr_18778;
});
var cljs$core$async$state_machine__13957__auto____1 = (function (state_18722){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_18722);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e18780){var ex__13960__auto__ = e18780;
var statearr_18782_20147 = state_18722;
(statearr_18782_20147[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_18722[(4)]))){
var statearr_18784_20148 = state_18722;
(statearr_18784_20148[(1)] = cljs.core.first((state_18722[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20151 = state_18722;
state_18722 = G__20151;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
cljs$core$async$state_machine__13957__auto__ = function(state_18722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13957__auto____1.call(this,state_18722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13957__auto____0;
cljs$core$async$state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13957__auto____1;
return cljs$core$async$state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_18785 = f__15046__auto__();
(statearr_18785[(6)] = c__15045__auto___20105);

return statearr_18785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
