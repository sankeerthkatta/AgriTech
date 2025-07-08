import mongoose from 'mongoose';
const cropSchema = new mongoose.Schema({
  crop_name: { type: String, required: true },
  category: { type: String, required: true },
  variety: { type: String},
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  harvestDate: Date,
  image: String,
  quality: String,
  organic: { type: Boolean, default: false },
  location: String,
  phone: String,
  farmerName: String,
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['available','unavailable'],
    default: 'available'
  }
}, { timestamps: true });
export default mongoose.model('Crop', cropSchema);


