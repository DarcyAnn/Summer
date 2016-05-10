/**
 * Created by Administrator on 2016-5-8.
 */
function alertToggle() {
    var alertModel = document.getElementsByClassName("alert-outer")[0];
    if (window.getComputedStyle(alertModel).display === "none") {
        alertModel.style.display = "block";
    }
    else {
        alertModel.style.display = "none";
    }
}