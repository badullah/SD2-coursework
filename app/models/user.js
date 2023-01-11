// Get the functions in the db.js file to use
const db = require('./../services/db');
const { UList } = require('./ulist');

class User {
    // user ID
    id;
    // user name
    name;
    // user email
    email;
    // list id
    Ulist;
    // list item
    items = [];

    constructor(id) {
        this.id = id;
    }
    
    // Gets the user name from the database
    async getUserName() {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from user where id = ?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
            this.email = results[0].email;
        }

    }
    
     // Gets the list name for this user
     async getUserList()  {
        if(typeof this.Ulist !== UList) {
            var sql = "SELECT * from user_list \
            JOIN list ON user_list.list_id = list.list_id \
            WHERE user_list.id = ?"
            const results = await db.query(sql, [this.id]);
            this.Ulist = new UList (results[0].Ulist);
            this.Ulist.UlName = results[0].name;
        }
       
     }

     // Gets the list item for this user
    async getUserItem() {
        var sql= "Select item.code as id, item.item_name from user_list \
        JOIN list_item ON user_list.list_id= list_item.list_id \
        JOIN item ON list_item.code = item.code \
        WHERE user_list.id = ?";
        const results = await db.query(sql, [this.id]);
        this.items=results;
        console.log(results);
    }
    
}

module.exports = {
    User
}