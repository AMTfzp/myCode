/**
 * Created by Administrator on 2017/3/21.
 */
(function () {

    var services= angular.module("app.service",[]);
    //1.服务的名字,用的时候直接给控制器传服务的名字 然后就可以调用了
    //2.回调函数
    services.service("dataManager",function () {

    //保存数据
        this.save = function (key,value) {
            localStorage.setItem(key,value?JSON.stringify(value):null);
        };
    // 读取数据
        this.read = function (key) {
            var resulSting = localStorage.getItem(key);
            return resulSting?JSON.parse(resulSting):null;
        }
    })

})()