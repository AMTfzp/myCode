/**
 * Created by Administrator on 2017/3/9.
 */
(function () {
    function request(url,callback) {
        var req = new XMLHttpRequest();
        req.open("GET",url);
        req.onload = function () {
            callback(JSON.parse(req.response));
        };
        req.send();
    }
    request("package.json",success);
})()