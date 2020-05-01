/* ---------- Objekat - JSON ---------- */

var cfkafa =[
	{
		"naziv":"Cappuccino classico",
		"slike":
			{
			  "src":"images/cappuccino1.jpg",
			  "alt":"Cappuccino classico"
			}
	},
	{
		"naziv":"Doppio Cappuccino",
		"slike":
			{
			  "src":"images/cappuccino2.jpg",
			  "alt":"Doppio Cappuccino"
			}
	},
	{
		"naziv":"Cappuccino al Cacao",
		"slike":
			{
			  "src":"images/cappuccino3.jpg",
			  "alt":"Cappuccino al Cacao"
			}
	},
	{
		"naziv":"Cappuccino al Ciokolato",
		"slike":
			{
			  "src":"images/cappuccino4.jpg",
			  "alt":"Cappuccino al Ciokolato"
			}
	},
	{
		"naziv":"Espresso Ristretto",
		"slike":
			{
			  "src":"images/espresso1.jpg",
			  "alt":"Espresso Ristretto"
			}
	},
	{
		"naziv":"Espresso Classico",
		"slike":
			{
			  "src":"images/espresso2.jpg",
			  "alt":"Espresso Classico"
			}
	},
	{
		"naziv":"Americano",
		"slike":
			{
			  "src":"images/espresso3.jpg",
			  "alt":"Americano"
			}
	},
	{
		"naziv":"Doppio Espresso",
		"slike":
			{
			  "src":"images/espresso4.jpg",
			  "alt":"Doppio Espresso"
			}
	},
	{
		"naziv":"Espresso Macchiato",
		"slike":
			{
			  "src":"images/espresso5.jpg",
			  "alt":"Espresso Macchiato"
			}
	}
];

function ispisKafe()
	{
var ispis='';
		for(var i=0; i<cfkafa.length; i++)
		{
			ispis+='<div class="galerija">'
					+'<img src="'+cfkafa[i].slike.src+'" alt="'+cfkafa[i].slike.alt+'"/>'
					+'<p class="opis">'+cfkafa[i].naziv+'</p>'
					+'</div>'
		}
		
		document.getElementById("centralni").innerHTML +=ispis;
}
ispisKafe();