
function menu_change() {
    var temp = document.getElementById('menu-hamburger');
    if(temp.style.bottom == "0px"){
        temp.style.bottom = "100vh";
        temp.style.right = "100vw";
    }
    else{
        temp.style.bottom = "0px";
        temp.style.right = "0px";
    }
}