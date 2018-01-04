var $document = $(document),
	element = $('.navbar'),
	navbarInverse = 'navbar-inverse';
	navbarTransparent = 'navbar-transparent';
	fadeInDown = 'fadeInDown';
	$document.scroll(function(){
		if($document.scrollTop() >= 400){
			element.addClass(navbarInverse).delay(500);
			element.removeClass(navbarTransparent);
			element.addClass(fadeInDown);


		}
		else{
			element.addClass(navbarTransparent);
			element.removeClass(navbarInverse);
			element.removeClass(fadeInDown);
		}




	});