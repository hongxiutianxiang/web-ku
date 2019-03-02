// ;(function($){
// 	$('.drapdown-button').hover(function(){
// 		$(this).addClass('menu-active');
// 	},function(){
// 		$(this).removeClass('menu-active');
// 	})
// })(jQuery);
;(function($){
	$('.drapdown-button').dropdown({jser:true,mode:'slideDownUp'});
	$('.drapdown-button').on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',
		function(ev){
		 	console.log("::::",ev.type);
		})
})(jQuery);
