var User = require('../app/models/user');


modules.export = function(router){
    router.post('/users', function(req,res){
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if(req.body.username == null || req.body.username == ''
           || req.body.password == null || req.body.password == ''
           || req.body.email == null || req.body.email == ''){
        res.send("Please ensure all User criteria are met");
    }else{
        user.save(function(err){
            if(err){
                res.send("User not created/updated");
            }else{
                res.send("User created");
            }
        });
    }
});
}