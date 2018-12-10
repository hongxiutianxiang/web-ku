function animate(obj,attr,target){
	clearInterval(obj.timer);//防止多次点击
	var iSpeed = 0;
	obj.timer = setInterval(function(){
		var current = parseFloat(getComputedStyle(obj,false)[attr]);//获值转数值
		if(attr == 'opacity'){
			current = Math.round(current *100);
		};
		if(current >target){
			iSpeed = -80;
		}else{
			iSpeed= 80;
		};
		if( Math.abs(target - current) < Math.abs(iSpeed)){
			if(attr == 'opacity'){
				obj.style.opacity = target/100;
			}else{
				obj.style[attr] = target + 'px';
			}
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style.opacity = (current + iSpeed)/100;
			}else{
				obj.style[attr] = current + iSpeed + 'px';
			}
		}
	},30)
}




function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrolltOP || document.body.scrollTop;
}