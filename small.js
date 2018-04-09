var slideIndex = 1;
	showSlides(slideIndex);
	
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	
	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("coasterSlides");
		
		if(n > slides.length) {
			slideIndex = 1;
		}
		
		if(n < 1) {
			slideIndex = slides.length;
		}
		
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
				
		slides[slideIndex - 1].style.display = "block";
	
	}

	var slideIndex2 = 1;
	showSlides2(slideIndex2);
	
	function currentSlide2(n) {
		showSlides2(slideIndex2 = n);
	}
	
	function plusSlides2(n) {
		showSlides2(slideIndex2 += n);
	}
	
	function showSlides2(n) {
		var a;
		var slides2 = document.getElementsByClassName("houseSlides");
		
		if(n > slides2.length) {
			slideIndex2 = 1;
		}
		
		if(n < 1) {
			slideIndex2 = slides2.length;
		}
		
		for (a = 0; a < slides2.length; a++) {
			slides2[a].style.display = "none";
		}
				
		slides2[slideIndex2 - 1].style.display = "block";
	
	}
