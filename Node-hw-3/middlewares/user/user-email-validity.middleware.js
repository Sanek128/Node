const dataBase = require('../../dataBase/users');

module.exports = (req, res, next) => {
    try {
        const { userEmail } = req.params;
        const userByEmail = dataBase.find(user => user.email === userEmail);

    if (!userByEmail) {
        throw new Error('User email not found');
    }
    
    next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}