$(function(){
   var header=$('.header');
   var menu=$('.menu');
   var shunxu=$('.sort');
    menu.on('click',function(){
        shunxu.addClass('active');
        $('.that').addClass('active');
    })
    $('.fh').on('click',function(){
        shunxu.removeClass('active');
        $(this).parent().delay(500).queue(function(){
            $(this).removeClass('active').dequeue();
        })
    })
    $(window).on('scroll',function(){
        var stop=(document.documentElement.scrollTop)||(document.body.scrollTop);
        if(stop>300){
            header.addClass('active');
        }else{
            header.removeClass('active');
        }
    })
    $('.sort-list').on('click','li',function(){
        $('.sort-list').find('.active').removeClass('active');
        $(this).addClass('active');
    })
})