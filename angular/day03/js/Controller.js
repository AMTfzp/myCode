/**
 * Created by Administrator on 2017/3/21.
 */
(function () {
    //创建控制器的模块
    var controllers = angular.module("app.controllers",[]);
    /*
    *创建好控制器  1参数 控制器的名字  2 回调函数
    * */
    //发布新闻的控制器
    controllers.controller("postNewsController",function ($scope,dataManager,$rootScope) {
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
            $rootScope.message = "消息";
            //初始化新闻对象 用于接受发布的内容
            $scope.news = {};

            //初始化新闻列表的数组 用于展示新闻数据(从localStrage中读取出来的数据)
            $scope.newList =dataManager.read("newList")||[];

            $rootScope.newsArr = $scope.newList;
            events();
        }

        init();
    });
    //读取
    controllers.controller("readNewsController",function ($scope,dataManager,$rootScope,$interval,$http) {
        //初始化 新闻列表的数组
        // $scope.List =dataManager.read("newList")||[];
        $scope.List=$rootScope.newsArr;
        //更新数据的事件

        $scope.num=1;
        $interval(function () {
            $scope.num++;
        },1);
        // setInterval(function () {
        //     $scope.num++;
        //     console.log($scope.num)
        // },1000);

        $scope.update = function () {
            console.log($rootScope.message);
            $scope.List =dataManager.read("newList")||[];
        }
    });


})()