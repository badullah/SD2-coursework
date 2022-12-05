// Get the functions in the db.js file to use
const db = require('./../services/db');
const { list } = require('./list');

class Guest {
    // guest ID
    id;
    // guest name
    name;
    // list id
    list;

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
        if(typeof this.list !== list) {
            var sql = "SELECT * from guest_list \
            JOIN list_item ON guest_list.list_id = list_item.list_id \
            WHERE guest_list.id = ?"
            const results = await db.query(sql, [this.id]);
            this.list = new list (results[0].list);
            this.list.lName = results[0].name;
        }
       
    }
    
    
}

module.exports = {
    Guest
}