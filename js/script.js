window.onload = function(){
	document.getElementById("prikazi").addEventListener("click",nestani);
	document.getElementById("tbImePrezime").focus();
}

function nestani(){
	document.getElementById("prikazi").style.display="none";
}

function otvoriMeni(){
    document.getElementById("meniSlajder").style.width = "30%";
}

function zatvoriMeni(){
    document.getElementById("meniSlajder").style.width = "0";
}

/* ---------- Slajder - JavaScript ---------- */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mojSlajder");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none"; 
}
  for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mojSlajder");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000);
}

/* ---------- Regularni izraz i provera formulara - JavaScript ---------- */

function proveraFormulara()
{
	var imePrezime, reImePrezime, email, regEmail, poruka, regPoruka, anketa, anketaIzbor;
	
	imePrezime = document.getElementById("tbImePrezime").value;
	email = document.getElementById("tbEmail").value;
	poruka = document.getElementById("tbPoruka").value;
	anketa = document.getElementsByName("rbAnketa");
	
	anketaIzbor = "";
	for(var i = 0; i < anketa.length; i++)
	{
		if(anketa[i].checked)
		{
			anketaIzbor += anketa[i].value;
			break;
		}
	}
	
	var regImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,11})+$/;
	var regEmail = /^[\w]+[\.\w\d]*\@[\w]+([\.][\w]+)+$/;
	var regPoruka = /^[\w\W\d\D\s\S\b\B\n\r\t]{15,}$/;
	
	var Greska = new Array();
	var Podaci = new Array();
	
	if(!regImePrezime.test(imePrezime))
	{
		Greska.push("Ime i prezime nisu uneti!");
	}
	/*else
	{
		Podaci.push("Ime i prezime:" +imePrezime)
	}*/
	if(!regEmail.test(email))
	{
		Greska.push("Email nije u dobrom formatu!");
	}
	/*else
	{
		Podaci.push("Email:" +email)
	}*/
	if(!regPoruka.test(poruka))
	{
		Greska.push("Poruka mora da sadrži najmanje 15 karaktera!");
	}
	/*else
	{
		Podaci.push("Poruka:" +poruka)
	}*/
	if(anketaIzbor == "")
	{
		Greska.push("Niste nam odgovorili na anketu!");
	}
	/*else
	{
		Podaci.push("Anketa:" +anketaIzbor)
	}*/
	else
	{
    alert("Poruka uspešno poslata!");
    document.getElementById("greske").innerHTML = "";
	}
	
	var rezultat =""
	rezultat += "<ul>";
	if(Greska.length != 0)
	{
		for(var i = 0; i < Greska.length; i++)
		{	
			rezultat += "<li style='color:#ff0000;'>" + Greska[i] + "</li><br/>";
		}
	}
	else
	{
		for(var i = 0; i < Podaci.length; i++)
		{
			rezultat += "<li style='color:#33cc33;'>" + Podaci[i] + "</li><br/>";
		}
	}
	
	rezultat += "</ul>";
	
	document.getElementById("greske").style.display = "block";
	document.getElementById("greske").innerHTML = rezultat;
}