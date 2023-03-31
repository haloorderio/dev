/*!
 * Orderio
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2023
 */

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
}
document.querySelectorAll('.currency').forEach(item => {
	let currency = numberWithCommas(item.innerHTML)
	item.innerHTML = currency
})

for (let i=0; i<document.getElementsByClassName('splide').length; i++) {
	new Splide('.splide', {
		pagination: false,
	}).mount()
}