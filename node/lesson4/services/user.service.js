const db = require('../dataBase')

module.exports = {
    findUsers: () => {
        return db.query('SELECT * FROM users');
    },

    insertUser: (user) => {
        return db.query(`ISERT INTO users (emaill) VALUE (${user.email})`)
    },

    findUserById: () => {
         // dataBase[userId],       
    }

}