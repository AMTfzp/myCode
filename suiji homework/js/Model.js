/**
 * Created by Administrator on 2017/3/15.
 */
window.models = window.models||{};
(function () {
    function User(_name) {
        this.name = _name;
    }

    models.User = User;
})()