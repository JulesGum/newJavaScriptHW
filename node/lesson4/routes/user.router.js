const { Router } = require('express');
const {userController} = require('../controllers');
const {userMiddlewares} = require('../middlewares');

const userRouter = Router();

userRouter.post('/xxx',userMiddlewares.checkUserValidity, userController.createUser);

userRouter.get('/', userController.getUsers);
userRouter.get('/:user_id', userController.getUserById);

userRouter.delete('/', userController.deleteUser);

module.exports = userRouter;
