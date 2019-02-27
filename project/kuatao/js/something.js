// ;(function($){
// 	$('.drapdown-button').hover(function(){
// 		$(this).addClass('menu-active');
// 	},function(){
// 		$(this).removeClass('menu-active');
// 	})
// })(jQuery);
;(function($){
	$('.drapdown-button')
	.hover(function(){
		var $this = $(this);
		var activeClass = $this.data('active') + '-active';
		$this.addClass(activeClass);
	},function(){
		var $this = $(this);
		var activeClass = $this.data('active') + '-active';
		$this.removeClass(activeClass);
	})
})(jQuery);