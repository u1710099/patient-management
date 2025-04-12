goog.provide('patient_frontend.core');
if((typeof patient_frontend !== 'undefined') && (typeof patient_frontend.core !== 'undefined') && (typeof patient_frontend.core.app_state !== 'undefined')){
} else {
patient_frontend.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.PersistentVector.EMPTY], null));
}
patient_frontend.core.fetch_all_patients = (function patient_frontend$core$fetch_all_patients(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.reset_BANG_(patient_frontend.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return console.error("Error fetching patients: ",error);
})], null)], 0));
});
patient_frontend.core.create_patient = (function patient_frontend$core$create_patient(patient){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),patient,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return console.log("Patient created: ",response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return console.error("Error creating patient: ",error);
})], null)], 0));
});
patient_frontend.core.update_patient = (function patient_frontend$core$update_patient(patient){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),patient,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return console.log("Patient updated: ",response);
})], null)], 0));
});
patient_frontend.core.delete_patient = (function patient_frontend$core$delete_patient(id){
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return console.log("Patient deleted: ",response);
})], null)], 0));
});
patient_frontend.core.patient_list = (function patient_frontend$core$patient_list(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Patient List"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return patient_frontend.core.fetch_all_patients();
})], null),"Fetch All Patients"], null),(function (){var iter__5480__auto__ = (function patient_frontend$core$patient_list_$_iter__12031(s__12032){
return (new cljs.core.LazySeq(null,(function (){
var s__12032__$1 = s__12032;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12032__$1);
if(temp__5804__auto__){
var s__12032__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12032__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12032__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12035 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12033 = (0);
while(true){
if((i__12033 < size__5479__auto__)){
var patient = cljs.core._nth(c__5478__auto__,i__12033);
cljs.core.chunk_append(b__12035,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"full_name","full_name",1257415930).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12033,patient,c__5478__auto__,size__5479__auto__,b__12035,s__12032__$2,temp__5804__auto__){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient));
});})(i__12033,patient,c__5478__auto__,size__5479__auto__,b__12035,s__12032__$2,temp__5804__auto__))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient)], null)));

var G__12043 = (i__12033 + (1));
i__12033 = G__12043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12035),patient_frontend$core$patient_list_$_iter__12031(cljs.core.chunk_rest(s__12032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12035),null);
}
} else {
var patient = cljs.core.first(s__12032__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"full_name","full_name",1257415930).cljs$core$IFn$_invoke$arity$1(patient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (patient,s__12032__$2,temp__5804__auto__){
return (function (){
return patient_frontend.core.delete_patient(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient));
});})(patient,s__12032__$2,temp__5804__auto__))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient)], null)),patient_frontend$core$patient_list_$_iter__12031(cljs.core.rest(s__12032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"patients","patients",134252075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(patient_frontend.core.app_state)));
})()], null);
});
patient_frontend.core.app = (function patient_frontend$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Patient Management"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.patient_list], null)], null);
});
reagent.dom.render(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patient_frontend.core.app], null),document.getElementById("app"));

//# sourceMappingURL=patient_frontend.core.js.map
