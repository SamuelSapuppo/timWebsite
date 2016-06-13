/*
 * Tim Website: HYP Project 2015-16
 * ajaxCalls.js
 * Set of functions to retrieve elements from the database
 * Author: Pennati Giulia, Sapuppo Samuel
 */

function getTvent(info) {

        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getTvent.php", //Relative or absolute path to file.php file
        data: {id:info},
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
            $.each(json[0], function(key, value){
                content += value;
            });

            // based on id I will fill the related divs
            switch(info) {
                case '1':
                    $(".tvsertimv").html(content);
                break;
				case '2':
                    $(".tvsertimv").append(content);
                break;
                case '3':
                    $(".musicser").html(content);
                break;
                case '4':
                    $(".readingser").html(content);
                break;
                case '5':
                    $(".gamingser").html(content);
                break;
                case '6':
                    $(".serieaser").html(content);
                break;
                
            }

        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getSmartETel(info) {
	
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getSmartETel.php", //Relative or absolute path to file.php file
        data: {id:info},
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
				for(var i=0;i<json.length;i++){
                    content+='<div class="box-dispos">';
                    content+='<img class="img-dispos" src="'+json[i].img_d+'">';
                    content+='<p class="titDisp">'+json[i].nome_d+'</p>';
					content+='<div class="infoDisp"><p>Prezzo:<br>'+json[i].prz_scn_d+' €</p>';
					content+='<p>Memoria:<br>'+json[i].memoria_d+'</p>';
					content+='<p>Display:<br>'+json[i].display_d+'"</p>';
                    content+='</div></div>';
				}
				
            // based on id I will fill the related divs
            switch(info) {
                case '1':
                    $(".smarttel").html(content);
                break;
            }
        }, error: function(request,error){
            console.log("Error");
        }
    });

}




function getTVESL(info) {
	
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getTVESL.php", //Relative or absolute path to file.php file
        data: {id:info},
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
				for(var i=0;i<json.length;i++){
                    content+='<div class="box-dispos">';
                    content+='<img class="img-dispos" src="'+json[i].img_tvSL+'">';
                    content+='<p class="titDisp">'+json[i].nome_tvSL+'</p>';
					content+='<div class="infoDisp"><p>Prezzo:<br>'+json[i].prz_scn_tvSL+' €</p>';
                    content+='</div></div>';
				}
				
            // based on id I will fill the related divs
            switch(info) {
                case '1':
                    $(".tvsl").html(content);
                break;
            }
        }, error: function(request,error){
            console.log("Error");
        }
    });

}




function getTimvision(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getTimvision.php", //Relative or absolute path to file.php file
        success: function(response) {

            var cat=JSON.parse(response);
            console.log(cat);
            var content = '';
			var devices = '';
			var i=0;
			
			for(i;i<cat.length-1;i++){

				content+=cat[i].Contenuto;
				content+=cat[i].Immagine;
				
				
			}
			devices+=cat[i++].Immagine;
			
			$(".timvcat").html(content);
			$("#dispset").append(devices);
			
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}