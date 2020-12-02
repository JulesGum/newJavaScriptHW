const { Router } = require('express');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const userRouter = Router();

userRouter.post('/xxx',userMiddleware.checkUserValidity, userController.createUser);

userRouter.get('/:user_id', userController.getUserById);

userRouter.delete('/', userController.deleteUser);

module.exports = userRouter;
