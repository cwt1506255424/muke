
$(function() {
    $("#willbuy ul li i").toggle(
        function () {
            $(this).removeClass("nocheck");
            $(this).siblings("input").attr("checked","checked");
            MonrysSum()
        },
        function () {
            $(this).addClass("nocheck");
            $(this).siblings("input").removeAttr("checked");
            MonrysSum()
        }
    );
})
// $("#willbuy ul li i").click(
//     function () {
//         var isChecked=true;
//         var aaa=0;
//         for (var i=0;i<this.length; i++){
//             if(this[i].checked==false){
//                 isChecked=false;
//                 a++;
//                 console.log(aaa)
//             }
//         }
//         $(".choooseall i").siblings("input").attr("checked",isChecked);
//     }
// )

$(".choooseall i").toggle(
    function(){
        $(this).removeClass("nochecked");
        $(".choooseall input").attr("checked","checked");
        $("#willbuy ul li input[name=lession]").each(
            function () {
                $(this).attr("checked","checked").siblings("i").removeClass("nocheck");
            }
        )
        MonrysSum()
    },
    function(){
        $(this).addClass("nochecked");
        $(".choooseall input").removeAttr("checked");
        $("#willbuy ul li input[name=lession]").each(
            function () {
                $(this).removeAttr("checked").siblings("i").addClass("nocheck");
            }
        )
        MonrysSum()
    }
)


//计算总金额
function MonrysSum() {
    var sum = 0;
    $("#willbuy ul li input[name=lession]").each(function () {
        if($(this).attr("checked")=="checked"){
            for( var i=0; i<$(this).length; i++){
                console.log($(this).siblings(".will_r").children("span").text())
                var aaa=parseFloat($(this).siblings(".will_r").children("span").text());
                console.log( aaa)
                sum +=aaa;
            }
        }
    })
    $(".num").text(sum);
}

