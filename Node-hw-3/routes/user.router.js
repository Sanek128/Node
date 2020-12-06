const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddlewares } = require('../middlewares/');

const userRouter = Router();

userRouter.post('/', userMiddlewares.checkUserValydyty, userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:email', userMiddlewares.checkUserEmailValydyty, userController.getUserByEmail);

userRouter.delete('/:email', userMiddlewares.checkUserEmailValydyty, userController.deleteUser);

module.exports = userRouter;

