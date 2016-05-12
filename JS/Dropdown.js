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
btn.addEventListener('mouseover',showList,false);
btn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);
