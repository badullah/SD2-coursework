// Get the functions in the db.js file to use
const db = require('./../services/db');
const { List } = require('./list');
const { Item } = require('./item');

class Guest {
    // guest ID
    id;
    // guest name
    name;
    // list id
    list;
    // list item
    items = [];

    constructor(id) {
        this.id = id;
    }
    
    // Gets the guest name from the database
    async getGuestName() {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from guest where id = ?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
        }

    }
    
     // Gets the list name for this guest
     async getGuestList()  {
        if(typeof this.list !== List) {
            var sql = "SELECT * from guest_list \
            JOIN list ON guest_list.list_id = list.list_id \
            WHERE guest_list.id = ?"
            const results = await db.query(sql, [this.id]);
            this.list = new List (results[0].list);
            this.list.lName = results[0].name;
        }
       
     }
    // Gets the list item for this guest
    async getGuestItem() {
        var sql = "SELECT * FROM list_item \
        JOIN list on list.list_id = list_item.list_id \
        WHERE list_item.guest_id = ?";
       const results = await db.query(sql, [this.list.id]);
       console.log(results);
        for(var row of results) {
            this.items.push(new Item(row.code, row.name));
        }
    }
    
}

module.exports = {
    Guest
}