const user = require('../dataBase/models/user');
const userService = require('../services/user.service')

module.exports = {
    createUser: (req, res) => {
        try {
        userService.findUsers(req.body);
        
        res.status(201).json('User created');    
        } catch (e) {
          res.json(e.message)  
        }
    },

    getUserById: async (req, res) => {
        try {
            const { user_id } = req.params;
            
            if (user_id < 0) {
                throw new Error('User ID must be grater than 0')
            }
            const user = await userService.findUserById(user_id);
            
            console.log(user.email)
        res.json(user);
            } catch (e) {
        res.status(400).json(e.message)
        }    
    },

    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            console.log(users);

            users.forEach((user) => {
                console.log(user.email);
            });
            
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message)
        }    
    },

    deleteUser: (req, res) => {
        try {
        res.json('User deleted');           
        } catch (e) {
            res.json(e.message)
        }
    },
};