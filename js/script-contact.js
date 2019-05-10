

//Vérification du formulaire-------------------------------------------------------------------

//Mail

var iptMail = document.getElementById("iptmail");
var divMail = iptMail.parentNode;

divMail.insertAdjacentHTML("beforeend","<span></span>");
var spanMsg = document.querySelector("form #champs-mail span")


var spanText = document.createTextNode ("  ");
spanMsg.appendChild(spanText);

function controlMail (elem){
	
	var mailClean = elem.value.trim();
	var regExp = /^[a-z0-9\-_\.]+@[a-z0-9\-\.]+\.[a-z]{2,14}$/i;
	
	spanText.innerHtml ="";
	
	
	if(iptMail.validity.valueMissing){
		
		
		spanText.textContent ="  Veuillez compléter ce champ";
		spanMsg.style.color = "red";
		iptMail.style.backgroundColor = "#fae0e0";
	}
	
	else if(regExp.test(mailClean)){
		
		spanText.textContent ="  Email Valide";
		spanMsg.style.color = "green";
		iptMail.style.backgroundColor = "rgb(191, 225, 193)";
		
	}
	
	else{
		
		spanText.textContent ="  Email Invalide";
		spanMsg.style.color = "red";
		iptMail.style.backgroundColor = "#fae0e0";
	}
}

iptMail.onblur = function(){
	controlMail(this);
}





