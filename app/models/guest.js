// Get the functions in the db.js file to use
const db = require('./../services/db');
const { List } = require('./list');

class Guest {
    // guest ID
    id;
    // guest name
    name;
    // list id
    list;
    // list item
    items = [];
    // Guest Choice
    choice;
    //Guest to be deleted choice
    choice1;

    constructor(id) {
        this.id = id;
    }
    
    // Gets the guest name from the database
    async getGuestName() {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from guest where id = ?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
            this.choice = results[0].choice;
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
        var sql= "Select item.code as id, item.item_name, list_item.status from guest_list \
        JOIN list_item ON guest_list.list_id= list_item.list_id \
        JOIN item ON list_item.code = item.code \
        WHERE guest_list.id = ?";
        const results = await db.query(sql, [this.id]);
        this.items=results;
        this.choice=results[0].choice;
        console.log(results);
                
    }

    async addGuestChoice(choice) {

        // var status_value="chosen";
        // var sql1 = "UPDATE list_item SET status = '' WHERE status = ?"
        // const result1 = await db.query(sql1, [status_value]);

        var sql = "UPDATE list_item SET status = 'chosen' WHERE code = ?"
        const result = await db.query(sql, [choice]);
        this.choice = choice;
        return result;
    }

    async addGuestChoice1(choice1) {

        var sql = "UPDATE list_item SET status = '' WHERE code = ?"
        const result = await db.query(sql, [choice1]);
        this.choice1 = choice1;
        return result;
    }
    
}

module.exports = {
    Guest
}