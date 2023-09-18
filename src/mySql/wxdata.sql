-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2023-09-15 04:33:37
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dbms`
--

-- --------------------------------------------------------

--
-- 表的结构 `wxdata`
--

DROP TABLE IF EXISTS `wxdata`;
CREATE TABLE IF NOT EXISTS `wxdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `img_bnr` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `num` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `checked` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

--
-- 转存表中的数据 `wxdata`
--

INSERT INTO `wxdata` (`id`, `gid`, `type`, `src`, `img_bnr`, `title`, `price`, `num`, `text`, `checked`) VALUES
(5, 1001, '电脑', 'a1.png', 'a1.png,a2.png,a3.png,a4.png', 'Yottoy英国浸塑哑铃男士女士健身家用肌肉塑形实心小哑铃力量训练器材初学者-柚清绿一对装', '78.99', 1, '七天无理由', 0),
(6, 1002, '电脑', 'b1.png', 'b1.png,b2.png,b3.png,b4.png', '【运动提速剂】动能加冲级者体考小红瓶兴奋液体氮泵跑步三公里体测神器爆发力体考兴奋耐力专用补充剂运动 【爆发型】1瓶+【耐力型】1瓶', '12.99', 1, '七天无理由', 0),
(7, 1003, '电脑', 'c1.png', 'c1.png,c2.png,c3.png,c4.png', '宝矿力水特电解质水功能性运动饮料500ml*15瓶 整箱装 快速补充能量水分', '67.45', 1, '七天无理由', 0),
(8, 1004, '零食', 'd1.png', 'd1.png,d2.png,d3.png,d4.png', 'ONEPAL Hypertools IASTM不锈钢筋膜刀全套筋膜松解刀肌肉放松刀 316 宝雕弓 厚度-8mm', '78.00', 1, '七天无理由', 0),
(9, 1005, '零食', 'e1.png', 'e1.png,e2.png,e3.png,e4.png', '知味观中华老字号传统糯米条头糕桃花酥饼干糕点休闲零食小吃杭州特产 【粉丝推荐】 540克 ', '67.99', 1, '七天无理由', 0),
(10, 1006, '零食', 'f1.png', 'f1.png,f2.png,f3.png,f4.png', '皇冠（danisa）丹麦曲奇饼干908g 零食蛋糕 中秋礼盒送礼 丹麦进口（随机发货', '23.00', 1, '七天无理由', 0),
(11, 1007, '电脑', 'g1.png', 'g1.png,g2.png,g3.png,g4.png', '比比赞（BIBIZAN）牛角酥混合味400g独立装虎牙脆妙脆角膨化饼干休闲零食品小吃', '78.99', 1, '七天无理由', 0),
(12, 1008, '电脑', 'h1.png', 'h1.png,h2.png,h3.png,h4.png', 'YONEX尤尼克斯护腕跑步健身舒适吸汗运动护腕AC029CR-002蓝色单个装', '12.87', 1, '七天无理由', 0),
(13, 1009, '手机', 'i1.png', 'i1.png,i2.png,i3.png,i4.png', '汗马 【智能游戏APP】动感单车家用运动器材健身车室内脚踏自行车 【店长推荐】蓝牙游戏+加粗车架', '429.00', 1, '七天无理由', 0),
(14, 1010, '手机', 'j1.png', 'j1.png,j2.png,j3.png,j4.png', 'KDST健腹轮自动回弹收腹卷腹运动男女腹肌轮肘撑滚轮减肥健身器材家用 【活力橙】电子计时肘撑设计/健腹二合一/自动回弹', '                                      68.09', 1, '七天无理由', 0),
(15, 1011, '电器', 'k1.png', 'k1.png,k2.png,k3.png,k4.png', 'PRADAYL跑步机家用电动智能走步机家居折叠静音小型迷你室内运动健身器材 闪银-豪华款-纯运动模式', '66.66', 1, '七天无理由', 0),
(16, 1012, '电器', 'l1.png', 'l1.png,l2.png,l3.png,l4.png', '汤姆森（TOMSON）【美国运动品牌已卖30万台】筋膜枪按摩枪肌肉放松筋膜抢按摩仪器 小黑牛1800毫安充电标准版按键款', '23.33', 1, '七天无理由', 0),
(17, 1013, '图书', 'm1.png', 'm1.png,m2.png,m3.png,m4.png', '李宁速干T恤【线下同款】男运动短袖上衣吸汗透气跑步纯色体恤白色 L', '98.99', 1, '七天无理由', 0),
(18, 1014, '图书', 'n1.png', 'n1.png,n2.png,n3.png,n4.png', '迪卡侬短袖速干衣男训练宽松半袖上衣运动t恤男RUNM2501394黑色T恤L', '39.9', 1, '七天无理由', 0),
(19, 1015, '零食', 'o.png', 'o1.png,o2.png,o3.png,o4.png', '野马 夏季轻便3C认证儿童头盔 均码 白色熊猫(透长镜+赠咖短镜)', '78.99', 1, '七天无理由', 0),
(20, 1016, '电脑', 'p1.png', 'p1.png,p2.png,p3.png,p4.png', '华为笔记本电脑MateBook 14 2023 13代酷睿版 i5 16G 1T 14英寸轻薄办公本/2K触控全面屏/手机互联 深空灰', '89.00', 1, '七天无理由', 0),
(21, 1017, '电脑', 'q1.png', 'q1.png,q2.png,q3.png,q4.png', '华为笔记本电脑MateBook D 14 SE版 14英寸 英特尔酷睿i5 16G 512G 轻薄本/护眼全面屏/手机互联 皓月银', '672.99', 1, '七天无理由', 0),
(22, 1018, '电脑', 'r1.png', 'r1.png,r2.png,r3.png,r4.png', '惠普（HP）战66 六代2023酷睿15.6英寸(英特尔13代i5-1340P 16G 1T 2.5K高色域屏120Hz AI新体验)高性能轻薄笔记本电脑      (c1.png,c2.png,c3.png) ', '452.65', 1, '七天无理由', 0),
(23, 1019, '电脑', 's1.png', 's1.png,s2.png,s3.png,s4.png', '联想笔记本电脑小新14轻薄本 英特尔酷睿i5 14英寸超薄本(高性能标压i5 16G 512G)灰 商务办公学生', '65.01', 1, '七天无理由', 0),
(24, 1020, '电脑', 't1.png', 't1.png,t2.png,t3.png,t4.png', '惠普（HP）暗影精灵9 Intel 16.1英寸游戏本 笔记本电脑(英特尔13代酷睿i9-13900HX RTX4060 16G 1TBSSD 2.5K 240Hz', '67.98', 1, '七天无理由', 0),
(25, 1021, '手机', 'u1.png', 'u1.png,u2.png,u3.png,u4.png', 'Redmi K60 至尊版 天玑9200+ 独显芯片X7 1.5K直屏 索尼IMX800 光学防抖 16GB+512GB 墨羽 小米红米K60 Ultra', '27.11', 1, '七天无理由', 0),
(26, 1022, '手机', 'v1.png', 'v1.png,v2.png,v3.png,v4.png', '荣耀X50 第一代骁龙6芯片 1.5K超清护眼硬核曲屏 5800mAh超耐久大电池 5G手机 8GB+128GB 雨后初晴 ', '78.99', 1, '七天无理由', 0),
(27, 1023, '手机', 'w1.png', 'w1.png,w2.png,w3.png,w4.png', 'Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池  8GB+ 128GB 神秘黑境 智能手机 小米 红米', '72.99', 1, '七天无理由', 0),
(28, 1024, '手机', 'x1.png', 'x1.png,x2.png,x3.png,x4.png', '荣耀Play6C 5000mAh大电池 高通骁龙5G芯 22.5W超级快充 侧边指纹解锁 6GB+128GB 钛空银', '87.00', 1, '七天无理由', 0),
(29, 1026, '手机', 'y1.png', 'y1.png,y2.png,y3.png,y4.png', '华为/HUAWEI 畅享60 6000mAh+22.5W超级快充 4800万大底超清影像 128GB 冰晶蓝 鸿蒙智能手机', '27.99', 1, '七天无理由', 0),
(30, 1027, '电器', 'z1.png', 'z1.png,z2.png,z3.png,z4.png', '康佳（KONKA）电热水壶 304不锈钢双层防烫 1.8L大容量 烧水壶暖水壶开水壶电水瓶 KEK-W1806 ', '76.00', 1, '七天无理由', 0),
(31, 1028, '电器', 'aa1.png', 'aa1.png,aa2.png,aa3.png', '米家 小米有线吸尘器2 吸尘器家用升级风道一键拆卸可视化尘杯纤薄机身除尘 ', '2400.00', 1, '七天无理由', 0),
(32, 1029, '电器', 'bb1.png', 'bb1.png,bb2.png,bb3.png', '京东京造 即热式饮水机 家用台式小型免安装 即热即饮 3L水箱升级 4段控温 独立纯净水箱直饮机 ', '6562.99', 1, '七天无理由', 0),
(33, 1030, '电器', 'cc1.png', 'cc1.png,cc2.png,cc3.png', '先创（XIANCHUANG）喷雾风扇工业水雾风扇雾化落地扇加湿器户外降温电风扇大带雾加水工厂水冷风扇喷水风扇制冷带水箱', '78.99', 1, '七天无理由', 0),
(34, 1031, '电器', 'dd1.png', 'dd1.png,dd2.png,dd3.png', '奥克斯（AUX）家用吸尘器手持地毯式低噪音小型迷你大功率强力吸尘器除尘机宠物家庭有线5米 AXS-927 白色标配版  ', '12.88', 1, '七天无理由', 0),
(35, 1032, '图书', 'ee1.png ', 'ee1.png,ee2.png,ee3.png', '【包邮】余华作品 活着（精装版，余华代表作，易烊千玺推荐阅读 新版） ', '99.12', 1, '七天无理由', 0),
(36, 1033, '图书', 'ff1.png', 'ff1.png,ff2.png,ff3.png', '自营包邮 长安的荔枝 赠荔枝转运舆图（马伯庸备受好评的历史小说，一骑红尘妃子笑“有”人知是荔枝来', '562.99', 1, '七天无理由', 0),
(37, 1034, '图书', 'gg1.png', 'gg1.png,gg2.png,gg3.png', '人间值得 正版以自己喜欢的方式过一生励志书籍初高中生人生正能量励志学书籍 ', '99.99', 1, '七天无理由', 0),
(38, 1035, '图书', 'hh1.png', 'hh1.png,hh2.png,hh3.png', '果麦经典：瓦尔登湖（央视朗读者第二期朗读书目，清华大学校长推荐版本。译者李继宏作12822字导读', '655.99', 1, '七天无理由', 0),
(39, 1036, '图书', 'ii1.png', 'ii1.png,ii2.png,ii3.png', '山海经（经典彩绘珍藏版 全注全译全解）【上古三大奇书之一】全本十八卷，无删减【彩绘全译全注】古典文学地理学生活书', '14.99', 1, '七天无理由', 0),
(40, 1037, '零食', 'jj1.png', 'jj1.png,jj2.png,jj3.png', '暴肌独角兽绿豆饼冰皮绿豆糕点早餐速食零食小吃传统老式糕点心下午茶330g', '16.66', 1, '七天无理由', 0),
(41, 1038, '零食', 'kk1.png', 'kk1.png,kk2.png,kk3.png', '溜溜梅青梅西梅酸话梅蜜饯果干休闲零食礼包 家庭分享桶460g【咔哩脆青梅，鲜脆爆汁！0人工甜味剂0人工色素', '776.99', 1, '七天无理由', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
