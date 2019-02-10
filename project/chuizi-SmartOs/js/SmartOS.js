function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}

function handleHideNav(btn,con){
	var hideCarTimer = 0;
	btn.onmouseenter = con.onmouseenter = function(){
		con.style.display = 'block';
		clearTimeout(hideCarTimer);
	}
	btn.onmouseleave = con.onmouseleave = function(){
		hideCarTimer = setTimeout(function hide(){
			con.style.display = 'none';
		},500);
	}
}

hadleScroll();
handCarousel();
handleCar();



function hadleScroll(){
	var oTop1 = document.querySelector('.top .top1');
	var oTop2 = document.querySelector('.top .top2');
	var oTop3 = document.querySelector('.top .top3');
	var oTop2Nav = document.querySelector('.top2 .content .nav');
	var oImg3 = document.querySelectorAll('.main .picture img')[2];
	var oTop2NavSmart = document.querySelector('.top2 .content .nav .nav-item a');
	var oTop2LogoSmart = document.querySelector('.top2 .content .smart-logo');


	window.onscroll = function(){
		if(getScrollTop() >=100){
			animateTop(oTop1,{height:0});
			oTop1.style.overflow = 'hidden';
			animateTop(oTop2,{top:0});
			animateTop(oTop3,{height:40});
		}else{
			animateTop(oTop1,{height:100});
			oTop1.style.overflow = 'visible';
			animateTop(oTop3,{height:0});
			animateTop(oTop2,{top:100});
		}
		if(getScrollTop() >=110){
			oTop2Nav.style.paddingLeft = '162px';		
		}else{
			oTop2Nav.style.paddingLeft = 0;		
		}
		if(getScrollTop() >=2600){
			oTop2.style.backgroundColor = '#fff';
			oTop3.style.backgroundColor = '#fff';
			oTop2.style.boxShadow = '0px 2px 3px rgba(200,200,200,0.9)';
			oTop3.style.boxShadow = '0px 2px 3px rgba(200,200,200,0.9)';
			oTop2NavSmart.style.color = '#4d4d4d';

			oTop2LogoSmart.style.display = 'block';
			animate(oTop2LogoSmart,{left:20})
		}else{
			oTop2.style.backgroundColor = '#212750';
			oTop3.style.backgroundColor = '#212750';
			oTop2.style.boxShadow = '0px 2px 3px rgba(0,0,0,0.3)';
			oTop3.style.boxShadow = '0px 2px 3px rgba(0,0,0,0.3)';
			oTop2NavSmart.style.color = '#fff';

			oTop2LogoSmart.style.display = 'none';
			animate(oTop2LogoSmart,{left:0})
		}
		console.log(getScrollTop());
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
	handleHideNav(oCar,oCarList);
}


function handleHideNav2(btn,con){
	var hideCarTimer = 0;
	btn.onmouseenter = con.onmouseenter = function(){
		con.style.display = 'block';
		clearTimeout(hideCarTimer);
	}
	btn.onmouseleave = con.onmouseleave = function(){
		hideCarTimer = setTimeout(function hide(){
			con.style.display = 'none';
		},500);
	}
}
function handleDot1(){
	var oDot1Shape = document.querySelectorAll('.dot1 .dot-item');
	var oDot1con = document.querySelectorAll('.dot1 .dot-item-con');

	for(var i = 0;i<oDot1Shape.length;i++){
		handleHideNav2(oDot1Shape[0],oDot1con[0]);
		handleHideNav2(oDot1Shape[1],oDot1con[1]);
		handleHideNav2(oDot1Shape[2],oDot1con[2]);
	}
}
handleDot1();

function handleDot2(){
	var oDot2Shape = document.querySelectorAll('.dot2 .dot-item');
	var oDot2con = document.querySelectorAll('.dot2 .dot-item-con');

	for(var i = 0;i<oDot2Shape.length;i++){
		handleHideNav2(oDot2Shape[0],oDot2con[0]);
		handleHideNav2(oDot2Shape[1],oDot2con[1]);
		handleHideNav2(oDot2Shape[2],oDot2con[2]);
		handleHideNav2(oDot2Shape[3],oDot2con[3]);
	}
}
handleDot2();

function handleDot3(){
	var oDot3Shape = document.querySelectorAll('.dot3 .dot-item');
	var oDot3con = document.querySelectorAll('.dot3 .dot-item-con');

	for(var i = 0;i<oDot3Shape.length;i++){
		handleHideNav2(oDot3Shape[0],oDot3con[0]);
		handleHideNav2(oDot3Shape[1],oDot3con[1]);
		handleHideNav2(oDot3Shape[2],oDot3con[2]);
	}
}
handleDot3();

function handleDot4(){
	var oDot4Shape = document.querySelectorAll('.dot4 .dot-item');
	var oDot4con = document.querySelectorAll('.dot4 .dot-item-con');

	for(var i = 0;i<oDot4Shape.length;i++){
		handleHideNav2(oDot4Shape[0],oDot4con[0]);
		handleHideNav2(oDot4Shape[1],oDot4con[1]);
		handleHideNav2(oDot4Shape[2],oDot4con[2]);
	}
}
handleDot4();

function handleDot5(){
	var oDot5Shape = document.querySelectorAll('.dot1 .dot-item');
	var oDot5con = document.querySelectorAll('.dot1 .dot-item-con');

	for(var i = 0;i<oDot5Shape.length;i++){
		handleHideNav2(oDot5Shape[0],oDot5con[0]);
		handleHideNav2(oDot5Shape[1],oDot5con[1]);
		handleHideNav2(oDot5Shape[2],oDot5con[2]);
	}
}
handleDot5();
