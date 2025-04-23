goog.provide('patient_frontend.core');
patient_frontend.core.api_url = "http://localhost:3000/patients";
patient_frontend.core.success_status = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(201),null,(200),null], null), null);
patient_frontend.core.form_fields = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196),new cljs.core.Keyword(null,"label","label",1718410804),"Full Name",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("patients","gender","patients/gender",383440175),new cljs.core.Keyword(null,"label","label",1718410804),"Gender",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("patients","birth_date","patients/birth_date",-281213603),new cljs.core.Keyword(null,"label","label",1718410804),"Birth Date",new cljs.core.Keyword(null,"type","type",1174270348),"date"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("patients","address","patients/address",-343819592),new cljs.core.Keyword(null,"label","label",1718410804),"Address",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("patients","oms_number","patients/oms_number",-843374901),new cljs.core.Keyword(null,"label","label",1718410804),"OMS Number",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null);
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.root !== 'undefined')){
} else {
patient_frontend.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.patients !== 'undefined')){
} else {
patient_frontend.core.patients = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.current_patient !== 'undefined')){
} else {
patient_frontend.core.current_patient = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.loading_QMARK_ !== 'undefined')){
} else {
patient_frontend.core.loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.error_msg !== 'undefined')){
} else {
patient_frontend.core.error_msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.form_data !== 'undefined')){
} else {
patient_frontend.core.form_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
patient_frontend.core.handle_api_response = (function patient_frontend$core$handle_api_response(response,success_fn,error_message){
cljs.core.reset_BANG_(patient_frontend.core.loading_QMARK_,false);

if(cljs.core.truth_((function (){var G__23296 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (patient_frontend.core.success_status.cljs$core$IFn$_invoke$arity$1 ? patient_frontend.core.success_status.cljs$core$IFn$_invoke$arity$1(G__23296) : patient_frontend.core.success_status.call(null,G__23296));
})())){
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(response) : success_fn.call(null,response));
} else {
return cljs.core.reset_BANG_(patient_frontend.core.error_msg,error_message);
}
});
patient_frontend.core.fetch_patients = (function patient_frontend$core$fetch_patients(){
cljs.core.reset_BANG_(patient_frontend.core.loading_QMARK_,true);

cljs.core.reset_BANG_(patient_frontend.core.error_msg,null);

var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_23310){
var state_val_23311 = (state_23310[(1)]);
if((state_val_23311 === (1))){
var inst_23298 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23299 = ["Accept"];
var inst_23300 = ["application/json"];
var inst_23301 = cljs.core.PersistentHashMap.fromArrays(inst_23299,inst_23300);
var inst_23302 = [false,inst_23301];
var inst_23303 = cljs.core.PersistentHashMap.fromArrays(inst_23298,inst_23302);
var inst_23304 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(patient_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23303], 0));
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23310__$1,(2),inst_23304);
} else {
if((state_val_23311 === (2))){
var inst_23306 = (state_23310[(2)]);
var inst_23307 = (function (){var response = inst_23306;
return (function (p1__23297_SHARP_){
return cljs.core.reset_BANG_(patient_frontend.core.patients,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__23297_SHARP_));
});
})();
var inst_23308 = patient_frontend.core.handle_api_response(inst_23306,inst_23307,"Failed to fetch patients");
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23310__$1,inst_23308);
} else {
return null;
}
}
});
return (function() {
var patient_frontend$core$fetch_patients_$_state_machine__13957__auto__ = null;
var patient_frontend$core$fetch_patients_$_state_machine__13957__auto____0 = (function (){
var statearr_23312 = [null,null,null,null,null,null,null];
(statearr_23312[(0)] = patient_frontend$core$fetch_patients_$_state_machine__13957__auto__);

(statearr_23312[(1)] = (1));

return statearr_23312;
});
var patient_frontend$core$fetch_patients_$_state_machine__13957__auto____1 = (function (state_23310){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_23310);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e23313){var ex__13960__auto__ = e23313;
var statearr_23314_23389 = state_23310;
(statearr_23314_23389[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_23310[(4)]))){
var statearr_23315_23390 = state_23310;
(statearr_23315_23390[(1)] = cljs.core.first((state_23310[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23391 = state_23310;
state_23310 = G__23391;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
patient_frontend$core$fetch_patients_$_state_machine__13957__auto__ = function(state_23310){
switch(arguments.length){
case 0:
return patient_frontend$core$fetch_patients_$_state_machine__13957__auto____0.call(this);
case 1:
return patient_frontend$core$fetch_patients_$_state_machine__13957__auto____1.call(this,state_23310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patient_frontend$core$fetch_patients_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = patient_frontend$core$fetch_patients_$_state_machine__13957__auto____0;
patient_frontend$core$fetch_patients_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = patient_frontend$core$fetch_patients_$_state_machine__13957__auto____1;
return patient_frontend$core$fetch_patients_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_23316 = f__15046__auto__();
(statearr_23316[(6)] = c__15045__auto__);

return statearr_23316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
});
patient_frontend.core.create_patient = (function patient_frontend$core$create_patient(patient_data){
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_23329){
var state_val_23330 = (state_23329[(1)]);
if((state_val_23330 === (1))){
var inst_23317 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23318 = ["Content-Type","Accept"];
var inst_23319 = ["application/json","application/json"];
var inst_23320 = cljs.core.PersistentHashMap.fromArrays(inst_23318,inst_23319);
var inst_23321 = [patient_data,false,inst_23320];
var inst_23322 = cljs.core.PersistentHashMap.fromArrays(inst_23317,inst_23321);
var inst_23323 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(patient_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23322], 0));
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23329__$1,(2),inst_23323);
} else {
if((state_val_23330 === (2))){
var inst_23325 = (state_23329[(2)]);
var inst_23326 = (function (){var response = inst_23325;
return (function (){
patient_frontend.core.fetch_patients();

cljs.core.reset_BANG_(patient_frontend.core.current_patient,null);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,cljs.core.PersistentArrayMap.EMPTY);
});
})();
var inst_23327 = patient_frontend.core.handle_api_response(inst_23325,inst_23326,"Failed to create patient");
var state_23329__$1 = state_23329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23329__$1,inst_23327);
} else {
return null;
}
}
});
return (function() {
var patient_frontend$core$create_patient_$_state_machine__13957__auto__ = null;
var patient_frontend$core$create_patient_$_state_machine__13957__auto____0 = (function (){
var statearr_23331 = [null,null,null,null,null,null,null];
(statearr_23331[(0)] = patient_frontend$core$create_patient_$_state_machine__13957__auto__);

(statearr_23331[(1)] = (1));

return statearr_23331;
});
var patient_frontend$core$create_patient_$_state_machine__13957__auto____1 = (function (state_23329){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_23329);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e23332){var ex__13960__auto__ = e23332;
var statearr_23333_23392 = state_23329;
(statearr_23333_23392[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_23329[(4)]))){
var statearr_23334_23393 = state_23329;
(statearr_23334_23393[(1)] = cljs.core.first((state_23329[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23394 = state_23329;
state_23329 = G__23394;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
patient_frontend$core$create_patient_$_state_machine__13957__auto__ = function(state_23329){
switch(arguments.length){
case 0:
return patient_frontend$core$create_patient_$_state_machine__13957__auto____0.call(this);
case 1:
return patient_frontend$core$create_patient_$_state_machine__13957__auto____1.call(this,state_23329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patient_frontend$core$create_patient_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = patient_frontend$core$create_patient_$_state_machine__13957__auto____0;
patient_frontend$core$create_patient_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = patient_frontend$core$create_patient_$_state_machine__13957__auto____1;
return patient_frontend$core$create_patient_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_23335 = f__15046__auto__();
(statearr_23335[(6)] = c__15045__auto__);

return statearr_23335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
});
patient_frontend.core.update_patient = (function patient_frontend$core$update_patient(patient_id,patient_data){
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_23349){
var state_val_23350 = (state_23349[(1)]);
if((state_val_23350 === (1))){
var inst_23336 = [patient_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join('');
var inst_23337 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23338 = ["Content-Type","Accept"];
var inst_23339 = ["application/json","application/json"];
var inst_23340 = cljs.core.PersistentHashMap.fromArrays(inst_23338,inst_23339);
var inst_23341 = [patient_data,false,inst_23340];
var inst_23342 = cljs.core.PersistentHashMap.fromArrays(inst_23337,inst_23341);
var inst_23343 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_23336,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23342], 0));
var state_23349__$1 = state_23349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23349__$1,(2),inst_23343);
} else {
if((state_val_23350 === (2))){
var inst_23345 = (state_23349[(2)]);
var inst_23346 = (function (){var response = inst_23345;
return (function (){
patient_frontend.core.fetch_patients();

cljs.core.reset_BANG_(patient_frontend.core.current_patient,null);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,cljs.core.PersistentArrayMap.EMPTY);
});
})();
var inst_23347 = patient_frontend.core.handle_api_response(inst_23345,inst_23346,"Failed to update patient");
var state_23349__$1 = state_23349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23349__$1,inst_23347);
} else {
return null;
}
}
});
return (function() {
var patient_frontend$core$update_patient_$_state_machine__13957__auto__ = null;
var patient_frontend$core$update_patient_$_state_machine__13957__auto____0 = (function (){
var statearr_23351 = [null,null,null,null,null,null,null];
(statearr_23351[(0)] = patient_frontend$core$update_patient_$_state_machine__13957__auto__);

(statearr_23351[(1)] = (1));

return statearr_23351;
});
var patient_frontend$core$update_patient_$_state_machine__13957__auto____1 = (function (state_23349){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_23349);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e23352){var ex__13960__auto__ = e23352;
var statearr_23353_23395 = state_23349;
(statearr_23353_23395[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_23349[(4)]))){
var statearr_23354_23396 = state_23349;
(statearr_23354_23396[(1)] = cljs.core.first((state_23349[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23397 = state_23349;
state_23349 = G__23397;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
patient_frontend$core$update_patient_$_state_machine__13957__auto__ = function(state_23349){
switch(arguments.length){
case 0:
return patient_frontend$core$update_patient_$_state_machine__13957__auto____0.call(this);
case 1:
return patient_frontend$core$update_patient_$_state_machine__13957__auto____1.call(this,state_23349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patient_frontend$core$update_patient_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = patient_frontend$core$update_patient_$_state_machine__13957__auto____0;
patient_frontend$core$update_patient_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = patient_frontend$core$update_patient_$_state_machine__13957__auto____1;
return patient_frontend$core$update_patient_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_23355 = f__15046__auto__();
(statearr_23355[(6)] = c__15045__auto__);

return statearr_23355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
});
patient_frontend.core.delete_patient = (function patient_frontend$core$delete_patient(patient_id){
var c__15045__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15046__auto__ = (function (){var switch__13956__auto__ = (function (state_23369){
var state_val_23370 = (state_23369[(1)]);
if((state_val_23370 === (1))){
var inst_23356 = [patient_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join('');
var inst_23357 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23358 = ["Accept"];
var inst_23359 = ["application/json"];
var inst_23360 = cljs.core.PersistentHashMap.fromArrays(inst_23358,inst_23359);
var inst_23361 = [false,inst_23360];
var inst_23362 = cljs.core.PersistentHashMap.fromArrays(inst_23357,inst_23361);
var inst_23363 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_23356,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23362], 0));
var state_23369__$1 = state_23369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23369__$1,(2),inst_23363);
} else {
if((state_val_23370 === (2))){
var inst_23365 = (state_23369[(2)]);
var inst_23366 = (function (){var response = inst_23365;
return (function (){
return patient_frontend.core.fetch_patients();
});
})();
var inst_23367 = patient_frontend.core.handle_api_response(inst_23365,inst_23366,"Failed to delete patient");
var state_23369__$1 = state_23369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23369__$1,inst_23367);
} else {
return null;
}
}
});
return (function() {
var patient_frontend$core$delete_patient_$_state_machine__13957__auto__ = null;
var patient_frontend$core$delete_patient_$_state_machine__13957__auto____0 = (function (){
var statearr_23371 = [null,null,null,null,null,null,null];
(statearr_23371[(0)] = patient_frontend$core$delete_patient_$_state_machine__13957__auto__);

(statearr_23371[(1)] = (1));

return statearr_23371;
});
var patient_frontend$core$delete_patient_$_state_machine__13957__auto____1 = (function (state_23369){
while(true){
var ret_value__13958__auto__ = (function (){try{while(true){
var result__13959__auto__ = switch__13956__auto__(state_23369);
if(cljs.core.keyword_identical_QMARK_(result__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13959__auto__;
}
break;
}
}catch (e23372){var ex__13960__auto__ = e23372;
var statearr_23373_23398 = state_23369;
(statearr_23373_23398[(2)] = ex__13960__auto__);


if(cljs.core.seq((state_23369[(4)]))){
var statearr_23374_23399 = state_23369;
(statearr_23374_23399[(1)] = cljs.core.first((state_23369[(4)])));

} else {
throw ex__13960__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23369;
state_23369 = G__23400;
continue;
} else {
return ret_value__13958__auto__;
}
break;
}
});
patient_frontend$core$delete_patient_$_state_machine__13957__auto__ = function(state_23369){
switch(arguments.length){
case 0:
return patient_frontend$core$delete_patient_$_state_machine__13957__auto____0.call(this);
case 1:
return patient_frontend$core$delete_patient_$_state_machine__13957__auto____1.call(this,state_23369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patient_frontend$core$delete_patient_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$0 = patient_frontend$core$delete_patient_$_state_machine__13957__auto____0;
patient_frontend$core$delete_patient_$_state_machine__13957__auto__.cljs$core$IFn$_invoke$arity$1 = patient_frontend$core$delete_patient_$_state_machine__13957__auto____1;
return patient_frontend$core$delete_patient_$_state_machine__13957__auto__;
})()
})();
var state__15047__auto__ = (function (){var statearr_23375 = f__15046__auto__();
(statearr_23375[(6)] = c__15045__auto__);

return statearr_23375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15047__auto__);
}));

return c__15045__auto__;
});
patient_frontend.core.patient_list = (function patient_frontend$core$patient_list(){
var patients_data = cljs.core.deref(patient_frontend.core.patients);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Patient List"], null),(cljs.core.truth_(cljs.core.deref(patient_frontend.core.loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):(cljs.core.truth_(cljs.core.deref(patient_frontend.core.error_msg))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(patient_frontend.core.error_msg)], null):((cljs.core.empty_QMARK_(patients_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No patients found."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function patient_frontend$core$patient_list_$_iter__23376(s__23377){
return (new cljs.core.LazySeq(null,(function (){
var s__23377__$1 = s__23377;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23377__$1);
if(temp__5804__auto__){
var s__23377__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23377__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23377__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23379 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23378 = (0);
while(true){
if((i__23378 < size__5479__auto__)){
var patient = cljs.core._nth(c__5478__auto__,i__23378);
cljs.core.chunk_append(b__23379,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23378,patient,c__5478__auto__,size__5479__auto__,b__23379,s__23377__$2,temp__5804__auto__,patients_data){
return (function (){
cljs.core.reset_BANG_(patient_frontend.core.current_patient,patient);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,patient);
});})(i__23378,patient,c__5478__auto__,size__5479__auto__,b__23379,s__23377__$2,temp__5804__auto__,patients_data))
], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23378,patient,c__5478__auto__,size__5479__auto__,b__23379,s__23377__$2,temp__5804__auto__,patients_data){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient));
});})(i__23378,patient,c__5478__auto__,size__5479__auto__,b__23379,s__23377__$2,temp__5804__auto__,patients_data))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient)], null)));

var G__23401 = (i__23378 + (1));
i__23378 = G__23401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23379),patient_frontend$core$patient_list_$_iter__23376(cljs.core.chunk_rest(s__23377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23379),null);
}
} else {
var patient = cljs.core.first(s__23377__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__23377__$2,temp__5804__auto__,patients_data){
return (function (){
cljs.core.reset_BANG_(patient_frontend.core.current_patient,patient);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,patient);
});})(patient,s__23377__$2,temp__5804__auto__,patients_data))
], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__23377__$2,temp__5804__auto__,patients_data){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient));
});})(patient,s__23377__$2,temp__5804__auto__,patients_data))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient)], null)),patient_frontend$core$patient_list_$_iter__23376(cljs.core.rest(s__23377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(patients_data);
})())], null)
)))], null);
});
patient_frontend.core.form_input = (function patient_frontend$core$form_input(p__23380){
var map__23381 = p__23380;
var map__23381__$1 = cljs.core.__destructure_map(map__23381);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23381__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = value;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
patient_frontend.core.patient_form = (function patient_frontend$core$patient_form(){
var patient = cljs.core.deref(patient_frontend.core.current_patient);
var form_values = cljs.core.deref(patient_frontend.core.form_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(cljs.core.truth_(patient)?"Edit Patient":"Add Patient")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(patient)){
return patient_frontend.core.update_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient),form_values);
} else {
return patient_frontend.core.create_patient(form_values);
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-fields","div.form-fields",1022127983),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function patient_frontend$core$patient_form_$_iter__23383(s__23384){
return (new cljs.core.LazySeq(null,(function (){
var s__23384__$1 = s__23384;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23384__$1);
if(temp__5804__auto__){
var s__23384__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23384__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23384__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23386 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23385 = (0);
while(true){
if((i__23385 < size__5479__auto__)){
var map__23387 = cljs.core._nth(c__5478__auto__,i__23385);
var map__23387__$1 = cljs.core.__destructure_map(map__23387);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23387__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23387__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23387__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append(b__23386,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(form_values,id,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__23385,map__23387,map__23387__$1,id,label,type,c__5478__auto__,size__5479__auto__,b__23386,s__23384__$2,temp__5804__auto__,patient,form_values){
return (function (p1__23382_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patient_frontend.core.form_data,cljs.core.assoc,id,p1__23382_SHARP_.target.value);
});})(i__23385,map__23387,map__23387__$1,id,label,type,c__5478__auto__,size__5479__auto__,b__23386,s__23384__$2,temp__5804__auto__,patient,form_values))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__23402 = (i__23385 + (1));
i__23385 = G__23402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23386),patient_frontend$core$patient_form_$_iter__23383(cljs.core.chunk_rest(s__23384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23386),null);
}
} else {
var map__23388 = cljs.core.first(s__23384__$2);
var map__23388__$1 = cljs.core.__destructure_map(map__23388);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(form_values,id,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23388,map__23388__$1,id,label,type,s__23384__$2,temp__5804__auto__,patient,form_values){
return (function (p1__23382_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patient_frontend.core.form_data,cljs.core.assoc,id,p1__23382_SHARP_.target.value);
});})(map__23388,map__23388__$1,id,label,type,s__23384__$2,temp__5804__auto__,patient,form_values))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),patient_frontend$core$patient_form_$_iter__23383(cljs.core.rest(s__23384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(patient_frontend.core.form_fields);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),(cljs.core.truth_(patient)?"Update":"Create")], null)], null)], null);
});
patient_frontend.core.app = (function patient_frontend$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Patient Management"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.patient_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.patient_list], null)], null);
});
patient_frontend.core.init = (function patient_frontend$core$init(){
patient_frontend.core.fetch_patients();

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(patient_frontend.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.app], null));
});
patient_frontend.core.init();

//# sourceMappingURL=patient_frontend.core.js.map
