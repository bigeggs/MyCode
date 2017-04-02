var Frame = {
    DataType: {
        'number': '[object Number]',
        'string': '[object String]',
        'object': '[object Object]',
        'array': '[object Array]',
        'function': '[object Function]',
        'date': '[object Date]'
    },
    format: function() {
        var args = Array.prototype.slice.call(arguments);
        var firstParameter = args.shift();
        if (this.isString(firstParameter)) {
            return firstParameter.replace(/{(\d+)}/g, function(match, $1) {
                return args[$1] || '';
            });
        }
        if (this.isDate(firstParameter)) {
            var fmt = args.shift();
            if (!this.isString(fmt)) {
                return firstParameter;
            }
            var o = {
                'y+': firstParameter.getFullYear(), //年份
                "M+": firstParameter.getMonth() + 1, //月份 
                "d+": firstParameter.getDate(), //日 
                "h+": firstParameter.getHours(), //小时 
                "m+": firstParameter.getMinutes(), //分 
                "s+": firstParameter.getSeconds(), //秒 
                "q+": Math.floor((firstParameter.getMonth() + 3) / 3), //季度 
                "S": firstParameter.getMilliseconds(), //毫秒 
                "w": ['日', '一', '二', '三', '四', '五', '六'][firstParameter.getDay()] //周
            }
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    var element = o[k];
                    if (new RegExp('(' + k + ")").test(fmt)) {
                        var val = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, function(txt, index) {
                            if (txt.length == 1) {
                                return val;
                            }
                            if (txt.length > 2) {
                                return val.substring(val.length - txt.length);
                            }
                            return ('00' + val).substr(txt.length)
                        })
                    }
                }
            }
            return fmt;
        }
        return firstParameter;

    },
    isFunction: function(obj) {
        return Object.prototype.toString.call(obj) === this.DataType.function;
    },
    isNumber: function(obj) {
        return Object.prototype.toString.call(obj) === this.DataType.number;
    },
    isString: function(obj) {
        return Object.prototype.toString.call(obj) === this.DataType.string;
    },
    isObject: function(obj) {
        return Object.prototype.toString.call(obj) === this.DataType.object;
    },
    isArray: function(obj) {
        return Object.prototype.toString.call(obj) === this.DataType.array;
    },
    isDate: function(obj) {
        return Object.prototype.toString.call(obj) === this.DataType.date;
    }
}
module.exports = Frame;