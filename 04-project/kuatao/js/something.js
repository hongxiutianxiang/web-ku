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
		//模拟网络延时
		setTimeout(function(){
			image.src = imgUrl;
		},500)
		
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
	var item = {};
	var totalItemNum = $focusCarousel.find('.carousel-img').length;
	var totalLoadItemNum = 0;
	var loadFn = null;
	$focusCarousel.on('carousel-show',loadFn = function(ev,index,elem){
		console.log('carousel-show......')
		if(item[index] != 'loaded'){
			console.log('lllll',index)
			var $img = $(elem).find('.carousel-img');
			var imgUrl = $img.data('src');
			
			loadImage(imgUrl,function(imgUrl){
				$img.attr('src',imgUrl);
			},function(imgUrl){
				$img.attr('src','images/serch.png');
			});
			item[index] = 'loaded'
			//图片加载一遍后 关闭.on('carousel-show')事件
			totalLoadItemNum++;
			if(totalItemNum == totalLoadItemNum){
				$focusCarousel.off('carousel-show',loadFn)
			}
		}
	})
	
	
	/*    //有问题
	var $focusCarousel = $('.carousel-wrap ');
	$focusCarousel.item = {};
	$focusCarousel.totalItemNum = $focusCarousel.find('.carousel-img').length;
	$focusCarousel.totalLoadItemNum = 0;
	$focusCarousel.loadFn = null;
	//1.开始加载
	$focusCarousel.on('carousel-show',$focusCarousel.loadFn = function(ev,index,elem){
		console.log('carousel-show......')
		if($focusCarousel.item[index] != 'loaded'){
			$focusCarousel.trigger('carousel-load',[index,elem])
		}
	});
	//2.执行加载
	$focusCarousel.on('carousel-load',function(ev,index,elem){
		console.log('lllll',index)
		var $img = $(elem).find('.carousel-img');
		var imgUrl = $img.data('src');
		
		loadImage(imgUrl,function(imgUrl){
			$img.attr('src',imgUrl);
		},function(imgUrl){
			$img.attr('src','images/serch.png');
		});
		$focusCarousel.item[index] = 'loaded'
		//图片加载一遍后 关闭.on('carousel-show')事件
		$focusCarousel.totalLoadItemNum++;
		if($focusCarousel.totalItemNum == $focusCarousel.totalLoadItemNum){
			focusCarousel.trigger('carousel-load');
		}
	})
	//3.加载结束
	$focusCarousel.on('carousel-load',function(){
		$focusCarousel.off('carousel-show',$focusCarousel.loadFn)
	});
	*/


	$focusCarousel.carousel({});

	//限时抢购选项卡

	

	

})(jQuery);
