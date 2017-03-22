$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:"jsonp",
	data:{goodsID:GetQueryString("goodsID")},
	success:function(data){
		console.log(data)
		 
		//轮播图函数调用
		goodsbanner(data);
		//调用加载详情数据
		loadingPage(data);
		
	}
})
function goodsbanner(data) {
	//轮播图加载
		var goodsBenUrl=JSON.parse(data[0].goodsBenUrl);//商品轮播图
		//遍历创建轮播图的div，然后放到html中
		$.each(goodsBenUrl,function(i) {
			var img = $("<img/>");
			img.attr("src",goodsBenUrl[i]);
			img.css({"width":"100%","height":"100%"});
			var slide = $("<div></div>");
			slide.addClass("swiper-slide");
			slide.append(img);
			$(".swiper-wrapper").append(slide);
		})
		//轮播图框架js
		 var swiper = new Swiper('.swiper-container', {
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        pagination: '.swiper-pagination',
		        paginationType: 'fraction',
		        loop:true
		 });
}
function loadingPage(data) {
		//判断折扣为零不显示
		if (data[0].discount>0) {
			var discount =$("<span class='discount'>"+data[0].discount+"折</span>");//折扣
			var original =$("<span class='original'>￥原价"+parseFloat(data[0].price/data[0].discount*10).toFixed(2)+"</span>")
		}
		var buynumber = $("<span class='buynumber'>本月已售出"+data[0].buynumber+"件</span>");//购买人数
		var goodsName = $("<b>"+data[0].goodsName+"</b>");//商品名称
		var price = $("<span class='price'>￥"+data[0].price+"</span>");//价格
		var $detail =$("<p class='detailText'>"+data[0].detail+"</p>");//商品详情参数
		$(".details").append(goodsName);
		$(".details").append(price);
		$(".details").append(original);
		$(".details").append(discount);
		$(".details").append(buynumber);
		$(".details").append($detail);
}
//点击事件加入购物车
var $btn = $(".shopCart");
$btn.on("click",function() {
	upDataCar({
		userID:"fangzhi00",
		goodsID:GetQueryString("goodsID"),
		number:1,
		callback:function(data){
			if (data) {
				var $carnumber = $("<span id='carnumber'></span>")
				$carnumber.text(Storage_getCare().length)
				$(".gouwuche").append($carnumber)
			}
		}
	})
})
