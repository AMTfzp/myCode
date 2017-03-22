/**
 * Created by Administrator on 2017/3/7.
 */
class Person{

}
var message ="消息";
    var name =`nihao buhao ${message}`;
//通过Promise 实现异步加载
var promise = new Promise(function (res,reject) {
    console.log(res,reject);
    res("123");
});
function request(url,callback) {
    var request = new XMLHttpRequest();
    request.open("get",url);
    request.onload =function () {
        if(res){
           // done then 来获得结果
           res(request.response);
        }else {
            reject("error");
        }
    };
    request.send();
}
request("data.json").then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(error);
});