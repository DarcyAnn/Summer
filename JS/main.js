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
                carouselMain.style.left = moveDistance + "px";
                ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                clearTimeout(timer);
            }, false);
            ctrlItems[i].addEventListener('mouseout', function () {
                clearTimeout(timer);
                //为什么这里穿进去的参数似乎没有起作用呢？ TT
                timer = setTimeout('autoCarousel(++i)', 2500);
            },false);
        })(i);
    }

}

addLoadEvent(changeCarousel);

//自动轮播
var i = 1;
var moveDistance = 0;
function autoCarousel() {
    if (arguments[0] || arguments[0] === 0){
        i = arguments[0];
    }
    for (var j = 0; j < ctrlItems.length; j++) {
        carousels[j].style.zIndex = 0;
        ctrlItems[j].children[0].style.backgroundColor = '#fff';
    }
    if (i == 0 || i >= 3){
        i = 0;
        moveDistance = 0;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    else {
        moveDistance =  -900 * i;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    timer = setTimeout('autoCarousel(i)', 2500);
}

var timer = setTimeout('autoCarousel()', 2500);
var dropdownBtn = document.getElementsByClassName("dropdown-btn")[0];
var dropdown = document.getElementsByClassName("basic-dropdown")[0];
var list = dropdown.children[1];

function showList(event) {
    list.style.display = "inline-block";
    event.target.style.backgroundColor = "#f2f2f2";
}

function hideList() {
    list.style.display = "none";
    event.target.style.backgroundColor = "#fff";
}

dropdownBtn.addEventListener('mouseover',showList,false);
dropdownBtn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);

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
                carouselMain.style.left = moveDistance + "px";
                ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                clearTimeout(timer);
            }, false);
            ctrlItems[i].addEventListener('mouseout', function () {
                clearTimeout(timer);
                //为什么这里穿进去的参数似乎没有起作用呢？ TT
                timer = setTimeout('autoCarousel(++i)', 2500);
            },false);
        })(i);
    }

}

addLoadEvent(changeCarousel);

//自动轮播
var i = 1;
var moveDistance = 0;
function autoCarousel() {
    if (arguments[0] || arguments[0] === 0){
        i = arguments[0];
    }
    for (var j = 0; j < ctrlItems.length; j++) {
        carousels[j].style.zIndex = 0;
        ctrlItems[j].children[0].style.backgroundColor = '#fff';
    }
    if (i == 0 || i >= 3){
        i = 0;
        moveDistance = 0;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    else {
        moveDistance =  -900 * i;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    timer = setTimeout('autoCarousel(i)', 2500);
}

var timer = setTimeout('autoCarousel()', 2500);
var dropdownBtn = document.getElementsByClassName("dropdown-btn")[0];
var dropdown = document.getElementsByClassName("basic-dropdown")[0];
var list = dropdown.children[1];

function showList(event) {
    list.style.display = "inline-block";
    event.target.style.backgroundColor = "#f2f2f2";
}

function hideList() {
    list.style.display = "none";
    event.target.style.backgroundColor = "#fff";
}

dropdownBtn.addEventListener('mouseover',showList,false);
dropdownBtn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);

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
                carouselMain.style.left = moveDistance + "px";
                ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                clearTimeout(timer);
            }, false);
            ctrlItems[i].addEventListener('mouseout', function () {
                clearTimeout(timer);
                //为什么这里穿进去的参数似乎没有起作用呢？ TT
                timer = setTimeout('autoCarousel(++i)', 2500);
            },false);
        })(i);
    }

}

addLoadEvent(changeCarousel);

//自动轮播
var i = 1;
var moveDistance = 0;
function autoCarousel() {
    if (arguments[0] || arguments[0] === 0){
        i = arguments[0];
    }
    for (var j = 0; j < ctrlItems.length; j++) {
        carousels[j].style.zIndex = 0;
        ctrlItems[j].children[0].style.backgroundColor = '#fff';
    }
    if (i == 0 || i >= 3){
        i = 0;
        moveDistance = 0;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    else {
        moveDistance =  -900 * i;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    timer = setTimeout('autoCarousel(i)', 2500);
}

var timer = setTimeout('autoCarousel()', 2500);
var dropdownBtn = document.getElementsByClassName("dropdown-btn")[0];
var dropdown = document.getElementsByClassName("basic-dropdown")[0];
var list = dropdown.children[1];

function showList(event) {
    list.style.display = "inline-block";
    event.target.style.backgroundColor = "#f2f2f2";
}

function hideList() {
    list.style.display = "none";
    event.target.style.backgroundColor = "#fff";
}

dropdownBtn.addEventListener('mouseover',showList,false);
dropdownBtn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);

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
                carouselMain.style.left = moveDistance + "px";
                ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                clearTimeout(timer);
            }, false);
            ctrlItems[i].addEventListener('mouseout', function () {
                clearTimeout(timer);
                //为什么这里穿进去的参数似乎没有起作用呢？ TT
                timer = setTimeout('autoCarousel(++i)', 2500);
            },false);
        })(i);
    }

}

addLoadEvent(changeCarousel);

//自动轮播
var i = 1;
var moveDistance = 0;
function autoCarousel() {
    if (arguments[0] || arguments[0] === 0){
        i = arguments[0];
    }
    for (var j = 0; j < ctrlItems.length; j++) {
        carousels[j].style.zIndex = 0;
        ctrlItems[j].children[0].style.backgroundColor = '#fff';
    }
    if (i == 0 || i >= 3){
        i = 0;
        moveDistance = 0;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    else {
        moveDistance =  -900 * i;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    timer = setTimeout('autoCarousel(i)', 2500);
}

var timer = setTimeout('autoCarousel()', 2500);
var dropdownBtn = document.getElementsByClassName("dropdown-btn")[0];
var dropdown = document.getElementsByClassName("basic-dropdown")[0];
var list = dropdown.children[1];

function showList(event) {
    list.style.display = "inline-block";
    event.target.style.backgroundColor = "#f2f2f2";
}

function hideList() {
    list.style.display = "none";
    event.target.style.backgroundColor = "#fff";
}

dropdownBtn.addEventListener('mouseover',showList,false);
dropdownBtn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);

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
                carouselMain.style.left = moveDistance + "px";
                ctrlItems[i].children[0].style.backgroundColor = '#ccc';
                clearTimeout(timer);
            }, false);
            ctrlItems[i].addEventListener('mouseout', function () {
                clearTimeout(timer);
                //为什么这里穿进去的参数似乎没有起作用呢？ TT
                timer = setTimeout('autoCarousel(++i)', 2500);
            },false);
        })(i);
    }

}

addLoadEvent(changeCarousel);

//自动轮播
var i = 1;
var moveDistance = 0;
function autoCarousel() {
    if (arguments[0] || arguments[0] === 0){
        i = arguments[0];
    }
    for (var j = 0; j < ctrlItems.length; j++) {
        carousels[j].style.zIndex = 0;
        ctrlItems[j].children[0].style.backgroundColor = '#fff';
    }
    if (i == 0 || i >= 3){
        i = 0;
        moveDistance = 0;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    else {
        moveDistance =  -900 * i;
        carouselMain.style.left = moveDistance + "px";
        ctrlItems[i].children[0].style.backgroundColor = '#ccc';
        i++;
    }
    timer = setTimeout('autoCarousel(i)', 2500);
}

var timer = setTimeout('autoCarousel()', 2500);
var dropdownBtn = document.getElementsByClassName("dropdown-btn")[0];
var dropdown = document.getElementsByClassName("basic-dropdown")[0];
var list = dropdown.children[1];

function showList(event) {
    list.style.display = "inline-block";
    event.target.style.backgroundColor = "#f2f2f2";
}

function hideList() {
    list.style.display = "none";
    event.target.style.backgroundColor = "#fff";
}

dropdownBtn.addEventListener('mouseover',showList,false);
dropdownBtn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);

/**
 * Created by Administrator on 2016-5-8.
 */
var alertModel = document.getElementsByClassName("alert-outer")[0];
var confirmModal = document.getElementsByClassName("confirm-outer")[0];
var promptModal = document.getElementsByClassName("prompt-outer")[0];
var alertBtn1 = document.getElementsByClassName("alert-btn")[0];
var alertBtn2 = document.getElementsByClassName("alert-btn")[1];
var showConfirmBtn = document.getElementsByClassName("show-confirm-btn")[0];
var closeConfirmBtn1 = document.getElementsByClassName("close-confirm-btn")[0];
var closeConfirmBtn2 = document.getElementsByClassName("close-confirm-btn")[1];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];
var showPromptBtn = document.getElementsByClassName("show-prompt-btn")[0];
var closePromptBtn1 = document.getElementsByClassName("close-prompt-btn")[0];
var closePromptBtn2 = document.getElementsByClassName("close-prompt-btn")[1];
var promptBtn = document.getElementsByClassName("prompt-btn")[0];

function alertToggle() {
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight + 'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal() {
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight + 'px';
}

function closeConfirmModal() {
    confirmModal.style.display = "none";
}

function confirmInfo() {
    confirmModal.style.display = "none";
}

function showPromptModal() {
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight + 'px';
}

function closePromptModal() {
    promptModal.style.display = "none";
}

function promptInfo() {
    promptModal.style.display = "none";
}

alertBtn1.addEventListener('click', alertToggle, false);
alertBtn2.addEventListener('click', alertToggle, false);
showConfirmBtn.addEventListener('click', showConfirmModal, false);
closeConfirmBtn1.addEventListener('click', closeConfirmModal, false);
closeConfirmBtn2.addEventListener('click', closeConfirmModal, false);
confirmBtn.addEventListener('click', confirmInfo, false);
showPromptBtn.addEventListener('click', showPromptModal, false);
closePromptBtn1.addEventListener('click', closePromptModal, false);
closePromptBtn2.addEventListener('click', closePromptModal, false);
promptBtn.addEventListener('click', promptInfo, false);
/**
 * Created by Administrator on 2016-5-8.
 */
var alertModel = document.getElementsByClassName("alert-outer")[0];
var confirmModal = document.getElementsByClassName("confirm-outer")[0];
var promptModal = document.getElementsByClassName("prompt-outer")[0];
var alertBtn1 = document.getElementsByClassName("alert-btn")[0];
var alertBtn2 = document.getElementsByClassName("alert-btn")[1];
var showConfirmBtn = document.getElementsByClassName("show-confirm-btn")[0];
var closeConfirmBtn1 = document.getElementsByClassName("close-confirm-btn")[0];
var closeConfirmBtn2 = document.getElementsByClassName("close-confirm-btn")[1];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];
var showPromptBtn = document.getElementsByClassName("show-prompt-btn")[0];
var closePromptBtn1 = document.getElementsByClassName("close-prompt-btn")[0];
var closePromptBtn2 = document.getElementsByClassName("close-prompt-btn")[1];
var promptBtn = document.getElementsByClassName("prompt-btn")[0];

function alertToggle() {
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight + 'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal() {
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight + 'px';
}

function closeConfirmModal() {
    confirmModal.style.display = "none";
}

function confirmInfo() {
    confirmModal.style.display = "none";
}

function showPromptModal() {
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight + 'px';
}

function closePromptModal() {
    promptModal.style.display = "none";
}

function promptInfo() {
    promptModal.style.display = "none";
}

alertBtn1.addEventListener('click', alertToggle, false);
alertBtn2.addEventListener('click', alertToggle, false);
showConfirmBtn.addEventListener('click', showConfirmModal, false);
closeConfirmBtn1.addEventListener('click', closeConfirmModal, false);
closeConfirmBtn2.addEventListener('click', closeConfirmModal, false);
confirmBtn.addEventListener('click', confirmInfo, false);
showPromptBtn.addEventListener('click', showPromptModal, false);
closePromptBtn1.addEventListener('click', closePromptModal, false);
closePromptBtn2.addEventListener('click', closePromptModal, false);
promptBtn.addEventListener('click', promptInfo, false);
/**
 * Created by Administrator on 2016-5-8.
 */
var alertModel = document.getElementsByClassName("alert-outer")[0];
var confirmModal = document.getElementsByClassName("confirm-outer")[0];
var promptModal = document.getElementsByClassName("prompt-outer")[0];
var alertBtn1 = document.getElementsByClassName("alert-btn")[0];
var alertBtn2 = document.getElementsByClassName("alert-btn")[1];
var showConfirmBtn = document.getElementsByClassName("show-confirm-btn")[0];
var closeConfirmBtn1 = document.getElementsByClassName("close-confirm-btn")[0];
var closeConfirmBtn2 = document.getElementsByClassName("close-confirm-btn")[1];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];
var showPromptBtn = document.getElementsByClassName("show-prompt-btn")[0];
var closePromptBtn1 = document.getElementsByClassName("close-prompt-btn")[0];
var closePromptBtn2 = document.getElementsByClassName("close-prompt-btn")[1];
var promptBtn = document.getElementsByClassName("prompt-btn")[0];

function alertToggle() {
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight + 'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal() {
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight + 'px';
}

function closeConfirmModal() {
    confirmModal.style.display = "none";
}

function confirmInfo() {
    confirmModal.style.display = "none";
}

function showPromptModal() {
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight + 'px';
}

function closePromptModal() {
    promptModal.style.display = "none";
}

function promptInfo() {
    promptModal.style.display = "none";
}

alertBtn1.addEventListener('click', alertToggle, false);
alertBtn2.addEventListener('click', alertToggle, false);
showConfirmBtn.addEventListener('click', showConfirmModal, false);
closeConfirmBtn1.addEventListener('click', closeConfirmModal, false);
closeConfirmBtn2.addEventListener('click', closeConfirmModal, false);
confirmBtn.addEventListener('click', confirmInfo, false);
showPromptBtn.addEventListener('click', showPromptModal, false);
closePromptBtn1.addEventListener('click', closePromptModal, false);
closePromptBtn2.addEventListener('click', closePromptModal, false);
promptBtn.addEventListener('click', promptInfo, false);
/**
 * Created by Administrator on 2016-5-8.
 */
var alertModel = document.getElementsByClassName("alert-outer")[0];
var confirmModal = document.getElementsByClassName("confirm-outer")[0];
var promptModal = document.getElementsByClassName("prompt-outer")[0];
var alertBtn1 = document.getElementsByClassName("alert-btn")[0];
var alertBtn2 = document.getElementsByClassName("alert-btn")[1];
var showConfirmBtn = document.getElementsByClassName("show-confirm-btn")[0];
var closeConfirmBtn1 = document.getElementsByClassName("close-confirm-btn")[0];
var closeConfirmBtn2 = document.getElementsByClassName("close-confirm-btn")[1];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];
var showPromptBtn = document.getElementsByClassName("show-prompt-btn")[0];
var closePromptBtn1 = document.getElementsByClassName("close-prompt-btn")[0];
var closePromptBtn2 = document.getElementsByClassName("close-prompt-btn")[1];
var promptBtn = document.getElementsByClassName("prompt-btn")[0];

function alertToggle() {
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight + 'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal() {
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight + 'px';
}

function closeConfirmModal() {
    confirmModal.style.display = "none";
}

function confirmInfo() {
    confirmModal.style.display = "none";
}

function showPromptModal() {
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight + 'px';
}

function closePromptModal() {
    promptModal.style.display = "none";
}

function promptInfo() {
    promptModal.style.display = "none";
}

alertBtn1.addEventListener('click', alertToggle, false);
alertBtn2.addEventListener('click', alertToggle, false);
showConfirmBtn.addEventListener('click', showConfirmModal, false);
closeConfirmBtn1.addEventListener('click', closeConfirmModal, false);
closeConfirmBtn2.addEventListener('click', closeConfirmModal, false);
confirmBtn.addEventListener('click', confirmInfo, false);
showPromptBtn.addEventListener('click', showPromptModal, false);
closePromptBtn1.addEventListener('click', closePromptModal, false);
closePromptBtn2.addEventListener('click', closePromptModal, false);
promptBtn.addEventListener('click', promptInfo, false);
/**
 * Created by Administrator on 2016-5-8.
 */
var alertModel = document.getElementsByClassName("alert-outer")[0];
var confirmModal = document.getElementsByClassName("confirm-outer")[0];
var promptModal = document.getElementsByClassName("prompt-outer")[0];
var alertBtn1 = document.getElementsByClassName("alert-btn")[0];
var alertBtn2 = document.getElementsByClassName("alert-btn")[1];
var showConfirmBtn = document.getElementsByClassName("show-confirm-btn")[0];
var closeConfirmBtn1 = document.getElementsByClassName("close-confirm-btn")[0];
var closeConfirmBtn2 = document.getElementsByClassName("close-confirm-btn")[1];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];
var showPromptBtn = document.getElementsByClassName("show-prompt-btn")[0];
var closePromptBtn1 = document.getElementsByClassName("close-prompt-btn")[0];
var closePromptBtn2 = document.getElementsByClassName("close-prompt-btn")[1];
var promptBtn = document.getElementsByClassName("prompt-btn")[0];

function alertToggle() {
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
        alertModel.style.height = document.body.scrollHeight + 'px';
    }
    else {
        alertModel.style.display = "none";
    }
}

function showConfirmModal() {
    confirmModal.style.display = "block";
    confirmModal.style.height = document.body.scrollHeight + 'px';
}

function closeConfirmModal() {
    confirmModal.style.display = "none";
}

function confirmInfo() {
    confirmModal.style.display = "none";
}

function showPromptModal() {
    promptModal.style.display = "block";
    promptModal.style.height = document.body.scrollHeight + 'px';
}

function closePromptModal() {
    promptModal.style.display = "none";
}

function promptInfo() {
    promptModal.style.display = "none";
}

alertBtn1.addEventListener('click', alertToggle, false);
alertBtn2.addEventListener('click', alertToggle, false);
showConfirmBtn.addEventListener('click', showConfirmModal, false);
closeConfirmBtn1.addEventListener('click', closeConfirmModal, false);
closeConfirmBtn2.addEventListener('click', closeConfirmModal, false);
confirmBtn.addEventListener('click', confirmInfo, false);
showPromptBtn.addEventListener('click', showPromptModal, false);
closePromptBtn1.addEventListener('click', closePromptModal, false);
closePromptBtn2.addEventListener('click', closePromptModal, false);
promptBtn.addEventListener('click', promptInfo, false);