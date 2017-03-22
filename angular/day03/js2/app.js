/**
 * Created by Administrator on 2017/3/21.
 */
(function () {
    /*
    ngRoute是通过 路径来 指定路由的位置
    *一 ：可以通过href指定路由的位置
    * 二：把每一个路由中的内容显示出来
    * */

    //1注入路由模块
    var app= angular.module("app",["ngRoute","app.service"]);


    app.controller("homeController",function($scope,dataManager) {
        function events() {
            $scope.toPost = function (newsInfo) {
                console.log(newsInfo);
                //创建一条 News类型的对象
                var newsObj = new News(newsInfo.image,newsInfo.title,newsInfo.des);
                //把创建好的新闻对象 存放到数组中
                this.newList.push(newsObj);

                dataManager.save("newList",this.newList)
            }
        }
        //初始化函数
        function init() {
            // $rootScope.message = "消息";
            //初始化新闻对象 用于接受发布的内容
            $scope.news = {};

            //初始化新闻列表的数组 用于展示新闻数据(从localStrage中读取出来的数据)
            $scope.newList =dataManager.read("newList")||[];

            // $rootScope.newsArr = $scope.newList;
            events();
        }

        init();
    });
    app.controller("findController",function ($scope,dataManager) {
        //初始化 新闻列表的数组
        $scope.List =dataManager.read("newList")||[];
        // $scope.List=$rootScope.newsArr;
        //更新数据的事件

        $scope.update = function () {
            // console.log($rootScope.message);
            $scope.List =dataManager.read("newList")||[];
        }
    })
    //2配置入口的应用程序 配置路由
    app.config(function ($routeProvider,$locationProvider) {

        //angular1.46->1.63版本的时候 跳转路径的时候 hash值出现错误
        //通过 hashPrefix去把多余的部分清空掉
        $locationProvider.hashPrefix("");
        //3.配置路由的信息，每一个when是一个条件
        $routeProvider.when("/home",{
            // template:"<div>home</div>"
            templateUrl:"homeView.html",
            controller:"homeController"
        });
        $routeProvider.when("/find",{
            // template:"<div>find</div>"
            templateUrl:"findView.html",
            controller:"findController"
        });

        //4.配置 当所有条件都不符合的时候 重新指向的位置
        $routeProvider.otherwise("/home");
    })


})()