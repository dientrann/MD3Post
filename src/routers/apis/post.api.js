import express from 'express';
import { postController } from '../../controllers/post.controller.js';

const router = express.Router();

router.post('/',postController.create)
router.get('/:id', postController.findById)
router.get('/', postController.getAll)
router.put('/:id', postController.update)
router.delete('/:id', postController.delete)

export default router;