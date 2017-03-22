/**
 * Created by Administrator on 2017/3/15.
 */
(function () {

    function DataManager() {}

    DataManager.insertData = function (key,value) {
        //尝试执行 try中的代码
        try {
           localStorage.setItem(key,value?JSON.stringify(value):"{}");
           // 代码出现错误 就会抛出一个异常
            if (!value){
                throw {
                    error:"没有传入值"
                }
            }
       }
       //在catch中可以捕捉到 throw 中跑出的异常信息
       catch (error){
        console.log(error);
       }
    };

    DataManager.readData = function (key) {
        var resultString= localStorage.getItem(key);
        return resultString?JSON.parse(resultString):null;
    }

    window.DataManager = DataManager;
})()