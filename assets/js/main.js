
function openMenu() {
    var menu = document.getElementById('menu-hamburger');
    var btn_open = document.getElementById('btn-open');
    if(menu.style.width != '100vw'){
        menu.style.width = '100vw';
        btn_open.innerHTML = '&times;';
        btn_open.style.position = 'fixed';
    }
    else{
        menu.style.width = '0';
        btn_open.innerHTML = '☰'
        btn_open.style.position = "absolute";
    }
}

$(function(){
    $('.input-select').keyup(function(){
        if($(this).val() != ''){
            $(this).removeClass('input-required');
        }
        else{
            $(this).addClass('input-required');
        }
    })
})
