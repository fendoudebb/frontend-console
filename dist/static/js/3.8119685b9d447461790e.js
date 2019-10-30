webpackJsonp([3],{"9Bp2":function(t,e){},Ahni:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),o=n.n(s),i=n("SJI6"),a={name:"post-detail",props:{row:Object},data:function(){return{isAdmin:localStorage.getItem("roles").indexOf("ROLE_ADMIN")>-1}},methods:o()({},Object(i.mapMutations)(["setAddTopicPostId","setDeleteTopicPostId","setAddTopic","setDeleteTopic"]),Object(i.mapActions)(["handleAddPostTopic","handleDeletePostTopic"]),{handleClose:function(t){var e=this;this.$Modal.confirm({title:"删除分类",content:"是否删除《"+this.row.title+"》一文的 "+t+" 分类？",okText:"确认删除",closable:!0,onOk:function(){e.setDeleteTopicPostId(e.row.id),e.setDeleteTopic(t),e.handleDeletePostTopic().then(function(n){e.row.topics.splice(e.row.topics.indexOf(t),1),e.$Message.success("删除成功！")})}})},addTopicFunc:function(){var t=this;this.$Modal.confirm({render:function(e){return e("Input",{props:{value:t.newTopic,autofocus:!0,placeholder:"请输入标签名..."},on:{input:function(e){t.newTopic=e}}})},onOk:function(){t.setAddTopicPostId(t.row.id),t.setAddTopic(t.newTopic),t.handleAddPostTopic().then(function(e){t.row.hasOwnProperty("topics")?t.row.topics.push(t.newTopic):t.row.topics=[t.newTopic],t.newTopic="",t.$Message.success("添加成功！")})}})}})},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("span",{staticClass:"expand-key"},[t._v("标签: ")]),t._v(" "),t._l(t.row.topics,function(e,s){return n("div",{key:s,staticStyle:{display:"inline-block"}},[n("Tag",{attrs:{type:"border",closable:t.isAdmin,color:"green"},on:{"on-close":function(n){return t.handleClose(e)}}},[t._v(t._s(e))])],1)}),t._v(" "),t.row.topics.length<3?n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.addTopicFunc}},[t._v("添加")]):t._e()],2),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"expand-key"},[t._v("创建时间: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s(t.row.postTime))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"expand-key"},[t._v("是否原创: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s("COPY"===t.row.postProp?"转载":"原创"))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"expand-key"},[t._v("是否公开: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s("PRIVATE"===t.row.postStatus?"个人":"公开"))]),t._v(" "),n("br"),t._v(" "),n("br")])},staticRenderFns:[]};var c=n("C7Lr")(a,r,!1,function(t){n("kp52")},"data-v-cadaa3fc",null).exports,l={name:"post-comment",props:{row:Object}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"expand-key"},[t._v("ID: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s(t.row.commentId))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"expand-key"},[t._v("IP: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s(t.row.ip))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"expand-key"},[t._v("评论: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s(t.row.content))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"expand-key"},[t._v("User-Agent: ")]),t._v(" "),n("span",{staticClass:"expand-value"},[t._v(t._s(t.row.userAgent))])])},staticRenderFns:[]};var d=n("C7Lr")(l,p,!1,function(t){n("xH0k")},"data-v-772f6767",null).exports,m={name:"post-list",components:{expandRow:c,expandRow2:d},data:function(){var t=this;return{watchCommentPostId:"",commentPageSize:this.getPostCommentListSize(),commentTotalCount:1,commentCurrentPage:1,commentListTableLoading:!1,commentModal:!1,postListTableLoading:!1,roles:localStorage.getItem("roles"),pageSize:this.getListSize(),totalCount:1,currentPage:1,postList:[],postListColumns:[{title:"#",type:"expand",align:"center",width:50,render:function(t,e){return t(c,{props:{row:e.row}})}},{title:"ID",key:"postId",align:"center",ellipsis:!0,minWidth:80},{title:"标题",key:"title",align:"center",ellipsis:!0,minWidth:300,render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.title}},e.row.title)])}},{title:"阅读数",key:"pv",align:"center",ellipsis:!0,minWidth:100},{title:"评论数",key:"commentCount",align:"center",ellipsis:!0,minWidth:100},{title:"点赞数",key:"likeCount",align:"center",ellipsis:!0,minWidth:100},{title:"状态",key:"postStatus",align:"center",ellipsis:!0,minWidth:100,render:function(t,e){var n=e.row.postStatus,s="",o="";return"AUDIT"===n?(s="待审核",o="orange"):"ONLINE"===n?(s="上线",o="green"):"OFFLINE"===n?(s="下线",o="red"):"PRIVATE"===n?(s="私人",o="lightskyblue"):"DRAFT"===n&&(s="草稿",o="lightskyblue"),t("Tag",{props:{color:o}},s)}},{title:"操作",key:"action",align:"center",ellipsis:!0,minWidth:250,render:function(e,n){var s=n.row.postStatus,o=[];if(t.roles.indexOf("ROLE_ADMIN")>-1){var i=e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.watchComment(n)}}},"评论"),a=e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.online(n.index)}}},"上线"),r=e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.offline(n.index)}}},"下线"),c=e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(n.row.id)}}},"编辑");n.row.commentCount>0&&o.push(i),"AUDIT"===s||"OFFLINE"===s?o.push(a):"ONLINE"===s&&o.push(r),o.push(c)}if("ONLINE"===s){var l=e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.watchPostById(n.row.postId)}}},"查看");o.push(l)}return e("div",[o])}}],commentList:[],commentColumns:[{type:"expand",width:50,render:function(t,e){return t(d,{props:{row:e.row}})}},{title:"楼层",key:"floor",align:"center"},{title:"昵称",key:"nickname",align:"center"},{title:"留言时间",key:"commentTime",align:"center"},{title:"浏览器",key:"browser",align:"center"},{title:"操作系统",key:"os",align:"center"},{title:"状态",key:"status",align:"center",render:function(t,e){var n=e.row.status,s="",o="";return"ONLINE"===n?(s="上线",o="green"):"OFFLINE"===n&&(s="下线",o="red"),t("Tag",{props:{color:o}},s)}},{title:"操作",key:"action",align:"center",render:function(e,n){var s=[];if(t.roles.indexOf("ROLE_ADMIN")>-1){var o=e("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.deleteComment(n)}}},"删除");"OFFLINE"===n.row.status||s.push(o)}return e("div",[s])}}]}},methods:o()({},Object(i.mapMutations)(["setListPage","setAuditPostId","setAuditStatus","setEditPostId","setCommentPostId","setPostCommentListPage","setCommentId"]),Object(i.mapGetters)(["getListSize","getPostCommentListSize"]),Object(i.mapActions)(["handlePostList","handlePostStatus","handlePostCommentList","handleDeletePostComment"]),{watchPostById:function(t){window.open("https://www.zhangbj.com/p/"+t+".html")},onVisibleChange:function(t){t||(this.watchCommentPostId="",this.commentList=[],this.commentCurrentPage=1,this.commentTotalCount=1)},deleteComment:function(t){var e=this;this.setCommentId(t.row.commentId),this.handleDeletePostComment().then(function(t){e.$Message.success("删除成功!"),e.getCommentList()})},watchComment:function(t){this.watchCommentPostId=t.row.id,this.commentModal=!0,this.getCommentList()},online:function(t){this.modifyPostStatus(t,"ONLINE")},offline:function(t){this.modifyPostStatus(t,"OFFLINE")},edit:function(t){this.setEditPostId(t),this.$router.push({name:"publish"})},modifyPostStatus:function(t,e){var n=this,s=this.postList[t];this.setAuditPostId(s.postId),this.setAuditStatus(e),this.handlePostStatus().then(function(s){n.postList[t].postStatus=e,"ONLINE"===e?n.$Message.success("文章上线成功!"):"OFFLINE"===e&&n.$Message.warning("文章已下线!")})},commentChangePage:function(t){this.commentCurrentPage=t,this.setPostCommentListPage(t),this.getCommentList()},changePage:function(t){this.currentPage=t,this.setListPage(t),this.getPostList()},getCommentList:function(){var t=this;this.commentListTableLoading=!0,this.setCommentPostId(this.watchCommentPostId),this.handlePostCommentList().then(function(e){t.commentTotalCount=e.data.commentCount,t.commentList=e.data.postComment,t.commentListTableLoading=!1}).catch(function(e){t.commentListTableLoading=!1})},getPostList:function(){var t=this;this.postListTableLoading=!0,this.handlePostList().then(function(e){t.totalCount=e.data.totalCount,t.postList=e.data.post,t.postListTableLoading=!1}).catch(function(e){t.postListTableLoading=!1})}}),created:function(){this.getPostList()},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"20px",padding:"20px","background-color":"white"}},[n("Table",{attrs:{border:"",stripe:"","highlight-row":!0,data:t.postList,columns:t.postListColumns,loading:t.postListTableLoading}}),t._v(" "),n("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[n("Page",{attrs:{"page-size":t.pageSize,total:t.totalCount,current:t.currentPage,"show-elevator":"","show-total":""},on:{"on-change":t.changePage}})],1),t._v(" "),n("Modal",{attrs:{width:1e3,title:"文章评论"},on:{"on-visible-change":t.onVisibleChange},model:{value:t.commentModal,callback:function(e){t.commentModal=e},expression:"commentModal"}},[n("Table",{attrs:{stripe:"",border:"",columns:t.commentColumns,data:t.commentList,loading:t.commentListTableLoading}}),t._v(" "),n("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[n("Page",{attrs:{"page-size":t.commentPageSize,total:t.commentTotalCount,current:t.commentCurrentPage,"show-elevator":"","show-total":""},on:{"on-change":t.commentChangePage}})],1)],1)],1)},staticRenderFns:[]};var h=n("C7Lr")(m,u,!1,function(t){n("9Bp2")},"data-v-d97e62e6",null);e.default=h.exports},kp52:function(t,e){},xH0k:function(t,e){}});
//# sourceMappingURL=3.8119685b9d447461790e.js.map