!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=39)}({39:function(e,t,n){e.exports=n(40)},40:function(e,t,n){var i,l,a;!function(n,s){l=[],i=s,void 0!==(a="function"==typeof i?i.apply(t,l):i)&&(e.exports=a)}(0,function(){"use strict";var e=function(e,t){var n,i=t(),l=[],a="",s="",r=function(){i.on("click",".btnDeleteEmail",function(e){e.preventDefault(),t(this).css({display:"none"}).siblings().css({display:"inline-block"})}),i.on("click",".btnDeleteEmailConfirm",function(e){e.preventDefault();var i=t(this),l=i.closest("li.list-group-item").find("[name=email]").val();n.delete(l)}),i.on("click",".btnDeleteEmailCancle",function(e){e.preventDefault();var n=t(this);n.siblings().addBack().hide(),n.parent().find(".btnDeleteEmail").show()}),i.on("click","#__xe_emailAddBtn",function(){var e=t("#__xe_addedEmailInput"),i=e.val();i&&(e.val(""),n.add(i))}),i.on("change","[name=email]",function(e){var n=t(this),i=n.closest("li.list-group-item"),l=i.closest("ul");i.siblings().each(function(){var e=t(this);if(!e.find("> span.pull-right").length){var n='<span class="pull-right">';n+='<a href="#" class="btn btn-sm btn-link btnDeleteEmail" style="display: inline-block;">삭제</a>',n+='<a href="#" class="btn btn-sm btn-link btnDeleteEmailConfirm" style="display: none;">삭제확인</a>',n+='<a href="#" class="btn btn-sm btn-link btnDeleteEmailCancle" style="display: none;">취소</a>',n+="</span>",e.append(n)}}),i.find("> span.pull-right").length>0&&i.find("> span.pull-right").remove(),l.prepend(i.detach())})};return{init:function(e){return n=this,i=e.$wrapper,a=e.email,s=e.userId,r(),n.getEmailList(),this},getEmailList:function(){e.get("settings.user.mail.list",{userId:s}).then(function(e){l=e.data.mails,n.render(e.data.mails)}).catch(function(t){e.toast("danger",t,".__xe_alertEmailModal")})},delete:function(t){e.post("settings.user.mail.delete",{userId:s,address:t}).then(function(i){var a=l.indexOf(t);l.splice(a,1),n.render(l),e.toast("success","삭제하였습니다.",".__xe_alertEmailModal")}).catch(function(t){e.toast("danger",t,".__xe_alertEmailModal")})},add:function(t){e.post("settings.user.mail.add",{userId:s,address:t}).then(function(t){var i=t.data.mail;l.push(i),n.render(l),e.toast("success","추가되었습니다.",".__xe_alertEmailModal")}).catch(function(t){e.toast("danger",t,".__xe_alertEmailModal")})},render:function(e){var t="";t+="<div>",e.length>0&&(t+='<ul class="list-group">',e.forEach(function(e,n){var i=e.address,l=i===a?'checked="checked"':"";t+='<li class="list-group-item clearfix">',t+='<label><input type="radio" name="email" value="'+i+'" '+l+"/> "+i+"</label>",e.address!==a&&(t+='<span class="pull-right">',t+='<a href="#" class="btn btn-sm btn-link btnDeleteEmail" style="display: inline-block;">삭제</a>',t+='<a href="#" class="btn btn-sm btn-link btnDeleteEmailConfirm" style="display: none;">삭제확인</a>',t+='<a href="#" class="btn btn-sm btn-link btnDeleteEmailCancle" style="display: none;">취소</a>',t+="</span>"),t+="</li>"}),t+="</ul>"),t+='<div class="input-group input-group-sm" style="margin-bottom: 20px;">',t+='<input type="text" class="form-control" id="__xe_addedEmailInput" placeholder="이메일을 입력하세요">',t+='<span class="input-group-btn"><buttion id="__xe_emailAddBtn" class="btn btn-default" type="button">추가</buttion></span>',t+="</div>",i.html(t)}}}(window.XE,window.jQuery);window.jQuery(function(t){t(".__xe_settingEmail").click(function(){t(".__xe_emailView").slideToggle(),t("#__xe_emailSetting").slideToggle()}),e.init({$wrapper:t("#__xe_emailSetting"),userId:t("#__xe_emailSetting").data("user-id"),email:t("#__xe_emailSetting").data("email")})})})}})});