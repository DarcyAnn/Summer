/**
 * Created by Administrator on 2016-5-8.
 */
function alertToggle(){
    var alertModel = document.getElementsByClassName("alert-outer")[0];
    alertModel.style.visibility = (alertModel.style.visibility=="visible")?"hidden":"visible";
    //为什么下面这种写法会需要多点一次按钮？
    //alertModel.style.visibility = (alertModel.style.visibility=="hidden")?"visible":"hidden";
}