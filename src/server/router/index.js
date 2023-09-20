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
// 添加
router.get('/addUser', (req, res, next) => {
  var data = req.query
  var sql = `INSERT INTO userinfo (id,account,passwrod,username,tel,email) VALUES (null, '${data.account}', '${data.password}', '${data.username}', '${data.tel}', '${data.email}')`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '插入')
  })
})

// 查询表数据
router.get('/goods', (req, res, next) => {
  var sql = `SELECT * FROM wxdata`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})

// 查询详情
router.get('/detail', (req, res, next) => {
  var sql = `SELECT * FROM wxdata WHERE gid="${req.query.gid}"`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})

// 添加购物车
router.get('/addCart', (req, res, next) => {
  var sql = `INSERT INTo shop_data VALUES (null,'${req.query.gid}', '${req.query.src}', '${req.query.title}', '${req.query.price}', '${req.query.num}')`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '插入')
  })
})

// 查看购物车
router.get('/cart', (req, res, next) => {
  var sql = `SELECT * FROM shop_data`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})

// 查询密码
router.get('/psd', (req, res, next) => {
  var data = req.query
  var sql = `SELECT * FROM userinfo WHERE username='${data.username}'`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})

// 修改密码
router.get('/uppsd', (req, res, next) => {
  var data = req.query
  var sql = `UPDATE userinfo SET passwrod='${data.password}' WHERE username='${data.username}'`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
  })
})
module.exports = router
