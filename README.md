## koa-cache-router

Router cache middleware for koa. Useful for caching some pages like `/home`.

### Install

```
npm i koa-cache-router --save
```

### Usage

```
var router = new(require('koa-router'))();
var CacheMiddleware = require('koa-cache-router');
router.use('/home', CacheMiddleware({
    expire:5*60*1000
}));

router.get('/home', function*(){
    this.body = render('home');
});
```

Options :

- expire: expire time, use `ms`. (Required)

### License

MIT