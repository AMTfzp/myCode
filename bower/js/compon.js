/**
 * Created by fangzhipeng on 2017/3/13.
 */
var listView ={
    //定义一个组建的对象
    template:"<ul><li v-for='list in datas'  @click='add(list)' :class='{full_class:list.isFull}'><p v-text='list.title'></p><p v-text='list.des'></p></li></ul>",
    props:["datas","isFull"],//定义传过来的数据
    methods:{
        add:function (info) {
            this.$emit("add",info)
        }
    }
}
var addBook= {
    template: "<div><p><label for='title_input'>标题</label><input id='title_input' type='text' placeholder='请输入标题' v-model='book.title'></p><p><label for='des_input'>内容</label><input id='des_input' type='text' placeholder='请输入内容' v-model='book.des'></p><button @click='add(book)'>添加</button></div>",
    props:["book"],
    methods:{
        add:function (info) {
            this.$emit("add",info)
        }
}
}