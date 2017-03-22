document.documentElement.style.fontSize = document.documentElement.clientWidth/25 + 'px'; 
//正则判断地址栏的信息
function GetQueryString(name) {
	var reg =new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}
//获取菜单商品列表
$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getclass.php",
	dataType:"json",
	success:function(data){
		$.each(data, function(i){
			var className = data[i].className;
			var $a =$("<a href='goods.html?classID="+encodeURI(data[i].classID)+"&className="+encodeURI(data[i].className)+"'>"+className+"</a>")
			var $li = $("<li></li>");
			$li.append($a);
			$("#menu-ul").append($li);
		});
		
	}
})
//菜单栏点击效果
$("#logo").on("click",function() {
	$("#menu").animate({
		"left":"0"
	})
})
$(".button-ShutDown").on("click",function() {
	$("#menu").animate({
		"left":"-88%"
	})
})
//弹出框
function tanchukuang(Text) {
	var htmls="<div id='tanchukuang'><p id='tantext'>"+Text+"</p></div>";
	$(document.body).append(htmls); 
	$("#tanchukuang").show().delay(2000).fadeOut(300,function() {
		$("#tanchukuang").remove();
	});
}
//登陆弹出框
function landingk(Text) {
	var htmls="<div id='tanchukuang'><p id='tantext'>"+Text+"</p></div>";
	$(document.body).append(htmls); 
	$("#tanchukuang").show();
}
//更新购物车 参数{userID goodsID number callback}
	function upDataCar(opt) {
		$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
			userID:opt.userID,
			goodsID:opt.goodsID,
			number:opt.number
		},function(data) {
			var thisdata = data;
			console.log(thisdata)
			ajax_getCar({userID:opt.userID,callback:function(data) {
				window.localStorage["car"] = JSON.stringify(data);
				opt.callback(thisdata);
			}})
		})
	}
//获取购物车   参数 userID callback
function ajax_getCar(opt) {
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getCar.php",
		data:{userID:opt.userID},
		dataType:"jsonp",
		success:function(data) {
			console.log(data)
			opt.callback(data);
		}
	});
}
//从本地获取购物车
function Storage_getCare() {
	return window.localStorage["car"]? JSON.parse(window.localStorage["car"]):0
}