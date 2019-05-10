

//Galerie images----------------------------------------------------------------------------------

//Creation du container

var viewer1 = document.getElementsByTagName("section")[1].getElementsByTagName("div")[0];
console.log(viewer1);

var imgTemp = document.getElementById("img-temp");


//Cibler les images

var pictures = document.querySelectorAll("#galerie-img img");
var pictQty = pictures.length;

console.log(pictures);

var span = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];
console.log(next);

//Partie01
var img01 = document.querySelector("#mdina-01");
var img02 = document.querySelector("#mdina-02");
var img03 = document.querySelector("#mdina-03");


//Partie02
var img04 = document.querySelector("#gozo-01");
var img05 = document.querySelector("#gozo-02");

//Partie03
var img06 = document.querySelector("#valette-01");
var img07 = document.querySelector("#valette-02");
var img08 = document.querySelector("#valette-03");

//Partie04
var img09 = document.querySelector("#sud-01");
var img10 = document.querySelector("#sud-02");
var img11 = document.querySelector("#sud-03");
var img12 = document.querySelector("#sud-04");
		
var compteur;

console.log(pictures);
//Ouvrir la galerie


for(var i = 0; i < pictQty; i++){
	
	
	pictures[i].onclick = function (){
	
		//Ajout des classes
		viewer1.classList.add("overlay");

		span.style.display ="inline-block";
		prev.style.display ="inline-block";
		next.style.display ="inline-block";

				
		//Ouvrir la 1ere image
				
		if(this == img01){
			ajoutImg01();	
		}
		else if(this == img02){
			ajoutImg02();
		}
		
		else if(this == img03){
			ajoutImg03();
		}
		
		else if(this == img04){
			ajoutImg04();
		}
		
		else if(this == img05){
			ajoutImg05();
		}
		
		else if(this == img06){
			ajoutImg06();
		}
		
		else if(this == img07){
			ajoutImg07();
		}
		
		else if(this == img08){
			ajoutImg08();
		}
		
		else if(this == img09){
			ajoutImg09();
		}
		
		else if(this == img10){
			ajoutImg10();
		}
		
		else if(this == img11){
			ajoutImg11();
		}
		
		else if(this == img12){
			ajoutImg12();
		}
			
	}
	
	//image précédente
	
	prev.onclick = function(){
		deleteImg();
		compteur = compteur - 1;
		console.log(compteur);
						
		if(compteur == 0){
			ajoutImg01();	
		}
		else if(compteur == 1){
			ajoutImg02();
		}
		
		else if(compteur == 2){
			ajoutImg03();
		}
		
		else if(compteur == 3){
			ajoutImg04();
		}
		
		else if(compteur == 4){
			ajoutImg05();
		}
		
		else if(compteur == 5){
			ajoutImg06();
		}
		
		else if(compteur == 6){
			ajoutImg07();
		}
		
		else if(compteur == 7){
			ajoutImg08();
		}
		
		else if(compteur == 8){
			ajoutImg09();
		}
		
		else if(compteur == 9){
			ajoutImg10();
		}
		
		else if(compteur == 10){
			ajoutImg11();
		}
		
		else{
			ajoutImg12();
		}
	}
		
	//Image suivante
		
	next.onclick = function(){
		deleteImg();
		compteur = compteur + 1;
					
		
		if(compteur == 1){
			ajoutImg02();
		}
		
		else if(compteur == 2){
			ajoutImg03();
		}
		
		else if(compteur == 3){
			ajoutImg04();
		}
		
		else if(compteur == 4){
			ajoutImg05();
		}
		
		else if(compteur == 5){
			ajoutImg06();
		}
		
		else if(compteur == 6){
			ajoutImg07();
		}
		
		else if(compteur == 7){
			ajoutImg08();
		}
		
		else if(compteur == 8){
			ajoutImg09();
		}
		
		else if(compteur == 9){
			ajoutImg10();
		}
		
		else if(compteur == 10){
			ajoutImg11();
		}
		
		else if(compteur == 11){
			ajoutImg12();
		}
		
		else{
			ajoutImg01();	
		}
	}
	
	//Fermeture
	
	span.onclick = function() {
		viewer1.classList.remove("overlay");
		span.style.display ="none";
		prev.style.display ="none";
		next.style.display ="none";
		imgTemp.innerHTML ="";
	} 
	

}



//Ajouts des images

function ajoutImg01(){
	compteur = 0;
	var newImg = img01.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg02(){
	compteur = 1;
	var newImg = img02.cloneNode(true);
	imgTemp.appendChild(newImg);	
}

function ajoutImg03(){
	compteur = 2;
	var newImg = img03.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg04(){
	compteur = 3;
	var newImg = img04.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg05(){
	compteur = 4;
	var newImg = img05.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg06(){
	compteur = 5;
	var newImg = img06.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg07(){
	compteur = 6;
	var newImg = img07.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg08(){
	compteur = 7;
	var newImg = img08.cloneNode(true);
	imgTemp.appendChild(newImg);
}

function ajoutImg09(){
	compteur = 8;
	var newImg = img09.cloneNode(true);
	imgTemp.appendChild(newImg);	
}

function ajoutImg10(){
	compteur = 9;
	var newImg = img10.cloneNode(true);
	imgTemp.appendChild(newImg);	
}

function ajoutImg11(){
	compteur = 10;
	var newImg = img11.cloneNode(true);
	imgTemp.appendChild(newImg);	
}

function ajoutImg12(){
	compteur = 11;
	var newImg = img12.cloneNode(true)
	imgTemp.appendChild(newImg);	
}


//Retirer l'image

function deleteImg () {
	imgTemp.innerHTML = "";	
}







