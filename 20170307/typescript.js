//让类 实现 接口
//创建一个类 Person 去实现接口PersonInterface
//Person 就必须按照PersonInterface指定的规则去实现
var Person = (function () {
    function Person() {
    }
    Person.prototype.speak = function (message) {
        console.log("\u8BF4\u8BDD " + message);
    };
    ;
    //静态属性 内存一直在同一个位置
    Person.type = "人类";
    return Person;
}());
;
//接口不可实例化对象
var xiaoMing = new Person();
xiaoMing.name = "一拳超人茨木童子";
xiaoMing.eyes = "独眼小僧";
xiaoMing.speak("we are filmay");
// var xiaoHong = new Person();
var Student = (function () {
    function Student() {
    }
    return Student;
}());
//# sourceMappingURL=typescript.js.map