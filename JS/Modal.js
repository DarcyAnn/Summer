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