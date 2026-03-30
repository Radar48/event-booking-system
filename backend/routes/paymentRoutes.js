import express from 'express';
import { checkoutPayment } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/checkout', protect, checkoutPayment);

export default router;