var exp = require('express');
var app = exp();
app.get('/',function(req,res){
    res.send('Hello server');
});
app.listen(3030,function(){
    console.log('The server is ready at port:3030');
});
