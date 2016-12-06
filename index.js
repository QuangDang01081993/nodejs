var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
var SanPham = require('./model/SanPham.js');
var arrSanPham = [
  new SanPham('Android','Khoa hoc android','193851364','18081777_th.jpg'),
  new SanPham('iOS','Khoa hoc ios','193751559','18081777_th.jpg'),
  new SanPham('ReactJS','Khoa hoc reactjs','193970500','18081777_th.jpg')
];

app.listen(3000,()=>console.log('Sever started'));
app.get('/',(req,res)=>res.render('index_dark',{arrSanPham}));
