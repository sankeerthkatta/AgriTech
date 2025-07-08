import express from 'express';
import {createCrop,updateCrop,deleteCrop,getMyCrops,allCrops} from '../controllers/contractFarmController.js';
import authenticate  from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';

const router = express.Router();
// router.post('/',upload.single('image'), createCrop); // <-- added multer middleware
router.post('/addcrop', authenticate, upload.single('image'), createCrop);

// router.route("/addcrop").post(authenticate ,createCrop);

router.route("/updatecrop/:id").put(authenticate ,  upload.single('image'),updateCrop);
router.route("/deletecrop/:id").delete(authenticate ,deleteCrop);
router.route("/mycrops").get(authenticate, getMyCrops);
router.route("/allcrops").get(authenticate,allCrops);

export default router;