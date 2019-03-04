// ;(function($){
// 	$('.drapdown-button').hover(function(){
// 		$(this).addClass('menu-active');
// 	},function(){
// 		$(this).removeClass('menu-active');
// 	})
// })(jQuery);
;(function($){
	var $menuDropdown = $('.drapdown-button');
	$menuDropdown.dropdown({
			jser:true,
			mode:'slideDownUp',
			delay:100,
		});
	$menuDropdown.on('dropdown-show',function(ev){
		var $elem = $(this);
		var loadUrl = $elem.data('load');
		if(!loadUrl) return; 
		$.getJSON(loadUrl,function(data){
			console.log(data)
		})
	})
})(jQuery);
