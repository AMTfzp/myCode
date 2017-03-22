/**
 * Created by Administrator on 2017/3/21.
 */
(function () {

    function News(_imagePath,_title,_des) {
        this.imagePath= _imagePath;
        this.title = _title;
        this.des = _des;
    }

    window.News = News;

})()