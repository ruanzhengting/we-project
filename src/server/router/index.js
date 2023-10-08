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
  var sql = `INSERT INTo shop_data VALUES (null,'${req.query.gid}', '${req.query.src}', '${req.query.title}', '${req.query.price}', '${req.query.num}', '${req.query.total}', '${req.query.checked}')`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '插入')
  })
})
router.get('/isShop', (req, res, next) => {
  var sql = `SELECT * FROM shop_data WHERE gid=${req.query.gid}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '查询')
  })
})
// 修改价格
router.get('/change/total', (req, res, next) => {
  var sql = `UPDATE shop_data SET totalMoney='${req.query.money}' WHERE gid=${req.query.gid}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
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
router.get('/detailNum', (req, res, next) => {
  var sql = `UPDATE wxdata SET num='${req.query.num}' WHERE gid=${req.query.gid}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
  })
})
router.get('/cartNum', (req, res, next) => {
  var sql = `UPDATE shop_data SET num='${req.query.value}' WHERE gid=${req.query.gid}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
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
// 修改复选框的值
router.get('/change/chec', (req, res, next) => {
  var data = req.query
  var sql = `UPDATE shop_data SET checked='${req.query.code}' WHERE gid=${data.gid}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
  })
})
router.get('/change/all', (req, res, next) => {
  var data = req.query
  var sql = `UPDATE shop_data SET checked='${data.code}'`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
  })
})
// 改变用户的名字
router.get('/change/addr', (req, res, next) => {
  var sql = `UPDATE userinfo SET addr='${req.query.addr}' WHERE id=${req.query.id}`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '修改')
  })
})
// 删除购物车某一项
router.get('/del/cart', (req, res, next) => {
  var sql = `DELETE FROM shop_data WHERE gid='${req.query.gid}'`
  db.query(sql, (err, result) => {
    if (err) return next(err)
    res.s(result, '删除')
  })
})
module.exports = router
