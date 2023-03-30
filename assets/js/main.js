/*!
 * Orderio
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2023
 */

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
}
document.querySelectorAll('.money').forEach(item => {
	item.innerHTML = numberWithCommas(item.innerHTML)
})
