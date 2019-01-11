handleForumList();
handleSerchSelect();
handCarousel();
firstPlus();
secondPlus();

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
	var hideTimer = 0;

	oSelectBtn.onclick = function(){
		oSerchUser.style.display = 'block';
	}
	oSelectBtn.onmouseenter = function(){
		if(oSerchUser.style.display == 'block'){
			clearTimeout(hideTimer);
			oSerchUser.style.display = 'block';
		}
	}
	 oSelectBtn.onmouseleave = function(){
		hideTimer = setTimeout(hide,500);
	 }

	oSerchUser.onmouseleave = function(){
		hideTimer = setTimeout(hide,500);
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



