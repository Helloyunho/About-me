const Koa = require('koa')
const koaStatic = require('koa-static')
const mount = require('koa-mount')
const send = require('koa-send')
const path = require('path')

const app = new Koa()

app.use(async ctx => {
  ctx.set('Cache-Control', 'max-age=86400')
})
app.use(mount('/', koaStatic('build/')))
app.use(async ctx => {
  if (ctx.status === 404) {
    await send(ctx, 'index.html', {
      root: path.resolve(__dirname, 'build')
    })
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server opened!')
})
