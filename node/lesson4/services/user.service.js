const db = require('../dataBase')

module.exports = {
    findUsers: () => {
        return db.query('select * from users')
    },

    insertUser: () => {
        // dataBase.push(user);
    },

    findUserById: () => {
         // dataBase[userId],       
    }

}