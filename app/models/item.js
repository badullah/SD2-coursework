// Get the functions in the db.js file to use
const db = require('./../services/db');

class Item {
    // Item code
    code;
    // Item name
    iName;

    constructor(code, name) {
        this.code = code;
        this.iName = name;
    }

    async getItemName() {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from item where code = ?"
            const results = await db.query(sql, [this.id]);
            this.iName = results[0].name;
            this.code = results[0].code;
        }
    }
}

module.exports = {
    Item
}