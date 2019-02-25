(function(window){
	var kQuery = function(something){
		return new kQuery.prototype.init(something);
	}
	kQuery.prototype = {
		constructor:kQuery,
		init:function(something){
			//1.布尔值false
			//2.函数
			//3.字符串
			//4.数组
			//5.对象
		}
	} 
	kQuery.prototype.init.prototype = kQuery.prototype;
	window.kQuery = window.$ = kQuery;
})(window);