/**
 * Created by Administrator on 2017/3/9.
 */
(function () {
//    Promise :构造函数(fun1:resolve,fun2:reject) -> 等待执行
//    resolve: -> function -> 什么时候 加载完成 可以去调用它
//    reject:function -> 被拒绝（失败）的时候 调用
//    catch: -> 调用完 reject 会执行  catch中的 回调函数
//    then: -> 当调用完resolve 之后 then里面的回调函数 会立刻执行
    function request(url,promise) {
        var promise = new Promise(function (resolve,reject) {
            var req = new XMLHttpRequest();
            req.open("GET",url);
            req.onload = function () {
                    req.response?resolve(JSON.parse(req.response)):reject({error:"没有数据"})

            };
            req.send();
        })
        return promise;
    }
    var promise = request("package.json");
    promise.then(function (data) {
        console.log(data);
    });

    promise.catch(function (error) {
        console.log(error);
    });


})()
