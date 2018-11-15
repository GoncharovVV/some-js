//html 
<a href="#" class="btn login" data-open="login-form" data-parent="#login">
    <i class="icon-in"></i>
    <span>Login</span>
</a>
<div class="top-menu_wrapper" id="login">
    <a href="#" class="top-menu_close" data-open="login-form" data-parent="#login">
        Close
    </a>
</div>
//hide on body and button click
//open-close on button click
//multiple buttons on page 
function initOpenTopForm() {
    var buttons = getArrFromPseudo(document.querySelectorAll('[data-open]')),
        wrapper = document.querySelector('.wrapper'),
        wrapperClasses,
        itemClass,
        dataArr = [];
    if (buttons.length > 0) {
        buttons.forEach(function (item) {
            if (!~(dataArr.indexOf(item.getAttribute('data-open')))) {
                dataArr.push(item.getAttribute('data-open'));
            }
            item.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                var target = this.getAttribute('data-parent'),
                    parentEl = document.querySelector(target);

                wrapperClasses = getArrFromPseudo(wrapper.classList);
                itemClass = item.getAttribute('data-open');
                var matchesArr = dataArr.filter(function (dataArrItem) {
                    return wrapperClasses.indexOf(dataArrItem) > -1;
                });
                if (matchesArr.length > 0) {

                    if (!~(matchesArr.indexOf(itemClass))) {
                        matchesArr.push(itemClass);
                    }
                    matchesArr.forEach(function (itemMatch) {
                        console.log(matchesArr.length);
                        toggleClass(wrapper, itemMatch);
                        closeOnWrapperClick(itemClass, parentEl);
                    });
                } else {
                    toggleClass(wrapper, itemClass);
                    closeOnWrapperClick(itemClass, parentEl);
                }
            });
        });
    }
}

function getArrFromPseudo(pseudoArr) {
    if (pseudoArr.length) {
        return Array.prototype.slice.call(pseudoArr);
    } else {
        return [];
    }
}

function closeOnWrapperClick(className, parentEl) {
    var wrapper = document.querySelector('.wrapper' + '.' + className);
    if (wrapper) {
        wrapper.addEventListener('click', listenerAction, false);
    }

    function listenerAction(e) {
        var targetParent = e.target;
        while (targetParent !== this) {
            if (targetParent !== parentEl) {
                targetParent = targetParent.parentNode;
            } else {
                break;
            }
        }
        if (targetParent === this) {
            wrapper.classList.remove(className);
            wrapper.removeEventListener('click', listenerAction, false);
        }
    }
}

function toggleClass(that, className) {
    that.classList.toggle(className);
}