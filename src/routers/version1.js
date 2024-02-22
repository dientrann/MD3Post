import express from 'express';

import userApi from './apis/user.api.js'
import postApi from './apis/post.api.js'

const router = express.Router();

router.use('/user', userApi)
router.use('/post',postApi)

export default router;