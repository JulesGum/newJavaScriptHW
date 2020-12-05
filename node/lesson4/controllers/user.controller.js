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

    getUserById: (req, res) => {
        try {
            const { user_id } = req.params;
            
            if (user_id < 0) {
                throw new Error('User ID must be grater than 0')
            }
            const user = userService.findUserById(user_id);
            
            if (!user) {
                throw new Error('User not found')
            }
        res.json(user);
            } catch (e) {
        res.status(400).json(e.message)
        }    
    },

    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();
            
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