(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(t,e,n){"use strict";n.r(e);var l=n(77),r=(n(38),n(168)),o=n.n(r),c={name:"SignupForm",data:function(){return{email:"",password:""}},methods:{signup:function(){var t=this;o.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.replace("/")},function(t){alert("Oops. "+t.message)})}}},d=n(9),v=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",[n("v-container",{staticClass:"pa-0"},[n("v-layout",[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{placeholder:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-btn",{on:{click:t.signup}},[t._v("Sign Up")])],1)],1)],1)],1)},[],!1,null,null,null).exports,m={name:"SignupPage",components:{Logo:l.a,SignupForm:v}},f=Object(d.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"my-4"},[e("v-card-title",{staticClass:"headline text-xs-center",attrs:{"d-block":""}},[this._v("Signup")]),this._v(" "),e("v-card-text",[e("signup-form")],1),this._v(" "),e("v-card-actions")],1)},[],!1,null,null,null);e.default=f.exports}}]);