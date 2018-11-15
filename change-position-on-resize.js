    //html

    <a href="#" class="view_tabs-action " data-open="share-popap_opened" data-parent="#share">
        <i class="icon-share-content"></i>
        Share
    </a>
    <div class="block-share" id="share"></div>
    //html
    
    //put array of objects for each group to listen
    //'holder' - target scope.
    //'parent' - . Put any css selector
    //'child' - positopn absolute. Put any css selector 
    //'start' - start to change position from. Number only
    initChangePositionOnResize([{
        'parent': '.share-tab',
        'child': '#share',
        'start': '800',
        'position': 'left',
        'holder': '.view_columns'
    }]);

    function initChangePositionOnResize(itemsArr) {
        if (itemsArr.length > 0) {
            itemsArr.forEach(function (item) {
                actualResizeHandler();
                window.addEventListener("resize", resizeThrottler, false);
                var resizeTimeout;

                function resizeThrottler() {
                    if (!resizeTimeout) {
                        resizeTimeout = setTimeout(function () {
                            resizeTimeout = null;
                            actualResizeHandler();
                        }, 66);
                    }
                }

                function actualResizeHandler() {
                    if (window.innerWidth < item['start']) {
                        var parentEl = document.querySelector(item['parent']),
                            childEl = document.querySelector(item['child']),
                            holderScope = document.querySelector(item['holder']),
                            holderScopeRect = holderScope.getBoundingClientRect(),
                            positionTo = item['position'],
                            parentElRect = parentEl.getBoundingClientRect();
                        childEl.style[positionTo] = holderScopeRect[positionTo] - parentElRect[positionTo] + 'px';
                    }
                }
            });
        }
    }