//1.处理购物车
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