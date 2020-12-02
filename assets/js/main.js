$(function(){
    $('.menu-bar').click(function(){
        if($('.slide_menu').attr('style') == 'top: 0px;'){
	        $('body').removeAttr('style');
	        $('.slide_menu').animate({'top':'-110vh'});
	        $('#icon_bar').removeClass('icon-close');
	        $('#icon_bar').addClass('fa-bars');
        }else{
	        $('body').attr('style', 'height:100vh;overflow: hidden');
	        $('.slide_menu').animate({'top':'0px'});
	        $('#icon_bar').removeClass('fa-bars');
	        $('#icon_bar').addClass('icon-close');
        }
    })
	$('input:required').change(function(){
		if($(this).val() != ''){
            $(this).addClass('inputed');
		}else{
            $(this).removeClass('inputed');
		}
	})
})