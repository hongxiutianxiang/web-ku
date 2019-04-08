;(function($){
	var $login = $('#login');
	var	$register = $('#register');

	//1.登陆和注册面板的切换
	//1.1 从登陆面板到注册面板
	$('#go-register').on('click',function(){
		 $login.hide();
		 $register.show();
	})
	//1.2 从注册面板到登陆面板
	$('#go-login').on('click',function(){
		 $register.hide();
		 $login.show();
	})


	var usernameReg = /^[a-z][1-9a-z_]{2,9}$/i;
	var passwordReg = /^\w{3,6}$/;

	//2用户注册
	$('#sub-register').on('click',function(){
		//2.1获取表单数据
		var username = $register.find('[name="username"]').val();
		var password = $register.find('[name="password"]').val();
		var repassword = $register.find('[name="repassword"]').val();

		//2.1验证
		var errMsg = '';
		var $err = $register.find('.err');

		//用户名以字母开头，包含数字下划线3-10位字符
		
		if(!usernameReg.test(username)){
			errMsg = '用户名以字母开头，包含数字下划线3-10位字符'
		}
		//密码3-6位字符
		else if(!passwordReg.test(password)){
			errMsg = '密码3-6位字符'
		}
		//两次密码一致
		else if(password != repassword){
			errMsg = '两次密码输入不一致'
		}

		if(errMsg){//验证不通过
			$err.html(errMsg);
			return;
		}else{//验证通过
			$err.html('');
			//2.3发送ajax提交数据
			$.ajax({
				url:"/user/register",
				type:'post',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(result){
				if(result.status == 0){//成功
					$('#go-login').trigger('click')
				}else{//失败
					$err.html(result.message);
				}
			})
			.fail(function(err){
				$err.html('请求失败，请稍后再试');
			})
		}
		
	})
	//3.用户登陆
	$('#sub-login').on('click',function(){
		//3.1获取表单数据
		var username = $login.find('[name="username"]').val();
		var password = $login.find('[name="password"]').val();

		//3.1验证
		var errMsg = '';
		var $err = $login.find('.err');

		//用户名以字母开头，包含数字下划线3-10位字符
		
		if(!usernameReg.test(username)){
			errMsg = '用户名以字母开头，包含数字下划线3-10位字符'
		}
		//密码3-6位字符
		else if(!passwordReg.test(password)){
			errMsg = '密码3-6位字符'
		}
		if(errMsg){//验证不通过
			$err.html(errMsg);
			return;
		}else{//验证通过
			$err.html('');
			//3.3发送ajax提交数据
			$.ajax({
				url:"/user/login",
				type:'post',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(result){
				if(result.status == 0){//成功
					console.log('ok...')
					// console.log(result)
					/*
					$login.hide();
					$('#user-info span').html(result.data.username);
					$('#user-info').show();
					*/
					window.location.reload()
				}else{//失败
					$err.html(result.message);
				}
			})
			.fail(function(err){
				$err.html('请求失败，请稍后再试');
			})
		}
		
	})

/*
提取出来了 js/logout.js
	//4.用户退出
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout'
		})
		.done(function(result){
			if(result.status == 0){//成功
				window.location.reload()
			}else{//失败
				$err.html(result.message);
			}
		})
		.fail(function(err){
			$err.html('请求失败，请稍后再试')
		})
	})
*/	

})(jQuery);