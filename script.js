
$(".work_section").waypoint(function(direction){
    if(direction == "down"){
        $(".header").addClass("scroll_mobile_nav");
        $('.burger-container').addClass("b_top")
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








// Selecting all the required classes from HTML to change 
var body = document.body
var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var rights = document.querySelector('.rights')
var backdrop = document.querySelector('.backdrop')
var back2 = document.querySelector('.back2')
var icon = document.querySelectorAll('.icon')
var nav = document.querySelector('.thenav')
var link = document.querySelectorAll('.link')



// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

check.addEventListener('change',function(){

    
//   conditions to apply when checkbox is checked DARK

if(this.checked == true){
box.setAttribute('style','background-color:#f5f5f5;')
ball.setAttribute('style','transform:translatex(100%);')
body.setAttribute('style','background-color: #121316; color:rgba(255, 255, 255, 0.8);') 
rights.setAttribute('style','background-color:#191A1D; color: rgba(255, 255, 255, 0.4)')

backdrop.setAttribute('style','background: linear-gradient(137deg, rgba(53, 53, 53, 0.31) 0%, rgba(99, 99, 99, 0.14) 80%);')
back2.setAttribute('style','background: linear-gradient(180deg, rgba(18, 19, 22, 0.00) 0%, #121316 100%);')
icon.forEach( i => i.setAttribute('style','filter:invert(0);'))
nav.setAttribute('style','background-color: rgba(20, 21, 24, 0.8);')
link.forEach( i => i.setAttribute('style', 'color: rgba(255, 255, 255, 0.8)'))
}


//   conditions to apply when checkbox is unchecked LIGHT

if(this.checked == false){
box.setAttribute('style','background-color: #191A1D;')
ball.setAttribute('style','transform:translatex(0%);')
body.setAttribute('style','background-color:#f5f5f5; color:#191A1D;')
rights.setAttribute('style','background-color:#eaeaea; color: rgba(0, 0, 0, 0.4)')

backdrop.setAttribute('style','background: linear-gradient(137deg, rgba(255, 255, 255, 0.00) 0%, #FBFBFB 100%);')
back2.setAttribute('style','background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.14) 93.59%);')
icon.forEach( i => i.setAttribute('style','filter:invert(1);'))
nav.setAttribute('style','background-color: rgba(255, 255, 255, 0.8);')
link.forEach( i => i.setAttribute('style', 'color:#191A1D;'))
// icon.classList.add('invert')
}
})



(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
    link.forEach(i => i.onclick = function() {
        header.classList.toggle('menu-opened');
    })
}());