/**
 * Created by Administrator on 2016-5-13.
 */
(function () {
    var carouselOuter = document.getElementsByClassName('carousel-outer')[0];
    var carouselMain = document.getElementsByClassName('carousel-main')[0];
    var carousels = document.getElementsByClassName('carousel-item');
    var carouselCtrl = document.getElementsByClassName('carousel-ctrl')[0];
    var ctrlItems = document.getElementsByClassName('carousel-ctrl-item');

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

//点击切换
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
                    carouselMain.style.left = moveDistance + 'px';
                    ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                    clearTimeout(timer);
                }, false);
                ctrlItems[i].addEventListener('mouseout', function () {
                    clearTimeout(timer);
                    //为什么这里穿进去的参数似乎没有起作用呢？ TT
                    timer = setTimeout('autoCarousel(++i)', 2500);
                }, false);
            })(i);
        }

    }

    addLoadEvent(changeCarousel);

//自动轮播
    var i = 1;
    var moveDistance = 0;

    function autoCarousel() {
        if (arguments[0] || arguments[0] === 0) {
            i = arguments[0];
        }
        for (var j = 0; j < ctrlItems.length; j++) {
            carousels[j].style.zIndex = 0;
            ctrlItems[j].children[0].style.backgroundColor = '#fff';
        }
        if (i == 0 || i >= 3) {
            i = 0;
            moveDistance = 0;
            carouselMain.style.left = moveDistance + 'px';
            ctrlItems[i].children[0].style.backgroundColor = '#ccc';
            i++;
        }
        else {
            moveDistance = -900 * i;
            carouselMain.style.left = moveDistance + 'px';
            ctrlItems[i].children[0].style.backgroundColor = '#ccc';
            i++;
        }
        timer = setTimeout('autoCarousel(i)', 2500);
    }

    var timer = setTimeout('autoCarousel()', 2500);
})();
(function () {
    var dropdownBtn = document.getElementsByClassName('dropdown-btn')[0];
    var dropdown = document.getElementsByClassName('basic-dropdown')[0];
    var list = dropdown.children[1];

    function showList(event) {
        list.style.display = 'inline-block';
        event.target.style.backgroundColor = '#f2f2f2';
    }

    function hideList() {
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
    for(var i = 0;i < btnArr.length;i++){
        btnTarget[i] = btnArr[i].dataset.target;
        btnArr[i].onclick = (function(i){
            return function () {
                var alertModel = document.getElementById(btnTarget[i]);
                if(window.getComputedStyle(alertModel).display === 'none'){
                    alertModel.style.display = 'block';
                    alertModel.style.height = document.body.scrollHeight + 'px';
                }else {
                    alertModel.style.display = 'none';
                }
            }
        })(i);
    }
})();