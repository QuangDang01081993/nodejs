var pg = require('pg');
var uri ="postgres://idsvuiyinthxoo:DzoGlHlhHaKNP8yB3iHWW0Ttmn@ec2-54-75-242-208.eu-west-1.compute.amazonaws.com:5432/dfsf1r68uigm4m";
function queryDB(sql,cb) {
  pq.connect(uri,(err,client, done) =>{
    if(err){
      return console.log('loi ket noi');
    }
    done();
    client.query(sql,(err,result) =>{
      if(err){
        return console.log('loi truy van');
      }
      cb(result);
    });
  });

}
