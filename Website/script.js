
var clicks;
clicks = 0;

var autoclicker;
autoclicker = 0;
var autokosten;
autokosten = 100;

var superclicker;
superclicker = 0;
var superkosten;
superkosten = 1000;



function addClicks() {
	if(autoclicker >= 0){
	clicks+=autoclicker + 1;
}
	if(superclicker >= 1){
		clicks += 10;
	}
	document.getElementById('clicks').innerHTML = "Clicks: " + clicks;
}

function addAutoClicker() {
	if(clicks >= autokosten){
		clicks -= autokosten;
		autoclicker += 1;
		autokosten += 100;
		document.getElementById('autokosten').innerHTML = autokosten;
		document.getElementById('clicks').innerHTML = "Clicks: " + clicks;
		document.getElementById('autoanzahl').innerHTML = autoclicker;
	}else{
		alert("Du hast zuwenig Clicks")
	}
	}

function autoclicker() {
	if(autoclicker >= 1){
		click += 1;
			document.getElementById('clicks').innerHTML = "Clicks: " + clicks;
	}
}

function addSuperClicker() {
	if(clicks >= superkosten){
		clicks -= superkosten;
		superclicker += 1;
		superkosten += 1000;
		document.getElementById('superkosten').innerHTML = superkosten;
		document.getElementById('clicks').innerHTML = "Clicks: " + clicks;
		document.getElementById('superanzahl').innerHTML = superclicker;
		}else{
				alert("Du hast zuwenig Clicks")
			}
}
