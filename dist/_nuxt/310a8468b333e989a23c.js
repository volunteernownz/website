(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(t,e,r){var content=r(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("14b895fe",content,!0,{sourceMap:!1})},172:function(t,e,r){t.exports=r.p+"img/9843576.jpg"},173:function(t,e,r){"use strict";var l=r(168);r.n(l).a},174:function(t,e,r){(t.exports=r(29)(!1)).push([t.i,".profile_img{max-width:100%}",""])},187:function(t,e,r){"use strict";r.r(e);r(40),r(173);var l=r(9),n=Object(l.a)({},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",[l("v-layout",{staticClass:"py-3"},[l("v-flex",{attrs:{xs3:""}},[l("img",{staticClass:"profile_img",attrs:{src:r(172)}})]),t._v(" "),l("v-flex",{attrs:{xs9:""}},[l("v-card-title",{staticClass:"headline py-0",attrs:{"primary-title":""}},[t._v("\n        User Name\n      ")]),t._v(" "),l("v-card-text",[l("em",[t._v(t._s(t.$store.state.user.email))]),l("br"),t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vero.\n      ")])],1)],1),t._v(" "),l("v-card-actions",[l("v-btn",[t._v("Edit profile")])],1)],1)},[],!1,null,null,null).exports,o={name:"JobList",components:{JobListingSingle:Object(l.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",[e("v-layout",{attrs:{"align-content-space-around":""}},[e("v-flex",{attrs:{grow:""}},[e("v-card-title",[this._v("Single job listing")])],1),this._v(" "),e("v-flex",{attrs:{shrink:""}},[e("v-card-actions",[e("v-btn",{attrs:{color:"purple darken-4 white--text"}},[this._v("Apply")])],1)],1)],1)],1)},[],!1,null,null,null).exports}},c={components:{UserProfile:n,JobList:Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("job-listing-single")],1)},[],!1,null,null,null).exports},beforeCreate:function(){this.$store.state.user.email||this.$router.replace("/login")}},v=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticClass:"my-3",attrs:{"justify-center":""}},[e("v-flex",{staticClass:"mx-3",attrs:{xs12:"",md5:""}},[e("user-profile")],1),this._v(" "),e("v-flex",{attrs:{xs12:"","md-7":""}},[e("job-list")],1)],1)},[],!1,null,null,null);e.default=v.exports}}]);