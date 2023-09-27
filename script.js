
$(".work_section").waypoint(function(direction){
    if(direction == "down"){
        $(".header").addClass("scroll_mobile_nav");
        $('.burger-container').addClass("b_top");
    }else{
        $(".header").removeClass("scroll_mobile_nav");
        $('.burger-container').removeClass("b_top")
    }      
},  {
offset: "60px"
});



$("#about").on("click" , function(){
    $("html,body").animate({scrollTop: $(".about_section").offset().top - 180}, 900)
});
$("#work").on("click" , function(){
    $("html,body").animate({scrollTop: $(".work_section").offset().top - 100}, 700)
});
$("#contact").on("click" , function(){
    $("html,body").animate({scrollTop: $("footer").offset().top}, 700)
});
$("#mabout").on("click" , function(){
    $("html,body").animate({scrollTop: $(".about_section").offset().top - 180}, 900)
});
$("#mwork").on("click" , function(){
    $("html,body").animate({scrollTop: $(".work_section").offset().top - 100}, 700)
});
$("#mcontact").on("click" , function(){
    $("html,body").animate({scrollTop: $("footer").offset().top}, 700)
});




// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

$('.box').click(function(){
    $('nav ul').toggleClass("nav_light")
    $('body').toggleClass("bg_light")
    $('.ball').toggleClass('ball_left')
    $('.icon').toggleClass('invert')
    $('.rights svg').toggleClass('invert')
    $('.burger-container').toggleClass('invert')
    $('.box').toggleClass('toggle_dark')
    $('.rights').toggleClass('dark_footer')
    $('.link').toggleClass('dark_text')
    $('.about p').toggleClass('dark_text2')
    $('.hero_text h3').toggleClass('dark_text2')
    $('.backdrop').toggleClass('dark_backdrop')
    $('.back2').toggleClass('dark_back2')  
    $('.menu-opened').toggleClass('light_nav')  
})



//mobile nav optimized
$('.link').click(function(){
    $('.header').toggleClass('menu-opened')
})
$('.burger-container').click(function(){
    $('.header').toggleClass('menu-opened')
})
