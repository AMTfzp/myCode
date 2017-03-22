
//用ajax获取轮播图图片信息
$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getBanner.php",
	dataType:"jsonp",
	success:function(data) {
		$.each(data,function(i) {
			var urls = data[i].goodsBenUrl;
			var urlsArray = JSON.parse(urls);
			var imgNode = $("<img/>");
			imgNode.attr('src',urlsArray[0]);
			imgNode.css({"width":"100%","height":"100%"});
			var slide = $("<div></div>");
			slide.addClass("swiper-slide");
			slide.append(imgNode);
			$(".swiper-wrapper").append(slide);
			
		});
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        loop:true,
		        autoplay:2000
		      
	    	});
	}
})
//首页商品列表
$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:"jsonp",
	data:{linenumber:"10"},
	success:function(data){
		$.each(data,function(i) {
			var className = data[i].className;
			var Text =$("<p class='goods-text'></p>");
			var goods = $("<div class='goods'></div>");
			var divs = $("<div class='goods-img'></div>")
			Text.html(className);
			if (i%2==0) {
				Text.addClass("floatl");
				divs.addClass("floatr");
			} else{
				Text.addClass("floatr");
				divs.addClass("floatl");
			}
			goods.append(Text);
			goods.append(divs);
			$(".Classification").append(goods);
			var imgs=data[i].imgsUrl;
			var imgsArray = JSON.parse(imgs);
			var imges= $("<img/>");
			imges.attr("src",imgsArray[0]);
			imges.css({"width":"100%","height":"100%"});
			$(".goods-img").eq(i).append(imges);
		});
	}
});

