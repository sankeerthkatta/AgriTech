import asyncHandler from "../middlewares/asyncHandler.js";
import Wishlist from "../models/wishList.js";
// import User from "../models/user";
// import Crop from "../models/crop";
const createWishlist = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.create({
        buyer: req.user._id,
        farmer: req.body.farmerId,
        crop: req.body.cropId,
    })
    res.status(201).json(wishlist);
}
);
const getWishlist = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.find({ buyer: req.user._id })
        .populate('crop')
        .populate('farmer');
    res.status(200).json(wishlist);
});
const deleteWishlist = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.findById(req.params.id);
    if (!wishlist) {
        res.status(404);
        throw new Error('Wishlist not found');
    }
    if (wishlist.buyer.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error('Not authorized to delete this wishlist item');
    }
    await wishlist.deleteOne();
    res.status(200).json({ message: 'Wishlist item deleted successfully' });
});

export{createWishlist, getWishlist, deleteWishlist};

