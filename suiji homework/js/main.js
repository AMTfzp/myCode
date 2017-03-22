/**
 * Created by Administrator on 2017/3/15.
 */
(function () {
    //创建App类 用于创建Vue
    function App(_mark) {
        this.mark = _mark;
        this.init();
    }
    //初始化函数
        App.prototype.init = function () {
            var config = {
                el:this.mark,
                data:{
                    //初始化 用于用户模型 用于接受login组件中的数据
                    user:{},
                    personmodel:{},
                    result:{},
                    //读取保存在浏览器中的原始数据
                    persons:DataManager.readData("persons")||[],
                    //读取保存在浏览器中的 正在使用的数据
                    curPersons:DataManager.readData("curPersons")||[]

                },
                methods:{
                    //用于登陆的函数
                    login:function (userInfo) {
                        //把用户名当key值
                        this.user = userInfo;
                      DataManager.insertData(userInfo.username,userInfo)
                    },
                    start:function () {
                        //如果抽选完毕 重置当前使用的数组的值
                        this.curPersons = this.curPersons.length==0?DataManager.readData("persons"):this.curPersons;

                         var maxNum = this.curPersons.length;
                        //在抽选的数组范围内 随机一个数字
                        var randNum = parseInt((Math.random()*10000)%maxNum);
                        //把随机出来的 结果赋值给result
                        this.result = this.curPersons[randNum];
                        this.curPersons.splice(randNum,1);
                        DataManager.insertData("curPersons",this.curPersons);
                    },
                    addPerson:function (info) {
                        //1：老师
                        //2：学生

                        //1.添加到原始数据
                        //2添加到正在使用的数据里面

                        if (!this.user.username){
                            alert("未登录");
                            return;
                        }

                        if (this.user.type!=1){
                            alert("没有权限");
                            return;
                        }

                        var userInfo = new models.User(info.name);

                        this.persons.push(userInfo);
                        this.curPersons.push(userInfo);

                        DataManager.insertData("persons",this.persons);
                        DataManager.insertData("curPersons",this.curPersons)
                    }
                },
                // router:router
            };
            this.vue = new Vue(config);
        }
    //创建 App对象
   var app = new App("#app");
})();