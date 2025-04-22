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

if(cljs.core.truth_((function (){var G__23274 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (patient_frontend.core.success_status.cljs$core$IFn$_invoke$arity$1 ? patient_frontend.core.success_status.cljs$core$IFn$_invoke$arity$1(G__23274) : patient_frontend.core.success_status.call(null,G__23274));
})())){
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(response) : success_fn.call(null,response));
} else {
return cljs.core.reset_BANG_(patient_frontend.core.error_msg,error_message);
}
});
patient_frontend.core.fetch_patients = (function patient_frontend$core$fetch_patients(){
cljs.core.reset_BANG_(patient_frontend.core.loading_QMARK_,true);

cljs.core.reset_BANG_(patient_frontend.core.error_msg,null);

return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(patient_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),(function (p1__23275_SHARP_){
return patient_frontend.core.handle_api_response(p1__23275_SHARP_,(function (response){
return cljs.core.reset_BANG_(patient_frontend.core.patients,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));
}),"Failed to fetch patients");
})], 0));
});
patient_frontend.core.create_patient = (function patient_frontend$core$create_patient(patient_data){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(patient_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),patient_data], null),(function (p1__23276_SHARP_){
return patient_frontend.core.handle_api_response(p1__23276_SHARP_,(function (_){
patient_frontend.core.fetch_patients();

cljs.core.reset_BANG_(patient_frontend.core.current_patient,null);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,cljs.core.PersistentArrayMap.EMPTY);
}),"Failed to create patient");
})], 0));
});
patient_frontend.core.update_patient = (function patient_frontend$core$update_patient(patient_id,patient_data){
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic([patient_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),patient_data], null),(function (p1__23277_SHARP_){
return patient_frontend.core.handle_api_response(p1__23277_SHARP_,(function (_){
patient_frontend.core.fetch_patients();

cljs.core.reset_BANG_(patient_frontend.core.current_patient,null);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,cljs.core.PersistentArrayMap.EMPTY);
}),"Failed to update patient");
})], 0));
});
patient_frontend.core.delete_patient = (function patient_frontend$core$delete_patient(patient_id){
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic([patient_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__23278_SHARP_){
return patient_frontend.core.handle_api_response(p1__23278_SHARP_,(function (_){
return patient_frontend.core.fetch_patients();
}),"Failed to delete patient");
})], 0));
});
patient_frontend.core.patient_list = (function patient_frontend$core$patient_list(){
var patients_data = cljs.core.deref(patient_frontend.core.patients);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Patient List"], null),(cljs.core.truth_(cljs.core.deref(patient_frontend.core.loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):(cljs.core.truth_(cljs.core.deref(patient_frontend.core.error_msg))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(patient_frontend.core.error_msg)], null):((cljs.core.empty_QMARK_(patients_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No patients found."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function patient_frontend$core$patient_list_$_iter__23279(s__23280){
return (new cljs.core.LazySeq(null,(function (){
var s__23280__$1 = s__23280;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23280__$1);
if(temp__5804__auto__){
var s__23280__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23280__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23280__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23282 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23281 = (0);
while(true){
if((i__23281 < size__5479__auto__)){
var patient = cljs.core._nth(c__5478__auto__,i__23281);
cljs.core.chunk_append(b__23282,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23281,patient,c__5478__auto__,size__5479__auto__,b__23282,s__23280__$2,temp__5804__auto__,patients_data){
return (function (){
cljs.core.reset_BANG_(patient_frontend.core.current_patient,patient);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,patient);
});})(i__23281,patient,c__5478__auto__,size__5479__auto__,b__23282,s__23280__$2,temp__5804__auto__,patients_data))
], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23281,patient,c__5478__auto__,size__5479__auto__,b__23282,s__23280__$2,temp__5804__auto__,patients_data){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient));
});})(i__23281,patient,c__5478__auto__,size__5479__auto__,b__23282,s__23280__$2,temp__5804__auto__,patients_data))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient)], null)));

var G__23290 = (i__23281 + (1));
i__23281 = G__23290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23282),patient_frontend$core$patient_list_$_iter__23279(cljs.core.chunk_rest(s__23280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23282),null);
}
} else {
var patient = cljs.core.first(s__23280__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__23280__$2,temp__5804__auto__,patients_data){
return (function (){
cljs.core.reset_BANG_(patient_frontend.core.current_patient,patient);

return cljs.core.reset_BANG_(patient_frontend.core.form_data,patient);
});})(patient,s__23280__$2,temp__5804__auto__,patients_data))
], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__23280__$2,temp__5804__auto__,patients_data){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient));
});})(patient,s__23280__$2,temp__5804__auto__,patients_data))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient)], null)),patient_frontend$core$patient_list_$_iter__23279(cljs.core.rest(s__23280__$2)));
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
patient_frontend.core.form_input = (function patient_frontend$core$form_input(p__23284){
var map__23285 = p__23284;
var map__23285__$1 = cljs.core.__destructure_map(map__23285);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(patient_frontend.core.form_data),id,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23283_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(patient_frontend.core.form_data,cljs.core.assoc,id,p1__23283_SHARP_.target.value);
})], null)], null)], null);
});
patient_frontend.core.patient_form = (function patient_frontend$core$patient_form(){
var patient = cljs.core.deref(patient_frontend.core.current_patient);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(cljs.core.truth_(patient)?"Edit Patient":"Add Patient")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(patient)){
return patient_frontend.core.update_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient),cljs.core.deref(patient_frontend.core.form_data));
} else {
return patient_frontend.core.create_patient(cljs.core.deref(patient_frontend.core.form_data));
}
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function patient_frontend$core$patient_form_$_iter__23286(s__23287){
return (new cljs.core.LazySeq(null,(function (){
var s__23287__$1 = s__23287;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23287__$1);
if(temp__5804__auto__){
var s__23287__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23287__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23287__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23289 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23288 = (0);
while(true){
if((i__23288 < size__5479__auto__)){
var field = cljs.core._nth(c__5478__auto__,i__23288);
cljs.core.chunk_append(b__23289,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.form_input,field], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null)));

var G__23291 = (i__23288 + (1));
i__23288 = G__23291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23289),patient_frontend$core$patient_form_$_iter__23286(cljs.core.chunk_rest(s__23287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23289),null);
}
} else {
var field = cljs.core.first(s__23287__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.form_input,field], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(field)], null)),patient_frontend$core$patient_form_$_iter__23286(cljs.core.rest(s__23287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(patient_frontend.core.form_fields);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),(cljs.core.truth_(patient)?"Update":"Create")], null)], null)], null);
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
