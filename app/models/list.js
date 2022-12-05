// Get the functions in the db.js file to use
const db = require('./../services/db');

class list {
    // guest ID
    id;
    // list id
    lName;
    
    constructor(id) {
        this.id = id;
    }
        
    async getListName()  {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from guest_list where id = ?"
            const results = await db.query(sql, [this.id]);
            this.lName = results[0].name;
        }
    } 
}

module.exports = {
    list
}