const Koa = require('koa')
const koaStatic = require('koa-static-cache')
const send = require('koa-send')
const path = require('path')

const app = new Koa()

app.use(
  koaStatic('../build/', {
    maxAge: 24 * 60 * 60,
    prefix: '/',
    gzip: true
  })
)
app.use(async ctx => {
  if (ctx.status === 404) {
    await send(ctx, 'index.html', {
      root: path.resolve(__dirname, '..', 'build')
    })
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server opened!')
})
