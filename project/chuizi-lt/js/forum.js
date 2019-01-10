handleForumList();
handCarousel();



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




