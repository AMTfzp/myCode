/**
 * Created by Administrator on 2017/3/9.
 */
//可以 数据持久化到 浏览器的 记账本
//就需要 频繁的 操作 读取 写入的 方法
//就 封装了  数据操作的类 DataManager

//读取 写入的操作  没必要 重复创建对象
//就 写成了  静态方法(类方法) -> 使用 类名去调用
(function () {
   /* new Vue({
        el:"#container",
        data:{
            text:window.localStorage["text"]
        },
        methods:{
            waring:function (a) {
                window.localStorage["text"]=a
            }
        }
    });
    */
    //  存取 读取 localStroge 中的数据
    class DataManager{
        //插入数据
        static inserData(list){
            window.localStorage.setItem("bookList",list?JSON.stringify(list):"[]");
        };
        //读取数据
        static readData(){
            var dataString =window.localStorage.getItem("bookList");
            return dataString?JSON.parse(dataString):[];
        };
    }
    //每一条账本上的信息
    class BookItem{
        constructor(_title,_des,_price){
            this.title = _title;
            this.des = _des;
            this.price = _price;
            this.date = new Date();
            this.isFull =false;
        }
    }
    class App{
      constructor(){
          let config={
              el:"#container",
              data:{
                  //为了防止 在HTML中 添加不进去 (对象没有初始化)
                  bookInfo:{},
                  //记账的数组
                  bookList:DataManager.readData()
              },
              methods:{
                  setData:function (info) {
                      console.log(info)
                      var bookItem = new  BookItem(info.title,info.des,info.price)
                      this.bookList.push(bookItem);
                      DataManager.inserData(this.bookList)
                  },
                  getData:function () {
                    this.bookList = DataManager.readData();
                      return this.bookList;
                  },
                  addMark:function (info) {
                      info.isFull=!info.isFull;
                  }
              },
              w
          }
          this.vue = new Vue(config)
      }
    }
    new App();
})()