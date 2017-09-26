/**
 * Created by witch on 2017/7/24.
 */
$(function() {
    $(".payways>i").on("click",function(){
        $(this).removeClass("nocheck").parent(".payways").siblings().children('i').addClass("nocheck");
        $(this).siblings("input").attr("checked","checked").parent(".payways").siblings().children("input").removeAttr("checked");
    });

    $("#rules i").toggle(
        function () {
            $("#rules i").removeClass("nocheck");
            $("#rules input").attr("checked","checked");
        },
        function () {
            $("#rules i").addClass("nocheck");
            $("#rules input").removeAttr("checked");
        }
    );
    $("#foot a").click(
        function () {
            if($("#rules input").attr("checked")=="checked" ){
                alert("即将支付");
            }else {
                alert("请确定用户协议");
            }
        }
    );
})