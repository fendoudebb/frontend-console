webpackJsonp([4],{IYDr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),s={name:"page-view-detail",props:{row:Object}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("span",{staticClass:"expand-key"},[e._v("ID: ")]),e._v(" "),i("span",{staticClass:"expand-value"},[e._v(e._s(e.row.id))]),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("span",{staticClass:"expand-key"},[e._v("Referer: ")]),e._v(" "),i("span",{staticClass:"expand-value"},[e._v(e._s(e.row.referer))]),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("span",{staticClass:"expand-key"},[e._v("User-Agent: ")]),e._v(" "),i("span",{staticClass:"expand-value"},[e._v(e._s(e.row.userAgent))])])},staticRenderFns:[]};var l=i("VU/8")(s,r,!1,function(e){i("vZor")},"data-v-635ab478",null).exports,o=i("SJI6"),c={name:"page-view",components:{expandRow:l},data:function(){var e=this;return{pageViewListTableLoading:!1,pageViewList:[],pageSize:this.getPageViewListSize(),totalCount:1,currentPage:1,pageViewListColumns:[{type:"expand",width:50,render:function(e,t){return e(l,{props:{row:t.row}})}},{title:"URL",key:"url",align:"center",ellipsis:!0,minWidth:150},{title:"访问时间",key:"createTime",align:"center",ellipsis:!0,minWidth:150},{title:"浏览器",key:"browser",align:"center",ellipsis:!0,minWidth:150},{title:"操作系统",key:"os",align:"center",ellipsis:!0,minWidth:150},{title:"IP",key:"ip",align:"center",ellipsis:!0,minWidth:150},{title:"地址",key:"address",align:"center",ellipsis:!0,minWidth:200},{title:"操作",key:"action",align:"center",ellipsis:!0,minWidth:150,render:function(t,i){var a=i.row.url;return t("div",[null!=a&&0===a.indexOf("/p/")?t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.watchPost(a)}}},"查看文章"):t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.watchPost(a)}}},"查看页面")])}}]}},methods:n()({},Object(o.mapMutations)(["setPageViewListPage"]),Object(o.mapGetters)(["getPageViewListSize"]),Object(o.mapActions)(["handlePageViewList"]),{watchPost:function(e){window.open("https://www.zhangbj.com"+e)},changePage:function(e){this.setPageViewListPage(e),this.getPageViewList()},getPageViewList:function(){var e=this;this.pageViewListTableLoading=!0,this.handlePageViewList().then(function(t){e.totalCount=t.data.totalCount,e.pageViewList=t.data.pageView,e.pageViewListTableLoading=!1}).catch(function(t){e.pageViewListTableLoading=!1})}}),created:function(){this.getPageViewList()}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{margin:"20px",padding:"20px","background-color":"white"}},[i("Table",{attrs:{border:"",stripe:"",data:e.pageViewList,columns:e.pageViewListColumns,loading:e.pageViewListTableLoading}}),e._v(" "),i("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[i("Page",{attrs:{"page-size":e.pageSize,total:e.totalCount,current:e.currentPage,"show-elevator":"","show-total":""},on:{"on-change":e.changePage}})],1)],1)},staticRenderFns:[]};var g=i("VU/8")(c,p,!1,function(e){i("MAA2")},null,null);t.default=g.exports},MAA2:function(e,t){},vZor:function(e,t){}});
//# sourceMappingURL=4.ed84bbdaf605a20ed606.js.map