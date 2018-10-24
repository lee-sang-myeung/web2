!function(e,a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var t=a();for(var s in t)("object"==typeof exports?exports:e)[s]=t[s]}}("undefined"!=typeof self?self:this,function(){return function(e){function a(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=28)}({0:function(e,a,t){e.exports=t(2)(436)},1:function(e,a){e.exports=_xe_bundle_common},2:function(e,a){e.exports=_xe_bundle_vendor},28:function(e,a,t){e.exports=t(29)},29:function(e,a,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(a,t,s){return t&&e(a.prototype,t),s&&e(a,s),a}}(),r=t(0),l=s(r),c=t(3),o=s(c),u={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27},p=function(){function e(a){var t=a.$wrapper,s=a.key,i=a.userSearchUrl,r=a.groupSearchUrl,l=a.permission,c=a.type,u=a.vgroupAll;n(this,e),this.$wrapper=t,this.key=s,this.userSearchUrl=i,this.groupSearchUrl=r,this.permission=l,this.type=c,this.vgroupAll=u,this.query="",this.suggestion=[],this.placeholder=o.default.Lang.trans("xe::explainIncludeUserOrGroup"),this.selectedIndex="",this.includeSelectedIndex=-1,this.excludeSelectedIndex=-1,this.MIN_QUERY_LENGTH=2}return i(e,[{key:"bindEvents",value:function(){var e=this;this.$wrapper.on("change",".chkModeAble",function(a){(0,l.default)(a.target).is(":checked")?e.$wrapper.find("input:not(.chkModeAble)").prop("disabled",!0):e.$wrapper.find("input:not(.chkModeAble)").prop("disabled",!1)}),this.$wrapper.on("keydown",".inputUserGroup",function(a){var t=a.target.value.trim(),s=(0,l.default)(this),n=a.keyCode,i=s.parent().find(".ReactTags__suggestions ul"),r=s.data("input");if(t.length>=e.MIN_QUERY_LENGTH){if(i.length>0){var c=parseInt(s.data("index"),10),o=0;switch(n){case u.UP_ARROW:o=0==c?i.find("li").length-1:c-1,s.data("index",o),i.find("li").eq(o).addClass("active").siblings().removeClass("active");break;case u.DOWN_ARROW:o=c==i.find("li").length-1?0:c+1,s.data("index",o),i.find("li").eq(o).addClass("active").siblings().removeClass("active");break;case u.ENTER:case u.TAB:if(a.preventDefault(),i.find("li.active").length>0){var p=i.find("li.active").data("tag"),d="",g="",f="";"user"==i.data("target")?"include"==r?(d=e.type+"User",g="user",f="@"):(d=e.type+"Except",g="except",f="@"):(d=e.type+"Group",g="group",f="%");var v=e.permission[g],h=!1;v.length>0?(v.forEach(function(e,a){e.id===p.id&&(h=!0)}),h||e.permission[g].push(p)):e.permission[g].push(p);var m=e.permission[g].map(function(e){return e.id});h||(i.closest(".ReactTags__tags").find("[name="+d+"]").val(m.join().trim()),i.closest(".ReactTags__tags").find("."+g+"Wrap").append('<span class="ReactTags__tag">'+(f+(p.display_name||p.name))+'<a class="ReactTags__remove btnRemoveTag" data-id="'+p.id+'">x</a></span>')),i.remove(),s.val("").data("index",-1).focus()}a.preventDefault();break;case u.ESCAPE:e[r+"SelectedIndex"]=0,i.parent().empty(),s.focus()}}}else if(u.BACKSPACE===n){var _=s.closest(".ReactTags__tags").find(".ReactTags__selected span");!t&&_.length>0&&e.removeTag(_.eq(_.length-1))}}),this.$wrapper.find(".ReactTags__suggestions").on("mouseenter","li",function(){var e=(0,l.default)(this);e.closest("ul");e.addClass("active").siblings().removeClass("active")}),this.$wrapper.find(".ReactTags__suggestions").on("click","li",function(){var a=(0,l.default)(this),t=a.data("tag"),s=a.closest("ul"),n=a.closest(".ReactTags__tagInput").find("input:text"),i=n.data("input"),r=(t.id,""),c="",o="";"user"==s.data("target")?"include"==i?(r=e.type+"User",c="user",o="@"):(r=e.type+"Except",c="except",o="@"):(r=e.type+"Group",c="group",o="%");var u=e.permission[c],p=!1;u.length>0?(u.forEach(function(e,a){e.id===t.id&&(p=!0)}),p||e.permission[c].push(t)):e.permission[c].push(t);var d=e.permission[c].map(function(e){return e.id});p||(s.closest(".ReactTags__tags").find("[name="+r+"]").val(d.join().trim()),s.closest(".ReactTags__tags").find("."+c+"Wrap").append('<span class="ReactTags__tag">'+(o+(t.display_name||t.name))+'<a class="ReactTags__remove btnRemoveTag" data-id="'+t.id+'">x</a></span>')),s.remove(),n.val("").data("index",-1).focus()}),this.$wrapper.on("keyup",".inputUserGroup",function(a){var t=a.target.value.trim(),s=(0,l.default)(this),n=a.keyCode;if(t.length>=e.MIN_QUERY_LENGTH){if(-1==[u.ENTER,u.TAB,u.UP_ARROW,u.DOWN_ARROW,u.ESCAPE,37,39].indexOf(n)){var i="";i+="<ul>",i+='<li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li>',i+="</ul>",s.parent().find(".ReactTags__suggestions").html(i);var r=t.substr(0,1);switch(r){case"@":t=t.substr(1,t.length),e.searchUser(s,t);break;case"%":t=t.substr(1,t.length),e.searchGroup(s,t)}}}else s.parent().find(".ReactTags__suggestions").empty()}),this.$wrapper.on("click",".btnRemoveTag",function(a){a.preventDefault(),e.removeTag((0,l.default)(this).closest("span"))})}},{key:"makeIt",value:function(e,a){var t=a.trim().replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),s=RegExp(t,"gi");return(e.display_name||e.name).replace(s,"<mark>$&</mark>")}},{key:"removeTag",value:function(e){var a=this,t=e.closest(".ReactTags__selected").data("ptype"),s=e.data("id"),n="";switch(t){case"user":n=a.type+"User";break;case"except":n=a.type+"Except";break;case"group":n=a.type+"Group"}a.permission[t].forEach(function(e,n){e.id!==s&&a.permission[t].splice(n,1)});var i=a.permission[t].map(function(e){return e.id});e.closest(".ReactTags__tags").find("[name="+n+"]").val(i.join().trim()),e.remove()}},{key:"searchUser",value:function(e,a){var t=this,s=t.userSearchUrl;o.default.ajax({url:s+"/"+a,method:"get",dataType:"json",cache:!1,success:function(s){if(s.length>0){var n="";n+='<ul data-target="user">',s.forEach(function(e,s){n+='<li class="" data-tag=\''+JSON.stringify(e)+"'>",n+="<span>"+t.makeIt(e,a)+"</span>",n+="</li>"}),n+="</ul>",e.parent().find(".ReactTags__suggestions").html(n)}else e.parent().find(".ReactTags__suggestions").empty()},error:function(e,a,t){}})}},{key:"searchGroup",value:function(e,a){var t=this,s=t.groupSearchUrl;o.default.ajax({url:s+"/"+a,method:"get",dataType:"json",cache:!1,success:function(s){if(s.length>0){var n="";n+='<ul data-target="group">',s.forEach(function(e,s){n+="<li data-tag='"+JSON.stringify(e)+"'>",n+="<span>"+t.makeIt(e,a)+"</span>",n+="</li>"}),n+="</ul>",e.parent().find(".ReactTags__suggestions").html(n)}else e.parent().find(".ReactTags__suggestions").empty()},error:function(e,a,t){}})}},{key:"render",value:function(){var e=this,a=this.permission.mode,t=this.permission.rating,s=!1,n=[{value:"super",name:o.default.Lang.trans("xe::userRatingAdministrator")},{value:"manager",name:o.default.Lang.trans("xe::userRatingManager")},{value:"user",name:o.default.Lang.trans("xe::user")},{value:"guest",name:o.default.Lang.trans("xe::guest")}],i=!1;"manual"!==a&&"inherit"!==a||(s=!0,"manual"!==a&&(i=!0));var r=this.permission.group.map(function(e){return e.id}),l=this.permission.user.map(function(e){return e.id}),c=this.permission.except.map(function(e){return e.id}),u="";if(u+="<div>",s){var p="inherit"===a?'checked="checked"':"";u+='<div class="form-group">',u+='<div class="checkbox">',u+='<label><input type="checkbox" name="'+this.type+'Mode" class="chkModeAble" value="inherit" '+p+" /> "+o.default.Lang.trans("xe::inheritMode")+"</label>",u+="</div>",u+="</div>"}u+='<div class="form-group">',u+="<label>회원 등급</label>",u+='<div class="radio">',n.forEach(function(a){var s=a.value==t?"checked":"";u+='<label><input type="radio" '+(i?'disabled="disabled"':"")+' name="'+e.type+'Rating" value="'+a.value+'" '+(s?'checked="checked"':"")+" /> "+a.name+" &nbsp;</label>"}),u+="</div>",u+="</div>",u+='<div class="form-group">',u+="<label>"+o.default.Lang.trans("xe::includeUserOrGroup")+"</label>",u+='<div class="ReactTags__tags">',u+='<div class="ReactTags__selected groupWrap" data-ptype="group">',this.permission.group.forEach(function(e){var a=e,t="%"+(a.display_name||a.name);u+='<span class="ReactTags__tag">'+t+'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="'+a.id+'">x</a></span>'}),u+="</div>",u+='<div class="ReactTags__selected userWrap" data-ptype="user">',this.permission.user.forEach(function(e){var a="@"+(e.display_name||e.name);u+='<span class="ReactTags__tag">'+a+'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="'+e.id+'|">x</a></span>'}),u+="</div>",u+='<div class="ReactTags__tagInput">',u+='<input type="text" placeholder="'+this.placeholder+'" class="form-control inputUserGroup" data-input="include" '+(i?'disabled="disabled"':"")+' value="'+this.query+'" data-index="-1" />',u+='<div class="ReactTags__suggestions" data-input="include"></div>',u+="</div>",u+='<input type="hidden" name="'+this.type+'Group" class="form-control includeGroups" value="'+r.join().trim()+'" />',u+='<input type="hidden" name="'+this.type+'User" class="form-control includeUsers" value="'+l.join().trim()+'" />',u+="</div>",u+="</div>",this.vgroupAll.length>=1&&(u+='<div class="form-group">',u+="<label>"+o.default.Lang.trans("xe::includeVGroup")+"</label>",u+=e.vgroupAll.map(function(a){var t=!1;return-1!=function(e,a){for(var t=0;t<a.length;t++)if(a[t]==e)return t;return-1}(a.id,this.permission.vgroup)&&(t=!0),'<label><input type="checkbox" '+(i?'disabled="disabled"':"")+' name="'+e.type+'VGroup[]" value="'+a.id+'" '+(t?'checked="checked"':"")+" /> "+a.title+" &nbsp;</label>"}),u+="</div>"),u+='<div class="form-group">',u+="<label>"+o.default.Lang.trans("xe::excludeUser")+"</label>",u+='<div class="ReactTags__tags">',u+='<div class="ReactTags__selected exceptWrap" data-ptype="except">',this.permission.except.forEach(function(e){var a=e.display_name||e.name;a="@"+a,u+='<span class="ReactTags__tag">'+a+'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="'+e.id+'">x</a></span>'}),u+="</div>",u+='<div class="ReactTags__tagInput">',u+='<input type="text" placeholder="'+o.default.Lang.trans("xe::explainExcludeUser")+'" class="form-control inputUserGroup" data-input="exclude" '+(i?'disabled="disabled"':"")+' data-index="-1" />',u+='<div class="ReactTags__suggestions" data-input="exclude"></div>',u+="</div>",u+='<input type="hidden" name="'+this.type+'Except" class="form-control excludeUsers" value="'+c+'" />',u+="</div>",u+="</div>",u+="</div>",this.$wrapper.html(u)}}]),e}();(0,l.default)(".__xe__uiobject_permission").each(function(e){var a=(0,l.default)(this),t=a.data("data"),s=a.data("key"),n=a.data("type"),i=a.data("userUrl"),r=a.data("groupUrl"),c=a.data("vgroupAll"),o=new p({$wrapper:a,key:s,userSearchUrl:i,groupSearchUrl:r,permission:t,type:n,vgroupAll:c});o.render(),o.bindEvents()})},3:function(e,a,t){e.exports=t(1)(570)}})});