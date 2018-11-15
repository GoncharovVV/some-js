window.addEventListener("resize", throttle(initExpandingText, 500));

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