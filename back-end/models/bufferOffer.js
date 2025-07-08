import mongoose from "mongoose";
const buyerOfferSchema = new mongoose.Schema({
    crop: { type: mongoose.Schema.Types.ObjectId, ref: 'Crop', required: true },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    offeredPrice: { type: Number }, // optional
     message: String,
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending'
    },
    createdAt: { type: Date, default: Date.now },}, { timestamps: true });
export default mongoose.model('BuyerOffer', buyerOfferSchema);
    