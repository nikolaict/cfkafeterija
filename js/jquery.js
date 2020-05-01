$(document).ready(function(){
	
/* ---------- Pozivanje AJAX - JSON ---------- */

$.ajax({
		type: 'GET',
		url: 'json/kategorije.json',
		success: function(data){
			// console.log(data)
			var ispis = "";

			$.each(data, function(index, kafa){
				ispis += "<option value='" + kafa.id + "'>" + kafa.naziv + "</option>";
			});
			
			$('#kategorije').append(ispis);
		}
	});

$.ajax({
		type: 'GET',
		url: 'json/kafa.json',
		success: function(data){
			var ispis = "";

			$.each(data, function(index, kafa){
				ispis += '<div class="galerija">'+
							'<br/><img src="'+kafa.slika+'" alt="'+kafa.naziv+'"/><br/><br/>'+
							'<h3>'+kafa.naziv+'</h3>'+
							'<p>'+
							'<span class="kategorija">Kategorija: '+kafa.kategorija.naziv+'</span>'+
							'</p>'+
							'</div>';
			});

			$('#kafaIspis').html(ispis);
		}
});

/* ---------- Filtriranje - jQuery ---------- */

$('#btnPrikazi').click(function(){
	var kategorijaId = parseInt($('#kategorije').val());

		$.ajax({
			type: 'GET',
			url: 'json/kafa.json',
			success: function(data){
				var ispis = "";

				$.each(data, function(index, kafa){
					if(kafa.kategorija.id == kategorijaId || kategorijaId == 0) {
						ispis += '<div class="galerija">'+
									'<br/><img src="'+kafa.slika+'" alt="'+kafa.naziv+'"/><br/><br/>'+
									'<h3>'+kafa.naziv+'</h3>'+
									'<p>'+
									'<span class="kategorija">Kategorija: '+kafa.kategorija.naziv+'</span>'+
									'</p>'+
									'</div>';
					}
				});

				$('#kafaIspis').html(ispis);
			}
		});

});

/* ---------- Tekst nestani - jQuery ---------- */

$("#prikazi").click(function(){
    $(".nestani").slideDown();});
	slideShow();

/* ---------- DD-Meni - jQuery ---------- */

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

/* ---------- simpleLightbox - jQuery ---------- */

$('.miniGalerija a').simpleLightbox();

});	

/* ---------- Slajder - jQuery ---------- */

function slideShow() {
  var current = $('#slajder .show');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 5000);
}

/* ---------- Back To Top - jQuery ---------- */

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