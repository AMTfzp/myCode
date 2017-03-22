/**
 * Created by Administrator on 2017/3/20.
 */
(function () {
    //创建控制器的模块
    var app= angular.module("app.controllers",[]);
    //创建控制器
    app.controller("homeController",function ($scope,savelocaton) {
        //初始化对象
        $scope.book={};
        //初始化 账目的数组
        $scope.books=savelocaton.read("book")||[];

        //保存对象
        $scope.toSave = function(info) {
            console.log(info);
            //现在保存的都是同一个 book对象
            //只要更改book中的值就会同步更改 (因为指向的同一个内存地址)
            var bookitem= new Book(info.title,info.price);
            this.books.push(bookitem);
            savelocaton.save("book",this.books);
        }
    })
})()