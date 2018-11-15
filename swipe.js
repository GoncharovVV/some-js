function initSwipeMenu() {
	var listenerNode = document.querySelector('.menu-shadow'),
		button = document.querySelector('.button-open-menu'),
		startPointX,
		processPointX,
		startPointY,
		processPointY,
		pageWidth = window.innerWidth || document.body.clientWidth,
		treshold = Math.max(1, Math.floor(0.01 * (pageWidth))),
		_limit = Math.tan(45 * 1.5 / 180 * Math.PI);
	if (listenerNode) {
		listenerNode.addEventListener('touchstart', function (event) {
			startPointX = event.changedTouches[0].clientX + 0.25;
			startPointY = event.changedTouches[0].clientY - 0.5;
		}, false);
		listenerNode.addEventListener('touchmove', function (event) {
			processPointX = event.changedTouches[0].clientX;
			processPointY = event.changedTouches[0].clientY;
			handleGesture(event);
		}, false);
	}

	function handleGesture(e) {
		var x = processPointX + 2 - startPointX,
			y = processPointY - startPointY,
			xy = Math.abs(x / y),
			yx = Math.abs(y / x);
		if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
			if (yx <= _limit) {
				if (x < 0) {
					$('.menu-shadow').removeClass('open');
					$('body').removeClass('move');
				} else {
					// console.log("right");
				}
			}
			if (xy <= _limit) {
				if (y < 0) {
					// console.log("top");
				} else {
					// console.log("bottom");
				}
			}
		} else {
			console.log("tap");
		}
	}
}