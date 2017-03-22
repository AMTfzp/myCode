var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var age;
age = 22;
var score = 33;
var name;
name = "小红";
//static 声明 静态 变量或 静态 方法
// static var HOST:string = "www.baidu.com";
//定义数组的类型
// var list = ["12","123"];
var listss = [22, 33, 44, 55];
var lists = [1, 2, 3, 4, 5];
// function Person(){}
var Person = (function () {
    function Person() {
    }
    return Person;
}());
;
//元组
var list = ["字符串", true, 2000];
//枚举
var LoginType;
(function (LoginType) {
    LoginType[LoginType["QQ"] = 0] = "QQ";
    LoginType[LoginType["WECHAT"] = 3] = "WECHAT";
    LoginType[LoginType["WEIBO"] = 4] = "WEIBO";
})(LoginType || (LoginType = {}));
var loginType;
console.log(LoginType.QQ);
console.log(LoginType.WECHAT);
var Persons = (function () {
    function Persons(_name) {
        this.name = _name;
        var ages = 20;
    }
    Persons.type = "人类";
    return Persons;
}());
var xiaoMing = new Persons("小明");
//引用Persons
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(_name) {
        //如果使用了 继承
        //子类 再次重写父类的构造方法
        //需要使用suoer 去调用 父类的构造函数
        _super.call(this, name);
        // this.score= 30;
    }
    return Hero;
}(Persons));
var huLuWa = new Hero("葫芦娃");
console.log(huLuWa.name);
//# sourceMappingURL=type.js.map