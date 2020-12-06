const userService = require('../services/user.service');

module.exports = {
    
    createUser: (req, res) => {
        try {
            const user = req.body;

            userService.insertUser(user);
            
            res.status(201).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    
    getUsers: (req, res) => {
        try {
            res.status(200).json(userService.getAllUsers());
    
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserByEmail: (req, res) => {
        try {
            const { userEmail } = req.params;
        
            const findUser = userService.findUserByEmail(userEmail);

            res.status(200).json(findUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        try {
            const { userEmail } = req.params;
        
            const deletedUser = userService.deleteUser(userEmail);

            res.status(200).json(deletedUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}