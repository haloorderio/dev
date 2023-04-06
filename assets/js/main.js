/*!
 * Orderio
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2023
 */

// Product Slider
	for (let i=0; i<document.getElementsByClassName('splide').length; i++) {
		new Splide('.splide', {
			pagination: false,
		}).mount()
	}

// Product Zoom
	$('.zoom').zoom({
		on: 'mouseover',
		touch: false,
	})

// Product Currency
	function numberWithCommas(num) {
	  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.')
	}

	document.querySelectorAll('.currency').forEach(item => {
		let currency = numberWithCommas(item.innerHTML)
		item.innerHTML = currency
	})

