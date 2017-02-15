app.get('/counter',function(req,res){
        counter=counter+1;
        res.send(counter,tostring());
        });