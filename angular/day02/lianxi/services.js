/**
 * Created by Administrator on 2017/3/20.
 */
(function () {

    var app = angular.module("app.services",[]);

    app.service("savelocaton",function () {
        // 保存
        this.save =function (key,value) {
            localStorage.setItem(key,value?JSON.stringify(value):null);
        }
        //读取
        this.read = function (key) {

           var result = localStorage.getItem(key);

            return result?JSON.parse(result):null;
        };
    });
})();