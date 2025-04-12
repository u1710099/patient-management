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
cljs.core.async.t_cljs$core$async15124 = (function (f,blockable,meta15125){
this.f = f;
this.blockable = blockable;
this.meta15125 = meta15125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15126,meta15125__$1){
var self__ = this;
var _15126__$1 = this;
return (new cljs.core.async.t_cljs$core$async15124(self__.f,self__.blockable,meta15125__$1));
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15126){
var self__ = this;
var _15126__$1 = this;
return self__.meta15125;
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15125","meta15125",514418610,null)], null);
}));

(cljs.core.async.t_cljs$core$async15124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15124");

(cljs.core.async.t_cljs$core$async15124.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15124.
 */
cljs.core.async.__GT_t_cljs$core$async15124 = (function cljs$core$async$__GT_t_cljs$core$async15124(f,blockable,meta15125){
return (new cljs.core.async.t_cljs$core$async15124(f,blockable,meta15125));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15118 = arguments.length;
switch (G__15118) {
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
return (new cljs.core.async.t_cljs$core$async15124(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15155 = arguments.length;
switch (G__15155) {
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
var G__15169 = arguments.length;
switch (G__15169) {
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
var G__15191 = arguments.length;
switch (G__15191) {
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
var val_18804 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18804) : fn1.call(null, val_18804));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18804) : fn1.call(null, val_18804));
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
var G__15208 = arguments.length;
switch (G__15208) {
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
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
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
var n__5593__auto___18816 = n;
var x_18817 = (0);
while(true){
if((x_18817 < n__5593__auto___18816)){
(a[x_18817] = x_18817);

var G__18818 = (x_18817 + (1));
x_18817 = G__18818;
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
cljs.core.async.t_cljs$core$async15219 = (function (flag,meta15220){
this.flag = flag;
this.meta15220 = meta15220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15221,meta15220__$1){
var self__ = this;
var _15221__$1 = this;
return (new cljs.core.async.t_cljs$core$async15219(self__.flag,meta15220__$1));
}));

(cljs.core.async.t_cljs$core$async15219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15221){
var self__ = this;
var _15221__$1 = this;
return self__.meta15220;
}));

(cljs.core.async.t_cljs$core$async15219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15220","meta15220",150389751,null)], null);
}));

(cljs.core.async.t_cljs$core$async15219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15219");

(cljs.core.async.t_cljs$core$async15219.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15219.
 */
cljs.core.async.__GT_t_cljs$core$async15219 = (function cljs$core$async$__GT_t_cljs$core$async15219(flag,meta15220){
return (new cljs.core.async.t_cljs$core$async15219(flag,meta15220));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15219(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15244 = (function (flag,cb,meta15245){
this.flag = flag;
this.cb = cb;
this.meta15245 = meta15245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15246,meta15245__$1){
var self__ = this;
var _15246__$1 = this;
return (new cljs.core.async.t_cljs$core$async15244(self__.flag,self__.cb,meta15245__$1));
}));

(cljs.core.async.t_cljs$core$async15244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15246){
var self__ = this;
var _15246__$1 = this;
return self__.meta15245;
}));

(cljs.core.async.t_cljs$core$async15244.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15245","meta15245",-1743007064,null)], null);
}));

(cljs.core.async.t_cljs$core$async15244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15244");

(cljs.core.async.t_cljs$core$async15244.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15244.
 */
cljs.core.async.__GT_t_cljs$core$async15244 = (function cljs$core$async$__GT_t_cljs$core$async15244(flag,cb,meta15245){
return (new cljs.core.async.t_cljs$core$async15244(flag,cb,meta15245));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15244(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15263_SHARP_){
var G__15269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15263_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15269) : fret.call(null, G__15269));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15264_SHARP_){
var G__15270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15264_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15270) : fret.call(null, G__15270));
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
var G__18822 = (i + (1));
i = G__18822;
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
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
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
var len__5726__auto___18825 = arguments.length;
var i__5727__auto___18826 = (0);
while(true){
if((i__5727__auto___18826 < len__5726__auto___18825)){
args__5732__auto__.push((arguments[i__5727__auto___18826]));

var G__18827 = (i__5727__auto___18826 + (1));
i__5727__auto___18826 = G__18827;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15284){
var map__15285 = p__15284;
var map__15285__$1 = cljs.core.__destructure_map(map__15285);
var opts = map__15285__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15277){
var G__15278 = cljs.core.first(seq15277);
var seq15277__$1 = cljs.core.next(seq15277);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15278,seq15277__$1);
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
var G__15292 = arguments.length;
switch (G__15292) {
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
var c__15005__auto___18841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_15496){
var state_val_15499 = (state_15496[(1)]);
if((state_val_15499 === (7))){
var inst_15488 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15557_18842 = state_15496__$1;
(statearr_15557_18842[(2)] = inst_15488);

(statearr_15557_18842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (1))){
var state_15496__$1 = state_15496;
var statearr_15567_18843 = state_15496__$1;
(statearr_15567_18843[(2)] = null);

(statearr_15567_18843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (4))){
var inst_15374 = (state_15496[(7)]);
var inst_15374__$1 = (state_15496[(2)]);
var inst_15429 = (inst_15374__$1 == null);
var state_15496__$1 = (function (){var statearr_15568 = state_15496;
(statearr_15568[(7)] = inst_15374__$1);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15429)){
var statearr_15570_18844 = state_15496__$1;
(statearr_15570_18844[(1)] = (5));

} else {
var statearr_15572_18845 = state_15496__$1;
(statearr_15572_18845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (13))){
var state_15496__$1 = state_15496;
var statearr_15583_18846 = state_15496__$1;
(statearr_15583_18846[(2)] = null);

(statearr_15583_18846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (6))){
var inst_15374 = (state_15496[(7)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15496__$1,(11),to,inst_15374);
} else {
if((state_val_15499 === (3))){
var inst_15492 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15496__$1,inst_15492);
} else {
if((state_val_15499 === (12))){
var state_15496__$1 = state_15496;
var statearr_15590_18847 = state_15496__$1;
(statearr_15590_18847[(2)] = null);

(statearr_15590_18847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (2))){
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15496__$1,(4),from);
} else {
if((state_val_15499 === (11))){
var inst_15463 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
if(cljs.core.truth_(inst_15463)){
var statearr_15596_18849 = state_15496__$1;
(statearr_15596_18849[(1)] = (12));

} else {
var statearr_15597_18850 = state_15496__$1;
(statearr_15597_18850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (9))){
var state_15496__$1 = state_15496;
var statearr_15598_18852 = state_15496__$1;
(statearr_15598_18852[(2)] = null);

(statearr_15598_18852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (5))){
var state_15496__$1 = state_15496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15600_18853 = state_15496__$1;
(statearr_15600_18853[(1)] = (8));

} else {
var statearr_15601_18854 = state_15496__$1;
(statearr_15601_18854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (14))){
var inst_15486 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15602_18858 = state_15496__$1;
(statearr_15602_18858[(2)] = inst_15486);

(statearr_15602_18858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (10))){
var inst_15460 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15603_18859 = state_15496__$1;
(statearr_15603_18859[(2)] = inst_15460);

(statearr_15603_18859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (8))){
var inst_15457 = cljs.core.async.close_BANG_(to);
var state_15496__$1 = state_15496;
var statearr_15606_18860 = state_15496__$1;
(statearr_15606_18860[(2)] = inst_15457);

(statearr_15606_18860[(1)] = (10));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_15608 = [null,null,null,null,null,null,null,null];
(statearr_15608[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_15608[(1)] = (1));

return statearr_15608;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_15496){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_15496);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e15609){var ex__13885__auto__ = e15609;
var statearr_15611_18863 = state_15496;
(statearr_15611_18863[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_15496[(4)]))){
var statearr_15612_18864 = state_15496;
(statearr_15612_18864[(1)] = cljs.core.first((state_15496[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18865 = state_15496;
state_15496 = G__18865;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_15496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_15496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_15622 = f__15006__auto__();
(statearr_15622[(6)] = c__15005__auto___18841);

return statearr_15622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
var process__$1 = (function (p__15638){
var vec__15639 = p__15638;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15639,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15639,(1),null);
var job = vec__15639;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15005__auto___18868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_15648){
var state_val_15649 = (state_15648[(1)]);
if((state_val_15649 === (1))){
var state_15648__$1 = state_15648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15648__$1,(2),res,v);
} else {
if((state_val_15649 === (2))){
var inst_15644 = (state_15648[(2)]);
var inst_15645 = cljs.core.async.close_BANG_(res);
var state_15648__$1 = (function (){var statearr_15664 = state_15648;
(statearr_15664[(7)] = inst_15644);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15648__$1,inst_15645);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0 = (function (){
var statearr_15670 = [null,null,null,null,null,null,null,null];
(statearr_15670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__);

(statearr_15670[(1)] = (1));

return statearr_15670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1 = (function (state_15648){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_15648);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e15671){var ex__13885__auto__ = e15671;
var statearr_15672_18878 = state_15648;
(statearr_15672_18878[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_15648[(4)]))){
var statearr_15679_18880 = state_15648;
(statearr_15679_18880[(1)] = cljs.core.first((state_15648[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18881 = state_15648;
state_15648 = G__18881;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = function(state_15648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1.call(this,state_15648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_15684 = f__15006__auto__();
(statearr_15684[(6)] = c__15005__auto___18868);

return statearr_15684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15687){
var vec__15688 = p__15687;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15688,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15688,(1),null);
var job = vec__15688;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18885 = n;
var __18886 = (0);
while(true){
if((__18886 < n__5593__auto___18885)){
var G__15695_18888 = type;
var G__15695_18889__$1 = (((G__15695_18888 instanceof cljs.core.Keyword))?G__15695_18888.fqn:null);
switch (G__15695_18889__$1) {
case "compute":
var c__15005__auto___18892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18886,c__15005__auto___18892,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async){
return (function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = ((function (__18886,c__15005__auto___18892,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async){
return (function (state_15712){
var state_val_15713 = (state_15712[(1)]);
if((state_val_15713 === (1))){
var state_15712__$1 = state_15712;
var statearr_15719_18893 = state_15712__$1;
(statearr_15719_18893[(2)] = null);

(statearr_15719_18893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15713 === (2))){
var state_15712__$1 = state_15712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15712__$1,(4),jobs);
} else {
if((state_val_15713 === (3))){
var inst_15710 = (state_15712[(2)]);
var state_15712__$1 = state_15712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15712__$1,inst_15710);
} else {
if((state_val_15713 === (4))){
var inst_15701 = (state_15712[(2)]);
var inst_15703 = process__$1(inst_15701);
var state_15712__$1 = state_15712;
if(cljs.core.truth_(inst_15703)){
var statearr_15741_18900 = state_15712__$1;
(statearr_15741_18900[(1)] = (5));

} else {
var statearr_15746_18901 = state_15712__$1;
(statearr_15746_18901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15713 === (5))){
var state_15712__$1 = state_15712;
var statearr_15750_18902 = state_15712__$1;
(statearr_15750_18902[(2)] = null);

(statearr_15750_18902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15713 === (6))){
var state_15712__$1 = state_15712;
var statearr_15757_18903 = state_15712__$1;
(statearr_15757_18903[(2)] = null);

(statearr_15757_18903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15713 === (7))){
var inst_15708 = (state_15712[(2)]);
var state_15712__$1 = state_15712;
var statearr_15763_18905 = state_15712__$1;
(statearr_15763_18905[(2)] = inst_15708);

(statearr_15763_18905[(1)] = (3));


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
});})(__18886,c__15005__auto___18892,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async))
;
return ((function (__18886,switch__13881__auto__,c__15005__auto___18892,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0 = (function (){
var statearr_15775 = [null,null,null,null,null,null,null];
(statearr_15775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__);

(statearr_15775[(1)] = (1));

return statearr_15775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1 = (function (state_15712){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_15712);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e15777){var ex__13885__auto__ = e15777;
var statearr_15778_18913 = state_15712;
(statearr_15778_18913[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_15712[(4)]))){
var statearr_15789_18914 = state_15712;
(statearr_15789_18914[(1)] = cljs.core.first((state_15712[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18915 = state_15712;
state_15712 = G__18915;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = function(state_15712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1.call(this,state_15712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__;
})()
;})(__18886,switch__13881__auto__,c__15005__auto___18892,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async))
})();
var state__15007__auto__ = (function (){var statearr_15811 = f__15006__auto__();
(statearr_15811[(6)] = c__15005__auto___18892);

return statearr_15811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
});})(__18886,c__15005__auto___18892,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async))
);


break;
case "async":
var c__15005__auto___18917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18886,c__15005__auto___18917,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async){
return (function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = ((function (__18886,c__15005__auto___18917,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async){
return (function (state_15850){
var state_val_15851 = (state_15850[(1)]);
if((state_val_15851 === (1))){
var state_15850__$1 = state_15850;
var statearr_15879_18919 = state_15850__$1;
(statearr_15879_18919[(2)] = null);

(statearr_15879_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15851 === (2))){
var state_15850__$1 = state_15850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15850__$1,(4),jobs);
} else {
if((state_val_15851 === (3))){
var inst_15847 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15850__$1,inst_15847);
} else {
if((state_val_15851 === (4))){
var inst_15834 = (state_15850[(2)]);
var inst_15835 = async(inst_15834);
var state_15850__$1 = state_15850;
if(cljs.core.truth_(inst_15835)){
var statearr_15898_18921 = state_15850__$1;
(statearr_15898_18921[(1)] = (5));

} else {
var statearr_15900_18922 = state_15850__$1;
(statearr_15900_18922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15851 === (5))){
var state_15850__$1 = state_15850;
var statearr_15901_18927 = state_15850__$1;
(statearr_15901_18927[(2)] = null);

(statearr_15901_18927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15851 === (6))){
var state_15850__$1 = state_15850;
var statearr_15906_18932 = state_15850__$1;
(statearr_15906_18932[(2)] = null);

(statearr_15906_18932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15851 === (7))){
var inst_15841 = (state_15850[(2)]);
var state_15850__$1 = state_15850;
var statearr_15907_18933 = state_15850__$1;
(statearr_15907_18933[(2)] = inst_15841);

(statearr_15907_18933[(1)] = (3));


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
});})(__18886,c__15005__auto___18917,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async))
;
return ((function (__18886,switch__13881__auto__,c__15005__auto___18917,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0 = (function (){
var statearr_15915 = [null,null,null,null,null,null,null];
(statearr_15915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__);

(statearr_15915[(1)] = (1));

return statearr_15915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1 = (function (state_15850){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_15850);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e15919){var ex__13885__auto__ = e15919;
var statearr_15920_18936 = state_15850;
(statearr_15920_18936[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_15850[(4)]))){
var statearr_15922_18937 = state_15850;
(statearr_15922_18937[(1)] = cljs.core.first((state_15850[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18946 = state_15850;
state_15850 = G__18946;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = function(state_15850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1.call(this,state_15850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__;
})()
;})(__18886,switch__13881__auto__,c__15005__auto___18917,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async))
})();
var state__15007__auto__ = (function (){var statearr_15931 = f__15006__auto__();
(statearr_15931[(6)] = c__15005__auto___18917);

return statearr_15931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
});})(__18886,c__15005__auto___18917,G__15695_18888,G__15695_18889__$1,n__5593__auto___18885,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15695_18889__$1)].join('')));

}

var G__18951 = (__18886 + (1));
__18886 = G__18951;
continue;
} else {
}
break;
}

var c__15005__auto___18952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_15970){
var state_val_15972 = (state_15970[(1)]);
if((state_val_15972 === (7))){
var inst_15964 = (state_15970[(2)]);
var state_15970__$1 = state_15970;
var statearr_15976_18958 = state_15970__$1;
(statearr_15976_18958[(2)] = inst_15964);

(statearr_15976_18958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (1))){
var state_15970__$1 = state_15970;
var statearr_15979_18959 = state_15970__$1;
(statearr_15979_18959[(2)] = null);

(statearr_15979_18959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (4))){
var inst_15945 = (state_15970[(7)]);
var inst_15945__$1 = (state_15970[(2)]);
var inst_15946 = (inst_15945__$1 == null);
var state_15970__$1 = (function (){var statearr_15981 = state_15970;
(statearr_15981[(7)] = inst_15945__$1);

return statearr_15981;
})();
if(cljs.core.truth_(inst_15946)){
var statearr_15982_18963 = state_15970__$1;
(statearr_15982_18963[(1)] = (5));

} else {
var statearr_15987_18964 = state_15970__$1;
(statearr_15987_18964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (6))){
var inst_15951 = (state_15970[(8)]);
var inst_15945 = (state_15970[(7)]);
var inst_15951__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15956 = [inst_15945,inst_15951__$1];
var inst_15957 = (new cljs.core.PersistentVector(null,2,(5),inst_15954,inst_15956,null));
var state_15970__$1 = (function (){var statearr_15990 = state_15970;
(statearr_15990[(8)] = inst_15951__$1);

return statearr_15990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15970__$1,(8),jobs,inst_15957);
} else {
if((state_val_15972 === (3))){
var inst_15966 = (state_15970[(2)]);
var state_15970__$1 = state_15970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15970__$1,inst_15966);
} else {
if((state_val_15972 === (2))){
var state_15970__$1 = state_15970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15970__$1,(4),from);
} else {
if((state_val_15972 === (9))){
var inst_15961 = (state_15970[(2)]);
var state_15970__$1 = (function (){var statearr_16000 = state_15970;
(statearr_16000[(9)] = inst_15961);

return statearr_16000;
})();
var statearr_16003_18975 = state_15970__$1;
(statearr_16003_18975[(2)] = null);

(statearr_16003_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (5))){
var inst_15948 = cljs.core.async.close_BANG_(jobs);
var state_15970__$1 = state_15970;
var statearr_16006_18976 = state_15970__$1;
(statearr_16006_18976[(2)] = inst_15948);

(statearr_16006_18976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (8))){
var inst_15951 = (state_15970[(8)]);
var inst_15959 = (state_15970[(2)]);
var state_15970__$1 = (function (){var statearr_16010 = state_15970;
(statearr_16010[(10)] = inst_15959);

return statearr_16010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15970__$1,(9),results,inst_15951);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0 = (function (){
var statearr_16012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__);

(statearr_16012[(1)] = (1));

return statearr_16012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1 = (function (state_15970){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_15970);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e16016){var ex__13885__auto__ = e16016;
var statearr_16018_18977 = state_15970;
(statearr_16018_18977[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_15970[(4)]))){
var statearr_16019_18978 = state_15970;
(statearr_16019_18978[(1)] = cljs.core.first((state_15970[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18985 = state_15970;
state_15970 = G__18985;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = function(state_15970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1.call(this,state_15970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_16026 = f__15006__auto__();
(statearr_16026[(6)] = c__15005__auto___18952);

return statearr_16026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));


var c__15005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_16068){
var state_val_16073 = (state_16068[(1)]);
if((state_val_16073 === (7))){
var inst_16064 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16085_18986 = state_16068__$1;
(statearr_16085_18986[(2)] = inst_16064);

(statearr_16085_18986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (20))){
var state_16068__$1 = state_16068;
var statearr_16087_18988 = state_16068__$1;
(statearr_16087_18988[(2)] = null);

(statearr_16087_18988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (1))){
var state_16068__$1 = state_16068;
var statearr_16089_18990 = state_16068__$1;
(statearr_16089_18990[(2)] = null);

(statearr_16089_18990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (4))){
var inst_16032 = (state_16068[(7)]);
var inst_16032__$1 = (state_16068[(2)]);
var inst_16033 = (inst_16032__$1 == null);
var state_16068__$1 = (function (){var statearr_16091 = state_16068;
(statearr_16091[(7)] = inst_16032__$1);

return statearr_16091;
})();
if(cljs.core.truth_(inst_16033)){
var statearr_16094_18992 = state_16068__$1;
(statearr_16094_18992[(1)] = (5));

} else {
var statearr_16098_18993 = state_16068__$1;
(statearr_16098_18993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (15))){
var inst_16046 = (state_16068[(8)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16068__$1,(18),to,inst_16046);
} else {
if((state_val_16073 === (21))){
var inst_16059 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16100_18994 = state_16068__$1;
(statearr_16100_18994[(2)] = inst_16059);

(statearr_16100_18994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (13))){
var inst_16061 = (state_16068[(2)]);
var state_16068__$1 = (function (){var statearr_16103 = state_16068;
(statearr_16103[(9)] = inst_16061);

return statearr_16103;
})();
var statearr_16105_18996 = state_16068__$1;
(statearr_16105_18996[(2)] = null);

(statearr_16105_18996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (6))){
var inst_16032 = (state_16068[(7)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16068__$1,(11),inst_16032);
} else {
if((state_val_16073 === (17))){
var inst_16054 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
if(cljs.core.truth_(inst_16054)){
var statearr_16108_19002 = state_16068__$1;
(statearr_16108_19002[(1)] = (19));

} else {
var statearr_16109_19003 = state_16068__$1;
(statearr_16109_19003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (3))){
var inst_16066 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16068__$1,inst_16066);
} else {
if((state_val_16073 === (12))){
var inst_16042 = (state_16068[(10)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16068__$1,(14),inst_16042);
} else {
if((state_val_16073 === (2))){
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16068__$1,(4),results);
} else {
if((state_val_16073 === (19))){
var state_16068__$1 = state_16068;
var statearr_16113_19005 = state_16068__$1;
(statearr_16113_19005[(2)] = null);

(statearr_16113_19005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (11))){
var inst_16042 = (state_16068[(2)]);
var state_16068__$1 = (function (){var statearr_16116 = state_16068;
(statearr_16116[(10)] = inst_16042);

return statearr_16116;
})();
var statearr_16117_19006 = state_16068__$1;
(statearr_16117_19006[(2)] = null);

(statearr_16117_19006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (9))){
var state_16068__$1 = state_16068;
var statearr_16120_19007 = state_16068__$1;
(statearr_16120_19007[(2)] = null);

(statearr_16120_19007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (5))){
var state_16068__$1 = state_16068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16123_19008 = state_16068__$1;
(statearr_16123_19008[(1)] = (8));

} else {
var statearr_16124_19009 = state_16068__$1;
(statearr_16124_19009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (14))){
var inst_16048 = (state_16068[(11)]);
var inst_16046 = (state_16068[(8)]);
var inst_16046__$1 = (state_16068[(2)]);
var inst_16047 = (inst_16046__$1 == null);
var inst_16048__$1 = cljs.core.not(inst_16047);
var state_16068__$1 = (function (){var statearr_16128 = state_16068;
(statearr_16128[(11)] = inst_16048__$1);

(statearr_16128[(8)] = inst_16046__$1);

return statearr_16128;
})();
if(inst_16048__$1){
var statearr_16129_19015 = state_16068__$1;
(statearr_16129_19015[(1)] = (15));

} else {
var statearr_16130_19016 = state_16068__$1;
(statearr_16130_19016[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (16))){
var inst_16048 = (state_16068[(11)]);
var state_16068__$1 = state_16068;
var statearr_16133_19022 = state_16068__$1;
(statearr_16133_19022[(2)] = inst_16048);

(statearr_16133_19022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (10))){
var inst_16039 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16137_19027 = state_16068__$1;
(statearr_16137_19027[(2)] = inst_16039);

(statearr_16137_19027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (18))){
var inst_16051 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16139_19037 = state_16068__$1;
(statearr_16139_19037[(2)] = inst_16051);

(statearr_16139_19037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16073 === (8))){
var inst_16036 = cljs.core.async.close_BANG_(to);
var state_16068__$1 = state_16068;
var statearr_16144_19038 = state_16068__$1;
(statearr_16144_19038[(2)] = inst_16036);

(statearr_16144_19038[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0 = (function (){
var statearr_16148 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__);

(statearr_16148[(1)] = (1));

return statearr_16148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1 = (function (state_16068){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_16068);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e16153){var ex__13885__auto__ = e16153;
var statearr_16154_19039 = state_16068;
(statearr_16154_19039[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_16068[(4)]))){
var statearr_16155_19044 = state_16068;
(statearr_16155_19044[(1)] = cljs.core.first((state_16068[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19048 = state_16068;
state_16068 = G__19048;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_16162 = f__15006__auto__();
(statearr_16162[(6)] = c__15005__auto__);

return statearr_16162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));

return c__15005__auto__;
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
var G__16169 = arguments.length;
switch (G__16169) {
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
var G__16182 = arguments.length;
switch (G__16182) {
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
var G__16202 = arguments.length;
switch (G__16202) {
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
var c__15005__auto___19105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_16244){
var state_val_16245 = (state_16244[(1)]);
if((state_val_16245 === (7))){
var inst_16237 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
var statearr_16251_19106 = state_16244__$1;
(statearr_16251_19106[(2)] = inst_16237);

(statearr_16251_19106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (1))){
var state_16244__$1 = state_16244;
var statearr_16252_19111 = state_16244__$1;
(statearr_16252_19111[(2)] = null);

(statearr_16252_19111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (4))){
var inst_16215 = (state_16244[(7)]);
var inst_16215__$1 = (state_16244[(2)]);
var inst_16216 = (inst_16215__$1 == null);
var state_16244__$1 = (function (){var statearr_16254 = state_16244;
(statearr_16254[(7)] = inst_16215__$1);

return statearr_16254;
})();
if(cljs.core.truth_(inst_16216)){
var statearr_16255_19116 = state_16244__$1;
(statearr_16255_19116[(1)] = (5));

} else {
var statearr_16258_19118 = state_16244__$1;
(statearr_16258_19118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (13))){
var state_16244__$1 = state_16244;
var statearr_16260_19119 = state_16244__$1;
(statearr_16260_19119[(2)] = null);

(statearr_16260_19119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (6))){
var inst_16215 = (state_16244[(7)]);
var inst_16222 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16215) : p.call(null, inst_16215));
var state_16244__$1 = state_16244;
if(cljs.core.truth_(inst_16222)){
var statearr_16263_19127 = state_16244__$1;
(statearr_16263_19127[(1)] = (9));

} else {
var statearr_16266_19129 = state_16244__$1;
(statearr_16266_19129[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (3))){
var inst_16240 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16244__$1,inst_16240);
} else {
if((state_val_16245 === (12))){
var state_16244__$1 = state_16244;
var statearr_16269_19139 = state_16244__$1;
(statearr_16269_19139[(2)] = null);

(statearr_16269_19139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (2))){
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16244__$1,(4),ch);
} else {
if((state_val_16245 === (11))){
var inst_16215 = (state_16244[(7)]);
var inst_16228 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16244__$1,(8),inst_16228,inst_16215);
} else {
if((state_val_16245 === (9))){
var state_16244__$1 = state_16244;
var statearr_16275_19141 = state_16244__$1;
(statearr_16275_19141[(2)] = tc);

(statearr_16275_19141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (5))){
var inst_16218 = cljs.core.async.close_BANG_(tc);
var inst_16219 = cljs.core.async.close_BANG_(fc);
var state_16244__$1 = (function (){var statearr_16279 = state_16244;
(statearr_16279[(8)] = inst_16218);

return statearr_16279;
})();
var statearr_16281_19151 = state_16244__$1;
(statearr_16281_19151[(2)] = inst_16219);

(statearr_16281_19151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (14))){
var inst_16235 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
var statearr_16288_19152 = state_16244__$1;
(statearr_16288_19152[(2)] = inst_16235);

(statearr_16288_19152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (10))){
var state_16244__$1 = state_16244;
var statearr_16291_19153 = state_16244__$1;
(statearr_16291_19153[(2)] = fc);

(statearr_16291_19153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16245 === (8))){
var inst_16230 = (state_16244[(2)]);
var state_16244__$1 = state_16244;
if(cljs.core.truth_(inst_16230)){
var statearr_16292_19154 = state_16244__$1;
(statearr_16292_19154[(1)] = (12));

} else {
var statearr_16294_19155 = state_16244__$1;
(statearr_16294_19155[(1)] = (13));

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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_16303 = [null,null,null,null,null,null,null,null,null];
(statearr_16303[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_16303[(1)] = (1));

return statearr_16303;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_16244){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_16244);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e16304){var ex__13885__auto__ = e16304;
var statearr_16306_19164 = state_16244;
(statearr_16306_19164[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_16244[(4)]))){
var statearr_16311_19165 = state_16244;
(statearr_16311_19165[(1)] = cljs.core.first((state_16244[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19167 = state_16244;
state_16244 = G__19167;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_16244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_16244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_16316 = f__15006__auto__();
(statearr_16316[(6)] = c__15005__auto___19105);

return statearr_16316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
var c__15005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_16351){
var state_val_16353 = (state_16351[(1)]);
if((state_val_16353 === (7))){
var inst_16346 = (state_16351[(2)]);
var state_16351__$1 = state_16351;
var statearr_16354_19168 = state_16351__$1;
(statearr_16354_19168[(2)] = inst_16346);

(statearr_16354_19168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (1))){
var inst_16321 = init;
var inst_16322 = inst_16321;
var state_16351__$1 = (function (){var statearr_16355 = state_16351;
(statearr_16355[(7)] = inst_16322);

return statearr_16355;
})();
var statearr_16356_19172 = state_16351__$1;
(statearr_16356_19172[(2)] = null);

(statearr_16356_19172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (4))){
var inst_16329 = (state_16351[(8)]);
var inst_16329__$1 = (state_16351[(2)]);
var inst_16330 = (inst_16329__$1 == null);
var state_16351__$1 = (function (){var statearr_16360 = state_16351;
(statearr_16360[(8)] = inst_16329__$1);

return statearr_16360;
})();
if(cljs.core.truth_(inst_16330)){
var statearr_16363_19176 = state_16351__$1;
(statearr_16363_19176[(1)] = (5));

} else {
var statearr_16364_19177 = state_16351__$1;
(statearr_16364_19177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (6))){
var inst_16333 = (state_16351[(9)]);
var inst_16329 = (state_16351[(8)]);
var inst_16322 = (state_16351[(7)]);
var inst_16333__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16322,inst_16329) : f.call(null, inst_16322,inst_16329));
var inst_16338 = cljs.core.reduced_QMARK_(inst_16333__$1);
var state_16351__$1 = (function (){var statearr_16368 = state_16351;
(statearr_16368[(9)] = inst_16333__$1);

return statearr_16368;
})();
if(inst_16338){
var statearr_16369_19180 = state_16351__$1;
(statearr_16369_19180[(1)] = (8));

} else {
var statearr_16371_19182 = state_16351__$1;
(statearr_16371_19182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (3))){
var inst_16348 = (state_16351[(2)]);
var state_16351__$1 = state_16351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16351__$1,inst_16348);
} else {
if((state_val_16353 === (2))){
var state_16351__$1 = state_16351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16351__$1,(4),ch);
} else {
if((state_val_16353 === (9))){
var inst_16333 = (state_16351[(9)]);
var inst_16322 = inst_16333;
var state_16351__$1 = (function (){var statearr_16380 = state_16351;
(statearr_16380[(7)] = inst_16322);

return statearr_16380;
})();
var statearr_16382_19184 = state_16351__$1;
(statearr_16382_19184[(2)] = null);

(statearr_16382_19184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (5))){
var inst_16322 = (state_16351[(7)]);
var state_16351__$1 = state_16351;
var statearr_16383_19186 = state_16351__$1;
(statearr_16383_19186[(2)] = inst_16322);

(statearr_16383_19186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (10))){
var inst_16344 = (state_16351[(2)]);
var state_16351__$1 = state_16351;
var statearr_16384_19187 = state_16351__$1;
(statearr_16384_19187[(2)] = inst_16344);

(statearr_16384_19187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16353 === (8))){
var inst_16333 = (state_16351[(9)]);
var inst_16340 = cljs.core.deref(inst_16333);
var state_16351__$1 = state_16351;
var statearr_16386_19192 = state_16351__$1;
(statearr_16386_19192[(2)] = inst_16340);

(statearr_16386_19192[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13882__auto____0 = (function (){
var statearr_16387 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16387[(0)] = cljs$core$async$reduce_$_state_machine__13882__auto__);

(statearr_16387[(1)] = (1));

return statearr_16387;
});
var cljs$core$async$reduce_$_state_machine__13882__auto____1 = (function (state_16351){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_16351);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e16388){var ex__13885__auto__ = e16388;
var statearr_16389_19193 = state_16351;
(statearr_16389_19193[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_16351[(4)]))){
var statearr_16390_19194 = state_16351;
(statearr_16390_19194[(1)] = cljs.core.first((state_16351[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19195 = state_16351;
state_16351 = G__19195;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13882__auto__ = function(state_16351){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13882__auto____1.call(this,state_16351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13882__auto____0;
cljs$core$async$reduce_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13882__auto____1;
return cljs$core$async$reduce_$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_16398 = f__15006__auto__();
(statearr_16398[(6)] = c__15005__auto__);

return statearr_16398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));

return c__15005__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_16407){
var state_val_16408 = (state_16407[(1)]);
if((state_val_16408 === (1))){
var inst_16401 = cljs.core.async.reduce(f__$1,init,ch);
var state_16407__$1 = state_16407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16407__$1,(2),inst_16401);
} else {
if((state_val_16408 === (2))){
var inst_16403 = (state_16407[(2)]);
var inst_16404 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16403) : f__$1.call(null, inst_16403));
var state_16407__$1 = state_16407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16407__$1,inst_16404);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13882__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13882__auto____0 = (function (){
var statearr_16416 = [null,null,null,null,null,null,null];
(statearr_16416[(0)] = cljs$core$async$transduce_$_state_machine__13882__auto__);

(statearr_16416[(1)] = (1));

return statearr_16416;
});
var cljs$core$async$transduce_$_state_machine__13882__auto____1 = (function (state_16407){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_16407);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e16418){var ex__13885__auto__ = e16418;
var statearr_16419_19214 = state_16407;
(statearr_16419_19214[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_16407[(4)]))){
var statearr_16420_19215 = state_16407;
(statearr_16420_19215[(1)] = cljs.core.first((state_16407[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19216 = state_16407;
state_16407 = G__19216;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13882__auto__ = function(state_16407){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13882__auto____1.call(this,state_16407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13882__auto____0;
cljs$core$async$transduce_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13882__auto____1;
return cljs$core$async$transduce_$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_16427 = f__15006__auto__();
(statearr_16427[(6)] = c__15005__auto__);

return statearr_16427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));

return c__15005__auto__;
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
var G__16433 = arguments.length;
switch (G__16433) {
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
var c__15005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_16469){
var state_val_16470 = (state_16469[(1)]);
if((state_val_16470 === (7))){
var inst_16447 = (state_16469[(2)]);
var state_16469__$1 = state_16469;
var statearr_16475_19223 = state_16469__$1;
(statearr_16475_19223[(2)] = inst_16447);

(statearr_16475_19223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (1))){
var inst_16437 = cljs.core.seq(coll);
var inst_16438 = inst_16437;
var state_16469__$1 = (function (){var statearr_16478 = state_16469;
(statearr_16478[(7)] = inst_16438);

return statearr_16478;
})();
var statearr_16479_19224 = state_16469__$1;
(statearr_16479_19224[(2)] = null);

(statearr_16479_19224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (4))){
var inst_16438 = (state_16469[(7)]);
var inst_16445 = cljs.core.first(inst_16438);
var state_16469__$1 = state_16469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16469__$1,(7),ch,inst_16445);
} else {
if((state_val_16470 === (13))){
var inst_16462 = (state_16469[(2)]);
var state_16469__$1 = state_16469;
var statearr_16484_19228 = state_16469__$1;
(statearr_16484_19228[(2)] = inst_16462);

(statearr_16484_19228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (6))){
var inst_16453 = (state_16469[(2)]);
var state_16469__$1 = state_16469;
if(cljs.core.truth_(inst_16453)){
var statearr_16487_19229 = state_16469__$1;
(statearr_16487_19229[(1)] = (8));

} else {
var statearr_16488_19230 = state_16469__$1;
(statearr_16488_19230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (3))){
var inst_16466 = (state_16469[(2)]);
var state_16469__$1 = state_16469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16469__$1,inst_16466);
} else {
if((state_val_16470 === (12))){
var state_16469__$1 = state_16469;
var statearr_16489_19236 = state_16469__$1;
(statearr_16489_19236[(2)] = null);

(statearr_16489_19236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (2))){
var inst_16438 = (state_16469[(7)]);
var state_16469__$1 = state_16469;
if(cljs.core.truth_(inst_16438)){
var statearr_16494_19237 = state_16469__$1;
(statearr_16494_19237[(1)] = (4));

} else {
var statearr_16495_19242 = state_16469__$1;
(statearr_16495_19242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (11))){
var inst_16459 = cljs.core.async.close_BANG_(ch);
var state_16469__$1 = state_16469;
var statearr_16496_19244 = state_16469__$1;
(statearr_16496_19244[(2)] = inst_16459);

(statearr_16496_19244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (9))){
var state_16469__$1 = state_16469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16497_19249 = state_16469__$1;
(statearr_16497_19249[(1)] = (11));

} else {
var statearr_16499_19253 = state_16469__$1;
(statearr_16499_19253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (5))){
var inst_16438 = (state_16469[(7)]);
var state_16469__$1 = state_16469;
var statearr_16502_19258 = state_16469__$1;
(statearr_16502_19258[(2)] = inst_16438);

(statearr_16502_19258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (10))){
var inst_16464 = (state_16469[(2)]);
var state_16469__$1 = state_16469;
var statearr_16503_19259 = state_16469__$1;
(statearr_16503_19259[(2)] = inst_16464);

(statearr_16503_19259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16470 === (8))){
var inst_16438 = (state_16469[(7)]);
var inst_16455 = cljs.core.next(inst_16438);
var inst_16438__$1 = inst_16455;
var state_16469__$1 = (function (){var statearr_16504 = state_16469;
(statearr_16504[(7)] = inst_16438__$1);

return statearr_16504;
})();
var statearr_16505_19264 = state_16469__$1;
(statearr_16505_19264[(2)] = null);

(statearr_16505_19264[(1)] = (2));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_16513 = [null,null,null,null,null,null,null,null];
(statearr_16513[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_16513[(1)] = (1));

return statearr_16513;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_16469){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_16469);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e16516){var ex__13885__auto__ = e16516;
var statearr_16517_19270 = state_16469;
(statearr_16517_19270[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_16469[(4)]))){
var statearr_16518_19271 = state_16469;
(statearr_16518_19271[(1)] = cljs.core.first((state_16469[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19274 = state_16469;
state_16469 = G__19274;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_16469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_16469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_16519 = f__15006__auto__();
(statearr_16519[(6)] = c__15005__auto__);

return statearr_16519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));

return c__15005__auto__;
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
var G__16531 = arguments.length;
switch (G__16531) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19288 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19288(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19298 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19298(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19311 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19311(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19323 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19323(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16570 = (function (ch,cs,meta16571){
this.ch = ch;
this.cs = cs;
this.meta16571 = meta16571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16572,meta16571__$1){
var self__ = this;
var _16572__$1 = this;
return (new cljs.core.async.t_cljs$core$async16570(self__.ch,self__.cs,meta16571__$1));
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16572){
var self__ = this;
var _16572__$1 = this;
return self__.meta16571;
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16571","meta16571",473838896,null)], null);
}));

(cljs.core.async.t_cljs$core$async16570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16570");

(cljs.core.async.t_cljs$core$async16570.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16570.
 */
cljs.core.async.__GT_t_cljs$core$async16570 = (function cljs$core$async$__GT_t_cljs$core$async16570(ch,cs,meta16571){
return (new cljs.core.async.t_cljs$core$async16570(ch,cs,meta16571));
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
var m = (new cljs.core.async.t_cljs$core$async16570(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15005__auto___19350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_16771){
var state_val_16775 = (state_16771[(1)]);
if((state_val_16775 === (7))){
var inst_16764 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16779_19355 = state_16771__$1;
(statearr_16779_19355[(2)] = inst_16764);

(statearr_16779_19355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (20))){
var inst_16651 = (state_16771[(7)]);
var inst_16666 = cljs.core.first(inst_16651);
var inst_16667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16666,(0),null);
var inst_16668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16666,(1),null);
var state_16771__$1 = (function (){var statearr_16783 = state_16771;
(statearr_16783[(8)] = inst_16667);

return statearr_16783;
})();
if(cljs.core.truth_(inst_16668)){
var statearr_16784_19359 = state_16771__$1;
(statearr_16784_19359[(1)] = (22));

} else {
var statearr_16785_19360 = state_16771__$1;
(statearr_16785_19360[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (27))){
var inst_16619 = (state_16771[(9)]);
var inst_16707 = (state_16771[(10)]);
var inst_16700 = (state_16771[(11)]);
var inst_16698 = (state_16771[(12)]);
var inst_16707__$1 = cljs.core._nth(inst_16698,inst_16700);
var inst_16708 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16707__$1,inst_16619,done);
var state_16771__$1 = (function (){var statearr_16792 = state_16771;
(statearr_16792[(10)] = inst_16707__$1);

return statearr_16792;
})();
if(cljs.core.truth_(inst_16708)){
var statearr_16798_19371 = state_16771__$1;
(statearr_16798_19371[(1)] = (30));

} else {
var statearr_16799_19372 = state_16771__$1;
(statearr_16799_19372[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (1))){
var state_16771__$1 = state_16771;
var statearr_16806_19373 = state_16771__$1;
(statearr_16806_19373[(2)] = null);

(statearr_16806_19373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (24))){
var inst_16651 = (state_16771[(7)]);
var inst_16673 = (state_16771[(2)]);
var inst_16674 = cljs.core.next(inst_16651);
var inst_16628 = inst_16674;
var inst_16629 = null;
var inst_16630 = (0);
var inst_16631 = (0);
var state_16771__$1 = (function (){var statearr_16810 = state_16771;
(statearr_16810[(13)] = inst_16628);

(statearr_16810[(14)] = inst_16629);

(statearr_16810[(15)] = inst_16673);

(statearr_16810[(16)] = inst_16631);

(statearr_16810[(17)] = inst_16630);

return statearr_16810;
})();
var statearr_16811_19385 = state_16771__$1;
(statearr_16811_19385[(2)] = null);

(statearr_16811_19385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (39))){
var state_16771__$1 = state_16771;
var statearr_16819_19392 = state_16771__$1;
(statearr_16819_19392[(2)] = null);

(statearr_16819_19392[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (4))){
var inst_16619 = (state_16771[(9)]);
var inst_16619__$1 = (state_16771[(2)]);
var inst_16620 = (inst_16619__$1 == null);
var state_16771__$1 = (function (){var statearr_16821 = state_16771;
(statearr_16821[(9)] = inst_16619__$1);

return statearr_16821;
})();
if(cljs.core.truth_(inst_16620)){
var statearr_16822_19397 = state_16771__$1;
(statearr_16822_19397[(1)] = (5));

} else {
var statearr_16823_19398 = state_16771__$1;
(statearr_16823_19398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (15))){
var inst_16628 = (state_16771[(13)]);
var inst_16629 = (state_16771[(14)]);
var inst_16631 = (state_16771[(16)]);
var inst_16630 = (state_16771[(17)]);
var inst_16646 = (state_16771[(2)]);
var inst_16647 = (inst_16631 + (1));
var tmp16813 = inst_16628;
var tmp16814 = inst_16629;
var tmp16815 = inst_16630;
var inst_16628__$1 = tmp16813;
var inst_16629__$1 = tmp16814;
var inst_16630__$1 = tmp16815;
var inst_16631__$1 = inst_16647;
var state_16771__$1 = (function (){var statearr_16828 = state_16771;
(statearr_16828[(13)] = inst_16628__$1);

(statearr_16828[(14)] = inst_16629__$1);

(statearr_16828[(18)] = inst_16646);

(statearr_16828[(16)] = inst_16631__$1);

(statearr_16828[(17)] = inst_16630__$1);

return statearr_16828;
})();
var statearr_16831_19400 = state_16771__$1;
(statearr_16831_19400[(2)] = null);

(statearr_16831_19400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (21))){
var inst_16677 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16837_19403 = state_16771__$1;
(statearr_16837_19403[(2)] = inst_16677);

(statearr_16837_19403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (31))){
var inst_16707 = (state_16771[(10)]);
var inst_16711 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16707);
var state_16771__$1 = state_16771;
var statearr_16840_19415 = state_16771__$1;
(statearr_16840_19415[(2)] = inst_16711);

(statearr_16840_19415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (32))){
var inst_16697 = (state_16771[(19)]);
var inst_16700 = (state_16771[(11)]);
var inst_16698 = (state_16771[(12)]);
var inst_16699 = (state_16771[(20)]);
var inst_16713 = (state_16771[(2)]);
var inst_16714 = (inst_16700 + (1));
var tmp16833 = inst_16697;
var tmp16834 = inst_16698;
var tmp16835 = inst_16699;
var inst_16697__$1 = tmp16833;
var inst_16698__$1 = tmp16834;
var inst_16699__$1 = tmp16835;
var inst_16700__$1 = inst_16714;
var state_16771__$1 = (function (){var statearr_16844 = state_16771;
(statearr_16844[(19)] = inst_16697__$1);

(statearr_16844[(11)] = inst_16700__$1);

(statearr_16844[(21)] = inst_16713);

(statearr_16844[(12)] = inst_16698__$1);

(statearr_16844[(20)] = inst_16699__$1);

return statearr_16844;
})();
var statearr_16849_19422 = state_16771__$1;
(statearr_16849_19422[(2)] = null);

(statearr_16849_19422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (40))){
var inst_16732 = (state_16771[(22)]);
var inst_16736 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16732);
var state_16771__$1 = state_16771;
var statearr_16854_19423 = state_16771__$1;
(statearr_16854_19423[(2)] = inst_16736);

(statearr_16854_19423[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (33))){
var inst_16717 = (state_16771[(23)]);
var inst_16719 = cljs.core.chunked_seq_QMARK_(inst_16717);
var state_16771__$1 = state_16771;
if(inst_16719){
var statearr_16856_19424 = state_16771__$1;
(statearr_16856_19424[(1)] = (36));

} else {
var statearr_16861_19425 = state_16771__$1;
(statearr_16861_19425[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (13))){
var inst_16640 = (state_16771[(24)]);
var inst_16643 = cljs.core.async.close_BANG_(inst_16640);
var state_16771__$1 = state_16771;
var statearr_16872_19427 = state_16771__$1;
(statearr_16872_19427[(2)] = inst_16643);

(statearr_16872_19427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (22))){
var inst_16667 = (state_16771[(8)]);
var inst_16670 = cljs.core.async.close_BANG_(inst_16667);
var state_16771__$1 = state_16771;
var statearr_16876_19428 = state_16771__$1;
(statearr_16876_19428[(2)] = inst_16670);

(statearr_16876_19428[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (36))){
var inst_16717 = (state_16771[(23)]);
var inst_16723 = cljs.core.chunk_first(inst_16717);
var inst_16724 = cljs.core.chunk_rest(inst_16717);
var inst_16726 = cljs.core.count(inst_16723);
var inst_16697 = inst_16724;
var inst_16698 = inst_16723;
var inst_16699 = inst_16726;
var inst_16700 = (0);
var state_16771__$1 = (function (){var statearr_16880 = state_16771;
(statearr_16880[(19)] = inst_16697);

(statearr_16880[(11)] = inst_16700);

(statearr_16880[(12)] = inst_16698);

(statearr_16880[(20)] = inst_16699);

return statearr_16880;
})();
var statearr_16883_19432 = state_16771__$1;
(statearr_16883_19432[(2)] = null);

(statearr_16883_19432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (41))){
var inst_16717 = (state_16771[(23)]);
var inst_16738 = (state_16771[(2)]);
var inst_16740 = cljs.core.next(inst_16717);
var inst_16697 = inst_16740;
var inst_16698 = null;
var inst_16699 = (0);
var inst_16700 = (0);
var state_16771__$1 = (function (){var statearr_16887 = state_16771;
(statearr_16887[(19)] = inst_16697);

(statearr_16887[(11)] = inst_16700);

(statearr_16887[(25)] = inst_16738);

(statearr_16887[(12)] = inst_16698);

(statearr_16887[(20)] = inst_16699);

return statearr_16887;
})();
var statearr_16888_19446 = state_16771__$1;
(statearr_16888_19446[(2)] = null);

(statearr_16888_19446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (43))){
var state_16771__$1 = state_16771;
var statearr_16890_19447 = state_16771__$1;
(statearr_16890_19447[(2)] = null);

(statearr_16890_19447[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (29))){
var inst_16749 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16894_19448 = state_16771__$1;
(statearr_16894_19448[(2)] = inst_16749);

(statearr_16894_19448[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (44))){
var inst_16761 = (state_16771[(2)]);
var state_16771__$1 = (function (){var statearr_16895 = state_16771;
(statearr_16895[(26)] = inst_16761);

return statearr_16895;
})();
var statearr_16901_19449 = state_16771__$1;
(statearr_16901_19449[(2)] = null);

(statearr_16901_19449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (6))){
var inst_16689 = (state_16771[(27)]);
var inst_16688 = cljs.core.deref(cs);
var inst_16689__$1 = cljs.core.keys(inst_16688);
var inst_16690 = cljs.core.count(inst_16689__$1);
var inst_16691 = cljs.core.reset_BANG_(dctr,inst_16690);
var inst_16696 = cljs.core.seq(inst_16689__$1);
var inst_16697 = inst_16696;
var inst_16698 = null;
var inst_16699 = (0);
var inst_16700 = (0);
var state_16771__$1 = (function (){var statearr_16905 = state_16771;
(statearr_16905[(19)] = inst_16697);

(statearr_16905[(28)] = inst_16691);

(statearr_16905[(11)] = inst_16700);

(statearr_16905[(27)] = inst_16689__$1);

(statearr_16905[(12)] = inst_16698);

(statearr_16905[(20)] = inst_16699);

return statearr_16905;
})();
var statearr_16911_19454 = state_16771__$1;
(statearr_16911_19454[(2)] = null);

(statearr_16911_19454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (28))){
var inst_16697 = (state_16771[(19)]);
var inst_16717 = (state_16771[(23)]);
var inst_16717__$1 = cljs.core.seq(inst_16697);
var state_16771__$1 = (function (){var statearr_16914 = state_16771;
(statearr_16914[(23)] = inst_16717__$1);

return statearr_16914;
})();
if(inst_16717__$1){
var statearr_16918_19455 = state_16771__$1;
(statearr_16918_19455[(1)] = (33));

} else {
var statearr_16919_19456 = state_16771__$1;
(statearr_16919_19456[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (25))){
var inst_16700 = (state_16771[(11)]);
var inst_16699 = (state_16771[(20)]);
var inst_16704 = (inst_16700 < inst_16699);
var inst_16705 = inst_16704;
var state_16771__$1 = state_16771;
if(cljs.core.truth_(inst_16705)){
var statearr_16923_19457 = state_16771__$1;
(statearr_16923_19457[(1)] = (27));

} else {
var statearr_16925_19458 = state_16771__$1;
(statearr_16925_19458[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (34))){
var state_16771__$1 = state_16771;
var statearr_16937_19459 = state_16771__$1;
(statearr_16937_19459[(2)] = null);

(statearr_16937_19459[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (17))){
var state_16771__$1 = state_16771;
var statearr_16944_19460 = state_16771__$1;
(statearr_16944_19460[(2)] = null);

(statearr_16944_19460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (3))){
var inst_16766 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16771__$1,inst_16766);
} else {
if((state_val_16775 === (12))){
var inst_16682 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16954_19461 = state_16771__$1;
(statearr_16954_19461[(2)] = inst_16682);

(statearr_16954_19461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (2))){
var state_16771__$1 = state_16771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16771__$1,(4),ch);
} else {
if((state_val_16775 === (23))){
var state_16771__$1 = state_16771;
var statearr_16955_19464 = state_16771__$1;
(statearr_16955_19464[(2)] = null);

(statearr_16955_19464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (35))){
var inst_16747 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16958_19465 = state_16771__$1;
(statearr_16958_19465[(2)] = inst_16747);

(statearr_16958_19465[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (19))){
var inst_16651 = (state_16771[(7)]);
var inst_16658 = cljs.core.chunk_first(inst_16651);
var inst_16659 = cljs.core.chunk_rest(inst_16651);
var inst_16660 = cljs.core.count(inst_16658);
var inst_16628 = inst_16659;
var inst_16629 = inst_16658;
var inst_16630 = inst_16660;
var inst_16631 = (0);
var state_16771__$1 = (function (){var statearr_16969 = state_16771;
(statearr_16969[(13)] = inst_16628);

(statearr_16969[(14)] = inst_16629);

(statearr_16969[(16)] = inst_16631);

(statearr_16969[(17)] = inst_16630);

return statearr_16969;
})();
var statearr_16978_19467 = state_16771__$1;
(statearr_16978_19467[(2)] = null);

(statearr_16978_19467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (11))){
var inst_16628 = (state_16771[(13)]);
var inst_16651 = (state_16771[(7)]);
var inst_16651__$1 = cljs.core.seq(inst_16628);
var state_16771__$1 = (function (){var statearr_16982 = state_16771;
(statearr_16982[(7)] = inst_16651__$1);

return statearr_16982;
})();
if(inst_16651__$1){
var statearr_16983_19469 = state_16771__$1;
(statearr_16983_19469[(1)] = (16));

} else {
var statearr_16984_19470 = state_16771__$1;
(statearr_16984_19470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (9))){
var inst_16684 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16985_19471 = state_16771__$1;
(statearr_16985_19471[(2)] = inst_16684);

(statearr_16985_19471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (5))){
var inst_16626 = cljs.core.deref(cs);
var inst_16627 = cljs.core.seq(inst_16626);
var inst_16628 = inst_16627;
var inst_16629 = null;
var inst_16630 = (0);
var inst_16631 = (0);
var state_16771__$1 = (function (){var statearr_16990 = state_16771;
(statearr_16990[(13)] = inst_16628);

(statearr_16990[(14)] = inst_16629);

(statearr_16990[(16)] = inst_16631);

(statearr_16990[(17)] = inst_16630);

return statearr_16990;
})();
var statearr_16991_19477 = state_16771__$1;
(statearr_16991_19477[(2)] = null);

(statearr_16991_19477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (14))){
var state_16771__$1 = state_16771;
var statearr_16992_19478 = state_16771__$1;
(statearr_16992_19478[(2)] = null);

(statearr_16992_19478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (45))){
var inst_16758 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_16993_19480 = state_16771__$1;
(statearr_16993_19480[(2)] = inst_16758);

(statearr_16993_19480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (26))){
var inst_16689 = (state_16771[(27)]);
var inst_16751 = (state_16771[(2)]);
var inst_16752 = cljs.core.seq(inst_16689);
var state_16771__$1 = (function (){var statearr_16994 = state_16771;
(statearr_16994[(29)] = inst_16751);

return statearr_16994;
})();
if(inst_16752){
var statearr_16995_19485 = state_16771__$1;
(statearr_16995_19485[(1)] = (42));

} else {
var statearr_16996_19486 = state_16771__$1;
(statearr_16996_19486[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (16))){
var inst_16651 = (state_16771[(7)]);
var inst_16655 = cljs.core.chunked_seq_QMARK_(inst_16651);
var state_16771__$1 = state_16771;
if(inst_16655){
var statearr_16997_19487 = state_16771__$1;
(statearr_16997_19487[(1)] = (19));

} else {
var statearr_16999_19488 = state_16771__$1;
(statearr_16999_19488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (38))){
var inst_16744 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_17003_19490 = state_16771__$1;
(statearr_17003_19490[(2)] = inst_16744);

(statearr_17003_19490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (30))){
var state_16771__$1 = state_16771;
var statearr_17004_19499 = state_16771__$1;
(statearr_17004_19499[(2)] = null);

(statearr_17004_19499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (10))){
var inst_16629 = (state_16771[(14)]);
var inst_16631 = (state_16771[(16)]);
var inst_16639 = cljs.core._nth(inst_16629,inst_16631);
var inst_16640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16639,(0),null);
var inst_16641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16639,(1),null);
var state_16771__$1 = (function (){var statearr_17005 = state_16771;
(statearr_17005[(24)] = inst_16640);

return statearr_17005;
})();
if(cljs.core.truth_(inst_16641)){
var statearr_17007_19505 = state_16771__$1;
(statearr_17007_19505[(1)] = (13));

} else {
var statearr_17008_19506 = state_16771__$1;
(statearr_17008_19506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (18))){
var inst_16680 = (state_16771[(2)]);
var state_16771__$1 = state_16771;
var statearr_17009_19507 = state_16771__$1;
(statearr_17009_19507[(2)] = inst_16680);

(statearr_17009_19507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (42))){
var state_16771__$1 = state_16771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16771__$1,(45),dchan);
} else {
if((state_val_16775 === (37))){
var inst_16619 = (state_16771[(9)]);
var inst_16717 = (state_16771[(23)]);
var inst_16732 = (state_16771[(22)]);
var inst_16732__$1 = cljs.core.first(inst_16717);
var inst_16733 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16732__$1,inst_16619,done);
var state_16771__$1 = (function (){var statearr_17010 = state_16771;
(statearr_17010[(22)] = inst_16732__$1);

return statearr_17010;
})();
if(cljs.core.truth_(inst_16733)){
var statearr_17011_19510 = state_16771__$1;
(statearr_17011_19510[(1)] = (39));

} else {
var statearr_17012_19511 = state_16771__$1;
(statearr_17012_19511[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (8))){
var inst_16631 = (state_16771[(16)]);
var inst_16630 = (state_16771[(17)]);
var inst_16633 = (inst_16631 < inst_16630);
var inst_16634 = inst_16633;
var state_16771__$1 = state_16771;
if(cljs.core.truth_(inst_16634)){
var statearr_17022_19515 = state_16771__$1;
(statearr_17022_19515[(1)] = (10));

} else {
var statearr_17023_19517 = state_16771__$1;
(statearr_17023_19517[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13882__auto__ = null;
var cljs$core$async$mult_$_state_machine__13882__auto____0 = (function (){
var statearr_17026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17026[(0)] = cljs$core$async$mult_$_state_machine__13882__auto__);

(statearr_17026[(1)] = (1));

return statearr_17026;
});
var cljs$core$async$mult_$_state_machine__13882__auto____1 = (function (state_16771){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_16771);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e17029){var ex__13885__auto__ = e17029;
var statearr_17032_19529 = state_16771;
(statearr_17032_19529[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_16771[(4)]))){
var statearr_17033_19530 = state_16771;
(statearr_17033_19530[(1)] = cljs.core.first((state_16771[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19531 = state_16771;
state_16771 = G__19531;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13882__auto__ = function(state_16771){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13882__auto____1.call(this,state_16771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13882__auto____0;
cljs$core$async$mult_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13882__auto____1;
return cljs$core$async$mult_$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_17036 = f__15006__auto__();
(statearr_17036[(6)] = c__15005__auto___19350);

return statearr_17036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
var G__17043 = arguments.length;
switch (G__17043) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19534 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19534(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19540 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19540(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19543 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19543(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19547 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19547(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19555 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19555(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19557 = arguments.length;
var i__5727__auto___19558 = (0);
while(true){
if((i__5727__auto___19558 < len__5726__auto___19557)){
args__5732__auto__.push((arguments[i__5727__auto___19558]));

var G__19559 = (i__5727__auto___19558 + (1));
i__5727__auto___19558 = G__19559;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17096){
var map__17099 = p__17096;
var map__17099__$1 = cljs.core.__destructure_map(map__17099);
var opts = map__17099__$1;
var statearr_17103_19560 = state;
(statearr_17103_19560[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17106_19561 = state;
(statearr_17106_19561[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17108_19562 = state;
(statearr_17108_19562[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17084){
var G__17085 = cljs.core.first(seq17084);
var seq17084__$1 = cljs.core.next(seq17084);
var G__17086 = cljs.core.first(seq17084__$1);
var seq17084__$2 = cljs.core.next(seq17084__$1);
var G__17087 = cljs.core.first(seq17084__$2);
var seq17084__$3 = cljs.core.next(seq17084__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17085,G__17086,G__17087,seq17084__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17128 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17129){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17129 = meta17129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17130,meta17129__$1){
var self__ = this;
var _17130__$1 = this;
return (new cljs.core.async.t_cljs$core$async17128(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17129__$1));
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17130){
var self__ = this;
var _17130__$1 = this;
return self__.meta17129;
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17129","meta17129",-740350091,null)], null);
}));

(cljs.core.async.t_cljs$core$async17128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17128");

(cljs.core.async.t_cljs$core$async17128.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17128.
 */
cljs.core.async.__GT_t_cljs$core$async17128 = (function cljs$core$async$__GT_t_cljs$core$async17128(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17129){
return (new cljs.core.async.t_cljs$core$async17128(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17129));
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
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
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
var m = (new cljs.core.async.t_cljs$core$async17128(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15005__auto___19586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_17281){
var state_val_17284 = (state_17281[(1)]);
if((state_val_17284 === (7))){
var inst_17235 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17235)){
var statearr_17294_19587 = state_17281__$1;
(statearr_17294_19587[(1)] = (8));

} else {
var statearr_17295_19588 = state_17281__$1;
(statearr_17295_19588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (20))){
var inst_17220 = (state_17281[(7)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(23),out,inst_17220);
} else {
if((state_val_17284 === (1))){
var inst_17170 = calc_state();
var inst_17176 = cljs.core.__destructure_map(inst_17170);
var inst_17179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17176,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17176,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17176,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17187 = inst_17170;
var state_17281__$1 = (function (){var statearr_17298 = state_17281;
(statearr_17298[(8)] = inst_17187);

(statearr_17298[(9)] = inst_17186);

(statearr_17298[(10)] = inst_17181);

(statearr_17298[(11)] = inst_17179);

return statearr_17298;
})();
var statearr_17300_19595 = state_17281__$1;
(statearr_17300_19595[(2)] = null);

(statearr_17300_19595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (24))){
var inst_17202 = (state_17281[(12)]);
var inst_17187 = inst_17202;
var state_17281__$1 = (function (){var statearr_17305 = state_17281;
(statearr_17305[(8)] = inst_17187);

return statearr_17305;
})();
var statearr_17306_19596 = state_17281__$1;
(statearr_17306_19596[(2)] = null);

(statearr_17306_19596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (4))){
var inst_17225 = (state_17281[(13)]);
var inst_17220 = (state_17281[(7)]);
var inst_17215 = (state_17281[(2)]);
var inst_17220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17215,(0),null);
var inst_17221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17215,(1),null);
var inst_17225__$1 = (inst_17220__$1 == null);
var state_17281__$1 = (function (){var statearr_17312 = state_17281;
(statearr_17312[(13)] = inst_17225__$1);

(statearr_17312[(14)] = inst_17221);

(statearr_17312[(7)] = inst_17220__$1);

return statearr_17312;
})();
if(cljs.core.truth_(inst_17225__$1)){
var statearr_17314_19597 = state_17281__$1;
(statearr_17314_19597[(1)] = (5));

} else {
var statearr_17315_19598 = state_17281__$1;
(statearr_17315_19598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (15))){
var inst_17254 = (state_17281[(15)]);
var inst_17203 = (state_17281[(16)]);
var inst_17254__$1 = cljs.core.empty_QMARK_(inst_17203);
var state_17281__$1 = (function (){var statearr_17318 = state_17281;
(statearr_17318[(15)] = inst_17254__$1);

return statearr_17318;
})();
if(inst_17254__$1){
var statearr_17320_19599 = state_17281__$1;
(statearr_17320_19599[(1)] = (17));

} else {
var statearr_17322_19600 = state_17281__$1;
(statearr_17322_19600[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (21))){
var inst_17202 = (state_17281[(12)]);
var inst_17187 = inst_17202;
var state_17281__$1 = (function (){var statearr_17324 = state_17281;
(statearr_17324[(8)] = inst_17187);

return statearr_17324;
})();
var statearr_17325_19601 = state_17281__$1;
(statearr_17325_19601[(2)] = null);

(statearr_17325_19601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (13))){
var inst_17246 = (state_17281[(2)]);
var inst_17247 = calc_state();
var inst_17187 = inst_17247;
var state_17281__$1 = (function (){var statearr_17326 = state_17281;
(statearr_17326[(8)] = inst_17187);

(statearr_17326[(17)] = inst_17246);

return statearr_17326;
})();
var statearr_17327_19602 = state_17281__$1;
(statearr_17327_19602[(2)] = null);

(statearr_17327_19602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (22))){
var inst_17275 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17328_19603 = state_17281__$1;
(statearr_17328_19603[(2)] = inst_17275);

(statearr_17328_19603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (6))){
var inst_17221 = (state_17281[(14)]);
var inst_17233 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17221,change);
var state_17281__$1 = state_17281;
var statearr_17337_19610 = state_17281__$1;
(statearr_17337_19610[(2)] = inst_17233);

(statearr_17337_19610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (25))){
var state_17281__$1 = state_17281;
var statearr_17338_19611 = state_17281__$1;
(statearr_17338_19611[(2)] = null);

(statearr_17338_19611[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (17))){
var inst_17221 = (state_17281[(14)]);
var inst_17204 = (state_17281[(18)]);
var inst_17256 = (inst_17204.cljs$core$IFn$_invoke$arity$1 ? inst_17204.cljs$core$IFn$_invoke$arity$1(inst_17221) : inst_17204.call(null, inst_17221));
var inst_17257 = cljs.core.not(inst_17256);
var state_17281__$1 = state_17281;
var statearr_17342_19613 = state_17281__$1;
(statearr_17342_19613[(2)] = inst_17257);

(statearr_17342_19613[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (3))){
var inst_17279 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17281__$1,inst_17279);
} else {
if((state_val_17284 === (12))){
var state_17281__$1 = state_17281;
var statearr_17344_19614 = state_17281__$1;
(statearr_17344_19614[(2)] = null);

(statearr_17344_19614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (2))){
var inst_17187 = (state_17281[(8)]);
var inst_17202 = (state_17281[(12)]);
var inst_17202__$1 = cljs.core.__destructure_map(inst_17187);
var inst_17203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17202__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17202__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17202__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17281__$1 = (function (){var statearr_17351 = state_17281;
(statearr_17351[(16)] = inst_17203);

(statearr_17351[(12)] = inst_17202__$1);

(statearr_17351[(18)] = inst_17204);

return statearr_17351;
})();
return cljs.core.async.ioc_alts_BANG_(state_17281__$1,(4),inst_17209);
} else {
if((state_val_17284 === (23))){
var inst_17265 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17265)){
var statearr_17353_19615 = state_17281__$1;
(statearr_17353_19615[(1)] = (24));

} else {
var statearr_17354_19616 = state_17281__$1;
(statearr_17354_19616[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (19))){
var inst_17260 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17356_19617 = state_17281__$1;
(statearr_17356_19617[(2)] = inst_17260);

(statearr_17356_19617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (11))){
var inst_17221 = (state_17281[(14)]);
var inst_17243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17221);
var state_17281__$1 = state_17281;
var statearr_17358_19618 = state_17281__$1;
(statearr_17358_19618[(2)] = inst_17243);

(statearr_17358_19618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (9))){
var inst_17203 = (state_17281[(16)]);
var inst_17250 = (state_17281[(19)]);
var inst_17221 = (state_17281[(14)]);
var inst_17250__$1 = (inst_17203.cljs$core$IFn$_invoke$arity$1 ? inst_17203.cljs$core$IFn$_invoke$arity$1(inst_17221) : inst_17203.call(null, inst_17221));
var state_17281__$1 = (function (){var statearr_17359 = state_17281;
(statearr_17359[(19)] = inst_17250__$1);

return statearr_17359;
})();
if(cljs.core.truth_(inst_17250__$1)){
var statearr_17360_19623 = state_17281__$1;
(statearr_17360_19623[(1)] = (14));

} else {
var statearr_17361_19626 = state_17281__$1;
(statearr_17361_19626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (5))){
var inst_17225 = (state_17281[(13)]);
var state_17281__$1 = state_17281;
var statearr_17362_19627 = state_17281__$1;
(statearr_17362_19627[(2)] = inst_17225);

(statearr_17362_19627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (14))){
var inst_17250 = (state_17281[(19)]);
var state_17281__$1 = state_17281;
var statearr_17363_19629 = state_17281__$1;
(statearr_17363_19629[(2)] = inst_17250);

(statearr_17363_19629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (26))){
var inst_17270 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17365_19630 = state_17281__$1;
(statearr_17365_19630[(2)] = inst_17270);

(statearr_17365_19630[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (16))){
var inst_17262 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17262)){
var statearr_17369_19632 = state_17281__$1;
(statearr_17369_19632[(1)] = (20));

} else {
var statearr_17373_19633 = state_17281__$1;
(statearr_17373_19633[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (10))){
var inst_17277 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17374_19635 = state_17281__$1;
(statearr_17374_19635[(2)] = inst_17277);

(statearr_17374_19635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (18))){
var inst_17254 = (state_17281[(15)]);
var state_17281__$1 = state_17281;
var statearr_17375_19636 = state_17281__$1;
(statearr_17375_19636[(2)] = inst_17254);

(statearr_17375_19636[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (8))){
var inst_17220 = (state_17281[(7)]);
var inst_17241 = (inst_17220 == null);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17241)){
var statearr_17376_19637 = state_17281__$1;
(statearr_17376_19637[(1)] = (11));

} else {
var statearr_17377_19638 = state_17281__$1;
(statearr_17377_19638[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13882__auto__ = null;
var cljs$core$async$mix_$_state_machine__13882__auto____0 = (function (){
var statearr_17380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17380[(0)] = cljs$core$async$mix_$_state_machine__13882__auto__);

(statearr_17380[(1)] = (1));

return statearr_17380;
});
var cljs$core$async$mix_$_state_machine__13882__auto____1 = (function (state_17281){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_17281);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e17381){var ex__13885__auto__ = e17381;
var statearr_17382_19640 = state_17281;
(statearr_17382_19640[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_17281[(4)]))){
var statearr_17383_19641 = state_17281;
(statearr_17383_19641[(1)] = cljs.core.first((state_17281[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19642 = state_17281;
state_17281 = G__19642;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13882__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13882__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13882__auto____0;
cljs$core$async$mix_$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13882__auto____1;
return cljs$core$async$mix_$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_17384 = f__15006__auto__();
(statearr_17384[(6)] = c__15005__auto___19586);

return statearr_17384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19651 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19651(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19661 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19661(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19665 = (function() {
var G__19666 = null;
var G__19666__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19666__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19666 = function(p,v){
switch(arguments.length){
case 1:
return G__19666__1.call(this,p);
case 2:
return G__19666__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19666.cljs$core$IFn$_invoke$arity$1 = G__19666__1;
G__19666.cljs$core$IFn$_invoke$arity$2 = G__19666__2;
return G__19666;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17414 = arguments.length;
switch (G__17414) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19665(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19665(p,v);
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
cljs.core.async.t_cljs$core$async17440 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17441){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17441 = meta17441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17442,meta17441__$1){
var self__ = this;
var _17442__$1 = this;
return (new cljs.core.async.t_cljs$core$async17440(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17441__$1));
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17442){
var self__ = this;
var _17442__$1 = this;
return self__.meta17441;
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17441","meta17441",319828858,null)], null);
}));

(cljs.core.async.t_cljs$core$async17440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17440");

(cljs.core.async.t_cljs$core$async17440.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17440.
 */
cljs.core.async.__GT_t_cljs$core$async17440 = (function cljs$core$async$__GT_t_cljs$core$async17440(ch,topic_fn,buf_fn,mults,ensure_mult,meta17441){
return (new cljs.core.async.t_cljs$core$async17440(ch,topic_fn,buf_fn,mults,ensure_mult,meta17441));
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
var G__17431 = arguments.length;
switch (G__17431) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17415_SHARP_){
if(cljs.core.truth_((p1__17415_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17415_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17415_SHARP_.call(null, topic)))){
return p1__17415_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17415_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17440(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15005__auto___19692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_17546){
var state_val_17547 = (state_17546[(1)]);
if((state_val_17547 === (7))){
var inst_17542 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17548_19694 = state_17546__$1;
(statearr_17548_19694[(2)] = inst_17542);

(statearr_17548_19694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (20))){
var state_17546__$1 = state_17546;
var statearr_17549_19695 = state_17546__$1;
(statearr_17549_19695[(2)] = null);

(statearr_17549_19695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (1))){
var state_17546__$1 = state_17546;
var statearr_17550_19696 = state_17546__$1;
(statearr_17550_19696[(2)] = null);

(statearr_17550_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (24))){
var inst_17525 = (state_17546[(7)]);
var inst_17534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17525);
var state_17546__$1 = state_17546;
var statearr_17551_19702 = state_17546__$1;
(statearr_17551_19702[(2)] = inst_17534);

(statearr_17551_19702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (4))){
var inst_17474 = (state_17546[(8)]);
var inst_17474__$1 = (state_17546[(2)]);
var inst_17475 = (inst_17474__$1 == null);
var state_17546__$1 = (function (){var statearr_17552 = state_17546;
(statearr_17552[(8)] = inst_17474__$1);

return statearr_17552;
})();
if(cljs.core.truth_(inst_17475)){
var statearr_17553_19704 = state_17546__$1;
(statearr_17553_19704[(1)] = (5));

} else {
var statearr_17554_19705 = state_17546__$1;
(statearr_17554_19705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (15))){
var inst_17519 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17558_19707 = state_17546__$1;
(statearr_17558_19707[(2)] = inst_17519);

(statearr_17558_19707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (21))){
var inst_17539 = (state_17546[(2)]);
var state_17546__$1 = (function (){var statearr_17559 = state_17546;
(statearr_17559[(9)] = inst_17539);

return statearr_17559;
})();
var statearr_17560_19712 = state_17546__$1;
(statearr_17560_19712[(2)] = null);

(statearr_17560_19712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (13))){
var inst_17498 = (state_17546[(10)]);
var inst_17500 = cljs.core.chunked_seq_QMARK_(inst_17498);
var state_17546__$1 = state_17546;
if(inst_17500){
var statearr_17561_19716 = state_17546__$1;
(statearr_17561_19716[(1)] = (16));

} else {
var statearr_17565_19717 = state_17546__$1;
(statearr_17565_19717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (22))){
var inst_17531 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
if(cljs.core.truth_(inst_17531)){
var statearr_17571_19718 = state_17546__$1;
(statearr_17571_19718[(1)] = (23));

} else {
var statearr_17574_19719 = state_17546__$1;
(statearr_17574_19719[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (6))){
var inst_17527 = (state_17546[(11)]);
var inst_17525 = (state_17546[(7)]);
var inst_17474 = (state_17546[(8)]);
var inst_17525__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17474) : topic_fn.call(null, inst_17474));
var inst_17526 = cljs.core.deref(mults);
var inst_17527__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17526,inst_17525__$1);
var state_17546__$1 = (function (){var statearr_17578 = state_17546;
(statearr_17578[(11)] = inst_17527__$1);

(statearr_17578[(7)] = inst_17525__$1);

return statearr_17578;
})();
if(cljs.core.truth_(inst_17527__$1)){
var statearr_17579_19725 = state_17546__$1;
(statearr_17579_19725[(1)] = (19));

} else {
var statearr_17580_19726 = state_17546__$1;
(statearr_17580_19726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (25))){
var inst_17536 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17581_19727 = state_17546__$1;
(statearr_17581_19727[(2)] = inst_17536);

(statearr_17581_19727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (17))){
var inst_17498 = (state_17546[(10)]);
var inst_17510 = cljs.core.first(inst_17498);
var inst_17511 = cljs.core.async.muxch_STAR_(inst_17510);
var inst_17512 = cljs.core.async.close_BANG_(inst_17511);
var inst_17513 = cljs.core.next(inst_17498);
var inst_17484 = inst_17513;
var inst_17485 = null;
var inst_17486 = (0);
var inst_17487 = (0);
var state_17546__$1 = (function (){var statearr_17588 = state_17546;
(statearr_17588[(12)] = inst_17487);

(statearr_17588[(13)] = inst_17484);

(statearr_17588[(14)] = inst_17486);

(statearr_17588[(15)] = inst_17512);

(statearr_17588[(16)] = inst_17485);

return statearr_17588;
})();
var statearr_17589_19732 = state_17546__$1;
(statearr_17589_19732[(2)] = null);

(statearr_17589_19732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (3))){
var inst_17544 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17546__$1,inst_17544);
} else {
if((state_val_17547 === (12))){
var inst_17521 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17591_19734 = state_17546__$1;
(statearr_17591_19734[(2)] = inst_17521);

(statearr_17591_19734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (2))){
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17546__$1,(4),ch);
} else {
if((state_val_17547 === (23))){
var state_17546__$1 = state_17546;
var statearr_17592_19735 = state_17546__$1;
(statearr_17592_19735[(2)] = null);

(statearr_17592_19735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (19))){
var inst_17527 = (state_17546[(11)]);
var inst_17474 = (state_17546[(8)]);
var inst_17529 = cljs.core.async.muxch_STAR_(inst_17527);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17546__$1,(22),inst_17529,inst_17474);
} else {
if((state_val_17547 === (11))){
var inst_17484 = (state_17546[(13)]);
var inst_17498 = (state_17546[(10)]);
var inst_17498__$1 = cljs.core.seq(inst_17484);
var state_17546__$1 = (function (){var statearr_17593 = state_17546;
(statearr_17593[(10)] = inst_17498__$1);

return statearr_17593;
})();
if(inst_17498__$1){
var statearr_17594_19739 = state_17546__$1;
(statearr_17594_19739[(1)] = (13));

} else {
var statearr_17596_19740 = state_17546__$1;
(statearr_17596_19740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (9))){
var inst_17523 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17603_19745 = state_17546__$1;
(statearr_17603_19745[(2)] = inst_17523);

(statearr_17603_19745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (5))){
var inst_17481 = cljs.core.deref(mults);
var inst_17482 = cljs.core.vals(inst_17481);
var inst_17483 = cljs.core.seq(inst_17482);
var inst_17484 = inst_17483;
var inst_17485 = null;
var inst_17486 = (0);
var inst_17487 = (0);
var state_17546__$1 = (function (){var statearr_17605 = state_17546;
(statearr_17605[(12)] = inst_17487);

(statearr_17605[(13)] = inst_17484);

(statearr_17605[(14)] = inst_17486);

(statearr_17605[(16)] = inst_17485);

return statearr_17605;
})();
var statearr_17612_19746 = state_17546__$1;
(statearr_17612_19746[(2)] = null);

(statearr_17612_19746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (14))){
var state_17546__$1 = state_17546;
var statearr_17616_19747 = state_17546__$1;
(statearr_17616_19747[(2)] = null);

(statearr_17616_19747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (16))){
var inst_17498 = (state_17546[(10)]);
var inst_17502 = cljs.core.chunk_first(inst_17498);
var inst_17503 = cljs.core.chunk_rest(inst_17498);
var inst_17504 = cljs.core.count(inst_17502);
var inst_17484 = inst_17503;
var inst_17485 = inst_17502;
var inst_17486 = inst_17504;
var inst_17487 = (0);
var state_17546__$1 = (function (){var statearr_17618 = state_17546;
(statearr_17618[(12)] = inst_17487);

(statearr_17618[(13)] = inst_17484);

(statearr_17618[(14)] = inst_17486);

(statearr_17618[(16)] = inst_17485);

return statearr_17618;
})();
var statearr_17619_19750 = state_17546__$1;
(statearr_17619_19750[(2)] = null);

(statearr_17619_19750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (10))){
var inst_17487 = (state_17546[(12)]);
var inst_17484 = (state_17546[(13)]);
var inst_17486 = (state_17546[(14)]);
var inst_17485 = (state_17546[(16)]);
var inst_17492 = cljs.core._nth(inst_17485,inst_17487);
var inst_17493 = cljs.core.async.muxch_STAR_(inst_17492);
var inst_17494 = cljs.core.async.close_BANG_(inst_17493);
var inst_17495 = (inst_17487 + (1));
var tmp17613 = inst_17484;
var tmp17614 = inst_17486;
var tmp17615 = inst_17485;
var inst_17484__$1 = tmp17613;
var inst_17485__$1 = tmp17615;
var inst_17486__$1 = tmp17614;
var inst_17487__$1 = inst_17495;
var state_17546__$1 = (function (){var statearr_17620 = state_17546;
(statearr_17620[(12)] = inst_17487__$1);

(statearr_17620[(13)] = inst_17484__$1);

(statearr_17620[(14)] = inst_17486__$1);

(statearr_17620[(16)] = inst_17485__$1);

(statearr_17620[(17)] = inst_17494);

return statearr_17620;
})();
var statearr_17621_19756 = state_17546__$1;
(statearr_17621_19756[(2)] = null);

(statearr_17621_19756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (18))){
var inst_17516 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17622_19757 = state_17546__$1;
(statearr_17622_19757[(2)] = inst_17516);

(statearr_17622_19757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17547 === (8))){
var inst_17487 = (state_17546[(12)]);
var inst_17486 = (state_17546[(14)]);
var inst_17489 = (inst_17487 < inst_17486);
var inst_17490 = inst_17489;
var state_17546__$1 = state_17546;
if(cljs.core.truth_(inst_17490)){
var statearr_17623_19758 = state_17546__$1;
(statearr_17623_19758[(1)] = (10));

} else {
var statearr_17624_19759 = state_17546__$1;
(statearr_17624_19759[(1)] = (11));

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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_17625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17625[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_17625[(1)] = (1));

return statearr_17625;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_17546){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_17546);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e17626){var ex__13885__auto__ = e17626;
var statearr_17627_19761 = state_17546;
(statearr_17627_19761[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_17546[(4)]))){
var statearr_17631_19763 = state_17546;
(statearr_17631_19763[(1)] = cljs.core.first((state_17546[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19764 = state_17546;
state_17546 = G__19764;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_17546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_17546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_17632 = f__15006__auto__();
(statearr_17632[(6)] = c__15005__auto___19692);

return statearr_17632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
var G__17641 = arguments.length;
switch (G__17641) {
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
var G__17647 = arguments.length;
switch (G__17647) {
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
var G__17655 = arguments.length;
switch (G__17655) {
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
var c__15005__auto___19801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_17744){
var state_val_17745 = (state_17744[(1)]);
if((state_val_17745 === (7))){
var state_17744__$1 = state_17744;
var statearr_17749_19802 = state_17744__$1;
(statearr_17749_19802[(2)] = null);

(statearr_17749_19802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (1))){
var state_17744__$1 = state_17744;
var statearr_17750_19807 = state_17744__$1;
(statearr_17750_19807[(2)] = null);

(statearr_17750_19807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (4))){
var inst_17695 = (state_17744[(7)]);
var inst_17694 = (state_17744[(8)]);
var inst_17698 = (inst_17695 < inst_17694);
var state_17744__$1 = state_17744;
if(cljs.core.truth_(inst_17698)){
var statearr_17761_19808 = state_17744__$1;
(statearr_17761_19808[(1)] = (6));

} else {
var statearr_17763_19809 = state_17744__$1;
(statearr_17763_19809[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (15))){
var inst_17725 = (state_17744[(9)]);
var inst_17730 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17725);
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17744__$1,(17),out,inst_17730);
} else {
if((state_val_17745 === (13))){
var inst_17725 = (state_17744[(9)]);
var inst_17725__$1 = (state_17744[(2)]);
var inst_17726 = cljs.core.some(cljs.core.nil_QMARK_,inst_17725__$1);
var state_17744__$1 = (function (){var statearr_17780 = state_17744;
(statearr_17780[(9)] = inst_17725__$1);

return statearr_17780;
})();
if(cljs.core.truth_(inst_17726)){
var statearr_17784_19810 = state_17744__$1;
(statearr_17784_19810[(1)] = (14));

} else {
var statearr_17785_19811 = state_17744__$1;
(statearr_17785_19811[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (6))){
var state_17744__$1 = state_17744;
var statearr_17787_19812 = state_17744__$1;
(statearr_17787_19812[(2)] = null);

(statearr_17787_19812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (17))){
var inst_17732 = (state_17744[(2)]);
var state_17744__$1 = (function (){var statearr_17799 = state_17744;
(statearr_17799[(10)] = inst_17732);

return statearr_17799;
})();
var statearr_17800_19813 = state_17744__$1;
(statearr_17800_19813[(2)] = null);

(statearr_17800_19813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (3))){
var inst_17737 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17744__$1,inst_17737);
} else {
if((state_val_17745 === (12))){
var _ = (function (){var statearr_17809 = state_17744;
(statearr_17809[(4)] = cljs.core.rest((state_17744[(4)])));

return statearr_17809;
})();
var state_17744__$1 = state_17744;
var ex17798 = (state_17744__$1[(2)]);
var statearr_17815_19814 = state_17744__$1;
(statearr_17815_19814[(5)] = ex17798);


if((ex17798 instanceof Object)){
var statearr_17824_19815 = state_17744__$1;
(statearr_17824_19815[(1)] = (11));

(statearr_17824_19815[(5)] = null);

} else {
throw ex17798;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (2))){
var inst_17693 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17694 = cnt;
var inst_17695 = (0);
var state_17744__$1 = (function (){var statearr_17827 = state_17744;
(statearr_17827[(7)] = inst_17695);

(statearr_17827[(11)] = inst_17693);

(statearr_17827[(8)] = inst_17694);

return statearr_17827;
})();
var statearr_17828_19816 = state_17744__$1;
(statearr_17828_19816[(2)] = null);

(statearr_17828_19816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (11))){
var inst_17704 = (state_17744[(2)]);
var inst_17705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17744__$1 = (function (){var statearr_17829 = state_17744;
(statearr_17829[(12)] = inst_17704);

return statearr_17829;
})();
var statearr_17830_19817 = state_17744__$1;
(statearr_17830_19817[(2)] = inst_17705);

(statearr_17830_19817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (9))){
var inst_17695 = (state_17744[(7)]);
var _ = (function (){var statearr_17831 = state_17744;
(statearr_17831[(4)] = cljs.core.cons((12),(state_17744[(4)])));

return statearr_17831;
})();
var inst_17711 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17695) : chs__$1.call(null, inst_17695));
var inst_17712 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17695) : done.call(null, inst_17695));
var inst_17713 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17711,inst_17712);
var ___$1 = (function (){var statearr_17833 = state_17744;
(statearr_17833[(4)] = cljs.core.rest((state_17744[(4)])));

return statearr_17833;
})();
var state_17744__$1 = state_17744;
var statearr_17834_19822 = state_17744__$1;
(statearr_17834_19822[(2)] = inst_17713);

(statearr_17834_19822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (5))){
var inst_17723 = (state_17744[(2)]);
var state_17744__$1 = (function (){var statearr_17844 = state_17744;
(statearr_17844[(13)] = inst_17723);

return statearr_17844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17744__$1,(13),dchan);
} else {
if((state_val_17745 === (14))){
var inst_17728 = cljs.core.async.close_BANG_(out);
var state_17744__$1 = state_17744;
var statearr_17845_19836 = state_17744__$1;
(statearr_17845_19836[(2)] = inst_17728);

(statearr_17845_19836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (16))){
var inst_17735 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17846_19844 = state_17744__$1;
(statearr_17846_19844[(2)] = inst_17735);

(statearr_17846_19844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (10))){
var inst_17695 = (state_17744[(7)]);
var inst_17716 = (state_17744[(2)]);
var inst_17717 = (inst_17695 + (1));
var inst_17695__$1 = inst_17717;
var state_17744__$1 = (function (){var statearr_17847 = state_17744;
(statearr_17847[(14)] = inst_17716);

(statearr_17847[(7)] = inst_17695__$1);

return statearr_17847;
})();
var statearr_17848_19852 = state_17744__$1;
(statearr_17848_19852[(2)] = null);

(statearr_17848_19852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (8))){
var inst_17721 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17849_19853 = state_17744__$1;
(statearr_17849_19853[(2)] = inst_17721);

(statearr_17849_19853[(1)] = (5));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_17850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17850[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_17850[(1)] = (1));

return statearr_17850;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_17744){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_17744);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e17851){var ex__13885__auto__ = e17851;
var statearr_17852_19856 = state_17744;
(statearr_17852_19856[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_17744[(4)]))){
var statearr_17853_19857 = state_17744;
(statearr_17853_19857[(1)] = cljs.core.first((state_17744[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19862 = state_17744;
state_17744 = G__19862;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_17744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_17744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_17863 = f__15006__auto__();
(statearr_17863[(6)] = c__15005__auto___19801);

return statearr_17863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
var G__17867 = arguments.length;
switch (G__17867) {
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
var c__15005__auto___19870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_17915){
var state_val_17916 = (state_17915[(1)]);
if((state_val_17916 === (7))){
var inst_17880 = (state_17915[(7)]);
var inst_17891 = (state_17915[(8)]);
var inst_17880__$1 = (state_17915[(2)]);
var inst_17891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17880__$1,(0),null);
var inst_17892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17880__$1,(1),null);
var inst_17893 = (inst_17891__$1 == null);
var state_17915__$1 = (function (){var statearr_17920 = state_17915;
(statearr_17920[(7)] = inst_17880__$1);

(statearr_17920[(8)] = inst_17891__$1);

(statearr_17920[(9)] = inst_17892);

return statearr_17920;
})();
if(cljs.core.truth_(inst_17893)){
var statearr_17923_19872 = state_17915__$1;
(statearr_17923_19872[(1)] = (8));

} else {
var statearr_17924_19873 = state_17915__$1;
(statearr_17924_19873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (1))){
var inst_17869 = cljs.core.vec(chs);
var inst_17871 = inst_17869;
var state_17915__$1 = (function (){var statearr_17925 = state_17915;
(statearr_17925[(10)] = inst_17871);

return statearr_17925;
})();
var statearr_17926_19878 = state_17915__$1;
(statearr_17926_19878[(2)] = null);

(statearr_17926_19878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (4))){
var inst_17871 = (state_17915[(10)]);
var state_17915__$1 = state_17915;
return cljs.core.async.ioc_alts_BANG_(state_17915__$1,(7),inst_17871);
} else {
if((state_val_17916 === (6))){
var inst_17911 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17927_19881 = state_17915__$1;
(statearr_17927_19881[(2)] = inst_17911);

(statearr_17927_19881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (3))){
var inst_17913 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17915__$1,inst_17913);
} else {
if((state_val_17916 === (2))){
var inst_17871 = (state_17915[(10)]);
var inst_17873 = cljs.core.count(inst_17871);
var inst_17874 = (inst_17873 > (0));
var state_17915__$1 = state_17915;
if(cljs.core.truth_(inst_17874)){
var statearr_17932_19893 = state_17915__$1;
(statearr_17932_19893[(1)] = (4));

} else {
var statearr_17933_19895 = state_17915__$1;
(statearr_17933_19895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (11))){
var inst_17871 = (state_17915[(10)]);
var inst_17904 = (state_17915[(2)]);
var tmp17928 = inst_17871;
var inst_17871__$1 = tmp17928;
var state_17915__$1 = (function (){var statearr_17934 = state_17915;
(statearr_17934[(10)] = inst_17871__$1);

(statearr_17934[(11)] = inst_17904);

return statearr_17934;
})();
var statearr_17935_19897 = state_17915__$1;
(statearr_17935_19897[(2)] = null);

(statearr_17935_19897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (9))){
var inst_17891 = (state_17915[(8)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17915__$1,(11),out,inst_17891);
} else {
if((state_val_17916 === (5))){
var inst_17909 = cljs.core.async.close_BANG_(out);
var state_17915__$1 = state_17915;
var statearr_17943_19901 = state_17915__$1;
(statearr_17943_19901[(2)] = inst_17909);

(statearr_17943_19901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (10))){
var inst_17907 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17944_19902 = state_17915__$1;
(statearr_17944_19902[(2)] = inst_17907);

(statearr_17944_19902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (8))){
var inst_17880 = (state_17915[(7)]);
var inst_17871 = (state_17915[(10)]);
var inst_17891 = (state_17915[(8)]);
var inst_17892 = (state_17915[(9)]);
var inst_17899 = (function (){var cs = inst_17871;
var vec__17876 = inst_17880;
var v = inst_17891;
var c = inst_17892;
return (function (p1__17864_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17864_SHARP_);
});
})();
var inst_17900 = cljs.core.filterv(inst_17899,inst_17871);
var inst_17871__$1 = inst_17900;
var state_17915__$1 = (function (){var statearr_17945 = state_17915;
(statearr_17945[(10)] = inst_17871__$1);

return statearr_17945;
})();
var statearr_17946_19903 = state_17915__$1;
(statearr_17946_19903[(2)] = null);

(statearr_17946_19903[(1)] = (2));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_17949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17949[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_17949[(1)] = (1));

return statearr_17949;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_17915){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_17915);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e17950){var ex__13885__auto__ = e17950;
var statearr_17951_19904 = state_17915;
(statearr_17951_19904[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_17915[(4)]))){
var statearr_17952_19905 = state_17915;
(statearr_17952_19905[(1)] = cljs.core.first((state_17915[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19908 = state_17915;
state_17915 = G__19908;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_17915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_17915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_17954 = f__15006__auto__();
(statearr_17954[(6)] = c__15005__auto___19870);

return statearr_17954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
var G__17957 = arguments.length;
switch (G__17957) {
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
var c__15005__auto___19914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_17997){
var state_val_17998 = (state_17997[(1)]);
if((state_val_17998 === (7))){
var inst_17978 = (state_17997[(7)]);
var inst_17978__$1 = (state_17997[(2)]);
var inst_17979 = (inst_17978__$1 == null);
var inst_17980 = cljs.core.not(inst_17979);
var state_17997__$1 = (function (){var statearr_17999 = state_17997;
(statearr_17999[(7)] = inst_17978__$1);

return statearr_17999;
})();
if(inst_17980){
var statearr_18000_19915 = state_17997__$1;
(statearr_18000_19915[(1)] = (8));

} else {
var statearr_18001_19916 = state_17997__$1;
(statearr_18001_19916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (1))){
var inst_17973 = (0);
var state_17997__$1 = (function (){var statearr_18002 = state_17997;
(statearr_18002[(8)] = inst_17973);

return statearr_18002;
})();
var statearr_18003_19917 = state_17997__$1;
(statearr_18003_19917[(2)] = null);

(statearr_18003_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (4))){
var state_17997__$1 = state_17997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17997__$1,(7),ch);
} else {
if((state_val_17998 === (6))){
var inst_17992 = (state_17997[(2)]);
var state_17997__$1 = state_17997;
var statearr_18006_19918 = state_17997__$1;
(statearr_18006_19918[(2)] = inst_17992);

(statearr_18006_19918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (3))){
var inst_17994 = (state_17997[(2)]);
var inst_17995 = cljs.core.async.close_BANG_(out);
var state_17997__$1 = (function (){var statearr_18009 = state_17997;
(statearr_18009[(9)] = inst_17994);

return statearr_18009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17997__$1,inst_17995);
} else {
if((state_val_17998 === (2))){
var inst_17973 = (state_17997[(8)]);
var inst_17975 = (inst_17973 < n);
var state_17997__$1 = state_17997;
if(cljs.core.truth_(inst_17975)){
var statearr_18010_19921 = state_17997__$1;
(statearr_18010_19921[(1)] = (4));

} else {
var statearr_18014_19922 = state_17997__$1;
(statearr_18014_19922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (11))){
var inst_17973 = (state_17997[(8)]);
var inst_17984 = (state_17997[(2)]);
var inst_17985 = (inst_17973 + (1));
var inst_17973__$1 = inst_17985;
var state_17997__$1 = (function (){var statearr_18015 = state_17997;
(statearr_18015[(10)] = inst_17984);

(statearr_18015[(8)] = inst_17973__$1);

return statearr_18015;
})();
var statearr_18016_19926 = state_17997__$1;
(statearr_18016_19926[(2)] = null);

(statearr_18016_19926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (9))){
var state_17997__$1 = state_17997;
var statearr_18017_19927 = state_17997__$1;
(statearr_18017_19927[(2)] = null);

(statearr_18017_19927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (5))){
var state_17997__$1 = state_17997;
var statearr_18018_19930 = state_17997__$1;
(statearr_18018_19930[(2)] = null);

(statearr_18018_19930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (10))){
var inst_17989 = (state_17997[(2)]);
var state_17997__$1 = state_17997;
var statearr_18019_19931 = state_17997__$1;
(statearr_18019_19931[(2)] = inst_17989);

(statearr_18019_19931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17998 === (8))){
var inst_17978 = (state_17997[(7)]);
var state_17997__$1 = state_17997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17997__$1,(11),out,inst_17978);
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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_18026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18026[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_18026[(1)] = (1));

return statearr_18026;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_17997){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_17997);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e18027){var ex__13885__auto__ = e18027;
var statearr_18028_19934 = state_17997;
(statearr_18028_19934[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_17997[(4)]))){
var statearr_18029_19935 = state_17997;
(statearr_18029_19935[(1)] = cljs.core.first((state_17997[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19937 = state_17997;
state_17997 = G__19937;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_17997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_17997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_18034 = f__15006__auto__();
(statearr_18034[(6)] = c__15005__auto___19914);

return statearr_18034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
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
cljs.core.async.t_cljs$core$async18050 = (function (f,ch,meta18039,_,fn1,meta18051){
this.f = f;
this.ch = ch;
this.meta18039 = meta18039;
this._ = _;
this.fn1 = fn1;
this.meta18051 = meta18051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18052,meta18051__$1){
var self__ = this;
var _18052__$1 = this;
return (new cljs.core.async.t_cljs$core$async18050(self__.f,self__.ch,self__.meta18039,self__._,self__.fn1,meta18051__$1));
}));

(cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18052){
var self__ = this;
var _18052__$1 = this;
return self__.meta18051;
}));

(cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18037_SHARP_){
var G__18059 = (((p1__18037_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18037_SHARP_) : self__.f.call(null, p1__18037_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18059) : f1.call(null, G__18059));
});
}));

(cljs.core.async.t_cljs$core$async18050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18039","meta18039",-1615043840,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18038","cljs.core.async/t_cljs$core$async18038",632965505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18051","meta18051",530176975,null)], null);
}));

(cljs.core.async.t_cljs$core$async18050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18050");

(cljs.core.async.t_cljs$core$async18050.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18050.
 */
cljs.core.async.__GT_t_cljs$core$async18050 = (function cljs$core$async$__GT_t_cljs$core$async18050(f,ch,meta18039,_,fn1,meta18051){
return (new cljs.core.async.t_cljs$core$async18050(f,ch,meta18039,_,fn1,meta18051));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18038 = (function (f,ch,meta18039){
this.f = f;
this.ch = ch;
this.meta18039 = meta18039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18040,meta18039__$1){
var self__ = this;
var _18040__$1 = this;
return (new cljs.core.async.t_cljs$core$async18038(self__.f,self__.ch,meta18039__$1));
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18040){
var self__ = this;
var _18040__$1 = this;
return self__.meta18039;
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18050(self__.f,self__.ch,self__.meta18039,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18089 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18089) : self__.f.call(null, G__18089));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18039","meta18039",-1615043840,null)], null);
}));

(cljs.core.async.t_cljs$core$async18038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18038");

(cljs.core.async.t_cljs$core$async18038.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18038.
 */
cljs.core.async.__GT_t_cljs$core$async18038 = (function cljs$core$async$__GT_t_cljs$core$async18038(f,ch,meta18039){
return (new cljs.core.async.t_cljs$core$async18038(f,ch,meta18039));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18111 = (function (f,ch,meta18112){
this.f = f;
this.ch = ch;
this.meta18112 = meta18112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18113,meta18112__$1){
var self__ = this;
var _18113__$1 = this;
return (new cljs.core.async.t_cljs$core$async18111(self__.f,self__.ch,meta18112__$1));
}));

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18113){
var self__ = this;
var _18113__$1 = this;
return self__.meta18112;
}));

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18112","meta18112",371810089,null)], null);
}));

(cljs.core.async.t_cljs$core$async18111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18111");

(cljs.core.async.t_cljs$core$async18111.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18111.
 */
cljs.core.async.__GT_t_cljs$core$async18111 = (function cljs$core$async$__GT_t_cljs$core$async18111(f,ch,meta18112){
return (new cljs.core.async.t_cljs$core$async18111(f,ch,meta18112));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18111(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18125 = (function (p,ch,meta18126){
this.p = p;
this.ch = ch;
this.meta18126 = meta18126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18127,meta18126__$1){
var self__ = this;
var _18127__$1 = this;
return (new cljs.core.async.t_cljs$core$async18125(self__.p,self__.ch,meta18126__$1));
}));

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18127){
var self__ = this;
var _18127__$1 = this;
return self__.meta18126;
}));

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18126","meta18126",-1109834210,null)], null);
}));

(cljs.core.async.t_cljs$core$async18125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18125");

(cljs.core.async.t_cljs$core$async18125.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18125.
 */
cljs.core.async.__GT_t_cljs$core$async18125 = (function cljs$core$async$__GT_t_cljs$core$async18125(p,ch,meta18126){
return (new cljs.core.async.t_cljs$core$async18125(p,ch,meta18126));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18125(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18151 = arguments.length;
switch (G__18151) {
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
var c__15005__auto___19958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_18175){
var state_val_18176 = (state_18175[(1)]);
if((state_val_18176 === (7))){
var inst_18171 = (state_18175[(2)]);
var state_18175__$1 = state_18175;
var statearr_18180_19959 = state_18175__$1;
(statearr_18180_19959[(2)] = inst_18171);

(statearr_18180_19959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (1))){
var state_18175__$1 = state_18175;
var statearr_18181_19960 = state_18175__$1;
(statearr_18181_19960[(2)] = null);

(statearr_18181_19960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (4))){
var inst_18157 = (state_18175[(7)]);
var inst_18157__$1 = (state_18175[(2)]);
var inst_18158 = (inst_18157__$1 == null);
var state_18175__$1 = (function (){var statearr_18182 = state_18175;
(statearr_18182[(7)] = inst_18157__$1);

return statearr_18182;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18184_19963 = state_18175__$1;
(statearr_18184_19963[(1)] = (5));

} else {
var statearr_18185_19964 = state_18175__$1;
(statearr_18185_19964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (6))){
var inst_18157 = (state_18175[(7)]);
var inst_18162 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18157) : p.call(null, inst_18157));
var state_18175__$1 = state_18175;
if(cljs.core.truth_(inst_18162)){
var statearr_18186_19965 = state_18175__$1;
(statearr_18186_19965[(1)] = (8));

} else {
var statearr_18187_19967 = state_18175__$1;
(statearr_18187_19967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (3))){
var inst_18173 = (state_18175[(2)]);
var state_18175__$1 = state_18175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18175__$1,inst_18173);
} else {
if((state_val_18176 === (2))){
var state_18175__$1 = state_18175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18175__$1,(4),ch);
} else {
if((state_val_18176 === (11))){
var inst_18165 = (state_18175[(2)]);
var state_18175__$1 = state_18175;
var statearr_18191_19968 = state_18175__$1;
(statearr_18191_19968[(2)] = inst_18165);

(statearr_18191_19968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (9))){
var state_18175__$1 = state_18175;
var statearr_18192_19969 = state_18175__$1;
(statearr_18192_19969[(2)] = null);

(statearr_18192_19969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (5))){
var inst_18160 = cljs.core.async.close_BANG_(out);
var state_18175__$1 = state_18175;
var statearr_18193_19974 = state_18175__$1;
(statearr_18193_19974[(2)] = inst_18160);

(statearr_18193_19974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (10))){
var inst_18168 = (state_18175[(2)]);
var state_18175__$1 = (function (){var statearr_18194 = state_18175;
(statearr_18194[(8)] = inst_18168);

return statearr_18194;
})();
var statearr_18195_19981 = state_18175__$1;
(statearr_18195_19981[(2)] = null);

(statearr_18195_19981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18176 === (8))){
var inst_18157 = (state_18175[(7)]);
var state_18175__$1 = state_18175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18175__$1,(11),out,inst_18157);
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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_18200 = [null,null,null,null,null,null,null,null,null];
(statearr_18200[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_18200[(1)] = (1));

return statearr_18200;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_18175){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_18175);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e18201){var ex__13885__auto__ = e18201;
var statearr_18202_19982 = state_18175;
(statearr_18202_19982[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_18175[(4)]))){
var statearr_18203_19983 = state_18175;
(statearr_18203_19983[(1)] = cljs.core.first((state_18175[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19985 = state_18175;
state_18175 = G__19985;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_18175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_18175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_18206 = f__15006__auto__();
(statearr_18206[(6)] = c__15005__auto___19958);

return statearr_18206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18216 = arguments.length;
switch (G__18216) {
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
var c__15005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_18309){
var state_val_18310 = (state_18309[(1)]);
if((state_val_18310 === (7))){
var inst_18305 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18316_19994 = state_18309__$1;
(statearr_18316_19994[(2)] = inst_18305);

(statearr_18316_19994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (20))){
var inst_18275 = (state_18309[(7)]);
var inst_18286 = (state_18309[(2)]);
var inst_18287 = cljs.core.next(inst_18275);
var inst_18241 = inst_18287;
var inst_18242 = null;
var inst_18243 = (0);
var inst_18244 = (0);
var state_18309__$1 = (function (){var statearr_18322 = state_18309;
(statearr_18322[(8)] = inst_18286);

(statearr_18322[(9)] = inst_18243);

(statearr_18322[(10)] = inst_18242);

(statearr_18322[(11)] = inst_18244);

(statearr_18322[(12)] = inst_18241);

return statearr_18322;
})();
var statearr_18323_20001 = state_18309__$1;
(statearr_18323_20001[(2)] = null);

(statearr_18323_20001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (1))){
var state_18309__$1 = state_18309;
var statearr_18324_20003 = state_18309__$1;
(statearr_18324_20003[(2)] = null);

(statearr_18324_20003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (4))){
var inst_18230 = (state_18309[(13)]);
var inst_18230__$1 = (state_18309[(2)]);
var inst_18231 = (inst_18230__$1 == null);
var state_18309__$1 = (function (){var statearr_18329 = state_18309;
(statearr_18329[(13)] = inst_18230__$1);

return statearr_18329;
})();
if(cljs.core.truth_(inst_18231)){
var statearr_18330_20007 = state_18309__$1;
(statearr_18330_20007[(1)] = (5));

} else {
var statearr_18331_20008 = state_18309__$1;
(statearr_18331_20008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (15))){
var state_18309__$1 = state_18309;
var statearr_18336_20012 = state_18309__$1;
(statearr_18336_20012[(2)] = null);

(statearr_18336_20012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (21))){
var state_18309__$1 = state_18309;
var statearr_18342_20013 = state_18309__$1;
(statearr_18342_20013[(2)] = null);

(statearr_18342_20013[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (13))){
var inst_18243 = (state_18309[(9)]);
var inst_18242 = (state_18309[(10)]);
var inst_18244 = (state_18309[(11)]);
var inst_18241 = (state_18309[(12)]);
var inst_18263 = (state_18309[(2)]);
var inst_18264 = (inst_18244 + (1));
var tmp18333 = inst_18243;
var tmp18334 = inst_18242;
var tmp18335 = inst_18241;
var inst_18241__$1 = tmp18335;
var inst_18242__$1 = tmp18334;
var inst_18243__$1 = tmp18333;
var inst_18244__$1 = inst_18264;
var state_18309__$1 = (function (){var statearr_18343 = state_18309;
(statearr_18343[(14)] = inst_18263);

(statearr_18343[(9)] = inst_18243__$1);

(statearr_18343[(10)] = inst_18242__$1);

(statearr_18343[(11)] = inst_18244__$1);

(statearr_18343[(12)] = inst_18241__$1);

return statearr_18343;
})();
var statearr_18344_20015 = state_18309__$1;
(statearr_18344_20015[(2)] = null);

(statearr_18344_20015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (22))){
var state_18309__$1 = state_18309;
var statearr_18346_20016 = state_18309__$1;
(statearr_18346_20016[(2)] = null);

(statearr_18346_20016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (6))){
var inst_18230 = (state_18309[(13)]);
var inst_18239 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18230) : f.call(null, inst_18230));
var inst_18240 = cljs.core.seq(inst_18239);
var inst_18241 = inst_18240;
var inst_18242 = null;
var inst_18243 = (0);
var inst_18244 = (0);
var state_18309__$1 = (function (){var statearr_18348 = state_18309;
(statearr_18348[(9)] = inst_18243);

(statearr_18348[(10)] = inst_18242);

(statearr_18348[(11)] = inst_18244);

(statearr_18348[(12)] = inst_18241);

return statearr_18348;
})();
var statearr_18349_20021 = state_18309__$1;
(statearr_18349_20021[(2)] = null);

(statearr_18349_20021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (17))){
var inst_18275 = (state_18309[(7)]);
var inst_18279 = cljs.core.chunk_first(inst_18275);
var inst_18280 = cljs.core.chunk_rest(inst_18275);
var inst_18281 = cljs.core.count(inst_18279);
var inst_18241 = inst_18280;
var inst_18242 = inst_18279;
var inst_18243 = inst_18281;
var inst_18244 = (0);
var state_18309__$1 = (function (){var statearr_18354 = state_18309;
(statearr_18354[(9)] = inst_18243);

(statearr_18354[(10)] = inst_18242);

(statearr_18354[(11)] = inst_18244);

(statearr_18354[(12)] = inst_18241);

return statearr_18354;
})();
var statearr_18359_20022 = state_18309__$1;
(statearr_18359_20022[(2)] = null);

(statearr_18359_20022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (3))){
var inst_18307 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18309__$1,inst_18307);
} else {
if((state_val_18310 === (12))){
var inst_18295 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18365_20027 = state_18309__$1;
(statearr_18365_20027[(2)] = inst_18295);

(statearr_18365_20027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (2))){
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18309__$1,(4),in$);
} else {
if((state_val_18310 === (23))){
var inst_18303 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18374_20030 = state_18309__$1;
(statearr_18374_20030[(2)] = inst_18303);

(statearr_18374_20030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (19))){
var inst_18290 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18375_20031 = state_18309__$1;
(statearr_18375_20031[(2)] = inst_18290);

(statearr_18375_20031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (11))){
var inst_18275 = (state_18309[(7)]);
var inst_18241 = (state_18309[(12)]);
var inst_18275__$1 = cljs.core.seq(inst_18241);
var state_18309__$1 = (function (){var statearr_18380 = state_18309;
(statearr_18380[(7)] = inst_18275__$1);

return statearr_18380;
})();
if(inst_18275__$1){
var statearr_18381_20032 = state_18309__$1;
(statearr_18381_20032[(1)] = (14));

} else {
var statearr_18382_20033 = state_18309__$1;
(statearr_18382_20033[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (9))){
var inst_18297 = (state_18309[(2)]);
var inst_18298 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18309__$1 = (function (){var statearr_18383 = state_18309;
(statearr_18383[(15)] = inst_18297);

return statearr_18383;
})();
if(cljs.core.truth_(inst_18298)){
var statearr_18384_20034 = state_18309__$1;
(statearr_18384_20034[(1)] = (21));

} else {
var statearr_18385_20035 = state_18309__$1;
(statearr_18385_20035[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (5))){
var inst_18233 = cljs.core.async.close_BANG_(out);
var state_18309__$1 = state_18309;
var statearr_18386_20038 = state_18309__$1;
(statearr_18386_20038[(2)] = inst_18233);

(statearr_18386_20038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (14))){
var inst_18275 = (state_18309[(7)]);
var inst_18277 = cljs.core.chunked_seq_QMARK_(inst_18275);
var state_18309__$1 = state_18309;
if(inst_18277){
var statearr_18387_20040 = state_18309__$1;
(statearr_18387_20040[(1)] = (17));

} else {
var statearr_18391_20042 = state_18309__$1;
(statearr_18391_20042[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (16))){
var inst_18293 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18392_20044 = state_18309__$1;
(statearr_18392_20044[(2)] = inst_18293);

(statearr_18392_20044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18310 === (10))){
var inst_18242 = (state_18309[(10)]);
var inst_18244 = (state_18309[(11)]);
var inst_18261 = cljs.core._nth(inst_18242,inst_18244);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18309__$1,(13),out,inst_18261);
} else {
if((state_val_18310 === (18))){
var inst_18275 = (state_18309[(7)]);
var inst_18284 = cljs.core.first(inst_18275);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18309__$1,(20),out,inst_18284);
} else {
if((state_val_18310 === (8))){
var inst_18243 = (state_18309[(9)]);
var inst_18244 = (state_18309[(11)]);
var inst_18246 = (inst_18244 < inst_18243);
var inst_18247 = inst_18246;
var state_18309__$1 = state_18309;
if(cljs.core.truth_(inst_18247)){
var statearr_18398_20046 = state_18309__$1;
(statearr_18398_20046[(1)] = (10));

} else {
var statearr_18402_20047 = state_18309__$1;
(statearr_18402_20047[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13882__auto____0 = (function (){
var statearr_18431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18431[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13882__auto__);

(statearr_18431[(1)] = (1));

return statearr_18431;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13882__auto____1 = (function (state_18309){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_18309);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e18435){var ex__13885__auto__ = e18435;
var statearr_18436_20056 = state_18309;
(statearr_18436_20056[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_18309[(4)]))){
var statearr_18437_20057 = state_18309;
(statearr_18437_20057[(1)] = cljs.core.first((state_18309[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20062 = state_18309;
state_18309 = G__20062;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13882__auto__ = function(state_18309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13882__auto____1.call(this,state_18309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_18444 = f__15006__auto__();
(statearr_18444[(6)] = c__15005__auto__);

return statearr_18444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));

return c__15005__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18453 = arguments.length;
switch (G__18453) {
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
var G__18456 = arguments.length;
switch (G__18456) {
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
var G__18459 = arguments.length;
switch (G__18459) {
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
var c__15005__auto___20083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_18490){
var state_val_18491 = (state_18490[(1)]);
if((state_val_18491 === (7))){
var inst_18482 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18495_20087 = state_18490__$1;
(statearr_18495_20087[(2)] = inst_18482);

(statearr_18495_20087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (1))){
var inst_18464 = null;
var state_18490__$1 = (function (){var statearr_18496 = state_18490;
(statearr_18496[(7)] = inst_18464);

return statearr_18496;
})();
var statearr_18498_20089 = state_18490__$1;
(statearr_18498_20089[(2)] = null);

(statearr_18498_20089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (4))){
var inst_18467 = (state_18490[(8)]);
var inst_18467__$1 = (state_18490[(2)]);
var inst_18468 = (inst_18467__$1 == null);
var inst_18469 = cljs.core.not(inst_18468);
var state_18490__$1 = (function (){var statearr_18499 = state_18490;
(statearr_18499[(8)] = inst_18467__$1);

return statearr_18499;
})();
if(inst_18469){
var statearr_18503_20092 = state_18490__$1;
(statearr_18503_20092[(1)] = (5));

} else {
var statearr_18504_20093 = state_18490__$1;
(statearr_18504_20093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (6))){
var state_18490__$1 = state_18490;
var statearr_18505_20094 = state_18490__$1;
(statearr_18505_20094[(2)] = null);

(statearr_18505_20094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (3))){
var inst_18484 = (state_18490[(2)]);
var inst_18485 = cljs.core.async.close_BANG_(out);
var state_18490__$1 = (function (){var statearr_18508 = state_18490;
(statearr_18508[(9)] = inst_18484);

return statearr_18508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18490__$1,inst_18485);
} else {
if((state_val_18491 === (2))){
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18490__$1,(4),ch);
} else {
if((state_val_18491 === (11))){
var inst_18467 = (state_18490[(8)]);
var inst_18476 = (state_18490[(2)]);
var inst_18464 = inst_18467;
var state_18490__$1 = (function (){var statearr_18514 = state_18490;
(statearr_18514[(10)] = inst_18476);

(statearr_18514[(7)] = inst_18464);

return statearr_18514;
})();
var statearr_18515_20098 = state_18490__$1;
(statearr_18515_20098[(2)] = null);

(statearr_18515_20098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (9))){
var inst_18467 = (state_18490[(8)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18490__$1,(11),out,inst_18467);
} else {
if((state_val_18491 === (5))){
var inst_18464 = (state_18490[(7)]);
var inst_18467 = (state_18490[(8)]);
var inst_18471 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18467,inst_18464);
var state_18490__$1 = state_18490;
if(inst_18471){
var statearr_18518_20100 = state_18490__$1;
(statearr_18518_20100[(1)] = (8));

} else {
var statearr_18519_20101 = state_18490__$1;
(statearr_18519_20101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (10))){
var inst_18479 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18520_20104 = state_18490__$1;
(statearr_18520_20104[(2)] = inst_18479);

(statearr_18520_20104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18491 === (8))){
var inst_18464 = (state_18490[(7)]);
var tmp18517 = inst_18464;
var inst_18464__$1 = tmp18517;
var state_18490__$1 = (function (){var statearr_18521 = state_18490;
(statearr_18521[(7)] = inst_18464__$1);

return statearr_18521;
})();
var statearr_18522_20107 = state_18490__$1;
(statearr_18522_20107[(2)] = null);

(statearr_18522_20107[(1)] = (2));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_18524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18524[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_18524[(1)] = (1));

return statearr_18524;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_18490){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_18490);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e18526){var ex__13885__auto__ = e18526;
var statearr_18527_20109 = state_18490;
(statearr_18527_20109[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_18490[(4)]))){
var statearr_18528_20110 = state_18490;
(statearr_18528_20110[(1)] = cljs.core.first((state_18490[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20113 = state_18490;
state_18490 = G__20113;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_18490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_18490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_18531 = f__15006__auto__();
(statearr_18531[(6)] = c__15005__auto___20083);

return statearr_18531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18536 = arguments.length;
switch (G__18536) {
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
var c__15005__auto___20122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_18596){
var state_val_18597 = (state_18596[(1)]);
if((state_val_18597 === (7))){
var inst_18592 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18600_20123 = state_18596__$1;
(statearr_18600_20123[(2)] = inst_18592);

(statearr_18600_20123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (1))){
var inst_18538 = (new Array(n));
var inst_18540 = inst_18538;
var inst_18541 = (0);
var state_18596__$1 = (function (){var statearr_18601 = state_18596;
(statearr_18601[(7)] = inst_18540);

(statearr_18601[(8)] = inst_18541);

return statearr_18601;
})();
var statearr_18602_20129 = state_18596__$1;
(statearr_18602_20129[(2)] = null);

(statearr_18602_20129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (4))){
var inst_18549 = (state_18596[(9)]);
var inst_18549__$1 = (state_18596[(2)]);
var inst_18550 = (inst_18549__$1 == null);
var inst_18551 = cljs.core.not(inst_18550);
var state_18596__$1 = (function (){var statearr_18607 = state_18596;
(statearr_18607[(9)] = inst_18549__$1);

return statearr_18607;
})();
if(inst_18551){
var statearr_18608_20132 = state_18596__$1;
(statearr_18608_20132[(1)] = (5));

} else {
var statearr_18609_20133 = state_18596__$1;
(statearr_18609_20133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (15))){
var inst_18586 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18611_20134 = state_18596__$1;
(statearr_18611_20134[(2)] = inst_18586);

(statearr_18611_20134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (13))){
var state_18596__$1 = state_18596;
var statearr_18612_20135 = state_18596__$1;
(statearr_18612_20135[(2)] = null);

(statearr_18612_20135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (6))){
var inst_18541 = (state_18596[(8)]);
var inst_18581 = (inst_18541 > (0));
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18581)){
var statearr_18615_20136 = state_18596__$1;
(statearr_18615_20136[(1)] = (12));

} else {
var statearr_18616_20138 = state_18596__$1;
(statearr_18616_20138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (3))){
var inst_18594 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18596__$1,inst_18594);
} else {
if((state_val_18597 === (12))){
var inst_18540 = (state_18596[(7)]);
var inst_18584 = cljs.core.vec(inst_18540);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18596__$1,(15),out,inst_18584);
} else {
if((state_val_18597 === (2))){
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18596__$1,(4),ch);
} else {
if((state_val_18597 === (11))){
var inst_18574 = (state_18596[(2)]);
var inst_18575 = (new Array(n));
var inst_18540 = inst_18575;
var inst_18541 = (0);
var state_18596__$1 = (function (){var statearr_18619 = state_18596;
(statearr_18619[(7)] = inst_18540);

(statearr_18619[(10)] = inst_18574);

(statearr_18619[(8)] = inst_18541);

return statearr_18619;
})();
var statearr_18620_20139 = state_18596__$1;
(statearr_18620_20139[(2)] = null);

(statearr_18620_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (9))){
var inst_18540 = (state_18596[(7)]);
var inst_18572 = cljs.core.vec(inst_18540);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18596__$1,(11),out,inst_18572);
} else {
if((state_val_18597 === (5))){
var inst_18557 = (state_18596[(11)]);
var inst_18549 = (state_18596[(9)]);
var inst_18540 = (state_18596[(7)]);
var inst_18541 = (state_18596[(8)]);
var inst_18553 = (inst_18540[inst_18541] = inst_18549);
var inst_18557__$1 = (inst_18541 + (1));
var inst_18558 = (inst_18557__$1 < n);
var state_18596__$1 = (function (){var statearr_18621 = state_18596;
(statearr_18621[(11)] = inst_18557__$1);

(statearr_18621[(12)] = inst_18553);

return statearr_18621;
})();
if(cljs.core.truth_(inst_18558)){
var statearr_18622_20142 = state_18596__$1;
(statearr_18622_20142[(1)] = (8));

} else {
var statearr_18623_20143 = state_18596__$1;
(statearr_18623_20143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (14))){
var inst_18589 = (state_18596[(2)]);
var inst_18590 = cljs.core.async.close_BANG_(out);
var state_18596__$1 = (function (){var statearr_18627 = state_18596;
(statearr_18627[(13)] = inst_18589);

return statearr_18627;
})();
var statearr_18628_20144 = state_18596__$1;
(statearr_18628_20144[(2)] = inst_18590);

(statearr_18628_20144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (10))){
var inst_18578 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18629_20145 = state_18596__$1;
(statearr_18629_20145[(2)] = inst_18578);

(statearr_18629_20145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (8))){
var inst_18557 = (state_18596[(11)]);
var inst_18540 = (state_18596[(7)]);
var tmp18624 = inst_18540;
var inst_18540__$1 = tmp18624;
var inst_18541 = inst_18557;
var state_18596__$1 = (function (){var statearr_18632 = state_18596;
(statearr_18632[(7)] = inst_18540__$1);

(statearr_18632[(8)] = inst_18541);

return statearr_18632;
})();
var statearr_18636_20146 = state_18596__$1;
(statearr_18636_20146[(2)] = null);

(statearr_18636_20146[(1)] = (2));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_18640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18640[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_18640[(1)] = (1));

return statearr_18640;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_18596){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_18596);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e18641){var ex__13885__auto__ = e18641;
var statearr_18642_20152 = state_18596;
(statearr_18642_20152[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_18596[(4)]))){
var statearr_18643_20153 = state_18596;
(statearr_18643_20153[(1)] = cljs.core.first((state_18596[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20154 = state_18596;
state_18596 = G__20154;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_18596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_18596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_18644 = f__15006__auto__();
(statearr_18644[(6)] = c__15005__auto___20122);

return statearr_18644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18646 = arguments.length;
switch (G__18646) {
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
var c__15005__auto___20164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15006__auto__ = (function (){var switch__13881__auto__ = (function (state_18701){
var state_val_18702 = (state_18701[(1)]);
if((state_val_18702 === (7))){
var inst_18693 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18703_20167 = state_18701__$1;
(statearr_18703_20167[(2)] = inst_18693);

(statearr_18703_20167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (1))){
var inst_18651 = [];
var inst_18652 = inst_18651;
var inst_18653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18701__$1 = (function (){var statearr_18704 = state_18701;
(statearr_18704[(7)] = inst_18652);

(statearr_18704[(8)] = inst_18653);

return statearr_18704;
})();
var statearr_18705_20168 = state_18701__$1;
(statearr_18705_20168[(2)] = null);

(statearr_18705_20168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (4))){
var inst_18656 = (state_18701[(9)]);
var inst_18656__$1 = (state_18701[(2)]);
var inst_18657 = (inst_18656__$1 == null);
var inst_18658 = cljs.core.not(inst_18657);
var state_18701__$1 = (function (){var statearr_18706 = state_18701;
(statearr_18706[(9)] = inst_18656__$1);

return statearr_18706;
})();
if(inst_18658){
var statearr_18707_20174 = state_18701__$1;
(statearr_18707_20174[(1)] = (5));

} else {
var statearr_18708_20175 = state_18701__$1;
(statearr_18708_20175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (15))){
var inst_18652 = (state_18701[(7)]);
var inst_18685 = cljs.core.vec(inst_18652);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18701__$1,(18),out,inst_18685);
} else {
if((state_val_18702 === (13))){
var inst_18680 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18713_20176 = state_18701__$1;
(statearr_18713_20176[(2)] = inst_18680);

(statearr_18713_20176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (6))){
var inst_18652 = (state_18701[(7)]);
var inst_18682 = inst_18652.length;
var inst_18683 = (inst_18682 > (0));
var state_18701__$1 = state_18701;
if(cljs.core.truth_(inst_18683)){
var statearr_18714_20179 = state_18701__$1;
(statearr_18714_20179[(1)] = (15));

} else {
var statearr_18715_20180 = state_18701__$1;
(statearr_18715_20180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (17))){
var inst_18690 = (state_18701[(2)]);
var inst_18691 = cljs.core.async.close_BANG_(out);
var state_18701__$1 = (function (){var statearr_18716 = state_18701;
(statearr_18716[(10)] = inst_18690);

return statearr_18716;
})();
var statearr_18717_20181 = state_18701__$1;
(statearr_18717_20181[(2)] = inst_18691);

(statearr_18717_20181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (3))){
var inst_18696 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18701__$1,inst_18696);
} else {
if((state_val_18702 === (12))){
var inst_18652 = (state_18701[(7)]);
var inst_18671 = cljs.core.vec(inst_18652);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18701__$1,(14),out,inst_18671);
} else {
if((state_val_18702 === (2))){
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18701__$1,(4),ch);
} else {
if((state_val_18702 === (11))){
var inst_18652 = (state_18701[(7)]);
var inst_18660 = (state_18701[(11)]);
var inst_18656 = (state_18701[(9)]);
var inst_18668 = inst_18652.push(inst_18656);
var tmp18721 = inst_18652;
var inst_18652__$1 = tmp18721;
var inst_18653 = inst_18660;
var state_18701__$1 = (function (){var statearr_18723 = state_18701;
(statearr_18723[(7)] = inst_18652__$1);

(statearr_18723[(12)] = inst_18668);

(statearr_18723[(8)] = inst_18653);

return statearr_18723;
})();
var statearr_18728_20188 = state_18701__$1;
(statearr_18728_20188[(2)] = null);

(statearr_18728_20188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (9))){
var inst_18653 = (state_18701[(8)]);
var inst_18664 = cljs.core.keyword_identical_QMARK_(inst_18653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18701__$1 = state_18701;
var statearr_18729_20190 = state_18701__$1;
(statearr_18729_20190[(2)] = inst_18664);

(statearr_18729_20190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (5))){
var inst_18660 = (state_18701[(11)]);
var inst_18661 = (state_18701[(13)]);
var inst_18656 = (state_18701[(9)]);
var inst_18653 = (state_18701[(8)]);
var inst_18660__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18656) : f.call(null, inst_18656));
var inst_18661__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18660__$1,inst_18653);
var state_18701__$1 = (function (){var statearr_18732 = state_18701;
(statearr_18732[(11)] = inst_18660__$1);

(statearr_18732[(13)] = inst_18661__$1);

return statearr_18732;
})();
if(inst_18661__$1){
var statearr_18735_20191 = state_18701__$1;
(statearr_18735_20191[(1)] = (8));

} else {
var statearr_18737_20192 = state_18701__$1;
(statearr_18737_20192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (14))){
var inst_18660 = (state_18701[(11)]);
var inst_18656 = (state_18701[(9)]);
var inst_18673 = (state_18701[(2)]);
var inst_18676 = [];
var inst_18677 = inst_18676.push(inst_18656);
var inst_18652 = inst_18676;
var inst_18653 = inst_18660;
var state_18701__$1 = (function (){var statearr_18741 = state_18701;
(statearr_18741[(14)] = inst_18677);

(statearr_18741[(7)] = inst_18652);

(statearr_18741[(15)] = inst_18673);

(statearr_18741[(8)] = inst_18653);

return statearr_18741;
})();
var statearr_18744_20193 = state_18701__$1;
(statearr_18744_20193[(2)] = null);

(statearr_18744_20193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (16))){
var state_18701__$1 = state_18701;
var statearr_18745_20198 = state_18701__$1;
(statearr_18745_20198[(2)] = null);

(statearr_18745_20198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (10))){
var inst_18666 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
if(cljs.core.truth_(inst_18666)){
var statearr_18746_20199 = state_18701__$1;
(statearr_18746_20199[(1)] = (11));

} else {
var statearr_18747_20200 = state_18701__$1;
(statearr_18747_20200[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (18))){
var inst_18687 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18748_20201 = state_18701__$1;
(statearr_18748_20201[(2)] = inst_18687);

(statearr_18748_20201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (8))){
var inst_18661 = (state_18701[(13)]);
var state_18701__$1 = state_18701;
var statearr_18749_20202 = state_18701__$1;
(statearr_18749_20202[(2)] = inst_18661);

(statearr_18749_20202[(1)] = (10));


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
var cljs$core$async$state_machine__13882__auto__ = null;
var cljs$core$async$state_machine__13882__auto____0 = (function (){
var statearr_18754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18754[(0)] = cljs$core$async$state_machine__13882__auto__);

(statearr_18754[(1)] = (1));

return statearr_18754;
});
var cljs$core$async$state_machine__13882__auto____1 = (function (state_18701){
while(true){
var ret_value__13883__auto__ = (function (){try{while(true){
var result__13884__auto__ = switch__13881__auto__(state_18701);
if(cljs.core.keyword_identical_QMARK_(result__13884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13884__auto__;
}
break;
}
}catch (e18755){var ex__13885__auto__ = e18755;
var statearr_18756_20213 = state_18701;
(statearr_18756_20213[(2)] = ex__13885__auto__);


if(cljs.core.seq((state_18701[(4)]))){
var statearr_18757_20214 = state_18701;
(statearr_18757_20214[(1)] = cljs.core.first((state_18701[(4)])));

} else {
throw ex__13885__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20218 = state_18701;
state_18701 = G__20218;
continue;
} else {
return ret_value__13883__auto__;
}
break;
}
});
cljs$core$async$state_machine__13882__auto__ = function(state_18701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13882__auto____1.call(this,state_18701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13882__auto____0;
cljs$core$async$state_machine__13882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13882__auto____1;
return cljs$core$async$state_machine__13882__auto__;
})()
})();
var state__15007__auto__ = (function (){var statearr_18764 = f__15006__auto__();
(statearr_18764[(6)] = c__15005__auto___20164);

return statearr_18764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15007__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
