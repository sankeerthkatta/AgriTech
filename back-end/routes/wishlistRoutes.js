
import authenticate from "../middlewares/authMiddleware.js";
import express from "express";
import {createWishlist, getWishlist, deleteWishlist} from "../controllers/wishlistControllers.js";
const router = express.Router();
router.route("/").post(authenticate, createWishlist);
router.route("/getWishlist").get(authenticate, getWishlist);
router.route("/deleteWishlist/:id").delete(authenticate, deleteWishlist);

export default router;