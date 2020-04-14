const Items = require('../models/items');
var list = {items: {thing : "Milk"},items: {thing : "Egg"}}
exports.getIndex = (req,res,next)=>{

    Items.fetchAll()
    .then(stuff => {
        res.render('TodoList',{
            todos: stuff
        });
    }).catch(err => console.log(err));
}

exports.postIndex = (req,res,next)=>{
    
    var data = req.body;
    const item = new Items(data);
    item.save()
    .then(result => {
        console.log('Item Inserted !!!');
        res.redirect('/');
    })
    .catch(err => console.log(err));

    /*res.render('TodoList',{
        todos : list
    });*/
}
exports.deleteIndex = (req,res,next) => {
    var itemId = req.params.itemId;
    Items.deletebyId(itemId)
    .then(result => {
        console.log('Items deleted !!!');
        res.redirect('/');
    })
    .catch(err => console.log(err))
}