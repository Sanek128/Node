const dataBase = require('../dataBase/users');

module.exports = {
    getAllUsers: () => dataBase,
    
    insertUser: (user) => {
        dataBase.push(user);
    },
    
    findUserByEmail: (userEmail) => {
        dataBase.find((user) => {user.email === userEmail});
    },

    deleteUser: (userEmail) => {
        dataBase.forEach((user) => {

            if (user.email === userEmail) {
                dataBase.splice(user, 1);
            }
        })
    }
}