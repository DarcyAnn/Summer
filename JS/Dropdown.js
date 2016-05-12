var btn = document.getElementsByClassName("btn")[0];
var dropdown = document.getElementsByClassName("basic-dropdown")[0];
var list = dropdown.children[1];


function showList() {
    list.style.display = "inline-block";
}

function hideList() {
    list.style.display = "none";
}
//to be continued
//function showBG(event) {
//    event.style.backgroundColor = "#000";
//}

btn.onmouseover = showList;
btn.onmouseout = hideList;
list.onmouseover = showList;
list.onmouseout = hideList;
