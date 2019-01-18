const express = require('express')
const next = require('next')
const withCss = require('@zeit/next-css')
const path = require('path')

const port = 5004

const run = async (dev = false) => {
  const app = next({
    dev: dev,
    conf: withCss({
      webpack (config) {
        config.module.rules.push({
          test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              publicPath: './',
              outputPath: 'static/',
              name: '[name].[ext]'
            }
          }
        })
        return config
      }
    })
  })
  const handle = app.getRequestHandler()
  await app.prepare()
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/projects', (req, res) => {
    return app.render(req, res, '/projects', req.query)
  })

  server.get('/_error', (req, res) => {
    return app.render(req, res, '/_error', req.query)
  })
  
  server.get('/static/:pathname', (req, res) => {
    let pathURL = path.join(__dirname, 'static', req.params.pathname)
    return app.serveStatic(req, res, pathURL)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, '0.0.0.0', () => {
    console.log(`> Running the server on http://localhost:${port}`)
  })
}

module.exports = {
  run: run
}
