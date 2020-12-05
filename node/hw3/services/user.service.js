const dataBase = require('../dataBase/users');

module.exports = {
    findAllUsers: () => dataBase,
    addUserToDB: (user) => dataBase.push(user),
    findUserByEmail: (user) => dataBase.filter((u) => u.email !== user),
    deleteUserByEmail: (user) => dataBase.splice(user, 1)
};