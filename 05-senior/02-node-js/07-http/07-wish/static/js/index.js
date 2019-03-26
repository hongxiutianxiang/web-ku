/*
* @Author: Tom
* @Date:   2018-07-25 14:33:24
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-24 11:48:27
*/

(function($){

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	
	var $wish = $('.wish');
	var $wall = $('.wall');
	//获取父容器和自身的高度
	var wishWidth = $wish.width(),
		wishHight = $wish.height(),
		wallWidth = $wall.width(),
		wallheight = $wall.height();

	//1.设置卡片拖到
	$wish.pep({  constrainTo: '.wall' });
	//2.随机显示许愿卡片
	$wish.each(function(){
		let x = getRandom(0,wallWidth - wishWidth);
		let y = getRandom(0,wallheight - wishHight);
		$(this).css({
			transform: 'matrix(1,0,0,1,'+ x +',' + y + ')'
		})
	})
	



})(jQuery);	
