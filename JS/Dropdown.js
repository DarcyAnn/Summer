var btn = document.getElementsByClassName("btn")[0];
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

btn.addEventListener('mouseover',showList,false);
btn.addEventListener('mouseout',hideList,false);
list.addEventListener('mouseover',showList,false);
list.addEventListener('mouseout',hideList,false);
