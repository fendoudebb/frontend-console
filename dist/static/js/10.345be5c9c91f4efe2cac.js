webpackJsonp([10],{ZWh4:function(i,t){},"o+ug":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("Dd8w"),s=e.n(n),a=e("SJI6"),o={name:"links",data:function(){var i=this;return{roles:localStorage.getItem("roles"),linkId:"",isModify:!1,websiteName:"",newLink:"",owner:"",ownerEmail:"",showLinkModal:!1,linkTitle:"",linksListTableLoading:!1,linksList:[],pageSize:this.getLinksListSize(),totalCount:1,currentPage:1,linksListColumns:[{title:"排序",key:"sort",align:"center",ellipsis:!0,minWidth:150},{title:"ID",key:"id",align:"center",ellipsis:!0,minWidth:200},{title:"网站名称",key:"websiteName",align:"center",ellipsis:!0,minWidth:200},{title:"链接",key:"link",align:"center",ellipsis:!0,minWidth:200},{title:"站长",key:"owner",align:"center",ellipsis:!0,minWidth:200},{title:"站长邮箱",key:"ownerEmail",align:"center",ellipsis:!0,minWidth:200},{title:"状态",key:"status",align:"center",ellipsis:!0,minWidth:100,render:function(i,t){var e=t.row.status,n="",s="";return"ONLINE"===e?(n="上线",s="green"):"OFFLINE"===e&&(n="下线",s="red"),i("Tag",{props:{color:s}},n)}},{title:"操作",key:"action",align:"center",ellipsis:!0,minWidth:150,render:function(t,e){var n=[];if(i.roles.indexOf("ROLE_ADMIN")>-1){var s="ONLINE"===e.row.status,a=t("Button",{props:{type:s?"error":"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){i.auditLink(s,e)}}},s?"下线":"上线"),o=t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){i.modifyContent(e)}}},"修改"),l=t("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){i.modifySort(e)}}},"排序");n.push(a),n.push(o),n.push(l)}return t("div",[n])}}]}},methods:s()({},Object(a.mapMutations)(["setLinksListPage","setModifyLinkSortId","setLinkSort","setAddWebsiteName","setAddNewLink","setAddOwner","setAddOwnerEmail","setEditLinkId","setEditWebsiteName","setEditLink","setEditOwner","setEditOwnerEmail","setAuditLinkId","setStatus"]),Object(a.mapGetters)(["getLinksListSize"]),Object(a.mapActions)(["handleLinksList","handleModifyLinkSort","handleAddNewLink","handleEditLink","handleAuditLink"]),{onModalCancelClick:function(){this.linkId="",this.websiteName="",this.newLink="",this.owner="",this.ownerEmail=""},onModalOkClick:function(){var i=this;if(this.websiteName)if(this.newLink)if(this.owner){if(this.isModify){if(!this.linkId)return void this.$Message.error("链接ID不能为空!");this.setEditLinkId(this.linkId),this.setEditWebsiteName(this.websiteName),this.setEditLink(this.newLink),this.setEditOwner(this.owner),this.setEditOwnerEmail(this.ownerEmail),this.handleEditLink().then(function(t){i.$Message.success("修改成功！"),i.getLinksList()})}else this.setAddWebsiteName(this.websiteName),this.setAddNewLink(this.newLink),this.setAddOwner(this.owner),this.setAddOwnerEmail(this.ownerEmail),this.handleAddNewLink().then(function(t){i.$Message.success("添加成功！"),i.getLinksList()});this.newLink="",this.websiteName="",this.newLink="",this.owner="",this.ownerEmail=""}else this.$Message.error("网站战长不能为空!");else this.$Message.error("网站链接不能为空!");else this.$Message.error("网站名称不能为空!")},addNewLink:function(){this.linkTitle="新建友链",this.false=!0,this.showLinkModal=!0},modifyContent:function(i){this.linkTitle="修改友链",this.isModify=!0,this.showLinkModal=!0,this.linkId=i.row.id,this.websiteName=i.row.websiteName,this.newLink=i.row.link,this.owner=i.row.owner,this.ownerEmail=i.row.ownerEmail},auditLink:function(i,t){var e=this;this.setAuditLinkId(t.row.id),this.setStatus(i?"OFFLINE":"ONLINE"),this.handleAuditLink().then(function(t){var n=i?"下线成功！":"上线成功！";e.$Message.success(n),e.getLinksList()})},modifySort:function(i){var t=this;this.$Modal.confirm({render:function(i){return i("Input",{props:{value:t.linkSort,autofocus:!0,placeholder:"请输入排序..."},on:{input:function(i){t.linkSort=i}}})},onOk:function(){t.setModifyLinkSortId(i.row.id),t.setLinkSort(t.linkSort),t.handleModifyLinkSort().then(function(i){t.$Message.success("修改成功！"),t.linkSort="",t.getLinksList()})}})},changePage:function(i){this.setLinksListPage(i),this.getLinksList()},getLinksList:function(){var i=this;this.linksListTableLoading=!0,this.handleLinksList().then(function(t){i.totalCount=t.data.totalCount,i.linksList=t.data.links,i.linksListTableLoading=!1}).catch(function(t){i.linksListTableLoading=!1})}}),created:function(){this.getLinksList()}},l={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticStyle:{margin:"20px",padding:"20px","background-color":"white"}},[this.roles.indexOf("ROLE_ADMIN")>-1?e("div",{staticStyle:{"margin-bottom":"20px"}},[e("Button",{attrs:{type:"primary"},on:{click:i.addNewLink}},[e("Icon",{attrs:{type:"plus-round"}}),i._v("\n      新建友链\n    ")],1)],1):i._e(),i._v(" "),e("Table",{attrs:{border:"",stripe:"",data:i.linksList,columns:i.linksListColumns,loading:i.linksListTableLoading}}),i._v(" "),e("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[e("Page",{attrs:{"page-size":i.pageSize,total:i.totalCount,current:i.currentPage,"show-elevator":"","show-total":""},on:{"on-change":i.changePage}})],1),i._v(" "),e("Modal",{attrs:{title:i.linkTitle},on:{"on-ok":i.onModalOkClick,"on-cancel":i.onModalCancelClick},model:{value:i.showLinkModal,callback:function(t){i.showLinkModal=t},expression:"showLinkModal"}},[e("div",[i._v("\n      网站名称："),e("Input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入网站名称"},model:{value:i.websiteName,callback:function(t){i.websiteName=t},expression:"websiteName"}})],1),i._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[i._v("\n      网站链接："),e("Input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入网站链接"},model:{value:i.newLink,callback:function(t){i.newLink=t},expression:"newLink"}})],1),i._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[i._v("\n      网站站长："),e("Input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入网站站长"},model:{value:i.owner,callback:function(t){i.owner=t},expression:"owner"}})],1),i._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[i._v("\n      站长邮箱："),e("Input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入站长邮箱"},model:{value:i.ownerEmail,callback:function(t){i.ownerEmail=t},expression:"ownerEmail"}})],1)])],1)},staticRenderFns:[]};var r=e("VU/8")(o,l,!1,function(i){e("ZWh4")},"data-v-0f15872d",null);t.default=r.exports}});
//# sourceMappingURL=10.345be5c9c91f4efe2cac.js.map