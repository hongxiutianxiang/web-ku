function animate(obj,options,isLinear,fnEnd){
		if (isLinear == undefined) {
			isLinear = true;
		}
		clearInterval(obj.timer);//防止多次点击
		
		obj.timer = setInterval(function(){
			var isStopAll = true;
			for(var attr in options){		
				var isStopCurrent = false;
				var current = parseFloat(getComputedStyle(obj,false)[attr]);
				if(attr == 'opacity'){
					current = Math.round(current * 100);
				}
				if(isLinear){
					if(current >options[attr]){
						iSpeed = -10;    //10为速度
					}else{
						iSpeed= 10;
					}
					if(Math.abs(options[attr] - current) < Math.abs(iSpeed)){
						if(attr == 'opacity'){
							obj.style.opacity = options[attr]/100;
						}else{
							obj.style[attr] = options[attr] + 'px';
						}
						isStopCurrent = true;
					}else{
						isStopAll = false;
					}
				}else{
					iSpeed = (options[attr] - current)/20;  //20叫步长
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
					if(!iSpeed){
					isStopCurrent = true;
					}else{
						isStopAll = false;
					}
				}
				if(isStopCurrent){ //可以用非写
					
				}else{
					if(attr == 'opacity'){
						obj.style.opacity = (current + iSpeed)/100 ;
					}else{
						obj.style[attr] = current + iSpeed +'px' ;
					}
				}
			}
			if(isStopAll){
				clearInterval(obj.timer);
					// if (typeof fnEnd == 'function') {
					// 	fnEnd();
					// };
				typeof fnEnd == 'function' && fnEnd();
			}
		},30)
	}
function animateTop(obj,options,isLinear,fnEnd){
	if (isLinear == undefined) {
		isLinear = true;
	}
	clearInterval(obj.timer);//防止多次点击
	
	obj.timer = setInterval(function(){
		var isStopAll = true;
		for(var attr in options){		
			var isStopCurrent = false;
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(isLinear){
				if(current >options[attr]){
					iSpeed = -110;    //10为速度
				}else{
					iSpeed= 110;
				}
				if(Math.abs(options[attr] - current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style.opacity = options[attr]/100;
					}else{
						obj.style[attr] = options[attr] + 'px';
					}
					isStopCurrent = true;
				}else{
					isStopAll = false;
				}
			}else{
				iSpeed = (options[attr] - current)/20;  //20叫步长
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
				isStopCurrent = true;
				}else{
					isStopAll = false;
				}
			}
			if(isStopCurrent){ //可以用非写
				
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100 ;
				}else{
					obj.style[attr] = current + iSpeed +'px' ;
				}
			}
		}
		if(isStopAll){
			clearInterval(obj.timer);
				// if (typeof fnEnd == 'function') {
				// 	fnEnd();
				// };
			typeof fnEnd == 'function' && fnEnd();
		}
	},30)
}