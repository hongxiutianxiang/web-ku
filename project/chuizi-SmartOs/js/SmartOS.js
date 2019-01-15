function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}

hadleScroll();
handCarousel();
handleCar();


function hadleScroll(){
	var oTop1 = document.querySelector('.top .top1');
	var oTop2 = document.querySelector('.top .top2');
	var oTop3 = document.querySelector('.top .top3');

	window.onscroll = function(){
		if(getScrollTop() >=100){
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


function handCarousel(){
	new Carousel({
		id:'carousel1',
		img:['images/shurufa1.jpg',
			'images/shurufa2.jpg',
			'images/shurufa3.jpg',
			],
		width:282,
		height:568,
		playDuration:3000,
	});

	new Carousel({
		id:'carousel2',
		img:['images/gengduoshengji1-1.jpg',
			'images/gengduoshengji1-2.jpg',
			'images/gengduoshengji1-3.jpg',
			],
		width:282,
		height:568,
		playDuration:3000,
	});

	new Carousel({
		id:'carousel3',
		img:['images/gengduoshengji3-1.png',
			'images/gengduoshengji3-2.jpg',
			],
		width:282,
		height:568,
		playDuration:3000,
	});
}


function handleCar(){
	var oCar = document.querySelector('.top1 .content .top1-shop .car')
	var oCarList = document.querySelector('.shop-list');
	
	oCar.onmouseenter = function(){
		oCarList.style.display = 'block';
	}
}