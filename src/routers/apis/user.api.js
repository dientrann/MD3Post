import express from 'express';
import { userController } from '../../controllers/user.controller.js';

const router = express.Router();

router.get('/', userController.getAll)
router.get('/:id', userController.findByid)
router.post('/', userController.create)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.get('/:id/posts', userController.getPost)


export default router;