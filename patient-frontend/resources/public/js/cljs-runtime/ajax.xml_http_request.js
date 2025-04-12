goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12163 = e.target.readyState;
var fexpr__12162 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12162.cljs$core$IFn$_invoke$arity$1 ? fexpr__12162.cljs$core$IFn$_invoke$arity$1(G__12163) : fexpr__12162.call(null, G__12163));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null, "xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12172,handler){
var map__12173 = p__12172;
var map__12173__$1 = cljs.core.__destructure_map(map__12173);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12173__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12173__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12173__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12173__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12173__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12173__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12173__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12169_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12169_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12206 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12206)){
var response_type_12207 = temp__5804__auto___12206;
(this$__$1.responseType = cljs.core.name(response_type_12207));
} else {
}

var seq__12176_12208 = cljs.core.seq(headers);
var chunk__12177_12209 = null;
var count__12178_12210 = (0);
var i__12179_12211 = (0);
while(true){
if((i__12179_12211 < count__12178_12210)){
var vec__12189_12212 = chunk__12177_12209.cljs$core$IIndexed$_nth$arity$2(null, i__12179_12211);
var k_12213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12189_12212,(0),null);
var v_12214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12189_12212,(1),null);
this$__$1.setRequestHeader(k_12213,v_12214);


var G__12215 = seq__12176_12208;
var G__12216 = chunk__12177_12209;
var G__12217 = count__12178_12210;
var G__12218 = (i__12179_12211 + (1));
seq__12176_12208 = G__12215;
chunk__12177_12209 = G__12216;
count__12178_12210 = G__12217;
i__12179_12211 = G__12218;
continue;
} else {
var temp__5804__auto___12219 = cljs.core.seq(seq__12176_12208);
if(temp__5804__auto___12219){
var seq__12176_12220__$1 = temp__5804__auto___12219;
if(cljs.core.chunked_seq_QMARK_(seq__12176_12220__$1)){
var c__5525__auto___12221 = cljs.core.chunk_first(seq__12176_12220__$1);
var G__12222 = cljs.core.chunk_rest(seq__12176_12220__$1);
var G__12223 = c__5525__auto___12221;
var G__12224 = cljs.core.count(c__5525__auto___12221);
var G__12225 = (0);
seq__12176_12208 = G__12222;
chunk__12177_12209 = G__12223;
count__12178_12210 = G__12224;
i__12179_12211 = G__12225;
continue;
} else {
var vec__12194_12227 = cljs.core.first(seq__12176_12220__$1);
var k_12228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12194_12227,(0),null);
var v_12229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12194_12227,(1),null);
this$__$1.setRequestHeader(k_12228,v_12229);


var G__12230 = cljs.core.next(seq__12176_12220__$1);
var G__12231 = null;
var G__12232 = (0);
var G__12233 = (0);
seq__12176_12208 = G__12230;
chunk__12177_12209 = G__12231;
count__12178_12210 = G__12232;
i__12179_12211 = G__12233;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
