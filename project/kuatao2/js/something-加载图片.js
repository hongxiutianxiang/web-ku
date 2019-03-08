// ;(function($){
// 	$('.drapdown-button').hover(function(){
// 		$(this).addClass('menu-active');
// 	},function(){
// 		$(this).removeClass('menu-active');
// 	})
// })(jQuery);
;(function($){


	//加载图片
	function loadImage(imgUrl,success,error){
		var image = new Image();

		image.onload = function(){
			typeof success == 'function' && success(imgUrl);
		}
		image.onerror = function(){
			typeof error == 'function' && error(imgUrl);
		}

		image.src = imgUrl;
	}


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

	var $search = $('.header .serch-wrap');
	$search.search();


	//焦点区域轮播图
	var $focusCarousel = $('.carousel-wrap ');
	$focusCarousel.on('carousel-show',function(ev,index,elem){
		var $img = $(elem).find('.carousel-img');
		var imgUrl = $img.data('src');
		/**/
		var image = new Image();

		image.onload = function(){
			$img.attr('src',imgUrl);
		}
		image.onerror = function(){
			$img.attr('src','images/serch.png');
		}

		image.src = imgUrl;
		
		// loadImage(imgUrl,function(imgUrl){
		// 	$img.attr('src',imgUrl);
		// },function(imgUrl){
		// 	$img.attr('src','images/serch.png');
		// })


	})
	$focusCarousel.carousel({});



})(jQuery);
