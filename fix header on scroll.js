function initScrollToggleHeader() {
	var headerElement = document.querySelector('.header'),
		currentPosition = headerElement.scrollHeight + 100,
		flag = true;

	function toggleHeader() {
		if (currentPosition < window.pageYOffset && flag) {
			headerElement.classList.add('hidden');
			flag = false;
			currentPosition = window.pageYOffset;
		} else if (!flag && currentPosition > window.pageYOffset) {
			headerElement.classList.remove('hidden');
			flag = true;
		}
		if (headerElement.scrollHeight < window.pageYOffset) {
			currentPosition = window.pageYOffset;
		}
	}
	window.addEventListener("scroll", throttle(toggleHeader, 100));

	function throttle(callback, limit) {
		var wait = false;
		return function () {
			if (!wait) {
				callback.call();
				wait = true;
				setTimeout(function () {
					wait = false;
				}, limit);
			}
		}
	}
}