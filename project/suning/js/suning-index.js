

handleNav();
handleSerch();
handCarousel();




function handleHideNav(btn,con){
	var hideTime = 0;
	btn.onmouseenter = con.onmouseenter = function(){
		con.style.display = 'block';
		btn.style.backgroundColor = '#fff';
		btn.style.borderLeft = '1px solid #ccc';
		btn.style.borderRight = '1px solid #ccc';
		clearTimeout(hideTime);
	}
	btn.onmouseleave = con.onmouseleave = function(){
		hideTime = setTimeout(function hide(){
			con.style.display = 'none';
			btn.style.backgroundColor = '#f5f5f5';
			btn.style.borderLeft = 'none';
			btn.style.borderRight = 'none';
		},500);
	}	
}
function handleNav(){
	var oNav = document.querySelectorAll('.top .list-one .list-one-item');
	var oCon1 = document.querySelector('.list-one-item .page-nav-wrap');
	var oCon2 = document.querySelector('.list-one-item .merchant-wrap');
	var oCon3 = document.querySelector('.list-one-item .client-wrap');
	for(var i = 0; i<5;i++){
		handleHideNav(oNav[0],oCon1);
		handleHideNav(oNav[1],oCon2);
		handleHideNav(oNav[2],oCon3);
	}
}

function handleSerch(){
	var oSerch = document.querySelector('.input-box input');
	var oRemain = document.querySelector('.input-box .remain');
	var oSerchHide = document.querySelector('.serch-wrap .serch-hide');
	var oClose = document.querySelector('.serch-wrap .serch-hide .close');

	oSerch.onclick = function(){
		oSerchHide.style.display = 'block';
	}
	oClose.onclick = function(){
		oSerchHide.style.display = 'none';
	}
}


function handCarousel(){
	new Carousel({
		id:'carousel',
		img:['images/carousel1.jpg',
			'images/carousel2.jpg',
			'images/carousel3.jpg',
			'images/carousel4.jpg',
			'images/carousel5.jpg',
			'images/carousel6.jpg',
			'images/carousel7.jpg',
			],
		width:830,
		height:482,
		playDuration:4000,
	});
}