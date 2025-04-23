goog.provide('patient_frontend.core');
patient_frontend.core.api_url = "http://localhost:3000/patients";
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
patient_frontend.core.fetch_patients = (function patient_frontend$core$fetch_patients(){
cljs.core.reset_BANG_(patient_frontend.core.loading_QMARK_,true);

cljs.core.reset_BANG_(patient_frontend.core.error_msg,null);

return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(patient_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),(function (response){
cljs.core.reset_BANG_(patient_frontend.core.loading_QMARK_,false);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return cljs.core.reset_BANG_(patient_frontend.core.patients,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));
} else {
return cljs.core.reset_BANG_(patient_frontend.core.error_msg,"Failed to fetch patients");
}
})], 0));
});
patient_frontend.core.create_patient = (function patient_frontend$core$create_patient(patient_data){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(patient_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),patient_data], null),(function (response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((201),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
patient_frontend.core.fetch_patients();

return cljs.core.reset_BANG_(patient_frontend.core.current_patient,null);
} else {
return cljs.core.reset_BANG_(patient_frontend.core.error_msg,"Failed to create patient");
}
})], 0));
});
patient_frontend.core.update_patient = (function patient_frontend$core$update_patient(patient_id,patient_data){
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic([patient_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),patient_data], null),(function (response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
patient_frontend.core.fetch_patients();

return cljs.core.reset_BANG_(patient_frontend.core.current_patient,null);
} else {
return cljs.core.reset_BANG_(patient_frontend.core.error_msg,"Failed to update patient");
}
})], 0));
});
patient_frontend.core.delete_patient = (function patient_frontend$core$delete_patient(patient_id){
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic([patient_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return patient_frontend.core.fetch_patients();
} else {
return cljs.core.reset_BANG_(patient_frontend.core.error_msg,"Failed to delete patient");
}
})], 0));
});
patient_frontend.core.patient_list = (function patient_frontend$core$patient_list(){
var patients_data = cljs.core.deref(patient_frontend.core.patients);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Patient List"], null),(cljs.core.truth_(cljs.core.deref(patient_frontend.core.loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):(cljs.core.truth_(cljs.core.deref(patient_frontend.core.error_msg))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(patient_frontend.core.error_msg)], null):((cljs.core.empty_QMARK_(patients_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No patients found."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function patient_frontend$core$patient_list_$_iter__23054(s__23055){
return (new cljs.core.LazySeq(null,(function (){
var s__23055__$1 = s__23055;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23055__$1);
if(temp__5804__auto__){
var s__23055__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23055__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23055__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23057 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23056 = (0);
while(true){
if((i__23056 < size__5479__auto__)){
var patient = cljs.core._nth(c__5478__auto__,i__23056);
cljs.core.chunk_append(b__23057,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23056,patient,c__5478__auto__,size__5479__auto__,b__23057,s__23055__$2,temp__5804__auto__,patients_data){
return (function (){
return cljs.core.reset_BANG_(patient_frontend.core.current_patient,patient);
});})(i__23056,patient,c__5478__auto__,size__5479__auto__,b__23057,s__23055__$2,temp__5804__auto__,patients_data))
], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23056,patient,c__5478__auto__,size__5479__auto__,b__23057,s__23055__$2,temp__5804__auto__,patients_data){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient));
});})(i__23056,patient,c__5478__auto__,size__5479__auto__,b__23057,s__23055__$2,temp__5804__auto__,patients_data))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient)], null)));

var G__23063 = (i__23056 + (1));
i__23056 = G__23063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23057),patient_frontend$core$patient_list_$_iter__23054(cljs.core.chunk_rest(s__23055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23057),null);
}
} else {
var patient = cljs.core.first(s__23055__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__23055__$2,temp__5804__auto__,patients_data){
return (function (){
return cljs.core.reset_BANG_(patient_frontend.core.current_patient,patient);
});})(patient,s__23055__$2,temp__5804__auto__,patients_data))
], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__23055__$2,temp__5804__auto__,patients_data){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient));
});})(patient,s__23055__$2,temp__5804__auto__,patients_data))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient)], null)),patient_frontend$core$patient_list_$_iter__23054(cljs.core.rest(s__23055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(patients_data);
})()], null))))], null);
});
patient_frontend.core.patient_form = (function patient_frontend$core$patient_form(){
var patient = cljs.core.deref(patient_frontend.core.current_patient);
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("patients","full_name","patients/full_name",75837196).cljs$core$IFn$_invoke$arity$1(patient));
var gender = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("patients","gender","patients/gender",383440175).cljs$core$IFn$_invoke$arity$1(patient));
var birth_date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("patients","birth_date","patients/birth_date",-281213603).cljs$core$IFn$_invoke$arity$1(patient));
var address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("patients","address","patients/address",-343819592).cljs$core$IFn$_invoke$arity$1(patient));
var oms_number = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("patients","oms_number","patients/oms_number",-843374901).cljs$core$IFn$_invoke$arity$1(patient));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(cljs.core.truth_(patient)?"Edit Patient":"Add Patient")], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var patient_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("patients","full_name","patients/full_name",75837196),cljs.core.deref(name),new cljs.core.Keyword("patients","gender","patients/gender",383440175),cljs.core.deref(gender),new cljs.core.Keyword("patients","birth_date","patients/birth_date",-281213603),cljs.core.deref(birth_date),new cljs.core.Keyword("patients","address","patients/address",-343819592),cljs.core.deref(address),new cljs.core.Keyword("patients","oms_number","patients/oms_number",-843374901),cljs.core.deref(oms_number)], null);
if(cljs.core.truth_(patient)){
return patient_frontend.core.update_patient(new cljs.core.Keyword("patients","id","patients/id",1962288166).cljs$core$IFn$_invoke$arity$1(patient),patient_data);
} else {
return patient_frontend.core.create_patient(patient_data);
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Full Name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23058_SHARP_){
return cljs.core.reset_BANG_(name,p1__23058_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Gender: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(gender),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23059_SHARP_){
return cljs.core.reset_BANG_(gender,p1__23059_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Birth Date: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(birth_date),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23060_SHARP_){
return cljs.core.reset_BANG_(birth_date,p1__23060_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Address: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(address),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23061_SHARP_){
return cljs.core.reset_BANG_(address,p1__23061_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"OMS Number: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(oms_number),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23062_SHARP_){
return cljs.core.reset_BANG_(oms_number,p1__23062_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),(cljs.core.truth_(patient)?"Update":"Create")], null)], null)], null);
});
});
patient_frontend.core.app = (function patient_frontend$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Patient Management"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.patient_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.patient_list], null)], null);
});
patient_frontend.core.init = (function patient_frontend$core$init(){
patient_frontend.core.fetch_patients();

return rdom.render(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('patient_frontend.core.init', patient_frontend.core.init);
patient_frontend.core.main = (function patient_frontend$core$main(){
return patient_frontend.core.init();
});
goog.exportSymbol('patient_frontend.core.main', patient_frontend.core.main);
patient_frontend.core.main();

//# sourceMappingURL=patient_frontend.core.js.map
