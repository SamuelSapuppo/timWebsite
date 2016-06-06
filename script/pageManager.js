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

            manager(args);
        }
		$(".submenus").hide();
		$(".submenud").hide();
		$(".submenua").hide();
		$(".submenuw").hide();


    };
}

function manager(args) {

    // get the page (0 in the array of args)
        var page = args.split('&')[0];
		var flagd=false, flagsl=false, flaga=false;  
    // special is an additional parameter to render the same page in different ways
    // for istance, single_class.html can contains different informations based on
    // different values of special
    //var special = parts[1];

    // enable script for calls to external php
   // $.getScript('js/ajaxCalls.js', function(){
        // load the page dinamycally inside the template

								
        $( ".page" ).load(page+'.html', function() {

            //************** SPECIFIC PAGE FUNCTIONS ****************//
            // after loading the whole page we should load the page manager for links inside the main div, this is because
            // the callback function
            //POI METTERE SWITCH CASE
			
			
			switch(page) {
								
				case "devices": {
					clickPageLinks();
					$(".submenud").show();
					$('.smartlife_page').css('margin-top', '-4px');
					flagd=1;
					
					break;
				}
				case "smartlife": {
					clickPageLinks();
					$(".submenus").show();
					$('.assistance_page').css('margin-top', '-4px');
					flagsl=1;
					
					break;
				}
				case "assistance": {
					clickPageLinks();
					$(".submenua").show();
					$('.promotions_page').css('margin-top', '-4px');
					flaga=1;
					
					break;
				}
				case "whoweare": {
					clickPageLinks();
					$(".submenuw").show();
					
					break;
				}
				default: clickPageLinks(); break;
				
            }
            //************** END SPECIFIC PAGE FUNCTIONS ***********//

            // scroll to top when loading a new page
            window.scrollTo(0,0);
        });
   }

   // });
   

