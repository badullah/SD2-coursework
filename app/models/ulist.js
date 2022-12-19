// Get the functions in the db.js file to use
const db = require('../services/db');

class UList {
    // guest ID
    id;
    // list id
    UlName;
    
    constructor(id) {
        this.id = id;
    }
        
    async getUListName()  {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from user_list where id = ?"
            const results = await db.query(sql, [this.id]);
            this.UlName = results[0].name;
        }
    } 
}

module.exports = {
    UList
}