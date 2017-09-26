$(function () {
    var mySwiper =new Swiper ('.rongqi', {
        slidesPerView: 'auto',
        paginationClickable: true,
        observer:true,
        observeParents:true,
        autoHeight:true,
        onSlideChangeStart: function(swiper){
            var childli=$('#choose ul li');
            for (var i=0;i<childli.length;i++){
                childli[i].setAttribute("class", " ");
            }
            childli[swiper.activeIndex].setAttribute("class", "red");
        }
    })
    $('#choose ul li').on('click',function(e){
        e.preventDefault();
        mySwiper.slideTo($(this).index())
    })
});
