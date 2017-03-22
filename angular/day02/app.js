/**
 * Created by Administrator on 2017/3/20.
 */
(function () {
    /*
    * 第一个参数：模块的名字
    * []用于注入模块的数组->字符串 (模块的名字)
    * ng-app="app"这个的名字 需要与应用程序入口模块是我名字相同
    * */
    // angular.module("app",[]).controller("",function () {
    //
    // });
    //应用程序的入口模块
    //ng-app 指定了入口模块
    //在入口模块里面 不需要写 大量的代码
    //一般 在这个里面写配置 入口模块相关的代码
    angular.module("app",["app.controllers","app.services"]);


})()