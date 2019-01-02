function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}


var oTop1 = document.querySelector('.top .top1');
var oTop2 = document.querySelector('.top .top2');
var oTop3 = document.querySelector('.top .top3');

window.onscroll = function(){
	if(getScrollTop() >= 100){
		oTop1.style.height = 0;
		oTop2.style.position = 'fixed';
		oTop3.style.position = 'fixed';
	}else{
		oTop1.style.height= 100 + 'px';
		oTop2.style.position = 'relative';
		oTop3.style.position = 'relative';
	}
	if(oTop1.style.height = 0){
		
	}
	
	
}