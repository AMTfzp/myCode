/**
 * Created by Administrator on 2017/3/7.
 */
//只用 数据模型 创建一个接口PersonInterface
//接口就是一个协议，只要遵守了这个协议就必须按照协议里面的规则去落实
interface PersonInterface{
    name:string,
    age?:number//不写问号 必须实现
}


//让类 实现 接口
//创建一个类 Person 去实现接口PersonInterface
//Person 就必须按照PersonInterface指定的规则去实现
class Person implements PersonInterface{
    //静态属性 内存一直在同一个位置
    static type ="人类";
    eyes:string;
    name:string;
    nose:string;
    speak(message:string){
    console.log(`说话 ${message}`);
    }
  constructor(){

  };
};
//接口不可实例化对象
var xiaoMing =new Person();
xiaoMing.name ="一拳超人茨木童子";
xiaoMing.eyes = "独眼小僧";
xiaoMing.speak("we are filmay");

// var xiaoHong = new Person();
class Student implements PersonInterface{
    name:string;
    constructor(){

    }
}