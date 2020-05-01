$(document).ready(function(){
	
/* ---------- DD-Meni - JQuery ---------- */

$('#dd-meni li ul').css({
    display: "none",
    left: "auto"
});
$('#dd-meni li').hover(function(){
      $(this).find('ul').stop(true,true).slideDown('slow');
    }, function(){
      $(this).find('ul').stop(true,true).fadeOut('fast');
});

/* ---------- Ekspandirajući meni - Sortiranje ---------- */

$('#selekcija li ul').css({
    display: "none",
    left: "auto"
  });
  $('#selekcija li').hover(function(){
      $(this).find('ul').stop(true,true).slideDown('slow');
    }, function(){
      $(this).find('ul').stop(true,true).fadeOut('fast');
    });

/* ---------- Broj prikaza - Sortiranje ---------- */

$("#jednaKolona").click(function(e){
	e.preventDefault();
	 $(".galerija").css("width","100%");
});
$("#dveKolone").click(function(e){
	e.preventDefault();
	 $(".galerija").css("width","48.5%");
});
$("#triKolone").click(function(e){
	e.preventDefault();
	 $(".galerija").css("width","32.5%");
});


});	

/* ---------- Back To Top - JQuery ---------- */

if ($('#back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 1000
        }, 700);
    });
}