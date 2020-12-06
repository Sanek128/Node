const dataBase = require('../../dataBase/users');

module.exports = (req, res, next) => {

    try {
        const newUser = req.body;

        dataBase.forEach((user) => {

            if (user.name === newUser.name || user.email === newUser.email) {
                throw new Error('User with such data already exists');
            }

            next();
        });
    } catch (e) {
        res.status(400).json(e.message);
    }
}