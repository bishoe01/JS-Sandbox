const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
LOCALHOST = 8080;
app.listen(LOCALHOST,function(){
    console.log(`listening on ${LOCALHOST}`);
})

app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html');  
})

app.get("/write", function(req, res){
    res.sendFile(__dirname + '/write.html');
  })

app.post("/add", function(req, res){
    res.send("응답완료");
})


