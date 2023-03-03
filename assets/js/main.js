/*!
 * Orderio
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2023
 */
function test(selector) {
	document.querySelectorAll('.bg-white').forEach(item => {
		console.log(item.innerText)
	})
}
test('.bg-white')