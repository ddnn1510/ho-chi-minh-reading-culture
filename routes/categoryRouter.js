import Router from 'express';
const router = Router();
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from '../controllers/categoryController.js';

router.route('/').post(createCategory).get(getCategories);
router
  .route('/:id')
  .put(updateCategory)
  .delete(deleteCategory)
  .get(getCategoryById);

export default router;
