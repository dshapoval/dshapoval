	document.addEventListener("DOMContentLoaded", function(event) {
	var productsCount = document.getElementById("products-count");
	console.log(productsCount);

	var addToCartButtons = document.querySelectorAll(".add-to-cart")
	console.log(addToCartButtons);


	for( var i = 0; i < addToCartButtons.length; i++){
		addToCartButtons[i].addEventListener("click",function (e) {
			e.preventDefault();
			var prevProductsCount =+ productsCount.textContent;	
			productsCount.textContent = prevProductsCount + 1;	
		})
	}

	var buttonLike = document.querySelectorAll(".device_like")
	console.log(buttonLike)
	var length =  buttonLike.length;
	for( let i = 0; i < length; i++) {

		buttonLike[i].addEventListener("click", function(e){
			e.preventDefault();
			console.log('is like', buttonLike[i].classList.contains("like") );
			if ( this.classList.contains("like") ) {
				this.classList.remove("like")
			} else {
				this.classList.add("like")
			}
		}

	)}
	


  	$('.slider').slick({
	  dots: true,
	  speed: 3000,
	  autoplay: true,
	  autoplayspeed: true
    });
});


