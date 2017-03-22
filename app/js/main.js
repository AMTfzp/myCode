//正则判断
var flag;
var flap;
$("#UserID").focusout(function() {
	var UID=/\w{4,18}/;
	if ($("#UserID").val()==" ") {
		$(this).next().html("请输入账号");
		flag =false;
	} else if(UID.test($(this).val())){
		$(this).next().html(" ");
		flag = true;
	}else{
		$(this).next().html("密码长度4-18、字母、数字、下划线")
		flag =false;
	}
})
$("#password").focusout(function() {
	var UID=/\w{6,18}/;
	if ($("#landing").val()==" ") {
		$(this).next().html("请输入账号");
		flap =false;
	} else if(UID.test($(this).val())){
		$(this).next().html(" ");
		flap = true;
	}else{
		$(this).next().html("密码长度6-16、字母、数字、下划线")
		flap =false;
	}
})


//用户注册功能
$("#register").on("click",function() {
	if (flag==true &&flap==true) {
		landingk("正在注册中。。。");
			var user =getUser();
		$.post("http://datainfo.duapp.com/shopdata/userinfo.php",{
			status:"register",
			userID:user.userID,
			password:user.password,
		},function(data) {
			$("#tanchukuang").remove();
			if (data==0) {
				tanchukuang("该用户名已注册");
			} else if(data==1){
				tanchukuang("注册成功");
				setTimeout(function () {
					 window.location.href="denglu.html";
				},3000)
			}else{
				tanchukuang("注册失败");
			}
		})
	}else{
		tanchukuang("请正确填写用户名和密码");
	}
})

//用户登陆功能
$("#landing").on("click",function() {
	if (flag==true&&flap==true) {
		landingk("正在登陆中。。。");
		var user =getUser();
		$.post("http://datainfo.duapp.com/shopdata/userinfo.php",{
			status:"login",
			userID:user.userID,
			password:user.password,
		},function(data) {
			var person = JSON.parse(data);
			console.log(person);
			$("#tanchukuang").remove();
			if (data==0) {
				tanchukuang("用户名不存在");
			} else if(data==2){
				tanchukuang("用户名密码不符");
			}else{
				tanchukuang("登陆成功");
				localStorage.name =person.userID;
				localStorage.password =person.password;
//				setTimeout(function () {
//					 window.location.href="denglu.html";
//				},3000)
			}
		})
	}else{
		tanchukuang("用户名或密码错误");
	}
})
//获取注册登录信息
function getUser() {
	var user = {
		userID :$("#UserID").val(),
		password:$("#password").val()
	}
	return user;
}