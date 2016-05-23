/**
 * Created by Administrator on 2016-5-13.
 */
(function () {
    var carouselMain = document.getElementsByClassName('carousel-main')[0];
    var carousels = document.getElementsByClassName('carousel-item');
    var ctrlItems = document.getElementsByClassName('carousel-ctrl-item');

    var moveDistance = 0;
    var timer = 0;

//鼠标移入切换
    function changeCarousel(event) {

        for (var p = 0; p < ctrlItems.length; p++) {
            (function (i) {
                ctrlItems[i].addEventListener('mouseover', function () {
                    for (var j = 0; j < ctrlItems.length; j++) {
                        carousels[j].style.zIndex = 0;
                        ctrlItems[j].children[0].style.backgroundColor = '#fff';
                    }
                    carousels[i].style.zIndex = 10;
                    var moveDistance = -900 * i;
                    carouselMain.style.left = moveDistance + 'px';
                    ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                    clearTimeout(timer);
                }, false);

                ctrlItems[i].onmouseout = (function (a) {
                    clearTimeout(timer);
                    return function () {
                        timer = setTimeout(function () {
                            //
                            var b = a + 1;
                            autoCarousel(b);
                        }, 2500);
                    }
                })(i);

            })(p);
        }

    }

    window.onload = function () {
        changeCarousel();
    }

//自动轮播

    function autoCarousel() {
        var index = 0;
        clearTimeout(timer);
        if (arguments[0] || arguments[0] === 0) {
            index = arguments[0];
        }
        for (var j = 0; j < ctrlItems.length; j++) {
            carousels[j].style.zIndex = 0;
            ctrlItems[j].children[0].style.backgroundColor = '#fff';
        }
        if (index == 0 || index >= 3) {
            index = 0;
            moveDistance = 0;
            carouselMain.style.left = moveDistance + 'px';
            ctrlItems[index].children[0].style.backgroundColor = '#ccc';
            index++;
        }
        else {
            moveDistance = -900 * index;
            carouselMain.style.left = moveDistance + 'px';
            ctrlItems[index].children[0].style.backgroundColor = '#ccc';
            index++;
        }
        timer = setTimeout(function () {
            autoCarousel(index);
        }, 2500);
    }

    timer = setTimeout(autoCarousel(0), 2500);
})();