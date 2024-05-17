// test router
import express from 'express';
import { getTests, submitTest } from '../controllers/testController.js';

const router = express.Router();

router.get('/', getTests);
router.post('/submit', submitTest);

export default router;
