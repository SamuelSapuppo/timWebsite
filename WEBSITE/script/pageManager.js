// manages click in pages + menu highlighting management
function clickPageLinks() {

    // this event is fired everytime you click a link or when pressing back/forward browser buttons
    window.onpopstate = function() {
        var url = window.location.href;

        // extract the string after #
        var args = url.split('#')[1];

        // get the page (0 in the array of args)
        var page = args.split('&')[0];

        if(page!='') {

            // the element in the header to highlight is a li element that contain as class the "pagename"_page
            var newElm = $('li[class*="'+page+'_page"]');

            // remove class from the previous active menu element
            var prevElm = $('li[class*="active"]');
            prevElm.removeClass('active');
			newElm.addClass('active');
			if(page=='tvent_cat' || page=='smartphoneTelefoni' || page=='supportoConf' || page=='tvSmartLiving' || page=='supportoConf') {
				var preElm = $('li[class*="subm"]');
				preElm.removeClass('subm');
				newElm.addClass('subm');
			}
			else 
				restore();
			
            manager(args);
        }
		


    };
}

function subRestore() {
	$('li[class*="subm"]').removeClass("subm");
}
function restore(){
	$(".submenus").hide();
	$(".submenud").hide();
	$(".submenua").hide();
	$(".submenuw").hide();
	$('.smartlife_page').css('margin-top', '4px');
	$('.assistance_page').css('margin-top', '4px');
	$('.promotions_page').css('margin-top', '4px');
	$('.thegroup_page').css('margin-top', '4px');

	
}

function onKeyNumeric(e) {
	
	// Accetto solo numeri e backspace <-
	if (e.keyCode >= 0 && e.keyCode <= 1000000000) 
		return true;
	 else 
		return false;
	
}

function manager(args) {

    // get the page (0 in the array of args)
        var page = args.split('&')[0];
		  
    // special is an additional parameter to render the same page in different ways
    // for istance, single_class.html can contains different informations based on
    // different values of special
    //var special = parts[1];

    // enable script for calls to external php
    $.getScript('script/ajaxCalls.js', function(){
        // load the page dinamycally inside the template

								
        $( ".page" ).load(page+'.html', function() {

            //************** SPECIFIC PAGE FUNCTIONS ****************//
            // after loading the whole page we should load the page manager for links inside the main div, this is because
            // the callback function
        			
			switch(page) {
				case "home": {
					subRestore();
					clickPageLinks();					
					$(".nav").html('<a href="index.html" id="navlast">HOME </a> ');
					break;
				}
				
				case "timvision": {
					getTimvision(function () { clickPageLinks(); });					
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a id="navlast" href="#timvision">Tim vision</a>');
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					$('.tvent_cat_page').addClass('subm');
					break;
				}
				case "actrules_timvision": {
					getActrules(function () {clickPageLinks();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a href="#timvision">Tim vision> </a> <a id="navlast" href="#actrules_timvision">Regolamento</a>');
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					$('.tvent_cat_page').addClass('subm');
					break;
				}
				
				case "formreg_timvision": {
					getCosti(function () {clickPageLinks();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a href="#timvision">Tim vision> </a> <a href="#actrules_timvision">Regolamento> </a> <a id="navlast" href="#formreg_timvision">Sottoscrivi</a>');
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					$('.tvent_cat_page').addClass('subm');
					break;
				}
								
				case "devices": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#devices" id="navlast">DISPOSITIVI</a>');
					$(".submenud").show();
					$('.smartlife_page').css('margin-top', '-4px');
					document.getElementById("li01").onclick=function(){
							localStorage.setItem("selection", 1);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("tuttiSmartphoneBot").onclick=function(){
							localStorage.setItem("selection", 1);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("smartphoneBot").onclick=function(){
						localStorage.setItem("selection", 2);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("iphoneBot").onclick=function(){
						localStorage.setItem("selection", 3);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("altroSmartphoneBot").onclick=function(){
						localStorage.setItem("selection", 4);
						localStorage.setItem("useSelection", true);
					};
					
					
					
					document.getElementById("li04").onclick=function(){
							localStorage.setItem("selection", 1);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("tuttiTVSLBot").onclick=function(){
							localStorage.setItem("selection", 1);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("tvBot").onclick=function(){
						localStorage.setItem("selection", 2);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("smartwatchBot").onclick=function(){
						localStorage.setItem("selection", 3);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("altroTVSLBot").onclick=function(){
						localStorage.setItem("selection", 4);
						localStorage.setItem("useSelection", true);
					};
					
					break;
				}
				case "smartlife": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife" id="navlast">SMART LIFE</a>');
					$(".submenus").show();
					$('.assistance_page').css('margin-top', '-4px');				
					break;
				}
				case "assistance": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#assistance" id="navlast">ASSISTENZA</a>');
					$(".submenua").show();
					$('.promotions_page').css('margin-top', '-4px');
					break;
				}
				case "whoweare": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#whoweare" id="navlast">CHI SIAMO</a>');
					$(".submenuw").show();
					$('.thegroup_page').css('margin-top', '-4px');
					break;
				}
				case "tvent_cat": {
					getTvent('1');
					getTvent('2');
					getTvent('3');
					getTvent('4');
					getTvent('5');
					getTvent('6');
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat" id="navlast">Tv & Entertainment</a>');
					clickPageLinks();
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					break;
				}
				
				case "smartphoneTelefoni": {
					clickPageLinks();
					
					var content = ''
					$(".submenud").show();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#devices">DISPOSITIVI> </a><a id="navlast" href="#smartphoneTelefoni"> Smartphone e telefoni</a>');
					$('.smartlife_page').css('margin-top', '-4px');
					
					if(localStorage.getItem("useSelection")=="true"){
						localStorage.setItem("useSelection", true);
						switch (localStorage.getItem("selection")){
							case "1":{
								document.getElementById("ckST1").checked="true";
								getSmartETel('1');	
								break;
							}
							case "2":{
								document.getElementById("ckST2").checked="true";
								getSmartETel('2');	
								break;
							}
							case "3":{
								document.getElementById("ckST3").checked="true";
								getSmartETel('3');	
								break;
							}
							case "4":{
								document.getElementById("ckST4").checked="true";
								getSmartETel('4');	
								break;
							}
							default: {								
							}
						}
						
						document.getElementById("ckST1").onclick=function(){
							document.getElementById("ckST1").checked="true";
							getSmartETel('1');		
						};
						document.getElementById("ckST2").onclick=function(){
							document.getElementById("ckST2").checked="true";
							getSmartETel('2');							
						};
						document.getElementById("ckST3").onclick=function(){
							document.getElementById("ckST3").checked="true";
							getSmartETel('3');							
						};
						document.getElementById("ckST4").onclick=function(){
							document.getElementById("ckST4").checked="true";
							getSmartETel('4');							
						};		
						
						
						
			//sbiribillanteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee		
						
						
						
					}									
					break;
				}
				
				case "tvSmartLiving": {
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#devices">DISPOSITIVI> </a><a id="navlast" href="#tvSmartLiving"> TV e Smart Living</a>');
					$(".submenud").show();
					$('.smartlife_page').css('margin-top', '-4px');		

					if(localStorage.getItem("useSelection")=="true"){
						localStorage.setItem("useSelection", true);
						switch (localStorage.getItem("selection")){
							case "1":{
								document.getElementById("ckTSL1").checked="true";
								getTVESL('5');
								break;
							}
							case "2":{
								document.getElementById("ckTSL2").checked="true";
								getTVESL('6');
								break;
							}
							case "3":{
								document.getElementById("ckTSL3").checked="true";
								getTVESL('7');
								break;
							}
							case "4":{
								document.getElementById("ckTSL4").checked="true";
								getTVESL('8');
								break;
							}
							default: {								
							}
						}
						
						document.getElementById("ckTSL1").onclick=function(){
							document.getElementById("ckTSL1").checked="true";
							getTVESL('5');						
						};
						document.getElementById("ckTSL2").onclick=function(){
							document.getElementById("ckTSL2").checked="true";
							getTVESL('6');							
						};
						document.getElementById("ckTSL3").onclick=function(){
							document.getElementById("ckTSL3").checked="true";
							getTVESL('7');						
						};
						document.getElementById("ckTSL4").onclick=function(){
							document.getElementById("ckTSL4").checked="true";
							getTVESL('8');							
						};	
											

											
											


						document.getElementById("ckTSL1").onclick=function(){
							document.getElementById("ckTSL1").checked="true";
							getTVESL('5');						
						};
						document.getElementById("ckTSL2").onclick=function(){
							document.getElementById("ckTSL2").checked="true";
							getTVESL('6');							
						};
						document.getElementById("ckTSL3").onclick=function(){
							document.getElementById("ckTSL3").checked="true";
							getTVESL('7');						
						};
						document.getElementById("ckTSL4").onclick=function(){
							document.getElementById("ckTSL4").checked="true";
							getTVESL('8');							
						};	
							


				if document.getElementsByClassName("checkPrzST").onclick=function{







						checkedElem = new Array();
				if document.getElementById("ckST5")=="TRUE"{
					checkedElem[0]="1";
				}
				else{
					checkedElem[0]="0";
				}
				if document.getElementById("ckST6")=="TRUE"{
					checkedElem[1]="1";
				}
				else{
					checkedElem[1]="0";
				}
				if document.getElementById("ckST7")=="TRUE"{
					checkedElem[2]="1";
				}
				else{
					checkedElem[2]="0";
				}
				if document.getElementById("ckST8")=="TRUE"{
					checkedElem[3]="1";
				}
				else{
					checkedElem[3]="0";
				}
				if document.getElementById("ckST9")=="TRUE"{
					checkedElem[4]="1";
				}
				else{
					checkedElem[4]="0";
				}
				if document.getElementById("ckST10")=="TRUE"{
					checkedElem[5]="1";
				}
				else{
					checkedElem[5]="0";
				}
				if document.getElementById("ckST11")=="TRUE"{
					checkedElem[6]="1";
				}
				else{
					checkedElem[6]="0";
				}
				if document.getElementById("ckST12")=="TRUE"{
					checkedElem[7]="1";
				}
				else{
					checkedElem[7]="0";
				}
				if document.getElementById("ckST13")=="TRUE"{
					checkedElem[8]="1";
				}
				else{
					checkedElem[8]="0";
				}
				if document.getElementById("ckST14")=="TRUE"{
					checkedElem[9]="1";
				}
				else{
					checkedElem[9]="0";
				}
				if document.getElementById("ckST15")=="TRUE"{
					checkedElem[10]="1";
				}
				else{
					checkedElem[10]="0";
				}
				if document.getElementById("ckST16")=="TRUE"{
					checkedElem[11]="1";
				}
				else{
					checkedElem[11]="0";
				}
				if document.getElementById("ckST17")=="TRUE"{
					checkedElem[12]="1";
				}
				else{
					checkedElem[12]="0";
				}
				if document.getElementById("ckST18")=="TRUE"{
					checkedElem[13]="1";
				}
				else{
					checkedElem[13]="0";
				}

			}













							
					}								
					break;
				}
				
				
				
				case "device": {
					clickPageLinks();
					getDevice('2');	
					break;
				}
				
				
				
				case "supportoConf": {
					getSupporto(function () {clickPageLinks();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#assistance">ASSISTENZA> </a> <a id="navlast" href="#supportoConf">Supporto Tecnico e configurazione </a> ');
					$(".submenua").show();	
					$('.promotions_page').css('margin-top', '-4px');
					break;
				}
				
				
				
				default: clickPageLinks(); break;
				
            }
            //************** END SPECIFIC PAGE FUNCTIONS ***********//

            // scroll to top when loading a new page
            window.scrollTo(0,200);
        });
   

 });
   
}
