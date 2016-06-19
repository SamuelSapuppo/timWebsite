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


function getSmartETel(info, cont) {
	
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getDevices.php", //Relative or absolute path to file.php file
		data: {id:info, cont:cont},
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
			
				if(json.length==0){
					content='<div class="nessunDispos"><p>NESSUN DISPOSITIVO TROVATO</p></div>';
				}
				for(var i=0;i<json.length;i++){
                    content+='<div class="box-dispos"><img class="img-dispos" src="'+json[i].img1_d+'">';
                    content+='<p class="titDisp">'+json[i].nome_d+'</p>';
					content+='<div class="infoDisp">';
					content+='<p class="nomecateg">Prezzo:</p>';
					content+='<p class="valcateg">'+json[i].prz_scn_d+' €</p>';
					content+='<p class="nomecateg">Memoria:</p>';
					if(json[i].memoria2_d!=''){
						content+='<p class="valcateg">'+json[i].memoria1_d+' / '+json[i].memoria2_d+'</p>';
					}
					else{
						content+='<p class="valcateg">'+json[i].memoria1_d+'</p>';
					}
					content+='<p class="nomecateg">Display:</p>';
					content+='<p class="valcateg">'+json[i].display_d+'"</p>';
					content+='<div class="botST">';
					content+='<span class='+json[i].classBot_d+'><a href='+json[i].hrefBot_d+'>SCOPRI</a></span>';
                    content+='</div></div></div>';
				}
				
				
				
            // based on id I will fill the related divs
			
                    $(".smarttel").html(content);
					
				
        }, error: function(request,error){
            console.log("Error");
        }
    });

}




function getTVESL(info, cont){
	
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getDevices.php", //Relative or absolute path to file.php file
        data: {id:info, cont:cont},
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
			
				if(json.length==0){
					content='<div class="nessunDispos"><p>NESSUN DISPOSITIVO TROVATO</p></div>';
				}
				for(var i=0;i<json.length;i++){
					
					content+='<div class="box-dispos"><img class="img-TVESL" src="'+json[i].img1_d+'">';
					content+='<div class="titTVESL">';
                    content+='<p>'+json[i].marca_d+'</p>';
                    content+='<p>'+json[i].nome_d+'</p>';
                    content+='</div>';					
					content+='<div class="infoTVESL">';
					content+='<p class="nomecateg">Prezzo:</p>';
					content+='<p class="valcateg">'+json[i].prz_scn_d+' €</p>';	
					
					if(json[i].dimens_tvSL!=''){
						content+='<div class="TVESLcateg">';
						content+='<p class="nomecateg">Dimensione:</p>';
						content+='<p class="valcateg">'+json[i].dimens_tvSL+'</p>';
						content+='</div>';
					}
					if(json[i].memoria_d!=''){
						content+='<div class="TVESLcateg">';
						content+='<p class="nomecateg">Memoria:</p>';
						if(json[i].memoria2_d!=''){
							content+='<p class="valcateg">'+json[i].memoria1_d+' / '+json[i].memoria2_d+'</p>';
						}
						else{
							content+='<p class="valcateg">'+json[i].memoria1_d+'</p>';
						}
						content+='</div>';
					}
					if(json[i].display_tvSL!=''){
						content+='<div class="TVESLcateg">';
						content+='<p class="nomecateg">Display:</p>';
						content+='<p class="valcateg">'+json[i].display_tvSL+'</p>';
						content+='</div>';
					}
					if(json[i].caratt_tvSL!=''){
						content+='<div class="TVESLcateg">';
						content+='<p class="nomecateg">Caratteristiche:</p>';
						content+='<p class="valcateg">'+json[i].caratt_tvSL+'</p>';
						content+='</div>';
					}
					content+='<div class="botTVESL" id=idBot_tvSL'+json[i].id_d+'>';
					content+='<span class='+json[i].classBot_d+'><a href='+json[i].hrefBot_d+'>SCOPRI</a></span>';
					content+='</div></div></div>';
				}
				
            // based on id I will fill the related divs
                    $(".tvsl").html(content);
					
        }, error: function(request,error){
            console.log("Error");
        }
    });

}

function getDevice(info, flag, flag2) {
	
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getDevice.php", //Relative or absolute path to file.php file
        data: {id:info, flag:flag, flag2:flag2},
        success: function(response) {
            var json=JSON.parse(response);
			var content1='<iframe id="videoD" src='+json[0].video_d+' frameborder="0" allowfullscreen></iframe>';
			var content2='';
			var content3=json[0].prz_int_d+' €';
			var content4=json[0].prz_scn_d+' €';
			var content5='';	
				if(json[0].colore2_d!=""){
					$(".carousel-colors").append(content5);
					$("#carColC2").css("background-color", json[0].colore2_d);
				}
					
						
				if(flag2==0){
					content2='<img src="'+json[0].img1_d+'">';
					if(flag==0 && json[0].img1_d!=""){					
						content2='<img src="'+json[0].img1_d+'">';
					}
					if(flag==1 && json[0].img2_d!=""){	
						content2='<img src="'+json[0].img2_d+'">';
					}
				
				}
				else{
					content2='<img src="'+json[0].img3_d+'">';	
					if(flag==0 && json[0].img3_d!=""){					
						content2='<img src="'+json[0].img3_d+'">';
					}
					if(flag==1 && json[0].img4_d!=""){	
						content2='<img src="'+json[0].img4_d+'">';
					}
				}
				
		
			
			
					
                    
		
			// based on id I will fill the related divs
					$(".titDispos").html(json[0].nome_d);
                    $(".videoDispos").html(content1);
                    $(".imgDispos").html(content2);
                    $(".prezzoTotDispos").html(content3);
                    $(".prezzoScnDispos").html(content4);
                    $("#carColC1").css("background-color", json[0].colore1_d);
					$(".titDescrDispos").html(json[0].titDescr_d);
                    $(".descrDispos").html(json[0].descr_d);
        }, error: function(request,error){
            console.log("Error");
        }
		
		
		
    });

}


function getPromotions() {
	
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getPromotions.php", //Relative or absolute path to file.php file
        success: function(response) {
            var json=JSON.parse(response);
            var content = '';
			
				if(json.length==0){
					content='<div class="nessunDispos"><p>NESSUN DISPOSITIVO TROVATO</p></div>';
				}
				for(var i=0;i<json.length;i++){
                    content+='<div class="box-dispos"><img class="img-dispos" src="'+json[i].img1_d+'">';
                    content+='<p class="titDisp">'+json[i].nome_d+'</p>';
					content+='<div class="infoDisp">';
					content+='<p class="nomecateg">Prezzo:</p>';
					content+='<p class="valintcateg">'+json[i].prz_int_d+' €</p>';
					content+='<p class="valcateg">'+json[i].prz_scn_d+' €</p>';
					content+='<div class="botST">';
					content+='<span class='+json[i].classBot_d+'><a href='+json[i].hrefBot_d+'>SCOPRI</a></span>';
                    content+='</div></div></div>';
				}
				
				
				
            // based on id I will fill the related divs
			
                    $(".promo").html(content);
					
				
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

function getSupporto(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://sitotim.altervista.org/php/getSupporto.php", //Relative or absolute path to file.php file
        success: function(response) {
			var cat=JSON.parse(response);
            console.log(cat);
            var content = '';
			var i=0;
			var cla='';
			for(i;i<cat.length;i++){ //vedere perchè non va;

				content=cat[i].Contenuto;
				console.log(content);
				cla=('.set'+(i+1));
				console.log(cla);
				$(cla).append(content);							
			}
								
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}