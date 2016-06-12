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
                    content+='<div class="titDisp"><h3>'+json[i].nome_d+'</h3>';
					content+='<div class="infoDisp"><p>Prezzo:<br>'+json[i].prz_scn_d+'</p>';
					content+='<p>Memoria:<br>'+json[i].memoria_d+'</p>';
					content+='<p>Display:<br>'+json[i].display_d+'</p>';
                    content+='</div></div></div>';
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





/*function getTimvision(callback) {
 console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getTimvision.php", //Relative or absolute path to file.php file
        success: function(response) {

            var categorie=JSON.parse(response);
            console.log(categorie);
            for(var i=0;i<categorie.length;i++){

            $(".timvcat").append(i);
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
	
*/