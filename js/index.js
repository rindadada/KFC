$(function(){
    $('.header').mouseenter(function(){
        $('.header').stop().animate({
            height: '330px'
        })
    })
    $('.header').mouseleave(function(){
        $('.header').stop().animate({
            height: '140px'
        })
    })
    $(window).scroll(function(){
        $('.container').addClass('on')
        
        if($(window).scrollTop()=='0'){
            $('.container').removeClass('on')
            $('.header').css({
                height : '120px'
            })
        }
        $('.kfc-up .header-access ul')
        .addClass('on')
        if($(window).scrollTop()=='0'){
            $('.kfc-up .header-access ul').removeClass('on')
        }
        $('.acc-t .category-list').addClass('on')
        if($(window).scrollTop()=='0'){
            $('.acc-t .category-list').removeClass('on')
        }
    })
})