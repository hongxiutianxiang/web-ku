function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}

hadleScroll();

function hadleScroll(){
	var oTop1 = document.querySelector('.top .top1');
	var oTop2 = document.querySelector('.top .top2');
	var oTop3 = document.querySelector('.top .top3');

	window.onscroll = function(){
		if(getScrollTop() >= 100){
			oTop1.style.height = 0;
			oTop2.style.top = 0;
			oTop3.style.height = 40 + 'px';
			oTop3.style.top = 40 + 'px';
			// oTop2.style.position = 'fixed';

		}else{
			oTop1.style.height= 100 + 'px';
			// oTop1.style.borderBottom = '1px solid #2f3351';
			oTop3.style.height = 0;
			oTop3.style.borderBottom = 'none';
			oTop2.style.top = 100 + 'px';
		}
	}
}