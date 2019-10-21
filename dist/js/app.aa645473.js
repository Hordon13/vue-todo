(function(t){function e(e){for(var o,i,s=e[0],c=e[1],d=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"12af":function(t,e,n){"use strict";var o=n("55a5"),r=n.n(o);r.a},"307c":function(t,e,n){t.exports=n.p+"img/happytodo.a3a6b06f.png"},"55a5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-page")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-page-container"},[n("div",{staticClass:"main-content-wrapper"},[n("the-header"),n("todo-list",{attrs:{todos:t.todos},on:{"delete:todo":t.deleteTodo,"edit:todo":t.editMode,"done:todo":t.updateTodo}}),n("todo-editor",{attrs:{"to-edit":t.toEdit},on:{"add:todo":t.addTodo,"update:todo":t.updateTodo,"cancel:edit":t.cancelEdit}})],1),n("div",{attrs:{id:"smiley-animation"}})])},s=[],c=n("75fc"),d=(n("96cf"),n("3b8d")),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"the-header-container"},[o("header",[o("img",{attrs:{src:n("307c"),alt:"happy to do logo"}})])])}],p={name:"TheHeader"},f=p,m=(n("12af"),n("2877")),h=Object(m["a"])(f,u,l,!1,null,"190da9fc",null),v=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list-container"},[n("div",{staticClass:"todo-table",attrs:{id:"todo-list"}},[n("table",[t._m(0),t._m(1),n("tbody",t._l(t.todos,(function(e){return n("tr",{key:e.id,class:{done:e.isCompleted}},[n("td",[n("input",{attrs:{type:"checkbox",title:"mark as done"},domProps:{checked:e.isCompleted},on:{change:function(n){return t.markComplete(e)}}})]),n("td",{attrs:{id:"title"}},[t._v(" "+t._s(e.title))]),n("td",[t._v(" "+t._s(t._f("formatDate")(e.createdAt)))]),n("td",{class:{dueToday:t.isDueToday(e.dueAt)&&!e.isCompleted}},[t._v(" "+t._s(e.dueAt))]),n("td",[n("button",{attrs:{id:"editBtn",title:"edit this todo"},on:{click:function(n){return t.editTodo(e)}}},[n("i",{staticClass:"fas fa-pen"})]),n("button",{attrs:{id:"delBtn",title:"delete this todo"},on:{click:function(n){return t.deleteTodo(e.id)}}},[n("i",{staticClass:"fas fa-trash"})])])])})),0)])])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("colgroup",[n("col",{attrs:{id:"col1"}}),n("col",{attrs:{id:"col2"}}),n("col",{attrs:{id:"col3"}}),n("col",{attrs:{id:"col4"}}),n("col",{attrs:{id:"col5"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Done")]),n("th",[t._v("Title")]),n("th",[t._v("Created")]),n("th",[t._v("Due Date")]),n("th",[t._v("Actions")])])])}],g={name:"TodoList",props:{todos:Array},methods:{markComplete:function(t){t.isCompleted=!t.isCompleted,this.$emit("done:todo",t)},deleteTodo:function(t){this.$emit("delete:todo",t)},editTodo:function(t){this.$emit("edit:todo",t)},isDueToday:function(t){return new Date(t)<=new Date}},filters:{formatDate:function(t){return new Date(t).toLocaleDateString("hu-HU")}}},w=g,E=(n("9ee6"),Object(m["a"])(w,b,y,!1,null,"1f8d936f",null)),O=E.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-editor-container"},[null===t.toEdit?n("form",{staticClass:"form-wrapper",on:{submit:function(e){return e.preventDefault(),t.submitTodo(e)}}},[n("h3",[t._v("Add a New Todo")]),n("div",{staticClass:"input-wrapper",class:{hasErr:t.submitError&&t.emptyTitleAdd}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItem.title,expression:"todoItem.title"}],attrs:{type:"text",placeholder:"What to do?"},domProps:{value:t.todoItem.title},on:{input:function(e){e.target.composing||t.$set(t.todoItem,"title",e.target.value)}}}),n("div",{staticClass:"datePicker"},[n("date-time-picker",{attrs:{format:"YYYY. MM. DD.",formatted:"l",color:"#50c1f2","min-date":t.today,"only-date":"","auto-close":"","no-button":"","no-label":"",overlay:"","no-value-to-custom-elem":""},model:{value:t.todoItem.dueAt,callback:function(e){t.$set(t.todoItem,"dueAt",e)},expression:"todoItem.dueAt"}},[n("button",{attrs:{type:"button"}},[n("i",{staticClass:"far fa-calendar-check"}),t._v("\n            "+t._s(""===t.todoItem.dueAt?"Due Date":t.todoItem.dueAt)+"\n          ")])])],1)]),t._m(0)]):n("form",{staticClass:"form-wrapper",on:{submit:function(e){return e.preventDefault(),t.updateTodo(e)}}},[n("h3",[t._v("Edit This Todo")]),n("div",{staticClass:"input-wrapper",class:{hasErr:t.editError&&t.emptyTitleEdit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.toEdit.title,expression:"toEdit.title"}],attrs:{type:"text",placeholder:"edit the todo here"},domProps:{value:t.toEdit.title},on:{input:function(e){e.target.composing||t.$set(t.toEdit,"title",e.target.value)}}}),n("div",{staticClass:"datePicker"},[n("date-time-picker",{attrs:{format:"YYYY. MM. DD.",formatted:"l",color:"#50c1f2","min-date":t.today,"only-date":"","auto-close":"","no-button":"","no-label":"",overlay:"","no-value-to-custom-elem":""},model:{value:t.toEdit.dueAt,callback:function(e){t.$set(t.toEdit,"dueAt",e)},expression:"toEdit.dueAt"}},[n("button",{attrs:{type:"button"}},[n("i",{staticClass:"far fa-calendar-check"}),t._v("\n            "+t._s("Someday"===t.toEdit.dueAt?"Someday":t.toEdit.dueAt)+"\n          ")])])],1)]),n("div",{staticClass:"button-wrapper"},[n("button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("save")]),n("button",{staticClass:"cancel",attrs:{type:"reset"},on:{click:function(e){return e.preventDefault(),t.cancelEdit(e)}}},[t._v("cancel")])])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-wrapper"},[n("button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("add")]),n("button",{staticClass:"cancel",attrs:{type:"reset"}},[t._v("reset")])])}],j=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),k=n("e30a"),x=n.n(k);n("b40d");function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(j["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P={name:"TodoEditor",components:{DateTimePicker:x.a},data:function(){return{todoItem:{title:"",dueAt:""},today:(new Date).toISOString().substring(0,10),submitError:!1,editError:!1}},props:{toEdit:Object},methods:{submitTodo:function(){if(""!==this.todoItem.title){this.submitError=!1;var t=new Date,e=!1,n=D({},this.todoItem,{createdAt:t,isCompleted:e});this.$emit("add:todo",n),this.todoItem.title="",this.todoItem.dueAt=""}else this.submitError=!0},updateTodo:function(){""!==this.toEdit.title?(this.editError=!1,this.$emit("update:todo",this.toEdit)):this.editError=!0},cancelEdit:function(){this.$emit("cancel:edit",this.toEdit)}},computed:{emptyTitleAdd:function(){return""===this.todoItem.title},emptyTitleEdit:function(){return""===this.toEdit.title}}},A=P,$=(n("8835"),Object(m["a"])(A,_,T,!1,null,"dbf9ddba",null)),R=$.exports,I=n("d225"),S=n("b0b4"),M=new(function(){function t(){Object(I["a"])(this,t)}return Object(S["a"])(t,[{key:"get",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return o=t.sent,t.next=6,o.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"put",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}()),Y={name:"MainPage",components:{TheHeader:v,TodoList:O,TodoEditor:R},data:function(){return{todos:[],toEdit:null,cachedTodo:null}},methods:{addTodo:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return""===e.dueAt&&(e.dueAt="Someday"),t.next=3,M.post("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos",e);case 3:n=t.sent,this.todos=[].concat(Object(c["a"])(this.todos),[n]),o=document.getElementById("todo-list"),o.scrollTop=o.scrollHeight+100;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteTodo:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.delete("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/".concat(e));case 2:this.todos=this.todos.filter((function(t){return t.id!==e}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editMode:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===this.toEdit){t.next=7;break}return t.next=3,M.put("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/".concat(this.toEdit.id),this.toEdit);case 3:this.toEdit=e,this.cachedTodo=Object.assign({},e),t.next=9;break;case 7:this.toEdit=e,this.cachedTodo=Object.assign({},e);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),updateTodo:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.put("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/".concat(e.id),e);case 2:this.todos=this.todos.map((function(t){return t.id===n.toEdit.id?e:t})),this.toEdit=null;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancelEdit:function(t){Object.assign(t,this.cachedTodo),this.toEdit=null}},created:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.get("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos");case 2:this.todos=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},N=Y,H=(n("dd80"),Object(m["a"])(N,i,s,!1,null,"64b39fb0",null)),J=H.exports,L={name:"app",components:{MainPage:J}},U=L,B=(n("034f"),Object(m["a"])(U,r,a,!1,null,null,null)),F=B.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(F)}}).$mount("#app")},"64a9":function(t,e,n){},"78cf":function(t,e,n){},8835:function(t,e,n){"use strict";var o=n("dce9"),r=n.n(o);r.a},"9ee6":function(t,e,n){"use strict";var o=n("78cf"),r=n.n(o);r.a},a9d7:function(t,e,n){},dce9:function(t,e,n){},dd80:function(t,e,n){"use strict";var o=n("a9d7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.aa645473.js.map