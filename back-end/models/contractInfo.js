import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    crop: { type: mongoose.Schema.Types.ObjectId, ref: 'Crop', required: true },
    cropSnapshot: {
      crop_name: { type: String, required: true },
      category: { type: String, required: true },
      variety: { type: String },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      harvestDate: Date,
      image: String,
      quality: String,
      organic: { type: Boolean, default: false },
      location: String,
      phone: String,
      farmerName: String,
          },

    offeredPrice: { type: Number, },
    offeredQuantity: { type: Number, required: true },
    offerDate: { type: Date, default: Date.now },

    deliveryDate: { type: Date, required: true },
    message: { type: String, default: '' },

    status: {
      type: String,
      enum: ['pending', 'ongoing', 'completed', 'rejected'],
      default: 'pending',
    },
    buyerCompleted: { type: Boolean, default: false }, 
      farmerCompleted: { type: Boolean, default: false },
      buyerRejected: { type: Boolean, default: false },  
      farmerRejected: { type: Boolean, default: false },

  },
  { timestamps: true }
);

const Contract = mongoose.model('Contract', contractSchema);

export default Contract;
