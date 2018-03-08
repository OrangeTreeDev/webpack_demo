const send = require('koa-send');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  await send(ctx, ctx.path, {
    root: __dirname + '/dist',
    index: 'index.html'
  });
});

app.listen(3000);