import Router from 'express';
const router = Router();
import {
  getPost,
  deletePost,
  updatePost,
  createPost,
  getPosts,
} from '../controllers/postController.js';

router.route('/').post(createPost).get(getPosts);
router.route('/:id').put(updatePost).delete(deletePost).get(getPost);

export default router;
