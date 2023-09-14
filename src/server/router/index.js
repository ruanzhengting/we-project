// 1.引入express模块
const express = require('express')
// 2.创建路由对象
const router = express.Router()
// 引入第三方模块
const mysql = require('mysql')
// 连接数据库 获取数据库对象
// db ===> database
const db = mysql.createPool({
  host: '127.0.0.1', // ip
  user: 'root', // 用户名
  password: '', // 密码
  database: 'dbms' // 数据库
})

router.get('/addCount', (req, res, next) => {
  var sql = `UPDATE wxdata SET num="${req.query.num}" WHERE gid=${req.query.gid}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '插入')
  })
})
// 检查账号
router.get('/user', (req, res, next) => {
  var sql = `SELECT * FROM userinfo WHERE account="${req.query.account}"`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})
// 检查密码
router.get('/psg', (req, res, next) => {
  var sql = `SELECT * FROM userinfo WHERE passwrod="${req.query.password}"`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})
module.exports = router
