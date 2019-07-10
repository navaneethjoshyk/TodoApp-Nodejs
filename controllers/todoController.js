const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

var data = [

]

module.exports = function(app) {
    app.get('/',function(req,res) {
        res.render('HomeView',{todos:data});
    });
    app.get('/todo',function(req,res) {
        res.render('HomeView',{todos:data});
    });
    function pushe(todo) {
        data.push(todo);
    }
    app.post('/todo',urlencodedParser,function(req,res) {
        var flag =0;
        for (var i = 0; i < data.length; i++) {
            if(data[i].item == req.body.item){
                console.log("item already exits");
                data.splice(i,1);

            }
        }

        pushe(req.body);

        res.json(data);


        //res.render('HomeView');
    });
    app.delete('/todo/:item',function(req,res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g,'-') !== req.params.item;
        });
        res.json(data);
    });
};
