import mongoose from "mongoose";
const wishListSchema = new mongoose.Schema({
    buyer:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    farmer:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    crop:{type: mongoose.Schema.Types.ObjectId, ref: 'Crop', required: true },
},
    { timestamps: true }
);
const WishList = mongoose.model('WishList', wishListSchema);

export default WishList;
