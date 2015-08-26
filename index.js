function CacheMiddleware(options) {
    options = options || {};
    var expire = options.expire || 5 * 60 * 1000;
    var content;

    return function*(next) {
        if (content) {
            this.body = content;
        }
        yield next;
        if (typeof this.body === 'string' || Buffer.isBuffer(this.body)) {
            content = this.body;
            setTimeout(function() {
                content = null;
            }, expire);
        }
    }
}

module.exports = CacheMiddleware;