/*$('.dropDownList').click(function () {
    $('.navItems ul').css('display','block');
}
);
$('.dropDownList').mouseleave(
    function () {
        $(this ul').css('display','none');
    }
);*/

$('.switcher2').click(function () {
    $('.switcher2').css('background','#6BBD45');
    $('.switcher2').css('color','#ffffff');
    $('.switcher1').css('background','#ffffff');
    $('.switcher1').css('color','#675A54');
    $('.switcher').css('border-bottom','1px solid #D1D1D1');
    $('.houses').css('display','none');
    if($( window ).width()<=360){
        $('.minimap').css('display','block');
    }else
    {
        $('.fullmap').css('display','block');
    }
})

$('.switcher1').click(function () {
    $('.switcher1').css('background','#6BBD45');
    $('.switcher1').css('color','#ffffff');
    $('.switcher2').css('background','#ffffff');
    $('.switcher2').css('color','#675A54');
    if($( window ).width()<=360){
        $('.minimap').css('display','none');
    }else
    {
        $('.fullmap').css('display','none');
    }

    $('.houses').css('display','flex')
})

$(document).ready(function(){
    $('.houses').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
});
});

if($( window ).width()<=360){
    $(document).ready(function(){
        $('.bannerSmall').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false
        });
        $('.aboutCompanyBlocks').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false
        });
        $('.whyUs .blocks').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false
        });
    });
}



$('.dropDownList').click(function () {
    if($(this).siblings('.hideItems').css('display')==='none'){
        $(this).siblings('.hideItems').css('display','block');
    }else{
        $(this).siblings('.hideItems').css('display','none');
    }
    })

$('.mobButtonNav').click(function () {
    if($(this).children('.tripleXNav').css('display')==='none'){
        $(this).children('.tripleXNav').css('display','block');
        $(this).children('.tripleNav').css('display','none');
        $('.logo').css('visibility','hidden');
        $('nav').css('width','65%');
        $('.blackBox').css('display','block');
        $('.mobNav').css('display','grid');
        $('.disapNav').css('display','block');
        $('main').css('display','none');
        $('footer').css('display','none');
    }else{
        $(this).children('.tripleNav').css('display','block');
        $(this).children('.tripleXNav').css('display','none');
        $('.logo').css('visibility','visible');
        $('nav').css('width','100%');
        $('.blackBox').css('display','none');
        $('.mobNav').css('display','none');
        $('.disapNav').css('display','none');
        $('main').css('display','flex');
        $('footer').css('display','block');
    }
})

