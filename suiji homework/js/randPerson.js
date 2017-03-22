/**
 * Created by Administrator on 2017/3/15.
 */
(function () {
    window.randPerson = {
        template:"<div><h1 v-text='result.name'></h1><button @click='start'>开始抽选</button></div>",
        props:["result"],
        methods:{
            start:function () {
                this.$emit("start");
            }
        }
    }
    Vue.component("rand-person",randPerson);
})()