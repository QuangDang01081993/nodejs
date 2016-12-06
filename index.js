var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
var SanPham = require('./model/SanPham.js');
var arrSanPham = [
  new SanPham('Android','Khoa hoc android','193851364','18081777_th.jpg'),
  new SanPham('iOS','Khoa hoc ios','193751559','18081777_th.jpg'),
  new SanPham('ReactJS','Khoa hoc reactjs','193970500','18081777_th.jpg')
];
app.listen(3000,()=>console.log('Sever started'));
app.get('/',(req,res)=>res.render('index_dark',{arrSanPham}));
app.get('/addmin',(req,res)=>res.render('admin'));
app.post('/xulythem',parser,(req,res)=>{
  var {title,desc,idPhim,hinh} = req.body;
  arrSanPham.push(new SanPham(title,desc,idPhim,hinh));
  res.redirect('/');
});
app.get('/list',(req,res) =>res.render('list',{arrSanPham}));
app.get('/xoa/:id',(req,res) => {
  var {id} = req.params;
  arrSanPham.splice(id,1);
  res.redirect('/list');
});
app.get('/sua/:id',(req,res) =>{
  var {id} = req.params;
  res.render('update',{id,sp: arrSanPham[id]});
});
app.post('/xulysua',parser,(req,res)=>{
  var {id,title,desc,idPhim,hinh} = req.body;
  arrSanPham[id] = new SanPham(title,desc,idPhim,hinh);
  res.redirect('/list');
});
var upload = require('./controls/upload.js')('hinhsanpham');
app.get('/test',(req,res) => res.render('test'));
app.post('/xulyhinh',(req,res) =>{
  upload(req,res,(err)=>{
    if(err){
      res.send(err);
    }else {
      res.send('Thanh cong' + req.file.filename);
    }
  });
});
