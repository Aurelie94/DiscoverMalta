
//Jquery---------------------------------------------------------------------------------------

//Affichage de la carte

$(function(){

	var btnCarte = $("#titre-carte");
	//console.log(btnCarte);

	btnCarte.on('click', function(){
		
		$('#carte').slideToggle(500, function(){
			
			$('iframe').css('display', 'inline-block')
		});
		
		
	});

});

