/**
 * Created by Administrator on 2017/3/13.
 */
class DataManager{
    //存储本地
    static insertData(list){
        window.localStorage.setItem("list",list?JSON.stringify(list):"[]");
}
    //获取本地的值
    static readData(){
        var list =window.localStorage.getItem("list");
        return list?JSON.parse(list):[];
    }
}