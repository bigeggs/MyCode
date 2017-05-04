(function(window, undefined) {
    var document = window.document;
    var ZQuery = function(selector, context) {
        return new ZQuery.fn.init(selector, context);
    };
    ZQuery.fn = ZQuery.prototype = {
        constructor: ZQuery,
        init: function(selector, context) {
            if (!selector) {
                return this;
            }

            //DOMElement
            if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            }

            // body元素在页面里面只会有一个，没必要遍历DOM进行查找，这是一个优化
            if (selector === 'body' && !context && document.body) {
                this.context = document;
                this[0] = document.body;
                this.selector = selector;
                this.length = 1;
                return this;
            }
            if (typeof selector == "string") {
                this[0] = document.getElementById(selector);
                this.context = document;
                this.selector = selector;
                return this;
            }
            return this;
        }
    };
    ZQuery.fn.init.prototype = ZQuery.fn;
    window.ZQuery = window.$ = ZQuery;

})(window);