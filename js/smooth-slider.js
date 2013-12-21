// Autumn's Smooth Slider


$(window).load(function() {	//start after HTML, images have loaded
	console.log("It works.");


	  $( ".block:first" ).animate({
	    left: 10000
	  }, {
	    duration: 10000,
	    step: function( now, fx ){
	      $( ".block:gt(0)" ).css( "left", now );
	    }
	  });


	  $( ".block:first" ).animate({
	    left: 0
	  }, {
	    duration: 10000,
	    step: function( now, fx ){
	      $( ".block:gt(0)" ).css( "left", now );
	    }
	  });

});
