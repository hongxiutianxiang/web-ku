

handleNav();
handleSerch();
handCarousel();
handleCate();



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

function handleCate(){
	var oCateItem = document.querySelectorAll('.all-product .product-box .product-item');
	var oHideContent = document.querySelector('.home .hide-content');
	var oProductBox = document.querySelector('.home .product-box');
	var oHideBox = document.querySelector('.home .product-box .hide-box');

	for(var i = 0;i<oCateItem.length;i++){
		oCateItem[i].index = i;
		oCateItem[i].onmouseenter = function(){
			oHideContent.style.display = 'block';
			//加载数据
			loadData(this.index);
		}
	}

	oProductBox.onmouseleave = function(){
			oHideContent.style.display = 'none';
		}
	function loadData(index){
		var data = aCateItemDate[index];
		var html = '<div>';
		for(var i = 0;i<data.length;i++){
			html +=		'<div class="kind-box clearfix">'
			html +=		'	<ul>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem1+'</a></li>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem2+'</a></li>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem3+'</a></li>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem4+'</a></li>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem5+'</a></li>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem6+'</a></li>'
			html +=		'		<li class="kind-item"><a href="'+data[i].url+'">'+data[i].kindItem7+'</a></li>'		
			html +=		'	</ul>'
			html +=		'</div>'
			html +=		'<div class="list-box">'
			html +=		'	<ul>'
			html +=		'		<li class="list-item">'
			html +=		'			<div class="list-item-title">时尚女包</div>'
			html +=		'			<div class="list-item-content">'
			html +=		'				<a href="#">【情人节 每500减60】</a>'
			html +=		'				<a href="#">'+data[i].listItemContent1+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent2+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent3+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent4+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent5+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent6+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent7+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent8+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent9+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent10+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent11+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent12+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent13+'</a>'
			html +=		'				<a href="#">'+data[i].listItemContent14+'</a>'
			html +=		'			</div>'
			html +=		'		</li>'
			html +=		'</div>'
		}
		html += '</div>';
		oHideBox.innerHTML = html;
	}

}