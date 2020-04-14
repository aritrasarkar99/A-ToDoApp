const getDb = require('../util/database').getDb;
const mongodb = require('mongodb')
class Items{
    constructor(items){
        this.items = items;
    }

    save(){
        const db = getDb();
        return db.collection('items')
        .insertOne(this)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    
    static fetchAll(){
        const db = getDb();
        return db.collection('items').find()
        .toArray()
        .then(items => {
            console.log(items);
            return items
        })
        .catch(err => console.log(err))
    }
    static deletebyId(itemId){
        const db = getDb();

        return db.collection('items')
        .deleteOne({_id : mongodb.ObjectId(itemId) })
        .then(result => {
            console.log('Deleted !!!');
        })
        .catch(err => console.log(err))
    }
}

module.exports = Items;