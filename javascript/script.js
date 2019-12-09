$('.carousel').carousel({
    interval: 2000
});

$('.navbar-nav li a').click(function(){
    $('.navbar-nav').find(".active").removeClass("active");
    $(this).addClass("active");
})
