(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-424361f4"],{"110d":function(e,t,a){},"72c3":function(e,t,a){"use strict";var s=a("110d"),n=a.n(s);n.a},"9d82":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"topLable"},[e._m(0),a("div",{staticClass:"info"},[a("div",{staticClass:"butItem"},[a("span",{staticClass:"label"},[e._v("设备编号")]),a("el-input",{attrs:{size:"mini",placeholder:"请输入编号"},on:{input:e.setNumber},model:{value:e.listQuery.metercode,callback:function(t){e.$set(e.listQuery,"metercode",t)},expression:"listQuery.metercode"}})],1),a("div",{staticClass:"butItem"},[a("span",{staticClass:"label"},[e._v("开始时间")]),a("el-date-picker",{attrs:{size:"mini",type:"date",placeholder:"选择日期"},on:{change:e.setStTime},model:{value:e.listQuery.stTime,callback:function(t){e.$set(e.listQuery,"stTime",t)},expression:"listQuery.stTime"}})],1),a("div",{staticClass:"butItem"},[a("span",{staticClass:"label"},[e._v("结束时间")]),a("el-date-picker",{attrs:{size:"mini",type:"date",placeholder:"选择日期"},on:{change:e.setEndTime},model:{value:e.listQuery.endTime,callback:function(t){e.$set(e.listQuery,"endTime",t)},expression:"listQuery.endTime"}})],1)])]),a("div",{staticClass:"content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"Loading"}},[a("el-table-column",{attrs:{label:"企业名称",prop:"companyname",width:"100",align:"center"}}),a("el-table-column",{attrs:{label:"仪表编号",prop:"metercode",width:"120"}}),a("el-table-column",{attrs:{label:"管理主机号",prop:"hostcode",width:"120"}}),a("el-table-column",{attrs:{label:"仪表名称",prop:"metername",width:"120"}}),a("el-table-column",{attrs:{label:"采集日期",width:"155"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.curtime)+" ")]}}])}),a("el-table-column",{attrs:{label:"温度",prop:"tem"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.temalert?a("span",{staticClass:"red"},[e._v(e._s(t.row.tem)+" ℃")]):e._e(),0==t.row.temalert?a("span",{staticClass:"green"},[e._v(e._s(t.row.tem)+" ℃")]):e._e(),-1==t.row.temalert?a("span",{staticClass:"red"},[e._v(e._s(t.row.tem)+" ℃")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"温度阈值",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.mintem)+" / "+e._s(t.row.maxtem))]}}])}),a("el-table-column",{attrs:{label:"温度级别",prop:"temalert",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.temalert?a("span",{staticClass:"red"},[e._v("高温报警")]):e._e(),0==t.row.temalert?a("span",{staticClass:"green"},[e._v("正常")]):e._e(),-1==t.row.temalert?a("span",{staticClass:"red"},[e._v("低温报警")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"湿度",prop:"hum",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.humalert?a("span",{staticClass:"red"},[e._v(e._s(t.row.hum))]):e._e(),0==t.row.humalert?a("span",{staticClass:"green"},[e._v(e._s(t.row.hum))]):e._e(),-1==t.row.humalert?a("span",{staticClass:"red"},[e._v(e._s(t.row.hum))]):e._e()]}}])}),a("el-table-column",{attrs:{label:"湿度阈值",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.minhum)+" / "+e._s(t.row.maxhum))]}}])}),a("el-table-column",{attrs:{label:"湿度级别",prop:"humalert"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.humalert?a("span",{staticClass:"red"},[e._v("高湿报警")]):e._e(),0==t.row.humalert?a("span",{staticClass:"green"},[e._v("正常")]):e._e(),-1==t.row.humalert?a("span",{staticClass:"red"},[e._v("低湿报警")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"设备状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(0==t.row.state?"停用":1==t.row.state?"启用":"异常")+" ")]}}])})],1),a("el-pagination",{staticClass:"pageList",attrs:{background:"",small:"",layout:"prev, next"},on:{"current-change":e.handleCurrentChange}})],1),a("el-dialog",{staticClass:"meterAdd",attrs:{title:e.title,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("LineChart",{attrs:{width:"100%",data:e.dataItem}})],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tit"},[a("span",[a("i",{staticClass:"icon"},[e._v("")]),e._v(" 报警记录")])])}],r=(a("96cf"),a("3b8d")),i=a("d225"),l=a("b0b4"),u=a("308d"),c=a("6bb5"),o=a("4e2b"),m=a("9ab4"),d=a("60a3"),p=a("ed5f"),h=a("0926"),f=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.list=[],e.listLoading=!0,e.dialogFormVisible=!1,e.title="温度曲线",e.dataItem={},e.sub="",e.listQuery={pagesize:10,nextpage:"",prepage:"",stTime:"",endTime:"",metercode:""},e}return Object(o["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){this.getList()}},{key:"getList",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,console.log(this.listQuery),e.next=4,Object(p["b"])(this.listQuery);case 4:t=e.sent,a=t.data,this.list=a.items,this.listQuery.prepage=a.prepage,this.listQuery.nextpage=a.nextpage,console.log(this.listQuery),this.listLoading=!1;case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"changeHandel",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.dialogFormVisible=!0,"tem"===a?(this.title="温度曲线",this.dataItem={name:"温度",xAxis:["13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55"],data:[12,11,12,15,12,16,12,22,18,19,13,15]}):(this.title="湿度曲线",this.dataItem={name:"湿度",xAxis:["13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55"],data:[120,110,125,145,122,165,122,220,182,191,134,150]});case 2:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"handleCurrentChange",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.getList();case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"setNumber",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.listQuery.pagesize=10,this.getList();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"setStTime",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.listQuery.endTime&&t>this.listQuery.endTime&&(this.listQuery.stTime=this.listQuery.endTime),this.listQuery.endTime&&(this.listQuery.nextpage="",this.listQuery.pagesize=10,this.getList());case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"setEndTime",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.listQuery.stTime&&t<this.listQuery.stTime&&(this.listQuery.endTime=this.listQuery.stTime),this.listQuery.stTime&&(this.listQuery.nextpage="",this.listQuery.pagesize=10,this.getList());case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(d["c"]);f=m["a"]([Object(d["a"])({name:"callPliceLog",filters:{parseTime:function(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDay()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())}},components:{LineChart:h["a"]}})],f);var b=f,g=b,v=(a("72c3"),a("2877")),w=Object(v["a"])(g,s,n,!1,null,"c3a717c0",null);t["default"]=w.exports},ed5f:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i});var s=a("b775"),n=function(e){return Object(s["a"])({url:"device/monitor/realtime",method:"get",params:e})},r=function(e){return Object(s["a"])({url:"apache-druid/query/select",method:"get",params:e})},i=function(e){return Object(s["a"])({url:"/apache-druid/query/select",method:"get",params:e})}}}]);
//# sourceMappingURL=chunk-424361f4.ce08280e.js.map