var orm = require("../config/orm")

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res)
        })
    },

    updateOne: function(id, cb){
        orm.updateOne('burgers', id, cb);
    },

    insertOne: function(id, cb){
        orm.insertOne('burgers', id, cb);
    },

};

module.exports = burger;

