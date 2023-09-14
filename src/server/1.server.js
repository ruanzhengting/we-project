const express = require('express')
const router = require('./router')
const cors = require('cors')
const path = require('path')

const server = express()
server.use(cors())
// 解析post参数 在express 4.16版本后才好使
server.use(express.urlencoded({
  extended: false
}))

server.use((req, res, next) => {
  res.s = (value, msg, code = 200) => {
    res.send({
      code,
      'msg': msg + '数据成功',
      value
    })
  }
  next()
})
server.use(express.static(path.join(__dirname, './public')))
server.use(router)
server.use((err, req, res, next) => {
  // 前面路由发生的错误，如何传递到当前错误的中间件
  if (err) {
    return res.send({
      code: 500,
      msg: err.message,
      value: []
    })
  }
})
server.listen(2525, () => {
  console.log('server running at 127.0.0.1')
})
