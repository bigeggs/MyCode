var frame = require('../modules/frame');
console.log(frame.format(new Date(), 'yyy-MM-dd 星期w'));
console.log(frame.format('发的{0}萨芬{1}士大夫大{0}厦', 'a', 'b'));