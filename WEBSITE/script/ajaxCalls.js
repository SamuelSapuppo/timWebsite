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
                    content+='<img class="img-dispos" src="'+json[i].img_d+'">'
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
			var logo='';
			var i=0;
			
			logo+=cat[i].Immagine;
			i++;
			for(i;i<cat.length-1;i++){

				content+=cat[i].Contenuto;
				content+=cat[i].Immagine;
				
				
			}
			devices+=cat[i++].Immagine;
			$(".logovis").html(logo);
			$(".timvcat").html(content);
			$("#dispset").append(devices);
			
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}

function getActrules(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getActrules.php", //Relative or absolute path to file.php file
        success: function(response) {

            var cat=JSON.parse(response);
            console.log(cat);
            var content = '';
			var costo1='';
			var costo2='';
		
			content+="<p>"+cat[0].Cont1+"</p>";
			content+="<p>"+cat[0].Cont2+"</p>";
			content+="<p>"+cat[0].Cont3+"</p>";
			content+="<p>"+cat[0].Cont4+"</p>";
	

			costo1+='<p id="p1">'+cat[1].Cont1+'</p>';
			costo1+='<p id="p2">'+cat[1].Cont2+'</p>';
			costo1+='<p id="p3">'+cat[1].Cont3+'</p>';
			costo1+='<p id="p4">'+cat[1].Cont4+'</p>';
			
			costo2+='<p id="p5">'+cat[2].Cont1+'</p>';
			costo2+='<p id="p6">'+cat[2].Cont2+'</p>';
			costo2+='<p id="p7">'+cat[2].Cont3+'</p>';
			costo2+='<p id="p8">'+cat[2].Cont4+'</p>';
							
			
			
			$("#rules").html(content);
			$(".cst1").html(costo1);
			$(".cst2").html(costo2);
			
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}

function getCosti(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getActrules.php", //Relative or absolute path to file.php file
        success: function(response) {

            var cat=JSON.parse(response);
            console.log(cat);
           	var costo1='';
			var costo2='';
			
			
	

			costo1+='<p id="p1">'+cat[1].Cont1+'</p>';
			costo1+='<p id="p2">'+cat[1].Cont2+'</p>';
			costo1+='<p id="p3">'+cat[1].Cont3+'</p>';
			costo1+='<p id="p4">'+cat[1].Cont4+'</p>';
			
			costo2+='<p id="p5">'+cat[2].Cont1+'</p>';
			costo2+='<p id="p6">'+cat[2].Cont2+'</p>';
			costo2+='<p id="p7">'+cat[2].Cont3+'</p>';
			costo2+='<p id="p8">'+cat[2].Cont4+'</p>';
	
			$(".cst1").html(costo1);
			$(".cst2").html(costo2);
			
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}