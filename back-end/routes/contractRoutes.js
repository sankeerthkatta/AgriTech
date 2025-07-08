import express from 'express';
import {
  createContract,
  getBuyerContracts,
  getFarmerContracts,
  acceptContract,
  rejectContract,
  withdrawContract,
  completeContract,
  getPastContracts
} from '../controllers/contractController.js';
import authenticate from '../middlewares/authMiddleware.js';
import { isBuyer, isFarmer } from '../middlewares/roleMiddleware.js';
const router = express.Router();

router.post('/',authenticate,isBuyer, createContract);

router.get('/buyer',authenticate,isBuyer, getBuyerContracts);

router.get('/farmer',authenticate, isFarmer,getFarmerContracts);

router.put('/accept/:id',authenticate,isFarmer, acceptContract);

router.put('/reject/:id',authenticate, isFarmer,rejectContract);

router.put('/withdraw/:id',authenticate, isBuyer, withdrawContract);

router.put('/complete/:id',authenticate, completeContract);

router.get('/past',authenticate, getPastContracts);

export default router;
