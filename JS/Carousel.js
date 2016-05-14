/**
 * Created by Administrator on 2016-5-13.
 */
var carouselOuter = document.getElementsByClassName("carousel-outer")[0];
var carouselMain = document.getElementsByClassName("carousel-main")[0];
var carousels = document.getElementsByClassName("carousel-item");
var carouselCtrl = document.getElementsByClassName("carousel-ctrl")[0];
var ctrlItems = document.getElementsByClassName("carousel-ctrl-item");

//解决需要在window.onload事件中执行多个函数的问题
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
//点击轮播
function changeCarousel(event) {
    for (var i = 0; i < ctrlItems.length; i++) {
        (function (i) {
            ctrlItems[i].addEventListener('click', function () {
                for (var j = 0; j < ctrlItems.length; j++) {
                    carousels[j].style.zIndex = 0;
                    ctrlItems[j].children[0].style.backgroundColor = '#fff';
                }
                carousels[i].style.zIndex = 10;
                var moveDistance = -900 * i;
                carouselMain.style.left = moveDistance + "px";
                ctrlItems[i].children[0].style.backgroundColor = '#ccc';
            }, false)
        })(i);
    }
}

addLoadEvent(changeCarousel);

