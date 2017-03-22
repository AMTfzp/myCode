/**
 * Created by Administrator on 2017/3/20.
 */
(function () {
    //定义一个book的数据模型
    //每次再添加 book对象的时候创建一个 新的 对象
    //解决添加完内容之后 所有内容都变成相同内容
    function Book(_title,_price) {
        this.title = _title;
        this.price = _price;
    }
    window.Book = Book;
})()