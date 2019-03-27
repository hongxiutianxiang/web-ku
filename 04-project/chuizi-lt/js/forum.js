handleForumList();
handleSerchSelect();
handCarousel();
firstPlus();
secondPlus();
brandChose();
typeChose();

function handleForumList(){
	var oPlate = document.getElementById('plate');
	var oForumList = document.getElementById('forumList')

	oPlate.onmouseenter = function(){
		oForumList.style.display = 'block';
	}
	oForumList.onmouseleave = function(){
		oForumList.style.display = 'none';
	}
}


function handleSerchSelect(){
	var oSelectBtn = document.querySelector('.select-btn');
	var oSerchUser = document.querySelector('.serch-user');
	var oSerchSelectCon = document.querySelector('.serch-select a');
	var hideTimer = 0;

	oSelectBtn.onclick = function(){
		oSerchUser.style.display = 'block';
	}
	oSelectBtn.onmouseover = function(){
		clearTimeout(hideTimer);
		if(oSerchUser.style.display == 'block'){			
			oSerchUser.style.display = 'block';
		}
	}
	 oSelectBtn.onmouseleave = function(){
		hideTimer = setTimeout(hide,500);
	 }
	 oSerchUser.onmouseenter = function(){
		clearTimeout(hideTimer);
		oSerchUser.style.display = 'block';
	}
	oSerchUser.onmouseleave = function(){
		hideTimer = setTimeout(hide,500);
	}
	oSelectBtn.onmouseenter = function(){
		clearTimeout(hideTimer);		
		if(oSerchUser.style.display == 'block'){		
			oSerchUser.style.display = 'block';
		}
	}
	oSerchUser.onclick = function(){
		oSerchSelectCon.innerHTML = '用户';
	}
	
	function hide(){
		oSerchUser.style.display = 'none';
	}
}


function handCarousel(){
	new Carousel({
		id:'carousel',
		img:['images/a.jpg',
			'images/b.jpg',
			],
		width:1120,
		height:460,
		playDuration:4000,
	});
}

function firstPlus(){
	var oFifstSomething = document.querySelectorAll('.something')[0];
	var oFifstPlus = document.querySelectorAll('.plus')[0];
	var oFifstSomethingContent = document.querySelector('.firstsomethingcontent');
	var oFirstConsult = document.querySelectorAll('.consult')[0];

	oFifstSomething.onclick = function(){
		if(oFifstPlus.style.display == 'block'){
			oFifstPlus.style.display = 'none';
			oFifstSomethingContent.style.display = 'block';
			oFirstConsult.style.borderBottomLeftRadius = '';
			oFirstConsult.style.borderBottomRightRadius = '';
		}else{
			oFifstPlus.style.display = 'block';
			oFifstSomethingContent.style.display = 'none';
			oFirstConsult.style.borderBottomLeftRadius = '7px';
			oFirstConsult.style.borderBottomRightRadius = '7px';
		}	
	}
 }


function secondPlus(){
	var oSecondSomething = document.querySelectorAll('.something')[1];
	var oSecondPlus = document.querySelectorAll('.plus')[1];
	var oSecondSomethingContent = document.querySelector('.secondsomethingcontent');
	var oSecondConsult = document.querySelectorAll('.consult')[1];

	oSecondSomething.onclick = function(){
		if(oSecondPlus.style.display == 'block'){
			oSecondPlus.style.display = 'none';
			oSecondSomethingContent.style.display = 'block';
			oSecondConsult.style.borderBottomLeftRadius = '';
			oSecondConsult.style.borderBottomRightRadius = '';
		}else{
			oSecondPlus.style.display = 'block';
			oSecondSomethingContent.style.display = 'none';
			oSecondConsult.style.borderBottomLeftRadius = '7px';
			oSecondConsult.style.borderBottomRightRadius = '7px';
		}	
	}
}


function brandChose(){
	var oBrand = document.querySelector('.brand');
	var oBrandChoseBtn = document.querySelector('.brand .brand-chose');
	var oBrandContent = document.querySelectorAll('.brand .brand-content');
	var oTtiangle = document.querySelector('.col2 .slect .triangle');
	var oBrandItem = document.querySelectorAll('.col2 .brand .brand-item');
	var oFont1 = document.querySelectorAll('.brand .brand-chose span')[1];
	var oFont0 = document.querySelectorAll('.brand .brand-chose span')[0];
	var oMask0 = document.querySelectorAll('.main .content .col2 .mask')[0];
	var oMask1 = document.querySelectorAll('.main .content .col2 .mask')[1];
	var oMask2 = document.querySelectorAll('.main .content .col2 .mask')[2];

	oBrandChoseBtn.onclick = function(){
		oBrand.style.borderBottomLeftRadius = '0';
		oBrand.style.borderBottomRightRadius = '0';

		function back(){
			oBrandContent[0].style.display = 'none';
			oTtiangle.className = 'triangle triangle-down';	
			oBrand.style.borderBottomLeftRadius = '7px';
			oBrand.style.borderBottomRightRadius = '7px';
			oMask0.style.display = 'none';
		}

		if(oBrandContent[0].style.display == 'block'){
			back();
		}else{
			oBrandContent[0].style.display = 'block';
			oTtiangle.className = 'triangle triangle-up';
		}
		
		for(var i = 0;i<oBrandItem.length;i++){
			oBrandItem[i].index = i;
			oBrandItem[i].onmouseover = function(){
				for(var j = 0;j<oBrandItem.length;j++){
					oBrandItem[j].style.backgroundColor = '';
				}
				this.style.backgroundColor = '#f5f5f5';	
			}
			oBrandItem[0].onclick = function(){
				oFont0.innerHTML = '手机品牌： 小米';
				back();
			}
			oBrandItem[1].onclick = function(){
				oFont0.innerHTML = '手机品牌： 一加';
				back();
			}
			oBrandItem[2].onclick = function(){
				oFont0.innerHTML = '手机品牌： Nexus';
				back();
			}
			oBrandItem[3].onclick = function(){
				oFont0.innerHTML = '手机品牌： 三星';
				back();
			}			
		}
		 if(oFont1.innerHTML == '请选择机型'){
		 	
		 }else{
		 	oFont1.innerHTML = '请选择机型';
		 }

		oMask1.style.height = '100%';
		oMask2.style.height = '100%';

		
		// if(oBrandContent[1].style.display == 'block'||
		// 	oBrandContent[2].style.display == 'block'||
		// 	oBrandContent[3].style.display == 'block'||
		// 	oBrandContent[4].style.display == 'block'){
		// 	oBrandContent[1].style.display = 'none';
		// 	oBrandContent[2].style.display = 'none';
		// 	oBrandContent[3].style.display = 'none';
		// 	oBrandContent[4].style.display = 'none';

		// 	if(oFont0.innerHTML == '手机品牌： 小米'){
		// 		oBrandContent[1].style.display = 'block';
		// 		oTtiangle.className = 'triangle triangle-down';
		// 	}
		// }
	}	
}


function typeChose(){
	var oBrand = document.querySelectorAll('.brand')[1];
	var oBrandChoseBtn = document.querySelectorAll('.brand .brand-chose')[1];
	var oBrandContent = document.querySelectorAll('.brand .brand-content');
	var oTtiangle = document.querySelectorAll('.col2 .slect .triangle')[1];
	var oBrandItem = document.querySelectorAll('.col2 .brand-type .brand-item');
	var oFont1 = document.querySelectorAll('.brand .brand-chose span')[1];
	var oFont0 = document.querySelectorAll('.brand .brand-chose span')[0];
	var oMask1 = document.querySelectorAll('.main .content .col2 .mask')[1];
	var oMask2 = document.querySelectorAll('.main .content .col2 .mask')[2];
	
	oBrandChoseBtn.onclick = function(){
		oBrand.style.borderBottomLeftRadius = '0';
		oBrand.style.borderBottomRightRadius = '0';
		function back(){
			for(var k = 0;k<oBrandContent.length;k++){
				oBrandContent[k].style.display = 'none';
			}
			oTtiangle.className = 'triangle triangle-down';	
			oBrand.style.borderBottomLeftRadius = '7px';
			oBrand.style.borderBottomRightRadius = '7px';
			
		}		
		for(var i = 0;i<oBrandItem.length;i++){
			oBrandItem[i].index = i;
			oBrandItem[i].onmouseover = function(){
				for(var j = 0;j<oBrandItem.length;j++){
					oBrandItem[j].style.backgroundColor = '';
				}
				this.style.backgroundColor = '#f5f5f5';	
			}
			oBrandItem[i].onclick = function(){
				oFont1.innerHTML = this.innerHTML;				
				back();
				oMask1.style.height = 0;
				oMask2.style.height = 0;
			}
			if(oBrandContent[1].style.display == 'block'){
				back();
			}else if(oFont0.innerHTML == '手机品牌： 小米'){
				oBrandContent[1].style.display = 'block';
				oTtiangle.className = 'triangle triangle-up';			
			}
			if(oBrandContent[2].style.display == 'block'){
				back();
			}else if(oFont0.innerHTML == '手机品牌： 一加'){
				oBrandContent[2].style.display = 'block';
				oTtiangle.className = 'triangle triangle-up';			
			}
			if(oBrandContent[3].style.display == 'block'){
				back();
			}else if(oFont0.innerHTML == '手机品牌： Nexus'){
				oBrandContent[3].style.display = 'block';
				oTtiangle.className = 'triangle triangle-up';
				
			}
			if(oBrandContent[4].style.display == 'block'){
				back();
			}else if(oFont0.innerHTML == '手机品牌： 三星'){
				oBrandContent[4].style.display = 'block';
				oTtiangle.className = 'triangle triangle-up';
				
			}
		}
	}
}


