/**
 * Created by Administrator on 2017/3/9.
 */
(function () {

    new Vue({
        el:"#container",
        data:{
            isBoy:true,
            type:"3",
            isshow:false,
            colorOfKinds:"color-type",
            img:"6.jpg",
            list:[{name:"小明",age:20},{name:"校张",age:10},{
                name:"小红",age:40}]
        },
        methods:{
            waring:function () {
                alert("");
            },
            showMessage:function (info) {
              alert(`${info.name}${info.age}`)
            }
        }
    })

})()