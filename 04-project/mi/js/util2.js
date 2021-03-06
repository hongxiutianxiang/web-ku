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

function Carousel(option){
	//1.罗列属性
	this.oBox1 = document.getElementById(option.id);
	this.aImg = option.img;

	this.width = option.width;
	this.height = option.height;

	this.oLeftArrow = null;
	this.oRightArrow = null;

	this.now = 0;//当前显示的图片下标

	//2.初始化DOM节点
	this.init();
	//3.绑定事件
	this.bindEvent();
		

}
Carousel.prototype.init = function(){
//处理外层父容器
	this.oBox1.style.position = 'absolute';
	this.oBox1.style.top = 0;
	this.oBox1.style.left = 0;
	this.oBox1.style.width = this.width + 'px';
	this.oBox1.style.height = this.height + 'px';
//1.生成图片的容器
	this.oUlImg = document.createElement('ul')
	//添加图片的容器到外层父容器中
	this.oBox1.appendChild(this.oUlImg);
//3.生成底部按钮ul
	this.oUlBtn = document.createElement('ul');
	this.oBox1.appendChild(this.oUlBtn);
	this.oUlBtn.className ='bottomBtn';
	this.oUlBtn.style.zIndex = 99;
	this.oUlBtn.style.marginLeft = - this.oUlBtn.offsetWidth * 0.5 + 'px';
	console.log(this.oUlBtn.offsetWidth);//有问题

	for(var i = 0;i<this.aImg.length;i++){
		//生成图片的li标签
		var oLi = document.createElement('li');
		this.oUlImg.appendChild(oLi);
		//生成底部指示按钮的li标签
		this.oBtn = document.createElement('li');
		this.oUlBtn.appendChild(this.oBtn);
		//图片的li的样式
		oLi.style.position = 'absolute';
		oLi.style.top = 0;
		oLi.style.left = 0;
		if(i == 0){
			oLi.style.zIndex = 50;
			oLi.style.opacity = 1;
			// oBtn.className = 'active';
		}else{
			oLi.style.zIndex = 0;
			oLi.style.opacity = 0.5;
		}
		//生成img标签
		var oImg = document.createElement('img');
		oImg.src = this.aImg[i];
		oLi.appendChild(oImg);
		oImg.style.width = this.width + 'px';
		oImg.style.height = this.height + 'px';
		
	}
//2.生成左右箭头
	this.oLeftArrow = document.createElement('span');
	this.oRightArrow = document.createElement('span');
	//添加左右箭头到外层父容器
	this.oBox1.appendChild(this.oLeftArrow);
	this.oBox1.appendChild(this.oRightArrow);
	//给左右箭头设置样式 暴露接口
	this.oLeftArrow.className = 'leftArrow';
	this.oRightArrow.className = 'rightArrow';
	this.oLeftArrow.style.zIndex = 99;
	this.oRightArrow.style.zIndex = 99;
	this.oLeftArrow.innerHTML = '&lt';
	this.oRightArrow.innerHTML = '&gt';


}

Carousel.prototype.bindEvent = function(){
	var _this = this;
	//绑定右按钮
	this.oRightArrow.onclick = function(){
		//显示下一张
		_this.now++;
		if(_this.now >= _this.aImg.length){
			_this.now = 0;
		}
		_this.tab();
	}
	//绑定左按钮
	this.oLeftArrow.onclick = function(){
		//显示上一张
		_this.now--;
		if(_this.now < 0){
			_this.now = _this.aImg.length - 1;
		}
		_this.tab();
	}
	//绑定底部按钮
	for(var i = 0;i<this.oUlBtn.children.length;i++){
		this.oUlBtn.children[i].index = i;
		this.oUlBtn.children[i].onclick = function(){
			_this.now = this.index;
			_this.tab();
		}
	}
}

Carousel.prototype.tab = function(){  //切换
	//1.清除所有
		for(var i = 0;i<this.aImg.length;i++){
			this.oUlImg.children[i].style.zIndex = 0;
			this.oUlImg.children[i].style.opacity = 0.5;
			this.oUlImg.children[i].className = '';
		}
		//显示新的
		this.oUlImg.children[this.now].style.zIndex = 50;
		this.oUlImg.children[this.now].style.opacity = 1;
		this.oUlImg.children[this.now].className = 'active';
		
		
}
