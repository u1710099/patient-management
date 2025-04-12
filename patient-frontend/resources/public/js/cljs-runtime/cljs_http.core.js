goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__22667 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__22667.cljs$core$IFn$_invoke$arity$1 ? fexpr__22667.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__22667.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22668){
var vec__22669 = p__22668;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__22672 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__22672)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__22672)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__22672)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__22672)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__22672)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22672)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22672)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__22673){
var map__22674 = p__22673;
var map__22674__$1 = cljs.core.__destructure_map(map__22674);
var request = map__22674__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22674__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22674__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22674__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__22675 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__22675,default_headers);

cljs_http.core.apply_response_type_BANG_(G__22675,response_type);

G__22675.setTimeoutInterval(timeout);

G__22675.setWithCredentials(send_credentials);

return G__22675;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__22676){
var map__22677 = p__22676;
var map__22677__$1 = cljs.core.__destructure_map(map__22677);
var request = map__22677__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5002__auto__ = request_method;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__22678 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__22678) : cljs_http.core.error_kw.call(null,G__22678));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_22718 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__22679_22719 = xhr;
G__22679_22719.setProgressEventsEnabled(true);

G__22679_22719.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_22718,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__22679_22719.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_22718,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14834__auto___22720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_22690){
var state_val_22691 = (state_22690[(1)]);
if((state_val_22691 === (1))){
var state_22690__$1 = state_22690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22690__$1,(2),cancel);
} else {
if((state_val_22691 === (2))){
var inst_22681 = (state_22690[(2)]);
var inst_22682 = xhr.isComplete();
var inst_22683 = cljs.core.not(inst_22682);
var state_22690__$1 = (function (){var statearr_22692 = state_22690;
(statearr_22692[(7)] = inst_22681);

return statearr_22692;
})();
if(inst_22683){
var statearr_22693_22721 = state_22690__$1;
(statearr_22693_22721[(1)] = (3));

} else {
var statearr_22694_22722 = state_22690__$1;
(statearr_22694_22722[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (3))){
var inst_22685 = xhr.abort();
var state_22690__$1 = state_22690;
var statearr_22695_22723 = state_22690__$1;
(statearr_22695_22723[(2)] = inst_22685);

(statearr_22695_22723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (4))){
var state_22690__$1 = state_22690;
var statearr_22696_22724 = state_22690__$1;
(statearr_22696_22724[(2)] = null);

(statearr_22696_22724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (5))){
var inst_22688 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22690__$1,inst_22688);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__13643__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13643__auto____0 = (function (){
var statearr_22697 = [null,null,null,null,null,null,null,null];
(statearr_22697[(0)] = cljs_http$core$xhr_$_state_machine__13643__auto__);

(statearr_22697[(1)] = (1));

return statearr_22697;
});
var cljs_http$core$xhr_$_state_machine__13643__auto____1 = (function (state_22690){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_22690);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e22698){var ex__13646__auto__ = e22698;
var statearr_22699_22725 = state_22690;
(statearr_22699_22725[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_22690[(4)]))){
var statearr_22700_22726 = state_22690;
(statearr_22700_22726[(1)] = cljs.core.first((state_22690[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22727 = state_22690;
state_22690 = G__22727;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13643__auto__ = function(state_22690){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13643__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13643__auto____1.call(this,state_22690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13643__auto____0;
cljs_http$core$xhr_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13643__auto____1;
return cljs_http$core$xhr_$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_22701 = f__14835__auto__();
(statearr_22701[(6)] = c__14834__auto___22720);

return statearr_22701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__22702){
var map__22703 = p__22702;
var map__22703__$1 = cljs.core.__destructure_map(map__22703);
var request = map__22703__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22703__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22703__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22703__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22703__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_22728 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_22728], null));

if(cljs.core.truth_(cancel)){
var c__14834__auto___22729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14835__auto__ = (function (){var switch__13642__auto__ = (function (state_22708){
var state_val_22709 = (state_22708[(1)]);
if((state_val_22709 === (1))){
var state_22708__$1 = state_22708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22708__$1,(2),cancel);
} else {
if((state_val_22709 === (2))){
var inst_22705 = (state_22708[(2)]);
var inst_22706 = jsonp.cancel(req_22728);
var state_22708__$1 = (function (){var statearr_22710 = state_22708;
(statearr_22710[(7)] = inst_22705);

return statearr_22710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22708__$1,inst_22706);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__13643__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13643__auto____0 = (function (){
var statearr_22711 = [null,null,null,null,null,null,null,null];
(statearr_22711[(0)] = cljs_http$core$jsonp_$_state_machine__13643__auto__);

(statearr_22711[(1)] = (1));

return statearr_22711;
});
var cljs_http$core$jsonp_$_state_machine__13643__auto____1 = (function (state_22708){
while(true){
var ret_value__13644__auto__ = (function (){try{while(true){
var result__13645__auto__ = switch__13642__auto__(state_22708);
if(cljs.core.keyword_identical_QMARK_(result__13645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13645__auto__;
}
break;
}
}catch (e22712){var ex__13646__auto__ = e22712;
var statearr_22713_22730 = state_22708;
(statearr_22713_22730[(2)] = ex__13646__auto__);


if(cljs.core.seq((state_22708[(4)]))){
var statearr_22714_22731 = state_22708;
(statearr_22714_22731[(1)] = cljs.core.first((state_22708[(4)])));

} else {
throw ex__13646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22732 = state_22708;
state_22708 = G__22732;
continue;
} else {
return ret_value__13644__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13643__auto__ = function(state_22708){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13643__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13643__auto____1.call(this,state_22708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13643__auto____0;
cljs_http$core$jsonp_$_state_machine__13643__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13643__auto____1;
return cljs_http$core$jsonp_$_state_machine__13643__auto__;
})()
})();
var state__14836__auto__ = (function (){var statearr_22715 = f__14835__auto__();
(statearr_22715[(6)] = c__14834__auto___22729);

return statearr_22715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14836__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__22716){
var map__22717 = p__22716;
var map__22717__$1 = cljs.core.__destructure_map(map__22717);
var request = map__22717__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22717__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
