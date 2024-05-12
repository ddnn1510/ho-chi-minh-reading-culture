import Router from 'express';
const router = Router();
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoriesInfo,
  getCategoryById,
  updateCategory,
} from '../controllers/categoryController.js';

//router get catgories info
router.route('/intro').get(getCategoriesInfo);

router.route('/').post(createCategory).get(getCategories);
router
  .route('/:id')
  .put(updateCategory)
  .delete(deleteCategory)
  .get(getCategoryById);

export default router;
