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