document.documentElement.style.fontSize = document.documentElement.clientWidth/25 + 'px'; 

$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:"jsonp",
	data:{classID:GetQueryString("classID")},
	success:function(data) {
		console.log(data)
		$.each(data, function(i) {
			//判断折扣为零不显示
			if (data[i].discount>0) {
				var discount =$("<span class='discount'>"+data[i].discount+"折</span>");//折扣
			} 
			var goodsID = data[i].goodsID;
			var goodsListImg = $("<img src="+data[i].goodsListImg+" />");//图片
			var price = $("<span class='price'>￥"+data[i].price+"</span>");//价格
			var $p = $("<p>"+data[i].goodsName+"</p>");//商品名
			var divs = $('<div class="list-goods"></div>');//外边的div
			divs.on("click",function() {
				window.location.href="details.html?goodsID="+encodeURI(data[i].goodsID)+"&goodsName="+encodeURI(data[i].goodsName)
			})
			divs.append(goodsListImg);
			divs.append($p);
			divs.append(price);
			divs.append(discount);
			$("nav").append(divs);
		})
	}
})