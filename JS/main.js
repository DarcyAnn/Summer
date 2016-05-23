/**
 * Created by Administrator on 2016-5-13.
 */
(function () {
    var carouselMain = document.getElementsByClassName('carousel-main')[0];
    var carousels = document.getElementsByClassName('carousel-item');
    var ctrlItems = document.getElementsByClassName('carousel-ctrl-item');
    var imgItem1 = carousels[0].firstChild;
    var moveDistance = 0;
    var timer = 0;
    var imgWidth = parseInt(window.getComputedStyle(imgItem1).width);

    window.onresize = function () {
        imgWidth = parseInt(window.getComputedStyle(imgItem1).width);
    }
//鼠标移入切换
    function changeCarousel() {

        for (var p = 0; p < ctrlItems.length; p++) {
            (function (i) {
                ctrlItems[i].addEventListener('mouseover', function () {
                    for (var j = 0; j < ctrlItems.length; j++) {
                        carousels[j].style.zIndex = 0;
                        ctrlItems[j].children[0].style.backgroundColor = '#fff';
                    }
                    carousels[i].style.zIndex = 10;
                    var moveDistance = -(imgWidth * i);
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
            moveDistance = -(imgWidth * index);
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
(function () {
    var dropdownBtn = document.getElementsByClassName('dropdown-btn')[0];
    var dropdown = document.getElementsByClassName('basic-dropdown')[0];
    var list = dropdown.children[1];

    function showList(event) {
        list.style.display = 'inline-block';
        event.target.style.backgroundColor = '#f2f2f2';
    }

    function hideList(event) {
        list.style.display = 'none';
        event.target.style.backgroundColor = '#fff';
    }

    dropdownBtn.addEventListener('mouseover', showList, false);
    dropdownBtn.addEventListener('mouseout', hideList, false);
    list.addEventListener('mouseover', showList, false);
    list.addEventListener('mouseout', hideList, false);
})();
/**
 * Created by Administrator on 2016-5-8.
 */

(function () {
    var btnArr = document.getElementsByTagName('button');
    var btnTarget = [];
    for (var i = 0; i < btnArr.length; i++) {
        btnTarget[i] = btnArr[i].dataset.target;
        if (btnTarget[i]) {
            btnArr[i].onclick = (function (i) {
                return function () {
                    var alertModel = document.getElementById(btnTarget[i]);
                    if (window.getComputedStyle(alertModel).display === 'none') {
                        alertModel.style.display = 'block';
                        alertModel.style.height = document.body.scrollHeight + 'px';
                    } else {
                        alertModel.style.display = 'none';
                    }
                }
            })(i);
        }
    }
})();