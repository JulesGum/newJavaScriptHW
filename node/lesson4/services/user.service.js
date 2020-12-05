const db = require('../dataBase').getInstance();

module.exports = {
    findUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    insertUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    findUserById: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.findByPk(userId);
    }
};