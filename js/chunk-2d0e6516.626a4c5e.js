(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6516"],{"97df":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{staticClass:"pl-10 pr-10"},[i("v-card",[i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"auto"}},[i("v-btn-toggle",{attrs:{dense:""},model:{value:t.filters.tableName,callback:function(e){t.$set(t.filters,"tableName",e)},expression:"filters.tableName"}},[i("v-btn",{attrs:{value:"cities",outlined:""}},[i("span",[t._v("Города")])]),i("v-btn",{attrs:{value:"points",outlined:""}},[i("span",[t._v("Пункты")])]),i("v-btn",{attrs:{value:"rates",outlined:""}},[i("span",[t._v("Ставки")])]),i("v-btn",{attrs:{value:"statuses",outlined:""}},[i("span",[t._v("Статусы")])]),i("v-btn",{attrs:{value:"categories",outlined:""}},[i("span",[t._v("Категории")])]),i("v-btn",{attrs:{value:"rateTypes",outlined:"",color:"black"}},[i("span",[t._v("Тарифы")])])],1)],1),i("v-col",{attrs:{cols:"auto"}},[t.filters.tableName?i("v-btn",{staticClass:"entity__create_btn",attrs:{color:"info"},on:{click:t.toCreate}},[i("v-icon",[t._v("mdi-plus")]),i("span",[t._v(t._s(t.createTitle))])],1):t._e()],1)],1)],1),i("v-card-text",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{attrs:{headers:t.itemHeaders,items:t.items,loading:t.loading,"items-per-page":t.itemsPerPage,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus","items-per-page-text":"сущностей на странице:",pageText:"{0}-{1} из {2}"},"loading-text":"Загрузка сущностей, пожалуйста подождите..."},scopedSlots:t._u([{key:"item.id",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.id?t.truncate(i.id,5):"-")+" ")]}},{key:"item.createdAt",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.createdAt?t.formatDate(i.createdAt):"-")+" ")]}},{key:"item.updatedAt",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.updatedAt?t.formatDate(i.updatedAt):"-")+" ")]}},{key:"item.city",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.cityId?i.cityId.name:"-")+" ")]}},{key:"item.tariff",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.rateTypeId?i.rateTypeId.name:"-")+" ")]}},{key:"item.rateUnit",fn:function(e){var i=e.item;return[t._v(" "+t._s(i.rateTypeId?i.rateTypeId.unit:"-")+" ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-btn-toggle",{attrs:{dense:""}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"order__actions",attrs:{outlined:"",color:"black"},on:{click:function(e){return t.toDelete(a.id)}}},"v-btn",n,!1),s),[i("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")]),i("span",{staticClass:"order__actions_text"},[t._v("Удалить")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Удалить"))])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"order__actions",attrs:{outlined:"",color:"black"},on:{click:function(e){return t.toEdit(a)}}},"v-btn",n,!1),s),[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")]),i("span",{staticClass:"order__actions_text"},[t._v("Изменить")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Изменить"))])])],1)],1)],1),i("div",{staticClass:"order__hrs"})]}}],null,!0)})],1)],1)],1),i("v-dialog",{attrs:{"max-width":"700"},model:{value:t.entityForm,callback:function(e){t.entityForm=e},expression:"entityForm"}},[i("entity-form",{key:t.formKey,attrs:{entity:t.entity,method:t.method,cities:t.cities,"rate-types":t.rateTypes,"table-name":t.filters.tableName},on:{cancel:function(e){return t.closeForm()},successEdit:function(e){return t.formSuccessEdit(e)},successCreate:function(e){return t.formSuccessCreate(e)}}})],1),i("v-dialog",{attrs:{"max-width":"700"},model:{value:t.confirmDeleteForm,callback:function(e){t.confirmDeleteForm=e},expression:"confirmDeleteForm"}},[i("confirm-delete-form",{key:t.formKey,attrs:{entity:t.deleteItem},on:{cancel:function(e){return t.closeForm()},successDelete:function(e){return t.formSuccessDelete(e)}}})],1)],1)],1)],1)},s=[],n=i("5530"),r=(i("159b"),i("b64b"),i("d3b7"),i("25f0"),i("2f62")),o=i("0644"),l=i.n(o),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-text",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.title))])]),i("hr"),i("v-row",{staticClass:"pt-12"},["rates"!==t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Наименование",outlined:"",required:"",rules:t.nameRules},model:{value:t.entityItem.name,callback:function(e){t.$set(t.entityItem,"name",e)},expression:"entityItem.name"}})],1):t._e(),"points"===t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Адрес",outlined:"",required:"",rules:t.nameRules},model:{value:t.entityItem.address,callback:function(e){t.$set(t.entityItem,"address",e)},expression:"entityItem.address"}})],1):t._e(),"points"===t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",outlined:"",items:t.cities,label:"Город"},model:{value:t.entityItem.cityId,callback:function(e){t.$set(t.entityItem,"cityId",e)},expression:"entityItem.cityId"}})],1):t._e(),"rates"===t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##########",expression:"'##########'"}],attrs:{label:"Стоимость",outlined:"",required:"",rules:t.priceRules},model:{value:t.entityItem.price,callback:function(e){t.$set(t.entityItem,"price",e)},expression:"entityItem.price"}})],1):t._e(),"rates"===t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",outlined:"",items:t.rateTypes,label:"Тариф"},model:{value:t.entityItem.rateTypeId,callback:function(e){t.$set(t.entityItem,"rateTypeId",e)},expression:"entityItem.rateTypeId"}})],1):t._e(),"categories"===t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Описание",outlined:"",required:"",rules:t.nameRules},model:{value:t.entityItem.description,callback:function(e){t.$set(t.entityItem,"description",e)},expression:"entityItem.description"}})],1):t._e(),"rateTypes"===t.tableName?i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Единица измерения",outlined:"",required:"",rules:t.nameRules},model:{value:t.entityItem.unit,callback:function(e){t.$set(t.entityItem,"unit",e)},expression:"entityItem.unit"}})],1):t._e()],1),i("v-spacer")],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{on:{click:function(e){return t.$emit("cancel")}}},[t._v(" Отмена ")]),"rates"!==t.tableName?i("v-btn",{attrs:{color:"primary",disabled:t.entityItem.name.length<3},on:{click:t.submit}},[t._v(" Сохранить ")]):t._e(),"rates"===t.tableName?i("v-btn",{attrs:{color:"primary",disabled:t.entityItem.price<1},on:{click:t.submit}},[t._v(" Сохранить ")]):t._e()],1)],1)},u=[],d=(i("b0c0"),i("a4d3"),i("e01a"),{name:"EntityForm",props:{entity:{type:Object,default:function(){}},method:{type:String,required:!0},tableName:{type:String,required:!0},cities:{type:Array,required:!0},rateTypes:{type:Array,required:!0}},data:function(){return{nameRules:[function(t){return t.length>=3||"Необходимо минимум 3 символа"}],priceRules:[function(t){return t>0||"Стоимость должна быть больше нуля"}],entityItem:{name:"",address:"",price:0,unit:"",city:null,rateType:null,description:""}}},created:function(){"edit"===this.method&&(this.entityItem=Object(n["a"])({},this.entity))},computed:{title:function(){return"edit"===this.method?"Редактировать сущность из таблицы ".concat(this.tableName):"Создать сущность в таблице ".concat(this.tableName)}},methods:{submit:function(){var t=this;"rates"!==this.tableName?this.entity.name=this.entityItem.name:"rates"===this.tableName&&(this.entity.price=this.entityItem.price,this.rateTypes.forEach((function(e){e.id===t.entityItem.rateTypeId&&(t.entity.rateTypeId=e)}))),"points"===this.tableName&&(this.entity.address=this.entityItem.address,this.cities.forEach((function(e){e.id===t.entityItem.cityId&&(t.entity.cityId=e)}))),"categories"===this.tableName&&(this.entity.description=this.entityItem.description),"rateTypes"===this.tableName&&(this.entity.unit=this.entityItem.unit),"edit"===this.method?this.$emit("successEdit",this.entity,this.tableName):this.$emit("successCreate",this.entity,this.tableName)}}}),m=d,h=i("2877"),y=i("6544"),f=i.n(y),v=i("8336"),b=i("b0af"),p=i("99d9"),g=i("62ad"),_=i("0fd9"),x=i("b974"),I=i("2fa4"),N=i("8654"),C=Object(h["a"])(m,c,u,!1,null,null,null),T=C.exports;f()(C,{VBtn:v["a"],VCard:b["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:g["a"],VRow:_["a"],VSelect:x["a"],VSpacer:I["a"],VTextField:N["a"]});var k=i("d661"),w={name:"Entities",components:{EntityForm:T,ConfirmDeleteForm:k["a"]},data:function(){return{loading:!0,itemsPerPage:10,points:[],rates:[],cities:[],statuses:[],rateTypes:[],categories:[],items:[],itemHeaders:[],entity:null,deleteItem:null,formKey:1,entityForm:!1,confirmDeleteForm:!1,entityName:"city",method:"",filters:{tableName:"cities"},dateSettings:{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}}},computed:Object(n["a"])({createTitle:function(){return"cities"===this.filters.tableName?"Cоздать город":"points"===this.filters.tableName?"Cоздать пункт":"statuses"===this.filters.tableName?"Cоздать статус":"rates"===this.filters.tableName?"Cоздать ставку":"categories"===this.filters.tableName?"Cоздать категорию":"rateTypes"===this.filters.tableName?"Cоздать тариф":"-"},cityHeaders:function(){return[{value:"id",text:"ID",searchable:!1,sortable:!1},{value:"name",text:"Наименование"},{value:"createdAt",text:"Дата создания",searchable:!1,sortable:!1},{value:"updatedAt",text:"Дата изменения",searchable:!1,sortable:!1},{value:"actions",text:"Действия",searchable:!1,sortable:!1}]},pointHeaders:function(){return[{value:"id",text:"ID",searchable:!1,sortable:!1},{value:"name",text:"Наименование"},{value:"city",text:"Город"},{value:"address",text:"Адрес"},{value:"actions",text:"Действия",searchable:!1,sortable:!1}]},rateHeaders:function(){return[{value:"id",text:"ID",searchable:!1,sortable:!1},{value:"price",text:"Стоимость"},{value:"tariff",text:"Наименование тарифа",searchable:!1,sortable:!1},{value:"rateUnit",text:"Единица измерения",searchable:!1,sortable:!1},{value:"createdAt",text:"Дата создания",searchable:!1,sortable:!1},{value:"updatedAt",text:"Дата изменения",searchable:!1,sortable:!1},{value:"actions",text:"Действия",searchable:!1,sortable:!1}]},statusHeaders:function(){return[{value:"id",text:"ID",searchable:!1,sortable:!1},{value:"name",text:"Наименование"},{value:"actions",text:"Действия",searchable:!1,sortable:!1}]},categoryHeaders:function(){return[{value:"id",text:"ID",searchable:!1,sortable:!1},{value:"name",text:"Наименование"},{value:"description",text:"Описание"},{value:"createdAt",text:"Дата создания",searchable:!1,sortable:!1},{value:"updatedAt",text:"Дата изменения",searchable:!1,sortable:!1},{value:"actions",text:"Действия",searchable:!1,sortable:!1}]},rateTypeHeaders:function(){return[{value:"id",text:"ID",searchable:!1,sortable:!1},{value:"name",text:"Наименование"},{value:"unit",text:"Единица измерения"},{value:"actions",text:"Действия",searchable:!1,sortable:!1}]}},Object(r["c"])("entities",["getCities","getPoints","getRates","getOrderStatuses","getCategories","getRateTypes"])),watch:{filters:{handler:function(t){"cities"===t.tableName?(this.items=l()(this.cities),this.itemHeaders=l()(this.cityHeaders),this.entityName="city"):"points"===t.tableName?(this.items=l()(this.points),this.itemHeaders=l()(this.pointHeaders),this.entityName="point"):"rates"===t.tableName?(this.items=l()(this.rates),this.itemHeaders=l()(this.rateHeaders),this.entityName="rate"):"statuses"===t.tableName?(this.items=l()(this.statuses),this.itemHeaders=l()(this.statusHeaders),this.entityName="orderStatus"):"categories"===t.tableName?(this.items=l()(this.categories),this.itemHeaders=l()(this.categoryHeaders),this.entityName="category"):"rateTypes"===t.tableName&&(this.items=l()(this.rateTypes),this.itemHeaders=l()(this.rateTypeHeaders),this.entityName="rateType")},deep:!0}},mounted:function(){var t=this;0===this.getCities.length?(this.loading=!0,this.fetchCities().then((function(){t.cities=t.getCities,t.items=l()(t.cities),t.itemHeaders=l()(t.cityHeaders),t.loading=!1}))):(this.cities=this.getCities,this.items=l()(this.getCities),this.itemHeaders=l()(this.cityHeaders)),0===this.getPoints.length?(this.loading=!0,this.fetchPoints().then((function(){t.points=t.getPoints,t.loading=!1}))):this.points=this.getPoints,0===this.getRates.length?(this.loading=!0,this.fetchRates().then((function(){t.rates=t.getRates,t.loading=!1}))):this.rates=this.getRates,0===this.getOrderStatuses.length?(this.loading=!0,this.fetchOrderStatuses().then((function(){t.statuses=t.getOrderStatuses,t.loading=!1}))):this.cities=this.getCities,0===this.getCategories.length?this.fetchCategories().then((function(){t.loading=!0,t.categories=t.getCategories,t.loading=!1})):this.categories=this.getCategories,0===this.getRateTypes.length?(this.loading=!0,this.fetchRateTypes().then((function(){t.rateTypes=t.getRateTypes,t.loading=!1}))):this.rateTypes=this.getRateTypes},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])("entities",["fetchCities","fetchPoints","fetchRates","fetchOrderStatuses","fetchCategories","fetchRateTypes","editEntity","createEntity","deleteEntity"])),{},{truncate:function(t,e){return t.length>e?t.substring(0,e)+"...":t},toDelete:function(t){this.deleteItem={id:t,entity:this.entityName},this.confirmDeleteForm=!0,this.formKey++},formSuccessDelete:function(t){var e=this;this.closeForm(),this.deleteEntity(t).then((function(){e.fetchNewRows(),e.$toast.info("Удалено")}))},formatDate:function(t){return new Date(t).toLocaleString([],this.dateSettings)},toCreate:function(){this.entity=this.items[0],this.entity.createdAt&&delete this.entity.createdAt,this.entity.id&&delete this.entity.id,this.entity.updatedAt&&delete this.entity.updatedAt;var t=function t(e){return Object.keys(e).forEach((function(i){"[object Object]"===e[i].toString()?t(e[i]):e[i]=null})),e};this.entity=t(this.entity),this.method="create",this.formKey++,this.entityForm=!0},toEdit:function(t){this.method="edit",this.entity=t,this.formKey++,this.entityForm=!0},formSuccessEdit:function(t){var e=this;this.closeForm();var i={item:t,entityName:this.entityName};this.editEntity(i).then((function(){e.fetchNewRows(),e.$toast.success("Успешно отредактировано - "+e.entityName)}))},formSuccessCreate:function(t){var e=this;this.closeForm();var i={item:t,entityName:this.entityName};this.createEntity(i).then((function(){e.loading=!0,e.fetchNewRows(),e.$toast.success("Успешно создано - "+e.entityName)}))},closeForm:function(){this.entityForm=!1,this.confirmDeleteForm=!1},fetchNewRows:function(){var t=this;"city"===this.entityName&&this.fetchCities().then((function(){t.cities=t.getCities,t.items=l()(t.cities),t.itemHeaders=l()(t.cityHeaders),t.loading=!1})),"point"===this.entityName&&(this.loading=!0,this.fetchPoints().then((function(){t.points=t.getPoints,t.items=l()(t.points),t.loading=!1}))),"rate"===this.entityName&&(this.loading=!0,this.fetchRates().then((function(){t.rates=t.getRates,t.items=l()(t.rates),t.loading=!1}))),"orderStatus"===this.entityName&&(this.loading=!0,this.fetchOrderStatuses().then((function(){t.statuses=t.getOrderStatuses,t.items=l()(t.statuses),t.loading=!1}))),"category"===this.entityName&&this.fetchCategories().then((function(){t.loading=!0,t.categories=t.getCategories,t.items=l()(t.categories),t.loading=!1})),"rateType"===this.entityName&&(this.loading=!0,this.fetchRateTypes().then((function(){t.rateTypes=t.getRateTypes,t.items=l()(t.rateTypes),t.loading=!1})))}})},R=w,H=i("a609"),S=i("8fea"),D=i("169a"),F=i("132d"),E=i("3a2f"),V=Object(h["a"])(R,a,s,!1,null,null,null);e["default"]=V.exports;f()(V,{VBtn:v["a"],VBtnToggle:H["a"],VCard:b["a"],VCardText:p["b"],VCol:g["a"],VDataTable:S["a"],VDialog:D["a"],VIcon:F["a"],VRow:_["a"],VTooltip:E["a"]})}}]);
//# sourceMappingURL=chunk-2d0e6516.626a4c5e.js.map