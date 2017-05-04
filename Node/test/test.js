var DB = require('../models/mongodb');
// DB.Insert('user', { "name": "zx", "url": "www.baidu.com" }, function() {
//     console.log('数据插入成功');

// });
// DB.Find('user', { 'name': 'zx' }, { 'name': 1, url: 1 }, null, null, function(res) {
//     console.log(res);
// });

// DB.Find('user', { 'name': 'zx' }, { 'name': 1 }, 2, 2, function(res) {
//     console.log(res);
// });
DB.Find('user', null, null, null, null, function(data) {
    console.log(data);
})