!function(t){function a(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var e={};return a.m=t,a.c=e,a.p="./",a(0)}({0:function(t,a,e){t.exports=e(37)},37:function(t,a){$(function(){function t(t){var a="";$.ajax({url:"/mod/question/ajax/ajaxanswercomments/answer_id/"+t,success:function(e){var i=e.data.length;i>0?$.each(e.data,function(i,n){a+='<li class="comment comment-reply"><img class="avatar" src="/uc/index/avatar/uid/'+n.uid+'" width="50" height="50" alt="avatar"><div class="comment-body"><a href="#" class="comment-author"><small class="text-muted pull-right">'+n.time+"</small><span>"+n.username+"</span></a><p>"+n.message+"</p></div>",e.is_login&&(a+='<ul class="list-inline size-11 margin-top-10"><li><a href="#" class="text-info commentreyplay" data-name="@'+n.username+':" data-id="'+t+'"><i class="fa fa-reply"></i> 回复</a></li>',(e.is_login==n.uid||e.is_admin)&&(a+='<li class="pull-right"><a href="/mod/question/ajax/delcomments/id/'+n.id+'" class="text-danger confirm ajax-get">删除</a></li>'),a+="</li></ul>"),a+="</li>"}):a+='<div class="alert alert-mini alert-warning margin-bottom-10 text-center">暂无评论</div>',e.is_login&&(a+=' <li><div class="input-group"><input id="btn-input-'+t+'" type="text" class="form-control" placeholder="评论一下..."><span class="input-group-btn"><button class="btn btn-primary btn-chat" id="btn-chat-'+t+'" data-btn-id="'+t+'"><i class="fa fa-reply"></i> 评论</button></span></div></li>'),$("#comment-reply-"+t).html(a),$("#comment-reply-"+t).addClass("isopen"),$("#count-"+t).text(i)}})}if($("#detail").length>0){var a=new wangEditor("detail");a.config.uploadImgUrl="/uc/file/uploadpic/type/path",a.config.uploadImgFileName="file",a.create(),0==$("#detail").html().length&&a.clear()}$("#keywords").tagsInput({autocomplete_url:"/admin/public/getkeyword",autocomplete:{selectFirst:!0,autoFill:!0},width:"auto",height:"43px",defaultText:"add a tag"});$(".question_select"),$(".question_select .dropdown-menu"),$(".question_select .dropdown-menu>li");$(document).on("click",".question_select .dropdown-menu>li",function(){var t=$(this).attr("data-value"),a=$(this).text();console.log(t),$(this).parents(".question_select").find("span.name").text(a),$(this).parents(".question_select").find("input").val(t);var e=$(this).parents().is("#group");e||$.ajax({url:"/mod/question/ajax/getgroups/cid/"+t,success:function(t){if(t){var a="";a+='<li data-value="0"><a href="javascript:;">不分组</a></li>',$.each(t,function(t,e){a+='<li data-value="'+e.id+'"><a href="javascript:;">'+e.name+"</a></li>"}),$("#group ul").html(a),$("#group").removeClass("hide")}else $("#group").addClass("hide"),$("#group").find("input").val(0)}})}),$(".comment-reply").on("click",function(){var a=$(this).attr("data-comment"),e=a.split("-")[2],i=$("#"+a).is(".isopen");i?($("#"+a).html(""),$("#"+a).removeClass("isopen"),$("#oc-"+e).text("显示")):(t(e),$("#oc-"+e).text("关闭"))}),$(document).on("click",".btn-chat",function(){var a=$(this).attr("data-btn-id"),e=$("#btn-input-"+a).val();return 0==e.length?(_toastr("评论不能为空!","top-right","error",!1),!1):void $.ajax({type:"post",url:"/mod/question/ajax/ajaxanswercommentspost",data:{answer_id:a,message:e},success:function(e){0==e.errno?(_toastr(e.data.name,"top-right","success",!1),t(a)):_toastr(e.errmsg,"top-right","error",!1)}})}),$(document).on("click",".commentreyplay",function(t){t.preventDefault();var a=$(this).attr("data-name"),e=$(this).attr("data-id");$("#btn-input-"+e).insertContent(a)})})}});