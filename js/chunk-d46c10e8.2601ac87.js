(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d46c10e8"],{1432:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{staticClass:"pl-10 pr-10"},[i("v-card",[i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"auto"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",dense:"",outlined:"",disabled:t.loading,items:t.cities,label:"Город"},model:{value:t.filters.city,callback:function(e){t.$set(t.filters,"city",e)},expression:"filters.city"}})],1),i("v-col",{attrs:{cols:"auto"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",dense:"",outlined:"",disabled:t.loading,items:t.statuses,label:"Статус"},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}})],1),i("v-col",{attrs:{cols:"auto"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",dense:"",outlined:"",disabled:t.loading,items:t.categories,label:"Категория"},model:{value:t.filters.category,callback:function(e){t.$set(t.filters,"category",e)},expression:"filters.category"}})],1),i("v-col",{attrs:{cols:"auto"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",dense:"",outlined:"",disabled:t.loading,items:t.rateTypes,label:"Тариф"},model:{value:t.filters.rateType,callback:function(e){t.$set(t.filters,"rateType",e)},expression:"filters.rateType"}})],1),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-btn",{attrs:{disabled:t.loading},on:{click:function(e){return t.resetFilters()}}},[t._v(" Сброс ")])],1)],1)],1),i("v-card-text",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{attrs:{headers:t.orderHeaders,items:t.orders,loading:t.loading,"items-per-page":t.itemsPerPage,page:t.page,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus","items-per-page-text":"Заказов на странице:",pageText:"{0}-{1} из {2}"},"loading-text":"Загрузка заказов, пожалуйста подождите..."},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.info",fn:function(e){var a=e.item;return[i("v-row",[i("v-col",{staticClass:"order__addition_info pb-0 mb-0",attrs:{cols:"12"}},[t._v(" г. "+t._s(a.cityId?a.cityId.name:"-")+" ")]),i("v-col",{staticClass:"ma-0 pa-0 pl-3",attrs:{cols:"12"}},[t._v(" "+t._s(a.dateFrom?t.formatDate(a.dateFrom):"-")+" - "+t._s(a.dateTo?t.formatDate(a.dateTo):"-")+" ")]),i("v-col",{staticClass:"order__addition_info pt-0 mt-0",attrs:{cols:"12"}},[t._v(" Цвет "),i("b",[t._v(t._s(a.color?a.color:"-"))])])],1)]}},{key:"item.car",fn:function(e){var a=e.item;return[i("v-row",[i("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[t._v(" Статус "),i("b",[t._v(t._s(a.orderStatusId?t.truncate(a.orderStatusId.name,5):"-"))])]),i("v-col",{staticClass:"order__addition_info ma-0 pa-0",attrs:{cols:"12"}},[t._v(" Тариф "),i("b",[t._v(t._s(a.rateId&&a.rateId.rateTypeId?a.rateId.rateTypeId.name:"-"))])]),i("v-col",{staticClass:"order__addition_info ma-0 pa-0",attrs:{cols:"12"}},[t._v(" Категория "),i("b",[t._v(t._s(a.carId&&a.carId.categoryId?a.carId.categoryId.name:"-"))])]),i("v-col",{staticClass:"order__addition_info ma-0 pa-0",attrs:{cols:"12"}},[t._v(" Номер "),i("b",{staticClass:"primary--text"},[t._v(t._s(a.carId?a.carId.number:"-"))])])],1)]}},{key:"item.additionals",fn:function(e){var a=e.item;return[i("v-checkbox",{staticClass:"pa-0 ma-0 pt-6",attrs:{label:"Полный бак",disabled:""},model:{value:a.isFullTank,callback:function(e){t.$set(a,"isFullTank",e)},expression:"item.isFullTank"}}),i("v-checkbox",{staticClass:"pa-0 ma-0",attrs:{label:"Детское кресло",disabled:""},model:{value:a.isNeedChildChair,callback:function(e){t.$set(a,"isNeedChildChair",e)},expression:"item.isNeedChildChair"}}),i("v-checkbox",{staticClass:"pa-0 ma-0",attrs:{label:"Правый руль",disabled:""},model:{value:a.isRightWheel,callback:function(e){t.$set(a,"isRightWheel",e)},expression:"item.isRightWheel"}})]}},{key:"item.price",fn:function(e){var a=e.item;return[i("div",[i("v-card-title",[t._v(t._s(a.price?a.price+" ₽":"-"))])],1)]}},{key:"item.photo",fn:function(e){var a=e.item;return[i("img",{staticClass:"model__car_image",attrs:{src:t.getImgPath(a.carId),alt:""}})]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-btn-toggle",{attrs:{dense:""}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"order__actions",attrs:{outlined:"",color:"black"},on:{click:function(e){t.toChangeStatusToDone(a.id,t.orders.map((function(t){return t.id})).indexOf(a.id))}}},"v-btn",s,!1),r),[i("v-icon",{attrs:{color:"green darken-2"}},[t._v("mdi-check-bold")]),i("span",{staticClass:"order__actions_text"},[t._v("Готово")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Готово"))])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"order__actions",attrs:{outlined:"",color:"black"},on:{click:function(e){t.toChangeStatusToCancel(a.id,t.orders.map((function(t){return t.id})).indexOf(a.id))}}},"v-btn",s,!1),r),[i("v-icon",{attrs:{color:"red"}},[t._v("mdi-close")]),i("span",{staticClass:"order__actions_text"},[t._v("Отменить")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Отменить"))])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"order__actions",attrs:{outlined:"",color:"black"},on:{click:function(e){return t.toDelete(a.id)}}},"v-btn",s,!1),r),[i("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")]),i("span",{staticClass:"order__actions_text"},[t._v("Удалить")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Удалить"))])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"order__actions",attrs:{outlined:"",color:"black"},on:{click:function(e){t.toEdit(a,t.orders.map((function(t){return t.id})).indexOf(a.id))}}},"v-btn",s,!1),r),[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")]),i("span",{staticClass:"order__actions_text"},[t._v("Изменить")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Изменить"))])])],1)],1)],1),t._l(5,(function(t){return i("div",{key:t},[i("hr",{staticClass:"order__hrs"})])}))]}}],null,!0)})],1),i("v-col",{staticClass:"order__table_circles pl-10 pr-10 pb-16",attrs:{cols:"6"}},[i("v-pagination",{attrs:{length:t.pageCount,circle:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1),i("v-dialog",{attrs:{"max-width":"700"},model:{value:t.editOrderForm,callback:function(e){t.editOrderForm=e},expression:"editOrderForm"}},[i("edit-order-form",{key:t.formKey,attrs:{"order-item":t.orderItem,statuses:t.statuses},on:{cancel:function(e){return t.closeForm()},success:function(e){return t.formSuccess(e)}}})],1),i("v-dialog",{attrs:{"max-width":"700"},model:{value:t.confirmDeleteForm,callback:function(e){t.confirmDeleteForm=e},expression:"confirmDeleteForm"}},[i("confirm-delete-form",{key:t.formKey,attrs:{entity:t.deleteItem,"table-name":"order"},on:{cancel:function(e){return t.closeForm()},successDelete:function(e){return t.formSuccessDelete(e)}}})],1)],1)],1)],1)},r=[],s=i("5530"),n=(i("99af"),i("07ac"),i("159b"),i("4de4"),i("b0c0"),i("2f62")),o=i("0644"),l=i.n(o),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-text",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.title))])]),i("hr"),i("v-row",{staticClass:"pt-12"},[i("v-col",{attrs:{cols:"4"}},[i("v-select",{attrs:{"item-value":"id","item-text":"name",outlined:"",items:t.statuses,label:"Статус заказа"},model:{value:t.order.orderStatusId,callback:function(e){t.$set(t.order,"orderStatusId",e)},expression:"order.orderStatusId"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##########",expression:"'##########'"}],attrs:{label:"Цена заказа",outlined:"",clearable:"",required:""},model:{value:t.order.price,callback:function(e){t.$set(t.order,"price",e)},expression:"order.price"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"Цвет автомобиля",outlined:"",clearable:"",required:""},model:{value:t.order.color,callback:function(e){t.$set(t.order,"color",e)},expression:"order.color"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-checkbox",{staticClass:"pa-0 ma-0",attrs:{"x-large":"",label:"Правый руль"},model:{value:t.order.isRightWheel,callback:function(e){t.$set(t.order,"isRightWheel",e)},expression:"order.isRightWheel"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-checkbox",{staticClass:"pa-0 ma-0",attrs:{label:"Полный бак"},model:{value:t.order.isFullTank,callback:function(e){t.$set(t.order,"isFullTank",e)},expression:"order.isFullTank"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-checkbox",{staticClass:"pa-0 ma-0",attrs:{label:"Детское кресло"},model:{value:t.order.isNeedChildChair,callback:function(e){t.$set(t.order,"isNeedChildChair",e)},expression:"order.isNeedChildChair"}})],1)],1),i("v-spacer")],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{on:{click:function(e){return t.$emit("cancel")}}},[t._v(" Отмена ")]),i("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v(" Сохранить ")])],1)],1)},u=[],d={name:"EditOrderForm",props:{orderItem:{type:Object,required:!0},statuses:{type:Array,required:!0}},data:function(){return{order:{orderStatusId:null,price:null,color:null,isRightWheel:null,isFullTank:null,isNeedChildChair:null}}},created:function(){this.order=Object(s["a"])({},this.orderItem)},computed:{title:function(){return"Редактировать заказ "+this.orderItem.id}},methods:{submit:function(){var t=this;this.statuses.forEach((function(e){e.id===t.orderStatusId&&(t.orderItem.orderStatusId=e)})),this.orderItem.price=this.order.price,this.orderItem.color=this.order.color,this.orderItem.isRightWheel=this.order.isRightWheel,this.orderItem.isFullTank=this.order.isFullTank,this.orderItem.isNeedChildChair=this.order.isNeedChildChair,this.$emit("success",this.orderItem)}}},h=d,f=i("2877"),v=i("6544"),p=i.n(v),m=i("8336"),g=i("b0af"),b=i("99d9"),y=i("15fd"),_=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),C=i("c37a"),I=i("5607"),x=i("2b0e"),k=x["a"].extend({name:"rippleable",directives:{ripple:I["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),S=i("8547"),O=i("58df");function $(t){t.preventDefault()}var V=Object(O["a"])(C["a"],k,S["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=C["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:$},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:$},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),T=["title"],F=V.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(y["a"])(t,T));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),w=i("62ad"),D=i("0fd9"),j=i("b974"),A=i("2fa4"),R=i("8654"),L=Object(f["a"])(h,c,u,!1,null,null,null),E=L.exports;p()(L,{VBtn:m["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCheckbox:F,VCol:w["a"],VRow:D["a"],VSelect:j["a"],VSpacer:A["a"],VTextField:R["a"]});var N=i("d661"),B={name:"Orders",components:{EditOrderForm:E,ConfirmDeleteForm:N["a"]},data:function(){return{imgDefPath:i("c168"),loading:!0,page:1,itemsPerPage:5,pageCount:0,orders:[],cities:[],statuses:[],rateTypes:[],categories:[],orderItem:null,orderKey:null,formKey:1,editOrderForm:!1,confirmDeleteForm:!1,deleteItem:null,doneStatus:null,cancelStatus:null,filters:{city:null,status:null,category:null,rateType:null},defaultFilters:{city:null,status:null,category:null,rateType:null},dateSettings:{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}}},computed:Object(s["a"])({orderHeaders:function(){return[{value:"photo",text:"Фото",searchable:!1,sortable:!1,width:"10%"},{value:"info",text:"Инфо",sortable:!1,width:"18%"},{value:"car",text:"Статус",searchable:!1,sortable:!1,width:"18%"},{value:"additionals",text:"Особенности",searchable:!1,sortable:!1,width:"18%"},{value:"price",text:"Сорт. цены",width:"18%"},{value:"actions",text:"",searchable:!1,sortable:!1,width:"18%"}]}},Object(n["c"])("entities",["getCities","getOrders","getOrderStatuses","getCategories","getRateTypes"])),watch:{filters:{handler:function(t){this.reset||this.setFilters(t),this.reset=!1},deep:!0}},mounted:function(){var t=this;0===this.getCities.length?this.fetchCities().then((function(){t.cities=t.getCities})):this.cities=this.getCities,0===this.getOrderStatuses.length?this.fetchOrderStatuses().then((function(){t.statuses=t.getOrderStatuses})):this.statuses=this.getOrderStatuses,0===this.getCategories.length?this.fetchCategories().then((function(){t.categories=t.getCategories})):this.categories=this.getCategories,0===this.getRateTypes.length?this.fetchRateTypes().then((function(){t.rateTypes=t.getRateTypes})):this.rateTypes=this.getRateTypes,0===this.getOrders.length?this.fetchOrders().then((function(){t.loading=!1,t.orders=t.getOrders})):this.orders=this.getOrders},methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])("entities",["fetchCities","fetchOrders","fetchOrderStatuses","fetchCategories","fetchRateTypes","deleteEntity","editEntity","changeStatusOfOrder"])),{},{getImgPath:function(t){return"undefined"!=typeof t&&null!==t&&t.thumbnail.path.length<1e3?"".concat("https://api-factory.simbirsoft1.com").concat(t.thumbnail.path):this.imgDefPath},formatDate:function(t){return new Date(t).toLocaleString([],this.dateSettings)},resetFilters:function(){this.filters=l()(this.defaultFilters),this.reset=!0,this.orders=this.getOrders},setFilters:function(t){var e=this;this.loading=!0,this.orders=this.getOrders;var i=Object.values(t);i.forEach((function(i,a){if(null!==i){if(0===a){var r=e.orders.filter((function(t){return t.cityId}));e.orders=r.filter((function(e){return e.cityId.id===t.city}))}if(1===a){var s=e.orders.filter((function(t){return t.orderStatusId}));e.orders=s.filter((function(e){return e.orderStatusId.id===t.status}))}if(2===a){var n=e.orders.filter((function(t){return t.carId})),o=n.filter((function(t){return t.carId.categoryId}));e.orders=o.filter((function(e){return e.carId.categoryId.id===t.category}))}if(3===a){var l=e.orders.filter((function(t){return t.rateId}));e.orders=l.filter((function(e){return e.rateId.rateTypeId.id===t.rateType}))}}})),this.loading=!1},toDelete:function(t){this.deleteItem={id:t,entity:"order"},this.confirmDeleteForm=!0,this.formKey++},formSuccessDelete:function(t){var e=this;this.closeForm();var i=t.id;this.deleteEntity(t).then((function(){e.orders=e.orders.filter((function(t){return t.id!==i})),e.$toast.info("Удалено")}))},toEdit:function(t,e){this.orderItem=t,this.orderKey=e,this.formKey++,this.editOrderForm=!0},formSuccess:function(t){var e=this;this.closeForm();var i={item:t,entityName:"order"};this.editEntity(i).then((function(){e.orders[e.orderKey]=t,e.$toast.success("Успешно отредактировано")}))},closeForm:function(){this.editOrderForm=!1,this.confirmDeleteForm=!1},toChangeStatusToDone:function(t,e){var i=this;this.statuses.forEach((function(t){"Подтвержденные"===t.name&&(i.doneStatus=t)})),this.changeStatus(t,e,this.doneStatus)},toChangeStatusToCancel:function(t,e){var i=this;this.statuses.forEach((function(t){"Отмененые"===t.name&&(i.cancelStatus=t)})),this.changeStatus(t,e,this.cancelStatus)},changeStatus:function(t,e,i){var a=this;this.changeStatusOfOrder(t,i).then((function(){a.orders[e].orderStatusId=i,a.$toast.success("Статус изменен")}))},truncate:function(t,e){return t.length>e?t.substring(0,e)+"...":t}})},P=B,W=i("a609"),K=i("8fea"),M=i("169a"),z=i("132d"),q=i("2909"),H=(i("a9e3"),i("d81d"),i("17b3"),i("dc22")),J=i("a9ad"),G=i("de2c"),Q=i("7560"),U=Object(O["a"])(J["a"],Object(G["a"])({onVisible:["init"]}),Q["a"]).extend({name:"v-pagination",directives:{Resize:H["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(s["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,a=Math.floor(e/2),r=this.length-a+1+i;if(this.value>a&&this.value<r){var s=1,n=this.length,o=this.value-a+2,l=this.value+a-2-i,c=o-1===s+1?2:"...",u=l+1===n-1?l+1:"...";return[1,c].concat(Object(q["a"])(this.range(o,l)),[u,this.length])}if(this.value===a){var d=this.value+a-1-i;return[].concat(Object(q["a"])(this.range(1,d)),["...",this.length])}if(this.value===r){var h=this.value-a+1;return[1,"..."].concat(Object(q["a"])(this.range(h,this.length)))}return[].concat(Object(q["a"])(this.range(1,a)),["..."],Object(q["a"])(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":r},on:i?{}:{click:a}},[t(_["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),r=e===this.value,s=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),X=i("3a2f"),Y=Object(f["a"])(P,a,r,!1,null,null,null);e["default"]=Y.exports;p()(Y,{VBtn:m["a"],VBtnToggle:W["a"],VCard:g["a"],VCardText:b["b"],VCardTitle:b["c"],VCheckbox:F,VCol:w["a"],VDataTable:K["a"],VDialog:M["a"],VIcon:z["a"],VPagination:U,VRow:D["a"],VSelect:j["a"],VSpacer:A["a"],VTooltip:X["a"]})},"17b3":function(t,e,i){},"6ca7":function(t,e,i){},c168:function(t,e,i){t.exports=i.p+"img/default_car.a91ab7fb.jpg"},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-d46c10e8.2601ac87.js.map