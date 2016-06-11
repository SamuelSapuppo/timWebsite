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
			if(page=='tvent_cat' || page=='smartphoneTelefoni' || page=='supportoConf') {
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
					$(".nav").html('<a href="index.html" id="navlast">HOME </a> ');
					getTimvision(function () { clickPageLinks(); });
					break;
				}
				
				case "timvision": {
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a id="navlast" href="#timvision">Tim vision</a>');
				}
								
				case "devices": {
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
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife" id="navlast">SMART LIFE</a>');
					$(".submenus").show();
					$('.assistance_page').css('margin-top', '-4px');				
					break;
				}
				case "assistance": {
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#assistance" id="navlast">ASSISTENZA</a>');
					$(".submenua").show();
					$('.promotions_page').css('margin-top', '-4px');
					break;
				}
				case "whoweare": {
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
					$(".submenud").show();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="smartlife.html">DISPOSITIVI> </a><a id="navlast" href="#smartphoneTelefoni"> Smartphone e telefoni</a>');
					$('.smartlife_page').css('margin-top', '-4px');
					
					if(localStorage.getItem("useSelection")=="true"){
						localStorage.setItem("useSelection", true);
						switch (localStorage.getItem("selection")){
							case "1":{
								document.getElementById("ckST1").checked="true";
								break;
							}
							case "2":{
								document.getElementById("ckST2").checked="true";
								break;
							}
							case "3":{
								document.getElementById("ckST3").checked="true";
								break;
							}
							case "4":{
								document.getElementById("ckST4").checked="true";
								break;
							}
							default: {								
							}
						}
					}									
					break;
				}
				
				case "tvSmartLiving": {
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="smartlife.html">DISPOSITIVI> </a><a id="navlast" href="#tvSmartLiving"> TV e Smart Living</a>');
					$(".submenud").show();
					$('.smartlife_page').css('margin-top', '-4px');		

					if(localStorage.getItem("useSelection")=="true"){
						localStorage.setItem("useSelection", true);
						switch (localStorage.getItem("selection")){
							case "1":{
								document.getElementById("ckTSL1").checked="true";
								break;
							}
							case "2":{
								document.getElementById("ckTSL2").checked="true";
								break;
							}
							case "3":{
								document.getElementById("ckTSL3").checked="true";
								break;
							}
							case "4":{
								document.getElementById("ckTSL4").checked="true";
								break;
							}
							default: {								
							}
						}
					}								
					break;
				}
				default: clickPageLinks(); break;
				
            }
            //************** END SPECIFIC PAGE FUNCTIONS ***********//

            // scroll to top when loading a new page
            window.scrollTo(0,0);
        });
   

 });
   
}
