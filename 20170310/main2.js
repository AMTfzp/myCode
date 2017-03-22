/**
 * Created by Administrator on 2017/3/10.
 */
(function () {

    class Zujian{
        constructor(){
        var web= {
        template:"<p><label for='title-input'>"+title+"</label><input id='title-input' type='text' v-model='bookInfo.title'/></p>"
    };
        //是M V VM 中的viem层
        var ucai={
        //datas 视图组件中的属性
        props:["datas"],
        template:"<ul><li v-for='info in datas' v-text='info'></li></ul>"
    }
    }
    }
    class App{
        constructor(mark){

            var config={
               el:mark,
                components:{
                   "web":web,
                    "ok":ucai
                },
                data:{
                    list:["1","2","3","4"],
                    list2:["4","9","10"]
            }
            };
            new Vue(config);
        }
    }
    new App("#app");
})()