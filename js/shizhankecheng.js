$(function () {
    $("#choose ul li").click(
        function () {
            $(this).css({backgroundColor:"#cb3340",color:"#fff"}).siblings().css({backgroundColor:"#fff",color:"#000"});

            var indexnum=$("#choose ul li").index(this);
            if(indexnum==0){
                $("#box .sec").show();
            }else {
                $("#box .sec").eq(indexnum-1).show().siblings().hide();
            }

        }
    )
});

