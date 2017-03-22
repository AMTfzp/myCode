var age:number;
age=22;

let score:number=33
var name:string
name="小红";
//static 声明 静态 变量或 静态 方法
// static var HOST:string = "www.baidu.com";

//定义数组的类型
// var list = ["12","123"];
var listss:Array<number> =[22,33,44,55];
var lists:number[]=[1,2,3,4,5]

// function Person(){}
class Person{};

//元组
var list:[string,boolean,number]=["字符串",true,2000];

//枚举
enum LoginType {
    QQ,
    WECHAT = 3,
    WEIBO
}
var loginType:LoginType;
console.log(LoginType.QQ);
console.log(LoginType.WECHAT);

//
interface  person{
    name:string,
    age:number,
    score:number
}
class Persons{
    name:string;
    static type:string = "人类";
    constructor(_name:string){
        this.name=_name;
        const ages:number =20;
    }
}
var xiaoMing = new Persons("小明");
//引用Persons
class Hero extends  Persons{
    constructor(_name:string){
        //如果使用了 继承
        //子类 再次重写父类的构造方法
        //需要使用suoer 去调用 父类的构造函数
        super(name);
        // this.score= 30;
    }
}
var huLuWa = new Hero("葫芦娃");
console.log(huLuWa.name)
