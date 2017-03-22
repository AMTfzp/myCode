function gwcar(data,i) {
	var $shopborder = $("<div class='shop-border'></div>")
	var $chkbox =$("<input type='checkbox' />")//复选框
	var $img = $("<img src="+data[i].goodsListImg+">")//图片
	var $goodsNmae =$("<p>"+data[i].goodsName+"</p>")//商品名字
	var $price = $("<span>￥"+data[i].price+"</span>")//商品价格
	var $input = $("<p class='p-price'><span class='p-dele'>-</span><span class='p-numer'>"+data[i].number+"</span><span class='p-add'>+</span></p>")
	var $toPrice = $("<span class='toPrice'></span>")
	$shopborder.append($chkbox);
	$shopborder.append($img);
	$shopborder.append($goodsNmae);
	$shopborder.append($input);
	$shopborder.append($price);
	$shopborder.append($toPrice);
	$(".shop").append($shopborder)
}
//单行价格
function getSubtotal(data) {
	$.each(data,function(i) {
		$(".toPrice").html("总价"+parseInt(data[i].price*data[i].number).toFixed(2));
		console.log(parseInt(data[i].price*data[i].number).toFixed(2))
	})
}