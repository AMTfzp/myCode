/**
 * Created by Administrator on 2017/3/13.
 */
(()=>{
    class App{
        constructor(mark){
            var config={
                el:mark,
                //使用component 定义组建 组建的名字用于在HTML中写的
                components:{
                    "book-list":listView,
                    "add-book":addBook
                },
                //数据放在data中定义
                data:{
                    list:DataManager.readData(),
                    book:{}
                },
                methods:{
                  setData:function (info) {
                      var book = new Book(info.title,info.des);
                      this.list.push(book);
                      DataManager.insertData(this.list);
                  },
                    getData:function () {
                        this.list=DataManager.readData();
                        return this.list;
                    },
                    addBook:function (info) {
                        this.setData(info);
                    },
                    addMarks:function (info) {
                        info.isFull=!info.isFull;
                    }

                },
                watch:{
                    "list":{
                        handler:function (value) {
                            DataManager.insertData(value);
                        }
                    },
                    deep:true
                }
            };
            new Vue(config);
        }
    }
    new App("#app");
})();