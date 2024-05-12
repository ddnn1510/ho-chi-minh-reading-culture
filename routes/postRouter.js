import Router from 'express';
const router = Router();
import {
  getPost,
  deletePost,
  updatePost,
  createPost,
  getPosts,
  getNewestPosts,
  getPostsByCategory,
} from '../controllers/postController.js';

router.route('/').post(createPost).get(getPosts);
router.route('/:id').put(updatePost).delete(deletePost).get(getPost);
router.route('/newest').get(getNewestPosts);
router.route('/category/:categoryId').get(getPostsByCategory);

export default router;
