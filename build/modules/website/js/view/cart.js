!function(t){function r(a){if(e[a])return e[a].exports;var n=e[a]={exports:{},id:a,loaded:!1};return t[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var e={};return r.m=t,r.c=e,r.p="./",r(0)}({0:function(t,r,e){t.exports=e(39)},39:function(module,exports){function formatCurrency(t){t=t.toString().replace(/\$|\,/g,""),isNaN(t)&&(t="0");var r=t==(t=Math.abs(t));t=Math.floor(100*t+.50000000001);var e=t%100;t=Math.floor(t/100).toString(),e<10&&(e="0"+e);for(var a=0;a<Math.floor((t.length-(1+a))/3);a++)t=t.substring(0,t.length-(4*a+3))+","+t.substring(t.length-(4*a+3));return(r?"":"-")+t+"."+e}jQuery(document).ready(function(){function steperhtml(t,r,e){0!=t&&$.ajax({url:"/uc/cart/stepper",type:"POST",data:{qty:t,ids:r},success:function(t){0==t.errno?($(e).parents("tr").find("td").eq(5).attr("data-price",t.data.data.price),$(e).parents("tr").find(".stepper-wrap").next().html('<span class="text-default">有货</span>'),$(e).parents("tr").find(".inform").html(""),$(e).parents("tr").find(".price").html(formatCurrency(t.data.data.price)),tj()):("请先登录"==t.errmsg?$('[data-toggle="ajaxModal"]').eq(0).trigger("click"):($(e).parents("tr").find(".inform").html('<a class="btn btn-default btn-xs margin-bottom-6" href="#"> 到货通知 </a>'),$(e).parents("tr").find(".stepper-wrap").next().html('<span class="text-danger">无货</span>')),_toastr(t.errmsg,"top-right","error",!1))}})}function tj(){var checkd=$('input[name="ids"]'),total=0,url=[],nums=[];$.each(checkd,function(t,r){var e=$(r).prop("checked");e&&(nums.push($(r).parents("tr").find("input.stepper").val()),total+=Number($(r).parents("tr").find("td").eq(5).attr("data-price")),url.push($(r).parents("tr").find('input[name="ids"]').val()))}),url=url.join("<>");var href;url.length>0?(href="/uc/cart/delcart/ids/"+url,$("a.delall").attr("href",href)):(href="/uc/cart/delcart",$("a.delall").attr("href",href)),nums.length>0?$(".nums").html(eval(nums.join("+"))):$(".nums").html(0),$("#total").html(formatCurrency(total))}$("form.form-cart").submit(function(){if(0==$(this).serializeArray().length)return _toastr("至少选择一个商品!","top-right","error",!1),!1}),$("#checkAll").click(function(){$('input[name="ids"]').prop("checked",this.checked),tj(),this.checked?$(".cart-tbody tbody >tr").addClass("warning"):$(".cart-tbody tbody >tr").removeClass("warning")});var $subBox=$("input[name='ids']");$subBox.click(function(){$("#checkAll").prop("checked",$subBox.length==$("input[name='ids']:checked").length),tj(),this.checked?$(this).parents("tr").addClass("warning"):$(this).parents("tr").removeClass("warning")}),$("input.stepper").change(function(){var t=$(this).val(),r=$(this).parents("tr").find("input[name='ids']").val();steperhtml(t,r,this)}),$(document).on("click",".stepper-btn-wrap > a",function(){var t=$(this).parent().prev().val(),r=$(this).parents("tr").find("input[name='ids']").val();steperhtml(t,r,this)})})}});