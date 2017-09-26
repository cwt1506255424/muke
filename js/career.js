$(function () {

    $(window).scroll(function(){
        let header=$("#head").height();
        let bac=$(".bac img").innerHeight();
        let nonametop=$(".noname").scrollTop();

        let cha=bac-header;
        console.log(cha)
        let obj_height = document.documentElement.scrollTop || document.body.scrollTop;
        if(obj_height>0){
            $("#bac").addClass("bac");
        }else if(obj_height="0"){
            $("#bac").removeClass("bac");
        }
    })
});

























// $(function () {
//     $(".news").click(
//         function () {
//             $(".news").css({backgroundImage:"url('./imgs/jiaohu.png')",
//                             backgroundPosition:"left",
//                             backgroundRepeat:"no-repeat",
//                             backgroundSize:"25% 100%"}),
//             $(".hot").css("background","none")
//         }
//     );
//     $(".hot").click(
//         function () {
//             $(".hot").css({backgroundImage:"url('./imgs/jiaohu.png')",
//             backgroundPosition:"left",
//             backgroundRepeat:"no-repeat",
//             backgroundSize:"25% 100%"}),
//             $(".news").css("background","none")
//         }
//     );
//     var mySwiper =new Swiper ('.rongqi', {
//         slidesPerView: 'auto',
//         paginationClickable: true,
//         observer:true,
//         observeParents:true,
//         autoHeight:true,
//         onSlideChangeStart: function(swiper){
//             var childli=$('.test ul li');
//             for (var i=0;i<childli.length;i++){
//                 childli[i].setAttribute("class", " ");
//             }
//             childli[swiper.activeIndex].setAttribute("class", "bor");
//         }
//     })
//     $('.test ul li').on('click',function(e){
//         e.preventDefault();
//         mySwiper.slideTo($(this).index())
//     })
// });
//
//     //顶部悬浮
//     $(window).scroll(function(){
//         let header=$("#head").height();
//
//         let noname=$("#noname").height();
//
//         let choose=$("#choose").height();
//         let cha=noname-choose;
//         let obj_height = document.documentElement.scrollTop || document.body.scrollTop;
//         if(obj_height>=cha){
//             $("#noname").addClass("nonamete");
//             $("#choose").addClass("choosete");
//         }else if(obj_height="0px"){
//                 $("#noname").removeClass("nonamete");
//                 $("#choose").removeClass("choosete");
//         }
//     })
//
//




