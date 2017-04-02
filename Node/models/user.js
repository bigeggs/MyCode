var frame = require('../modules/frame');

function User() {
    var name;
    var age;
    var role;

}
User.prototype = {
    logininlog: function() {
        return frame.format('用户{0}于{1}登入系统',
            this.name, frame.format(new Date(), 'yyyy-MM-dd hh:mm:ss 周w'));
    },
    loginoutlog: function() {
        return frame.format('用户{0}于{1}登出系统',
            this.name, frame.format(new Date(), 'yyyy-MM-dd hh:mm:ss'));
    },
    actionlog: function(action) {
        return frame.format('用户{0}于{1}进行了{2}操作',
            this.name, frame.format(new Date(), 'yyyy-MM-dd hh:mm:ss'), action);
    }
}
module.exports = User;