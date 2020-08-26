    $(document).ready(function() {
    	if(window.matchMedia("(max-width: 767px)").matches){
    		  	document.getElementById("navbar-wrapper1").style.backgroundColor = "white";	
			  	document.getElementsByClassName("navbar-collapse")[0].style.backgroundColor = "white"
	  	  }
    });	

	// var prevScrollpos = window.pageYOffset;
	
	// window.onscroll = function() {
	//   var currentScrollPos = window.pageYOffset;
	//   max_height=($(document).height())-($(window).height());
	//   console.log(currentScrollPos);
	//   console.log(prevScrollpos);	  	  
	//   	  if(window.matchMedia("(max-width: 767px)").matches){
	//   	  }
	//   	  else{ //appear
	// 		  if(currentScrollPos>=25){
	// 		    // document.getElementById("navbar-wrapper1").style.top = "0";  	
	// 		  	document.getElementById("navbar-wrapper1").style.boxShadow = " 0px 0.5px 0px rgba(0, 0, 0, 0.3)";
	// 		  	document.getElementById("navbar-wrapper1").style.backgroundColor = "white";	

	// 		  }
	// 		  else if(currentScrollPos==0){
	// 			// document.getElementById("navbar-wrapper1").style.top = "";  	
	// 		  	document.getElementById("navbar-wrapper1").style.boxShadow = "none";				
	// 		  	document.getElementById("navbar-wrapper1").style.backgroundColor = "transparent";
	// 		  }
	// 		}
	//   prevScrollpos = currentScrollPos;
	// }