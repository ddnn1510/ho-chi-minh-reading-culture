import Router from 'express';
const router = Router();
import {
  getPost,
  deletePost,
  updatePost,
  createPost,
} from '../controllers/postController.js';

router.route('/').post(createPost).get(getPost);
router.route('/:id').put(updatePost).delete(deletePost);

export default router;
