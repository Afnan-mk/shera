$(function () {
    "use strict";
    $(window).on("scroll", function(){
    var sc = $(window).scrollTop();
    if(sc > 10){
        $(".big-nav, .dropdown-options").addClass("default-1");
        $(".big-nav").addClass("default-2");
        

    } else {
        $(".big-nav, .dropdown-options").removeClass("default-1");
        $(".big-nav").removeClass("default-2");   
    
        }
    });

    var sc = $(window).scrollTop();
    if(sc > 10){
        $(".big-nav , .dropdown-options").addClass("default-1");
        $(".big-nav").addClass("default-2");
    
    } else {
    $(".big-nav , .dropdown-options").removeClass("default-1"); 
    $(".big-nav").removeClass("default-2");        

    }

});













$(function(){
    "use strict";
    $(window).on("scroll",function(){
    var sc = $(window).scrollTop();
    if(sc > 200){
        $(".up").fadeIn();
    } else {
        $(".up").fadeOut();
    }
    });

    var sc = $(window).scrollTop();
    if(sc > 200){
        $(".up").fadeIn();
    } else {
        $(".up").fadeOut();
    }

});

var pla = $('div').width();
$(document).ready(function() {
"use strict";
$(".up").click(function () {
$('html, body').animate({scrollTop:0});
});

});








$(document).ready(function(){

    $(".dropdown").hover(function(){
        $(this).children('ul').stop(true, false, true).slideToggle(300);
    });



    $(".sidebar-menu>div>button").click(function(){
        $(".sidebar").slideToggle("slow");
    });

    $(".sidebar a").click(function(){
        $(".sidebar").css("display","none");
    });


    

    $(".down-icon").click(function(){
        $(".dropdown-options2").slideToggle("slow");
        $(".down-icon-2").toggleClass("jQuery-edit2");
    });
    $(".sidebar-menu>div>button , .sidebar a, .down-icon-3").click(function(){
        $(".dropdown-options2").slideUp("slow");
        $(".down-icon-2").removeClass("jQuery-edit2");
    });


    $(".down-icon-3").click(function(){
        $(".dropdown-options3").slideToggle("slow");
        $(".down-icon-4").toggleClass("jQuery-edit2");
    });
    $(".sidebar-menu>div>button , .sidebar a, .down-icon").click(function(){
        $(".dropdown-options3").slideUp("slow");
        $(".down-icon-4").removeClass("jQuery-edit2");
    });



    $(".nav-bar__menu>ul, .dropdown-options").on('click','li', function(){
        $('.nav-bar__menu>ul>li.active, .dropdown-options li.active').removeClass('active');
        $(this).addClass('active');
    
    });
});








    $(document).ready(function() {
        var heroSlider = $('.slider-1');
        heroSlider.owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            autoplay: true,
            items:1,
            dots: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 5000, 
            animateOut: 'fadeOut'
    
        });
        
        $('.slider-1__next').click(function() {
            heroSlider.trigger('next.owl.carousel');
        })
        
        $('.slider-1__prev').click(function() {
            heroSlider.trigger('prev.owl.carousel', [300]);
    })
    })








    $(document).ready(function() {
        var slider = $('.slider-2');
        slider.owlCarousel({
            loop:true,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000,
            autoplay: true,
            margin:10,
            nav:false,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:2
                },
                800:{
                    items:3
                },      
                1025:{
                    items:4
                }
            }
    
        });
        
        $('.slider-2__next').click(function() {
            slider.trigger('next.owl.carousel');
        })
        
        $('.slider-2__prev').click(function() {
            slider.trigger('prev.owl.carousel', [300]);
    })
})




    




