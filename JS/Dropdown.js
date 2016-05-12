function showList() {
    var dropdown = document.getElementsByClassName("basic-dropdown")[0];
    var list = dropdown.children[1];
    list.style.display = "inline-block";
}

function hideList() {
    var dropdown = document.getElementsByClassName("basic-dropdown")[0];
    var list = dropdown.children[1];
    list.style.display = "none";
}
//to be continued
//function showBG(event) {
//    event.style.backgroundColor = "#000";
//}