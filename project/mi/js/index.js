/*
	<li class="head-nav-content-item">
		<div class="img-box">
			<img src="image/p1.jpg" alt="">
		</div>
		<p>小米MIX 3</p>
		<p>3299元起</p>
		<div class="flag flag-new">新品</div>
	</li>
*/


handleCar();
handleNav();
handCarousel();
handListContent();
handleCountdown();

//1.处理购物车
function handleCar(){
	var oCar = document.querySelector('.user-info-car');
	var oCarCon = document.querySelector('.user-info-car a') ;
	var oEmptrCar = document.querySelector('.user-info-car .empty-car');
	var oEmptrCarCon = document.querySelector('.user-info-car .empty-car p')
	var oLoading = document.querySelector('.user-info-car .empty-car .loading');

	oCar.onmouseenter = function(){
		oCar.style.background = '#fff';
		oCarCon.style.color = '#ff6700';
		oLoading.style.display = 'block';
		animate(oEmptrCar,{height:100},true,function(){
			oEmptrCarCon.style.display = 'block';
			oLoading.style.display = 'none';
		});
	}
	oCar.onmouseleave = function(){
		oCar.style.background = '#424242';
		oCarCon.style.color = '#fff';
		animate(oEmptrCar,{height:0},true,function(){
			oLoading.style.display = 'none';
			oEmptrCarCon.style.display = 'none';
		});
		
	}
}
//处理导航
function handleNav(){
	//获取导航列表
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oNavContent = document.querySelector('.header .head-nav-content');
	var oContent = document.querySelector('.head-nav-content .content');
	var hideTimer = 0;
	var loadingTimer = 0;
	//批量监听导航列表事件
	for(var i = 0;i<aNavItem.length-2;i++){
		//鼠标移入事件
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearTimeout(hideTimer);
			oContent.innerHTML = '<div class="loading"></div>';
			oNavContent.style.borderTop = '1px solid #ccc';
			animate(oNavContent,{height:200},true,function(){
				oNavContent.style.overflow = 'visible';
			});
			//模拟加载数据
			var index = this.index
			//去除不必要的加载
			clearTimeout(loadingTimer);
			loadingTimer = setTimeout(function(){
				loadDate(index);
			},1000)

			
		}
		//鼠标移出事件
		aNavItem[i].onmouseleave = function(){
			hideTimer =setTimeout(function(){
			hideNavContent();	
			},500)		
		}
	}
	oNavContent.onmouseenter = function(){
		clearTimeout(hideTimer);
	}
	oNavContent.onmouseleave = function(){
		hideNavContent();
	}
	function hideNavContent(){
		oNavContent.style.overflow = 'hidden';
		animate(oNavContent,{height:0},true,function(){
			oNavContent.style.borderTop = 'none';
		});
	}
	function loadDate(index){
		var date = aNavItemDate[index];
/*
<ul class="head-nav-content-list">
	<li class="head-nav-content-item">
		<div class="img-box">
			<a href="#">
				<img src="image/p1.jpg" alt="">
			</a>
		</div>	
		<p>小米MIX 3</p>
		<p>3299元起</p>
		<div class="flag flag-new">新品</div>
	</li>
</ul>
*/
		var html = '<ul>';
		for(var i = 0;i<date.length;i++){
			html +=	'<li class="head-nav-content-item">';
			html +=		'<div class="img-box">';
			html +=			'<a href="'+date[i].url+'">'
			html +=				'<img src="'+date[i].img+'" alt="">';
			html +=			'</a>'
			html +=		'</div>';
			html +=		'<p>'+date[i].name+'</p>';
			html +=		'<p>'+date[i].price+'</p>';
			if(date[i].flag){
				html +=	'<div class="flag flag-new">新品</div>';
			}			
			html +=	'</li>';
		}

		html += '</ul>'

		oContent.innerHTML = html;
	}
}

//处理首页轮播图
function handCarousel(){
	new Carousel({
		id:'carousel',
		img:['image/b1.jpg',
				'image/b2.jpg',
				'image/b3.jpg'],
		width:1226,
		height:460,

	});
}


//分类面板
function handListContent(){
	var aListItem = document.querySelectorAll('.list-box .list .list-item');
	var oListContent = document.querySelector('.home .home-banner .list-content');
	var oListBox = document.querySelector('.home-banner .list-box');
	for(var i = 0;i<aListItem.length;i++){
		aListItem[i].index = i;
		aListItem[i].onmouseenter = function(){
			oListContent.style.display = 'block';
			for(var j = 0;j<aListItem.length;j++){
				aListItem[j].className = 'list-item';
			}
			this.className = 'list-item active';
			//加载数据
			loadDate(this.index);
		}
	}
	oListBox.onmouseleave = function(){
		oListContent.style.display = 'none';
		for(var j = 0;j<aListItem.length;j++){
			aListItem[j].className = 'list-item';
		}
	}
	function loadDate(index){
		var date = aListItemDate[index];
		var html = '<ul>';
		for(var i = 0;i<date.length;i++){
			html +=	'<li class="list-content-item">';
			html +=		'<a href="'+date[i].url+'">';
			html +=			'<img src="'+date[i].img+'" alt="">';
			html +=			'<span>'+date[i].name+'</span>';
			html +=		'</a>';
			html +=	'</li>';
		}

		html += '</ul>';
		oListContent.innerHTML = html;
	}

}


//倒计时
function handleCountdown(){
	var oTimenum = document.querySelectorAll('.flash-bd .time .time-number');
	var endDate = new Date('2018-12-27 14:23:56');
	var timer = 0;
	function toDouble(num){
		return num > 9 ? ''+num : '0'+num;
	}
	function handleTimer(){
		var endTime = endDate.getTime();
		var allMinseconds = endTime - Date.now();
		if(allMinseconds<0){
			allMinseconds = 0;
			clearInterval(timer);
		}
		var allSeconds = parseInt(allMinseconds /1000);
		var iHour = parseInt(allSeconds / 3600);
		var iMinute = parseInt((allSeconds % 3600) / 60);
		var iSecond = (allSeconds % 3600) % 60;
		oTimenum[0].innerHTML = toDouble(iHour);
		oTimenum[1].innerHTML = toDouble(iMinute);
		oTimenum[2].innerHTML = toDouble(iSecond);
	}
	handleTimer();
	timer = setInterval(handleTimer,500);
	

}