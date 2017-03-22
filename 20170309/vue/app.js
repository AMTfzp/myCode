(function () {
    var config = {
        //可以使用vue起作用的一个范围el
        el:"#container",  //对应的是字符
        data:{
            person:{
                name:"妖刀姬",
                age:20
            },
           student:{
                name:"妖刀姬",
                age:20
            },
            infoHTML:"<ul><li>大天狗</li></ul>",
            message:"默认值",
            persons:[
                { name:"茨木童子", age:33},
                { name:"鬼火童子", age:33},
                { name:"童子", age:33},
                { name:"茨木童子", age:33}
            ]
        }
    };
    new Vue(config);
})()