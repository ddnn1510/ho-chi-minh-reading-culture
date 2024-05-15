import Router from 'express';
const router = Router();
import { getListQuestions } from '../controllers/questionController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

router.route('/').get(authenticateUser, getListQuestions);

export default router;
